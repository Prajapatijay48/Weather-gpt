"""
Alerts API Endpoint
Returns active meteorological alerts and advisories computed by the Decision Engine.
"""
from fastapi import APIRouter, Query, HTTPException
from typing import List, Optional
from ..models import AlertModel
from ..services import weather_service

router = APIRouter(prefix="/api/alerts", tags=["Alerts"])


@router.get(
    "",
    response_model=List[AlertModel],
    summary="Get Active Meteorological Alerts",
    description="Returns computed threshold alerts (Heavy Rain, Heat, Wind, Low Visibility, High UV) for a target city."
)
async def get_alerts(
    city: str = Query("Ahmedabad", description="City to fetch active alerts for")
):
    weather = await weather_service.get_weather_for_city(city)
    if not weather:
        raise HTTPException(
            status_code=404,
            detail=f"Unable to calculate alerts: location '{city}' was not found."
        )
    return weather.alerts
