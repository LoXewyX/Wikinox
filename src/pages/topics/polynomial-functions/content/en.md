# Polynomial Functions

A **polynomial function** is a function that can be written as a sum of non-negative integer powers of a variable, multiplied by numbers called **coefficients**.

The general form of a polynomial function is:

$$
f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_2x^2+a_1x+a_0
$$

Before using this expression, let us define its notation:

- $x$ is the **variable** or input of the function.
- $f(x)$ represents the **value of the function** for a given input $x$.
- $a_0,a_1,\ldots,a_n$ are the **coefficients**.
- $n$ is a non-negative integer that determines the highest exponent of $x$.
- $x^k$ means that $x$ is multiplied by itself $k$ times.
- $\cdots$ indicates that intermediate terms have been omitted.

For example:

$$
f(x)=2x^3-5x^2+x+4
$$

is a polynomial function.

Its coefficients are $2$, $-5$, $1$, and $4$, and its highest exponent is $3$.

## Degree of a polynomial

The **degree** of a polynomial is the highest exponent of the variable whose coefficient is not zero.

For example:

$$
f(x)=3x^4-2x^2+7
$$

has degree $4$.

The coefficient of the term with the highest degree is called the **leading coefficient**. In this example, the leading coefficient is $3$.

## Polynomial functions by degree

Polynomial functions can be classified according to their degree.

### Constant functions

A non-zero constant function has degree $0$:

$$
f(x)=a
$$

where $a$ is a real number.

For example:

$$
f(x)=4
$$

Its graph is a horizontal line.

### Linear functions

A polynomial function of degree $1$ has the form:

$$
f(x)=ax+b
$$

where $a$ and $b$ are real numbers and $a\neq0$.

For example:

$$
f(x)=2x+1
$$

Its graph is a straight line.

### Quadratic functions

A polynomial function of degree $2$ has the form:

$$
f(x)=ax^2+bx+c
$$

where $a\neq0$.

For example:

$$
f(x)=x^2-4x+3
$$

Its graph is a parabola.

:::function-graph{expression="x^2-4*x+3" restriction="-2<=x<=6"}
:::

### Cubic functions

A polynomial function of degree $3$ has the form:

$$
f(x)=ax^3+bx^2+cx+d
$$

where $a\neq0$.

For example:

$$
f(x)=x^3-2x+1
$$

is a cubic polynomial function.

:::function-graph{expression="x^3-2*x+1" restriction="-3<=x<=3"}
:::

## Terms of a polynomial

A polynomial is made up of **terms**.

For example:

$$
f(x)=4x^3-2x^2+7x-5
$$

has four terms:

$$
4x^3,\qquad -2x^2,\qquad 7x,\qquad -5
$$

The term that does not contain $x$ is called the **constant term**.

In this example, the constant term is $-5$.

## Coefficients

The number that multiplies a power of $x$ is its **coefficient**.

For example:

$$
f(x)=3x^4-7x^2+x+6
$$

The coefficients are:

- coefficient of $x^4$: $3$
- coefficient of $x^3$: $0$
- coefficient of $x^2$: $-7$
- coefficient of $x$: $1$
- constant term: $6$

Although $x^3$ does not appear explicitly, its coefficient is $0$.

Therefore, we can also write:

$$
f(x)=3x^4+0x^3-7x^2+x+6
$$

## Evaluating a polynomial function

Evaluating a function means calculating its value for a particular input.

Consider:

$$
f(x)=2x^2+3x-1
$$

We want to calculate $f(2)$.

We replace $x$ with $2$:

$$
f(2)=2(2)^2+3(2)-1
$$

Then:

$$
f(2)=2\cdot4+6-1
$$

Therefore:

$$
f(2)=13
$$

This means that the point $(2,13)$ belongs to the graph of the function.

## Zeros of a polynomial function

A **zero** or **root** of a function is a value of $x$ for which the function has value $0$.

The symbol $=$ means that two expressions have the same value.

Therefore, we look for the values of $x$ that satisfy:

$$
f(x)=0
$$

For example:

$$
f(x)=x^2-5x+6
$$

We solve:

$$
x^2-5x+6=0
$$

We can factor the polynomial:

$$
(x-2)(x-3)=0
$$

Therefore:

$$
x=2
$$

or

$$
x=3
$$

