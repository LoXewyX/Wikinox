import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-CC0Uwr-v.js";import{t as n}from"./TopicPage-CxUbQKDL.js";var r=`# Determinantes

Un **determinante** es un valor escalar asociado a una **matriz cuadrada**. Proporciona información importante sobre la matriz, especialmente sobre si es invertible y si sus filas o columnas son linealmente independientes.

## 1. Definición

Para una matriz cuadrada:

$$
A =
\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}
$$

su determinante se escribe como:

$$
\\det(A)
$$

o:

$$
|A|
$$

Para una matriz $2\\times2$:

$$
\\boxed{\\det(A)=ad-bc}
$$

### Ejemplo

$$
A=
\\begin{pmatrix}
3 & 2\\\\
1 & 4
\\end{pmatrix}
$$

Entonces:

$$
\\det(A)=(3)(4)-(2)(1)
$$

$$
\\det(A)=12-2=10
$$

Por tanto:

$$
\\boxed{\\det(A)=10}
$$

---

## 2. Los determinantes solo existen para matrices cuadradas

Podemos calcular determinantes de matrices:

- $1\\times1$
- $2\\times2$
- $3\\times3$
- $4\\times4$
- etc.

Pero no directamente de una matriz rectangular como:

$$
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

porque es una matriz $2\\times3$ y no es cuadrada.

---

## 3. Determinante de una matriz $1\\times1$

Para:

$$
A=
\\begin{pmatrix}
5
\\end{pmatrix}
$$

simplemente tenemos:

$$
\\boxed{\\det(A)=5}
$$

---

## 4. Determinante de una matriz $2\\times2$

La fórmula general es:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

$$
\\boxed{\\det(A)=ad-bc}
$$

Una forma útil de recordarlo es:

$$
\\boxed{\\text{producto de la diagonal principal}-
\\text{producto de la otra diagonal}}
$$

Por ejemplo:

$$
\\begin{pmatrix}
2&5\\\\
3&7
\\end{pmatrix}
$$

$$
\\det(A)=(2)(7)-(5)(3)
$$

$$
=14-15
$$

$$
\\boxed{\\det(A)=-1}
$$

---

# 5. Determinante de una matriz $3\\times3$

Consideremos:

$$
A=
\\begin{pmatrix}
a&b&c\\\\
d&e&f\\\\
g&h&i
\\end{pmatrix}
$$

El determinante se puede calcular mediante el **desarrollo por cofactores**:

$$
\\boxed{
\\det(A)
=
a
\\begin{vmatrix}
e&f\\\\
h&i
\\end{vmatrix}
-
b
\\begin{vmatrix}
d&f\\\\
g&i
\\end{vmatrix}
+
c
\\begin{vmatrix}
d&e\\\\
g&h
\\end{vmatrix}
}
$$

Como cada determinante más pequeño es $2\\times2$:

$$
\\det(A)
=
a(ei-fh)
-b(di-fg)
+c(dh-eg)
$$

Por tanto:

$$
\\boxed{
\\det(A)=a(ei-fh)-b(di-fg)+c(dh-eg)
}
$$

### Ejemplo

$$
A=
\\begin{pmatrix}
1&2&3\\\\
0&4&5\\\\
1&0&6
\\end{pmatrix}
$$

Desarrollando por la primera fila:

$$
\\det(A)
=
1
\\begin{vmatrix}
4&5\\\\
0&6
\\end{vmatrix}
-
2
\\begin{vmatrix}
0&5\\\\
1&6
\\end{vmatrix}
+
3
\\begin{vmatrix}
0&4\\\\
1&0
\\end{vmatrix}
$$

Calculamos cada determinante $2\\times2$:

$$
\\begin{vmatrix}
4&5\\\\
0&6
\\end{vmatrix}
=24
$$

$$
\\begin{vmatrix}
0&5\\\\
1&6
\\end{vmatrix}
=-5
$$

$$
\\begin{vmatrix}
0&4\\\\
1&0
\\end{vmatrix}
=-4
$$

Por tanto:

$$
\\det(A)=1(24)-2(-5)+3(-4)
$$

$$
=24+10-12
$$

$$
\\boxed{\\det(A)=22}
$$

---

