import { useEffect, useState } from "react";

const SITE_ID = 3470;
const API_URL = `https://transport.integration.sl.se/v1/sites/${SITE_ID}/departures`;
const REFRESH_INTERVAL = 30_000;

type Departure = {
  destination: string;
  display: string;
  line: { designation: string; transport_mode: string };
  direction_code: number;
};

export default function Departures() {
  const [departures, setDepartures] = useState<Departure[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDepartures = () =>
      fetch(API_URL)
        .then((r) => r.json())
        .then((data) => {
          setDepartures(data.departures ?? []);
          setError(false);
        })
        .catch(() => setError(true));

    fetchDepartures();
    const id = setInterval(fetchDepartures, REFRESH_INTERVAL);
    return () => clearInterval(id);
  }, []);

  if (error) return <p>Failed to load departures</p>;

  return (
    <div className="departures">
      <h2>🚌 Brotorp</h2>
      <table>
        <thead>
          <tr>
            <th>Line</th>
            <th>Destination</th>
            <th>Departs</th>
          </tr>
        </thead>
        <tbody>
          {departures.slice(0, 10).map((d, i) => (
            <tr key={i}>
              <td>{d.line.designation}</td>
              <td>{d.destination}</td>
              <td>{d.display}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
