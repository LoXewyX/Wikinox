# Continuity of Piecewise Functions

A **piecewise function** is a function defined by different expressions on different parts of its domain.

For example:

$$
f(x)=
\begin{cases}
x+1 & x<2\\
x^2-1 & x\geq2
\end{cases}
$$

When studying continuity, the most important points are the **boundaries between the different pieces**.

## Continuity at a Point

A function $f$ is continuous at $x=a$ if:

$$
\boxed{
\lim_{x\to a}f(x)=f(a)
}
$$

For a piecewise function, this requires checking the behavior from both sides.

We need:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$

If any of these values is different, the function is not continuous at $x=a$.

## Boundary Points

Consider:

$$
f(x)=
\begin{cases}
f_1(x) & x<a\\
f_2(x) & x\geq a
\end{cases}
$$

To determine whether $f$ is continuous at $x=a$, calculate:

$$
\lim_{x\to a^-}f_1(x)
$$

$$
\lim_{x\to a^+}f_2(x)
$$

and the actual value:

$$
f(a)=f_2(a)
$$

Continuity requires:

$$
\boxed{
\lim_{x\to a^-}f_1(x)
=
\lim_{x\to a^+}f_2(x)
=
f_2(a)
}
$$

## Example

Consider:

$$
f(x)=
\begin{cases}
x+1 & x<2\\
x^2-1 & x\geq2
\end{cases}
$$

We study continuity at $x=2$.

### Left-hand limit

For $x<2$:

$$
f(x)=x+1
$$

Therefore:

$$
\lim_{x\to2^-}f(x)=2+1=3
$$

### Right-hand limit

For $x\geq2$:

$$
f(x)=x^2-1
$$

Therefore:

$$
\lim_{x\to2^+}f(x)=2^2-1=3
$$

### Function value

Since the second piece contains $x=2$:

$$
f(2)=2^2-1=3
$$

Thus:

$$
\boxed{
\lim_{x\to2^-}f(x)
=
\lim_{x\to2^+}f(x)
=
f(2)=3
}
$$

The function is continuous at $x=2$.

## Continuity Conditions for a Piecewise Function

For:

$$
f(x)=
\begin{cases}
f_1(x) & x<a\\
f_2(x) & x\geq a
\end{cases}
$$

continuity at $x=a$ requires:

### 1. Left-hand limit

$$
L_-=\lim_{x\to a^-}f_1(x)
$$

### 2. Right-hand limit

$$
L_+=\lim_{x\to a^+}f_2(x)
$$

### 3. Function value

$$
f(a)=f_2(a)
$$

Then:

$$
\boxed{
L_-=L_+=f(a)
}
$$

## Finding an Unknown Parameter

Piecewise functions often contain an unknown parameter that must be chosen so that the function is continuous.

Consider:

$$
f(x)=
\begin{cases}
x^2+1 & x<2\\
ax+3 & x\geq2
\end{cases}
$$

For continuity at $x=2$:

$$
\lim_{x\to2^-}f(x)
=
\lim_{x\to2^+}f(x)
$$

The left-hand limit is:

$$
2^2+1=5
$$

The right-hand limit is:

$$
2a+3
$$

Therefore:

$$
5=2a+3
$$

$$
2a=2
$$

$$
\boxed{a=1}
$$

With $a=1$, the function is continuous at $x=2$.

## Multiple Boundary Points

A piecewise function can have several boundary points.

For example:

$$
f(x)=
\begin{cases}
x+2 & x<1\\
x^2 & 1\leq x<3\\
2x-3 & x\geq3
\end{cases}
$$

The boundary points are:

$$
\boxed{x=1,\quad x=3}
$$

Both points must be checked independently.

### At $x=1$

$$
\lim_{x\to1^-}f(x)=1+2=3
$$

$$
\lim_{x\to1^+}f(x)=1^2=1
$$

Since:

$$
3\neq1
$$

the function is not continuous at $x=1$.

$$
\boxed{\text{Discontinuity at }x=1}
$$

### At $x=3$

$$
\lim_{x\to3^-}f(x)=3^2=9
$$

$$
\lim_{x\to3^+}f(x)=2(3)-3=3
$$

Since:

$$
9\neq3
$$

the function is not continuous at $x=3$.

$$
\boxed{\text{Discontinuity at }x=3}
$$

## Types of Discontinuity

Piecewise functions can produce several types of discontinuity.

### Removable Discontinuity

If the two one-sided limits are equal but the function value is different or undefined:

$$
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=L
$$

but:

$$
f(a)\neq L
$$

then:

$$
\boxed{\text{Removable discontinuity}}
$$

### Jump Discontinuity

If:

$$
\lim_{x\to a^-}f(x)
\neq
\lim_{x\to a^+}f(x)
$$

then:

$$
\boxed{\text{Jump discontinuity}}
$$

### Infinite Discontinuity

If one or both one-sided limits are infinite:

$$
\lim_{x\to a^\pm}f(x)=\pm\infty
$$

then there is an infinite discontinuity.

$$
\boxed{\text{Infinite discontinuity}}
$$

## Continuity on an Interval

A piecewise function is continuous on an interval if:

1. Each individual piece is continuous on its own interval.
2. The function is continuous at every boundary point.

For example, if:

$$
f(x)=
\begin{cases}
f_1(x) & x<a\\
f_2(x) & a\leq x<b\\
f_3(x) & x\geq b
\end{cases}
$$

then we need to check:

$$
\boxed{\text{continuity at }x=a\text{ and }x=b}
$$

in addition to the continuity of $f_1$, $f_2$, and $f_3$ on their respective intervals.

## Graphical Interpretation

At a boundary point $x=a$, continuity means that the graph approaches the same point from both sides and that the function actually takes that value.

Visually, there should be no:

- Hole.
- Jump.
- Vertical asymptote.
- Mismatch between the limit and the function value.

Therefore:

$$
\boxed{
\text{Continuous}
\iff
\text{no break at the boundary}
}
$$

:::function-graph{expression="x+1" restriction="-4<=x<2"}
:::

## Complete Example

Consider:

$$
f(x)=
\begin{cases}
x^2 & x<1\\
ax+2 & x\geq1
\end{cases}
$$

Find $a$ so that $f$ is continuous at $x=1$.

The left-hand limit is:

$$
\lim_{x\to1^-}f(x)=1^2=1
$$

The right-hand limit is:

$$
\lim_{x\to1^+}f(x)=a+2
$$

The function value is:

$$
f(1)=a+2
$$

For continuity:

$$
1=a+2
$$

Therefore:

$$
\boxed{a=-1}
$$

The resulting function is:

$$
f(x)=
\begin{cases}
x^2 & x<1\\
-x+2 & x\geq1
\end{cases}
$$

and:

$$
\boxed{
\lim_{x\to1^-}f(x)
=
\lim_{x\to1^+}f(x)
=
f(1)=1
}
$$

## Procedure

To study the continuity of a piecewise function:

1. Identify every boundary point.
2. Check whether each individual piece is continuous.
3. Calculate the left-hand limit at every boundary.
4. Calculate the right-hand limit.
5. Calculate the actual function value.
6. Compare the three values.
7. If necessary, classify the discontinuity.
8. If there is an unknown parameter, solve the continuity equation.

The fundamental condition is:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$
