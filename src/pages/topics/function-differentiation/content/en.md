# Function Differentiation

The **derivative** describes how a function changes as its input changes. It can be interpreted as an instantaneous rate of change or as the slope of the tangent line to the graph.

## 1. Definition of the derivative

The derivative of a function $f(x)$ at $x=a$ is defined by

$$
f'(a)
=
\lim_{h\to0}
\frac{f(a+h)-f(a)}{h}.
$$

The quotient

$$
\frac{f(a+h)-f(a)}{h}
$$

represents the average rate of change between two points. Taking the limit as $h$ approaches $0$ gives the instantaneous rate of change.

If this limit exists, the function is differentiable at $x=a$.

The derivative as a function is written as

$$
f'(x)
=
\lim_{h\to0}
\frac{f(x+h)-f(x)}{h}.
$$

## 2. Geometric interpretation

The derivative $f'(a)$ represents the slope of the tangent line to the graph of $f$ at the point $(a,f(a))$.

A positive derivative means that the function is locally increasing, while a negative derivative means that it is locally decreasing.

If

$$
f'(a)=0,
$$

the tangent line is horizontal.

For example, for

$$
f(x)=x^2,
$$

the derivative is

$$
f'(x)=2x.
$$

Therefore, at $x=2$,

$$
f'(2)=4.
$$

The tangent line has slope $4$ at the point $(2,4)$.

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::

## 3. Differentiability and continuity

If a function is differentiable at $x=a$, then it is continuous at $x=a$.

$$
\boxed{
\text{Differentiable}
\implies
\text{Continuous}
}
$$

The converse is not always true.

For example,

$$
f(x)=|x|
$$

is continuous at $x=0$, but it is not differentiable there because the left and right derivatives are different.

$$
f'_-(0)=-1,
\qquad
f'_+(0)=1.
$$

Therefore,

$$
\boxed{|x|\text{ is continuous but not differentiable at }x=0.}
$$

:::function-graph{expression="abs(x)" restriction="-4<=x<=4"}
:::

## 4. Basic differentiation rules

### Constant rule

If

$$
f(x)=c,
$$

where $c$ is constant, then

