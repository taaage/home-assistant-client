import Departures from "./features/departures/Departures";
import Lights from "./features/lights/Lights";
import Weather from "./features/weather/Weather";

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[900px] flex-col gap-4 px-5 py-8 sm:px-8">
      <h1>Dashboard</h1>
      <Weather />
      <Departures />
      <Lights />
    </div>
  );
}
