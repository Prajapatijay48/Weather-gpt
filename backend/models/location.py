from pydantic import BaseModel, Field
from typing import Optional


class LocationModel(BaseModel):
    city: str = Field(..., description="Name of the city or metropolitan area")
    region: Optional[str] = Field(None, description="State, province or administrative region")
    country: str = Field(..., description="Country name")
    latitude: float = Field(..., description="Geographical latitude coordinate")
    longitude: float = Field(..., description="Geographical longitude coordinate")
    timezone: Optional[str] = Field("UTC", description="Local timezone string")


class LocationSummary(BaseModel):
    id: str
    name: str
    region: str
    country: str
    latitude: float
    longitude: float
    timezone: str
