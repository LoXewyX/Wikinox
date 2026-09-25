const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-Cuk8m7yK.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-CQZABaDC.js","assets/index-DhjOBkmr.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-CQZABaDC.js";import{t as i}from"./TopicPage-DyShI14R.js";var a=`# Continuidad de las funciones definidas a trozos

Una **función definida a trozos** es una función que utiliza diferentes expresiones en distintas partes de su dominio.

Por ejemplo:

$$
f(x)=
\\begin{cases}
x+1 & x<2\\\\
x^2-1 & x\\geq2
\\end{cases}
$$

Al estudiar la continuidad, los puntos más importantes son las **fronteras entre las diferentes partes**.

## Continuidad en un punto

Una función $f$ es continua en $x=a$ si:

$$
\\boxed{
\\lim_{x\\to a}f(x)=f(a)
}
$$

En una función definida a trozos es necesario estudiar el comportamiento desde ambos lados.

Debe cumplirse:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$

Si alguno de estos valores es diferente, la función no es continua en $x=a$.

## Puntos de frontera

Consideremos:

$$
f(x)=
\\begin{cases}
f_1(x) & x<a\\\\
f_2(x) & x\\geq a
\\end{cases}
$$

Para determinar si $f$ es continua en $x=a$, calculamos:

$$
\\lim_{x\\to a^-}f_1(x)
$$

$$
\\lim_{x\\to a^+}f_2(x)
$$

y el valor de la función:

$$
f(a)=f_2(a)
$$

La continuidad requiere:

$$
\\boxed{
\\lim_{x\\to a^-}f_1(x)
=
\\lim_{x\\to a^+}f_2(x)
=
f_2(a)
}
$$

## Ejemplo

Consideremos:

$$
f(x)=
\\begin{cases}
x+1 & x<2\\\\
x^2-1 & x\\geq2
\\end{cases}
$$

Estudiamos la continuidad en $x=2$.

### Límite por la izquierda

Para $x<2$:

$$
f(x)=x+1
$$

Por tanto:

$$
\\lim_{x\\to2^-}f(x)=2+1=3
$$

### Límite por la derecha

Para $x\\geq2$:

$$
f(x)=x^2-1
$$

Por tanto:

$$
\\lim_{x\\to2^+}f(x)=2^2-1=3
$$

### Valor de la función

Como la segunda parte contiene $x=2$:

$$
f(2)=2^2-1=3
$$

Así:

$$
\\boxed{
\\lim_{x\\to2^-}f(x)
=
\\lim_{x\\to2^+}f(x)
=
f(2)=3
}
$$

La función es continua en $x=2$.

## Condiciones de continuidad

Para:

$$
f(x)=
\\begin{cases}
f_1(x) & x<a\\\\
f_2(x) & x\\geq a
\\end{cases}
$$

la continuidad en $x=a$ requiere:

### 1. Límite por la izquierda

$$
L_-=\\lim_{x\\to a^-}f_1(x)
$$

### 2. Límite por la derecha

$$
L_+=\\lim_{x\\to a^+}f_2(x)
$$

### 3. Valor de la función

$$
f(a)=f_2(a)
$$

Por tanto:

$$
\\boxed{
L_-=L_+=f(a)
}
$$

## Encontrar un parámetro desconocido

Las funciones definidas a trozos suelen contener parámetros que deben determinarse para garantizar la continuidad.

Consideremos:

$$
f(x)=
\\begin{cases}
x^2+1 & x<2\\\\
ax+3 & x\\geq2
\\end{cases}
$$

Para que sea continua en $x=2$:

$$
\\lim_{x\\to2^-}f(x)
=
\\lim_{x\\to2^+}f(x)
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
\\boxed{a=1}
$$

Con $a=1$, la función es continua en $x=2$.

## Varios puntos de frontera

Una función definida a trozos puede tener varios puntos de frontera.

Por ejemplo:

$$
f(x)=
\\begin{cases}
x+2 & x<1\\\\
x^2 & 1\\leq x<3\\\\
2x-3 & x\\geq3
\\end{cases}
$$

Los puntos de frontera son:

$$
\\boxed{x=1,\\quad x=3}
$$

Ambos puntos deben estudiarse por separado.

### En $x=1$

$$
\\lim_{x\\to1^-}f(x)=1+2=3
$$

$$
\\lim_{x\\to1^+}f(x)=1^2=1
$$

Como:

$$
3\\neq1
$$

la función no es continua en $x=1$.

$$
\\boxed{\\text{Discontinuidad en }x=1}
$$

### En $x=3$

$$
\\lim_{x\\to3^-}f(x)=3^2=9
$$

$$
\\lim_{x\\to3^+}f(x)=2(3)-3=3
$$

Como:

$$
9\\neq3
$$

la función no es continua en $x=3$.

$$
\\boxed{\\text{Discontinuidad en }x=3}
$$

## Tipos de discontinuidad

Las funciones definidas a trozos pueden presentar diferentes tipos de discontinuidad.

### Discontinuidad evitable

Si los dos límites laterales coinciden pero el valor de la función es diferente o no está definido:

$$
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=L
$$

pero:

$$
f(a)\\neq L
$$

entonces:

$$
\\boxed{\\text{Discontinuidad evitable}}
$$

### Discontinuidad de salto

Si:

$$
\\lim_{x\\to a^-}f(x)
\\neq
\\lim_{x\\to a^+}f(x)
$$

entonces:

$$
\\boxed{\\text{Discontinuidad de salto}}
$$

### Discontinuidad infinita

Si uno o ambos límites laterales son infinitos:

$$
\\lim_{x\\to a^\\pm}f(x)=\\pm\\infty
$$

existe una discontinuidad infinita.

$$
\\boxed{\\text{Discontinuidad infinita}}
$$

## Continuidad en un intervalo

Una función definida a trozos es continua en un intervalo si:

1. Cada parte es continua en su propio intervalo.
2. La función es continua en todos los puntos de frontera.

Por ejemplo, si:

$$
f(x)=
\\begin{cases}
f_1(x) & x<a\\\\
f_2(x) & a\\leq x<b\\\\
f_3(x) & x\\geq b
\\end{cases}
$$

hay que comprobar:

$$
\\boxed{\\text{continuidad en }x=a\\text{ y }x=b}
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
\\boxed{
\\text{Continua}
\\iff
\\text{no hay ruptura en el punto de frontera}
}
$$

:::function-graph{expression="x+1" restriction="-4<=x<2"}
:::

## Ejemplo completo

Consideremos:

$$
f(x)=
\\begin{cases}
x^2 & x<1\\\\
ax+2 & x\\geq1
\\end{cases}
$$

Queremos encontrar $a$ para que $f$ sea continua en $x=1$.

El límite por la izquierda es:

$$
\\lim_{x\\to1^-}f(x)=1^2=1
$$

El límite por la derecha es:

$$
\\lim_{x\\to1^+}f(x)=a+2
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
\\boxed{a=-1}
$$

La función resultante es:

$$
f(x)=
\\begin{cases}
x^2 & x<1\\\\
-x+2 & x\\geq1
\\end{cases}
$$

y:

$$
\\boxed{
\\lim_{x\\to1^-}f(x)
=
\\lim_{x\\to1^+}f(x)
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
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$
`,o=`# Continuïtat de les funcions definides a trossos

Una **funció definida a trossos** és una funció que utilitza diferents expressions en diferents parts del seu domini.

Per exemple:

$$
f(x)=
\\begin{cases}
x+1 & x<2\\\\
x^2-1 & x\\geq2
\\end{cases}
$$

En estudiar la continuïtat, els punts més importants són les **fronteres entre les diferents parts**.

## Continuïtat en un punt

Una funció $f$ és contínua en $x=a$ si:

$$
\\boxed{
\\lim_{x\\to a}f(x)=f(a)
}
$$

En una funció definida a trossos cal estudiar el comportament des dels dos costats.

S'ha de complir:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$

Si algun d'aquests valors és diferent, la funció no és contínua en $x=a$.

## Punts de frontera

Considerem:

$$
f(x)=
\\begin{cases}
f_1(x) & x<a\\\\
f_2(x) & x\\geq a
\\end{cases}
$$

Per determinar si $f$ és contínua en $x=a$, calculem:

$$
\\lim_{x\\to a^-}f_1(x)
$$

$$
\\lim_{x\\to a^+}f_2(x)
$$

i el valor de la funció:

$$
f(a)=f_2(a)
$$

La continuïtat requereix:

$$
\\boxed{
\\lim_{x\\to a^-}f_1(x)
=
\\lim_{x\\to a^+}f_2(x)
=
f_2(a)
}
$$

## Exemple

Considerem:

$$
f(x)=
\\begin{cases}
x+1 & x<2\\\\
x^2-1 & x\\geq2
\\end{cases}
$$

Estudiem la continuïtat en $x=2$.

### Límit per l'esquerra

Per a $x<2$:

$$
f(x)=x+1
$$

Per tant:

$$
\\lim_{x\\to2^-}f(x)=2+1=3
$$

### Límit per la dreta

Per a $x\\geq2$:

$$
f(x)=x^2-1
$$

Per tant:

$$
\\lim_{x\\to2^+}f(x)=2^2-1=3
$$

### Valor de la funció

Com que la segona part conté $x=2$:

$$
f(2)=2^2-1=3
$$

Així:

$$
\\boxed{
\\lim_{x\\to2^-}f(x)
=
\\lim_{x\\to2^+}f(x)
=
f(2)=3
}
$$

La funció és contínua en $x=2$.

## Condicions de continuïtat

Per a:

$$
f(x)=
\\begin{cases}
f_1(x) & x<a\\\\
f_2(x) & x\\geq a
\\end{cases}
$$

la continuïtat en $x=a$ requereix:

### 1. Límit per l'esquerra

$$
L_-=\\lim_{x\\to a^-}f_1(x)
$$

### 2. Límit per la dreta

$$
L_+=\\lim_{x\\to a^+}f_2(x)
$$

### 3. Valor de la funció

$$
f(a)=f_2(a)
$$

Per tant:

$$
\\boxed{
L_-=L_+=f(a)
}
$$

## Trobar un paràmetre desconegut

Les funcions definides a trossos sovint contenen paràmetres que s'han de determinar per garantir la continuïtat.

Considerem:

$$
f(x)=
\\begin{cases}
x^2+1 & x<2\\\\
ax+3 & x\\geq2
\\end{cases}
$$

Perquè sigui contínua en $x=2$:

$$
\\lim_{x\\to2^-}f(x)
=
\\lim_{x\\to2^+}f(x)
$$

El límit per l'esquerra és:

$$
2^2+1=5
$$

El límit per la dreta és:

$$
2a+3
$$

Per tant:

$$
5=2a+3
$$

$$
2a=2
$$

$$
\\boxed{a=1}
$$

Amb $a=1$, la funció és contínua en $x=2$.

## Diversos punts de frontera

Una funció definida a trossos pot tenir diversos punts de frontera.

Per exemple:

$$
f(x)=
\\begin{cases}
x+2 & x<1\\\\
x^2 & 1\\leq x<3\\\\
2x-3 & x\\geq3
\\end{cases}
$$

Els punts de frontera són:

$$
\\boxed{x=1,\\quad x=3}
$$

Tots dos punts s'han d'estudiar per separat.

### En $x=1$

$$
\\lim_{x\\to1^-}f(x)=1+2=3
$$

$$
\\lim_{x\\to1^+}f(x)=1^2=1
$$

Com que:

$$
3\\neq1
$$

la funció no és contínua en $x=1$.

$$
\\boxed{\\text{Discontinuïtat en }x=1}
$$

### En $x=3$

$$
\\lim_{x\\to3^-}f(x)=3^2=9
$$

$$
\\lim_{x\\to3^+}f(x)=2(3)-3=3
$$

Com que:

$$
9\\neq3
$$

la funció no és contínua en $x=3$.

$$
\\boxed{\\text{Discontinuïtat en }x=3}
$$

## Tipus de discontinuïtat

Les funcions definides a trossos poden presentar diferents tipus de discontinuïtat.

### Discontinuïtat evitable

Si els dos límits laterals coincideixen però el valor de la funció és diferent o no està definit:

$$
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=L
$$

però:

$$
f(a)\\neq L
$$

aleshores:

$$
\\boxed{\\text{Discontinuïtat evitable}}
$$

### Discontinuïtat de salt

Si:

$$
\\lim_{x\\to a^-}f(x)
\\neq
\\lim_{x\\to a^+}f(x)
$$

aleshores:

$$
\\boxed{\\text{Discontinuïtat de salt}}
$$

### Discontinuïtat infinita

Si un o tots dos límits laterals són infinits:

$$
\\lim_{x\\to a^\\pm}f(x)=\\pm\\infty
$$

hi ha una discontinuïtat infinita.

$$
\\boxed{\\text{Discontinuïtat infinita}}
$$

## Continuïtat en un interval

Una funció definida a trossos és contínua en un interval si:

1. Cada part és contínua en el seu propi interval.
2. La funció és contínua en tots els punts de frontera.

Per exemple, si:

$$
f(x)=
\\begin{cases}
f_1(x) & x<a\\\\
f_2(x) & a\\leq x<b\\\\
f_3(x) & x\\geq b
\\end{cases}
$$

cal comprovar:

$$
\\boxed{\\text{continuïtat en }x=a\\text{ i }x=b}
$$

a més de la continuïtat de $f_1$, $f_2$ i $f_3$ en els seus respectius intervals.

## Interpretació gràfica

En un punt de frontera $x=a$, la continuïtat significa que la gràfica s'aproxima al mateix punt des dels dos costats i que la funció realment pren aquest valor.

No hi ha d'haver:

- Un forat.
- Un salt.
- Una asímptota vertical.
- Una diferència entre el límit i el valor de la funció.

Per tant:

$$
\\boxed{
\\text{Contínua}
\\iff
\\text{no hi ha cap ruptura en el punt de frontera}
}
$$

:::function-graph{expression="x+1" restriction="-4<=x<2"}
:::

## Exemple complet

Considerem:

$$
f(x)=
\\begin{cases}
x^2 & x<1\\\\
ax+2 & x\\geq1
\\end{cases}
$$

Volem trobar $a$ perquè $f$ sigui contínua en $x=1$.

El límit per l'esquerra és:

$$
\\lim_{x\\to1^-}f(x)=1^2=1
$$

El límit per la dreta és:

$$
\\lim_{x\\to1^+}f(x)=a+2
$$

El valor de la funció és:

$$
f(1)=a+2
$$

Perquè hi hagi continuïtat:

$$
1=a+2
$$

Per tant:

$$
\\boxed{a=-1}
$$

La funció resultant és:

$$
f(x)=
\\begin{cases}
x^2 & x<1\\\\
-x+2 & x\\geq1
\\end{cases}
$$

i:

$$
\\boxed{
\\lim_{x\\to1^-}f(x)
=
\\lim_{x\\to1^+}f(x)
=
f(1)=1
}
$$

## Procediment

Per estudiar la continuïtat d'una funció definida a trossos:

1. Identifica tots els punts de frontera.
2. Comprova si cada part és contínua.
3. Calcula el límit per l'esquerra a cada frontera.
4. Calcula el límit per la dreta.
5. Calcula el valor de la funció.
6. Compara els tres valors.
7. Si cal, classifica la discontinuïtat.
8. Si hi ha un paràmetre desconegut, resol l'equació de continuïtat.

La condició fonamental és:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$
`,s=`# Continuity of Piecewise Functions

A **piecewise function** is a function defined by different expressions on different parts of its domain.

For example:

$$
f(x)=
\\begin{cases}
x+1 & x<2\\\\
x^2-1 & x\\geq2
\\end{cases}
$$

When studying continuity, the most important points are the **boundaries between the different pieces**.

## Continuity at a Point

A function $f$ is continuous at $x=a$ if:

$$
\\boxed{
\\lim_{x\\to a}f(x)=f(a)
}
$$

For a piecewise function, this requires checking the behavior from both sides.

We need:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$

If any of these values is different, the function is not continuous at $x=a$.

## Boundary Points

Consider:

$$
f(x)=
\\begin{cases}
f_1(x) & x<a\\\\
f_2(x) & x\\geq a
\\end{cases}
$$

To determine whether $f$ is continuous at $x=a$, calculate:

$$
\\lim_{x\\to a^-}f_1(x)
$$

$$
\\lim_{x\\to a^+}f_2(x)
$$

and the actual value:

$$
f(a)=f_2(a)
$$

Continuity requires:

$$
\\boxed{
\\lim_{x\\to a^-}f_1(x)
=
\\lim_{x\\to a^+}f_2(x)
=
f_2(a)
}
$$

## Example

Consider:

$$
f(x)=
\\begin{cases}
x+1 & x<2\\\\
x^2-1 & x\\geq2
\\end{cases}
$$

We study continuity at $x=2$.

### Left-hand limit

For $x<2$:

$$
f(x)=x+1
$$

Therefore:

$$
\\lim_{x\\to2^-}f(x)=2+1=3
$$

### Right-hand limit

For $x\\geq2$:

$$
f(x)=x^2-1
$$

Therefore:

$$
\\lim_{x\\to2^+}f(x)=2^2-1=3
$$

### Function value

Since the second piece contains $x=2$:

$$
f(2)=2^2-1=3
$$

Thus:

$$
\\boxed{
\\lim_{x\\to2^-}f(x)
=
\\lim_{x\\to2^+}f(x)
=
f(2)=3
}
$$

The function is continuous at $x=2$.

## Continuity Conditions for a Piecewise Function

For:

$$
f(x)=
\\begin{cases}
f_1(x) & x<a\\\\
f_2(x) & x\\geq a
\\end{cases}
$$

continuity at $x=a$ requires:

### 1. Left-hand limit

$$
L_-=\\lim_{x\\to a^-}f_1(x)
$$

### 2. Right-hand limit

$$
L_+=\\lim_{x\\to a^+}f_2(x)
$$

### 3. Function value

$$
f(a)=f_2(a)
$$

Then:

$$
\\boxed{
L_-=L_+=f(a)
}
$$

## Finding an Unknown Parameter

Piecewise functions often contain an unknown parameter that must be chosen so that the function is continuous.

Consider:

$$
f(x)=
\\begin{cases}
x^2+1 & x<2\\\\
ax+3 & x\\geq2
\\end{cases}
$$

For continuity at $x=2$:

$$
\\lim_{x\\to2^-}f(x)
=
\\lim_{x\\to2^+}f(x)
$$

The left-hand limit is:

$$
2^2+1=5
$$

The right-hand limit is:

$$
2a+3
$$

Therefore:

$$
5=2a+3
$$

$$
2a=2
$$

$$
\\boxed{a=1}
$$

With $a=1$, the function is continuous at $x=2$.

## Multiple Boundary Points

A piecewise function can have several boundary points.

For example:

$$
f(x)=
\\begin{cases}
x+2 & x<1\\\\
x^2 & 1\\leq x<3\\\\
2x-3 & x\\geq3
\\end{cases}
$$

The boundary points are:

$$
\\boxed{x=1,\\quad x=3}
$$

Both points must be checked independently.

### At $x=1$

$$
\\lim_{x\\to1^-}f(x)=1+2=3
$$

$$
\\lim_{x\\to1^+}f(x)=1^2=1
$$

Since:

$$
3\\neq1
$$

the function is not continuous at $x=1$.

$$
\\boxed{\\text{Discontinuity at }x=1}
$$

### At $x=3$

$$
\\lim_{x\\to3^-}f(x)=3^2=9
$$

$$
\\lim_{x\\to3^+}f(x)=2(3)-3=3
$$

Since:

$$
9\\neq3
$$

the function is not continuous at $x=3$.

$$
\\boxed{\\text{Discontinuity at }x=3}
$$

## Types of Discontinuity

Piecewise functions can produce several types of discontinuity.

### Removable Discontinuity

If the two one-sided limits are equal but the function value is different or undefined:

$$
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=L
$$

but:

$$
f(a)\\neq L
$$

then:

$$
\\boxed{\\text{Removable discontinuity}}
$$

### Jump Discontinuity

If:

$$
\\lim_{x\\to a^-}f(x)
\\neq
\\lim_{x\\to a^+}f(x)
$$

then:

$$
\\boxed{\\text{Jump discontinuity}}
$$

### Infinite Discontinuity

If one or both one-sided limits are infinite:

$$
\\lim_{x\\to a^\\pm}f(x)=\\pm\\infty
$$

then there is an infinite discontinuity.

$$
\\boxed{\\text{Infinite discontinuity}}
$$

## Continuity on an Interval

A piecewise function is continuous on an interval if:

1. Each individual piece is continuous on its own interval.
2. The function is continuous at every boundary point.

For example, if:

$$
f(x)=
\\begin{cases}
f_1(x) & x<a\\\\
f_2(x) & a\\leq x<b\\\\
f_3(x) & x\\geq b
\\end{cases}
$$

then we need to check:

$$
\\boxed{\\text{continuity at }x=a\\text{ and }x=b}
$$

in addition to the continuity of $f_1$, $f_2$, and $f_3$ on their respective intervals.

## Graphical Interpretation

At a boundary point $x=a$, continuity means that the graph approaches the same point from both sides and that the function actually takes that value.

Visually, there should be no:

- Hole.
- Jump.
- Vertical asymptote.
- Mismatch between the limit and the function value.

Therefore:

$$
\\boxed{
\\text{Continuous}
\\iff
\\text{no break at the boundary}
}
$$

:::function-graph{expression="x+1" restriction="-4<=x<2"}
:::

## Complete Example

Consider:

$$
f(x)=
\\begin{cases}
x^2 & x<1\\\\
ax+2 & x\\geq1
\\end{cases}
$$

Find $a$ so that $f$ is continuous at $x=1$.

The left-hand limit is:

$$
\\lim_{x\\to1^-}f(x)=1^2=1
$$

The right-hand limit is:

$$
\\lim_{x\\to1^+}f(x)=a+2
$$

The function value is:

$$
f(1)=a+2
$$

For continuity:

$$
1=a+2
$$

Therefore:

$$
\\boxed{a=-1}
$$

The resulting function is:

$$
f(x)=
\\begin{cases}
x^2 & x<1\\\\
-x+2 & x\\geq1
\\end{cases}
$$

and:

$$
\\boxed{
\\lim_{x\\to1^-}f(x)
=
\\lim_{x\\to1^+}f(x)
=
f(1)=1
}
$$

## Procedure

To study the continuity of a piecewise function:

1. Identify every boundary point.
2. Check whether each individual piece is continuous.
3. Calculate the left-hand limit at every boundary.
4. Calculate the right-hand limit.
5. Calculate the actual function value.
6. Compare the three values.
7. If necessary, classify the discontinuity.
8. If there is an unknown parameter, solve the continuity equation.

The fundamental condition is:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$
`;function c(){let{locale:c}=t();return e(i,{id:`continuity-piecewise-functions`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-Cuk8m7yK.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};