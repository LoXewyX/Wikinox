# Mathematical notation

Mathematics uses symbols and conventions to express ideas precisely and compactly. This notation allows us to write operations, relations, sets, functions, limits, derivatives, integrals, and many other structures.

Learning mathematical notation is not only about memorizing symbols. It is also important to understand **how they are read, when they are used, and what information they represent**.

---

## 1. Basic operations

| Symbol    | Meaning             | Example           |
| --------- | ------------------- | ----------------- |
| $+$       | Addition            | $a+b$             |
| $-$       | Subtraction         | $a-b$             |
| $\cdot$   | Multiplication      | $a\cdot b$        |
| $\times$  | Multiplication      | $a\times b$       |
| $/$       | Division            | $a/b$             |
| $=$       | Equality            | $a=b$             |
| $\neq$    | Not equal           | $a\neq b$         |
| $\approx$ | Approximately equal | $\pi\approx3.14$  |
| $\pm$     | Plus or minus       | $x=\pm2$          |
| $\mp$     | Minus or plus       | $a\pm b,\ a\mp b$ |
| $\%$      | Percentage          | $25\%$            |
| $\infty$  | Infinity            | $x\to\infty$      |

Multiplication is often omitted when there is no risk of confusion:

$$
3\cdot x=3x
$$

$$
a\cdot b=ab
$$

---

## 2. Comparisons

| Symbol | Meaning                  |
| ------ | ------------------------ |
| $<$    | Less than                |
| $>$    | Greater than             |
| $\leq$ | Less than or equal to    |
| $\geq$ | Greater than or equal to |
| $\ll$  | Much less than           |
| $\gg$  | Much greater than        |

For example:

$$
x\geq3
$$

means that $x$ can be 3 or any larger number.

---

## 3. Equality, equivalence, and approximation

### Equality

$$
a=b
$$

The two values are exactly equal.

### Approximation

$$
a\approx b
$$

The values are approximately equal.

For example:

$$
\pi\approx3.14159
$$

### Identity

$$
(a+b)^2\equiv a^2+2ab+b^2
$$

The symbol $\equiv$ can indicate an identity, meaning an equality that holds for all allowed values of the variables.

### Congruence

In number theory:

$$
a\equiv b\pmod n
$$

means that $a$ and $b$ leave the same remainder when divided by $n$.

---

## 4. Number sets

| Symbol       | Set              |
| ------------ | ---------------- |
| $\mathbb{N}$ | Natural numbers  |
| $\mathbb{Z}$ | Integers         |
| $\mathbb{Q}$ | Rational numbers |
| $\mathbb{R}$ | Real numbers     |
| $\mathbb{C}$ | Complex numbers  |

The inclusion relationship is:

$$
\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\subset\mathbb{C}
$$

For example:

$$
3\in\mathbb{N}
$$

$$
-2\in\mathbb{Z}
$$

$$
\frac12\in\mathbb{Q}
$$

$$
\sqrt2\in\mathbb{R}
$$

$$
i\in\mathbb{C}
$$

> The definition of $\mathbb N$ varies between conventions: some include $0$, while others start at $1$.

---

## 5. Set membership

| Symbol        | Meaning              |
| ------------- | -------------------- |
| $\in$         | Is an element of     |
| $\notin$      | Is not an element of |
| $\subset$     | Proper subset        |
| $\subseteq$   | Subset               |
| $\supset$     | Proper superset      |
| $\supseteq$   | Superset             |
| $\varnothing$ | Empty set            |

For example:

$$
3\in\mathbb{N}
$$

but:

$$
-3\notin\mathbb{N}
$$

If every element of $A$ also belongs to $B$:

$$
A\subseteq B
$$

---

## 6. Set operations

### Union

$$
A\cup B
$$

Contains elements that belong to $A$, $B$, or both.

### Intersection

$$
A\cap B
$$

Contains elements common to both sets.

### Difference

