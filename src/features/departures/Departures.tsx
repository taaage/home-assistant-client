import { useDepartures } from "./useDepartures";
import { SITES, getTimeColor, formatDisplay } from "./utils";

function SiteDepartures({ id, name }: { id: number; name: string }) {
  const { data, isError } = useDepartures(id);

  if (isError) return <p>Failed to load {name}</p>;

  return (
    <div className="card">
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
          {data?.slice(0, 8).map((d, i) => (
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
