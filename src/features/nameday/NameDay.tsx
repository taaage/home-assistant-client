import { useNameDay } from "./useNameDay";

export default function NameDay() {
  const { data } = useNameDay();

  return (
    <div className="card info-nameday">
      <h2>👦👧 Namedays</h2>
      {data?.length ? (
        <ul>{data.map((n) => <li key={n}>{n}</li>)}</ul>
      ) : <p>—</p>}
    </div>
  );
}