# 6. Menores y cofactores

Estos conceptos se utilizan para calcular determinantes más grandes.

## Menor

El **menor** $M_{ij}$ se obtiene eliminando:

- la fila $i$
- la columna $j$

y calculando el determinante de lo que queda.

Para:

$$
A=
\\begin{pmatrix}
1&2&3\\\\
4&5&6\\\\
7&8&9
\\end{pmatrix}
$$

El menor $M_{11}$ se obtiene eliminando la fila 1 y la columna 1:

$$
M_{11}=
\\begin{vmatrix}
5&6\\\\
8&9
\\end{vmatrix}
$$

Por tanto:

$$
M_{11}=5(9)-6(8)
$$

$$
M_{11}=45-48=-3
$$

---

## Cofactor

El cofactor es:

$$
\\boxed{C_{ij}=(-1)^{i+j}M_{ij}}
$$

Los signos siguen este patrón:

$$
\\begin{pmatrix}
+&-&+\\\\
-&+&-\\\\
+&-&+
\\end{pmatrix}
$$

Por ejemplo:

$$
C_{12}=-M_{12}
$$

porque:

$$
(-1)^{1+2}=(-1)^3=-1
$$

---

# 7. Desarrollo por cofactores

Podemos calcular un determinante desarrollándolo por **cualquier fila o columna**.

Para la fila $i$:

$$
\\boxed{
\\det(A)=
\\sum_j a_{ij}C_{ij}
}
$$

Por ejemplo, desarrollando por la primera fila:

$$
\\det(A)=
a_{11}C_{11}
+a_{12}C_{12}
+a_{13}C_{13}
$$

Para una matriz $3\\times3$, aparece el patrón:

$$
+\\quad-\\quad+
$$

### Regla práctica

Al calcular un determinante, conviene elegir una fila o columna que contenga **muchos ceros**, ya que reduce los cálculos.

---

# 8. Propiedades importantes

Los determinantes tienen varias propiedades importantes.

### Matriz identidad

$$
I=
\\begin{pmatrix}
1&0\\\\
0&1
\\end{pmatrix}
$$

tiene:

$$
\\boxed{\\det(I)=1}
$$

---

### Traspuesta

$$
\\boxed{\\det(A^T)=\\det(A)}
$$

Trasponer una matriz no modifica su determinante.

---

### Producto

Para dos matrices cuadradas:

$$
\\boxed{\\det(AB)=\\det(A)\\det(B)}
$$

Esta es una de las propiedades más importantes de los determinantes.

---

### Multiplicación por un escalar

Para una matriz $n\\times n$:

$$
\\boxed{\\det(kA)=k^n\\det(A)}
$$

Para una matriz $2\\times2$:

$$
\\det(kA)=k^2\\det(A)
$$

Para una matriz $3\\times3$:

$$
\\det(kA)=k^3\\det(A)
$$

---

# 9. ¿Qué ocurre cuando intercambiamos dos filas?

Si intercambiamos dos filas, el determinante cambia de signo.

Por ejemplo:

$$
\\det
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
=
ad-bc
$$

Después de intercambiar las filas:

$$
\\det
\\begin{pmatrix}
c&d\\\\
a&b
\\end{pmatrix}
=
cb-da
$$

Por tanto:

$$
\\boxed{\\det(\\text{nueva matriz})=-\\det(A)}
$$

---

# 10. Filas iguales o proporcionales

Si dos filas son iguales:

$$
\\boxed{\\det(A)=0}
$$

Por ejemplo:

$$
A=
\\begin{pmatrix}
1&2\\\\
1&2
\\end{pmatrix}
$$

$$
\\det(A)=1(2)-2(1)=0
$$

Lo mismo ocurre si una fila es múltiplo de otra.

Por ejemplo:

$$
\\begin{pmatrix}
1&2\\\\
2&4
\\end{pmatrix}
$$

La segunda fila es:

$$
2\\times\\text{fila}_1
$$

Por tanto:

$$
\\boxed{\\det(A)=0}
$$

---

# 11. Interpretación geométrica

El determinante también tiene un significado geométrico.

Para una matriz $2\\times2$:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

el valor absoluto:

$$
|\\det(A)|
$$

representa el **factor de escala del área** de la transformación representada por $A$.

