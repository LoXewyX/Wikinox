# Area Using Integrals

The definite integral provides a general method for calculating the area between a curve and the coordinate axes or between two curves.

## 1. Area under a curve

Suppose $f(x)\geq 0$ on $[a,b]$. The area between the graph of $f$ and the $x$-axis is

$$
A=\int_a^b f(x)\,dx
$$

The integral can be understood as the limit of sums of thin rectangles.

:::function-graph{expression="x^2" restriction="-1<=x<=3"}
:::

For example, the area under $f(x)=x^2$ from $x=0$ to $x=2$ is

$$
A=\int_0^2x^2\,dx
$$

Using the antiderivative,

$$
A=\left[\frac{x^3}{3}\right]_0^2
=\frac{8}{3}
$$

Therefore,

$$
\boxed{A=\frac{8}{3}}
$$

---

## 2. When the function is below the $x$-axis

A definite integral represents **signed area**. If $f(x)<0$, the integral is negative.

The geometric area must always be positive, so

$$
A=-\int_a^b f(x)\,dx
$$

when the entire function is below the $x$-axis.

More generally,

$$
\boxed{A=\int_a^b|f(x)|\,dx}
$$

gives the geometric area between the curve and the $x$-axis.

---

## 3. Function crossing the $x$-axis

If the function changes sign inside $[a,b]$, the integral cannot be used directly to obtain the total geometric area.

First find the zeros of $f$ and split the interval.

For example, consider

$$
f(x)=x^2-1
$$

The zeros are

$$
x=-1,\qquad x=1
$$

The total area on $[-2,2]$ is

$$
A=
\int_{-2}^{-1}(x^2-1)\,dx
-\int_{-1}^{1}(x^2-1)\,dx
+\int_1^2(x^2-1)\,dx
$$

Equivalently,

$$
\boxed{A=\int_{-2}^{2}|x^2-1|\,dx}
$$

The absolute value automatically converts negative contributions into positive areas.

---

## 4. Area between two curves

Suppose $f(x)$ is above $g(x)$ on $[a,b]$.

The area between the curves is

$$
\boxed{A=\int_a^b\left(f(x)-g(x)\right)\,dx}
$$

The key idea is

$$
\text{area}=\int(\text{upper function}-\text{lower function})\,dx
$$

For example,

$$
f(x)=x+2,\qquad g(x)=x^2
$$

First find their intersection points:

$$
x+2=x^2
$$

$$
x^2-x-2=0
$$

$$
(x-2)(x+1)=0
$$

Thus,

$$
x=-1,\qquad x=2
$$

On this interval, $x+2$ is above $x^2$, so

$$
A=\int_{-1}^{2}(x+2-x^2)\,dx
$$

Evaluating,

$$
A=
\left[
\frac{x^2}{2}+2x-\frac{x^3}{3}
\right]_{-1}^{2}
$$

and therefore

$$
\boxed{A=\frac{9}{2}}
$$

---

## 5. Area with respect to $y$

Sometimes it is easier to integrate horizontally.

If the curves are written as

$$
x=f(y),\qquad x=g(y)
$$

then

$$
\boxed{A=\int_c^d(\text{right function}-\text{left function})\,dy}
$$

This is useful when solving the curves for $y$ as a function of $x$ would be complicated.

The choice is therefore:

- Vertical slices $\rightarrow$ integrate with respect to $x$.
- Horizontal slices $\rightarrow$ integrate with respect to $y$.

---

## 6. Choosing the correct limits

The limits of integration normally come from:

1. Given endpoints.
2. Intersections between curves.
3. Zeros of a function when calculating area with the $x$-axis.
4. Points where the upper and lower functions change.

For example, for the region between two curves, solve

$$
f(x)=g(x)
$$

to determine the intersection points.

---

## 7. A systematic procedure

To calculate an area using integrals:

1. **Identify the region.**
2. **Find the relevant intersection points or limits.**
3. **Determine which curve is above or below.**
4. **Choose vertical or horizontal slices.**
5. **Split the integral if the order of the curves changes.**
6. **Set up the definite integral.**
7. **Find an antiderivative.**
8. **Evaluate the limits.**
9. **Check that the final geometric area is non-negative.**

---

## 8. Common mistakes

### Forgetting the difference between curves

For two curves,

$$
\int_a^b f(x)\,dx
$$

is not generally the area between them.

Use

$$
\boxed{\int_a^b(\text{upper}-\text{lower})\,dx}
$$

### Ignoring a sign change

If a curve crosses the axis, split the integral or use an absolute value.

### Using incorrect limits

The limits must correspond to the region being measured.

### Choosing the wrong direction

If the functions are difficult to express as $y=f(x)$, integrating with respect to $y$ may be simpler.

---

## Summary

The fundamental formulas are:

### Area under a curve

$$
\boxed{A=\int_a^b f(x)\,dx}
$$

when $f(x)\geq0$.

### Geometric area with the $x$-axis

$$
\boxed{A=\int_a^b|f(x)|\,dx}
$$

### Area between two curves

$$
\boxed{A=\int_a^b(\text{upper}-\text{lower})\,dx}
$$

### Area using horizontal slices

$$
\boxed{A=\int_c^d(\text{right}-\text{left})\,dy}
$$

The central principle is to interpret the integral as the accumulation of infinitely many thin slices of area.
