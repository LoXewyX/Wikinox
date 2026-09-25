# Integrals

Integrals are one of the fundamental tools of calculus. They allow us to study accumulation, calculate areas, obtain displacement from velocity, and solve many problems in science and engineering.

## 1. Fundamental idea

An integral can be interpreted as an **accumulation**.

For example, if we know a function $f(x)$, we can accumulate its values between two points using a definite integral:

$$
\int_a^b f(x)\,dx
$$

Geometrically, this integral represents the **signed area** between the graph of $f(x)$ and the $x$-axis, from $x=a$ to $x=b$.

- Regions above the $x$-axis contribute positive area.
- Regions below the $x$-axis contribute negative area.

## 2. Integral notation

An integral contains several elements:

$$
\int_a^b f(x)\,dx
$$

- $\int$: integration symbol.
- $a$: lower limit.
- $b$: upper limit.
- $f(x)$: function being integrated, called the **integrand**.
- $dx$: indicates the variable of integration.

For example:

$$
\int_0^3 x^2\,dx
$$

means integrating $x^2$ from $0$ to $3$.

## 3. Indefinite integral

An indefinite integral looks for a function whose derivative is the original function:

$$
\int f(x)\,dx=F(x)+C
$$

where:

$$
F'(x)=f(x)
$$

The constant $C$ appears because many functions have the same derivative.

For example:

$$
\int 2x\,dx=x^2+C
$$

because:

$$
\frac{d}{dx}(x^2)=2x
$$

## 4. Definite integral

A definite integral has limits:

$$
\int_a^b f(x)\,dx
$$

If $F$ is an antiderivative of $f$, we can calculate it using the fundamental theorem of calculus:

$$
\int_a^b f(x)\,dx=F(b)-F(a)
$$

For example:

$$
\int_0^2 x\,dx
$$

An antiderivative of $x$ is:

$$
F(x)=\frac{x^2}{2}
$$

Therefore:

$$
\int_0^2 x\,dx
=

\left[\frac{x^2}{2}\right]_0^2
=

2
$$

## 5. Basic properties

### Linearity

$$
\int(af(x)+bg(x))\,dx
=

a\int f(x)\,dx+b\int g(x)\,dx
$$

where $a$ and $b$ are constants.

Also:

$$
\int_a^b(f(x)+g(x))\,dx
=

\int_a^b f(x)\,dx+
\int_a^b g(x)\,dx
$$

### Reversing the limits

$$
\int_a^b f(x)\,dx
=

-\int_b^a f(x)\,dx
$$

### Zero-length interval

$$
\int_a^a f(x)\,dx=0
$$

### Splitting an interval

If $a<c<b$:

$$
\int_a^b f(x)\,dx
=

\int_a^c f(x)\,dx+
\int_c^b f(x)\,dx
$$

## 6. Power integrals

One of the most important rules is:

$$
\int x^n\,dx
=

\frac{x^{n+1}}{n+1}+C
$$

when:

$$
n\neq-1
$$

For example:

$$
\int x^3\,dx
=

\frac{x^4}{4}+C
$$

Another example:

$$
\int 5x^2\,dx
=

\frac{5x^3}{3}+C
$$

## 7. Special case: $1/x$

The power rule cannot be applied directly when $n=-1$.

In that case:

$$
\int\frac{1}{x}\,dx
=

\ln|x|+C
$$

The absolute value is important because $1/x$ is defined for both $x>0$ and $x<0$.

## 8. Integrals of exponential functions

For the exponential function:

$$
\int e^x\,dx=e^x+C
$$

For a base $a>0$, $a\neq1$:

$$
\int a^x\,dx
=

\frac{a^x}{\ln(a)}+C
$$

## 9. Basic trigonometric integrals

Some important antiderivatives are:

$$
\int\cos x\,dx=\sin x+C
$$

$$
\int\sin x\,dx=-\cos x+C
$$

Also:

$$
\int\frac{1}{\cos^2x}\,dx=\tan x+C
$$

and:

$$
\int\frac{1}{\sin^2x}\,dx=-\cot x+C
$$

## 10. Substitution

A change of variable can transform a complicated integral into a simpler one.

If:

$$
u=g(x)
$$

then:

$$
du=g'(x)\,dx
$$

For example:

$$
\int 2x\cos(x^2)\,dx
$$

Take:

$$
u=x^2
$$

Then:

$$
du=2x\,dx
$$

and we obtain:

$$
\int\cos(u)\,du
=

\sin(u)+C
$$

Finally:

$$
\boxed{\sin(x^2)+C}
$$

## 11. Integration by parts

Integration by parts is based on the product rule for derivatives:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

It is particularly useful when integrating a suitable product of functions.

For example:

$$
\int xe^x\,dx
$$

Take:

$$
u=x
$$

and:

$$
dv=e^x\,dx
$$

Then:

$$
du=dx
$$