Por ejemplo:

$$
\\det(A)=3
$$

significa que las áreas se multiplican por un factor de:

$$
3
$$

Mientras que:

$$
\\det(A)=-3
$$

significa que las áreas también se escalan por $3$, pero la transformación invierte la orientación.

Para una matriz $3\\times3$, el valor absoluto del determinante representa un **factor de escala del volumen**.

---

# 12. Determinante e inversa

Esta es una de las relaciones más importantes:

$$
\\boxed{
\\det(A)\\neq0
\\iff
A\\text{ es invertible}
}
$$

En otras palabras:

Si

$$
\\det(A)\\neq0
$$

entonces:

$$
A^{-1}
$$

existe.

Si

$$
\\det(A)=0
$$

entonces:

$$
A^{-1}
$$

**no existe**.

Una matriz con determinante cero se denomina **matriz singular**.

---

# 13. Determinante y sistemas de ecuaciones

Consideremos:

$$
A\\mathbf{x}=\\mathbf{b}
$$

Si:

$$
\\det(A)\\neq0
$$

el sistema tiene una **única solución**.

Si:

$$
\\det(A)=0
$$

el sistema no tiene una única solución. Dependiendo del sistema, puede tener:

- ninguna solución
- infinitas soluciones

Esto relaciona los determinantes con el **rango** de una matriz y los sistemas de ecuaciones lineales.

---

# 14. Determinante e independencia lineal

Para una matriz $n\\times n$:

$$
\\boxed{\\det(A)\\neq0}
$$

significa que las filas y columnas son **linealmente independientes**.

Por el contrario:

$$
\\boxed{\\det(A)=0}
$$

significa que las filas o columnas son **linealmente dependientes**.

Por tanto, para una matriz cuadrada:

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ existe}
\\iff
\\operatorname{rango}(A)=n
\\iff
\\text{filas y columnas linealmente independientes}
}
$$

---

# 15. Determinante y valores propios

Los determinantes también aparecen en el cálculo de los **valores propios**.

Para una matriz $A$, los valores propios cumplen:

$$
\\boxed{\\det(A-\\lambda I)=0}
$$

Esto se denomina **ecuación característica**.

Por ejemplo:

$$
A=
\\begin{pmatrix}
2&0\\\\
0&3
\\end{pmatrix}
$$

Entonces:

$$
A-\\lambda I=
\\begin{pmatrix}
2-\\lambda&0\\\\
0&3-\\lambda
\\end{pmatrix}
$$

Por tanto:

$$
\\det(A-\\lambda I)
=
(2-\\lambda)(3-\\lambda)
$$

Lo igualamos a cero:

$$
(2-\\lambda)(3-\\lambda)=0
$$

Así:

$$
\\boxed{\\lambda_1=2,\\qquad\\lambda_2=3}
$$

---

# 16. Ideas clave

| Concepto                    | Resultado                             |
| --------------------------- | ------------------------------------- |
| Solo las matrices cuadradas | Tienen determinantes                  |
| Determinante $2\\times2$     | $ad-bc$                               |
| $\\det(A)=0$                 | La matriz es singular                 |
| $\\det(A)\\neq0$              | La matriz es invertible               |
| $\\det(A^T)$                 | $\\det(A)$                             |
| $\\det(AB)$                  | $\\det(A)\\det(B)$                      |
| Filas iguales               | Determinante $=0$                     |
| Filas proporcionales        | Determinante $=0$                     |
| Intercambiar dos filas      | Cambia el signo del determinante      |
| Determinante $2\\times2$     | Factor de escala del área             |
| Determinante $3\\times3$     | Factor de escala del volumen          |
| $\\det(A-\\lambda I)=0$       | Permite encontrar los valores propios |

### Relación más importante

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ existe}
\\iff
A\\text{ tiene rango máximo}
\\iff
\\text{sus columnas son linealmente independientes}
}
$$
`,i=`# Determinants

Un **determinant** és un valor escalar associat a una **matriu quadrada**. Proporciona informació important sobre la matriu, especialment sobre si és invertible i si les seves files o columnes són linealment independents.

## 1. Definició

Per a una matriu quadrada:

$$
A =
\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}
$$

