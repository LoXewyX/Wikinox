# Linear and quadratic inequalities

**Linear and quadratic inequalities** allow us to determine which values of a variable make an algebraic inequality true.

Unlike an equation, an inequality usually does not have a single solution. Its solution is usually an **interval** or a union of intervals.

---

## 1. What is an inequality?

An inequality is a statement involving a variable and a comparison between expressions.

The main symbols are:

- $<$ less than
- $>$ greater than
- $\leq$ less than or equal to
- $\geq$ greater than or equal to

For example:

$$
2x+3>7
$$

Solving this inequality means finding all values of $x$ that make the inequality true.

---

## 2. Linear inequalities

A linear inequality contains the variable with exponent $1$.

For example:

$$
3x-5>7
$$

The goal is to isolate $x$, similarly to solving an equation.

### Example

$$
3x-5>7
$$

Add $5$:

$$
3x>12
$$

Divide by $3$:

$$
x>4
$$

Therefore:

$$
\boxed{x>4}
$$

In interval notation:

$$
(4,\infty)
$$

---

## 3. The fundamental rule when multiplying or dividing by a negative number

This is one of the most important rules for inequalities.

If we multiply or divide an inequality by a negative number, **the direction of the inequality changes**.

For example:

$$
-2x>6
$$

Divide by $-2$:

$$
x<-3
$$

The symbol $>$ becomes $<$.

### Example

$$
-3x+2\leq 11
$$

Subtract $2$:

$$
-3x\leq 9
$$

Divide by $-3$ and reverse the inequality:

$$
x\geq -3
$$

Therefore:

$$
\boxed{x\geq -3}
$$

---

## 4. Representation on the real number line

The solutions of an inequality can be represented on the real number line.

For:

$$
x>2
$$

we use values greater than $2$, without including $2$.

In interval notation:

$$
(2,\infty)
$$

For:

$$
x\geq 2
$$

the value $2$ is included:

$$
[2,\infty)
$$

### Rule

- $<$ or $>$ → open endpoint
- $\leq$ or $\geq$ → closed endpoint

---

## 5. Linear inequalities with several terms

Consider:

$$
4x-7\leq 2x+5
$$

Group the terms containing $x$:

$$
4x-2x\leq 5+7
$$

$$
2x\leq 12
$$

Divide by $2$:

$$
x\leq 6
$$

Solution:

$$
\boxed{x\leq 6}
$$

In interval notation:

$$
(-\infty,6]
$$

---

## 6. Inequalities with parentheses

First expand the parentheses.

For example:

$$
3(x-2)+1>2x+4
$$

Expand:

$$
3x-6+1>2x+4
$$

Simplify:

$$
3x-5>2x+4
$$

Subtract $2x$:

$$
x-5>4
$$

Add $5$:

$$
x>9
$$

Therefore:

$$
\boxed{x>9}
$$

---

## 7. Compound inequalities

We can also have two inequalities that must hold simultaneously.

For example:

$$
2<x+1\leq 5
$$

Subtract $1$ from all three parts:

$$
1<x\leq 4
$$

Therefore:

$$
\boxed{1<x\leq 4}
$$

In interval notation:

$$
(1,4]
$$

---

## 8. Quadratic inequalities

A quadratic inequality contains a second-degree polynomial.

For example:

$$
x^2-5x+6>0
$$

First factor:

$$
(x-2)(x-3)>0
$$

The critical values are:

$$
x=2
$$

and

$$
x=3
$$

These values divide the real number line into three intervals:

$$
(-\infty,2),\qquad (2,3),\qquad (3,\infty)
$$

---

## 9. Sign analysis

To determine where the product is positive or negative, we study the sign of each factor.

| Interval      | $x-2$ | $x-3$ | Product |
| ------------- | ----: | ----: | ------: |
| $(-\infty,2)$ |   $-$ |   $-$ |     $+$ |
| $(2,3)$       |   $+$ |   $-$ |     $-$ |
| $(3,\infty)$  |   $+$ |   $+$ |     $+$ |

Since we want:

$$
(x-2)(x-3)>0
$$

we select the intervals where the product is positive:

$$
\boxed{x<2\quad\text{or}\quad x>3}
$$

In interval notation:

$$
\boxed{(-\infty,2)\cup(3,\infty)}
$$

---

## 10. Why do critical points appear?

Critical points are values where the expression can change sign.

For a factored polynomial:

$$
(x-a)(x-b)
$$

the critical points are:

$$
x=a,\qquad x=b
$$

These values divide the real number line into regions where the sign remains constant.

---

## 11. Quadratic inequality less than zero

