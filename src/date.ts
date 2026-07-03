// Local-date helpers. We always key entries by the user's *local* calendar day.

export function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function todayISO(): string {
  return toISODate(new Date());
}

const JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const MOIS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

function parseISO(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/** "jeudi 3 juillet 2026" */
export function formatLong(iso: string): string {
  const d = parseISO(iso);
  return `${JOURS[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
}

/** "3 juillet 2026" */
export function formatMedium(iso: string): string {
  const d = parseISO(iso);
  return `${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
}

/** "3 juillet" — no year, for the "years past" heading */
export function formatDayMonth(iso: string): string {
  const d = parseISO(iso);
  return `${d.getDate()} ${MOIS[d.getMonth()]}`;
}

export function yearOf(iso: string): number {
  return Number(iso.split("-")[0]);
}

/** Month-day portion "MM-DD" for matching the same calendar date across years. */
export function monthDay(iso: string): string {
  return iso.slice(5);
}
