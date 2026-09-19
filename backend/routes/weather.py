"""
Weather API Endpoints
Provides real-time observations, 24-hour horizon, and 7-day forecasts.
Supports both query parameter (?city=...) and path parameter (/{city}).
"""
from fastapi import APIRouter, HTTPException, Query, Path
from typing import Optional
from ..models import WeatherResponseModel
from ..services import weather_service

router = APIRouter(prefix="/api/weather", tags=["Weather"])


@router.get(
    "",
    response_model=WeatherResponseModel,
    summary="Get Current Weather & Forecast via Query Parameter",
    description="Retrieves live validated weather observations, 24-hour hourly trajectory, and 7-day outlook for a city."
)
async def get_weather_query(
    city: str = Query("Ahmedabad", description="City name (e.g. Ahmedabad, Mumbai, London, Dubai)"),
    refresh: bool = Query(False, description="Force refresh bypassing Redis/memory cache")
):
    result = await weather_service.get_weather_for_city(city, force_refresh=refresh)
    if not result:
        raise HTTPException(
            status_code=404,
            detail=f"Weather data for location '{city}' could not be resolved or found."
        )
    return result


@router.get(
    "/{city}",
    response_model=WeatherResponseModel,
    summary="Get Current Weather & Forecast via Path Parameter",
    description="Retrieves live validated weather observations, 24-hour hourly trajectory, and 7-day outlook by city path."
)
async def get_weather_path(
    city: str = Path(..., description="Target city name"),
    refresh: bool = Query(False, description="Force refresh bypassing cache")
):
    result = await weather_service.get_weather_for_city(city, force_refresh=refresh)
    if not result:
        raise HTTPException(
            status_code=404,
            detail=f"Weather data for location '{city}' could not be resolved or found."
        )
    return result
