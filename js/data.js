/**
 * Weather-GPT - Comprehensive Mock Weather Datasets & AI Response Engine
 * Designed for offline-first, zero-backend presentation reliability.
 */

window.WEATHER_CITIES = [
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    region: "Gujarat",
    country: "India",
    coords: [23.0225, 72.5714],
    timezone: "IST (UTC+5:30)",
    current: {
      temp: 29,
      feelsLike: 31,
      condition: "Partly Cloudy",
      icon: "cloud-sun",
      high: 33,
      low: 25,
      humidity: 58,
      windSpeed: 14,
      windDirection: "WSW",
      visibility: 8.5,
      pressure: 1012,
      uvIndex: 7,
      uvLevel: "High",
      rainProb: 12,
      sunrise: "06:22 AM",
      sunset: "06:48 PM",
      dewPoint: 20,
      aqi: 82,
      aqiStatus: "Moderate",
      updatedAt: "Just now",
      headline: "Warm afternoon giving way to gentle western breezes"
    },
    alerts: [
      {
        id: "alert-ahm-1",
        severity: "warning",
        category: "UV Advisory",
        title: "High UV Index Warning",
        timing: "Peak between 11:30 AM – 3:30 PM",
        description: "UV index reaches 7+ during midday. Apply broad-spectrum SPF 30+ sunscreen and wear UV-rated sunglasses if staying outside.",
        icon: "sun"
      },
      {
        id: "alert-ahm-2",
        severity: "info",
        category: "Evening Cooling",
        title: "Favorable Evening Breezes",
        timing: "07:30 PM onwards",
        description: "South-westerly winds will taper down humidity levels tonight, providing comfortable conditions for outdoor walks along Sabarmati Riverfront.",
        icon: "wind"
      }
    ],
    hourly: [
      { time: "06 AM", temp: 25, rainProb: 5, icon: "sun", condition: "Clear Sunrise", pop: 5 },
      { time: "07 AM", temp: 26, rainProb: 5, icon: "sun", condition: "Sunny", pop: 5 },
      { time: "08 AM", temp: 27, rainProb: 5, icon: "sun", condition: "Sunny", pop: 5 },
      { time: "09 AM", temp: 28, rainProb: 8, icon: "cloud-sun", condition: "Partly Cloudy", pop: 8 },
      { time: "10 AM", temp: 30, rainProb: 10, icon: "cloud-sun", condition: "Partly Cloudy", pop: 10 },
      { time: "11 AM", temp: 31, rainProb: 10, icon: "cloud-sun", condition: "Warm & Humid", pop: 10 },
      { time: "12 PM", temp: 32, rainProb: 12, icon: "sun", condition: "Bright & Hot", pop: 12 },
      { time: "01 PM", temp: 33, rainProb: 15, icon: "sun", condition: "Peak Temperature", pop: 15 },
      { time: "02 PM", temp: 33, rainProb: 15, icon: "cloud-sun", condition: "Scattered Clouds", pop: 15 },
      { time: "03 PM", temp: 32, rainProb: 12, icon: "cloud-sun", condition: "Partly Cloudy", pop: 12 },
      { time: "04 PM", temp: 31, rainProb: 10, icon: "cloud-sun", condition: "Mild Clouds", pop: 10 },
      { time: "05 PM", temp: 30, rainProb: 8, icon: "sun", condition: "Golden Hour", pop: 8 },
      { time: "06 PM", temp: 29, rainProb: 10, icon: "sunset", condition: "Warm Sunset", pop: 10 },
      { time: "07 PM", temp: 28, rainProb: 10, icon: "cloud-moon", condition: "Pleasant", pop: 10 },
      { time: "08 PM", temp: 28, rainProb: 8, icon: "cloud-moon", condition: "Breezy Night", pop: 8 },
      { time: "09 PM", temp: 27, rainProb: 6, icon: "moon", condition: "Clear Night", pop: 6 },
      { time: "10 PM", temp: 27, rainProb: 6, icon: "moon", condition: "Clear Sky", pop: 6 },
      { time: "11 PM", temp: 26, rainProb: 5, icon: "moon", condition: "Calm", pop: 5 },
      { time: "12 AM", temp: 26, rainProb: 5, icon: "moon", condition: "Cooling", pop: 5 },
      { time: "01 AM", temp: 25, rainProb: 5, icon: "moon", condition: "Overnight Low", pop: 5 },
      { time: "02 AM", temp: 25, rainProb: 5, icon: "moon", condition: "Clear Night", pop: 5 },
      { time: "03 AM", temp: 25, rainProb: 5, icon: "moon", condition: "Peaceful", pop: 5 },
      { time: "04 AM", temp: 24, rainProb: 5, icon: "moon", condition: "Pre-dawn Low", pop: 5 },
      { time: "05 AM", temp: 24, rainProb: 5, icon: "cloud-sun", condition: "Dawn Mist", pop: 5 }
    ],
    weekly: [
      { day: "Today", date: "Thu, Sep 18", condition: "Partly Cloudy", icon: "cloud-sun", high: 33, low: 25, rainProb: 12, summary: "Warm afternoon with scattered clouds and gentle evening breeze." },
      { day: "Tomorrow", date: "Fri, Sep 19", condition: "Sunny & Bright", icon: "sun", high: 34, low: 26, rainProb: 8, summary: "Clear sunny skies with strong afternoon solar intensity." },
      { day: "Saturday", date: "Sat, Sep 20", condition: "Passing Clouds", icon: "cloud-sun", high: 33, low: 25, rainProb: 15, summary: "Mild humidity, great for early weekend outings." },
      { day: "Sunday", date: "Sun, Sep 21", condition: "Scattered Thunder", icon: "cloud-lightning", high: 31, low: 24, rainProb: 45, summary: "Brief thunderstorm cell possible in the late afternoon." },
      { day: "Monday", date: "Mon, Sep 22", condition: "Light Rain", icon: "cloud-drizzle", high: 30, low: 23, rainProb: 50, summary: "Intermittent light drizzle keeping ambient air fresh." },
      { day: "Tuesday", date: "Tue, Sep 23", condition: "Partly Cloudy", icon: "cloud-sun", high: 32, low: 24, rainProb: 20, summary: "Clearing skies with moderate relative humidity." },
      { day: "Wednesday", date: "Wed, Sep 24", condition: "Mostly Sunny", icon: "sun", high: 34, low: 25, rainProb: 10, summary: "Warm autumn day with high visibility and dry winds." }
    ]
  },
  {
    id: "mumbai",
    name: "Mumbai",
    region: "Maharashtra",
    country: "India",
    coords: [19.076, 72.8777],
    timezone: "IST (UTC+5:30)",
    current: {
      temp: 28,
      feelsLike: 33,
      condition: "Tropical Humidity & Haze",
      icon: "cloud",
      high: 31,
      low: 26,
      humidity: 82,
      windSpeed: 18,
      windDirection: "WNW",
      visibility: 6.0,
      pressure: 1009,
      uvIndex: 6,
      uvLevel: "Moderate",
      rainProb: 38,
      sunrise: "06:28 AM",
      sunset: "06:42 PM",
      dewPoint: 24,
      aqi: 94,
      aqiStatus: "Moderate",
      updatedAt: "Just now",
      headline: "Coastal moisture with warm coastal breeze along Marine Drive"
    },
    alerts: [
      {
        id: "alert-mum-1",
        severity: "warning",
        category: "High Humidity",
        title: "Elevated Heat Index",
        timing: "All day",
        description: "Relative humidity at 82% increases perceived warmth to 33°C. Stay well hydrated when traveling outdoors.",
        icon: "droplet"
      }
    ],
    hourly: [
      { time: "06 AM", temp: 26, rainProb: 20, icon: "cloud-moon", condition: "Hazy Dawn", pop: 20 },
      { time: "08 AM", temp: 27, rainProb: 25, icon: "cloud", condition: "Overcast", pop: 25 },
      { time: "10 AM", temp: 29, rainProb: 30, icon: "cloud-sun", condition: "Humid Sunshine", pop: 30 },
      { time: "12 PM", temp: 31, rainProb: 35, icon: "cloud-sun", condition: "Peak Heat", pop: 35 },
      { time: "02 PM", temp: 31, rainProb: 40, icon: "cloud-rain", condition: "Chance Drizzle", pop: 40 },
      { time: "04 PM", temp: 30, rainProb: 35, icon: "cloud", condition: "Cloudy Breeze", pop: 35 },
      { time: "06 PM", temp: 29, rainProb: 30, icon: "sunset", condition: "Coastal Dusk", pop: 30 },
      { time: "08 PM", temp: 28, rainProb: 25, icon: "cloud-moon", condition: "Sea Breeze", pop: 25 },
      { time: "10 PM", temp: 27, rainProb: 20, icon: "cloud-moon", condition: "Warm Night", pop: 20 },
      { time: "12 AM", temp: 27, rainProb: 15, icon: "moon", condition: "Moist Atmosphere", pop: 15 },
      { time: "02 AM", temp: 26, rainProb: 15, icon: "moon", condition: "Calm Waves", pop: 15 },
      { time: "04 AM", temp: 26, rainProb: 15, icon: "moon", condition: "Early Low", pop: 15 }
    ],
    weekly: [
      { day: "Today", date: "Thu, Sep 18", condition: "Tropical Haze", icon: "cloud", high: 31, low: 26, rainProb: 38, summary: "Humid coastal weather with localized coastal mist." },
      { day: "Tomorrow", date: "Fri, Sep 19", condition: "Passing Showers", icon: "cloud-rain", high: 30, low: 25, rainProb: 65, summary: "Scattered coastal rain bands passing through Mumbai suburbs." },
      { day: "Saturday", date: "Sat, Sep 20", condition: "Scattered Rain", icon: "cloud-rain", high: 29, low: 25, rainProb: 55, summary: "Intermittent refreshing showers and breezy coastline." },
      { day: "Sunday", date: "Sun, Sep 21", condition: "Cloudy Intervals", icon: "cloud-sun", high: 31, low: 26, rainProb: 30, summary: "Mix of high clouds and sunshine with humid air." },
      { day: "Monday", date: "Mon, Sep 22", condition: "Partly Cloudy", icon: "cloud-sun", high: 32, low: 26, rainProb: 25, summary: "Warm and muggy with pleasant dusk sea winds." },
      { day: "Tuesday", date: "Tue, Sep 23", condition: "Humid & Sunny", icon: "sun", high: 32, low: 27, rainProb: 20, summary: "Bright sun filtering through maritime clouds." },
      { day: "Wednesday", date: "Wed, Sep 24", condition: "Breezy Showers", icon: "cloud-drizzle", high: 30, low: 26, rainProb: 40, summary: "Light drizzle spells across south Mumbai." }
    ]
  },
  {
    id: "delhi",
    name: "Delhi",
    region: "NCR",
    country: "India",
    coords: [28.6139, 77.209],
    timezone: "IST (UTC+5:30)",
    current: {
      temp: 32,
      feelsLike: 35,
      condition: "Hazy Sunshine",
      icon: "sun",
      high: 36,
      low: 27,
      humidity: 49,
      windSpeed: 10,
      windDirection: "NW",
      visibility: 4.5,
      pressure: 1008,
      uvIndex: 8,
      uvLevel: "Very High",
      rainProb: 10,
      sunrise: "06:12 AM",
      sunset: "06:33 PM",
      dewPoint: 19,
      aqi: 148,
      aqiStatus: "Unhealthy for Sensitive",
      updatedAt: "Just now",
      headline: "Warm continental sunshine with autumn haze"
    },
    alerts: [
      {
        id: "alert-del-1",
        severity: "alert",
        category: "Air Quality",
        title: "Elevated AQI Advisory",
        timing: "Morning and Evening hours",
        description: "AQI stands at 148 due to particulate accumulation. Sensitive groups should minimize vigorous outdoor cardio.",
        icon: "shield-alert"
      },
      {
        id: "alert-del-2",
        severity: "warning",
        category: "UV Advisory",
        title: "Very High UV Index (8)",
        timing: "12:00 PM – 3:00 PM",
        description: "Solar radiation reaches dangerous thresholds. Avoid direct sun exposure around noon without sunglasses and skin protection.",
        icon: "sun"
      }
    ],
    hourly: [
      { time: "06 AM", temp: 27, rainProb: 5, icon: "sun", condition: "Hazy Dawn", pop: 5 },
      { time: "08 AM", temp: 29, rainProb: 5, icon: "sun", condition: "Hazy Sun", pop: 5 },
      { time: "10 AM", temp: 32, rainProb: 8, icon: "sun", condition: "Hot Sunshine", pop: 8 },
      { time: "12 PM", temp: 35, rainProb: 10, icon: "sun", condition: "Peak Heat", pop: 10 },
      { time: "02 PM", temp: 36, rainProb: 10, icon: "sun", condition: "Afternoon High", pop: 10 },
      { time: "04 PM", temp: 34, rainProb: 8, icon: "cloud-sun", condition: "Dust Haze", pop: 8 },
      { time: "06 PM", temp: 32, rainProb: 5, icon: "sunset", condition: "Golden Sunset", pop: 5 },
      { time: "08 PM", temp: 30, rainProb: 5, icon: "moon", condition: "Warm Night", pop: 5 },
      { time: "10 PM", temp: 29, rainProb: 5, icon: "moon", condition: "Stagnant Air", pop: 5 },
      { time: "12 AM", temp: 28, rainProb: 5, icon: "moon", condition: "Night Calm", pop: 5 },
      { time: "02 AM", temp: 27, rainProb: 5, icon: "moon", condition: "Early Hours", pop: 5 },
      { time: "04 AM", temp: 27, rainProb: 5, icon: "moon", condition: "Coolest Hour", pop: 5 }
    ],
    weekly: [
      { day: "Today", date: "Thu, Sep 18", condition: "Hazy Sunshine", icon: "sun", high: 36, low: 27, rainProb: 10, summary: "Warm afternoon with dry winds and moderate dust haze." },
      { day: "Tomorrow", date: "Fri, Sep 19", condition: "Clear & Hot", icon: "sun", high: 37, low: 27, rainProb: 5, summary: "Strong direct sunlight with low cloud coverage." },
      { day: "Saturday", date: "Sat, Sep 20", condition: "Mostly Sunny", icon: "sun", high: 36, low: 26, rainProb: 8, summary: "Dry conditions with mild northwesterly breeze." },
      { day: "Sunday", date: "Sun, Sep 21", condition: "Passing Clouds", icon: "cloud-sun", high: 35, low: 25, rainProb: 18, summary: "Slight drop in peak heat with high cloud cover." },
      { day: "Monday", date: "Mon, Sep 22", condition: "Isolated Drizzle", icon: "cloud-drizzle", high: 33, low: 24, rainProb: 35, summary: "Chance of sudden quick shower bringing relief." },
      { day: "Tuesday", date: "Tue, Sep 23", condition: "Pleasant Sun", icon: "sun", high: 34, low: 25, rainProb: 15, summary: "Fresh morning followed by warm afternoon." },
      { day: "Wednesday", date: "Wed, Sep 24", condition: "Sunny", icon: "sun", high: 35, low: 25, rainProb: 10, summary: "Stable continental weather pattern continues." }
    ]
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    region: "Karnataka",
    country: "India",
    coords: [12.9716, 77.5946],
    timezone: "IST (UTC+5:30)",
    current: {
      temp: 24,
      feelsLike: 24,
      condition: "Pleasant & Breezy",
      icon: "cloud-sun",
      high: 27,
      low: 19,
      humidity: 68,
      windSpeed: 21,
      windDirection: "W",
      visibility: 10.0,
      pressure: 1014,
      uvIndex: 5,
      uvLevel: "Moderate",
      rainProb: 22,
      sunrise: "06:14 AM",
      sunset: "06:26 PM",
      dewPoint: 17,
      aqi: 42,
      aqiStatus: "Good",
      updatedAt: "Just now",
      headline: "Delightful plateau climate with crisp westerly winds"
    },
    alerts: [
      {
        id: "alert-blr-1",
        severity: "info",
        category: "Optimal Weather",
        title: "Prime Outdoor Conditions",
        timing: "Ideal throughout the day",
        description: "AQI is pristine (42) and ambient temperature stays under 27°C. Perfect day for sports, running, or outdoor cafe sessions.",
        icon: "sparkles"
      }
    ],
    hourly: [
      { time: "06 AM", temp: 19, rainProb: 10, icon: "cloud-sun", condition: "Crisp Dawn", pop: 10 },
      { time: "08 AM", temp: 21, rainProb: 10, icon: "cloud-sun", condition: "Pleasant", pop: 10 },
      { time: "10 AM", temp: 24, rainProb: 15, icon: "sun", condition: "Breezy Sun", pop: 15 },
      { time: "12 PM", temp: 26, rainProb: 20, icon: "cloud-sun", condition: "Mild Warmth", pop: 20 },
      { time: "02 PM", temp: 27, rainProb: 25, icon: "cloud-sun", condition: "Day Peak", pop: 25 },
      { time: "04 PM", temp: 26, rainProb: 30, icon: "cloud-rain", condition: "Drizzle Chance", pop: 30 },
      { time: "06 PM", temp: 24, rainProb: 20, icon: "sunset", condition: "Cool Breeze", pop: 20 },
      { time: "08 PM", temp: 22, rainProb: 15, icon: "cloud-moon", condition: "Chilly Breeze", pop: 15 },
      { time: "10 PM", temp: 21, rainProb: 10, icon: "moon", condition: "Crisp Night", pop: 10 },
      { time: "12 AM", temp: 20, rainProb: 10, icon: "moon", condition: "Cool", pop: 10 },
      { time: "02 AM", temp: 19, rainProb: 10, icon: "moon", condition: "Peaceful", pop: 10 },
      { time: "04 AM", temp: 19, rainProb: 10, icon: "moon", condition: "Night Low", pop: 10 }
    ],
    weekly: [
      { day: "Today", date: "Thu, Sep 18", condition: "Pleasant & Breezy", icon: "cloud-sun", high: 27, low: 19, rainProb: 22, summary: "Signature Bangalore pleasant weather with mild clouds." },
      { day: "Tomorrow", date: "Fri, Sep 19", condition: "Light Evening Shower", icon: "cloud-drizzle", high: 26, low: 19, rainProb: 48, summary: "Balmy afternoon with late afternoon cooling rain." },
      { day: "Saturday", date: "Sat, Sep 20", condition: "Passing Showers", icon: "cloud-rain", high: 25, low: 18, rainProb: 60, summary: "Overcast skies with breezy, rejuvenating showers." },
      { day: "Sunday", date: "Sun, Sep 21", condition: "Partly Cloudy", icon: "cloud-sun", high: 26, low: 19, rainProb: 30, summary: "Comfortable weekend breeze with sunny windows." },
      { day: "Monday", date: "Mon, Sep 22", condition: "Breezy & Mild", icon: "cloud", high: 27, low: 19, rainProb: 25, summary: "Optimal workweek start with pleasant temperatures." },
      { day: "Tuesday", date: "Tue, Sep 23", condition: "Scattered Clouds", icon: "cloud-sun", high: 28, low: 20, rainProb: 15, summary: "Slightly warmer midday with clear evening." },
      { day: "Wednesday", date: "Wed, Sep 24", condition: "Mostly Sunny", icon: "sun", high: 28, low: 19, rainProb: 20, summary: "Crisp morning and comfortable sunshine all day." }
    ]
  },
  {
    id: "dubai",
    name: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    coords: [25.2048, 55.2708],
    timezone: "GST (UTC+4:00)",
    current: {
      temp: 38,
      feelsLike: 43,
      condition: "Blazing Sunshine",
      icon: "sun",
      high: 41,
      low: 31,
      humidity: 44,
      windSpeed: 16,
      windDirection: "NW",
      visibility: 10.0,
      pressure: 1007,
      uvIndex: 10,
      uvLevel: "Extreme",
      rainProb: 0,
      sunrise: "06:09 AM",
      sunset: "06:24 PM",
      dewPoint: 22,
      aqi: 92,
      aqiStatus: "Moderate",
      updatedAt: "Just now",
      headline: "Intense Arabian Gulf heat with clear desert horizon"
    },
    alerts: [
      {
        id: "alert-dxb-1",
        severity: "alert",
        category: "Extreme Heat",
        title: "Extreme Thermal Warning (41°C)",
        timing: "10:30 AM – 4:30 PM",
        description: "Heat index reaches 43°C+ due to Gulf coastal humidity. Stay indoors in air-conditioned environments during midday.",
        icon: "thermometer"
      },
      {
        id: "alert-dxb-2",
        severity: "warning",
        category: "UV Extreme",
        title: "UV Index 10 (Extreme Danger)",
        timing: "11:00 AM – 3:30 PM",
        description: "Unprotected skin can burn within 10 minutes. High grade UV protective clothing and sunglasses essential.",
        icon: "sun"
      }
    ],
    hourly: [
      { time: "06 AM", temp: 31, rainProb: 0, icon: "sun", condition: "Warm Dawn", pop: 0 },
      { time: "08 AM", temp: 34, rainProb: 0, icon: "sun", condition: "Bright", pop: 0 },
      { time: "10 AM", temp: 38, rainProb: 0, icon: "sun", condition: "Intense Heat", pop: 0 },
      { time: "12 PM", temp: 40, rainProb: 0, icon: "sun", condition: "Extreme Sun", pop: 0 },
      { time: "02 PM", temp: 41, rainProb: 0, icon: "sun", condition: "Peak High", pop: 0 },
      { time: "04 PM", temp: 39, rainProb: 0, icon: "sun", condition: "Harsh Sun", pop: 0 },
      { time: "06 PM", temp: 36, rainProb: 0, icon: "sunset", condition: "Desert Dusk", pop: 0 },
      { time: "08 PM", temp: 34, rainProb: 0, icon: "moon", condition: "Warm Night", pop: 0 },
      { time: "10 PM", temp: 33, rainProb: 0, icon: "moon", condition: "Gulf Moisture", pop: 0 },
      { time: "12 AM", temp: 32, rainProb: 0, icon: "moon", condition: "Balmy", pop: 0 },
      { time: "02 AM", temp: 31, rainProb: 0, icon: "moon", condition: "Clear Sky", pop: 0 },
      { time: "04 AM", temp: 31, rainProb: 0, icon: "moon", condition: "Night Low", pop: 0 }
    ],
    weekly: [
      { day: "Today", date: "Thu, Sep 18", condition: "Blazing Sunshine", icon: "sun", high: 41, low: 31, rainProb: 0, summary: "Very hot with crystal clear desert skies." },
      { day: "Tomorrow", date: "Fri, Sep 19", condition: "Clear & Scorching", icon: "sun", high: 42, low: 32, rainProb: 0, summary: "Peak thermal conditions with low wind speed." },
      { day: "Saturday", date: "Sat, Sep 20", condition: "Sunny & Coastal Haze", icon: "sun", high: 40, low: 31, rainProb: 0, summary: "High coastal moisture building towards evening." },
      { day: "Sunday", date: "Sun, Sep 21", condition: "Bright Sun", icon: "sun", high: 39, low: 30, rainProb: 0, summary: "Slight easing of temperatures with offshore winds." },
      { day: "Monday", date: "Mon, Sep 22", condition: "Sunny & Breezy", icon: "wind", high: 39, low: 30, rainProb: 0, summary: "Breezy shamal winds raising light dust in desert regions." },
      { day: "Tuesday", date: "Tue, Sep 23", condition: "Clear Sky", icon: "sun", high: 40, low: 31, rainProb: 0, summary: "Dry sunny climate continuing through midweek." },
      { day: "Wednesday", date: "Wed, Sep 24", condition: "Sunny", icon: "sun", high: 41, low: 31, rainProb: 0, summary: "Classic Dubai autumn heat with warm night temperatures." }
    ]
  },
  {
    id: "london",
    name: "London",
    region: "Greater London",
    country: "United Kingdom",
    coords: [51.5074, -0.1278],
    timezone: "BST (UTC+1:00)",
    current: {
      temp: 18,
      feelsLike: 17,
      condition: "Overcast & Intermittent Drizzle",
      icon: "cloud-drizzle",
      high: 20,
      low: 13,
      humidity: 78,
      windSpeed: 23,
      windDirection: "SSW",
      visibility: 8.0,
      pressure: 1016,
      uvIndex: 3,
      uvLevel: "Low",
      rainProb: 65,
      sunrise: "06:44 AM",
      sunset: "07:11 PM",
      dewPoint: 12,
      aqi: 28,
      aqiStatus: "Good",
      updatedAt: "Just now",
      headline: "Classic British autumn weather with passing North Atlantic showers"
    },
    alerts: [
      {
        id: "alert-ldn-1",
        severity: "warning",
        category: "Precipitation Alert",
        title: "Occasional Rain Bands Expected",
        timing: "Active between 1:00 PM – 6:30 PM",
        description: "Frontal system will bring light to moderate showers across Central London. An umbrella or water-resistant coat is advised.",
        icon: "cloud-rain"
      }
    ],
    hourly: [
      { time: "06 AM", temp: 13, rainProb: 30, icon: "cloud", condition: "Overcast Morning", pop: 30 },
      { time: "08 AM", temp: 14, rainProb: 40, icon: "cloud-drizzle", condition: "Light Drizzle", pop: 40 },
      { time: "10 AM", temp: 16, rainProb: 50, icon: "cloud-rain", condition: "Passing Shower", pop: 50 },
      { time: "12 PM", temp: 18, rainProb: 65, icon: "cloud-rain", condition: "Rain Bands", pop: 65 },
      { time: "02 PM", temp: 19, rainProb: 60, icon: "cloud-rain", condition: "Scattered Rain", pop: 60 },
      { time: "04 PM", temp: 20, rainProb: 45, icon: "cloud-sun", condition: "Brief Sunbreak", pop: 45 },
      { time: "06 PM", temp: 18, rainProb: 35, icon: "cloud", condition: "Cloudy Dusk", pop: 35 },
      { time: "08 PM", temp: 16, rainProb: 25, icon: "cloud-moon", condition: "Breezy Evening", pop: 25 },
      { time: "10 PM", temp: 15, rainProb: 20, icon: "cloud-moon", condition: "Chilly Wind", pop: 20 },
      { time: "12 AM", temp: 14, rainProb: 15, icon: "moon", condition: "Damp Night", pop: 15 },
      { time: "02 AM", temp: 13, rainProb: 15, icon: "moon", condition: "Cool Mist", pop: 15 },
      { time: "04 AM", temp: 13, rainProb: 15, icon: "moon", condition: "Overnight Low", pop: 15 }
    ],
    weekly: [
      { day: "Today", date: "Thu, Sep 18", condition: "Overcast & Drizzle", icon: "cloud-drizzle", high: 20, low: 13, rainProb: 65, summary: "Passing maritime showers with gusty south-southwest winds." },
      { day: "Tomorrow", date: "Fri, Sep 19", condition: "Sunny Intervals", icon: "cloud-sun", high: 21, low: 12, rainProb: 25, summary: "Pleasant clearing behind the cold front with bright spells." },
      { day: "Saturday", date: "Sat, Sep 20", condition: "Partly Cloudy", icon: "cloud-sun", high: 19, low: 11, rainProb: 20, summary: "Crisp, dry weekend conditions perfect for walks in Hyde Park." },
      { day: "Sunday", date: "Sun, Sep 21", condition: "Brisk Showers", icon: "cloud-rain", high: 18, low: 12, rainProb: 55, summary: "Windy with periodic rain moving in from the Atlantic." },
      { day: "Monday", date: "Mon, Sep 22", condition: "Cloudy & Cool", icon: "cloud", high: 17, low: 10, rainProb: 30, summary: "Noticeable autumn chill with brisk easterly breezes." },
      { day: "Tuesday", date: "Tue, Sep 23", condition: "Bright & Crisp", icon: "sun", high: 18, low: 9, rainProb: 15, summary: "Chilly dawn giving way to clear sunny blue skies." },
      { day: "Wednesday", date: "Wed, Sep 24", condition: "Overcast", icon: "cloud", high: 17, low: 11, rainProb: 40, summary: "Dense cloud deck lowering in the evening." }
    ]
  },
  {
    id: "new-york",
    name: "New York",
    region: "New York",
    country: "United States",
    coords: [40.7128, -74.006],
    timezone: "EDT (UTC-4:00)",
    current: {
      temp: 22,
      feelsLike: 21,
      condition: "Clear & Crisp",
      icon: "sun",
      high: 25,
      low: 16,
      humidity: 52,
      windSpeed: 17,
      windDirection: "WNW",
      visibility: 10.0,
      pressure: 1018,
      uvIndex: 5,
      uvLevel: "Moderate",
      rainProb: 8,
      sunrise: "06:41 AM",
      sunset: "07:02 PM",
      dewPoint: 11,
      aqi: 35,
      aqiStatus: "Good",
      updatedAt: "Just now",
      headline: "Crisp early autumn breeze blowing through Manhattan avenues"
    },
    alerts: [
      {
        id: "alert-nyc-1",
        severity: "info",
        category: "Fair Weather",
        title: "Ideal Walking & Commute Weather",
        timing: "Throughout the day",
        description: "Zero rain expected and crisp humidity (52%). Ideal conditions for outdoor activities in Central Park and waterfront piers.",
        icon: "sparkles"
      }
    ],
    hourly: [
      { time: "06 AM", temp: 16, rainProb: 5, icon: "sun", condition: "Crisp Dawn", pop: 5 },
      { time: "08 AM", temp: 18, rainProb: 5, icon: "sun", condition: "Sunny Rush Hour", pop: 5 },
      { time: "10 AM", temp: 21, rainProb: 5, icon: "sun", condition: "Bright Sun", pop: 5 },
      { time: "12 PM", temp: 23, rainProb: 8, icon: "sun", condition: "Pleasant Midday", pop: 8 },
      { time: "02 PM", temp: 25, rainProb: 8, icon: "sun", condition: "Afternoon High", pop: 8 },
      { time: "04 PM", temp: 24, rainProb: 8, icon: "cloud-sun", condition: "Gentle Clouds", pop: 8 },
      { time: "06 PM", temp: 22, rainProb: 5, icon: "sunset", condition: "Vibrant Sunset", pop: 5 },
      { time: "08 PM", temp: 20, rainProb: 5, icon: "moon", condition: "Cool Evening", pop: 5 },
      { time: "10 PM", temp: 18, rainProb: 5, icon: "moon", condition: "Breezy Night", pop: 5 },
      { time: "12 AM", temp: 17, rainProb: 5, icon: "moon", condition: "Clear Sky", pop: 5 },
      { time: "02 AM", temp: 16, rainProb: 5, icon: "moon", condition: "Overnight Low", pop: 5 },
      { time: "04 AM", temp: 16, rainProb: 5, icon: "moon", condition: "Calm Dawn", pop: 5 }
    ],
    weekly: [
      { day: "Today", date: "Thu, Sep 18", condition: "Clear & Crisp", icon: "sun", high: 25, low: 16, rainProb: 8, summary: "Beautiful autumn sunshine with comfortable humidity levels." },
      { day: "Tomorrow", date: "Fri, Sep 19", condition: "Sunny & Mild", icon: "sun", high: 26, low: 17, rainProb: 10, summary: "Warm afternoon with calm Hudson river breezes." },
      { day: "Saturday", date: "Sat, Sep 20", condition: "Passing Clouds", icon: "cloud-sun", high: 24, low: 18, rainProb: 20, summary: "Pleasant Saturday weather across the five boroughs." },
      { day: "Sunday", date: "Sun, Sep 21", condition: "Afternoon Rain", icon: "cloud-rain", high: 22, low: 16, rainProb: 70, summary: "Coastal low pressure brings steady rain showers by 2 PM." },
      { day: "Monday", date: "Mon, Sep 22", condition: "Clearing & Breezy", icon: "wind", high: 21, low: 14, rainProb: 25, summary: "Brisk northwest gusts clearing cloud ceiling." },
      { day: "Tuesday", date: "Tue, Sep 23", condition: "Crisp & Sunny", icon: "sun", high: 20, low: 13, rainProb: 5, summary: "Refreshing cool fall day with deep blue skies." },
      { day: "Wednesday", date: "Wed, Sep 24", condition: "Mostly Sunny", icon: "sun", high: 22, low: 14, rainProb: 10, summary: "Comfortable seasonal temperatures continue." }
    ]
  },
  {
    id: "tokyo",
    name: "Tokyo",
    region: "Kanto",
    country: "Japan",
    coords: [35.6762, 139.6503],
    timezone: "JST (UTC+9:00)",
    current: {
      temp: 26,
      feelsLike: 27,
      condition: "Clear Evening & Gentle Breeze",
      icon: "moon",
      high: 28,
      low: 20,
      humidity: 62,
      windSpeed: 12,
      windDirection: "ENE",
      visibility: 10.0,
      pressure: 1013,
      uvIndex: 4,
      uvLevel: "Moderate",
      rainProb: 15,
      sunrise: "05:25 AM",
      sunset: "05:46 PM",
      dewPoint: 18,
      aqi: 22,
      aqiStatus: "Excellent",
      updatedAt: "Just now",
      headline: "Clear starry skies over Shinjuku and Tokyo Bay"
    },
    alerts: [
      {
        id: "alert-tky-1",
        severity: "info",
        category: "Air Quality",
        title: "Pristine Air Quality (AQI 22)",
        timing: "Optimal 24 hours",
        description: "Clean oceanic airflow provides immaculate visibility of Mount Fuji in the early mornings.",
        icon: "sparkles"
      }
    ],
    hourly: [
      { time: "06 AM", temp: 20, rainProb: 10, icon: "sun", condition: "Sunrise", pop: 10 },
      { time: "08 AM", temp: 22, rainProb: 10, icon: "sun", condition: "Morning Sun", pop: 10 },
      { time: "10 AM", temp: 25, rainProb: 12, icon: "cloud-sun", condition: "Scattered Clouds", pop: 12 },
      { time: "12 PM", temp: 27, rainProb: 15, icon: "sun", condition: "Midday Warmth", pop: 15 },
      { time: "02 PM", temp: 28, rainProb: 15, icon: "sun", condition: "Peak High", pop: 15 },
      { time: "04 PM", temp: 27, rainProb: 15, icon: "cloud-sun", condition: "Pleasant", pop: 15 },
      { time: "06 PM", temp: 25, rainProb: 10, icon: "sunset", condition: "Tokyo Twilight", pop: 10 },
      { time: "08 PM", temp: 24, rainProb: 10, icon: "moon", condition: "Neon Night", pop: 10 },
      { time: "10 PM", temp: 23, rainProb: 10, icon: "moon", condition: "Calm Skies", pop: 10 },
      { time: "12 AM", temp: 22, rainProb: 5, icon: "moon", condition: "Quiet Night", pop: 5 },
      { time: "02 AM", temp: 21, rainProb: 5, icon: "moon", condition: "Night Breeze", pop: 5 },
      { time: "04 AM", temp: 20, rainProb: 5, icon: "moon", condition: "Pre-dawn Low", pop: 5 }
    ],
    weekly: [
      { day: "Today", date: "Thu, Sep 18", condition: "Clear Evening", icon: "moon", high: 28, low: 20, rainProb: 15, summary: "Comfortable early autumn day with mild sea breeze." },
      { day: "Tomorrow", date: "Fri, Sep 19", condition: "Partly Cloudy", icon: "cloud-sun", high: 27, low: 21, rainProb: 20, summary: "Gentle overcast intervals with good visibility." },
      { day: "Saturday", date: "Sat, Sep 20", condition: "Light Rain Spell", icon: "cloud-drizzle", high: 25, low: 19, rainProb: 50, summary: "Passing maritime rain bands across Greater Tokyo." },
      { day: "Sunday", date: "Sun, Sep 21", condition: "Sunny & Pleasant", icon: "sun", high: 26, low: 18, rainProb: 10, summary: "Clear skies perfect for exploring Asakusa and Odaiba." },
      { day: "Monday", date: "Mon, Sep 22", condition: "Mostly Sunny", icon: "sun", high: 27, low: 19, rainProb: 15, summary: "Pleasant autumn breeze and crisp morning air." },
      { day: "Tuesday", date: "Tue, Sep 23", condition: "Scattered Clouds", icon: "cloud-sun", high: 26, low: 20, rainProb: 25, summary: "Mild humidity with moderate cloud ceiling." },
      { day: "Wednesday", date: "Wed, Sep 24", condition: "Sunny & Bright", icon: "sun", high: 28, low: 19, rainProb: 10, summary: "Warm sunshine throughout the metropolitan area." }
    ]
  }
];

