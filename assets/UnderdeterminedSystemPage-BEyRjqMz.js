const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-DhRerF9Y.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-C1BT9wAk.js","assets/index-DBwiFk51.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-C1BT9wAk.js";import{t as i}from"./TopicPage-DZNFNl0A.js";var a=`# Sistemas indeterminados

Un sistema de ecuaciones es **indeterminado** cuando tiene infinitas soluciones. Esto ocurre cuando las ecuaciones no proporcionan suficientes restricciones independientes para determinar un único valor para todas las incógnitas.

## 1. Definición

Consideremos un sistema lineal:

$$
A\\mathbf{x}=\\mathbf{b}
$$

Un sistema es indeterminado cuando tiene infinitas soluciones.

Por ejemplo:

$$
\\begin{cases}
x+y=5\\\\
2x+2y=10
\\end{cases}
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
\\qquad t\\in\\mathbb{R}
$$

## 2. Representación geométrica

En dos variables, cada ecuación lineal representa una recta.

Para el sistema

$$
\\begin{cases}
x+y=5\\\\
2x+2y=10
\\end{cases}
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
\\begin{cases}
x+y+z=6\\\\
2x+2y+2z=12
\\end{cases}
$$

La segunda ecuación es el doble de la primera.

Por tanto, solo existe una restricción independiente para tres incógnitas.

Podemos tomar dos variables como parámetros:

$$
y=s,\\qquad z=t
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
s,t\\in\\mathbb{R}
$$

## 4. Rango y número de incógnitas

Para un sistema lineal

$$
A\\mathbf{x}=\\mathbf{b}
$$

el número de soluciones está relacionado con el rango de la matriz de coeficientes $A$ y el número de incógnitas $n$.

Si el sistema es compatible y

$$
\\operatorname{rank}(A)<n
$$

entonces existen variables libres y, por tanto, infinitas soluciones.

El número de variables libres es

$$
n-\\operatorname{rank}(A)
$$

Por ejemplo, si un sistema tiene $5$ incógnitas y

$$
\\operatorname{rank}(A)=3
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
\\begin{cases}
x+y+z=4\\\\
2x+2y+2z=8
\\end{cases}
$$

La matriz aumentada es

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&4\\\\
2&2&2&8
\\end{array}
\\right]
$$

Aplicando

$$
R_2\\leftarrow R_2-2R_1
$$

obtenemos

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&4\\\\
0&0&0&0
\\end{array}
\\right]
$$

Solo queda una ecuación independiente:

$$
x+y+z=4
$$

Las variables $y$ y $z$ son libres.

Tomando

$$
y=s,\\qquad z=t
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

- si $\\operatorname{rank}(A)=n$, existe una única solución;
- si $\\operatorname{rank}(A)<n$, existen infinitas soluciones.

Si

$$
\\operatorname{rank}(A)\\neq\\operatorname{rank}(A^\\ast)
$$

donde $A^\\ast$ es la matriz aumentada, el sistema es incompatible.

## 7. Interpretación mediante variables libres

Las variables libres permiten expresar todas las soluciones mediante parámetros.

Por ejemplo:

$$
\\begin{cases}
x+2y-z=3\\\\
x+2y-z=3
\\end{cases}
$$

solo contiene una ecuación independiente.

Podemos elegir

$$
y=s,\\qquad z=t
$$

y obtener

$$
x=3-2s+t
$$

Por tanto,

$$
(x,y,z)=(3-2s+t,s,t)
$$

con $s,t\\in\\mathbb{R}$.

La solución no es un único punto, sino un conjunto de puntos.

## 8. Interpretación geométrica en tres dimensiones

Con tres incógnitas, una ecuación lineal representa normalmente un plano.

Si dos ecuaciones representan el mismo plano, su intersección contiene infinitos puntos.

Si tenemos:

$$
\\begin{cases}
x+y+z=3\\\\
2x+2y+2z=6
\\end{cases}
$$

ambas ecuaciones representan el mismo plano.

Por tanto, existen infinitas soluciones.

Si hay tres incógnitas y solo una ecuación independiente, normalmente quedan dos variables libres.

## 9. Sistema homogéneo

Un caso importante es el sistema homogéneo:

$$
A\\mathbf{x}=\\mathbf{0}
$$

Siempre tiene al menos la solución trivial:

$$
\\mathbf{x}=\\mathbf{0}
$$

Si

$$
\\operatorname{rank}(A)<n
$$

también existen infinitas soluciones no triviales.

Por ejemplo:

$$
\\begin{cases}
x+y+z=0\\\\
2x+2y+2z=0
\\end{cases}
$$

podemos tomar

