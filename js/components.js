/**
 * Weather-GPT Reusable React Components
 * Powered by React 18 & Babel Standalone (Zero-build Live Server architecture)
 */

const { useState, useEffect, useRef, useMemo } = React;

// --------------------------------------------------------------------------
// 1. Rock-solid Lucide SVG Icon Component (Pure React Virtual DOM)
// --------------------------------------------------------------------------
const LucideIcon = ({ name, size = 20, className = "", color = "currentColor" }) => {
  switch (name) {
    case "sun":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
        </svg>
      );
    case "moon":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      );
    case "cloud":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
      );
    case "cloud-sun":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>
        </svg>
      );
    case "cloud-moon":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M10.188 8.5A6 6 0 0 1 16 4a8 8 0 0 0-6 13h-.5"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>
        </svg>
      );
    case "cloud-rain":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>
        </svg>
      );
    case "cloud-drizzle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M8 19v1"/><path d="M8 14v1"/><path d="M16 19v1"/><path d="M16 14v1"/><path d="M12 21v1"/><path d="M12 16v1"/>
        </svg>
      );
    case "cloud-lightning":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/>
        </svg>
      );
    case "droplet":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
        </svg>
      );
    case "wind":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
        </svg>
      );
    case "eye":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
        </svg>
      );
    case "gauge":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>
        </svg>
      );
    case "thermometer":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
        </svg>
      );
    case "sunrise":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>
        </svg>
      );
    case "sunset":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>
        </svg>
      );
    case "bot":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
        </svg>
      );
    case "sparkles":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        </svg>
      );
    case "search":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
      );
    case "map-pin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      );
    case "send":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
        </svg>
      );
    case "shield-alert":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
        </svg>
      );
    case "activity":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      );
    case "clock":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      );
    case "calendar":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
      );
    case "user":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      );
    case "chevron-right":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m9 18 6-6-6-6"/>
        </svg>
      );
    case "menu":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
      );
    case "x":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
        </svg>
      );
    case "trash-2":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
        </svg>
      );
    case "crosshair":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/>
        </svg>
      );
    case "play":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polygon points="6 3 20 12 6 21 6 3"/>
        </svg>
      );
    case "pause":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/>
        </svg>
      );
    case "alert-triangle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      );
    case "log-in":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
        </svg>
      );
    case "log-out":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
      );
    case "check-circle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      );
    case "info":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
        </svg>
      );
  }
};

// --------------------------------------------------------------------------
// 2. Navbar Component
// --------------------------------------------------------------------------
const Navbar = ({ unit, setUnit, activeNav, setActiveNav, currentUser, onOpenLogin, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "dashboard", label: "Dashboard" },
    { id: "hourly", label: "Hourly" },
    { id: "forecast", label: "Forecast" },
    { id: "analytics", label: "Analytics" },
    { id: "map", label: "Map" },
    { id: "chat", label: "Weather-GPT" }
  ];

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isGuest = !currentUser || currentUser.isGuest;

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <a href="#hero" className="brand-logo" onClick={() => handleNavClick("hero")}>
          <div className="brand-icon-wrapper">
            <LucideIcon name="cloud-sun" size={22} color="#FFFFFF" />
          </div>
          <span>Weather-GPT</span>
          <span className="brand-badge">Doppler Network</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeNav === item.id ? "active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="nav-actions">
          {/* Unit Toggle */}
          <div className="unit-toggle-group" title="Toggle °C / °F">
            <button
              className={`unit-btn ${unit === "C" ? "active" : ""}`}
              onClick={() => setUnit("C")}
            >
              °C
            </button>
            <button
              className={`unit-btn ${unit === "F" ? "active" : ""}`}
              onClick={() => setUnit("F")}
            >
              °F
            </button>
          </div>

          {/* User Account / Auth Status Badge */}
          <div className="nav-user-container">
            {isGuest ? (
              <button
                type="button"
                className="btn-nav-auth-guest"
                onClick={onOpenLogin}
                title="Click to sign in"
              >
                <div className="guest-dot" />
                <span className="signin-tag">Sign In</span>
              </button>
            ) : (
              <div className="user-profile-badge" title={`Signed in as ${currentUser.email || currentUser.name} (${currentUser.role || 'Meteorologist'})`}>
                <div className="user-online-dot" />
                <div className="user-info-stack">
                  <span className="user-name-text">{currentUser.name}</span>
                  <span className="user-persona-tag">{currentUser.role || "Meteorologist"}</span>
                </div>
                <button
                  type="button"
                  className="btn-nav-logout"
                  onClick={onLogout}
                  title="Sign out"
                  aria-label="Sign Out"
                >
                  <LucideIcon name="log-out" size={14} />
                  <span>Exit</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <LucideIcon name={mobileMenuOpen ? "x" : "menu"} size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-user-card">
          {isGuest ? (
            <div className="mobile-user-row">
              <div>
                <div className="mobile-user-title">Guest Explorer</div>
                <div className="mobile-user-subtitle">Read-only session active</div>
              </div>
              <button className="btn-mobile-login" onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}>
                Sign In
              </button>
            </div>
          ) : (
            <div className="mobile-user-row">
              <div>
                <div className="mobile-user-title">{currentUser.name}</div>
                <div className="mobile-user-subtitle">{currentUser.role || "Meteorologist"}</div>
              </div>
              <button className="btn-mobile-logout" onClick={() => { setMobileMenuOpen(false); onLogout(); }}>
                Sign Out
              </button>
            </div>
          )}
        </div>

        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="mobile-nav-link"
                style={{ width: "100%", textAlign: "left" }}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.label}</span>
                <LucideIcon name="chevron-right" size={16} color="var(--text-muted)" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// 2B. Direct Login Modal Component (Compact, Compulsory, Clean with Personas)
// --------------------------------------------------------------------------
const PERSONAS = [
  {
    id: "farmer",
    label: "Farmer (Kisan)",
    icon: "🌾",
    badge: "Agri & Crops",
    desc: "Crop rain alerts & irrigation"
  },
  {
    id: "traveler",
    label: "Traveler",
    icon: "✈️",
    badge: "Trips & Commute",
    desc: "Transit delays & travel advice"
  },
  {
    id: "athlete",
    label: "Outdoor Athlete",
    icon: "🏃",
    badge: "Fitness & Sport",
    desc: "UV index, run timing & workout"
  },
  {
    id: "meteorologist",
    label: "Meteorologist",
    icon: "🔬",
    badge: "Deep Radar",
    desc: "Doppler telemetry & pressure"
  }
];

