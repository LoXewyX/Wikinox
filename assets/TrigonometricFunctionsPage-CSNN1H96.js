const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-F7qGvVTE.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-CC0Uwr-v.js","assets/index-BUO5hoW9.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-CC0Uwr-v.js";import{t as i}from"./TopicPage-CxUbQKDL.js";var a=`# Funciones trigonométricas

Las **funciones trigonométricas** relacionan un ángulo con las proporciones entre los lados de un triángulo rectángulo.

Las tres funciones fundamentales son:

- **seno**: $\\sin(x)$
- **coseno**: $\\cos(x)$
- **tangente**: $\\tan(x)$

Estas funciones aparecen en geometría, física, ingeniería, señales, ondas y muchas otras áreas de las matemáticas.

## Seno, coseno y tangente

En un triángulo rectángulo, para un ángulo agudo $\\theta$:

$$
\\sin(\\theta)=\\frac{\\text{cateto opuesto}}{\\text{hipotenusa}}
$$

$$
\\cos(\\theta)=\\frac{\\text{cateto adyacente}}{\\text{hipotenusa}}
$$

$$
\\tan(\\theta)=\\frac{\\text{cateto opuesto}}{\\text{cateto adyacente}}
$$

Una forma habitual de recordar estas relaciones es **SOH-CAH-TOA**:

- **SOH**: seno = opuesto / hipotenusa
- **CAH**: coseno = adyacente / hipotenusa
- **TOA**: tangente = opuesto / adyacente

:::right-triangle-diagram{mode="trigonometry"}
:::

## La función seno

La función seno asigna a cada ángulo un número entre $-1$ y $1$.

$$
f(x)=\\sin(x)
$$

Su período es $2\\pi$:

$$
\\sin(x+2\\pi)=\\sin(x)
$$

Su gráfica es una onda periódica.

:::function-graph{expression="sin(x)" restriction="-2*pi<=x<=2*pi"}
:::

### Valores importantes

Algunos valores habituales son:

$$
\\sin(0)=0
$$

$$
\\sin\\left(\\frac{\\pi}{6}\\right)=\\frac12
$$

$$
\\sin\\left(\\frac{\\pi}{4}\\right)=\\frac{\\sqrt2}{2}
$$

$$
\\sin\\left(\\frac{\\pi}{3}\\right)=\\frac{\\sqrt3}{2}
$$

$$
\\sin\\left(\\frac{\\pi}{2}\\right)=1
$$

## La función coseno

La función coseno también toma valores entre $-1$ y $1$.

$$
f(x)=\\cos(x)
$$

Tiene el mismo período que el seno:

$$
\\cos(x+2\\pi)=\\cos(x)
$$

:::function-graph{expression="cos(x)" restriction="-2*pi<=x<=2*pi"}
:::

Algunos valores importantes son:

$$
\\cos(0)=1
$$

$$
\\cos\\left(\\frac{\\pi}{6}\\right)=\\frac{\\sqrt3}{2}
$$

$$
\\cos\\left(\\frac{\\pi}{4}\\right)=\\frac{\\sqrt2}{2}
$$

$$
\\cos\\left(\\frac{\\pi}{3}\\right)=\\frac12
$$

$$
\\cos\\left(\\frac{\\pi}{2}\\right)=0
$$

## La función tangente

La tangente se define como:

$$
\\tan(x)=\\frac{\\sin(x)}{\\cos(x)}
$$

Por tanto, no está definida cuando:

$$
\\cos(x)=0
$$

Esto ocurre en:

$$
x=\\frac{\\pi}{2}+k\\pi,
\\qquad k\\in\\mathbb Z
$$

La función tangente tiene período $\\pi$:

$$
\\tan(x+\\pi)=\\tan(x)
$$

:::function-graph{expression="tan(x)" restriction="-2*pi<=x<=2*pi"}
:::

A diferencia del seno y el coseno, la tangente puede tomar cualquier valor real.

