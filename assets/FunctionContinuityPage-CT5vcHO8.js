const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-ChTwH7hg.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-d08MTCHk.js","assets/index-BUO5hoW9.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-d08MTCHk.js";import{t as i}from"./TopicPage-BLzDn4N1.js";var a=`# Continuidad de una función

La **continuidad** describe si una función puede recorrerse sin saltos, huecos o interrupciones en un punto o en un intervalo.

Intuitivamente, una función es continua cuando su gráfica no presenta una ruptura.

## Continuidad en un punto

Una función $f(x)$ es continua en $x=a$ si se cumplen simultáneamente estas tres condiciones:

1. $f(a)$ está definida.
2. Existe el límite $\\lim_{x\\to a}f(x)$.
3. El límite coincide con el valor de la función:

$$
\\boxed{\\lim_{x\\to a}f(x)=f(a)}
$$

Por tanto, podemos resumir la condición de continuidad como:

$$
\\boxed{
f \\text{ es continua en } a
\\iff
\\lim_{x\\to a}f(x)=f(a)
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
\\lim_{x\\to2}(x^2+1)=5
$$

Como ambos valores coinciden:

$$
\\boxed{\\lim_{x\\to2}f(x)=f(2)=5}
$$

La función es continua en $x=2$.

## Continuidad lateral

En funciones definidas por partes o en extremos de intervalos es necesario estudiar los límites laterales.

El límite por la izquierda es:

$$
\\lim_{x\\to a^-}f(x)
$$

y el límite por la derecha:

$$
\\lim_{x\\to a^+}f(x)
$$

Para que exista el límite:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
}
$$

Para que además exista continuidad:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$

## Continuidad en un intervalo

Una función es continua en un intervalo abierto $(a,b)$ si es continua en todos los puntos del intervalo.

$$
\\boxed{
f \\text{ continua en }(a,b)
\\iff
\\forall x\\in(a,b),\\
\\lim_{t\\to x}f(t)=f(x)
}
$$

En un intervalo cerrado $[a,b]$, además se requiere continuidad lateral en los extremos:

$$
\\lim_{x\\to a^+}f(x)=f(a)
$$

y

$$
\\lim_{x\\to b^-}f(x)=f(b)
$$

## Tipos de discontinuidad

Una función puede dejar de ser continua de diferentes maneras.

### Discontinuidad evitable

Existe el límite, pero la función no está definida en el punto o tiene un valor diferente.

Por ejemplo:

$$
f(x)=\\frac{x^2-1}{x-1}
$$

Factorizando:

$$
f(x)=\\frac{(x-1)(x+1)}{x-1}=x+1
\\qquad x\\neq1
$$

En $x=1$ la función original no está definida, pero:

$$
\\lim_{x\\to1}f(x)=2
$$

Existe un hueco en la gráfica.

$$
\\boxed{\\text{Discontinuidad evitable en }x=1}
$$

### Discontinuidad de salto

Los límites laterales existen, pero son diferentes:

$$
\\lim_{x\\to a^-}f(x)
\\neq
\\lim_{x\\to a^+}f(x)
$$

Por tanto, el límite no existe.

$$
\\boxed{\\text{Discontinuidad de salto}}
$$

### Discontinuidad infinita

La función crece sin límite al aproximarse al punto:

$$
\\lim_{x\\to a}f(x)=\\pm\\infty
$$

Normalmente aparece una asíntota vertical.

$$
\\boxed{\\text{Discontinuidad infinita}}
$$

### Discontinuidad oscilatoria

La función oscila cada vez más rápidamente y el límite no existe.

Un ejemplo típico es:

$$
f(x)=\\sin\\left(\\frac{1}{x}\\right)
$$

cuando $x\\to0$.

$$
\\boxed{
\\lim_{x\\to0}\\sin\\left(\\frac{1}{x}\\right)
\\text{ no existe}
}
$$

## Continuidad de funciones habituales

Muchas funciones conocidas son continuas en todo su dominio.

### Polinomios

Todo polinomio es continuo en $\\mathbb{R}$:

$$
\\boxed{
p(x)\\text{ polinomio}
\\Rightarrow
p\\text{ es continua en }\\mathbb{R}
}
$$

### Funciones racionales

Una función racional

$$
f(x)=\\frac{p(x)}{q(x)}
$$

es continua donde $q(x)\\neq0$.

