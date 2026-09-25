const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-F7qGvVTE.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-CC0Uwr-v.js","assets/index-BUO5hoW9.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-CC0Uwr-v.js";import{t as i}from"./TopicPage-CxUbQKDL.js";var a=`# Rectas tangentes

La **recta tangente** a una función en un punto es la recta que describe la dirección instantánea de la función en ese punto.

Si $f$ es derivable en $x=a$, la pendiente de la recta tangente es la derivada:

$$
m=f'(a)
$$

La ecuación de la recta tangente en el punto $(a,f(a))$ es:

$$
\\boxed{y-f(a)=f'(a)(x-a)}
$$

o, equivalentemente,

$$
\\boxed{y=f'(a)(x-a)+f(a)}
$$

---

## Interpretación geométrica

Consideremos una función $f(x)$ y un punto

$$
P=(a,f(a)).
$$

La derivada $f'(a)$ representa la pendiente de la función exactamente en ese punto.

- Si $f'(a)>0$, la tangente asciende.
- Si $f'(a)<0$, la tangente desciende.
- Si $f'(a)=0$, la tangente es horizontal.
- Cuanto mayor es $|f'(a)|$, más inclinada es la tangente.

La recta tangente aproxima localmente a la función cerca de $x=a$.

---

## Cálculo de una recta tangente

Para encontrar la recta tangente a $f(x)$ en $x=a$, seguimos estos pasos:

1. Calcular $f(a)$.
2. Calcular la derivada $f'(x)$.
3. Evaluar la derivada en $a$ para obtener la pendiente.
4. Usar la ecuación punto-pendiente.

$$
\\boxed{m=f'(a)}
$$

$$
\\boxed{P=(a,f(a))}
$$

$$
\\boxed{y-f(a)=f'(a)(x-a)}
$$

### Ejemplo

Sea

$$
f(x)=x^2+2x
$$

y queremos la tangente en $x=1$.

Primero calculamos el punto:

$$
f(1)=1^2+2(1)=3
$$

Por tanto:

$$
P=(1,3)
$$

Derivamos:

$$
f'(x)=2x+2
$$

Evaluamos en $x=1$:

$$
f'(1)=4
$$

La pendiente es $m=4$.

Aplicamos la ecuación punto-pendiente:

$$
y-3=4(x-1)
$$

Simplificando:

$$
\\boxed{y=4x-1}
$$

---

## Tangente en un punto dado

A veces el punto se proporciona directamente, por ejemplo:

$$
P=(2,5)
$$

Si sabemos que $f(2)=5$, podemos utilizar directamente ese punto.

Si

$$
f'(2)=3
$$

entonces:

$$
y-5=3(x-2)
$$

y por tanto:

$$
\\boxed{y=3x-1}
$$

---

## Recta tangente mediante el límite

La derivada puede definirse como el límite de las pendientes de las rectas secantes:

$$
f'(a)=
\\lim_{h\\to0}
\\frac{f(a+h)-f(a)}{h}
$$

Por tanto, la pendiente de la tangente se obtiene haciendo que el segundo punto de la secante se aproxime al primero.

$$
\\boxed{
f'(a)=
\\lim_{x\\to a}
\\frac{f(x)-f(a)}{x-a}
}
$$

Esto explica por qué la derivada representa la pendiente instantánea.

---

## Recta secante y recta tangente

Una **recta secante** pasa por dos puntos de la función:

$$
(a,f(a)),\\qquad (b,f(b))
$$

Su pendiente es:

$$
m_{\\text{secante}}
=
\\frac{f(b)-f(a)}{b-a}
$$

Cuando $b$ se aproxima a $a$, la secante se aproxima a la tangente.

$$
\\boxed{
m_{\\text{tangente}}
=
\\lim_{b\\to a}
\\frac{f(b)-f(a)}{b-a}
=
f'(a)
}
$$

---

## Recta normal

La **recta normal** es perpendicular a la recta tangente.

Si la pendiente de la tangente es $m\\neq0$, la pendiente de la normal es:

$$
\\boxed{
m_n=-\\frac{1}{m}
}
$$

Por tanto:

$$
\\boxed{
m_n=-\\frac{1}{f'(a)}
}
$$

La ecuación de la normal es:

$$
\\boxed{
y-f(a)
=
-\\frac{1}{f'(a)}(x-a)
}
$$

### Ejemplo

Para

$$
f(x)=x^2
$$

en $x=1$:

$$
f(1)=1
$$

$$
f'(x)=2x
$$

$$
f'(1)=2
$$

La tangente es:

$$
y-1=2(x-1)
$$

$$
\\boxed{y=2x-1}
$$

La normal tiene pendiente:

$$
m_n=-\\frac12
$$

y por tanto:

$$
y-1=-\\frac12(x-1)
$$

$$
\\boxed{y=-\\frac12x+\\frac32}
$$

---

## Tangentes horizontales

Una tangente es horizontal cuando su pendiente es cero:

$$
f'(a)=0
$$

Por tanto, para encontrar los puntos donde la gráfica tiene tangente horizontal, resolvemos:

$$
\\boxed{f'(x)=0}
$$

Estos puntos son candidatos a máximos o mínimos locales, aunque no necesariamente lo son.

### Ejemplo

Sea:

$$
f(x)=x^3-3x
$$

Entonces:

$$
f'(x)=3x^2-3
$$

Buscamos:

$$
3x^2-3=0
$$

$$
x^2=1
$$

$$
x=\\pm1
$$

Los puntos correspondientes son:

$$
f(-1)=2
$$

$$
f(1)=-2
$$

Por tanto, hay tangentes horizontales en:

$$
\\boxed{(-1,2)}
$$

y

$$
\\boxed{(1,-2)}
$$

---

## Tangentes verticales

Una tangente vertical tiene dirección vertical y, por tanto, su pendiente no es finita.

En estos casos, la derivada puede tender a infinito:

$$
\\lim_{x\\to a}f'(x)=\\pm\\infty
$$

No puede escribirse como $y=mx+b$ porque una recta vertical tiene ecuación:

$$
\\boxed{x=a}
$$

Un ejemplo típico es:

$$
f(x)=\\sqrt[3]{x}
$$

En $x=0$ la función tiene una tangente vertical:

$$
\\boxed{x=0}
$$

---

## Aproximación lineal

La recta tangente también permite aproximar una función cerca de un punto.

La **aproximación lineal** de $f(x)$ alrededor de $x=a$ es:

$$
\\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

Esta expresión coincide con la ecuación de la recta tangente.

### Ejemplo

Para aproximar $\\sqrt{4.1}$ podemos utilizar:

$$
f(x)=\\sqrt{x}
$$

Elegimos $a=4$ porque $\\sqrt4=2$.

La derivada es:

$$
f'(x)=\\frac{1}{2\\sqrt{x}}
$$

Por tanto:

$$
f'(4)=\\frac14
$$

La aproximación lineal es:

$$
L(x)=2+\\frac14(x-4)
$$

Evaluando en $x=4.1$:

$$
L(4.1)=2+\\frac14(0.1)
$$

$$
\\boxed{\\sqrt{4.1}\\approx2.025}
$$

---

## Interpretación gráfica

La tangente y la función coinciden exactamente en el punto de tangencia:

$$
P=(a,f(a))
$$

Además, tienen la misma pendiente:

$$
\\boxed{f'(a)=m_{\\text{tangente}}}
$$

Cerca de $a$, la tangente puede proporcionar una buena aproximación de la función.

:::function-graph{expression="x^2" restriction="-3<=x<=3"}
:::

---

## Procedimiento general

Para encontrar la recta tangente de $f(x)$ en $x=a$:

1. Calcular $f(a)$.
2. Derivar $f(x)$.
3. Calcular $f'(a)$.
4. Identificar el punto $(a,f(a))$.
5. Aplicar:

$$
\\boxed{
y-f(a)=f'(a)(x-a)
}
$$

6. Simplificar la ecuación.

Si se necesita la normal:

$$
\\boxed{
m_n=-\\frac1{f'(a)}
}
$$

---

## Errores frecuentes

### Confundir $f(a)$ con $f'(a)$

Son cantidades diferentes:

$$
f(a)=\\text{coordenada }y
$$

$$
f'(a)=\\text{pendiente}
$$

### Usar $f'(x)$ como pendiente

La pendiente de la tangente en un punto concreto es:

$$
\\boxed{f'(a)}
$$

no $f'(x)$.

### Olvidar calcular el punto de tangencia

La pendiente por sí sola no determina una recta. También necesitamos:

$$
(a,f(a))
$$

### Confundir tangente y normal

Las pendientes de tangente y normal, cuando ambas son finitas, cumplen:

$$
m_t\\,m_n=-1
$$

---

## Resumen

La recta tangente a $f(x)$ en $x=a$ tiene:

- punto de tangencia: $(a,f(a))$;
- pendiente: $f'(a)$;
- ecuación:

$$
\\boxed{
y=f(a)+f'(a)(x-a)
}
$$

La aproximación lineal es exactamente esta misma expresión:

$$
\\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

La recta normal, cuando $f'(a)\\neq0$, tiene pendiente:

$$
\\boxed{
-\\frac1{f'(a)}
}
$$
`,o=`# Rectes tangents

La **recta tangent** a una funció en un punt és la recta que descriu la direcció instantània de la funció en aquest punt.

Si $f$ és derivable en $x=a$, el pendent de la recta tangent és la derivada:

$$
m=f'(a)
$$

L'equació de la recta tangent en el punt $(a,f(a))$ és:

$$
\\boxed{y-f(a)=f'(a)(x-a)}
$$

o, equivalentment,

$$
\\boxed{y=f'(a)(x-a)+f(a)}
$$

---

## Interpretació geomètrica

Considerem una funció $f(x)$ i un punt

$$
P=(a,f(a)).
$$

La derivada $f'(a)$ representa el pendent de la funció exactament en aquest punt.

- Si $f'(a)>0$, la tangent puja.
- Si $f'(a)<0$, la tangent baixa.
- Si $f'(a)=0$, la tangent és horitzontal.
- Com més gran és $|f'(a)|$, més inclinada és la tangent.

La recta tangent aproxima localment la funció prop de $x=a$.

---

## Càlcul d'una recta tangent

Per trobar la recta tangent a $f(x)$ en $x=a$:

1. Calcular $f(a)$.
2. Calcular la derivada $f'(x)$.
3. Avaluar la derivada en $a$ per obtenir el pendent.
4. Utilitzar l'equació punt-pendent.

$$
\\boxed{m=f'(a)}
$$

$$
\\boxed{P=(a,f(a))}
$$

$$
\\boxed{y-f(a)=f'(a)(x-a)}
$$

### Exemple

Sigui

$$
f(x)=x^2+2x
$$

i volem la tangent en $x=1$.

Primer calculem el punt:

$$
f(1)=1^2+2(1)=3
$$

Per tant:

$$
P=(1,3)
$$

Derivem:

$$
f'(x)=2x+2
$$

Avaluem en $x=1$:

$$
f'(1)=4
$$

El pendent és $m=4$.

Apliquem l'equació punt-pendent:

$$
y-3=4(x-1)
$$

Simplificant:

$$
\\boxed{y=4x-1}
$$

---

## Recta tangent mitjançant el límit

La derivada es pot definir com el límit dels pendents de les rectes secants:

$$
f'(a)=
\\lim_{h\\to0}
\\frac{f(a+h)-f(a)}{h}
$$

Per tant, el pendent de la tangent s'obté fent que el segon punt de la secant s'apropi al primer.

$$
\\boxed{
f'(a)=
\\lim_{x\\to a}
\\frac{f(x)-f(a)}{x-a}
}
$$

Això explica per què la derivada representa el pendent instantani.

---

## Recta secant i recta tangent

Una **recta secant** passa per dos punts de la funció:

$$
(a,f(a)),\\qquad (b,f(b))
$$

El seu pendent és:

$$
m_{\\text{secant}}
=
\\frac{f(b)-f(a)}{b-a}
$$

Quan $b$ s'aproxima a $a$, la secant s'aproxima a la tangent.

$$
\\boxed{
m_{\\text{tangent}}
=
\\lim_{b\\to a}
\\frac{f(b)-f(a)}{b-a}
=
f'(a)
}
$$

---

## Recta normal

La **recta normal** és perpendicular a la recta tangent.

Si el pendent de la tangent és $m\\neq0$, el pendent de la normal és:

$$
\\boxed{
m_n=-\\frac{1}{m}
}
$$

Per tant:

$$
\\boxed{
m_n=-\\frac{1}{f'(a)}
}
$$

L'equació de la normal és:

$$
\\boxed{
y-f(a)
=
-\\frac{1}{f'(a)}(x-a)
}
$$

### Exemple

Per a

$$
f(x)=x^2
$$

en $x=1$:

$$
f(1)=1
$$

$$
f'(x)=2x
$$

$$
f'(1)=2
$$

La tangent és:

$$
y-1=2(x-1)
$$

$$
\\boxed{y=2x-1}
$$

La normal té pendent:

$$
m_n=-\\frac12
$$

i, per tant:

$$
y-1=-\\frac12(x-1)
$$

$$
\\boxed{y=-\\frac12x+\\frac32}
$$

---

## Tangents horitzontals

Una tangent és horitzontal quan el seu pendent és zero:

$$
f'(a)=0
$$

Per trobar els punts on la gràfica té una tangent horitzontal, resolem:

$$
\\boxed{f'(x)=0}
$$

Aquests punts són candidats a màxims o mínims locals, encara que no necessàriament ho siguin.

### Exemple

Sigui:

$$
f(x)=x^3-3x
$$

Aleshores:

$$
f'(x)=3x^2-3
$$

Busquem:

$$
3x^2-3=0
$$

$$
x^2=1
$$

$$
x=\\pm1
$$

Els punts corresponents són:

$$
f(-1)=2
$$

$$
f(1)=-2
$$

Per tant, hi ha tangents horitzontals en:

$$
\\boxed{(-1,2)}
$$

i

$$
\\boxed{(1,-2)}
$$

---

## Tangents verticals

Una tangent vertical té direcció vertical i, per tant, el pendent no és finit.

En aquests casos, la derivada pot tendir a infinit:

$$
\\lim_{x\\to a}f'(x)=\\pm\\infty
$$

No es pot escriure com $y=mx+b$ perquè una recta vertical té equació:

$$
\\boxed{x=a}
$$

Un exemple típic és:

$$
f(x)=\\sqrt[3]{x}
$$

En $x=0$ la funció té una tangent vertical:

$$
\\boxed{x=0}
$$

---

## Aproximació lineal

La recta tangent també permet aproximar una funció prop d'un punt.

L'**aproximació lineal** de $f(x)$ al voltant de $x=a$ és:

$$
\\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

Aquesta expressió coincideix amb l'equació de la recta tangent.

### Exemple

Per aproximar $\\sqrt{4.1}$ podem utilitzar:

$$
f(x)=\\sqrt{x}
$$

Triem $a=4$ perquè $\\sqrt4=2$.

La derivada és:

$$
f'(x)=\\frac{1}{2\\sqrt{x}}
$$

Per tant:

$$
f'(4)=\\frac14
$$

L'aproximació lineal és:

$$
L(x)=2+\\frac14(x-4)
$$

Avaluant en $x=4.1$:

$$
L(4.1)=2+\\frac14(0.1)
$$

$$
\\boxed{\\sqrt{4.1}\\approx2.025}
$$

---

## Interpretació gràfica

La tangent i la funció coincideixen exactament en el punt de tangència:

$$
P=(a,f(a))
$$

A més, tenen el mateix pendent:

$$
\\boxed{f'(a)=m_{\\text{tangent}}}
$$

A prop de $a$, la tangent pot proporcionar una bona aproximació de la funció.

:::function-graph{expression="x^2" restriction="-3<=x<=3"}
:::

---

## Procediment general

Per trobar la recta tangent de $f(x)$ en $x=a$:

1. Calcular $f(a)$.
2. Derivar $f(x)$.
3. Calcular $f'(a)$.
4. Identificar el punt $(a,f(a))$.
5. Aplicar:

$$
\\boxed{
y-f(a)=f'(a)(x-a)
}
$$

6. Simplificar l'equació.

Si es necessita la normal:

$$
\\boxed{
m_n=-\\frac1{f'(a)}
}
$$

---

## Errors freqüents

### Confondre $f(a)$ amb $f'(a)$

Són quantitats diferents:

$$
f(a)=\\text{coordenada }y
$$

$$
f'(a)=\\text{pendent}
$$

### Utilitzar $f'(x)$ com a pendent

El pendent de la tangent en un punt concret és:

$$
\\boxed{f'(a)}
$$

no $f'(x)$.

### Oblidar calcular el punt de tangència

El pendent per si sol no determina una recta. També necessitem:

$$
(a,f(a))
$$

### Confondre tangent i normal

Els pendents de tangent i normal, quan tots dos són finits, compleixen:

$$
m_t\\,m_n=-1
$$

---

## Resum

La recta tangent a $f(x)$ en $x=a$ té:

- punt de tangència: $(a,f(a))$;
- pendent: $f'(a)$;
- equació:

$$
\\boxed{
y=f(a)+f'(a)(x-a)
}
$$

L'aproximació lineal és exactament aquesta mateixa expressió:

$$
\\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

La recta normal, quan $f'(a)\\neq0$, té pendent:

$$
\\boxed{
-\\frac1{f'(a)}
}
$$
`,s=`# Tangent Lines

A **tangent line** to a function at a point is the line that describes the instantaneous direction of the function at that point.

If $f$ is differentiable at $x=a$, the slope of the tangent line is the derivative:

$$
m=f'(a)
$$

The equation of the tangent line at $(a,f(a))$ is:

$$
\\boxed{y-f(a)=f'(a)(x-a)}
$$

or equivalently,

$$
\\boxed{y=f'(a)(x-a)+f(a)}
$$

---

## Geometric interpretation

Consider a function $f(x)$ and a point

$$
P=(a,f(a)).
$$

The derivative $f'(a)$ represents the slope of the function exactly at that point.

- If $f'(a)>0$, the tangent rises.
- If $f'(a)<0$, the tangent falls.
- If $f'(a)=0$, the tangent is horizontal.
- The larger $|f'(a)|$ is, the steeper the tangent.

The tangent line provides a local linear approximation of the function near $x=a$.

---

## Finding a tangent line

To find the tangent line to $f(x)$ at $x=a$:

1. Calculate $f(a)$.
2. Calculate the derivative $f'(x)$.
3. Evaluate the derivative at $a$ to obtain the slope.
4. Use the point-slope equation.

$$
\\boxed{m=f'(a)}
$$

$$
\\boxed{P=(a,f(a))}
$$

$$
\\boxed{y-f(a)=f'(a)(x-a)}
$$

### Example

Let

$$
f(x)=x^2+2x
$$

and find the tangent at $x=1$.

First calculate the point:

$$
f(1)=1^2+2(1)=3
$$

Therefore:

$$
P=(1,3)
$$

Differentiate:

$$
f'(x)=2x+2
$$

Evaluate at $x=1$:

$$
f'(1)=4
$$

The slope is $m=4$.

Using the point-slope equation:

$$
y-3=4(x-1)
$$

Simplifying:

$$
\\boxed{y=4x-1}
$$

---

## Tangent line from the derivative definition

The derivative can be defined as the limit of the slopes of secant lines:

$$
f'(a)=
\\lim_{h\\to0}
\\frac{f(a+h)-f(a)}{h}
$$

Therefore, the slope of the tangent is obtained by letting the second point of the secant approach the first point.

$$
\\boxed{
f'(a)=
\\lim_{x\\to a}
\\frac{f(x)-f(a)}{x-a}
}
$$

This explains why the derivative represents the instantaneous slope.

---

## Secant line and tangent line

A **secant line** passes through two points of the function:

$$
(a,f(a)),\\qquad (b,f(b))
$$

Its slope is:

$$
m_{\\text{secant}}
=
\\frac{f(b)-f(a)}{b-a}
$$

As $b$ approaches $a$, the secant approaches the tangent.

$$
\\boxed{
m_{\\text{tangent}}
=
\\lim_{b\\to a}
\\frac{f(b)-f(a)}{b-a}
=
f'(a)
}
$$

---

## Normal line

The **normal line** is perpendicular to the tangent line.

If the slope of the tangent is $m\\neq0$, the slope of the normal is:

$$
\\boxed{
m_n=-\\frac{1}{m}
}
$$

Therefore:

$$
\\boxed{
m_n=-\\frac{1}{f'(a)}
}
$$

The equation of the normal is:

$$
\\boxed{
y-f(a)
=
-\\frac{1}{f'(a)}(x-a)
}
$$

### Example

For

$$
f(x)=x^2
$$

at $x=1$:

$$
f(1)=1
$$

$$
f'(x)=2x
$$

$$
f'(1)=2
$$

The tangent is:

$$
y-1=2(x-1)
$$

$$
\\boxed{y=2x-1}
$$

The normal has slope:

$$
m_n=-\\frac12
$$

Therefore:

$$
y-1=-\\frac12(x-1)
$$

$$
\\boxed{y=-\\frac12x+\\frac32}
$$

---

## Horizontal tangent lines

A tangent is horizontal when its slope is zero:

$$
f'(a)=0
$$

Therefore, to find points where the graph has a horizontal tangent, solve:

$$
\\boxed{f'(x)=0}
$$

These points are candidates for local maxima or minima, although they are not necessarily extrema.

### Example

Let:

$$
f(x)=x^3-3x
$$

Then:

$$
f'(x)=3x^2-3
$$

Solve:

$$
3x^2-3=0
$$

$$
x^2=1
$$

$$
x=\\pm1
$$

The corresponding points are:

$$
f(-1)=2
$$

$$
f(1)=-2
$$

Therefore, there are horizontal tangents at:

$$
\\boxed{(-1,2)}
$$

and

$$
\\boxed{(1,-2)}
$$

---

## Vertical tangent lines

A vertical tangent has a vertical direction, so its slope is not finite.

In these cases, the derivative may tend to infinity:

$$
\\lim_{x\\to a}f'(x)=\\pm\\infty
$$

It cannot be written as $y=mx+b$ because a vertical line has equation:

$$
\\boxed{x=a}
$$

A typical example is:

$$
f(x)=\\sqrt[3]{x}
$$

At $x=0$, the function has a vertical tangent:

$$
\\boxed{x=0}
$$

---

## Linear approximation

The tangent line can also be used to approximate a function near a point.

The **linear approximation** of $f(x)$ around $x=a$ is:

$$
\\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

This is exactly the equation of the tangent line.

### Example

To approximate $\\sqrt{4.1}$, consider:

$$
f(x)=\\sqrt{x}
$$

Choose $a=4$ because $\\sqrt4=2$.

The derivative is:

$$
f'(x)=\\frac{1}{2\\sqrt{x}}
$$

Therefore:

$$
f'(4)=\\frac14
$$

The linear approximation is:

$$
L(x)=2+\\frac14(x-4)
$$

Evaluating at $x=4.1$:

$$
L(4.1)=2+\\frac14(0.1)
$$

$$
\\boxed{\\sqrt{4.1}\\approx2.025}
$$

---

## Graphical interpretation

The tangent and the function intersect exactly at the point of tangency:

$$
P=(a,f(a))
$$

They also have the same slope:

$$
\\boxed{f'(a)=m_{\\text{tangent}}}
$$

Near $a$, the tangent can provide a good approximation of the function.

:::function-graph{expression="x^2" restriction="-3<=x<=3"}
:::

---

## General procedure

To find the tangent line to $f(x)$ at $x=a$:

1. Calculate $f(a)$.
2. Differentiate $f(x)$.
3. Calculate $f'(a)$.
4. Identify the point $(a,f(a))$.
5. Apply:

$$
\\boxed{
y-f(a)=f'(a)(x-a)
}
$$

6. Simplify the equation.

If the normal is also required:

$$
\\boxed{
m_n=-\\frac1{f'(a)}
}
$$

---

## Common mistakes

### Confusing $f(a)$ and $f'(a)$

They represent different quantities:

$$
f(a)=\\text{$y$-coordinate}
$$

$$
f'(a)=\\text{slope}
$$

### Using $f'(x)$ as the slope

The slope of the tangent at a specific point is:

$$
\\boxed{f'(a)}
$$

not $f'(x)$.

### Forgetting the point of tangency

The slope alone does not determine a line. We also need:

$$
(a,f(a))
$$

### Confusing tangent and normal

When both slopes are finite, the tangent and normal slopes satisfy:

$$
m_t\\,m_n=-1
$$

---

## Summary

The tangent line to $f(x)$ at $x=a$ has:

- point of tangency: $(a,f(a))$;
- slope: $f'(a)$;
- equation:

$$
\\boxed{
y=f(a)+f'(a)(x-a)
}
$$

The linear approximation is exactly the same expression:

$$
\\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

The normal line, when $f'(a)\\neq0$, has slope:

$$
\\boxed{
-\\frac1{f'(a)}
}
$$
`;function c(){let{locale:c}=t();return e(i,{id:`tangent-lines`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-F7qGvVTE.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};