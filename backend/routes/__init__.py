from .weather import router as weather_router
from .chat import router as chat_router
from .alerts import router as alerts_router
from .locations import router as locations_router

__all__ = ["weather_router", "chat_router", "alerts_router", "locations_router"]
