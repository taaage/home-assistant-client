import Departures from "./features/departures/Departures";
import Weather from "./features/weather/Weather";

export default function App() {
  return (
    <div className="app">
      <h1>Dashboard</h1>
      <Weather />
      <Departures />
    </div>
  );
}
