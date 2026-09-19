/**
 * Weather-GPT - Main Application Entry Point & State Orchestration
 * Mounts the top-level React component, manages global city/unit state, and handles GSAP animations.
 */

// Global Error Boundary to prevent white/black screen crashes
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Weather-GPT Error Boundary caught an issue:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080C14",
          color: "#F8FAFC",
          fontFamily: "Inter, sans-serif",
          padding: "24px",
          textAlign: "center"
        }}>
          <div style={{
            background: "rgba(16, 24, 40, 0.8)",
            border: "1px solid rgba(244, 63, 94, 0.4)",
            borderRadius: "16px",
            padding: "32px",
            maxWidth: "480px"
          }}>
            <h2 style={{ color: "#F43F5E", marginBottom: "12px", fontSize: "1.25rem" }}>
              Application Refresh Needed
            </h2>
            <p style={{ color: "#94A3B8", fontSize: "0.9rem", marginBottom: "20px", lineHeight: "1.5" }}>
              A telemetry rendering exception occurred. Click below to recover the dashboard instantly.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: "linear-gradient(135deg, #38BDF8 0%, #6366F1 100%)",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "10px 24px",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none"
              }}
            >
              Reload Dashboard
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function mountWeatherApp() {
  const { useState, useEffect, useCallback } = React;

  if (!window.WeatherComponents) {
    setTimeout(mountWeatherApp, 25);
    return;
  }

  const {
    Navbar,
    LoginModal,
    Hero,
    WeatherAlerts,
    WeatherMetrics,
    HourlyForecast,
    WeeklyForecast,
    TemperatureChart,
    WeatherMap,
    WeatherGPT,
    ProductFeatures,
    Footer,
    LucideIcon
  } = window.WeatherComponents;

  function App() {
    const cities = window.WEATHER_CITIES || [];
    // Default city: Ahmedabad as specified in prompt
    const [currentCity, setCurrentCity] = useState(cities[0] || null);
    const [unit, setUnit] = useState("C"); // "C" or "F"
    const [activeNav, setActiveNav] = useState("hero");
    const [toastMessage, setToastMessage] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    // Bootstrap live backend data on initial load
    useEffect(() => {
      let isMounted = true;
      async function bootstrapBackend() {
        if (!window.WeatherAPI) return;

        // 1. Fetch initial live telemetry for Ahmedabad
        try {
          const liveAhmedabad = await window.WeatherAPI.getWeather("Ahmedabad");
          if (liveAhmedabad && isMounted) {
            setCurrentCity(liveAhmedabad);
            console.log("Weather-GPT: Live backend connected for Ahmedabad.", liveAhmedabad);
          }
        } catch (err) {
          console.warn("Weather-GPT: Initial backend connect notice:", err);
        }

        // 2. Fetch registered Doppler stations
        try {
          const locs = await window.WeatherAPI.getLocations();
          if (locs && locs.length && isMounted) {
            window.REGISTERED_LOCATIONS = locs;
            console.log(`Weather-GPT: Loaded ${locs.length} registered stations from backend.`);
          }
        } catch (err) {
          console.warn("Weather-GPT: Doppler station sync notice:", err);
        }
      }
      bootstrapBackend();
      return () => { isMounted = false; };
    }, []);

    // Compulsory Login Modal: opens immediately if user is not authenticated
    const [currentUser, setCurrentUser] = useState(() => {
      try {
        const saved = localStorage.getItem("weather_gpt_user");
        if (saved) return JSON.parse(saved);
      } catch (e) {}
      return null;
    });

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(() => {
      try {
        const saved = localStorage.getItem("weather_gpt_user");
        if (saved) return false;
      } catch (e) {}
      return true;
    });

    // User Live Location State for Radar Map ("Aap Yahan Hain")
    const [userLocation, setUserLocation] = useState(() => {
      try {
        const saved = localStorage.getItem("weather_gpt_user_location");
        if (saved) return JSON.parse(saved);
      } catch (e) {}
      return {
        city: "Ahmedabad",
        country: "India",
        coords: [23.0225, 72.5714]
      };
    });

    // Hackathon presentation toggle for Heavy Rain Alert
    const [simulateHeavyRain, setSimulateHeavyRain] = useState(false);

    // Automatically detects user's location via GPS or free IP-reverse-geocoding
    const detectUserLocation = async () => {
      // 1. Try Browser GPS Geolocation
      if (navigator && navigator.geolocation) {
        try {
          const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 6000, maximumAge: 60000 });
          });
          if (pos && pos.coords) {
            const { latitude, longitude } = pos.coords;
            const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
            if (res.ok) {
              const data = await res.json();
              const city = data.city || data.locality || data.principalSubdivision || "Ahmedabad";
              const locObj = {
                city: city.trim(),
                country: data.countryName || "India",
                coords: [latitude, longitude],
                isGps: true
              };
              setUserLocation(locObj);
              try { localStorage.setItem("weather_gpt_user_location", JSON.stringify(locObj)); } catch (e) {}
              console.log("Weather-GPT: GPS location detected:", locObj);
              return locObj;
            }
          }
        } catch (gpsErr) {
          console.log("Weather-GPT: GPS unavailable, using IP location:", gpsErr.message);
        }
      }

      // 2. Try IP-based location detection (accurately returns user's local city e.g. Ahmedabad)
      try {
        const res = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client");
        if (res.ok) {
          const data = await res.json();
          const city = data.city || data.locality || data.principalSubdivision || "Ahmedabad";
          const locObj = {
            city: city.trim(),
            country: data.countryName || "India",
            coords: [Number(data.latitude) || 23.0225, Number(data.longitude) || 72.5714],
            isGps: false
          };
          setUserLocation(locObj);
          try { localStorage.setItem("weather_gpt_user_location", JSON.stringify(locObj)); } catch (e) {}
          console.log("Weather-GPT: IP location detected:", locObj);
          return locObj;
        }
      } catch (ipErr) {
        console.warn("Weather-GPT: IP location detection error:", ipErr);
      }

      const defaultLoc = {
        city: "Ahmedabad",
        country: "India",
        coords: [23.0225, 72.5714],
        isGps: false
      };
      setUserLocation(defaultLoc);
      return defaultLoc;
    };

    const handleLogin = async (user) => {
      setCurrentUser(user);
      setIsLoginModalOpen(false);
      try {
        localStorage.setItem("weather_gpt_user", JSON.stringify(user));
      } catch (e) {}

      setToastMessage(`Welcome, ${user.name}! Detecting your location...`);

      // Track login location and immediately display that city's live weather
      try {
        const loc = await detectUserLocation();
        if (loc && loc.city) {
          await handleCitySelect(loc.city);
          setToastMessage(`Welcome, ${user.name}! Live location & radar synced to ${loc.city}.`);
        }
      } catch (locErr) {
        console.warn("Location tracking error:", locErr);
      }
    };

    const handleLogout = () => {
      setCurrentUser(null);
      setIsLoginModalOpen(true);
      try {
        localStorage.removeItem("weather_gpt_user");
      } catch (e) {}
      setToastMessage("Signed out. Please sign in to access Weather-GPT.");
    };

    // Helper temperature converter
    const convertTemp = useCallback(
      (celsius) => {
        if (unit === "F") {
          return `${Math.round((celsius * 9) / 5 + 32)}°`;
        }
        return `${celsius}°`;
      },
      [unit]
    );

    // City Search & Selection Handler connected to FastAPI /api/weather
    const handleCitySelect = useCallback(
      async (cityName) => {
        if (!cityName || !cityName.trim()) return;

        const cleanName = cityName.trim();
        setIsSearching(true);

        try {
          // 1. Query FastAPI backend for verified real-time weather
          if (window.WeatherAPI && typeof window.WeatherAPI.getWeather === "function") {
            const liveData = await window.WeatherAPI.getWeather(cleanName);
            if (liveData) {
              setCurrentCity(liveData);
              setToastMessage(null);
              setIsSearching(false);

              if (window.gsap) {
                try {
                  window.gsap.fromTo(
                    ".hero-weather-card, .metric-card, .hourly-card, .weekly-card, .chart-card",
                    { opacity: 0.85, y: 6 },
                    { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" }
                  );
                } catch (e) {}
              }
              return;
            }
          }

          // 2. Fallback to local offline catalog if backend did not return data
          const normalized = cleanName.toLowerCase();
          const found = cities.find(
            (c) =>
              c.name.toLowerCase() === normalized ||
              c.id.toLowerCase() === normalized ||
              c.region.toLowerCase().includes(normalized) ||
              c.country.toLowerCase().includes(normalized)
          );

          if (found) {
            setCurrentCity(found);
            setToastMessage(null);

            if (window.gsap) {
              try {
                window.gsap.fromTo(
                  ".hero-weather-card, .metric-card, .hourly-card, .weekly-card, .chart-card",
                  { opacity: 0.85, y: 6 },
                  { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" }
                );
              } catch (e) {}
            }
          } else {
            setToastMessage(`Unable to retrieve live telemetry for "${cleanName}". Please verify location name.`);
          }
        } catch (err) {
          console.error("City search error:", err);
          setToastMessage(`Connection issue while querying meteorological telemetry for "${cleanName}".`);
        } finally {
          setIsSearching(false);
        }
      },
      [cities]
    );

    // Auto-dismiss toast after 4 seconds
    useEffect(() => {
      if (!toastMessage) return;
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }, [toastMessage]);

    // Initial GSAP Hero & UI entrance animation
    useEffect(() => {
      if (window.gsap) {
        try {
          window.gsap.from(".navbar-wrapper", {
            y: -30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
          });

          window.gsap.from(".hero-content", {
            x: -30,
            opacity: 0,
            duration: 0.7,
            delay: 0.2,
            ease: "power2.out"
          });

          window.gsap.from(".hero-preview-col", {
            x: 30,
            opacity: 0,
            duration: 0.7,
            delay: 0.3,
            ease: "power2.out"
          });
        } catch (e) {
          console.warn("GSAP animation notice:", e);
        }
      }
    }, []);

    if (!currentCity) {
      return (
        <div style={{ padding: "40px", textAlign: "center", color: "#F8FAFC" }}>
          Loading Weather-GPT Intelligence...
        </div>
      );
    }

    return (
      <div className="app-root">
        {/* 0. Direct Compulsory Login Modal */}
        <LoginModal
          isOpen={isLoginModalOpen || !currentUser}
          onLogin={handleLogin}
        />

        {/* 1. Navbar with Profile Badge & Login Trigger */}
        <Navbar
          unit={unit}
          setUnit={setUnit}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          currentUser={currentUser}
          onOpenLogin={() => setIsLoginModalOpen(true)}
          onLogout={handleLogout}
        />

        <main className="app-container">
          {/* 2. Hero Section */}
          <Hero
            currentCity={currentCity}
            onCitySelect={handleCitySelect}
            unit={unit}
            convertTemp={convertTemp}
            isSearching={isSearching}
          />

          {/* 3. Weather Advisories & Heavy Rain Emergency Warning System */}
          <WeatherAlerts
            alerts={currentCity.alerts}
            currentCity={currentCity}
            simulateHeavyRain={simulateHeavyRain}
            setSimulateHeavyRain={setSimulateHeavyRain}
          />

          {/* 4. Atmospheric Metrics Grid */}
          <WeatherMetrics
            currentCity={currentCity}
            convertTemp={convertTemp}
            unit={unit}
          />

          {/* 5. 24-Hour Horizon Forecast */}
          <HourlyForecast
            hourly={currentCity.hourly}
            convertTemp={convertTemp}
          />

          {/* 6. Dual Grid: 7-Day Synoptic Outlook & Temperature Bézier Chart */}
          <div className="forecast-analytics-grid">
            <WeeklyForecast
              weekly={currentCity.weekly}
              convertTemp={convertTemp}
            />
            <TemperatureChart
              hourly={currentCity.hourly}
              unit={unit}
            />
          </div>

          {/* 7. Dual Grid: Geospatial Station Map & Weather-GPT Conversational AI */}
          <div className="map-gpt-grid">
            <WeatherMap
              currentCity={currentCity}
              convertTemp={convertTemp}
              userLocation={userLocation}
              onLocateUser={() => {
                if (userLocation && userLocation.city) {
                  handleCitySelect(userLocation.city);
                }
              }}
            />
            <WeatherGPT
              currentCity={currentCity}
              unit={unit}
            />
          </div>

          {/* 8. Product Architecture & Value Props */}
          <ProductFeatures />
        </main>

        {/* 9. SaaS Footer */}
        <Footer />

        {/* 10. Floating Toast Notification */}
        {toastMessage && (
          <div className="toast-notice" role="alert">
            <LucideIcon name="shield-alert" size={20} color="var(--accent-rose)" />
            <span style={{ flex: 1 }}>{toastMessage}</span>
            <button
              onClick={() => setToastMessage(null)}
              style={{ color: "var(--text-muted)", padding: "2px" }}
              aria-label="Close notification"
            >
              <LucideIcon name="x" size={16} />
            </button>
          </div>
        )}
      </div>
    );
  }

  const rootElement = document.getElementById("root");
  if (rootElement) {
    if (!window._reactRoot) {
      window._reactRoot = ReactDOM.createRoot(rootElement);
    }
    window._reactRoot.render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
  }
}

// Kick off mounting
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountWeatherApp);
} else {
  mountWeatherApp();
}
