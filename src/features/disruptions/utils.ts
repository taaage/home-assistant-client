import type { Disruption } from "./types";

type GroupedMode = {
  label: string;
  icon: string;
  mode: string;
};

const MODES: GroupedMode[] = [
  { label: "Metro", icon: "🚇", mode: "METRO" },
  { label: "Roslagsbanan", icon: "🚃", mode: "TRAM" },
  { label: "Bus", icon: "🚌", mode: "BUS" },
];

const FILTERS: Record<string, Set<string>> = {
  METRO: new Set(["10", "11"]),
  TRAM: new Set(["28", "29"]),
  BUS: new Set(["501", "505", "519", "540"]),
};

const BUS_LIMIT = 5;

export function groupByMode(disruptions: Disruption[]) {
  return MODES.map(({ label, icon, mode }) => {
    const allowed = FILTERS[mode];
    const items = disruptions.filter((d) =>
      d.scope.lines.some((l) => l.transport_mode === mode && allowed.has(l.designation))
    );
    const sv = items
      .map((d) => d.message_variants.find((m) => m.language === "sv"))
      .filter(Boolean);
    const unique = [...new Map(sv.map((m) => [m!.scope_alias + m!.header, m!])).values()];
    return { label, icon, mode, items: unique };
  }).filter((g) => g.items.length > 0);
}

export { BUS_LIMIT };
