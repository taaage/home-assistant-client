import { useDepartures } from "./useDepartures";
import { SITES, getTimeColor, formatDisplay } from "./utils";
import type { SiteConfig } from "./utils";

function SiteDepartures({ id, name, icon, filter }: SiteConfig) {
  const { data, isError } = useDepartures(id);

  if (isError) return <p>Failed to load {name}</p>;

  const filtered = filter ? data?.filter(filter) : data;

  return (
    <div className="card">
      <h2>{icon} {name}</h2>
      <table>
        <thead>
          <tr>
            <th>Line</th>
            <th>Destination</th>
            <th>Departs</th>
          </tr>
        </thead>
        <tbody>
          {filtered?.slice(0, 8).map((d, i) => (
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
