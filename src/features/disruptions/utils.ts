import type { Disruption } from "./types";

const MODES = [
  { label: "Blue Line", icon: "🚇", mode: "METRO" },
  { label: "Bus", icon: "🚌", mode: "BUS" },
];

const FILTERS: Record<string, Set<string>> = {
  METRO: new Set(["10", "11"]),
  BUS: new Set(["501", "505", "519", "540"]),
};

export function groupByMode(disruptions: Disruption[]) {
  return MODES.map(({ label, icon, mode }) => {
    const allowed = FILTERS[mode];
    const items = disruptions.filter((d) =>
      d.scope.lines.some(
        (l) => l.transport_mode === mode && allowed.has(l.designation),
      ),
    );
    const sv = items
      .map((d) => {
        const msg = d.message_variants.find((m) => m.language === "sv");
        if (!msg) return null;
        const lines = d.scope.lines
          .filter(
            (l) => l.transport_mode === mode && allowed.has(l.designation),
          )
          .map((l) => l.designation);
        return { ...msg, lines };
      })
      .filter(Boolean);
    const unique = [
      ...new Map(sv.map((m) => [m!.lines.join(",") + m!.header, m!])).values(),
    ];
    return { label, icon, mode, items: unique };
  }).filter((g) => g.items.length > 0);
}
