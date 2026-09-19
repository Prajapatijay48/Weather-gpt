from pydantic import BaseModel, Field
from typing import List, Optional
from .location import LocationModel


class AlertModel(BaseModel):
    id: Optional[str] = None
    type: str = Field(..., description="Alert category (e.g. RAIN, HEAT, WIND, VISIBILITY, UV, SEVERE)")
    severity: str = Field(..., description="Severity level: info, warning, alert, or critical")
    category: Optional[str] = None
    title: Optional[str] = None
    timing: Optional[str] = None
    message: str = Field(..., description="Descriptive meteorological advisory message")
    icon: Optional[str] = "shield-alert"


class CurrentWeatherModel(BaseModel):
    temperature_c: float = Field(..., description="Ambient temperature in Celsius")
    feels_like_c: float = Field(..., description="Perceived temperature in Celsius")
    condition: str = Field(..., description="Current atmospheric condition summary")
    icon: str = Field("cloud-sun", description="Lucide icon identifier")
    humidity_percent: int = Field(..., description="Relative humidity percentage (0-100)")
    wind_speed_kmh: float = Field(..., description="Wind speed in kilometers per hour")
    wind_direction: Optional[str] = Field("WSW", description="Wind compass direction")
    pressure_hpa: int = Field(..., description="Atmospheric pressure in hectopascals")
    visibility_km: float = Field(..., description="Horizontal visibility in kilometers")
    uv_index: int = Field(..., description="UV radiation index (0-16)")
    uv_level: Optional[str] = Field("Moderate", description="Qualitative UV exposure danger")
    rain_prob: int = Field(0, description="Precipitation probability percentage (0-100)")
    precipitation_rate_mmh: Optional[float] = Field(0.0, description="Current rainfall rate in mm/hour")
    sunrise: Optional[str] = Field("06:00 AM", description="Local sunrise time")
    sunset: Optional[str] = Field("06:30 PM", description="Local sunset time")
    dew_point_c: Optional[float] = Field(None, description="Dew point in Celsius")
    aqi: Optional[int] = Field(65, description="Air Quality Index")
    aqi_status: Optional[str] = Field("Moderate", description="Air quality health status")
    high_c: Optional[float] = None
    low_c: Optional[float] = None
    headline: Optional[str] = None


class HourlyForecastItem(BaseModel):
    time: str
    temp: float
    rain_prob: int
    icon: str
    condition: str


class DailyForecastItem(BaseModel):
    day: str
    date: str
    condition: str
    icon: str
    high: float
    low: float
    rain_prob: int
    summary: str


class WeatherResponseModel(BaseModel):
    location: LocationModel
    current: CurrentWeatherModel
    alerts: List[AlertModel] = Field(default_factory=list)
    hourly: List[HourlyForecastItem] = Field(default_factory=list)
    weekly: List[DailyForecastItem] = Field(default_factory=list)
    source: str = Field("Open-Meteo Doppler Network", description="Weather data origin source")
    cached: bool = Field(False, description="Whether payload was served from Redis/memory cache")
