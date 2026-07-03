import { useEffect, useMemo, useState } from "react";
import { db, type Entry } from "../db";
import { principleById } from "../principles";
import { formatLong, formatMedium } from "../date";
import { fetchRevue } from "../api";

export default function History({
  onOpenDate,
  onClose,
}: {
  onOpenDate: (date: string) => void;
  onClose: () => void;
}) {
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
      const text = await fetchRevue(batch, principleById);
      setRevue(text);
      setRevueState("idle");
    } catch (e) {
      setRevueErr(e instanceof Error ? e.message : "Erreur");
      setRevueState("error");
    }
  }

  const count = entries?.length ?? 0;

  return (
    <div className="min-h-full px-5 py-8 sm:py-12 fadeup">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl text-paper-ink">Le carnet</h2>
            <p className="text-sm text-paper-soft mt-1">
              {count === 0
                ? "Aucune entrée pour l'instant."
                : count === 1
                ? "1 entrée."
                : `${count} entrées.`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-sm text-paper-terra hover:text-paper-terraSoft transition-colors"
          >
            ← Aujourd'hui
          </button>
        </header>

        {/* Faire le point — the revue */}
        {count > 0 && (
          <section className="mb-10">
            <button
              onClick={doRevue}
              disabled={!canRevue || revueState === "loading"}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-paper-line bg-paper-panel text-paper-ink text-sm font-medium hover:border-paper-terra disabled:opacity-50 disabled:hover:border-paper-line transition-colors"
            >
              {revueState === "loading" ? "Lecture en cours…" : "Faire le point"}
            </button>
            {!canRevue && (
              <p className="text-xs text-paper-faint mt-2">
                Disponible après quelques entrées — Marcus relira alors ton carnet.
              </p>
            )}
            {revueState === "error" && (
              <p className="text-sm text-paper-terra mt-3">
                La revue n'a pas abouti ({revueErr}). Réessaie plus tard — ça demande le réseau.
              </p>
            )}
            {revue && (
              <div className="mt-5 rounded-2xl border border-paper-line bg-paper-panel/70 px-6 py-6">
                <div className="text-xs uppercase tracking-[0.2em] text-paper-faint mb-3">La revue</div>
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
            <p className="font-serif text-xl text-paper-soft">Le carnet est encore vierge.</p>
            <p className="text-sm text-paper-faint mt-2">
              Reviens à aujourd'hui et écris quelques lignes.
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {entries.map((e) => {
              const p = principleById(e.principleId);
              return (
                <li key={e.date}>
                  <button
                    onClick={() => onOpenDate(e.date)}
                    className="w-full text-left rounded-2xl border border-paper-line bg-paper-panel/60 px-6 py-5 hover:border-paper-terra/50 hover:bg-paper-panel transition-colors group"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-paper-terra">{formatMedium(e.date)}</span>
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
  onOpenDate,
}: {
  monthDayKey: string;
  currentDate: string;
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

  return (
    <section className="mt-14 pt-8 border-t border-paper-line">
      <h3 className="font-serif italic text-lg text-paper-soft mb-4">
        Cette date, les années passées
      </h3>
      <ul className="space-y-3">
        {items.map((e) => {
          const p = principleById(e.principleId);
          return (
            <li key={e.date}>
              <button
                onClick={() => onOpenDate(e.date)}
                className="w-full text-left rounded-xl border border-paper-line bg-paper-panel/50 px-5 py-4 hover:bg-paper-panel transition-colors"
              >
                <div className="text-sm text-paper-terra">{formatLong(e.date)}</div>
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
