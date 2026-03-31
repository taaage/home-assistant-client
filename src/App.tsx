import Departures from "./features/departures/Departures";
import Disruptions from "./features/disruptions/Disruptions";
import NameDay from "./features/nameday/NameDay";
import Weather from "./features/weather/Weather";

export default function App() {
  return (
    <div className="app">
      <h1>Dashboard</h1>
      <Weather />
      <NameDay />
      <Departures />
      <Disruptions />
    </div>
  );
}
