# Integration by Parts

**Integration by parts** is a technique used to integrate products of functions when direct integration or substitution is not suitable.

It is based on the product rule for differentiation.

The fundamental formula is:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

The idea is to transform a difficult integral into another integral that is easier to evaluate.

---

## Where the formula comes from

Start with the product rule:

$$
\frac{d}{dx}(uv)
=
u\frac{dv}{dx}
+
v\frac{du}{dx}
$$

In differential form:

$$
d(uv)=u\,dv+v\,du
$$

Rearranging:

$$
u\,dv=d(uv)-v\,du
$$

Integrating both sides:

$$
\int u\,dv
=
\int d(uv)-\int v\,du
$$

Therefore:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

---

## Procedure

To apply integration by parts:

1. Choose $u$.
2. Choose $dv$.
3. Calculate $du$.
4. Integrate $dv$ to obtain $v$.
5. Apply:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

6. Simplify and evaluate the new integral.

Choosing $u$ and $dv$ is the most important part of the method.

---

## How to choose $u$

A common practical guideline is **LIATE**, which gives a priority order for choosing $u$:

1. **L** — Logarithmic
2. **I** — Inverse trigonometric
3. **A** — Algebraic
4. **T** — Trigonometric
5. **E** — Exponential

For example, in:

$$
\int x e^x\,dx
$$

choose:

$$
u=x
$$

because it is algebraic, while:

$$
dv=e^x\,dx
$$

is exponential.

LIATE is a guideline, not an absolute rule. The choice should make the resulting integral simpler.

---

## Basic example

Consider:

$$
\int x e^x\,dx
$$

Choose:

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

Apply the formula:

$$
\int u\,dv=uv-\int v\,du
$$

$$
\int xe^x\,dx
=
xe^x-\int e^x\,dx
$$

Therefore:

$$
\boxed{
\int xe^x\,dx
=
xe^x-e^x+C
}
$$

or:

$$
\boxed{
\int xe^x\,dx=e^x(x-1)+C
}
$$

---

## Example with a logarithm

Consider:

$$
\int \ln(x)\,dx
$$

Although it does not initially look like a product, we can write:

$$
\int \ln(x)\cdot1\,dx
$$

Choose:

$$
u=\ln(x)
$$

and:

$$
dv=dx
$$

Then:

$$
du=\frac1x\,dx
$$

and:

$$
v=x
$$

Apply integration by parts:

$$
\int\ln(x)\,dx
=
x\ln(x)-\int x\frac1x\,dx
$$

$$
=
x\ln(x)-\int1\,dx
$$

Therefore:

$$
\boxed{
\int\ln(x)\,dx
=
x\ln(x)-x+C
}
$$

---

## Example with a trigonometric function

Consider:

$$
\int x\cos(x)\,dx
$$

Choose:

$$
u=x
$$

$$
dv=\cos(x)\,dx
$$

Then:

$$
du=dx
$$

$$
v=\sin(x)
$$

Apply the formula:

$$
\int x\cos(x)\,dx
=
x\sin(x)-\int\sin(x)\,dx
$$

Since:

$$
\int\sin(x)\,dx=-\cos(x)
$$

we obtain:

$$
\boxed{
\int x\cos(x)\,dx
=
x\sin(x)+\cos(x)+C
}
$$

---

## Example with a power and a logarithm

Consider:

$$
\int x^2\ln(x)\,dx
$$

Choose:

$$
u=\ln(x)
$$

$$
dv=x^2\,dx
$$

Then:

$$
du=\frac1x\,dx
$$

and:

$$
v=\frac{x^3}{3}
$$

Apply:

$$
\int x^2\ln(x)\,dx
=
\frac{x^3}{3}\ln(x)
-
\int\frac{x^3}{3}\frac1x\,dx
$$

$$
=
\frac{x^3}{3}\ln(x)
-
\frac13\int x^2\,dx
$$

Therefore:

$$
\boxed{
\int x^2\ln(x)\,dx
=
\frac{x^3}{3}\ln(x)-\frac{x^3}{9}+C
}
$$

---

## Repeated integration by parts

Some integrals require integration by parts more than once.

Consider:

$$
\int x^2e^x\,dx
$$

First application:

$$
u=x^2,
\qquad
dv=e^x\,dx
$$

Then:

$$
du=2x\,dx,
\qquad
v=e^x
$$

Therefore:

$$
\int x^2e^x\,dx
=
x^2e^x-2\int xe^x\,dx
$$

We already know that:

$$
\int xe^x\,dx=e^x(x-1)
$$

Substituting:

$$
\int x^2e^x\,dx
=
x^2e^x-2e^x(x-1)+C
$$

Simplifying:

$$
\boxed{
\int x^2e^x\,dx
=
e^x(x^2-2x+2)+C
}
$$

---

## Integration by parts with trigonometric integrals

It can also be used when the product contains trigonometric functions.

For example:

$$
\int x\sin(x)\,dx
$$

Choose:

$$
u=x,
\qquad
dv=\sin(x)\,dx
$$

Then:

$$
du=dx,
\qquad
v=-\cos(x)
$$

Apply the formula:

$$
\int x\sin(x)\,dx
=
-x\cos(x)+\int\cos(x)\,dx
$$

Therefore:

$$
\boxed{
\int x\sin(x)\,dx
=
-x\cos(x)+\sin(x)+C
}
$$

---

## When the original integral appears again

There is a particularly interesting case where applying integration by parts produces the original integral again.

For example:

$$
\int e^x\cos(x)\,dx
$$

Let:

$$
I=\int e^x\cos(x)\,dx
$$

First integration by parts:

$$
u=\cos(x),
\qquad
dv=e^x\,dx
$$

Then:

$$
du=-\sin(x)\,dx,
\qquad
v=e^x
$$

Therefore:

$$
I=e^x\cos(x)+\int e^x\sin(x)\,dx
$$

Define:

$$
J=\int e^x\sin(x)\,dx
$$

Apply integration by parts again:

$$
u=\sin(x),
\qquad
dv=e^x\,dx
$$

Then:

$$
du=\cos(x)\,dx,
\qquad
v=e^x
$$

Thus:

$$
J=e^x\sin(x)-\int e^x\cos(x)\,dx
$$

Since the last integral is $I$:

$$
J=e^x\sin(x)-I
$$

Substitute into the first expression:

$$
I=e^x\cos(x)+e^x\sin(x)-I
$$

Therefore:

$$
2I=e^x(\sin(x)+\cos(x))
$$

and finally:

$$
\boxed{
\int e^x\cos(x)\,dx
=
\frac{e^x}{2}
\left(\sin(x)+\cos(x)\right)+C
}
$$

---

## Integration by parts in definite integrals

The formula also works for definite integrals:

$$
\boxed{
\int_a^b u\,dv
=
[uv]_a^b-\int_a^b v\,du
}
$$

### Example

Consider:

$$
\int_0^1 xe^x\,dx
$$

Choose:

$$
u=x,
\qquad
dv=e^x\,dx
$$

Then:

$$
du=dx,
\qquad
v=e^x
$$

Apply:

$$
\int_0^1xe^x\,dx
=
[xe^x]_0^1
-
\int_0^1e^x\,dx
$$

Calculate:

$$
[e^x]_0^1=e-1
$$

and:

$$
[xe^x]_0^1=e
$$

Therefore:

$$
\boxed{
\int_0^1xe^x\,dx=1
}
$$

---

## When to use integration by parts

Integration by parts is often appropriate when a product contains different types of functions, especially:

$$
\boxed{
\text{polynomial}\times\text{exponential}
}
$$

$$
\boxed{
\text{polynomial}\times\text{trigonometric}
}
$$

$$
\boxed{
\text{polynomial}\times\text{logarithmic}
}
$$

It is also useful for:

$$
\int\ln(x)\,dx
$$

and:

$$
\int\arctan(x)\,dx
$$

even though they do not initially appear as products.

---

## Integration by parts versus substitution

The two techniques have different purposes.

### Substitution

It is especially useful when a composite function appears together with its derivative:

$$
\int f(g(x))g'(x)\,dx
$$

### Integration by parts

It is especially useful when a product appears:

$$
\int u\,dv
$$

A useful rule of thumb is:

> If a composite function is accompanied by its derivative, consider substitution. If a product of different functions appears, consider integration by parts.

---

## Common mistakes

### Choosing $u$ poorly

The choice should make:

$$
\int v\,du
$$

simpler than the original integral.

### Forgetting to calculate $du$

After choosing:

$$
u=g(x)
$$

we must calculate:

$$
du=g'(x)\,dx
$$

### Integrating $dv$ incorrectly

We must calculate:

$$
v=\int dv
$$

### Forgetting the negative sign

The formula is:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

not:

$$
uv+\int v\,du
$$

### Using integration by parts when substitution is simpler

Not every product requires integration by parts. It is worth checking first whether a natural substitution exists.

---

## Summary procedure

Given an integral:

$$
\int f(x)g(x)\,dx
$$

we can try to write:

$$
u=f(x)
$$

and:

$$
dv=g(x)\,dx
$$

Then calculate:

$$
du=f'(x)\,dx
$$

and:

$$
v=\int g(x)\,dx
$$

Finally apply:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

---

## Summary

Integration by parts is based on the product rule and allows us to transform an integral into another, simpler integral.

The fundamental formula is:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

For definite integrals:

$$
\boxed{
\int_a^b u\,dv
=
[uv]_a^b-\int_a^b v\,du
}
$$

A good choice of $u$ should simplify the resulting integral.

The strategy is:

$$
\boxed{
u\longrightarrow du,
\qquad
dv\longrightarrow v
}
$$

and then apply the formula.
