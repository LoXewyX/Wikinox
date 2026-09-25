# Determinants

Un **determinant** és un valor escalar associat a una **matriu quadrada**. Proporciona informació important sobre la matriu, especialment sobre si és invertible i si les seves files o columnes són linealment independents.

## 1. Definició

Per a una matriu quadrada:

$$
A =
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

el seu determinant s'escriu com:

$$
\det(A)
$$

o:

$$
|A|
$$

Per a una matriu $2\times2$:

$$
\boxed{\det(A)=ad-bc}
$$

### Exemple

$$
A=
\begin{pmatrix}
3 & 2\\
1 & 4
\end{pmatrix}
$$

Aleshores:

$$
\det(A)=(3)(4)-(2)(1)
$$

$$
\det(A)=12-2=10
$$

Per tant:

$$
\boxed{\det(A)=10}
$$

---

## 2. Els determinants només existeixen per a matrius quadrades

Podem calcular determinants de matrius:

- $1\times1$
- $2\times2$
- $3\times3$
- $4\times4$
- etc.

Però no directament d'una matriu rectangular com:

$$
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

perquè és una matriu $2\times3$ i no és quadrada.

---

## 3. Determinant d'una matriu $1\times1$

Per a:

$$
A=
\begin{pmatrix}
5
\end{pmatrix}
$$

simplement tenim:

$$
\boxed{\det(A)=5}
$$

---

## 4. Determinant d'una matriu $2\times2$

La fórmula general és:

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

Una manera útil de recordar-ho és:

$$
\boxed{\text{producte de la diagonal principal}-
\text{producte de l'altra diagonal}}
$$

Per exemple:

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

# 5. Determinant d'una matriu $3\times3$

Considerem:

$$
A=
\begin{pmatrix}
a&b&c\\
d&e&f\\
g&h&i
\end{pmatrix}
$$

El determinant es pot calcular mitjançant el **desenvolupament per cofactors**:

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

Com que cada determinant més petit és $2\times2$:

$$
\det(A)
=
a(ei-fh)
-b(di-fg)
+c(dh-eg)
$$

Per tant:

$$
\boxed{
\det(A)=a(ei-fh)-b(di-fg)+c(dh-eg)
}
$$

### Exemple

$$
A=
\begin{pmatrix}
1&2&3\\
0&4&5\\
1&0&6
\end{pmatrix}
$$

Desenvolupant per la primera fila:

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

Calculem cada determinant $2\times2$:

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

Per tant:

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

# 6. Menors i cofactors

Aquests conceptes s'utilitzen per calcular determinants més grans.

## Menor

El **menor** $M_{ij}$ s'obté eliminant:

- la fila $i$
- la columna $j$

i calculant el determinant del que queda.

Per a:

$$
A=
\begin{pmatrix}
1&2&3\\
4&5&6\\
7&8&9
\end{pmatrix}
$$

El menor $M_{11}$ s'obté eliminant la fila 1 i la columna 1:

$$
M_{11}=
\begin{vmatrix}
5&6\\
8&9
\end{vmatrix}
$$

Per tant:

$$
M_{11}=5(9)-6(8)
$$

$$
M_{11}=45-48=-3
$$

---

## Cofactor

El cofactor és:

$$
\boxed{C_{ij}=(-1)^{i+j}M_{ij}}
$$

Els signes segueixen aquest patró:

$$
\begin{pmatrix}
+&-&+\\
-&+&-\\
+&-&+
\end{pmatrix}
$$

Per exemple:

$$
C_{12}=-M_{12}
$$

perquè:

$$
(-1)^{1+2}=(-1)^3=-1
$$

---

# 7. Desenvolupament per cofactors

Podem calcular un determinant desenvolupant-lo per **qualsevol fila o columna**.

Per a la fila $i$:

$$
\boxed{
\det(A)=
\sum_j a_{ij}C_{ij}
}
$$

Per exemple, desenvolupant per la primera fila:

$$
\det(A)=
a_{11}C_{11}
+a_{12}C_{12}
+a_{13}C_{13}
$$

Per a una matriu $3\times3$, apareix el patró:

$$
+\quad-\quad+
$$

### Regla pràctica

Quan calculem un determinant, és convenient escollir una fila o columna que contingui **molts zeros**, ja que redueix els càlculs.

---

# 8. Propietats importants

Els determinants tenen diverses propietats importants.

### Matriu identitat

$$
I=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
$$

té:

$$
\boxed{\det(I)=1}
$$

---

### Transposada

$$
\boxed{\det(A^T)=\det(A)}
$$

Transposar una matriu no modifica el seu determinant.

---

### Producte

Per a dues matrius quadrades:

$$
\boxed{\det(AB)=\det(A)\det(B)}
$$

Aquesta és una de les propietats més importants dels determinants.

---

### Multiplicació per un escalar

Per a una matriu $n\times n$:

$$
\boxed{\det(kA)=k^n\det(A)}
$$

Per a una matriu $2\times2$:

$$
\det(kA)=k^2\det(A)
$$

Per a una matriu $3\times3$:

$$
\det(kA)=k^3\det(A)
$$

---

# 9. Què passa quan intercanviem dues files?

Si intercanviem dues files, el determinant canvia de signe.

Per exemple:

$$
\det
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
=
ad-bc
$$

Després d'intercanviar les files:

$$
\det
\begin{pmatrix}
c&d\\
a&b
\end{pmatrix}
=
cb-da
$$

Per tant:

$$
\boxed{\det(\text{nova matriu})=-\det(A)}
$$

---

# 10. Files iguals o proporcionals

Si dues files són iguals:

$$
\boxed{\det(A)=0}
$$

Per exemple:

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

El mateix passa si una fila és un múltiple d'una altra.

Per exemple:

$$
\begin{pmatrix}
1&2\\
2&4
\end{pmatrix}
$$

La segona fila és:

$$
2\times\text{fila}_1
$$

Per tant:

$$
\boxed{\det(A)=0}
$$

---

# 11. Interpretació geomètrica

El determinant també té un significat geomètric.

Per a una matriu $2\times2$:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

el valor absolut:

$$
|\det(A)|
$$

representa el **factor d'escala de l'àrea** de la transformació representada per $A$.

Per exemple:

$$
\det(A)=3
$$

significa que les àrees es multipliquen per:

$$
3
$$

Mentre que:

$$
\det(A)=-3
$$

significa que les àrees també s'escalen per $3$, però la transformació inverteix l'orientació.

Per a una matriu $3\times3$, el valor absolut del determinant representa un **factor d'escala del volum**.

---

# 12. Determinant i inversa

Aquesta és una de les relacions més importants:

$$
\boxed{
\det(A)\neq0
\iff
A\text{ és invertible}
}
$$

En altres paraules:

Si

$$
\det(A)\neq0
$$

llavors:

$$
A^{-1}
$$

existeix.

Si

$$
\det(A)=0
$$

llavors:

$$
A^{-1}
$$

**no existeix**.

Una matriu amb determinant zero s'anomena **matriu singular**.

---

# 13. Determinant i sistemes d'equacions

Considerem:

$$
A\mathbf{x}=\mathbf{b}
$$

Si:

$$
\det(A)\neq0
$$

el sistema té una **única solució**.

Si:

$$
\det(A)=0
$$

el sistema no té una única solució. Depenent del sistema, pot tenir:

- cap solució
- infinites solucions

Això relaciona els determinants amb el **rang** d'una matriu i els sistemes d'equacions lineals.

---

# 14. Determinant i independència lineal

Per a una matriu $n\times n$:

$$
\boxed{\det(A)\neq0}
$$

significa que les files i les columnes són **linealment independents**.

Al contrari:

$$
\boxed{\det(A)=0}
$$

significa que les files o les columnes són **linealment dependents**.

Per tant, per a una matriu quadrada:

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ existeix}
\iff
\operatorname{rang}(A)=n
\iff
\text{files i columnes linealment independents}
}
$$

