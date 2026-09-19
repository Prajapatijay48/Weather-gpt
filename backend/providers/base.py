"""
Abstract Base Weather Provider Interface
Ensures all providers implement a uniform contract so external sources
can be switched seamlessly without changing core business logic.
"""
from abc import ABC, abstractmethod
from typing import Dict, Any, Optional, Tuple


class WeatherProvider(ABC):
    """Abstract base class for all meteorological data providers."""

    @property
    @abstractmethod
    def name(self) -> str:
        """Provider identifier."""
        pass

    @abstractmethod
    async def get_coordinates(self, city_query: str) -> Optional[Tuple[str, str, float, float, str]]:
        """
        Geocode city name to (city_name, country, latitude, longitude, timezone).
        Returns None if location cannot be resolved.
        """
        pass

    @abstractmethod
    async def fetch_weather_and_forecast(
        self, latitude: float, longitude: float, city_name: str, country: str
    ) -> Dict[str, Any]:
        """
        Fetches current weather and forecast data for coordinates.
        Returns un-normalized raw data dictionary from provider.
        """
        pass