$$
\\boxed{
f(x)=\\frac{p(x)}{q(x)}
\\text{ es continua donde }q(x)\\neq0
}
$$

### Funciones exponenciales

$$
f(x)=a^x
\\qquad a>0
$$

es continua en todo $\\mathbb{R}$.

### Funciones logarítmicas

$$
f(x)=\\log_a(x)
\\qquad a>0,\\ a\\neq1
$$

es continua en su dominio:

$$
\\boxed{x>0}
$$

### Funciones trigonométricas

$\\sin(x)$ y $\\cos(x)$ son continuas en $\\mathbb{R}$.

La función $\\tan(x)$ es continua en todos los puntos donde está definida:

$$
\\boxed{
x\\neq\\frac{\\pi}{2}+k\\pi,
\\qquad k\\in\\mathbb{Z}
}
$$

## Continuidad de funciones definidas a trozos

Consideremos:

$$
f(x)=
\\begin{cases}
x+1 & x<2\\\\
5 & x=2\\\\
x^2-3 & x>2
\\end{cases}
$$

Para estudiar la continuidad en $x=2$, calculamos:

$$
\\lim_{x\\to2^-}f(x)=3
$$

$$
\\lim_{x\\to2^+}f(x)=1
$$

Como:

$$
3\\neq1
$$

el límite no existe y la función no es continua en $x=2$.

$$
\\boxed{\\text{f no es continua en }x=2}
$$

## Operaciones con funciones continuas

Si $f$ y $g$ son continuas en $a$, entonces también son continuas:

- $f+g$
- $f-g$
- $fg$
- $\\frac{f}{g}$, siempre que $g(a)\\neq0$
- composiciones $f\\circ g$, cuando están definidas

Por ejemplo:

$$
f(x)=x^2
$$

y

$$
g(x)=\\sin(x)
$$

son continuas, por lo que:

$$
h(x)=\\sin(x^2)
$$

también es continua en $\\mathbb{R}$.

## Teorema del valor intermedio

Si una función es continua en $[a,b]$, entonces toma todos los valores comprendidos entre $f(a)$ y $f(b)$.

Si:

$$
f(a)<L<f(b)
$$

entonces existe al menos un $c\\in(a,b)$ tal que:

$$
\\boxed{f(c)=L}
$$

Este resultado es especialmente útil para demostrar la existencia de soluciones.

### Aplicación a raíces

Si $f$ es continua en $[a,b]$ y:

$$
f(a)\\cdot f(b)<0
$$

entonces existe al menos un $c\\in(a,b)$ tal que:

$$
\\boxed{f(c)=0}
$$

Este resultado se conoce como una consecuencia del **teorema de Bolzano**.

## Cómo estudiar la continuidad

Para estudiar la continuidad de una función en $x=a$:

1. Comprueba que $f(a)$ está definida.
2. Calcula $\\lim_{x\\to a^-}f(x)$.
3. Calcula $\\lim_{x\\to a^+}f(x)$.
4. Comprueba que los límites laterales coinciden.
5. Compara el límite con $f(a)$.
6. Clasifica la discontinuidad si no es continua.

En resumen:

$$
\\boxed{
\\text{Continuidad en }a
\\iff
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::
`,o=`# Continuïtat d'una funció

La **continuïtat** descriu si una funció es pot recórrer sense salts, forats o interrupcions en un punt o en un interval.

Intuïtivament, una funció és contínua quan la seva gràfica no presenta cap ruptura.

## Continuïtat en un punt

Una funció $f(x)$ és contínua en $x=a$ si es compleixen simultàniament aquestes tres condicions:

1. $f(a)$ està definida.
2. Existeix el límit $\\lim_{x\\to a}f(x)$.
3. El límit coincideix amb el valor de la funció:

$$
\\boxed{\\lim_{x\\to a}f(x)=f(a)}
$$

Per tant:

$$
\\boxed{
f \\text{ és contínua en }a
\\iff
\\lim_{x\\to a}f(x)=f(a)
}
$$

## Exemple

Considerem:

$$
f(x)=x^2+1
$$

En $x=2$:

$$
f(2)=2^2+1=5
$$

I:

$$
\\lim_{x\\to2}(x^2+1)=5
$$

Per tant:

$$
\\boxed{\\lim_{x\\to2}f(x)=f(2)=5}
$$

La funció és contínua en $x=2$.

## Continuïtat lateral

En funcions definides a trossos o als extrems d'un interval cal estudiar els límits laterals.

El límit per l'esquerra és:

$$
\\lim_{x\\to a^-}f(x)
$$

i el límit per la dreta és:

$$
\\lim_{x\\to a^+}f(x)
$$

Perquè existeixi el límit:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
}
$$

