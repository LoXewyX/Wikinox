# Logarithms

**Logarithms** are a mathematical tool that allows us to find an unknown exponent.

To understand them properly, we first need to remember what a power means.

## 1. Review: powers

A power has the form

$$
a^n
$$

where:

- $a$ is the **base**.
- $n$ is the **exponent**.
- The result is the number obtained by multiplying the base by itself $n$ times.

For example:

$$
2^3=2\cdot2\cdot2=8
$$

Therefore:

$$
2^3=8
$$

Here we know the base $2$ and the exponent $3$, and we obtain the result $8$.

But what happens if we know the base and the result, but we do not know the exponent?

For example:

$$
2^x=8
$$

We know that:

$$
2^3=8
$$

so:

$$
x=3
$$

Logarithms allow us to express precisely this question.

---

## 2. What is a logarithm?

A logarithm answers the question:

> **To what exponent must we raise a base to obtain a given number?**

The expression

$$
\log_b(x)=y
$$

means exactly the same thing as:

$$
b^y=x
$$

That is:

$$
\boxed{\log_b(x)=y\iff b^y=x}
$$

For example:

$$
\log_2(8)=3
$$

because:

$$
2^3=8
$$

The logarithm is asking:

> To what exponent must we raise $2$ to obtain $8$?

The answer is $3$.

---

## 3. The three parts of a logarithm

In the expression

$$
\log_b(x)=y
$$

we have three elements:

- $b$: the **base**.
- $x$: the **argument** of the logarithm.
- $y$: the **value of the logarithm**.

For example:

$$
\log_3(81)=4
$$

In this case:

- the base is $3$;
- the argument is $81$;
- the result is $4$.

Why?

Because:

$$
3^4=81
$$

---

## 4. The relationship between powers and logarithms

Logarithms and powers are directly related.

We can move from one form to the other:

$$
b^y=x
$$

is equivalent to:

$$
\log_b(x)=y
$$

For example:

$$
5^3=125
$$

can be written as:

$$
\log_5(125)=3
$$

Another example:

$$
10^4=10000
$$

is equivalent to:

$$
\log_{10}(10000)=4
$$

And:

$$
7^2=49
$$

is equivalent to:

$$
\log_7(49)=2
$$

### Fundamental rule

Whenever we see:

$$
\log_b(x)=y
$$

we can immediately transform it into:

$$
b^y=x
$$

This equivalence is the foundation of the study of logarithms.

---

## 5. Why do we need logarithms?

Suppose we want to solve:

$$
2^x=32
$$

We can recognize that:

$$
2^5=32
$$

and conclude that:

$$
x=5
$$

But now imagine:

$$
2^x=17
$$

There is no simple integer exponent that we can recognize mentally.

We can express the solution using a logarithm:

$$
x=\log_2(17)
$$

The logarithm gives us a mathematical way to represent that exponent.

Therefore, if we have:

$$
a^x=b
$$

we can write:

$$
\boxed{x=\log_a(b)}
$$

---

## 6. Conditions for a logarithm to exist

We cannot use any number as a base or any number as an argument.

For

$$
\log_b(x)
$$

to be defined over the real numbers, two conditions must hold:

$$
b>0
$$

and

$$
b\neq1
$$

In addition, the argument must be positive:

$$
x>0
$$

Therefore:

$$
\boxed{b>0,\quad b\neq1,\quad x>0}
$$

### Why must the argument be positive?

Consider a power with a positive base:

$$
2^x
$$

The result is always positive, regardless of the value of $x$.

For example:

$$
2^3=8
$$

$$
2^0=1
$$

$$
2^{-3}=\frac{1}{8}
$$

All of these results are positive.

Therefore, there is no real number $x$ satisfying:

$$
2^x=-4
$$

Consequently:

$$
\log_2(-4)
$$

is not defined over the real numbers.

We also cannot calculate:

$$
\log_2(0)
$$

because no power of $2$ is equal to $0$.

Therefore:

$$
\boxed{\log_b(x)\text{ requires }x>0}
$$

---

## 7. Why can the base not be 1?

If the base were $1$, we would have:

$$
1^x=1
$$

for every value of $x$.

For example:

$$
1^2=1
$$

$$
1^5=1
$$

$$
1^{100}=1
$$

Therefore, the expression

