# Rational and Radical Equations

Rational equations and radical equations contain expressions that can introduce **domain restrictions**. Therefore, solving them requires not only algebraic transformations, but also checking the solutions obtained.

---

## 1. What are rational equations?

A rational equation is an equation containing rational expressions, usually algebraic fractions in which the unknown appears in a denominator.

For example:

$$
\frac{1}{x}=2
$$

or:

$$
\frac{x+1}{x-2}=3
$$

The first condition we must establish is:

$$
x\neq0
$$

because division by zero is undefined.

In general, any value that makes a denominator equal to zero must be excluded from the domain.

---

## 2. Domain restrictions

Before manipulating a rational equation, we must identify the forbidden values.

For example:

$$
\frac{x+1}{x-3}=2
$$

The denominator cannot be zero:

$$
x-3\neq0
$$

Therefore:

$$
\boxed{x\neq3}
$$

This restriction must be maintained throughout the entire process.

---

## 3. Solving a simple rational equation

Consider:

$$
\frac{1}{x}=2
$$

with:

$$
x\neq0
$$

Multiply both sides by $x$:

$$
1=2x
$$

Solve for $x$:

$$
x=\frac12
$$

The solution satisfies the restriction $x\neq0$.

Therefore:

$$
\boxed{x=\frac12}
$$

---

## 4. Eliminating denominators

When an equation contains several fractions, we can multiply the entire equation by the **least common multiple of the denominators**.

For example:

$$
\frac{1}{x}+\frac{1}{2}=1
$$

The restriction is:

$$
x\neq0
$$

Multiply by $2x$:

$$
2+x=2x
$$

Therefore:

$$
x=2
$$

Since $2\neq0$, the solution is valid:

$$
\boxed{x=2}
$$

---

## 5. Example with several denominators

Consider:

$$
\frac{2}{x-1}+\frac{1}{x+1}=1
$$

The restrictions are:

$$
x\neq1
$$

and:

$$
x\neq-1
$$

The least common denominator is:

$$
(x-1)(x+1)
$$

Multiply the entire equation:

$$
2(x+1)+(x-1)=x^2-1
$$

Expand:

$$
2x+2+x-1=x^2-1
$$

$$
3x+1=x^2-1
$$

Rearrange:

$$
x^2-3x-2=0
$$

Using the quadratic formula:

$$
x=\frac{3\pm\sqrt{17}}{2}
$$

Neither solution is $1$ or $-1$, so both are valid.

---

## 6. What are radical equations?

A radical equation contains the unknown inside a root.

For example:

$$
\sqrt{x}=3
$$

or:

$$
\sqrt{x+1}=x-1
$$

Roots of different indices can also appear:

$$
\sqrt[3]{x+2}=4
$$

---

## 7. Restrictions for roots

Over the real numbers, an even-index root requires its radicand to be non-negative.

For example:

$$
\sqrt{x-2}
$$

requires:

$$
x-2\geq0
$$

Therefore:

$$
\boxed{x\geq2}
$$

An odd-index root, such as:

$$
\sqrt[3]{x}
$$

is defined for every real number.

---

## 8. Solving a simple radical equation

Consider:

$$
\sqrt{x}=5
$$

Square both sides:

$$
(\sqrt{x})^2=5^2
$$

Therefore:

$$
x=25
$$

The solution is:

$$
\boxed{x=25}
$$

---

## 9. Eliminating a radical

When we have an equation such as:

$$
\sqrt{f(x)}=g(x)
$$

we can square both sides:

$$
f(x)=g(x)^2
$$

However, this procedure can introduce **extraneous solutions**.

Therefore, the resulting solutions must always be checked in the original equation.

---

## 10. Extraneous solutions

Consider:

$$
\sqrt{x+1}=x-1
$$

The left-hand side is always non-negative. Therefore, we also need:

$$
x-1\geq0
$$

which means:

$$
x\geq1
$$

Square both sides:

$$
x+1=(x-1)^2
$$

Expand:

$$
x+1=x^2-2x+1
$$

$$
x=x^2-2x
$$

$$
x^2-3x=0
$$

Factor:

$$
x(x-3)=0
$$

We obtain:

$$
x=0
$$

or:

$$
x=3
$$

But $x=0$ does not satisfy $x\geq1$.

Check $x=3$:

$$
\sqrt{3+1}=3-1
$$

$$
2=2
$$

Therefore:

$$
\boxed{x=3}
$$

---

## 11. Why do extraneous solutions appear?

Squaring is not an equivalent transformation in every situation.

For example:

$$
a=b
$$

implies:

$$
a^2=b^2
$$

but:

$$
a^2=b^2
$$

can result from either:

$$
a=b
$$

or:

$$
a=-b
$$

Therefore, after squaring, we must check the solutions in the original equation.

---

## 12. Radicals on both sides

Consider:

$$
\sqrt{x+3}=\sqrt{2x-1}
$$

First establish the domain:

$$
x+3\geq0
$$

and:

$$
2x-1\geq0
$$

The second condition is more restrictive:

$$
x\geq\frac12
$$

Square both sides:

$$
x+3=2x-1
$$

Solve:

$$
x=4
$$

Check:

$$
\sqrt7=\sqrt7
$$

Therefore:

$$
\boxed{x=4}
$$

---

## 13. Two radicals

Consider:

