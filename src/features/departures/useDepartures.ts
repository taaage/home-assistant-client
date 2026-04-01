import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchDepartures } from "./api";

export function useDepartures(siteId: number) {
  return useQuery({
    queryKey: ["departures", siteId],
    queryFn: () => fetchDepartures(siteId),
    refetchInterval: 30_000,
    retry: 2,
    placeholderData: keepPreviousData,
  });
}
