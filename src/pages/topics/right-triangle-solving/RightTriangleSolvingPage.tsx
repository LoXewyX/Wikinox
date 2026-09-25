import { lazy } from "preact/compat";

import TopicPage from "@/components/topics/TopicPage";
import { useI18n } from "@/providers/I18nProvider";

import es from "./content/es.md?raw";
import ca from "./content/ca.md?raw";
import en from "./content/en.md?raw";

export default function RightTriangleSolving() {
  const { locale } = useI18n();

  return (
    <TopicPage
      id="right-triangle-solving"
      content={{ es, ca, en }[locale]}
      directiveComponents={{
        "right-triangle-diagram": lazy(
          () => import("math/RightTriangleDiagram"),
        ),
      }}
    />
  );
}
