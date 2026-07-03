# Marcus

Un journal stoïcien quotidien. Chaque jour, **un** principe — de Marc Aurèle,
Épictète ou Sénèque — un court cadrage, une seule question, et un carré généreux
pour écrire quelques lignes. Calme, typographique, une page par jour.

Nommé pour Marc Aurèle.

## L'idée

- **Une page par jour.** Le principe du jour est choisi **de façon
  déterministe à partir de la date** : stable pendant toute la journée, il
  tourne d'un jour à l'autre à travers une liste de ~40 principes curés (courte
  citation, attribution, sens en clair, cadrage, question).
- **Ça t'appartient.** Une entrée par jour civil `{date, principleId, text,
  createdAt, updatedAt}`, stockée localement dans le navigateur (IndexedDB via
  Dexie). Autosave débounce. Les entrées passées sont consultables et
  modifiables.
- **Pas de mécanique de culpabilité.** Aucun compteur, aucune série à ne pas
  briser. Juste tes mots, rendus au fil du temps.
- **« Cette date, les années passées ».** Sur l'écran du jour, tes propres
  entrées écrites le même jour civil les années précédentes remontent
  doucement.

## Claude, avec parcimonie (optionnel, jamais automatique)

- **`/api/echo`** (`claude-haiku-4-5`, JSON simple) — un « écho » d'une phrase :
  un reflet doux ou une question ouverte sur ce que tu viens d'écrire. Offert
  par un petit bouton « Un écho ? », jamais imposé.
- **`/api/revue`** (`claude-opus-4-8`, en flux NDJSON) — « Faire le point » :
  Marcus relit un lot de tes entrées passées et te renvoie, en quelques
  paragraphes, les motifs et les fils qui les traversent.

Ces deux fonctions nécessitent le réseau. **Le journal quotidien — le principe,
la question, l'écriture, l'historique, « les années passées » — fonctionne
entièrement hors-ligne.**

## Pile technique

Vite + React 19 + TypeScript + Tailwind CSS v3 + Dexie (IndexedDB, local-first)
+ Netlify Functions appelant l'API Claude. Aucune base de données externe : tout
vit dans le navigateur.

## Durabilité des données

Les entrées sont précieuses. Le schéma Dexie ne fait que **croître** — aucune
migration destructive, aucun `.clear()` des données. `persist.ts` demande le
stockage persistant pour que le navigateur n'évince jamais silencieusement la
base.

## Design

Parchemin et encre. Un serif élégant (EB Garamond) pour le principe et
l'écriture, un sans clair (Inter) pour l'interface. Grande respiration, papier
chaud, un seul accent retenu (terre cuite). Ça doit se lire comme un beau
carnet.

## Développement

```bash
npm install
npm run dev      # journal seul (les fonctions IA ne tournent pas)
netlify dev      # avec les fonctions /api/echo et /api/revue
npm run build
```

La clé serveur est l'variable d'environnement `CLAUDE_API_KEY` (pas
`ANTHROPIC_API_KEY`).

---

Fait pour Jac. 🤖 Généré avec [Claude Code](https://claude.com/claude-code)
