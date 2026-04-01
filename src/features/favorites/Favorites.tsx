import { useDepartures } from "../departures/useDepartures";
import { getTimeColor, formatDisplay } from "../departures/utils";
import type { Departure } from "../departures/types";

type Favorite = {
  siteId: number;
  line: string;
  destination: string;
  icon: string;
};

const FAVORITES: Favorite[] = [
  { siteId: 3470, line: "540", destination: "Universitetet", icon: "🚌" },
  { siteId: 3470, line: "540", destination: "Tensta centrum", icon: "🚌" },
];

function findNext(
  data: Departure[] | undefined,
  line: string,
  destination: string,
) {
  return data?.find(
    (d) => d.line.designation === line && d.destination === destination,
  );
}

function FavoriteItem({ siteId, line, destination, icon }: Favorite) {
  const { data } = useDepartures(siteId);
  const next = findNext(data, line, destination);

  return (
    <div className="favorite-item">
      <span>
        {icon} {line}
      </span>
      <span className="favorite-time">
        {next ? formatDisplay(next.display) : "—"}
      </span>
    </div>
  );
}

export default function Favorites() {
  return (
    <div className="favorites">
      {FAVORITES.map((f) => (
        <FavoriteItem key={`${f.line}-${f.destination}`} {...f} />
      ))}
    </div>
  );
}
