# Function Analysis

The **analysis of a function** consists of studying its main properties in order to understand and describe its behavior.

The most important aspects are the domain, range, zeros, sign, continuity, limits, monotonicity, extrema, concavity, asymptotes, and symmetry.

## Domain

The **domain** of a function $f(x)$ is the set of all values of $x$ for which the function is defined.

$$
\boxed{D_f=\{x\in\mathbb{R}:f(x)\text{ is defined}\}}
$$

When determining the domain, check for:

- Division by zero.
- Even roots of negative numbers.
- Logarithms of non-positive numbers.
- Other restrictions imposed by the expression.

For example:

$$
f(x)=\frac{1}{x-2}
$$

The denominator cannot be zero:

$$
x-2\neq0
$$

Therefore:

$$
\boxed{D_f=\mathbb{R}\setminus\{2\}}
$$

## Range

The **range** of a function is the set of values that $f(x)$ can take.

$$
\boxed{
R_f=\{f(x):x\in D_f\}
}
$$

The range can often be determined from the graph, algebraic manipulation, or the extrema of the function.

For example:

$$
f(x)=x^2
$$

Since $x^2\geq0$:

$$
\boxed{R_f=[0,\infty)}
$$

## Zeros and $x$-intercepts

The **zeros** of a function are the values of $x$ for which:

$$
f(x)=0
$$

They correspond to the points where the graph intersects the $x$-axis.

$$
\boxed{f(x)=0}
$$

For example:

$$
f(x)=x^2-4
$$

Then:

$$
x^2-4=0
$$

$$
(x-2)(x+2)=0
$$

Therefore:

$$
\boxed{x=-2,\quad x=2}
$$

The corresponding intercepts are:

$$
(-2,0),\qquad(2,0)
$$

## $y$-intercept

The $y$-intercept is obtained by setting $x=0$:

$$
\boxed{y=f(0)}
$$

For example:

$$
f(x)=x^2+3x+2
$$

$$
f(0)=2
$$

Therefore:

$$
\boxed{(0,2)}
$$

## Sign of a Function

Studying the **sign** determines where the function is positive, negative, or zero.

$$
f(x)>0
$$

means that the graph lies above the $x$-axis.

$$
f(x)<0
$$

means that the graph lies below the $x$-axis.

The zeros divide the domain into intervals where the sign can be studied.

## Continuity

A function is continuous at $x=a$ when:

$$
\boxed{
\lim_{x\to a}f(x)=f(a)
}
$$

A function is continuous on an interval if it is continuous at every point of that interval.

Typical causes of discontinuity include:

- Undefined points.
- Holes.
- Jump discontinuities.
- Vertical asymptotes.

## Limits

A limit describes the value that $f(x)$ approaches as $x$ approaches a particular value.

$$
\boxed{
\lim_{x\to a}f(x)=L
}
$$

means that $f(x)$ approaches $L$ as $x$ approaches $a$.

One-sided limits are:

$$
\lim_{x\to a^-}f(x)
$$

and

$$
\lim_{x\to a^+}f(x)
$$

For the two-sided limit to exist:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
}
$$

Limits can also be studied at infinity:

$$
\lim_{x\to\infty}f(x)
$$

and

$$
\lim_{x\to-\infty}f(x)
$$

## Monotonicity

Monotonicity describes whether a function increases or decreases.

A function is **increasing** on an interval if:

$$
x_1<x_2
\Rightarrow
f(x_1)<f(x_2)
$$

It is **decreasing** if:

$$
x_1<x_2
\Rightarrow
f(x_1)>f(x_2)
$$

When the function is differentiable, the derivative provides a useful criterion:

$$
\boxed{
f'(x)>0\Rightarrow f\text{ is increasing}
}
$$

$$
\boxed{
f'(x)<0\Rightarrow f\text{ is decreasing}
}
$$

## Critical Points

A **critical point** occurs at a point in the domain where:

$$
f'(x)=0
$$

or where $f'(x)$ does not exist.

Critical points are important because they may correspond to local maxima or minima.

## Local Extrema

A **local maximum** occurs when the function reaches a value greater than nearby values.

A **local minimum** occurs when it reaches a value smaller than nearby values.

A common way to identify extrema is to study changes in the sign of $f'(x)$.

If:

$$
f'(x):+\to-
$$

the function changes from increasing to decreasing:

$$
\boxed{\text{local maximum}}
$$

If:

$$
f'(x):-\to+
$$

the function changes from decreasing to increasing:

$$
\boxed{\text{local minimum}}
$$

