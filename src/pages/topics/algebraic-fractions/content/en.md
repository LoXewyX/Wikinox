# Algebraic fractions

**Algebraic fractions** are expressions that contain polynomials in the numerator, denominator, or both.

For example:

$$
\frac{x+2}{x-3}
$$

or:

$$
\frac{x^2-4}{x^2-9}
$$

Algebraic fractions behave similarly to numerical fractions, but they have one fundamental property: **the denominator cannot be zero**.

---

## 1. What is an algebraic fraction?

An algebraic fraction has the form:

$$
\frac{P(x)}{Q(x)}
$$

where $P(x)$ and $Q(x)$ are algebraic expressions and:

$$
Q(x)\neq 0
$$

For example:

$$
\frac{2x+1}{x-4}
$$

is an algebraic fraction.

Its domain excludes:

$$
x=4
$$

because this value makes the denominator zero.

---

## 2. Numerator and denominator

In:

$$
\frac{x^2-1}{x+3}
$$

we have:

- Numerator: $x^2-1$
- Denominator: $x+3$

The denominator determines the domain restrictions.

$$
x+3\neq 0
$$

Therefore:

$$
x\neq -3
$$

---

## 3. Domain restrictions

Before simplifying an algebraic fraction, it is useful to determine the values that make the denominator zero.

For example:

$$
\frac{x+1}{x^2-4}
$$

Factor:

$$
x^2-4=(x-2)(x+2)
$$

Therefore:

$$
(x-2)(x+2)\neq 0
$$

and:

$$
x\neq 2,\qquad x\neq -2
$$

The domain is:

$$
\boxed{\mathbb{R}\setminus\{-2,2\}}
$$

---

## 4. Simplifying algebraic fractions

Simplifying an algebraic fraction means writing it in an equivalent, simpler form.

We can do this by factoring the numerator and denominator and cancelling common factors.

For example:

$$
\frac{x^2-4}{x^2-2x}
$$

Factor:

$$
\frac{(x-2)(x+2)}{x(x-2)}
$$

Cancel the common factor $x-2$:

$$
\frac{x+2}{x}
$$

But we must preserve the original restrictions:

$$
x\neq 0,\qquad x\neq 2
$$

Therefore:

$$
\boxed{\frac{x^2-4}{x^2-2x}=\frac{x+2}{x}}
$$

with:

$$
x\neq 0,2
$$

---

## 5. Cancel factors, not terms

This is a fundamental rule.

We can cancel factors:

$$
\frac{(x-2)(x+3)}{x-2}=x+3
$$

but we cannot cancel individual terms:

$$
\frac{x+2}{x}\neq 2
$$

We also cannot write:

$$
\frac{x+2}{x+3}= \frac{2}{3}
$$

because $x+2$ and $x+3$ are sums, not common factors.

---

## 6. Common factors

One of the most important techniques is extracting common factors.

For example:

$$
\frac{6x^2+9x}{3x}
$$

Factor the numerator:

$$
\frac{3x(2x+3)}{3x}
$$

Cancel:

$$
2x+3
$$

The simplified expression is:

$$
\boxed{2x+3}
$$

with the original restriction:

$$
x\neq 0
$$

---

## 7. Difference of squares

Recall the identity:

$$
a^2-b^2=(a-b)(a+b)
$$

For example:

$$
\frac{x^2-9}{x-3}
$$

Factor:

$$
\frac{(x-3)(x+3)}{x-3}
$$

Simplify:

$$
x+3
$$

But:

$$
x\neq 3
$$

Therefore:

$$
\boxed{\frac{x^2-9}{x-3}=x+3,\qquad x\neq 3}
$$

---

## 8. Quadratic trinomials

We can also simplify fractions by factoring quadratic trinomials.

For example:

$$
\frac{x^2+5x+6}{x^2+3x+2}
$$

Factor:

$$
x^2+5x+6=(x+2)(x+3)
$$

and:

$$
x^2+3x+2=(x+1)(x+2)
$$

Therefore:

$$
\frac{(x+2)(x+3)}{(x+1)(x+2)}
$$

Cancel:

$$
\frac{x+3}{x+1}
$$

