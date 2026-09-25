# Analysis of Rational Functions

A **rational function** is a function that can be written as the quotient of two polynomials:

$$
f(x)=\frac{P(x)}{Q(x)}
$$

where $P(x)$ and $Q(x)$ are polynomials and $Q(x)\neq0$.

For example:

$$
f(x)=\frac{x+1}{x-2}
$$

Rational functions are especially useful because they allow us to study **domain, discontinuities, asymptotes, limits, and behavior at infinity**.

## 1. Domain

The denominator can never be zero. Therefore, to determine the domain, we solve:

$$
Q(x)=0
$$

For example:

$$
f(x)=\frac{x+1}{x-2}
$$

The denominator is zero when:

$$
x-2=0
$$

so $x=2$ does not belong to the domain.

Therefore:

$$
D_f=\mathbb{R}\setminus\{2\}
$$

:::function-graph{expression="(x+1)/(x-2)" restriction="-8<=x<=8"}
:::

## 2. Zeros of the Function

The zeros of a rational function are obtained by setting the numerator equal to zero:

$$
P(x)=0
$$

provided that the resulting value does not also make the denominator zero.

For example:

$$
f(x)=\frac{x-3}{x+2}
$$

The numerator is zero when:

$$
x=3
$$

Therefore, the function has a zero at $x=3$ and crosses the $x$-axis at:

$$
(3,0)
$$

## 3. $y$-Intercept

To find the $y$-intercept, calculate $f(0)$, provided that $0$ belongs to the domain.

For example:

$$
f(x)=\frac{x+1}{x-2}
$$

Then:

$$
f(0)=\frac{1}{-2}=-\frac12
$$

The $y$-intercept is:

$$
\left(0,-\frac12\right)
$$

## 4. Discontinuities

A rational function is not defined at values that make the denominator zero.

There are two main situations:

- **Removable discontinuity**, when a factor can be cancelled.
- **Vertical asymptote**, when the factor remains in the denominator after simplification.

For example:

$$
f(x)=\frac{(x-1)(x+2)}{(x-1)(x-3)}
$$

We can simplify:

$$
f(x)=\frac{x+2}{x-3}
$$

but $x=1$ is still excluded from the original domain.

Therefore:

- $x=1$ is a removable discontinuity.
- $x=3$ is a possible vertical asymptote.

## 5. Vertical Asymptotes

Vertical asymptotes occur at values where the denominator is zero and the corresponding factor cannot be cancelled.

If:

$$
Q(a)=0
$$

and the corresponding factor does not cancel, then usually:

$$
x=a
$$

is a vertical asymptote.

For example:

$$
f(x)=\frac{1}{x-2}
$$

has the vertical asymptote:

$$
x=2
$$

## 6. Horizontal Asymptote

To determine a horizontal asymptote, we can compare the degrees of the numerator and denominator.

Let:

$$
f(x)=\frac{P(x)}{Q(x)}
$$

### Numerator degree is smaller

If:

$$
\deg(P)<\deg(Q)
$$

then:

$$
\lim_{x\to\pm\infty}f(x)=0
$$

and the horizontal asymptote is:

$$
y=0
$$

### Same degree

If:

$$
\deg(P)=\deg(Q)
$$

the horizontal asymptote is the ratio of the leading coefficients.

For example:

$$
f(x)=\frac{2x^2+1}{x^2-3}
$$

Therefore:

$$
y=2
$$

### Numerator degree is larger

If:

$$
\deg(P)>\deg(Q)
$$

there is no horizontal asymptote.

There may instead be a slant or polynomial asymptote.

## 7. Slant Asymptote

When the degree of the numerator is exactly one greater than the degree of the denominator, a slant asymptote may exist.

For example:

$$
f(x)=\frac{x^2+1}{x-1}
$$

Polynomial division gives:

$$
\frac{x^2+1}{x-1}=x+1+\frac{2}{x-1}
$$

As $x$ tends to $\pm\infty$:

$$
\frac{2}{x-1}\to0
$$

Therefore, the slant asymptote is:

$$
y=x+1
$$

## 8. Limits at Discontinuities

Limits allow us to study what happens as we approach a discontinuity.

For example:

$$
f(x)=\frac{1}{x-2}
$$

As $x$ approaches $2$ from the left:

$$
\lim_{x\to2^-}\frac{1}{x-2}=-\infty
$$

while from the right:

$$
\lim_{x\to2^+}\frac{1}{x-2}=+\infty
$$

Therefore:

$$
\lim_{x\to2}f(x)
$$

does not exist as a finite limit, and $x=2$ is a vertical asymptote.

## 9. Sign of a Rational Function

To study the sign of a rational function, find:

1. The zeros of the numerator.
2. The zeros of the denominator.
3. The intervals determined by these values.
4. The sign of the function on each interval.

For example:

$$
f(x)=\frac{x-1}{x+2}
$$

The important values are:

$$
x=1
$$

and:

$$
x=-2
$$

These values divide the real line into three intervals:

$$
(-\infty,-2),\quad(-2,1),\quad(1,\infty)
$$

We can then construct a sign chart from these intervals.

## 10. Monotonicity

To study monotonicity, calculate the derivative:

$$
f'(x)
$$

Critical points are obtained by solving:

$$
f'(x)=0
$$

We must also consider points where the function is undefined.

For example:

$$
f(x)=\frac{1}{x}
$$

has:

$$
f'(x)=-\frac{1}{x^2}
$$

Since:

$$
f'(x)<0
$$

for every $x\neq0$, the function is decreasing on:

$$
(-\infty,0)
$$

and:

$$
(0,\infty)
$$

## 11. Symmetry

We can study symmetry by calculating $f(-x)$.

A function is **even** if:

$$
f(-x)=f(x)
$$

and is symmetric about the $y$-axis.

A function is **odd** if:

$$
f(-x)=-f(x)
$$

and is symmetric about the origin.

For example:

$$
f(x)=\frac{1}{x}
$$

is odd because:

$$
f(-x)=-f(x)
$$

## 12. Behavior at Infinity

We should also study:

$$
\lim_{x\to+\infty}f(x)
$$

and:

$$
\lim_{x\to-\infty}f(x)
$$

These limits allow us to identify horizontal asymptotes and understand how the function behaves far from the origin.

## 13. Complete Example

Consider:

$$
f(x)=\frac{x+1}{x-2}
$$

### Domain

$$
D_f=\mathbb{R}\setminus\{2\}
$$

### Zero

$$
x+1=0
$$

therefore:

$$
x=-1
$$

### $y$-Intercept

$$
f(0)=-\frac12
$$

### Vertical Asymptote

$$
x=2
$$

### Horizontal Asymptote

The numerator and denominator have the same degree. Their leading coefficients are both $1$:

$$
y=1
$$

:::function-graph{expression="(x+1)/(x-2)" restriction="-8<=x<=8"}
:::

## 14. Analysis Procedure

To analyze a rational function systematically:

1. Factor the numerator and denominator.
2. Determine the domain.
3. Simplify common factors while preserving the original restrictions.
4. Find the zeros.
5. Calculate the $y$-intercept.
6. Identify discontinuities.
7. Determine vertical asymptotes.
8. Study horizontal or slant asymptotes.
9. Calculate relevant limits.
10. Study the sign.
11. Calculate the derivative and study monotonicity.
12. Determine relative extrema.
13. Study symmetry.
14. Represent the function graphically.

## Summary

A rational function has the form:

$$
f(x)=\frac{P(x)}{Q(x)}
$$

and its analysis requires particular attention to the zeros of the denominator.
