# Polynomial Factorization

Polynomial factorization consists of expressing a polynomial as a **product of simpler polynomials**.

It is a fundamental tool for simplifying expressions, solving equations, finding roots, and studying polynomial functions.

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

---

## 1. What does factorization mean?

To factor means to transform a sum or difference of terms into a product.

For example:

$$
x^2+5x+6
$$

can be written as:

$$
(x+2)(x+3)
$$

The polynomials:

$$
x+2
$$

and:

$$
x+3
$$

are **factors** of the original polynomial.

Factorization is therefore the inverse operation of expanding products.

---

## 2. Common factor

The first method we should always check is whether there is a **common factor**.

For example:

$$
6x^3+9x^2
$$

Both terms contain $3x^2$:

$$
6x^3+9x^2
=

3x^2(2x+3)
$$

Therefore:

$$
\boxed{6x^3+9x^2=3x^2(2x+3)}
$$

---

## 3. Common factor with several variables

The common factor can contain several variables.

For example:

$$
12x^3y+18x^2y^2
$$

The greatest common factor is:

$$
6x^2y
$$

Therefore:

$$
12x^3y+18x^2y^2
=

6x^2y(2x+3y)
$$

---

## 4. Factoring by grouping

When there is no common factor for every term, we can try grouping terms.

For example:

$$
ax+ay+bx+by
$$

Group the terms:

$$
a(x+y)+b(x+y)
$$

Now there is a common factor:

$$
\boxed{(a+b)(x+y)}
$$

Another example:

$$
x^3+2x^2+3x+6
$$

Group the terms:

$$
x^2(x+2)+3(x+2)
$$

Therefore:

$$
\boxed{(x^2+3)(x+2)}
$$

---

## 5. Difference of squares

A fundamental identity is:

$$
\boxed{a^2-b^2=(a-b)(a+b)}
$$

For example:

$$
x^2-25
$$

is a difference of squares:

$$
x^2-5^2
$$

Therefore:

$$
\boxed{x^2-25=(x-5)(x+5)}
$$

Another example:

$$
9x^2-16
$$

is:

$$
(3x)^2-4^2
$$

Therefore:

$$
\boxed{9x^2-16=(3x-4)(3x+4)}
$$

---

## 6. Perfect-square trinomial

Another important identity is:

$$
\boxed{a^2+2ab+b^2=(a+b)^2}
$$

and:

$$
\boxed{a^2-2ab+b^2=(a-b)^2}
$$

For example:

$$
x^2+6x+9
$$

can be written as:

$$
x^2+2(x)(3)+3^2
$$

Therefore:

$$
\boxed{x^2+6x+9=(x+3)^2}
$$

Also:

$$
x^2-10x+25=(x-5)^2
$$

---

## 7. Quadratic trinomials

An expression of the form:

$$
x^2+bx+c
$$

can be factored by finding two numbers $m$ and $n$ such that:

$$
m+n=b
$$

and:

$$
mn=c
$$

Then:

$$
x^2+bx+c=(x+m)(x+n)
$$

For example:

$$
x^2+5x+6
$$

We need two numbers whose sum is $5$ and whose product is $6$:

$$
2+3=5
$$

$$
2\cdot3=6
$$

Therefore:

$$
\boxed{x^2+5x+6=(x+2)(x+3)}
$$

---

## 8. Trinomials with a leading coefficient different from 1

Consider:

$$
2x^2+7x+3
$$

We look for a factorization of the form:

$$
(2x+a)(x+b)
$$

We need:

$$
ab=3
$$

and:

$$
2b+a=7
$$

Take:

$$
a=1,\qquad b=3
$$

Therefore:

$$
\boxed{2x^2+7x+3=(2x+1)(x+3)}
$$

---

## 9. The $ac$ method

For a trinomial:

$$
ax^2+bx+c
$$

we can find two numbers whose product is:

$$
ac
$$

and whose sum is:

$$
b
$$

For example:

$$
6x^2+11x+3
$$

Calculate:

$$
ac=18
$$

We need two numbers whose product is $18$ and whose sum is $11$:

$$
9+2=11
$$

Split the middle term:

$$
6x^2+9x+2x+3
$$

