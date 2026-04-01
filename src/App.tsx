import Departures from "./features/departures/Departures";
import Disruptions from "./features/disruptions/Disruptions";
import Birthdays from "./features/birthdays/Birthdays";
import NowPlaying from "./features/spotify/NowPlaying";
import Favorites from "./features/favorites/Favorites";
import Lights from "./features/lights/Lights";
import Weather from "./features/weather/Weather";

export default function App() {
  return (
    <div className="app">
      <h1>Dashboard</h1>
      <Favorites />
      <Weather />
      <div className="info-row">
        <NowPlaying />
        <Birthdays />
      </div>
      <Departures />
      <Lights />
      <Disruptions />
    </div>
  );
}
