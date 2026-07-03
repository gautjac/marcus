export default function Onboarding({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-paper-bg/80 backdrop-blur-sm p-6 fadeup">
      <div className="max-w-md w-full bg-paper-panel border border-paper-line rounded-2xl px-8 py-9 shadow-[0_20px_60px_-20px_rgba(44,38,32,0.35)]">
        <div className="text-paper-terra font-serif italic text-lg mb-1">Marcus</div>
        <h1 className="font-serif text-[2rem] leading-tight text-paper-ink mb-4">
          Un principe stoïcien.
          <br />
          Une page par jour.
        </h1>
        <ul className="space-y-3.5 text-[0.95rem] text-paper-soft my-6 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-paper-terra font-serif italic">i.</span>
            <span>Chaque jour, une pensée — de Marc Aurèle, Épictète ou Sénèque — et une seule question.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-paper-terra font-serif italic">ii.</span>
            <span>Écris quelques lignes, sans pression. Ça s'enregistre tout seul, sur ton appareil.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-paper-terra font-serif italic">iii.</span>
            <span>Avec le temps, tes propres mots te reviennent. Pas de compteur, pas de culpabilité.</span>
          </li>
        </ul>
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-paper-terra text-paper-panel font-medium tracking-wide hover:bg-paper-terraSoft transition-colors"
        >
          Commencer
        </button>
        <p className="text-center text-xs text-paper-faint mt-4">
          Fonctionne hors-ligne. Tes entrées ne quittent jamais cet appareil.
        </p>
      </div>
    </div>
  );
}
