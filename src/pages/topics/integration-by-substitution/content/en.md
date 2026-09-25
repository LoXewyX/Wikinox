# Integration by Substitution

**Integration by substitution** is a technique used to simplify integrals that contain a composite function together with its derivative.

The idea is to make a change of variable:

$$
u=g(x)
$$

and transform the integral into an integral with respect to $u$.

The fundamental rule is:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

---

## Main idea

Suppose we have:

$$
\int f(g(x))g'(x)\,dx
$$

Choose:

$$
u=g(x)
$$

Then:

$$
du=g'(x)\,dx
$$

Therefore, the integral becomes:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

After integrating, substitute $u=g(x)$ back.

---

## Procedure

To solve an integral using substitution:

1. Identify a convenient inner function.
2. Define the substitution:

$$
u=g(x)
$$

3. Calculate:

$$
du=g'(x)\,dx
$$

4. Rewrite the entire integral in terms of $u$.
5. Integrate with respect to $u$.
6. Substitute $u=g(x)$ back.
7. Add the constant of integration $C$.

---

## Basic example

Consider:

$$
\int 2x(x^2+1)^3\,dx
$$

The expression $x^2+1$ appears as a power, and its derivative is $2x$.

Choose:

$$
u=x^2+1
$$

Then:

$$
du=2x\,dx
$$

The integral becomes:

$$
\int u^3\,du
$$

Using the power rule:

$$
\frac{u^4}{4}+C
$$

Substituting back:

$$
\boxed{
\int 2x(x^2+1)^3\,dx
=
\frac{(x^2+1)^4}{4}+C
}
$$

---

## Substitution with a trigonometric function

Consider:

$$
\int \cos(x)\sin^4(x)\,dx
$$

Choose:

$$
u=\sin(x)
$$

Then:

$$
du=\cos(x)\,dx
$$

The integral becomes:

$$
\int u^4\,du
$$

Therefore:

$$
\frac{u^5}{5}+C
$$

Substituting back:

$$
\boxed{
\int \cos(x)\sin^4(x)\,dx
=
\frac{\sin^5(x)}{5}+C
}
$$

---

## Substitution with exponentials

Consider:

$$
\int e^{3x+1}\,dx
$$

Choose:

$$
u=3x+1
$$

Then:

$$
du=3\,dx
$$

and:

$$
dx=\frac{du}{3}
$$

The integral becomes:

$$
\int e^u\frac{du}{3}
=
\frac13\int e^u\,du
$$

Therefore:

$$
\boxed{
\int e^{3x+1}\,dx
=
\frac13e^{3x+1}+C
}
$$

---

## When the derivative appears with a constant factor

Sometimes the derivative of the substitution does not appear exactly, but differs by a constant factor.

For example:

$$
\int x(x^2+4)^5\,dx
$$

Choose:

$$
u=x^2+4
$$

Then:

$$
du=2x\,dx
$$

Since the integral contains $x\,dx$:

$$
x\,dx=\frac12du
$$

Therefore:

$$
\int x(x^2+4)^5\,dx
=
\frac12\int u^5\,du
$$

$$
=
\frac{u^6}{12}+C
$$

Substituting back:

$$
\boxed{
\int x(x^2+4)^5\,dx
=
\frac{(x^2+4)^6}{12}+C
}
$$

---

## Substitution in definite integrals

Substitution can also be used with definite integrals.

Consider:

$$
\int_0^1 2x(x^2+1)^3\,dx
$$

Take:

$$
u=x^2+1
$$

and:

$$
du=2x\,dx
$$

We must also transform the limits.

When $x=0$:

$$
u=0^2+1=1
$$

When $x=1$:

$$
u=1^2+1=2
$$

Therefore:

$$
\int_0^1 2x(x^2+1)^3\,dx
=
\int_1^2u^3\,du
$$

Calculate:

$$
\int_1^2u^3\,du
=
\left[\frac{u^4}{4}\right]_1^2
$$

$$
=
\frac{16}{4}-\frac14
$$

$$
\boxed{
\int_0^1 2x(x^2+1)^3\,dx
=
\frac{15}{4}
}
$$

When the limits have been transformed, there is no need to substitute back to $x$.

---

## How to identify a substitution

A useful substitution often appears as a **function inside another function**.

For example:

$$
\int 2x\cos(x^2)\,dx
$$

