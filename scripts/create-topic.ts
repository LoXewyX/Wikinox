import { $ } from "bun";

const [topicSlug, category, difficulty, esName, caName, enName] =
  Bun.argv.slice(2);

const PATHS = {
  topics: "src/data/topics.ts",
  routes: "src/routes.tsx",
  topicsDirectory: "src/pages/topics",
  i18n: {
    es: "src/i18n/es.ts",
    ca: "src/i18n/ca.ts",
    en: "src/i18n/en.ts",
  },
} as const;

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const TOPIC_ENTRY_PATTERN =
  /(^|\n)([ \t]*)\{\s*\n\s*id:\s*["']([^"']+)["'],\s*\n\s*category:\s*["']([^"']+)["'],\s*\n\s*difficulty:\s*["']([^"']+)["'],?\s*\n\s*\}/g;

const CATEGORY_PATTERN =
  /export const categories\s*=\s*\[([\s\S]*?)\]\s*as const;/;

const DIFFICULTY_PATTERN =
  /export const difficulties\s*=\s*\[([\s\S]*?)\]\s*as const;/;

function fail(message: string): never {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function toPascalCase(value: string): string {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

async function readFile(path: string): Promise<string> {
  const file = Bun.file(path);

  if (!(await file.exists())) {
    throw new Error(`File not found: ${path}`);
  }

  return file.text();
}

function parseStringArray(
  source: string,
  pattern: RegExp,
  name: string,
): string[] {
  const match = source.match(pattern);

  if (!match) {
    throw new Error(`Could not find "${name}".`);
  }

  return [...match[1].matchAll(/["']([^"']+)["']/g)].map((match) => match[1]);
}

function getTopicsArray(file: string): {
  arrayStart: number;
  arrayEnd: number;
  content: string;
} {
  const declarationStart = file.indexOf("export const topics");

  if (declarationStart === -1) {
    throw new Error(`Could not find "export const topics" in ${PATHS.topics}.`);
  }

  const arrayStart = file.indexOf("[", declarationStart);

  if (arrayStart === -1) {
    throw new Error(
      'Could not find the opening bracket of the "topics" array.',
    );
  }

  const arrayEnd = file.indexOf(
    "] as const satisfies readonly Topic[];",
    arrayStart,
  );

  if (arrayEnd === -1) {
    throw new Error(
      'Could not find the closing bracket of the "topics" array.',
    );
  }

  return {
    arrayStart,
    arrayEnd,
    content: file.slice(arrayStart + 1, arrayEnd),
  };
}

function getTopicMatches(content: string) {
  return [...content.matchAll(TOPIC_ENTRY_PATTERN)];
}

function findTopicBySlug(
  file: string,
  slug: string,
): RegExpMatchArray | undefined {
  const { content } = getTopicsArray(file);

  return getTopicMatches(content).find((match) => match[3] === slug);
}

function insertAfterLastTopic(
  file: string,
  topicRecord: string,
  lastMatch: RegExpMatchArray,
  arrayStart: number,
): string {
  if (lastMatch.index === undefined) {
    throw new Error("Could not determine the insertion position.");
  }

  const leadingNewlineLength = lastMatch[1].length;
  const objectStart = lastMatch.index + leadingNewlineLength;
  const objectText = lastMatch[0].slice(leadingNewlineLength);
  const absoluteObjectStart = arrayStart + 1 + objectStart;

  let insertionPoint = absoluteObjectStart + objectText.length;

  while (
    insertionPoint < file.length &&
    (file[insertionPoint] === " " || file[insertionPoint] === "\t")
  ) {
    insertionPoint++;
  }

  let updated = file;

  if (updated[insertionPoint] !== ",") {
    updated =
      updated.slice(0, insertionPoint) + "," + updated.slice(insertionPoint);
  }

  insertionPoint++;

  while (
    insertionPoint < updated.length &&
    (updated[insertionPoint] === " " || updated[insertionPoint] === "\t")
  ) {
    insertionPoint++;
  }

  if (updated[insertionPoint] === "\r") {
    insertionPoint++;

    if (updated[insertionPoint] === "\n") {
      insertionPoint++;
    }
  } else if (updated[insertionPoint] === "\n") {
    insertionPoint++;
  } else {
    updated =
      updated.slice(0, insertionPoint) + "\n" + updated.slice(insertionPoint);

    insertionPoint++;
  }

  return (
    updated.slice(0, insertionPoint) +
    topicRecord.trimEnd() +
    "\n" +
    updated.slice(insertionPoint)
  );
}

function insertBeforeTopic(
  file: string,
  topicRecord: string,
  nextMatch: RegExpMatchArray,
  arrayStart: number,
): string {
  if (nextMatch.index === undefined) {
    throw new Error("Could not determine the insertion position.");
  }

  const insertionPoint = arrayStart + 1 + nextMatch.index;

  return (
    file.slice(0, insertionPoint) +
    topicRecord.trimEnd() +
    "\n" +
    file.slice(insertionPoint)
  );
}

function insertTopicIntoTopicsFile(
  file: string,
  topicRecord: string,
  targetCategory: string,
  categoryOrder: readonly string[],
): string {
  const { arrayStart, content } = getTopicsArray(file);

  const matches = getTopicMatches(content);

  if (matches.length === 0) {
    throw new Error(`No topics were found in ${PATHS.topics}.`);
  }

  const categoryTopics = matches.filter((match) => match[5] === targetCategory);

  if (categoryTopics.length > 0) {
    return insertAfterLastTopic(
      file,
      topicRecord,
      categoryTopics[categoryTopics.length - 1],
      arrayStart,
    );
  }

  const targetCategoryIndex = categoryOrder.indexOf(targetCategory);

  if (targetCategoryIndex === -1) {
    throw new Error(
      `Category "${targetCategory}" is not present in the category order.`,
    );
  }

  const nextCategoryTopic = matches.find((match) => {
    const topicCategory = match[5];
    const topicCategoryIndex = categoryOrder.indexOf(topicCategory);

    return topicCategoryIndex > targetCategoryIndex;
  });

  if (nextCategoryTopic) {
    return insertBeforeTopic(file, topicRecord, nextCategoryTopic, arrayStart);
  }

  return insertAfterLastTopic(
    file,
    topicRecord,
    matches[matches.length - 1],
    arrayStart,
  );
}

function findTranslationBlock(file: string): {
  start: number;
  end: number;
} {
  const topicsStart = file.search(/\btopics\s*:\s*\{/);

  if (topicsStart === -1) {
    throw new Error('Could not find the "topics" translation block.');
  }

  const topicStart = file.indexOf("topic:", topicsStart);

  if (topicStart === -1) {
    throw new Error('Could not find the "topics.topic" translation block.');
  }

  const blockStart = file.indexOf("{", topicStart);

  if (blockStart === -1) {
    throw new Error('Could not find the opening brace of "topics.topic".');
  }

  const closingPattern =
    /\n[ \t]{4}\},?\s*\n[ \t]*(?:categories|difficulty|navigation|mathematics|$)/g;

  closingPattern.lastIndex = blockStart + 1;

  const closingMatch = closingPattern.exec(file);

  if (!closingMatch) {
    throw new Error('Could not determine the end of "topics.topic".');
  }

  return {
    start: blockStart,
    end: closingMatch.index,
  };
}

function getTranslationIndent(
  file: string,
  blockStart: number,
  blockEnd: number,
): string {
  const content = file.slice(blockStart + 1, blockEnd);

  const match = content.match(/\n([ \t]+)(?:"[^"]+"|'[^']+')\s*:/);

  return match?.[1] ?? "      ";
}

function insertTranslation(file: string, slug: string, name: string): string {
  const { start: blockStart, end: blockEnd } = findTranslationBlock(file);

  const topicContent = file.slice(blockStart + 1, blockEnd);

  const escapedSlug = escapeRegex(slug);

  const translationExists = new RegExp(
    `(?:["']${escapedSlug}["']|${escapedSlug})\\s*:`,
  ).test(topicContent);

  if (translationExists) {
    throw new Error(`Translation for "${slug}" already exists.`);
  }

  const indent = getTranslationIndent(file, blockStart, blockEnd);

  const lastEntryRegex =
    /(?:^|\n)([ \t]+)(?:"[^"]+"|'[^']+')[ \t]*:\s*["'][^"\r\n]*["'],?[ \t]*$/gm;

  let lastEntryMatch: RegExpMatchArray | null = null;

  for (const match of topicContent.matchAll(lastEntryRegex)) {
    lastEntryMatch = match;
  }

  if (!lastEntryMatch) {
    throw new Error('No translations were found in "topics.topic".');
  }

  const lastEntryStart = lastEntryMatch.index!;

  let insertionPoint =
    blockStart + 1 + lastEntryStart + lastEntryMatch[0].length;

  let updated = file;

  let valueEnd = insertionPoint;

  while (
    valueEnd > 0 &&
    (updated[valueEnd - 1] === " " || updated[valueEnd - 1] === "\t")
  ) {
    valueEnd--;
  }

  if (updated[valueEnd - 1] !== ",") {
    updated = updated.slice(0, valueEnd) + "," + updated.slice(valueEnd);

    insertionPoint++;
  }

  const insertion = `\n${indent}"${slug}": "${name}",`;

  return (
    updated.slice(0, insertionPoint) + insertion + updated.slice(insertionPoint)
  );
}

function insertRoute(
  file: string,
  slug: string,
  componentName: string,
): string {
  const escapedSlug = escapeRegex(slug);

  const defaultRoutePattern =
    /^([ \t]*)<Route default component=\{NotFoundPage\} \/>/m;

  const defaultRouteMatch = file.match(defaultRoutePattern);

  if (!defaultRouteMatch) {
    throw new Error(
      `Could not find the default NotFoundPage route in ${PATHS.routes}.`,
    );
  }

  const indentation = defaultRouteMatch[1];

  const routePattern = new RegExp(
    `^[ \\t]*<Route\\s+path="/topics/${escapedSlug}"[\\s\\S]*?\\n?[ \\t]*\\)\\}\\s*\\/?>`,
    "m",
  );

  if (routePattern.test(file)) {
    return file;
  }

  const route = [
    `${indentation}<Route`,
    `${indentation}  path="/topics/${slug}"`,
    `${indentation}  component={lazy(`,
    `${indentation}    () =>`,
    `${indentation}      import(`,
    `${indentation}        "./pages/topics/${slug}/${componentName}"`,
    `${indentation}      ),`,
    `${indentation}  )}`,
    `${indentation}/>`,
  ].join("\n");

  const routeIndex = defaultRouteMatch.index!;

  return file.slice(0, routeIndex) + route + "\n" + file.slice(routeIndex);
}

function createPageContent(slug: string, componentName: string): string {
  return `import TopicPage from "@/components/topics/TopicPage";
import { useI18n } from "@/providers/I18nProvider";

import es from "./content/es.md?raw";
import ca from "./content/ca.md?raw";
import en from "./content/en.md?raw";

export default function ${componentName}() {
  const { locale } = useI18n();

  return (
    <TopicPage
      id="${slug}"
      content={{ es, ca, en }[locale]}
    />
  );
}
`;
}

function createMarkdownContent(
  language: "es" | "ca" | "en",
  title: string,
): string {
  const description = {
    es: "Contenido pendiente.",
    ca: "Contingut pendent.",
    en: "Content pending.",
  }[language];

  return `# ${title}\n\n${description}\n`;
}

function validateArguments(): void {
  if (!topicSlug || !category || !difficulty || !esName || !caName || !enName) {
    fail(
      [
        "Missing required arguments.",
        "",
        "Usage:",
        "  bun run create-topic <slug> <category> <difficulty> <es> <ca> <en>",
      ].join("\n"),
    );
  }

  if (!SLUG_PATTERN.test(topicSlug)) {
    fail(
      `Invalid topic slug "${topicSlug}". Slugs must contain only lowercase letters, numbers, and hyphens.`,
    );
  }
}

async function createTopic(): Promise<void> {
  validateArguments();

  /*
   * Read all source files before making any changes.
   */
  const topicsFile = await readFile(PATHS.topics);
  const routesFile = await readFile(PATHS.routes);

  const i18nFiles = await Promise.all(
    Object.entries(PATHS.i18n).map(async ([locale, path]) => ({
      locale,
      path,
      content: await readFile(path),
    })),
  );

  /*
   * Validate category and difficulty against
   * the actual source definitions.
   */
  const categories = parseStringArray(
    topicsFile,
    CATEGORY_PATTERN,
    "categories",
  );

  if (!categories.includes(category)) {
    throw new Error(
      `Invalid category "${category}". Available categories: ${categories.join(", ")}`,
    );
  }

  const difficulties = parseStringArray(
    topicsFile,
    DIFFICULTY_PATTERN,
    "difficulties",
  );

  if (!difficulties.includes(difficulty)) {
    throw new Error(
      `Invalid difficulty "${difficulty}". Available difficulties: ${difficulties.join(", ")}`,
    );
  }

  /*
   * Prevent duplicate topics.
   */
  if (findTopicBySlug(topicsFile, topicSlug)) {
    throw new Error(`Topic "${topicSlug}" already exists.`);
  }

  /*
   * Validate all translations before changing
   * anything.
   */
  const translations = {
    es: esName,
    ca: caName,
    en: enName,
  } as const;

  for (const { locale, content } of i18nFiles) {
    const escapedSlug = escapeRegex(topicSlug);

    const topicsStart = content.search(/\btopics\s*:\s*\{/);

    if (topicsStart === -1) {
      throw new Error(
        `Could not find "topics" in ${PATHS.i18n[locale as keyof typeof PATHS.i18n]}.`,
      );
    }

    const translationExists = new RegExp(
      `(?:["']${escapedSlug}["']|${escapedSlug})\\s*:`,
    ).test(content);

    if (translationExists) {
      throw new Error(
        `Translation for "${topicSlug}" already exists in ${PATHS.i18n[locale as keyof typeof PATHS.i18n]}.`,
      );
    }
  }

  /*
   * Validate that the route does not already exist.
   */
  const escapedSlug = escapeRegex(topicSlug);

  const routeExists = new RegExp(`path="/topics/${escapedSlug}"`).test(
    routesFile,
  );

  if (routeExists) {
    throw new Error(`Route for "${topicSlug}" already exists.`);
  }

  /*
   * Build the updated topics file.
   */
  const topicRecord = `  {
    id: "${topicSlug}",
    category: "${category}",
    difficulty: "${difficulty}",
  },`;

  const updatedTopicsFile = insertTopicIntoTopicsFile(
    topicsFile,
    topicRecord,
    category,
    categories,
  );

  /*
   * Build updated translation files.
   */
  const updatedI18nFiles = i18nFiles.map(({ locale, path, content }) => ({
    path,
    content: insertTranslation(
      content,
      topicSlug,
      translations[locale as keyof typeof translations],
    ),
  }));

  /*
   * Build the updated route file.
   *
   * Routes use inline lazy imports, so no page
   * import is added to the top of routes.tsx.
   */
  const componentName = `${toPascalCase(topicSlug)}Page`;

  const updatedRoutesFile = insertRoute(routesFile, topicSlug, componentName);

  /*
   * Prepare generated files.
   */
  const topicDirectory = `${PATHS.topicsDirectory}/${topicSlug}`;

  const contentDirectory = `${topicDirectory}/content`;

  const pageFile = `${topicDirectory}/${componentName}.tsx`;

  const pageContent = createPageContent(topicSlug, componentName);

  const markdownFiles = {
    es: createMarkdownContent("es", esName),
    ca: createMarkdownContent("ca", caName),
    en: createMarkdownContent("en", enName),
  };

  /*
   * Everything above has been validated and
   * transformed in memory.
   *
   * Only now do we modify the project.
   */
  await $`mkdir -p ${contentDirectory}`;

  await Bun.write(pageFile, pageContent);

  await Bun.write(`${contentDirectory}/es.md`, markdownFiles.es);

  await Bun.write(`${contentDirectory}/ca.md`, markdownFiles.ca);

  await Bun.write(`${contentDirectory}/en.md`, markdownFiles.en);

  await Bun.write(PATHS.topics, updatedTopicsFile);

  for (const { path, content } of updatedI18nFiles) {
    await Bun.write(path, content);
  }

  await Bun.write(PATHS.routes, updatedRoutesFile);

  console.log(`✓ Topic "${topicSlug}" created successfully.`);
}

try {
  await createTopic();
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
}
