import type { WeatherData } from "./types";
import { formatDay, formatTime, getIcon, getTodayStr } from "./utils";

export function WeatherForecast({ data }: { data: WeatherData }) {
  const { daily } = data;
  const todayStr = getTodayStr();
  const days = daily.time
    .map((day, i) => ({ day, i }))
    .filter(({ day }) => day !== todayStr);

  return (
    <div className="weather-forecast">
      {days.map(({ day, i }) => (
        <div key={day} className="card weather-day">
          <span className="weather-day-name">{formatDay(day)}</span>
          <span>{getIcon(daily.weather_code[i])}</span>
          <span className="weather-day-temps">
            {Math.round(daily.temperature_2m_max[i])}° / {Math.round(daily.temperature_2m_min[i])}°
          </span>
          <span className="weather-day-sun">☀️ {formatTime(daily.sunrise[i])}</span>
          <span className="weather-day-sun">🌙 {formatTime(daily.sunset[i])}</span>
        </div>
      ))}
    </div>
  );
}
