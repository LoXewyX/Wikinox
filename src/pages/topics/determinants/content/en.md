# Determinants

A **determinant** is a scalar value associated with a **square matrix**. It provides important information about the matrix, especially whether it is invertible and whether its rows or columns are linearly independent.

## 1. Definition

For a square matrix

$$
A =
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

its determinant is written as:

$$
\det(A)
$$

or

$$
|A|
$$

For a $2\times2$ matrix:

$$
\boxed{\det(A)=ad-bc}
$$

### Example

$$
A=
\begin{pmatrix}
3 & 2\\
1 & 4
\end{pmatrix}
$$

Then:

$$
\det(A)=(3)(4)-(2)(1)
$$

$$
\det(A)=12-2=10
$$

Therefore:

$$
\boxed{\det(A)=10}
$$

---

## 2. Determinants only exist for square matrices

A determinant can be calculated for:

- $1\times1$
- $2\times2$
- $3\times3$
- $4\times4$
- etc.

But not directly for a rectangular matrix such as:

$$
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

because it is $2\times3$, not square.

---

## 3. Determinant of a $1\times1$ matrix

For:

$$
A=
\begin{pmatrix}
5
\end{pmatrix}
$$

we simply have:

$$
\boxed{\det(A)=5}
$$

---

## 4. Determinant of a $2\times2$ matrix

The general formula is:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

$$
\boxed{\det(A)=ad-bc}
$$

A useful way to remember it is:

$$
\boxed{\text{main diagonal product}-
\text{other diagonal product}}
$$

For example:

$$
\begin{pmatrix}
2&5\\
3&7
\end{pmatrix}
$$

$$
\det(A)=(2)(7)-(5)(3)
$$

$$
=14-15
$$

$$
\boxed{\det(A)=-1}
$$

---

# 5. Determinant of a $3\times3$ matrix

Consider:

$$
A=
\begin{pmatrix}
a&b&c\\
d&e&f\\
g&h&i
\end{pmatrix}
$$

Its determinant can be calculated by **cofactor expansion**:

$$
\boxed{
\det(A)
=
a
\begin{vmatrix}
e&f\\
h&i
\end{vmatrix}
-
b
\begin{vmatrix}
d&f\\
g&i
\end{vmatrix}
+
c
\begin{vmatrix}
d&e\\
g&h
\end{vmatrix}
}
$$

Because each smaller determinant is $2\times2$:

$$
\det(A)
=
a(ei-fh)
-b(di-fg)
+c(dh-eg)
$$

Therefore:

$$
\boxed{
\det(A)=a(ei-fh)-b(di-fg)+c(dh-eg)
}
$$

### Example

$$
A=
\begin{pmatrix}
1&2&3\\
0&4&5\\
1&0&6
\end{pmatrix}
$$

Expand along the first row:

$$
\det(A)
=
1
\begin{vmatrix}
4&5\\
0&6
\end{vmatrix}
-
2
\begin{vmatrix}
0&5\\
1&6
\end{vmatrix}
+
3
\begin{vmatrix}
0&4\\
1&0
\end{vmatrix}
$$

Calculate each $2\times2$ determinant:

$$
\begin{vmatrix}
4&5\\
0&6
\end{vmatrix}
=24
$$

$$
\begin{vmatrix}
0&5\\
1&6
\end{vmatrix}
=-5
$$

$$
\begin{vmatrix}
0&4\\
1&0
\end{vmatrix}
=-4
$$

Therefore:

$$
\det(A)=1(24)-2(-5)+3(-4)
$$

$$
=24+10-12
$$

$$
\boxed{\det(A)=22}
$$

---

# 6. Minors and cofactors

These concepts are used when calculating larger determinants.

## Minor

The **minor** $M_{ij}$ is obtained by deleting:

- row $i$
- column $j$

and calculating the determinant of what remains.

For:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6\\
7&8&9
\end{pmatrix}
$$

The minor $M_{11}$ is obtained by removing row 1 and column 1:

$$
M_{11}=
\begin{vmatrix}
5&6\\
8&9
\end{vmatrix}
$$

Therefore:

$$
M_{11}=5(9)-6(8)
$$

$$
M_{11}=45-48=-3
$$

---

## Cofactor

The cofactor is:

$$
\boxed{C_{ij}=(-1)^{i+j}M_{ij}}
$$

The signs follow this pattern:

$$
\begin{pmatrix}
+&-&+\\
-&+&-\\
+&-&+
\end{pmatrix}
$$

For example:

$$
C_{12}=-M_{12}
$$

because:

$$
(-1)^{1+2}=(-1)^3=-1
$$

---

# 7. Cofactor expansion

You can calculate a determinant by expanding along **any row or column**.

For row $i$:

$$
\boxed{
\det(A)=
\sum_j a_{ij}C_{ij}
}
$$

For example, expanding the first row:

$$
\det(A)=
a_{11}C_{11}
+a_{12}C_{12}
+a_{13}C_{13}
$$

For a $3\times3$ matrix, this produces the familiar:

$$
+\quad-\quad+
$$

pattern.

### Practical rule

When calculating a determinant, choose a row or column containing **many zeros** if possible. It reduces the amount of calculation.

---

# 8. Important properties

