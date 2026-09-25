# Determinantes

Un **determinante** es un valor escalar asociado a una **matriz cuadrada**. Proporciona información importante sobre la matriz, especialmente sobre si es invertible y si sus filas o columnas son linealmente independientes.

## 1. Definición

Para una matriz cuadrada:

$$
A =
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

su determinante se escribe como:

$$
\det(A)
$$

o:

$$
|A|
$$

Para una matriz $2\times2$:

$$
\boxed{\det(A)=ad-bc}
$$

### Ejemplo

$$
A=
\begin{pmatrix}
3 & 2\\
1 & 4
\end{pmatrix}
$$

Entonces:

$$
\det(A)=(3)(4)-(2)(1)
$$

$$
\det(A)=12-2=10
$$

Por tanto:

$$
\boxed{\det(A)=10}
$$

---

## 2. Los determinantes solo existen para matrices cuadradas

Podemos calcular determinantes de matrices:

- $1\times1$
- $2\times2$
- $3\times3$
- $4\times4$
- etc.

Pero no directamente de una matriz rectangular como:

$$
\begin{pmatrix}
1&2&3\\
4&5&6
\end{pmatrix}
$$

porque es una matriz $2\times3$ y no es cuadrada.

---

## 3. Determinante de una matriz $1\times1$

Para:

$$
A=
\begin{pmatrix}
5
\end{pmatrix}
$$

simplemente tenemos:

$$
\boxed{\det(A)=5}
$$

---

## 4. Determinante de una matriz $2\times2$

La fórmula general es:

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

Una forma útil de recordarlo es:

$$
\boxed{\text{producto de la diagonal principal}-
\text{producto de la otra diagonal}}
$$

Por ejemplo:

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

# 5. Determinante de una matriz $3\times3$

Consideremos:

$$
A=
\begin{pmatrix}
a&b&c\\
d&e&f\\
g&h&i
\end{pmatrix}
$$

El determinante se puede calcular mediante el **desarrollo por cofactores**:

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

Como cada determinante más pequeño es $2\times2$:

$$
\det(A)
=
a(ei-fh)
-b(di-fg)
+c(dh-eg)
$$

Por tanto:

$$
\boxed{
\det(A)=a(ei-fh)-b(di-fg)+c(dh-eg)
}
$$

### Ejemplo

$$
A=
\begin{pmatrix}
1&2&3\\
0&4&5\\
1&0&6
\end{pmatrix}
$$

Desarrollando por la primera fila:

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

Calculamos cada determinante $2\times2$:

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

Por tanto:

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
\begin{pmatrix}
1&2&3\\
4&5&6\\
7&8&9
\end{pmatrix}
$$

El menor $M_{11}$ se obtiene eliminando la fila 1 y la columna 1:

$$
M_{11}=
\begin{vmatrix}
5&6\\
8&9
\end{vmatrix}
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
\boxed{C_{ij}=(-1)^{i+j}M_{ij}}
$$

Los signos siguen este patrón:

$$
\begin{pmatrix}
+&-&+\\
-&+&-\\
+&-&+
\end{pmatrix}
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
\boxed{
\det(A)=
\sum_j a_{ij}C_{ij}
}
$$

Por ejemplo, desarrollando por la primera fila:

$$
\det(A)=
a_{11}C_{11}
+a_{12}C_{12}
+a_{13}C_{13}
$$

Para una matriz $3\times3$, aparece el patrón:

$$
+\quad-\quad+
$$

### Regla práctica

Al calcular un determinante, conviene elegir una fila o columna que contenga **muchos ceros**, ya que reduce los cálculos.

---

# 8. Propiedades importantes

Los determinantes tienen varias propiedades importantes.

### Matriz identidad

$$
I=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
$$

tiene:

$$
\boxed{\det(I)=1}
$$

---

### Traspuesta

$$
\boxed{\det(A^T)=\det(A)}
$$

Trasponer una matriz no modifica su determinante.

---

### Producto

Para dos matrices cuadradas:

$$
\boxed{\det(AB)=\det(A)\det(B)}
$$

Esta es una de las propiedades más importantes de los determinantes.

---

### Multiplicación por un escalar

Para una matriz $n\times n$:

$$
\boxed{\det(kA)=k^n\det(A)}
$$

Para una matriz $2\times2$:

$$
\det(kA)=k^2\det(A)
$$

Para una matriz $3\times3$:

$$
\det(kA)=k^3\det(A)
$$

---

# 9. ¿Qué ocurre cuando intercambiamos dos filas?

Si intercambiamos dos filas, el determinante cambia de signo.

