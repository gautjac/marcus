import { useEffect, useMemo, useState } from "react";
import { db, type Entry } from "../db";
import { principleById } from "../principles";
import { formatLong, formatMedium } from "../date";
import { fetchRevue } from "../api";
import type { Lang } from "../types";

const LABELS = {
  fr: {
    notebook: "Le carnet",
    none: "Aucune entrée pour l'instant.",
    one: "1 entrée.",
    many: (n: number) => `${n} entrées.`,
    backToToday: "← Aujourd'hui",
    reading: "Lecture en cours…",
    makePoint: "Faire le point",
    revueHint: "Disponible après quelques entrées — Marcus relira alors ton carnet.",
    revueError: (e: string) => `La revue n'a pas abouti (${e}). Réessaie plus tard — ça demande le réseau.`,
    revueTitle: "La revue",
    emptyTitle: "Le carnet est encore vierge.",
    emptyHint: "Reviens à aujourd'hui et écris quelques lignes.",
    genericError: "Erreur",
  },
  en: {
    notebook: "The notebook",
    none: "No entries yet.",
    one: "1 entry.",
    many: (n: number) => `${n} entries.`,
    backToToday: "← Today",
    reading: "Reading…",
    makePoint: "Take stock",
    revueHint: "Available after a few entries — Marcus will then reread your notebook.",
    revueError: (e: string) => `The review didn't go through (${e}). Try again later — it needs the network.`,
    revueTitle: "The review",
    emptyTitle: "The notebook is still blank.",
    emptyHint: "Go back to today and write a few lines.",
    genericError: "Error",
  },
} as const;