el seu determinant s'escriu com:

$$
\\det(A)
$$

o:

$$
|A|
$$

Per a una matriu $2\\times2$:

$$
\\boxed{\\det(A)=ad-bc}
$$

### Exemple

$$
A=
\\begin{pmatrix}
3 & 2\\\\
1 & 4
\\end{pmatrix}
$$

Aleshores:

$$
\\det(A)=(3)(4)-(2)(1)
$$

$$
\\det(A)=12-2=10
$$

Per tant:

$$
\\boxed{\\det(A)=10}
$$

---

## 2. Els determinants només existeixen per a matrius quadrades

Podem calcular determinants de matrius:

- $1\\times1$
- $2\\times2$
- $3\\times3$
- $4\\times4$
- etc.

Però no directament d'una matriu rectangular com:

$$
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

perquè és una matriu $2\\times3$ i no és quadrada.

---

## 3. Determinant d'una matriu $1\\times1$

Per a:

$$
A=
\\begin{pmatrix}
5
\\end{pmatrix}
$$

simplement tenim:

$$
\\boxed{\\det(A)=5}
$$

---

## 4. Determinant d'una matriu $2\\times2$

La fórmula general és:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

$$
\\boxed{\\det(A)=ad-bc}
$$

Una manera útil de recordar-ho és:

$$
\\boxed{\\text{producte de la diagonal principal}-
\\text{producte de l'altra diagonal}}
$$

Per exemple:

$$
\\begin{pmatrix}
2&5\\\\
3&7
\\end{pmatrix}
$$

$$
\\det(A)=(2)(7)-(5)(3)
$$

$$
=14-15
$$

$$
\\boxed{\\det(A)=-1}
$$

---

# 5. Determinant d'una matriu $3\\times3$

Considerem:

$$
A=
\\begin{pmatrix}
a&b&c\\\\
d&e&f\\\\
g&h&i
\\end{pmatrix}
$$

El determinant es pot calcular mitjançant el **desenvolupament per cofactors**:

$$
\\boxed{
\\det(A)
=
a
\\begin{vmatrix}
e&f\\\\
h&i
\\end{vmatrix}
-
b
\\begin{vmatrix}
d&f\\\\
g&i
\\end{vmatrix}
+
c
\\begin{vmatrix}
d&e\\\\
g&h
\\end{vmatrix}
}
$$

Com que cada determinant més petit és $2\\times2$:

$$
\\det(A)
=
a(ei-fh)
-b(di-fg)
+c(dh-eg)
$$

Per tant:

$$
\\boxed{
\\det(A)=a(ei-fh)-b(di-fg)+c(dh-eg)
}
$$

### Exemple

$$
A=
\\begin{pmatrix}
1&2&3\\\\
0&4&5\\\\
1&0&6
\\end{pmatrix}
$$

Desenvolupant per la primera fila:

$$
\\det(A)
=
1
\\begin{vmatrix}
4&5\\\\
0&6
\\end{vmatrix}
-
2
\\begin{vmatrix}
0&5\\\\
1&6
\\end{vmatrix}
+
3
\\begin{vmatrix}
0&4\\\\
1&0
\\end{vmatrix}
$$

Calculem cada determinant $2\\times2$:

$$
\\begin{vmatrix}
4&5\\\\
0&6
\\end{vmatrix}
=24
$$

$$
\\begin{vmatrix}
0&5\\\\
1&6
\\end{vmatrix}
=-5
$$

$$
\\begin{vmatrix}
0&4\\\\
1&0
\\end{vmatrix}
=-4
$$

Per tant:

$$
\\det(A)=1(24)-2(-5)+3(-4)
$$

$$
=24+10-12
$$

$$
\\boxed{\\det(A)=22}
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
\\begin{pmatrix}
1&2&3\\\\
4&5&6\\\\
7&8&9
\\end{pmatrix}
$$

El menor $M_{11}$ s'obté eliminant la fila 1 i la columna 1:

$$
M_{11}=
\\begin{vmatrix}
5&6\\\\
8&9
\\end{vmatrix}
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
\\boxed{C_{ij}=(-1)^{i+j}M_{ij}}
$$

Els signes segueixen aquest patró:

$$
\\begin{pmatrix}
+&-&+\\\\
-&+&-\\\\
+&-&+
\\end{pmatrix}
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
\\boxed{
\\det(A)=
\\sum_j a_{ij}C_{ij}
}
$$

Per exemple, desenvolupant per la primera fila:

$$
\\det(A)=
a_{11}C_{11}
+a_{12}C_{12}
+a_{13}C_{13}
$$

Per a una matriu $3\\times3$, apareix el patró:

$$
+\\quad-\\quad+
$$

### Regla pràctica

Quan calculem un determinant, és convenient escollir una fila o columna que contingui **molts zeros**, ja que redueix els càlculs.

---

# 8. Propietats importants

Els determinants tenen diverses propietats importants.

### Matriu identitat

$$
I=
\\begin{pmatrix}
1&0\\\\
0&1
\\end{pmatrix}
$$

té:

$$
\\boxed{\\det(I)=1}
$$

---

### Transposada

$$
\\boxed{\\det(A^T)=\\det(A)}
$$

Transposar una matriu no modifica el seu determinant.

---

### Producte

Per a dues matrius quadrades:

$$
\\boxed{\\det(AB)=\\det(A)\\det(B)}
$$

Aquesta és una de les propietats més importants dels determinants.

---

### Multiplicació per un escalar

Per a una matriu $n\\times n$:

$$
\\boxed{\\det(kA)=k^n\\det(A)}
$$

Per a una matriu $2\\times2$:

$$
\\det(kA)=k^2\\det(A)
$$

Per a una matriu $3\\times3$:

$$
\\det(kA)=k^3\\det(A)
$$

---

# 9. Què passa quan intercanviem dues files?

Si intercanviem dues files, el determinant canvia de signe.

Per exemple:

$$
\\det
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
=
ad-bc
$$

Després d'intercanviar les files:

$$
\\det
\\begin{pmatrix}
c&d\\\\
a&b
\\end{pmatrix}
=
cb-da
$$

Per tant:

$$
\\boxed{\\det(\\text{nova matriu})=-\\det(A)}
$$

---

# 10. Files iguals o proporcionals

Si dues files són iguals:

$$
\\boxed{\\det(A)=0}
$$

Per exemple:

$$
A=
\\begin{pmatrix}
1&2\\\\
1&2
\\end{pmatrix}
$$

$$
\\det(A)=1(2)-2(1)=0
$$

El mateix passa si una fila és un múltiple d'una altra.

Per exemple:

$$
\\begin{pmatrix}
1&2\\\\
2&4
\\end{pmatrix}
$$

La segona fila és:

$$
2\\times\\text{fila}_1
$$

Per tant:

$$
\\boxed{\\det(A)=0}
$$

---

# 11. Interpretació geomètrica

El determinant també té un significat geomètric.

Per a una matriu $2\\times2$:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

el valor absolut:

$$
|\\det(A)|
$$

representa el **factor d'escala de l'àrea** de la transformació representada per $A$.

Per exemple:

$$
\\det(A)=3
$$

significa que les àrees es multipliquen per:

$$
3
$$

Mentre que:

$$
\\det(A)=-3
$$

significa que les àrees també s'escalen per $3$, però la transformació inverteix l'orientació.

Per a una matriu $3\\times3$, el valor absolut del determinant representa un **factor d'escala del volum**.

---

# 12. Determinant i inversa

Aquesta és una de les relacions més importants:

$$
\\boxed{
\\det(A)\\neq0
\\iff
A\\text{ és invertible}
}
$$

En altres paraules:

Si

$$
\\det(A)\\neq0
$$

llavors:

$$
A^{-1}
$$

existeix.

Si

$$
\\det(A)=0
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
A\\mathbf{x}=\\mathbf{b}
$$

Si:

$$
\\det(A)\\neq0
$$

el sistema té una **única solució**.

Si:

$$
\\det(A)=0
$$

el sistema no té una única solució. Depenent del sistema, pot tenir:

- cap solució
- infinites solucions

Això relaciona els determinants amb el **rang** d'una matriu i els sistemes d'equacions lineals.

---

# 14. Determinant i independència lineal

Per a una matriu $n\\times n$:

$$
\\boxed{\\det(A)\\neq0}
$$

significa que les files i les columnes són **linealment independents**.

Al contrari:

$$
\\boxed{\\det(A)=0}
$$

significa que les files o les columnes són **linealment dependents**.

Per tant, per a una matriu quadrada:

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ existeix}
\\iff
\\operatorname{rang}(A)=n
\\iff
\\text{files i columnes linealment independents}
}
$$

