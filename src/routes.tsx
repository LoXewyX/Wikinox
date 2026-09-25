import { lazy } from "preact-iso";
import { Route, Router } from "preact-iso";

import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

export function Routes() {
  return (
    <Router>
      <Route path="/Wikinox/" component={HomePage} />
      <Route
        path="/Wikinox/topics/mathematical-notation"
        component={lazy(
          () =>
            import("./pages/topics/mathematical-notation/MathematicalNotationPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/numbers"
        component={lazy(() => import("./pages/topics/numbers/NumbersPage"))}
      />
      <Route
        path="/Wikinox/topics/functions"
        component={lazy(() => import("./pages/topics/functions/FunctionsPage"))}
      />
      <Route
        path="/Wikinox/topics/polynomials"
        component={lazy(
          () => import("./pages/topics/polynomials/PolynomialsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/polynomial-functions"
        component={lazy(
          () =>
            import("./pages/topics/polynomial-functions/PolynomialFunctionsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/equations"
        component={lazy(() => import("./pages/topics/equations/EquationsPage"))}
      />
      <Route
        path="/Wikinox/topics/quadratic-equations"
        component={lazy(
          () =>
            import("./pages/topics/quadratic-equations/QuadraticEquationsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/exponential-logarithmic-equations"
        component={lazy(
          () =>
            import("./pages/topics/exponential-logarithmic-equations/ExponentialLogarithmicEquationsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/logarithmic-equations-advanced"
        component={lazy(
          () =>
            import("./pages/topics/logarithmic-equations-advanced/LogarithmicEquationsAdvancedPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/logarithms"
        component={lazy(
          () => import("./pages/topics/logarithms/LogarithmsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/rational-radical-equations"
        component={lazy(
          () =>
            import("./pages/topics/rational-radical-equations/RationalRadicalEquationsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/polynomial-factorization"
        component={lazy(
          () =>
            import("./pages/topics/polynomial-factorization/PolynomialFactorizationPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/rational-inequalities"
        component={lazy(
          () =>
            import("./pages/topics/rational-inequalities/RationalInequalitiesPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/linear-quadratic-inequalities"
        component={lazy(
          () =>
            import("./pages/topics/linear-quadratic-inequalities/LinearQuadraticInequalitiesPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/algebraic-fractions"
        component={lazy(
          () =>
            import("./pages/topics/algebraic-fractions/AlgebraicFractionsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/remainder-theorem"
        component={lazy(
          () => import("./pages/topics/remainder-theorem/RemainderTheoremPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/interval-intersection"
        component={lazy(
          () =>
            import("./pages/topics/interval-intersection/IntervalIntersectionPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/trigonometric-equation-solutions"
        component={lazy(
          () =>
            import("./pages/topics/trigonometric-equation-solutions/TrigonometricEquationSolutionsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/right-triangle-solving"
        component={lazy(
          () =>
            import("./pages/topics/right-triangle-solving/RightTriangleSolvingPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/systems-of-equations"
        component={lazy(
          () =>
            import("./pages/topics/systems-of-equations/SystemsOfEquationsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/two-linear-equations-two-unknowns"
        component={lazy(
          () =>
            import("./pages/topics/two-linear-equations-two-unknowns/TwoLinearEquationsTwoUnknownsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/underdetermined-system"
        component={lazy(
          () =>
            import("./pages/topics/underdetermined-system/UnderdeterminedSystemPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/parameter-dependent-system"
        component={lazy(
          () =>
            import("./pages/topics/parameter-dependent-system/ParameterDependentSystemPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/exponential-logarithmic-functions"
        component={lazy(
          () =>
            import("./pages/topics/exponential-logarithmic-functions/ExponentialLogarithmicFunctionsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/trigonometric-functions"
        component={lazy(
          () =>
            import("./pages/topics/trigonometric-functions/TrigonometricFunctionsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/matrices"
        component={lazy(() => import("./pages/topics/matrices/MatricesPage"))}
      />
      <Route
        path="/Wikinox/topics/determinants"
        component={lazy(
          () => import("./pages/topics/determinants/DeterminantsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/inverse-matrix"
        component={lazy(
          () => import("./pages/topics/inverse-matrix/InverseMatrixPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/rouche-frobenius-theorem"
        component={lazy(
          () =>
            import("./pages/topics/rouche-frobenius-theorem/RoucheFrobeniusTheoremPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/function-analysis"
        component={lazy(
          () => import("./pages/topics/function-analysis/FunctionAnalysisPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/rational-function-analysis"
        component={lazy(
          () =>
            import("./pages/topics/rational-function-analysis/RationalFunctionAnalysisPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/function-continuity"
        component={lazy(
          () =>
            import("./pages/topics/function-continuity/FunctionContinuityPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/continuity-rational-functions"
        component={lazy(
          () =>
            import("./pages/topics/continuity-rational-functions/ContinuityRationalFunctionsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/continuity-piecewise-functions"
        component={lazy(
          () =>
            import("./pages/topics/continuity-piecewise-functions/ContinuityPiecewiseFunctionsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/irrational-function-limits"
        component={lazy(
          () =>
            import("./pages/topics/irrational-function-limits/IrrationalFunctionLimitsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/function-differentiation"
        component={lazy(
          () =>
            import("./pages/topics/function-differentiation/FunctionDifferentiationPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/derivative-examples"
        component={lazy(
          () =>
            import("./pages/topics/derivative-examples/DerivativeExamplesPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/tangent-lines"
        component={lazy(
          () => import("./pages/topics/tangent-lines/TangentLinesPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/integration"
        component={lazy(
          () => import("./pages/topics/integration/IntegrationPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/integration-by-substitution"
        component={lazy(
          () =>
            import("./pages/topics/integration-by-substitution/IntegrationBySubstitutionPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/integration-by-parts"
        component={lazy(
          () =>
            import("./pages/topics/integration-by-parts/IntegrationByPartsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/area-using-integrals"
        component={lazy(
          () =>
            import("./pages/topics/area-using-integrals/AreaUsingIntegralsPage"),
        )}
      />
      <Route
        path="/Wikinox/topics/engineering-mathematics-introduction"
        component={lazy(
          () =>
            import("./pages/topics/engineering-mathematics-introduction/EngineeringMathematicsIntroductionPage"),
        )}
      />
      <Route default component={NotFoundPage} />
    </Router>
  );
}
