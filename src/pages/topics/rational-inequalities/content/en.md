# Rational Inequalities

A **rational inequality** is an inequality containing a rational expression, that is, a quotient of polynomials.

For example:

$$
\frac{x-2}{x+1}>0
$$

The goal is to determine all values of $x$ that make the inequality true.

Unlike a rational equation, it is not enough to find the values that make the expression equal to zero. We must study the **sign of the expression over different intervals**.

---

## 1. Rational expressions

A rational expression has the form:

$$
\frac{P(x)}{Q(x)}
$$

where $P(x)$ and $Q(x)$ are polynomials and:

$$
Q(x)\neq0
$$

For example:

$$
\frac{x+2}{x-3}
$$

is a rational expression.

The value $x=3$ is not in the domain because it makes the denominator equal to zero.

---

## 2. What is a rational inequality?

A rational inequality compares a rational expression with a number, usually $0$.

Examples:

$$
\frac{x-1}{x+2}>0
$$

$$
\frac{x+3}{x-4}\leq0
$$

$$
\frac{x^2-1}{x+2}\geq0
$$

We can also have inequalities in which both sides contain rational expressions.

For example:

$$
\frac{1}{x-1}>\frac{2}{x+3}
$$

In these cases, it is usually convenient to move all terms to the same side.

---

## 3. Domain restrictions

The first step is to determine where the expression is defined.

Consider:

$$
\frac{x+1}{x-4}>0
$$

The denominator cannot be zero:

$$
x-4\neq0
$$

Therefore:

$$
x\neq4
$$

The point $x=4$ is a critical point and can never belong to the solution.

---

## 4. Critical points

Critical points are the values that can change the sign of the expression.

For an expression:

$$
\frac{P(x)}{Q(x)}
$$

we must find:

1. The zeros of the numerator.
2. The zeros of the denominator.

For example:

$$
\frac{(x-2)(x+3)}{x-1}
$$

The critical points are:

$$
x=-3,\qquad x=1,\qquad x=2
$$

The point $x=1$ comes from the denominator and therefore can never belong to the domain.

---

## 5. Why are critical points important?

The sign of a rational expression can only change when crossing a zero of the numerator or denominator.

For example:

$$
\frac{x-2}{x+1}
$$

has the critical points:

$$
x=-1,\qquad x=2
$$

These points divide the real line into three intervals:

$$
(-\infty,-1)
$$

$$
(-1,2)
$$

$$
(2,\infty)
$$

Within each interval, the expression has a constant sign.

---

## 6. Sign chart

The main tool for solving rational inequalities is the **sign chart**.

Consider:

$$
\frac{x-2}{x+1}>0
$$

The critical points are:

$$
x=-1,\qquad x=2
$$

Divide the real line:

$$
(-\infty,-1),\qquad(-1,2),\qquad(2,\infty)
$$

We can study the sign of each factor.

| Interval       | $x-2$ | $x+1$ | Quotient |
| -------------- | ----: | ----: | -------: |
| $(-\infty,-1)$ |   $-$ |   $-$ |      $+$ |
| $(-1,2)$       |   $-$ |   $+$ |      $-$ |
| $(2,\infty)$   |   $+$ |   $+$ |      $+$ |

Since we want:

$$
\frac{x-2}{x+1}>0
$$

we select the intervals where the quotient is positive:

$$
\boxed{(-\infty,-1)\cup(2,\infty)}
$$

The endpoints are not included because the inequality is strict.

Also, $x=-1$ is not in the domain.

---

## 7. Strict inequality

If we have:

$$
\frac{x-2}{x+1}>0
$$

the values where the expression is exactly zero are also excluded from the solution.

In this case:

$$
x=2
$$

makes the numerator equal to zero.

Since the inequality is $>0$, we must exclude $2$.

Therefore:

$$
\boxed{(-\infty,-1)\cup(2,\infty)}
$$

---

## 8. Non-strict inequality

If we have:

$$
\frac{x-2}{x+1}\geq0
$$

we can now include the zero of the numerator:

$$
x=2
$$

But we still cannot include $x=-1$, because the denominator would be zero.

Therefore:

$$
\boxed{(-\infty,-1)\cup[2,\infty)}
$$

The difference between $>$ and $\geq$ is important.

---

## 9. Zeros of the numerator and denominator

It is essential to distinguish between the two types of critical points.

### Zero of the numerator

If:

$$
P(a)=0
$$

the expression can equal $0$, provided that the denominator is not zero.

Therefore, the point can be included when the inequality allows equality.

### Zero of the denominator

If:

