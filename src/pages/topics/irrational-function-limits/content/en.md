# Limits of Irrational Functions

An **irrational function** is a function that contains a variable inside a root or another irrational expression. A common example is

$$
f(x)=\sqrt{x+1}.
$$

Limits of irrational functions often require special care because the expression may not be defined for every value of $x$, and direct substitution can produce indeterminate forms such as $0/0$.

## 1. Direct substitution

If the function is continuous at $x=a$, its limit can usually be found by direct substitution:

$$
\lim_{x\to a}\sqrt{x+3}
=
\sqrt{a+3}.
$$

For example,

$$
\lim_{x\to 1}\sqrt{x+3}
=
\sqrt{4}
=
\boxed{2}.
$$

The key point is that the expression must be defined around the point where the limit is being evaluated.

## 2. Limits involving a quotient

Consider

$$
\lim_{x\to a}
\frac{\sqrt{x+1}-\sqrt{a+1}}{x-a}.
$$

Direct substitution gives

$$
\frac{0}{0},
$$

which is an indeterminate form.

In this situation, **rationalization** is often the most useful technique.

## 3. Rationalization

The conjugate of

$$
\sqrt{x+1}-\sqrt{a+1}
$$

is

$$
\sqrt{x+1}+\sqrt{a+1}.
$$

Multiplying by the conjugate gives

$$
\frac{\sqrt{x+1}-\sqrt{a+1}}{x-a}
\cdot
\frac{\sqrt{x+1}+\sqrt{a+1}}
{\sqrt{x+1}+\sqrt{a+1}}.
$$

Using the difference of squares,

$$
(\sqrt{x+1})^2-(\sqrt{a+1})^2
=
x-a.
$$

Therefore,

$$
\frac{\sqrt{x+1}-\sqrt{a+1}}{x-a}
=
\frac{1}
{\sqrt{x+1}+\sqrt{a+1}}.
$$

Now the limit can be evaluated directly:

$$
\lim_{x\to a}
\frac{1}
{\sqrt{x+1}+\sqrt{a+1}}
=
\boxed{
\frac{1}{2\sqrt{a+1}}
}.
$$

## 4. A complete example

Calculate

$$
\lim_{x\to 4}
\frac{\sqrt{x}-2}{x-4}.
$$

Direct substitution gives

$$
\frac{0}{0}.
$$

Rationalize:

$$
\frac{\sqrt{x}-2}{x-4}
\cdot
\frac{\sqrt{x}+2}{\sqrt{x}+2}.
$$

Then

$$
\frac{x-4}{(x-4)(\sqrt{x}+2)}
=
\frac{1}{\sqrt{x}+2}.
$$

Therefore,

$$
\lim_{x\to4}
\frac{\sqrt{x}-2}{x-4}
=
\frac{1}{2+2}
=
\boxed{\frac14}.
$$

## 5. Difference of square roots

A common form is

$$
\lim_{x\to a}
\frac{\sqrt{f(x)}-\sqrt{g(x)}}{h(x)}.
$$

Multiplying by the conjugate gives

$$
\frac{
\sqrt{f(x)}-\sqrt{g(x)}
}{
h(x)
}
\cdot
\frac{
\sqrt{f(x)}+\sqrt{g(x)}
}{
\sqrt{f(x)}+\sqrt{g(x)}
}.
$$

The numerator becomes

$$
f(x)-g(x).
$$

Thus,

$$
\frac{
\sqrt{f(x)}-\sqrt{g(x)}
}{
h(x)
}
=
\frac{
f(x)-g(x)
}{
h(x)\left(\sqrt{f(x)}+\sqrt{g(x)}\right)
}.
$$

This frequently removes the indeterminate form.

## 6. Rationalizing the denominator

Rationalization can also be useful when the radical appears in the denominator.

For example,

$$
\lim_{x\to0}
\frac{x}{\sqrt{1+x}-1}.
$$

Direct substitution gives

$$
\frac{0}{0}.
$$

Multiply by the conjugate:

$$
\frac{x}{\sqrt{1+x}-1}
\cdot
\frac{\sqrt{1+x}+1}{\sqrt{1+x}+1}.
$$

Then

$$
\frac{x(\sqrt{1+x}+1)}
{(1+x)-1}
=
\sqrt{1+x}+1.
$$

Therefore,

$$
\lim_{x\to0}
\frac{x}{\sqrt{1+x}-1}
=
\boxed{2}.
$$

## 7. Domain restrictions

Radical expressions impose restrictions on the domain.

For an even root,

$$
\sqrt{f(x)},
$$

we need

$$
f(x)\geq0.
$$

For example,

$$
f(x)=\sqrt{x-2}
$$

has domain

$$
[2,\infty).
$$

Therefore, a two-sided limit at $x=2$ must be considered carefully because the function is only defined to the right of $2$.

In this case,

$$
\lim_{x\to2^+}\sqrt{x-2}
=
\boxed{0}.
$$

The left-hand limit does not exist over the real numbers.

## 8. Limits at infinity

Irrational functions can also require rationalization when studying their behavior as $x$ tends to infinity.

Consider

$$
\lim_{x\to\infty}
\left(\sqrt{x^2+x}-x\right).
$$

Direct reasoning can be misleading because both terms become infinite.

Rationalize:

$$
\sqrt{x^2+x}-x
=
\frac{(x^2+x)-x^2}
{\sqrt{x^2+x}+x}.
$$

Therefore,

$$
\sqrt{x^2+x}-x
=
\frac{x}
{\sqrt{x^2+x}+x}.
$$

Factor $x$ from the square root:

$$
\frac{x}
{x\sqrt{1+\frac1x}+x}
=
\frac{1}
{\sqrt{1+\frac1x}+1}.
$$

Taking the limit,

$$
\boxed{
\lim_{x\to\infty}
\left(\sqrt{x^2+x}-x\right)
=
\frac12
}.
$$

## 9. Common indeterminate forms

When working with irrational functions, the most common indeterminate forms include

$$
\frac00,
\qquad
\infty-\infty.
$$

An indeterminate form does **not** mean that the limit does not exist. It means that further algebraic manipulation is required.

## 10. General procedure

When calculating a limit involving radicals:

1. Determine the domain of the function.
2. Try direct substitution.
3. Identify whether an indeterminate form appears.
4. If a difference of radicals appears, multiply by the conjugate.
5. Simplify using the difference of squares.
6. Cancel common factors when valid.
7. Evaluate the resulting limit.
8. Check whether the limit is one-sided because of the domain.

The key technique is rationalization:

$$
\boxed{
(a-b)(a+b)=a^2-b^2
}.
$$

For square roots, the conjugate often transforms a difficult expression into an algebraically simpler one.
