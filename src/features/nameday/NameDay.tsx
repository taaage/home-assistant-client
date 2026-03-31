import { useNameDay } from "./useNameDay";
import { formatBirthdays } from "./utils";

export default function NameDay() {
  const { data } = useNameDay();

  return (
    <div className="card nameday">
      {data?.length ? (
        <p>
          👦👧 Namedays: <strong>{data.join(", ")}</strong>
        </p>
      ) : null}
      <p>
        🎂🍰 Birthdays: <strong>{formatBirthdays()}</strong>
      </p>
    </div>
  );
}
