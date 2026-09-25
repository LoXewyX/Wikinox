# Rouché–Frobenius Theorem

The **Rouché–Frobenius theorem** provides a criterion for determining whether a system of linear equations has:

- no solutions,
- exactly one solution, or
- infinitely many solutions.

It is based on comparing the **rank of the coefficient matrix** with the **rank of the augmented matrix**.

---

## 1. Linear systems

Consider a system of `m` linear equations with `n` unknowns:

$$
\begin{cases}
a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=b_1\\
a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=b_2\\
\vdots\\
a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n=b_m
\end{cases}
$$

It can be written in matrix form as:

$$
\boxed{A\mathbf{x}=\mathbf{b}}
$$

where:

- $A$ is the **coefficient matrix**,
- $\mathbf{x}$ is the vector of unknowns,
- $\mathbf{b}$ is the vector of constants.

For example:

$$
\begin{cases}
x+y=3\\
2x-y=0
\end{cases}
$$

can be written as:

$$
\begin{pmatrix}
1&1\\
2&-1
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
3\\
0
\end{pmatrix}
$$

---

## 2. Coefficient and augmented matrices

The **coefficient matrix** is:

$$
A=
\begin{pmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{m1}&a_{m2}&\cdots&a_{mn}
\end{pmatrix}
$$

The **augmented matrix** is obtained by adding the constants:

$$
[A\mid\mathbf{b}]
$$

For example:

$$
\begin{cases}
x+y=3\\
2x-y=0
\end{cases}
$$

has:

$$
A=
\begin{pmatrix}
1&1\\
2&-1
\end{pmatrix}
$$

and:

$$
[A\mid\mathbf{b}]
=
\left[
\begin{array}{cc|c}
1&1&3\\
2&-1&0
\end{array}
\right]
$$

The theorem compares:

$$
\boxed{\operatorname{rank}(A)}
$$

with:

$$
\boxed{\operatorname{rank}([A\mid\mathbf{b}])}
$$

---

## 3. Statement of the Rouché–Frobenius theorem

For a linear system

$$
A\mathbf{x}=\mathbf{b}
$$

with $n$ unknowns:

$$
\boxed{
\text{The system is consistent}
\iff
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid\mathbf{b}])
}
$$

If the ranks are equal, the system has at least one solution.

The number of solutions depends on the common rank.

---

## 4. Classification of solutions

Let:

$$
r=\operatorname{rank}(A)
$$

and:

$$
r'=\operatorname{rank}([A\mid\mathbf{b}])
$$

There are three possibilities.

### Case 1: No solution

If:

$$
\boxed{
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid\mathbf{b}])
}
$$

then the system is **inconsistent**.

Therefore:

$$
\boxed{\text{No solution}}
$$

---

### Case 2: Unique solution

If:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid\mathbf{b}])
=
n
}
$$

where $n$ is the number of unknowns, then:

$$
\boxed{\text{Exactly one solution}}
$$

---

### Case 3: Infinitely many solutions

If:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid\mathbf{b}])
<
n
}
$$

then:

$$
\boxed{\text{Infinitely many solutions}}
$$

There are free variables, which can take arbitrary values.

---

## 5. Summary table

| Condition                                                   | Number of solutions |
| ----------------------------------------------------------- | ------------------- |
| $\operatorname{rank}(A)<\operatorname{rank}([A\mid b])$   | No solution         |
| $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=n$ | Exactly one         |
| $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])<n$ | Infinitely many     |

The most important condition is:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
}
$$

This determines whether the system is **consistent**.

---

# 6. Example: Unique solution

Consider:

$$
\begin{cases}
x+y=3\\
2x-y=0
\end{cases}
$$

The coefficient matrix is:

$$
A=
\begin{pmatrix}
1&1\\
2&-1
\end{pmatrix}
$$

The augmented matrix is:

$$
[A\mid b]
=
\left[
\begin{array}{cc|c}
1&1&3\\
2&-1&0
\end{array}
\right]
$$

Row reduction gives:

$$
\left[
\begin{array}{cc|c}
1&1&3\\
0&-3&-6
\end{array}
\right]
$$

Therefore:

$$
\operatorname{rank}(A)=2
$$

and:

$$
\operatorname{rank}([A\mid b])=2
$$

There are $n=2$ unknowns.

Thus:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
=
2
}
$$

Therefore, the system has exactly one solution.

Solving:

$$
y=2
$$

and:

$$
x=1
$$

so:

$$
\boxed{(x,y)=(1,2)}
$$

---

# 7. Example: No solution

Consider:

$$
\begin{cases}
x+y=2\\
2x+2y=5
\end{cases}
$$

The augmented matrix is:

$$
\left[
\begin{array}{cc|c}
1&1&2\\
2&2&5
\end{array}
\right]
$$