---

# 15. Determinant i valors propis

Els determinants també apareixen en el càlcul dels **valors propis**.

Per a una matriu $A$, els valors propis compleixen:

$$
\\boxed{\\det(A-\\lambda I)=0}
$$

Això s'anomena **equació característica**.

Per exemple:

$$
A=
\\begin{pmatrix}
2&0\\\\
0&3
\\end{pmatrix}
$$

Aleshores:

$$
A-\\lambda I=
\\begin{pmatrix}
2-\\lambda&0\\\\
0&3-\\lambda
\\end{pmatrix}
$$

Per tant:

$$
\\det(A-\\lambda I)
=
(2-\\lambda)(3-\\lambda)
$$

Ho igualem a zero:

$$
(2-\\lambda)(3-\\lambda)=0
$$

Així:

$$
\\boxed{\\lambda_1=2,\\qquad\\lambda_2=3}
$$

---

# 16. Idees clau

| Concepte                    | Resultat                        |
| --------------------------- | ------------------------------- |
| Només les matrius quadrades | Tenen determinants              |
| Determinant $2\\times2$      | $ad-bc$                         |
| $\\det(A)=0$                 | La matriu és singular           |
| $\\det(A)\\neq0$              | La matriu és invertible         |
| $\\det(A^T)$                 | $\\det(A)$                       |
| $\\det(AB)$                  | $\\det(A)\\det(B)$                |
| Files iguals                | Determinant $=0$                |
| Files proporcionals         | Determinant $=0$                |
| Intercanviar dues files     | Canvia el signe del determinant |
| Determinant $2\\times2$      | Factor d'escala de l'àrea       |
| Determinant $3\\times3$      | Factor d'escala del volum       |
| $\\det(A-\\lambda I)=0$       | Permet trobar els valors propis |

### Relació més important

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ existeix}
\\iff
A\\text{ té rang màxim}
\\iff
\\text{les seves columnes són linealment independents}
}
$$
`,a=`# Determinants

A **determinant** is a scalar value associated with a **square matrix**. It provides important information about the matrix, especially whether it is invertible and whether its rows or columns are linearly independent.

## 1. Definition

For a square matrix

$$
A =
\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}
$$

its determinant is written as:

$$
\\det(A)
$$

or

$$
|A|
$$

For a $2\\times2$ matrix:

$$
\\boxed{\\det(A)=ad-bc}
$$

### Example

$$
A=
\\begin{pmatrix}
3 & 2\\\\
1 & 4
\\end{pmatrix}
$$

Then:

$$
\\det(A)=(3)(4)-(2)(1)
$$

$$
\\det(A)=12-2=10
$$

Therefore:

$$
\\boxed{\\det(A)=10}
$$

---

## 2. Determinants only exist for square matrices

A determinant can be calculated for:

- $1\\times1$
- $2\\times2$
- $3\\times3$
- $4\\times4$
- etc.

But not directly for a rectangular matrix such as:

$$
\\begin{pmatrix}
1&2&3\\\\
4&5&6
\\end{pmatrix}
$$

because it is $2\\times3$, not square.

---

## 3. Determinant of a $1\\times1$ matrix

For:

$$
A=
\\begin{pmatrix}
5
\\end{pmatrix}
$$

we simply have:

$$
\\boxed{\\det(A)=5}
$$

---

## 4. Determinant of a $2\\times2$ matrix

The general formula is:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

$$
\\boxed{\\det(A)=ad-bc}
$$

A useful way to remember it is:

$$
\\boxed{\\text{main diagonal product}-
\\text{other diagonal product}}
$$

For example:

$$
\\begin{pmatrix}
2&5\\\\
3&7
\\end{pmatrix}
$$

$$
\\det(A)=(2)(7)-(5)(3)
$$

$$
=14-15
$$

$$
\\boxed{\\det(A)=-1}
$$

