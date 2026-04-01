import type { SpotifyTrack } from "./types";

// TODO: Replace with real backend endpoint that proxies Spotify API
// const API_URL = "/api/spotify/now-playing";

const MOCK: SpotifyTrack = {
  name: "The Shire",
  artist: "Howard Shore",
  album:
    "The Lord of the Rings: The Fellowship of the Ring - the Complete Recordings",
  albumArt:
    "https://lastfm.freetls.fastly.net/i/u/300x300/793df2135a742aefbe54fb9d6da6aaa4.jpg",
  isPlaying: true,
};

export const fetchNowPlaying = async (): Promise<SpotifyTrack | null> => {
  // TODO: Replace with real API call
  // const res = await fetch(API_URL);
  // if (!res.ok) return null;
  // return res.json();
  return MOCK;
};
