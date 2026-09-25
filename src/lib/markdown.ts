import GithubSlugger from "github-slugger";

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export function normalizeHeading(value: string): string {
  return value
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/_(.*?)_/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

export function extractTableOfContents(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  const slugger = new GithubSlugger();

  let insideCodeBlock = false;

  for (const line of markdown.split("\n")) {
    if (line.trim().startsWith("```")) {
      insideCodeBlock = !insideCodeBlock;
      continue;
    }

    if (insideCodeBlock) {
      continue;
    }

    const match = /^(#{1,3})\s+(.+?)\s*$/.exec(line);

    if (!match) {
      continue;
    }

    const level = match[1].length;

    // Conservamos el Markdown original.
    const title = match[2].trim();

    // Para el ID sí eliminamos/saneamos el formato.
    const slugTitle = normalizeHeading(title);

    const id = slugger.slug(slugTitle);

    items.push({
      id,
      title,
      level,
    });
  }

  return items;
}
