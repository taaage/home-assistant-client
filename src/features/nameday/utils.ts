const BIRTHDAYS = [
  { name: "Tigge", month: 4, day: 30, icon: "👦🏼" },
  { name: "Frida", month: 9, day: 15, icon: "👧🏻" },
];

function daysUntilBirthday(month: number, day: number) {
  const today = new Date();
  const thisYear = today.getFullYear();
  let next = new Date(thisYear, month - 1, day);
  if (next <= today) next = new Date(thisYear + 1, month - 1, day);
  return Math.ceil((next.getTime() - today.getTime()) / 86_400_000);
}

export function formatBirthdays() {
  return BIRTHDAYS.map(({ name, month, day, icon }) => {
    const days = daysUntilBirthday(month, day);
    return days === 0 ? `${icon} ${name} today! 🎉` : `${icon} ${name} in ${days} days`;
  }).join(" & ");
}
