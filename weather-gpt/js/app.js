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

    // City Search & Selection Handler
    const handleCitySelect = useCallback(
      (cityName) => {
        if (!cityName) return;

        const normalized = cityName.toLowerCase().trim();
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

          // GSAP Subtle Entrance on city change
          if (window.gsap) {
            try {
              window.gsap.fromTo(
                ".hero-weather-card, .metric-card, .hourly-card, .weekly-card, .chart-card",
                { opacity: 0.85, y: 6 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" }
              );
            } catch (e) {
              console.warn("GSAP transition notice:", e);
            }
          }
        } else {
          // Show exact requested prompt message
          setToastMessage("Weather data for this location is not available in demo mode.");
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
        {/* 1. Navbar */}
        <Navbar
          unit={unit}
          setUnit={setUnit}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />

        <main className="app-container">
          {/* 2. Hero Section */}
          <Hero
            currentCity={currentCity}
            onCitySelect={handleCitySelect}
            unit={unit}
            convertTemp={convertTemp}
          />

          {/* 3. Weather Advisories Banner */}
          <WeatherAlerts alerts={currentCity.alerts} />

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
