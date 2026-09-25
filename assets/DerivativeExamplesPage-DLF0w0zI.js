const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-WuYhu2Kl.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-BYtsCiYd.js","assets/index-BUO5hoW9.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-BYtsCiYd.js";import{t as i}from"./TopicPage-BAzQYl-h.js";var a=`# Ejemplos de derivadas

Las reglas de derivación se entienden mejor cuando se aplican a distintos tipos de funciones. Los siguientes ejemplos avanzan desde potencias sencillas hasta productos, cocientes, composiciones, raíces, funciones exponenciales, logaritmos y funciones trigonométricas.

## 1. Función polinómica

Consideremos

$$
f(x)=3x^4-5x^2+2x-7.
$$

Derivamos cada término por separado:

$$
f'(x)
=
3(4x^3)-5(2x)+2.
$$

Por tanto,

$$
\\boxed{
f'(x)=12x^3-10x+2
}.
$$

La constante $-7$ desaparece porque la derivada de una constante es cero.

## 2. Potencia con exponente negativo

Consideremos

$$
f(x)=\\frac{4}{x^3}.
$$

Escribimos la función utilizando un exponente negativo:

$$
f(x)=4x^{-3}.
$$

Aplicamos la regla de la potencia:

$$
f'(x)
=
4(-3)x^{-4}.
$$

Así,

$$
\\boxed{
f'(x)=-\\frac{12}{x^4}
}.
$$

## 3. Raíz cuadrada

Consideremos

$$
f(x)=\\sqrt{x}.
$$

Escribimos la raíz como una potencia:

$$
f(x)=x^{1/2}.
$$

Entonces,

$$
f'(x)
=
\\frac12x^{-1/2}.
$$

Por tanto,

$$
\\boxed{
f'(x)=\\frac{1}{2\\sqrt{x}}
}.
$$

## 4. Polinomio multiplicado por una constante

Consideremos

$$
f(x)=7x^5-3x^2.
$$

Derivamos término a término:

$$
f'(x)
=
35x^4-6x.
$$

Por tanto,

$$
\\boxed{
f'(x)=35x^4-6x
}.
$$

## 5. Producto de dos funciones

Consideremos

$$
f(x)=x^2\\sin(x).
$$

Es un producto, así que utilizamos la regla del producto:

$$
(uv)'=u'v+uv'.
$$

Tomamos

$$
u=x^2,
\\qquad
v=\\sin(x).
$$

Entonces,

$$
u'=2x,
\\qquad
v'=\\cos(x).
$$

Por tanto,

$$
f'(x)
=
2x\\sin(x)+x^2\\cos(x).
$$

Así,

$$
\\boxed{
f'(x)=2x\\sin(x)+x^2\\cos(x)
}.
$$

:::function-graph{expression="x^2*sin(x)" restriction="-6<=x<=6"}
:::

## 6. Producto con una función exponencial

Consideremos

$$
f(x)=xe^x.
$$

Aplicando la regla del producto,

$$
f'(x)
=
1\\cdot e^x+x\\cdot e^x.
$$

Por tanto,

$$
\\boxed{
f'(x)=e^x(x+1)
}.
$$

## 7. Cociente de dos funciones

Consideremos

$$
f(x)=\\frac{x^2+1}{x-1}.
$$

Utilizamos la regla del cociente:

$$
\\left(\\frac{u}{v}\\right)'
=
\\frac{u'v-uv'}{v^2}.
$$

Tomamos

$$
u=x^2+1,
\\qquad
v=x-1.
$$

Entonces,

$$
u'=2x,
\\qquad
v'=1.
$$

Por tanto,

$$
f'(x)
=
\\frac{2x(x-1)-(x^2+1)}
{(x-1)^2}.
$$

Simplificando,

$$
f'(x)
=
\\frac{2x^2-2x-x^2-1}
{(x-1)^2}.
$$

Así,

$$
\\boxed{
f'(x)=
\\frac{x^2-2x-1}{(x-1)^2}
}.
$$

