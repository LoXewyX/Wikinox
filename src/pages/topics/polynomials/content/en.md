# Polynomials

A **polynomial** is an algebraic expression formed by sums and differences of terms. Each term contains a number called a **coefficient** and, usually, a variable raised to a non-negative integer power.

The variable is commonly represented by $x$.

The symbol $+$ indicates addition and the symbol $-$ indicates subtraction.

A **power** such as $x^n$ represents multiplying $x$ by itself $n$ times. The number $n$ is called the **exponent**.

For example:

$$
3x^2-5x+2
$$

is a polynomial.

## Terms of a polynomial

A **term** is each part of a polynomial separated by the signs $+$ or $-$.

In the polynomial

$$
3x^2-5x+2
$$

there are three terms:

- $3x^2$
- $-5x$
- $2$

The term $2$ does not contain a variable. It is called the **constant term**.

## Coefficients

The **coefficient** is the number that multiplies a variable.

In

$$
3x^2-5x+2
$$

the coefficients are:

- $3$, the coefficient of $x^2$.
- $-5$, the coefficient of $x$.
- $2$, the constant term.

When the coefficient of a term is not explicitly shown, it is understood to be $1$ or $-1$.

For example:

$$
x^3=x^3\cdot1
$$

and

$$
-x^2=-1x^2
$$

## Degree of a polynomial

The **degree** of a polynomial is the greatest exponent of the variable that has a non-zero coefficient.

For example:

$$
4x^3-2x^2+x-7
$$

has degree $3$ because the greatest exponent is $3$.

The degree is commonly represented using an expression such as $\deg(P)$.

The symbol $\deg$ means **degree**.

Therefore:

$$
\deg(P)=3
$$

## Polynomials by degree

Polynomials can be classified according to their degree.

### Constant polynomial

A polynomial of degree $0$ contains no variable.

For example:

$$
P(x)=5
$$

### Linear polynomial

A polynomial of degree $1$ has the form:

$$
P(x)=ax+b
$$

where $a$ and $b$ are numbers and $a\neq0$.

For example:

$$
P(x)=2x+1
$$

### Quadratic polynomial

A polynomial of degree $2$ has the form:

$$
P(x)=ax^2+bx+c
$$

where $a\neq0$.

For example:

$$
P(x)=x^2-4x+3
$$

Its graph allows us to observe some of its properties.

:::polynomial-graph{expression="x^2-4*x+3" min="-2" max="6"}
:::

### Cubic polynomial

A polynomial of degree $3$ has the form:

$$
P(x)=ax^3+bx^2+cx+d
$$

where $a\neq0$.

For example:

$$
P(x)=x^3-3x
$$

:::polynomial-graph{expression="x^3-3*x" min="-3" max="3"}
:::

## Value of a polynomial

To calculate the **value of a polynomial**, we substitute a number for the variable.

The symbol $=$ means that two expressions have the same value.

For example, let:

$$
P(x)=2x^2-3x+1
$$

If we want to calculate $P(2)$, we substitute $x$ with $2$:

$$
P(2)=2(2)^2-3(2)+1
$$

We calculate the powers and operations:

$$
P(2)=8-6+1=3
$$

Therefore:

$$
P(2)=3
$$

## Like terms

Two terms are **like terms** when they contain the same variable raised to the same exponent.

For example:

$$
3x^2
$$

and

$$
-5x^2
$$

are like terms.

However:

$$
3x^2
$$

and

$$
3x
$$

are not like terms because their exponents are different.

Like terms can be combined using addition or subtraction.

For example:

$$
3x^2-5x^2=-2x^2
$$

## Adding polynomials

To add polynomials, we group like terms.

For example:

$$
(3x^2+2x+1)+(x^2-5x+4)
$$

We group like terms:

$$
3x^2+x^2+2x-5x+1+4
$$

and obtain:

$$
4x^2-3x+5
$$

## Subtracting polynomials

To subtract polynomials, we change the sign of each term in the polynomial being subtracted and then group like terms.

For example:

$$
(3x^2+2x+1)-(x^2-5x+4)
$$

becomes:

$$
3x^2+2x+1-x^2+5x-4
$$

