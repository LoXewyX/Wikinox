# Matrius inverses

La **matriu inversa** d'una matriu és una matriu que, en multiplicar-la per la matriu original, produeix la **matriu identitat**.

La matriu inversa és fonamental per resoldre sistemes d'equacions, transformar vectors i estudiar transformacions lineals.

---

## 1. Definició

Sigui una matriu quadrada:

$$
A
$$

La seva inversa s'escriu:

$$
A^{-1}
$$

i compleix:

$$
\boxed{AA^{-1}=A^{-1}A=I}
$$

on $I$ és la **matriu identitat**.

Per exemple:

$$
I=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
$$

Per tant, $A^{-1}$ és la matriu que "desfà" l'efecte de $A$.

---

## 2. Quan existeix una matriu inversa?

No totes les matrius tenen inversa.

Una matriu quadrada $A$ és invertible si i només si:

$$
\boxed{\det(A)\neq0}
$$

Equivalentment:

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ existeix}
}
$$

Si:

$$
\det(A)=0
$$

la matriu no té inversa i s'anomena **matriu singular**.

---

## 3. Inversa d'una matriu $2\times2$

Sigui:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

La seva inversa és:

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

sempre que:

$$
ad-bc\neq0
$$

És a dir:

$$
\det(A)\neq0
$$

---

## 4. Exemple $2\times2$

Considerem:

$$
A=
\begin{pmatrix}
2&1\\
1&1
\end{pmatrix}
$$

Primer calculem el determinant:

$$
\det(A)=(2)(1)-(1)(1)
$$

$$
\det(A)=1
$$

Com que:

$$
\det(A)\neq0
$$

la inversa existeix.

Apliquem la fórmula:

$$
A^{-1}
=
\frac{1}{1}
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
$$

Per tant:

$$
\boxed{
A^{-1}=
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
}
$$

Podem comprovar-ho:

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

# 5. Exemple d'una matriu sense inversa

Considerem:

$$
A=
\begin{pmatrix}
1&2\\
2&4
\end{pmatrix}
$$

El determinant és:

$$
\det(A)=(1)(4)-(2)(2)
$$

$$
=4-4=0
$$

Per tant:

$$
\boxed{\det(A)=0}
$$

i:

$$
\boxed{A^{-1}\text{ no existeix}}
$$

La matriu és **singular**.

---

# 6. Propietats de la matriu inversa

## Inversa de la inversa

$$
\boxed{(A^{-1})^{-1}=A}
$$

---

## Inversa de la identitat

$$
\boxed{I^{-1}=I}
$$

---

## Inversa d'un producte

Si $A$ i $B$ són invertibles:

$$
\boxed{(AB)^{-1}=B^{-1}A^{-1}}
$$

L'ordre s'inverteix.

En general:

$$
(AB)^{-1}\neq A^{-1}B^{-1}
$$

---

## Inversa de la transposada

$$
\boxed{(A^T)^{-1}=(A^{-1})^T}
$$

---

## Determinant de la inversa

Si $A$ és invertible:

$$
\boxed{
\det(A^{-1})=\frac{1}{\det(A)}
}
$$

---

# 7. Inversa i determinant

La relació entre inversa i determinant és:

$$
\boxed{
A^{-1}\text{ existeix}
\iff
\det(A)\neq0
}
$$

Això significa que el determinant ens permet saber immediatament si una matriu quadrada és invertible.

| Determinant    | Matriu inversa |
| -------------- | -------------- |
| $\det(A)\neq0$ | Existeix       |
| $\det(A)=0$    | No existeix    |

---

# 8. Càlcul de la inversa mitjançant Gauss-Jordan

Per a matrius més grans, podem calcular la inversa utilitzant **eliminació de Gauss-Jordan**.

Comencem amb:

$$
A
$$

i construïm la matriu augmentada:

$$
\boxed{[A\mid I]}
$$

Després apliquem operacions elementals de fila fins obtenir:

$$
[I\mid A^{-1}]
$$

És a dir:

$$
[A\mid I]
\longrightarrow
[I\mid A^{-1}]
$$

---

## 9. Exemple amb Gauss-Jordan

Considerem:

$$
A=
\begin{pmatrix}
2&1\\
1&1
\end{pmatrix}
$$

Construïm:

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

Intercanviem les files:

$$
\left[
\begin{array}{cc|cc}
1&1&0&1\\
2&1&1&0
\end{array}
\right]
$$

Fem:

$$
F_2\rightarrow F_2-2F_1
$$

Obtenim:

$$
\left[
\begin{array}{cc|cc}
1&1&0&1\\
0&-1&1&-2
\end{array}
\right]
$$

Ara:

$$
F_2\rightarrow -F_2
$$

$$
\left[
\begin{array}{cc|cc}
1&1&0&1\\
0&1&-1&2
\end{array}
\right]
$$

Finalment:

$$
F_1\rightarrow F_1-F_2
$$

Obtenim:

$$
\left[
\begin{array}{cc|cc}
1&0&1&-1\\
0&1&-1&2
\end{array}
\right]
$$

Per tant:

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

# 10. Inversa i sistemes d'equacions

Una de les aplicacions més importants de les matrius inverses és resoldre sistemes d'equacions.

Considerem:

$$
A\mathbf{x}=\mathbf{b}
$$

Si $A$ és invertible, multipliquem els dos costats per $A^{-1}$:

$$
A^{-1}A\mathbf{x}=A^{-1}\mathbf{b}
$$

Com que:

$$
A^{-1}A=I
$$

tenim:

$$
I\mathbf{x}=A^{-1}\mathbf{b}
$$

Per tant:

$$
\boxed{\mathbf{x}=A^{-1}\mathbf{b}}
$$

---

## 11. Exemple

Considerem el sistema:

$$
\begin{cases}
2x+y=5\\
x+y=3
\end{cases}
$$

El podem escriure com:

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

És a dir:

$$
A\mathbf{x}=\mathbf{b}
$$

Sabem que:

$$
A^{-1}
=
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
$$

Per tant:

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

Per tant:

$$
\boxed{x=2,\qquad y=1}
$$

---

# 12. Interpretació geomètrica

Una matriu invertible representa una transformació que es pot **desfer**.

Si:

$$
\mathbf{y}=A\mathbf{x}
$$

podem recuperar $\mathbf{x}$ mitjançant:

$$
\boxed{\mathbf{x}=A^{-1}\mathbf{y}}
$$

Per tant:

- $A$ aplica una transformació.
- $A^{-1}$ desfà aquesta transformació.

Si:

$$
\det(A)=0
$$

la transformació redueix la dimensió de l'espai i no es pot desfer completament.

---

# 13. Relació amb el rang

Per a una matriu $n\times n$:

$$
\boxed{
A\text{ és invertible}
\iff
\operatorname{rang}(A)=n
}
$$

Per tant:

$$
\boxed{
\det(A)\neq0
\iff
\operatorname{rang}(A)=n
\iff
A^{-1}\text{ existeix}
}
$$

---

# 14. Matriu adjunta

Una altra manera de calcular la inversa és mitjançant la **matriu adjunta**:

$$
\boxed{
A^{-1}
=
\frac{1}{\det(A)}
\operatorname{adj}(A)
}
$$

sempre que:

$$
\det(A)\neq0
$$

La matriu adjunta és la transposada de la matriu de cofactors:

$$
\boxed{
\operatorname{adj}(A)=C^T
}
$$

on $C$ és la matriu de cofactors.

Aquest mètode és útil teòricament, però per a matrius grans, Gauss-Jordan acostuma a ser més pràctic.

---

# 15. Idees clau

| Concepte                                 | Resultat                      |
| ---------------------------------------- | ----------------------------- |
| Matriu inversa                           | $A^{-1}$                      |
| Definició                                | $AA^{-1}=A^{-1}A=I$           |
| Condició                                 | $\det(A)\neq0$                |
| $\det(A)=0$                              | No existeix la inversa        |
| $(A^{-1})^{-1}$                          | $A$                           |
| $(AB)^{-1}$                              | $B^{-1}A^{-1}$                |
| $(A^T)^{-1}$                             | $(A^{-1})^T$                  |
| $\det(A^{-1})$                           | $\frac{1}{\det(A)}$           |
| Sistema $A\mathbf{x}=\mathbf{b}$         | $\mathbf{x}=A^{-1}\mathbf{b}$ |
| Rang d'una matriu invertible $n\times n$ | $n$                           |

### Relació fonamental

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ existeix}
\iff
\operatorname{rang}(A)=n
}
$$