const LoginModal = ({ isOpen, onLogin }) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [selectedPersona, setSelectedPersona] = useState("farmer");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password to continue.");
      return;
    }

    const displayName = name.trim() || (email ? email.split("@")[0] : "Forecaster");
    const personaObj = PERSONAS.find((p) => p.id === selectedPersona) || PERSONAS[0];
    onLogin({
      name: displayName,
      email: email.trim(),
      role: personaObj.label,
      roleId: personaObj.id,
      isGuest: false
    });
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal-card compact-login-card" onClick={(e) => e.stopPropagation()}>
        {/* Branding Header */}
        <div className="login-modal-header" style={{ marginBottom: "14px" }}>
          <div className="brand-logo" style={{ justifyContent: "center", marginBottom: "6px" }}>
            <div className="brand-icon-wrapper" style={{ width: "32px", height: "32px" }}>
              <LucideIcon name="cloud-sun" size={18} color="#FFFFFF" />
            </div>
            <span style={{ fontSize: "1.15rem" }}>Weather-GPT</span>
          </div>
          <h2 className="login-modal-title" style={{ fontSize: "1.15rem", marginBottom: "3px" }}>
            {isSignUp ? "Create Account" : "Sign In"}
          </h2>
          <p className="login-modal-subtitle" style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            Live meteorological radar & AI telemetry access
          </p>
        </div>

        {error && (
          <div style={{
            background: "rgba(244, 63, 94, 0.15)",
            border: "1px solid rgba(244, 63, 94, 0.4)",
            color: "#F87171",
            padding: "8px 12px",
            borderRadius: "6px",
            fontSize: "0.8rem",
            marginBottom: "12px",
            textAlign: "center"
          }}>
            {error}
          </div>
        )}

        {/* Form - Clean inputs with NO dummy placeholders */}
        <form className="login-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-field" style={{ marginBottom: "10px" }}>
              <label className="field-label">Full Name</label>
              <input
                type="text"
                className="field-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-field" style={{ marginBottom: "10px" }}>
            <label className="field-label">Email Address</label>
            <input
              type="email"
              className="field-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-field" style={{ marginBottom: "12px" }}>
            <label className="field-label">Password</label>
            <input
              type="password"
              className="field-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Persona / Profile Selector */}
          <div className="form-field" style={{ marginBottom: "14px" }}>
            <label className="field-label" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span>Select Profile / Persona</span>
              <span style={{ fontSize: "0.72rem", color: "var(--accent-cyan)", fontWeight: 600 }}>Customizes Weather-GPT</span>
            </label>
            <div className="persona-pill-grid">
              {PERSONAS.map((p) => {
                const isSelected = selectedPersona === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    className={`persona-pill ${isSelected ? "active" : ""}`}
                    onClick={() => setSelectedPersona(p.id)}
                  >
                    <span className="persona-pill-icon">{p.icon}</span>
                    <div className="persona-pill-text">
                      <div className="persona-pill-title">{p.label}</div>
                      <div className="persona-pill-desc">{p.desc}</div>
                    </div>
                    {isSelected && (
                      <span className="persona-check-indicator">✓</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <button type="submit" className="btn-auth-primary" style={{ padding: "10px 16px" }}>
            <LucideIcon name="log-in" size={16} />
            <span>{isSignUp ? "Create Account" : "Sign In"}</span>
          </button>
        </form>

        {/* Switch mode */}
        <div className="login-modal-footer" style={{ marginTop: "14px", paddingTop: "10px", fontSize: "0.8rem" }}>
          <span>{isSignUp ? "Already have an account?" : "Need an account?"}</span>
          <button
            type="button"
            className="link-switch-auth"
            onClick={() => { setError(""); setIsSignUp(!isSignUp); }}
          >
            {isSignUp ? "Sign In" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------
// 3. Hero Section Component
// --------------------------------------------------------------------------
const Hero = ({ currentCity, onCitySelect, unit, convertTemp, isSearching = false }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!searchInput.trim() || isSearching) return;
    onCitySelect(searchInput.trim());
  };

  const stations = (window.REGISTERED_LOCATIONS && window.REGISTERED_LOCATIONS.length > 0)
    ? window.REGISTERED_LOCATIONS
    : (window.WEATHER_CITIES || []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Headline & Search */}
        <div className="hero-content">
          <div className="hero-pill">
            <div className="hero-pill-dot" />
            <span>Doppler Radar Network Active • WMO Station Telemetry</span>
          </div>

          <h1 className="hero-title">
            Understand Your Weather. <br />
            <span>Ask Your Weather.</span>
          </h1>

          <p className="hero-description">
            Weather-GPT combines real-time weather insights, visual analytics and an AI-style assistant into one simple experience.
          </p>

          {/* Search Box */}
          <form className="search-wrapper" onSubmit={handleSearchSubmit}>
            <div className="search-input-box">
              <span className="search-icon-left">
                <LucideIcon name="search" size={19} />
              </span>
              <input
                type="text"
                className="search-input"
                placeholder="Search city or location..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                disabled={isSearching}
              />
              <button type="submit" className="search-btn" disabled={isSearching}>
                <span>{isSearching ? "Loading..." : "Get Weather"}</span>
                <LucideIcon name="sparkles" size={16} color="#FFFFFF" />
              </button>
            </div>
          </form>

          {/* Quick Demo City Chips */}
          <div className="chips-container">
            <span className="chips-label">Popular cities:</span>
            {stations.map((station) => {
              const sName = station.city || station.name;
              const sId = station.id || sName.toLowerCase();
              const isActive = (currentCity?.name || "").toLowerCase() === sName.toLowerCase();
              return (
                <button
                  type="button"
                  key={sId}
                  className={`city-chip ${isActive ? "active" : ""}`}
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                    if (isSearching) return;
                    setSearchInput("");
                    onCitySelect(sName);
                  }}
                >
                  {sName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Hero Live Preview Glass Card */}
        <div className="hero-preview-col">
          <div className="glass-card hero-weather-card">
            <div className="hero-card-header">
              <div className="hero-location-info">
                <h3>
                  <LucideIcon name="map-pin" size={20} color="var(--accent-blue)" />
                  <span>{currentCity.name}, {currentCity.country}</span>
                </h3>
                <p>{currentCity.region} • {currentCity.timezone}</p>
              </div>
              <div className="live-badge">
                <div className="hero-pill-dot" />
                <span>Live Data</span>
              </div>
            </div>

            <div className="hero-temp-row">
              <div className="hero-temp-display">
                {convertTemp(currentCity.current.temp)}
              </div>
              <div className="hero-condition-wrap">
                <div className="hero-weather-icon">
                  <LucideIcon name={currentCity.current.icon} size={64} color="var(--accent-blue)" />
                </div>
                <div className="hero-condition-text">{currentCity.current.condition}</div>
                <div className="hero-feels-text">
                  Feels like {convertTemp(currentCity.current.feelsLike)}
                </div>
              </div>
            </div>

            <div className="hero-card-footer">
              <div className="hero-stat-badge">
                <LucideIcon name="thermometer" size={16} color="var(--accent-amber)" />
                <span>H: {convertTemp(currentCity.current.high)} / L: {convertTemp(currentCity.current.low)}</span>
              </div>
              <div className="hero-stat-badge">
                <LucideIcon name="droplet" size={16} color="var(--accent-cyan)" />
                <span>Rain: {currentCity.current.rainProb}%</span>
              </div>
              <div className="hero-stat-badge">
                <LucideIcon name="wind" size={16} color="var(--accent-blue)" />
                <span>{currentCity.current.windSpeed} km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --------------------------------------------------------------------------
// 4. Weather Alerts & Heavy Rain Emergency System
// --------------------------------------------------------------------------
const WeatherAlerts = ({ alerts, currentCity, simulateHeavyRain, setSimulateHeavyRain }) => {
  // Determine if heavy rain conditions are active (automatically or manually simulated)
  const isHeavyRainCondition = useMemo(() => {
    if (simulateHeavyRain) return true;
    if (!currentCity || !currentCity.current) return false;
    const cond = (currentCity.current.condition || "").toLowerCase();
    const prob = currentCity.current.rainProb || 0;
    return prob >= 40 || cond.includes("rain") || cond.includes("shower") || cond.includes("drizzle") || cond.includes("thunder");
  }, [simulateHeavyRain, currentCity]);

  const [isExpanded, setIsExpanded] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  // Reset dismissal if city or simulation state toggles
  useEffect(() => {
    setDismissed(false);
  }, [currentCity?.id, simulateHeavyRain]);

  const hasStandardAlerts = alerts && alerts.length > 0;

  return (
    <div className="alerts-master-wrapper">
      {/* Presentation Control Strip */}
      <div className="alert-channel-header">
        <div className="channel-indicator">
          <span className="channel-beacon-dot" />
          <span className="channel-title">Doppler Meteorological Alert Network</span>
          <span className="channel-freq">Station Broadcast #09-WMO</span>
        </div>

        {/* Live Presentation Trigger for Hackathon Demo */}
        <button
          className={`btn-simulate-rain-toggle ${simulateHeavyRain ? "active" : ""}`}
          onClick={() => setSimulateHeavyRain(!simulateHeavyRain)}
          title="Click to force-test Heavy Rain Emergency Alert during presentation"
        >
          <LucideIcon name="cloud-rain" size={15} />
          <span>{simulateHeavyRain ? "🌧️ Heavy Rain Alert: Active (Click to Clear)" : "🌧️ Simulate Heavy Rain Alert"}</span>
        </button>
      </div>

      {/* 1. SEVERE WEATHER ADVISORY: HEAVY RAIN WARNING BANNER */}
      {isHeavyRainCondition && !dismissed && (
        <div className="heavy-rain-emergency-banner" role="alert">
          <div className="emergency-indicator-bar" />
          
          <div className="emergency-main-body">
            {/* Top Warning Controls & Badges */}
            <div className="emergency-top-row">
              <div className="emergency-badge-cluster">
                <span className="emergency-level-badge">
                  <span className="flashing-alarm-dot" />
                  LEVEL 3 CRITICAL ADVISORY
                </span>
                <span className="emergency-type-tag">FLASH FLOOD & SEVERE PRECIPITATION WATCH</span>
                <span className="emergency-city-tag">{currentCity?.name} Metro Area</span>
              </div>

              <div className="emergency-actions">
                <button
                  className="btn-emergency-collapse"
                  onClick={() => setIsExpanded(!isExpanded)}
                  title={isExpanded ? "Collapse Advisory" : "Expand Full Advisory"}
                >
                  <LucideIcon name="info" size={14} />
                  <span>{isExpanded ? "Minimize Guidelines" : "View Safety Protocols"}</span>
                </button>
                <button
                  className="btn-emergency-dismiss"
                  onClick={() => setDismissed(true)}
                  title="Dismiss alert for this view"
                  aria-label="Close Alert"
                >
                  <LucideIcon name="x" size={15} />
                </button>
              </div>
            </div>

            {/* Title & Core Summary */}
            <div className="emergency-headline-section">
              <div className="emergency-symbol-wrapper">
                <LucideIcon name="cloud-lightning" size={32} color="#EF4444" />
              </div>
              <div className="emergency-headline-text">
                <h3 className="emergency-title">
                  Severe Heavy Rainfall & Urban Inundation Warning — {currentCity?.name}
                </h3>
                <p className="emergency-synopsis">
                  High-reflectivity convective storm cells actively traversing {currentCity?.name} airspace. Extreme localized precipitation expected to overwhelm arterial drainage systems within 45–90 minutes.
                </p>
              </div>
            </div>

            {/* Doppler Live Telemetry Metrics */}
            <div className="emergency-metrics-grid">
              <div className="emergency-metric-chip highlight-critical">
                <div className="metric-chip-label">Precipitation Rate</div>
                <div className="metric-chip-value">48.5 mm/h</div>
                <div className="metric-chip-sub">Torrential Convective Downpour</div>
              </div>

              <div className="emergency-metric-chip">
                <div className="metric-chip-label">Doppler Echo Intensity</div>
                <div className="metric-chip-value color-amber">50 – 55 dBZ</div>
                <div className="metric-chip-sub">Heavy Water-Loaded Cells</div>
              </div>

              <div className="emergency-metric-chip highlight-critical">
                <div className="metric-chip-label">Waterlogging Vulnerability</div>
                <div className="metric-chip-value">CRITICAL SEVERE</div>
                <div className="metric-chip-sub">Subways, Dips & Low-Lying Zones</div>
              </div>

              <div className="emergency-metric-chip">
                <div className="metric-chip-label">Road Visibility Impact</div>
                <div className="metric-chip-value color-amber">&lt; 1.2 km</div>
                <div className="metric-chip-sub">Squally Gusts up to 48 km/h</div>
              </div>
            </div>

            {/* Comprehensive Safety & Travel Guidelines */}
            {isExpanded && (
              <div className="emergency-safety-protocols">
                <div className="protocols-header">
                  <LucideIcon name="shield-alert" size={16} color="#EF4444" />
                  <span>Official Public Safety & Commuter Protection Advisory</span>
                </div>

                <div className="protocols-cards-grid">
                  <div className="protocol-card">
                    <div className="protocol-icon">🚗</div>
                    <div className="protocol-info">
                      <strong>Motorists & Commuters:</strong> Do not drive into water of unknown depth. Avoid underpasses, subways, and low-lying flyovers. Keep low beams illuminated.
                    </div>
                  </div>

                  <div className="protocol-card">
                    <div className="protocol-icon">⚡</div>
                    <div className="protocol-info">
                      <strong>Electrocution Risk:</strong> Avoid walking near electric junction boxes, street poles, and fallen utility cables submerged in runoff water.
                    </div>
                  </div>

                  <div className="protocol-card">
                    <div className="protocol-icon">✈️</div>
                    <div className="protocol-info">
                      <strong>Transit & Rail:</strong> Local commuter lines and airport departure slots subject to holding patterns and delays. Check transit trackers before stepping out.
                    </div>
                  </div>

                  <div className="protocol-card">
                    <div className="protocol-icon">📞</div>
                    <div className="protocol-info">
                      <strong>Disaster Helpline:</strong> Municipal Control Room: <strong>1077</strong> / National Emergency Coordination: <strong>112</strong>.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Standard City Meteorological Alerts (if any) */}
      {hasStandardAlerts && (
        <div className="alerts-container">
          {alerts.map((alert) => (
            <div key={alert.id} className={`alert-banner alert-${alert.severity}`}>
              <div className="alert-icon-box">
                <LucideIcon name={alert.icon || "shield-alert"} size={20} />
              </div>
              <div className="alert-body">
                <div className="alert-top">
                  <span className="alert-title">{alert.title}</span>
                  <span className="alert-timing">{alert.timing}</span>
                </div>
                <p className="alert-desc">{alert.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --------------------------------------------------------------------------
// 5. Weather Metrics Component (7 Key Cards)
// --------------------------------------------------------------------------
const WeatherMetrics = ({ currentCity, convertTemp, unit }) => {
  const curr = currentCity.current;

  const metrics = [
    {
      id: "humidity",
      label: "Humidity",
      icon: "droplet",
      value: curr.humidity,
      unit: "%",
      subLabel: `Dew point: ${convertTemp(curr.dewPoint)}`,
      badge: curr.humidity > 70 ? "Humid" : "Comfortable",
      badgeType: curr.humidity > 70 ? "badge-warning" : "badge-success"
    },
    {
      id: "wind",
      label: "Wind Speed",
      icon: "wind",
      value: unit === "F" ? Math.round(curr.windSpeed * 0.621371) : curr.windSpeed,
      unit: unit === "F" ? "mph" : "km/h",
      subLabel: `Direction: ${curr.windDirection}`,
      badge: curr.windSpeed > 20 ? "Breezy" : "Gentle",
      badgeType: "badge-success"
    },
    {
      id: "visibility",
      label: "Visibility",
      icon: "eye",
      value: unit === "F" ? (curr.visibility * 0.621371).toFixed(1) : curr.visibility,
      unit: unit === "F" ? "mi" : "km",
      subLabel: curr.visibility >= 8 ? "Clear horizon" : "Hazy atmosphere",
      badge: curr.visibility >= 8 ? "Optimal" : "Fair",
      badgeType: "badge-success"
    },
    {
      id: "pressure",
      label: "Air Pressure",
      icon: "gauge",
      value: curr.pressure,
      unit: "hPa",
      subLabel: curr.pressure >= 1013 ? "High pressure system" : "Low pressure",
      badge: "Stable",
      badgeType: "badge-success"
    },
    {
      id: "uv",
      label: "UV Index",
      icon: "sun",
      value: curr.uvIndex,
      unit: `/ 11`,
      subLabel: `Risk level: ${curr.uvLevel}`,
      badge: curr.uvLevel,
      badgeType: curr.uvIndex >= 7 ? "badge-warning" : "badge-success"
    },
    {
      id: "sun-cycle",
      label: "Sunrise & Sunset",
      icon: "sunrise",
      value: curr.sunrise,
      unit: "",
      subLabel: `Sunset: ${curr.sunset}`,
      badge: "Daylight ~12h",
      badgeType: "badge-success"
    },
    {
      id: "rain-prob",
      label: "Precipitation",
      icon: "cloud-rain",
      value: curr.rainProb,
      unit: "%",
      subLabel: `Status: ${curr.condition}`,
      badge: curr.rainProb > 40 ? "Rain likely" : "Low chance",
      badgeType: curr.rainProb > 40 ? "badge-warning" : "badge-success"
    },
    {
      id: "aqi",
      label: "Air Quality Index",
      icon: "sparkles",
      value: curr.aqi,
      unit: "AQI",
      subLabel: `Rating: ${curr.aqiStatus}`,
      badge: curr.aqiStatus,
      badgeType: curr.aqi > 100 ? "badge-warning" : "badge-success"
    }
  ];

  return (
    <div id="dashboard" className="dashboard-section">
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <LucideIcon name="activity" size={24} color="var(--accent-blue)" />
            <span>Telemetry & Atmospheric Metrics</span>
          </h2>
          <p className="section-subtitle">Comprehensive sensor readouts and live atmospheric telemetry</p>
        </div>
      </div>

      <div className="metrics-grid">
        {metrics.map((m) => (
          <div key={m.id} className="glass-card metric-card">
            <div className="metric-top">
              <span className="metric-label">{m.label}</span>
              <div className="metric-icon-wrap">
                <LucideIcon name={m.icon} size={18} />
              </div>
            </div>

            <div className="metric-value-row">
              <span className="metric-value">{m.value}</span>
              {m.unit && <span className="metric-unit">{m.unit}</span>}
            </div>

            <div className="metric-bottom">
              <span>{m.subLabel}</span>
              <span className={`metric-badge ${m.badgeType}`}>{m.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------
// 6. Hourly Forecast Component
// --------------------------------------------------------------------------
const HourlyForecast = ({ hourly, convertTemp }) => {
  return (
    <div id="hourly" className="glass-card hourly-card">
      <div className="section-header" style={{ marginBottom: "12px" }}>
        <div>
          <h2 className="section-title" style={{ fontSize: "1.25rem" }}>
            <LucideIcon name="clock" size={20} color="var(--accent-blue)" />
            <span>24-Hour Timeline Forecast</span>
          </h2>
          <p className="section-subtitle">Horizontally scrollable hourly projection with precipitation likelihood</p>
        </div>
      </div>

      <div className="hourly-scroll-container">
        {hourly.map((hour, idx) => (
          <div key={idx} className="hourly-item">
            <span className="hourly-time">{hour.time}</span>
            <div className="hourly-icon">
              <LucideIcon name={hour.icon} size={24} />
            </div>
            <span className="hourly-temp">{convertTemp(hour.temp)}</span>
            <div className="hourly-pop">
              <LucideIcon name="droplet" size={11} color="var(--accent-cyan)" />
              <span>{hour.rainProb}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------
// 7. Weekly 7-Day Forecast Component
// --------------------------------------------------------------------------
const WeeklyForecast = ({ weekly, convertTemp }) => {
  return (
    <div id="forecast" className="glass-card weekly-card">
      <div className="section-header" style={{ marginBottom: "6px" }}>
        <div>
          <h2 className="section-title" style={{ fontSize: "1.25rem" }}>
            <LucideIcon name="calendar" size={20} color="var(--accent-blue)" />
            <span>7-Day Synoptic Outlook</span>
          </h2>
          <p className="section-subtitle">Multi-day atmospheric trends and high/low variance</p>
        </div>
      </div>

      <div className="weekly-list">
        {weekly.map((item, idx) => (
          <div key={idx} className="weekly-row">
            <div className="weekly-day-info">
              <span className="weekly-day-name">{item.day}</span>
              <span className="weekly-date">{item.date}</span>
            </div>

            <div className="weekly-weather-center">
              <LucideIcon name={item.icon} size={22} color="var(--accent-blue)" />
              <span className="weekly-cond-text">{item.condition}</span>
            </div>

            <div className="weekly-temps-right">
              <span className="weekly-high">{convertTemp(item.high)}</span>
              <span className="weekly-low">{convertTemp(item.low)}</span>
              <span className="weekly-rain-prob">{item.rainProb}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------
// 8. Interactive Temperature Chart Component (Chart.js)
// --------------------------------------------------------------------------
const TemperatureChart = ({ hourly, unit }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !window.Chart) return;

    const ctx = chartRef.current.getContext("2d");

    // Extract first 12 hours for crisp responsive visualization
    const displayHours = hourly.slice(0, 12);
    const labels = displayHours.map((h) => h.time);
    const temps = displayHours.map((h) =>
      unit === "F" ? Math.round((h.temp * 9) / 5 + 32) : h.temp
    );
    const rainProbs = displayHours.map((h) => h.rainProb);

    // Create subtle linear gradient (Clean oceanic sky blue)
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(2, 132, 199, 0.32)");
    gradient.addColorStop(0.6, "rgba(2, 132, 199, 0.06)");
    gradient.addColorStop(1, "rgba(2, 132, 199, 0.0)");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new window.Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: `Temperature (°${unit})`,
            data: temps,
            borderColor: "#38BDF8",
            backgroundColor: gradient,
            borderWidth: 2.2,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: "#0A0F1D",
            pointBorderColor: "#38BDF8",
            pointBorderWidth: 2,
            pointRadius: 3.5,
            pointHoverRadius: 6,
            yAxisID: "y"
          },
          {
            label: "Rain Probability (%)",
            data: rainProbs,
            borderColor: "rgba(16, 185, 129, 0.7)",
            borderWidth: 1.5,
            borderDash: [4, 4],
            pointRadius: 0,
            fill: false,
            tension: 0.3,
            yAxisID: "y1"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "#94A3B8",
              font: { family: "Inter", size: 12 },
              boxWidth: 14
            }
          },
          tooltip: {
            backgroundColor: "rgba(15, 23, 42, 0.96)",
            titleColor: "#FFFFFF",
            bodyColor: "#94A3B8",
            borderColor: "rgba(255, 255, 255, 0.12)",
            borderWidth: 1,
            padding: 10,
            displayColors: true,
            callbacks: {
              label: function (context) {
                if (context.datasetIndex === 0) {
                  return `Temp: ${context.parsed.y}°${unit}`;
                }
                return `Rain: ${context.parsed.y}%`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: "rgba(255, 255, 255, 0.04)" },
            ticks: { color: "#64748B", font: { family: "Inter", size: 11 } }
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            grid: { color: "rgba(255, 255, 255, 0.05)" },
            ticks: {
              color: "#94A3B8",
              font: { family: "Inter", size: 11 },
              callback: (val) => `${val}°`
            }
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",
            grid: { drawOnChartArea: false },
            ticks: {
              color: "rgba(16, 185, 129, 0.8)",
              font: { family: "Inter", size: 11 },
              callback: (val) => `${val}%`
            },
            min: 0,
            max: 100
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [hourly, unit]);

  return (
    <div id="analytics" className="glass-card chart-card">
      <div className="section-header" style={{ marginBottom: "4px" }}>
        <div>
          <h2 className="section-title" style={{ fontSize: "1.25rem" }}>
            <LucideIcon name="activity" size={20} color="var(--accent-blue)" />
            <span>Temperature Trend & Precipitation</span>
          </h2>
          <p className="section-subtitle">Real-time Bézier temperature telemetry curves and precipitation thresholds</p>
        </div>
      </div>

      <div className="chart-wrapper">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------
// 9. Interactive Map Component (Leaflet.js Real Satellite & Doppler Radar)
// --------------------------------------------------------------------------
const WeatherMap = ({ currentCity, convertTemp, userLocation, onLocateUser }) => {
  const mapRef = useRef(null);
  const leafletMap = useRef(null);
  const markerRef = useRef(null);
  const userMarkerRef = useRef(null);
  const radarLayersRef = useRef([]);
  const tileLayerRef = useRef(null);

  const [activeLayer, setActiveLayer] = useState("satellite"); // 'satellite', 'radar', 'streets', 'topo'
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeOffset, setTimeOffset] = useState("NOW"); // '-45m', '-30m', '-15m', 'NOW', '+15m', '+30m'

  const tileConfigs = {
    satellite: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      options: { maxZoom: 18, attribution: "Esri World Imagery" },
      label: "Satellite HD"
    },
    radar: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      options: { maxZoom: 18, attribution: "Esri Dark Gray" },
      label: "Doppler Dark"
    },
    streets: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      options: { maxZoom: 18, attribution: "Esri Street Map" },
      label: "Street Map"
    },
    topo: {
      url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
      options: { maxZoom: 17, attribution: "OpenTopoMap" },
      label: "Topographic"
    }
  };

  // Change basemap layer
  const switchLayer = (layerKey) => {
    setActiveLayer(layerKey);
    if (!leafletMap.current || !window.L) return;

    if (tileLayerRef.current) {
      leafletMap.current.removeLayer(tileLayerRef.current);
    }

    const cfg = tileConfigs[layerKey];
    tileLayerRef.current = window.L.tileLayer(cfg.url, cfg.options).addTo(leafletMap.current);
  };

  // Recenter map on active station
  const handleRecenter = () => {
    if (leafletMap.current && leafletMap.current.flyTo) {
      leafletMap.current.flyTo(currentCity.coords, 11, { duration: 1 });
    }
  };

  // Fly smoothly to user's live location ("Aap Yahan Hain")
  const handleLocateMe = () => {
    if (userLocation && userLocation.coords && leafletMap.current) {
      leafletMap.current.flyTo(userLocation.coords, 13, { duration: 1.2 });
      if (userMarkerRef.current && userMarkerRef.current.openPopup) {
        setTimeout(() => {
          try {
            userMarkerRef.current.openPopup();
          } catch (e) {}
        }, 1250);
      }
    }
    if (onLocateUser) {
      onLocateUser();
    }
  };

  useEffect(() => {
    if (!window.L || !mapRef.current) return;

    try {
      if (!leafletMap.current) {
        if (mapRef.current._leaflet_id) {
          mapRef.current._leaflet_id = null;
        }

        leafletMap.current = window.L.map(mapRef.current, {
          center: currentCity.coords,
          zoom: 11,
          zoomControl: true,
          attributionControl: false
        });

        // Initialize with active layer (satellite by default for real look)
        const cfg = tileConfigs[activeLayer];
        tileLayerRef.current = window.L.tileLayer(cfg.url, cfg.options).addTo(leafletMap.current);
      }

      const map = leafletMap.current;
      if (map && map.flyTo) {
        map.flyTo(currentCity.coords, 11, { duration: 1.2 });
      }

      // Clear previous radar echo overlays
      radarLayersRef.current.forEach((layer) => {
        if (map.hasLayer(layer)) {
          map.removeLayer(layer);
        }
      });
      radarLayersRef.current = [];

      // 1. Draw Range Rings (25km, 50km, 80km) for authentic Doppler radar visual
      const ringOptions = {
        color: "rgba(56, 189, 248, 0.35)",
        weight: 1,
        fill: false,
        dashArray: "4, 6"
      };

      const ring1 = window.L.circle(currentCity.coords, { radius: 15000, ...ringOptions }).addTo(map);
      const ring2 = window.L.circle(currentCity.coords, { radius: 35000, ...ringOptions }).addTo(map);
      const ring3 = window.L.circle(currentCity.coords, { radius: 60000, ...ringOptions }).addTo(map);
      radarLayersRef.current.push(ring1, ring2, ring3);

      // 2. Draw Realistic Doppler Radar Precipitation Reflectivity Echoes
      const [lat, lng] = currentCity.coords;
      const rainChance = currentCity.current.rainProb;

      // Echo cells based on city's actual rain probability
      if (rainChance > 15) {
        // Light precipitation echo (Green: ~20-30 dBZ)
        const echo1 = window.L.circle([lat + 0.08, lng + 0.07], {
          radius: 12000,
          color: "#10B981",
          fillColor: "#10B981",
          fillOpacity: 0.28,
          weight: 1.5
        }).addTo(map);

        // Moderate precipitation core (Yellow-Orange: ~35-45 dBZ)
        const echo2 = window.L.circle([lat + 0.07, lng + 0.06], {
          radius: 6500,
          color: "#F59E0B",
          fillColor: "#F59E0B",
          fillOpacity: 0.38,
          weight: 1.5
        }).addTo(map);

        radarLayersRef.current.push(echo1, echo2);

        if (rainChance > 45) {
          // Heavy convective core (Red: ~50-60 dBZ)
          const echo3 = window.L.circle([lat + 0.065, lng + 0.055], {
            radius: 3000,
            color: "#EF4444",
            fillColor: "#EF4444",
            fillOpacity: 0.5,
            weight: 2
          }).addTo(map);
          radarLayersRef.current.push(echo3);
        }
      } else {
        // Subtle atmospheric moisture scatter (cyan)
        const moistEcho = window.L.circle([lat - 0.05, lng + 0.04], {
          radius: 8000,
          color: "#06B6D4",
          fillColor: "#06B6D4",
          fillOpacity: 0.18,
          weight: 1,
          dashArray: "3, 5"
        }).addTo(map);
        radarLayersRef.current.push(moistEcho);
      }

      // 3. Station Marker with Pulse
      const stationIcon = window.L.divIcon({
        className: "custom-station-marker",
        html: `
          <div class="radar-station-node">
            <div class="radar-sweep-cone ${isPlaying ? 'active-sweep' : ''}"></div>
            <div class="radar-pulse-ring"></div>
            <div class="radar-core-dot"></div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });

      if (markerRef.current) {
        markerRef.current.setLatLng(currentCity.coords);
      } else if (map) {
        markerRef.current = window.L.marker(currentCity.coords, { icon: stationIcon }).addTo(map);
      }

      if (markerRef.current && markerRef.current.bindPopup) {
        markerRef.current.bindPopup(
          `<div style="font-family: Inter, sans-serif; padding: 6px 8px; color: #0F172A; min-width: 170px;">
            <div style="font-size: 11px; font-weight: 700; color: #0284C7; text-transform: uppercase;">Doppler Radar Station</div>
            <strong style="font-size: 15px; color: #0F172A;">${currentCity.name}, ${currentCity.country}</strong>
            <div style="margin-top: 4px; font-size: 12px; color: #475569; line-height: 1.4;">
              • <strong>Condition:</strong> ${currentCity.current.condition}<br/>
              • <strong>Temp:</strong> ${convertTemp(currentCity.current.temp)} (Feels ${convertTemp(currentCity.current.feelsLike)})<br/>
              • <strong>Wind:</strong> ${currentCity.current.windSpeed} km/h ${currentCity.current.windDirection}<br/>
              • <strong>Pressure:</strong> ${currentCity.current.pressure} hPa (QNH)
            </div>
          </div>`
        );
      }

      // 4. User Live Location Marker ("Aap Yahan Hain")
      if (userLocation && userLocation.coords && userLocation.coords.length === 2) {
        const [uLat, uLng] = userLocation.coords;
        const userIcon = window.L.divIcon({
          className: "custom-user-marker",
          html: `
            <div class="user-live-gps-marker">
              <div class="user-gps-pulse-outer"></div>
              <div class="user-gps-pulse-inner"></div>
              <div class="user-gps-center-dot"></div>
              <div class="user-gps-label-badge">📍 Aap Yahan Hain</div>
            </div>
          `,
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });

        if (userMarkerRef.current) {
          userMarkerRef.current.setLatLng([uLat, uLng]);
        } else if (map) {
          userMarkerRef.current = window.L.marker([uLat, uLng], { icon: userIcon, zIndexOffset: 1500 }).addTo(map);
        }

        if (userMarkerRef.current && userMarkerRef.current.bindPopup) {
          userMarkerRef.current.bindPopup(
            `<div style="font-family: Inter, sans-serif; padding: 6px 8px; color: #0F172A; min-width: 175px;">
              <div style="font-size: 11px; font-weight: 700; color: #059669; text-transform: uppercase;">
                📍 Your Location (Aap Yahan Hain)
              </div>
              <strong style="font-size: 14px; color: #0F172A;">${userLocation.city || "Current Location"}, ${userLocation.country || "India"}</strong>
              <div style="margin-top: 4px; font-size: 12px; color: #475569; line-height: 1.4;">
                • <strong>Coordinates:</strong> ${uLat.toFixed(4)}°N, ${uLng.toFixed(4)}°E<br/>
                • <strong>Status:</strong> Live Geolocation Active
              </div>
            </div>`
          );
        }
      }

      setTimeout(() => {
        if (map && map.invalidateSize) {
          map.invalidateSize();
        }
      }, 350);
    } catch (err) {
      console.warn("Leaflet map initialization notice:", err);
    }
  }, [currentCity, convertTemp, isPlaying, userLocation]);

  return (
    <div id="map" className="glass-card map-card">
      <div className="section-header" style={{ marginBottom: "8px" }}>
        <div>
          <h2 className="section-title" style={{ fontSize: "1.25rem" }}>
            <LucideIcon name="map-pin" size={20} color="var(--accent-blue)" />
            <span>Doppler Weather Radar & Geospatial Station</span>
          </h2>
          <p className="section-subtitle">Real satellite imagery, atmospheric reflectivity, and dual-polarization telemetry</p>
        </div>

        {/* Real Layer Switcher Pills */}
        <div className="map-layer-switcher">
          {Object.entries(tileConfigs).map(([key, cfg]) => (
            <button
              key={key}
              className={`layer-pill ${activeLayer === key ? "active" : ""}`}
              onClick={() => switchLayer(key)}
            >
              {key === "satellite" && "🛰️ Satellite HD"}
              {key === "radar" && "🌧️ Doppler Radar"}
              {key === "streets" && "🗺️ Carto Roads"}
              {key === "topo" && "🏔️ Topographic"}
            </button>
          ))}
        </div>
      </div>

      <div className="map-container-box">
        <div id="weather-map" ref={mapRef} />

        {/* Station Telemetry Header Overlay */}
        <div className="map-station-badge">
          <div className="map-station-title">
            <span className="station-live-dot" />
            <span>RADAR: {currentCity.name.toUpperCase()} (WMO / IMD)</span>
          </div>
          <div className="map-station-coords">
            {currentCity.coords[0].toFixed(4)}°N, {currentCity.coords[1].toFixed(4)}°E • Range: 150 km • S-Band 2.8 GHz
          </div>
        </div>

        {/* Quick Map Actions: Locate Me & Recenter to Station */}
        <div className="map-quick-actions">
          <button
            type="button"
            className="map-locate-btn"
            onClick={handleLocateMe}
            title="Locate my current position on map"
          >
            <LucideIcon name="navigation" size={14} color="#34D399" />
            <span>Aap Yahan Hain</span>
          </button>

          <button
            type="button"
            className="map-recenter-btn"
            onClick={handleRecenter}
            title={`Recenter to ${currentCity.name}`}
          >
            <LucideIcon name="crosshair" size={14} />
            <span>Station: {currentCity.name}</span>
          </button>
        </div>

        {/* Doppler Reflectivity Legend Bar */}
        <div className="map-radar-legend">
          <span className="legend-label">Precipitation Reflectivity (dBZ):</span>
          <div className="legend-bar-track">
            <span className="legend-step" style={{ background: "#38BDF8" }}>15 Light</span>
            <span className="legend-step" style={{ background: "#10B981" }}>25 Mod</span>
            <span className="legend-step" style={{ background: "#F59E0B" }}>40 Heavy</span>
            <span className="legend-step" style={{ background: "#EF4444" }}>55 Storm</span>
          </div>
        </div>
      </div>

      {/* Doppler Timeline & Playback Controller */}
      <div className="radar-controller-bar">
        <button
          className="radar-play-btn"
          onClick={() => setIsPlaying(!isPlaying)}
          title={isPlaying ? "Pause Doppler Loop" : "Play Doppler Loop"}
        >
          <LucideIcon name={isPlaying ? "pause" : "play"} size={14} />
          <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
        </button>

        <div className="radar-timeline-steps">
          {["-45m", "-30m", "-15m", "NOW (Live)", "+15m", "+30m"].map((stamp) => (
            <button
              key={stamp}
              className={`timeline-step-btn ${timeOffset === stamp || (stamp.includes("NOW") && timeOffset === "NOW") ? "active" : ""}`}
              onClick={() => setTimeOffset(stamp.includes("NOW") ? "NOW" : stamp)}
            >
              {stamp}
            </button>
          ))}
        </div>

        <div className="radar-status-text">
          <span className="status-radar-dot" />
          <span>Doppler Sweep: 6.0 RPM</span>
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------
// 10. Weather-GPT AI Assistant Chat Component
// --------------------------------------------------------------------------
const WeatherGPT = ({ currentCity, unit, currentUser }) => {
  const userPersona = currentUser?.role || "Lead Meteorologist";
  const userRoleKey = (currentUser?.roleId || "").toLowerCase() ||
    (userPersona.toLowerCase().includes("farmer") ? "farmer" :
     userPersona.toLowerCase().includes("travel") ? "traveler" :
     userPersona.toLowerCase().includes("athlete") ? "athlete" : "meteorologist");

  const buildInitialGreeting = () => {
    const tempDisplay = unit === "F" ? Math.round((currentCity.current.temp * 9) / 5 + 32) : currentCity.current.temp;
    const userName = currentUser?.name || "Forecaster";
    if (userRoleKey === "farmer") {
      return `🌾 **Ram Ram / Namaste ${userName}!** I am **Weather-GPT**, your Agricultural & Crop Climate Advisor.\n\nCurrently monitoring **${currentCity.name}** at **${tempDisplay}°${unit}** with ${currentCity.current.condition.toLowerCase()}. Rain probability is **${currentCity.current.rain_prob || 0}%**.\n\nAsk me about irrigation timing, crop spray safety, or today's rain outlook!`;
    } else if (userRoleKey === "traveler") {
      return `✈️ **Welcome ${userName}!** I am **Weather-GPT**, your Travel & Commute Weather Guide.\n\nCurrently monitoring **${currentCity.name}** at **${tempDisplay}°${unit}** with ${currentCity.current.condition.toLowerCase()}.\n\nAsk me about packing recommendations, flight or road delay forecasts, and umbrella needs!`;
    } else if (userRoleKey === "athlete") {
      return `🏃 **Hey ${userName}!** I am **Weather-GPT**, your Outdoor Fitness & Athletic Advisor.\n\nCurrently monitoring **${currentCity.name}** at **${tempDisplay}°${unit}**, UV Index **${currentCity.current.uv_index || 3}**.\n\nAsk me about optimal workout hours, heat index, and hydration guidance!`;
    }
    return `👋 Hello **${userName}**! I am **Weather-GPT**, your Doppler climate assistant.\n\nCurrently monitoring **${currentCity.name}** at **${tempDisplay}°${unit}** with ${currentCity.current.condition.toLowerCase()}. What would you like to know about today's forecast?`;
  };

  const [messages, setMessages] = useState(() => [
    {
      id: "m-init-1",
      sender: "assistant",
      text: buildInitialGreeting(),
      time: "Just now"
    }
  ]);

  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Update initial greeting when persona or city changes (if user has not started conversation)
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length <= 1) {
        return [{
          id: `m-init-${Date.now()}`,
          sender: "assistant",
          text: buildInitialGreeting(),
          time: "Just now"
        }];
      }
      return prev;
    });
  }, [currentUser?.name, currentUser?.role, currentCity.name, unit]);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Dynamic Prompt Suggestions based on Persona
  const promptSuggestions = useMemo(() => {
    if (userRoleKey === "farmer") {
      return [
        `Will it rain today in ${currentCity.name}?`,
        "Kya aaj khet me sinchai (paani) karna chahiye?",
        "Is today safe for crop spraying or harvesting?",
        "Next 3 days me barish ka kya chance hai?",
        "Khet ki faslon ke liye humidity aur hawa kaisa hai?"
      ];
    } else if (userRoleKey === "traveler") {
      return [
        "Should I carry an umbrella today?",
        `Is it safe to travel or commute in ${currentCity.name}?`,
        "What clothes should I pack for this trip?",
        "Will rain disrupt evening flights or roads?",
        "Tomorrow weather outlook for traveling"
      ];
    } else if (userRoleKey === "athlete") {
      return [
        "Is it a good time for outdoor running/exercise?",
        "What is the best hour for workout today?",
        "How high is the UV Index and heat stress today?",
        "Current air quality (AQI) for jogging",
        "Will evening rain interfere with outdoor sports?"
      ];
    }
    return [
      `Will it rain today in ${currentCity.name}?`,
      "What should I wear today?",
      "Detailed 24-hour precipitation trajectory",
      "Should I carry an umbrella today?",
      "How hot will it be tomorrow?",
      "Atmospheric pressure & wind velocity breakdown"
    ];
  }, [userRoleKey, currentCity.name]);

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: query.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsTyping(true);

    // 1. Attempt to query FastAPI Backend /api/chat with persona
    try {
      if (window.WeatherAPI && typeof window.WeatherAPI.askChat === "function") {
        const data = await window.WeatherAPI.askChat(
          query.trim(),
          currentCity?.name || "Ahmedabad",
          messages,
          userPersona
        );

        if (data && data.message) {
          const aiMsg = {
            id: `ai-${Date.now()}`,
            sender: "assistant",
            text: data.message,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            source: data.source || "WeatherGPT AI Engine"
          };
          setMessages((prev) => [...prev, aiMsg]);
          setIsTyping(false);
          return;
        }
      }
    } catch (err) {
      console.warn("WeatherGPT backend notice:", err.message);
    }

    // 2. Client-side fallback engine if backend is offline
    setTimeout(() => {
      const responseText = window.generateAIResponse
        ? window.generateAIResponse(query, currentCity, unit)
        : `Weather-GPT: Currently ${currentCity.current.temp}°C in ${currentCity.name}.`;

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: "assistant",
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `m-reset-${Date.now()}`,
        sender: "assistant",
        text: `Conversation cleared. Ready for your questions regarding **${currentCity.name}**!`,
        time: "Just now"
      }
    ]);
  };

  // Helper to format bold markdown-like highlights
  const formatMarkdown = (text) => {
    // Split by newlines
    return text.split("\n").map((line, lIdx) => {
      // Basic bold parser: **word**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={lIdx} style={{ display: "block", minHeight: line ? "auto" : "8px" }}>
          {parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={pIdx} style={{ color: "#FFFFFF" }}>{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <div id="chat" className="glass-card gpt-card">
      <div className="gpt-header">
        <div className="gpt-title-info">
          <div className="gpt-avatar-glow">
            <LucideIcon name="bot" size={22} color="#FFFFFF" />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>Weather-GPT</h3>
              <span className="gpt-persona-pill">{currentUser?.role || "Meteorologist"}</span>
            </div>
            <div className="gpt-status-badge">
              <span className="status-dot" />
              <span>Telemetry Synchronized • Station: {currentCity.name}</span>
            </div>
          </div>
        </div>

        <button className="gpt-clear-btn" onClick={handleClearChat} title="Clear conversation history">
          <LucideIcon name="trash-2" size={14} />
          <span>Clear</span>
        </button>
      </div>

      {/* Messages Stream */}
      <div className="gpt-messages-container">
        {messages.map((m) => (
          <div key={m.id} className={`chat-bubble-wrap ${m.sender}`}>
            <div className="chat-bubble-avatar">
              <LucideIcon name={m.sender === "user" ? "user" : "sparkles"} size={15} />
            </div>
            <div>
              <div className="chat-bubble">{formatMarkdown(m.text)}</div>
              <div className="chat-timestamp">{m.time}</div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-bubble-wrap assistant">
            <div className="chat-bubble-avatar">
              <LucideIcon name="sparkles" size={15} />
            </div>
            <div className="typing-bubble">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      <div className="gpt-suggestions-bar">
        {promptSuggestions.map((prompt, pIdx) => (
          <button
            type="button"
            key={pIdx}
            className="suggestion-chip"
            onClick={(e) => {
              if (e && e.preventDefault) e.preventDefault();
              handleSendMessage(prompt);
            }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <form
        className="gpt-input-form"
        onSubmit={(e) => {
          if (e && e.preventDefault) e.preventDefault();
          handleSendMessage();
        }}
      >
        <input
          type="text"
          className="gpt-input"
          placeholder="Ask Weather-GPT (e.g., 'Will it rain today?')..."
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
        <button
          type="submit"
          className="gpt-send-btn"
          disabled={!inputQuery.trim() || isTyping}
          aria-label="Send query"
        >
          <LucideIcon name="send" size={16} />
        </button>
      </form>
    </div>
  );
};

// --------------------------------------------------------------------------
// 11. Product Features / How It Works Component
// --------------------------------------------------------------------------
const ProductFeatures = () => {
  const features = [
    {
      icon: "activity",
      title: "Real-Time Telemetry",
      desc: "Instant meteorological data capture across pressure, wind vector, humidity, UV index, and air quality indices."
    },
    {
      icon: "bot",
      title: "Contextual AI Reasoning",
      desc: "Ask anything in natural conversational English. Weather-GPT cross-references real telemetry to offer personalized lifestyle and travel advice."
    },
    {
      icon: "map-pin",
      title: "Geospatial Visual Analytics",
      desc: "Interactive radar station mapping and high-resolution Bézier temperature curvature curves built for presentation excellence."
    }
  ];

  return (
    <section className="features-section">
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <LucideIcon name="sparkles" size={24} color="var(--accent-blue)" />
            <span>How Weather-GPT Works</span>
          </h2>
          <p className="section-subtitle">Bridging atmospheric telemetry with generative conversational intelligence</p>
        </div>
      </div>

      <div className="features-grid">
        {features.map((feat, idx) => (
          <div key={idx} className="glass-card feature-card">
            <div className="feature-icon-box">
              <LucideIcon name={feat.icon} size={22} />
            </div>
            <h3 className="feature-title">{feat.title}</h3>
            <p className="feature-desc">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// --------------------------------------------------------------------------
// 12. Footer Component
// --------------------------------------------------------------------------
const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="app-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="brand-logo" style={{ fontSize: "1.1rem" }}>
              <div className="brand-icon-wrapper" style={{ width: "32px", height: "32px" }}>
                <LucideIcon name="cloud-sun" size={18} color="#FFFFFF" />
              </div>
              <span>Weather-GPT</span>
            </div>
            <p className="footer-copy">
              © 2026 Weather-GPT Intelligence. Real-Time Meteorological Station.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Export to window for app.js
window.WeatherComponents = {
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
};
