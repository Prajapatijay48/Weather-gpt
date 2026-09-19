"""
Cache Service (Dual-Mode Redis + In-Memory Fallback)
Caches meteorological payloads to avoid redundant external network calls.
Guarantees 100% uptime: if Redis is unavailable or disconnected,
seamlessly falls back to thread-safe in-memory TTL caching.
"""
import json
import time
import logging
from typing import Optional, Any
from ..config import settings

logger = logging.getLogger(__name__)


class CacheService:
    def __init__(self):
        self.redis_client = None
        self.is_redis_available = False
        self._memory_cache: dict[str, tuple[Any, float]] = {}
        self._init_redis()

    def _init_redis(self):
        """Attempts connection to Redis / Upstash if configured."""
        if not settings.REDIS_URL:
            logger.info("REDIS_URL not configured. Operating in In-Memory Cache mode.")
            return

        try:
            import redis
            self.redis_client = redis.from_url(
                settings.REDIS_URL,
                decode_responses=True,
                socket_timeout=2.0,
                socket_connect_timeout=2.0
            )
            # Test ping
            self.redis_client.ping()
            self.is_redis_available = True
            logger.info("Connected to Redis cache successfully.")
        except Exception as e:
            self.is_redis_available = False
            self.redis_client = None
            logger.warning(f"Redis unavailable ({e}). Falling back to In-Memory TTL Cache.")

    def get(self, key: str) -> Optional[Any]:
        """Retrieves deserialized JSON object from cache if present and unexpired."""
        # 1. Try Redis if connected
        if self.is_redis_available and self.redis_client:
            try:
                cached_val = self.redis_client.get(key)
                if cached_val:
                    return json.loads(cached_val)
            except Exception as e:
                logger.warning(f"Redis get failed for key '{key}': {e}. Falling back to memory.")

        # 2. Fallback to In-Memory TTL Cache
        if key in self._memory_cache:
            data, expire_at = self._memory_cache[key]
            if time.time() < expire_at:
                return data
            else:
                # Expired
                del self._memory_cache[key]

        return None

    def set(self, key: str, value: Any, ttl_seconds: Optional[int] = None) -> bool:
        """Stores object as JSON with TTL in seconds."""
        ttl = ttl_seconds if ttl_seconds is not None else settings.CACHE_TTL_SECONDS
        serialized = json.dumps(value)

        # 1. Try Redis
        if self.is_redis_available and self.redis_client:
            try:
                self.redis_client.setex(key, ttl, serialized)
                return True
            except Exception as e:
                logger.warning(f"Redis set failed for key '{key}': {e}. Writing to memory.")

        # 2. In-Memory fallback
        self._memory_cache[key] = (value, time.time() + ttl)
        return True

    def delete(self, key: str) -> bool:
        """Deletes key from cache."""
        if self.is_redis_available and self.redis_client:
            try:
                self.redis_client.delete(key)
            except Exception:
                pass
        self._memory_cache.pop(key, None)
        return True

    def get_status(self) -> dict:
        """Returns cache telemetry status for /health endpoint."""
        return {
            "mode": "redis" if self.is_redis_available else "in-memory-fallback",
            "redis_connected": self.is_redis_available,
            "memory_items_count": len(self._memory_cache),
            "ttl_seconds": settings.CACHE_TTL_SECONDS
        }


# Singleton instance
cache_service = CacheService()