/**
 * Weather-GPT Intelligent Natural Language Response Engine
 * Simulates an advanced contextual AI assistant using live telemetry from the active city.
 */
window.generateAIResponse = function(query, cityData, unit = 'C') {
  if (!cityData) return "I'm sorry, I don't have weather telemetry for that location in demo mode.";

  const q = query.toLowerCase().trim();
  let c = cityData;

  // Resolve city mentioned in query if available
  if (window.WEATHER_CITIES && Array.isArray(window.WEATHER_CITIES)) {
    const matchedCity = window.WEATHER_CITIES.find(city => {
      const nameRegex = new RegExp('\\b' + city.name.toLowerCase() + '\\b', 'i');
      return nameRegex.test(q);
    });
    if (matchedCity) {
      c = matchedCity;
    }
  }

  const curr = c.current;

  // Temperature unit converter
  const formatTemp = (tempC) => {
    if (unit === 'F') {
      return `${Math.round((tempC * 9) / 5 + 32)}°F`;
    }
    return `${tempC}°C`;
  };

  const currentT = formatTemp(curr.temp);
  const feelsLikeT = formatTemp(curr.feelsLike);
  const highT = formatTemp(curr.high);
  const lowT = formatTemp(curr.low);

  // Check if query is in Hindi / Hinglish
  const isHindi = ["hoga", "hogi", "nahi", "kya", "aaj", "barish", "baarish", "me", "mein", "hai", "kaise", "kese", "batao", "barsat", "kapde", "garmi", "thand", "kal", "parso"].some(w => q.includes(w));

  // 0. Greeting detection (e.g. "hyy", "hii", "hello", "namaste", "kaise ho")
  const words = q.match(/\b[a-zA-Z]+\b/g) || [];
  const greetingWords = new Set(["hyy", "hy", "hii", "hi", "hey", "heyy", "hello", "hlo", "helo", "namaste", "hola", "sup", "wassup"]);
  const isGreetingOnly = words.length > 0 && words.every(w => greetingWords.has(w) || ["ho", "aap", "bhai", "bro", "there", "weathergpt", "gpt", "admin", "kaise", "kese", "halo"].includes(w));

  if (isGreetingOnly) {
    if (isHindi || words.some(w => ["hyy", "hy", "hii", "kaise", "kese", "namaste"].includes(w))) {
      return `👋 **Hyy! Hello!** Main WeatherGPT hu. Kaise hain aap?\n\nMain aapko kisi bhi city ka live weather aur forecast bata sakta hu. Abhi station **${c.name}** (${currentT}, ${curr.condition}) par set hai.\n\nAap pooch sakte hain jaise: *"Delhi me aaj rain hoga ya nahi?"* ya *"Ahmedabad ka temperature kitna hai?"*`;
    }
    return `👋 **Hello!** I am WeatherGPT, your climate assistant. Currently monitoring **${c.name}** at **${currentT}** with **${curr.condition.toLowerCase()}** skies. How can I help you with your weather forecast today?`;
  }

  // 1. Rain / Precipitation / Umbrella / Baarish query
  if (q.includes("rain") || q.includes("barish") || q.includes("baarish") || q.includes("barsat") || q.includes("pani") || q.includes("umbrella") || q.includes("wet") || q.includes("shower") || q.includes("precipitation")) {
    if (curr.rainProb >= 40 || curr.condition.toLowerCase().includes("rain") || curr.condition.toLowerCase().includes("drizzle") || curr.condition.toLowerCase().includes("thunder")) {
      if (isHindi) {
        return `🌧️ **Haan (Yes), ${c.name} me aaj rain (baarish) hone ke aasaar hain!**\n\nWahan baarish ka chance **${curr.rainProb}%** hai aur mausam **${curr.condition}** hai. Bahar nikalte waqt umbrella (chhatri) sath zaroor rakhein.`;
      }
      return `🌧️ **Yes, carry an umbrella in ${c.name}!**\n\nThe current rain probability is **${curr.rainProb}%** with ${curr.condition.toLowerCase()}. Hourly telemetry indicates precipitation likelihood peaking today. If you are heading outdoors, carrying an umbrella or light waterproof shell is recommended!`;
    } else if (curr.rainProb >= 20) {
      if (isHindi) {
        return `⛅ **Thodi bohot sambhavna hai:** ${c.name} me **${curr.rainProb}%** chance hai ki halki bochharein ya drizzle ho sakti hai. Savdhani ke liye ek chhota umbrella sath rakh sakte hain.`;
      }
      return `⛅ **Low chance of rain in ${c.name} (${curr.rainProb}%).**\n\nThere may be brief passing sprinkles or scattered cloud pockets, but steady rainfall is unlikely. You likely won't need an umbrella unless you're staying out late.`;
    } else {
      if (isHindi) {
        return `☀️ **Nahi (No), ${c.name} me aaj rain (baarish) nahi hogi!**\n\nWahan baarish ka chance sirf **${curr.rainProb}%** hai aur mausam **${curr.condition.toLowerCase()}** rahega. Aap bina umbrella ke aasaani se bahar jaa sakte hain.`;
      }
      return `☀️ **No rain expected in ${c.name}!**\n\nThe precipitation chance is minimal at just **${curr.rainProb}%** under ${curr.condition.toLowerCase()}. You can safely leave your umbrella behind today.`;
    }
  }

  // 2. Clothing / What to wear query
  if (q.includes("wear") || q.includes("clothing") || q.includes("dress") || q.includes("jacket") || q.includes("outfit")) {
    let advice = "";
    if (curr.temp >= 32) {
      advice = `Lightweight, breathable cotton or linen fabrics are best. With temperatures at **${currentT}** (feels like **${feelsLikeT}**), wear loose clothing, a sun hat, and UV-rated sunglasses.`;
    } else if (curr.temp >= 24) {
      advice = `Comfortable casual clothes like a t-shirt, light chinos, or polo shirts are ideal. The temperature is a pleasant **${currentT}** with ${curr.humidity}% humidity.`;
    } else if (curr.temp >= 16) {
      advice = `Smart layering is recommended. It's currently **${currentT}**; a light cardigan, sweater, or denim jacket will keep you comfortable, especially as the evening winds pick up.`;
    } else {
      advice = `Warm attire is needed. Temperatures are sitting at **${currentT}** with wind speeds of ${curr.windSpeed} km/h. A thermal base layer, warm jacket, and scarf are advised.`;
    }

    if (curr.uvIndex >= 7) {
      advice += ` Don't forget sunscreen (SPF 30+) as the UV index is currently **${curr.uvIndex} (${curr.uvLevel})**.`;
    }
    return `👕 **Style & Outfit Recommendation for ${c.name}:**\n\n${advice}`;
  }

  // 3. Exercise / Workout / Running query
  if (q.includes("exercise") || q.includes("workout") || q.includes("run") || q.includes("running") || q.includes("gym") || q.includes("outdoor")) {
    if (curr.temp >= 35 || curr.aqi > 150) {
      return `⚠️ **Exercise Caution for Outdoor Workouts in ${c.name}:**\n\nWith temperatures hovering at **${currentT}** (feels like **${feelsLikeT}**) and AQI at **${curr.aqi} (${curr.aqiStatus})**, intense outdoor cardio is not recommended during midday. Opt for indoor training or schedule your jog after sunset (around **${curr.sunset}**) when conditions cool down to ~${formatTemp(curr.temp - 4)}.`;
    } else if (curr.rainProb > 50) {
      return `🏃 **Watch for Wet Surfaces:**\n\nRain probability is high (**${curr.rainProb}%**). If you run outdoors, stick to well-lit trails with good grip or consider indoor gym sessions to avoid slipping.`;
    } else {
      return `💪 **Prime Time for Outdoor Activities!**\n\nConditions in ${c.name} are very favorable! Current temperature is **${currentT}**, humidity is **${curr.humidity}%**, and wind speed is **${curr.windSpeed} km/h**. The best time for your run or workout is right now or during the early morning around **${curr.sunrise}**.`;
    }
  }

  // 4. Tomorrow's weather / Future forecast query
  if (q.includes("tomorrow") || q.includes("next day") || q.includes("weekend") || q.includes("future")) {
    const tmrw = c.weekly[1];
    return `📅 **Tomorrow's Forecast for ${c.name} (${tmrw.date}):**\n\nExpect **${tmrw.condition}** with a daily high of **${formatTemp(tmrw.high)}** and a low of **${formatTemp(tmrw.low)}**. Rain chance is **${tmrw.rainProb}%**.\n\n*Summary:* ${tmrw.summary}`;
  }

  // 5. Best time to go outside / Outdoor timing query
  if (q.includes("best time") || q.includes("go outside") || q.includes("walk") || q.includes("timing") || q.includes("when to go")) {
    if (curr.temp >= 30) {
      return `🕒 **Optimal Timing for ${c.name}:**\n\nThe most pleasant windows today are either early morning between **06:00 AM – 08:30 AM** (${formatTemp(curr.low + 2)}) or in the evening after **06:45 PM** following sunset (${formatTemp(curr.temp - 2)}). Avoid the peak thermal radiation zone between 11:30 AM and 03:30 PM.`;
    } else {
      return `🕒 **Optimal Timing for ${c.name}:**\n\nMid-morning (09:00 AM – 11:30 AM) and late afternoon (04:00 PM – 06:30 PM) offer ideal sunlight and comfortable breezes at ~${currentT}. Enjoy the outdoors!`;
    }
  }

  // 6. Temperature / How hot query
  if (q.includes("how hot") || q.includes("temperature") || q.includes("temp") || q.includes("warm") || q.includes("cold")) {
    return `🌡️ **Temperature Overview for ${c.name}:**\n\nCurrently **${currentT}**, feeling like **${feelsLikeT}** due to ${curr.humidity}% humidity. Today's high will peak at **${highT}** with an overnight low dropping to **${lowT}**.`;
  }

  // 7. UV Index / Sun query
  if (q.includes("uv") || q.includes("sun") || q.includes("sunscreen") || q.includes("burn")) {
    return `☀️ **Solar & UV Telemetry for ${c.name}:**\n\nUV Index is currently **${curr.uvIndex} (${curr.uvLevel})**. Sunrise occurred at **${curr.sunrise}** and sunset will be at **${curr.sunset}**. ${curr.uvIndex >= 6 ? "High UV protection (SPF 30+, hat, sunglasses) is strongly advised during peak midday hours." : "UV exposure levels are moderate and safe for standard activities."}`;
  }

  // 8. Wind / Humidity / Air Quality / General stats query
  if (q.includes("wind") || q.includes("breeze") || q.includes("humidity") || q.includes("air") || q.includes("aqi")) {
    return `💨 **Atmospheric Diagnostics for ${c.name}:**\n\n• **Wind:** ${curr.windSpeed} km/h (${curr.windDirection})\n• **Humidity:** ${curr.humidity}%\n• **Barometer:** ${curr.pressure} hPa\n• **Air Quality:** AQI ${curr.aqi} (${curr.aqiStatus})\n• **Visibility:** ${curr.visibility} km`;
  }

  // Generic intelligent fallback with full contextual awareness
  return `✨ **Weather-GPT Intelligence Report for ${c.name}:**\n\nCurrently, ${c.name} is experiencing **${curr.condition}** at **${currentT}** (feels like **${feelsLikeT}**). Highs reach **${highT}**, humidity is at **${curr.humidity}%**, and precipitation probability is **${curr.rainProb}%**.\n\n*Pro Tip:* ${c.current.headline}. Feel free to ask me for outfit ideas, workout suitability, or precipitation predictions!`;
};