## Relación entre seno y coseno

Una de las identidades trigonométricas fundamentales es:

$$
\\sin^2(x)+\\cos^2(x)=1
$$

Esta identidad se obtiene a partir del teorema de Pitágoras aplicado a la circunferencia unitaria.

También podemos despejar:

$$
\\sin^2(x)=1-\\cos^2(x)
$$

o:

$$
\\cos^2(x)=1-\\sin^2(x)
$$

## Relación entre tangente, seno y coseno

Como:

$$
\\tan(x)=\\frac{\\sin(x)}{\\cos(x)}
$$

podemos expresar la tangente utilizando las otras dos funciones.

Además:

$$
1+\\tan^2(x)=\\frac{1}{\\cos^2(x)}
$$

y:

$$
1+\\cot^2(x)=\\frac{1}{\\sin^2(x)}
$$

## Ángulos en grados y radianes

Los ángulos pueden expresarse en **grados** o en **radianes**.

Una vuelta completa equivale a:

$$
360^\\circ=2\\pi
$$

Por tanto:

$$
180^\\circ=\\pi
$$

$$
90^\\circ=\\frac{\\pi}{2}
$$

$$
60^\\circ=\\frac{\\pi}{3}
$$

$$
45^\\circ=\\frac{\\pi}{4}
$$

$$
30^\\circ=\\frac{\\pi}{6}
$$

La conversión de grados a radianes es:

$$
\\text{radianes}
=
\\text{grados}\\cdot\\frac{\\pi}{180}
$$

Por ejemplo:

$$
60^\\circ\\cdot\\frac{\\pi}{180}
=
\\frac{\\pi}{3}
$$

## Signos de las funciones

Los signos de las funciones trigonométricas dependen del cuadrante.

| Cuadrante | $\\sin$ | $\\cos$ | $\\tan$ |
| --------- | ------ | ------ | ------ |
| I         | +      | +      | +      |
| II        | +      | −      | −      |
| III       | −      | −      | +      |
| IV        | −      | +      | −      |

Esto permite determinar rápidamente el signo de una función cuando conocemos el cuadrante del ángulo.

## Valores de los ángulos notables

Los valores más utilizados pueden organizarse en la siguiente tabla:

| Ángulo     | Radianes        | $\\sin$             | $\\cos$             | $\\tan$             |
| ---------- | --------------- | ------------------ | ------------------ | ------------------ |
| $0^\\circ$  | $0$             | $0$                | $1$                | $0$                |
| $30^\\circ$ | $\\frac{\\pi}{6}$ | $\\frac12$          | $\\frac{\\sqrt3}{2}$ | $\\frac{\\sqrt3}{3}$ |
| $45^\\circ$ | $\\frac{\\pi}{4}$ | $\\frac{\\sqrt2}{2}$ | $\\frac{\\sqrt2}{2}$ | $1$                |
| $60^\\circ$ | $\\frac{\\pi}{3}$ | $\\frac{\\sqrt3}{2}$ | $\\frac12$          | $\\sqrt3$           |
| $90^\\circ$ | $\\frac{\\pi}{2}$ | $1$                | $0$                | no definida        |

## Transformaciones de las funciones trigonométricas

Una función seno general puede escribirse como:

$$
f(x)=A\\sin(Bx+C)+D
$$

Cada parámetro modifica una característica de la gráfica.

### Amplitud

El valor absoluto de $A$ determina la amplitud:

$$
\\text{amplitud}=|A|
$$

Por ejemplo:

$$
f(x)=3\\sin(x)
$$

tiene amplitud $3$.

:::function-graph{expression="3*sin(x)" restriction="-2*pi<=x<=2*pi"}
:::

### Período

Para:

$$
f(x)=\\sin(Bx)
$$

el período es:

$$
T=\\frac{2\\pi}{|B|}
$$

Por ejemplo:

$$
f(x)=\\sin(2x)
$$

tiene período:

$$
T=\\frac{2\\pi}{2}=\\pi
$$

