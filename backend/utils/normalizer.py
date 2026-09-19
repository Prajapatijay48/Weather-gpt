"""
Weather Data Normalizer
Normalizes raw weather telemetry into standard metric units and consistent internal format.
"""
from typing import Dict, Any, Optional

# WMO Weather interpretation codes (WMO 4677) -> (Condition string, Lucide icon)
WMO_CODE_MAP = {
    0: ("Clear Sky", "sun"),
    1: ("Mainly Clear", "sun"),
    2: ("Partly Cloudy", "cloud-sun"),
    3: ("Overcast", "cloud"),
    45: ("Foggy", "cloud"),
    48: ("Depositing Rime Fog", "cloud"),
    51: ("Light Drizzle", "cloud-drizzle"),
    53: ("Moderate Drizzle", "cloud-drizzle"),
    55: ("Dense Drizzle", "cloud-drizzle"),
    56: ("Light Freezing Drizzle", "cloud-drizzle"),
    57: ("Dense Freezing Drizzle", "cloud-drizzle"),
    61: ("Slight Rain", "cloud-rain"),
    63: ("Moderate Rain", "cloud-rain"),
    65: ("Heavy Rain", "cloud-lightning"),
    66: ("Light Freezing Rain", "cloud-rain"),
    67: ("Heavy Freezing Rain", "cloud-rain"),
    71: ("Slight Snow Fall", "cloud"),
    73: ("Moderate Snow Fall", "cloud"),
    75: ("Heavy Snow Fall", "cloud"),
    77: ("Snow Grains", "cloud"),
    80: ("Slight Rain Showers", "cloud-rain"),
    81: ("Moderate Rain Showers", "cloud-rain"),
    82: ("Violent Rain Showers", "cloud-lightning"),
    85: ("Slight Snow Showers", "cloud"),
    86: ("Heavy Snow Showers", "cloud"),
    95: ("Thunderstorm", "cloud-lightning"),
    96: ("Thunderstorm with Slight Hail", "cloud-lightning"),
    99: ("Thunderstorm with Heavy Hail", "cloud-lightning"),
}


def wmo_to_condition(wmo_code: int) -> tuple[str, str]:
    """Returns (condition_label, icon_name) for a given WMO weather code."""
    return WMO_CODE_MAP.get(wmo_code, ("Variable Weather", "cloud-sun"))


def deg_to_compass(deg: Optional[float]) -> str:
    """Converts wind direction degrees to 16-point cardinal compass string."""
    if deg is None:
        return "WSW"
    val = int((deg / 22.5) + 0.5)
    cardinals = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    return cardinals[val % 16]


def get_uv_level(uv_index: int) -> str:
    """Returns qualitative WHO UV exposure risk level."""
    if uv_index <= 2:
        return "Low"
    elif uv_index <= 5:
        return "Moderate"
    elif uv_index <= 7:
        return "High"
    elif uv_index <= 10:
        return "Very High"
    return "Extreme"


def normalize_current_weather(raw: Dict[str, Any]) -> Dict[str, Any]:
    """
    Normalizes a dictionary of raw weather metrics into standard metric format.
    Standard units:
      - temperature: °C
      - humidity: % (0-100)
      - wind_speed: km/h
      - pressure: hPa
      - visibility: km
      - rain_prob: % (0-100)
    """
    temp_c = round(float(raw.get("temperature_c", raw.get("temp", 25.0))), 1)
    feels_like = round(float(raw.get("feels_like_c", raw.get("feels_like", temp_c))), 1)
    humidity = max(0, min(100, int(round(float(raw.get("humidity_percent", raw.get("humidity", 50)))))))
    wind_speed = round(float(raw.get("wind_speed_kmh", raw.get("wind_speed", 10.0))), 1)
    pressure = int(round(float(raw.get("pressure_hpa", raw.get("pressure", 1013)))))
    visibility = round(float(raw.get("visibility_km", raw.get("visibility", 10.0))), 1)
    uv = max(0, min(16, int(round(float(raw.get("uv_index", raw.get("uv", 5)))))))
    rain_prob = max(0, min(100, int(round(float(raw.get("rain_prob", raw.get("pop", 0)))))))

    # WMO code fallback
    condition = raw.get("condition")
    icon = raw.get("icon")
    if "weather_code" in raw and (not condition or not icon):
        cond, ic = wmo_to_condition(int(raw["weather_code"]))
        condition = condition or cond
        icon = icon or ic

    return {
        "temperature_c": temp_c,
        "feels_like_c": feels_like,
        "condition": condition or "Clear",
        "icon": icon or "sun",
        "humidity_percent": humidity,
        "wind_speed_kmh": wind_speed,
        "wind_direction": raw.get("wind_direction") or deg_to_compass(raw.get("wind_direction_deg")),
        "pressure_hpa": pressure,
        "visibility_km": visibility,
        "uv_index": uv,
        "uv_level": get_uv_level(uv),
        "rain_prob": rain_prob,
        "precipitation_rate_mmh": round(float(raw.get("precipitation_rate_mmh", raw.get("precipitation", 0.0))), 1),
        "sunrise": raw.get("sunrise", "06:15 AM"),
        "sunset": raw.get("sunset", "06:45 PM"),
        "dew_point_c": round(float(raw.get("dew_point_c", temp_c - ((100 - humidity) / 5))), 1) if raw.get("dew_point_c") or humidity else None,
        "aqi": int(raw.get("aqi", 55)),
        "aqi_status": raw.get("aqi_status", "Moderate"),
        "high_c": round(float(raw.get("high_c", temp_c + 3)), 1),
        "low_c": round(float(raw.get("low_c", temp_c - 4)), 1),
        "headline": raw.get("headline", f"{condition or 'Pleasant weather'} with wind at {wind_speed} km/h")
    }