$$
\log_1(1)
$$

would not have a unique result.

That is why the base must satisfy:

$$
\boxed{b\neq1}
$$

---

## 8. Logarithms with simple results

Many logarithms can be calculated directly using familiar powers.

### Example 1

$$
\log_2(16)
$$

We ask:

> To what exponent must we raise $2$ to obtain $16$?

Since:

$$
2^4=16
$$

we have:

$$
\boxed{\log_2(16)=4}
$$

### Example 2

$$
\log_3(27)
$$

Since:

$$
3^3=27
$$

we have:

$$
\boxed{\log_3(27)=3}
$$

### Example 3

$$
\log_5(625)
$$

Since:

$$
5^4=625
$$

we have:

$$
\boxed{\log_5(625)=4}
$$

---

## 9. Logarithms of 1

An important property is:

$$
\boxed{\log_b(1)=0}
$$

provided that the base is valid.

Why?

Because:

$$
b^0=1
$$

For example:

$$
\log_2(1)=0
$$

$$
\log_{10}(1)=0
$$

$$
\log_7(1)=0
$$

---

## 10. Logarithms of the base itself

Another fundamental property is:

$$
\boxed{\log_b(b)=1}
$$

because:

$$
b^1=b
$$

For example:

$$
\log_2(2)=1
$$

$$
\log_{10}(10)=1
$$

$$
\log_5(5)=1
$$

---

## 11. Logarithms of powers of the base

If we have:

$$
\log_b(b^n)
$$

the result is directly $n$:

$$
\boxed{\log_b(b^n)=n}
$$

For example:

$$
\log_2(2^7)=7
$$

because:

$$
2^7=128
$$

and therefore:

$$
\log_2(128)=7
$$

---

# 12. Common logarithm

The logarithm with base $10$ is called the **common logarithm** or **decimal logarithm**.

It is normally written as:

$$
\log(x)
$$

without explicitly writing the base.

When we write:

$$
\log(1000)
$$

we normally mean base $10$:

$$
\log_{10}(1000)
$$

Since:

$$
10^3=1000
$$

we have:

$$
\boxed{\log(1000)=3}
$$

Other examples:

$$
\log(10)=1
$$

$$
\log(100)=2
$$

$$
\log(10000)=4
$$

---

# 13. Natural logarithm

There is a particularly important mathematical constant:

$$
e
$$

where approximately:

$$
e\approx2.71828
$$

The logarithm with base $e$ is called the **natural logarithm** and is represented by:

$$
\ln(x)
$$

By definition:

$$
\ln(x)=\log_e(x)
$$

For example:

$$
\ln(e)=1
$$

because:

$$
e^1=e
$$

Also:

$$
\ln(e^3)=3
$$

because:

$$
e^3=e^3
$$

The natural logarithm appears throughout calculus, exponential growth and decay, differential equations, probability, and many other areas of mathematics.

---

# 14. Product property

One of the most important logarithm properties is:

$$
\boxed{\log_b(xy)=\log_b(x)+\log_b(y)}
$$

In other words, the logarithm of a product can be converted into a sum.

### Example

Consider:

$$
\log_2(8\cdot4)
$$

We can write:

$$
\log_2(8)+\log_2(4)
$$

Since:

$$
\log_2(8)=3
$$

and:

$$
\log_2(4)=2
$$

we obtain:

$$
3+2=5
$$

Therefore:

$$
\log_2(32)=5
$$

---

# 15. Quotient property

For a quotient:

$$
\boxed{
\log_b\left(\frac{x}{y}\right)
=
\log_b(x)-\log_b(y)
}
$$

### Example

Consider:

$$
\log_2\left(\frac{32}{4}\right)
$$

We can write:

$$
\log_2(32)-\log_2(4)
$$

Therefore:

$$
5-2=3
$$

and:

$$
\log_2(8)=3
$$

---

# 16. Power property

Another fundamental property is:

$$
\boxed{
\log_b(x^n)=n\log_b(x)
}
$$

The exponent becomes a multiplier in front of the logarithm.

### Example

$$
\log_2(8^2)
$$

can be written as:

$$
2\log_2(8)
$$

Since:

$$
\log_2(8)=3
$$

we obtain:

$$
2\cdot3=6
$$

Therefore:

$$
\log_2(64)=6
$$

