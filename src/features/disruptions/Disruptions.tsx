import { useDisruptions } from "./useDisruptions";
import { groupByMode } from "./utils";

export default function Disruptions() {
  const { data, isError } = useDisruptions();

  if (isError) return <div className="card"><p>Failed to load disruptions</p></div>;
  if (!data) return <div className="card"><p>Loading disruptions...</p></div>;

  const groups = groupByMode(data);

  if (groups.length === 0) {
    return (
      <div className="card disruptions">
        <h2>⚠️ SL Disruptions</h2>
        <p className="disruptions-empty">No current disruptions ✅</p>
      </div>
    );
  }

  return (
    <div className="card disruptions">
      <h2>⚠️ SL Disruptions</h2>
      {groups.map(({ label, icon, mode, items }) => (
        <div key={mode} className="disruption-group">
          <h3>{icon} {label}</h3>
          <ul>
            {items.map((m, i) => (
              <li key={i}>
                <strong>{m.scope_alias}</strong> — {m.header}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
