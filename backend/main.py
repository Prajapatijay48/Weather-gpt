"""
Weather-GPT — Main FastAPI Backend Application
"""
import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError

from .config import settings
from .routes import weather_router, chat_router, alerts_router, locations_router
from .services import cache_service, database_service

# Configure Structured Logging
logging.basicConfig(
    level=logging.INFO if settings.DEBUG else logging.WARNING,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("weather_gpt")


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application startup and shutdown orchestration."""
    logger.info("Initializing Weather-GPT Backend Services...")
    # Database and Cache services are initialized on singleton import
    db_status = database_service.get_status()
    cache_status = cache_service.get_status()
    logger.info(f"Database status: {db_status['type']} ({db_status['status']})")
    logger.info(f"Cache status: {cache_status['mode']}")
    yield
    logger.info("Shutting down Weather-GPT Backend Services...")


app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Production-grade AI Meteorological Station & Decision Engine backend for Weather-GPT.",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# CORS Configuration
cors_origins = list(settings.cors_origins_list)
if "null" not in cors_origins:
    cors_origins.append("null")

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins or ["*"],
    allow_origin_regex=r"^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Global Exception Handlers (Clean JSON, zero stack trace leak)
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    errors = []
    for err in exc.errors():
        field = " -> ".join([str(loc) for loc in err.get("loc", [])])
        errors.append(f"{field}: {err.get('msg', 'Invalid input')}")
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "success": False,
            "error": "Validation Error",
            "details": errors
        }
    )


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled exception on {request.method} {request.url.path}: {exc}", exc_info=settings.DEBUG)
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "success": False,
            "error": "Internal Server Error",
            "message": "A meteorological service exception occurred. Please check endpoint parameters or try again later."
        }
    )


# Root Endpoint
@app.get(
    "/",
    tags=["Root"],
    summary="Root API Info",
    description="Returns API status, version, and quick link to interactive Swagger documentation."
)
async def root():
    return {
        "project": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "status": "online",
        "documentation": "/docs",
        "endpoints": {
            "health": "/health",
            "weather": "/api/weather?city={name}",
            "chat": "/api/chat",
            "alerts": "/api/alerts?city={name}",
            "locations": "/api/locations"
        }
    }


# Health Check Endpoint
@app.get(
    "/health",
    tags=["Health"],
    summary="System Health Check",
    description="Monitors live operational health of Database, Redis Cache, AI engine, and Weather Provider."
)
async def health():
    db_stat = database_service.get_status()
    cache_stat = cache_service.get_status()
    ai_stat = "active (OpenAI)" if settings.OPENAI_API_KEY else "active (Heuristic Fallback)"

    return {
        "status": "healthy",
        "version": settings.VERSION,
        "environment": settings.ENVIRONMENT,
        "database": db_stat,
        "cache": cache_stat,
        "ai_engine": ai_stat,
        "weather_provider": "Open-Meteo Doppler Network (WMO)"
    }


# Register Route Routers
app.include_router(weather_router)
app.include_router(chat_router)
app.include_router(alerts_router)
app.include_router(locations_router)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host=settings.HOST, port=settings.PORT, reload=settings.DEBUG)
