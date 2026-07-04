// Client-side wrappers around the Netlify functions. The daily journaling never
// touches these — they are optional, network-dependent extras.

import type { Entry } from "./db";
import type { Principle } from "./principles";
import type { Lang } from "./types";

/** /api/echo — FAST, plain JSON. A brief warm reflection on today's entry. */
export async function fetchEcho(principle: Principle, text: string, lang: Lang): Promise<string> {
  const res = await fetch("/api/echo", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      quote: principle.quote,
      author: principle.author,
      gloss: principle.gloss,
      prompt: principle.prompt,
      text,
      lang,
    }),
  });
  if (!res.ok) throw new Error(`echo ${res.status}`);
  const data = (await res.json()) as { echo?: string; error?: string };
  if (data.error) throw new Error(data.error);
  return (data.echo ?? "").trim();
}

interface RevueEntry {
  date: string;
  quote: string;
  author: string;
  text: string;
}

/**
 * /api/revue — MODEL (opus), wrapped in ndjsonStream on the server. We read the
 * stream and parse the LAST non-empty JSON line, which carries {result} or {error}.
 */
export async function fetchRevue(
  entries: Entry[],
  resolve: (id: string) => Principle | undefined,
  lang: Lang
): Promise<string> {
  const payload: RevueEntry[] = entries.map((e) => {
    const p = resolve(e.principleId);
    return {
      date: e.date,
      quote: p?.quote ?? "",
      author: p?.author ?? "",
      text: e.text,
    };
  });

  const res = await fetch("/api/revue", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ entries: payload, lang }),
  });
  if (!res.ok && res.status !== 200) throw new Error(`revue ${res.status}`);
  if (!res.body) throw new Error("Pas de flux");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let lastJSON: { result?: string; error?: string } | null = null;

  const consume = (chunk: string) => {
    buf += chunk;
    const lines = buf.split("\n");
    buf = lines.pop() ?? "";
    for (const line of lines) {
      const t = line.trim();
      if (!t) continue;
      try {
        lastJSON = JSON.parse(t);
      } catch {
        /* heartbeat / partial */
      }
    }
  };

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    consume(decoder.decode(value, { stream: true }));
  }
  if (buf.trim()) {
    try {
      lastJSON = JSON.parse(buf.trim());
    } catch {
      /* ignore */
    }
  }

  if (!lastJSON) throw new Error("Aucun résultat");
  if (lastJSON.error) throw new Error(lastJSON.error);
  return (lastJSON.result ?? "").trim();
}
