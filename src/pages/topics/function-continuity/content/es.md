# Continuidad de una función

La **continuidad** describe si una función puede recorrerse sin saltos, huecos o interrupciones en un punto o en un intervalo.

Intuitivamente, una función es continua cuando su gráfica no presenta una ruptura.

## Continuidad en un punto

Una función $f(x)$ es continua en $x=a$ si se cumplen simultáneamente estas tres condiciones:

1. $f(a)$ está definida.
2. Existe el límite $\lim_{x\to a}f(x)$.
3. El límite coincide con el valor de la función:

$$
\boxed{\lim_{x\to a}f(x)=f(a)}
$$

Por tanto, podemos resumir la condición de continuidad como:

$$
\boxed{
f \text{ es continua en } a
\iff
\lim_{x\to a}f(x)=f(a)
}
$$

## Ejemplo

Consideremos:

$$
f(x)=x^2+1
$$

En $x=2$:

$$
f(2)=2^2+1=5
$$

Y:

$$
\lim_{x\to2}(x^2+1)=5
$$

Como ambos valores coinciden:

$$
\boxed{\lim_{x\to2}f(x)=f(2)=5}
$$

La función es continua en $x=2$.

## Continuidad lateral

En funciones definidas por partes o en extremos de intervalos es necesario estudiar los límites laterales.

El límite por la izquierda es:

$$
\lim_{x\to a^-}f(x)
$$

y el límite por la derecha:

$$
\lim_{x\to a^+}f(x)
$$

Para que exista el límite:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
}
$$

Para que además exista continuidad:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$

## Continuidad en un intervalo

Una función es continua en un intervalo abierto $(a,b)$ si es continua en todos los puntos del intervalo.

$$
\boxed{
f \text{ continua en }(a,b)
\iff
\forall x\in(a,b),\
\lim_{t\to x}f(t)=f(x)
}
$$

En un intervalo cerrado $[a,b]$, además se requiere continuidad lateral en los extremos:

$$
\lim_{x\to a^+}f(x)=f(a)
$$

y

$$
\lim_{x\to b^-}f(x)=f(b)
$$

## Tipos de discontinuidad

Una función puede dejar de ser continua de diferentes maneras.

### Discontinuidad evitable

Existe el límite, pero la función no está definida en el punto o tiene un valor diferente.

Por ejemplo:

$$
f(x)=\frac{x^2-1}{x-1}
$$

Factorizando:

$$
f(x)=\frac{(x-1)(x+1)}{x-1}=x+1
\qquad x\neq1
$$

En $x=1$ la función original no está definida, pero:

$$
\lim_{x\to1}f(x)=2
$$

Existe un hueco en la gráfica.

$$
\boxed{\text{Discontinuidad evitable en }x=1}
$$

### Discontinuidad de salto

Los límites laterales existen, pero son diferentes:

$$
\lim_{x\to a^-}f(x)
\neq
\lim_{x\to a^+}f(x)
$$

Por tanto, el límite no existe.

$$
\boxed{\text{Discontinuidad de salto}}
$$

### Discontinuidad infinita

La función crece sin límite al aproximarse al punto:

$$
\lim_{x\to a}f(x)=\pm\infty
$$

Normalmente aparece una asíntota vertical.

$$
\boxed{\text{Discontinuidad infinita}}
$$

### Discontinuidad oscilatoria

La función oscila cada vez más rápidamente y el límite no existe.

Un ejemplo típico es:

$$
f(x)=\sin\left(\frac{1}{x}\right)
$$

cuando $x\to0$.

$$
\boxed{
\lim_{x\to0}\sin\left(\frac{1}{x}\right)
\text{ no existe}
}
$$

## Continuidad de funciones habituales

Muchas funciones conocidas son continuas en todo su dominio.

### Polinomios

Todo polinomio es continuo en $\mathbb{R}$:

$$
\boxed{
p(x)\text{ polinomio}
\Rightarrow
p\text{ es continua en }\mathbb{R}
}
$$

### Funciones racionales

Una función racional

$$
f(x)=\frac{p(x)}{q(x)}
$$

es continua donde $q(x)\neq0$.

$$
\boxed{
f(x)=\frac{p(x)}{q(x)}
\text{ es continua donde }q(x)\neq0
}
$$

### Funciones exponenciales

$$
f(x)=a^x
\qquad a>0
$$

es continua en todo $\mathbb{R}$.

### Funciones logarítmicas

$$
f(x)=\log_a(x)
\qquad a>0,\ a\neq1
$$

es continua en su dominio:

$$
\boxed{x>0}
$$

### Funciones trigonométricas

$\sin(x)$ y $\cos(x)$ son continuas en $\mathbb{R}$.

La función $\tan(x)$ es continua en todos los puntos donde está definida:

$$
\boxed{
x\neq\frac{\pi}{2}+k\pi,
\qquad k\in\mathbb{Z}
}
$$

## Continuidad de funciones definidas a trozos

Consideremos:

$$
f(x)=
\begin{cases}
x+1 & x<2\\
5 & x=2\\
x^2-3 & x>2
\end{cases}
$$

Para estudiar la continuidad en $x=2$, calculamos:

$$
\lim_{x\to2^-}f(x)=3
$$

$$
\lim_{x\to2^+}f(x)=1
$$

Como:

$$
3\neq1
$$

el límite no existe y la función no es continua en $x=2$.

$$
\boxed{\text{f no es continua en }x=2}
$$

## Operaciones con funciones continuas

Si $f$ y $g$ son continuas en $a$, entonces también son continuas:

- $f+g$
- $f-g$
- $fg$
- $\frac{f}{g}$, siempre que $g(a)\neq0$
- composiciones $f\circ g$, cuando están definidas

Por ejemplo:

$$
f(x)=x^2
$$

y

$$
g(x)=\sin(x)
$$

son continuas, por lo que:

$$
h(x)=\sin(x^2)
$$

también es continua en $\mathbb{R}$.

## Teorema del valor intermedio

Si una función es continua en $[a,b]$, entonces toma todos los valores comprendidos entre $f(a)$ y $f(b)$.

Si:

$$
f(a)<L<f(b)
$$

entonces existe al menos un $c\in(a,b)$ tal que:

$$
\boxed{f(c)=L}
$$

Este resultado es especialmente útil para demostrar la existencia de soluciones.

### Aplicación a raíces

Si $f$ es continua en $[a,b]$ y:

$$
f(a)\cdot f(b)<0
$$

entonces existe al menos un $c\in(a,b)$ tal que:

$$
\boxed{f(c)=0}
$$

Este resultado se conoce como una consecuencia del **teorema de Bolzano**.

## Cómo estudiar la continuidad

Para estudiar la continuidad de una función en $x=a$:

1. Comprueba que $f(a)$ está definida.
2. Calcula $\lim_{x\to a^-}f(x)$.
3. Calcula $\lim_{x\to a^+}f(x)$.
4. Comprueba que los límites laterales coinciden.
5. Compara el límite con $f(a)$.
6. Clasifica la discontinuidad si no es continua.

En resumen:

$$
\boxed{
\text{Continuidad en }a
\iff
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::