---

# 15. Determinant i valors propis

Els determinants també apareixen en el càlcul dels **valors propis**.

Per a una matriu $A$, els valors propis compleixen:

$$
\boxed{\det(A-\lambda I)=0}
$$

Això s'anomena **equació característica**.

Per exemple:

$$
A=
\begin{pmatrix}
2&0\\
0&3
\end{pmatrix}
$$

Aleshores:

$$
A-\lambda I=
\begin{pmatrix}
2-\lambda&0\\
0&3-\lambda
\end{pmatrix}
$$

Per tant:

$$
\det(A-\lambda I)
=
(2-\lambda)(3-\lambda)
$$

Ho igualem a zero:

$$
(2-\lambda)(3-\lambda)=0
$$

Així:

$$
\boxed{\lambda_1=2,\qquad\lambda_2=3}
$$

---

# 16. Idees clau

| Concepte                    | Resultat                        |
| --------------------------- | ------------------------------- |
| Només les matrius quadrades | Tenen determinants              |
| Determinant $2\times2$      | $ad-bc$                         |
| $\det(A)=0$                 | La matriu és singular           |
| $\det(A)\neq0$              | La matriu és invertible         |
| $\det(A^T)$                 | $\det(A)$                       |
| $\det(AB)$                  | $\det(A)\det(B)$                |
| Files iguals                | Determinant $=0$                |
| Files proporcionals         | Determinant $=0$                |
| Intercanviar dues files     | Canvia el signe del determinant |
| Determinant $2\times2$      | Factor d'escala de l'àrea       |
| Determinant $3\times3$      | Factor d'escala del volum       |
| $\det(A-\lambda I)=0$       | Permet trobar els valors propis |

### Relació més important

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ existeix}
\iff
A\text{ té rang màxim}
\iff
\text{les seves columnes són linealment independents}
}
$$