$$
y=s,\\qquad z=t
$$

y obtener

$$
x=-s-t
$$

Por tanto:

$$
\\mathbf{x}
=
s
\\begin{pmatrix}
-1\\\\
1\\\\
0
\\end{pmatrix}
+
t
\\begin{pmatrix}
-1\\\\
0\\\\
1
\\end{pmatrix}
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
[0\\quad0\\quad\\cdots\\quad0\\mid c],
\\qquad c\\neq0
$$

indica que el sistema es incompatible.

Si no aparece ninguna contradicción y existen variables libres, el sistema es indeterminado.

## 11. Ejemplo completo

Consideremos:

$$
\\begin{cases}
x+y+z=6\\\\
2x+2y+2z=12\\\\
x-y+z=2
\\end{cases}
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
\\qquad t\\in\\mathbb{R}
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
\\operatorname{rank}(A)<n
$$

donde $n$ es el número de incógnitas.

Las ideas principales son:

- algunas ecuaciones pueden ser dependientes;
- las variables libres pueden elegirse como parámetros;
- las variables pivote dependen de las variables libres;
- el número de variables libres es $n-\\operatorname{rank}(A)$;
- un sistema indeterminado tiene infinitas soluciones;
- la eliminación de Gauss permite identificarlo sistemáticamente.

La forma paramétrica permite describir **todas** las soluciones del sistema, no solo encontrar una solución concreta.
`,o=`# Sistemes indeterminats

Un sistema d'equacions és **indeterminat** quan té infinites solucions. Això passa quan les equacions no proporcionen prou restriccions independents per determinar un únic valor per a totes les incògnites.

## 1. Definició

Considerem un sistema lineal:

$$
A\\mathbf{x}=\\mathbf{b}
$$

Un sistema és indeterminat quan té infinites solucions.

Per exemple:

$$
\\begin{cases}
x+y=5\\\\
2x+2y=10
\\end{cases}
$$

La segona equació és simplement el doble de la primera, de manera que totes dues representen la mateixa restricció.

El sistema es redueix a:

$$
x+y=5
$$

Per tant, podem escollir lliurement una de les variables.

Si

$$
y=t
$$

aleshores

$$
x=5-t
$$

i totes les solucions es poden escriure com

$$
(x,y)=(5-t,t),
\\qquad t\\in\\mathbb{R}
$$

## 2. Representació geomètrica

En dues variables, cada equació lineal representa una recta.

Per al sistema

$$
\\begin{cases}
x+y=5\\\\
2x+2y=10
\\end{cases}
$$

les dues equacions representen exactament la mateixa recta.

Per tant, tots els punts d'aquesta recta són solucions.

:::function-graph{expression="5-x" restriction="-5<=x<=10"}
:::

Un sistema determinat tindria un únic punt d'intersecció, mentre que un sistema incompatible no tindria cap punt d'intersecció.

## 3. Dependència entre equacions

La causa fonamental d'un sistema indeterminat és que les equacions no són totes independents.

Per exemple:

$$
\\begin{cases}
x+y+z=6\\\\
2x+2y+2z=12
\\end{cases}
$$

La segona equació és el doble de la primera.

Per tant, només existeix una restricció independent per a tres incògnites.

Podem prendre dues variables com a paràmetres:

$$
y=s,\\qquad z=t
$$

Aleshores:

$$
x=6-s-t
$$

i la solució general és

$$
(x,y,z)=(6-s-t,s,t)
$$

amb

$$
s,t\\in\\mathbb{R}
$$

## 4. Rang i nombre d'incògnites

Per a un sistema lineal

$$
A\\mathbf{x}=\\mathbf{b}
$$

el nombre de solucions està relacionat amb el rang de la matriu de coeficients $A$ i el nombre d'incògnites $n$.

Si el sistema és compatible i

$$
\\operatorname{rank}(A)<n
$$

aleshores existeixen variables lliures i, per tant, infinites solucions.

El nombre de variables lliures és

$$
n-\\operatorname{rank}(A)
$$

Per exemple, si un sistema té $5$ incògnites i

$$
\\operatorname{rank}(A)=3
$$

aleshores té

$$
5-3=2
$$

variables lliures.

## 5. Forma escalonada

L'eliminació de Gauss permet identificar fàcilment les variables lliures.

Considerem:

$$
\\begin{cases}
x+y+z=4\\\\
2x+2y+2z=8
\\end{cases}
$$

La matriu augmentada és

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&4\\\\
2&2&2&8
\\end{array}
\\right]
$$

Aplicant

$$
R_2\\leftarrow R_2-2R_1
$$

