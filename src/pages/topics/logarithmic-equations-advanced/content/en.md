# Logarithmic Equations (Advanced)

**Logarithmic equations** are equations in which the unknown appears inside the argument of one or more logarithms.

In this topic, we study techniques for solving more complex logarithmic equations, with particular attention to the **domain**, logarithm properties, and verification of solutions.

## 1. Domain of a logarithmic equation

Before applying any logarithm property, we must determine the values of \(x\) for which all logarithms in the equation are defined.

For a logarithm:

$$
\log_a(f(x))
$$

we must have:

$$
a > 0,\qquad a \neq 1,\qquad f(x) > 0.
$$

Therefore, a solution of a logarithmic equation must necessarily belong to the domain of the equation.

### Example

Consider:

$$
\log(x-2)=2.
$$

The existence condition is:

$$
x-2>0
$$

and therefore:

$$
x>2.
$$

Solving the equation:

$$
x-2=10^2
$$

$$
x=102.
$$

Since \(102>2\), the solution is valid.

## 2. Properties of logarithms

The fundamental properties allow us to transform logarithmic equations.

### Product

$$
\log_a(xy)=\log_a(x)+\log_a(y)
$$

### Quotient

$$
\log_a\left(\frac{x}{y}\right)
=
\log_a(x)-\log_a(y)
$$

### Power

$$
\log_a(x^n)=n\log_a(x)
$$

These properties can only be used when the involved arguments are positive.

## 3. Equations with several logarithms

When an equation contains several logarithms with the same base, we can use the properties above to combine them.

### Example

Solve:

$$
\log(x)+\log(x-3)=1.
$$

First, impose the conditions:

$$
x>0
$$

and

$$
x-3>0.
$$

Therefore:

$$
x>3.
$$

Using the product property:

$$
\log(x(x-3))=1.
$$

Convert to exponential form:

$$
x(x-3)=10.
$$

Expand:

$$
x^2-3x-10=0.
$$

Factor:

$$
(x-5)(x+2)=0.
$$

We obtain:

$$
x=5
$$

or

$$
x=-2.
$$

However, the domain requires \(x>3\), so:

$$
\boxed{x=5}
$$

## 4. Equations with logarithms on both sides

Consider:

$$
\log(x+1)=\log(3x-5).
$$

If both logarithms have the same base, we can equate their arguments:

$$
x+1=3x-5.
$$

Therefore:

$$
6=2x
$$

and:

$$
x=3.
$$

Check the domain:

$$
x+1>0
$$

$$
3x-5>0.
$$

For \(x=3\), both conditions are satisfied.

Therefore:

$$
\boxed{x=3}
$$

## 5. Change of base

When an equation contains logarithms with different bases, it can be useful to use the change-of-base formula:

$$
\log_a(x)=\frac{\log_b(x)}{\log_b(a)}.
$$

For example:

$$
\log_2(x)=\log_3(x+1)
$$

can be transformed into:

$$
\frac{\ln(x)}{\ln(2)}
=
\frac{\ln(x+1)}{\ln(3)}.
$$

In general, these equations may require additional algebraic techniques or numerical methods.

## 6. Logarithmic equations requiring substitution

Some equations can be simplified by introducing a substitution.

For example:

$$
(\log x)^2-5\log x+6=0.
$$

Define:

$$
t=\log x.
$$

The equation becomes:

$$
t^2-5t+6=0.
$$

Factor:

$$
(t-2)(t-3)=0.
$$

Therefore:

$$
t=2
\qquad\text{or}\qquad
t=3.
$$

Return to the original variable:

$$
\log x=2
$$

or

$$
\log x=3.
$$

Thus:

$$
x=100
\qquad\text{or}\qquad
x=1000.
$$

Both solutions satisfy \(x>0\).

## 7. Extraneous solutions

An algebraic transformation can introduce values that do not belong to the original domain.

For this reason, after solving a logarithmic equation, we must always verify the solutions in the original equation.

### General procedure

1. Determine the domain.
2. Simplify using logarithm properties.
3. Solve the resulting equation.
4. Check the solutions obtained.
5. Keep only the solutions that belong to the domain.

## 8. Solving strategy

For a complex logarithmic equation, we can follow this procedure:

$$
\boxed{
\text{Domain}
\rightarrow
\text{Properties}
\rightarrow
\text{Solve}
\rightarrow
\text{Verify}
}
$$

The most important step is not to forget the **existence conditions of logarithms**.

## Summary

An advanced logarithmic equation may require us to:

- determine the domain carefully;
- combine logarithms using their properties;
- transform logarithmic equations into algebraic equations;
- use substitutions;
- apply the change-of-base formula;
- verify solutions in the original equation.

Final verification is essential because not every solution of the transformed equation is necessarily a solution of the original equation.
