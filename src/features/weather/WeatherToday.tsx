import type { WeatherData } from "./types";
import { formatTime, getIcon, getTodayStr } from "./utils";

export function WeatherToday({ data }: { data: WeatherData }) {
  const { current, daily } = data;
  const todayIdx = daily.time.indexOf(getTodayStr());

  return (
    <div className="card weather-today">
      <h2>{new Date().toLocaleDateString("en-US", { weekday: "long" })} — Today</h2>
      <div className="weather-today-main">
        <span className="weather-today-icon">{getIcon(current.weather_code)}</span>
        <div className="weather-today-info">
          <span className="weather-today-location">{data.location}</span>
          <span className="weather-today-temp">{Math.round(current.apparent_temperature)}°</span>
        </div>
      </div>
      <div className="weather-today-grid">
        <span>☀️ {formatTime(daily.sunrise[todayIdx])}</span>
        <span>🌙 {formatTime(daily.sunset[todayIdx])}</span>
        <span>↑ {Math.round(daily.apparent_temperature_max[todayIdx])}° ↓ {Math.round(daily.apparent_temperature_min[todayIdx])}°</span>
        <span>💨 {Math.round(current.wind_speed_10m)} km/h</span>
        <span>💧 {current.relative_humidity_2m}%</span>
        <span>🌧️ {current.precipitation} mm</span>
      </div>
    </div>
  );
}
