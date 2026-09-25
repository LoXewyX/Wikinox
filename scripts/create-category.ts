import Bun from "bun";

const category = Bun.argv[2];
const esName = Bun.argv[3];
const caName = Bun.argv[4];
const enName = Bun.argv[5];

const TOPICS_FILE = "src/data/topics.ts";

const I18N_FILES = {
  es: "src/i18n/es.ts",
  ca: "src/i18n/ca.ts",
  en: "src/i18n/en.ts",
} as const;

if (!category || !esName || !caName || !enName) {
  console.error("Uso: bun run create-category <category> <es> <ca> <en>");
  process.exit(1);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(category)) {
  console.error(
    `Categoría inválida: "${category}". Usa minúsculas, números y guiones.`,
  );
  process.exit(1);
}

const escapeRegex = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const toTitleCase = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const topicsFile = await Bun.file(TOPICS_FILE).text();

const categoriesMatch = topicsFile.match(
  /export const categories\s*=\s*\[([\s\S]*?)\]\s*as const;/,
);

if (!categoriesMatch) {
  console.error(`No se encontró el registro "categories" en ${TOPICS_FILE}.`);
  process.exit(1);
}

const existingCategories = [...categoriesMatch[1].matchAll(/"([^"]+)"/g)].map(
  (match) => match[1],
);

if (existingCategories.includes(category)) {
  console.error(`La categoría "${category}" ya existe.`);
  process.exit(1);
}

const updatedCategories = [...existingCategories, category];

const categoriesBlock = `export const categories = [
${updatedCategories.map((item) => `  "${item}",`).join("\n")}
] as const;`;

const updatedTopicsFile = topicsFile.replace(
  categoriesMatch[0],
  categoriesBlock,
);

if (updatedTopicsFile === topicsFile) {
  console.error("No se pudo modificar topics.ts.");
  process.exit(1);
}

const translations = {
  es: esName,
  ca: caName,
  en: enName,
} as const;

const updatedI18nFiles: Record<string, string> = {};

for (const [locale, name] of Object.entries(translations)) {
  const filePath = I18N_FILES[locale as keyof typeof I18N_FILES];

  const file = await Bun.file(filePath).text();

  const topicsStart = file.search(/\btopics\s*:\s*\{/);

  if (topicsStart === -1) {
    console.error(`No se encontró "topics" en ${filePath}.`);
    process.exit(1);
  }

  const categoriesStart = file.indexOf("categories:", topicsStart);

  if (categoriesStart === -1) {
    console.error(`No se encontró "topics.categories" en ${filePath}.`);
    process.exit(1);
  }

  const categoriesBlockStart = file.indexOf("{", categoriesStart);

  if (categoriesBlockStart === -1) {
    console.error(`No se encontró el bloque de categorías en ${filePath}.`);
    process.exit(1);
  }

  const categoriesBlockEnd = file.indexOf("\n    },", categoriesBlockStart);

  if (categoriesBlockEnd === -1) {
    console.error(
      `No se encontró el final de "topics.categories" en ${filePath}.`,
    );
    process.exit(1);
  }

  const categoriesContent = file.slice(
    categoriesBlockStart + 1,
    categoriesBlockEnd,
  );

  if (
    new RegExp(`["']${escapeRegex(category)}["']\\s*:`).test(categoriesContent)
  ) {
    console.error(
      `La categoría "${category}" ya tiene traducción en ${filePath}.`,
    );
    process.exit(1);
  }

  const insertion = `\n      "${category}": "${name}",`;

  const updatedFile =
    file.slice(0, categoriesBlockEnd) +
    insertion +
    file.slice(categoriesBlockEnd);

  updatedI18nFiles[filePath] = updatedFile;
}

/*
 * Añadir una sección vacía para la categoría.
 *
 * No usamos el nombre traducido porque los comentarios de topics.ts
 * son únicamente organizativos.
 */
const categoryComment = `\n// ${toTitleCase(category)}`;

if (updatedTopicsFile.includes(categoryComment)) {
  console.error(
    `El comentario de categoría "${categoryComment}" ya existe en topics.ts.`,
  );
  process.exit(1);
}

const topicsEndMarker = "] as const satisfies readonly Topic[];";

const topicsEnd = updatedTopicsFile.indexOf(topicsEndMarker);

if (topicsEnd === -1) {
  console.error(
    `No se encontró el final del registro "topics" en ${TOPICS_FILE}.`,
  );
  process.exit(1);
}

const categorySection = `  ${categoryComment}\n`;

const finalTopicsFile =
  updatedTopicsFile.slice(0, topicsEnd) +
  categorySection +
  updatedTopicsFile.slice(topicsEnd);

await Bun.write(TOPICS_FILE, finalTopicsFile);

for (const [filePath, content] of Object.entries(updatedI18nFiles)) {
  await Bun.write(filePath, content);
}

console.log(`Categoría creada correctamente: ${category}`);
