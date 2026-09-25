# Derivative Examples

Derivative rules become easier to use when they are applied to different types of functions. The following examples progress from basic powers to products, quotients, compositions, radicals, exponential functions, logarithms, and trigonometric functions.

## 1. Polynomial function

Consider

$$
f(x)=3x^4-5x^2+2x-7.
$$

Differentiate each term separately:

$$
f'(x)
=
3(4x^3)-5(2x)+2.
$$

Therefore,

$$
\boxed{
f'(x)=12x^3-10x+2
}.
$$

The constant $-7$ disappears because the derivative of a constant is zero.

## 2. Power with a negative exponent

Consider

$$
f(x)=\frac{4}{x^3}.
$$

Rewrite the function using a negative exponent:

$$
f(x)=4x^{-3}.
$$

Apply the power rule:

$$
f'(x)
=
4(-3)x^{-4}.
$$

Thus,

$$
\boxed{
f'(x)=-\frac{12}{x^4}
}.
$$

## 3. Square root

Consider

$$
f(x)=\sqrt{x}.
$$

Rewrite the square root as a power:

$$
f(x)=x^{1/2}.
$$

Then,

$$
f'(x)
=
\frac12x^{-1/2}.
$$

Therefore,

$$
\boxed{
f'(x)=\frac{1}{2\sqrt{x}}
}.
$$

## 4. Polynomial multiplied by a constant

Consider

$$
f(x)=7x^5-3x^2.
$$

Differentiate term by term:

$$
f'(x)
=
35x^4-6x.
$$

Hence,

$$
\boxed{
f'(x)=35x^4-6x
}.
$$

## 5. Product of two functions

Consider

$$
f(x)=x^2\sin(x).
$$

This is a product, so use the product rule:

$$
(uv)'=u'v+uv'.
$$

Let

$$
u=x^2,
\qquad
v=\sin(x).
$$

Then

$$
u'=2x,
\qquad
v'=\cos(x).
$$

Therefore,

$$
f'(x)
=
2x\sin(x)+x^2\cos(x).
$$

So,

$$
\boxed{
f'(x)=2x\sin(x)+x^2\cos(x)
}.
$$

:::function-graph{expression="x^2*sin(x)" restriction="-6<=x<=6"}
:::

## 6. Product with an exponential function

Consider

$$
f(x)=x e^x.
$$

Using the product rule,

$$
f'(x)
=
1\cdot e^x+x\cdot e^x.
$$

Therefore,

$$
\boxed{
f'(x)=e^x(x+1)
}.
$$

## 7. Quotient of two functions

Consider

$$
f(x)=\frac{x^2+1}{x-1}.
$$

Use the quotient rule:

$$
\left(\frac{u}{v}\right)'
=
\frac{u'v-uv'}{v^2}.
$$

Let

$$
u=x^2+1,
\qquad
v=x-1.
$$

Then

$$
u'=2x,
\qquad
v'=1.
$$

Therefore,

$$
f'(x)
=
\frac{2x(x-1)-(x^2+1)}
{(x-1)^2}.
$$

Simplifying,

$$
f'(x)
=
\frac{2x^2-2x-x^2-1}
{(x-1)^2}.
$$

Hence,

$$
\boxed{
f'(x)=
\frac{x^2-2x-1}{(x-1)^2}
}.
$$

## 8. Chain rule with a polynomial

Consider

$$
f(x)=(2x+3)^4.
$$

The outer function is $u^4$ and the inner function is

$$
u=2x+3.
$$

Using the chain rule,

$$
f'(x)
=
4(2x+3)^3\cdot2.
$$

Thus,

$$
\boxed{
f'(x)=8(2x+3)^3
}.
$$

## 9. Chain rule with a square root

Consider

$$
f(x)=\sqrt{x^2+4}.
$$

Rewrite the function:

$$
f(x)=(x^2+4)^{1/2}.
$$

Apply the chain rule:

$$
f'(x)
=
\frac12(x^2+4)^{-1/2}\cdot2x.
$$

Therefore,

$$
\boxed{
f'(x)=\frac{x}{\sqrt{x^2+4}}
}.
$$

:::function-graph{expression="sqrt(x^2+4)" restriction="-6<=x<=6"}
:::

## 10. Exponential function with a composition

Consider

$$
f(x)=e^{3x^2}.
$$

The derivative of $e^u$ is $e^u$, but we must multiply by the derivative of the exponent:

$$
f'(x)
=
e^{3x^2}\cdot6x.
$$

Therefore,

$$
\boxed{
f'(x)=6xe^{3x^2}
}.
$$

## 11. Logarithmic function

Consider

$$
f(x)=\ln(x^2+1).
$$

Using

