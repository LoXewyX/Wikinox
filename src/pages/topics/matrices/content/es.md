# 0. Escalares, vectores, matrices y tensores

Antes de estudiar las matrices, conviene conocer algunos conceptos
básicos de álgebra.

- Un **escalar** es un único valor, como $5$ o $-2$.
- Un **vector** es una colección ordenada de escalares, por ejemplo:

$$
\mathbf{v}=
\begin{pmatrix}
2\\
4\\
6
\end{pmatrix}
$$

- Una **matriz** organiza escalares en filas y columnas:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

- Un **tensor** es una generalización que permite trabajar con más de
  dos dimensiones.

De forma simplificada:

$$
\boxed{
\text{escalar}
\rightarrow
\text{vector}
\rightarrow
\text{matriz}
\rightarrow
\text{tensor}
}
$$

En este tema nos centraremos principalmente en las **matrices**.

---

# 1. ¿Qué es una matriz?

Una **matriz** es un conjunto rectangular de elementos organizados en
**filas** y **columnas**.

Por ejemplo:

$$
A=
\begin{pmatrix}
2&4&1\\
0&3&5
\end{pmatrix}
$$

Esta matriz tiene:

- 2 filas.
- 3 columnas.
- 6 elementos.

Por tanto, decimos que es una matriz de dimensión:

$$
2\times3
$$

La primera cifra indica el número de **filas** y la segunda el número
de **columnas**.

---

# 2. Elementos de una matriz

Los elementos de una matriz se identifican mediante dos índices.

En una matriz:

$$
A=
\begin{pmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}
\end{pmatrix}
$$

el primer índice indica la fila y el segundo indica la columna.

Por ejemplo:

$$
a_{12}
$$

significa:

- fila $1$
- columna $2$

En la matriz:

$$
A=
\begin{pmatrix}
2&4&1\\
0&3&5
\end{pmatrix}
$$

tenemos:

$$
a_{12}=4
$$

y:

$$
a_{23}=5
$$

De forma general, una matriz de $m$ filas y $n$ columnas se escribe:

$$
A=(a_{ij})_{m\times n}
$$

---

# 3. Dimensión de una matriz

La dimensión de una matriz indica su número de filas y columnas.

Por ejemplo:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

es una matriz:

$$
2\times3
$$

Una matriz:

$$
B=
\begin{pmatrix}
1&2\\
3&4\\
5&6
\end{pmatrix}
$$

es una matriz:

$$
3\times2
$$

Una matriz:

$$
C=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

es una matriz:

$$
2\times2
$$

Esta última es una **matriz cuadrada**, porque tiene el mismo número de
filas y columnas.

---

# 4. Tipos de matrices

Existen diferentes tipos de matrices que aparecen frecuentemente en
álgebra lineal.

## Matriz fila

Tiene una sola fila:

$$
A=
\begin{pmatrix}
1&2&3&4
\end{pmatrix}
$$

Su dimensión es:

$$
1\times4
$$

---

## Matriz columna

Tiene una sola columna:

$$
A=
\begin{pmatrix}
1\\
2\\
3\\
4
\end{pmatrix}
$$

Su dimensión es:

$$
4\times1
$$

---

## Matriz cuadrada

Tiene el mismo número de filas y columnas:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6\\
7&8&9
\end{pmatrix}
$$

Su dimensión es:

$$
3\times3
$$

---

## Matriz nula

Todos sus elementos son cero:

$$
A=
\begin{pmatrix}
0&0\\
0&0
\end{pmatrix}
$$

---

## Matriz diagonal

Todos los elementos fuera de la diagonal principal son cero:

$$
A=
\begin{pmatrix}
2&0&0\\
0&5&0\\
0&0&7
\end{pmatrix}
$$

---

## Matriz identidad

Es una matriz cuadrada con unos en la diagonal principal y ceros en el
resto:

$$
I_3=
\begin{pmatrix}
1&0&0\\
0&1&0\\
0&0&1
\end{pmatrix}
$$

La matriz identidad actúa como el número $1$ en la multiplicación:

$$
AI=A
$$

y:

$$
IA=A
$$

---

# 5. Igualdad de matrices

Dos matrices son iguales cuando tienen la misma dimensión y todos sus
elementos correspondientes son iguales.

Por ejemplo:

$$
A=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

y:

$$
B=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

Entonces:

$$
A=B
$$

---

# 6. Suma de matrices

Para sumar dos matrices deben tener la **misma dimensión**.

Por ejemplo:

$$
A=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

y:

$$
B=
\begin{pmatrix}
5&6\\
7&8
\end{pmatrix}
$$

Entonces:

$$
A+B=
\begin{pmatrix}
1+5&2+6\\
3+7&4+8
\end{pmatrix}
$$

Por tanto:

$$
A+B=
\begin{pmatrix}
6&8\\
10&12
\end{pmatrix}
$$

En general:

$$
(A+B)_{ij}=a_{ij}+b_{ij}
$$

---

# 7. Resta de matrices

La resta funciona de la misma manera:

$$
(A-B)_{ij}=a_{ij}-b_{ij}
$$

Por ejemplo:

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

# 8. Multiplicación de una matriz por un escalar

Un **escalar** es simplemente un número.

Para multiplicar una matriz por un escalar, multiplicamos todos sus
elementos por ese número.

Por ejemplo:

$$
A=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