:::function-graph{expression="sin(2*x)" restriction="-2*pi<=x<=2*pi"}
:::

### Desplazamiento vertical

En:

$$
f(x)=\\sin(x)+D
$$

el valor $D$ desplaza la gráfica verticalmente.

Por ejemplo:

$$
f(x)=\\sin(x)+2
$$

:::function-graph{expression="sin(x)+2" restriction="-2*pi<=x<=2*pi"}
:::

### Desplazamiento horizontal

En:

$$
f(x)=\\sin(x-C)
$$

el valor $C$ desplaza la función horizontalmente.

Por ejemplo:

$$
f(x)=\\sin\\left(x-\\frac{\\pi}{2}\\right)
$$

es una versión desplazada del seno.

## Funciones trigonométricas inversas

Las funciones inversas permiten recuperar un ángulo a partir de una razón trigonométrica.

Las principales son:

$$
\\arcsin(x)
$$

$$
\\arccos(x)
$$

$$
\\arctan(x)
$$

Por ejemplo:

$$
\\arcsin\\left(\\frac12\\right)=\\frac{\\pi}{6}
$$

porque:

$$
\\sin\\left(\\frac{\\pi}{6}\\right)=\\frac12
$$

Estas funciones son especialmente útiles para calcular ángulos en triángulos.

## Ejemplo

Supongamos que:

$$
\\sin(\\theta)=\\frac35
$$

Para encontrar $\\theta$ utilizamos la función inversa:

$$
\\theta=\\arcsin\\left(\\frac35\\right)
$$

Aproximadamente:

$$
\\theta\\approx36.87^\\circ
$$

Si trabajamos en radianes:

$$
\\theta\\approx0.644\\text{ rad}
$$

## Aplicaciones

Las funciones trigonométricas permiten modelizar fenómenos periódicos.

Por ejemplo:

- ondas de sonido;
- ondas electromagnéticas;
- movimiento oscilatorio;
- corriente alterna;
- rotación;
- vibraciones;
- movimiento de proyectiles;
- ciclos estacionales.

Un modelo sencillo para una magnitud periódica es:

$$
f(t)=A\\sin(Bt+C)+D
$$

donde:

- $A$ determina la amplitud;
- $B$ determina el período;
- $C$ determina el desplazamiento horizontal;
- $D$ determina el desplazamiento vertical.

## Resumen

Las funciones trigonométricas fundamentales son:

$$
\\sin(x),\\qquad\\cos(x),\\qquad\\tan(x)
$$

Sus relaciones principales son:

$$
\\tan(x)=\\frac{\\sin(x)}{\\cos(x)}
$$

y:

$$
\\sin^2(x)+\\cos^2(x)=1
$$

El seno y el coseno tienen período $2\\pi$, mientras que la tangente tiene período $\\pi$.

Las transformaciones de las funciones trigonométricas permiten modelizar ondas y otros fenómenos periódicos.
`,o=`# Dues equacions lineals amb dues incògnites

Un **sistema de dues equacions lineals amb dues incògnites** està format per dues equacions de primer grau que contenen dues variables, normalment $x$ i $y$.

La seva forma general és:

$$
\\begin{cases}
a_1x+b_1y=c_1\\\\
a_2x+b_2y=c_2
\\end{cases}
$$

Resoldre el sistema significa trobar els valors de $x$ i $y$ que satisfan **les dues equacions simultàniament**.

Per exemple:

$$
\\begin{cases}
x+y=7\\\\
x-y=1
\\end{cases}
$$

La solució és:

$$
\\boxed{x=4,\\qquad y=3}
$$

## Mètode de substitució

El mètode de substitució consisteix a aïllar una incògnita en una de les equacions i substituir-la en l'altra.

Considerem:

$$
\\begin{cases}
x+y=7\\\\
x-y=1
\\end{cases}
$$

Aïllem $y$ en la primera equació:

$$
y=7-x
$$

