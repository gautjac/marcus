import { useCallback, useEffect, useRef, useState } from "react";
import { db, type Entry } from "./db";
import { principleForDate, principleById, type Principle } from "./principles";
import { todayISO, formatLong, monthDay } from "./date";
import { fetchEcho } from "./api";
import Onboarding from "./components/Onboarding";
import History, { YearsPast } from "./components/History";

type View = "today" | "history";
const ONBOARD_KEY = "marcus.onboarded";

export default function App() {
  const [showOnboard, setShowOnboard] = useState(() => !localStorage.getItem(ONBOARD_KEY));
  const [view, setView] = useState<View>("today");
  const [today] = useState(todayISO);
  // The date currently viewed/edited on the "today" screen (defaults to today,
  // but the history view can open any past date here).
  const [activeDate, setActiveDate] = useState(today);

  const closeOnboard = () => {
    localStorage.setItem(ONBOARD_KEY, "1");
    setShowOnboard(false);
  };

  const openDate = useCallback((date: string) => {
    setActiveDate(date);
    setView("today");
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      {showOnboard && <Onboarding onClose={closeOnboard} />}
      {view === "today" ? (
        <TodayScreen
          date={activeDate}
          isToday={activeDate === today}
          onBackToToday={() => setActiveDate(today)}
          onOpenHistory={() => setView("history")}
          onOpenDate={openDate}
        />
      ) : (
        <History onOpenDate={openDate} onClose={() => setView("today")} />
      )}
    </>
  );
}

function TodayScreen({
  date,
  isToday,
  onBackToToday,
  onOpenHistory,
  onOpenDate,
}: {
  date: string;
  isToday: boolean;
  onBackToToday: () => void;
  onOpenHistory: () => void;
  onOpenDate: (date: string) => void;
}) {
  const [text, setText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved">("idle");

  const [echo, setEcho] = useState("");
  const [echoState, setEchoState] = useState<"idle" | "loading" | "error">("idle");

  const saveTimer = useRef<number | null>(null);
  const savedFlash = useRef<number | null>(null);

  // The principle for a past date is the one actually stored with the entry (if
  // any); otherwise the deterministic principle for that date.
  const [principle, setPrinciple] = useState<Principle>(() => principleForDate(date));

  // Load the entry for this date.
  useEffect(() => {
    let alive = true;
    setLoaded(false);
    setEcho("");
    setEchoState("idle");
    db.entries.get(date).then((e) => {
      if (!alive) return;
      setText(e?.text ?? "");
      const stored = e ? principleById(e.principleId) : undefined;
      setPrinciple(stored ?? principleForDate(date));
      setLoaded(true);
    });
    return () => {
      alive = false;
    };
  }, [date]);

  // Debounced autosave. Never destructive — upserts one row per date.
  const scheduleSave = useCallback(
    (value: string) => {
      if (saveTimer.current) window.clearTimeout(saveTimer.current);
      setSaveState("saving");
      saveTimer.current = window.setTimeout(async () => {
        const now = Date.now();
        const existing = await db.entries.get(date);
        if (!existing && !value.trim()) {
          setSaveState("idle");
          return;
        }
        const row: Entry = {
          date,
          principleId: principle.id,
          text: value,
          createdAt: existing?.createdAt ?? now,
          updatedAt: now,
        };
        await db.entries.put(row);
        setSaveState("saved");
        if (savedFlash.current) window.clearTimeout(savedFlash.current);
        savedFlash.current = window.setTimeout(() => setSaveState("idle"), 1800);
      }, 600);
    },
    [date, principle.id]
  );

  const onChange = (v: string) => {
    setText(v);
    scheduleSave(v);
  };

  // Clear any pending timer on unmount / date change.
  useEffect(() => {
    return () => {
      if (saveTimer.current) window.clearTimeout(saveTimer.current);
    };
  }, [date]);

  async function askEcho() {
    if (!text.trim()) return;
    setEchoState("loading");
    setEcho("");
    try {
      const e = await fetchEcho(principle, text.trim());
      setEcho(e);
      setEchoState("idle");
    } catch {
      setEchoState("error");
    }
  }

  const hasText = text.trim().length > 0;

  return (
    <div className="min-h-full px-5 py-7 sm:py-12">
      <div className="max-w-2xl mx-auto">
        {/* Top bar */}
        <header className="flex items-center justify-between mb-10">
          <div className="font-serif italic text-lg text-paper-terra select-none">Marcus</div>
          <div className="flex items-center gap-4">
            {!isToday && (
              <button
                onClick={onBackToToday}
                className="text-sm text-paper-soft hover:text-paper-ink transition-colors"
              >
                Aujourd'hui
              </button>
            )}
            <button
              onClick={onOpenHistory}
              className="text-sm text-paper-terra hover:text-paper-terraSoft transition-colors"
            >
              Le carnet →
            </button>
          </div>
        </header>

        {!loaded ? (
          <div className="h-64" />
        ) : (
          <main className="fadeup">
            <p className="text-sm text-paper-soft mb-8">
              {formatLong(date)}
              {!isToday && <span className="text-paper-faint"> · relecture</span>}
            </p>

            {/* The principle */}
            <blockquote className="mb-6">
              <p className="font-serif text-[1.7rem] sm:text-[2rem] leading-[1.3] text-paper-ink">
                « {principle.quote} »
              </p>
              <footer className="mt-3 text-sm text-paper-soft">
                — {principle.author}
                {principle.work && <span className="text-paper-faint">, {principle.work}</span>}
              </footer>
            </blockquote>

            <p className="text-[1.05rem] leading-relaxed text-paper-soft mb-2 font-serif italic">
              {principle.gloss}
            </p>
            <p className="text-[0.98rem] leading-relaxed text-paper-soft/90 mb-8">
              {principle.framing}
            </p>

            {/* The prompt */}
            <p className="font-serif text-xl text-paper-terra mb-4 leading-snug">
              {principle.prompt}
            </p>

            {/* The writing square */}
            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Quelques lignes, sans pression…"
                spellCheck
                className="w-full min-h-[220px] resize-y rounded-2xl border border-paper-line bg-paper-panel/70 px-6 py-5 text-[1.2rem] leading-relaxed text-paper-ink placeholder:text-paper-faint/70 focus:outline-none focus:border-paper-terra/60 focus:bg-paper-panel transition-colors"
              />
              <div className="h-5 mt-1.5 text-xs text-paper-faint select-none">
                {saveState === "saving" && "enregistrement…"}
                {saveState === "saved" && "enregistré"}
              </div>
            </div>

            {/* Echo — optional, subtle, never automatic */}
            <div className="mt-2">
              {hasText && echoState !== "loading" && !echo && (
                <button
                  onClick={askEcho}
                  className="text-sm text-paper-terra hover:text-paper-terraSoft transition-colors underline decoration-paper-line underline-offset-4"
                >
                  Un écho ?
                </button>
              )}
              {echoState === "loading" && <p className="text-sm text-paper-faint">…</p>}
              {echoState === "error" && (
                <p className="text-sm text-paper-soft">
                  L'écho demande le réseau — réessaie plus tard.{" "}
                  <button onClick={askEcho} className="text-paper-terra underline underline-offset-2">
                    réessayer
                  </button>
                </p>
              )}
              {echo && (
                <div className="mt-1 rounded-xl border-l-2 border-paper-terra/60 bg-paper-panel/50 pl-4 pr-4 py-3">
                  <p className="font-serif italic text-[1.1rem] leading-relaxed text-paper-ink">{echo}</p>
                </div>
              )}
            </div>

            {/* This date, years past */}
            <YearsPast monthDayKey={monthDay(date)} currentDate={date} onOpenDate={onOpenDate} />
          </main>
        )}
      </div>
    </div>
  );
}