Entonces:

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

# 9. Transpuesta de una matriz

La **transpuesta** de una matriz se obtiene intercambiando sus filas
por sus columnas.

Si:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

entonces:

$$
A^T=
\begin{pmatrix}
1&4\\
2&5\\
3&6
\end{pmatrix}
$$

Si $A$ tiene dimensión $m\times n$, su transpuesta tendrá dimensión:

$$
n\times m
$$

Una propiedad importante es:

$$
(A^T)^T=A
$$

---

# 10. Multiplicación de matrices

La multiplicación de matrices es una de las operaciones más importantes.

Dos matrices pueden multiplicarse cuando el número de **columnas de la
primera** coincide con el número de **filas de la segunda**.

Si:

$$
A_{m\times n}
$$

y:

$$
B_{n\times p}
$$

entonces podemos calcular:

$$
AB
$$

y el resultado tendrá dimensión:

$$
m\times p
$$

Por ejemplo:

$$
A=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

y:

$$
B=
\begin{pmatrix}
5&6\\
7&8
\end{pmatrix}
$$

Entonces:

$$
AB=
\begin{pmatrix}
1(5)+2(7)&1(6)+2(8)\\
3(5)+4(7)&3(6)+4(8)
\end{pmatrix}
$$

Por tanto:

$$
AB=
\begin{pmatrix}
19&22\\
43&50
\end{pmatrix}
$$

La fórmula general es:

$$
(AB)_{ij}
=
\sum_{k=1}^{n}a_{ik}b_{kj}
$$

A diferencia de la multiplicación de números, generalmente:

$$
AB\neq BA
$$

Es decir, la multiplicación de matrices **no es conmutativa**.

---

# 11. Matriz cuadrada

Una matriz cuadrada tiene la misma cantidad de filas y columnas.

Por ejemplo:

$$
A=
\begin{pmatrix}
2&1&3\\
4&5&6\\
7&8&9
\end{pmatrix}
$$

es una matriz:

$$
3\times3
$$

Las matrices cuadradas son especialmente importantes porque sobre ellas
podemos definir operaciones como el **determinante**, la **inversa** y
los **autovalores**.

---

# 12. Diagonal principal

En una matriz cuadrada, la **diagonal principal** está formada por los
elementos:

$$
a_{11},a_{22},a_{33},\ldots
$$

Por ejemplo:

$$
A=
\begin{pmatrix}
\boxed{2}&1&3\\
4&\boxed{5}&6\\
7&8&\boxed{9}
\end{pmatrix}
$$

Su diagonal principal es:

$$
2,\quad5,\quad9
$$

---

# 13. Determinante

El **determinante** es un número asociado a una matriz cuadrada.

Se representa como:

$$
\det(A)
$$

Para una matriz $2\times2$:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

su determinante es:

$$
\det(A)=ad-bc
$$

Por ejemplo:

$$
A=
\begin{pmatrix}
2&3\\
1&4
\end{pmatrix}
$$

Entonces:

$$
\det(A)=2(4)-3(1)=5
$$

El determinante tiene numerosas aplicaciones y permite, entre otras
cosas, determinar si una matriz cuadrada tiene inversa.

---

# 14. Matriz inversa

La inversa de una matriz $A$ se representa como:

$$
A^{-1}
$$

y cumple:

$$
AA^{-1}=A^{-1}A=I
$$

Una matriz cuadrada tiene inversa si:

$$
\det(A)\neq0
$$

Para una matriz $2\times2$:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

su inversa es:

$$
A^{-1}
=
\frac{1}{ad-bc}
\begin{pmatrix}
d&-b\\
-c&a
\end{pmatrix}
$$

siempre que:

$$
ad-bc\neq0
$$

---

# 15. Rango de una matriz

El **rango** indica el número máximo de filas o columnas
linealmente independientes de una matriz.

Se representa como:

$$
\operatorname{rang}(A)
$$

Por ejemplo:

$$
A=
\begin{pmatrix}
1&2\\
2&4
\end{pmatrix}
$$

La segunda fila es el doble de la primera:

$$
(2,4)=2(1,2)
$$

Por tanto, solo existe una fila linealmente independiente y:

$$
\operatorname{rang}(A)=1
$$

---

# 16. Matrices y sistemas de ecuaciones

Las matrices permiten representar sistemas de ecuaciones de forma
compacta.

Por ejemplo:

$$
\begin{cases}
2x+y=5\\
x-y=1
\end{cases}
$$

puede escribirse como:

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

De forma general:

$$
A\mathbf{x}=\mathbf{b}
$$

donde:

- $A$ es la matriz de coeficientes.
- $\mathbf{x}$ contiene las incógnitas.
- $\mathbf{b}$ contiene los términos independientes.

Si $A$ tiene inversa:

$$
\mathbf{x}=A^{-1}\mathbf{b}
$$

---

# 17. Operaciones elementales

Las operaciones elementales sobre las filas de una matriz son:

### Intercambiar dos filas

$$
F_1\leftrightarrow F_2
$$

### Multiplicar una fila por un número distinto de cero

$$
F_1\rightarrow 3F_1
$$

### Sumar a una fila un múltiplo de otra

$$
F_2\rightarrow F_2+2F_1
$$

Estas operaciones son fundamentales para resolver sistemas de
ecuaciones y calcular el rango o la inversa de una matriz.