Group:

$$
3x(2x+3)+1(2x+3)
$$

Therefore:

$$
\boxed{6x^2+11x+3=(3x+1)(2x+3)}
$$

---

## 10. Factoring a quadratic using its roots

If a quadratic polynomial has roots $r_1$ and $r_2$, it can be written as:

$$
a(x-r_1)(x-r_2)
$$

For example:

$$
x^2-5x+6
$$

has roots:

$$
x=2
$$

and:

$$
x=3
$$

Therefore:

$$
\boxed{x^2-5x+6=(x-2)(x-3)}
$$

---

## 11. Relationship between roots and factors

If:

$$
P(r)=0
$$

then:

$$
x-r
$$

is a factor of $P(x)$.

This is the **factor theorem**:

$$
\boxed{P(r)=0\iff(x-r)\text{ is a factor of }P(x)}
$$

For example, if:

$$
P(x)=x^3-4x^2+x+6
$$

and we verify that:

$$
P(2)=0
$$

then:

$$
x-2
$$

is a factor.

---

## 12. Remainder theorem

The remainder theorem states that the remainder when $P(x)$ is divided by $x-a$ is:

$$
\boxed{P(a)}
$$

For example, if:

$$
P(x)=x^2+3x+2
$$

is divided by:

$$
x-1
$$

the remainder is:

$$
P(1)=1+3+2=6
$$

Therefore, $x-1$ is not a factor.

If:

$$
P(a)=0
$$

the remainder is zero and $x-a$ is a factor.

---

## 13. Synthetic division

Synthetic division allows us to quickly divide a polynomial by a binomial of the form:

$$
x-a
$$

It is particularly useful when we know a root.

For example:

$$
P(x)=x^3-6x^2+11x-6
$$

Test $x=1$:

$$
P(1)=0
$$

Therefore:

$$
x-1
$$

is a factor.

Using synthetic division gives:

$$
x^2-5x+6
$$

which can be factored again:

$$
x^2-5x+6=(x-2)(x-3)
$$

Therefore:

$$
\boxed{
x^3-6x^2+11x-6
=

(x-1)(x-2)(x-3)
}
$$

---

## 14. Multiple roots

A root can appear more than once.

For example:

$$
P(x)=(x-2)^2(x+1)
$$

has:

- root $x=2$ with multiplicity $2$;
- root $x=-1$ with multiplicity $1$.

Multiplicity indicates how many times a factor occurs.

---

## 15. Complete factorization

Complete factorization means continuing to factor until the factors cannot be decomposed further over the number set being used.

For example:

$$
2x^3-8x
$$

First extract the common factor:

$$
2x(x^2-4)
$$

Then apply the difference of squares:

$$
2x(x-2)(x+2)
$$

Therefore:

$$
\boxed{2x^3-8x=2x(x-2)(x+2)}
$$

---

## 16. Factoring cubes

There are two important identities.

### Sum of cubes

$$
\boxed{a^3+b^3=(a+b)(a^2-ab+b^2)}
$$

For example:

$$
x^3+8
$$

is:

$$
x^3+2^3
$$

Therefore:

$$
\boxed{x^3+8=(x+2)(x^2-2x+4)}
$$

### Difference of cubes

$$
\boxed{a^3-b^3=(a-b)(a^2+ab+b^2)}
$$

For example:

$$
x^3-27
$$

is:

$$
x^3-3^3
$$

Therefore:

$$
\boxed{x^3-27=(x-3)(x^2+3x+9)}
$$

---

## 17. Factoring by substitution

Some polynomials have a structure that allows a substitution.

For example:

$$
x^4-5x^2+6
$$

Take:

$$
u=x^2
$$

Then:

$$
u^2-5u+6
$$

Factor:

$$
(u-2)(u-3)
$$

Return to $x$:

$$
(x^2-2)(x^2-3)
$$

Therefore:

$$
\boxed{x^4-5x^2+6=(x^2-2)(x^2-3)}
$$

---

## 18. Factorization and solving equations

Factorization is particularly useful for solving equations.

Consider:

$$
x^2-5x+6=0
$$

Factor:

$$
(x-2)(x-3)=0
$$

