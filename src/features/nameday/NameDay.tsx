import { useNameDay } from "./useNameDay";

export default function NameDay() {
  const { data } = useNameDay();
  if (!data?.length) return null;

  return (
    <div className="card nameday">
      <p>
        Namedays: <strong>{data.join(", ")}</strong>
      </p>
    </div>
  );
}
