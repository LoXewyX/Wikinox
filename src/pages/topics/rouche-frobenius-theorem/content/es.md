# Teorema de Rouché-Frobenius

El **teorema de Rouché-Frobenius** permite determinar si un sistema de ecuaciones lineales tiene:

- ninguna solución,
- una única solución, o
- infinitas soluciones.

Se basa en comparar el **rango de la matriz de coeficientes** con el **rango de la matriz ampliada**.

---

## 1. Sistemas de ecuaciones lineales

Consideremos un sistema de $m$ ecuaciones lineales con $n$ incógnitas:

$$
\begin{cases}
a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=b_1\\
a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=b_2\\
\vdots\\
a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n=b_m
\end{cases}
$$

Puede escribirse en forma matricial como:

$$
\boxed{A\mathbf{x}=\mathbf{b}}
$$

donde:

- $A$ es la **matriz de coeficientes**,
- $\mathbf{x}$ es el vector de incógnitas,
- $\mathbf{b}$ es el vector de términos independientes.

Por ejemplo:

$$
\begin{cases}
x+y=3\\
2x-y=0
\end{cases}
$$

puede escribirse como:

$$
\begin{pmatrix}
1&1\\
2&-1
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
3\\
0
\end{pmatrix}
$$

---

## 2. Matriz de coeficientes y matriz ampliada

La **matriz de coeficientes** es:

$$
A=
\begin{pmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{m1}&a_{m2}&\cdots&a_{mn}
\end{pmatrix}
$$

La **matriz ampliada** se obtiene añadiendo los términos independientes:

$$
[A\mid\mathbf{b}]
$$

Por ejemplo:

$$
\begin{cases}
x+y=3\\
2x-y=0
\end{cases}
$$

tiene:

$$
A=
\begin{pmatrix}
1&1\\
2&-1
\end{pmatrix}
$$

y:

$$
[A\mid\mathbf{b}]
=
\left[
\begin{array}{cc|c}
1&1&3\\
2&-1&0
\end{array}
\right]
$$

El teorema compara:

$$
\boxed{\operatorname{rank}(A)}
$$

con:

$$
\boxed{\operatorname{rank}([A\mid\mathbf{b}])}
$$

---

## 3. Enunciado del teorema de Rouché-Frobenius

Para un sistema lineal:

$$
A\mathbf{x}=\mathbf{b}
$$

con $n$ incógnitas:

$$
\boxed{
\text{El sistema es compatible}
\iff
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid\mathbf{b}])
}
$$

Si los rangos son iguales, el sistema tiene al menos una solución.

El número de soluciones depende de cuál sea ese rango común.

---

## 4. Clasificación de las soluciones

Sea:

$$
r=\operatorname{rank}(A)
$$

y:

$$
r'=\operatorname{rank}([A\mid\mathbf{b}])
$$

Existen tres posibilidades.

### Caso 1: Ninguna solución

Si:

$$
\boxed{
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid\mathbf{b}])
}
$$

el sistema es **incompatible**.

Por tanto:

$$
\boxed{\text{No tiene solución}}
$$

---

### Caso 2: Una única solución

Si:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid\mathbf{b}])
=
n
}
$$

donde $n$ es el número de incógnitas, entonces:

$$
\boxed{\text{Existe una única solución}}
$$

---

### Caso 3: Infinitas soluciones

Si:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid\mathbf{b}])
<
n
}
$$

entonces:

$$
\boxed{\text{Existen infinitas soluciones}}
$$

Existen variables libres que pueden tomar valores arbitrarios.

---

## 5. Tabla resumen

| Condición                                                   | Número de soluciones |
| ----------------------------------------------------------- | -------------------- |
| $\operatorname{rank}(A)<\operatorname{rank}([A\mid b])$   | Ninguna              |
| $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=n$ | Una                  |
| $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])<n$ | Infinitas            |

La condición fundamental es:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
}
$$

Esta determina si el sistema es **compatible**.

