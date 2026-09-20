"""
Weather-GPT ASGI Application Entrypoint
Compatible with Render.com, Heroku, Docker, and Local Uvicorn execution.
Supports both:
    uvicorn backend.server:app
and:
    uvicorn server:app
"""
import sys
import os

backend_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.dirname(backend_dir)
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)
if root_dir not in sys.path:
    sys.path.insert(0, root_dir)

try:
    from backend.main import app
except (ImportError, ValueError):
    try:
        from .main import app
    except (ImportError, ValueError):
        from main import app

__all__ = ["app"]
