# Introduction to Engineering Mathematics

Engineering mathematics brings together the mathematical tools needed to model, analyze, and solve technical problems. It is not limited to algebraic calculation: it provides ways to describe physical systems, study change, analyze data, and formulate models.

Engineering applications continuously use concepts from algebra, functions, geometry, calculus, differential equations, statistics, and numerical methods.

## 1. What is mathematics used for in engineering?

Mathematics allows a real-world problem to be transformed into a model that can be analyzed.

A typical process is:

1. Identify the relevant quantities.
2. Define variables and parameters.
3. Establish mathematical relationships between them.
4. Solve or approximate the model.
5. Interpret the result in its physical or technical context.

For example, if an object moves at constant velocity, its position can be modeled by

$$
x(t)=x_0+vt
$$

where $x_0$ is the initial position, $v$ is the velocity, and $t$ is time.

The mathematical model allows the position to be calculated at any time within the considered interval.

## 2. Quantities, units, and dimensions

A physical quantity combines a numerical value with a unit.

For example:

$$
v=20\ \mathrm{m/s}
$$

The number $20$ represents the numerical value and $\mathrm{m/s}$ represents the unit.

In engineering, it is important to distinguish between units and dimensions.

Some fundamental quantities are:

| Quantity         | SI unit                  |
| ---------------- | ------------------------ |
| Length           | metre ($\mathrm{m}$)     |
| Mass             | kilogram ($\mathrm{kg}$) |
| Time             | second ($\mathrm{s}$)    |
| Temperature      | kelvin ($\mathrm{K}$)    |
| Electric current | ampere ($\mathrm{A}$)    |

Other units are derived from these fundamental quantities.

For example, velocity has dimensions

$$
[v]=\frac{L}{T}
$$

and acceleration has dimensions

$$
[a]=\frac{L}{T^2}
$$

## 3. Dimensional analysis

Dimensional analysis can be used to check whether an equation is consistent.

For example,

$$
d=vt
$$

has dimensions

$$
[d]=\frac{L}{T}T=L
$$

so both sides represent a length.

In contrast, an expression such as

$$
d=v+t
$$

is not dimensionally valid if $v$ represents a velocity and $t$ represents a time, because quantities with different dimensions cannot be directly added.

Dimensional analysis is also useful for detecting errors in formulas and unit conversions.

## 4. Applied algebra

Algebra is one of the most frequently used mathematical tools in engineering.

An equation can be rearranged to find an unknown quantity. For example,

$$
V=IR
$$

can be used to obtain the current:

$$
I=\frac{V}{R}
$$

or the resistance:

$$
R=\frac{V}{I}
$$

The ability to rearrange equations is fundamental when a model contains several variables.

## 5. Functions and models

A function describes how one quantity depends on another.

For example,

$$
y=f(x)=2x+3
$$

assigns a value of $y$ to each allowed value of $x$.

Engineering applications may involve linear, quadratic, exponential, logarithmic, trigonometric, and many other types of functions.

A linear function can be used to represent an approximate relationship between two quantities:

$$
y=mx+b
$$

where $m$ represents the slope and $b$ represents the initial value.

Functions provide a mathematical way to build models of real systems.

:::function-graph{expression="2*x+3" restriction="-5<=x<=5"}
:::

## 6. Functions of several variables

Many engineering systems depend on more than one variable.

For example, the temperature of a plate may depend on two spatial coordinates:

$$
T=T(x,y)
$$

An electrical model might depend on several quantities:

$$
P=P(V,I)
$$

Such functions allow more complex systems to be described than a simple relationship between one independent variable and one dependent variable.

## 7. Vectors

Vectors represent quantities that have both magnitude and direction.

A two-dimensional vector can be written as

$$
\mathbf{v}=
\begin{pmatrix}
v_x\\
v_y
\end{pmatrix}
$$

Its magnitude is

$$
\|\mathbf{v}\|
=
\sqrt{v_x^2+v_y^2}
$$

Vectors appear in mechanics, electricity, geometry, robotics, computer graphics, and many other fields.

For example, a force can be decomposed into components:

$$
\mathbf{F}=F_x\mathbf{i}+F_y\mathbf{j}
$$

## 8. Matrices and systems of equations

Systems of equations appear whenever several unknowns are related.

For example,

$$
\begin{cases}
2x+y=5\\
x-y=1
\end{cases}
$$

can be written using matrices:

$$
A\mathbf{x}=\mathbf{b}
$$

with

$$
A=
\begin{pmatrix}
2&1\\
1&-1
\end{pmatrix},
\qquad
\mathbf{x}=
\begin{pmatrix}
x\\
y
\end{pmatrix},
\qquad
\mathbf{b}=
\begin{pmatrix}
5\\
1
\end{pmatrix}
$$

The matrix formulation becomes particularly important as the number of variables increases.

## 9. Trigonometry

Trigonometry relates angles and lengths.

In a right triangle:

