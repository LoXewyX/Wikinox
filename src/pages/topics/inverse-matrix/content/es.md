# Matrices inversas

La **matriz inversa** de una matriz es una matriz que, al multiplicarla por la matriz original, produce la **matriz identidad**.

La matriz inversa es fundamental para resolver sistemas de ecuaciones, transformar vectores y estudiar transformaciones lineales.

---

## 1. Definición

Sea una matriz cuadrada:

$$
A
$$

Su inversa se escribe:

$$
A^{-1}
$$

y cumple:

$$
\boxed{AA^{-1}=A^{-1}A=I}
$$

donde $I$ es la **matriz identidad**.

Por ejemplo:

$$
I=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
$$

Por tanto, $A^{-1}$ es la matriz que "deshace" el efecto de $A$.

---

## 2. ¿Cuándo existe una matriz inversa?

No todas las matrices tienen inversa.

Una matriz cuadrada $A$ es invertible si y solo si:

$$
\boxed{\det(A)\neq0}
$$

Equivalentemente:

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ existe}
}
$$

Si:

$$
\det(A)=0
$$

la matriz no tiene inversa y se denomina **matriz singular**.

---

## 3. Inversa de una matriz $2\times2$

Sea:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

Su inversa es:

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

siempre que:

$$
ad-bc\neq0
$$

Es decir:

$$
\det(A)\neq0
$$

---

## 4. Ejemplo $2\times2$

Consideremos:

$$
A=
\begin{pmatrix}
2&1\\
1&1
\end{pmatrix}
$$

Primero calculamos el determinante:

$$
\det(A)=(2)(1)-(1)(1)
$$

$$
\det(A)=1
$$

Como:

$$
\det(A)\neq0
$$

la inversa existe.

Aplicamos la fórmula:

$$
A^{-1}
=
\frac{1}{1}
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
$$

Por tanto:

$$
\boxed{
A^{-1}=
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
}
$$

Podemos comprobarlo:

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

# 5. Ejemplo de una matriz sin inversa

Consideremos:

$$
A=
\begin{pmatrix}
1&2\\
2&4
\end{pmatrix}
$$

El determinante es:

$$
\det(A)=(1)(4)-(2)(2)
$$

$$
=4-4=0
$$

Por tanto:

$$
\boxed{\det(A)=0}
$$

y:

$$
\boxed{A^{-1}\text{ no existe}}
$$

La matriz es **singular**.

---

# 6. Propiedades de la matriz inversa

## Inversa de la inversa

$$
\boxed{(A^{-1})^{-1}=A}
$$

---

## Inversa de la identidad

$$
\boxed{I^{-1}=I}
$$

---

## Inversa de un producto

Si $A$ y $B$ son invertibles:

$$
\boxed{(AB)^{-1}=B^{-1}A^{-1}}
$$

El orden se invierte.

En general:

$$
(AB)^{-1}\neq A^{-1}B^{-1}
$$

---

## Inversa de la traspuesta

$$
\boxed{(A^T)^{-1}=(A^{-1})^T}
$$

---

## Determinante de la inversa

Si $A$ es invertible:

$$
\boxed{
\det(A^{-1})=\frac{1}{\det(A)}
}
$$

---

# 7. Inversa y determinante

La relación entre inversa y determinante es:

$$
\boxed{
A^{-1}\text{ existe}
\iff
\det(A)\neq0
}
$$

Esto significa que el determinante nos permite saber inmediatamente si una matriz cuadrada es invertible.

| Determinante   | Matriz inversa |
| -------------- | -------------- |
| $\det(A)\neq0$ | Existe         |
| $\det(A)=0$    | No existe      |

---

# 8. Cálculo de la inversa mediante Gauss-Jordan

Para matrices más grandes, podemos calcular la inversa utilizando la **eliminación de Gauss-Jordan**.

Comenzamos con:

$$
A
$$

y construimos la matriz aumentada:

$$
\boxed{[A\mid I]}
$$

Después aplicamos operaciones elementales de fila hasta obtener:

$$
[I\mid A^{-1}]
$$

Es decir:

$$
[A\mid I]
\longrightarrow
[I\mid A^{-1}]
$$

---

# 9. Ejemplo con Gauss-Jordan

Consideremos:

$$
A=
\begin{pmatrix}
2&1\\
1&1
\end{pmatrix}
$$

Construimos:

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