$$
A\setminus B
$$

Contains elements of $A$ that do not belong to $B$.

### Complement

$$
A^c
$$

Represents elements that do not belong to $A$ within the relevant universal set.

### Cartesian product

$$
A\times B
$$

Is the set of ordered pairs:

$$
A\times B=\{(a,b):a\in A,\ b\in B\}
$$

---

## 7. Intervals

Intervals represent sets of real numbers.

### Open interval

$$
(a,b)
$$

means:

$$
a<x<b
$$

The endpoints are not included.

### Closed interval

$$
[a,b]
$$

means:

$$
a\leq x\leq b
$$

The endpoints are included.

### Half-open intervals

$$
[a,b)
$$

means:

$$
a\leq x<b
$$

while:

$$
(a,b]
$$

means:

$$
a<x\leq b
$$

Infinite intervals include:

$$
(-\infty,a)
$$

$$
[a,\infty)
$$

Infinity is never included as an endpoint of an interval.

---

## 8. Powers

A power has the form:

$$
a^n
$$

where $a$ is the base and $n$ is the exponent.

For example:

$$
2^3=8
$$

### Zero exponent

$$
a^0=1
$$

for $a\neq0$.

### Negative exponent

$$
a^{-n}=\frac{1}{a^n}
$$

### Fractional exponent

$$
a^{1/n}=\sqrt[n]{a}
$$

Therefore:

$$
a^{m/n}=\sqrt[n]{a^m}
$$

---

## 9. Roots

The symbol:

$$
\sqrt{x}
$$

represents the square root.

Other roots include:

$$
\sqrt[3]{x}
$$

$$
\sqrt[n]{x}
$$

The relationship with powers is:

$$
\sqrt[n]{x}=x^{1/n}
$$

---

## 10. Absolute value

Absolute value is represented by vertical bars:

$$
|x|
$$

It represents the distance from $x$ to zero.

For example:

$$
|5|=5
$$

$$
|-5|=5
$$

Formally:

$$
|x|=
\begin{cases}
x & x\geq0\\
-x & x<0
\end{cases}
$$

The same notation can have other meanings depending on context.

---

## 11. Factorial

The factorial is represented by:

$$
!
$$

For a non-negative integer:

$$
n!=n(n-1)(n-2)\cdots2\cdot1
$$

For example:

$$
5!=120
$$

By convention:

$$
0!=1
$$

---

## 12. Summation

The summation symbol is:

$$
\sum
$$

It represents a sum of many terms compactly.

For example:

$$
\sum_{i=1}^{5}i
$$

means:

$$
1+2+3+4+5
$$

In:

$$
\sum_{i=1}^{n}a_i
$$

we have:

- $\sum$: summation symbol;
- $i$: index;
- $1$: lower bound;
- $n$: upper bound;
- $a_i$: term being added.

A well-known formula is:

$$
\sum_{i=1}^{n}i=\frac{n(n+1)}{2}
$$

Multiple indices can also be used:

$$
\sum_{i=1}^{n}\sum_{j=1}^{m}a_{ij}
$$

---

## 13. Products

The product notation is the multiplicative counterpart of summation.

Its symbol is:

$$
\prod
$$

For example:

$$
\prod_{i=1}^{5}i
$$

means:

$$
1\cdot2\cdot3\cdot4\cdot5
$$

Therefore:

$$
\prod_{i=1}^{n}i=n!
$$

---

## 14. Combinations

The binomial coefficient is written as:

$$
\binom{n}{k}
$$

It is read as «$n$ choose $k$».

Its formula is:

$$
\binom{n}{k}
=

\frac{n!}{k!(n-k)!}
$$

It appears, among other places, in the binomial theorem:

$$
(a+b)^n
=

\sum_{k=0}^{n}
\binom{n}{k}a^{n-k}b^k
$$

---

## 15. Functions

A function can be written as:

$$
f:A\to B
$$