The inner function is:

$$
x^2
$$

and its derivative is:

$$
2x
$$

Therefore:

$$
u=x^2
$$

is a natural substitution.

Other common patterns include:

$$
\int f(g(x))g'(x)\,dx
$$

$$
\int \frac{g'(x)}{g(x)}\,dx
$$

$$
\int e^{g(x)}g'(x)\,dx
$$

$$
\int \cos(g(x))g'(x)\,dx
$$

$$
\int \sin(g(x))g'(x)\,dx
$$

---

## Example with a quotient

Consider:

$$
\int \frac{2x}{x^2+1}\,dx
$$

Choose:

$$
u=x^2+1
$$

Then:

$$
du=2x\,dx
$$

The integral becomes:

$$
\int\frac{1}{u}\,du
$$

We know that:

$$
\int\frac1u\,du=\ln|u|+C
$$

Therefore:

$$
\boxed{
\int\frac{2x}{x^2+1}\,dx
=
\ln(x^2+1)+C
}
$$

In this case, $x^2+1>0$, so the absolute value is unnecessary.

---

## Example with a square root

Consider:

$$
\int \frac{x}{\sqrt{x^2+1}}\,dx
$$

Choose:

$$
u=x^2+1
$$

Then:

$$
du=2x\,dx
$$

and:

$$
x\,dx=\frac12du
$$

Therefore:

$$
\int\frac{x}{\sqrt{x^2+1}}\,dx
=
\frac12\int u^{-1/2}\,du
$$

$$
=
\frac12\cdot2u^{1/2}+C
$$

Substituting back:

$$
\boxed{
\int\frac{x}{\sqrt{x^2+1}}\,dx
=
\sqrt{x^2+1}+C
}
$$

---

## Substitution and the chain rule

Integration by substitution is essentially the inverse operation of the **chain rule**.

We know that:

$$
\frac{d}{dx}F(g(x))
=
F'(g(x))g'(x)
$$

Therefore, when integrating:

$$
\boxed{
\int F'(g(x))g'(x)\,dx
=
F(g(x))+C
}
$$

Substitution allows us to recognize this structure without expanding the composite function.

---

## Checking the result by differentiation

A useful way to verify an integral is to differentiate the result.

For example:

$$
\int 2x(x^2+1)^3\,dx
=
\frac{(x^2+1)^4}{4}+C
$$

Differentiate:

$$
\frac{d}{dx}
\left[
\frac{(x^2+1)^4}{4}
\right]
$$

Using the chain rule:

$$
=
\frac14\cdot4(x^2+1)^3(2x)
$$

$$
=2x(x^2+1)^3
$$

Therefore, the result is correct.

---

## Substitution in integrals with limits

For a definite integral:

$$
\int_a^b f(g(x))g'(x)\,dx
$$

we can use:

$$
u=g(x)
$$

and transform the limits:

$$
u(a)=g(a),\qquad u(b)=g(b)
$$

Then:

$$
\boxed{
\int_a^b f(g(x))g'(x)\,dx
=
\int_{g(a)}^{g(b)}f(u)\,du
}
$$

---

## Common mistakes

### Not replacing the entire integral

After choosing $u$, every part that depends on $x$ must be removed.

### Forgetting the differential

If:

$$
u=g(x)
$$

we must also calculate:

$$
du=g'(x)\,dx
$$

### Forgetting a constant factor

If:

$$
du=2x\,dx
$$

but the integral contains $x\,dx$, then:

$$
x\,dx=\frac12du
$$

### Not changing the limits

For a definite integral, if we change from $x$ to $u$, the limits must also be changed.

### Substituting back unnecessarily

If the limits of a definite integral have already been transformed, we can leave the final result entirely in terms of $u$.

---

## Summary procedure

Given an integral:

$$
\int f(g(x))g'(x)\,dx
$$

identify:

$$
u=g(x)
$$

Calculate:

$$
du=g'(x)\,dx
$$

Transform:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

Integrate and finally substitute:

$$
\boxed{u=g(x)}
$$

For definite integrals, also transform the limits.

---

## Summary

Integration by substitution is especially useful when a composite function appears together with its derivative.

The fundamental structure is:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

with:

$$
\boxed{u=g(x),\qquad du=g'(x)\,dx}
$$

It is the inverse technique of the chain rule and is one of the fundamental methods for integrating composite functions.
