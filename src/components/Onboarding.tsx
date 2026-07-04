import type { Lang } from "../types";

const LABELS = {
  fr: {
    brand: "Marcus",
    title: (
      <>
        Un principe stoïcien.
        <br />
        Une page par jour.
      </>
    ),
    points: [
      "Chaque jour, une pensée — de Marc Aurèle, Épictète ou Sénèque — et une seule question.",
      "Écris quelques lignes, sans pression. Ça s'enregistre tout seul, sur ton appareil.",
      "Avec le temps, tes propres mots te reviennent. Pas de compteur, pas de culpabilité.",
    ],
    start: "Commencer",
    footer: "Fonctionne hors-ligne. Tes entrées ne quittent jamais cet appareil.",
  },
  en: {
    brand: "Marcus",
    title: (
      <>
        One Stoic principle.
        <br />
        One page a day.
      </>
    ),
    points: [
      "Each day, a thought — from Marcus Aurelius, Epictetus, or Seneca — and a single question.",
      "Write a few lines, no pressure. It saves itself, on your device.",
      "Over time, your own words come back to you. No streak counter, no guilt.",
    ],
    start: "Begin",
    footer: "Works offline. Your entries never leave this device.",
  },
} as const;

const NUMERALS = ["i.", "ii.", "iii."];

export default function Onboarding({ onClose, lang }: { onClose: () => void; lang: Lang }) {
  const t = LABELS[lang];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-paper-bg/80 backdrop-blur-sm p-6 fadeup">
      <div className="max-w-md w-full bg-paper-panel border border-paper-line rounded-2xl px-8 py-9 shadow-[0_20px_60px_-20px_rgba(44,38,32,0.35)]">
        <div className="text-paper-terra font-serif italic text-lg mb-1">{t.brand}</div>
        <h1 className="font-serif text-[2rem] leading-tight text-paper-ink mb-4">{t.title}</h1>
        <ul className="space-y-3.5 text-[0.95rem] text-paper-soft my-6 leading-relaxed">
          {t.points.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-paper-terra font-serif italic">{NUMERALS[i]}</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-paper-terra text-paper-panel font-medium tracking-wide hover:bg-paper-terraSoft transition-colors"
        >
          {t.start}
        </button>
        <p className="text-center text-xs text-paper-faint mt-4">{t.footer}</p>
      </div>
    </div>
  );
}
