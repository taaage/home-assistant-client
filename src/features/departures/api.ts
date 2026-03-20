export type Departure = {
  destination: string;
  display: string;
  line: { designation: string; transport_mode: string };
};

export const fetchDepartures = async (siteId: number): Promise<Departure[]> => {
  const res = await fetch(
    `https://transport.integration.sl.se/v1/sites/${siteId}/departures`
  );
  const data = await res.json();
  return data.departures ?? [];
};
