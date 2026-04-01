import type { WeatherData } from "./types";

const LAT = "59.33";
const LON = "18.07";
const BASE = "https://api.open-meteo.com/v1/forecast";

export const fetchWeather = async (): Promise<WeatherData> => {
  const today = new Date().getDay();
  const daysSinceMonday = today === 0 ? 6 : today - 1;
  const daysUntilSunday = 7 - daysSinceMonday;

  const params = new URLSearchParams({
    latitude: LAT,
    longitude: LON,
    current:
      "apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m,precipitation",
    daily:
      "apparent_temperature_max,apparent_temperature_min,weather_code,sunrise,sunset",
    timezone: "Europe/Stockholm",
    past_days: String(daysSinceMonday),
    forecast_days: String(daysUntilSunday),
  });

  const [forecast, geo] = await Promise.all([
    fetch(`${BASE}?${params}`).then((r) => r.json()),
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${LAT}&lon=${LON}&format=json&zoom=10`,
    ).then((r) => r.json()),
  ]);
  const addr = geo.address ?? {};
  forecast.location = addr.city || addr.town || addr.municipality || "Unknown";
  return forecast;
};
