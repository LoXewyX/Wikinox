# Functions

A **function** is a relation that assigns exactly one output value to each input value.

The input variable is usually represented by $x$, and the output variable by $y$.

When we want to indicate that $y$ depends on $x$, we can write:

$$
y=f(x)
$$

The expression $f(x)$ is read **“f of x”** and represents the value of the function when the input is $x$.

For example:

$$
f(x)=2x+1
$$

This means that the function takes a number $x$, multiplies it by 2, and then adds 1.

:::function-graph{expression="2x+1" showWorkings=true}
:::

## 1. Elements of a function

A function mainly has:

- a **domain**, which is the set of values that can be used as inputs;
- a **codomain**, which is the target set containing the possible output values;
- a **rule of correspondence**, which describes how the output is obtained from the input.

A function can be represented using an algebraic expression, a table, a mapping diagram, or a graph.

For example:

$$
f(x)=x+2
$$

If $x=3$, we substitute $x$ with 3:

$$
f(3)=3+2=5
$$

Therefore, the function maps the value 3 to the value 5.

## 2. Independent and dependent variables

The variable $x$ is usually used as the **independent variable**.

The variable $y$, or equivalently $f(x)$, is usually used as the **dependent variable**, because its value depends on $x$.

For example:

$$
y=3x-2
$$

Here, $x$ is the input and $y$ is the output.

If $x=2$:

$$
y=3\cdot2-2=4
$$

Therefore:

$$
f(2)=4
$$

:::function-graph{expression="3x-2" showWorkings=true}
:::

## 3. Graphical representation of a function

A function can be represented visually using a **graph**.

The graph allows us to observe how the output value changes when the input value changes.

### 3.1. The Cartesian plane

To represent a function, we use a **Cartesian plane**.

It consists of two axes:

- the **$x$-axis**, which represents input values;
- the **$y$-axis**, which represents output values.

The point where the two axes intersect is called the **origin** and corresponds to the value 0 on both axes.

A point in the plane is written using a pair of numbers:

$$
(x,y)
$$

The first number indicates the horizontal position and the second indicates the vertical position.

For example, the point:

$$
(2,4)
$$

means that we move 2 units horizontally and 4 units vertically.

### 3.2. How we obtain the points of a function

Recall that a function can be written as:

$$
y=f(x)
$$

This means that the value of $y$ is obtained from the value of $x$.

To represent a function, we can choose different values of $x$, calculate the corresponding value of $f(x)$, and obtain several points.

For example, consider:

$$
f(x)=x+1
$$

We choose the value:

$$
x=0
$$

We substitute $x$ with 0:

$$
f(0)=0+1=1
$$

Therefore, we obtain the point:

$$
(0,1)
$$

Now choose:

$$
x=1
$$

Then:

$$
f(1)=1+1=2
$$

and we obtain:

$$
(1,2)
$$

If we continue calculating values, we obtain more points:

$$
(-2,-1)
$$

$$
(-1,0)
$$

$$
(0,1)
$$

$$
(1,2)
$$

$$
(2,3)
$$

All of these points belong to the graph of the function.

:::function-graph{expression="x+1" showWorkings=true}
:::

### 3.3. From points to the curve

A graph is not obtained simply by placing points.

After calculating enough points, we can observe how they behave and how the function changes between them.

If the function is continuous on an interval, the points can be connected to form a continuous line or curve.

For example, for:

$$
f(x)=x+1
$$

the points are aligned.

This happens because the function always increases at the same rate.

The resulting graph is a **straight line**.

### 3.4. Why a straight line appears

Consider the function:

$$
f(x)=2x+1
$$

The number 2 indicates how much $y$ increases when $x$ increases by one unit.

For example:

$$
f(0)=1
$$

$$
f(1)=3
$$

$$
f(2)=5
$$

We observe that every time $x$ increases by 1, $y$ increases by 2.

The change in $x$ can be represented by:

$$
\Delta x
$$

The symbol $\Delta$ is used to represent a **change** or **variation**.

Similarly, $\Delta y$ represents the change in $y$.

For an affine function, the relationship between these changes is constant:

$$
\frac{\Delta y}{\Delta x}=m
$$

The number $m$ is called the **slope**.

For example, for:

$$
f(x)=2x+1
$$

we have:

$$
m=2
$$

This means that for every unit we move horizontally, we move 2 units vertically.

That is why all the points maintain the same direction and the graph is a straight line.

:::function-graph{expression="2x+1" showWorkings=true}
:::

### 3.5. When the slope changes

Now consider:

$$
f(x)=x^2
$$

We calculate some values:

$$
f(-2)=4
$$

$$
f(-1)=1
$$

$$
f(0)=0
$$