---

# 17. Roots and logarithms

A root can be written as a power:

$$
\sqrt[n]{x}=x^{1/n}
$$

Therefore:

$$
\log_b(\sqrt[n]{x})
=
\log_b(x^{1/n})
$$

Using the power property:

$$
\boxed{
\log_b(\sqrt[n]{x})
=
\frac{1}{n}\log_b(x)
}
$$

### Example

$$
\log_2(\sqrt{16})
$$

Since:

$$
\sqrt{16}=16^{1/2}
$$

we have:

$$
\log_2(16^{1/2})
=
\frac12\log_2(16)
$$

Since:

$$
\log_2(16)=4
$$

we obtain:

$$
\frac12\cdot4=2
$$

Therefore:

$$
\boxed{\log_2(4)=2}
$$

---

# 18. Expanding logarithmic expressions

The properties above allow us to transform one logarithm into several.

For example:

$$
\log_b(xyz)
$$

can be expanded as:

$$
\boxed{
\log_b(x)+\log_b(y)+\log_b(z)
}
$$

And:

$$
\log_b\left(\frac{x^2y}{z}\right)
$$

can be expanded as:

$$
\log_b(x^2)+\log_b(y)-\log_b(z)
$$

Using the power property:

$$
\boxed{
2\log_b(x)+\log_b(y)-\log_b(z)
}
$$

---

# 19. Condensing logarithmic expressions

We can also perform the reverse process.

For example:

$$
\log_b(x)+\log_b(y)
$$

can be written as:

$$
\boxed{
\log_b(xy)
}
$$

And:

$$
\log_b(x)-\log_b(y)
$$

can be written as:

$$
\boxed{
\log_b\left(\frac{x}{y}\right)
}
$$

Also:

$$
3\log_b(x)
$$

can be written as:

$$
\boxed{
\log_b(x^3)
}
$$

These transformations are particularly useful when solving logarithmic equations.

---

# 20. Change of base

Sometimes we need to calculate a logarithm whose base is not directly available on a calculator.

We can use the **change-of-base formula**:

$$
\boxed{
\log_b(x)
=
\frac{\log_a(x)}{\log_a(b)}
}
$$

The base $a$ can be any valid base.

In particular, we can use $10$:

$$
\boxed{
\log_b(x)
=
\frac{\log(x)}{\log(b)}
}
$$

or $e$:

$$
\boxed{
\log_b(x)
=
\frac{\ln(x)}{\ln(b)}
}
$$

### Example

Suppose we want to calculate:

$$
\log_2(10)
$$

Using change of base:

$$
\log_2(10)
=
\frac{\log(10)}{\log(2)}
$$

Since:

$$
\log(10)=1
$$

we obtain:

$$
\log_2(10)
=
\frac{1}{\log(2)}
$$

Approximately:

$$
\log_2(10)\approx3.3219
$$

This means that:

$$
2^{3.3219}\approx10
$$

---

# 21. Solving simple logarithmic equations

One of the main applications of logarithms is solving equations where the unknown appears as an exponent.

Consider:

$$
2^x=16
$$

We can transform the equation using a logarithm:

$$
\log_2(16)=x
$$

Since:

$$
\log_2(16)=4
$$

we obtain:

$$
\boxed{x=4}
$$

---

# 22. Solving an exponential equation using logarithms

Consider:

$$
3^x=20
$$

There is no simple integer exponent that produces $20$.

Take logarithms:

$$
\log(3^x)=\log(20)
$$

Using the power property:

$$
x\log(3)=\log(20)
$$

Solve for $x$:

$$
\boxed{
x=\frac{\log(20)}{\log(3)}
}
$$

Approximately:

$$
x\approx2.7268
$$

Therefore:

$$
3^{2.7268}\approx20
$$

---

# 23. Solving logarithmic equations using the definition

Suppose:

$$
\log_2(x)=5
$$

Using the definition of a logarithm:

$$
2^5=x
$$

Therefore:

$$
\boxed{x=32}
$$

Another example:

$$
\log_3(x)=4
$$

is equivalent to:

$$
3^4=x
$$

so:

$$
\boxed{x=81}
$$

---

# 24. When the argument contains an expression

Consider:

$$
\log_2(x-1)=3
$$

Using the definition:

$$
2^3=x-1
$$

Therefore:

$$
8=x-1
$$

and:

$$
\boxed{x=9}
$$

We must also check that the argument is positive:

$$
x-1>0
$$

For $x=9$:

$$
9-1=8>0
$$

Therefore, the solution is valid.

---

# 25. Equations with two logarithms

Consider:

$$
\log_2(x)+\log_2(4)=5
$$

Using the product property:

$$
\log_2(4x)=5
$$

Apply the definition:

$$
2^5=4x
$$

Therefore:

$$
32=4x
$$

and:

$$
\boxed{x=8}
$$

Check the domain:

$$
x>0
$$

Since $8>0$, the solution is valid.

---

# 26. Equations involving a difference of logarithms

Consider:

$$
\log_3(x)-\log_3(2)=2
$$

Using the quotient property:

$$
\log_3\left(\frac{x}{2}\right)=2
$$

Convert to exponential form:

$$
3^2=\frac{x}{2}
$$

Therefore:

$$
9=\frac{x}{2}
$$

and:

$$
\boxed{x=18}
$$

---

# 27. The importance of the domain

When solving a logarithmic equation, finding a value of $x$ is not enough.

We must also check that every logarithm argument is positive.

For example:

$$
\log(x-3)
$$

requires:

$$
x-3>0
$$

therefore:

$$
\boxed{x>3}
$$

If we obtain:

$$
x=2
$$

during the solution process, that value is not valid because:

$$
2-3=-1
$$

and:

$$
\log(-1)
$$

is not defined over the real numbers.

---

# 28. Common mistakes

Some apparently plausible rules are **not** true.

### Mistake 1: splitting a sum inside a logarithm

We cannot write:

$$
\log(x+y)=\log(x)+\log(y)
$$

This is false.

The correct property is:

$$
\log(xy)=\log(x)+\log(y)
$$

The product property applies to multiplication, not addition.

---

### Mistake 2: splitting a difference

We also cannot write:

$$
\log(x-y)=\log(x)-\log(y)
$$

This is false.

The correct property is:

$$
\log\left(\frac{x}{y}\right)
=
\log(x)-\log(y)
$$

---

### Mistake 3: forgetting the domain

We cannot automatically accept every solution obtained.

We must always check:

$$
\boxed{\text{argument}>0}
$$

---

### Mistake 4: confusing the base and the argument

In:

$$
\log_2(8)
$$

the base is $2$ and the argument is $8$.

They must not be switched.

---

# 29. Summary of the fundamental properties

For a valid base $b$:

### Logarithm of 1

$$
\boxed{\log_b(1)=0}
$$

### Logarithm of the base

$$
\boxed{\log_b(b)=1}
$$

### Product

$$
\boxed{
\log_b(xy)=\log_b(x)+\log_b(y)
}
$$

### Quotient

$$
\boxed{
\log_b\left(\frac{x}{y}\right)
=
\log_b(x)-\log_b(y)
}
$$

### Power

$$
\boxed{
\log_b(x^n)=n\log_b(x)
}
$$

### Change of base

$$
\boxed{
\log_b(x)
=
\frac{\log_a(x)}{\log_a(b)}
}
$$

### Relationship with powers

$$
\boxed{
\log_b(x)=y
\iff
b^y=x
}
$$

---

# 30. A procedure for working with logarithms

When we encounter a logarithmic expression, we can follow these steps:

1. **Identify the base and the argument.**
2. **Check the domain.**
3. **Look for familiar powers** to calculate the logarithm directly.
4. **Apply the product, quotient, and power properties** when necessary.
5. **Use change of base** when we need to calculate a logarithm with a particular base.
6. **Convert between logarithmic and exponential forms** when useful.
7. **Check solutions** in the original expression when solving an equation.

---

# 31. The fundamental idea

The most important idea to remember is:

$$
\boxed{
\log_b(x)=y
\iff
b^y=x
}
$$

A logarithm is not a completely separate operation from powers.

It is another way of expressing the same relationship.

If we know that:

$$
2^5=32
$$

then we automatically know that:

$$
\log_2(32)=5
$$

And if we know that:

$$
\log_3(81)=4
$$

then we know that:

$$
3^4=81
$$

Therefore, to learn logarithms properly, it is essential to first understand powers and their properties.
