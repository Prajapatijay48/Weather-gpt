import os
import sys
import pytest

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))

from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)


def test_chat_valid_question():
    payload = {
        "message": "What is the current temperature in Ahmedabad?",
        "location": "Ahmedabad",
        "conversation_history": []
    }
    response = client.post("/api/chat", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "message" in data
    assert len(data["message"]) > 5
    assert data["location"] == "Ahmedabad"
    assert data["weather_context_used"] is True


def test_chat_rain_inquiry():
    payload = {
        "message": "Will it rain in Mumbai today? Do I need an umbrella?",
        "location": "Mumbai",
        "conversation_history": []
    }
    response = client.post("/api/chat", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert data["location"] == "Mumbai"
    assert "message" in data


def test_chat_empty_message():
    payload = {
        "message": "   ",
        "location": "Ahmedabad"
    }
    response = client.post("/api/chat", json=payload)
    assert response.status_code in [400, 422]
