# Underdetermined Systems

A system of equations is **underdetermined** when it does not provide enough independent constraints to determine a unique solution. In a compatible linear system, this results in infinitely many solutions.

## 1. Definition

Consider a linear system:

$$
A\mathbf{x}=\mathbf{b}
$$

A system is indeterminate when it has infinitely many solutions.

For example:

$$
\begin{cases}
x+y=5\\
2x+2y=10
\end{cases}
$$

The second equation is simply twice the first one, so both equations represent the same constraint.

The system therefore reduces to:

$$
x+y=5
$$

One variable can be chosen freely.

If

$$
y=t
$$

then

$$
x=5-t
$$

and all solutions can be written as

$$
(x,y)=(5-t,t),
\qquad t\in\mathbb{R}
$$

## 2. Geometric interpretation

In two variables, each linear equation represents a line.

For the system

$$
\begin{cases}
x+y=5\\
2x+2y=10
\end{cases}
$$

both equations represent exactly the same line.

Therefore, every point on that line is a solution.

:::function-graph{expression="5-x" restriction="-5<=x<=10"}
:::

A determined system has a unique intersection point, while an inconsistent system has no intersection.

## 3. Dependence between equations

The fundamental cause of an indeterminate system is that its equations are not all independent.

For example:

$$
\begin{cases}
x+y+z=6\\
2x+2y+2z=12
\end{cases}
$$

The second equation is twice the first one.

Therefore, there is only one independent constraint for three unknowns.

We can choose two variables as parameters:

$$
y=s,\qquad z=t
$$

Then:

$$
x=6-s-t
$$

and the general solution is

$$
(x,y,z)=(6-s-t,s,t)
$$

with

$$
s,t\in\mathbb{R}
$$

## 4. Rank and number of unknowns

For a linear system

$$
A\mathbf{x}=\mathbf{b}
$$

the number of solutions is related to the rank of the coefficient matrix $A$ and the number of unknowns $n$.

If the system is consistent and

$$
\operatorname{rank}(A)<n
$$

then there are free variables and therefore infinitely many solutions.

The number of free variables is

$$
n-\operatorname{rank}(A)
$$

For example, if a system has $5$ unknowns and

$$
\operatorname{rank}(A)=3
$$

then it has

$$
5-3=2
$$

free variables.

## 5. Row-echelon form

Gaussian elimination makes it easy to identify free variables.

Consider:

$$
\begin{cases}
x+y+z=4\\
2x+2y+2z=8
\end{cases}
$$

The augmented matrix is

$$
\left[
\begin{array}{ccc|c}
1&1&1&4\\
2&2&2&8
\end{array}
\right]
$$

Applying

$$
R_2\leftarrow R_2-2R_1
$$

gives

$$
\left[
\begin{array}{ccc|c}
1&1&1&4\\
0&0&0&0
\end{array}
\right]
$$

Only one independent equation remains:

$$
x+y+z=4
$$

The variables $y$ and $z$ are free.

Taking

$$
y=s,\qquad z=t
$$

gives

$$
x=4-s-t
$$

## 6. Determined, indeterminate, and inconsistent systems

A linear system can have three main types of outcome:

| Type          | Number of solutions | Interpretation                      |
| ------------- | ------------------: | ----------------------------------- |
| Determined    |                   1 | There is a unique solution          |
| Indeterminate |     Infinitely many | There are free variables            |
| Inconsistent  |                   0 | The equations contradict each other |

For a consistent system:

- if $\operatorname{rank}(A)=n$, there is a unique solution;
- if $\operatorname{rank}(A)<n$, there are infinitely many solutions.

If

$$
\operatorname{rank}(A)\neq\operatorname{rank}(A^\ast)
$$

where $A^\ast$ is the augmented matrix, the system is inconsistent.

## 7. Interpretation using free variables

Free variables allow all solutions to be expressed using parameters.

For example:

$$
\begin{cases}
x+2y-z=3\\
x+2y-z=3
\end{cases}
$$

contains only one independent equation.

We can choose

$$
y=s,\qquad z=t
$$

and obtain

$$
x=3-2s+t
$$

Therefore,

$$
(x,y,z)=(3-2s+t,s,t)
$$

with $s,t\in\mathbb{R}$.

The solution is not a single point but a set of points.

## 8. Geometric interpretation in three dimensions

With three unknowns, a linear equation normally represents a plane.

If two equations represent the same plane, their intersection contains infinitely many points.

Consider:

$$
\begin{cases}
x+y+z=3\\
2x+2y+2z=6
\end{cases}
$$

Both equations represent the same plane.

Therefore, there are infinitely many solutions.

If there are three unknowns and only one independent equation, there are normally two free variables.

## 9. Homogeneous systems

An important special case is the homogeneous system:

$$
A\mathbf{x}=\mathbf{0}
$$

It always has at least the trivial solution:

$$
\mathbf{x}=\mathbf{0}
$$

If

$$
\operatorname{rank}(A)<n
$$

there are also infinitely many non-trivial solutions.

For example:

$$
\begin{cases}
x+y+z=0\\
2x+2y+2z=0
\end{cases}
$$

we can take

$$
y=s,\qquad z=t
$$

and obtain

$$
x=-s-t
$$

Therefore:

$$
\mathbf{x}
=
s
\begin{pmatrix}
-1\\
1\\
0
\end{pmatrix}
+
t
\begin{pmatrix}
-1\\
0\\
1
\end{pmatrix}
$$

This shows that the solutions form a vector subspace.

## 10. How to identify an indeterminate system

A practical strategy is:

1. Write the augmented matrix.
2. Apply Gaussian elimination.
3. Obtain row-echelon form.
4. Identify the pivot variables.
5. Identify the free variables.
6. Check that no contradiction appears.
7. Express the pivot variables in terms of the free variables.

A row of the form

$$
[0\quad0\quad\cdots\quad0\mid c],
\qquad c\neq0
$$

indicates that the system is inconsistent.

If there is no contradiction and free variables remain, the system is indeterminate.

## 11. Complete example

Consider:

$$
\begin{cases}
x+y+z=6\\
2x+2y+2z=12\\
x-y+z=2
\end{cases}
$$

The second equation is dependent on the first.

Subtracting the first equation from the third gives:

$$
(x-y+z)-(x+y+z)=2-6
$$

so

$$
-2y=-4
$$

and therefore

$$
y=2
$$

Substituting into the first equation:

$$
x+2+z=6
$$

and therefore:

$$
x+z=4
$$

We can take

$$
z=t
$$

and obtain

$$
x=4-t
$$

The general solution is:

$$
(x,y,z)=(4-t,2,t),
\qquad t\in\mathbb{R}
$$

There is one free variable, $z$, so there are infinitely many solutions.

## 12. Underdetermined and overdetermined systems

It is important to distinguish between the number of equations and the number of unknowns.

A system with fewer equations than unknowns is called **underdetermined**. It may have infinitely many solutions, but it can also be inconsistent.

A system with more equations than unknowns is called **overdetermined**. It may have one solution, no solution, or, in special cases, infinitely many solutions.

Therefore, having fewer equations than unknowns alone is not sufficient to conclude that a system has infinitely many solutions.

## Summary

A linear system is indeterminate when it is consistent and contains free variables.

The fundamental condition is:

$$
\operatorname{rank}(A)<n
$$

where $n$ is the number of unknowns.

The main ideas are:

- some equations may be dependent;
- free variables can be chosen as parameters;
- pivot variables depend on the free variables;
- the number of free variables is $n-\operatorname{rank}(A)$;
- an indeterminate system has infinitely many solutions;
- Gaussian elimination provides a systematic way to identify it.

Parametric form allows us to describe **all** solutions of the system rather than finding only one particular solution.
