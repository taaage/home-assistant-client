import { useState } from "react";

type Status = "Off" | "On" | "Closed" | "Open";
type Room = { name: string; icon: string; status: Status };

const ROOMS: Room[] = [
  { name: "Desk", icon: "💡", status: "Off" },
  { name: "Bedroom", icon: "💡", status: "Off" },
  { name: "Window", icon: "💡", status: "Off" },
  { name: "Door", icon: "🚪", status: "Closed" },
  { name: "Living Room", icon: "💡", status: "Off" },
  { name: "Lowe", icon: "💡", status: "Off" },
];

const TOGGLE_STATUS: Record<Status, Status> = {
  Off: "On",
  On: "Off",
  Closed: "Open",
  Open: "Closed",
};

export default function Lights() {
  const [statuses, setStatuses] = useState<Record<string, Status>>(() =>
    Object.fromEntries(ROOMS.map(({ name, status }) => [name, status])),
  );

  return (
    <div className="lights">
      {ROOMS.map(({ name, icon }) => {
        const status = statuses[name];
        return (
          <button
            key={name}
            type="button"
            className="card light-card"
            aria-pressed={status === "On" || status === "Open"}
            onClick={() =>
              setStatuses((current) => ({
                ...current,
                [name]: TOGGLE_STATUS[current[name]],
              }))
            }
          >
            <div className="light-icon">{icon}</div>
            <div className="light-name">{name}</div>
            <p className={status === "On" ? "light-status light-status-on" : "light-status"}>
              {status}
            </p>
          </button>
        );
      })}
    </div>
  );
}
