# Continuidad de las funciones definidas a trozos

Una **función definida a trozos** es una función que utiliza diferentes expresiones en distintas partes de su dominio.

Por ejemplo:

$$
f(x)=
\begin{cases}
x+1 & x<2\\
x^2-1 & x\geq2
\end{cases}
$$

Al estudiar la continuidad, los puntos más importantes son las **fronteras entre las diferentes partes**.

## Continuidad en un punto

Una función $f$ es continua en $x=a$ si:

$$
\boxed{
\lim_{x\to a}f(x)=f(a)
}
$$

En una función definida a trozos es necesario estudiar el comportamiento desde ambos lados.

Debe cumplirse:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$

Si alguno de estos valores es diferente, la función no es continua en $x=a$.

## Puntos de frontera

Consideremos:

$$
f(x)=
\begin{cases}
f_1(x) & x<a\\
f_2(x) & x\geq a
\end{cases}
$$

Para determinar si $f$ es continua en $x=a$, calculamos:

$$
\lim_{x\to a^-}f_1(x)
$$

$$
\lim_{x\to a^+}f_2(x)
$$

y el valor de la función:

$$
f(a)=f_2(a)
$$

La continuidad requiere:

$$
\boxed{
\lim_{x\to a^-}f_1(x)
=
\lim_{x\to a^+}f_2(x)
=
f_2(a)
}
$$

## Ejemplo

Consideremos:

$$
f(x)=
\begin{cases}
x+1 & x<2\\
x^2-1 & x\geq2
\end{cases}
$$

Estudiamos la continuidad en $x=2$.

### Límite por la izquierda

Para $x<2$:

$$
f(x)=x+1
$$

Por tanto:

$$
\lim_{x\to2^-}f(x)=2+1=3
$$

### Límite por la derecha

Para $x\geq2$:

$$
f(x)=x^2-1
$$

Por tanto:

$$
\lim_{x\to2^+}f(x)=2^2-1=3
$$

### Valor de la función

Como la segunda parte contiene $x=2$:

$$
f(2)=2^2-1=3
$$

Así:

$$
\boxed{
\lim_{x\to2^-}f(x)
=
\lim_{x\to2^+}f(x)
=
f(2)=3
}
$$

La función es continua en $x=2$.

## Condiciones de continuidad

Para:

$$
f(x)=
\begin{cases}
f_1(x) & x<a\\
f_2(x) & x\geq a
\end{cases}
$$

la continuidad en $x=a$ requiere:

### 1. Límite por la izquierda

$$
L_-=\lim_{x\to a^-}f_1(x)
$$

### 2. Límite por la derecha

$$
L_+=\lim_{x\to a^+}f_2(x)
$$

### 3. Valor de la función

$$
f(a)=f_2(a)
$$

Por tanto:

$$
\boxed{
L_-=L_+=f(a)
}
$$

## Encontrar un parámetro desconocido

Las funciones definidas a trozos suelen contener parámetros que deben determinarse para garantizar la continuidad.

Consideremos:

$$
f(x)=
\begin{cases}
x^2+1 & x<2\\
ax+3 & x\geq2
\end{cases}
$$

Para que sea continua en $x=2$:

$$
\lim_{x\to2^-}f(x)
=
\lim_{x\to2^+}f(x)
$$

El límite por la izquierda es:

$$
2^2+1=5
$$

El límite por la derecha es:

$$
2a+3
$$

Por tanto:

$$
5=2a+3
$$

$$
2a=2
$$

$$
\boxed{a=1}
$$

Con $a=1$, la función es continua en $x=2$.

## Varios puntos de frontera

Una función definida a trozos puede tener varios puntos de frontera.

Por ejemplo:

$$
f(x)=
\begin{cases}
x+2 & x<1\\
x^2 & 1\leq x<3\\
2x-3 & x\geq3
\end{cases}
$$

Los puntos de frontera son:

$$
\boxed{x=1,\quad x=3}
$$

Ambos puntos deben estudiarse por separado.

### En $x=1$

