# Remainder theorem

The **remainder theorem** allows us to find the remainder when a polynomial is divided by a binomial of the form $x-a$ without performing the entire division.

It is especially useful for evaluating polynomials, checking roots, and factoring polynomials.

## 1. Polynomial division

When we divide a polynomial $P(x)$ by another polynomial $D(x)$, we obtain:

$$
P(x)=D(x)Q(x)+R(x)
$$

where:

- $P(x)$ is the **dividend**.
- $D(x)$ is the **divisor**.
- $Q(x)$ is the **quotient**.
- $R(x)$ is the **remainder**.

If the divisor is $x-a$, which has degree $1$, the remainder must have degree less than $1$. Therefore, the remainder is a constant:

$$
P(x)=(x-a)Q(x)+r
$$

The remainder theorem gives this value directly.

## 2. Statement of the remainder theorem

If a polynomial $P(x)$ is divided by $x-a$, the remainder is:

$$
\boxed{P(a)}
$$

In other words:

> To find the remainder when $P(x)$ is divided by $x-a$, simply evaluate the polynomial at $x=a$.

### Example

Let:

$$
P(x)=2x^3-3x^2+4x-5
$$

We want to find the remainder when it is divided by:

$$
x-2
$$

Since $a=2$, calculate:

$$
P(2)=2(2)^3-3(2)^2+4(2)-5
$$

$$
=16-12+8-5
$$

$$
=7
$$

Therefore, the remainder is:

$$
\boxed{7}
$$

There is no need to perform polynomial division.

## 3. Why it works

From the division algorithm:

$$
P(x)=(x-a)Q(x)+r
$$

Set $x=a$:

$$
P(a)=(a-a)Q(a)+r
$$

Since:

$$
a-a=0
$$

we obtain:

$$
P(a)=r
$$

Therefore, the remainder is exactly $P(a)$.

## 4. Divisors of the form $x-a$

The form of the divisor is important.

If we have:

$$
x-3
$$

then:

$$
a=3
$$

and the remainder is:

$$
P(3)
$$

If we have:

$$
x+3
$$

we must write it as:

$$
x-(-3)
$$

Therefore:

$$
a=-3
$$

and the remainder is:

$$
P(-3)
$$

### Example

Let:

$$
P(x)=x^3+2x^2-x+4
$$

We want the remainder when dividing by:

$$
x+2
$$

Since:

$$
x+2=x-(-2)
$$

we calculate:

$$
P(-2)=(-2)^3+2(-2)^2-(-2)+4
$$

$$
=-8+8+2+4
$$

$$
=6
$$

The remainder is:

$$
\boxed{6}
$$

## 5. Evaluating a polynomial

The remainder theorem turns a division into a simple evaluation.

For example:

$$
P(x)=3x^4-2x^3+x-7
$$

If we want the remainder when dividing by $x-1$, calculate:

$$
P(1)=3(1)^4-2(1)^3+1-7
$$

$$
=3-2+1-7
$$

$$
=-5
$$

Therefore:

$$
\boxed{r=-5}
$$

## 6. Checking whether a number is a root

The remainder theorem provides a quick way to check whether a number $a$ is a root of a polynomial.

If:

$$
P(a)=0
$$

then the remainder when dividing $P(x)$ by $x-a$ is zero.

Therefore:

$$
\boxed{P(a)=0\iff x-a\text{ divides }P(x)}
$$

and also:

$$
\boxed{P(a)=0\iff a\text{ is a root of }P(x)}
$$

### Example

Let:

$$
P(x)=x^3-6x^2+11x-6
$$

Check whether $x=2$ is a root:

$$
P(2)=2^3-6(2)^2+11(2)-6
$$

$$
=8-24+22-6
$$

$$
=0
$$

Therefore, $2$ is a root and:

$$
x-2
$$

is a factor of $P(x)$.

## 7. Relationship with the factor theorem

The **factor theorem** is a direct consequence of the remainder theorem.

If:

$$
P(a)=0
$$

then the remainder when dividing $P(x)$ by $x-a$ is zero.

Therefore:

$$
x-a
$$

is a factor of $P(x)$.

The fundamental equivalence is:

$$
\boxed{P(a)=0\iff x-a\text{ is a factor of }P(x)}
$$

### Example

Let:

$$
P(x)=x^3-4x^2+x+6
$$

Check $a=2$:

$$
P(2)=8-16+2+6=0
$$

Therefore:

$$
x-2
$$

is a factor.

## 8. Finding factors using the remainder theorem

If we suspect that $a$ is a root, we can evaluate the polynomial at $a$.

For example:

$$
P(x)=x^3-6x^2+11x-6
$$

Try $x=1$:

$$
P(1)=1-6+11-6=0
$$

Therefore:

$$
x-1
$$

is a factor.

We can divide:

$$
P(x)\div(x-1)
$$

to obtain:

$$
P(x)=(x-1)(x^2-5x+6)
$$

Then factor:

$$
x^2-5x+6=(x-2)(x-3)
$$

Therefore:

$$
\boxed{P(x)=(x-1)(x-2)(x-3)}
$$

## 9. Finding all roots

The remainder theorem can also be part of a procedure for finding the roots of a polynomial.

### Example

Let:

$$
P(x)=x^3-6x^2+11x-6
$$

Try possible roots:

$$
P(1)=0
$$

Therefore, $x-1$ is a factor.

Divide:

$$
P(x)=(x-1)(x^2-5x+6)
$$

Factor the second polynomial:

$$
x^2-5x+6=(x-2)(x-3)
$$

Thus:

$$
P(x)=(x-1)(x-2)(x-3)
$$

The roots are:

$$
\boxed{x=1,\quad x=2,\quad x=3}
$$

## 10. Remainder when the divisor is not monic

The remainder theorem applies directly when the divisor has the form $x-a$.

If the divisor is:

$$
2x-6
$$

we can write:

$$
2x-6=2(x-3)
$$

The value of $x$ that makes the divisor zero is $x=3$.

For example, if:

$$
P(x)=x^2+1
$$

then:

$$
P(3)=10
$$

and the remainder when dividing by $2x-6$ is:

$$
\boxed{10}
$$

In general, if the divisor is:

$$
ax-b
$$

the remainder is:

$$
\boxed{P\left(\frac{b}{a}\right)}
$$

## 11. General rule for $ax-b$

If:

$$
P(x)
$$

is divided by:

$$
ax-b
$$

the value of $x$ that makes the divisor zero is:

$$
x=\frac{b}{a}
$$

Therefore, the remainder is:

$$
\boxed{P\left(\frac{b}{a}\right)}
$$

### Example

Let:

$$
P(x)=x^2+3x+1
$$

and divide by:

$$
2x-4
$$

We have:

$$
a=2,\qquad b=4
$$

Therefore:

$$
\frac{b}{a}=2
$$

Calculate:

$$
P(2)=2^2+3(2)+1=11
$$

The remainder is:

$$
\boxed{11}
$$

## 12. Remainder theorem and synthetic division

Synthetic division, or Ruffini's rule, allows us to quickly divide a polynomial by a divisor of the form:

$$
x-a
$$

The last number obtained by synthetic division is exactly the remainder.

### Example

Let:

$$
P(x)=x^3-4x^2+5x-2
$$

Divide by:

$$
x-2
$$

Use $a=2$.

The coefficients are:

$$
1,\;-4,\;5,\;-2
$$

Synthetic division gives a remainder of:

$$
0
$$

Therefore:

$$
P(2)=0
$$

and $x-2$ is a factor.

## 13. Difference between remainder and quotient

The remainder theorem gives only the **remainder**.

If:

$$
P(x)=(x-a)Q(x)+r
$$

the theorem gives:

$$
r=P(a)
$$

but it does not directly give $Q(x)$.

If we need the quotient, we must perform polynomial division, use synthetic division, or use an equivalent method.

## 14. Zero remainder

When:

$$
P(a)=0
$$

the remainder is zero:

$$
r=0
$$

This means the division is exact:

$$
P(x)=(x-a)Q(x)
$$

There is no additional remainder term.

## 15. Nonzero remainder

If:

$$
P(a)\neq0
$$

then the remainder is nonzero.

Therefore:

$$
P(x)=(x-a)Q(x)+P(a)
$$

The divisor is not a factor of the polynomial.

### Example

Let:

$$
P(x)=x^2+2x+5
$$

and consider $x-1$.

Calculate:

$$
P(1)=1+2+5=8
$$

Therefore:

$$
r=8
$$

and $x-1$ is not a factor of $P(x)$.

## 16. Polynomials with unknown coefficients

The remainder theorem can also be used to find unknown parameters.

### Example

Let:

$$
P(x)=x^3+ax^2+2x+1
$$

and suppose that the remainder when dividing by $x-2$ is $5$.

By the remainder theorem:

$$
P(2)=5
$$

Substitute:

$$
2^3+a(2)^2+2(2)+1=5
$$

$$
8+4a+4+1=5
$$

$$
13+4a=5
$$

$$
4a=-8
$$

$$
a=-2
$$

Therefore:

$$
\boxed{a=-2}
$$

## 17. Finding a parameter that produces a root

Suppose:

$$
P(x)=x^3+kx^2-4x+4
$$

and we want $x=2$ to be a root.

This means:

$$
P(2)=0
$$

Therefore:

$$
8+4k-8+4=0
$$

$$
4+4k=0
$$

$$
k=-1
$$

Therefore, when $k=-1$, the polynomial has the root $x=2$.

## 18. Multiple divisors and multiple remainders

If we know several conditions, we can obtain a system of equations.

For example, if:

$$
P(x)=x^3+ax^2+bx+c
$$

and we know:

$$
P(1)=2
$$

$$
P(2)=5
$$

each condition gives an equation involving the coefficients.

The remainder theorem allows divisibility and remainder conditions to be converted into algebraic equations.

## 19. General procedure

To find the remainder when $P(x)$ is divided by $x-a$:

1. Identify $a$.
2. Substitute $x=a$ into $P(x)$.
3. Calculate the resulting value.
4. That value is the remainder.

In short:

$$
\boxed{\text{Remainder}=P(a)}
$$

### Complete example

Let:

$$
P(x)=2x^4-x^3+3x^2-5x+7
$$

and suppose we divide by:

$$
x+1
$$

First write:

$$
x+1=x-(-1)
$$

Therefore:

$$
a=-1
$$

Evaluate:

$$
P(-1)=2(-1)^4-(-1)^3+3(-1)^2-5(-1)+7
$$

$$
=2+1+3+5+7
$$

$$
=18
$$

Therefore:

$$
\boxed{r=18}
$$

## 20. Common mistakes

### Confusing $x-a$ with $x+a$

If the divisor is:

$$
x+4
$$

we must use:

$$
a=-4
$$

not $a=4$.

### Confusing the remainder with $a$

If:

$$
P(x)\div(x-3)
$$

then:

$$
a=3
$$

but the remainder is:

$$
P(3)
$$

They are not necessarily equal.

### Thinking that division is always necessary

To find the remainder, there is no need to perform the complete division.

### Forgetting terms with zero coefficients

If:

$$
P(x)=x^4+3x^2-2
$$

we can also write:

$$
P(x)=x^4+0x^3+3x^2+0x-2
$$

This is especially important when using synthetic division.

### Confusing the remainder theorem with the factor theorem

The remainder theorem states:

$$
\operatorname{remainder}=P(a)
$$

The factor theorem adds the special condition:

$$
P(a)=0\iff x-a\text{ is a factor}
$$

## 21. Summary

| Concept           | Result            |
| ----------------- | ----------------- |
| Divisor           | $x-a$             |
| Value substituted | $a$               |
| Remainder         | $P(a)$            |
| Zero remainder    | $P(a)=0$          |
| $x-a$ is a factor | $P(a)=0$          |
| $a$ is a root     | $P(a)=0$          |
| Divisor $x+a$     | use $a=-a$        |
| Divisor $ax-b$    | evaluate at $b/a$ |

The fundamental relationship is:

$$
\boxed{P(x)=(x-a)Q(x)+P(a)}
$$

and, in particular:

$$
\boxed{\text{remainder of }P(x)\div(x-a)=P(a)}
$$

## 22. Fundamental idea

The remainder theorem transforms polynomial division into evaluation.

Instead of calculating the entire division:

$$
P(x)\div(x-a)
$$

we simply calculate:

$$
P(a)
$$

The result is exactly the remainder.

Furthermore, when this value is zero:

$$
P(a)=0
$$

we immediately obtain a root and a factor:

$$
\boxed{a\text{ is a root}\iff x-a\text{ is a factor}}
$$
