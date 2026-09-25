# Sistemas indeterminados

Un sistema de ecuaciones es **indeterminado** cuando tiene infinitas soluciones. Esto ocurre cuando las ecuaciones no proporcionan suficientes restricciones independientes para determinar un único valor para todas las incógnitas.

## 1. Definición

Consideremos un sistema lineal:

$$
A\mathbf{x}=\mathbf{b}
$$

Un sistema es indeterminado cuando tiene infinitas soluciones.

Por ejemplo:

$$
\begin{cases}
x+y=5\\
2x+2y=10
\end{cases}
$$

La segunda ecuación es simplemente el doble de la primera, por lo que ambas representan la misma restricción.

El sistema se reduce a:

$$
x+y=5
$$

Por tanto, podemos elegir libremente una de las variables.

Si

$$
y=t
$$

entonces

$$
x=5-t
$$

y todas las soluciones pueden escribirse como

$$
(x,y)=(5-t,t),
\qquad t\in\mathbb{R}
$$

## 2. Representación geométrica

En dos variables, cada ecuación lineal representa una recta.

Para el sistema

$$
\begin{cases}
x+y=5\\
2x+2y=10
\end{cases}
$$

las dos ecuaciones representan exactamente la misma recta.

Por tanto, todos los puntos de esa recta son soluciones.

:::function-graph{expression="5-x" restriction="-5<=x<=10"}
:::

Un sistema determinado tendría un único punto de intersección, mientras que un sistema incompatible no tendría ningún punto de intersección.

## 3. Dependencia entre ecuaciones

La causa fundamental de un sistema indeterminado es que las ecuaciones no son todas independientes.

Por ejemplo:

$$
\begin{cases}
x+y+z=6\\
2x+2y+2z=12
\end{cases}
$$

La segunda ecuación es el doble de la primera.

Por tanto, solo existe una restricción independiente para tres incógnitas.

Podemos tomar dos variables como parámetros:

$$
y=s,\qquad z=t
$$

Entonces:

$$
x=6-s-t
$$

y la solución general es

$$
(x,y,z)=(6-s-t,s,t)
$$

con

$$
s,t\in\mathbb{R}
$$

## 4. Rango y número de incógnitas

Para un sistema lineal

$$
A\mathbf{x}=\mathbf{b}
$$

el número de soluciones está relacionado con el rango de la matriz de coeficientes $A$ y el número de incógnitas $n$.

Si el sistema es compatible y

$$
\operatorname{rank}(A)<n
$$

entonces existen variables libres y, por tanto, infinitas soluciones.

El número de variables libres es

$$
n-\operatorname{rank}(A)
$$

Por ejemplo, si un sistema tiene $5$ incógnitas y

$$
\operatorname{rank}(A)=3
$$

entonces tiene

$$
5-3=2
$$

variables libres.

## 5. Forma escalonada

La eliminación de Gauss permite identificar fácilmente las variables libres.

Consideremos:

$$
\begin{cases}
x+y+z=4\\
2x+2y+2z=8
\end{cases}
$$

La matriz aumentada es

$$
\left[
\begin{array}{ccc|c}
1&1&1&4\\
2&2&2&8
\end{array}
\right]
$$

Aplicando

$$
R_2\leftarrow R_2-2R_1
$$

obtenemos

$$
\left[
\begin{array}{ccc|c}
1&1&1&4\\
0&0&0&0
\end{array}
\right]
$$

Solo queda una ecuación independiente:

$$
x+y+z=4
$$

Las variables $y$ y $z$ son libres.

Tomando

$$
y=s,\qquad z=t
$$

obtenemos

$$
x=4-s-t
$$

## 6. Diferencia entre sistema determinado, indeterminado e incompatible

Para un sistema lineal pueden darse tres situaciones principales:

| Tipo          | Número de soluciones | Interpretación                     |
| ------------- | -------------------: | ---------------------------------- |
| Determinado   |                    1 | Existe una única solución          |
| Indeterminado |            Infinitas | Existen variables libres           |
| Incompatible  |                    0 | Las ecuaciones son contradictorias |

En términos del rango, para un sistema compatible:

- si $\operatorname{rank}(A)=n$, existe una única solución;
- si $\operatorname{rank}(A)<n$, existen infinitas soluciones.

Si

$$
\operatorname{rank}(A)\neq\operatorname{rank}(A^\ast)
$$

donde $A^\ast$ es la matriz aumentada, el sistema es incompatible.

## 7. Interpretación mediante variables libres

Las variables libres permiten expresar todas las soluciones mediante parámetros.

Por ejemplo:

$$
\begin{cases}
x+2y-z=3\\
x+2y-z=3
\end{cases}
$$

solo contiene una ecuación independiente.

Podemos elegir

$$
y=s,\qquad z=t
$$

y obtener

$$
x=3-2s+t
$$

Por tanto,

$$
(x,y,z)=(3-2s+t,s,t)
$$

con $s,t\in\mathbb{R}$.

La solución no es un único punto, sino un conjunto de puntos.

## 8. Interpretación geométrica en tres dimensiones

Con tres incógnitas, una ecuación lineal representa normalmente un plano.

Si dos ecuaciones representan el mismo plano, su intersección contiene infinitos puntos.

Si tenemos:

$$
\begin{cases}
x+y+z=3\\
2x+2y+2z=6
\end{cases}
$$

ambas ecuaciones representan el mismo plano.

Por tanto, existen infinitas soluciones.

Si hay tres incógnitas y solo una ecuación independiente, normalmente quedan dos variables libres.

## 9. Sistema homogéneo

Un caso importante es el sistema homogéneo:

$$
A\mathbf{x}=\mathbf{0}
$$

Siempre tiene al menos la solución trivial:

$$
\mathbf{x}=\mathbf{0}
$$

Si

$$
\operatorname{rank}(A)<n
$$

también existen infinitas soluciones no triviales.

Por ejemplo:

$$
\begin{cases}
x+y+z=0\\
2x+2y+2z=0
\end{cases}
$$

podemos tomar

$$
y=s,\qquad z=t
$$

y obtener

$$
x=-s-t
$$

Por tanto:

$$
\mathbf{x}
=
s
\begin{pmatrix}
-1\\
1\\
0
\end{pmatrix}
+
t
\begin{pmatrix}
-1\\
0\\
1
\end{pmatrix}
$$

Esto muestra que las soluciones forman un subespacio vectorial.

## 10. Cómo identificar un sistema indeterminado

Una estrategia práctica es:

1. Escribir la matriz aumentada.
2. Aplicar eliminación de Gauss.
3. Obtener la forma escalonada.
4. Identificar las variables pivote.
5. Identificar las variables libres.
6. Comprobar que no aparece una contradicción.
7. Expresar las variables pivote en función de las variables libres.

Una fila de la forma

$$
[0\quad0\quad\cdots\quad0\mid c],
\qquad c\neq0
$$

indica que el sistema es incompatible.

Si no aparece ninguna contradicción y existen variables libres, el sistema es indeterminado.

## 11. Ejemplo completo

Consideremos:

$$
\begin{cases}
x+y+z=6\\
2x+2y+2z=12\\
x-y+z=2
\end{cases}
$$

La segunda ecuación es dependiente de la primera.

Restando la primera ecuación de la tercera:

$$
(x-y+z)-(x+y+z)=2-6
$$

obtenemos:

$$
-2y=-4
$$

por tanto,

$$
y=2
$$

Sustituyendo en la primera ecuación:

$$
x+2+z=6
$$

y entonces:

$$
x+z=4
$$

Podemos tomar

$$
z=t
$$

y obtener

$$
x=4-t
$$

La solución general es:

$$
(x,y,z)=(4-t,2,t),
\qquad t\in\mathbb{R}
$$

Existe una variable libre, $z$, por lo que existen infinitas soluciones.

## 12. Sistemas sobredeterminados y subdeterminados

Es importante distinguir entre el número de ecuaciones y el número de incógnitas.

Un sistema con menos ecuaciones que incógnitas se denomina **subdeterminado**. Puede tener infinitas soluciones, aunque no necesariamente: también puede ser incompatible.

Un sistema con más ecuaciones que incógnitas se denomina **sobredeterminado**. Puede tener una solución, ninguna solución o, en casos especiales, infinitas soluciones.

Por tanto, tener menos ecuaciones que incógnitas no es por sí solo suficiente para concluir que un sistema es indeterminado.

## Resumen

Un sistema lineal es indeterminado cuando es compatible y tiene variables libres.

La condición fundamental es:

$$
\operatorname{rank}(A)<n
$$

donde $n$ es el número de incógnitas.

Las ideas principales son:

- algunas ecuaciones pueden ser dependientes;
- las variables libres pueden elegirse como parámetros;
- las variables pivote dependen de las variables libres;
- el número de variables libres es $n-\operatorname{rank}(A)$;
- un sistema indeterminado tiene infinitas soluciones;
- la eliminación de Gauss permite identificarlo sistemáticamente.

La forma paramétrica permite describir **todas** las soluciones del sistema, no solo encontrar una solución concreta.