---

# 5. Determinant of a $3\\times3$ matrix

Consider:

$$
A=
\\begin{pmatrix}
a&b&c\\\\
d&e&f\\\\
g&h&i
\\end{pmatrix}
$$

Its determinant can be calculated by **cofactor expansion**:

$$
\\boxed{
\\det(A)
=
a
\\begin{vmatrix}
e&f\\\\
h&i
\\end{vmatrix}
-
b
\\begin{vmatrix}
d&f\\\\
g&i
\\end{vmatrix}
+
c
\\begin{vmatrix}
d&e\\\\
g&h
\\end{vmatrix}
}
$$

Because each smaller determinant is $2\\times2$:

$$
\\det(A)
=
a(ei-fh)
-b(di-fg)
+c(dh-eg)
$$

Therefore:

$$
\\boxed{
\\det(A)=a(ei-fh)-b(di-fg)+c(dh-eg)
}
$$

### Example

$$
A=
\\begin{pmatrix}
1&2&3\\\\
0&4&5\\\\
1&0&6
\\end{pmatrix}
$$

Expand along the first row:

$$
\\det(A)
=
1
\\begin{vmatrix}
4&5\\\\
0&6
\\end{vmatrix}
-
2
\\begin{vmatrix}
0&5\\\\
1&6
\\end{vmatrix}
+
3
\\begin{vmatrix}
0&4\\\\
1&0
\\end{vmatrix}
$$

Calculate each $2\\times2$ determinant:

$$
\\begin{vmatrix}
4&5\\\\
0&6
\\end{vmatrix}
=24
$$

$$
\\begin{vmatrix}
0&5\\\\
1&6
\\end{vmatrix}
=-5
$$

$$
\\begin{vmatrix}
0&4\\\\
1&0
\\end{vmatrix}
=-4
$$

Therefore:

$$
\\det(A)=1(24)-2(-5)+3(-4)
$$

$$
=24+10-12
$$

$$
\\boxed{\\det(A)=22}
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
\\begin{pmatrix}
1&2&3\\\\
4&5&6\\\\
7&8&9
\\end{pmatrix}
$$

The minor $M_{11}$ is obtained by removing row 1 and column 1:

$$
M_{11}=
\\begin{vmatrix}
5&6\\\\
8&9
\\end{vmatrix}
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
\\boxed{C_{ij}=(-1)^{i+j}M_{ij}}
$$

The signs follow this pattern:

$$
\\begin{pmatrix}
+&-&+\\\\
-&+&-\\\\
+&-&+
\\end{pmatrix}
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
\\boxed{
\\det(A)=
\\sum_j a_{ij}C_{ij}
}
$$

For example, expanding the first row:

$$
\\det(A)=
a_{11}C_{11}
+a_{12}C_{12}
+a_{13}C_{13}
$$

For a $3\\times3$ matrix, this produces the familiar:

$$
+\\quad-\\quad+
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
\\begin{pmatrix}
1&0\\\\
0&1
\\end{pmatrix}
$$

has:

$$
\\boxed{\\det(I)=1}
$$

---

### Transpose

$$
\\boxed{\\det(A^T)=\\det(A)}
$$

Transposing a matrix does not change its determinant.

---

### Product

For two square matrices:

$$
\\boxed{\\det(AB)=\\det(A)\\det(B)}
$$

This is one of the most important determinant properties.

---

### Scalar multiplication

For an $n\\times n$ matrix:

$$
\\boxed{\\det(kA)=k^n\\det(A)}
$$

For a $2\\times2$ matrix:

$$
\\det(kA)=k^2\\det(A)
$$

For a $3\\times3$ matrix:

$$
\\det(kA)=k^3\\det(A)
$$

---

# 9. What happens when rows are exchanged?

If two rows are exchanged, the determinant changes sign.

For example:

$$
\\det
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
=
ad-bc
$$

After exchanging the rows:

$$
\\det
\\begin{pmatrix}
c&d\\\\
a&b
\\end{pmatrix}
=
cb-da
$$

Therefore:

$$
\\boxed{\\det(\\text{new matrix})=-\\det(A)}
$$

---

# 10. Equal or proportional rows

If two rows are equal, then:

$$
\\boxed{\\det(A)=0}
$$

For example:

$$
A=
\\begin{pmatrix}
1&2\\\\
1&2
\\end{pmatrix}
$$

$$
\\det(A)=1(2)-2(1)=0
$$

The same applies if one row is a multiple of another.

Example:

$$
\\begin{pmatrix}
1&2\\\\
2&4
\\end{pmatrix}
$$

The second row is:

$$
2\\times\\text{row}_1
$$

Therefore:

$$
\\boxed{\\det(A)=0}
$$

---

# 11. Geometric interpretation

The determinant also has a geometric meaning.

For a $2\\times2$ matrix:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

the absolute value

$$
|\\det(A)|
$$

represents the **area scaling factor** of the transformation represented by $A$.

For example:

$$
\\det(A)=3
$$

means areas are multiplied by a factor of:

$$
3
$$

while:

$$
\\det(A)=-3
$$

means areas are also scaled by $3$, but the transformation additionally reverses orientation.

For a $3\\times3$ matrix, the absolute value of the determinant represents a **volume scaling factor**.

---

# 12. Determinant and inverse

This is one of the most important relationships:

$$
\\boxed{
\\det(A)\\neq0
\\iff
A\\text{ is invertible}
}
$$

In other words:

If

$$
\\det(A)\\neq0
$$

then:

$$
A^{-1}
$$

exists.

If

$$
\\det(A)=0
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
A\\mathbf{x}=\\mathbf{b}
$$

If:

$$
\\det(A)\\neq0
$$

then the system has a **unique solution**.

If:

$$
\\det(A)=0
$$

the system does not have a unique solution. Depending on the system, it can have:

- no solution
- infinitely many solutions

This connects determinants with the **rank** of a matrix and systems of linear equations.

---

# 14. Determinant and linear independence

For an $n\\times n$ matrix:

$$
\\boxed{\\det(A)\\neq0}
$$

means that the rows and columns are **linearly independent**.

Conversely:

$$
\\boxed{\\det(A)=0}
$$

means that the rows or columns are **linearly dependent**.

Therefore, for a square matrix, these ideas are equivalent:

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ exists}
\\iff
\\operatorname{rank}(A)=n
\\iff
\\text{rows and columns are linearly independent}
}
$$

---

# 15. Determinant and eigenvalues

Determinants also appear in the calculation of **eigenvalues**.

For a matrix $A$, eigenvalues satisfy:

$$
\\boxed{\\det(A-\\lambda I)=0}
$$

This is called the **characteristic equation**.

For example:

$$
A=
\\begin{pmatrix}
2&0\\\\
0&3
\\end{pmatrix}
$$

Then:

$$
A-\\lambda I=
\\begin{pmatrix}
2-\\lambda&0\\\\
0&3-\\lambda
\\end{pmatrix}
$$

Therefore:

$$
\\det(A-\\lambda I)
=
(2-\\lambda)(3-\\lambda)
$$

Set it equal to zero:

$$
(2-\\lambda)(3-\\lambda)=0
$$

Thus:

$$
\\boxed{\\lambda_1=2,\\qquad\\lambda_2=3}
$$

---

# 16. Key ideas to remember

| Concept                | Result                     |
| ---------------------- | -------------------------- |
| Only square matrices   | Have determinants          |
| $2\\times2$ determinant | $ad-bc$                    |
| $\\det(A)=0$            | Matrix is singular         |
| $\\det(A)\\neq0$         | Matrix is invertible       |
| $\\det(A^T)$            | $\\det(A)$                  |
| $\\det(AB)$             | $\\det(A)\\det(B)$           |
| Equal rows             | Determinant $=0$           |
| Proportional rows      | Determinant $=0$           |
| Swap two rows          | Changes determinant's sign |
| $2\\times2$ determinant | Area scaling               |
| $3\\times3$ determinant | Volume scaling             |
| $\\det(A-\\lambda I)=0$  | Finds eigenvalues          |

### The most important relationship

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ exists}
\\iff
A\\text{ has full rank}
\\iff
\\text{its columns are linearly independent}
}
$$
`;function o(){let{locale:o}=t();return e(n,{id:`determinants`,content:{es:r,ca:i,en:a}[o]})}export{o as default};