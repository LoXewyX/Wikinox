# Exponential and Logarithmic Equations

Exponential and logarithmic equations are equations in which the unknown appears in an exponent or inside a logarithm.

They are closely related because exponential and logarithmic functions are inverse functions.

## 1. Exponential equations

An exponential equation contains the unknown in an exponent.

For example:

$$
2^x = 8
$$

Since

$$
8 = 2^3
$$

we can write:

$$
2^x = 2^3
$$

Therefore:

$$
x = 3
$$

### General principle

If

$$
a^x = a^b
$$

with $a>0$ and $a\neq1$, then:

$$
x=b
$$

This is the **common-base method**.

---

## 2. Solving exponential equations with a common base

Consider:

$$
3^{x+1}=27
$$

Since

$$
27=3^3
$$

we obtain:

$$
3^{x+1}=3^3
$$

Therefore:

$$
x+1=3
$$

and:

$$
x=2
$$

Another example:

$$
5^{2x-1}=125
$$

Since

$$
125=5^3
$$

we get:

$$
2x-1=3
$$

Therefore:

$$
x=2
$$

---

## 3. Exponential equations that require logarithms

Sometimes it is impossible or inconvenient to express both sides using the same base.

For example:

$$
2^x=6
$$

Taking the logarithm of both sides:

$$
\ln(2^x)=\ln(6)
$$

Using the logarithm power rule:

$$
x\ln(2)=\ln(6)
$$

Therefore:

$$
x=\frac{\ln(6)}{\ln(2)}
$$

Equivalently:

$$
x=\log_2(6)
$$

The numerical value is approximately:

$$
x\approx2.585
$$

---

## 4. The natural logarithm

The natural logarithm is the logarithm with base $e$:

$$
\ln(x)=\log_e(x)
$$

where

$$
e\approx2.71828
$$

The natural logarithm is especially useful for solving exponential equations because:

$$
\ln(e^x)=x
$$

For example:

$$
e^{3x}=10
$$

Taking $\ln$ on both sides:

$$
\ln(e^{3x})=\ln(10)
$$

Therefore:

$$
3x=\ln(10)
$$

and:

$$
x=\frac{\ln(10)}{3}
$$

---

## 5. Logarithmic equations

A logarithmic equation contains the unknown inside a logarithm.

For example:

$$
\log_2(x)=3
$$

Using the definition of a logarithm:

$$
\log_2(x)=3
\iff
2^3=x
$$

Therefore:

$$
x=8
$$

### Definition of a logarithm

For $a>0$, $a\neq1$, and $x>0$:

$$
\log_a(x)=b
\iff
a^b=x
$$

The three quantities have different roles:

- $a$ is the **base**.
- $b$ is the **logarithm value**.
- $x$ is the **argument**.

---

## 6. Domain restrictions

A logarithm is only defined when its argument is positive.

Therefore:

$$
\log_a(x)
$$

requires:

$$
x>0
$$

For example:

$$
\log(x-2)
$$

requires:

$$
x-2>0
$$

so:

$$
x>2
$$

This restriction must be checked when solving logarithmic equations.

---

## 7. Solving logarithmic equations using the definition

Consider:

$$
\log_3(x)=4
$$

Using the definition:

$$
x=3^4
$$

Therefore:

$$
x=81
$$

Another example:

$$
\log_5(x-1)=2
$$

Convert to exponential form:

$$
x-1=5^2
$$

Therefore:

$$
x=26
$$

The domain condition is:

$$
x-1>0
$$

and $x=26$ satisfies it.

---

## 8. Properties of logarithms

The main logarithm properties are:

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

These properties are useful for simplifying logarithmic equations.

---

## 9. Combining logarithms

Consider:

$$
\log_2(x)+\log_2(x-2)=3
$$

Using the product property:

$$
\log_2(x(x-2))=3
$$

Convert to exponential form:

$$
x(x-2)=2^3
$$

Therefore:

$$
x^2-2x=8
$$

or:

$$
x^2-2x-8=0
$$

Factorizing:

$$
(x-4)(x+2)=0
$$

The candidates are:

$$
x=4
$$

and:

$$
x=-2
$$

However, the original logarithms require:

$$
x>0
$$

and:

$$
x-2>0
$$

Therefore:

$$
x>2
$$

Only:

$$
x=4
$$

is valid.

---

## 10. Logarithms on both sides

Consider:

$$
\log_2(x+3)=\log_2(7)
$$

Since the logarithms have the same base:

$$
x+3=7
$$

Therefore:

$$
x=4
$$

The domain condition is:

$$
x+3>0
$$

and the solution is valid.

In general:

$$
\log_a(f(x))=\log_a(g(x))
$$

implies:

$$
f(x)=g(x)
$$

provided that both logarithmic arguments are positive.

---

## 11. Exponential equations using logarithms

Consider:

$$
7^x=20
$$

Taking logarithms:

$$
\ln(7^x)=\ln(20)
$$

Using the power property:

$$
x\ln(7)=\ln(20)
$$

Therefore:

$$
x=\frac{\ln(20)}{\ln(7)}
$$

More generally:

$$
a^x=b
$$

can be solved as:

$$
x=\frac{\ln(b)}{\ln(a)}
$$

for $a>0$, $a\neq1$, and $b>0$.

---

## 12. Change of base

A logarithm can be converted to another base using:

$$
\log_a(x)=\frac{\log_b(x)}{\log_b(a)}
$$

The most common choice is $b=e$:

$$
\log_a(x)=\frac{\ln(x)}{\ln(a)}
$$

For example:

$$
\log_2(10)
=
\frac{\ln(10)}{\ln(2)}
$$

This formula is particularly useful when a calculator does not have a button for the required logarithm base.

---

## 13. Graphical interpretation

Exponential equations can also be interpreted graphically.

For example:

$$
2^x=6
$$

The solution is the $x$-coordinate where the exponential function reaches the value $6$.

:::function-graph{expression="2^x" restriction="-3<=x<=4"}
:::

The solution can be written as:

$$
x=\log_2(6)
$$

---

## 14. Exponential and logarithmic functions as inverses

The exponential function

$$
f(x)=a^x
$$

and the logarithmic function

$$
g(x)=\log_a(x)
$$

are inverse functions.

This means:

$$
a^{\log_a(x)}=x
$$

and:

$$
\log_a(a^x)=x
$$

Their graphs are symmetric with respect to the line:

$$
y=x
$$

For example:

:::function-graph{expression="2^x" restriction="-4<=x<=4"}
:::

The corresponding logarithmic function is:

$$
y=\log_2(x)
$$

---

## 15. Exponential equations with the same base

When possible, rewrite both sides using the same base.

Example:

$$
4^{x+1}=16
$$

Since:

$$
4=2^2
$$

and:

$$
16=2^4
$$

we obtain:

$$
(2^2)^{x+1}=2^4
$$

Using:

$$
(a^m)^n=a^{mn}
$$

we get:

$$
2^{2x+2}=2^4
$$

Therefore:

$$
2x+2=4
$$

and:

$$
x=1
$$

---

## 16. Exponential equations that reduce to a quadratic equation

Some exponential equations contain powers such as:

$$
2^{2x}
$$

and:

$$
2^x
$$

Since:

$$
2^{2x}=(2^x)^2
$$

we can introduce a substitution.

Consider:

$$
2^{2x}-5(2^x)+6=0
$$

Let:

$$
u=2^x
$$

Then:

$$
u^2-5u+6=0
$$

Factorizing:

$$
(u-2)(u-3)=0
$$

Therefore:

$$
u=2
$$

or:

$$
u=3
$$

Returning to $x$:

$$
2^x=2
$$

gives:

$$
x=1
$$

and:

$$
2^x=3
$$

gives:

$$
x=\log_2(3)
$$

Therefore the solutions are:

$$
x=1
$$

and:

$$
x=\log_2(3)
$$

---

## 17. Common mistakes

### Forgetting logarithm domain restrictions

Expressions such as:

$$
\ln(x)
$$

require:

$$
x>0
$$

### Incorrect logarithm rule

In general:

$$
\log_a(x+y)
\neq
\log_a(x)+\log_a(y)
$$

The product rule is:

$$
\log_a(xy)
=
\log_a(x)+\log_a(y)
$$

### Forgetting to check solutions

When transforming logarithmic equations, always verify the resulting solutions in the original equation.

### Confusing logarithmic and exponential notation

These statements are equivalent:

$$
\log_a(x)=b
$$

and:

$$
a^b=x
$$

---

## 18. Summary

### Exponential equations

For:

$$
a^x=b
$$

we can use:

$$
x=\log_a(b)
$$

or:

$$
x=\frac{\ln(b)}{\ln(a)}
$$

### Logarithmic equations

For:

$$
\log_a(x)=b
$$

we have:

$$
x=a^b
$$

### Main logarithm properties

$$
\log_a(xy)=\log_a(x)+\log_a(y)
$$

$$
\log_a\left(\frac{x}{y}\right)
=
\log_a(x)-\log_a(y)
$$

$$
\log_a(x^n)=n\log_a(x)
$$

### Change of base

$$
\log_a(x)=\frac{\ln(x)}{\ln(a)}
$$

The central idea is that **exponential and logarithmic equations can be transformed into each other**, allowing us to choose the most convenient method for solving the equation.
