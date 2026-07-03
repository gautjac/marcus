import type { Config } from "@netlify/functions";
import { forcedToolJSON, FAST } from "./lib/anthropic.ts";

interface Body {
  quote?: string;
  author?: string;
  gloss?: string;
  prompt?: string;
  text?: string;
}

const SYSTEM = `Tu es un compagnon de journal, discret et chaleureux, dans l'esprit stoïcien.
On te donne un principe stoïcien (une citation, son auteur, son sens en clair, une question) et ce que Jac a écrit aujourd'hui en réponse.

Renvoie un « écho » : UNE seule phrase, en français québécois naturel et sobre, tutoiement. Deux registres possibles, choisis le plus juste :
- un reflet doux qui nomme ce que tu perçois dans ce qu'il a écrit, sans le juger ;
- OU une seule question ouverte qui prolonge sa réflexion d'un cran.

Règles strictes :
- Jamais de morale, jamais de leçon, jamais de « tu devrais ».
- Pas de compliment vide (« beau texte »), pas de résumé de sa phrase.
- Reste bref, humble, humain. Une phrase. Pas d'emoji, pas de guillemets autour de ta phrase.
- Si le texte est très court ou vague, pose une petite question qui aide à approfondir.`;

const schema = {
  type: "object" as const,
  properties: {
    echo: {
      type: "string",
      description: "Une seule phrase : un reflet doux ou une question ouverte, en français, sans guillemets.",
    },
  },
  required: ["echo"],
};

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

  try {
    const result = await forcedToolJSON<{ echo: string }>({
      model: FAST,
      system: SYSTEM,
      messages: [
        {
          role: "user",
          content: `Principe : « ${body.quote ?? ""} » — ${body.author ?? ""}
Sens : ${body.gloss ?? ""}
Question du jour : ${body.prompt ?? ""}

Ce que Jac a écrit :
« ${text} »

Donne ton écho.`,
        },
      ],
      toolName: "repondre_echo",
      toolDescription: "Renvoie un écho d'une phrase à l'entrée de journal.",
      schema,
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
