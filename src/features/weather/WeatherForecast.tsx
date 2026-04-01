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
          <span className="weather-day-main">
            <span>{getIcon(daily.weather_code[i])}</span>
            <span className="weather-day-temps">
              {Math.round(daily.apparent_temperature_max[i])}° / {Math.round(daily.apparent_temperature_min[i])}°
            </span>
          </span>
          <span className="weather-day-sun">☀️ {formatTime(daily.sunrise[i])}</span>
          <span className="weather-day-sun">🌙 {formatTime(daily.sunset[i])}</span>
        </div>
      ))}
    </div>
  );
}