Perquè hi hagi continuïtat:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$

## Continuïtat en un interval

Una funció és contínua en un interval obert $(a,b)$ si és contínua en tots els punts de l'interval.

$$
\\boxed{
f \\text{ contínua en }(a,b)
\\iff
\\forall x\\in(a,b),\\
\\lim_{t\\to x}f(t)=f(x)
}
$$

En un interval tancat $[a,b]$ també cal continuïtat lateral als extrems:

$$
\\lim_{x\\to a^+}f(x)=f(a)
$$

i

$$
\\lim_{x\\to b^-}f(x)=f(b)
$$

## Tipus de discontinuïtat

### Discontinuïtat evitable

El límit existeix, però la funció no està definida en el punt o té un valor diferent.

Per exemple:

$$
f(x)=\\frac{x^2-1}{x-1}
$$

Factoritzant:

$$
f(x)=x+1
\\qquad x\\neq1
$$

En $x=1$ la funció original no està definida, però:

$$
\\lim_{x\\to1}f(x)=2
$$

Hi ha un forat a la gràfica.

$$
\\boxed{\\text{Discontinuïtat evitable en }x=1}
$$

### Discontinuïtat de salt

Els límits laterals existeixen però són diferents:

$$
\\lim_{x\\to a^-}f(x)
\\neq
\\lim_{x\\to a^+}f(x)
$$

Per tant, el límit no existeix.

$$
\\boxed{\\text{Discontinuïtat de salt}}
$$

### Discontinuïtat infinita

La funció creix sense límit quan s'aproxima al punt:

$$
\\lim_{x\\to a}f(x)=\\pm\\infty
$$

Normalment apareix una asímptota vertical.

$$
\\boxed{\\text{Discontinuïtat infinita}}
$$

### Discontinuïtat oscil·latòria

La funció oscil·la cada vegada més ràpidament i el límit no existeix.

Un exemple típic és:

$$
f(x)=\\sin\\left(\\frac{1}{x}\\right)
$$

quan $x\\to0$.

$$
\\boxed{
\\lim_{x\\to0}\\sin\\left(\\frac{1}{x}\\right)
\\text{ no existeix}
}
$$

## Continuïtat de funcions habituals

Moltes funcions conegudes són contínues en tot el seu domini.

### Polinomis

Tot polinomi és continu en $\\mathbb{R}$:

$$
\\boxed{
p(x)\\text{ polinomi}
\\Rightarrow
p\\text{ és continu en }\\mathbb{R}
}
$$

### Funcions racionals

Una funció racional

$$
f(x)=\\frac{p(x)}{q(x)}
$$

és contínua on $q(x)\\neq0$.

$$
\\boxed{
f(x)=\\frac{p(x)}{q(x)}
\\text{ és contínua on }q(x)\\neq0
}
$$

### Funcions exponencials

$$
f(x)=a^x
\\qquad a>0
$$

és contínua en tot $\\mathbb{R}$.

### Funcions logarítmiques

$$
f(x)=\\log_a(x)
\\qquad a>0,\\ a\\neq1
$$

és contínua en el seu domini:

$$
\\boxed{x>0}
$$

### Funcions trigonomètriques

$\\sin(x)$ i $\\cos(x)$ són contínues en $\\mathbb{R}$.

La funció $\\tan(x)$ és contínua en tots els punts on està definida:

$$
\\boxed{
x\\neq\\frac{\\pi}{2}+k\\pi,
\\qquad k\\in\\mathbb{Z}
}
$$

## Continuïtat de funcions definides a trossos

Considerem:

$$
f(x)=
\\begin{cases}
x+1 & x<2\\\\
5 & x=2\\\\
x^2-3 & x>2
\\end{cases}
$$

Per estudiar la continuïtat en $x=2$:

$$
\\lim_{x\\to2^-}f(x)=3
$$

$$
\\lim_{x\\to2^+}f(x)=1
$$

Com que:

$$
3\\neq1
$$

el límit no existeix i la funció no és contínua en $x=2$.