export default function History({
  lang,
  onLangChange,
  onOpenDate,
  onClose,
}: {
  lang: Lang;
  onLangChange: (l: Lang) => void;
  onOpenDate: (date: string) => void;
  onClose: () => void;
}) {
  const t = LABELS[lang];
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [revue, setRevue] = useState<string>("");
  const [revueState, setRevueState] = useState<"idle" | "loading" | "error">("idle");
  const [revueErr, setRevueErr] = useState<string>("");

  useEffect(() => {
    let alive = true;
    db.entries.toArray().then((all) => {
      if (!alive) return;
      const written = all
        .filter((e) => e.text.trim())
        .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
      setEntries(written);
    });
    return () => {
      alive = false;
    };
  }, []);

  const canRevue = (entries?.length ?? 0) >= 3;

  async function doRevue() {
    if (!entries || entries.length === 0) return;
    setRevueState("loading");
    setRevueErr("");
    setRevue("");
    try {
      // Send oldest → newest, cap the batch so the prompt stays reasonable.
      const batch = [...entries].reverse().slice(-30);
      const text = await fetchRevue(batch, (id) => principleById(id, lang), lang);
      setRevue(text);
      setRevueState("idle");
    } catch (e) {
      setRevueErr(e instanceof Error ? e.message : t.genericError);
      setRevueState("error");
    }
  }

  const count = entries?.length ?? 0;

  return (
    <div className="min-h-full px-5 py-8 sm:py-12 fadeup">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl text-paper-ink">{t.notebook}</h2>
            <p className="text-sm text-paper-soft mt-1">
              {count === 0 ? t.none : count === 1 ? t.one : t.many(count)}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex rounded-lg border border-paper-line overflow-hidden text-xs">
              {(["fr", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => onLangChange(l)}
                  className={`px-2.5 py-1 uppercase tracking-wide transition-colors ${
                    lang === l
                      ? "bg-paper-terra text-paper-panel"
                      : "text-paper-soft hover:text-paper-ink"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="text-sm text-paper-terra hover:text-paper-terraSoft transition-colors"
            >
              {t.backToToday}
            </button>
          </div>
        </header>

        {/* Faire le point — the revue */}
        {count > 0 && (
          <section className="mb-10">
            <button
              onClick={doRevue}
              disabled={!canRevue || revueState === "loading"}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-paper-line bg-paper-panel text-paper-ink text-sm font-medium hover:border-paper-terra disabled:opacity-50 disabled:hover:border-paper-line transition-colors"
            >
              {revueState === "loading" ? t.reading : t.makePoint}
            </button>
            {!canRevue && <p className="text-xs text-paper-faint mt-2">{t.revueHint}</p>}
            {revueState === "error" && (
              <p className="text-sm text-paper-terra mt-3">{t.revueError(revueErr)}</p>
            )}
            {revue && (
              <div className="mt-5 rounded-2xl border border-paper-line bg-paper-panel/70 px-6 py-6">
                <div className="text-xs uppercase tracking-[0.2em] text-paper-faint mb-3">{t.revueTitle}</div>
                <div className="font-serif text-[1.15rem] leading-relaxed text-paper-ink space-y-4">
                  {revue.split(/\n{2,}/).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* The list */}
        {entries === null ? (
          <p className="text-paper-faint">…</p>
        ) : entries.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-paper-line px-6 py-12 text-center">
            <p className="font-serif text-xl text-paper-soft">{t.emptyTitle}</p>
            <p className="text-sm text-paper-faint mt-2">{t.emptyHint}</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {entries.map((e) => {
              const p = principleById(e.principleId, lang);
              return (
                <li key={e.date}>
                  <button
                    onClick={() => onOpenDate(e.date)}
                    className="w-full text-left rounded-2xl border border-paper-line bg-paper-panel/60 px-6 py-5 hover:border-paper-terra/50 hover:bg-paper-panel transition-colors group"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-paper-terra">{formatMedium(e.date, lang)}</span>
                      {p && (
                        <span className="text-xs text-paper-faint italic shrink-0 hidden sm:inline">
                          {p.author}
                        </span>
                      )}
                    </div>
                    <p className="font-serif text-[1.15rem] leading-snug text-paper-ink mt-1.5 line-clamp-2">
                      {e.text.trim()}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

/**
 * « Cette date, les années passées » — entries the user wrote on this same
 * calendar day (MM-DD) in prior years. Rendered inline on the Today screen.
 */
export function YearsPast({
  monthDayKey,
  currentDate,
  lang,
  onOpenDate,
}: {
  monthDayKey: string;
  currentDate: string;
  lang: Lang;
  onOpenDate: (date: string) => void;
}) {
  const [matches, setMatches] = useState<Entry[]>([]);

  useEffect(() => {
    let alive = true;
    db.entries.toArray().then((all) => {
      if (!alive) return;
      const found = all
        .filter(
          (e) => e.date.slice(5) === monthDayKey && e.date !== currentDate && e.text.trim()
        )
        .sort((a, b) => (a.date < b.date ? 1 : -1));
      setMatches(found);
    });
    return () => {
      alive = false;
    };
  }, [monthDayKey, currentDate]);

  const items = useMemo(() => matches, [matches]);
  if (items.length === 0) return null;

  const heading = lang === "en" ? "This day, in years past" : "Cette date, les années passées";

  return (
    <section className="mt-14 pt-8 border-t border-paper-line">
      <h3 className="font-serif italic text-lg text-paper-soft mb-4">{heading}</h3>
      <ul className="space-y-3">
        {items.map((e) => {
          const p = principleById(e.principleId, lang);
          return (
            <li key={e.date}>
              <button
                onClick={() => onOpenDate(e.date)}
                className="w-full text-left rounded-xl border border-paper-line bg-paper-panel/50 px-5 py-4 hover:bg-paper-panel transition-colors"
              >
                <div className="text-sm text-paper-terra">{formatLong(e.date, lang)}</div>
                {p && (
                  <div className="text-xs text-paper-faint italic mt-0.5">
                    « {p.quote} » — {p.author}
                  </div>
                )}
                <p className="font-serif text-[1.05rem] leading-snug text-paper-ink mt-2 line-clamp-3">
                  {e.text.trim()}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
