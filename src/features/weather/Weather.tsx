import { useWeather } from "./useWeather";
import { WeatherForecast } from "./WeatherForecast";
import { WeatherToday } from "./WeatherToday";

export default function Weather() {
  const { data, isError } = useWeather();

  if (isError)
    return (
      <div className="card weather-today">
        <p>Failed to load weather</p>
      </div>
    );
  if (!data)
    return (
      <div className="card weather-today">
        <p>Loading...</p>
      </div>
    );

  return (
    <>
      <WeatherToday data={data} />
      <WeatherForecast data={data} />
    </>
  );
}
