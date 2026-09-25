# Inverse Matrices

The **inverse matrix** of a matrix is a matrix that, when multiplied by the original matrix, produces the **identity matrix**.

The inverse matrix is fundamental for solving systems of equations, transforming vectors, and studying linear transformations.

---

## 1. Definition

Let $A$ be a square matrix.

Its inverse is written as:

$$
A^{-1}
$$

and satisfies:

$$
\boxed{AA^{-1}=A^{-1}A=I}
$$

where $I$ is the **identity matrix**.

For example:

$$
I=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
$$

Therefore, $A^{-1}$ is the matrix that "undoes" the effect of $A$.

---

## 2. When does an inverse matrix exist?

Not every matrix has an inverse.

A square matrix $A$ is invertible if and only if:

$$
\boxed{\det(A)\neq0}
$$

Equivalently:

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ exists}
}
$$

If:

$$
\det(A)=0
$$

the matrix has no inverse and is called a **singular matrix**.

---

## 3. Inverse of a $2\times2$ matrix

Let:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

Its inverse is:

$$
\boxed{
A^{-1}
=
\frac{1}{ad-bc}
\begin{pmatrix}
d&-b\\
-c&a
\end{pmatrix}
}
$$

provided that:

$$
ad-bc\neq0
$$

That is:

$$
\det(A)\neq0
$$

---

## 4. Example: $2\times2$

Consider:

$$
A=
\begin{pmatrix}
2&1\\
1&1
\end{pmatrix}
$$

First, calculate the determinant:

$$
\det(A)=(2)(1)-(1)(1)
$$

$$
\det(A)=1
$$

Since:

$$
\det(A)\neq0
$$

the inverse exists.

Apply the formula:

$$
A^{-1}
=
\frac{1}{1}
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
$$

Therefore:

$$
\boxed{
A^{-1}=
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
}
$$

We can verify it:

$$
AA^{-1}
=
\begin{pmatrix}
2&1\\
1&1
\end{pmatrix}
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
$$

$$
=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
=I
$$

---

# 5. Example: a matrix without an inverse

Consider:

$$
A=
\begin{pmatrix}
1&2\\
2&4
\end{pmatrix}
$$

The determinant is:

$$
\det(A)=(1)(4)-(2)(2)
$$

$$
=4-4=0
$$

Therefore:

$$
\boxed{\det(A)=0}
$$

and:

$$
\boxed{A^{-1}\text{ does not exist}}
$$

The matrix is **singular**.

---

# 6. Properties of the inverse matrix

## Inverse of the inverse

$$
\boxed{(A^{-1})^{-1}=A}
$$

---

## Inverse of the identity matrix

$$
\boxed{I^{-1}=I}
$$

---

## Inverse of a product

If $A$ and $B$ are invertible:

$$
\boxed{(AB)^{-1}=B^{-1}A^{-1}}
$$

The order is reversed.

In general:

$$
(AB)^{-1}\neq A^{-1}B^{-1}
$$

---

## Inverse of the transpose

$$
\boxed{(A^T)^{-1}=(A^{-1})^T}
$$

---

## Determinant of the inverse

If $A$ is invertible:

$$
\boxed{
\det(A^{-1})=\frac{1}{\det(A)}
}
$$

---

# 7. Inverse and determinant

The relationship between the inverse and the determinant is:

$$
\boxed{
A^{-1}\text{ exists}
\iff
\det(A)\neq0
}
$$

This means that the determinant immediately tells us whether a square matrix is invertible.

| Determinant    | Inverse matrix |
| -------------- | -------------- |
| $\det(A)\neq0$ | Exists         |
| $\det(A)=0$    | Does not exist |

---

# 8. Calculating the inverse using Gauss-Jordan elimination

For larger matrices, we can calculate the inverse using **Gauss-Jordan elimination**.

We start with:

$$
A
$$

and construct the augmented matrix:

$$
\boxed{[A\mid I]}
$$

Then we apply elementary row operations until we obtain:

$$
[I\mid A^{-1}]
$$

In other words:

$$
[A\mid I]
\longrightarrow
[I\mid A^{-1}]
$$

---

# 9. Example using Gauss-Jordan elimination

Consider:

$$
A=
\begin{pmatrix}
2&1\\
1&1
\end{pmatrix}
$$

Construct:

$$
[A\mid I]
=
\left[
\begin{array}{cc|cc}
2&1&1&0\\
1&1&0&1
\end{array}
\right]
$$

Swap the rows:

$$
\left[
\begin{array}{cc|cc}
1&1&0&1\\
2&1&1&0
\end{array}
\right]
$$

Perform:

$$
F_2\rightarrow F_2-2F_1
$$

We obtain:

$$
\left[
\begin{array}{cc|cc}
1&1&0&1\\
0&-1&1&-2
\end{array}
\right]
$$

Now:

$$
F_2\rightarrow -F_2
$$

giving:

$$
\left[
\begin{array}{cc|cc}
1&1&0&1\\
0&1&-1&2
\end{array}
\right]
$$

Finally:

$$
F_1\rightarrow F_1-F_2
$$

We obtain:

$$
\left[
\begin{array}{cc|cc}
1&0&1&-1\\
0&1&-1&2
\end{array}
\right]
$$

Therefore:

$$
\boxed{
A^{-1}
=
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
}
$$

---

# 10. Inverse matrices and systems of equations

One of the most important applications of inverse matrices is solving systems of equations.

Consider:

$$
A\mathbf{x}=\mathbf{b}
$$

If $A$ is invertible, multiply both sides by $A^{-1}$:

$$
A^{-1}A\mathbf{x}=A^{-1}\mathbf{b}
$$

Since:

$$
A^{-1}A=I
$$

we obtain:

$$
I\mathbf{x}=A^{-1}\mathbf{b}
$$

Therefore:

$$
\boxed{\mathbf{x}=A^{-1}\mathbf{b}}
$$

---

# 11. Example

Consider the system:

$$
\begin{cases}
2x+y=5\\
x+y=3
\end{cases}
$$

We can write it as:

$$
\begin{pmatrix}
2&1\\
1&1
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
5\\
3
\end{pmatrix}
$$

That is:

$$
A\mathbf{x}=\mathbf{b}
$$

We know that:

$$
A^{-1}
=
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
$$

Therefore:

$$
\mathbf{x}=A^{-1}\mathbf{b}
$$

$$
\mathbf{x}
=
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
\begin{pmatrix}
5\\
3
\end{pmatrix}
$$

$$
=
\begin{pmatrix}
5-3\\
-5+6
\end{pmatrix}
$$

$$
=
\begin{pmatrix}
2\\
1
\end{pmatrix}
$$

Therefore:

$$
\boxed{x=2,\qquad y=1}
$$

---

# 12. Geometric interpretation

An invertible matrix represents a transformation that can be **undone**.

If:

$$
\mathbf{y}=A\mathbf{x}
$$

we can recover $\mathbf{x}$ using:

$$
\boxed{\mathbf{x}=A^{-1}\mathbf{y}}
$$

Therefore:

- $A$ applies a transformation.
- $A^{-1}$ reverses that transformation.

If:

$$
\det(A)=0
$$

the transformation reduces the dimension of the space and cannot be completely reversed.

---

# 13. Relationship with rank

For an $n\times n$ matrix:

$$
\boxed{
A\text{ is invertible}
\iff
\operatorname{rank}(A)=n
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

---

# 14. Adjugate matrix

Another way to calculate the inverse is using the **adjugate matrix**:

$$
\boxed{
A^{-1}
=
\frac{1}{\det(A)}
\operatorname{adj}(A)
}
$$

provided that:

$$
\det(A)\neq0
$$

The adjugate matrix is the transpose of the cofactor matrix:

$$
\boxed{
\operatorname{adj}(A)=C^T
}
$$

where $C$ is the cofactor matrix.

This method is useful theoretically, but for larger matrices, Gauss-Jordan elimination is usually more practical.

---

# 15. Key ideas

| Concept                                  | Result                        |
| ---------------------------------------- | ----------------------------- |
| Inverse matrix                           | $A^{-1}$                      |
| Definition                               | $AA^{-1}=A^{-1}A=I$           |
| Condition                                | $\det(A)\neq0$                |
| $\det(A)=0$                              | Inverse does not exist        |
| $(A^{-1})^{-1}$                          | $A$                           |
| $(AB)^{-1}$                              | $B^{-1}A^{-1}$                |
| $(A^T)^{-1}$                             | $(A^{-1})^T$                  |
| $\det(A^{-1})$                           | $\frac{1}{\det(A)}$           |
| System $A\mathbf{x}=\mathbf{b}$          | $\mathbf{x}=A^{-1}\mathbf{b}$ |
| Rank of an invertible $n\times n$ matrix | $n$                           |

### Fundamental relationship

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ exists}
\iff
\operatorname{rank}(A)=n
}
$$
