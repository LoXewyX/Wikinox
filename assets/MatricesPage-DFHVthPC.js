import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-d08MTCHk.js";import{t as n}from"./TopicPage-BLzDn4N1.js";var r=`# 0. Escalares, vectores, matrices y tensores

Antes de estudiar las matrices, conviene conocer algunos conceptos
básicos de álgebra.

- Un **escalar** es un único valor, como $5$ o $-2$.
- Un **vector** es una colección ordenada de escalares, por ejemplo:

$$
\\mathbf{v}=
\\begin{pmatrix}
2\\\\
4\\\\
6
\\end{pmatrix}
$$

- Una **matriz** organiza escalares en filas y columnas:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

- Un **tensor** es una generalización que permite trabajar con más de
  dos dimensiones.

De forma simplificada:

$$
\\boxed{
\\text{escalar}
\\rightarrow
\\text{vector}
\\rightarrow
\\text{matriz}
\\rightarrow
\\text{tensor}
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
\\begin{pmatrix}
2&4&1\\\\
0&3&5
\\end{pmatrix}
$$

Esta matriz tiene:

- 2 filas.
- 3 columnas.
- 6 elementos.

Por tanto, decimos que es una matriz de dimensión:

$$
2\\times3
$$

La primera cifra indica el número de **filas** y la segunda el número
de **columnas**.

---

# 2. Elementos de una matriz

Los elementos de una matriz se identifican mediante dos índices.

En una matriz:

$$
A=
\\begin{pmatrix}
a_{11}&a_{12}&a_{13}\\\\
a_{21}&a_{22}&a_{23}
\\end{pmatrix}
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
\\begin{pmatrix}
2&4&1\\\\
0&3&5
\\end{pmatrix}
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
A=(a_{ij})_{m\\times n}
$$

---

# 3. Dimensión de una matriz

La dimensión de una matriz indica su número de filas y columnas.

Por ejemplo:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

es una matriz:

$$
2\\times3
$$

Una matriz:

$$
B=
\\begin{pmatrix}
1&2\\\\
3&4\\\\
5&6
\\end{pmatrix}
$$

es una matriz:

$$
3\\times2
$$

Una matriz:

$$
C=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

es una matriz:

$$
2\\times2
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
\\begin{pmatrix}
1&2&3&4
\\end{pmatrix}
$$

Su dimensión es:

$$
1\\times4
$$

---

## Matriz columna

Tiene una sola columna:

$$
A=
\\begin{pmatrix}
1\\\\
2\\\\
3\\\\
4
\\end{pmatrix}
$$

Su dimensión es:

$$
4\\times1
$$

---

## Matriz cuadrada

Tiene el mismo número de filas y columnas:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6\\\\
7&8&9
\\end{pmatrix}
$$

Su dimensión es:

$$
3\\times3
$$

---

## Matriz nula

Todos sus elementos son cero:

$$
A=
\\begin{pmatrix}
0&0\\\\
0&0
\\end{pmatrix}
$$

---

## Matriz diagonal

Todos los elementos fuera de la diagonal principal son cero:

$$
A=
\\begin{pmatrix}
2&0&0\\\\
0&5&0\\\\
0&0&7
\\end{pmatrix}
$$

---

## Matriz identidad

Es una matriz cuadrada con unos en la diagonal principal y ceros en el
resto:

$$
I_3=
\\begin{pmatrix}
1&0&0\\\\
0&1&0\\\\
0&0&1
\\end{pmatrix}
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
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

y:

$$
B=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
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
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

y:

$$
B=
\\begin{pmatrix}
5&6\\\\
7&8
\\end{pmatrix}
$$

Entonces:

$$
A+B=
\\begin{pmatrix}
1+5&2+6\\\\
3+7&4+8
\\end{pmatrix}
$$

Por tanto:

$$
A+B=
\\begin{pmatrix}
6&8\\\\
10&12
\\end{pmatrix}
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
\\begin{pmatrix}
5&7\\\\
9&3
\\end{pmatrix}
-
\\begin{pmatrix}
2&4\\\\
1&2
\\end{pmatrix}
=
\\begin{pmatrix}
3&3\\\\
8&1
\\end{pmatrix}
$$

---

# 8. Multiplicación de una matriz por un escalar

Un **escalar** es simplemente un número.

Para multiplicar una matriz por un escalar, multiplicamos todos sus
elementos por ese número.

Por ejemplo:

$$
A=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

Entonces:

$$
3A=
3
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
=
\\begin{pmatrix}
3&6\\\\
9&12
\\end{pmatrix}
$$

---

# 9. Transpuesta de una matriz

La **transpuesta** de una matriz se obtiene intercambiando sus filas
por sus columnas.

Si:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

entonces:

$$
A^T=
\\begin{pmatrix}
1&4\\\\
2&5\\\\
3&6
\\end{pmatrix}
$$

Si $A$ tiene dimensión $m\\times n$, su transpuesta tendrá dimensión:

$$
n\\times m
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
A_{m\\times n}
$$

y:

$$
B_{n\\times p}
$$

entonces podemos calcular:

$$
AB
$$

y el resultado tendrá dimensión:

$$
m\\times p
$$

Por ejemplo:

$$
A=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

y:

$$
B=
\\begin{pmatrix}
5&6\\\\
7&8
\\end{pmatrix}
$$

Entonces:

$$
AB=
\\begin{pmatrix}
1(5)+2(7)&1(6)+2(8)\\\\
3(5)+4(7)&3(6)+4(8)
\\end{pmatrix}
$$

Por tanto:

$$
AB=
\\begin{pmatrix}
19&22\\\\
43&50
\\end{pmatrix}
$$

La fórmula general es:

$$
(AB)_{ij}
=
\\sum_{k=1}^{n}a_{ik}b_{kj}
$$

A diferencia de la multiplicación de números, generalmente:

$$
AB\\neq BA
$$

Es decir, la multiplicación de matrices **no es conmutativa**.

---

# 11. Matriz cuadrada

Una matriz cuadrada tiene la misma cantidad de filas y columnas.

Por ejemplo:

$$
A=
\\begin{pmatrix}
2&1&3\\\\
4&5&6\\\\
7&8&9
\\end{pmatrix}
$$

es una matriz:

$$
3\\times3
$$

Las matrices cuadradas son especialmente importantes porque sobre ellas
podemos definir operaciones como el **determinante**, la **inversa** y
los **autovalores**.

---

# 12. Diagonal principal

En una matriz cuadrada, la **diagonal principal** está formada por los
elementos:

$$
a_{11},a_{22},a_{33},\\ldots
$$

Por ejemplo:

$$
A=
\\begin{pmatrix}
\\boxed{2}&1&3\\\\
4&\\boxed{5}&6\\\\
7&8&\\boxed{9}
\\end{pmatrix}
$$

Su diagonal principal es:

$$
2,\\quad5,\\quad9
$$

---

# 13. Determinante

El **determinante** es un número asociado a una matriz cuadrada.

Se representa como:

$$
\\det(A)
$$

Para una matriz $2\\times2$:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

su determinante es:

$$
\\det(A)=ad-bc
$$

Por ejemplo:

$$
A=
\\begin{pmatrix}
2&3\\\\
1&4
\\end{pmatrix}
$$

Entonces:

$$
\\det(A)=2(4)-3(1)=5
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
\\det(A)\\neq0
$$

Para una matriz $2\\times2$:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

su inversa es:

$$
A^{-1}
=
\\frac{1}{ad-bc}
\\begin{pmatrix}
d&-b\\\\
-c&a
\\end{pmatrix}
$$

siempre que:

$$
ad-bc\\neq0
$$

---

# 15. Rango de una matriz

El **rango** indica el número máximo de filas o columnas
linealmente independientes de una matriz.

Se representa como:

$$
\\operatorname{rang}(A)
$$

Por ejemplo:

$$
A=
\\begin{pmatrix}
1&2\\\\
2&4
\\end{pmatrix}
$$

La segunda fila es el doble de la primera:

$$
(2,4)=2(1,2)
$$

Por tanto, solo existe una fila linealmente independiente y:

$$
\\operatorname{rang}(A)=1
$$

---

# 16. Matrices y sistemas de ecuaciones

Las matrices permiten representar sistemas de ecuaciones de forma
compacta.

Por ejemplo:

$$
\\begin{cases}
2x+y=5\\\\
x-y=1
\\end{cases}
$$

puede escribirse como:

$$
\\begin{pmatrix}
2&1\\\\
1&-1
\\end{pmatrix}
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
5\\\\
1
\\end{pmatrix}
$$

De forma general:

$$
A\\mathbf{x}=\\mathbf{b}
$$

donde:

- $A$ es la matriz de coeficientes.
- $\\mathbf{x}$ contiene las incógnitas.
- $\\mathbf{b}$ contiene los términos independientes.

Si $A$ tiene inversa:

$$
\\mathbf{x}=A^{-1}\\mathbf{b}
$$

---

# 17. Operaciones elementales

Las operaciones elementales sobre las filas de una matriz son:

### Intercambiar dos filas

$$
F_1\\leftrightarrow F_2
$$

### Multiplicar una fila por un número distinto de cero

$$
F_1\\rightarrow 3F_1
$$

### Sumar a una fila un múltiplo de otra

$$
F_2\\rightarrow F_2+2F_1
$$

Estas operaciones son fundamentales para resolver sistemas de
ecuaciones y calcular el rango o la inversa de una matriz.
`,i=`# 0. Escalars, vectors, matrius i tensors

Abans d'estudiar les matrius, és útil conèixer alguns conceptes bàsics
d'àlgebra.

- Un **escalar** és un únic valor, com $5$ o $-2$.
- Un **vector** és una col·lecció ordenada d'escalars, per exemple:

$$
\\mathbf{v}=
\\begin{pmatrix}
2\\\\
4\\\\
6
\\end{pmatrix}
$$

- Una **matriu** organitza escalars en files i columnes:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

- Un **tensor** és una generalització que permet treballar amb més de
  dues dimensions.

De manera simplificada:

$$
\\boxed{
\\text{escalar}
\\rightarrow
\\text{vector}
\\rightarrow
\\text{matriu}
\\rightarrow
\\text{tensor}
}
$$

En aquest tema ens centrarem principalment en les **matrius**.

---

# 1. Què és una matriu?

Una **matriu** és un conjunt rectangular d'elements organitzats en
**files** i **columnes**.

Per exemple:

$$
A=
\\begin{pmatrix}
2&4&1\\\\
0&3&5
\\end{pmatrix}
$$

Aquesta matriu té:

- 2 files.
- 3 columnes.
- 6 elements.

Per tant, és una matriu de dimensions:

$$
2\\times3
$$

El primer nombre indica el nombre de **files** i el segon indica el
nombre de **columnes**.

---

# 2. Elements d'una matriu

Els elements d'una matriu s'identifiquen mitjançant dos índexs.

En una matriu:

$$
A=
\\begin{pmatrix}
a_{11}&a_{12}&a_{13}\\\\
a_{21}&a_{22}&a_{23}
\\end{pmatrix}
$$

el primer índex indica la fila i el segon indica la columna.

Per exemple:

$$
a_{12}
$$

significa:

- fila $1$
- columna $2$

A la matriu:

$$
A=
\\begin{pmatrix}
2&4&1\\\\
0&3&5
\\end{pmatrix}
$$

tenim:

$$
a_{12}=4
$$

i:

$$
a_{23}=5
$$

En general, una matriu amb $m$ files i $n$ columnes s'escriu:

$$
A=(a_{ij})_{m\\times n}
$$

---

# 3. Dimensions d'una matriu

Les dimensions d'una matriu indiquen el nombre de files i columnes.

Per exemple:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

és una matriu:

$$
2\\times3
$$

Una matriu:

$$
B=
\\begin{pmatrix}
1&2\\\\
3&4\\\\
5&6
\\end{pmatrix}
$$

és una matriu:

$$
3\\times2
$$

Una matriu:

$$
C=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

és una matriu:

$$
2\\times2
$$

Aquesta última és una **matriu quadrada**, perquè té el mateix nombre
de files i columnes.

---

# 4. Tipus de matrius

Hi ha diversos tipus de matrius que apareixen sovint en l'àlgebra
lineal.

## Matriu fila

Una matriu fila té una única fila:

$$
A=
\\begin{pmatrix}
1&2&3&4
\\end{pmatrix}
$$

Les seves dimensions són:

$$
1\\times4
$$

---

## Matriu columna

Una matriu columna té una única columna:

$$
A=
\\begin{pmatrix}
1\\\\
2\\\\
3\\\\
4
\\end{pmatrix}
$$

Les seves dimensions són:

$$
4\\times1
$$

---

## Matriu quadrada

Una matriu quadrada té el mateix nombre de files i columnes:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6\\\\
7&8&9
\\end{pmatrix}
$$

Les seves dimensions són:

$$
3\\times3
$$

---

## Matriu nul·la

Tots els seus elements són zero:

$$
A=
\\begin{pmatrix}
0&0\\\\
0&0
\\end{pmatrix}
$$

---

## Matriu diagonal

Tots els elements fora de la diagonal principal són zero:

$$
A=
\\begin{pmatrix}
2&0&0\\\\
0&5&0\\\\
0&0&7
\\end{pmatrix}
$$

---

## Matriu identitat

Una matriu identitat és una matriu quadrada amb uns a la diagonal
principal i zeros a la resta:

$$
I_3=
\\begin{pmatrix}
1&0&0\\\\
0&1&0\\\\
0&0&1
\\end{pmatrix}
$$

La matriu identitat actua com el nombre $1$ en la multiplicació:

$$
AI=A
$$

i:

$$
IA=A
$$

---

# 5. Igualtat de matrius

Dues matrius són iguals quan tenen les mateixes dimensions i tots els
seus elements corresponents són iguals.

Per exemple:

$$
A=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

i:

$$
B=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

Per tant:

$$
A=B
$$

---

# 6. Suma de matrius

Dues matrius només es poden sumar si tenen les **mateixes dimensions**.

Per exemple:

$$
A=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

i:

$$
B=
\\begin{pmatrix}
5&6\\\\
7&8
\\end{pmatrix}
$$

Aleshores:

$$
A+B=
\\begin{pmatrix}
1+5&2+6\\\\
3+7&4+8
\\end{pmatrix}
$$

Per tant:

$$
A+B=
\\begin{pmatrix}
6&8\\\\
10&12
\\end{pmatrix}
$$

En general:

$$
(A+B)_{ij}=a_{ij}+b_{ij}
$$

---

# 7. Resta de matrius

La resta funciona de la mateixa manera:

$$
(A-B)_{ij}=a_{ij}-b_{ij}
$$

Per exemple:

$$
\\begin{pmatrix}
5&7\\\\
9&3
\\end{pmatrix}
-
\\begin{pmatrix}
2&4\\\\
1&2
\\end{pmatrix}
=
\\begin{pmatrix}
3&3\\\\
8&1
\\end{pmatrix}
$$

---

# 8. Multiplicació d'una matriu per un escalar

Un **escalar** és simplement un nombre.

Per multiplicar una matriu per un escalar, multipliquem tots els elements
de la matriu per aquest nombre.

Per exemple:

$$
A=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

Aleshores:

$$
3A=
3
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
=
\\begin{pmatrix}
3&6\\\\
9&12
\\end{pmatrix}
$$

---

# 9. Transposada d'una matriu

La **transposada** d'una matriu s'obté intercanviant les seves files
per les seves columnes.

Si:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

aleshores:

$$
A^T=
\\begin{pmatrix}
1&4\\\\
2&5\\\\
3&6
\\end{pmatrix}
$$

Si $A$ té dimensions $m\\times n$, la seva transposada té dimensions:

$$
n\\times m
$$

Una propietat important és:

$$
(A^T)^T=A
$$

---

# 10. Multiplicació de matrius

La multiplicació de matrius és una de les operacions més importants.

Dues matrius es poden multiplicar quan el nombre de **columnes de la
primera matriu** coincideix amb el nombre de **files de la segona
matriu**.

Si:

$$
A_{m\\times n}
$$

i:

$$
B_{n\\times p}
$$

aleshores podem calcular:

$$
AB
$$

i el resultat tindrà dimensions:

$$
m\\times p
$$

Per exemple:

$$
A=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

i:

$$
B=
\\begin{pmatrix}
5&6\\\\
7&8
\\end{pmatrix}
$$

Aleshores:

$$
AB=
\\begin{pmatrix}
1(5)+2(7)&1(6)+2(8)\\\\
3(5)+4(7)&3(6)+4(8)
\\end{pmatrix}
$$

Per tant:

$$
AB=
\\begin{pmatrix}
19&22\\\\
43&50
\\end{pmatrix}
$$

La fórmula general és:

$$
(AB)_{ij}
=
\\sum_{k=1}^{n}a_{ik}b_{kj}
$$

A diferència de la multiplicació de nombres normals, en general:

$$
AB\\neq BA
$$

Per tant, la multiplicació de matrius **no és commutativa**.

---

# 11. Matrius quadrades

Una matriu quadrada té el mateix nombre de files i columnes.

Per exemple:

$$
A=
\\begin{pmatrix}
2&1&3\\\\
4&5&6\\\\
7&8&9
\\end{pmatrix}
$$

és una matriu:

$$
3\\times3
$$

Les matrius quadrades són especialment importants perquè operacions com
el **determinant**, la **inversa** i els **autovalors** es defineixen
per a aquestes matrius.

---

# 12. Diagonal principal

En una matriu quadrada, la **diagonal principal** està formada pels
elements:

$$
a_{11},a_{22},a_{33},\\ldots
$$

Per exemple:

$$
A=
\\begin{pmatrix}
\\boxed{2}&1&3\\\\
4&\\boxed{5}&6\\\\
7&8&\\boxed{9}
\\end{pmatrix}
$$

La seva diagonal principal és:

$$
2,\\quad5,\\quad9
$$

---

# 13. Determinant

El **determinant** és un nombre associat a una matriu quadrada.

Es representa com:

$$
\\det(A)
$$

Per a una matriu $2\\times2$:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

el seu determinant és:

$$
\\det(A)=ad-bc
$$

Per exemple:

$$
A=
\\begin{pmatrix}
2&3\\\\
1&4
\\end{pmatrix}
$$

Aleshores:

$$
\\det(A)=2(4)-3(1)=5
$$

El determinant té moltes aplicacions i permet, entre altres coses,
determinar si una matriu quadrada té inversa.

---

# 14. Matriu inversa

La inversa d'una matriu $A$ es representa com:

$$
A^{-1}
$$

i compleix:

$$
AA^{-1}=A^{-1}A=I
$$

Una matriu quadrada té inversa si:

$$
\\det(A)\\neq0
$$

Per a una matriu $2\\times2$:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

la seva inversa és:

$$
A^{-1}
=
\\frac{1}{ad-bc}
\\begin{pmatrix}
d&-b\\\\
-c&a
\\end{pmatrix}
$$

sempre que:

$$
ad-bc\\neq0
$$

---

# 15. Rang d'una matriu

El **rang** indica el nombre màxim de files o columnes linealment
independents d'una matriu.

Es representa com:

$$
\\operatorname{rang}(A)
$$

Per exemple:

$$
A=
\\begin{pmatrix}
1&2\\\\
2&4
\\end{pmatrix}
$$

La segona fila és el doble de la primera:

$$
(2,4)=2(1,2)
$$

Per tant, només hi ha una fila linealment independent:

$$
\\operatorname{rang}(A)=1
$$

---

# 16. Matrius i sistemes d'equacions

Les matrius permeten representar sistemes d'equacions de manera
compacta.

Per exemple:

$$
\\begin{cases}
2x+y=5\\\\
x-y=1
\\end{cases}
$$

es pot escriure com:

$$
\\begin{pmatrix}
2&1\\\\
1&-1
\\end{pmatrix}
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
5\\\\
1
\\end{pmatrix}
$$

En general:

$$
A\\mathbf{x}=\\mathbf{b}
$$

on:

- $A$ és la matriu de coeficients.
- $\\mathbf{x}$ conté les incògnites.
- $\\mathbf{b}$ conté els termes independents.

Si $A$ té inversa:

$$
\\mathbf{x}=A^{-1}\\mathbf{b}
$$

---

# 17. Operacions elementals

Les operacions elementals sobre les files d'una matriu són:

### Intercanviar dues files

$$
F_1\\leftrightarrow F_2
$$

### Multiplicar una fila per un nombre diferent de zero

$$
F_1\\rightarrow3F_1
$$

### Sumar a una fila un múltiple d'una altra

$$
F_2\\rightarrow F_2+2F_1
$$

Aquestes operacions són fonamentals per resoldre sistemes d'equacions
i calcular el rang o la inversa d'una matriu.
`,a=`# 0. Scalars, Vectors, Matrices and Tensors

Before studying matrices, it is useful to know some basic concepts from
algebra.

- A **scalar** is a single value, such as $5$ or $-2$.
- A **vector** is an ordered collection of scalars, for example:

$$
\\mathbf{v}=
\\begin{pmatrix}
2\\\\
4\\\\
6
\\end{pmatrix}
$$

- A **matrix** organizes scalars into rows and columns:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

- A **tensor** is a generalization that allows us to work with more than
  two dimensions.

In simplified form:

$$
\\boxed{
\\text{scalar}
\\rightarrow
\\text{vector}
\\rightarrow
\\text{matrix}
\\rightarrow
\\text{tensor}
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
\\begin{pmatrix}
2&4&1\\\\
0&3&5
\\end{pmatrix}
$$

This matrix has:

- 2 rows.
- 3 columns.
- 6 elements.

Therefore, it is a matrix with dimensions:

$$
2\\times3
$$

The first number indicates the number of **rows**, while the second
indicates the number of **columns**.

---

# 2. Elements of a Matrix

The elements of a matrix are identified using two indices.

In a matrix:

$$
A=
\\begin{pmatrix}
a_{11}&a_{12}&a_{13}\\\\
a_{21}&a_{22}&a_{23}
\\end{pmatrix}
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
\\begin{pmatrix}
2&4&1\\\\
0&3&5
\\end{pmatrix}
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
A=(a_{ij})_{m\\times n}
$$

---

# 3. Dimensions of a Matrix

The dimensions of a matrix indicate its number of rows and columns.

For example:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

is a:

$$
2\\times3
$$

matrix.

A matrix:

$$
B=
\\begin{pmatrix}
1&2\\\\
3&4\\\\
5&6
\\end{pmatrix}
$$

is a:

$$
3\\times2
$$

matrix.

A matrix:

$$
C=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

is a:

$$
2\\times2
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
\\begin{pmatrix}
1&2&3&4
\\end{pmatrix}
$$

Its dimensions are:

$$
1\\times4
$$

---

## Column Matrix

A column matrix has only one column:

$$
A=
\\begin{pmatrix}
1\\\\
2\\\\
3\\\\
4
\\end{pmatrix}
$$

Its dimensions are:

$$
4\\times1
$$

---

## Square Matrix

A square matrix has the same number of rows and columns:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6\\\\
7&8&9
\\end{pmatrix}
$$

Its dimensions are:

$$
3\\times3
$$

---

## Zero Matrix

All its elements are zero:

$$
A=
\\begin{pmatrix}
0&0\\\\
0&0
\\end{pmatrix}
$$

---

## Diagonal Matrix

All elements outside the main diagonal are zero:

$$
A=
\\begin{pmatrix}
2&0&0\\\\
0&5&0\\\\
0&0&7
\\end{pmatrix}
$$

---

## Identity Matrix

An identity matrix is a square matrix with ones on the main diagonal
and zeros elsewhere:

$$
I_3=
\\begin{pmatrix}
1&0&0\\\\
0&1&0\\\\
0&0&1
\\end{pmatrix}
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
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

and:

$$
B=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
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
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

and:

$$
B=
\\begin{pmatrix}
5&6\\\\
7&8
\\end{pmatrix}
$$

Then:

$$
A+B=
\\begin{pmatrix}
1+5&2+6\\\\
3+7&4+8
\\end{pmatrix}
$$

Therefore:

$$
A+B=
\\begin{pmatrix}
6&8\\\\
10&12
\\end{pmatrix}
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
\\begin{pmatrix}
5&7\\\\
9&3
\\end{pmatrix}
-
\\begin{pmatrix}
2&4\\\\
1&2
\\end{pmatrix}
=
\\begin{pmatrix}
3&3\\\\
8&1
\\end{pmatrix}
$$

---

# 8. Scalar Multiplication

A **scalar** is simply a number.

To multiply a matrix by a scalar, we multiply every element of the
matrix by that number.

For example:

$$
A=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

Then:

$$
3A=
3
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
=
\\begin{pmatrix}
3&6\\\\
9&12
\\end{pmatrix}
$$

---

# 9. Matrix Transpose

The **transpose** of a matrix is obtained by exchanging its rows and
columns.

If:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

then:

$$
A^T=
\\begin{pmatrix}
1&4\\\\
2&5\\\\
3&6
\\end{pmatrix}
$$

If $A$ has dimensions $m\\times n$, its transpose has dimensions:

$$
n\\times m
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
A_{m\\times n}
$$

and:

$$
B_{n\\times p}
$$

then we can calculate:

$$
AB
$$

and the result has dimensions:

$$
m\\times p
$$

For example:

$$
A=
\\begin{pmatrix}
1&2\\\\
3&4
\\end{pmatrix}
$$

and:

$$
B=
\\begin{pmatrix}
5&6\\\\
7&8
\\end{pmatrix}
$$

Then:

$$
AB=
\\begin{pmatrix}
1(5)+2(7)&1(6)+2(8)\\\\
3(5)+4(7)&3(6)+4(8)
\\end{pmatrix}
$$

Therefore:

$$
AB=
\\begin{pmatrix}
19&22\\\\
43&50
\\end{pmatrix}
$$

The general formula is:

$$
(AB)_{ij}
=
\\sum_{k=1}^{n}a_{ik}b_{kj}
$$

Unlike multiplication of ordinary numbers, in general:

$$
AB\\neq BA
$$

Therefore, matrix multiplication is **not commutative**.

---

# 11. Square Matrices

A square matrix has the same number of rows and columns.

For example:

$$
A=
\\begin{pmatrix}
2&1&3\\\\
4&5&6\\\\
7&8&9
\\end{pmatrix}
$$

is a:

$$
3\\times3
$$

matrix.

Square matrices are particularly important because operations such as
the **determinant**, **inverse**, and **eigenvalues** are defined for
them.

---

# 12. Main Diagonal

In a square matrix, the **main diagonal** consists of the elements:

$$
a_{11},a_{22},a_{33},\\ldots
$$

For example:

$$
A=
\\begin{pmatrix}
\\boxed{2}&1&3\\\\
4&\\boxed{5}&6\\\\
7&8&\\boxed{9}
\\end{pmatrix}
$$

Its main diagonal is:

$$
2,\\quad5,\\quad9
$$

---

# 13. Determinant

The **determinant** is a number associated with a square matrix.

It is represented as:

$$
\\det(A)
$$

For a $2\\times2$ matrix:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

its determinant is:

$$
\\det(A)=ad-bc
$$

For example:

$$
A=
\\begin{pmatrix}
2&3\\\\
1&4
\\end{pmatrix}
$$

Then:

$$
\\det(A)=2(4)-3(1)=5
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
\\det(A)\\neq0
$$

For a $2\\times2$ matrix:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

its inverse is:

$$
A^{-1}
=
\\frac{1}{ad-bc}
\\begin{pmatrix}
d&-b\\\\
-c&a
\\end{pmatrix}
$$

provided that:

$$
ad-bc\\neq0
$$

---

# 15. Matrix Rank

The **rank** indicates the maximum number of linearly independent rows
or columns of a matrix.

It is represented as:

$$
\\operatorname{rank}(A)
$$

For example:

$$
A=
\\begin{pmatrix}
1&2\\\\
2&4
\\end{pmatrix}
$$

The second row is twice the first:

$$
(2,4)=2(1,2)
$$

Therefore, there is only one linearly independent row:

$$
\\operatorname{rank}(A)=1
$$

---

# 16. Matrices and Systems of Equations

Matrices allow us to represent systems of equations compactly.

For example:

$$
\\begin{cases}
2x+y=5\\\\
x-y=1
\\end{cases}
$$

can be written as:

$$
\\begin{pmatrix}
2&1\\\\
1&-1
\\end{pmatrix}
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
5\\\\
1
\\end{pmatrix}
$$

In general:

$$
A\\mathbf{x}=\\mathbf{b}
$$

where:

- $A$ is the coefficient matrix.
- $\\mathbf{x}$ contains the unknowns.
- $\\mathbf{b}$ contains the constant terms.

If $A$ has an inverse:

$$
\\mathbf{x}=A^{-1}\\mathbf{b}
$$

---

# 17. Elementary Operations

The elementary row operations are:

### Swap two rows

$$
F_1\\leftrightarrow F_2
$$

### Multiply a row by a non-zero number

$$
F_1\\rightarrow3F_1
$$

### Add a multiple of one row to another

$$
F_2\\rightarrow F_2+2F_1
$$

These operations are fundamental for solving systems of equations and
calculating the rank or inverse of a matrix.
`;function o(){let{locale:o}=t();return e(n,{id:`matrices`,content:{es:r,ca:i,en:a}[o]})}export{o as default};