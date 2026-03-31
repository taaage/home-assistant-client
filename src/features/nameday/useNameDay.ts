import { useQuery } from "@tanstack/react-query";
import { fetchNameDay } from "./api";

export function useNameDay() {
  return useQuery({
    queryKey: ["nameday"],
    queryFn: fetchNameDay,
    refetchInterval: 3_600_000,
  });
}