Intercambiamos las filas:

$$
\left[
\begin{array}{cc|cc}
1&1&0&1\\
2&1&1&0
\end{array}
\right]
$$

Hacemos:

$$
F_2\rightarrow F_2-2F_1
$$

Obtenemos:

$$
\left[
\begin{array}{cc|cc}
1&1&0&1\\
0&-1&1&-2
\end{array}
\right]
$$

Ahora:

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

Finalmente:

$$
F_1\rightarrow F_1-F_2
$$

Obtenemos:

$$
\left[
\begin{array}{cc|cc}
1&0&1&-1\\
0&1&-1&2
\end{array}
\right]
$$

Por tanto:

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

# 10. Inversa y sistemas de ecuaciones

Una de las aplicaciones más importantes de las matrices inversas es resolver sistemas de ecuaciones.

Consideremos:

$$
A\mathbf{x}=\mathbf{b}
$$

Si $A$ es invertible, multiplicamos ambos lados por $A^{-1}$:

$$
A^{-1}A\mathbf{x}=A^{-1}\mathbf{b}
$$

Como:

$$
A^{-1}A=I
$$

tenemos:

$$
I\mathbf{x}=A^{-1}\mathbf{b}
$$

Por tanto:

$$
\boxed{\mathbf{x}=A^{-1}\mathbf{b}}
$$

---

# 11. Ejemplo

Consideremos el sistema:

$$
\begin{cases}
2x+y=5\\
x+y=3
\end{cases}
$$

Podemos escribirlo como:

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

Es decir:

$$
A\mathbf{x}=\mathbf{b}
$$

Sabemos que:

$$
A^{-1}
=
\begin{pmatrix}
1&-1\\
-1&2
\end{pmatrix}
$$

Por tanto:

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

Por tanto:

$$
\boxed{x=2,\qquad y=1}
$$

---

# 12. Interpretación geométrica

Una matriz invertible representa una transformación que puede ser **deshecha**.

Si:

$$
\mathbf{y}=A\mathbf{x}
$$

podemos recuperar $\mathbf{x}$ mediante:

$$
\boxed{\mathbf{x}=A^{-1}\mathbf{y}}
$$

Por tanto:

- $A$ aplica una transformación.
- $A^{-1}$ deshace esa transformación.

Si:

$$
\det(A)=0
$$

la transformación reduce la dimensión del espacio y no puede deshacerse completamente.

---

# 13. Relación con el rango

Para una matriz $n\times n$:

$$
\boxed{
A\text{ es invertible}
\iff
\operatorname{rango}(A)=n
}
$$

Por tanto:

$$
\boxed{
\det(A)\neq0
\iff
\operatorname{rango}(A)=n
\iff
A^{-1}\text{ existe}
}
$$

---

# 14. Matriz adjunta

Otra forma de calcular la inversa es mediante la **matriz adjunta**:

$$
\boxed{
A^{-1}
=
\frac{1}{\det(A)}
\operatorname{adj}(A)
}
$$

siempre que:

$$
\det(A)\neq0
$$

La matriz adjunta es la traspuesta de la matriz de cofactores:

$$
\boxed{
\operatorname{adj}(A)=C^T
}
$$

donde $C$ es la matriz de cofactores.

Este método es útil teóricamente, pero para matrices grandes, Gauss-Jordan suele ser más práctico.

---

# 15. Ideas clave

| Concepto                                   | Resultado                     |
| ------------------------------------------ | ----------------------------- |
| Matriz inversa                             | $A^{-1}$                      |
| Definición                                 | $AA^{-1}=A^{-1}A=I$           |
| Condición                                  | $\det(A)\neq0$                |
| $\det(A)=0$                                | No existe la inversa          |
| $(A^{-1})^{-1}$                            | $A$                           |
| $(AB)^{-1}$                                | $B^{-1}A^{-1}$                |
| $(A^T)^{-1}$                               | $(A^{-1})^T$                  |
| $\det(A^{-1})$                             | $\frac{1}{\det(A)}$           |
| Sistema $A\mathbf{x}=\mathbf{b}$           | $\mathbf{x}=A^{-1}\mathbf{b}$ |
| Rango de una matriz invertible $n\times n$ | $n$                           |

### Relación fundamental

$$
\boxed{
\det(A)\neq0
\iff
A^{-1}\text{ existe}
\iff
\operatorname{rango}(A)=n
}
$$
