import { useDepartures } from "./useDepartures";

const SITES = [
  { id: 3470, name: "Brotorp" },
  { id: 3549, name: "Råsta" },
];

function getTimeColor(display: string): string {
  if (display === "Nu") return "#ff5555";
  if (display.includes("min")) {
    const mins = parseInt(display);
    if (mins <= 3) return "#ff5555";
    if (mins <= 10) return "#ffdd57";
  }
  return "white";
}

function formatDisplay(display: string): string {
  return display === "Nu" ? "Now" : display;
}

function SiteDepartures({ id, name }: { id: number; name: string }) {
  const { data, isError } = useDepartures(id);
  console.log(data);

  if (isError) return <p>Failed to load {name}</p>;

  return (
    <div>
      <h2>🚌 {name}</h2>
      <table>
        <thead>
          <tr>
            <th>Line</th>
            <th>Destination</th>
            <th>Departs</th>
          </tr>
        </thead>
        <tbody>
          {data?.slice(0, 10).map((d, i) => (
            <tr key={i}>
              <td>{d.line.designation}</td>
              <td>{d.destination}</td>
              <td style={{ color: getTimeColor(d.display) }}>
                {formatDisplay(d.display)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Departures() {
  return (
    <div className="departures">
      {SITES.map((site) => (
        <SiteDepartures key={site.id} {...site} />
      ))}
    </div>
  );
}
