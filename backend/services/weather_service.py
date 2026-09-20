"""
Weather Service Orchestrator
Coordinates geocoding, external provider requests, validation, normalization,
decision engine alerts, database persistence, and Redis caching.
"""
from typing import Optional, Dict, Any, List
import logging
from datetime import datetime, timezone

try:
    from backend.providers import WeatherProvider, OpenMeteoProvider
    from backend.utils import validate_weather_payload, normalize_current_weather, wmo_to_condition
    from backend.models import (
        LocationModel,
        CurrentWeatherModel,
        HourlyForecastItem,
        DailyForecastItem,
        AlertModel,
        WeatherResponseModel,
    )
    from backend.services.cache_service import cache_service
    from backend.services.database_service import database_service
    from backend.services.decision_engine import decision_engine
except (ImportError, ValueError):
    try:
        from ..providers import WeatherProvider, OpenMeteoProvider
        from ..utils import validate_weather_payload, normalize_current_weather, wmo_to_condition
        from ..models import (
            LocationModel,
            CurrentWeatherModel,
            HourlyForecastItem,
            DailyForecastItem,
            AlertModel,
            WeatherResponseModel,
        )
        from .cache_service import cache_service
        from .database_service import database_service
        from .decision_engine import decision_engine
    except (ImportError, ValueError):
        from providers import WeatherProvider, OpenMeteoProvider
        from utils import validate_weather_payload, normalize_current_weather, wmo_to_condition
        from models import (
            LocationModel,
            CurrentWeatherModel,
            HourlyForecastItem,
            DailyForecastItem,
            AlertModel,
            WeatherResponseModel,
        )
        try:
            from services.cache_service import cache_service
            from services.database_service import database_service
            from services.decision_engine import decision_engine
        except (ImportError, ValueError):
            from cache_service import cache_service
            from database_service import database_service
            from decision_engine import decision_engine


logger = logging.getLogger(__name__)


