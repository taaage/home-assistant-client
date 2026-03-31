import { useQuery } from "@tanstack/react-query";
import { fetchDisruptions } from "./api";

export function useDisruptions() {
  return useQuery({
    queryKey: ["disruptions"],
    queryFn: fetchDisruptions,
    refetchInterval: 120_000,
  });
}
