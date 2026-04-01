import Birthdays from "./features/birthdays/Birthdays";
import Departures from "./features/departures/Departures";
import Disruptions from "./features/disruptions/Disruptions";
import Favorites from "./features/favorites/Favorites";
import Lights from "./features/lights/Lights";
import NowPlaying from "./features/spotify/NowPlaying";
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
