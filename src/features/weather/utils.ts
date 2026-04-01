const weatherIcon: Record<number, string> = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  53: "🌦️",
  55: "🌧️",
  61: "🌧️",
  63: "🌧️",
  65: "🌧️",
  71: "🌨️",
  73: "🌨️",
  75: "🌨️",
  80: "🌧️",
  81: "🌧️",
  82: "🌧️",
  95: "⛈️",
  96: "⛈️",
  99: "⛈️",
};

export function getIcon(code: number) {
  return weatherIcon[code] ?? "🌡️";
}

export function formatDay(dateStr: string) {
  const today = new Date().toISOString().slice(0, 10);
  if (dateStr === today) return "Today";
  return new Date(dateStr).toLocaleDateString("en-US", { weekday: "short" });
}

export function formatTime(iso: string) {
  return iso.slice(11, 16);
}

export function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}