---

## 6. Ejemplo: una única solución

Consideremos:

$$
\begin{cases}
x+y=3\\
2x-y=0
\end{cases}
$$

La matriz de coeficientes es:

$$
A=
\begin{pmatrix}
1&1\\
2&-1
\end{pmatrix}
$$

La matriz ampliada es:

$$
[A\mid b]
=
\left[
\begin{array}{cc|c}
1&1&3\\
2&-1&0
\end{array}
\right]
$$

Reduciendo por filas:

$$
\left[
\begin{array}{cc|c}
1&1&3\\
0&-3&-6
\end{array}
\right]
$$

Por tanto:

$$
\operatorname{rank}(A)=2
$$

y:

$$
\operatorname{rank}([A\mid b])=2
$$

Hay $n=2$ incógnitas.

Por tanto:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
=
2
}
$$

El sistema tiene una única solución.

Resolviendo:

$$
y=2
$$

y:

$$
x=1
$$

Por tanto:

$$
\boxed{(x,y)=(1,2)}
$$

---

## 7. Ejemplo: ninguna solución

Consideremos:

$$
\begin{cases}
x+y=2\\
2x+2y=5
\end{cases}
$$

La matriz ampliada es:

$$
\left[
\begin{array}{cc|c}
1&1&2\\
2&2&5
\end{array}
\right]
$$

Realizamos:

$$
F_2\rightarrow F_2-2F_1
$$

y obtenemos:

$$
\left[
\begin{array}{cc|c}
1&1&2\\
0&0&1
\end{array}
\right]
$$

Por tanto:

$$
\operatorname{rank}(A)=1
$$

mientras que:

$$
\operatorname{rank}([A\mid b])=2
$$

Así:

$$
\boxed{
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid b])
}
$$

El sistema:

$$
\boxed{\text{no tiene solución}}
$$

La segunda fila representa:

$$
0=1
$$

lo cual es imposible.

---

## 8. Ejemplo: infinitas soluciones

Consideremos:

$$
\begin{cases}
x+y+z=3\\
2x+2y+2z=6
\end{cases}
$$

La matriz ampliada es:

$$
\left[
\begin{array}{ccc|c}
1&1&1&3\\
2&2&2&6
\end{array}
\right]
$$

Realizamos:

$$
F_2\rightarrow F_2-2F_1
$$

y obtenemos:

$$
\left[
\begin{array}{ccc|c}
1&1&1&3\\
0&0&0&0
\end{array}
\right]
$$

Por tanto:

$$
\operatorname{rank}(A)=1
$$

y:

$$
\operatorname{rank}([A\mid b])=1
$$

Hay:

$$
n=3
$$

incógnitas.

Así:

$$
1=1<3
$$

y por tanto:

$$
\boxed{\text{Existen infinitas soluciones}}
$$

Podemos elegir dos variables libremente.

Por ejemplo:

$$
y=s,\qquad z=t
$$

Entonces:

$$
x+s+t=3
$$

y:

$$
x=3-s-t
$$

Por tanto:

$$
\boxed{
(x,y,z)=(3-s-t,s,t)
}
$$

donde $s,t\in\mathbb{R}$.

---

## 9. Interpretación geométrica

Para sistemas con dos incógnitas, cada ecuación lineal representa una recta.

Existen tres posibilidades.

### Una única solución

Dos rectas se cortan en un único punto:

$$
\boxed{\text{Una solución}}
$$

### Ninguna solución

Dos rectas paralelas distintas nunca se cortan:

$$
\boxed{\text{Ninguna solución}}
$$

### Infinitas soluciones

Las dos ecuaciones representan la misma recta:

$$
\boxed{\text{Infinitas soluciones}}
$$

Las condiciones sobre los rangos describen algebraicamente estas situaciones geométricas.

---

## 10. Interpretación en tres dimensiones

Para tres incógnitas, cada ecuación representa un plano.

Un sistema puede tener:

- un único punto de intersección,
- ninguna intersección común,
- una recta de intersecciones,
- o, en casos degenerados, un plano completo de soluciones.

Las condiciones de rango permiten determinar cuál de estas situaciones se produce.

---

## 11. Número de variables libres

Si el sistema es compatible:

$$
\boxed{
\text{Número de variables libres}
=
n-\operatorname{rank}(A)
}
$$

donde $n$ es el número de incógnitas.

Por ejemplo, si:

$$
n=5
$$

y:

$$
\operatorname{rank}(A)=3
$$

entonces:

$$
5-3=2
$$

variables son libres.

Por tanto, un sistema compatible tiene infinitas soluciones con dos grados de libertad.

---

## 12. Dimensión del conjunto de soluciones

Para un sistema compatible:

$$
A\mathbf{x}=\mathbf{b}
$$

la dimensión del conjunto de soluciones es:

$$
\boxed{
n-\operatorname{rank}(A)
}
$$

Por tanto:

|      Rango | Número de incógnitas | Conjunto de soluciones |
| ---------: | -------------------: | ---------------------- |
|      $n$ |                $n$ | Un punto               |
|    $n-1$ |                $n$ | 1-dimensional          |
|    $n-2$ |                $n$ | 2-dimensional          |
| $\vdots$ |                $n$ | $\vdots$             |
|      $0$ |                $n$ | $n$-dimensional      |

Esto se aplica cuando el sistema es compatible.

---

## 13. Sistemas homogéneos

Un sistema homogéneo tiene la forma:

$$
\boxed{A\mathbf{x}=\mathbf{0}}
$$

Por ejemplo:

$$
\begin{cases}
x+y=0\\
2x+2y=0
\end{cases}
$$

Un sistema homogéneo es **siempre compatible**, porque:

$$
\mathbf{x}=\mathbf{0}
$$

siempre es una solución.

Por tanto:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid0])
}
$$

El sistema homogéneo tiene:

- únicamente la solución trivial si $\operatorname{rank}(A)=n$,
- infinitas soluciones si $\operatorname{rank}(A)<n$.

---

## 14. Relación con la invertibilidad

Para una matriz cuadrada $A\in\mathbb{R}^{n\times n}$:

$$
\boxed{
A\text{ es invertible}
\iff
\operatorname{rank}(A)=n
}
$$

Equivalentemente:

$$
\boxed{
A\text{ es invertible}
\iff
\det(A)\neq0
}
$$

Por tanto:

$$
\boxed{
\det(A)\neq0
\iff
\operatorname{rank}(A)=n
\iff
A^{-1}\text{ existe}
}
$$

En este caso, todo sistema:

$$
A\mathbf{x}=\mathbf{b}
$$

tiene exactamente una solución.

---

## 15. Relación con el determinante

Para una matriz cuadrada $n\times n$:

$$
\det(A)\neq0
$$

implica:

$$
\operatorname{rank}(A)=n
$$

Por tanto, para:

$$
A\mathbf{x}=\mathbf{b}
$$

tenemos:

$$
\boxed{\text{Una única solución}}
$$

para cualquier vector $\mathbf{b}$.

Si:

$$
\det(A)=0
$$

entonces:

$$
\operatorname{rank}(A)<n
$$

y el sistema puede tener:

- ninguna solución, o
- infinitas soluciones.

El determinante por sí solo **no permite distinguir** entre estos dos casos.

Es necesario analizar la matriz ampliada.

---

## 16. Rouché-Frobenius y eliminación de Gauss

La eliminación de Gauss permite determinar ambos rangos.

Comenzamos con:

$$
[A\mid b]
$$

y aplicamos operaciones elementales por filas.

Por ejemplo:

$$
[A\mid b]
\longrightarrow
\text{forma escalonada}
$$

El número de filas no nulas en la parte de coeficientes proporciona:

$$
\operatorname{rank}(A)
$$

El número de filas no nulas de toda la matriz ampliada proporciona:

$$
\operatorname{rank}([A\mid b])
$$

Por ello, la eliminación de Gauss es uno de los métodos más prácticos para aplicar el teorema.

---

## 17. La fila contradictoria

Una situación especialmente importante es:

$$
\left[
\begin{array}{cccc|c}
0&0&\cdots&0&c
\end{array}
\right]
$$

donde:

$$
c\neq0
$$

Esto representa:

$$
\boxed{0=c}
$$

lo cual es imposible.

Por tanto:

$$
\boxed{\text{El sistema no tiene solución}}
$$

Esto corresponde a:

$$
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid b])
$$

---

## 18. Procedimiento práctico

Para determinar el número de soluciones:

### Paso 1 — Escribir la matriz de coeficientes

$$
A
$$

### Paso 2 — Escribir la matriz ampliada

$$
[A\mid b]
$$

### Paso 3 — Aplicar eliminación de Gauss

Reducir la matriz ampliada a forma escalonada.

### Paso 4 — Determinar los rangos

Contar las filas no nulas de:

$$
A
$$

y:

$$
[A\mid b]
$$

### Paso 5 — Comparar los rangos

Si:

$$
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid b])
$$

entonces:

$$
\boxed{\text{Ninguna solución}}
$$

Si:

$$
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
=
n
$$

entonces:

$$
\boxed{\text{Una única solución}}
$$

Si:

$$
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
<
n
$$

entonces:

$$
\boxed{\text{Infinitas soluciones}}
$$

---

## 19. Teorema fundamental

Para un sistema:

$$
A\mathbf{x}=\mathbf{b}
$$

con $n$ incógnitas:

$$
\boxed{
\begin{aligned}
\operatorname{rank}(A)
&<
\operatorname{rank}([A\mid b])
&&\Longrightarrow \text{ninguna solución}\\[4pt]
\operatorname{rank}(A)
&=
\operatorname{rank}([A\mid b])
=
n
&&\Longrightarrow \text{una solución}\\[4pt]
\operatorname{rank}(A)
&=
\operatorname{rank}([A\mid b])
<
n
&&\Longrightarrow \text{infinitas soluciones}
\end{aligned}
}
$$

---

## 20. Ideas clave

| Concepto                   | Resultado                                                 |
| -------------------------- | --------------------------------------------------------- |
| Matriz de coeficientes     | $A$                                                     |
| Matriz ampliada            | $[A\mid b]$                                             |
| Sistema compatible         | $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])$ |
| Ninguna solución           | $\operatorname{rank}(A)<\operatorname{rank}([A\mid b])$ |
| Una única solución         | Ambos rangos son $n$                                    |
| Infinitas soluciones       | Ambos rangos son iguales y menores que $n$              |
| Variables libres           | $n-\operatorname{rank}(A)$                              |
| Sistema homogéneo          | $A\mathbf{x}=0$                                         |
| Sistema homogéneo          | Siempre compatible                                        |
| Matriz cuadrada invertible | $\operatorname{rank}(A)=n$                              |
| Matriz cuadrada invertible | $\det(A)\neq0$                                          |

## Relación fundamental

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
\iff
A\mathbf{x}=\mathbf{b}
\text{ tiene al menos una solución}
}
$$

Y, para $n$ incógnitas:

$$
\boxed{
\begin{array}{c}
\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=n
\\[2pt]
\Downarrow
\\[2pt]
\text{Una única solución}
\end{array}
}
$$

$$
\boxed{
\begin{array}{c}
\operatorname{rank}(A)=\operatorname{rank}([A\mid b])<n
\\[2pt]
\Downarrow
\\[2pt]
\text{Infinitas soluciones}
\end{array}
}
$$

$$
\boxed{
\begin{array}{c}
\operatorname{rank}(A)<\operatorname{rank}([A\mid b])
\\[2pt]
\Downarrow
\\[2pt]
\text{Ninguna solución}
\end{array}
}
$$