$$
f(1)=1
$$

$$
f(2)=4
$$

The points are:

$$
(-2,4),\quad(-1,1),\quad(0,0),\quad(1,1),\quad(2,4)
$$

We observe that the function does not always increase at the same rate.

Between $x=-2$ and $x=-1$, the value of $y$ decreases by 3 units.

Between $x=-1$ and $x=0$, it decreases by 1 unit.

After the origin, it begins to increase:

$$
0\rightarrow1\rightarrow4
$$

Therefore, the slope changes continuously.

When the slope changes, the points are no longer aligned and a **curve** appears.

That is why the graph of:

$$
f(x)=x^2
$$

is a **parabola**.

:::function-graph{expression="x^2" showWorkings=true}
:::

### 3.6. What curvature means

The **curvature** of a graph is related to how its slope changes.

If the slope remains constant, we obtain a straight line.

If the slope changes, the graph can curve.

For example, in:

$$
f(x)=x^2
$$

the slope becomes increasingly larger as we move toward positive values of $x$.

On the left side of the parabola, the function decreases.

At the point:

$$
(0,0)
$$

it reaches its minimum value.

It then begins to increase.

:::function-graph{expression="x^2" showWorkings=true}
:::

The shape of the graph is therefore not arbitrary.

**The shape of a graph reflects how the function changes.**

### 3.7. How to recognize an increasing function

A function is **increasing** when, as $x$ increases, the value of $f(x)$ also increases.

For example:

$$
f(x)=2x+1
$$

If we move from:

$$
x=1
$$

to:

$$
x=2
$$

we have:

$$
f(1)=3
$$

and:

$$
f(2)=5
$$

The value of the function increases.

That is why the graph rises from left to right.

:::function-graph{expression="2x+1" showWorkings=true}
:::

### 3.8. How to recognize a decreasing function

A function is **decreasing** when, as $x$ increases, the value of $f(x)$ decreases.

For example:

$$
f(x)=-2x+1
$$

We have:

$$
f(0)=1
$$

and:

$$
f(1)=-1
$$

As $x$ increases, the value of the function decreases.

That is why the graph falls from left to right.

:::function-graph{expression="-2x+1" showWorkings=true}
:::

### 3.9. A graph can change direction

Not all functions are always increasing or always decreasing.

Consider:

$$
f(x)=x^2
$$

For negative values of $x$, the function decreases as we approach 0.

After reaching its minimum, it begins to increase.

We can observe this behavior in the graph:

:::function-graph{expression="x^2" showWorkings=true}
:::

This change in behavior allows us to identify important points on a graph, such as **maximums** and **minimums**.

### 3.10. Functions with two branches

Now consider:

$$
f(x)=\frac{1}{x}
$$

In this function, the denominator cannot be 0.

Therefore:

$$
x\neq0
$$

The symbol $\neq$ means **“not equal to”**.

The graph cannot pass through $x=0$.

When $x$ approaches 0 through positive values, $f(x)$ becomes very large.

For example:

$$
f(1)=1
$$

$$
f(0.1)=10
$$

$$
f(0.01)=100
$$

On the other side, when $x$ approaches 0 through negative values, we obtain negative values whose absolute value becomes increasingly large.

That is why the graph has two separate branches.

:::function-graph{expression="1/x" showWorkings=true}
:::

The line:

$$
x=0
$$

acts as a **vertical asymptote** of the function.

An asymptote is a line that the graph approaches without coinciding with it in the region under consideration.

### 3.11. The graph of the absolute value

The absolute value represents the distance of a number from zero.

It is written using vertical bars:

$$
|x|
$$

For example:

$$
|3|=3
$$

and:

$$
|-3|=3
$$

The function:

$$
f(x)=|x|
$$

can be interpreted as a function that converts negative values into their corresponding positive values while keeping positive values unchanged.

Therefore:

$$
f(-2)=2
$$

$$
f(-1)=1
$$

$$
f(0)=0
$$

$$
f(1)=1
$$

$$
f(2)=2
$$

The points form two straight lines that meet at the origin.

That is why the graph has a V shape.

:::function-graph{expression="abs(x)" showWorkings=true}
:::

### 3.12. The shape of the graph depends on the expression

We can observe a fundamental difference between several functions:

| Function    | Behavior                        | Approximate shape |
| ----------- | ------------------------------- | ----------------- |
| $f(x)=2x+1$ | Constant slope                  | Straight line     |
| $f(x)=x^2$  | Variable slope                  | Parabola          |
| $f(x)=      | x                               | $                 | Two linear behaviors | V shape |
| $f(x)=1/x$  | Domain separated into two parts | Two branches      |

The graph is therefore a visual representation of the behavior of the function.

