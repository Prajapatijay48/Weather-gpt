"""
Locations API Endpoint
Returns registered weather observation stations and coordinates for Leaflet map & search.
"""
from fastapi import APIRouter
from typing import List, Dict, Any
from ..services import database_service

router = APIRouter(prefix="/api/locations", tags=["Locations"])


@router.get(
    "",
    response_model=List[Dict[str, Any]],
    summary="List Registered Weather Stations",
    description="Returns pre-seeded and dynamically tracked geographical weather stations for mapping and autocomplete."
)
async def get_locations():
    locations = database_service.get_locations()
    return locations
