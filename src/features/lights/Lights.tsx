type Room = { name: string; icon: string; status: string };

const ROOMS: Room[] = [
  { name: "Desk", icon: "💡", status: "Off" },
  { name: "Bedroom", icon: "💡", status: "Off" },
  { name: "Window", icon: "💡", status: "Off" },
  { name: "Door", icon: "🚪", status: "Closed" },
  { name: "Living Room", icon: "💡", status: "Off" },
  { name: "Lowe", icon: "💡", status: "Off" },
];

export default function Lights() {
  return (
    <div className="lights">
      {ROOMS.map((room) => (
        <div key={room.name} className="card light-card">
          <div className="light-icon">{room.icon}</div>
          <div className="light-name">{room.name}</div>
          <p className="light-status">{room.status}</p>
        </div>
      ))}
    </div>
  );
}
