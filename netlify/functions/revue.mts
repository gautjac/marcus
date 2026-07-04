import type { Config } from "@netlify/functions";
import { client, MODEL, ndjsonStream } from "./lib/anthropic.ts";

type Lang = "fr" | "en";

interface RevueEntry {
  date: string;
  quote: string;
  author: string;
  text: string;
}

const SYSTEM_FR = `Tu es un lecteur attentif et bienveillant du journal stoïcien de Jac.
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

const SYSTEM_EN = `You are an attentive, kindly reader of Jac's Stoic journal.
You are given a batch of his past entries: for each, the date, that day's Stoic principle, and what he wrote.

Your task: give him "the review" — a few short paragraphs in natural English, addressing him directly ("you"), that faithfully reflect the MOTIFS and THREADS running through his entries.

Do this:
- Spot the recurring themes, the tensions, the shifts over time.
- Quote his own words now and then (short fragments) to anchor what you observe.
- Be concrete and specific, not generic. Name what YOU see in HIS writing.

Never do this:
- No moralizing, no unasked-for advice, no "you should".
- No flattery, no armchair psychoanalysis, no diagnosis.
- No bullet lists: prose, warm and unhurried.

Length: 2 to 4 short paragraphs. End on an open note, never a peremptory conclusion.`;

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  let body: { entries?: RevueEntry[]; lang?: Lang };
  try {
    body = (await req.json()) as { entries?: RevueEntry[]; lang?: Lang };
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const lang: Lang = body.lang === "en" ? "en" : "fr";

  const entries = (body.entries ?? []).filter((e) => (e.text ?? "").trim());
  if (entries.length === 0) {
    return new Response(
      JSON.stringify({ error: lang === "en" ? "No entries to reread" : "Aucune entrée à relire" }),
      { status: 400 }
    );
  }

  const corpus = entries
    .map((e) =>
      lang === "en"
        ? `— ${e.date} · principle: “${e.quote}” (${e.author})\n${e.text.trim()}`
        : `— ${e.date} · principe : « ${e.quote} » (${e.author})\n${e.text.trim()}`
    )
    .join("\n\n");

  const userContent =
    lang === "en"
      ? `Here are ${entries.length} entr${entries.length === 1 ? "y" : "ies"} from my journal, oldest to newest:\n\n${corpus}\n\nGive me the review.`
      : `Voici ${entries.length} entrée(s) de mon journal, de la plus ancienne à la plus récente :\n\n${corpus}\n\nFais-moi la revue.`;

  return ndjsonStream(async () => {
    const res = await client.messages.create({
      model: MODEL,
      max_tokens: 1400,
      system: lang === "en" ? SYSTEM_EN : SYSTEM_FR,
      messages: [
        {
          role: "user",
          content: userContent,
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