We should not simply memorize the shape of each graph.

It is more important to understand **why that shape appears** from the expression of the function.

## 4. Constant function

A **constant function** always produces the same output value, regardless of the input value.

Its general form is:

$$
f(x)=c
$$

where $c$ is a constant number.

For example:

$$
f(x)=3
$$

For any value of $x$, the result is 3.

:::function-graph{expression="3" showWorkings=true}
:::

Its graph is a horizontal line.

## 5. Linear function

A linear function can be written in the form:

$$
f(x)=mx
$$

The number $m$ is called the **slope**.

The slope indicates how much $y$ changes when $x$ increases by one unit.

For example:

$$
f(x)=2x
$$

If $x$ increases by 1, the value of $f(x)$ increases by 2.

:::function-graph{expression="2x" showWorkings=true}
:::

If the slope is positive, the function increases.

For example:

$$
f(x)=2x
$$

If the slope is negative, the function decreases.

For example:

$$
f(x)=-2x
$$

:::function-graph{expression="-2x" showWorkings=true}
:::

## 6. Affine function

An affine function has the form:

$$
f(x)=mx+b
$$

The number $m$ is the **slope**, and $b$ is the value where the line crosses the $y$-axis.

For example:

$$
f(x)=2x+1
$$

In this function, the slope is $2$ and the constant term is $1$.

:::function-graph{expression="2x+1" showWorkings=true}
:::

If $b=0$, we obtain a linear function:

$$
f(x)=mx
$$

Therefore, every linear function is a particular case of an affine function.

## 7. Increasing and decreasing behavior

A function is **increasing** when its values increase as the variable $x$ increases.

For example:

$$
f(x)=2x+1
$$

:::function-graph{expression="2x+1" showWorkings=true}
:::

A function is **decreasing** when its values decrease as $x$ increases.

For example:

$$
f(x)=-2x+1
$$

:::function-graph{expression="-2x+1" showWorkings=true}
:::

For affine functions, the sign of the slope determines whether the function is increasing or decreasing.

The symbol $>$ means **“greater than”**, and the symbol $<$ means **“less than”**.

Therefore:

- if $m>0$, the function is increasing;
- if $m<0$, the function is decreasing;
- if $m=0$, the function is constant.

## 8. Quadratic function

A **quadratic function** has the form:

$$
f(x)=ax^2+bx+c
$$

where $a$, $b$, and $c$ are numbers and $a\neq0$.

The symbol $\neq$ means **“not equal to”**.

The symbol $x^2$ means that $x$ is raised to the exponent 2:

$$
x^2=x\cdot x
$$

For example:

$$
f(x)=x^2
$$

:::function-graph{expression="x^2" showWorkings=true}
:::

Its graph has the shape of a parabola.

If $a>0$, the parabola opens upward.

For example:

$$
f(x)=x^2
$$

If $a<0$, the parabola opens downward.

For example:

$$
f(x)=-x^2
$$

:::function-graph{expression="-x^2" showWorkings=true}
:::

## 9. Absolute value function

The **absolute value** of a number represents its distance from zero.

It is written using vertical bars:

$$
|x|
$$

For example:

$$
|3|=3
$$

and:

$$
|-3|=3
$$

The absolute value function is defined as:

$$
f(x)=|x|
$$

:::function-graph{expression="abs(x)" showWorkings=true}
:::

Its graph has a V shape.

## 10. Rational function

A **rational function** is a function that can be expressed as the quotient of two polynomials.

For example:

$$
f(x)=\frac{1}{x}
$$

The denominator cannot be equal to zero. Therefore:

$$
x\neq0
$$

The graph of this function has two branches.

:::function-graph{expression="1/x" showWorkings=true}
:::

The value $x=0$ does not belong to the domain of this function.

## 11. Domain of a function

The **domain** of a function is the set of input values for which the function is defined.

For example:

$$
f(x)=\frac{1}{x}
$$

We cannot use $x=0$, because division by zero is not defined.

Therefore, the domain is:

$$
D_f=\mathbb{R}\setminus\{0\}
$$

The symbol $\mathbb{R}$ represents the set of **real numbers**.

The symbol $\setminus$ represents the **set difference**: we take the elements of the first set that do not belong to the second set.

Therefore, $\mathbb{R}\setminus\{0\}$ means all real numbers except 0.

## 12. Range

The **range**, also called the **image**, is the set of values that the output of a function can take.

For example:

$$
f(x)=x^2
$$

The square of any real number is never negative.

Therefore:

$$
f(x)\geq0
$$

The symbol $\geq$ means **“greater than or equal to”**.

The range of this function is:

$$
[0,\infty)
$$

The symbol $\infty$ represents infinity.

