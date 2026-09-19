# Weather-GPT — AI-Powered Weather Assistant

> **"Understand Your Weather. Ask Your Weather."**
> A modern, commercial-grade dark atmospheric SaaS dashboard combining real-time weather telemetry, visual analytics, and an intelligent conversational assistant into one unified experience.

---

## 🚀 Live Demo & Presentation Setup (VS Code Live Server)

This project has been engineered with a **zero-build, zero-backend architecture** specifically designed for reliable local demonstration.

### Quick Start in VS Code:
1. Open **VS Code**.
2. Open the folder:
   ```
   weather-gpt/
   ```
3. Right-click on **`index.html`** and select **"Open with Live Server"** (or click **"Go Live"** in the VS Code status bar).
4. The dashboard will instantly launch in your browser at `http://127.0.0.1:5500/index.html`.

> **No npm install. No npm run dev. No build step. No server dependencies.** Everything loads immediately and reliably.

---

## 🛠️ Technology Stack

* **HTML5**: Semantic document structure, accessibility, and clean metadata.
* **CSS3**: Custom design system featuring dark navy glassmorphism (`backdrop-filter: blur(14px)`), fluid typography using CSS `clamp()`, flexible grids, and strict horizontal overflow protection.
* **JavaScript (ES6+)**: Pure, modern, modular JavaScript.
* **React.js (React 18 & ReactDOM)**: Component-driven UI architecture managing application state, city selection, and unit toggling.
* **Chart.js**: Dark-mode temperature trend line chart with Bézier curve interpolation (`tension: 0.4`), dual axes for precipitation percentage, and interactive tooltips.
* **Leaflet.js**: Geospatial map with CartoDB Dark Matter tiles, radar marker animations, and smooth dynamic pan/zoom (`flyTo`).
* **Lucide Icons**: Crisp vector iconography across all metrics and components.
* **GSAP (GreenSock)**: Micro-animations for the hero section, metric card entrances, and smooth transitions.

---

## 🌟 Core Features & Modules

### 1. Landing & Navigation
- **Top Bar**: Weather-GPT logo, quick navigation links (Home, Dashboard, Hourly, Forecast, Analytics, Map, Weather-GPT), and mobile drawer toggle.
- **Unit Toggle (°C / °F)**: Seamless global state update instantly converting all metrics, hourly forecasts, 7-day outlooks, charts, and AI assistant answers.
- **Hero Area**: Bold headline, subtext, search bar with "Get Weather" CTA, popular city chips, and live preview card.

### 2. Live Atmospheric Telemetry (8 Key Metrics)
- **Humidity (%) & Dew Point**
- **Wind Speed (km/h & mph) with Cardinal Direction**
- **Visibility (km & miles)**
- **Barometric Pressure (hPa)**
- **UV Index & Risk Level**
- **Sunrise & Sunset Timings**
- **Precipitation Probability (%)**
- **Air Quality Index (AQI) & Health Status**

### 3. Weather Advisories & Alerts
- Dynamic alert banners for Heat Warnings, High UV advisories, Rain/Thunder, and Air Quality warnings with timing and actionable safety advice.

### 4. 24-Hour Horizon Timeline
- Horizontally scrollable hourly cards showing time, condition icon, temperature, and rain percentage without horizontal page scroll.

### 5. 7-Day Synoptic Forecast
- Daily breakdown with high/low temperatures, weather icons, conditions, and rain likelihood.

### 6. Interactive Bézier Temperature Chart
- Rendered with Chart.js using linear atmospheric gradients, dual-axis telemetry, and full dark-theme tooltips.

### 7. Geospatial Weather Radar Station
- Leaflet map centered at selected coordinates with custom radar pulse marker and dark tiles matching the dashboard. Default station: **Ahmedabad, Gujarat, India**.

### 8. Weather-GPT Conversational Assistant
- Chat interface with avatar, "AI Online" status badge, message history, and clear option.
- Quick prompt chips:
  - *"Will it rain today?"*
  - *"What should I wear today?"*
  - *"Is it a good time for outdoor exercise?"*
  - *"Should I carry an umbrella?"*
  - *"How hot will it be tomorrow?"*
  - *"What is the best time to go outside?"*
- Dynamic intelligent response engine synthesizing live telemetry from the currently selected city.
- Natural typing indicator animation with realistic delay.

---

## 🏙️ Demo Cities Supported

* **Ahmedabad, Gujarat, India** (Default)
* **Mumbai, Maharashtra, India**
* **Delhi, NCR, India**
* **Bengaluru, Karnataka, India**
* **Dubai, United Arab Emirates**
* **London, United Kingdom**
* **New York, United States**
* **Tokyo, Japan**

*Any search outside demo mode triggers a graceful notice: "Weather data for this location is not available in demo mode." without throwing browser errors.*

---

## 📐 Responsive Breakpoint Matrix

Fully tested and verified across standard device viewports:
* **Mobile (320px – 430px)**: Single column flow, compact metric cards, mobile navigation drawer.
* **Tablet (768px – 1024px)**: 2-column balanced layouts.
* **Desktop (1024px – 1440px+)**: Multi-column dashboard grid with balanced whitespace.

---

## 📂 Project Structure

```
weather-gpt/
├── index.html                  # Main SPA entry point
├── README.md                   # Documentation & setup guide
│
├── css/
│   ├── style.css               # Core dark SaaS design system
│   └── responsive.css          # Viewport breakpoints & overflow rules
│
├── js/
│   ├── data.js                 # Mock datasets & AI response engine
│   ├── components.js           # Reusable React components
│   └── app.js                  # Main React App & state orchestrator
│
└── assets/
    ├── icons/
    │   └── logo.svg            # Weather-GPT brand logo
    └── images/                 # App preview assets
```