$$
Q(a)=0
$$

the expression is undefined.

Therefore:

$$
a
$$

can never belong to the solution.

---

## 10. Example with two factors

Solve:

$$
\frac{(x-1)(x+3)}{x-2}>0
$$

The critical points are:

$$
x=-3,\qquad x=1,\qquad x=2
$$

The intervals are:

$$
(-\infty,-3)
$$

$$
(-3,1)
$$

$$
(1,2)
$$

$$
(2,\infty)
$$

Analyze the signs:

| Interval       | $x+3$ | $x-1$ | $x-2$ | Expression |
| -------------- | ----: | ----: | ----: | ---------: |
| $(-\infty,-3)$ |   $-$ |   $-$ |   $-$ |        $-$ |
| $(-3,1)$       |   $+$ |   $-$ |   $-$ |        $+$ |
| $(1,2)$        |   $+$ |   $+$ |   $-$ |        $-$ |
| $(2,\infty)$   |   $+$ |   $+$ |   $+$ |        $+$ |

We want the positive intervals:

$$
\boxed{(-3,1)\cup(2,\infty)}
$$

---

## 11. Solving a rational inequality first

Consider:

$$
\frac{1}{x-1}>\frac{2}{x+3}
$$

Move everything to the same side:

$$
\frac{1}{x-1}-\frac{2}{x+3}>0
$$

Find a common denominator:

$$
\frac{x+3-2(x-1)}{(x-1)(x+3)}>0
$$

Simplify the numerator:

$$
x+3-2x+2=5-x
$$

Therefore:

$$
\frac{5-x}{(x-1)(x+3)}>0
$$

The critical points are:

$$
x=-3,\qquad x=1,\qquad x=5
$$

The sign chart gives:

$$
\boxed{(-3,1)\cup(5,\infty)}
$$

---

## 12. Rational inequalities with factored polynomials

It is useful to factor both the numerator and denominator.

For example:

$$
\frac{x^2-4}{x^2-x-6}\leq0
$$

Factor:

$$
\frac{(x-2)(x+2)}{(x-3)(x+2)}\leq0
$$

Although we could simplify algebraically:

$$
\frac{x-2}{x-3}\leq0
$$

we must remember that the original expression is undefined at:

$$
x=-2
$$

Therefore, the original restriction must be preserved.

The solution of the simplified expression is:

$$
[2,3)
$$

In this case, $-2$ does not affect the solution interval, but in other problems it can.

---

## 13. Do not cancel restrictions

This is a common mistake.

Consider:

$$
\frac{(x-2)(x+1)}{x+1}>0
$$

For $x\neq-1$ we can simplify:

$$
x-2>0
$$

Therefore:

$$
x>2
$$

The solution is:

$$
\boxed{(2,\infty)}
$$

However, the restriction:

$$
x\neq-1
$$

still exists.

Even though $-1$ does not end up belonging to the solution interval, we must never forget the restrictions of the original expression.

---

## 14. Multiplying by the denominator

In equations, we can multiply by a denominator without changing the type of equality.

In a rational inequality, this requires great care.

For example:

$$
\frac{1}{x}>0
$$

We cannot simply multiply by $x$ and write:

$$
1>0
$$

because we do not know whether $x$ is positive or negative.

If $x>0$, multiplying by $x$ preserves the inequality:

$$
1>0
$$

But if $x<0$, the inequality reverses:

$$
1<0
$$

For this reason, it is usually safer to use a **sign chart** when solving rational inequalities.

---

## 15. Sign rule

To determine the sign of a product or quotient:

- An even number of negative factors produces a positive result.
- An odd number of negative factors produces a negative result.

For example:

$$
(-)\cdot(-)\cdot(+)=+
$$

while:

$$
(-)\cdot(+)\cdot(+) = -
$$

This rule allows us to construct sign charts quickly.

---

## 16. Multiplicity of roots

The multiplicity of a factor determines whether the sign changes when crossing a root.

Consider:

$$
(x-2)
$$

The factor has multiplicity $1$, so its sign changes when passing through $x=2$.

On the other hand:

$$
(x-2)^2
$$

has multiplicity $2$.

Its sign is always non-negative and does not change when crossing $x=2$.

In general:

- **odd multiplicity** → the sign changes;
- **even multiplicity** → the sign does not change.

---

## 17. Example with a double root

Solve:

$$
\frac{(x-2)^2}{x+1}>0
$$

The critical points are:

$$
x=-1,\qquad x=2
$$

The factor $(x-2)^2$ is always positive except at $x=2$.

Therefore, the sign mainly depends on $x+1$.

