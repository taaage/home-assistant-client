const ROOMS = [
  "Living Room", "Bedroom", "Kitchen", "Hallway", "Bathroom", "Office",
  "Balcony", "Nursery", "Closet", "Dining", "Entrance", "Laundry",
];

export default function Lights() {
  return (
    <div className="lights">
      {ROOMS.map((room) => (
        <div key={room} className="card light-card">
          <h2>💡 {room}</h2>
          <p className="light-status">Off</p>
        </div>
      ))}
    </div>
  );
}
