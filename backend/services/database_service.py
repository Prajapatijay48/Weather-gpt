"""
Database Service (PostgreSQL / Supabase with SQLite Fallback)
Manages persistence for locations, weather records, alerts, and chat logs.
Guarantees zero crashes: falls back automatically to local SQLite if PostgreSQL is unreachable.
"""
import os
import logging
from datetime import datetime, timezone
from typing import List, Optional, Dict, Any

from sqlalchemy import (
    create_engine,
    Column,
    Integer,
    String,
    Float,
    DateTime,
    Text,
)
from sqlalchemy.orm import declarative_base, sessionmaker, Session
try:
    from backend.config import settings
except (ImportError, ValueError):
    try:
        from ..config import settings
    except (ImportError, ValueError):
        from config import settings


logger = logging.getLogger(__name__)
Base = declarative_base()


def utc_now():
    return datetime.now(timezone.utc)


class LocationRecord(Base):
    __tablename__ = "locations"

    id = Column(Integer, primary_key=True, autoincrement=True)
    city = Column(String(100), unique=True, index=True, nullable=False)
    region = Column(String(100), nullable=True)
    country = Column(String(100), nullable=False)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    timezone = Column(String(50), default="UTC")
    created_at = Column(DateTime, default=utc_now)


class WeatherRecord(Base):
    __tablename__ = "weather_records"

    id = Column(Integer, primary_key=True, autoincrement=True)
    location = Column(String(100), index=True, nullable=False)
    temperature_c = Column(Float, nullable=False)
    feels_like_c = Column(Float, nullable=True)
    humidity_percent = Column(Integer, nullable=False)
    wind_speed_kmh = Column(Float, nullable=False)
    condition = Column(String(100), nullable=False)
    rain_prob = Column(Integer, default=0)
    pressure_hpa = Column(Integer, nullable=True)
    visibility_km = Column(Float, nullable=True)
    uv_index = Column(Integer, nullable=True)
    timestamp = Column(DateTime, default=utc_now, index=True)


class AlertRecord(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, autoincrement=True)
    location = Column(String(100), index=True, nullable=False)
    alert_type = Column(String(50), nullable=False)
    severity = Column(String(50), nullable=False)
    message = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=utc_now, index=True)


class ChatLog(Base):
    __tablename__ = "chat_logs"

    id = Column(Integer, primary_key=True, autoincrement=True)
    session_id = Column(String(100), index=True, nullable=True)
    location = Column(String(100), nullable=True)
    user_message = Column(Text, nullable=False)
    ai_response = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=utc_now)


