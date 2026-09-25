const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-DhRerF9Y.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-C1BT9wAk.js","assets/index-DBwiFk51.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-C1BT9wAk.js";import{t as i}from"./TopicPage-DZNFNl0A.js";var a=`# Análisis de una función

El **análisis de una función** consiste en estudiar sus principales propiedades para comprender y describir su comportamiento.

Los aspectos más importantes son el dominio, recorrido, ceros, signo, continuidad, límites, monotonía, extremos, concavidad, asíntotas y simetría.

## Dominio

El **dominio** de una función $f(x)$ es el conjunto de todos los valores de $x$ para los que la función está definida.

$$
\\boxed{D_f=\\{x\\in\\mathbb{R}:f(x)\\text{ está definida}\\}}
$$

Al determinar el dominio hay que comprobar:

- Divisiones entre cero.
- Raíces pares de números negativos.
- Logaritmos de números no positivos.
- Otras restricciones de la expresión.

Por ejemplo:

$$
f(x)=\\frac{1}{x-2}
$$

El denominador no puede ser cero:

$$
x-2\\neq0
$$

Por tanto:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{2\\}}
$$

## Recorrido

El **recorrido** de una función es el conjunto de valores que puede tomar $f(x)$.

$$
\\boxed{
R_f=\\{f(x):x\\in D_f\\}
}
$$

Por ejemplo:

$$
f(x)=x^2
$$

Como $x^2\\geq0$:

$$
\\boxed{R_f=[0,\\infty)}
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
\\boxed{x=-2,\\quad x=2}
$$

Las intersecciones son:

$$
(-2,0),\\qquad(2,0)
$$

## Intersección con el eje $y$

La intersección con el eje $y$ se obtiene haciendo $x=0$:

$$
\\boxed{y=f(0)}
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
\\boxed{(0,2)}
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
\\boxed{
\\lim_{x\\to a}f(x)=f(a)
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
\\boxed{
\\lim_{x\\to a}f(x)=L
}
$$

Los límites laterales son:

$$
\\lim_{x\\to a^-}f(x)
$$

y

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

También podemos estudiar el comportamiento en el infinito:

$$
\\lim_{x\\to\\infty}f(x)
$$

y

$$
\\lim_{x\\to-\\infty}f(x)
$$

## Monotonía

La monotonía indica si una función crece o decrece.

Una función es **creciente** si:

$$
x_1<x_2
\\Rightarrow
f(x_1)<f(x_2)
$$

Es **decreciente** si:

$$
x_1<x_2
\\Rightarrow
f(x_1)>f(x_2)
$$

Cuando la función es derivable:

$$
\\boxed{
f'(x)>0\\Rightarrow f\\text{ es creciente}
}
$$

$$
\\boxed{
f'(x)<0\\Rightarrow f\\text{ es decreciente}
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
+\\to-
$$

la función pasa de creciente a decreciente:

$$
\\boxed{\\text{máximo local}}
$$

Si cambia de:

$$
-\\to+
$$

pasa de decreciente a creciente:

$$
\\boxed{\\text{mínimo local}}
$$

## Concavidad

La concavidad describe cómo se curva la gráfica.

Si:

$$
f''(x)>0
$$

la función es cóncava hacia arriba:

$$
\\boxed{f''(x)>0\\Rightarrow\\text{cóncava hacia arriba}}
$$

Si:

$$
f''(x)<0
$$

es cóncava hacia abajo:

$$
\\boxed{f''(x)<0\\Rightarrow\\text{cóncava hacia abajo}}
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
\\boxed{
\\text{Punto de inflexión}
\\iff
\\text{cambia la concavidad}
}
$$

## Asíntotas

Una asíntota es una recta a la que la gráfica se aproxima.

### Asíntotas verticales

Existe una asíntota vertical en $x=a$ cuando:

$$
\\boxed{
\\lim_{x\\to a}f(x)=\\pm\\infty
}
$$

La asíntota es:

$$
\\boxed{x=a}
$$

### Asíntotas horizontales

Si:

$$
\\lim_{x\\to\\infty}f(x)=L
$$

entonces:

$$
\\boxed{y=L}
$$

es una asíntota horizontal.

También se puede estudiar el límite cuando $x\\to-\\infty$.

### Asíntotas oblicuas

Una asíntota oblicua tiene la forma:

$$
\\boxed{y=mx+n}
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
\\boxed{f(-x)=f(x)\\Rightarrow\\text{función par}}
$$

### Funciones impares

Una función es impar si:

$$
f(-x)=-f(x)
$$

Su gráfica es simétrica respecto del origen.

$$
\\boxed{f(-x)=-f(x)\\Rightarrow\\text{función impar}}
$$

## Comportamiento en el infinito

Los límites:

$$
\\lim_{x\\to\\infty}f(x)
$$

y

$$
\\lim_{x\\to-\\infty}f(x)
$$

describen el comportamiento de la función cuando $x$ toma valores muy grandes positivos o negativos.

Por ejemplo:

$$
f(x)=\\frac{1}{x}
$$

cumple:

$$
\\boxed{
\\lim_{x\\to\\infty}\\frac1x
=
\\lim_{x\\to-\\infty}\\frac1x
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
\\boxed{D_f=\\mathbb{R}}
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
\\boxed{x=-\\sqrt3,\\quad x=0,\\quad x=\\sqrt3}
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
\\boxed{x=-1,\\quad x=1}
$$

### Monotonía

El signo de $f'(x)$ indica:

- Creciente en $(-\\infty,-1)$.
- Decreciente en $(-1,1)$.
- Creciente en $(1,\\infty)$.

Por tanto:

$$
\\boxed{x=-1\\text{ es un máximo local}}
$$

y

$$
\\boxed{x=1\\text{ es un mínimo local}}
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
\\boxed{(0,0)\\text{ es un punto de inflexión}}
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
\\boxed{
\\text{dominio, recorrido, ceros, signo, continuidad, límites, monotonía, extremos, concavidad, asíntotas y simetría}
}
$$
`,o=`# Anàlisi d'una funció

L'**anàlisi d'una funció** consisteix a estudiar-ne les principals propietats per comprendre i descriure el seu comportament.

Els aspectes més importants són el domini, recorregut, zeros, signe, continuïtat, límits, monotonia, extrems, concavitat, asímptotes i simetria.

## Domini

El **domini** d'una funció $f(x)$ és el conjunt de tots els valors de $x$ per als quals la funció està definida.

$$
\\boxed{D_f=\\{x\\in\\mathbb{R}:f(x)\\text{ està definida}\\}}
$$

En determinar el domini cal comprovar:

- Divisions per zero.
- Arrels parelles de nombres negatius.
- Logaritmes de nombres no positius.
- Altres restriccions imposades per l'expressió.

Per exemple:

$$
f(x)=\\frac{1}{x-2}
$$

El denominador no pot ser zero:

$$
x-2\\neq0
$$

Per tant:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{2\\}}
$$

## Recorregut

El **recorregut** d'una funció és el conjunt de valors que pot prendre $f(x)$.

$$
\\boxed{
R_f=\\{f(x):x\\in D_f\\}
}
$$

Per exemple:

$$
f(x)=x^2
$$

Com que $x^2\\geq0$:

$$
\\boxed{R_f=[0,\\infty)}
$$

## Zeros i interseccions amb l'eix $x$

Els **zeros** d'una funció són els valors de $x$ que compleixen:

$$
f(x)=0
$$

Corresponen als punts on la gràfica talla l'eix $x$.

Per exemple:

$$
f(x)=x^2-4
$$

Aleshores:

$$
x^2-4=0
$$

$$
(x-2)(x+2)=0
$$

Per tant:

$$
\\boxed{x=-2,\\quad x=2}
$$

Les interseccions són:

$$
(-2,0),\\qquad(2,0)
$$

## Intersecció amb l'eix $y$

La intersecció amb l'eix $y$ s'obté fent $x=0$:

$$
\\boxed{y=f(0)}
$$

Per exemple:

$$
f(x)=x^2+3x+2
$$

$$
f(0)=2
$$

Per tant:

$$
\\boxed{(0,2)}
$$

## Signe d'una funció

Estudiar el **signe** permet determinar on la funció és positiva, negativa o zero.

$$
f(x)>0
$$

significa que la gràfica està per sobre de l'eix $x$.

$$
f(x)<0
$$

significa que està per sota de l'eix $x$.

Els zeros divideixen el domini en intervals on es pot estudiar el signe.

## Continuïtat

Una funció és contínua en $x=a$ quan:

$$
\\boxed{
\\lim_{x\\to a}f(x)=f(a)
}
$$

Una funció és contínua en un interval si és contínua en tots els seus punts.

Les discontinuïtats poden aparèixer per:

- Punts on la funció no està definida.
- Forats.
- Salts.
- Asímptotes verticals.

## Límits

Un límit descriu el valor al qual s'aproxima $f(x)$ quan $x$ s'aproxima a un valor determinat.

$$
\\boxed{
\\lim_{x\\to a}f(x)=L
}
$$

Els límits laterals són:

$$
\\lim_{x\\to a^-}f(x)
$$

i

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

També podem estudiar el comportament a l'infinit:

$$
\\lim_{x\\to\\infty}f(x)
$$

i

$$
\\lim_{x\\to-\\infty}f(x)
$$

## Monotonia

La monotonia indica si una funció creix o decreix.

Una funció és **creixent** si:

$$
x_1<x_2
\\Rightarrow
f(x_1)<f(x_2)
$$

És **decreixent** si:

$$
x_1<x_2
\\Rightarrow
f(x_1)>f(x_2)
$$

Quan la funció és derivable:

$$
\\boxed{
f'(x)>0\\Rightarrow f\\text{ és creixent}
}
$$

$$
\\boxed{
f'(x)<0\\Rightarrow f\\text{ és decreixent}
}
$$

## Punts crítics

Un **punt crític** apareix quan:

$$
f'(x)=0
$$

o quan $f'(x)$ no existeix.

Els punts crítics són importants perquè poden correspondre a màxims o mínims locals.

## Extrems locals

Un **màxim local** apareix quan la funció assoleix un valor més gran que els valors propers.

Un **mínim local** apareix quan assoleix un valor més petit que els valors propers.

Si la derivada canvia de:

$$
+\\to-
$$

la funció passa de creixent a decreixent:

$$
\\boxed{\\text{màxim local}}
$$

Si canvia de:

$$
-\\to+
$$

passa de decreixent a creixent:

$$
\\boxed{\\text{mínim local}}
$$

## Concavitat

La concavitat descriu com es corba la gràfica.

Si:

$$
f''(x)>0
$$

la funció és còncava cap amunt:

$$
\\boxed{f''(x)>0\\Rightarrow\\text{còncava cap amunt}}
$$

Si:

$$
f''(x)<0
$$

és còncava cap avall:

$$
\\boxed{f''(x)<0\\Rightarrow\\text{còncava cap avall}}
$$

## Punts d'inflexió

Un **punt d'inflexió** és un punt on canvia la concavitat.

Un possible punt d'inflexió es pot trobar resolent:

$$
f''(x)=0
$$

però aquesta condició per si sola no és suficient. La concavitat ha de canviar realment.

Per tant:

$$
\\boxed{
\\text{Punt d'inflexió}
\\iff
\\text{canvia la concavitat}
}
$$

## Asímptotes

Una asímptota és una recta a la qual la gràfica s'aproxima.

### Asímptotes verticals

Hi ha una asímptota vertical en $x=a$ quan:

$$
\\boxed{
\\lim_{x\\to a}f(x)=\\pm\\infty
}
$$

L'asímptota és:

$$
\\boxed{x=a}
$$

### Asímptotes horitzontals

Si:

$$
\\lim_{x\\to\\infty}f(x)=L
$$

aleshores:

$$
\\boxed{y=L}
$$

és una asímptota horitzontal.

També es pot estudiar el límit quan $x\\to-\\infty$.

### Asímptotes obliqües

Una asímptota obliqua té la forma:

$$
\\boxed{y=mx+n}
$$

i descriu el comportament lineal de la funció a l'infinit.

## Simetria

La simetria pot simplificar considerablement l'anàlisi.

### Funcions parelles

Una funció és parella si:

$$
f(-x)=f(x)
$$

La seva gràfica és simètrica respecte de l'eix $y$.

$$
\\boxed{f(-x)=f(x)\\Rightarrow\\text{funció parella}}
$$

### Funcions senars

Una funció és senar si:

$$
f(-x)=-f(x)
$$

La seva gràfica és simètrica respecte de l'origen.

$$
\\boxed{f(-x)=-f(x)\\Rightarrow\\text{funció senar}}
$$

## Comportament a l'infinit

Els límits:

$$
\\lim_{x\\to\\infty}f(x)
$$

i

$$
\\lim_{x\\to-\\infty}f(x)
$$

descriuen el comportament de la funció quan $x$ pren valors molt grans positius o negatius.

Per exemple:

$$
f(x)=\\frac{1}{x}
$$

compleix:

$$
\\boxed{
\\lim_{x\\to\\infty}\\frac1x
=
\\lim_{x\\to-\\infty}\\frac1x
=0
}
$$

Per tant, $y=0$ és una asímptota horitzontal.

## Exemple complet

Considerem:

$$
f(x)=x^3-3x
$$

### Domini

Com que és un polinomi:

$$
\\boxed{D_f=\\mathbb{R}}
$$

### Zeros

$$
x^3-3x=0
$$

$$
x(x^2-3)=0
$$

Per tant:

$$
\\boxed{x=-\\sqrt3,\\quad x=0,\\quad x=\\sqrt3}
$$

### Primera derivada

$$
f'(x)=3x^2-3
$$

Factoritzant:

$$
f'(x)=3(x-1)(x+1)
$$

Els punts crítics són:

$$
\\boxed{x=-1,\\quad x=1}
$$

### Monotonia

El signe de $f'(x)$ indica:

- Creixent a $(-\\infty,-1)$.
- Decreixent a $(-1,1)$.
- Creixent a $(1,\\infty)$.

Per tant:

$$
\\boxed{x=-1\\text{ és un màxim local}}
$$

i

$$
\\boxed{x=1\\text{ és un mínim local}}
$$

### Segona derivada

$$
f''(x)=6x
$$

Per tant:

- $f''(x)<0$ quan $x<0$.
- $f''(x)>0$ quan $x>0$.

La concavitat canvia en $x=0$:

$$
\\boxed{(0,0)\\text{ és un punt d'inflexió}}
$$

### Gràfica

:::function-graph{expression="x^3-3*x" restriction="-3<=x<=3" showWorkings=true}
:::

## Ordre recomanat per analitzar una funció

Una anàlisi sistemàtica pot seguir aquest ordre:

1. **Domini**
2. **Simetria**
3. **Zeros i interseccions**
4. **Signe**
5. **Continuïtat**
6. **Límits**
7. **Asímptotes**
8. **Primera derivada**
9. **Punts crítics**
10. **Monotonia**
11. **Extrems locals**
12. **Segona derivada**
13. **Concavitat**
14. **Punts d'inflexió**
15. **Comportament a l'infinit**
16. **Gràfica**

L'ordre exacte pot variar segons la funció.

## Resum

L'objectiu principal de l'anàlisi d'una funció és determinar com es comporta en tot el seu domini.

Les propietats fonamentals són:

$$
\\boxed{
\\text{domini, recorregut, zeros, signe, continuïtat, límits, monotonia, extrems, concavitat, asímptotes i simetria}
}
$$
`,s=`# Function Analysis

The **analysis of a function** consists of studying its main properties in order to understand and describe its behavior.

The most important aspects are the domain, range, zeros, sign, continuity, limits, monotonicity, extrema, concavity, asymptotes, and symmetry.

## Domain

The **domain** of a function $f(x)$ is the set of all values of $x$ for which the function is defined.

$$
\\boxed{D_f=\\{x\\in\\mathbb{R}:f(x)\\text{ is defined}\\}}
$$

When determining the domain, check for:

- Division by zero.
- Even roots of negative numbers.
- Logarithms of non-positive numbers.
- Other restrictions imposed by the expression.

For example:

$$
f(x)=\\frac{1}{x-2}
$$

The denominator cannot be zero:

$$
x-2\\neq0
$$

Therefore:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{2\\}}
$$

## Range

The **range** of a function is the set of values that $f(x)$ can take.

$$
\\boxed{
R_f=\\{f(x):x\\in D_f\\}
}
$$

The range can often be determined from the graph, algebraic manipulation, or the extrema of the function.

For example:

$$
f(x)=x^2
$$

Since $x^2\\geq0$:

$$
\\boxed{R_f=[0,\\infty)}
$$

## Zeros and $x$-intercepts

The **zeros** of a function are the values of $x$ for which:

$$
f(x)=0
$$

They correspond to the points where the graph intersects the $x$-axis.

$$
\\boxed{f(x)=0}
$$

For example:

$$
f(x)=x^2-4
$$

Then:

$$
x^2-4=0
$$

$$
(x-2)(x+2)=0
$$

Therefore:

$$
\\boxed{x=-2,\\quad x=2}
$$

The corresponding intercepts are:

$$
(-2,0),\\qquad(2,0)
$$

## $y$-intercept

The $y$-intercept is obtained by setting $x=0$:

$$
\\boxed{y=f(0)}
$$

For example:

$$
f(x)=x^2+3x+2
$$

$$
f(0)=2
$$

Therefore:

$$
\\boxed{(0,2)}
$$

## Sign of a Function

Studying the **sign** determines where the function is positive, negative, or zero.

$$
f(x)>0
$$

means that the graph lies above the $x$-axis.

$$
f(x)<0
$$

means that the graph lies below the $x$-axis.

The zeros divide the domain into intervals where the sign can be studied.

## Continuity

A function is continuous at $x=a$ when:

$$
\\boxed{
\\lim_{x\\to a}f(x)=f(a)
}
$$

A function is continuous on an interval if it is continuous at every point of that interval.

Typical causes of discontinuity include:

- Undefined points.
- Holes.
- Jump discontinuities.
- Vertical asymptotes.

## Limits

A limit describes the value that $f(x)$ approaches as $x$ approaches a particular value.

$$
\\boxed{
\\lim_{x\\to a}f(x)=L
}
$$

means that $f(x)$ approaches $L$ as $x$ approaches $a$.

One-sided limits are:

$$
\\lim_{x\\to a^-}f(x)
$$

and

$$
\\lim_{x\\to a^+}f(x)
$$

For the two-sided limit to exist:

$$
\\boxed{
\\lim_{x\\to a^-}f(x)
=
\\lim_{x\\to a^+}f(x)
}
$$

Limits can also be studied at infinity:

$$
\\lim_{x\\to\\infty}f(x)
$$

and

$$
\\lim_{x\\to-\\infty}f(x)
$$

## Monotonicity

Monotonicity describes whether a function increases or decreases.

A function is **increasing** on an interval if:

$$
x_1<x_2
\\Rightarrow
f(x_1)<f(x_2)
$$

It is **decreasing** if:

$$
x_1<x_2
\\Rightarrow
f(x_1)>f(x_2)
$$

When the function is differentiable, the derivative provides a useful criterion:

$$
\\boxed{
f'(x)>0\\Rightarrow f\\text{ is increasing}
}
$$

$$
\\boxed{
f'(x)<0\\Rightarrow f\\text{ is decreasing}
}
$$

## Critical Points

A **critical point** occurs at a point in the domain where:

$$
f'(x)=0
$$

or where $f'(x)$ does not exist.

Critical points are important because they may correspond to local maxima or minima.

## Local Extrema

A **local maximum** occurs when the function reaches a value greater than nearby values.

A **local minimum** occurs when it reaches a value smaller than nearby values.

A common way to identify extrema is to study changes in the sign of $f'(x)$.

If:

$$
f'(x):+\\to-
$$

the function changes from increasing to decreasing:

$$
\\boxed{\\text{local maximum}}
$$

If:

$$
f'(x):-\\to+
$$

the function changes from decreasing to increasing:

$$
\\boxed{\\text{local minimum}}
$$

## Concavity

Concavity describes how the graph bends.

If:

$$
f''(x)>0
$$

the function is concave upward.

$$
\\boxed{f''(x)>0\\Rightarrow\\text{concave upward}}
$$

If:

$$
f''(x)<0
$$

the function is concave downward.

$$
\\boxed{f''(x)<0\\Rightarrow\\text{concave downward}}
$$

## Inflection Points

An **inflection point** is a point where the concavity changes.

A possible inflection point occurs when:

$$
f''(x)=0
$$

but this condition alone is not sufficient. The concavity must actually change.

Therefore:

$$
\\boxed{
\\text{Inflection point}
\\iff
\\text{the concavity changes}
}
$$

## Asymptotes

An asymptote is a line that the graph approaches.

### Vertical asymptotes

A vertical asymptote occurs at $x=a$ when:

$$
\\boxed{
\\lim_{x\\to a}f(x)=\\pm\\infty
}
$$

The corresponding asymptote is:

$$
\\boxed{x=a}
$$

### Horizontal asymptotes

A horizontal asymptote describes the behavior of the function as $x$ tends to infinity.

If:

$$
\\lim_{x\\to\\infty}f(x)=L
$$

then:

$$
\\boxed{y=L}
$$

is a horizontal asymptote.

The same can be studied for $x\\to-\\infty$.

### Oblique asymptotes

An oblique asymptote has the form:

$$
\\boxed{y=mx+n}
$$

and describes linear behavior at infinity.

## Symmetry

Symmetry can simplify the analysis of a function.

### Even functions

A function is even if:

$$
f(-x)=f(x)
$$

Its graph is symmetric about the $y$-axis.

$$
\\boxed{f(-x)=f(x)\\Rightarrow\\text{even function}}
$$

### Odd functions

A function is odd if:

$$
f(-x)=-f(x)
$$

Its graph is symmetric about the origin.

$$
\\boxed{f(-x)=-f(x)\\Rightarrow\\text{odd function}}
$$

## Behavior at Infinity

The limits:

$$
\\lim_{x\\to\\infty}f(x)
$$

and

$$
\\lim_{x\\to-\\infty}f(x)
$$

describe the behavior of the function far to the right and left.

For example:

$$
f(x)=\\frac{1}{x}
$$

satisfies:

$$
\\boxed{
\\lim_{x\\to\\infty}\\frac1x
=
\\lim_{x\\to-\\infty}\\frac1x
=0
}
$$

Therefore, $y=0$ is a horizontal asymptote.

## Complete Example

Consider:

$$
f(x)=x^3-3x
$$

### Domain

Since this is a polynomial:

$$
\\boxed{D_f=\\mathbb{R}}
$$

### Zeros

$$
x^3-3x=0
$$

$$
x(x^2-3)=0
$$

Therefore:

$$
\\boxed{x=-\\sqrt3,\\quad x=0,\\quad x=\\sqrt3}
$$

### First derivative

$$
f'(x)=3x^2-3
$$

Factorizing:

$$
f'(x)=3(x-1)(x+1)
$$

Critical points:

$$
\\boxed{x=-1,\\quad x=1}
$$

### Monotonicity

The sign of $f'(x)$ gives:

- Increasing on $(-\\infty,-1)$.
- Decreasing on $(-1,1)$.
- Increasing on $(1,\\infty)$.

Therefore:

$$
\\boxed{x=-1\\text{ is a local maximum}}
$$

and

$$
\\boxed{x=1\\text{ is a local minimum}}
$$

### Second derivative

$$
f''(x)=6x
$$

Therefore:

- $f''(x)<0$ when $x<0$.
- $f''(x)>0$ when $x>0$.

The concavity changes at $x=0$:

$$
\\boxed{(0,0)\\text{ is an inflection point}}
$$

### Function graph

:::function-graph{expression="x^3-3*x" restriction="-3<=x<=3" showWorkings=true}
:::

## Recommended Order for Function Analysis

A systematic analysis can follow this order:

1. **Domain**
2. **Symmetry**
3. **Zeros and intercepts**
4. **Sign**
5. **Continuity**
6. **Limits**
7. **Asymptotes**
8. **First derivative**
9. **Critical points**
10. **Monotonicity**
11. **Local extrema**
12. **Second derivative**
13. **Concavity**
14. **Inflection points**
15. **Behavior at infinity**
16. **Graph**

The exact order can vary depending on the function.

## Summary

The main goal of function analysis is to determine how a function behaves over its entire domain.

The most important properties are:

$$
\\boxed{
\\text{domain, range, zeros, sign, continuity, limits, monotonicity, extrema, concavity, asymptotes and symmetry}
}
$$
`;function c(){let{locale:c}=t();return e(i,{id:`function-analysis`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-DhRerF9Y.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};