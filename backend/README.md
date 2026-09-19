# Weather-GPT — FastAPI Backend & AI System

Production-grade meteorological backend providing verified weather telemetry, Decision Engine alerts, Redis caching, Supabase/PostgreSQL storage, and factual context-aware AI forecasting.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(Optionally set `OPENAI_API_KEY` for OpenAI GPT-4o-mini inference. If left empty, the system automatically uses its built-in factual heuristic weather engine without crashing).*

### 3. Run the FastAPI Server
```bash
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 --reload
```

---

## 📖 Interactive Swagger API Documentation
Once running, open:
* **Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
* **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Root information & status |
| `GET` | `/health` | System health check (DB, Redis, AI, Provider) |
| `GET` | `/api/weather?city={city}` | Real-time observation, hourly & 7-day forecast |
| `GET` | `/api/weather/{city}` | Path-based weather lookup |
| `POST` | `/api/chat` | Context-aware AI conversational assistant |
| `GET` | `/api/alerts?city={city}` | Meteorological Decision Engine alerts |
| `GET` | `/api/locations` | List of registered observation stations |

---

## 🧪 Running Automated Tests
```bash
pytest backend/tests
```