$$
\frac{d}{dx}\ln(u)=\frac{u'}{u},
$$

with

$$
u=x^2+1,
\qquad
u'=2x,
$$

we obtain

$$
\boxed{
f'(x)=\frac{2x}{x^2+1}
}.
$$

## 12. Sine function with a composition

Consider

$$
f(x)=\sin(4x).
$$

Using the chain rule,

$$
f'(x)
=
\cos(4x)\cdot4.
$$

Therefore,

$$
\boxed{
f'(x)=4\cos(4x)
}.
$$

## 13. Cosine function with a composition

Consider

$$
f(x)=\cos(x^2).
$$

The outer derivative is $-\sin(u)$ and the inner derivative is $2x$.

Therefore,

$$
f'(x)
=
-\sin(x^2)\cdot2x.
$$

Hence,

$$
\boxed{
f'(x)=-2x\sin(x^2)
}.
$$

## 14. Tangent function

Consider

$$
f(x)=\tan(3x+1).
$$

Using

$$
\frac{d}{dx}\tan(u)=\sec^2(u)u',
$$

we obtain

$$
f'(x)
=
3\sec^2(3x+1).
$$

Thus,

$$
\boxed{
f'(x)=3\sec^2(3x+1)
}.
$$

## 15. Combining several rules

Consider

$$
f(x)=x^2e^{x^2}.
$$

This is a product, and the exponential function contains a composition.

First apply the product rule:

$$
f'(x)
=
2xe^{x^2}
+
x^2\frac{d}{dx}e^{x^2}.
$$

Now apply the chain rule:

$$
\frac{d}{dx}e^{x^2}
=
2xe^{x^2}.
$$

Therefore,

$$
f'(x)
=
2xe^{x^2}
+
2x^3e^{x^2}.
$$

Factoring,

$$
\boxed{
f'(x)=2xe^{x^2}(1+x^2)
}.
$$

## 16. Finding the derivative at a point

Suppose

$$
f(x)=x^3-2x+1.
$$

Its derivative is

$$
f'(x)=3x^2-2.
$$

To find the instantaneous rate of change at $x=2$:

$$
f'(2)
=
3(2)^2-2
=
12-2
=
\boxed{10}.
$$

Therefore, the graph has slope $10$ at $x=2$.

## 17. Finding a tangent line

Let

$$
f(x)=x^2+1.
$$

We want the tangent line at $x=2$.

First calculate the derivative:

$$
f'(x)=2x.
$$

Then,

$$
f'(2)=4.
$$

The point on the graph is

$$
f(2)=5.
$$

Therefore, the tangent point is $(2,5)$.

Using the point-slope equation,

$$
y-5=4(x-2).
$$

Hence,

$$
\boxed{
y=4x-3
}.
$$

## 18. Second derivative

Consider

$$
f(x)=x^4-2x^2.
$$

The first derivative is

$$
f'(x)=4x^3-4x.
$$

Differentiate again:

$$
f''(x)=12x^2-4.
$$

Therefore,

$$
\boxed{
f''(x)=12x^2-4
}.
$$

The second derivative can be used to study concavity and the behavior of critical points.

## 19. A complete example

Consider

$$
f(x)=x^3-3x^2-9x+5.
$$

First derivative:

$$
f'(x)
=
3x^2-6x-9.
$$

Factor:

$$
f'(x)
=
3(x^2-2x-3)
=
3(x-3)(x+1).
$$

Critical points satisfy

$$
f'(x)=0.
$$

Therefore,

$$
x=-1,
\qquad
x=3.
$$

The sign of $f'(x)$ is:

$$
\begin{array}{c|ccc}
x & (-\infty,-1) & (-1,3) & (3,\infty)\\
\hline
f'(x) & + & - & +
\end{array}
$$

Thus, the function is increasing on

$$
(-\infty,-1)
\cup
(3,\infty),
$$

and decreasing on

$$
(-1,3).
$$

Since the derivative changes from positive to negative at $x=-1$, there is a local maximum there.

Since it changes from negative to positive at $x=3$, there is a local minimum there.

The corresponding values are

$$
f(-1)=10,
\qquad
f(3)=-22.
$$

Therefore,

$$
\boxed{
\text{Local maximum: }(-1,10)
}
$$

and

$$
\boxed{
\text{Local minimum: }(3,-22)
}.
$$

## 20. Choosing the correct rule

Before differentiating, identify the structure of the function:

| Function structure  | Main rule         |
| ------------------- | ----------------- |
| $x^n$               | Power rule        |
| $c\,f(x)$           | Constant multiple |
| $f(x)\pm g(x)$      | Sum/difference    |
| $f(x)g(x)$          | Product rule      |
| $\frac{f(x)}{g(x)}$ | Quotient rule     |
| $f(g(x))$           | Chain rule        |

Many functions require **more than one rule**.

For example,

$$
x^2e^{x^2}
$$

requires the product rule and the chain rule.

The key is to identify the outer structure first and then work inward.
