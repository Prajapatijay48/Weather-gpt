"""
India Meteorological Department (IMD) Provider Interface
Isolated provider stub ready for official IMD API integration (Mausam / Meghdoot / IMD Radar APIs)
when official ministry API tokens or enterprise gateways are provided.
"""
from typing import Dict, Any, Optional, Tuple
import logging
try:
    from .base import WeatherProvider
except (ImportError, ValueError):
    try:
        from backend.providers.base import WeatherProvider
    except (ImportError, ValueError):
        from base import WeatherProvider


logger = logging.getLogger(__name__)


class IMDProvider(WeatherProvider):
    """
    Architecture-ready provider for IMD (India Meteorological Department) data.
    Designed to ingest AWS (Automatic Weather Station), Doppler Radar, and district agromet advisories.
    """

    def __init__(self, api_key: Optional[str] = None, endpoint_url: Optional[str] = None):
        self.api_key = api_key
        self.endpoint_url = endpoint_url or "https://api.mausam.imd.gov.in/v1"

    @property
    def name(self) -> str:
        return "India Meteorological Department (IMD-Mausam)"

    async def get_coordinates(self, city_query: str) -> Optional[Tuple[str, str, float, float, str]]:
        """IMD Station identifier geocoding lookup."""
        logger.info(f"IMD Provider geocoding stub invoked for {city_query}.")
        # Ready for IMD station master lookup integration
        return None

    async def fetch_weather_and_forecast(
        self, latitude: float, longitude: float, city_name: str, country: str
    ) -> Dict[str, Any]:
        """
        Fetches IMD station bulletin or district nowcast.
        Raises NotImplementedError until official API credentials/contract are provisioned.
        """
        raise NotImplementedError(
            "Direct IMD Mausam API gateway requires government authorization tokens. "
            "Architecture is isolated and ready for integration via IMDProvider interface."
        )