and:

$$
v=e^x
$$

Applying the formula:

$$
\int xe^x\,dx
=

xe^x-\int e^x\,dx
$$

Therefore:

$$
\boxed{xe^x-e^x+C}
$$

## 12. Area under a curve

If:

$$
f(x)\geq0
$$

on the interval $[a,b]$, then:

$$
A=\int_a^b f(x)\,dx
$$

represents the area between the curve and the $x$-axis.

For example:

$$
A=\int_0^2x^2\,dx
$$

gives:

$$
A=\frac{8}{3}
$$

## 13. Area between two functions

If $f(x)$ lies above $g(x)$, the area between the two functions is:

$$
A=
\int_a^b(f(x)-g(x))\,dx
$$

The intersection points must first be determined in order to find the integration limits.

## 14. Integral as accumulation

Integrals do not only represent areas.

They can also accumulate physical quantities.

If $v(t)$ represents velocity, the displacement between $t=a$ and $t=b$ is:

$$
\Delta s=
\int_a^b v(t)\,dt
$$

If $r(t)$ represents a rate of growth, the accumulated change is:

$$
\Delta Q=
\int_a^b r(t)\,dt
$$

## 15. Relationship between derivatives and integrals

Differentiation and integration are closely related operations.

The fundamental theorem of calculus states:

$$
\frac{d}{dx}
\left(
\int_a^x f(t)\,dt
\right)
=

f(x)
$$

In other words, differentiating an accumulation returns the original function.

Also:

$$
\int_a^b f(x)\,dx
=

F(b)-F(a)
$$

when $F'(x)=f(x)$.

## 16. Improper integrals

An integral may have an infinite limit:

$$
\int_a^\infty f(x)\,dx
$$

In this case it is defined using a limit:

$$
\int_a^\infty f(x)\,dx
=

\lim_{b\to\infty}
\int_a^b f(x)\,dx
$$

A singularity may also occur inside the interval.

For example:

$$
\int_0^1\frac{1}{\sqrt{x}}\,dx
$$

requires studying the behavior of the function near $x=0$.

## 17. Multiple integrals

For functions of several variables, we use multiple integrals.

Double integral:

$$
\iint_D f(x,y)\,dA
$$

Triple integral:

$$
\iiint_V f(x,y,z)\,dV
$$

These tools can be used to calculate, among other things:

- areas;
- volumes;
- masses;
- centers of mass;
- accumulated quantities over regions.

## 18. Line integrals

A line integral integrates a function along a curve:

$$
\int_C f\,ds
$$

Line integrals of vector fields can also appear:

$$
\int_C\vec F\cdot d\vec r
$$

They are important in physics and engineering, particularly when studying work performed by a force.

## 19. Important symbols

| Symbol     | Meaning                           |
| ---------- | --------------------------------- |
| $\int$     | Integral                          |
| $\int_a^b$ | Definite integral from $a$ to $b$ |
| $dx$       | Differential with respect to $x$  |
| $C$        | Constant of integration           |
| $F(x)$     | Antiderivative of $f(x)$          |
| $\iint$    | Double integral                   |
| $\iiint$   | Triple integral                   |
| $\oint$    | Integral over a closed curve      |
| $\int_C$   | Line integral                     |

## 20. Common mistakes

### Forgetting the constant

Incorrect:

$$
\int2x\,dx=x^2
$$

Correct:

$$
\int2x\,dx=x^2+C
$$

### Applying the power rule incorrectly

Incorrect:

$$
\int x^2\,dx=\frac{x^2}{2}
$$

Correct:

$$
\int x^2\,dx=\frac{x^3}{3}+C
$$

### Confusing definite and indefinite integrals

An indefinite integral produces a family of functions:

$$
\int f(x)\,dx=F(x)+C
$$

A definite integral produces a number:

$$
\int_a^b f(x)\,dx
$$

### Confusing area with signed integral

If the function takes negative values, the definite integral may not equal the total geometric area.

In that case, it may be necessary to split the interval or use:

$$
\int_a^b|f(x)|\,dx
$$

## 21. General procedure

To solve an integral:

1. Identify the function being integrated.
2. Check whether a basic rule can be applied.
3. Simplify the expression if necessary.
4. Consider a substitution when a composition appears.
5. Consider integration by parts when a suitable product appears.
6. Find the antiderivative.
7. Add $C$ if the integral is indefinite.
8. If it is definite, apply the limits.
9. Check the result by differentiating the antiderivative when possible.
10. Check the domain conditions.

## 22. Fundamental idea

The essential idea of integration can be summarized as:

$$
\boxed{
\text{integrate}\approx\text{accumulate}
}
$$

and, in the context of antiderivatives:

$$
\boxed{
\int f(x)\,dx=F(x)+C
\iff
F'(x)=f(x)
}
$$

Integration and differentiation are, in many respects, inverse operations.