Consider:

$$
x^2-5x+6<0
$$

Factor:

$$
(x-2)(x-3)<0
$$

From the previous sign table, we know that the product is negative between the roots.

Therefore:

$$
\boxed{2<x<3}
$$

In interval notation:

$$
\boxed{(2,3)}
$$

---

## 12. When the inequality includes equality

Consider:

$$
x^2-5x+6\geq 0
$$

Factor:

$$
(x-2)(x-3)\geq 0
$$

The product is positive outside the roots and equal to zero at the roots.

Therefore:

$$
\boxed{x\leq 2\quad\text{or}\quad x\geq 3}
$$

In interval notation:

$$
\boxed{(-\infty,2]\cup[3,\infty)}
$$

The endpoints are included because the inequality contains $\geq$.

---

## 13. Test-point method

Another way to solve a quadratic inequality is to choose one point from each interval and test its sign.

For:

$$
(x-2)(x-3)>0
$$

the intervals are:

$$
(-\infty,2),\quad (2,3),\quad (3,\infty)
$$

We can choose:

- $x=0$
- $x=2.5$
- $x=4$

### First interval

$$
(0-2)(0-3)=(-2)(-3)=6>0
$$

Include it.

### Second interval

$$
(2.5-2)(2.5-3)=(0.5)(-0.5)<0
$$

Do not include it.

### Third interval

$$
(4-2)(4-3)=2>0
$$

Include it.

Result:

$$
\boxed{(-\infty,2)\cup(3,\infty)}
$$

---

## 14. Quadratic inequalities with a negative leading coefficient

Consider:

$$
-x^2+4x-3>0
$$

Factor:

$$
-(x^2-4x+3)>0
$$

$$
-(x-1)(x-3)>0
$$

The critical points are $1$ and $3$.

The parabola opens downward, so it is positive between the roots.

Therefore:

$$
\boxed{1<x<3}
$$

---

## 15. Using the parabola

A quadratic inequality can also be interpreted using its associated function:

$$
f(x)=ax^2+bx+c
$$

Solving:

$$
ax^2+bx+c>0
$$

means finding the values of $x$ for which the graph of $f$ is **above the $x$-axis**.

Solving:

$$
ax^2+bx+c<0
$$

means finding where the graph is **below the $x$-axis**.

---

## 16. Example using the graph

Consider:

$$
x^2-4x+3<0
$$

The expression factors as:

$$
(x-1)(x-3)<0
$$

The roots are $1$ and $3$.

The parabola opens upward, so it is below the $x$-axis between the roots.

Therefore:

$$
\boxed{1<x<3}
$$

---

## 17. When there are no real roots

Not every quadratic expression has real roots.

Consider:

$$
x^2+1>0
$$

Since:

$$
x^2\geq 0
$$

we have:

$$
x^2+1\geq 1
$$

Therefore, it is always positive:

$$
\boxed{x\in\mathbb{R}}
$$

On the other hand:

$$
x^2+1<0
$$

has no real solution:

$$
\boxed{\varnothing}
$$

---

## 18. Discriminant

For a quadratic equation:

$$
ax^2+bx+c=0
$$

the discriminant is:

$$
\Delta=b^2-4ac
$$

It determines the number of real roots.

### If $\Delta>0$

There are two distinct real roots.

### If $\Delta=0$

There is one repeated real root.

### If $\Delta<0$

There are no real roots.

This also helps us analyze the sign of a quadratic expression.

---

## 19. A repeated root

Consider:

$$
(x-2)^2\geq 0
$$

A square is always non-negative.

Therefore:

$$
\boxed{x\in\mathbb{R}}
$$

On the other hand:

$$
(x-2)^2<0
$$

has no real solution:

$$
\boxed{\varnothing}
$$

The root $x=2$ does not change the sign because it has even multiplicity.

---

## 20. Quadratic inequalities involving fractions

If the expression contains a fraction, we must first consider the restrictions imposed by the denominator.

For example:

$$
\frac{x^2-4}{x-1}>0
$$

Factor the numerator:

$$
\frac{(x-2)(x+2)}{x-1}>0
$$

The critical points are:

$$
x=-2,\qquad x=1,\qquad x=2
$$

But $x=1$ is not in the domain because it makes the denominator zero.

The intervals are:

$$
(-\infty,-2),\quad (-2,1),\quad (1,2),\quad (2,\infty)
$$

We then analyze the sign on each interval.

This procedure connects quadratic inequalities with **rational inequalities**.

---

## 21. Root multiplicity

The multiplicity of a root determines whether the sign changes when passing through it.

### Odd multiplicity

