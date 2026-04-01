import type { NameDayData } from "./types";

export const fetchNameDay = async (): Promise<string[]> => {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  const res = await fetch(
    `https://sholiday.faboul.se/dagar/v2.1/${y}/${m}/${d}`,
  );
  const data: NameDayData = await res.json();
  return data.dagar[0]?.namnsdag ?? [];
};
