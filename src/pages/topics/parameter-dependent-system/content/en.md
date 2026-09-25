# Parameter-dependent system of equations

A **parameter-dependent system of equations** is a system in which one or more coefficients contain an additional variable called a **parameter**.

The value of the parameter can determine whether the system has one solution, no solution, or infinitely many solutions.

For example:

$$
\begin{cases}
x+y=3\\
x+ay=2
\end{cases}
$$

The parameter is $a$.

## Solving according to the parameter

Consider:

$$
\begin{cases}
x+y=3\\
x+ay=2
\end{cases}
$$

Subtract the first equation from the second:

$$
(a-1)y=-1
$$

If:

$$
a\neq1
$$

we can solve for $y$:

$$
y=-\frac{1}{a-1}
$$

and then obtain $x$:

$$
x=3-y
$$

Therefore, for every $a\neq1$, there is a unique solution.

## Special case

Now consider:

$$
a=1
$$

The system becomes:

$$
\begin{cases}
x+y=3\\
x+y=2
\end{cases}
$$

The two equations have the same left-hand side but different right-hand sides.

Therefore, they cannot both be satisfied:

$$
\boxed{\text{No solution}}
$$

Thus, the system has:

$$
\boxed{
\begin{cases}
\text{One solution}, & a\neq1\\
\text{No solution}, & a=1
\end{cases}
}
$$

## Another example

Consider:

$$
\begin{cases}
x+y=2\\
2x+2y=k
\end{cases}
$$

The second equation is twice the first one when:

$$
k=4
$$

Therefore:

- If $k=4$, the two equations represent the same line and there are infinitely many solutions.
- If $k\neq4$, the equations are inconsistent and there is no solution.

Therefore:

$$
\boxed{
\begin{cases}
\text{Infinitely many solutions}, & k=4\\
\text{No solution}, & k\neq4
\end{cases}
}
$$

## Determinant and parameter

For a system of two equations:

$$
\begin{cases}
a_1x+b_1y=c_1\\
a_2x+b_2y=c_2
\end{cases}
$$

we can use the determinant:

$$
D=
\begin{vmatrix}
a_1&b_1\\
a_2&b_2
\end{vmatrix}
=
a_1b_2-a_2b_1
$$

If:

$$
D\neq0
$$

the system has a unique solution.

If:

$$
D=0
$$

the system may have no solution or infinitely many solutions. In this case, we must also analyze the constant terms.

## Strategy

To solve a parameter-dependent system:

1. Identify the parameter.
2. Solve the system symbolically.
3. Identify parameter values that make an operation invalid, such as division by zero.
4. Analyze those values separately.
5. Determine whether each case has one solution, no solution, or infinitely many solutions.
6. Express the result by separating the different parameter cases.
