# Systems of equations

A **system of equations** is a set of two or more equations that share the same unknowns.

The solution of a system is the set of values that satisfies **all the equations simultaneously**.

For example:

$$
\begin{cases}
x+y=7\\
x-y=1
\end{cases}
$$

## Methods for solving systems

The main methods for solving systems of equations are:

- **Substitution**: isolate one unknown in one equation and substitute it into the other.
- **Equating**: isolate the same unknown in both equations and then set the expressions equal.
- **Elimination**: add or subtract equations to eliminate one of the unknowns.
- **Graphical method**: graph the equations and find their intersection points.

## Substitution method

Consider the system:

$$
\begin{cases}
x+y=7\\
x-y=1
\end{cases}
$$

Isolate $y$ in the first equation:

$$
y=7-x
$$

Substitute this expression into the second equation:

$$
x-(7-x)=1
$$

Simplify:

$$
x-7+x=1
$$

$$
2x=8
$$

Therefore:

$$
x=4
$$

Now substitute $x=4$ into:

$$
y=7-x
$$

We obtain:

$$
y=7-4=3
$$

Therefore, the solution is:

$$
\boxed{(x,y)=(4,3)}
$$

## Equating method

Consider:

$$
\begin{cases}
2x+y=8\\
x-y=1
\end{cases}
$$

Isolate $y$ in both equations:

$$
y=8-2x
$$

$$
y=x-1
$$

Since both expressions are equal to $y$, we can set them equal:

$$
8-2x=x-1
$$

$$
9=3x
$$

$$
x=3
$$

Substitute:

$$
y=3-1=2
$$

The solution is:

$$
\boxed{(x,y)=(3,2)}
$$

## Elimination method

Consider:

$$
\begin{cases}
2x+y=7\\
3x-y=8
\end{cases}
$$

Add the two equations:

$$
(2x+y)+(3x-y)=7+8
$$

The $y$ terms cancel:

$$
5x=15
$$

Therefore:

$$
x=3
$$

Substitute into the first equation:

$$
2(3)+y=7
$$

$$
6+y=7
$$

$$
y=1
$$

The solution is:

$$
\boxed{(x,y)=(3,1)}
$$

## Graphical method

Each linear equation with two unknowns represents a line.

For example:

$$
\begin{cases}
y=7-x\\
y=x-1
\end{cases}
$$

The solution of the system corresponds to the **point where the two lines intersect**.

::contentReference[oaicite:2]{index=2}

In this case, the lines intersect at:

$$
(4,3)
$$

## Types of systems

A system of two linear equations can have three types of solutions.

### One solution

The lines intersect at exactly one point.

$$
\boxed{\text{One solution}}
$$

### No solution

The lines are parallel and never intersect.

$$
\boxed{\text{No solution}}
$$

### Infinitely many solutions

Both equations represent the same line.

$$
\boxed{\text{Infinitely many solutions}}
$$

## Systems of three equations

We can also work with three or more unknowns.

For example:

$$
\begin{cases}
x+y+z=6\\
x-y+z=4\\
2x+y-z=3
\end{cases}
$$

These systems can be solved using substitution, elimination, or matrix methods such as **Gaussian elimination**.

## Strategy for solving a system

1. Identify the unknowns.
2. Choose the most convenient method.
3. Solve the system.
4. Find the value of each unknown.
5. Check the solution by substituting it into all the equations.

A solution is only correct if it satisfies **every equation in the system**.
