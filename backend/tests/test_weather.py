import os
import sys
import pytest

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))

from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)


def test_get_weather_query_param():
    response = client.get("/api/weather?city=Ahmedabad")
    assert response.status_code == 200
    data = response.json()
    assert "location" in data
    assert data["location"]["city"] == "Ahmedabad"
    assert "current" in data
    assert "temperature_c" in data["current"]
    assert "humidity_percent" in data["current"]
    assert 0 <= data["current"]["humidity_percent"] <= 100
    assert "hourly" in data
    assert len(data["hourly"]) > 0
    assert "weekly" in data
    assert len(data["weekly"]) > 0


def test_get_weather_path_param():
    response = client.get("/api/weather/Mumbai")
    assert response.status_code == 200
    data = response.json()
    assert data["location"]["city"] == "Mumbai"
    assert "current" in data


def test_get_alerts_endpoint():
    response = client.get("/api/alerts?city=Ahmedabad")
    assert response.status_code == 200
    alerts = response.json()
    assert isinstance(alerts, list)


def test_get_locations_endpoint():
    response = client.get("/api/locations")
    assert response.status_code == 200
    locations = response.json()
    assert isinstance(locations, list)
    assert len(locations) > 0
    city_names = [loc["city"] for loc in locations]
    assert "Ahmedabad" in city_names
    assert "Mumbai" in city_names


def test_weather_unknown_city():
    response = client.get("/api/weather/NonExistentCityXYZ99999")
    assert response.status_code in [404, 200]