This indicates that $f$ maps elements of $A$ to elements of $B$.

For example:

$$
f(x)=x^2
$$

In:

$$
f:A\to B
$$

- $A$ is the domain;
- $B$ is the codomain;
- $f(x)$ is the value of the function at $x$.

It can also be written:

$$
x\mapsto x^2
$$

---

## 16. Image and preimage

If:

$$
f(x)=x^2
$$

then:

$$
f(3)=9
$$

The number $9$ is the image of $3$.

The preimage of $9$ is:

$$
f^{-1}(\{9\})=\{-3,3\}
$$

Do not confuse $f^{-1}$ with $1/f$. In general, $f^{-1}$ represents the inverse function when one exists.

---

## 17. Function composition

Composition is written:

$$
(f\circ g)(x)
$$

and means:

$$
(f\circ g)(x)=f(g(x))
$$

First $g$ is applied, then $f$.

---

## 18. Injective, surjective, and bijective functions

A function can have different properties.

### Injective

Different elements of the domain have different images.

### Surjective

Every element of the codomain is the image of at least one element of the domain.

### Bijective

It is both injective and surjective.

Bijective functions have inverse functions.

---

## 19. Limits

A limit is written:

$$
\lim_{x\to a}f(x)
$$

It is read as:

«the limit of $f(x)$ as $x$ approaches $a$».

For example:

$$
\lim_{x\to2}(x+3)=5
$$

A limit describes the behavior of a function as the variable approaches a particular value.

---

## 20. One-sided limits

We can approach a point from the left:

$$
\lim_{x\to a^-}f(x)
$$

or from the right:

$$
\lim_{x\to a^+}f(x)
$$

For a finite two-sided limit to exist, the two one-sided limits must normally agree:

$$
\lim_{x\to a^-}f(x)
=

\lim_{x\to a^+}f(x)
$$

---

## 21. Limits at infinity

We can study what happens as $x$ grows without bound:

$$
\lim_{x\to\infty}f(x)
$$

or decreases without bound:

$$
\lim_{x\to-\infty}f(x)
$$

Infinite limits can also occur:

$$
\lim_{x\to a}f(x)=\infty
$$

These concepts are fundamental when studying asymptotes.

---

## 22. Derivatives

A derivative can be written in several ways:

$$
f'(x)
$$

$$
\frac{df}{dx}
$$

$$
\frac{dy}{dx}
$$

The second derivative can be written:

$$
f''(x)
$$

or:

$$
\frac{d^2f}{dx^2}
$$

Higher-order derivatives can be written:

$$
f^{(n)}(x)
$$

---

## 23. Partial derivatives

When a function depends on several variables, partial derivatives are used.

For example:

$$
f(x,y)
$$

The partial derivative with respect to $x$ is:

$$
\frac{\partial f}{\partial x}
$$

and with respect to $y$:

$$
\frac{\partial f}{\partial y}
$$

The symbol:

$$
\partial
$$

indicates a partial derivative.

---

## 24. Integrals

An indefinite integral is written:

$$
\int f(x)\,dx
$$

The $dx$ indicates the variable with respect to which we integrate.

A definite integral has bounds:

$$
\int_a^b f(x)\,dx
$$

Multiple integrals include:

$$
\iint
$$

$$
\iiint
$$

and contour integrals:

$$
\oint
$$

---

## 25. Sequences and series

A sequence can be written:

$$
(a_n)_{n=1}^{\infty}
$$

where $a_n$ represents the term with index $n$.

A series is a sum of terms from a sequence:

$$
\sum_{n=1}^{\infty}a_n
$$

A series can be convergent or divergent.

For example:

$$
\sum_{n=0}^{\infty}r^n
$$

converges when:

$$
|r|<1
$$

and then:

$$
\sum_{n=0}^{\infty}r^n
=

\frac{1}{1-r}
$$

---

## 26. Mathematical logic