The sign changes.

For example:

$$
(x-2)
$$

changes sign when passing through $x=2$.

### Even multiplicity

The sign does not change.

For example:

$$
(x-2)^2
$$

is positive on both sides of $2$.

This observation allows us to construct sign tables more quickly.

---

## 22. General procedure for linear inequalities

To solve a linear inequality:

1. Expand parentheses.
2. Combine like terms.
3. Group the variables on one side.
4. Group the constants on the other side.
5. Isolate the variable.
6. If you multiply or divide by a negative number, reverse the inequality.
7. Express the solution as an inequality or interval.

---

## 23. General procedure for quadratic inequalities

To solve a quadratic inequality:

1. Move all terms to the same side.
2. Simplify the expression.
3. Find its roots.
4. Factor when possible.
5. Order the critical points.
6. Divide the real number line into intervals.
7. Determine the sign on each interval.
8. Select the intervals that satisfy the inequality.
9. Include the roots if the inequality contains $\leq$ or $\geq$.
10. Write the solution in interval notation.

---

## 24. Complete example

Solve:

$$
2x^2-x-3\leq 0
$$

### Step 1: Factor

We look for two factors:

$$
2x^2-x-3=(2x-3)(x+1)
$$

Therefore:

$$
(2x-3)(x+1)\leq 0
$$

### Step 2: Find the critical points

Set each factor equal to zero:

$$
2x-3=0
$$

$$
x=\frac{3}{2}
$$

and:

$$
x+1=0
$$

$$
x=-1
$$

### Step 3: Order the points

$$
-1<\frac{3}{2}
$$

The intervals are:

$$
(-\infty,-1),\quad
\left(-1,\frac{3}{2}\right),\quad
\left(\frac{3}{2},\infty\right)
$$

### Step 4: Analyze the sign

| Interval                          | $2x-3$ | $x+1$ | Product |
| --------------------------------- | -----: | ----: | ------: |
| $(-\infty,-1)$                    |    $-$ |   $-$ |     $+$ |
| $\left(-1,\frac{3}{2}\right)$     |    $-$ |   $+$ |     $-$ |
| $\left(\frac{3}{2},\infty\right)$ |    $+$ |   $+$ |     $+$ |

We want:

$$
(2x-3)(x+1)\leq 0
$$

Therefore, we select the interval where the product is negative and the points where it is zero:

$$
\boxed{-1\leq x\leq\frac{3}{2}}
$$

In interval notation:

$$
\boxed{\left[-1,\frac{3}{2}\right]}
$$

---

## 25. Common mistakes

### Forgetting to reverse the inequality when dividing by a negative number

Incorrect:

$$
-2x>4
\Rightarrow x>-2
$$

Correct:

$$
-2x>4
\Rightarrow x<-2
$$

### Including a root in a strict inequality

For:

$$
(x-2)(x-3)>0
$$

we cannot include $2$ or $3$.

The solution is:

$$
(-\infty,2)\cup(3,\infty)
$$

### Always including the roots

Roots are included only when the inequality contains:

$$
\leq
$$

or

$$
\geq
$$

### Solving a quadratic as if it were an equation

Finding the roots is not enough. The roots only divide the real number line into intervals where we must analyze the sign.

### Forgetting the domain

In expressions with denominators, values that make the denominator zero can never belong to the solution.

---

## 26. Summary

| Type                           | Main method                                                             |
| ------------------------------ | ----------------------------------------------------------------------- |
| Linear                         | Isolate the variable                                                    |
| Linear with a negative number  | Reverse the inequality                                                  |
| Quadratic                      | Find roots and analyze signs                                            |
| Factored quadratic             | Sign table                                                              |
| Quadratic with no real roots   | Analyze the sign using the leading coefficient or completing the square |
| Quadratic with a repeated root | The sign does not change at the root                                    |
| Rational                       | Critical points and domain restrictions                                 |

The fundamental ideas are:

$$
\boxed{\text{roots}+\text{signs}+\text{intervals}}
$$

for quadratic inequalities, and

$$
\boxed{\text{isolate}+\text{reverse the sign when necessary}}
$$

for linear inequalities.

---

## 27. Fundamental idea

Solving an inequality means determining **which regions of the real number line make the inequality true**.

For linear inequalities, it is usually enough to isolate the variable.

For quadratic inequalities, the roots divide the real number line into intervals, and the sign of the expression determines which intervals belong to the solution.

Therefore, a quadratic inequality can be understood as a problem of:

$$
\boxed{\text{critical points}\longrightarrow\text{signs}\longrightarrow\text{intervals}}
$$