$$
\\boxed{\\text{f no és contínua en }x=2}
$$

## Operacions amb funcions contínues

Si $f$ i $g$ són contínues en $a$, també són contínues:

- $f+g$
- $f-g$
- $fg$
- $\\frac{f}{g}$, sempre que $g(a)\\neq0$
- les composicions $f\\circ g$, quan estan definides

Per exemple:

$$
f(x)=x^2
$$

i

$$
g(x)=\\sin(x)
$$

són contínues, per tant:

$$
h(x)=\\sin(x^2)
$$

també és contínua en $\\mathbb{R}$.

## Teorema del valor intermedi

Si una funció és contínua en $[a,b]$, pren tots els valors compresos entre $f(a)$ i $f(b)$.

Si:

$$
f(a)<L<f(b)
$$

aleshores existeix almenys un $c\\in(a,b)$ tal que:

$$
\\boxed{f(c)=L}
$$

Aquest resultat és especialment útil per demostrar l'existència de solucions.

### Aplicació a les arrels

Si $f$ és contínua en $[a,b]$ i:

$$
f(a)\\cdot f(b)<0
$$

aleshores existeix almenys un $c\\in(a,b)$ tal que:

$$
\\boxed{f(c)=0}
$$

Aquest resultat es coneix com una conseqüència del **teorema de Bolzano**.

## Com estudiar la continuïtat

Per estudiar la continuïtat d'una funció en $x=a$:

1. Comprova que $f(a)$ està definida.
2. Calcula $\\lim_{x\\to a^-}f(x)$.
3. Calcula $\\lim_{x\\to a^+}f(x)$.
4. Comprova que els límits laterals coincideixen.
5. Compara el límit amb $f(a)$.
6. Classifica la discontinuïtat si no és contínua.

En resum:

$$
\\boxed{
\\text{Continuïtat en }a
\\iff
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::
`,s=`# Continuity of a Function

**Continuity** describes whether a function can be followed without jumps, holes, or interruptions at a point or over an interval.

Intuitively, a function is continuous when its graph has no break.

## Continuity at a Point

A function $f(x)$ is continuous at $x=a$ if all three of the following conditions hold:

1. $f(a)$ is defined.
2. $\\lim_{x\\to a}f(x)$ exists.
3. The limit equals the function value:

$$
\\boxed{\\lim_{x\\to a}f(x)=f(a)}
$$

Therefore:

$$
\\boxed{
f \\text{ is continuous at }a
\\iff
\\lim_{x\\to a}f(x)=f(a)
}
$$

## Example

Consider:

$$
f(x)=x^2+1
$$

At $x=2$:

$$
f(2)=2^2+1=5
$$

And:

$$
\\lim_{x\\to2}(x^2+1)=5
$$

Therefore:

$$
\\boxed{\\lim_{x\\to2}f(x)=f(2)=5}
$$

The function is continuous at $x=2$.

## One-Sided Continuity

For piecewise functions or endpoints of intervals, one-sided limits are important.

The left-hand limit is:

$$
\\lim_{x\\to a^-}f(x)
$$

and the right-hand limit is:

$$
\\lim_{x\\to a^+}f(x)
$$

For the limit to exist:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
}
$$

For continuity:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$

## Continuity on an Interval

A function is continuous on an open interval $(a,b)$ if it is continuous at every point in the interval.

$$
\\boxed{
f \\text{ continuous on }(a,b)
\\iff
\\forall x\\in(a,b),\\
\\lim_{t\\to x}f(t)=f(x)
}
$$

On a closed interval $[a,b]$, one-sided continuity is also required at the endpoints:

$$
\\lim_{x\\to a^+}f(x)=f(a)
$$

and

$$
\\lim_{x\\to b^-}f(x)=f(b)
$$

## Types of Discontinuity

### Removable Discontinuity

The limit exists, but the function is either undefined at the point or has a different value.

For example:

$$
f(x)=\\frac{x^2-1}{x-1}
$$

Factoring gives:

$$
f(x)=x+1
\\qquad x\\neq1
$$

At $x=1$, the original function is undefined, but:

$$
\\lim_{x\\to1}f(x)=2
$$

There is a hole in the graph.

$$
\\boxed{\\text{Removable discontinuity at }x=1}
$$

### Jump Discontinuity

The one-sided limits exist but are different:

$$
\\lim_{x\\to a^-}f(x)
\\neq
\\lim_{x\\to a^+}f(x)
$$

