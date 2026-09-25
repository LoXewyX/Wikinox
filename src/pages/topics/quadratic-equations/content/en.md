# Quadratic Equations

A **quadratic equation** is a polynomial equation in which the unknown appears with a highest exponent of $2$ and the coefficient of $x^2$ is not zero.

Its general form is:

$$
ax^2+bx+c=0
$$

where:

- $a$, $b$, and $c$ are real numbers;
- $a\neq0$;
- $x$ is the unknown.

For example:

$$
2x^2-5x+3=0
$$

is a quadratic equation because its highest-degree term is $2x^2$.

## Coefficients

In the equation

$$
ax^2+bx+c=0
$$

the values $a$, $b$, and $c$ have specific names:

- $a$ is the **quadratic coefficient**;
- $b$ is the **linear coefficient**;
- $c$ is the **constant term**.

For example, in

$$
3x^2-7x+2=0
$$

we have:

$$
a=3,\qquad b=-7,\qquad c=2
$$

It is important to identify the signs of the coefficients correctly before applying any solving method.

## Solving a quadratic equation

Solving a quadratic equation means finding all values of $x$ that make the equality true.

For example:

$$
x^2-5x+6=0
$$

We can factor:

$$
(x-2)(x-3)=0
$$

A product is zero when at least one of its factors is zero:

$$
x-2=0
$$

or

$$
x-3=0
$$

Therefore:

$$
\boxed{x=2,\quad x=3}
$$

## Quadratic formula

The quadratic formula can solve any real quadratic equation:

$$
ax^2+bx+c=0
$$

provided that:

$$
a\neq0
$$

The solutions are:

$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

The symbol $\pm$ means that we must consider two possibilities:

$$
x_1=\frac{-b+\sqrt{b^2-4ac}}{2a}
$$

and

$$
x_2=\frac{-b-\sqrt{b^2-4ac}}{2a}
$$

## The discriminant

The expression inside the square root is called the **discriminant**:

$$
\Delta=b^2-4ac
$$

The discriminant determines the number of real solutions of a quadratic equation.

### If $\Delta>0$

There are **two distinct real solutions**:

$$
x_1\neq x_2
$$

For example:

$$
x^2-5x+6=0
$$

Here:

$$
a=1,\qquad b=-5,\qquad c=6
$$

Calculate:

$$
\Delta=(-5)^2-4(1)(6)
$$

$$
\Delta=25-24=1
$$

Since:

$$
\Delta>0
$$

there are two real solutions:

$$
x_1=2,\qquad x_2=3
$$

### If $\Delta=0$

There is **one real solution**, which is a repeated root:

$$
x_1=x_2
$$

For example:

$$
x^2-4x+4=0
$$

The discriminant is:

$$
\Delta=(-4)^2-4(1)(4)=0
$$

Therefore:

$$
x=\frac{4}{2}=2
$$

The solution is:

$$
\boxed{x=2}
$$

### If $\Delta<0$

There are no real solutions.

For example:

$$
x^2+4x+5=0
$$

We have:

$$
\Delta=4^2-4(1)(5)
$$

$$
\Delta=16-20=-4
$$

Since:

$$
\Delta<0
$$

the equation has no real solutions.

## Factoring method

When an equation can be factored easily, factoring is often a quick way to solve it.

Consider:

$$
x^2-7x+12=0
$$

We look for two numbers whose product is $12$ and whose sum is $-7$:

$$
-3\cdot-4=12
$$

and

$$
-3+(-4)=-7
$$

Therefore:

$$
x^2-7x+12=(x-3)(x-4)
$$

The equation becomes:

$$
(x-3)(x-4)=0
$$

Therefore:

$$
x=3
\quad\text{or}\quad
x=4
$$

The solutions are:

$$
\boxed{x=3,\quad x=4}
$$

## Incomplete quadratic equations

A quadratic equation is **incomplete** when one of the coefficients $b$ or $c$ is zero.

### Case $b=0$

We have:

$$
ax^2+c=0
$$

For example:

$$
2x^2-18=0
$$

Add $18$:

$$
2x^2=18
$$

Divide by $2$:

$$
x^2=9
$$

Therefore:

$$
x=\pm3
$$

The solutions are:

$$
\boxed{x=3,\quad x=-3}
$$

### Case $c=0$

We have:

$$
ax^2+bx=0
$$

Factor out $x$:

$$
x(ax+b)=0
$$

For example:

$$
x^2-5x=0
$$

Factor:

$$
x(x-5)=0
$$

Therefore:

$$
x=0
\quad\text{or}\quad
x=5
$$

The solutions are:

$$
\boxed{x=0,\quad x=5}
$$

## Vertex form

A quadratic function can be written in **vertex form** as:

$$
f(x)=a(x-h)^2+k
$$

In this form, the point:

$$
(h,k)
$$

is the **vertex** of the parabola.

For example:

$$
f(x)=(x-2)^2-3
$$

has vertex:

$$
(2,-3)
$$

Vertex form makes it easy to identify the vertex and study the behavior of the parabola.

## Graphical representation

A quadratic equation is related to a parabola.

For example:

$$
x^2-5x+6=0
$$

can be associated with the function:

$$
f(x)=x^2-5x+6
$$

Its solutions are the values of $x$ for which:

$$
f(x)=0
$$

Therefore, the solutions correspond to the intersections of the parabola with the $x$-axis.

:::function-graph{expression="x^2-5*x+6" restriction="-2<=x<=7"}
:::

In this case, the parabola intersects the $x$-axis at:

$$
x=2
\quad\text{and}\quad
x=3
$$

Therefore, the equation has two real solutions.

## Relationship between the discriminant and the graph

The discriminant also has a geometric interpretation.

### $\Delta>0$

The parabola intersects the $x$-axis at two points.

$$
\boxed{\text{2 real solutions}}
$$

### $\Delta=0$

The parabola touches the $x$-axis at one point.

$$
\boxed{\text{1 repeated real solution}}
$$

### $\Delta<0$

The parabola does not intersect the $x$-axis.

$$
\boxed{\text{0 real solutions}}
$$

This relationship allows us to interpret the same problem both algebraically and graphically.

## Vertex coordinates

For a quadratic function:

$$
f(x)=ax^2+bx+c
$$

the $x$-coordinate of the vertex is:

$$
x_v=-\frac{b}{2a}
$$

The $y$-coordinate is obtained by substituting this value into the function:

$$
y_v=f(x_v)
$$

Therefore, the vertex is:

$$
V\left(-\frac{b}{2a},f\left(-\frac{b}{2a}\right)\right)
$$

For example:

$$
f(x)=x^2-4x+3
$$

We have:

$$
a=1,\qquad b=-4
$$

Therefore:

$$
x_v=-\frac{-4}{2(1)}=2
$$

Calculate the $y$-coordinate:

$$
y_v=2^2-4(2)+3=-1
$$

Therefore:

$$
\boxed{V=(2,-1)}
$$

## Axis of symmetry

A parabola is symmetric about a vertical line.

This line is called the **axis of symmetry** and has equation:

$$
x=-\frac{b}{2a}
$$

For example, for:

$$
f(x)=x^2-4x+3
$$

the axis of symmetry is:

$$
x=2
$$

## Concavity

The sign of $a$ determines the orientation of the parabola.

If:

$$
a>0
$$

the parabola opens upward.

If:

$$
a<0
$$

the parabola opens downward.

For example:

$$
f(x)=x^2
$$

opens upward, while:

$$
g(x)=-x^2
$$

opens downward.

## Sum and product of the roots

If a quadratic equation has two roots $x_1$ and $x_2$:

$$
ax^2+bx+c=0
$$

then:

$$
x_1+x_2=-\frac{b}{a}
$$

and

$$
x_1x_2=\frac{c}{a}
$$

These relationships are known as **Vieta's formulas**.

For example:

$$
2x^2-6x+4=0
$$

If its roots are $x_1$ and $x_2$, then:

$$
x_1+x_2=\frac{6}{2}=3
$$

and

$$
x_1x_2=\frac{4}{2}=2
$$

The roots are $1$ and $2$, and indeed:

$$
1+2=3
$$

$$
1\cdot2=2
$$

## Checking the solutions

After solving a quadratic equation, it is useful to check the solutions in the original equation.

For example:

$$
x^2-5x+6=0
$$

The solutions are:

$$
x=2,\qquad x=3
$$

Check $x=2$:

$$
2^2-5(2)+6=0
$$

$$
4-10+6=0
$$

Check $x=3$:

$$
3^2-5(3)+6=0
$$

$$
9-15+6=0
$$

Both solutions satisfy the equation.

## Common mistakes

When solving quadratic equations, avoid these mistakes:

- forgetting that $a\neq0$;
- copying the sign of $b$ incorrectly;
- calculating the discriminant incorrectly;
- forgetting the $\pm$ symbol in the quadratic formula;
- dividing only part of the expression by $2a$;
- losing a solution when taking a square root;
- not checking the solutions;
- confusing the vertex with a root.

In particular, remember that:

$$
\sqrt{x^2}=|x|
$$

not simply $x$.

## Summary of solving methods

Depending on the equation, we can use different methods:

1. **Factoring**, when the expression can be factored easily.
2. **Taking square roots**, especially for incomplete quadratic equations.
3. **The quadratic formula**, which works for any quadratic equation.
4. **Completing the square**, which is useful for obtaining vertex form.

The quadratic formula is the general method:

$$
\boxed{x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}}
$$