Perform:

$$
F_2\rightarrow F_2-2F_1
$$

giving:

$$
\left[
\begin{array}{cc|c}
1&1&2\\
0&0&1
\end{array}
\right]
$$

The coefficient matrix has rank:

$$
\operatorname{rank}(A)=1
$$

while the augmented matrix has rank:

$$
\operatorname{rank}([A\mid b])=2
$$

Therefore:

$$
\boxed{
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid b])
}
$$

The system has:

$$
\boxed{\text{No solution}}
$$

The second row represents:

$$
0=1
$$

which is impossible.

---

# 8. Example: Infinitely many solutions

Consider:

$$
\begin{cases}
x+y+z=3\\
2x+2y+2z=6
\end{cases}
$$

The augmented matrix is:

$$
\left[
\begin{array}{ccc|c}
1&1&1&3\\
2&2&2&6
\end{array}
\right]
$$

Perform:

$$
F_2\rightarrow F_2-2F_1
$$

giving:

$$
\left[
\begin{array}{ccc|c}
1&1&1&3\\
0&0&0&0
\end{array}
\right]
$$

Therefore:

$$
\operatorname{rank}(A)=1
$$

and:

$$
\operatorname{rank}([A\mid b])=1
$$

There are:

$$
n=3
$$

unknowns.

Thus:

$$
1=1<3
$$

and therefore:

$$
\boxed{\text{Infinitely many solutions}}
$$

We can choose two variables freely.

For example:

$$
y=s,\qquad z=t
$$

Then:

$$
x+s+t=3
$$

so:

$$
x=3-s-t
$$

Therefore:

$$
\boxed{
(x,y,z)=(3-s-t,s,t)
}
$$

where $s,t\in\mathbb{R}$.

---

# 9. Geometric interpretation

For systems with two unknowns, each linear equation represents a line.

For example:

$$
a_1x+b_1y=c_1
$$

represents a line in the plane.

There are three possibilities.

### Unique solution

Two lines intersect at exactly one point:

$$
\boxed{\text{One solution}}
$$

### No solution

Two distinct parallel lines never intersect:

$$
\boxed{\text{No solution}}
$$

### Infinitely many solutions

The equations represent the same line:

$$
\boxed{\text{Infinitely many solutions}}
$$

The rank conditions describe these geometric situations algebraically.

---

# 10. Three-dimensional interpretation

For three unknowns, each equation represents a plane.

A system can have:

- one common intersection point,
- no common intersection,
- a line of intersections,
- or, in degenerate cases, an entire plane of solutions.

The rank conditions determine the dimension of the solution set.

---

# 11. Number of free variables

If the system is consistent, then:

$$
\boxed{
\text{Number of free variables}
=
n-\operatorname{rank}(A)
}
$$

where $n$ is the number of unknowns.

For example, if:

$$
n=5
$$

and:

$$
\operatorname{rank}(A)=3
$$

then:

$$
5-3=2
$$

free variables exist.

Therefore, a consistent system has infinitely many solutions with two degrees of freedom.

---

# 12. Dimension of the solution set

For a consistent system:

$$
A\mathbf{x}=\mathbf{b}
$$

the dimension of the solution set is:

$$
\boxed{
n-\operatorname{rank}(A)
}
$$

Therefore:

|       Rank | Number of unknowns | Solution set      |
| ---------: | -----------------: | ----------------- |
|      $n$ |              $n$ | One point         |
|    $n-1$ |              $n$ | 1-dimensional     |
|    $n-2$ |              $n$ | 2-dimensional     |
| $\vdots$ |              $n$ | $\vdots$        |
|      $0$ |              $n$ | $n$-dimensional |

This applies when the system is consistent.

---

# 13. Homogeneous systems

A homogeneous system has the form:

$$
\boxed{A\mathbf{x}=\mathbf{0}}
$$

For example:

$$
\begin{cases}
x+y=0\\
2x+2y=0
\end{cases}
$$

A homogeneous system is **always consistent**, because:

$$
\mathbf{x}=\mathbf{0}
$$

is always a solution.

Therefore:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid0])
}
$$

The homogeneous system has:

- only the trivial solution if $\operatorname{rank}(A)=n$,
- infinitely many solutions if $\operatorname{rank}(A)<n$.

---

# 14. Relationship with invertibility

For a square matrix $A\in\mathbb{R}^{n\times n}$:

$$
\boxed{
A\text{ is invertible}
\iff
\operatorname{rank}(A)=n
}
$$

Equivalently:

$$
\boxed{
A\text{ is invertible}
\iff
\det(A)\neq0
}
$$

Therefore:

$$
\boxed{
\det(A)\neq0
\iff
\operatorname{rank}(A)=n
\iff
A^{-1}\text{ exists}
}
$$

In this case, every system:

$$
A\mathbf{x}=\mathbf{b}
$$

has exactly one solution.

---

# 15. Relationship with determinants

For a square $n\times n$ matrix:

$$
\det(A)\neq0
$$

implies:

$$
\operatorname{rank}(A)=n
$$

Therefore, for:

$$
A\mathbf{x}=\mathbf{b}
$$

we have:

$$
\boxed{\text{Exactly one solution}}
$$

for every vector $\mathbf{b}$.

If:

$$
\det(A)=0
$$

then:

$$
\operatorname{rank}(A)<n
$$

and the system can have either:

- no solution, or
- infinitely many solutions.

The determinant alone does **not** distinguish these two cases.

The augmented matrix is required.

---

# 16. Rouché–Frobenius and Gaussian elimination

Gaussian elimination can be used to determine both ranks.

Start with:

$$
[A\mid b]
$$

and apply elementary row operations.

For example:

$$
[A\mid b]
\longrightarrow
\text{row-echelon form}
$$

The number of non-zero rows in the coefficient part gives:

$$
\operatorname{rank}(A)
$$

The number of non-zero rows in the entire augmented matrix gives:

$$
\operatorname{rank}([A\mid b])
$$

This makes Gaussian elimination one of the most practical methods for applying the theorem.

---

# 17. The contradictory row

A particularly important situation is:

$$
\left[
\begin{array}{cccc|c}
0&0&\cdots&0&c
\end{array}
\right]
$$

where:

$$
c\neq0
$$

This represents:

$$
\boxed{0=c}
$$

which is impossible.

Therefore:

$$
\boxed{\text{The system has no solution}}
$$

This corresponds to:

$$
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid b])
$$

---

# 18. A practical procedure

To determine the number of solutions:

### Step 1 — Write the coefficient matrix

$$
A
$$

### Step 2 — Write the augmented matrix

$$
[A\mid b]
$$

### Step 3 — Perform Gaussian elimination

Reduce the augmented matrix to row-echelon form.

### Step 4 — Determine the ranks

Count the non-zero rows of:

$$
A
$$

and:

$$
[A\mid b]
$$

### Step 5 — Compare the ranks

If:

$$
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid b])
$$

then:

$$
\boxed{\text{No solution}}
$$

If:

$$
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
=
n
$$

then:

$$
\boxed{\text{Exactly one solution}}
$$

If:

$$
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
<
n
$$

then:

$$
\boxed{\text{Infinitely many solutions}}
$$

---

# 19. Fundamental theorem

For a system:

$$
A\mathbf{x}=\mathbf{b}
$$

with $n$ unknowns:

$$
\boxed{
\begin{aligned}
\operatorname{rank}(A)
&<
\operatorname{rank}([A\mid b])
&&\Longrightarrow \text{no solution}\\[4pt]
\operatorname{rank}(A)
&=
\operatorname{rank}([A\mid b])
=
n
&&\Longrightarrow \text{one solution}\\[4pt]
\operatorname{rank}(A)
&=
\operatorname{rank}([A\mid b])
<
n
&&\Longrightarrow \text{infinitely many solutions}
\end{aligned}
}
$$

---

# 20. Key ideas

| Concept                  | Result                                                    |
| ------------------------ | --------------------------------------------------------- |
| Coefficient matrix       | $A$                                                     |
| Augmented matrix         | $[A\mid b]$                                             |
| Consistent system        | $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])$ |
| No solution              | $\operatorname{rank}(A)<\operatorname{rank}([A\mid b])$ |
| Unique solution          | Both ranks equal $n$                                    |
| Infinite solutions       | Both ranks equal but are less than $n$                  |
| Free variables           | $n-\operatorname{rank}(A)$                              |
| Homogeneous system       | $A\mathbf{x}=0$                                         |
| Homogeneous system       | Always consistent                                         |
| Invertible square matrix | $\operatorname{rank}(A)=n$                              |
| Invertible square matrix | $\det(A)\neq0$                                          |

## Fundamental relationship

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
\iff
A\mathbf{x}=\mathbf{b}
\text{ has at least one solution}
}
$$

And, for $n$ unknowns:

$$
\boxed{
\begin{array}{c}
\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=n
\\[2pt]
\Downarrow
\\[2pt]
\text{Exactly one solution}
\end{array}
}
$$

$$
\boxed{
\begin{array}{c}
\operatorname{rank}(A)=\operatorname{rank}([A\mid b])<n
\\[2pt]
\Downarrow
\\[2pt]
\text{Infinitely many solutions}
\end{array}
}
$$

$$
\boxed{
\begin{array}{c}
\operatorname{rank}(A)<\operatorname{rank}([A\mid b])
\\[2pt]
\Downarrow
\\[2pt]
\text{No solution}
\end{array}
}
$$
