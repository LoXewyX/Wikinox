import ReactMarkdown, { type Components } from "react-markdown";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { ComponentType } from "preact";
import { Suspense } from "preact/compat";
import GithubSlugger from "github-slugger";

import { normalizeHeading } from "@/lib/markdown";

export type MarkdownDirectiveComponent = ComponentType<any>;

export type MarkdownDirectiveComponents = Record<
  string,
  MarkdownDirectiveComponent
>;

interface MarkdownNode {
  type?: string;
  name?: string;
  value?: string;
  attributes?: Record<string, unknown>;
  children?: MarkdownNode[];
  data?: {
    hName?: string;
    hProperties?: Record<string, string>;
  };
}

function remarkMathematics() {
  return (tree: MarkdownNode) => {
    walkMarkdownTree(tree);
  };
}

function remarkHeadingIds() {
  return (tree: MarkdownNode) => {
    const slugger = new GithubSlugger();

    walkHeadingIds(tree, slugger);
  };
}

function walkHeadingIds(node: MarkdownNode, slugger: GithubSlugger) {
  if (node.type === "heading") {
    const title = getHeadingText(node);
    const normalizedTitle = normalizeHeading(title);

    node.data ??= {};
    node.data.hProperties ??= {};
    node.data.hProperties.id = slugger.slug(normalizedTitle);
  }

  if (!node.children) return;

  for (const child of node.children) {
    walkHeadingIds(child, slugger);
  }
}

function getHeadingText(node: MarkdownNode): string {
  if (node.type === "text" || node.type === "inlineMath") {
    return node.value ?? "";
  }

  if (!node.children) return "";

  return node.children.map((child) => getHeadingText(child)).join("");
}

function walkMarkdownTree(node: MarkdownNode) {
  if (node.type === "containerDirective") {
    const attributes = node.attributes ?? {};

    const hProperties: Record<string, string> = {
      "data-math": node.name ?? "",
    };

    for (const [name, value] of Object.entries(attributes)) {
      hProperties[`data-${name}`] = value == null ? "" : String(value);
    }

    node.data ??= {};
    node.data.hName = "div";
    node.data.hProperties = hProperties;
  }

  if (!node.children) return;

  for (const child of node.children) {
    walkMarkdownTree(child);
  }
}

function MathLoading() {
  return (
    <div className="my-8 flex min-h-32 items-center justify-center rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <span className="text-sm text-neutral-400 dark:text-neutral-500">
        Cargando visualización…
      </span>
    </div>
  );
}

function getDirectiveProps(properties: Record<string, unknown>) {
  const props: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(properties)) {
    if (!key.startsWith("data-") || key === "data-math") {
      continue;
    }

    const propName = key
      .slice(5)
      .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

    props[propName] = value;
  }

  return props;
}

interface MarkdownRendererProps {
  content: string;
  directiveComponents?: MarkdownDirectiveComponents;
}

export default function MarkdownRenderer({
  content,
  directiveComponents = {},
}: MarkdownRendererProps) {
  const markdownComponents: Components = {
    h1: ({ children, ...props }) => (
      <h1
        {...props}
        className="mt-8 text-3xl font-bold tracking-tight text-neutral-900 first:mt-0 dark:text-neutral-100"
      >
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => (
      <h2
        {...props}
        className="mt-10 scroll-mt-24 border-b border-neutral-200 pb-2 text-2xl font-semibold text-neutral-900 dark:border-neutral-800 dark:text-neutral-100"
      >
        {children}
      </h2>
    ),

    h3: ({ children, ...props }) => (
      <h3
        {...props}
        className="mt-7 scroll-mt-24 text-xl font-semibold text-neutral-900 dark:text-neutral-100"
      >
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="mt-4 leading-7 text-neutral-700 dark:text-neutral-300">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-700 dark:text-neutral-300">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-neutral-700 dark:text-neutral-300">
        {children}
      </ol>
    ),

    li: ({ children }) => <li className="leading-7">{children}</li>,

    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-neutral-300 pl-4 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
        {children}
      </blockquote>
    ),

    code: ({ children, className }) => {
      const classNameString = typeof className === "string" ? className : "";

      if (classNameString.includes("language-")) {
        return (
          <code
            className={[
              "block overflow-x-auto rounded-lg bg-neutral-950 p-4",
              "text-sm leading-6 text-neutral-100",
              classNameString,
            ].join(" ")}
          >
            {children}
          </code>
        );
      }

      return (
        <code
          className={[
            "rounded bg-neutral-100 px-1.5 py-0.5",
            "font-mono text-sm text-neutral-800",
            "dark:bg-neutral-800 dark:text-neutral-200",
            classNameString,
          ].join(" ")}
        >
          {children}
        </code>
      );
    },

    pre: ({ children }) => (
      <pre className="mt-6 overflow-x-auto rounded-lg">{children}</pre>
    ),

    table: ({ children }) => (
      <div className="my-6 w-full overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
        <table className="w-full min-w-150 border-collapse text-left text-sm">
          {children}
        </table>
      </div>
    ),

    thead: ({ children }) => (
      <thead className="bg-neutral-100 dark:bg-neutral-900">{children}</thead>
    ),

    tbody: ({ children }) => (
      <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {children}
      </tbody>
    ),

    tr: ({ children }) => <tr className="align-top">{children}</tr>,

    th: ({ children }) => (
      <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900 dark:border-neutral-800 dark:text-neutral-100">
        {children}
      </th>
    ),

    td: ({ children }) => (
      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">
        {children}
      </td>
    ),

    a: ({ href, children }) => (
      <a
        href={href}
        className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {children}
      </a>
    ),

    hr: () => (
      <hr className="my-10 border-neutral-200 dark:border-neutral-800" />
    ),

    div: ({ children, node, ...props }) => {
      const element = node as {
        properties?: Record<string, unknown>;
      };

      const properties = element.properties ?? {};

      const math =
        typeof properties["data-math"] === "string"
          ? properties["data-math"]
          : undefined;

      const Component = math ? directiveComponents[math] : undefined;

      if (!Component) {
        return <div {...props}>{children}</div>;
      }

      const componentProps = getDirectiveProps(properties);

      return (
        <Suspense fallback={<MathLoading />}>
          <Component {...componentProps}>{children}</Component>
        </Suspense>
      );
    },
  };

  return (
    <div className="max-w-none text-neutral-900 dark:text-neutral-100">
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkMath,
          remarkDirective,
          remarkMathematics,
          remarkHeadingIds,
        ]}
        rehypePlugins={[rehypeKatex]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