Using the zero-product property:

$$
x-2=0
$$

or:

$$
x-3=0
$$

Therefore:

$$
\boxed{x=2\quad\text{or}\quad x=3}
$$

---

## 19. Zero-product property

If:

$$
AB=0
$$

then:

$$
\boxed{A=0\quad\text{or}\quad B=0}
$$

This property allows a factored equation to be transformed into several simpler equations.

For example:

$$
(x-1)(x+4)=0
$$

implies:

$$
x-1=0
$$

or:

$$
x+4=0
$$

Therefore:

$$
\boxed{x=1,\,-4}
$$

---

## 20. Factorization and simplifying fractions

Factorization also allows us to simplify algebraic fractions.

For example:

$$
\frac{x^2-9}{x^2+3x}
$$

Factor:

$$
\frac{(x-3)(x+3)}{x(x+3)}
$$

We can cancel $x+3$, provided:

$$
x\neq-3
$$

Therefore:

$$
\boxed{
\frac{x^2-9}{x^2+3x}
=

\frac{x-3}{x}
}
$$

with the restrictions:

$$
x\neq0,\qquad x\neq-3
$$

---

## 21. Factorization over different number sets

Factorization can depend on the number set being used.

For example:

$$
x^2-2
$$

cannot be factored using factors with rational coefficients.

But over the real numbers:

$$
x^2-2=(x-\sqrt2)(x+\sqrt2)
$$

Therefore, it is important to know which number set is being used.

---

## 22. General strategy

To factor a polynomial:

1. Arrange the polynomial by degree.
2. Check for a common factor.
3. Look for notable identities.
4. Check whether grouping is possible.
5. If it is a quadratic trinomial, find its factors.
6. If it has higher degree, look for possible roots.
7. Use the factor theorem.
8. Use synthetic division when appropriate.
9. Repeat the process with the resulting factors.
10. Check the result by multiplying the factors.

---

## 23. Fundamental identities

### Square of a sum

$$
(a+b)^2=a^2+2ab+b^2
$$

### Square of a difference

$$
(a-b)^2=a^2-2ab+b^2
$$

### Difference of squares

$$
a^2-b^2=(a-b)(a+b)
$$

### Sum of cubes

$$
a^3+b^3=(a+b)(a^2-ab+b^2)
$$

### Difference of cubes

$$
a^3-b^3=(a-b)(a^2+ab+b^2)
$$

---

## 24. Common mistakes

### Not extracting the common factor

Before applying other methods, always check whether there is a common factor.

### Changing signs incorrectly

For example:

$$
a^2-b^2=(a-b)(a+b)
$$

not:

$$
(a-b)^2
$$

### Not checking the factorization

After factoring, we can multiply the factors to verify that we recover the original polynomial.

### Confusing factors and roots

If:

$$
x-a
$$

is a factor, then:

$$
a
$$

is a root.

However, the factor and the root are not the same object.

---

## 25. Summary

The fundamental factorization techniques are:

| Method                | Structure                             |
| --------------------- | ------------------------------------- |
| Common factor         | $ax+ay=a(x+y)$                        |
| Grouping              | $ax+ay+bx+by=(a+b)(x+y)$              |
| Difference of squares | $a^2-b^2=(a-b)(a+b)$                  |
| Perfect square        | $a^2\pm2ab+b^2=(a\pm b)^2$            |
| Sum of cubes          | $a^3+b^3=(a+b)(a^2-ab+b^2)$           |
| Difference of cubes   | $a^3-b^3=(a-b)(a^2+ab+b^2)$           |
| Factor theorem        | $P(a)=0\Rightarrow(x-a)$ is a factor  |
| Synthetic division    | Division by $x-a$                     |
| Substitution          | Transformation of repeated structures |

## 26. Fundamental idea

Factoring means finding a hidden multiplicative structure inside a polynomial:

$$
\boxed{
\text{polynomial}
\rightarrow
\text{factors}
}
$$

Factorization directly connects algebra with the roots of a polynomial:

$$
\boxed{
P(a)=0
\iff
(x-a)\text{ is a factor of }P(x)
}
$$

For this reason, factorization is one of the main tools for solving equations and studying polynomial functions.