$$
\boxed{f'(x)=0}.
$$

### Power rule

For

$$
f(x)=x^n,
$$

the derivative is

$$
\boxed{
\frac{d}{dx}x^n=nx^{n-1}
}.
$$

For example,

$$
\frac{d}{dx}x^5
=
5x^4.
$$

The rule also applies to negative and fractional powers where the function is differentiable:

$$
\frac{d}{dx}x^{-2}
=
-2x^{-3},
$$

and

$$
\frac{d}{dx}\sqrt{x}
=
\frac{d}{dx}x^{1/2}
=
\frac{1}{2\sqrt{x}}.
$$

### Constant multiple rule

If

$$
f(x)=c\,g(x),
$$

then

$$
\boxed{
f'(x)=c\,g'(x)
}.
$$

For example,

$$
\frac{d}{dx}(7x^3)
=
21x^2.
$$

### Sum and difference rules

For functions $f$ and $g$,

$$
\boxed{
(f\pm g)'=f'\pm g'
}.
$$

For example,

$$
\frac{d}{dx}(x^3+2x^2-5x+1)
=
3x^2+4x-5.
$$

## 5. Product rule

When two functions are multiplied,

$$
f(x)=u(x)v(x),
$$

the derivative is

$$
\boxed{
(uv)'=u'v+uv'
}.
$$

For example,

$$
f(x)=x^2\sin(x).
$$

Then

$$
f'(x)
=
2x\sin(x)+x^2\cos(x).
$$

The product rule is necessary because, in general,

$$
(uv)'\neq u'v'.
$$

## 6. Quotient rule

For

$$
f(x)=\frac{u(x)}{v(x)},
\qquad v(x)\neq0,
$$

the derivative is

$$
\boxed{
\left(\frac{u}{v}\right)'
=
\frac{u'v-uv'}{v^2}
}.
$$

For example,

$$
f(x)=\frac{x^2+1}{x}.
$$

Then

$$
f'(x)
=
\frac{2x(x)-(x^2+1)}{x^2}
=
\boxed{
\frac{x^2-1}{x^2}
}.
$$

## 7. Chain rule

The **chain rule** is used when one function is composed with another.

If

$$
f(x)=g(h(x)),
$$

then

$$
\boxed{
f'(x)=g'(h(x))h'(x)
}.
$$

In other words, differentiate the outer function and multiply by the derivative of the inner function.

For example,

$$
f(x)=(3x+1)^5.
$$

The outer function is $u^5$ and the inner function is $u=3x+1$.

Therefore,

$$
f'(x)
=
5(3x+1)^4\cdot3.
$$

Hence,

$$
\boxed{
f'(x)=15(3x+1)^4
}.
$$

Another example is

$$
f(x)=\sqrt{x^2+1}.
$$

Writing the square root as a power,

$$
f(x)=(x^2+1)^{1/2},
$$

gives

$$
f'(x)
=
\frac12(x^2+1)^{-1/2}(2x).
$$

Therefore,

$$
\boxed{
f'(x)=\frac{x}{\sqrt{x^2+1}}
}.
$$

## 8. Derivatives of common functions

Some important derivatives are

$$
\boxed{
\frac{d}{dx}e^x=e^x
}
$$

$$
\boxed{
\frac{d}{dx}\ln(x)=\frac1x
}
$$

$$
\boxed{
\frac{d}{dx}\sin(x)=\cos(x)
}
$$

$$
\boxed{
\frac{d}{dx}\cos(x)=-\sin(x)
}
$$

$$
\boxed{
\frac{d}{dx}\tan(x)=\sec^2(x)
}
$$

These formulas are combined with the basic differentiation rules and the chain rule.

For example,

$$
f(x)=e^{2x}
$$

has derivative

$$
\boxed{
f'(x)=2e^{2x}
}.
$$

## 9. Higher-order derivatives

The derivative of the derivative is called the **second derivative**:

$$
f''(x)=\frac{d}{dx}f'(x).
$$

More generally,

$$
f^{(n)}(x)
$$

denotes the $n$-th derivative.

For example, if

$$
f(x)=x^4,
$$

then

$$
f'(x)=4x^3,
$$

$$
f''(x)=12x^2,
$$

$$
f'''(x)=24x,
$$

and

$$
f^{(4)}(x)=24.
$$

## 10. Derivatives and monotonicity

The first derivative can be used to determine where a function increases or decreases.

If

$$
f'(x)>0
$$

throughout an interval, then $f$ is increasing on that interval.

If

$$
f'(x)<0
$$

throughout an interval, then $f$ is decreasing.

Therefore,

$$
\boxed{
f'(x)>0\Rightarrow f\text{ increasing}
}
$$

and

$$
\boxed{
f'(x)<0\Rightarrow f\text{ decreasing}
}.
$$

Points where

$$
f'(x)=0
$$

or where $f'(x)$ does not exist are called **critical points**, provided they belong to the domain of $f$.

## 11. Derivatives and local extrema

A local maximum or minimum can occur at a critical point.

If

$$
f'(a)=0,
$$

the point $x=a$ is a candidate for a local extremum.

However, $f'(a)=0$ alone does not guarantee a maximum or minimum.

For example,

$$
f(x)=x^3
$$

satisfies

$$
f'(0)=0,
$$

but $x=0$ is not a local maximum or minimum.

The sign of the derivative around the critical point provides more information.

If the derivative changes from positive to negative,

$$
+\rightarrow-,
$$

the function has a local maximum.

If it changes from negative to positive,

$$
-\rightarrow+,
$$

the function has a local minimum.

## 12. Tangent line

If $f$ is differentiable at $x=a$, the tangent line at $(a,f(a))$ has slope $f'(a)$.

Its equation is

$$
\boxed{
y-f(a)=f'(a)(x-a)
}.
$$

For example, let

$$
f(x)=x^2
$$

and $a=1$.

We have

$$
f(1)=1,
\qquad
f'(x)=2x,
\qquad
f'(1)=2.
$$

Therefore,

$$
y-1=2(x-1),
$$

so

$$
\boxed{
y=2x-1
}.
$$

## 13. Differentiation workflow

When differentiating a function:

1. Identify the structure of the function.
2. Check whether it is a sum, product, quotient, or composition.
3. Choose the appropriate differentiation rule.
4. Apply the rule carefully.
5. Simplify the result.
6. Check the domain where the derivative exists.
7. If necessary, analyze the sign of the derivative.

The main rules are

$$
\boxed{
\frac{d}{dx}x^n=nx^{n-1}
}
$$

$$
\boxed{
(uv)'=u'v+uv'
}
$$

$$
\boxed{
\left(\frac uv\right)'
=
\frac{u'v-uv'}{v^2}
}
$$

and

$$
\boxed{
(g(h(x)))'
=
g'(h(x))h'(x)
}.
$$
