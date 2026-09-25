import { $ } from "bun";

const topicSlug = Bun.argv[2];

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

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function fail(message: string): never {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function removeLineEnding(file: string, index: number): number {
  if (file[index] === "\r") {
    return file[index + 1] === "\n" ? index + 2 : index + 1;
  }

  if (file[index] === "\n") {
    return index + 1;
  }

  return index;
}

function findTopicsArray(file: string): {
  start: number;
  end: number;
} {
  const declarationStart = file.indexOf("export const topics");

  if (declarationStart === -1) {
    throw new Error('Could not find "export const topics".');
  }

  const arrayStart = file.indexOf("[", declarationStart);

  if (arrayStart === -1) {
    throw new Error('Could not find the "topics" array opening bracket.');
  }

  const arrayEnd = file.indexOf(
    "] as const satisfies readonly Topic[];",
    arrayStart,
  );

  if (arrayEnd === -1) {
    throw new Error('Could not find the "topics" array closing bracket.');
  }

  return {
    start: arrayStart,
    end: arrayEnd,
  };
}

function deleteTopicFromTopicsFile(file: string, slug: string): string {
  const { start: arrayStart, end: arrayEnd } = findTopicsArray(file);

  const topicsContent = file.slice(arrayStart + 1, arrayEnd);

  const matches = [...topicsContent.matchAll(TOPIC_ENTRY_PATTERN)];

  const topicMatch = matches.find((match) => match[3] === slug);

  if (!topicMatch || topicMatch.index === undefined) {
    throw new Error(`Topic "${slug}" was not found in ${PATHS.topics}.`);
  }

  const leadingNewlineLength = topicMatch[1].length;

  const absoluteStart =
    arrayStart + 1 + topicMatch.index + leadingNewlineLength;

  const objectEnd = absoluteStart + topicMatch[0].length - leadingNewlineLength;

  let deleteEnd = objectEnd;

  while (
    deleteEnd < file.length &&
    (file[deleteEnd] === " " || file[deleteEnd] === "\t")
  ) {
    deleteEnd++;
  }

  if (file[deleteEnd] === ",") {
    deleteEnd++;

    while (
      deleteEnd < file.length &&
      (file[deleteEnd] === " " || file[deleteEnd] === "\t")
    ) {
      deleteEnd++;
    }
  }

  deleteEnd = removeLineEnding(file, deleteEnd);

  return file.slice(0, absoluteStart) + file.slice(deleteEnd);
}

function findTopicTranslationsBlock(file: string): {
  start: number;
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

  return {
    start: blockStart,
  };
}

function deleteTranslation(file: string, slug: string): string {
  const { start: blockStart } = findTopicTranslationsBlock(file);

  const escapedSlug = escapeRegex(slug);

  const translationPattern = new RegExp(
    `^([ \\t]*)(?:"${escapedSlug}"|'${escapedSlug}'|${escapedSlug})\\s*:\\s*["'][^\\r\\n]*["'],?[ \\t]*$`,
    "m",
  );

  const blockContent = file.slice(blockStart + 1);

  const match = blockContent.match(translationPattern);

  if (!match || match.index === undefined) {
    throw new Error(`Translation for "${slug}" was not found.`);
  }

  let deleteStart = blockStart + 1 + match.index;

  const deleteEnd = deleteStart + match[0].length;

  if (deleteStart > 0 && file[deleteStart - 1] === "\n") {
    deleteStart--;

    if (deleteStart > 0 && file[deleteStart - 1] === "\r") {
      deleteStart--;
    }
  }

  return file.slice(0, deleteStart) + file.slice(deleteEnd);
}

function deleteRoute(file: string, slug: string): string {
  const escapedSlug = escapeRegex(slug);

  /*
   * Routes are now generated as:
   *
   * <Route
   *   path="/topics/example"
   *   component={lazy(
   *     () =>
   *       import(
   *         "./pages/topics/example/ExamplePage"
   *       ),
   *   )}
   * />
   *
   * There is no longer a static page import to remove.
   */
  const routePattern = new RegExp(
    `^[ \\t]*<Route\\r?\\n` +
      `[ \\t]+path="/topics/${escapedSlug}"\\r?\\n` +
      `[ \\t]+component=\\{lazy\\(\\r?\\n` +
      `[ \\t]+\\(\\) =>\\r?\\n` +
      `[ \\t]+import\\(\\r?\\n` +
      `[ \\t]+"\\./pages/topics/${escapedSlug}/[^"]+"\\r?\\n` +
      `[ \\t]+\\),\\r?\\n` +
      `[ \\t]+\\)\\}\\r?\\n` +
      `[ \\t]+/>(?:\\r?\\n)?`,
    "m",
  );

  const withoutRoute = file.replace(routePattern, "");

  if (withoutRoute === file) {
    throw new Error(`Route for "${slug}" was not found in ${PATHS.routes}.`);
  }

  return withoutRoute;
}

async function readFile(path: string): Promise<string> {
  const file = Bun.file(path);

  if (!(await file.exists())) {
    throw new Error(`File not found: ${path}`);
  }

  return file.text();
}

function topicExists(file: string, slug: string): boolean {
  const pattern = new RegExp(`id:\\s*["']${escapeRegex(slug)}["']`);

  return pattern.test(file);
}

async function deleteTopic(): Promise<void> {
  if (!topicSlug) {
    fail(
      [
        "Missing topic slug.",
        "",
        "Usage:",
        "  bun run delete-topic <topic>",
        "",
        "Example:",
        "  bun run delete-topic inverse-trigonometric-functions",
      ].join("\n"),
    );
  }

  if (!SLUG_PATTERN.test(topicSlug)) {
    fail(
      `Invalid topic slug "${topicSlug}". Slugs must contain only lowercase letters, numbers, and hyphens.`,
    );
  }

  /*
   * Read every required file before modifying anything.
   */
  const topicsFile = await readFile(PATHS.topics);
  const routesFile = await readFile(PATHS.routes);

  const i18nFiles = await Promise.all(
    Object.entries(PATHS.i18n).map(async ([language, path]) => ({
      language,
      path,
      content: await readFile(path),
    })),
  );

  if (!topicExists(topicsFile, topicSlug)) {
    fail(`Topic "${topicSlug}" does not exist.`);
  }

  /*
   * Build every updated file in memory first.
   */
  const updatedTopicsFile = deleteTopicFromTopicsFile(topicsFile, topicSlug);

  const updatedI18nFiles = i18nFiles.map(({ language, path, content }) => ({
    language,
    path,
    content: deleteTranslation(content, topicSlug),
  }));

  const updatedRoutesFile = deleteRoute(routesFile, topicSlug);

  /*
   * Only write after every transformation
   * has completed successfully.
   */
  await Bun.write(PATHS.topics, updatedTopicsFile);

  for (const { path, content } of updatedI18nFiles) {
    await Bun.write(path, content);
  }

  await Bun.write(PATHS.routes, updatedRoutesFile);

  /*
   * Remove the topic directory last.
   */
  const topicDirectory = `${PATHS.topicsDirectory}/${topicSlug}`;

  await $`rm -rf ${topicDirectory}`;

  console.log(`✓ Topic "${topicSlug}" deleted successfully.`);
}

try {
  await deleteTopic();
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
}
