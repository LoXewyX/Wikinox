# Tangent Lines

A **tangent line** to a function at a point is the line that describes the instantaneous direction of the function at that point.

If $f$ is differentiable at $x=a$, the slope of the tangent line is the derivative:

$$
m=f'(a)
$$

The equation of the tangent line at $(a,f(a))$ is:

$$
\boxed{y-f(a)=f'(a)(x-a)}
$$

or equivalently,

$$
\boxed{y=f'(a)(x-a)+f(a)}
$$

---

## Geometric interpretation

Consider a function $f(x)$ and a point

$$
P=(a,f(a)).
$$

The derivative $f'(a)$ represents the slope of the function exactly at that point.

- If $f'(a)>0$, the tangent rises.
- If $f'(a)<0$, the tangent falls.
- If $f'(a)=0$, the tangent is horizontal.
- The larger $|f'(a)|$ is, the steeper the tangent.

The tangent line provides a local linear approximation of the function near $x=a$.

---

## Finding a tangent line

To find the tangent line to $f(x)$ at $x=a$:

1. Calculate $f(a)$.
2. Calculate the derivative $f'(x)$.
3. Evaluate the derivative at $a$ to obtain the slope.
4. Use the point-slope equation.

$$
\boxed{m=f'(a)}
$$

$$
\boxed{P=(a,f(a))}
$$

$$
\boxed{y-f(a)=f'(a)(x-a)}
$$

### Example

Let

$$
f(x)=x^2+2x
$$

and find the tangent at $x=1$.

First calculate the point:

$$
f(1)=1^2+2(1)=3
$$

Therefore:

$$
P=(1,3)
$$

Differentiate:

$$
f'(x)=2x+2
$$

Evaluate at $x=1$:

$$
f'(1)=4
$$

The slope is $m=4$.

Using the point-slope equation:

$$
y-3=4(x-1)
$$

Simplifying:

$$
\boxed{y=4x-1}
$$

---

## Tangent line from the derivative definition

The derivative can be defined as the limit of the slopes of secant lines:

$$
f'(a)=
\lim_{h\to0}
\frac{f(a+h)-f(a)}{h}
$$

Therefore, the slope of the tangent is obtained by letting the second point of the secant approach the first point.

$$
\boxed{
f'(a)=
\lim_{x\to a}
\frac{f(x)-f(a)}{x-a}
}
$$

This explains why the derivative represents the instantaneous slope.

---

## Secant line and tangent line

A **secant line** passes through two points of the function:

$$
(a,f(a)),\qquad (b,f(b))
$$

Its slope is:

$$
m_{\text{secant}}
=
\frac{f(b)-f(a)}{b-a}
$$

As $b$ approaches $a$, the secant approaches the tangent.

$$
\boxed{
m_{\text{tangent}}
=
\lim_{b\to a}
\frac{f(b)-f(a)}{b-a}
=
f'(a)
}
$$

---

## Normal line

The **normal line** is perpendicular to the tangent line.

If the slope of the tangent is $m\neq0$, the slope of the normal is:

$$
\boxed{
m_n=-\frac{1}{m}
}
$$

Therefore:

$$
\boxed{
m_n=-\frac{1}{f'(a)}
}
$$

The equation of the normal is:

$$
\boxed{
y-f(a)
=
-\frac{1}{f'(a)}(x-a)
}
$$

### Example

For

$$
f(x)=x^2
$$

at $x=1$:

$$
f(1)=1
$$

$$
f'(x)=2x
$$

$$
f'(1)=2
$$

The tangent is:

$$
y-1=2(x-1)
$$

$$
\boxed{y=2x-1}
$$

The normal has slope:

$$
m_n=-\frac12
$$

Therefore:

$$
y-1=-\frac12(x-1)
$$

$$
\boxed{y=-\frac12x+\frac32}
$$

---

## Horizontal tangent lines

A tangent is horizontal when its slope is zero:

$$
f'(a)=0
$$

Therefore, to find points where the graph has a horizontal tangent, solve:

$$
\boxed{f'(x)=0}
$$

These points are candidates for local maxima or minima, although they are not necessarily extrema.

### Example

Let:

$$
f(x)=x^3-3x
$$

Then:

$$
f'(x)=3x^2-3
$$

Solve:

$$
3x^2-3=0
$$

$$
x^2=1
$$

$$
x=\pm1
$$

The corresponding points are:

$$
f(-1)=2
$$

$$
f(1)=-2
$$

Therefore, there are horizontal tangents at:

$$
\boxed{(-1,2)}
$$

and

$$
\boxed{(1,-2)}
$$

---

## Vertical tangent lines

A vertical tangent has a vertical direction, so its slope is not finite.

In these cases, the derivative may tend to infinity:

$$
\lim_{x\to a}f'(x)=\pm\infty
$$

It cannot be written as $y=mx+b$ because a vertical line has equation:

$$
\boxed{x=a}
$$

A typical example is:

$$
f(x)=\sqrt[3]{x}
$$

At $x=0$, the function has a vertical tangent:

$$
\boxed{x=0}
$$

---

## Linear approximation

The tangent line can also be used to approximate a function near a point.

The **linear approximation** of $f(x)$ around $x=a$ is:

$$
\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

This is exactly the equation of the tangent line.

### Example

To approximate $\sqrt{4.1}$, consider:

$$
f(x)=\sqrt{x}
$$

Choose $a=4$ because $\sqrt4=2$.

The derivative is:

$$
f'(x)=\frac{1}{2\sqrt{x}}
$$

Therefore:

$$
f'(4)=\frac14
$$

The linear approximation is:

$$
L(x)=2+\frac14(x-4)
$$

Evaluating at $x=4.1$:

$$
L(4.1)=2+\frac14(0.1)
$$

$$
\boxed{\sqrt{4.1}\approx2.025}
$$

---

## Graphical interpretation

The tangent and the function intersect exactly at the point of tangency:

$$
P=(a,f(a))
$$

They also have the same slope:

$$
\boxed{f'(a)=m_{\text{tangent}}}
$$

Near $a$, the tangent can provide a good approximation of the function.

:::function-graph{expression="x^2" restriction="-3<=x<=3"}
:::

---

## General procedure

To find the tangent line to $f(x)$ at $x=a$:

1. Calculate $f(a)$.
2. Differentiate $f(x)$.
3. Calculate $f'(a)$.
4. Identify the point $(a,f(a))$.
5. Apply:

$$
\boxed{
y-f(a)=f'(a)(x-a)
}
$$

6. Simplify the equation.

If the normal is also required:

$$
\boxed{
m_n=-\frac1{f'(a)}
}
$$

---

## Common mistakes

### Confusing $f(a)$ and $f'(a)$

They represent different quantities:

$$
f(a)=\text{$y$-coordinate}
$$

$$
f'(a)=\text{slope}
$$

### Using $f'(x)$ as the slope

The slope of the tangent at a specific point is:

$$
\boxed{f'(a)}
$$

not $f'(x)$.

### Forgetting the point of tangency

The slope alone does not determine a line. We also need:

$$
(a,f(a))
$$

### Confusing tangent and normal

When both slopes are finite, the tangent and normal slopes satisfy:

$$
m_t\,m_n=-1
$$

---

## Summary

The tangent line to $f(x)$ at $x=a$ has:

- point of tangency: $(a,f(a))$;
- slope: $f'(a)$;
- equation:

$$
\boxed{
y=f(a)+f'(a)(x-a)
}
$$

The linear approximation is exactly the same expression:

$$
\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

The normal line, when $f'(a)\neq0$, has slope:

$$
\boxed{
-\frac1{f'(a)}
}
$$