| Symbol            | Meaning                  |
| ----------------- | ------------------------ |
| $\neg$            | Not / negation           |
| $\land$           | And                      |
| $\lor$            | Or                       |
| $\Rightarrow$     | Implies                  |
| $\Leftrightarrow$ | If and only if           |
| $\forall$         | For all                  |
| $\exists$         | There exists             |
| $\nexists$        | There does not exist     |
| $\exists!$        | There exists exactly one |

For example:

$$
\forall x\in\mathbb{R},\quad x^2\geq0
$$

means:

«For every real number $x$, $x^2$ is greater than or equal to zero».

---

## 27. Implication and equivalence

It is important to distinguish:

$$
A\Rightarrow B
$$

from:

$$
A\Leftrightarrow B
$$

The first means:

> If $A$ is true, then $B$ is also true.

The second means:

> $A$ is true if and only if $B$ is true.

For example:

$$
x=2\Rightarrow x^2=4
$$

but:

$$
x^2=4\Leftrightarrow x=\pm2
$$

---

## 28. Quantifiers

The universal quantifier:

$$
\forall
$$

means «for all».

The existential quantifier:

$$
\exists
$$

means «there exists at least one».

For example:

$$
\exists x\in\mathbb{R}:x^2=4
$$

means that there exists at least one real number whose square is 4.

---

## 29. Vectors

A vector can be represented as:

$$
\vec v
$$

or by its components:

$$
\vec v=
\begin{pmatrix}
v_1\\
v_2
\end{pmatrix}
$$

The norm of a vector is:

$$
\|\vec v\|
$$

The dot product:

$$
\vec u\cdot\vec v
$$

and, in three dimensions, the cross product:

$$
\vec u\times\vec v
$$

---

## 30. Matrices

A matrix can be written:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

| Symbol                   | Meaning         |
| ------------------------ | --------------- |
| $A^T$                    | Transpose       |
| $A^{-1}$                 | Inverse         |
| $\det(A)$                | Determinant     |
| $\operatorname{rank}(A)$ | Rank            |
| $I$                      | Identity matrix |
| $0$                      | Zero matrix     |

---

## 31. Complex numbers

A complex number is written:

$$
z=a+bi
$$

where:

$$
i^2=-1
$$

The real part:

$$
\operatorname{Re}(z)
$$

The imaginary part:

$$
\operatorname{Im}(z)
$$

The conjugate:

$$
\overline z
$$

The modulus:

$$
|z|
$$

In polar form:

$$
z=re^{i\theta}
$$

---

## 32. Geometry

| Symbol      | Meaning       |
| ----------- | ------------- |
| $\angle$    | Angle         |
| $\perp$     | Perpendicular |
| $\parallel$ | Parallel      |
| $\triangle$ | Triangle      |
| $\cong$     | Congruent     |
| $\sim$      | Similar       |

For example:

$$
AB\parallel CD
$$

means that the lines are parallel.

While:

$$
AB\perp CD
$$

means that they are perpendicular.

---

## 33. Probability

The probability of an event $A$:

$$
P(A)
$$

Conditional probability:

$$
P(A\mid B)
$$

Intersection:

$$
P(A\cap B)
$$

Union:

$$
P(A\cup B)
$$

Complement:

$$
P(A^c)
$$

---

## 34. Statistics

| Symbol                    | Common meaning                |
| ------------------------- | ----------------------------- |
| $\mu$                     | Population mean               |
| $\bar{x}$                 | Sample mean                   |
| $\sigma$                  | Population standard deviation |
| $s$                       | Sample standard deviation     |
| $\sigma^2$                | Population variance           |
| $s^2$                     | Sample variance               |
| $\operatorname{Var}(X)$   | Variance                      |
| $E(X)$                    | Expected value                |
| $\operatorname{Cov}(X,Y)$ | Covariance                    |

---

## 35. Approximation and asymptotic behavior

