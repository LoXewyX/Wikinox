# Continuity of a Function

**Continuity** describes whether a function can be followed without jumps, holes, or interruptions at a point or over an interval.

Intuitively, a function is continuous when its graph has no break.

## Continuity at a Point

A function $f(x)$ is continuous at $x=a$ if all three of the following conditions hold:

1. $f(a)$ is defined.
2. $\lim_{x\to a}f(x)$ exists.
3. The limit equals the function value:

$$
\boxed{\lim_{x\to a}f(x)=f(a)}
$$

Therefore:

$$
\boxed{
f \text{ is continuous at }a
\iff
\lim_{x\to a}f(x)=f(a)
}
$$

## Example

Consider:

$$
f(x)=x^2+1
$$

At $x=2$:

$$
f(2)=2^2+1=5
$$

And:

$$
\lim_{x\to2}(x^2+1)=5
$$

Therefore:

$$
\boxed{\lim_{x\to2}f(x)=f(2)=5}
$$

The function is continuous at $x=2$.

## One-Sided Continuity

For piecewise functions or endpoints of intervals, one-sided limits are important.

The left-hand limit is:

$$
\lim_{x\to a^-}f(x)
$$

and the right-hand limit is:

$$
\lim_{x\to a^+}f(x)
$$

For the limit to exist:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
}
$$

For continuity:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$

## Continuity on an Interval

A function is continuous on an open interval $(a,b)$ if it is continuous at every point in the interval.

$$
\boxed{
f \text{ continuous on }(a,b)
\iff
\forall x\in(a,b),\
\lim_{t\to x}f(t)=f(x)
}
$$

On a closed interval $[a,b]$, one-sided continuity is also required at the endpoints:

$$
\lim_{x\to a^+}f(x)=f(a)
$$

and

$$
\lim_{x\to b^-}f(x)=f(b)
$$

## Types of Discontinuity

### Removable Discontinuity

The limit exists, but the function is either undefined at the point or has a different value.

For example:

$$
f(x)=\frac{x^2-1}{x-1}
$$

Factoring gives:

$$
f(x)=x+1
\qquad x\neq1
$$

At $x=1$, the original function is undefined, but:

$$
\lim_{x\to1}f(x)=2
$$

There is a hole in the graph.

$$
\boxed{\text{Removable discontinuity at }x=1}
$$

### Jump Discontinuity

The one-sided limits exist but are different:

$$
\lim_{x\to a^-}f(x)
\neq
\lim_{x\to a^+}f(x)
$$

Therefore, the limit does not exist.

$$
\boxed{\text{Jump discontinuity}}
$$

### Infinite Discontinuity

The function grows without bound as it approaches the point:

$$
\lim_{x\to a}f(x)=\pm\infty
$$

A vertical asymptote usually occurs.

$$
\boxed{\text{Infinite discontinuity}}
$$

### Oscillatory Discontinuity

The function oscillates increasingly rapidly and the limit does not exist.

A typical example is:

$$
f(x)=\sin\left(\frac{1}{x}\right)
$$

as $x\to0$.

$$
\boxed{
\lim_{x\to0}\sin\left(\frac{1}{x}\right)
\text{ does not exist}
}
$$

## Continuity of Common Functions

Many familiar functions are continuous throughout their domains.

### Polynomials

Every polynomial is continuous on $\mathbb{R}$:

$$
\boxed{
p(x)\text{ polynomial}
\Rightarrow
p\text{ is continuous on }\mathbb{R}
}
$$

### Rational Functions

A rational function

$$
f(x)=\frac{p(x)}{q(x)}
$$

is continuous wherever $q(x)\neq0$.

$$
\boxed{
f(x)=\frac{p(x)}{q(x)}
\text{ is continuous wherever }q(x)\neq0
}
$$

### Exponential Functions

$$
f(x)=a^x
\qquad a>0
$$

is continuous on all of $\mathbb{R}$.

### Logarithmic Functions

$$
f(x)=\log_a(x)
\qquad a>0,\ a\neq1
$$

is continuous on its domain:

$$
\boxed{x>0}
$$

### Trigonometric Functions

$\sin(x)$ and $\cos(x)$ are continuous on $\mathbb{R}$.

The function $\tan(x)$ is continuous wherever it is defined:

$$
\boxed{
x\neq\frac{\pi}{2}+k\pi,
\qquad k\in\mathbb{Z}
}
$$

## Continuity of Piecewise Functions

Consider:

$$
f(x)=
\begin{cases}
x+1 & x<2\\
5 & x=2\\
x^2-3 & x>2
\end{cases}
$$

To study continuity at $x=2$:

$$
\lim_{x\to2^-}f(x)=3
$$

$$
\lim_{x\to2^+}f(x)=1
$$

Since:

$$
3\neq1
$$

the limit does not exist, so the function is not continuous at $x=2$.

$$
\boxed{\text{f is not continuous at }x=2}
$$

## Operations with Continuous Functions

If $f$ and $g$ are continuous at $a$, then the following are also continuous:

- $f+g$
- $f-g$
- $fg$
- $\frac{f}{g}$, provided that $g(a)\neq0$
- compositions $f\circ g$, when defined

For example:

$$
f(x)=x^2
$$

and

$$
g(x)=\sin(x)
$$

are continuous, so:

$$
h(x)=\sin(x^2)
$$

is also continuous on $\mathbb{R}$.

## Intermediate Value Theorem

If a function is continuous on $[a,b]$, it takes every value between $f(a)$ and $f(b)$.

If:

$$
f(a)<L<f(b)
$$

then there exists at least one $c\in(a,b)$ such that:

$$
\boxed{f(c)=L}
$$

This result is particularly useful for proving that solutions exist.

### Application to Roots

If $f$ is continuous on $[a,b]$ and:

$$
f(a)\cdot f(b)<0
$$

then there exists at least one $c\in(a,b)$ such that:

$$
\boxed{f(c)=0}
$$

This is known as a consequence of **Bolzano's theorem**.

## How to Study Continuity

To study the continuity of a function at $x=a$:

1. Check that $f(a)$ is defined.
2. Calculate $\lim_{x\to a^-}f(x)$.
3. Calculate $\lim_{x\to a^+}f(x)$.
4. Check that the one-sided limits are equal.
5. Compare the limit with $f(a)$.
6. Classify the discontinuity if the function is not continuous.

In summary:

$$
\boxed{
\text{Continuity at }a
\iff
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::