Determinants have several useful properties.

### Identity matrix

$$
I=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
$$

has:

$$
\boxed{\det(I)=1}
$$

---

### Transpose

$$
\boxed{\det(A^T)=\det(A)}
$$

Transposing a matrix does not change its determinant.

---

### Product

For two square matrices:

$$
\boxed{\det(AB)=\det(A)\det(B)}
$$

This is one of the most important determinant properties.

---

### Scalar multiplication

For an $n\times n$ matrix:

$$
\boxed{\det(kA)=k^n\det(A)}
$$

For a $2\times2$ matrix:

$$
\det(kA)=k^2\det(A)
$$

For a $3\times3$ matrix:

$$
\det(kA)=k^3\det(A)
$$

---

# 9. What happens when rows are exchanged?

If two rows are exchanged, the determinant changes sign.

For example:

$$
\det
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
=
ad-bc
$$

After exchanging the rows:

$$
\det
\begin{pmatrix}
c&d\\
a&b
\end{pmatrix}
=
cb-da
$$

Therefore:

$$
\boxed{\det(\text{new matrix})=-\det(A)}
$$

---

# 10. Equal or proportional rows

If two rows are equal, then:

$$
\boxed{\det(A)=0}
$$

For example:

$$
A=
\begin{pmatrix}
1&2\\
1&2
\end{pmatrix}
$$

$$
\det(A)=1(2)-2(1)=0
$$

The same applies if one row is a multiple of another.

Example:

$$
\begin{pmatrix}
1&2\\
2&4
\end{pmatrix}
$$

The second row is:

$$
2\times\text{row}_1
$$

Therefore:

$$
\boxed{\det(A)=0}
$$

---

# 11. Geometric interpretation

The determinant also has a geometric meaning.

For a $2\times2$ matrix:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

the absolute value

$$
|\det(A)|
$$

represents the **area scaling factor** of the transformation represented by $A$.

For example:

$$
\det(A)=3
$$

means areas are multiplied by a factor of:

$$
3
$$

while:

$$
\det(A)=-3
$$

means areas are also scaled by $3$, but the transformation additionally reverses orientation.

For a $3\times3$ matrix, the absolute value of the determinant represents a **volume scaling factor**.

---

# 12. Determinant and inverse

This is one of the most important relationships:

$$
\boxed{
\det(A)\neq0
\iff
A\text{ is invertible}
}
$$

In other words:

If

$$
\det(A)\neq0
$$

then:

$$
A^{-1}
$$

exists.

If

$$
\det(A)=0
$$

then:

$$
A^{-1}
$$

does **not** exist.

Such a matrix is called **singular**.

---

# 13. Determinant and systems of equations

Consider:

$$
A\mathbf{x}=\mathbf{b}
$$

If:

$$
\det(A)\neq0
$$

then the system has a **unique solution**.

If:

$$
\det(A)=0
$$

the system does not have a unique solution. Depending on the system, it can have:

- no solution
- infinitely many solutions

This connects determinants with the **rank** of a matrix and systems of linear equations.

---

# 14. Determinant and linear independence

For an $n\times n$ matrix:

$$
\boxed{\det(A)\neq0}
$$

means that the rows and columns are **linearly independent**.

Conversely:

$$
\boxed{\det(A)=0}
$$

means that the rows or columns are **linearly dependent**.

Therefore, for a square matrix, these ideas are equivalent:

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ exists}
\iff
\operatorname{rank}(A)=n
\iff
\text{rows and columns are linearly independent}
}
$$

---

# 15. Determinant and eigenvalues

Determinants also appear in the calculation of **eigenvalues**.

For a matrix $A$, eigenvalues satisfy:

$$
\boxed{\det(A-\lambda I)=0}
$$

This is called the **characteristic equation**.

For example:

$$
A=
\begin{pmatrix}
2&0\\
0&3
\end{pmatrix}
$$

Then:

$$
A-\lambda I=
\begin{pmatrix}
2-\lambda&0\\
0&3-\lambda
\end{pmatrix}
$$

Therefore:

$$
\det(A-\lambda I)
=
(2-\lambda)(3-\lambda)
$$

Set it equal to zero:

$$
(2-\lambda)(3-\lambda)=0
$$

Thus:

$$
\boxed{\lambda_1=2,\qquad\lambda_2=3}
$$

---

# 16. Key ideas to remember

| Concept                | Result                     |
| ---------------------- | -------------------------- |
| Only square matrices   | Have determinants          |
| $2\times2$ determinant | $ad-bc$                    |
| $\det(A)=0$            | Matrix is singular         |
| $\det(A)\neq0$         | Matrix is invertible       |
| $\det(A^T)$            | $\det(A)$                  |
| $\det(AB)$             | $\det(A)\det(B)$           |
| Equal rows             | Determinant $=0$           |
| Proportional rows      | Determinant $=0$           |
| Swap two rows          | Changes determinant's sign |
| $2\times2$ determinant | Area scaling               |
| $3\times3$ determinant | Volume scaling             |
| $\det(A-\lambda I)=0$  | Finds eigenvalues          |

### The most important relationship

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ exists}
\iff
A\text{ has full rank}
\iff
\text{its columns are linearly independent}
}
$$
