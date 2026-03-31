import { getBirthdays } from "./utils";

export default function Birthdays() {
  const birthdays = getBirthdays();

  return (
    <div className="card info-birthdays">
      <h2>🎂 Birthdays</h2>
      <ul>
        {birthdays.map((b) => (
          <li key={b.name}>{b.icon} {b.name} — {b.label}</li>
        ))}
      </ul>
    </div>
  );
}