The interval notation indicates that 0 belongs to the range and that the values continue indefinitely toward positive numbers.

## 13. Zeros of a function

A **zero of a function** is a value of $x$ for which the function has value 0.

Therefore, we look for values that satisfy:

$$
f(x)=0
$$

For example:

$$
f(x)=x-2
$$

We look for:

$$
x-2=0
$$

and obtain:

$$
x=2
$$

Therefore, $x=2$ is a zero of the function.

Graphically, it corresponds to the point where the graph crosses the $x$-axis.

:::function-graph{expression="x-2" showWorkings=true}
:::

## 14. Intersection with the $y$-axis

To find the intersection of a function with the $y$-axis, we calculate the value of the function when:

$$
x=0
$$

For example:

$$
f(x)=2x+3
$$

Then:

$$
f(0)=2\cdot0+3=3
$$

The graph crosses the $y$-axis at the point:

$$
(0,3)
$$

:::function-graph{expression="2x+3" showWorkings=true}
:::

## 15. Transformations of functions

We can obtain new functions from an existing function by modifying its expression.

For example, start with:

$$
f(x)=x^2
$$

If we add 2:

$$
g(x)=x^2+2
$$

the graph moves 2 units upward.

:::function-graph{expression="x^2+2" showWorkings=true}
:::

If we subtract 2:

$$
g(x)=x^2-2
$$

the graph moves 2 units downward.

:::function-graph{expression="x^2-2" showWorkings=true}
:::

If we replace $x$ with $x-2$:

$$
g(x)=(x-2)^2
$$

the graph moves 2 units to the right.

:::function-graph{expression="(x-2)^2" showWorkings=true}
:::

## 16. Functions and value tables

A function can also be represented using a **value table**.

For example, consider:

$$
f(x)=x+1
$$

We can calculate some values:

$$
f(0)=1
$$

$$
f(1)=2
$$

$$
f(2)=3
$$

$$
f(3)=4
$$

Each value of $x$ is associated with exactly one value of $f(x)$.

A value table allows us to obtain points of the graph of the function.

## 17. Functions and relations

Not every relation between two variables is a function.

For a relation to be a function, each input value must have **exactly one output value**.

For example:

$$
y=x+2
$$

defines a function because for every value of $x$, we obtain exactly one value of $y$.

On the other hand, a relation such as:

$$
x=y^2
$$

cannot be expressed as a function $y=f(x)$ over all real numbers because some values of $x$ correspond to two different values of $y$.

For example, if $x=4$:

$$
y=2
$$

or:

$$
y=-2
$$

Therefore, the same input value can produce two different outputs.

## 18. Composition of functions

We can apply one function after another.

If we have two functions $f$ and $g$, the composition is written:

$$
(f\circ g)(x)
$$

The symbol $\circ$ indicates that we first apply $g$ and then $f$.

For example:

$$
g(x)=x+1
$$

and:

$$
f(x)=2x
$$

First, we apply $g$:

$$
g(x)=x+1
$$

Then we apply $f$:

$$
f(g(x))=2(x+1)
$$

Therefore:

$$
(f\circ g)(x)=2x+2
$$

:::function-graph{expression="2x+2" showWorkings=true}
:::

## 19. Inverse function

An **inverse function** reverses the effect of a function.

The inverse function of $f$ is written:

$$
f^{-1}
$$

The exponent $-1$ in this notation does not mean that the function values are raised to the power $-1$. It indicates that we are referring to the inverse function.

For example:

$$
f(x)=x+2
$$

To obtain the inverse function, we interchange $x$ and $y$:

$$
y=x+2
$$

$$
x=y+2
$$

Solving for $y$:

$$
y=x-2
$$

Therefore:

$$
f^{-1}(x)=x-2
$$

:::function-graph{expression="x+2" showWorkings=true}
:::

:::function-graph{expression="x-2" showWorkings=true}
:::

The function and its inverse have graphs that are reflections of each other across the line:

$$
y=x
$$

## 20. Piecewise-defined functions

A function can use different expressions depending on the value of $x$.

For example:

$$
f(x)=
\begin{cases}
x+1 & \text{if } x<0\\
x^2 & \text{if } x\geq0
\end{cases}
$$

The symbol $<$ means **“less than”**.

The symbol $\geq$ means **“greater than or equal to”**.

Therefore, for negative values of $x$, we use $x+1$, while for values greater than or equal to 0, we use $x^2$.

:::function-graph{expression="x+1" restriction="x<0" showWorkings=true}
:::

:::function-graph{expression="x^2" restriction="x>=0" showWorkings=true}
:::

Piecewise-defined functions are especially useful for representing situations in which the same relationship changes depending on the interval being considered.
