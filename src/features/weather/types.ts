export type WeatherData = {
  location: string;
  current: {
    apparent_temperature: number;
    weather_code: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
    precipitation: number;
  };
  daily: {
    time: string[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    weather_code: number[];
    sunrise: string[];
    sunset: string[];
  };
};