obtenim

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&4\\\\
0&0&0&0
\\end{array}
\\right]
$$

Només queda una equació independent:

$$
x+y+z=4
$$

Les variables $y$ i $z$ són lliures.

Prenent

$$
y=s,\\qquad z=t
$$

obtenim

$$
x=4-s-t
$$

## 6. Diferència entre sistema determinat, indeterminat i incompatible

Per a un sistema lineal es poden donar tres situacions principals:

| Tipus        | Nombre de solucions | Interpretació                     |
| ------------ | ------------------: | --------------------------------- |
| Determinat   |                   1 | Existeix una única solució        |
| Indeterminat |           Infinites | Existeixen variables lliures      |
| Incompatible |                   0 | Les equacions són contradictòries |

En termes del rang, per a un sistema compatible:

- si $\\operatorname{rank}(A)=n$, existeix una única solució;
- si $\\operatorname{rank}(A)<n$, existeixen infinites solucions.

Si

$$
\\operatorname{rank}(A)\\neq\\operatorname{rank}(A^\\ast)
$$

on $A^\\ast$ és la matriu augmentada, el sistema és incompatible.

## 7. Interpretació mitjançant variables lliures

Les variables lliures permeten expressar totes les solucions mitjançant paràmetres.

Per exemple:

$$
\\begin{cases}
x+2y-z=3\\\\
x+2y-z=3
\\end{cases}
$$

només conté una equació independent.

Podem escollir

$$
y=s,\\qquad z=t
$$

i obtenir

$$
x=3-2s+t
$$

Per tant,

$$
(x,y,z)=(3-2s+t,s,t)
$$

amb $s,t\\in\\mathbb{R}$.

La solució no és un únic punt, sinó un conjunt de punts.

## 8. Interpretació geomètrica en tres dimensions

Amb tres incògnites, una equació lineal representa normalment un pla.

Si dues equacions representen el mateix pla, la seva intersecció conté infinits punts.

Si tenim:

$$
\\begin{cases}
x+y+z=3\\\\
2x+2y+2z=6
\\end{cases}
$$

ambdues equacions representen el mateix pla.

Per tant, existeixen infinites solucions.

Si hi ha tres incògnites i només una equació independent, normalment queden dues variables lliures.

## 9. Sistema homogeni

Un cas important és el sistema homogeni:

$$
A\\mathbf{x}=\\mathbf{0}
$$

Sempre té almenys la solució trivial:

$$
\\mathbf{x}=\\mathbf{0}
$$

Si

$$
\\operatorname{rank}(A)<n
$$

també existeixen infinites solucions no trivials.

Per exemple:

$$
\\begin{cases}
x+y+z=0\\\\
2x+2y+2z=0
\\end{cases}
$$

podem prendre

$$
y=s,\\qquad z=t
$$

i obtenir

$$
x=-s-t
$$

Per tant:

$$
\\mathbf{x}
=
s
\\begin{pmatrix}
-1\\\\
1\\\\
0
\\end{pmatrix}
+
t
\\begin{pmatrix}
-1\\\\
0\\\\
1
\\end{pmatrix}
$$

Això mostra que les solucions formen un subespai vectorial.

## 10. Com identificar un sistema indeterminat

Una estratègia pràctica és:

1. Escriure la matriu augmentada.
2. Aplicar l'eliminació de Gauss.
3. Obtenir la forma escalonada.
4. Identificar les variables pivot.
5. Identificar les variables lliures.
6. Comprovar que no apareix cap contradicció.
7. Expressar les variables pivot en funció de les variables lliures.

Una fila de la forma

$$
[0\\quad0\\quad\\cdots\\quad0\\mid c],
\\qquad c\\neq0
$$

indica que el sistema és incompatible.

Si no apareix cap contradicció i existeixen variables lliures, el sistema és indeterminat.

## 11. Exemple complet

Considerem:

$$
\\begin{cases}
x+y+z=6\\\\
2x+2y+2z=12\\\\
x-y+z=2
\\end{cases}
$$

La segona equació és dependent de la primera.

Restant la primera equació de la tercera:

$$
(x-y+z)-(x+y+z)=2-6
$$

obtenim:

$$
-2y=-4
$$

per tant,

$$
y=2
$$

Substituint en la primera equació:

$$
x+2+z=6
$$

i aleshores:

$$
x+z=4
$$

Podem prendre

$$
z=t
$$

i obtenir

$$
x=4-t
$$

La solució general és:

$$
(x,y,z)=(4-t,2,t),
\\qquad t\\in\\mathbb{R}
$$

Existeix una variable lliure, $z$, per tant hi ha infinites solucions.

