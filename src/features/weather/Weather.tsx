import { useWeather } from "./useWeather";

const weatherIcon: Record<number, string> = {
  0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
  45: "🌫️", 48: "🌫️",
  51: "🌦️", 53: "🌦️", 55: "🌧️",
  61: "🌧️", 63: "🌧️", 65: "🌧️",
  71: "🌨️", 73: "🌨️", 75: "🌨️",
  80: "🌧️", 81: "🌧️", 82: "🌧️",
  95: "⛈️", 96: "⛈️", 99: "⛈️",
};

function getIcon(code: number) {
  return weatherIcon[code] ?? "🌡️";
}

function formatDay(dateStr: string) {
  const today = new Date().toISOString().slice(0, 10);
  if (dateStr === today) return "Today";
  return new Date(dateStr).toLocaleDateString("en-US", { weekday: "short" });
}

function formatTime(iso: string) {
  return iso.slice(11, 16);
}

export default function Weather() {
  const { data, isError } = useWeather();

  if (isError) return <div className="card weather"><p>Failed to load weather</p></div>;
  if (!data) return <div className="card weather"><p>Loading...</p></div>;

  const { current, daily } = data;

  return (
    <div className="card weather">
      <div className="weather-current">
        <span className="weather-icon">{getIcon(current.weather_code)}</span>
        <span className="weather-location">{data.location}</span>
        <span className="weather-temp">{Math.round(current.temperature_2m)}°</span>
        <span className="weather-wind">💨 {Math.round(current.wind_speed_10m)} km/h</span>
      </div>
      <div className="weather-forecast">
        {daily.time.map((day, i) => (
          <div key={day} className="weather-day">
            <span className="weather-day-name">{formatDay(day)}</span>
            <span>{getIcon(daily.weather_code[i])}</span>
            <span className="weather-day-temps">
              {Math.round(daily.temperature_2m_max[i])}° / {Math.round(daily.temperature_2m_min[i])}°
            </span>
            <span className="weather-day-sun">
              ☀️ {formatTime(daily.sunrise[i])}
            </span>
            <span className="weather-day-sun">
              🌙 {formatTime(daily.sunset[i])}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
