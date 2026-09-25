# 0. Escalars, vectors, matrius i tensors

Abans d'estudiar les matrius, és útil conèixer alguns conceptes bàsics
d'àlgebra.

- Un **escalar** és un únic valor, com $5$ o $-2$.
- Un **vector** és una col·lecció ordenada d'escalars, per exemple:

$$
\mathbf{v}=
\begin{pmatrix}
2\\
4\\
6
\end{pmatrix}
$$

- Una **matriu** organitza escalars en files i columnes:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

- Un **tensor** és una generalització que permet treballar amb més de
  dues dimensions.

De manera simplificada:

$$
\boxed{
\text{escalar}
\rightarrow
\text{vector}
\rightarrow
\text{matriu}
\rightarrow
\text{tensor}
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
\begin{pmatrix}
2&4&1\\
0&3&5
\end{pmatrix}
$$

Aquesta matriu té:

- 2 files.
- 3 columnes.
- 6 elements.

Per tant, és una matriu de dimensions:

$$
2\times3
$$

El primer nombre indica el nombre de **files** i el segon indica el
nombre de **columnes**.

---

# 2. Elements d'una matriu

Els elements d'una matriu s'identifiquen mitjançant dos índexs.

En una matriu:

$$
A=
\begin{pmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}
\end{pmatrix}
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
\begin{pmatrix}
2&4&1\\
0&3&5
\end{pmatrix}
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
A=(a_{ij})_{m\times n}
$$

---

# 3. Dimensions d'una matriu

Les dimensions d'una matriu indiquen el nombre de files i columnes.

Per exemple:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

és una matriu:

$$
2\times3
$$

Una matriu:

$$
B=
\begin{pmatrix}
1&2\\
3&4\\
5&6
\end{pmatrix}
$$

és una matriu:

$$
3\times2
$$

Una matriu:

$$
C=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

és una matriu:

$$
2\times2
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
\begin{pmatrix}
1&2&3&4
\end{pmatrix}
$$

Les seves dimensions són:

$$
1\times4
$$

---

## Matriu columna

Una matriu columna té una única columna:

$$
A=
\begin{pmatrix}
1\\
2\\
3\\
4
\end{pmatrix}
$$

Les seves dimensions són:

$$
4\times1
$$

---

## Matriu quadrada

Una matriu quadrada té el mateix nombre de files i columnes:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6\\
7&8&9
\end{pmatrix}
$$

Les seves dimensions són:

$$
3\times3
$$

---

## Matriu nul·la

Tots els seus elements són zero:

$$
A=
\begin{pmatrix}
0&0\\
0&0
\end{pmatrix}
$$

---

## Matriu diagonal

Tots els elements fora de la diagonal principal són zero:

$$
A=
\begin{pmatrix}
2&0&0\\
0&5&0\\
0&0&7
\end{pmatrix}
$$

---

## Matriu identitat

Una matriu identitat és una matriu quadrada amb uns a la diagonal
principal i zeros a la resta:

$$
I_3=
\begin{pmatrix}
1&0&0\\
0&1&0\\
0&0&1
\end{pmatrix}
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
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

i:

$$
B=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
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
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

i:

$$
B=
\begin{pmatrix}
5&6\\
7&8
\end{pmatrix}
$$

Aleshores:

$$
A+B=
\begin{pmatrix}
1+5&2+6\\
3+7&4+8
\end{pmatrix}
$$

Per tant:

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

# 7. Resta de matrius

La resta funciona de la mateixa manera:

$$
(A-B)_{ij}=a_{ij}-b_{ij}
$$

Per exemple:

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

# 8. Multiplicació d'una matriu per un escalar

Un **escalar** és simplement un nombre.

Per multiplicar una matriu per un escalar, multipliquem tots els elements
de la matriu per aquest nombre.

Per exemple:

$$
A=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

Aleshores:

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

# 9. Transposada d'una matriu

La **transposada** d'una matriu s'obté intercanviant les seves files
per les seves columnes.

Si:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

aleshores:

$$
A^T=
\begin{pmatrix}
1&4\\
2&5\\
3&6
\end{pmatrix}
$$

Si $A$ té dimensions $m\times n$, la seva transposada té dimensions:

$$
n\times m
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
A_{m\times n}
$$

i:

$$
B_{n\times p}
$$

aleshores podem calcular:

$$
AB
$$

i el resultat tindrà dimensions:

$$
m\times p
$$

Per exemple:

$$
A=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
$$

i:

$$
B=
\begin{pmatrix}
5&6\\
7&8
\end{pmatrix}
$$

Aleshores:

$$
AB=
\begin{pmatrix}
1(5)+2(7)&1(6)+2(8)\\
3(5)+4(7)&3(6)+4(8)
\end{pmatrix}
$$

Per tant:

$$
AB=
\begin{pmatrix}
19&22\\
43&50
\end{pmatrix}
$$

La fórmula general és:

$$
(AB)_{ij}
=
\sum_{k=1}^{n}a_{ik}b_{kj}
$$

A diferència de la multiplicació de nombres normals, en general:

$$
AB\neq BA
$$

Per tant, la multiplicació de matrius **no és commutativa**.

---

# 11. Matrius quadrades

Una matriu quadrada té el mateix nombre de files i columnes.

Per exemple:

$$
A=
\begin{pmatrix}
2&1&3\\
4&5&6\\
7&8&9
\end{pmatrix}
$$

és una matriu:

$$
3\times3
$$

Les matrius quadrades són especialment importants perquè operacions com
el **determinant**, la **inversa** i els **autovalors** es defineixen
per a aquestes matrius.

---

# 12. Diagonal principal

En una matriu quadrada, la **diagonal principal** està formada pels
elements:

$$
a_{11},a_{22},a_{33},\ldots
$$

Per exemple:

$$
A=
\begin{pmatrix}
\boxed{2}&1&3\\
4&\boxed{5}&6\\
7&8&\boxed{9}
\end{pmatrix}
$$

La seva diagonal principal és:

$$
2,\quad5,\quad9
$$

---

# 13. Determinant

El **determinant** és un nombre associat a una matriu quadrada.

Es representa com:

$$
\det(A)
$$

Per a una matriu $2\times2$:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

el seu determinant és:

$$
\det(A)=ad-bc
$$

Per exemple:

$$
A=
\begin{pmatrix}
2&3\\
1&4
\end{pmatrix}
$$

Aleshores:

$$
\det(A)=2(4)-3(1)=5
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
\det(A)\neq0
$$

Per a una matriu $2\times2$:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

la seva inversa és:

$$
A^{-1}
=
\frac{1}{ad-bc}
\begin{pmatrix}
d&-b\\
-c&a
\end{pmatrix}
$$

sempre que:

$$
ad-bc\neq0
$$

---

# 15. Rang d'una matriu

El **rang** indica el nombre màxim de files o columnes linealment
independents d'una matriu.

Es representa com:

$$
\operatorname{rang}(A)
$$

Per exemple:

$$
A=
\begin{pmatrix}
1&2\\
2&4
\end{pmatrix}
$$

La segona fila és el doble de la primera:

$$
(2,4)=2(1,2)
$$

Per tant, només hi ha una fila linealment independent:

$$
\operatorname{rang}(A)=1
$$

---

# 16. Matrius i sistemes d'equacions

Les matrius permeten representar sistemes d'equacions de manera
compacta.

Per exemple:

$$
\begin{cases}
2x+y=5\\
x-y=1
\end{cases}
$$

es pot escriure com:

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

En general:

$$
A\mathbf{x}=\mathbf{b}
$$

on:

- $A$ és la matriu de coeficients.
- $\mathbf{x}$ conté les incògnites.
- $\mathbf{b}$ conté els termes independents.

Si $A$ té inversa:

$$
\mathbf{x}=A^{-1}\mathbf{b}
$$

---

# 17. Operacions elementals

Les operacions elementals sobre les files d'una matriu són:

### Intercanviar dues files

$$
F_1\leftrightarrow F_2
$$

### Multiplicar una fila per un nombre diferent de zero

$$
F_1\rightarrow3F_1
$$

### Sumar a una fila un múltiple d'una altra

$$
F_2\rightarrow F_2+2F_1
$$

Aquestes operacions són fonamentals per resoldre sistemes d'equacions
i calcular el rang o la inversa d'una matriu.