Therefore, the limit does not exist.

$$
\\boxed{\\text{Jump discontinuity}}
$$

### Infinite Discontinuity

The function grows without bound as it approaches the point:

$$
\\lim_{x\\to a}f(x)=\\pm\\infty
$$

A vertical asymptote usually occurs.

$$
\\boxed{\\text{Infinite discontinuity}}
$$

### Oscillatory Discontinuity

The function oscillates increasingly rapidly and the limit does not exist.

A typical example is:

$$
f(x)=\\sin\\left(\\frac{1}{x}\\right)
$$

as $x\\to0$.

$$
\\boxed{
\\lim_{x\\to0}\\sin\\left(\\frac{1}{x}\\right)
\\text{ does not exist}
}
$$

## Continuity of Common Functions

Many familiar functions are continuous throughout their domains.

### Polynomials

Every polynomial is continuous on $\\mathbb{R}$:

$$
\\boxed{
p(x)\\text{ polynomial}
\\Rightarrow
p\\text{ is continuous on }\\mathbb{R}
}
$$

### Rational Functions

A rational function

$$
f(x)=\\frac{p(x)}{q(x)}
$$

is continuous wherever $q(x)\\neq0$.

$$
\\boxed{
f(x)=\\frac{p(x)}{q(x)}
\\text{ is continuous wherever }q(x)\\neq0
}
$$

### Exponential Functions

$$
f(x)=a^x
\\qquad a>0
$$

is continuous on all of $\\mathbb{R}$.

### Logarithmic Functions

$$
f(x)=\\log_a(x)
\\qquad a>0,\\ a\\neq1
$$

is continuous on its domain:

$$
\\boxed{x>0}
$$

### Trigonometric Functions

$\\sin(x)$ and $\\cos(x)$ are continuous on $\\mathbb{R}$.

The function $\\tan(x)$ is continuous wherever it is defined:

$$
\\boxed{
x\\neq\\frac{\\pi}{2}+k\\pi,
\\qquad k\\in\\mathbb{Z}
}
$$

## Continuity of Piecewise Functions

Consider:

$$
f(x)=
\\begin{cases}
x+1 & x<2\\\\
5 & x=2\\\\
x^2-3 & x>2
\\end{cases}
$$

To study continuity at $x=2$:

$$
\\lim_{x\\to2^-}f(x)=3
$$

$$
\\lim_{x\\to2^+}f(x)=1
$$

Since:

$$
3\\neq1
$$

the limit does not exist, so the function is not continuous at $x=2$.

$$
\\boxed{\\text{f is not continuous at }x=2}
$$

## Operations with Continuous Functions

If $f$ and $g$ are continuous at $a$, then the following are also continuous:

- $f+g$
- $f-g$
- $fg$
- $\\frac{f}{g}$, provided that $g(a)\\neq0$
- compositions $f\\circ g$, when defined

For example:

$$
f(x)=x^2
$$

and

$$
g(x)=\\sin(x)
$$

are continuous, so:

$$
h(x)=\\sin(x^2)
$$

is also continuous on $\\mathbb{R}$.

## Intermediate Value Theorem

If a function is continuous on $[a,b]$, it takes every value between $f(a)$ and $f(b)$.

If:

$$
f(a)<L<f(b)
$$

then there exists at least one $c\\in(a,b)$ such that:

$$
\\boxed{f(c)=L}
$$

This result is particularly useful for proving that solutions exist.

### Application to Roots

If $f$ is continuous on $[a,b]$ and:

$$
f(a)\\cdot f(b)<0
$$

then there exists at least one $c\\in(a,b)$ such that:

$$
\\boxed{f(c)=0}
$$

This is known as a consequence of **Bolzano's theorem**.

## How to Study Continuity

To study the continuity of a function at $x=a$:

1. Check that $f(a)$ is defined.
2. Calculate $\\lim_{x\\to a^-}f(x)$.
3. Calculate $\\lim_{x\\to a^+}f(x)$.
4. Check that the one-sided limits are equal.
5. Compare the limit with $f(a)$.
6. Classify the discontinuity if the function is not continuous.

In summary:

$$
\\boxed{
\\text{Continuity at }a
\\iff
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
=
f(a)
}
$$

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::
`;function c(){let{locale:c}=t();return e(i,{id:`function-continuity`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-ChTwH7hg.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};