class DatabaseService:
    def __init__(self):
        self.engine = None
        self.SessionLocal = None
        self.db_type = "none"
        self._init_db()

    def _init_db(self):
        """Initializes database engine with PostgreSQL or SQLite fallback."""
        db_url = settings.DATABASE_URL.strip() if settings.DATABASE_URL else ""

        # Attempt PostgreSQL / Supabase if specified
        if db_url:
            try:
                # Handle postgres:// vs postgresql://
                if db_url.startswith("postgres://"):
                    db_url = db_url.replace("postgres://", "postgresql://", 1)
                engine = create_engine(db_url, pool_pre_ping=True)
                # Test connection
                with engine.connect():
                    pass
                self.engine = engine
                self.SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)
                self.db_type = "postgresql"
                Base.metadata.create_all(bind=self.engine)
                logger.info("Connected to PostgreSQL/Supabase database successfully.")
                self.seed_default_locations()
                return
            except Exception as e:
                logger.warning(f"PostgreSQL connection failed ({e}). Falling back to local SQLite.")

        # Fallback to local SQLite database in dedicated data directory
        try:
            backend_dir = os.path.dirname(os.path.dirname(__file__))
            data_dir = os.path.join(backend_dir, "data")
            os.makedirs(data_dir, exist_ok=True)
            sqlite_path = os.path.join(data_dir, "weather_gpt.db")
            old_path = os.path.join(backend_dir, "weather_gpt.db")
            if os.path.exists(old_path) and not os.path.exists(sqlite_path):
                try:
                    import shutil
                    shutil.copy2(old_path, sqlite_path)
                except Exception:
                    pass
            sqlite_url = f"sqlite:///{sqlite_path}"
            self.engine = create_engine(sqlite_url, connect_args={"check_same_thread": False})
            self.SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)
            self.db_type = "sqlite"
            Base.metadata.create_all(bind=self.engine)
            logger.info(f"SQLite database initialized at: {sqlite_path}")
            self.seed_default_locations()
        except Exception as e:
            logger.error(f"Failed to initialize SQLite database: {e}")
            self.db_type = "in-memory-fallback"

    def seed_default_locations(self):
        """Pre-seeds standard meteorological station locations."""
        if not self.SessionLocal:
            return

        default_stations = [
            {"city": "Ahmedabad", "region": "Gujarat", "country": "India", "latitude": 23.0225, "longitude": 72.5714, "timezone": "IST (UTC+5:30)"},
            {"city": "Mumbai", "region": "Maharashtra", "country": "India", "latitude": 19.0760, "longitude": 72.8777, "timezone": "IST (UTC+5:30)"},
            {"city": "Delhi", "region": "NCR", "country": "India", "latitude": 28.6139, "longitude": 77.2090, "timezone": "IST (UTC+5:30)"},
            {"city": "Bengaluru", "region": "Karnataka", "country": "India", "latitude": 12.9716, "longitude": 77.5946, "timezone": "IST (UTC+5:30)"},
            {"city": "Dubai", "region": "Dubai", "country": "United Arab Emirates", "latitude": 25.2048, "longitude": 55.2708, "timezone": "GST (UTC+4:00)"},
            {"city": "London", "region": "Greater London", "country": "United Kingdom", "latitude": 51.5074, "longitude": -0.1278, "timezone": "BST (UTC+1:00)"},
            {"city": "New York", "region": "New York", "country": "United States", "latitude": 40.7128, "longitude": -74.0060, "timezone": "EDT (UTC-4:00)"},
            {"city": "Tokyo", "region": "Kanto", "country": "Japan", "latitude": 35.6762, "longitude": 139.6503, "timezone": "JST (UTC+9:00)"},
        ]

        try:
            with self.SessionLocal() as session:
                for station in default_stations:
                    existing = session.query(LocationRecord).filter_by(city=station["city"]).first()
                    if not existing:
                        session.add(LocationRecord(**station))
                session.commit()
        except Exception as e:
            logger.warning(f"Error seeding default locations: {e}")

    def get_locations(self) -> List[Dict[str, Any]]:
        """Returns all registered station locations."""
        if not self.SessionLocal:
            return []
        try:
            with self.SessionLocal() as session:
                records = session.query(LocationRecord).all()
                return [
                    {
                        "id": str(r.id),
                        "city": r.city,
                        "region": r.region or "",
                        "country": r.country,
                        "latitude": r.latitude,
                        "longitude": r.longitude,
                        "timezone": r.timezone
                    }
                    for r in records
                ]
        except Exception as e:
            logger.error(f"Error getting locations: {e}")
            return []

    def save_weather_record(self, location_name: str, current_data: Dict[str, Any]) -> bool:
        """Stores a snapshot of validated weather telemetry."""
        if not self.SessionLocal:
            return False
        try:
            with self.SessionLocal() as session:
                record = WeatherRecord(
                    location=location_name,
                    temperature_c=current_data.get("temperature_c", 0.0),
                    feels_like_c=current_data.get("feels_like_c"),
                    humidity_percent=current_data.get("humidity_percent", 0),
                    wind_speed_kmh=current_data.get("wind_speed_kmh", 0.0),
                    condition=current_data.get("condition", "Clear"),
                    rain_prob=current_data.get("rain_prob", 0),
                    pressure_hpa=current_data.get("pressure_hpa"),
                    visibility_km=current_data.get("visibility_km"),
                    uv_index=current_data.get("uv_index"),
                )
                session.add(record)
                session.commit()
                return True
        except Exception as e:
            logger.error(f"Error saving weather record: {e}")
            return False

    def save_alert(self, location_name: str, alert_type: str, severity: str, message: str) -> bool:
        """Stores an alert generated by decision engine."""
        if not self.SessionLocal:
            return False
        try:
            with self.SessionLocal() as session:
                alert = AlertRecord(
                    location=location_name,
                    alert_type=alert_type,
                    severity=severity,
                    message=message
                )
                session.add(alert)
                session.commit()
                return True
        except Exception as e:
            logger.error(f"Error saving alert: {e}")
            return False

    def save_chat_log(self, session_id: Optional[str], user_msg: str, ai_msg: str, location: Optional[str]) -> bool:
        """Stores conversation turn for auditability."""
        if not self.SessionLocal:
            return False
        try:
            with self.SessionLocal() as session:
                log = ChatLog(
                    session_id=session_id or "default-session",
                    location=location or "Ahmedabad",
                    user_message=user_msg,
                    ai_response=ai_msg
                )
                session.add(log)
                session.commit()
                return True
        except Exception as e:
            logger.error(f"Error saving chat log: {e}")
            return False

    def get_status(self) -> dict:
        return {
            "status": "connected" if self.SessionLocal else "offline",
            "type": self.db_type,
            "supabase_ready": bool(settings.DATABASE_URL)
        }


# Singleton instance
database_service = DatabaseService()