## Concavity

Concavity describes how the graph bends.

If:

$$
f''(x)>0
$$

the function is concave upward.

$$
\boxed{f''(x)>0\Rightarrow\text{concave upward}}
$$

If:

$$
f''(x)<0
$$

the function is concave downward.

$$
\boxed{f''(x)<0\Rightarrow\text{concave downward}}
$$

## Inflection Points

An **inflection point** is a point where the concavity changes.

A possible inflection point occurs when:

$$
f''(x)=0
$$

but this condition alone is not sufficient. The concavity must actually change.

Therefore:

$$
\boxed{
\text{Inflection point}
\iff
\text{the concavity changes}
}
$$

## Asymptotes

An asymptote is a line that the graph approaches.

### Vertical asymptotes

A vertical asymptote occurs at $x=a$ when:

$$
\boxed{
\lim_{x\to a}f(x)=\pm\infty
}
$$

The corresponding asymptote is:

$$
\boxed{x=a}
$$

### Horizontal asymptotes

A horizontal asymptote describes the behavior of the function as $x$ tends to infinity.

If:

$$
\lim_{x\to\infty}f(x)=L
$$

then:

$$
\boxed{y=L}
$$

is a horizontal asymptote.

The same can be studied for $x\to-\infty$.

### Oblique asymptotes

An oblique asymptote has the form:

$$
\boxed{y=mx+n}
$$

and describes linear behavior at infinity.

## Symmetry

Symmetry can simplify the analysis of a function.

### Even functions

A function is even if:

$$
f(-x)=f(x)
$$

Its graph is symmetric about the $y$-axis.

$$
\boxed{f(-x)=f(x)\Rightarrow\text{even function}}
$$

### Odd functions

A function is odd if:

$$
f(-x)=-f(x)
$$

Its graph is symmetric about the origin.

$$
\boxed{f(-x)=-f(x)\Rightarrow\text{odd function}}
$$

## Behavior at Infinity

The limits:

$$
\lim_{x\to\infty}f(x)
$$

and

$$
\lim_{x\to-\infty}f(x)
$$

describe the behavior of the function far to the right and left.

For example:

$$
f(x)=\frac{1}{x}
$$

satisfies:

$$
\boxed{
\lim_{x\to\infty}\frac1x
=
\lim_{x\to-\infty}\frac1x
=0
}
$$

Therefore, $y=0$ is a horizontal asymptote.

## Complete Example

Consider:

$$
f(x)=x^3-3x
$$

### Domain

Since this is a polynomial:

$$
\boxed{D_f=\mathbb{R}}
$$

### Zeros

$$
x^3-3x=0
$$

$$
x(x^2-3)=0
$$

Therefore:

$$
\boxed{x=-\sqrt3,\quad x=0,\quad x=\sqrt3}
$$

### First derivative

$$
f'(x)=3x^2-3
$$

Factorizing:

$$
f'(x)=3(x-1)(x+1)
$$

Critical points:

$$
\boxed{x=-1,\quad x=1}
$$

### Monotonicity

The sign of $f'(x)$ gives:

- Increasing on $(-\infty,-1)$.
- Decreasing on $(-1,1)$.
- Increasing on $(1,\infty)$.

Therefore:

$$
\boxed{x=-1\text{ is a local maximum}}
$$

and

$$
\boxed{x=1\text{ is a local minimum}}
$$

### Second derivative

$$
f''(x)=6x
$$

Therefore:

- $f''(x)<0$ when $x<0$.
- $f''(x)>0$ when $x>0$.

The concavity changes at $x=0$:

$$
\boxed{(0,0)\text{ is an inflection point}}
$$

### Function graph

:::function-graph{expression="x^3-3*x" restriction="-3<=x<=3" showWorkings=true}
:::

## Recommended Order for Function Analysis

A systematic analysis can follow this order:

1. **Domain**
2. **Symmetry**
3. **Zeros and intercepts**
4. **Sign**
5. **Continuity**
6. **Limits**
7. **Asymptotes**
8. **First derivative**
9. **Critical points**
10. **Monotonicity**
11. **Local extrema**
12. **Second derivative**
13. **Concavity**
14. **Inflection points**
15. **Behavior at infinity**
16. **Graph**

The exact order can vary depending on the function.

## Summary

The main goal of function analysis is to determine how a function behaves over its entire domain.

The most important properties are:

$$
\boxed{
\text{domain, range, zeros, sign, continuity, limits, monotonicity, extrema, concavity, asymptotes and symmetry}
}
$$
