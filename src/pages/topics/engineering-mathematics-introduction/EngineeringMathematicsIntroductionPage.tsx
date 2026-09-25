import { lazy } from "preact/compat";

import TopicPage from "@/components/topics/TopicPage";
import { useI18n } from "@/providers/I18nProvider";

import es from "./content/es.md?raw";
import ca from "./content/ca.md?raw";
import en from "./content/en.md?raw";

export default function EngineeringMathematicsIntroductionPage() {
  const { locale } = useI18n();

  return (
    <TopicPage
      id="engineering-mathematics-introduction"
      content={{ es, ca, en }[locale]}
      directiveComponents={{
        "function-graph": lazy(() => import("math/FunctionGraph")),
      }}
    />
  );
}