## 8. Regla de la cadena con un polinomio

Consideremos

$$
f(x)=(2x+3)^4.
$$

La función exterior es $u^4$ y la función interior es

$$
u=2x+3.
$$

Aplicando la regla de la cadena,

$$
f'(x)
=
4(2x+3)^3\\cdot2.
$$

Por tanto,

$$
\\boxed{
f'(x)=8(2x+3)^3
}.
$$

## 9. Regla de la cadena con una raíz

Consideremos

$$
f(x)=\\sqrt{x^2+4}.
$$

Escribimos la función como

$$
f(x)=(x^2+4)^{1/2}.
$$

Aplicamos la regla de la cadena:

$$
f'(x)
=
\\frac12(x^2+4)^{-1/2}\\cdot2x.
$$

Por tanto,

$$
\\boxed{
f'(x)=\\frac{x}{\\sqrt{x^2+4}}
}.
$$

:::function-graph{expression="sqrt(x^2+4)" restriction="-6<=x<=6"}
:::

## 10. Función exponencial compuesta

Consideremos

$$
f(x)=e^{3x^2}.
$$

La derivada de $e^u$ es $e^u$, pero debemos multiplicar por la derivada del exponente:

$$
f'(x)
=
e^{3x^2}\\cdot6x.
$$

Por tanto,

$$
\\boxed{
f'(x)=6xe^{3x^2}
}.
$$

## 11. Función logarítmica

Consideremos

$$
f(x)=\\ln(x^2+1).
$$

Utilizando

