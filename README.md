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

### 1. Direct Login Page & Guest Access (with Skip)
- **Automatic Entrance Modal**: Welcomes any visitor immediately on landing with a dark frosted glass login card.
- **Instant Demo Access**: One-click sign-in as **Forecaster Jay** with preconfigured credentials.
- **Prominent "Skip & Continue as Guest" Action**: One-click bypass allowing anyone to explore all Doppler telemetry, radar maps, and AI forecasting tools in guest mode without credentials.
- **Persistent Session & Navbar Profile**: Shows `Guest Explorer` or `Jay Patel` with quick sign-in / sign-out controls.

### 2. Landing & Navigation
- **Top Bar**: Weather-GPT logo, quick navigation links (Home, Dashboard, Hourly, Forecast, Analytics, Map, Weather-GPT), user status badge, and mobile drawer toggle.
- **Unit Toggle (°C / °F)**: Seamless global state update instantly converting all metrics, hourly forecasts, 7-day outlooks, charts, and AI assistant answers.
- **Hero Area**: Bold headline, subtext, search bar with "Get Weather" CTA, popular city chips, and live preview card.

### 3. Severe Weather Advisory & Heavy Rain Emergency System
- **Level 3 Severe Heavy Rain Warning Banner**: Automatically triggers when torrential rain (> 40% probability or convective showers) is detected over a city (e.g. Mumbai, London).
- **Live Doppler Telemetry Metrics**: Real-time rainfall rate (`48.5 mm/h`), radar reflectivity (`50–55 dBZ`), urban waterlogging risk, and driver visibility impact.
- **Public Safety & Commuter Protection Guidelines**: Actionable IMD/WMO standard safety protocols for motorists, electrical safety hazards, transit disruptions, and emergency disaster helplines (`1077` / `112`).
- **Interactive Presentation Toggle**: A one-click `[ 🌧️ Simulate Heavy Rain Alert ]` button lets you trigger or dismiss the emergency alert live for any city during presentations to impress judges and faculty.

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
