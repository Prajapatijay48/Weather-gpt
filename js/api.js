/**
 * Weather-GPT — Backend API Client & Data Normalizer
 * Connects frontend React components to FastAPI backend at http://127.0.0.1:8000
 */
(function () {
  const API_BASE_URL = "http://127.0.0.1:8000";

  window.WeatherAPI = {
    baseUrl: API_BASE_URL,
    isOnline: false,

    /**
     * Check live health status of backend
     */
    async checkHealth() {
      try {
        const response = await fetch(`${API_BASE_URL}/health`, {
          method: "GET",
          headers: { Accept: "application/json" }
        });
        if (response.ok) {
          const data = await response.json();
          this.isOnline = true;
          return data;
        }
      } catch (err) {
        this.isOnline = false;
        console.warn("Weather-GPT: Backend is offline, using client fallback engine.", err.message);
      }
      return null;
    },

    /**
     * Fetch registered observation locations
     */
    async getLocations() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/locations`, {
          method: "GET",
          headers: { Accept: "application/json" }
        });
        if (response.ok) {
          const locations = await response.json();
          this.isOnline = true;
          return locations;
        }
      } catch (err) {
        console.warn("Weather-GPT: Unable to fetch locations from backend:", err.message);
      }
      return null;
    },

    /**
     * Fetch verified weather telemetry for a given city
     */
    async getWeather(cityName) {
      if (!cityName || !cityName.trim()) return null;
      try {
        const url = `${API_BASE_URL}/api/weather?city=${encodeURIComponent(cityName.trim())}`;
        const response = await fetch(url, {
          method: "GET",
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          const raw = await response.json();
          this.isOnline = true;
          return this.adaptBackendWeatherToCity(raw);
        } else {
          console.warn(`Weather-GPT: /api/weather returned status ${response.status} for '${cityName}'`);
        }
      } catch (err) {
        console.warn(`Weather-GPT: Network error fetching weather for '${cityName}':`, err.message);
      }
      return null;
    },

    /**
     * Submit question to context-aware WeatherGPT AI
     */
    async askChat(message, location, conversationHistory = []) {
      if (!message || !message.trim()) {
        throw new Error("User message cannot be blank.");
      }

      const historyPayload = (conversationHistory || []).slice(-6).map((m) => ({
        role: m.role || (m.sender === "user" ? "user" : "assistant"),
        content: m.content || m.text || ""
      }));

      const payload = {
        message: message.trim(),
        location: location || "Ahmedabad",
        conversation_history: historyPayload
      };

      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || `Chat AI responded with status ${response.status}`);
      }

      this.isOnline = true;
      return data;
    },

    /**
     * Adapts FastAPI WeatherResponseModel to the schema expected by existing frontend React components
     */
    adaptBackendWeatherToCity(backendData) {
      if (!backendData || !backendData.location || !backendData.current) {
        return null;
      }

      const loc = backendData.location;
      const curr = backendData.current;

      const cityName = loc.city || "Unknown City";
      const id = cityName.toLowerCase().replace(/\s+/g, "-");

      const tempVal = Math.round(Number(curr.temperature_c) || 0);
      const feelsVal = Math.round(Number(curr.feels_like_c) || tempVal);
      const highVal = Math.round(Number(curr.high_c ?? (tempVal + 3)));
      const lowVal = Math.round(Number(curr.low_c ?? (tempVal - 4)));

      return {
        id: id,
        name: cityName,
        region: loc.region || cityName,
        country: loc.country || "India",
        coords: [Number(loc.latitude) || 23.0225, Number(loc.longitude) || 72.5714],
        timezone: loc.timezone || "IST (UTC+5:30)",
        source: backendData.source || "FastAPI Telemetry Network",
        cached: backendData.cached || false,
        isLiveBackend: true,
        current: {
          temp: tempVal,
          feelsLike: feelsVal,
          condition: curr.condition || "Clear",
          icon: curr.icon || "sun",
          high: highVal,
          low: lowVal,
          humidity: Number(curr.humidity_percent) || 50,
          windSpeed: Math.round(Number(curr.wind_speed_kmh) || 10),
          windDirection: curr.wind_direction || "WSW",
          visibility: Number(curr.visibility_km) || 10.0,
          pressure: Number(curr.pressure_hpa) || 1013,
          uvIndex: Number(curr.uv_index) || 5,
          uvLevel: curr.uv_level || "Moderate",
          rainProb: Number(curr.rain_prob) || 0,
          precipitationRate: Number(curr.precipitation_rate_mmh) || 0.0,
          sunrise: curr.sunrise || "06:15 AM",
          sunset: curr.sunset || "06:45 PM",
          dewPoint: Math.round(Number(curr.dew_point_c) || (tempVal - 5)),
          aqi: Number(curr.aqi) || 55,
          aqiStatus: curr.aqi_status || "Moderate",
          updatedAt: "Just now",
          headline: curr.headline || `${curr.condition || 'Clear'} with winds at ${Math.round(curr.wind_speed_kmh || 10)} km/h`
        },
        alerts: (backendData.alerts || []).map((a) => ({
          id: a.id || `alert-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          severity: a.severity || "info",
          category: a.category || "Meteorological Advisory",
          title: a.title || "Atmospheric Advisory",
          timing: a.timing || "Active horizon",
          description: a.message || a.description || "Advisory details in effect.",
          message: a.message || a.description || "Advisory details in effect.",
          icon: a.icon || "alert-circle"
        })),
        hourly: (backendData.hourly || []).map((h) => ({
          time: h.time,
          temp: Math.round(Number(h.temp) || tempVal),
          rainProb: Number(h.rain_prob) || 0,
          pop: Number(h.rain_prob) || 0,
          icon: h.icon || "sun",
          condition: h.condition || "Clear"
        })),
        weekly: (backendData.weekly || []).map((w) => ({
          day: w.day,
          date: w.date,
          condition: w.condition,
          icon: w.icon || "sun",
          high: Math.round(Number(w.high) || highVal),
          low: Math.round(Number(w.low) || lowVal),
          rainProb: Number(w.rain_prob) || 0,
          summary: w.summary || `${w.condition} with high of ${Math.round(w.high)}°C.`
        }))
      };
    }
  };
})();
