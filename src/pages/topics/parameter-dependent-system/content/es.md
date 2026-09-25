# Sistema de ecuaciones dependiente de un parámetro

Un **sistema de ecuaciones dependiente de un parámetro** es un sistema en el que uno o más coeficientes contienen una variable adicional llamada **parámetro**.

El valor del parámetro puede determinar si el sistema tiene una solución, ninguna solución o infinitas soluciones.

Por ejemplo:

$$
\begin{cases}
x+y=3\\
x+ay=2
\end{cases}
$$

El parámetro es $a$.

## Resolver según el parámetro

Consideremos:

$$
\begin{cases}
x+y=3\\
x+ay=2
\end{cases}
$$

Restamos la primera ecuación de la segunda:

$$
(a-1)y=-1
$$

Si:

$$
a\neq1
$$

podemos despejar $y$:

$$
y=-\frac{1}{a-1}
$$

y después obtener $x$:

$$
x=3-y
$$

Por tanto, para cualquier $a\neq1$ existe una única solución.

## Caso especial

Ahora consideremos:

$$
a=1
$$

El sistema se convierte en:

$$
\begin{cases}
x+y=3\\
x+y=2
\end{cases}
$$

Las dos ecuaciones tienen el mismo lado izquierdo pero diferentes términos independientes.

Por tanto, no pueden cumplirse simultáneamente:

$$
\boxed{\text{Sin solución}}
$$

Así, el sistema tiene:

$$
\boxed{
\begin{cases}
\text{Una solución}, & a\neq1\\
\text{Sin solución}, & a=1
\end{cases}
}
$$

## Otro ejemplo

Consideremos:

$$
\begin{cases}
x+y=2\\
2x+2y=k
\end{cases}
$$

La segunda ecuación es el doble de la primera cuando:

$$
k=4
$$

Por tanto:

- Si $k=4$, las dos ecuaciones representan la misma recta y existen infinitas soluciones.
- Si $k\neq4$, las ecuaciones son incompatibles y no existe ninguna solución.

Por tanto:

$$
\boxed{
\begin{cases}
\text{Infinitas soluciones}, & k=4\\
\text{Sin solución}, & k\neq4
\end{cases}
}
$$

## Determinante y parámetro

Para un sistema de dos ecuaciones:

$$
\begin{cases}
a_1x+b_1y=c_1\\
a_2x+b_2y=c_2
\end{cases}
$$

podemos utilizar el determinante:

$$
D=
\begin{vmatrix}
a_1&b_1\\
a_2&b_2
\end{vmatrix}
=
a_1b_2-a_2b_1
$$

Si:

$$
D\neq0
$$

el sistema tiene una única solución.

Si:

$$
D=0
$$

el sistema puede tener ninguna solución o infinitas soluciones. En ese caso debemos analizar también los términos independientes.

## Estrategia

Para resolver un sistema dependiente de un parámetro:

1. Identifica el parámetro.
2. Resuelve el sistema simbólicamente.
3. Identifica los valores del parámetro que hacen que alguna operación no sea válida, como dividir entre cero.
4. Analiza esos valores por separado.
5. Determina si cada caso tiene una solución, ninguna solución o infinitas soluciones.
6. Expresa el resultado separando los diferentes valores del parámetro.
