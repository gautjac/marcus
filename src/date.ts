// Local-date helpers. We always key entries by the user's *local* calendar day.

import type { Lang } from "./types";

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

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parseISO(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/** "jeudi 3 juillet 2026" / "Thursday, July 3, 2026" */
export function formatLong(iso: string, lang: Lang): string {
  const d = parseISO(iso);
  if (lang === "en") {
    return `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
  return `${JOURS[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
}

/** "3 juillet 2026" / "July 3, 2026" */
export function formatMedium(iso: string, lang: Lang): string {
  const d = parseISO(iso);
  if (lang === "en") {
    return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
  return `${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
}

/** "3 juillet" / "July 3" — no year, for the "years past" heading */
export function formatDayMonth(iso: string, lang: Lang): string {
  const d = parseISO(iso);
  if (lang === "en") {
    return `${MONTHS[d.getMonth()]} ${d.getDate()}`;
  }
  return `${d.getDate()} ${MOIS[d.getMonth()]}`;
}

export function yearOf(iso: string): number {
  return Number(iso.split("-")[0]);
}

/** Month-day portion "MM-DD" for matching the same calendar date across years. */
export function monthDay(iso: string): string {
  return iso.slice(5);
}