Substituïm en la segona:

$$
x-(7-x)=1
$$

Simplifiquem:

$$
2x-7=1
$$

$$
2x=8
$$

$$
x=4
$$

Ara substituïm $x=4$:

$$
y=7-4
$$

$$
y=3
$$

Per tant:

$$
\\boxed{(x,y)=(4,3)}
$$

## Mètode d'igualació

En el mètode d'igualació aïllem la mateixa incògnita en les dues equacions i després igualem les expressions obtingudes.

Per exemple:

$$
\\begin{cases}
2x+y=8\\\\
x-y=1
\\end{cases}
$$

Aïllem $y$:

$$
y=8-2x
$$

$$
y=x-1
$$

Com que totes dues expressions són iguals a $y$:

$$
8-2x=x-1
$$

Resolent:

$$
9=3x
$$

$$
x=3
$$

Substituïm:

$$
y=3-1=2
$$

La solució és:

$$
\\boxed{(x,y)=(3,2)}
$$

## Mètode de reducció

El mètode de reducció consisteix a sumar o restar les equacions per eliminar una de les incògnites.

Considerem:

$$
\\begin{cases}
2x+y=7\\\\
3x-y=8
\\end{cases}
$$

Sumem les dues equacions:

$$
(2x+y)+(3x-y)=7+8
$$

Els termes $y$ es cancel·len:

$$
5x=15
$$

Per tant:

$$
x=3
$$

Substituïm en la primera equació:

$$
2(3)+y=7
$$

$$
6+y=7
$$

$$
y=1
$$

La solució és:

$$
\\boxed{(x,y)=(3,1)}
$$

## Mètode gràfic

Cada equació lineal amb dues incògnites representa una recta.

Per exemple:

$$
\\begin{cases}
y=7-x\\\\
y=x-1
\\end{cases}
$$

La solució del sistema és el **punt d'intersecció de les dues rectes**.

::contentReference[oaicite:1]{index=1}

En aquest cas:

$$
\\boxed{(x,y)=(4,3)}
$$

## Tipus de solucions

Un sistema de dues equacions lineals amb dues incògnites pot tenir tres tipus de solució.

### Una solució

Les dues rectes es tallen en un únic punt.

$$
\\boxed{\\text{Una solució}}
$$

### Cap solució

Les dues rectes són paral·leles i no tenen cap punt en comú.

Per exemple:

$$
\\begin{cases}
y=2x+1\\\\
y=2x-3
\\end{cases}
$$

Les dues rectes tenen el mateix pendent però diferents ordenades a l'origen.

$$
\\boxed{\\text{Sense solució}}
$$

### Infinites solucions

Les dues equacions representen exactament la mateixa recta.

Per exemple:

$$
\\begin{cases}
x+y=5\\\\
2x+2y=10
\\end{cases}
$$

La segona equació és simplement el doble de la primera.

$$
\\boxed{\\text{Infinites solucions}}
$$

## Comprovació de la solució

Sempre podem comprovar una solució substituint els valors obtinguts en les dues equacions originals.

Per a:

$$
\\begin{cases}
x+y=7\\\\
x-y=1
\\end{cases}
$$

i la solució:

$$
x=4,\\qquad y=3
$$

Comprovem la primera equació:

$$
4+3=7
$$

I la segona:

$$
4-3=1
$$

Les dues equacions es compleixen, de manera que la solució és correcta.

## Estratègia per resoldre un sistema

1. Identifica les dues incògnites.
2. Decideix quin mètode és més senzill.
3. Elimina una de les incògnites.
4. Calcula l'altra incògnita.
5. Substitueix el resultat per trobar la segona incògnita.
6. Comprova els dos valors en les equacions originals.
`,s=`# Two linear equations with two unknowns

A **system of two linear equations with two unknowns** consists of two first-degree equations containing two variables, usually $x$ and $y$.

Its general form is:

$$
\\begin{cases}
a_1x+b_1y=c_1\\\\
a_2x+b_2y=c_2
\\end{cases}
$$

