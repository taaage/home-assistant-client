import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "./api";

export function useWeather() {
  return useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeather,
    refetchInterval: 600_000,
  });
}