class WeatherService:
    def __init__(self, provider: Optional[WeatherProvider] = None):
        self.provider: WeatherProvider = provider or OpenMeteoProvider()

    async def get_weather_for_city(self, city_name: str, force_refresh: bool = False) -> Optional[WeatherResponseModel]:
        """
        Main pipeline for retrieving, validating, normalizing and caching weather.
        """
        clean_city = city_name.strip()
        cache_key = f"weather:{clean_city.lower()}"

        # 1. Check Cache unless force_refresh is requested
        if not force_refresh:
            cached_data = cache_service.get(cache_key)
            if cached_data:
                cached_data["cached"] = True
                try:
                    return WeatherResponseModel(**cached_data)
                except Exception as e:
                    logger.warning(f"Cache deserialization failed for {clean_city}: {e}")

        # 2. Geocode City Coordinates
        geo = await self.provider.get_coordinates(clean_city)
        if not geo:
            logger.warning(f"Unable to resolve geocoding coordinates for '{clean_city}'")
            return None

        resolved_city, country, lat, lon, tz_str = geo

        # 3. Fetch Raw Data from Weather Provider
        raw_data = await self.provider.fetch_weather_and_forecast(lat, lon, resolved_city, country)

        # 4. Normalize Current Weather
        current_raw = raw_data.get("current", {})
        normalized_current = normalize_current_weather(current_raw)

        # 5. Validate Normalized Weather Data
        is_valid, validation_errors = validate_weather_payload({"current": normalized_current, "location": {"latitude": lat, "longitude": lon}})
        if not is_valid:
            logger.error(f"Weather validation rejected raw data for {resolved_city}: {validation_errors}")
            # Fallback sane defaults for rejected invalid fields

        # 6. Parse Hourly Forecast (Next 24 Hours)
        hourly_items: List[HourlyForecastItem] = []
        raw_hourly = raw_data.get("hourly", {})
        hourly_times = raw_hourly.get("time", [])
        hourly_temps = raw_hourly.get("temperature_2m", [])
        hourly_pops = raw_hourly.get("precipitation_probability", [])
        hourly_codes = raw_hourly.get("weather_code", [])

        now_hour = datetime.now(timezone.utc).hour
        count = min(24, len(hourly_times))
        for i in range(count):
            try:
                t_str = hourly_times[i]
                # Format to 12-hour AM/PM string (e.g. "02 PM")
                hour_num = int(t_str.split("T")[-1].split(":")[0]) if "T" in t_str else (now_hour + i) % 24
                am_pm = "AM" if hour_num < 12 else "PM"
                disp_hour = hour_num % 12
                if disp_hour == 0:
                    disp_hour = 12
                formatted_time = f"{disp_hour:02d} {am_pm}"

                wmo_c = int(hourly_codes[i]) if i < len(hourly_codes) else 2
                cond, icon = wmo_to_condition(wmo_c)

                hourly_items.append(
                    HourlyForecastItem(
                        time=formatted_time,
                        temp=round(float(hourly_temps[i]), 1) if i < len(hourly_temps) else 25.0,
                        rain_prob=int(hourly_pops[i]) if i < len(hourly_pops) else 0,
                        icon=icon,
                        condition=cond
                    )
                )
            except Exception as e:
                logger.warning(f"Error parsing hourly index {i}: {e}")

        # 7. Parse Daily 7-Day Forecast
        weekly_items: List[DailyForecastItem] = []
        raw_daily = raw_data.get("daily", {})
        daily_times = raw_daily.get("time", [])
        daily_max = raw_daily.get("temperature_2m_max", [])
        daily_min = raw_daily.get("temperature_2m_min", [])
        daily_pops = raw_daily.get("precipitation_probability_max", [])
        daily_codes = raw_daily.get("weather_code", [])

        day_labels = ["Today", "Tomorrow", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"]
        for j in range(min(7, len(daily_times))):
            try:
                date_str = daily_times[j]
                day_label = day_labels[j] if j < len(day_labels) else f"Day {j+1}"
                try:
                    dt = datetime.strptime(date_str, "%Y-%m-%d")
                    formatted_date = dt.strftime("%a, %b %d")
                except Exception:
                    formatted_date = date_str

                wmo_c = int(daily_codes[j]) if j < len(daily_codes) else 2
                cond, icon = wmo_to_condition(wmo_c)
                high_val = round(float(daily_max[j]), 1) if j < len(daily_max) else normalized_current["temperature_c"] + 3
                low_val = round(float(daily_min[j]), 1) if j < len(daily_min) else normalized_current["temperature_c"] - 4
                pop_val = int(daily_pops[j]) if j < len(daily_pops) else normalized_current["rain_prob"]

                weekly_items.append(
                    DailyForecastItem(
                        day=day_label,
                        date=formatted_date,
                        condition=cond,
                        icon=icon,
                        high=high_val,
                        low=low_val,
                        rain_prob=pop_val,
                        summary=f"{cond} with high of {high_val}°C and {pop_val}% rain probability."
                    )
                )
            except Exception as e:
                logger.warning(f"Error parsing daily index {j}: {e}")

        # Update high/low on current from first daily item if available
        if weekly_items:
            normalized_current["high_c"] = weekly_items[0].high
            normalized_current["low_c"] = weekly_items[0].low

        # 8. Compute Decision Engine Meteorological Alerts
        calculated_alerts = decision_engine.evaluate(resolved_city, normalized_current)
        alert_models = [AlertModel(**a) for a in calculated_alerts]

        # 9. Construct Final Normalized Response Object
        location_model = LocationModel(
            city=resolved_city,
            region="",
            country=country,
            latitude=lat,
            longitude=lon,
            timezone=tz_str
        )
        current_model = CurrentWeatherModel(**normalized_current)

        response = WeatherResponseModel(
            location=location_model,
            current=current_model,
            alerts=alert_models,
            hourly=hourly_items,
            weekly=weekly_items,
            source=self.provider.name,
            cached=False
        )

        # 10. Persist Snapshot to Database asynchronously
        try:
            database_service.save_weather_record(resolved_city, normalized_current)
            for alert in calculated_alerts:
                database_service.save_alert(resolved_city, alert["type"], alert["severity"], alert["message"])
        except Exception as e:
            logger.warning(f"Database recording error: {e}")

        # 11. Save in Cache
        cache_service.set(cache_key, response.model_dump(), ttl_seconds=900)

        return response


weather_service = WeatherService()
