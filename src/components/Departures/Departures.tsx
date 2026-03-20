import { useQuery } from "@tanstack/react-query";

const SITES = [
  { id: 3470, name: "Brotorp" },
  { id: 3549, name: "Råsta" },
];

type Departure = {
  destination: string;
  display: string;
  line: { designation: string; transport_mode: string };
};

const fetchDepartures = async (siteId: number): Promise<Departure[]> => {
  const res = await fetch(
    `https://transport.integration.sl.se/v1/sites/${siteId}/departures`,
  );
  const data = await res.json();
  return data.departures ?? [];
};

function getTimeColor(display: string): string {
  const match = display.match(/^(\d+)\s*min/);
  if (!match) return "#64ffda";
  const mins = parseInt(match[1]);
  if (mins < 3) return "#ff5555";
  if (mins <= 10) return "#ffdd57";
  return "#64ffda";
}

function SiteDepartures({ id, name }: { id: number; name: string }) {
  const { data, isError } = useQuery({
    queryKey: ["departures", id],
    queryFn: () => fetchDepartures(id),
    refetchInterval: 30_000,
  });

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
              <td style={{ color: getTimeColor(d.display) }}>{d.display}</td>
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
