import type { Departure } from "./types";

export const fetchDepartures = async (siteId: number): Promise<Departure[]> => {
  const res = await fetch(
    `https://transport.integration.sl.se/v1/sites/${siteId}/departures`,
  );
  if (!res.ok) throw new Error(`Departures API ${res.status}`);
  const data = await res.json();
  const departures = data.departures ?? [];
  if (departures.length === 0) throw new Error("Empty response");
  return departures;
};