The expression is positive when:

$$
x>-1
$$

except at $x=2$, where it equals zero.

Therefore:

$$
\boxed{(-1,2)\cup(2,\infty)}
$$

---

## 18. Rational inequalities with zero included

Suppose we want to solve:

$$
\frac{(x-1)(x+2)}{x-3}\geq0
$$

We must include the zeros of the numerator:

$$
x=1,\qquad x=-2
$$

but exclude the zero of the denominator:

$$
x=3
$$

The sign chart gives:

$$
\boxed{[-2,1]\cup(3,\infty)}
$$

---

## 19. Representing the solution on the real line

Intervals can be represented using:

- open circle $\rightarrow$ endpoint not included;
- closed circle $\rightarrow$ endpoint included.

For example:

$$
[-2,3)
$$

includes $-2$ but does not include $3$.

In a rational inequality, zeros of the denominator are always represented as excluded points.

---

## 20. Interval notation

Some common solution intervals are:

$$
(-\infty,a)
$$

$$
(a,\infty)
$$

$$
[a,b]
$$

$$
(a,b)
$$

$$
[a,b)
$$

$$
(a,b]
$$

Infinity is never included:

$$
(-\infty,a]
$$

is correct, but:

$$
[-\infty,a]
$$

is not.

---

## 21. General procedure

To solve a rational inequality:

1. Move all terms to the same side.
2. Simplify the expression.
3. Factor the numerator and denominator.
4. Determine the domain restrictions.
5. Find the zeros of the numerator.
6. Find the zeros of the denominator.
7. Order all critical points.
8. Divide the real line into intervals.
9. Determine the sign on each interval.
10. Select the intervals that satisfy the inequality.
11. Include zeros of the numerator when the inequality is $\geq$ or $\leq$.
12. Always exclude zeros of the denominator.
13. Write the solution using interval notation.

---

## 22. Complete example

Solve:

$$
\frac{x^2-1}{x^2-4}>0
$$

### Step 1: Factor

$$
\frac{(x-1)(x+1)}{(x-2)(x+2)}>0
$$

### Step 2: Find the critical points

Zeros of the numerator:

$$
x=-1,\qquad x=1
$$

Zeros of the denominator:

$$
x=-2,\qquad x=2
$$

The ordered critical points are:

$$
-2,\quad -1,\quad 1,\quad 2
$$

### Step 3: Analyze the signs

| Interval       | Sign |
| -------------- | ---: |
| $(-\infty,-2)$ |  $+$ |
| $(-2,-1)$      |  $-$ |
| $(-1,1)$       |  $+$ |
| $(1,2)$        |  $-$ |
| $(2,\infty)$   |  $+$ |

We want positive values:

$$
(-\infty,-2)
$$

$$
(-1,1)
$$

$$
(2,\infty)
$$

Therefore:

$$
\boxed{
(-\infty,-2)\cup(-1,1)\cup(2,\infty)
}
$$

---

## 23. Common mistakes

### Multiplying by the denominator without knowing its sign

This can incorrectly reverse the inequality.

### Including a zero of the denominator

If:

$$
Q(a)=0
$$

then $a$ can never belong to the solution.

### Forgetting zeros of the numerator

If the inequality allows equality, zeros of the numerator can be included.

### Canceling factors and forgetting restrictions

Restrictions belong to the original expression and must be preserved.

### Not factoring completely

An incomplete factorization can hide important critical points.

### Testing only one point

A test point determines the sign of an interval, but we must first find all critical points.

---

## 24. Summary

The fundamental ideas are:

| Concept                     | Rule                               |
| --------------------------- | ---------------------------------- |
| Zero of numerator           | May belong to the solution         |
| Zero of denominator         | Never belongs to the solution      |
| Inequality $>$ or $<$       | Does not include zeros             |
| Inequality $\geq$ or $\leq$ | May include zeros of the numerator |
| Odd multiplicity            | Sign changes                       |
| Even multiplicity           | Sign does not change               |
| Sign chart                  | Determines the sign on intervals   |
| Restrictions                | Must always be preserved           |

## 25. Fundamental idea

A rational inequality cannot be solved by treating the denominator as if it were always positive.

The central idea is to divide the real line using the points where the numerator or denominator becomes zero and study the sign on each interval:

$$
\boxed{
\text{factor}
\rightarrow
\text{critical points}
\rightarrow
\text{sign chart}
\rightarrow
\text{solution intervals}
}
$$

The most important rule is:

$$
\boxed{
\text{zero of the denominator}
\Rightarrow
\text{always excluded}
}
$$