Solving the system means finding the values of $x$ and $y$ that satisfy **both equations simultaneously**.

For example:

$$
\\begin{cases}
x+y=7\\\\
x-y=1
\\end{cases}
$$

The solution is:

$$
\\boxed{x=4,\\qquad y=3}
$$

## Substitution method

The substitution method consists of isolating one unknown in one equation and substituting it into the other.

Consider:

$$
\\begin{cases}
x+y=7\\\\
x-y=1
\\end{cases}
$$

Isolate $y$ in the first equation:

$$
y=7-x
$$

Substitute into the second equation:

$$
x-(7-x)=1
$$

Simplify:

$$
2x-7=1
$$

$$
2x=8
$$

$$
x=4
$$

Now substitute $x=4$:

$$
y=7-4
$$

$$
y=3
$$

Therefore:

$$
\\boxed{(x,y)=(4,3)}
$$

## Equating method

The equating method consists of isolating the same unknown in both equations and then setting the resulting expressions equal.

For example:

$$
\\begin{cases}
2x+y=8\\\\
x-y=1
\\end{cases}
$$

Isolate $y$:

$$
y=8-2x
$$

$$
y=x-1
$$

Since both expressions are equal to $y$:

$$
8-2x=x-1
$$

Solving:

$$
9=3x
$$

$$
x=3
$$

Substitute:

$$
y=3-1=2
$$

The solution is:

$$
\\boxed{(x,y)=(3,2)}
$$

## Elimination method

The elimination method consists of adding or subtracting the equations to eliminate one of the unknowns.

Consider:

$$
\\begin{cases}
2x+y=7\\\\
3x-y=8
\\end{cases}
$$

Add the two equations:

$$
(2x+y)+(3x-y)=7+8
$$

The $y$ terms cancel:

$$
5x=15
$$

Therefore:

$$
x=3
$$

Substitute into the first equation:

$$
2(3)+y=7
$$

$$
6+y=7
$$

$$
y=1
$$

The solution is:

$$
\\boxed{(x,y)=(3,1)}
$$

## Graphical method

Each linear equation with two unknowns represents a line.

For example:

$$
\\begin{cases}
y=7-x\\\\
y=x-1
\\end{cases}
$$

The solution of the system is the **intersection point of the two lines**.

::contentReference[oaicite:2]{index=2}

In this case:

$$
\\boxed{(x,y)=(4,3)}
$$

## Types of solutions

A system of two linear equations with two unknowns can have three types of solutions.

### One solution

The two lines intersect at exactly one point.

$$
\\boxed{\\text{One solution}}
$$

### No solution

The two lines are parallel and have no point in common.

For example:

$$
\\begin{cases}
y=2x+1\\\\
y=2x-3
\\end{cases}
$$

The two lines have the same slope but different $y$-intercepts.

$$
\\boxed{\\text{No solution}}
$$

### Infinitely many solutions

Both equations represent exactly the same line.

For example:

$$
\\begin{cases}
x+y=5\\\\
2x+2y=10
\\end{cases}
$$

The second equation is simply twice the first one.

$$
\\boxed{\\text{Infinitely many solutions}}
$$

## Checking the solution

We can always check a solution by substituting the obtained values into both original equations.

For:

$$
\\begin{cases}
x+y=7\\\\
x-y=1
\\end{cases}
$$

and the solution:

$$
x=4,\\qquad y=3
$$

Check the first equation:

$$
4+3=7
$$

And the second:

$$
4-3=1
$$

Both equations are satisfied, so the solution is correct.

## Strategy for solving a system

1. Identify the two unknowns.
2. Choose the most convenient method.
3. Eliminate one of the unknowns.
4. Calculate the other unknown.
5. Substitute the result to find the second unknown.
6. Check both values in the original equations.
`;function c(){let{locale:c}=t();return e(i,{id:`trigonometric-functions`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-F7qGvVTE.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};