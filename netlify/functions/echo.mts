import type { Config } from "@netlify/functions";
import { forcedToolJSON, FAST } from "./lib/anthropic.ts";

type Lang = "fr" | "en";

interface Body {
  quote?: string;
  author?: string;
  gloss?: string;
  prompt?: string;
  text?: string;
  lang?: Lang;
}

const SYSTEM_FR = `Tu es un compagnon de journal, discret et chaleureux, dans l'esprit stoïcien.
On te donne un principe stoïcien (une citation, son auteur, son sens en clair, une question) et ce que Jac a écrit aujourd'hui en réponse.

Renvoie un « écho » : UNE seule phrase, en français québécois naturel et sobre, tutoiement. Deux registres possibles, choisis le plus juste :
- un reflet doux qui nomme ce que tu perçois dans ce qu'il a écrit, sans le juger ;
- OU une seule question ouverte qui prolonge sa réflexion d'un cran.

Règles strictes :
- Jamais de morale, jamais de leçon, jamais de « tu devrais ».
- Pas de compliment vide (« beau texte »), pas de résumé de sa phrase.
- Reste bref, humble, humain. Une phrase. Pas d'emoji, pas de guillemets autour de ta phrase.
- Si le texte est très court ou vague, pose une petite question qui aide à approfondir.`;

const SYSTEM_EN = `You are a journaling companion, quiet and warm, in the Stoic spirit.
You are given a Stoic principle (a quote, its author, its plain meaning, a question) and what Jac wrote today in response.

Return an "echo": ONE single sentence, in natural, understated English, addressing him directly ("you"). Two possible registers — choose whichever is truest:
- a gentle reflection that names what you perceive in what he wrote, without judging it;
- OR a single open question that carries his reflection one step further.

Strict rules:
- Never moralize, never lecture, never say "you should".
- No empty compliments ("nice writing"), no summary of his sentence.
- Stay brief, humble, human. One sentence. No emoji, no quotation marks around your sentence.
- If the text is very short or vague, ask a small question that helps him go deeper.`;

const schema = (lang: Lang) => ({
  type: "object" as const,
  properties: {
    echo: {
      type: "string",
      description:
        lang === "en"
          ? "A single sentence: a gentle reflection or an open question, in English, without quotation marks."
          : "Une seule phrase : un reflet doux ou une question ouverte, en français, sans guillemets.",
    },
  },
  required: ["echo"],
});

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const text = (body.text ?? "").trim();
  if (!text) return new Response(JSON.stringify({ error: "texte requis" }), { status: 400 });

  const lang: Lang = body.lang === "en" ? "en" : "fr";

  const userContent =
    lang === "en"
      ? `Principle: “${body.quote ?? ""}” — ${body.author ?? ""}
Meaning: ${body.gloss ?? ""}
Today's question: ${body.prompt ?? ""}

What Jac wrote:
“${text}”

Give your echo.`
      : `Principe : « ${body.quote ?? ""} » — ${body.author ?? ""}
Sens : ${body.gloss ?? ""}
Question du jour : ${body.prompt ?? ""}

Ce que Jac a écrit :
« ${text} »

Donne ton écho.`;

  try {
    const result = await forcedToolJSON<{ echo: string }>({
      model: FAST,
      system: lang === "en" ? SYSTEM_EN : SYSTEM_FR,
      messages: [
        {
          role: "user",
          content: userContent,
        },
      ],
      toolName: "repondre_echo",
      toolDescription:
        lang === "en"
          ? "Return a one-sentence echo to the journal entry."
          : "Renvoie un écho d'une phrase à l'entrée de journal.",
      schema: schema(lang),
      maxTokens: 200,
    });
    return new Response(JSON.stringify(result), {
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Erreur serveur" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}

export const config: Config = { path: "/api/echo" };