The zeros of the function are $2$ and $3$.

## Factoring a polynomial

**Factoring** means expressing a polynomial as a product of simpler factors.

For example:

$$
x^2-5x+6=(x-2)(x-3)
$$

Both expressions represent the same polynomial.

Factoring is particularly useful for finding the zeros of a polynomial function.

## Multiplicity of a root

A root can occur more than once in a factorization.

For example:

$$
f(x)=(x-2)^2
$$

The expression $(x-2)^2$ means:

$$
f(x)=(x-2)(x-2)
$$

Therefore, $x=2$ is a root with **multiplicity $2$**.

Similarly:

$$
f(x)=(x+1)^3
$$

has the root $x=-1$ with multiplicity $3$.

The multiplicity of a root affects how the graph behaves near that root.

## End behavior of a polynomial function

The degree and leading coefficient help determine the behavior of the graph when $x$ becomes very large in magnitude.

For example:

$$
f(x)=x^2
$$

has even degree and a positive leading coefficient. Its values become positive when $x$ moves far from zero in either direction.

By contrast:

$$
f(x)=x^3
$$

has odd degree and a positive leading coefficient. Its values become negative for large negative $x$ and positive for large positive $x$.

The end behavior depends mainly on the degree and the sign of the leading coefficient.

## Adding and subtracting polynomials

To add or subtract polynomials, we combine **like terms**, which are terms containing the same power of $x$.

For example:

$$
(3x^2+2x-1)+(x^2-5x+4)
$$

We group like terms:

$$
(3x^2+x^2)+(2x-5x)+(-1+4)
$$

Therefore:

$$
4x^2-3x+3
$$

## Multiplying polynomials

To multiply polynomials, we use the **distributive property**.

For example:

$$
(x+2)(x+3)
$$

Multiplying each term gives:

$$
x\cdot x+x\cdot3+2\cdot x+2\cdot3
$$

Therefore:

$$
x^2+3x+2x+6
$$

and after combining like terms:

$$
x^2+5x+6
$$

Thus:

$$
(x+2)(x+3)=x^2+5x+6
$$

## Dividing polynomials

Polynomials can also be divided by other polynomials.

For example:

$$
\frac{x^2-5x+6}{x-2}
$$

Since:

$$
x^2-5x+6=(x-2)(x-3)
$$

we obtain:

$$
\frac{(x-2)(x-3)}{x-2}=x-3
$$

provided that $x\neq2$.

The symbol $\neq$ means **not equal to**.

Therefore:

$$
\frac{x^2-5x+6}{x-2}=x-3,
\qquad x\neq2
$$

## Graphical representation

A polynomial function can be represented by a graph in the coordinate plane.

Each value of $x$ produces a value $f(x)$ and therefore a point:

$$
(x,f(x))
$$

The graph consists of all points that satisfy this relationship.

For example, consider:

$$
f(x)=x^2
$$

Some values are:

$$
f(-2)=4,\qquad f(-1)=1,\qquad f(0)=0
$$

$$
f(1)=1,\qquad f(2)=4
$$

The corresponding points are:

$$
(-2,4),\quad(-1,1),\quad(0,0),\quad(1,1),\quad(2,4)
$$

These points belong to the parabola representing the function.

:::function-graph{expression="x^2" restriction="-3<=x<=3"}
:::

## Degree and number of roots

A polynomial function of degree $n$ can have at most $n$ distinct real roots.

For example, a quadratic function has degree $2$ and can have:

- no real roots;
- one real root;
- two distinct real roots.

A cubic function has degree $3$ and can have up to three distinct real roots.

This does not mean that a polynomial of degree $n$ necessarily has $n$ real roots.

For example:

$$
f(x)=x^2+1
$$

has degree $2$, but it has no real roots because:

$$
x^2+1>0
$$

for every real number $x$.

## Fundamental properties

Polynomial functions have several important properties:

- they are defined for every real number;
- they are continuous for every real number;
- their degree determines part of their overall behavior;
- their roots correspond to points where the graph intersects the $x$-axis;
- the leading coefficient, together with the degree, determines the end behavior of the graph;
- the same polynomial can be written in different equivalent forms, such as expanded or factored form.

For example, the expanded form:

$$
x^2-5x+6
$$

and the factored form:

$$
(x-2)(x-3)
$$

represent the same polynomial.
