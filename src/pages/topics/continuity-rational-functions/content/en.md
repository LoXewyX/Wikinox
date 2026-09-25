# Continuity of Rational Functions

A **rational function** is a function that can be written as the quotient of two polynomials:

$$
f(x)=\frac{p(x)}{q(x)}
$$

where $p(x)$ and $q(x)$ are polynomials and $q(x)\neq0$.

The continuity of a rational function is closely related to the values that make its denominator equal to zero.

## Domain

A rational function is defined only when its denominator is non-zero.

Therefore:

$$
\boxed{
D_f=\{x\in\mathbb{R}:q(x)\neq0\}
}
$$

For example:

$$
f(x)=\frac{x+1}{x-2}
$$

The denominator is zero when:

$$
x-2=0
$$

so:

$$
\boxed{D_f=\mathbb{R}\setminus\{2\}}
$$

## Continuity

Since polynomials are continuous everywhere, the quotient of two polynomials is continuous wherever the denominator is not zero.

Therefore:

$$
\boxed{
f(x)=\frac{p(x)}{q(x)}
\text{ is continuous wherever }q(x)\neq0
}
$$

A rational function can only be discontinuous at values where:

$$
q(x)=0
$$

These points must be analyzed separately.

## Example

Consider:

$$
f(x)=\frac{x^2+1}{x-3}
$$

The denominator is zero at:

$$
x=3
$$

Therefore:

$$
\boxed{D_f=\mathbb{R}\setminus\{3\}}
$$

The function is continuous on:

$$
\boxed{(-\infty,3)\cup(3,\infty)}
$$

It is not defined, and therefore not continuous, at $x=3$.

## Removable Discontinuities

A discontinuity is **removable** when a common factor can be cancelled algebraically.

Consider:

$$
f(x)=\frac{x^2-1}{x-1}
$$

Factor the numerator:

$$
f(x)=\frac{(x-1)(x+1)}{x-1}
$$

For $x\neq1$:

$$
f(x)=x+1
$$

However, the original function is still undefined at $x=1$.

The limit is:

$$
\lim_{x\to1}f(x)
=
\lim_{x\to1}(x+1)
=
2
$$

Therefore:

$$
\boxed{
\lim_{x\to1}f(x)=2
}
$$

but:

$$
f(1)\text{ is undefined}
$$

There is a removable discontinuity at $x=1$.

Geometrically, the graph has a hole at:

$$
\boxed{(1,2)}
$$

## Non-Removable Discontinuities

If the denominator becomes zero and the factor cannot be completely cancelled, the discontinuity is generally non-removable.

For example:

$$
f(x)=\frac{1}{x-2}
$$

At $x=2$:

$$
\lim_{x\to2^-}f(x)=-\infty
$$

and:

$$
\lim_{x\to2^+}f(x)=+\infty
$$

Therefore:

$$
\boxed{x=2}
$$

is a vertical asymptote and the discontinuity is infinite.

## Factorization and Continuity

Factoring the numerator and denominator is particularly useful when studying continuity.

Consider:

$$
f(x)=\frac{(x-2)(x+1)}{(x-2)(x-3)}
$$

For $x\neq2$:

$$
f(x)=\frac{x+1}{x-3}
$$

The factor $(x-2)$ can be cancelled, so $x=2$ produces a removable discontinuity.

However, $x=3$ remains in the denominator.

Therefore:

$$
\boxed{x=2\text{ is a removable discontinuity}}
$$

and:

$$
\boxed{x=3\text{ is an infinite discontinuity}}
$$

The domain of the original function is:

$$
\boxed{D_f=\mathbb{R}\setminus\{2,3\}}
$$

## Limits at Discontinuities

For every value $a$ where:

$$
q(a)=0
$$

we should study:

$$
\lim_{x\to a^-}f(x)
$$

and:

$$
\lim_{x\to a^+}f(x)
$$

The result allows us to classify the discontinuity.

### Removable discontinuity

If:

$$
\boxed{
\lim_{x\to a}f(x)=L
}
$$

exists and is finite, but $f(a)$ is undefined or $f(a)\neq L$, the discontinuity is removable.

### Infinite discontinuity

If:

$$
\boxed{
\lim_{x\to a}f(x)=\pm\infty
}
$$

there is a vertical asymptote.

## Continuity Intervals

To determine the intervals where a rational function is continuous:

1. Find the zeros of the denominator.
2. Remove those values from the domain.
3. Use the remaining values to divide the real line into intervals.

For example:

$$
f(x)=\frac{x+2}{(x-1)(x+3)}
$$

The denominator is zero at:

$$
x=1,\qquad x=-3
$$

Therefore:

$$
\boxed{
D_f=\mathbb{R}\setminus\{-3,1\}
}
$$

and the function is continuous on:

$$
\boxed{
(-\infty,-3)\cup(-3,1)\cup(1,\infty)
}
$$

## Connection with Vertical Asymptotes

A zero of the denominator does not automatically mean that there is a vertical asymptote.

For example:

$$
f(x)=\frac{x^2-4}{x-2}
$$

Factor:

$$
f(x)=\frac{(x-2)(x+2)}{x-2}
$$

so:

$$
f(x)=x+2
\qquad x\neq2
$$

There is a hole at $x=2$, not a vertical asymptote.

In contrast:

$$
f(x)=\frac{x+1}{x-2}
$$

has no factor that cancels $x-2$, so:

$$
\boxed{x=2\text{ is a vertical asymptote}}
$$

## Complete Example

Consider:

$$
f(x)=\frac{x^2-1}{x^2-3x+2}
$$

Factor:

$$
f(x)=\frac{(x-1)(x+1)}{(x-1)(x-2)}
$$

For $x\neq1$:

$$
f(x)=\frac{x+1}{x-2}
$$

### Domain

The original denominator is zero at:

$$
x=1,\qquad x=2
$$

Therefore:

$$
\boxed{
D_f=\mathbb{R}\setminus\{1,2\}
}
$$

### Discontinuity at $x=1$

The common factor cancels, so the discontinuity is removable.

The limit is:

$$
\lim_{x\to1}f(x)
=
\frac{1+1}{1-2}
=-2
$$

Therefore:

$$
\boxed{\text{Hole at }(1,-2)}
$$

### Discontinuity at $x=2$

The factor $x-2$ remains in the denominator.

Therefore:

$$
\boxed{x=2\text{ is a vertical asymptote}}
$$

### Continuity

The function is continuous on:

$$
\boxed{
(-\infty,1)\cup(1,2)\cup(2,\infty)
}
$$

## Procedure

To study the continuity of a rational function:

1. Write the function as $\frac{p(x)}{q(x)}$.
2. Solve $q(x)=0$.
3. Determine the domain.
4. Factor the numerator and denominator.
5. Cancel common factors when possible.
6. Study the limit at every excluded value.
7. Distinguish removable discontinuities from vertical asymptotes.
8. State the intervals of continuity.

The key principle is:

$$
\boxed{
\text{A rational function is continuous wherever its denominator is non-zero}
}
$$

:::function-graph{expression="(x^2-1)/(x^2-3*x+2)" restriction="-5<=x<=5"}
:::