$$
\lim_{x\to1^-}f(x)=1+2=3
$$

$$
\lim_{x\to1^+}f(x)=1^2=1
$$

Como:

$$
3\neq1
$$

la función no es continua en $x=1$.

$$
\boxed{\text{Discontinuidad en }x=1}
$$

### En $x=3$

$$
\lim_{x\to3^-}f(x)=3^2=9
$$

$$
\lim_{x\to3^+}f(x)=2(3)-3=3
$$

Como:

$$
9\neq3
$$

la función no es continua en $x=3$.

$$
\boxed{\text{Discontinuidad en }x=3}
$$

## Tipos de discontinuidad

Las funciones definidas a trozos pueden presentar diferentes tipos de discontinuidad.

### Discontinuidad evitable

Si los dos límites laterales coinciden pero el valor de la función es diferente o no está definido:

$$
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=L
$$

pero:

$$
f(a)\neq L
$$

entonces:

$$
\boxed{\text{Discontinuidad evitable}}
$$

### Discontinuidad de salto

Si:

$$
\lim_{x\to a^-}f(x)
\neq
\lim_{x\to a^+}f(x)
$$

entonces:

$$
\boxed{\text{Discontinuidad de salto}}
$$

### Discontinuidad infinita

Si uno o ambos límites laterales son infinitos:

$$
\lim_{x\to a^\pm}f(x)=\pm\infty
$$

existe una discontinuidad infinita.

$$
\boxed{\text{Discontinuidad infinita}}
$$

## Continuidad en un intervalo

Una función definida a trozos es continua en un intervalo si:

1. Cada parte es continua en su propio intervalo.
2. La función es continua en todos los puntos de frontera.

Por ejemplo, si:

$$
f(x)=
\begin{cases}
f_1(x) & x<a\\
f_2(x) & a\leq x<b\\
f_3(x) & x\geq b
\end{cases}
$$

hay que comprobar:

$$
\boxed{\text{continuidad en }x=a\text{ y }x=b}
$$

además de la continuidad de $f_1$, $f_2$ y $f_3$ en sus respectivos intervalos.

## Interpretación gráfica

En un punto de frontera $x=a$, la continuidad significa que la gráfica se aproxima al mismo punto desde ambos lados y que la función realmente toma ese valor.

No debe existir:

- Un hueco.
- Un salto.
- Una asíntota vertical.
- Una diferencia entre el límite y el valor de la función.

Por tanto:

$$
\boxed{
\text{Continua}
\iff
\text{no hay ruptura en el punto de frontera}
}
$$

:::function-graph{expression="x+1" restriction="-4<=x<2"}
:::

## Ejemplo completo

Consideremos:

$$
f(x)=
\begin{cases}
x^2 & x<1\\
ax+2 & x\geq1
\end{cases}
$$

Queremos encontrar $a$ para que $f$ sea continua en $x=1$.

El límite por la izquierda es:

$$
\lim_{x\to1^-}f(x)=1^2=1
$$

El límite por la derecha es:

$$
\lim_{x\to1^+}f(x)=a+2
$$

El valor de la función es:

$$
f(1)=a+2
$$

Para que exista continuidad:

$$
1=a+2
$$

Por tanto:

$$
\boxed{a=-1}
$$

La función resultante es:

$$
f(x)=
\begin{cases}
x^2 & x<1\\
-x+2 & x\geq1
\end{cases}
$$

y:

$$
\boxed{
\lim_{x\to1^-}f(x)
=
\lim_{x\to1^+}f(x)
=
f(1)=1
}
$$

## Procedimiento

Para estudiar la continuidad de una función definida a trozos:

1. Identifica todos los puntos de frontera.
2. Comprueba si cada parte es continua.
3. Calcula el límite por la izquierda en cada frontera.
4. Calcula el límite por la derecha.
5. Calcula el valor de la función.
6. Compara los tres valores.
7. Si es necesario, clasifica la discontinuidad.
8. Si existe un parámetro desconocido, resuelve la ecuación de continuidad.

La condición fundamental es:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$