Por ejemplo:

$$
\det
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
=
ad-bc
$$

Después de intercambiar las filas:

$$
\det
\begin{pmatrix}
c&d\\
a&b
\end{pmatrix}
=
cb-da
$$

Por tanto:

$$
\boxed{\det(\text{nueva matriz})=-\det(A)}
$$

---

# 10. Filas iguales o proporcionales

Si dos filas son iguales:

$$
\boxed{\det(A)=0}
$$

Por ejemplo:

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

Lo mismo ocurre si una fila es múltiplo de otra.

Por ejemplo:

$$
\begin{pmatrix}
1&2\\
2&4
\end{pmatrix}
$$

La segunda fila es:

$$
2\times\text{fila}_1
$$

Por tanto:

$$
\boxed{\det(A)=0}
$$

---

# 11. Interpretación geométrica

El determinante también tiene un significado geométrico.

Para una matriz $2\times2$:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

el valor absoluto:

$$
|\det(A)|
$$

representa el **factor de escala del área** de la transformación representada por $A$.

Por ejemplo:

$$
\det(A)=3
$$

significa que las áreas se multiplican por un factor de:

$$
3
$$

Mientras que:

$$
\det(A)=-3
$$

significa que las áreas también se escalan por $3$, pero la transformación invierte la orientación.

Para una matriz $3\times3$, el valor absoluto del determinante representa un **factor de escala del volumen**.

---

# 12. Determinante e inversa

Esta es una de las relaciones más importantes:

$$
\boxed{
\det(A)\neq0
\iff
A\text{ es invertible}
}
$$

En otras palabras:

Si

$$
\det(A)\neq0
$$

entonces:

$$
A^{-1}
$$

existe.

Si

$$
\det(A)=0
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
A\mathbf{x}=\mathbf{b}
$$

Si:

$$
\det(A)\neq0
$$

el sistema tiene una **única solución**.

Si:

$$
\det(A)=0
$$

el sistema no tiene una única solución. Dependiendo del sistema, puede tener:

- ninguna solución
- infinitas soluciones

Esto relaciona los determinantes con el **rango** de una matriz y los sistemas de ecuaciones lineales.

---

# 14. Determinante e independencia lineal

Para una matriz $n\times n$:

$$
\boxed{\det(A)\neq0}
$$

significa que las filas y columnas son **linealmente independientes**.

Por el contrario:

$$
\boxed{\det(A)=0}
$$

significa que las filas o columnas son **linealmente dependientes**.

Por tanto, para una matriz cuadrada:

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ existe}
\iff
\operatorname{rango}(A)=n
\iff
\text{filas y columnas linealmente independientes}
}
$$

---

# 15. Determinante y valores propios

Los determinantes también aparecen en el cálculo de los **valores propios**.

Para una matriz $A$, los valores propios cumplen:

$$
\boxed{\det(A-\lambda I)=0}
$$

Esto se denomina **ecuación característica**.

Por ejemplo:

$$
A=
\begin{pmatrix}
2&0\\
0&3
\end{pmatrix}
$$

Entonces:

$$
A-\lambda I=
\begin{pmatrix}
2-\lambda&0\\
0&3-\lambda
\end{pmatrix}
$$

Por tanto:

$$
\det(A-\lambda I)
=
(2-\lambda)(3-\lambda)
$$

Lo igualamos a cero:

$$
(2-\lambda)(3-\lambda)=0
$$

Así:

$$
\boxed{\lambda_1=2,\qquad\lambda_2=3}
$$

---

# 16. Ideas clave

| Concepto                    | Resultado                             |
| --------------------------- | ------------------------------------- |
| Solo las matrices cuadradas | Tienen determinantes                  |
| Determinante $2\times2$     | $ad-bc$                               |
| $\det(A)=0$                 | La matriz es singular                 |
| $\det(A)\neq0$              | La matriz es invertible               |
| $\det(A^T)$                 | $\det(A)$                             |
| $\det(AB)$                  | $\det(A)\det(B)$                      |
| Filas iguales               | Determinante $=0$                     |
| Filas proporcionales        | Determinante $=0$                     |
| Intercambiar dos filas      | Cambia el signo del determinante      |
| Determinante $2\times2$     | Factor de escala del área             |
| Determinante $3\times3$     | Factor de escala del volumen          |
| $\det(A-\lambda I)=0$       | Permite encontrar los valores propios |

### Relación más importante

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ existe}
\iff
A\text{ tiene rango máximo}
\iff
\text{sus columnas son linealmente independientes}
}
$$
