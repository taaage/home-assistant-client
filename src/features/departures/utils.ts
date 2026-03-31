export type SiteConfig = {
  id: number;
  name: string;
  icon: string;
  filter?: (d: {
    line: { designation: string; transport_mode: string };
  }) => boolean;
};

export const SITES: SiteConfig[] = [
  {
    id: 3470,
    name: "Brotorp",
    icon: "🚌",
    filter: (d) => d.line.transport_mode === "BUS",
  },
  {
    id: 3549,
    name: "Råsta",
    icon: "🚌",
    filter: (d) => d.line.transport_mode === "BUS",
  },
  {
    id: 9303,
    name: "Hallonbergen",
    icon: "🚇",
    filter: (d) => d.line.transport_mode === "METRO",
  },
  {
    id: 9508,
    name: "Ulriksdal",
    icon: "🚆🚌",
    filter: (d) => d.line.designation !== "509",
  },
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