Therefore:

$$
2x^2+7x-3
$$

## Multiplying polynomials

To multiply polynomials, each term of one polynomial is multiplied by each term of the other.

For example:

$$
(x+2)(x+3)
$$

We multiply each term:

$$
x\cdot x+x\cdot3+2\cdot x+2\cdot3
$$

We obtain:

$$
x^2+3x+2x+6
$$

and simplify:

$$
x^2+5x+6
$$

## Powers of polynomials

A power indicates that an expression is multiplied by itself.

For example:

$$
(x+2)^2
$$

means:

$$
(x+2)(x+2)
$$

Expanding gives:

$$
x^2+4x+4
$$

Therefore:

$$
(x+2)^2=x^2+4x+4
$$

## Factoring

**Factoring** a polynomial means writing it as a product of simpler factors.

The symbol $\cdot$ represents multiplication.

For example:

$$
x^2-5x+6
$$

can be factored as:

$$
(x-2)(x-3)
$$

because:

$$
(x-2)(x-3)=x^2-5x+6
$$

## Roots or zeros of a polynomial

A **root** or **zero** of a polynomial is a value of $x$ for which the polynomial equals zero.

The number $0$ represents the additive identity.

For example, for:

$$
P(x)=x^2-5x+6
$$

we look for the values that satisfy:

$$
P(x)=0
$$

We factor the polynomial:

$$
(x-2)(x-3)=0
$$

The roots are:

$$
x=2
$$

and

$$
x=3
$$

On the graph, the roots correspond to the points where the curve crosses the $x$-axis.

:::polynomial-graph{expression="x^2-5*x+6" min="-1" max="6"}
:::

## Multiplicity of a root

The **multiplicity** indicates how many times a factor associated with a root appears.

For example:

$$
P(x)=(x-2)^2
$$

has the root $x=2$ with multiplicity $2$.

In contrast:

$$
P(x)=(x-2)^3
$$

has the root $x=2$ with multiplicity $3$.

Multiplicity can affect how the graph behaves around a root.

## Polynomial division

Polynomials can also be divided.

For example:

$$
\frac{x^2-5x+6}{x-2}
$$

gives:

$$
x-3
$$

because:

$$
(x-2)(x-3)=x^2-5x+6
$$

A polynomial division can produce a **quotient** and a **remainder**.

## Remainder theorem

The **remainder theorem** allows us to quickly calculate the remainder when a polynomial $P(x)$ is divided by a polynomial of the form $x-a$.

The symbol $a$ represents a number.

The theorem states that the remainder is:

$$
P(a)
$$

For example, if:

$$
P(x)=x^2+3x+2
$$

and we divide by:

$$
x-1
$$

the remainder is:

$$
P(1)=1^2+3(1)+2=6
$$

## Polynomial behavior

The **behavior** of a polynomial describes how its value changes as $x$ increases or decreases.

The symbol $\rightarrow$ means "approaches" or "tends toward".

The symbol $\infty$ represents infinity.

For example, for:

$$
P(x)=x^2
$$

as the absolute value of $x$ increases, $P(x)$ also increases.

:::polynomial-graph{expression="x^2" min="-5" max="5"}
:::

For an odd-degree polynomial, the behavior at the two ends can be different.

For example:

$$
P(x)=x^3
$$

:::polynomial-graph{expression="x^3" min="-5" max="5"}
:::

## Number of roots

A polynomial of degree $n$ can have at most $n$ distinct real roots.

For example:

- A degree $1$ polynomial can have at most one real root.
- A degree $2$ polynomial can have at most two real roots.
- A degree $3$ polynomial can have at most three real roots.

Having degree $n$ does not necessarily mean that a polynomial has exactly $n$ real roots.

For example:

$$
P(x)=x^2+1
$$

has degree $2$, but it has no real roots because $x^2$ is never negative.

## Identity between polynomials

Two polynomials are identical when they have the same coefficients in corresponding terms.

For example:

$$
P(x)=2x^2+3x+1
$$

and

$$
Q(x)=2x^2+3x+1
$$

are the same polynomial.

We can also write:

$$
P(x)=Q(x)
$$

when both expressions represent the same polynomial.