$$
\sin(\theta)=\frac{\text{opposite}}{\text{hypotenuse}}
$$

$$
\cos(\theta)=\frac{\text{adjacent}}{\text{hypotenuse}}
$$

$$
\tan(\theta)=\frac{\text{opposite}}{\text{adjacent}}
$$

These relationships appear in structures, mechanics, electrical engineering, signals, navigation, and geometric analysis.

:::right-triangle-diagram{mode="trigonometry"}
:::

## 10. Complex numbers

Complex numbers extend the real numbers by introducing the imaginary unit:

$$
i^2=-1
$$

A complex number has the form

$$
z=a+bi
$$

where $a$ is the real part and $b$ is the imaginary part.

Complex numbers are particularly important in electrical circuits, signal processing, control systems, and dynamic system analysis.

## 11. Differential calculus

A derivative measures how one quantity changes with respect to another.

If

$$
y=f(x)
$$

its derivative is

$$
f'(x)=\frac{dy}{dx}
$$

For example,

$$
f(x)=x^2
$$

has derivative

$$
f'(x)=2x
$$

In engineering, derivatives are used to study velocity, acceleration, rates of change, optimization, and system behavior.

## 12. Integral calculus

An integral can be used to accumulate quantities and calculate areas, volumes, and other accumulated quantities.

For example,

$$
\int_a^b f(x)\,dx
$$

represents the signed area between the graph of $f(x)$ and the $x$-axis over the interval $[a,b]$.

Integrals also appear in energy, work, mass, electric charge, probability, and many other applications.

## 13. Differential equations

A differential equation relates an unknown function to its derivatives.

For example,

$$
\frac{dy}{dt}=ky
$$

describes a process in which the rate of change is proportional to the current value.

Its general solution is

$$
y(t)=Ce^{kt}
$$

This type of model appears in growth and decay, circuits, vibrations, heat transfer, and dynamic systems.

## 14. Statistics and probability

Engineering uses data to analyze systems and make decisions based on measurements.

Some fundamental tools include:

- mean;
- median;
- variance;
- standard deviation;
- probability distributions;
- correlation;
- regression.

For example, the mean of $n$ observations is

$$
\bar{x}
=
\frac{1}{n}
\sum_{i=1}^{n}x_i
$$

Variance measures the spread of data around its mean.

## 15. Numerical methods

Many engineering problems do not have a simple analytical solution.

In such cases, numerical methods are used to obtain approximations.

Examples include:

- Newton's method;
- interpolation;
- numerical integration;
- numerical solutions of differential equations;
- matrix methods;
- numerical optimization.

For example, Newton's method can be used to approximate a root of

$$
f(x)=0
$$

using

$$
x_{n+1}
=
x_n-\frac{f(x_n)}{f'(x_n)}
$$

## 16. Modeling an engineering problem

A real-world problem can be progressively transformed into a mathematical model.

For example, consider the motion of a vehicle.

**Physical problem**

Determine the position of the vehicle over time.

**Variables**

$$
x(t),\qquad v(t),\qquad a(t)
$$

**Relationships**

$$
v(t)=\frac{dx}{dt}
$$

$$
a(t)=\frac{dv}{dt}
$$

If acceleration is constant,

$$
a(t)=a
$$

we can obtain

$$
v(t)=v_0+at
$$

and then

$$
x(t)=x_0+v_0t+\frac12at^2
$$

The physical problem has been converted into a set of mathematical relationships that can be analyzed and solved.

## 17. Fundamental mathematical tools

Throughout engineering studies, the following areas appear repeatedly:

| Area                   | Applications                        |
| ---------------------- | ----------------------------------- |
| Algebra                | Equations and models                |
| Geometry               | Space, structures, and measurements |
| Trigonometry           | Angles and components               |
| Linear algebra         | Vectors, matrices, and systems      |
| Differential calculus  | Rates of change and optimization    |
| Integral calculus      | Accumulation and areas              |
| Differential equations | Dynamic systems                     |
| Probability            | Uncertainty and random models       |
| Statistics             | Data analysis                       |
| Numerical methods      | Computational approximation         |

## 18. Problem-solving strategy

A general strategy is:

1. **Identify the problem.**
2. **Define the variables.**
3. **Write down the units.**
4. **Determine which mathematical relationships are relevant.**
5. **Build the model.**
6. **Solve it symbolically or numerically.**
7. **Check dimensions and results.**
8. **Interpret the result physically.**

A mathematical solution should not automatically be considered a physically valid solution. The result must also satisfy the constraints of the problem.

## Summary

Engineering mathematics provides a language for describing and analyzing technical systems.

The fundamental concepts include:

- algebra and equations;
- functions and modeling;
- units and dimensional analysis;
- vectors and matrices;
- trigonometry;
- complex numbers;
- derivatives and integrals;
- differential equations;
- probability and statistics;
- numerical methods.

The goal is not simply to perform calculations, but to **build mathematical models that correctly represent real-world problems and allow their results to be analyzed**.