$$
\\frac{d}{dx}\\ln(u)=\\frac{u'}{u},
$$

con

$$
u=x^2+1,
\\qquad
u'=2x,
$$

obtenemos

$$
\\boxed{
f'(x)=\\frac{2x}{x^2+1}
}.
$$

## 12. Función seno compuesta

Consideremos

$$
f(x)=\\sin(4x).
$$

Aplicando la regla de la cadena,

$$
f'(x)
=
\\cos(4x)\\cdot4.
$$

Por tanto,

$$
\\boxed{
f'(x)=4\\cos(4x)
}.
$$

## 13. Función coseno compuesta

Consideremos

$$
f(x)=\\cos(x^2).
$$

La derivada exterior es $-\\sin(u)$ y la derivada interior es $2x$.

Por tanto,

$$
f'(x)
=
-\\sin(x^2)\\cdot2x.
$$

Así,

$$
\\boxed{
f'(x)=-2x\\sin(x^2)
}.
$$

## 14. Función tangente

Consideremos

$$
f(x)=\\tan(3x+1).
$$

Utilizando

$$
\\frac{d}{dx}\\tan(u)=\\sec^2(u)u',
$$

obtenemos

$$
f'(x)
=
3\\sec^2(3x+1).
$$

Por tanto,

$$
\\boxed{
f'(x)=3\\sec^2(3x+1)
}.
$$

## 15. Combinación de varias reglas

Consideremos

$$
f(x)=x^2e^{x^2}.
$$

Es un producto y, además, la función exponencial contiene una composición.

Primero aplicamos la regla del producto:

$$
f'(x)
=
2xe^{x^2}
+
x^2\\frac{d}{dx}e^{x^2}.
$$

Ahora aplicamos la regla de la cadena:

$$
\\frac{d}{dx}e^{x^2}
=
2xe^{x^2}.
$$

Por tanto,

$$
f'(x)
=
2xe^{x^2}
+
2x^3e^{x^2}.
$$

Sacando factor común,

$$
\\boxed{
f'(x)=2xe^{x^2}(1+x^2)
}.
$$

## 16. Calcular la derivada en un punto

Supongamos que

$$
f(x)=x^3-2x+1.
$$

Su derivada es

$$
f'(x)=3x^2-2.
$$

Para calcular la tasa de variación instantánea en $x=2$:

$$
f'(2)
=
3(2)^2-2
=
12-2
=
\\boxed{10}.
$$

Por tanto, la gráfica tiene pendiente $10$ en $x=2$.

## 17. Calcular una recta tangente

Sea

$$
f(x)=x^2+1.
$$

Queremos obtener la recta tangente en $x=2$.

Primero calculamos la derivada:

$$
f'(x)=2x.
$$

Entonces,

$$
f'(2)=4.
$$

El punto de la gráfica es

$$
f(2)=5.
$$

Por tanto, el punto de tangencia es $(2,5)$.

Utilizando la ecuación punto-pendiente,

$$
y-5=4(x-2).
$$

Así,

$$
\\boxed{
y=4x-3
}.
$$

## 18. Segunda derivada

Consideremos

$$
f(x)=x^4-2x^2.
$$

La primera derivada es

$$
f'(x)=4x^3-4x.
$$

Derivamos de nuevo:

$$
f''(x)=12x^2-4.
$$

Por tanto,

$$
\\boxed{
f''(x)=12x^2-4
}.
$$

La segunda derivada puede utilizarse para estudiar la concavidad y el comportamiento de los puntos críticos.

## 19. Ejemplo completo

Consideremos

$$
f(x)=x^3-3x^2-9x+5.
$$

Primera derivada:

$$
f'(x)
=
3x^2-6x-9.
$$

Factorizamos:

$$
f'(x)
=
3(x^2-2x-3)
=
3(x-3)(x+1).
$$

Los puntos críticos satisfacen

$$
f'(x)=0.
$$

Por tanto,

$$
x=-1,
\\qquad
x=3.
$$

El signo de $f'(x)$ es:

$$
\\begin{array}{c|ccc}
x & (-\\infty,-1) & (-1,3) & (3,\\infty)\\\\
\\hline
f'(x) & + & - & +
\\end{array}
$$

Por tanto, la función es creciente en

$$
(-\\infty,-1)
\\cup
(3,\\infty),
$$

y decreciente en

$$
(-1,3).
$$

Como la derivada cambia de positiva a negativa en $x=-1$, existe un máximo local.

Como cambia de negativa a positiva en $x=3$, existe un mínimo local.

Los valores correspondientes son

$$
f(-1)=10,
\\qquad
f(3)=-22.
$$

Por tanto,

$$
\\boxed{
\\text{Máximo local: }(-1,10)
}
$$

y

$$
\\boxed{
\\text{Mínimo local: }(3,-22)
}.
$$

## 20. Elegir la regla adecuada

Antes de derivar, identifica la estructura de la función:

| Estructura de la función | Regla principal      |
| ------------------------ | -------------------- |
| $x^n$                    | Regla de la potencia |
| $c\\,f(x)$                | Múltiplo constante   |
| $f(x)\\pm g(x)$           | Suma/diferencia      |
| $f(x)g(x)$               | Regla del producto   |
| $\\frac{f(x)}{g(x)}$      | Regla del cociente   |
| $f(g(x))$                | Regla de la cadena   |

Muchas funciones requieren **más de una regla**.

Por ejemplo,

$$
x^2e^{x^2}
$$

requiere la regla del producto y la regla de la cadena.

La clave es identificar primero la estructura exterior y después trabajar hacia el interior.
`,o=`# Exemples de derivades

Les regles de derivació s'entenen millor quan s'apliquen a diferents tipus de funcions. Els exemples següents avancen des de potències senzilles fins a productes, quocients, composicions, arrels, funcions exponencials, logaritmes i funcions trigonomètriques.

## 1. Funció polinòmica

Considerem

$$
f(x)=3x^4-5x^2+2x-7.
$$

Derivem cada terme per separat:

$$
f'(x)
=
3(4x^3)-5(2x)+2.
$$

Per tant,

$$
\\boxed{
f'(x)=12x^3-10x+2
}.
$$

La constant $-7$ desapareix perquè la derivada d'una constant és zero.

## 2. Potència amb exponent negatiu

Considerem

$$
f(x)=\\frac{4}{x^3}.
$$

Escrivim la funció utilitzant un exponent negatiu:

$$
f(x)=4x^{-3}.
$$

Apliquem la regla de la potència:

$$
f'(x)
=
4(-3)x^{-4}.
$$

Així,

$$
\\boxed{
f'(x)=-\\frac{12}{x^4}
}.
$$

## 3. Arrel quadrada

Considerem

$$
f(x)=\\sqrt{x}.
$$

Escrivim l'arrel com una potència:

$$
f(x)=x^{1/2}.
$$

Aleshores,

$$
f'(x)
=
\\frac12x^{-1/2}.
$$

Per tant,

$$
\\boxed{
f'(x)=\\frac{1}{2\\sqrt{x}}
}.
$$

## 4. Polinomi multiplicat per una constant

Considerem

$$
f(x)=7x^5-3x^2.
$$

Derivem terme a terme:

$$
f'(x)
=
35x^4-6x.
$$

Per tant,

$$
\\boxed{
f'(x)=35x^4-6x
}.
$$

## 5. Producte de dues funcions

Considerem

$$
f(x)=x^2\\sin(x).
$$

És un producte, així que utilitzem la regla del producte:

$$
(uv)'=u'v+uv'.
$$

Prenem

$$
u=x^2,
\\qquad
v=\\sin(x).
$$

Aleshores,

$$
u'=2x,
\\qquad
v'=\\cos(x).
$$

Per tant,

$$
f'(x)
=
2x\\sin(x)+x^2\\cos(x).
$$

Així,

$$
\\boxed{
f'(x)=2x\\sin(x)+x^2\\cos(x)
}.
$$

:::function-graph{expression="x^2*sin(x)" restriction="-6<=x<=6"}
:::

## 6. Producte amb una funció exponencial

Considerem

$$
f(x)=xe^x.
$$

Aplicant la regla del producte,

$$
f'(x)
=
1\\cdot e^x+x\\cdot e^x.
$$

Per tant,

$$
\\boxed{
f'(x)=e^x(x+1)
}.
$$

## 7. Quocient de dues funcions

Considerem

$$
f(x)=\\frac{x^2+1}{x-1}.
$$

Utilitzem la regla del quocient:

$$
\\left(\\frac{u}{v}\\right)'
=
\\frac{u'v-uv'}{v^2}.
$$

Prenem

$$
u=x^2+1,
\\qquad
v=x-1.
$$

Aleshores,

$$
u'=2x,
\\qquad
v'=1.
$$

Per tant,

$$
f'(x)
=
\\frac{2x(x-1)-(x^2+1)}
{(x-1)^2}.
$$

Simplificant,

$$
f'(x)
=
\\frac{2x^2-2x-x^2-1}
{(x-1)^2}.
$$

Així,

$$
\\boxed{
f'(x)=
\\frac{x^2-2x-1}{(x-1)^2}
}.
$$

## 8. Regla de la cadena amb un polinomi

Considerem

$$
f(x)=(2x+3)^4.
$$

La funció exterior és $u^4$ i la funció interior és

$$
u=2x+3.
$$

Aplicant la regla de la cadena,

$$
f'(x)
=
4(2x+3)^3\\cdot2.
$$

Per tant,

$$
\\boxed{
f'(x)=8(2x+3)^3
}.
$$

## 9. Regla de la cadena amb una arrel

Considerem

$$
f(x)=\\sqrt{x^2+4}.
$$

Escrivim la funció com

$$
f(x)=(x^2+4)^{1/2}.
$$

Apliquem la regla de la cadena:

$$
f'(x)
=
\\frac12(x^2+4)^{-1/2}\\cdot2x.
$$

Per tant,

$$
\\boxed{
f'(x)=\\frac{x}{\\sqrt{x^2+4}}
}.
$$

:::function-graph{expression="sqrt(x^2+4)" restriction="-6<=x<=6"}
:::

## 10. Funció exponencial composta

Considerem

$$
f(x)=e^{3x^2}.
$$

La derivada de $e^u$ és $e^u$, però hem de multiplicar per la derivada de l'exponent:

$$
f'(x)
=
e^{3x^2}\\cdot6x.
$$

Per tant,

$$
\\boxed{
f'(x)=6xe^{3x^2}
}.
$$

## 11. Funció logarítmica

Considerem

$$
f(x)=\\ln(x^2+1).
$$

Utilitzant

$$
\\frac{d}{dx}\\ln(u)=\\frac{u'}{u},
$$

amb

$$
u=x^2+1,
\\qquad
u'=2x,
$$

obtenim

$$
\\boxed{
f'(x)=\\frac{2x}{x^2+1}
}.
$$

## 12. Funció sinus composta

Considerem

$$
f(x)=\\sin(4x).
$$

Aplicant la regla de la cadena,

$$
f'(x)
=
\\cos(4x)\\cdot4.
$$

Per tant,

$$
\\boxed{
f'(x)=4\\cos(4x)
}.
$$

## 13. Funció cosinus composta

Considerem

$$
f(x)=\\cos(x^2).
$$

La derivada exterior és $-\\sin(u)$ i la derivada interior és $2x$.

Per tant,

$$
f'(x)
=
-\\sin(x^2)\\cdot2x.
$$

Així,

$$
\\boxed{
f'(x)=-2x\\sin(x^2)
}.
$$

## 14. Funció tangent

Considerem

$$
f(x)=\\tan(3x+1).
$$

Utilitzant

$$
\\frac{d}{dx}\\tan(u)=\\sec^2(u)u',
$$

obtenim

$$
f'(x)
=
3\\sec^2(3x+1).
$$

Per tant,

$$
\\boxed{
f'(x)=3\\sec^2(3x+1)
}.
$$

## 15. Combinació de diverses regles

Considerem

$$
f(x)=x^2e^{x^2}.
$$

És un producte i, a més, la funció exponencial conté una composició.

Primer apliquem la regla del producte:

$$
f'(x)
=
2xe^{x^2}
+
x^2\\frac{d}{dx}e^{x^2}.
$$

Ara apliquem la regla de la cadena:

$$
\\frac{d}{dx}e^{x^2}
=
2xe^{x^2}.
$$

Per tant,

$$
f'(x)
=
2xe^{x^2}
+
2x^3e^{x^2}.
$$

Traient factor comú,

$$
\\boxed{
f'(x)=2xe^{x^2}(1+x^2)
}.
$$

## 16. Calcular la derivada en un punt

Suposem que

$$
f(x)=x^3-2x+1.
$$

La seva derivada és

$$
f'(x)=3x^2-2.
$$

Per calcular la taxa de variació instantània en $x=2$:

$$
f'(2)
=
3(2)^2-2
=
12-2
=
\\boxed{10}.
$$

Per tant, la gràfica té pendent $10$ en $x=2$.

## 17. Calcular una recta tangent

Sigui

$$
f(x)=x^2+1.
$$

Volem obtenir la recta tangent en $x=2$.

Primer calculem la derivada:

$$
f'(x)=2x.
$$

Aleshores,

$$
f'(2)=4.
$$

El punt de la gràfica és

$$
f(2)=5.
$$

Per tant, el punt de tangència és $(2,5)$.

Utilitzant l'equació punt-pendent,

$$
y-5=4(x-2).
$$

Així,

$$
\\boxed{
y=4x-3
}.
$$

## 18. Segona derivada

Considerem

$$
f(x)=x^4-2x^2.
$$

La primera derivada és

$$
f'(x)=4x^3-4x.
$$

Derivem de nou:

$$
f''(x)=12x^2-4.
$$

Per tant,

$$
\\boxed{
f''(x)=12x^2-4
}.
$$

La segona derivada es pot utilitzar per estudiar la concavitat i el comportament dels punts crítics.

## 19. Exemple complet

Considerem

$$
f(x)=x^3-3x^2-9x+5.
$$

Primera derivada:

$$
f'(x)
=
3x^2-6x-9.
$$

Factoritzem:

$$
f'(x)
=
3(x^2-2x-3)
=
3(x-3)(x+1).
$$

Els punts crítics satisfan

$$
f'(x)=0.
$$

Per tant,

$$
x=-1,
\\qquad
x=3.
$$

El signe de $f'(x)$ és:

$$
\\begin{array}{c|ccc}
x & (-\\infty,-1) & (-1,3) & (3,\\infty)\\\\
\\hline
f'(x) & + & - & +
\\end{array}
$$

Per tant, la funció és creixent en

$$
(-\\infty,-1)
\\cup
(3,\\infty),
$$

i decreixent en

$$
(-1,3).
$$

Com que la derivada canvia de positiva a negativa en $x=-1$, hi ha un màxim local.

Com que canvia de negativa a positiva en $x=3$, hi ha un mínim local.

Els valors corresponents són

$$
f(-1)=10,
\\qquad
f(3)=-22.
$$

Per tant,

$$
\\boxed{
\\text{Màxim local: }(-1,10)
}
$$

i

$$
\\boxed{
\\text{Mínim local: }(3,-22)
}.
$$

## 20. Triar la regla adequada

Abans de derivar, identifica l'estructura de la funció:

| Estructura de la funció | Regla principal      |
| ----------------------- | -------------------- |
| $x^n$                   | Regla de la potència |
| $c\\,f(x)$               | Múltiple constant    |
| $f(x)\\pm g(x)$          | Suma/diferència      |
| $f(x)g(x)$              | Regla del producte   |
| $\\frac{f(x)}{g(x)}$     | Regla del quocient   |
| $f(g(x))$               | Regla de la cadena   |

Moltes funcions requereixen **més d'una regla**.

Per exemple,

$$
x^2e^{x^2}
$$

requereix la regla del producte i la regla de la cadena.

La clau és identificar primer l'estructura exterior i després treballar cap a l'interior.
`,s=`# Derivative Examples

Derivative rules become easier to use when they are applied to different types of functions. The following examples progress from basic powers to products, quotients, compositions, radicals, exponential functions, logarithms, and trigonometric functions.

## 1. Polynomial function

Consider

$$
f(x)=3x^4-5x^2+2x-7.
$$

Differentiate each term separately:

$$
f'(x)
=
3(4x^3)-5(2x)+2.
$$

Therefore,

$$
\\boxed{
f'(x)=12x^3-10x+2
}.
$$

The constant $-7$ disappears because the derivative of a constant is zero.

## 2. Power with a negative exponent

Consider

$$
f(x)=\\frac{4}{x^3}.
$$

Rewrite the function using a negative exponent:

$$
f(x)=4x^{-3}.
$$

Apply the power rule:

$$
f'(x)
=
4(-3)x^{-4}.
$$

Thus,

$$
\\boxed{
f'(x)=-\\frac{12}{x^4}
}.
$$

## 3. Square root

Consider

$$
f(x)=\\sqrt{x}.
$$

Rewrite the square root as a power:

$$
f(x)=x^{1/2}.
$$

Then,

$$
f'(x)
=
\\frac12x^{-1/2}.
$$

Therefore,

$$
\\boxed{
f'(x)=\\frac{1}{2\\sqrt{x}}
}.
$$

## 4. Polynomial multiplied by a constant

Consider

$$
f(x)=7x^5-3x^2.
$$

Differentiate term by term:

$$
f'(x)
=
35x^4-6x.
$$

Hence,

$$
\\boxed{
f'(x)=35x^4-6x
}.
$$

## 5. Product of two functions

Consider

$$
f(x)=x^2\\sin(x).
$$

This is a product, so use the product rule:

$$
(uv)'=u'v+uv'.
$$

Let

$$
u=x^2,
\\qquad
v=\\sin(x).
$$

Then

$$
u'=2x,
\\qquad
v'=\\cos(x).
$$

Therefore,

$$
f'(x)
=
2x\\sin(x)+x^2\\cos(x).
$$

So,

$$
\\boxed{
f'(x)=2x\\sin(x)+x^2\\cos(x)
}.
$$

:::function-graph{expression="x^2*sin(x)" restriction="-6<=x<=6"}
:::

## 6. Product with an exponential function

Consider

$$
f(x)=x e^x.
$$

Using the product rule,

$$
f'(x)
=
1\\cdot e^x+x\\cdot e^x.
$$

Therefore,

$$
\\boxed{
f'(x)=e^x(x+1)
}.
$$

## 7. Quotient of two functions

Consider

$$
f(x)=\\frac{x^2+1}{x-1}.
$$

Use the quotient rule:

$$
\\left(\\frac{u}{v}\\right)'
=
\\frac{u'v-uv'}{v^2}.
$$

Let

$$
u=x^2+1,
\\qquad
v=x-1.
$$

Then

$$
u'=2x,
\\qquad
v'=1.
$$

Therefore,

$$
f'(x)
=
\\frac{2x(x-1)-(x^2+1)}
{(x-1)^2}.
$$

Simplifying,

$$
f'(x)
=
\\frac{2x^2-2x-x^2-1}
{(x-1)^2}.
$$

Hence,

$$
\\boxed{
f'(x)=
\\frac{x^2-2x-1}{(x-1)^2}
}.
$$

## 8. Chain rule with a polynomial

Consider

$$
f(x)=(2x+3)^4.
$$

The outer function is $u^4$ and the inner function is

$$
u=2x+3.
$$

Using the chain rule,

$$
f'(x)
=
4(2x+3)^3\\cdot2.
$$

Thus,

$$
\\boxed{
f'(x)=8(2x+3)^3
}.
$$

## 9. Chain rule with a square root

Consider

$$
f(x)=\\sqrt{x^2+4}.
$$

Rewrite the function:

$$
f(x)=(x^2+4)^{1/2}.
$$

Apply the chain rule:

$$
f'(x)
=
\\frac12(x^2+4)^{-1/2}\\cdot2x.
$$

Therefore,

$$
\\boxed{
f'(x)=\\frac{x}{\\sqrt{x^2+4}}
}.
$$

:::function-graph{expression="sqrt(x^2+4)" restriction="-6<=x<=6"}
:::

## 10. Exponential function with a composition

Consider

$$
f(x)=e^{3x^2}.
$$

The derivative of $e^u$ is $e^u$, but we must multiply by the derivative of the exponent:

$$
f'(x)
=
e^{3x^2}\\cdot6x.
$$

Therefore,

$$
\\boxed{
f'(x)=6xe^{3x^2}
}.
$$

## 11. Logarithmic function

Consider

$$
f(x)=\\ln(x^2+1).
$$

Using

$$
\\frac{d}{dx}\\ln(u)=\\frac{u'}{u},
$$

with

$$
u=x^2+1,
\\qquad
u'=2x,
$$

we obtain

$$
\\boxed{
f'(x)=\\frac{2x}{x^2+1}
}.
$$

## 12. Sine function with a composition

Consider

$$
f(x)=\\sin(4x).
$$

Using the chain rule,

$$
f'(x)
=
\\cos(4x)\\cdot4.
$$

Therefore,

$$
\\boxed{
f'(x)=4\\cos(4x)
}.
$$

## 13. Cosine function with a composition

Consider

$$
f(x)=\\cos(x^2).
$$

The outer derivative is $-\\sin(u)$ and the inner derivative is $2x$.

Therefore,

$$
f'(x)
=
-\\sin(x^2)\\cdot2x.
$$

Hence,

$$
\\boxed{
f'(x)=-2x\\sin(x^2)
}.
$$

## 14. Tangent function

Consider

$$
f(x)=\\tan(3x+1).
$$

Using

$$
\\frac{d}{dx}\\tan(u)=\\sec^2(u)u',
$$

we obtain

$$
f'(x)
=
3\\sec^2(3x+1).
$$

Thus,

$$
\\boxed{
f'(x)=3\\sec^2(3x+1)
}.
$$

## 15. Combining several rules

Consider

$$
f(x)=x^2e^{x^2}.
$$

This is a product, and the exponential function contains a composition.

First apply the product rule:

$$
f'(x)
=
2xe^{x^2}
+
x^2\\frac{d}{dx}e^{x^2}.
$$

Now apply the chain rule:

$$
\\frac{d}{dx}e^{x^2}
=
2xe^{x^2}.
$$

Therefore,

$$
f'(x)
=
2xe^{x^2}
+
2x^3e^{x^2}.
$$

Factoring,

$$
\\boxed{
f'(x)=2xe^{x^2}(1+x^2)
}.
$$

## 16. Finding the derivative at a point

Suppose

$$
f(x)=x^3-2x+1.
$$

Its derivative is

$$
f'(x)=3x^2-2.
$$

To find the instantaneous rate of change at $x=2$:

$$
f'(2)
=
3(2)^2-2
=
12-2
=
\\boxed{10}.
$$

Therefore, the graph has slope $10$ at $x=2$.

## 17. Finding a tangent line

Let

$$
f(x)=x^2+1.
$$

We want the tangent line at $x=2$.

First calculate the derivative:

$$
f'(x)=2x.
$$

Then,

$$
f'(2)=4.
$$

The point on the graph is

$$
f(2)=5.
$$

Therefore, the tangent point is $(2,5)$.

Using the point-slope equation,

$$
y-5=4(x-2).
$$

Hence,

$$
\\boxed{
y=4x-3
}.
$$

## 18. Second derivative

Consider

$$
f(x)=x^4-2x^2.
$$

The first derivative is

$$
f'(x)=4x^3-4x.
$$

Differentiate again:

$$
f''(x)=12x^2-4.
$$

Therefore,

$$
\\boxed{
f''(x)=12x^2-4
}.
$$

The second derivative can be used to study concavity and the behavior of critical points.

## 19. A complete example

Consider

$$
f(x)=x^3-3x^2-9x+5.
$$

First derivative:

$$
f'(x)
=
3x^2-6x-9.
$$

Factor:

$$
f'(x)
=
3(x^2-2x-3)
=
3(x-3)(x+1).
$$

Critical points satisfy

$$
f'(x)=0.
$$

Therefore,

$$
x=-1,
\\qquad
x=3.
$$

The sign of $f'(x)$ is:

$$
\\begin{array}{c|ccc}
x & (-\\infty,-1) & (-1,3) & (3,\\infty)\\\\
\\hline
f'(x) & + & - & +
\\end{array}
$$

Thus, the function is increasing on

$$
(-\\infty,-1)
\\cup
(3,\\infty),
$$

and decreasing on

$$
(-1,3).
$$

Since the derivative changes from positive to negative at $x=-1$, there is a local maximum there.

Since it changes from negative to positive at $x=3$, there is a local minimum there.

The corresponding values are

$$
f(-1)=10,
\\qquad
f(3)=-22.
$$

Therefore,

$$
\\boxed{
\\text{Local maximum: }(-1,10)
}
$$

and

$$
\\boxed{
\\text{Local minimum: }(3,-22)
}.
$$

## 20. Choosing the correct rule

Before differentiating, identify the structure of the function:

| Function structure  | Main rule         |
| ------------------- | ----------------- |
| $x^n$               | Power rule        |
| $c\\,f(x)$           | Constant multiple |
| $f(x)\\pm g(x)$      | Sum/difference    |
| $f(x)g(x)$          | Product rule      |
| $\\frac{f(x)}{g(x)}$ | Quotient rule     |
| $f(g(x))$           | Chain rule        |

Many functions require **more than one rule**.

For example,

$$
x^2e^{x^2}
$$

requires the product rule and the chain rule.

The key is to identify the outer structure first and then work inward.
`;function c(){let{locale:c}=t();return e(i,{id:`derivative-examples`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-WuYhu2Kl.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};