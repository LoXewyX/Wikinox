# 0. Scalars, Vectors, Matrices and Tensors

Before studying matrices, it is useful to know some basic concepts from
algebra.

- A **scalar** is a single value, such as $5$ or $-2$.
- A **vector** is an ordered collection of scalars, for example:

$$
\mathbf{v}=
\begin{pmatrix}
2\\
4\\
6
\end{pmatrix}
$$

- A **matrix** organizes scalars into rows and columns:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

- A **tensor** is a generalization that allows us to work with more than
  two dimensions.

In simplified form:

$$
\boxed{
\text{scalar}
\rightarrow
\text{vector}
\rightarrow
\text{matrix}
\rightarrow
\text{tensor}
}
$$

In this topic, we will focus mainly on **matrices**.

---

# 1. What is a Matrix?

A **matrix** is a rectangular collection of elements arranged in
**rows** and **columns**.

For example:

$$
A=
\begin{pmatrix}
2&4&1\\
0&3&5
\end{pmatrix}
$$

This matrix has:

- 2 rows.
- 3 columns.
- 6 elements.

Therefore, it is a matrix with dimensions:

$$
2\times3
$$

The first number indicates the number of **rows**, while the second
indicates the number of **columns**.

---

# 2. Elements of a Matrix

The elements of a matrix are identified using two indices.

In a matrix:

$$
A=
\begin{pmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}
\end{pmatrix}
$$

the first index indicates the row and the second indicates the column.

For example:

$$
a_{12}
$$

means:

- row $1$
- column $2$

In the matrix:

$$
A=
\begin{pmatrix}
2&4&1\\
0&3&5
\end{pmatrix}
$$

we have:

$$
a_{12}=4
$$

and:

$$
a_{23}=5
$$

In general, a matrix with $m$ rows and $n$ columns is written as:

$$
A=(a_{ij})_{m\times n}
$$

---

# 3. Dimensions of a Matrix

The dimensions of a matrix indicate its number of rows and columns.

For example:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

is a:

$$
2\times3
$$

matrix.

A matrix:

$$
B=
\begin{pmatrix}
1&2\\
3&4\\
5&6
\end{pmatrix}
$$

is a:

$$
3\times2
$$

matrix.

A matrix:

$$
C=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

is a:

$$
2\times2
$$

matrix.

The last one is a **square matrix**, because it has the same number of
rows and columns.

---

# 4. Types of Matrices

There are several types of matrices that frequently appear in linear
algebra.

## Row Matrix

A row matrix has only one row:

$$
A=
\begin{pmatrix}
1&2&3&4
\end{pmatrix}
$$

Its dimensions are:

$$
1\times4
$$

---

## Column Matrix

A column matrix has only one column:

$$
A=
\begin{pmatrix}
1\\
2\\
3\\
4
\end{pmatrix}
$$

Its dimensions are:

$$
4\times1
$$

---

## Square Matrix

A square matrix has the same number of rows and columns:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6\\
7&8&9
\end{pmatrix}
$$

Its dimensions are:

$$
3\times3
$$

---

## Zero Matrix

All its elements are zero:

$$
A=
\begin{pmatrix}
0&0\\
0&0
\end{pmatrix}
$$

---

## Diagonal Matrix

All elements outside the main diagonal are zero:

$$
A=
\begin{pmatrix}
2&0&0\\
0&5&0\\
0&0&7
\end{pmatrix}
$$

---

## Identity Matrix

An identity matrix is a square matrix with ones on the main diagonal
and zeros elsewhere:

$$
I_3=
\begin{pmatrix}
1&0&0\\
0&1&0\\
0&0&1
\end{pmatrix}
$$

The identity matrix acts like the number $1$ in multiplication:

$$
AI=A
$$

and:

$$
IA=A
$$

---

# 5. Equality of Matrices

Two matrices are equal when they have the same dimensions and all their
corresponding elements are equal.

For example:

$$
A=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

and:

$$
B=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

Therefore:

$$
A=B
$$

---

# 6. Matrix Addition

Two matrices can only be added if they have the **same dimensions**.

For example:

$$
A=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

and:

$$
B=
\begin{pmatrix}
5&6\\
7&8
\end{pmatrix}
$$

Then:

$$
A+B=
\begin{pmatrix}
1+5&2+6\\
3+7&4+8
\end{pmatrix}
$$

Therefore:

$$
A+B=
\begin{pmatrix}
6&8\\
10&12
\end{pmatrix}
$$

In general:

$$
(A+B)_{ij}=a_{ij}+b_{ij}
$$

---

# 7. Matrix Subtraction

Subtraction works in the same way:

$$
(A-B)_{ij}=a_{ij}-b_{ij}
$$

For example:

$$
\begin{pmatrix}
5&7\\
9&3
\end{pmatrix}
-
\begin{pmatrix}
2&4\\
1&2
\end{pmatrix}
=
\begin{pmatrix}
3&3\\
8&1
\end{pmatrix}
$$

---

# 8. Scalar Multiplication

A **scalar** is simply a number.

