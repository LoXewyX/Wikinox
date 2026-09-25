# Sistemas de ecuaciones

Un **sistema de ecuaciones** es un conjunto de dos o más ecuaciones que comparten las mismas incógnitas.

La solución de un sistema es el conjunto de valores que satisface **todas las ecuaciones simultáneamente**.

Por ejemplo:

$$
\begin{cases}
x+y=7\\
x-y=1
\end{cases}
$$

## Métodos para resolver sistemas

Los principales métodos para resolver sistemas de ecuaciones son:

- **Sustitución**: despejamos una incógnita en una ecuación y la sustituimos en la otra.
- **Igualación**: despejamos la misma incógnita en ambas ecuaciones y después igualamos las expresiones.
- **Reducción**: sumamos o restamos las ecuaciones para eliminar una de las incógnitas.
- **Método gráfico**: representamos las ecuaciones y buscamos sus puntos de intersección.

## Método de sustitución

Consideremos el sistema:

$$
\begin{cases}
x+y=7\\
x-y=1
\end{cases}
$$

Despejamos $y$ en la primera ecuación:

$$
y=7-x
$$

Sustituimos esta expresión en la segunda ecuación:

$$
x-(7-x)=1
$$

Simplificamos:

$$
x-7+x=1
$$

$$
2x=8
$$

Por tanto:

$$
x=4
$$

Ahora sustituimos $x=4$ en:

$$
y=7-x
$$

Obtenemos:

$$
y=7-4=3
$$

Por tanto, la solución es:

$$
\boxed{(x,y)=(4,3)}
$$

## Método de igualación

Consideremos:

$$
\begin{cases}
2x+y=8\\
x-y=1
\end{cases}
$$

Despejamos $y$ en ambas ecuaciones:

$$
y=8-2x
$$

$$
y=x-1
$$

Como ambas expresiones son iguales a $y$, podemos igualarlas:

$$
8-2x=x-1
$$

$$
9=3x
$$

$$
x=3
$$

Sustituimos:

$$
y=3-1=2
$$

La solución es:

$$
\boxed{(x,y)=(3,2)}
$$

## Método de reducción

Consideremos:

$$
\begin{cases}
2x+y=7\\
3x-y=8
\end{cases}
$$

Sumamos las dos ecuaciones:

$$
(2x+y)+(3x-y)=7+8
$$

Los términos $y$ se cancelan:

$$
5x=15
$$

Por tanto:

$$
x=3
$$

Sustituimos en la primera ecuación:

$$
2(3)+y=7
$$

$$
6+y=7
$$

$$
y=1
$$

La solución es:

$$
\boxed{(x,y)=(3,1)}
$$

## Método gráfico

Cada ecuación lineal con dos incógnitas representa una recta.

Por ejemplo:

$$
\begin{cases}
y=7-x\\
y=x-1
\end{cases}
$$

La solución del sistema corresponde al **punto donde las dos rectas se cortan**.

::contentReference[oaicite:0]{index=0}

En este caso, las rectas se cortan en:

$$
(4,3)
$$

## Tipos de sistemas

Un sistema de dos ecuaciones lineales puede tener tres tipos de solución.

### Una solución

Las rectas se cortan en un único punto.

$$
\boxed{\text{Una solución}}
$$

### Ninguna solución

Las rectas son paralelas y nunca se cortan.

$$
\boxed{\text{Sin solución}}
$$

### Infinitas soluciones

Las dos ecuaciones representan la misma recta.

$$
\boxed{\text{Infinitas soluciones}}
$$

## Sistemas de tres ecuaciones

También podemos trabajar con tres o más incógnitas.

Por ejemplo:

$$
\begin{cases}
x+y+z=6\\
x-y+z=4\\
2x+y-z=3
\end{cases}
$$

Estos sistemas pueden resolverse mediante sustitución, reducción o métodos matriciales como la **eliminación de Gauss**.

## Estrategia para resolver un sistema

1. Identifica las incógnitas.
2. Decide qué método resulta más conveniente.
3. Resuelve el sistema.
4. Obtén el valor de cada incógnita.
5. Comprueba la solución sustituyéndola en todas las ecuaciones.

Una solución solo es correcta si satisface **todas las ecuaciones del sistema**.