The original restrictions are:

$$
x\neq -1,\qquad x\neq -2
$$

---

## 9. Multiplying algebraic fractions

To multiply algebraic fractions:

1. Factor when possible.
2. Cancel common factors.
3. Multiply the numerators.
4. Multiply the denominators.
5. State the domain restrictions.

For example:

$$
\frac{x^2-4}{x+1}\cdot\frac{x+1}{x+2}
$$

Factor:

$$
\frac{(x-2)(x+2)}{x+1}\cdot\frac{x+1}{x+2}
$$

Cancel:

$$
x-2
$$

Therefore:

$$
\boxed{x-2}
$$

The restrictions are:

$$
x\neq -1,\qquad x\neq -2
$$

---

## 10. Dividing algebraic fractions

Dividing by a fraction is equivalent to multiplying by its reciprocal.

For example:

$$
\frac{x^2-4}{x+1}\div\frac{x-2}{x+3}
$$

Convert the division into multiplication:

$$
\frac{x^2-4}{x+1}\cdot\frac{x+3}{x-2}
$$

Factor:

$$
\frac{(x-2)(x+2)}{x+1}\cdot\frac{x+3}{x-2}
$$

Cancel:

$$
\frac{(x+2)(x+3)}{x+1}
$$

We must consider all restrictions:

$$
x\neq -1,\qquad x\neq -3,\qquad x\neq 2
$$

Therefore:

$$
\boxed{\frac{(x+2)(x+3)}{x+1}}
$$

with:

$$
x\neq -1,-3,2
$$

---

## 11. Adding and subtracting algebraic fractions

To add or subtract algebraic fractions, we need a **common denominator**.

For example:

$$
\frac{1}{x}+\frac{2}{x+1}
$$

The common denominator is:

$$
x(x+1)
$$

Therefore:

$$
\frac{x+1}{x(x+1)}
+
\frac{2x}{x(x+1)}
$$

Add the numerators:

$$
\frac{x+1+2x}{x(x+1)}
$$

$$
\frac{3x+1}{x(x+1)}
$$

Therefore:

$$
\boxed{\frac{3x+1}{x(x+1)}}
$$

with:

$$
x\neq 0,-1
$$

---

## 12. Least common multiple of polynomials

When denominators are more complicated, we can use the least common multiple.

For example:

$$
\frac{1}{x^2-4}+\frac{1}{x-2}
$$

Factor:

$$
x^2-4=(x-2)(x+2)
$$

The least common denominator is:

$$
(x-2)(x+2)
$$

Therefore:

$$
\frac{1}{(x-2)(x+2)}
+
\frac{x+2}{(x-2)(x+2)}
$$

Add:

$$
\frac{x+3}{(x-2)(x+2)}
$$

The restrictions are:

$$
x\neq 2,\qquad x\neq -2
$$

---

## 13. Denominators with common factors

Consider:

$$
\frac{2}{x^2-x}+\frac{1}{x}
$$

Factor:

$$
x^2-x=x(x-1)
$$

The least common denominator is:

$$
x(x-1)
$$

Therefore:

$$
\frac{2}{x(x-1)}
+
\frac{x-1}{x(x-1)}
$$

Add:

$$
\frac{2+x-1}{x(x-1)}
$$

$$
\boxed{\frac{x+1}{x(x-1)}}
$$

with:

$$
x\neq 0,1
$$

---

## 14. Complex algebraic fractions

A complex algebraic fraction contains fractions in its numerator or denominator.

For example:

$$
\frac{\frac{1}{x}+\frac{1}{y}}{\frac{1}{x}}
$$

First simplify the numerator:

$$
\frac{1}{x}+\frac{1}{y}
=
\frac{x+y}{xy}
$$

Then:

$$
\frac{\frac{x+y}{xy}}{\frac{1}{x}}
$$

Divide by $\frac{1}{x}$:

$$
\frac{x+y}{xy}\cdot x
$$

Simplify:

$$
\boxed{\frac{x+y}{y}}
$$

---

## 15. Clearing denominators

In an expression or equation with several fractions, we can multiply the entire expression by the least common denominator.

For example:

$$
\frac{x}{2}+\frac{x}{3}=5
$$

The least common denominator is $6$.

Multiply the entire equation by $6$:

$$
3x+2x=30
$$

$$
5x=30
$$

$$
\boxed{x=6}
$$

This procedure is especially useful when solving rational equations.

---

## 16. Equations with algebraic fractions

Consider:

$$
\frac{x+1}{x-2}=3
$$

First establish the restriction:

$$
x\neq 2
$$

Multiply by $x-2$:

$$
x+1=3(x-2)
$$

Expand:

$$
x+1=3x-6
$$

$$
7=2x
$$

$$
x=\frac{7}{2}
$$

Since:

$$
\frac{7}{2}\neq 2
$$

the solution is valid:

$$
\boxed{x=\frac{7}{2}}
$$

---

## 17. Algebraic identities

Two rational expressions can be equivalent at every point in their common domain.

For example:

$$
\frac{x^2-4}{x-2}=x+2
$$

provided that:

$$
x\neq 2
$$

We should not say that both expressions are equal at $x=2$, because the original expression is undefined there.

---

## 18. Holes in the graph

Consider:

$$
f(x)=\frac{x^2-4}{x-2}
$$

Simplify:

$$
f(x)=x+2
$$

but:

$$
x\neq 2
$$

Therefore, the graph coincides with the line:

$$
y=x+2
$$

except at the point corresponding to:

$$
x=2
$$

There is a **hole** at that point.

Its coordinate would be:

$$
(2,4)
$$

but this point does not belong to the original function.

---

## 19. Algebraic fractions and absolute value

Algebraic fractions can also appear inside absolute values.

For example:

$$
\left|\frac{x-1}{x+2}\right|
$$

The domain restriction is:

$$
x\neq -2
$$

To study its sign, we can analyze:

$$
\frac{x-1}{x+2}
$$

The critical points are:

$$
x=1,\qquad x=-2
$$

---

## 20. Algebraic fractions with powers

Power properties can also be used to simplify algebraic fractions.

For example:

$$
\frac{x^5}{x^2}=x^3
$$

provided that:

$$
x\neq 0
$$

In general:

$$
\frac{x^m}{x^n}=x^{m-n}
$$

for $x\neq 0$.

---

## 21. Negative exponents

A negative exponent represents a reciprocal:

$$
x^{-n}=\frac{1}{x^n}
$$

For example:

$$
x^{-2}=\frac{1}{x^2}
$$

Therefore:

$$
\frac{1}{x^{-2}}=x^2
$$

provided that $x\neq 0$.

---

## 22. Algebraic fractions with radicals

Radicals can also appear in algebraic fractions.

For example:

$$
\frac{\sqrt{x}}{x}
$$

Since:

$$
x=\sqrt{x}\sqrt{x}
$$

for $x>0$:

$$
\frac{\sqrt{x}}{x}
=
\frac{\sqrt{x}}{\sqrt{x}\sqrt{x}}
=
\frac{1}{\sqrt{x}}
$$

The original expression requires:

$$
x>0
$$

because $\sqrt{x}$ must be defined and $x$ cannot be zero.

---

## 23. Rationalization

Sometimes we want to remove a radical from the denominator.

For example:

$$
\frac{1}{\sqrt{x}}
$$

Multiply by $\sqrt{x}$:

$$
\frac{1}{\sqrt{x}}\cdot\frac{\sqrt{x}}{\sqrt{x}}
$$

We obtain:

$$
\frac{\sqrt{x}}{x}
$$

Therefore:

$$
\boxed{\frac{1}{\sqrt{x}}=\frac{\sqrt{x}}{x}}
$$

for $x>0$.

---

## 24. Rationalization using conjugates

If the denominator contains a sum or difference of radicals, we use the conjugate.

For example:

$$
\frac{1}{\sqrt{x}+1}
$$

Multiply by:

$$
\frac{\sqrt{x}-1}{\sqrt{x}-1}
$$

Then:

$$
\frac{\sqrt{x}-1}{(\sqrt{x}+1)(\sqrt{x}-1)}
$$

Apply the difference of squares:

$$
\frac{\sqrt{x}-1}{x-1}
$$

for:

$$
x\geq 0,\qquad x\neq 1
$$

---

## 25. General procedure for simplifying

To simplify an algebraic fraction:

1. Determine the denominator restrictions.
2. Factor the numerator and denominator.
3. Identify common factors.
4. Cancel only factors.
5. Preserve the original restrictions.
6. Check that the resulting expression is fully simplified.

---

## 26. Procedure for multiplication

To multiply:

$$
\frac{P}{Q}\cdot\frac{R}{S}
$$

we can follow these steps:

1. Factor all polynomials.
2. Identify common factors.
3. Cancel before multiplying.
4. Multiply the remaining factors.
5. State the restrictions.

---

## 27. Procedure for division

To divide:

$$
\frac{P}{Q}\div\frac{R}{S}
$$

1. Keep the first fraction.
2. Invert the second fraction.
3. Change division into multiplication.
4. Factor.
5. Simplify.
6. Check the restrictions.

In addition, the second fraction cannot be equal to zero.

---

## 28. Procedure for addition or subtraction

To add or subtract:

1. Factor the denominators.
2. Find the least common denominator.
3. Rewrite each fraction using that denominator.
4. Perform the operation on the numerators.
5. Simplify the result.
6. Preserve the original restrictions.

---

## 29. Complete example

Simplify:

$$
\frac{x^2-9}{x^2-5x+6}
+
\frac{1}{x-2}
$$

### Step 1: Factor

We have:

$$
x^2-9=(x-3)(x+3)
$$

and:

$$
x^2-5x+6=(x-2)(x-3)
$$

Therefore:

$$
\frac{(x-3)(x+3)}{(x-2)(x-3)}
+
\frac{1}{x-2}
$$

The restrictions are:

$$
x\neq 2,\qquad x\neq 3
$$

### Step 2: Simplify the first fraction

$$
\frac{x+3}{x-2}
+
\frac{1}{x-2}
$$

### Step 3: Add

$$
\frac{x+3+1}{x-2}
$$

$$
\boxed{\frac{x+4}{x-2}}
$$

with:

$$
x\neq 2,3
$$

Even though $x=3$ no longer appears in the final denominator, it remains a restriction because it was excluded from the domain of the original expression.

---

## 30. Common mistakes

### Cancelling terms instead of factors

Incorrect:

$$
\frac{x+2}{x}=2
$$

Terms in a sum cannot be cancelled.

### Forgetting restrictions

From:

$$
\frac{x^2-4}{x-2}=x+2
$$

we must not forget:

$$
x\neq 2
$$

### Multiplying denominators incorrectly

Remember:

$$
\frac{a}{b}\cdot\frac{c}{d}
=
\frac{ac}{bd}
$$

### Dividing without inverting the second fraction

Remember:

$$
\frac{a}{b}\div\frac{c}{d}
=
\frac{a}{b}\cdot\frac{d}{c}
$$

### Cancelling before factoring

Many simplifications only become visible after factoring the polynomials.

---

## 31. Summary

| Operation       | Main idea                                        |
| --------------- | ------------------------------------------------ |
| Simplification  | Factor and cancel factors                        |
| Multiplication  | Multiply numerators and denominators             |
| Division        | Multiply by the reciprocal                       |
| Addition        | Find a common denominator                        |
| Subtraction     | Find a common denominator                        |
| Equations       | Clear denominators while respecting restrictions |
| Rationalization | Remove radicals from the denominator             |
| Domain          | Exclude values that make denominators zero       |

The fundamental rule is:

$$
\boxed{\text{factor}\longrightarrow\text{simplify}\longrightarrow\text{check the domain}}
$$

---

## 32. Fundamental idea

An algebraic fraction is not simply a fraction containing letters.

Its behavior depends on:

$$
\boxed{\text{factors}+\text{restrictions}+\text{operations}}
$$

Factoring allows us to simplify expressions, but domain restrictions belong to the original expression and must be preserved.

Therefore, when working with algebraic fractions, we must always distinguish between:

$$
\boxed{\text{simplified expression}}
$$

and

$$
\boxed{\text{original domain}}
$$