To multiply a matrix by a scalar, we multiply every element of the
matrix by that number.

For example:

$$
A=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

Then:

$$
3A=
3
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
=
\begin{pmatrix}
3&6\\
9&12
\end{pmatrix}
$$

---

# 9. Matrix Transpose

The **transpose** of a matrix is obtained by exchanging its rows and
columns.

If:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

then:

$$
A^T=
\begin{pmatrix}
1&4\\
2&5\\
3&6
\end{pmatrix}
$$

If $A$ has dimensions $m\times n$, its transpose has dimensions:

$$
n\times m
$$

An important property is:

$$
(A^T)^T=A
$$

---

# 10. Matrix Multiplication

Matrix multiplication is one of the most important operations.

Two matrices can be multiplied when the number of **columns of the
first matrix** equals the number of **rows of the second matrix**.

If:

$$
A_{m\times n}
$$

and:

$$
B_{n\times p}
$$

then we can calculate:

$$
AB
$$

and the result has dimensions:

$$
m\times p
$$

For example:

$$
A=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

and:

$$
B=
\begin{pmatrix}
5&6\\
7&8
\end{pmatrix}
$$

Then:

$$
AB=
\begin{pmatrix}
1(5)+2(7)&1(6)+2(8)\\
3(5)+4(7)&3(6)+4(8)
\end{pmatrix}
$$

Therefore:

$$
AB=
\begin{pmatrix}
19&22\\
43&50
\end{pmatrix}
$$

The general formula is:

$$
(AB)_{ij}
=
\sum_{k=1}^{n}a_{ik}b_{kj}
$$

Unlike multiplication of ordinary numbers, in general:

$$
AB\neq BA
$$

Therefore, matrix multiplication is **not commutative**.

---

# 11. Square Matrices

A square matrix has the same number of rows and columns.

For example:

$$
A=
\begin{pmatrix}
2&1&3\\
4&5&6\\
7&8&9
\end{pmatrix}
$$

is a:

$$
3\times3
$$

matrix.

Square matrices are particularly important because operations such as
the **determinant**, **inverse**, and **eigenvalues** are defined for
them.

---

# 12. Main Diagonal

In a square matrix, the **main diagonal** consists of the elements:

$$
a_{11},a_{22},a_{33},\ldots
$$

For example:

$$
A=
\begin{pmatrix}
\boxed{2}&1&3\\
4&\boxed{5}&6\\
7&8&\boxed{9}
\end{pmatrix}
$$

Its main diagonal is:

$$
2,\quad5,\quad9
$$

---

# 13. Determinant

The **determinant** is a number associated with a square matrix.

It is represented as:

$$
\det(A)
$$

For a $2\times2$ matrix:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

its determinant is:

$$
\det(A)=ad-bc
$$

For example:

$$
A=
\begin{pmatrix}
2&3\\
1&4
\end{pmatrix}
$$

Then:

$$
\det(A)=2(4)-3(1)=5
$$

The determinant has many applications and can be used, among other
things, to determine whether a square matrix has an inverse.

---

# 14. Inverse Matrix

The inverse of a matrix $A$ is represented as:

$$
A^{-1}
$$

and satisfies:

$$
AA^{-1}=A^{-1}A=I
$$

A square matrix has an inverse if:

$$
\det(A)\neq0
$$

For a $2\times2$ matrix:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

its inverse is:

$$
A^{-1}
=
\frac{1}{ad-bc}
\begin{pmatrix}
d&-b\\
-c&a
\end{pmatrix}
$$

provided that:

$$
ad-bc\neq0
$$

---

# 15. Matrix Rank

The **rank** indicates the maximum number of linearly independent rows
or columns of a matrix.

It is represented as:

$$
\operatorname{rank}(A)
$$

For example:

$$
A=
\begin{pmatrix}
1&2\\
2&4
\end{pmatrix}
$$

The second row is twice the first:

$$
(2,4)=2(1,2)
$$

Therefore, there is only one linearly independent row:

$$
\operatorname{rank}(A)=1
$$

---

# 16. Matrices and Systems of Equations

Matrices allow us to represent systems of equations compactly.

For example:

$$
\begin{cases}
2x+y=5\\
x-y=1
\end{cases}
$$

can be written as:

$$
\begin{pmatrix}
2&1\\
1&-1
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
5\\
1
\end{pmatrix}
$$

In general:

$$
A\mathbf{x}=\mathbf{b}
$$

where:

- $A$ is the coefficient matrix.
- $\mathbf{x}$ contains the unknowns.
- $\mathbf{b}$ contains the constant terms.

If $A$ has an inverse:

$$
\mathbf{x}=A^{-1}\mathbf{b}
$$

---

# 17. Elementary Operations

The elementary row operations are:

### Swap two rows

$$
F_1\leftrightarrow F_2
$$

### Multiply a row by a non-zero number

$$
F_1\rightarrow3F_1
$$

### Add a multiple of one row to another

$$
F_2\rightarrow F_2+2F_1
$$

These operations are fundamental for solving systems of equations and
calculating the rank or inverse of a matrix.
