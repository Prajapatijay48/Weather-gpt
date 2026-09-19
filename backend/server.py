"""
Weather-GPT ASGI Application Entrypoint
Exports the FastAPI 'app' instance so that running:
    python -m uvicorn backend.server:app --reload
or:
    python -m uvicorn backend.main:app --reload
both work seamlessly without any module import error.
"""
from .main import app

__all__ = ["app"]
