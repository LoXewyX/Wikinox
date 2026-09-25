# Exponential and logarithmic functions

**Exponential functions** and **logarithmic functions** are closely related. In fact, a logarithmic function is the **inverse function** of an exponential function.

## Exponential function

An exponential function has the form:

$$
f(x)=a^x
$$

where:

$$
a>0,\qquad a\neq1
$$

The base $a$ determines the behavior of the function.

### Exponential growth

If:

$$
a>1
$$

the function is increasing.

For example:

$$
f(x)=2^x
$$

:::function-graph{expression="2^x" restriction="-5<=x<=5"}
:::

As $x$ increases, the value of the function grows increasingly quickly.

### Exponential decay

If:

$$
0<a<1
$$

the function is decreasing.

For example:

$$
f(x)=\left(\frac12\right)^x
$$

:::function-graph{expression="(1/2)^x" restriction="-5<=x<=5"}
:::

## Properties of powers

Exponential functions use the properties of powers:

$$
a^x\cdot a^y=a^{x+y}
$$

$$
\frac{a^x}{a^y}=a^{x-y}
$$

$$
(a^x)^y=a^{xy}
$$

$$
a^{-x}=\frac{1}{a^x}
$$

These properties are especially useful when solving exponential equations.

## Logarithmic function

A logarithmic function is the inverse of an exponential function.

It is written as:

$$
f(x)=\log_a(x)
$$

where:

$$
a>0,\qquad a\neq1,\qquad x>0
$$

The fundamental relationship between logarithms and exponentials is:

$$
\log_a(x)=y
\iff
a^y=x
$$

For example:

$$
\log_2(8)=3
$$

because:

$$
2^3=8
$$

### Logarithmic function with base 2

The function:

$$
f(x)=\log_2(x)
$$

is only defined for:

$$
x>0
$$

:::function-graph{expression="log(x)/log(2)" restriction="0.1<=x<=10"}
:::

## Domain and range

For an exponential function:

$$
f(x)=a^x
$$

the domain is:

$$
D_f=\mathbb{R}
$$

and the range is:

$$
R_f=(0,\infty)
$$

An exponential function never takes values equal to or less than zero.

For a logarithmic function:

$$
f(x)=\log_a(x)
$$

the domain is:

$$
D_f=(0,\infty)
$$

and the range is:

$$
R_f=\mathbb{R}
$$

## Relationship between the functions

The functions:

$$
f(x)=a^x
$$

and

$$
g(x)=\log_a(x)
$$

are inverse functions.

Therefore:

$$
\log_a(a^x)=x
$$

and:

$$
a^{\log_a(x)}=x
$$

Geometrically, their graphs are symmetric about the line:

$$
y=x
$$

We can visualize both functions:

:::function-graph{expression="2^x" restriction="-5<=x<=5"}
:::

:::function-graph{expression="log(x)/log(2)" restriction="0.1<=x<=10"}
:::

## Properties of logarithms

For $x>0$ and $y>0$:

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

These properties allow complicated expressions to be transformed into simpler ones.

## Natural logarithm

The **natural logarithm** is the logarithm with base $e$:

$$
\ln(x)=\log_e(x)
$$

where:

$$
e\approx2.71828
$$

The corresponding exponential function is:

$$
e^x
$$

Therefore:

$$
\ln(e^x)=x
$$

and:

$$
e^{\ln(x)}=x
$$

## Change of base

We can calculate a logarithm in any base by using another base:

$$
\log_a(x)=\frac{\log_b(x)}{\log_b(a)}
$$

In particular:

$$
\log_a(x)=\frac{\ln(x)}{\ln(a)}
$$

## Solving exponential equations

If we can write both sides using the same base:

$$
2^x=8
$$

Since:

$$
8=2^3
$$

we obtain:

$$
2^x=2^3
$$

and therefore:

$$
x=3
$$

When we cannot use the same base, we can apply logarithms.

For example:

$$
3^x=10
$$

Apply $\ln$ to both sides:

$$
\ln(3^x)=\ln(10)
$$

Using the power property:

$$
x\ln(3)=\ln(10)
$$

Therefore:

$$
x=\frac{\ln(10)}{\ln(3)}
$$

## Solving logarithmic equations

Consider:

$$
\log_2(x)=5
$$

Using the definition of a logarithm:

$$
2^5=x
$$

Therefore:

$$
x=32
$$

It is important to always check the **domain conditions**. The argument of a logarithm must be positive:

$$
x>0
$$

## Applications

Exponential and logarithmic functions appear in many real-world problems.

Some examples include:

- population growth;
- compound interest;
- exponential growth and decay;
- radioactive decay;
- logarithmic scales;
- sound intensity;
- earthquake magnitude;
- growth and learning models.

A typical exponential model is:

$$
P(t)=P_0e^{kt}
$$

where $P_0$ is the initial value and $k$ determines the growth or decay rate.

## Summary

The fundamental ideas are:

$$
\boxed{f(x)=a^x}
$$

exponential function, and

$$
\boxed{f(x)=\log_a(x)}
$$

logarithmic function.

They are inverse functions:

$$
\boxed{\log_a(a^x)=x}
$$

$$
\boxed{a^{\log_a(x)}=x}
$$

and their domains are different:

$$
a^x:\quad x\in\mathbb{R}
$$

$$
\log_a(x):\quad x>0
$$
