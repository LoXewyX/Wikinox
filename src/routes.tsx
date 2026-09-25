import { lazy } from "preact-iso";
import { Route, Router } from "preact-iso";

import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

export function Routes() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route
        path="/topics/mathematical-notation"
        component={lazy(
          () =>
            import("./pages/topics/mathematical-notation/MathematicalNotationPage"),
        )}
      />
      <Route
        path="/topics/numbers"
        component={lazy(() => import("./pages/topics/numbers/NumbersPage"))}
      />
      <Route
        path="/topics/functions"
        component={lazy(() => import("./pages/topics/functions/FunctionsPage"))}
      />
      <Route
        path="/topics/polynomials"
        component={lazy(
          () => import("./pages/topics/polynomials/PolynomialsPage"),
        )}
      />
      <Route
        path="/topics/polynomial-functions"
        component={lazy(
          () =>
            import("./pages/topics/polynomial-functions/PolynomialFunctionsPage"),
        )}
      />
      <Route
        path="/topics/equations"
        component={lazy(() => import("./pages/topics/equations/EquationsPage"))}
      />
      <Route
        path="/topics/quadratic-equations"
        component={lazy(
          () =>
            import("./pages/topics/quadratic-equations/QuadraticEquationsPage"),
        )}
      />
      <Route
        path="/topics/exponential-logarithmic-equations"
        component={lazy(
          () =>
            import("./pages/topics/exponential-logarithmic-equations/ExponentialLogarithmicEquationsPage"),
        )}
      />
      <Route
        path="/topics/logarithmic-equations-advanced"
        component={lazy(
          () =>
            import("./pages/topics/logarithmic-equations-advanced/LogarithmicEquationsAdvancedPage"),
        )}
      />
      <Route
        path="/topics/logarithms"
        component={lazy(
          () => import("./pages/topics/logarithms/LogarithmsPage"),
        )}
      />
      <Route
        path="/topics/rational-radical-equations"
        component={lazy(
          () =>
            import("./pages/topics/rational-radical-equations/RationalRadicalEquationsPage"),
        )}
      />
      <Route
        path="/topics/polynomial-factorization"
        component={lazy(
          () =>
            import("./pages/topics/polynomial-factorization/PolynomialFactorizationPage"),
        )}
      />
      <Route
        path="/topics/rational-inequalities"
        component={lazy(
          () =>
            import("./pages/topics/rational-inequalities/RationalInequalitiesPage"),
        )}
      />
      <Route
        path="/topics/linear-quadratic-inequalities"
        component={lazy(
          () =>
            import("./pages/topics/linear-quadratic-inequalities/LinearQuadraticInequalitiesPage"),
        )}
      />
      <Route
        path="/topics/algebraic-fractions"
        component={lazy(
          () =>
            import("./pages/topics/algebraic-fractions/AlgebraicFractionsPage"),
        )}
      />
      <Route
        path="/topics/remainder-theorem"
        component={lazy(
          () => import("./pages/topics/remainder-theorem/RemainderTheoremPage"),
        )}
      />
      <Route
        path="/topics/interval-intersection"
        component={lazy(
          () =>
            import("./pages/topics/interval-intersection/IntervalIntersectionPage"),
        )}
      />
      <Route
        path="/topics/trigonometric-equation-solutions"
        component={lazy(
          () =>
            import("./pages/topics/trigonometric-equation-solutions/TrigonometricEquationSolutionsPage"),
        )}
      />
      <Route
        path="/topics/right-triangle-solving"
        component={lazy(
          () =>
            import("./pages/topics/right-triangle-solving/RightTriangleSolvingPage"),
        )}
      />
      <Route
        path="/topics/systems-of-equations"
        component={lazy(
          () =>
            import("./pages/topics/systems-of-equations/SystemsOfEquationsPage"),
        )}
      />
      <Route
        path="/topics/two-linear-equations-two-unknowns"
        component={lazy(
          () =>
            import("./pages/topics/two-linear-equations-two-unknowns/TwoLinearEquationsTwoUnknownsPage"),
        )}
      />
      <Route
        path="/topics/underdetermined-system"
        component={lazy(
          () =>
            import("./pages/topics/underdetermined-system/UnderdeterminedSystemPage"),
        )}
      />
      <Route
        path="/topics/parameter-dependent-system"
        component={lazy(
          () =>
            import("./pages/topics/parameter-dependent-system/ParameterDependentSystemPage"),
        )}
      />
      <Route
        path="/topics/exponential-logarithmic-functions"
        component={lazy(
          () =>
            import("./pages/topics/exponential-logarithmic-functions/ExponentialLogarithmicFunctionsPage"),
        )}
      />
      <Route
        path="/topics/trigonometric-functions"
        component={lazy(
          () =>
            import("./pages/topics/trigonometric-functions/TrigonometricFunctionsPage"),
        )}
      />
      <Route
        path="/topics/matrices"
        component={lazy(() => import("./pages/topics/matrices/MatricesPage"))}
      />
      <Route
        path="/topics/determinants"
        component={lazy(
          () => import("./pages/topics/determinants/DeterminantsPage"),
        )}
      />
      <Route
        path="/topics/inverse-matrix"
        component={lazy(
          () => import("./pages/topics/inverse-matrix/InverseMatrixPage"),
        )}
      />
      <Route
        path="/topics/rouche-frobenius-theorem"
        component={lazy(
          () =>
            import("./pages/topics/rouche-frobenius-theorem/RoucheFrobeniusTheoremPage"),
        )}
      />
      <Route
        path="/topics/function-analysis"
        component={lazy(
          () => import("./pages/topics/function-analysis/FunctionAnalysisPage"),
        )}
      />
      <Route
        path="/topics/rational-function-analysis"
        component={lazy(
          () =>
            import("./pages/topics/rational-function-analysis/RationalFunctionAnalysisPage"),
        )}
      />
      <Route
        path="/topics/function-continuity"
        component={lazy(
          () =>
            import("./pages/topics/function-continuity/FunctionContinuityPage"),
        )}
      />
      <Route
        path="/topics/continuity-rational-functions"
        component={lazy(
          () =>
            import("./pages/topics/continuity-rational-functions/ContinuityRationalFunctionsPage"),
        )}
      />
      <Route
        path="/topics/continuity-piecewise-functions"
        component={lazy(
          () =>
            import("./pages/topics/continuity-piecewise-functions/ContinuityPiecewiseFunctionsPage"),
        )}
      />
      <Route
        path="/topics/irrational-function-limits"
        component={lazy(
          () =>
            import("./pages/topics/irrational-function-limits/IrrationalFunctionLimitsPage"),
        )}
      />
      <Route
        path="/topics/function-differentiation"
        component={lazy(
          () =>
            import("./pages/topics/function-differentiation/FunctionDifferentiationPage"),
        )}
      />
      <Route
        path="/topics/derivative-examples"
        component={lazy(
          () =>
            import("./pages/topics/derivative-examples/DerivativeExamplesPage"),
        )}
      />
      <Route
        path="/topics/tangent-lines"
        component={lazy(
          () => import("./pages/topics/tangent-lines/TangentLinesPage"),
        )}
      />
      <Route
        path="/topics/integration"
        component={lazy(
          () => import("./pages/topics/integration/IntegrationPage"),
        )}
      />
      <Route
        path="/topics/integration-by-substitution"
        component={lazy(
          () =>
            import("./pages/topics/integration-by-substitution/IntegrationBySubstitutionPage"),
        )}
      />
      <Route
        path="/topics/integration-by-parts"
        component={lazy(
          () =>
            import("./pages/topics/integration-by-parts/IntegrationByPartsPage"),
        )}
      />
      <Route
        path="/topics/area-using-integrals"
        component={lazy(
          () =>
            import("./pages/topics/area-using-integrals/AreaUsingIntegralsPage"),
        )}
      />
      <Route
        path="/topics/engineering-mathematics-introduction"
        component={lazy(
          () =>
            import("./pages/topics/engineering-mathematics-introduction/EngineeringMathematicsIntroductionPage"),
        )}
      />
      <Route default component={NotFoundPage} />
    </Router>
  );
}
