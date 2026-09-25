import Bun from "bun";

const difficulty = Bun.argv[2];
const esName = Bun.argv[3];
const caName = Bun.argv[4];
const enName = Bun.argv[5];

const TOPICS_FILE = "src/data/topics.ts";

const I18N_FILES = {
  es: "src/i18n/es.ts",
  ca: "src/i18n/ca.ts",
  en: "src/i18n/en.ts",
} as const;

if (!difficulty || !esName || !caName || !enName) {
  console.error("Uso: bun run create-difficulty <difficulty> <es> <ca> <en>");
  process.exit(1);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(difficulty)) {
  console.error(
    `Dificultad inválida: "${difficulty}". Usa minúsculas, números y guiones.`,
  );
  process.exit(1);
}

const escapeRegex = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const topicsFile = await Bun.file(TOPICS_FILE).text();

const difficultiesMatch = topicsFile.match(
  /export const difficulties\s*=\s*\[([\s\S]*?)\]\s*as const;/,
);

if (!difficultiesMatch) {
  console.error(`No se encontró el registro "difficulties" en ${TOPICS_FILE}.`);
  process.exit(1);
}

const existingDifficulties = [
  ...difficultiesMatch[1].matchAll(/"([^"]+)"/g),
].map((match) => match[1]);

if (existingDifficulties.includes(difficulty)) {
  console.error(`La dificultad "${difficulty}" ya existe.`);
  process.exit(1);
}

const updatedDifficulties = [...existingDifficulties, difficulty];

const difficultiesBlock = `export const difficulties = [
${updatedDifficulties.map((item) => `  "${item}",`).join("\n")}
] as const;`;

const updatedTopicsFile = topicsFile.replace(
  difficultiesMatch[0],
  difficultiesBlock,
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

  const difficultyStart = file.indexOf("difficulty:", topicsStart);

  if (difficultyStart === -1) {
    console.error(`No se encontró "topics.difficulty" en ${filePath}.`);
    process.exit(1);
  }

  const difficultyBlockStart = file.indexOf("{", difficultyStart);

  if (difficultyBlockStart === -1) {
    console.error(`No se encontró el bloque de dificultades en ${filePath}.`);
    process.exit(1);
  }

  const difficultyBlockEnd = file.indexOf("\n    },", difficultyBlockStart);

  if (difficultyBlockEnd === -1) {
    console.error(
      `No se encontró el final de "topics.difficulty" en ${filePath}.`,
    );
    process.exit(1);
  }

  const difficultyContent = file.slice(
    difficultyBlockStart + 1,
    difficultyBlockEnd,
  );

  if (
    new RegExp(`["']${escapeRegex(difficulty)}["']\\s*:`).test(
      difficultyContent,
    )
  ) {
    console.error(
      `La dificultad "${difficulty}" ya tiene traducción en ${filePath}.`,
    );
    process.exit(1);
  }

  const insertion = `\n      "${difficulty}": "${name}",`;

  const updatedFile =
    file.slice(0, difficultyBlockEnd) +
    insertion +
    file.slice(difficultyBlockEnd);

  updatedI18nFiles[filePath] = updatedFile;
}

await Bun.write(TOPICS_FILE, updatedTopicsFile);

for (const [filePath, content] of Object.entries(updatedI18nFiles)) {
  await Bun.write(filePath, content);
}

console.log(`Dificultad creada correctamente: ${difficulty}`);
