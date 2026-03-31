import type { Disruption } from "./types";

export const fetchDisruptions = async (): Promise<Disruption[]> => {
  const res = await fetch("https://deviations.integration.sl.se/v1/messages");
  return res.json();
};
