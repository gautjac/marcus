import type { Config } from "@netlify/functions";
import { client, MODEL, ndjsonStream } from "./lib/anthropic.ts";

interface RevueEntry {
  date: string;
  quote: string;
  author: string;
  text: string;
}

const SYSTEM = `Tu es un lecteur attentif et bienveillant du journal stoïcien de Jac.
On te donne un lot de ses entrées passées : pour chacune, la date, le principe stoïcien du jour et ce qu'il a écrit.

Ta tâche : lui rendre « la revue » — quelques courts paragraphes en français québécois, tutoiement, qui reflètent avec justesse les MOTIFS et les FILS qui traversent ses entrées.

Fais ceci :
- Repère les thèmes récurrents, les tensions, les évolutions dans le temps.
- Cite parfois ses propres mots (courtes bribes) pour ancrer ce que tu observes.
- Sois concret et précis, pas générique. Nomme ce que TU vois dans SES textes.

Ne fais jamais ceci :
- Pas de morale, pas de conseils non demandés, pas de « tu devrais ».
- Pas de flatterie, pas de psychanalyse sauvage, pas de diagnostic.
- Pas de listes à puces : de la prose, chaleureuse et posée.

Longueur : 2 à 4 courts paragraphes. Termine sur une note ouverte, jamais sur une conclusion péremptoire.`;

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  let body: { entries?: RevueEntry[] };
  try {
    body = (await req.json()) as { entries?: RevueEntry[] };
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const entries = (body.entries ?? []).filter((e) => (e.text ?? "").trim());
  if (entries.length === 0) {
    return new Response(JSON.stringify({ error: "Aucune entrée à relire" }), { status: 400 });
  }

  const corpus = entries
    .map(
      (e) =>
        `— ${e.date} · principe : « ${e.quote} » (${e.author})\n${e.text.trim()}`
    )
    .join("\n\n");

  return ndjsonStream(async () => {
    const res = await client.messages.create({
      model: MODEL,
      max_tokens: 1400,
      system: SYSTEM,
      messages: [
        {
          role: "user",
          content: `Voici ${entries.length} entrée(s) de mon journal, de la plus ancienne à la plus récente :\n\n${corpus}\n\nFais-moi la revue.`,
        },
      ],
    });
    const parts = res.content
      .filter((b) => b.type === "text")
      .map((b) => (b as { text: string }).text);
    return parts.join("").trim();
  });
}

export const config: Config = { path: "/api/revue" };
