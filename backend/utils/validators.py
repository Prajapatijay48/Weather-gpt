"""
Weather Data Validators
Validates meteorological sensor readings within realistic scientific boundaries.
Rejects physically impossible or corrupt values.
"""
from typing import Dict, Any, Tuple, Optional
import logging

logger = logging.getLogger(__name__)

# Realistic terrestrial meteorological limits
BOUNDS = {
    "temperature_c": (-89.2, 60.0),      # Earth record min -89.2°C (Antarctica), max 56.7°C (Death Valley)
    "humidity_percent": (0.0, 100.0),    # Relative humidity %
    "wind_speed_kmh": (0.0, 410.0),      # Max non-tornado gust recorded 408 km/h
    "rain_prob": (0.0, 100.0),           # Probability %
    "pressure_hpa": (850.0, 1090.0),     # Terrestrial barometric range
    "visibility_km": (0.0, 100.0),       # Clear atmosphere visibility limit
    "uv_index": (0.0, 20.0),             # Global solar UV index max ~16-20 high altitude
    "latitude": (-90.0, 90.0),
    "longitude": (-180.0, 180.0),
}


def validate_range(metric_name: str, value: Optional[float]) -> Tuple[bool, Optional[str]]:
    """
    Check if a numeric metric is within physically plausible limits.
    Returns (is_valid, error_message).
    """
    if value is None:
        return True, None

    if metric_name not in BOUNDS:
        return True, None

    min_val, max_val = BOUNDS[metric_name]
    try:
        val_float = float(value)
        if not (min_val <= val_float <= max_val):
            return False, f"Value {val_float} for '{metric_name}' is outside plausible range [{min_val}, {max_val}]."
        return True, None
    except (ValueError, TypeError):
        return False, f"Value '{value}' for '{metric_name}' could not be converted to float."


def validate_weather_payload(payload: Dict[str, Any]) -> Tuple[bool, Dict[str, str]]:
    """
    Validates all critical weather parameters in a dictionary.
    Returns (is_valid, dict_of_errors).
    """
    errors = {}

    current = payload.get("current", payload)
    for metric in ["temperature_c", "humidity_percent", "wind_speed_kmh", "rain_prob", "pressure_hpa", "visibility_km", "uv_index"]:
        if metric in current and current[metric] is not None:
            is_valid, err = validate_range(metric, current[metric])
            if not is_valid:
                errors[metric] = err
                logger.warning(f"Validation failure: {err}")

    location = payload.get("location", {})
    if "latitude" in location and location["latitude"] is not None:
        is_valid, err = validate_range("latitude", location["latitude"])
        if not is_valid:
            errors["latitude"] = err

    if "longitude" in location and location["longitude"] is not None:
        is_valid, err = validate_range("longitude", location["longitude"])
        if not is_valid:
            errors["longitude"] = err

    return (len(errors) == 0, errors)
