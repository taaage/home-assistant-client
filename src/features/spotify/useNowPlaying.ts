import { useQuery } from "@tanstack/react-query";
import { fetchNowPlaying } from "./api";

export function useNowPlaying() {
  return useQuery({
    queryKey: ["spotify-now-playing"],
    queryFn: fetchNowPlaying,
    refetchInterval: 10_000,
  });
}
