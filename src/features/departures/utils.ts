export const SITES = [
  { id: 3470, name: "Brotorp" },
  { id: 3549, name: "Råsta" },
];

export function getTimeColor(display: string): string {
  if (display === "Nu") return "var(--color-red)";
  if (display.includes("min")) {
    const mins = parseInt(display);
    if (mins <= 3) return "var(--color-red)";
    if (mins <= 10) return "var(--color-yellow)";
  }
  return "var(--color-text-bright)";
}

export function formatDisplay(display: string): string {
  return display === "Nu" ? "Now" : display;
}
