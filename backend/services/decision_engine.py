"""
Meteorological Decision Engine
Analyzes validated weather observations to calculate structured, safety-oriented alerts.
Follows WMO / IMD weather warning conventions without making unsupported medical claims.
"""
from typing import List, Dict, Any


class DecisionEngine:
    """Evaluates telemetry parameters and computes threshold-based weather alerts."""

    @staticmethod
    def evaluate(location_name: str, current: Dict[str, Any]) -> List[Dict[str, Any]]:
        alerts: List[Dict[str, Any]] = []

        temp = float(current.get("temperature_c", 25.0))
        humidity = int(current.get("humidity_percent", 50))
        wind_speed = float(current.get("wind_speed_kmh", 10.0))
        rain_prob = int(current.get("rain_prob", 0))
        precip_rate = float(current.get("precipitation_rate_mmh", 0.0))
        visibility = float(current.get("visibility_km", 10.0))
        uv = int(current.get("uv_index", 3))
        condition = str(current.get("condition", "")).lower()

        # 1. Heavy Rain / Convective Flash Flood Watch
        if rain_prob >= 70 or precip_rate >= 15.0 or "heavy rain" in condition or "thunder" in condition:
            alerts.append({
                "id": f"alert-rain-crit-{location_name.lower()}",
                "type": "RAIN",
                "severity": "alert",
                "category": "Severe Precipitation",
                "title": f"Heavy Rainfall & Inundation Warning — {location_name}",
                "timing": "Active now through next 3 hours",
                "message": f"Heavy localized downpours (rain probability {rain_prob}%) detected over {location_name}. High risk of waterlogging in subways and dips. Reduce vehicle speed.",
                "icon": "cloud-lightning"
            })
        elif rain_prob >= 40 or precip_rate >= 2.0 or "rain" in condition or "drizzle" in condition or "shower" in condition:
            alerts.append({
                "id": f"alert-rain-mod-{location_name.lower()}",
                "type": "RAIN",
                "severity": "warning",
                "category": "Precipitation Alert",
                "title": f"Passing Rain Bands — {location_name}",
                "timing": "Active within diurnal cycle",
                "message": f"Rain showers likely ({rain_prob}% probability) over {location_name}. Carrying an umbrella and rain protection is advised.",
                "icon": "cloud-rain"
            })

        # 2. Extreme Thermal / Heat Advisory
        if temp >= 40.0:
            alerts.append({
                "id": f"alert-heat-crit-{location_name.lower()}",
                "type": "HEAT",
                "severity": "alert",
                "category": "Extreme Heat",
                "title": f"Severe Heat Warning ({temp}°C) — {location_name}",
                "timing": "Peak intensity 11:30 AM – 4:00 PM",
                "message": f"Dangerous ambient temperature ({temp}°C) recorded. Minimize strenuous outdoor exertion and stay well-hydrated.",
                "icon": "thermometer"
            })
        elif temp >= 35.0:
            alerts.append({
                "id": f"alert-heat-mod-{location_name.lower()}",
                "type": "HEAT",
                "severity": "warning",
                "category": "Heat Advisory",
                "title": f"Elevated Temperature Advisory ({temp}°C)",
                "timing": "Midday hours",
                "message": f"Warm afternoon conditions ({temp}°C, feels like {current.get('feels_like_c', temp)}°C). Ensure regular water intake.",
                "icon": "sun"
            })

        # 3. Squall / High Wind Warning
        if wind_speed >= 50.0:
            alerts.append({
                "id": f"alert-wind-crit-{location_name.lower()}",
                "type": "WIND",
                "severity": "alert",
                "category": "High Wind Warning",
                "title": f"High Velocity Wind Gusts ({wind_speed} km/h)",
                "timing": "Next 4 hours",
                "message": f"Strong convective squalls reaching {wind_speed} km/h. Secure loose outdoor fixtures and exercise caution along exposed highways.",
                "icon": "wind"
            })
        elif wind_speed >= 35.0:
            alerts.append({
                "id": f"alert-wind-mod-{location_name.lower()}",
                "type": "WIND",
                "severity": "info",
                "category": "Breezy Conditions",
                "title": f"Fresh Atmospheric Breezes ({wind_speed} km/h)",
                "timing": "Throughout afternoon",
                "message": f"Consistent winds at {wind_speed} km/h direction {current.get('wind_direction', 'W')}.",
                "icon": "wind"
            })

        # 4. Low Visibility Advisory (Haze, Fog, Mist)
        if visibility < 2.0:
            alerts.append({
                "id": f"alert-vis-crit-{location_name.lower()}",
                "type": "VISIBILITY",
                "severity": "alert",
                "category": "Visibility Alert",
                "title": f"Dense Fog / Poor Road Visibility ({visibility} km)",
                "timing": "Pre-dawn & early morning hours",
                "message": f"Horizontal surface visibility significantly restricted to {visibility} km. Motorists should illuminate low-beam fog headlights.",
                "icon": "eye"
            })
        elif visibility < 5.0:
            alerts.append({
                "id": f"alert-vis-mod-{location_name.lower()}",
                "type": "VISIBILITY",
                "severity": "info",
                "category": "Atmospheric Haze",
                "title": f"Moderate Hazy Horizon ({visibility} km)",
                "timing": "Daytime",
                "message": f"Atmospheric particulate or boundary moisture reduces distance visibility to {visibility} km.",
                "icon": "eye"
            })

        # 5. Solar Radiation / UV Index Warning
        if uv >= 8:
            alerts.append({
                "id": f"alert-uv-crit-{location_name.lower()}",
                "type": "UV",
                "severity": "warning",
                "category": "UV Warning",
                "title": f"Very High Solar UV Index ({uv} / 16)",
                "timing": "11:00 AM – 3:30 PM",
                "message": f"Solar ultraviolet index at dangerous threshold ({uv}). Wear UV400 sunglasses and apply broad-spectrum SPF 30+ sunscreen if outdoors.",
                "icon": "sun"
            })

        # 6. Optimal Weather Conditions
        if not alerts and temp >= 20.0 and temp <= 29.0 and rain_prob < 20 and wind_speed < 25.0:
            alerts.append({
                "id": f"alert-opt-{location_name.lower()}",
                "type": "OPTIMAL",
                "severity": "info",
                "category": "Favorable Weather",
                "title": f"Prime Outdoor Conditions in {location_name}",
                "timing": "Optimal throughout the day",
                "message": f"Pleasant temperature ({temp}°C) and gentle breezes. Ideal for walking, cycling, or outdoor sports.",
                "icon": "sparkles"
            })

        return alerts


decision_engine = DecisionEngine()