The symbol:

$$
\sim
$$

can indicate asymptotic equivalence:

$$
f(x)\sim g(x)
$$

when:

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=1
$$

We also encounter:

$$
O(n)
$$

$$
o(n)
$$

$$
\Theta(n)
$$

These notations describe the growth of functions and are particularly important in algorithm analysis.

---

## 36. Common letters

| Symbol    | Common use                             |
| --------- | -------------------------------------- |
| $x,y,z$   | Variables                              |
| $a,b,c$   | Constants or parameters                |
| $n,m,k$   | Integers or indices                    |
| $i,j$     | Indices                                |
| $f,g,h$   | Functions                              |
| $A,B,C$   | Sets, matrices, or objects             |
| $P,Q$     | Propositions, points, or probabilities |
| $r$       | Radius or ratio                        |
| $t$       | Time or parameter                      |
| $\lambda$ | Parameter or eigenvalue                |
| $\mu$     | Mean or parameter                      |
| $\sigma$  | Standard deviation                     |

The exact meaning always depends on context.

---

## 37. Reading a mathematical expression

For example:

$$
\sum_{i=1}^{n}i^2
$$

can be read as:

> «The sum from $i=1$ to $n$ of $i$ squared».

The expression means:

$$
1^2+2^2+3^2+\cdots+n^2
$$

Another example:

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

can be read as:

> «The limit as $x$ approaches zero of sine of $x$ divided by $x$ is equal to one».

---

## 38. Symbols worth recognizing

| Symbol                  | Concept              |
| ----------------------- | -------------------- |
| $=$                     | Equality             |
| $\neq$                  | Inequality           |
| $\approx$               | Approximation        |
| $\pm$                   | Plus or minus        |
| $<,>$                   | Comparison           |
| $\leq,\geq$             | Inclusive comparison |
| $\in$                   | Membership           |
| $\subseteq$             | Inclusion            |
| $\cup$                  | Union                |
| $\cap$                  | Intersection         |
| $\varnothing$           | Empty set            |
| $\infty$                | Infinity             |
| $\sqrt{}$               | Root                 |
| $                       | x                    | $   | Absolute value |
| $n!$                    | Factorial            |
| $\sum$                  | Summation            |
| $\prod$                 | Product              |
| $\binom nk$             | Binomial coefficient |
| $f(x)$                  | Function             |
| $f^{-1}$                | Inverse function     |
| $\circ$                 | Composition          |
| $\lim$                  | Limit                |
| $f'$                    | Derivative           |
| $\partial$              | Partial derivative   |
| $\int$                  | Integral             |
| $\iint$                 | Double integral      |
| $\oint$                 | Contour integral     |
| $\forall$               | For all              |
| $\exists$               | There exists         |
| $\Rightarrow$           | Implication          |
| $\Leftrightarrow$       | Equivalence          |
| $\mathbb N$             | Natural numbers      |
| $\mathbb Z$             | Integers             |
| $\mathbb Q$             | Rational numbers     |
| $\mathbb R$             | Real numbers         |
| $\mathbb C$             | Complex numbers      |
| $\vec v$                | Vector               |
| $\|v\|$                 | Norm                 |
| $A^T$                   | Transpose            |
| $A^{-1}$                | Inverse              |
| $\det(A)$               | Determinant          |
| $P(A)$                  | Probability          |
| $E(X)$                  | Expected value       |
| $\operatorname{Var}(X)$ | Variance             |

---

## 39. The fundamental idea

Mathematical notation allows complex structures to be expressed compactly.

For example:

$$
\sum_{i=1}^{n}a_i
$$

is much more compact than writing:

$$
a_1+a_2+a_3+\cdots+a_n
$$

Similarly:

$$
\lim_{x\to a}f(x)
$$

summarizes an entire idea about the behavior of a function near $a$.

Learning mathematics involves understanding concepts and also learning to **read and write its symbolic language**.