## 12. Sistemes sobredeterminats i subdeterminats

És important distingir entre el nombre d'equacions i el nombre d'incògnites.

Un sistema amb menys equacions que incògnites s'anomena **subdeterminat**. Pot tenir infinites solucions, però no necessàriament: també pot ser incompatible.

Un sistema amb més equacions que incògnites s'anomena **sobredeterminat**. Pot tenir una solució, cap solució o, en casos especials, infinites solucions.

Per tant, tenir menys equacions que incògnites no és suficient per concloure que un sistema és indeterminat.

## Resum

Un sistema lineal és indeterminat quan és compatible i té variables lliures.

La condició fonamental és:

$$
\\operatorname{rank}(A)<n
$$

on $n$ és el nombre d'incògnites.

Les idees principals són:

- algunes equacions poden ser dependents;
- les variables lliures es poden escollir com a paràmetres;
- les variables pivot depenen de les variables lliures;
- el nombre de variables lliures és $n-\\operatorname{rank}(A)$;
- un sistema indeterminat té infinites solucions;
- l'eliminació de Gauss permet identificar-lo sistemàticament.

La forma paramètrica permet descriure **totes** les solucions del sistema, no només trobar-ne una de concreta.
`,s=`# Underdetermined Systems

A system of equations is **underdetermined** when it does not provide enough independent constraints to determine a unique solution. In a compatible linear system, this results in infinitely many solutions.

## 1. Definition

Consider a linear system:

$$
A\\mathbf{x}=\\mathbf{b}
$$

A system is indeterminate when it has infinitely many solutions.

For example:

$$
\\begin{cases}
x+y=5\\\\
2x+2y=10
\\end{cases}
$$

The second equation is simply twice the first one, so both equations represent the same constraint.

The system therefore reduces to:

$$
x+y=5
$$

One variable can be chosen freely.

If

$$
y=t
$$

then

$$
x=5-t
$$

and all solutions can be written as

$$
(x,y)=(5-t,t),
\\qquad t\\in\\mathbb{R}
$$

## 2. Geometric interpretation

In two variables, each linear equation represents a line.

For the system

$$
\\begin{cases}
x+y=5\\\\
2x+2y=10
\\end{cases}
$$

both equations represent exactly the same line.

Therefore, every point on that line is a solution.

:::function-graph{expression="5-x" restriction="-5<=x<=10"}
:::

A determined system has a unique intersection point, while an inconsistent system has no intersection.

## 3. Dependence between equations

The fundamental cause of an indeterminate system is that its equations are not all independent.

For example:

$$
\\begin{cases}
x+y+z=6\\\\
2x+2y+2z=12
\\end{cases}
$$

The second equation is twice the first one.

Therefore, there is only one independent constraint for three unknowns.

We can choose two variables as parameters:

$$
y=s,\\qquad z=t
$$

Then:

$$
x=6-s-t
$$

and the general solution is

$$
(x,y,z)=(6-s-t,s,t)
$$

with

$$
s,t\\in\\mathbb{R}
$$

## 4. Rank and number of unknowns

For a linear system

$$
A\\mathbf{x}=\\mathbf{b}
$$

the number of solutions is related to the rank of the coefficient matrix $A$ and the number of unknowns $n$.

If the system is consistent and

$$
\\operatorname{rank}(A)<n
$$

then there are free variables and therefore infinitely many solutions.

The number of free variables is

$$
n-\\operatorname{rank}(A)
$$

For example, if a system has $5$ unknowns and

$$
\\operatorname{rank}(A)=3
$$

then it has

$$
5-3=2
$$

free variables.

## 5. Row-echelon form

Gaussian elimination makes it easy to identify free variables.

Consider:

$$
\\begin{cases}
x+y+z=4\\\\
2x+2y+2z=8
\\end{cases}
$$

The augmented matrix is

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&4\\\\
2&2&2&8
\\end{array}
\\right]
$$

Applying

$$
R_2\\leftarrow R_2-2R_1
$$

gives

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&4\\\\
0&0&0&0
\\end{array}
\\right]
$$

Only one independent equation remains:

$$
x+y+z=4
$$

The variables $y$ and $z$ are free.

Taking

$$
y=s,\\qquad z=t
$$

gives

$$
x=4-s-t
$$

## 6. Determined, indeterminate, and inconsistent systems

A linear system can have three main types of outcome:

| Type          | Number of solutions | Interpretation                      |
| ------------- | ------------------: | ----------------------------------- |
| Determined    |                   1 | There is a unique solution          |
| Indeterminate |     Infinitely many | There are free variables            |
| Inconsistent  |                   0 | The equations contradict each other |

For a consistent system:

- if $\\operatorname{rank}(A)=n$, there is a unique solution;
- if $\\operatorname{rank}(A)<n$, there are infinitely many solutions.

If

$$
\\operatorname{rank}(A)\\neq\\operatorname{rank}(A^\\ast)
$$

where $A^\\ast$ is the augmented matrix, the system is inconsistent.

## 7. Interpretation using free variables

Free variables allow all solutions to be expressed using parameters.

For example:

$$
\\begin{cases}
x+2y-z=3\\\\
x+2y-z=3
\\end{cases}
$$

contains only one independent equation.

We can choose

$$
y=s,\\qquad z=t
$$

and obtain

$$
x=3-2s+t
$$

Therefore,

$$
(x,y,z)=(3-2s+t,s,t)
$$

with $s,t\\in\\mathbb{R}$.

The solution is not a single point but a set of points.

## 8. Geometric interpretation in three dimensions

With three unknowns, a linear equation normally represents a plane.

If two equations represent the same plane, their intersection contains infinitely many points.

Consider:

$$
\\begin{cases}
x+y+z=3\\\\
2x+2y+2z=6
\\end{cases}
$$

Both equations represent the same plane.

Therefore, there are infinitely many solutions.

If there are three unknowns and only one independent equation, there are normally two free variables.

## 9. Homogeneous systems

An important special case is the homogeneous system:

$$
A\\mathbf{x}=\\mathbf{0}
$$

It always has at least the trivial solution:

$$
\\mathbf{x}=\\mathbf{0}
$$

If

$$
\\operatorname{rank}(A)<n
$$

there are also infinitely many non-trivial solutions.

For example:

$$
\\begin{cases}
x+y+z=0\\\\
2x+2y+2z=0
\\end{cases}
$$

we can take

$$
y=s,\\qquad z=t
$$

and obtain

$$
x=-s-t
$$

Therefore:

$$
\\mathbf{x}
=
s
\\begin{pmatrix}
-1\\\\
1\\\\
0
\\end{pmatrix}
+
t
\\begin{pmatrix}
-1\\\\
0\\\\
1
\\end{pmatrix}
$$

This shows that the solutions form a vector subspace.

## 10. How to identify an indeterminate system

A practical strategy is:

1. Write the augmented matrix.
2. Apply Gaussian elimination.
3. Obtain row-echelon form.
4. Identify the pivot variables.
5. Identify the free variables.
6. Check that no contradiction appears.
7. Express the pivot variables in terms of the free variables.

A row of the form

$$
[0\\quad0\\quad\\cdots\\quad0\\mid c],
\\qquad c\\neq0
$$

indicates that the system is inconsistent.

If there is no contradiction and free variables remain, the system is indeterminate.

## 11. Complete example

Consider:

$$
\\begin{cases}
x+y+z=6\\\\
2x+2y+2z=12\\\\
x-y+z=2
\\end{cases}
$$

The second equation is dependent on the first.

Subtracting the first equation from the third gives:

$$
(x-y+z)-(x+y+z)=2-6
$$

so

$$
-2y=-4
$$

and therefore

$$
y=2
$$

Substituting into the first equation:

$$
x+2+z=6
$$

and therefore:

$$
x+z=4
$$

We can take

$$
z=t
$$

and obtain

$$
x=4-t
$$

The general solution is:

$$
(x,y,z)=(4-t,2,t),
\\qquad t\\in\\mathbb{R}
$$

There is one free variable, $z$, so there are infinitely many solutions.

## 12. Underdetermined and overdetermined systems

It is important to distinguish between the number of equations and the number of unknowns.

A system with fewer equations than unknowns is called **underdetermined**. It may have infinitely many solutions, but it can also be inconsistent.

A system with more equations than unknowns is called **overdetermined**. It may have one solution, no solution, or, in special cases, infinitely many solutions.

Therefore, having fewer equations than unknowns alone is not sufficient to conclude that a system has infinitely many solutions.

## Summary

A linear system is indeterminate when it is consistent and contains free variables.

The fundamental condition is:

$$
\\operatorname{rank}(A)<n
$$

where $n$ is the number of unknowns.

The main ideas are:

- some equations may be dependent;
- free variables can be chosen as parameters;
- pivot variables depend on the free variables;
- the number of free variables is $n-\\operatorname{rank}(A)$;
- an indeterminate system has infinitely many solutions;
- Gaussian elimination provides a systematic way to identify it.

Parametric form allows us to describe **all** solutions of the system rather than finding only one particular solution.
`;function c(){let{locale:c}=t();return e(i,{id:`underdetermined-system`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-DhRerF9Y.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};