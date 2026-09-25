export const categories = [
  "foundations",
  "algebra",
  "linear-algebra",
  "functions",
  "calculus",
  "engineering",
  "geometry",
] as const;

export type Category = (typeof categories)[number];

export const difficulties = ["basic", "intermediate", "advanced"] as const;

export type Difficulty = (typeof difficulties)[number];

export interface Topic {
  id: string;
  category: Category;
  difficulty: Difficulty;
}

export const topics = [
  // Foundations
  {
    id: "mathematical-notation",
    category: "foundations",
    difficulty: "basic",
  },
  {
    id: "numbers",
    category: "foundations",
    difficulty: "basic",
  },
  {
    id: "polynomials",
    category: "foundations",
    difficulty: "basic",
  },
  {
    id: "functions",
    category: "foundations",
    difficulty: "basic",
  },
  {
    id: "logarithms",
    category: "foundations",
    difficulty: "basic",
  },
  {
    id: "polynomial-functions",
    category: "foundations",
    difficulty: "basic",
  },
  {
    id: "equations",
    category: "foundations",
    difficulty: "basic",
  },
  {
    id: "quadratic-equations",
    category: "foundations",
    difficulty: "basic",
  },
  {
    id: "exponential-logarithmic-equations",
    category: "algebra",
    difficulty: "intermediate",
  },
  {
    id: "logarithmic-equations-advanced",
    category: "algebra",
    difficulty: "advanced",
  },
  {
    id: "rational-radical-equations",
    category: "algebra",
    difficulty: "intermediate",
  },
  {
    id: "polynomial-factorization",
    category: "algebra",
    difficulty: "intermediate",
  },
  {
    id: "rational-inequalities",
    category: "algebra",
    difficulty: "intermediate",
  },
  {
    id: "linear-quadratic-inequalities",
    category: "algebra",
    difficulty: "basic",
  },
  {
    id: "algebraic-fractions",
    category: "algebra",
    difficulty: "intermediate",
  },
  {
    id: "remainder-theorem",
    category: "algebra",
    difficulty: "intermediate",
  },
  {
    id: "interval-intersection",
    category: "algebra",
    difficulty: "basic",
  },
  {
    id: "trigonometric-equation-solutions",
    category: "algebra",
    difficulty: "intermediate",
  },
  {
    id: "right-triangle-solving",
    category: "algebra",
    difficulty: "basic",
  },
  {
    id: "systems-of-equations",
    category: "algebra",
    difficulty: "intermediate",
  },
  {
    id: "two-linear-equations-two-unknowns",
    category: "algebra",
    difficulty: "basic",
  },
  {
    id: "underdetermined-system",
    category: "algebra",
    difficulty: "intermediate",
  },
  {
    id: "parameter-dependent-system",
    category: "algebra",
    difficulty: "advanced",
  },
  {
    id: "exponential-logarithmic-functions",
    category: "algebra",
    difficulty: "intermediate",
  },
  {
    id: "trigonometric-functions",
    category: "algebra",
    difficulty: "intermediate",
  },
  {
    id: "matrices",
    category: "linear-algebra",
    difficulty: "intermediate",
  },
  {
    id: "determinants",
    category: "linear-algebra",
    difficulty: "intermediate",
  },
  {
    id: "inverse-matrix",
    category: "linear-algebra",
    difficulty: "intermediate",
  },
  {
    id: "rouche-frobenius-theorem",
    category: "linear-algebra",
    difficulty: "advanced",
  },
  {
    id: "function-analysis",
    category: "functions",
    difficulty: "intermediate",
  },
  {
    id: "rational-function-analysis",
    category: "functions",
    difficulty: "advanced",
  },
  {
    id: "function-continuity",
    category: "functions",
    difficulty: "intermediate",
  },
  {
    id: "continuity-rational-functions",
    category: "functions",
    difficulty: "intermediate",
  },
  {
    id: "continuity-piecewise-functions",
    category: "functions",
    difficulty: "intermediate",
  },
  {
    id: "irrational-function-limits",
    category: "functions",
    difficulty: "intermediate",
  },
  {
    id: "function-differentiation",
    category: "calculus",
    difficulty: "intermediate",
  },
  {
    id: "derivative-examples",
    category: "calculus",
    difficulty: "intermediate",
  },
  {
    id: "tangent-lines",
    category: "calculus",
    difficulty: "intermediate",
  },
  {
    id: "integration",
    category: "calculus",
    difficulty: "intermediate",
  },
  {
    id: "integration-by-substitution",
    category: "calculus",
    difficulty: "intermediate",
  },
  {
    id: "integration-by-parts",
    category: "calculus",
    difficulty: "advanced",
  },
  {
    id: "area-using-integrals",
    category: "calculus",
    difficulty: "intermediate",
  },
  {
    id: "engineering-mathematics-introduction",
    category: "engineering",
    difficulty: "basic",
  },
] as const satisfies readonly Topic[];

export type TopicId = (typeof topics)[number]["id"];
