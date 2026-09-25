# Análisis de una función

El **análisis de una función** consiste en estudiar sus principales propiedades para comprender y describir su comportamiento.

Los aspectos más importantes son el dominio, recorrido, ceros, signo, continuidad, límites, monotonía, extremos, concavidad, asíntotas y simetría.

## Dominio

El **dominio** de una función $f(x)$ es el conjunto de todos los valores de $x$ para los que la función está definida.

$$
\boxed{D_f=\{x\in\mathbb{R}:f(x)\text{ está definida}\}}
$$

Al determinar el dominio hay que comprobar:

- Divisiones entre cero.
- Raíces pares de números negativos.
- Logaritmos de números no positivos.
- Otras restricciones de la expresión.

Por ejemplo:

$$
f(x)=\frac{1}{x-2}
$$

El denominador no puede ser cero:

$$
x-2\neq0
$$

Por tanto:

$$
\boxed{D_f=\mathbb{R}\setminus\{2\}}
$$

## Recorrido

El **recorrido** de una función es el conjunto de valores que puede tomar $f(x)$.

$$
\boxed{
R_f=\{f(x):x\in D_f\}
}
$$

Por ejemplo:

$$
f(x)=x^2
$$

Como $x^2\geq0$:

$$
\boxed{R_f=[0,\infty)}
$$

## Ceros e intersecciones con el eje $x$

Los **ceros** de una función son los valores de $x$ que cumplen:

$$
f(x)=0
$$

Corresponden a los puntos en los que la gráfica corta el eje $x$.

Por ejemplo:

$$
f(x)=x^2-4
$$

Entonces:

$$
x^2-4=0
$$

$$
(x-2)(x+2)=0
$$

Por tanto:

$$
\boxed{x=-2,\quad x=2}
$$

Las intersecciones son:

$$
(-2,0),\qquad(2,0)
$$

## Intersección con el eje $y$

La intersección con el eje $y$ se obtiene haciendo $x=0$:

$$
\boxed{y=f(0)}
$$

Por ejemplo:

$$
f(x)=x^2+3x+2
$$

$$
f(0)=2
$$

Por tanto:

$$
\boxed{(0,2)}
$$

## Signo de una función

Estudiar el **signo** permite determinar dónde la función es positiva, negativa o cero.

$$
f(x)>0
$$

significa que la gráfica está por encima del eje $x$.

$$
f(x)<0
$$

significa que está por debajo del eje $x$.

Los ceros dividen el dominio en intervalos donde se puede estudiar el signo.

## Continuidad

Una función es continua en $x=a$ cuando:

$$
\boxed{
\lim_{x\to a}f(x)=f(a)
}
$$

Una función es continua en un intervalo si es continua en todos sus puntos.

Las discontinuidades pueden aparecer por:

- Puntos donde la función no está definida.
- Huecos.
- Saltos.
- Asíntotas verticales.

## Límites

Un límite describe el valor al que se aproxima $f(x)$ cuando $x$ se aproxima a un determinado valor.

$$
\boxed{
\lim_{x\to a}f(x)=L
}
$$

Los límites laterales son:

$$
\lim_{x\to a^-}f(x)
$$

y

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

También podemos estudiar el comportamiento en el infinito:

$$
\lim_{x\to\infty}f(x)
$$

y

$$
\lim_{x\to-\infty}f(x)
$$

## Monotonía

La monotonía indica si una función crece o decrece.

Una función es **creciente** si:

$$
x_1<x_2
\Rightarrow
f(x_1)<f(x_2)
$$

Es **decreciente** si:

$$
x_1<x_2
\Rightarrow
f(x_1)>f(x_2)
$$

Cuando la función es derivable:

$$
\boxed{
f'(x)>0\Rightarrow f\text{ es creciente}
}
$$

$$
\boxed{
f'(x)<0\Rightarrow f\text{ es decreciente}
}
$$

## Puntos críticos

Un **punto crítico** aparece cuando:

$$
f'(x)=0
$$

o cuando $f'(x)$ no existe.

Los puntos críticos son importantes porque pueden corresponder a máximos o mínimos locales.

## Extremos locales

Un **máximo local** aparece cuando la función alcanza un valor mayor que los valores cercanos.

Un **mínimo local** aparece cuando alcanza un valor menor que los valores cercanos.

Si la derivada cambia de:

$$
+\to-
$$

la función pasa de creciente a decreciente:

$$
\boxed{\text{máximo local}}
$$

Si cambia de:

$$
-\to+
$$

pasa de decreciente a creciente:

$$
\boxed{\text{mínimo local}}
$$

## Concavidad

La concavidad describe cómo se curva la gráfica.

Si:

$$
f''(x)>0
$$

la función es cóncava hacia arriba:

$$
\boxed{f''(x)>0\Rightarrow\text{cóncava hacia arriba}}
$$

Si:

$$
f''(x)<0
$$

es cóncava hacia abajo:

$$
\boxed{f''(x)<0\Rightarrow\text{cóncava hacia abajo}}
$$

## Puntos de inflexión

Un **punto de inflexión** es un punto donde cambia la concavidad.

Un posible punto de inflexión puede encontrarse resolviendo:

$$
f''(x)=0
$$

pero esta condición por sí sola no es suficiente. La concavidad debe cambiar realmente.

Por tanto:

$$
\boxed{
\text{Punto de inflexión}
\iff
\text{cambia la concavidad}
}
$$

## Asíntotas

Una asíntota es una recta a la que la gráfica se aproxima.

### Asíntotas verticales

Existe una asíntota vertical en $x=a$ cuando:

$$
\boxed{
\lim_{x\to a}f(x)=\pm\infty
}
$$

La asíntota es:

$$
\boxed{x=a}
$$

### Asíntotas horizontales

Si:

$$
\lim_{x\to\infty}f(x)=L
$$

entonces:

$$
\boxed{y=L}
$$

es una asíntota horizontal.

También se puede estudiar el límite cuando $x\to-\infty$.

### Asíntotas oblicuas

Una asíntota oblicua tiene la forma:

$$
\boxed{y=mx+n}
$$

y describe el comportamiento lineal de la función en el infinito.

## Simetría

La simetría puede simplificar considerablemente el análisis.

### Funciones pares

Una función es par si:

$$
f(-x)=f(x)
$$

Su gráfica es simétrica respecto del eje $y$.

$$
\boxed{f(-x)=f(x)\Rightarrow\text{función par}}
$$

### Funciones impares

Una función es impar si:

$$
f(-x)=-f(x)
$$

Su gráfica es simétrica respecto del origen.

$$
\boxed{f(-x)=-f(x)\Rightarrow\text{función impar}}
$$

## Comportamiento en el infinito

Los límites:

$$
\lim_{x\to\infty}f(x)
$$

y

$$
\lim_{x\to-\infty}f(x)
$$

describen el comportamiento de la función cuando $x$ toma valores muy grandes positivos o negativos.

Por ejemplo:

$$
f(x)=\frac{1}{x}
$$

cumple:

$$
\boxed{
\lim_{x\to\infty}\frac1x
=
\lim_{x\to-\infty}\frac1x
=0
}
$$

Por tanto, $y=0$ es una asíntota horizontal.

## Ejemplo completo

Consideremos:

$$
f(x)=x^3-3x
$$

### Dominio

Al ser un polinomio:

$$
\boxed{D_f=\mathbb{R}}
$$

### Ceros

$$
x^3-3x=0
$$

$$
x(x^2-3)=0
$$

Por tanto:

$$
\boxed{x=-\sqrt3,\quad x=0,\quad x=\sqrt3}
$$

### Primera derivada

$$
f'(x)=3x^2-3
$$

Factorizando:

$$
f'(x)=3(x-1)(x+1)
$$

Los puntos críticos son:

$$
\boxed{x=-1,\quad x=1}
$$

### Monotonía

El signo de $f'(x)$ indica:

- Creciente en $(-\infty,-1)$.
- Decreciente en $(-1,1)$.
- Creciente en $(1,\infty)$.

Por tanto:

$$
\boxed{x=-1\text{ es un máximo local}}
$$

y

$$
\boxed{x=1\text{ es un mínimo local}}
$$

### Segunda derivada

$$
f''(x)=6x
$$

Por tanto:

- $f''(x)<0$ cuando $x<0$.
- $f''(x)>0$ cuando $x>0$.

La concavidad cambia en $x=0$:

$$
\boxed{(0,0)\text{ es un punto de inflexión}}
$$

### Gráfica

:::function-graph{expression="x^3-3*x" restriction="-3<=x<=3" showWorkings=true}
:::

## Orden recomendado para analizar una función

Un análisis sistemático puede seguir este orden:

1. **Dominio**
2. **Simetría**
3. **Ceros e intersecciones**
4. **Signo**
5. **Continuidad**
6. **Límites**
7. **Asíntotas**
8. **Primera derivada**
9. **Puntos críticos**
10. **Monotonía**
11. **Extremos locales**
12. **Segunda derivada**
13. **Concavidad**
14. **Puntos de inflexión**
15. **Comportamiento en el infinito**
16. **Gráfica**

El orden exacto puede variar según la función.

## Resumen

El objetivo principal del análisis de una función es determinar cómo se comporta en todo su dominio.

Las propiedades fundamentales son:

$$
\boxed{
\text{dominio, recorrido, ceros, signo, continuidad, límites, monotonía, extremos, concavidad, asíntotas y simetría}
}
$$