$$
\sqrt{x+5}-\sqrt{x}=1
$$

Isolate one radical:

$$
\sqrt{x+5}=1+\sqrt{x}
$$

Square both sides:

$$
x+5=1+2\sqrt{x}+x
$$

Simplify:

$$
4=2\sqrt{x}
$$

$$
\sqrt{x}=2
$$

Square again:

$$
x=4
$$

Check in the original equation:

$$
\sqrt9-\sqrt4=3-2=1
$$

Therefore:

$$
\boxed{x=4}
$$

---

## 14. Odd-index radicals

Odd-index roots do not require the radicand to be positive.

For example:

$$
\sqrt[3]{x-2}=3
$$

Cube both sides:

$$
x-2=27
$$

Therefore:

$$
\boxed{x=29}
$$

---

## 15. Rational equations with radicals

An equation can combine fractions and radicals.

For example:

$$
\frac{1}{\sqrt{x}}=2
$$

There are two restrictions:

$$
x\geq0
$$

because a square root appears, and:

$$
\sqrt{x}\neq0
$$

because it is in the denominator.

Therefore:

$$
\boxed{x>0}
$$

Multiply:

$$
1=2\sqrt{x}
$$

Then:

$$
\sqrt{x}=\frac12
$$

Square both sides:

$$
x=\frac14
$$

The solution is valid.

---

## 16. Radicals in denominators

When a root appears in the denominator, the denominator cannot be zero.

For example:

$$
\frac{1}{\sqrt{x-2}}
$$

requires:

$$
x-2>0
$$

Therefore:

$$
\boxed{x>2}
$$

Notice that:

$$
x-2\geq0
$$

is not sufficient because $x=2$ would make the denominator zero.

---

## 17. Rationalization

In some expressions it is useful to remove radicals from denominators.

For example:

$$
\frac{1}{\sqrt2}
$$

Multiply numerator and denominator by $\sqrt2$:

$$
\frac{1}{\sqrt2}
\cdot
\frac{\sqrt2}{\sqrt2}
=

\frac{\sqrt2}{2}
$$

Therefore:

$$
\boxed{\frac{1}{\sqrt2}=\frac{\sqrt2}{2}}
$$

---

## 18. Rationalization with binomials

To rationalize expressions such as:

$$
\frac{1}{a+\sqrt b}
$$

we can multiply by the conjugate:

$$
a-\sqrt b
$$

because:

$$
(a+\sqrt b)(a-\sqrt b)=a^2-b
$$

For example:

$$
\frac{1}{2+\sqrt3}
$$

Multiply by:

$$
\frac{2-\sqrt3}{2-\sqrt3}
$$

We obtain:

$$
\frac{2-\sqrt3}{4-3}
$$

and therefore:

$$
\boxed{2-\sqrt3}
$$

---

## 19. Equations with absolute values and radicals

Some equations can combine radicals with absolute values.

For example:

$$
\sqrt{x^2}=|x|
$$

This identity is important:

$$
\boxed{\sqrt{x^2}=|x|}
$$

We must not simply write:

$$
\sqrt{x^2}=x
$$

because this is only true when:

$$
x\geq0
$$

---

## 20. Procedure for rational equations

To solve a rational equation:

1. Identify all denominators.
2. Determine the forbidden values.
3. Find the least common denominator.
4. Multiply the entire equation by it.
5. Simplify.
6. Solve the resulting equation.
7. Discard any forbidden value.
8. Check the solutions in the original equation.

---

## 21. Procedure for radical equations

To solve a radical equation:

1. Determine the domain.
2. Isolate one radical.
3. Raise both sides to the appropriate power.
4. Simplify.
5. If radicals remain, isolate another one.
6. Repeat if necessary.
7. Solve the resulting equation.
8. Check every solution in the original equation.
9. Discard extraneous solutions.

---

## 22. Common mistakes

### Not establishing the domain

Incorrect:

$$
\frac{1}{x-2}=3
$$

without stating:

$$
x\neq2
$$

### Squaring without checking

An equation such as:

$$
\sqrt{f(x)}=g(x)
$$

can produce solutions that do not belong to the original equation.

### Forgetting that a denominator cannot be zero

$$
\frac{1}{\sqrt{x-1}}
$$

requires:

$$
x>1
$$

not simply:

$$
x\geq1
$$

### Confusing $\sqrt{x^2}$ with $x$

The correct identity is:

$$
\sqrt{x^2}=|x|
$$

---

## 23. Summary of restrictions

### Denominator

If:

$$
\frac{1}{f(x)}
$$

then:

$$
f(x)\neq0
$$

### Even-index root

If:

$$
\sqrt[n]{f(x)}
$$

with even $n$:

$$
f(x)\geq0
$$

### Even-index root in a denominator

If:

$$
\frac{1}{\sqrt[n]{f(x)}}
$$

with even $n$:

$$
f(x)>0
$$

### Odd-index root

If $n$ is odd, there is no sign restriction on the radicand over the real numbers.

---

## 24. Fundamental idea

Solving rational and radical equations is not only about performing algebraic operations.

The fundamental idea is:

$$
\boxed{
\text{domain}
\rightarrow
\text{transformation}
\rightarrow
\text{solution}
\rightarrow
\text{verification}
}
$$

Domain restrictions and final verification are just as important as the algebraic operations used to find the solutions.
