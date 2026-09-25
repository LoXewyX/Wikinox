const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-F7qGvVTE.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-CC0Uwr-v.js","assets/index-BUO5hoW9.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-CC0Uwr-v.js";import{t as i}from"./TopicPage-CxUbQKDL.js";var a=`# Derivación de funciones

La **derivada** describe cómo cambia una función cuando cambia su variable de entrada. Puede interpretarse como la tasa de variación instantánea o como la pendiente de la recta tangente a la gráfica.

## 1. Definición de derivada

La derivada de una función $f(x)$ en $x=a$ se define como

$$
f'(a)
=
\\lim_{h\\to0}
\\frac{f(a+h)-f(a)}{h}.
$$

El cociente

$$
\\frac{f(a+h)-f(a)}{h}
$$

representa la tasa media de variación entre dos puntos. Al hacer que $h$ tienda a $0$, obtenemos la tasa de variación instantánea.

Si este límite existe, la función es derivable en $x=a$.

La derivada como función se escribe

$$
f'(x)
=
\\lim_{h\\to0}
\\frac{f(x+h)-f(x)}{h}.
$$

## 2. Interpretación geométrica

La derivada $f'(a)$ representa la pendiente de la recta tangente a la gráfica de $f$ en el punto $(a,f(a))$.

Una derivada positiva indica que la función es creciente localmente, mientras que una derivada negativa indica que es decreciente localmente.

Si

$$
f'(a)=0,
$$

la recta tangente es horizontal.

Por ejemplo, para

$$
f(x)=x^2,
$$

la derivada es

$$
f'(x)=2x.
$$

Por tanto, en $x=2$,

$$
f'(2)=4.
$$

La recta tangente tiene pendiente $4$ en el punto $(2,4)$.

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::

## 3. Derivabilidad y continuidad

Si una función es derivable en $x=a$, entonces es continua en $x=a$.

$$
\\boxed{
\\text{Derivable}
\\implies
\\text{Continua}
}
$$

La implicación inversa no siempre es cierta.

Por ejemplo,

$$
f(x)=|x|
$$

es continua en $x=0$, pero no es derivable en ese punto porque las derivadas laterales son diferentes.

$$
f'_-(0)=-1,
\\qquad
f'_+(0)=1.
$$

Por tanto,

$$
\\boxed{
|x|\\text{ es continua pero no derivable en }x=0.
}
$$

:::function-graph{expression="abs(x)" restriction="-4<=x<=4"}
:::

## 4. Reglas básicas de derivación

### Regla de la constante

Si

$$
f(x)=c,
$$

donde $c$ es constante, entonces

$$
\\boxed{f'(x)=0}.
$$

### Regla de la potencia

Para

$$
f(x)=x^n,
$$

la derivada es

$$
\\boxed{
\\frac{d}{dx}x^n=nx^{n-1}
}.
$$

Por ejemplo,

$$
\\frac{d}{dx}x^5
=
5x^4.
$$

La regla también se aplica a potencias negativas y fraccionarias cuando la función es derivable:

$$
\\frac{d}{dx}x^{-2}
=
-2x^{-3},
$$

y

$$
\\frac{d}{dx}\\sqrt{x}
=
\\frac{d}{dx}x^{1/2}
=
\\frac{1}{2\\sqrt{x}}.
$$

### Regla del múltiplo constante

Si

$$
f(x)=c\\,g(x),
$$

entonces

$$
\\boxed{
f'(x)=c\\,g'(x)
}.
$$

Por ejemplo,

$$
\\frac{d}{dx}(7x^3)
=
21x^2.
$$

### Regla de la suma y diferencia

Para las funciones $f$ y $g$,

$$
\\boxed{
(f\\pm g)'=f'\\pm g'
}.
$$

Por ejemplo,

$$
\\frac{d}{dx}(x^3+2x^2-5x+1)
=
3x^2+4x-5.
$$

## 5. Regla del producto

Cuando dos funciones se multiplican,

$$
f(x)=u(x)v(x),
$$

la derivada es

$$
\\boxed{
(uv)'=u'v+uv'
}.
$$

Por ejemplo,

$$
f(x)=x^2\\sin(x).
$$

Entonces,

$$
f'(x)
=
2x\\sin(x)+x^2\\cos(x).
$$

La regla del producto es necesaria porque, en general,

$$
(uv)'\\neq u'v'.
$$

## 6. Regla del cociente

Para

$$
f(x)=\\frac{u(x)}{v(x)},
\\qquad v(x)\\neq0,
$$

la derivada es

$$
\\boxed{
\\left(\\frac{u}{v}\\right)'
=
\\frac{u'v-uv'}{v^2}
}.
$$

Por ejemplo,

$$
f(x)=\\frac{x^2+1}{x}.
$$

Entonces,

$$
f'(x)
=
\\frac{2x(x)-(x^2+1)}{x^2}
=
\\boxed{
\\frac{x^2-1}{x^2}
}.
$$

## 7. Regla de la cadena

La **regla de la cadena** se utiliza cuando una función está compuesta por otra.

Si

$$
f(x)=g(h(x)),
$$

entonces

$$
\\boxed{
f'(x)=g'(h(x))h'(x)
}.
$$

Es decir, derivamos la función exterior y multiplicamos por la derivada de la función interior.

Por ejemplo,

$$
f(x)=(3x+1)^5.
$$

La función exterior es $u^5$ y la función interior es $u=3x+1$.

Por tanto,

$$
f'(x)
=
5(3x+1)^4\\cdot3.
$$

Así,

$$
\\boxed{
f'(x)=15(3x+1)^4
}.
$$

Otro ejemplo es

$$
f(x)=\\sqrt{x^2+1}.
$$

Escribiendo la raíz como una potencia,

$$
f(x)=(x^2+1)^{1/2},
$$

obtenemos

$$
f'(x)
=
\\frac12(x^2+1)^{-1/2}(2x).
$$

Por tanto,

$$
\\boxed{
f'(x)=\\frac{x}{\\sqrt{x^2+1}}
}.
$$

## 8. Derivadas de funciones habituales

Algunas derivadas importantes son

$$
\\boxed{
\\frac{d}{dx}e^x=e^x
}
$$

$$
\\boxed{
\\frac{d}{dx}\\ln(x)=\\frac1x
}
$$

$$
\\boxed{
\\frac{d}{dx}\\sin(x)=\\cos(x)
}
$$

$$
\\boxed{
\\frac{d}{dx}\\cos(x)=-\\sin(x)
}
$$

$$
\\boxed{
\\frac{d}{dx}\\tan(x)=\\sec^2(x)
}
$$

Estas fórmulas se combinan con las reglas básicas de derivación y la regla de la cadena.

Por ejemplo,

$$
f(x)=e^{2x}
$$

tiene como derivada

$$
\\boxed{
f'(x)=2e^{2x}
}.
$$

## 9. Derivadas de orden superior

La derivada de la derivada se denomina **segunda derivada**:

$$
f''(x)=\\frac{d}{dx}f'(x).
$$

De forma general,

$$
f^{(n)}(x)
$$

representa la derivada de orden $n$.

Por ejemplo, si

$$
f(x)=x^4,
$$

entonces

$$
f'(x)=4x^3,
$$

$$
f''(x)=12x^2,
$$

$$
f'''(x)=24x,
$$

y

$$
f^{(4)}(x)=24.
$$

## 10. Derivadas y monotonía

La primera derivada permite determinar dónde una función es creciente o decreciente.

Si

$$
f'(x)>0
$$

en todo un intervalo, entonces $f$ es creciente en ese intervalo.

Si

$$
f'(x)<0
$$

en todo un intervalo, entonces $f$ es decreciente.

Por tanto,

$$
\\boxed{
f'(x)>0\\Rightarrow f\\text{ creciente}
}
$$

y

$$
\\boxed{
f'(x)<0\\Rightarrow f\\text{ decreciente}
}.
$$

Los puntos donde

$$
f'(x)=0
$$

o donde $f'(x)$ no existe se denominan **puntos críticos**, siempre que pertenezcan al dominio de $f$.

## 11. Derivadas y extremos locales

Un máximo o mínimo local puede aparecer en un punto crítico.

Si

$$
f'(a)=0,
$$

el punto $x=a$ es candidato a ser un extremo local.

Sin embargo, que $f'(a)=0$ no garantiza por sí solo que exista un máximo o mínimo.

Por ejemplo,

$$
f(x)=x^3
$$

satisface

$$
f'(0)=0,
$$

pero $x=0$ no es un máximo ni un mínimo local.

El signo de la derivada alrededor del punto crítico proporciona más información.

Si la derivada cambia de positiva a negativa,

$$
+\\rightarrow-,
$$

la función tiene un máximo local.

Si cambia de negativa a positiva,

$$
-\\rightarrow+,
$$

la función tiene un mínimo local.

## 12. Recta tangente

Si $f$ es derivable en $x=a$, la recta tangente en $(a,f(a))$ tiene pendiente $f'(a)$.

Su ecuación es

$$
\\boxed{
y-f(a)=f'(a)(x-a)
}.
$$

Por ejemplo, sea

$$
f(x)=x^2
$$

y $a=1$.

Tenemos

$$
f(1)=1,
\\qquad
f'(x)=2x,
\\qquad
f'(1)=2.
$$

Por tanto,

$$
y-1=2(x-1),
$$

y obtenemos

$$
\\boxed{
y=2x-1
}.
$$

## 13. Procedimiento para derivar

Al derivar una función:

1. Identifica la estructura de la función.
2. Comprueba si es una suma, producto, cociente o composición.
3. Elige la regla de derivación correspondiente.
4. Aplica la regla cuidadosamente.
5. Simplifica el resultado.
6. Comprueba el dominio donde existe la derivada.
7. Si es necesario, analiza el signo de la derivada.

Las reglas principales son

$$
\\boxed{
\\frac{d}{dx}x^n=nx^{n-1}
}
$$

$$
\\boxed{
(uv)'=u'v+uv'
}
$$

$$
\\boxed{
\\left(\\frac uv\\right)'
=
\\frac{u'v-uv'}{v^2}
}
$$

y

$$
\\boxed{
(g(h(x)))'
=
g'(h(x))h'(x)
}.
$$
`,o=`# Derivació de funcions

La **derivada** descriu com canvia una funció quan canvia la seva variable d'entrada. Es pot interpretar com la taxa de variació instantània o com el pendent de la recta tangent a la gràfica.

## 1. Definició de derivada

La derivada d'una funció $f(x)$ en $x=a$ es defineix com

$$
f'(a)
=
\\lim_{h\\to0}
\\frac{f(a+h)-f(a)}{h}.
$$

El quocient

$$
\\frac{f(a+h)-f(a)}{h}
$$

representa la taxa mitjana de variació entre dos punts. Quan $h$ tendeix a $0$, obtenim la taxa de variació instantània.

Si aquest límit existeix, la funció és derivable en $x=a$.

La derivada com a funció s'escriu

$$
f'(x)
=
\\lim_{h\\to0}
\\frac{f(x+h)-f(x)}{h}.
$$

## 2. Interpretació geomètrica

La derivada $f'(a)$ representa el pendent de la recta tangent a la gràfica de $f$ en el punt $(a,f(a))$.

Una derivada positiva indica que la funció és creixent localment, mentre que una derivada negativa indica que és decreixent localment.

Si

$$
f'(a)=0,
$$

la recta tangent és horitzontal.

Per exemple, per a

$$
f(x)=x^2,
$$

la derivada és

$$
f'(x)=2x.
$$

Per tant, en $x=2$,

$$
f'(2)=4.
$$

La recta tangent té pendent $4$ en el punt $(2,4)$.

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::

## 3. Derivabilitat i continuïtat

Si una funció és derivable en $x=a$, aleshores és contínua en $x=a$.

$$
\\boxed{
\\text{Derivable}
\\implies
\\text{Contínua}
}
$$

La implicació inversa no sempre és certa.

Per exemple,

$$
f(x)=|x|
$$

és contínua en $x=0$, però no és derivable en aquest punt perquè les derivades laterals són diferents.

$$
f'_-(0)=-1,
\\qquad
f'_+(0)=1.
$$

Per tant,

$$
\\boxed{
|x|\\text{ és contínua però no derivable en }x=0.
}
$$

:::function-graph{expression="abs(x)" restriction="-4<=x<=4"}
:::

## 4. Regles bàsiques de derivació

### Regla de la constant

Si

$$
f(x)=c,
$$

on $c$ és una constant, aleshores

$$
\\boxed{f'(x)=0}.
$$

### Regla de la potència

Per a

$$
f(x)=x^n,
$$

la derivada és

$$
\\boxed{
\\frac{d}{dx}x^n=nx^{n-1}
}.
$$

Per exemple,

$$
\\frac{d}{dx}x^5
=
5x^4.
$$

La regla també s'aplica a potències negatives i fraccionàries quan la funció és derivable:

$$
\\frac{d}{dx}x^{-2}
=
-2x^{-3},
$$

i

$$
\\frac{d}{dx}\\sqrt{x}
=
\\frac{d}{dx}x^{1/2}
=
\\frac{1}{2\\sqrt{x}}.
$$

### Regla del múltiple constant

Si

$$
f(x)=c\\,g(x),
$$

aleshores

$$
\\boxed{
f'(x)=c\\,g'(x)
}.
$$

Per exemple,

$$
\\frac{d}{dx}(7x^3)
=
21x^2.
$$

### Regla de la suma i diferència

Per a les funcions $f$ i $g$,

$$
\\boxed{
(f\\pm g)'=f'\\pm g'
}.
$$

Per exemple,

$$
\\frac{d}{dx}(x^3+2x^2-5x+1)
=
3x^2+4x-5.
$$

## 5. Regla del producte

Quan dues funcions es multipliquen,

$$
f(x)=u(x)v(x),
$$

la derivada és

$$
\\boxed{
(uv)'=u'v+uv'
}.
$$

Per exemple,

$$
f(x)=x^2\\sin(x).
$$

Aleshores,

$$
f'(x)
=
2x\\sin(x)+x^2\\cos(x).
$$

La regla del producte és necessària perquè, en general,

$$
(uv)'\\neq u'v'.
$$

## 6. Regla del quocient

Per a

$$
f(x)=\\frac{u(x)}{v(x)},
\\qquad v(x)\\neq0,
$$

la derivada és

$$
\\boxed{
\\left(\\frac{u}{v}\\right)'
=
\\frac{u'v-uv'}{v^2}
}.
$$

Per exemple,

$$
f(x)=\\frac{x^2+1}{x}.
$$

Aleshores,

$$
f'(x)
=
\\frac{2x(x)-(x^2+1)}{x^2}
=
\\boxed{
\\frac{x^2-1}{x^2}
}.
$$

## 7. Regla de la cadena

La **regla de la cadena** s'utilitza quan una funció està composta amb una altra.

Si

$$
f(x)=g(h(x)),
$$

aleshores

$$
\\boxed{
f'(x)=g'(h(x))h'(x)
}.
$$

És a dir, derivem la funció exterior i multipliquem per la derivada de la funció interior.

Per exemple,

$$
f(x)=(3x+1)^5.
$$

La funció exterior és $u^5$ i la funció interior és $u=3x+1$.

Per tant,

$$
f'(x)
=
5(3x+1)^4\\cdot3.
$$

Així,

$$
\\boxed{
f'(x)=15(3x+1)^4
}.
$$

Un altre exemple és

$$
f(x)=\\sqrt{x^2+1}.
$$

Escrivint l'arrel com una potència,

$$
f(x)=(x^2+1)^{1/2},
$$

obtenim

$$
f'(x)
=
\\frac12(x^2+1)^{-1/2}(2x).
$$

Per tant,

$$
\\boxed{
f'(x)=\\frac{x}{\\sqrt{x^2+1}}
}.
$$

## 8. Derivades de funcions habituals

Algunes derivades importants són

$$
\\boxed{
\\frac{d}{dx}e^x=e^x
}
$$

$$
\\boxed{
\\frac{d}{dx}\\ln(x)=\\frac1x
}
$$

$$
\\boxed{
\\frac{d}{dx}\\sin(x)=\\cos(x)
}
$$

$$
\\boxed{
\\frac{d}{dx}\\cos(x)=-\\sin(x)
}
$$

$$
\\boxed{
\\frac{d}{dx}\\tan(x)=\\sec^2(x)
}
$$

Aquestes fórmules es combinen amb les regles bàsiques de derivació i la regla de la cadena.

Per exemple,

$$
f(x)=e^{2x}
$$

té com a derivada

$$
\\boxed{
f'(x)=2e^{2x}
}.
$$

## 9. Derivades d'ordre superior

La derivada de la derivada s'anomena **segona derivada**:

$$
f''(x)=\\frac{d}{dx}f'(x).
$$

De manera general,

$$
f^{(n)}(x)
$$

representa la derivada d'ordre $n$.

Per exemple, si

$$
f(x)=x^4,
$$

aleshores

$$
f'(x)=4x^3,
$$

$$
f''(x)=12x^2,
$$

$$
f'''(x)=24x,
$$

i

$$
f^{(4)}(x)=24.
$$

## 10. Derivades i monotonia

La primera derivada permet determinar on una funció és creixent o decreixent.

Si

$$
f'(x)>0
$$

en tot un interval, aleshores $f$ és creixent en aquest interval.

Si

$$
f'(x)<0
$$

en tot un interval, aleshores $f$ és decreixent.

Per tant,

$$
\\boxed{
f'(x)>0\\Rightarrow f\\text{ creixent}
}
$$

i

$$
\\boxed{
f'(x)<0\\Rightarrow f\\text{ decreixent}
}.
$$

Els punts on

$$
f'(x)=0
$$

o on $f'(x)$ no existeix s'anomenen **punts crítics**, sempre que pertanyin al domini de $f$.

## 11. Derivades i extrems locals

Un màxim o mínim local pot aparèixer en un punt crític.

Si

$$
f'(a)=0,
$$

el punt $x=a$ és candidat a ser un extrem local.

Tanmateix, que $f'(a)=0$ no garanteix per si sol que hi hagi un màxim o mínim.

Per exemple,

$$
f(x)=x^3
$$

satisfà

$$
f'(0)=0,
$$

però $x=0$ no és ni un màxim ni un mínim local.

El signe de la derivada al voltant del punt crític proporciona més informació.

Si la derivada canvia de positiva a negativa,

$$
+\\rightarrow-,
$$

la funció té un màxim local.

Si canvia de negativa a positiva,

$$
-\\rightarrow+,
$$

la funció té un mínim local.

## 12. Recta tangent

Si $f$ és derivable en $x=a$, la recta tangent en $(a,f(a))$ té pendent $f'(a)$.

La seva equació és

$$
\\boxed{
y-f(a)=f'(a)(x-a)
}.
$$

Per exemple, sigui

$$
f(x)=x^2
$$

i $a=1$.

Tenim

$$
f(1)=1,
\\qquad
f'(x)=2x,
\\qquad
f'(1)=2.
$$

Per tant,

$$
y-1=2(x-1),
$$

i obtenim

$$
\\boxed{
y=2x-1
}.
$$

## 13. Procediment per derivar

Per derivar una funció:

1. Identifica l'estructura de la funció.
2. Comprova si és una suma, producte, quocient o composició.
3. Tria la regla de derivació corresponent.
4. Aplica la regla amb cura.
5. Simplifica el resultat.
6. Comprova el domini on existeix la derivada.
7. Si cal, analitza el signe de la derivada.

Les regles principals són

$$
\\boxed{
\\frac{d}{dx}x^n=nx^{n-1}
}
$$

$$
\\boxed{
(uv)'=u'v+uv'
}
$$

$$
\\boxed{
\\left(\\frac uv\\right)'
=
\\frac{u'v-uv'}{v^2}
}
$$

i

$$
\\boxed{
(g(h(x)))'
=
g'(h(x))h'(x)
}.
$$
`,s=`# Function Differentiation

The **derivative** describes how a function changes as its input changes. It can be interpreted as an instantaneous rate of change or as the slope of the tangent line to the graph.

## 1. Definition of the derivative

The derivative of a function $f(x)$ at $x=a$ is defined by

$$
f'(a)
=
\\lim_{h\\to0}
\\frac{f(a+h)-f(a)}{h}.
$$

The quotient

$$
\\frac{f(a+h)-f(a)}{h}
$$

represents the average rate of change between two points. Taking the limit as $h$ approaches $0$ gives the instantaneous rate of change.

If this limit exists, the function is differentiable at $x=a$.

The derivative as a function is written as

$$
f'(x)
=
\\lim_{h\\to0}
\\frac{f(x+h)-f(x)}{h}.
$$

## 2. Geometric interpretation

The derivative $f'(a)$ represents the slope of the tangent line to the graph of $f$ at the point $(a,f(a))$.

A positive derivative means that the function is locally increasing, while a negative derivative means that it is locally decreasing.

If

$$
f'(a)=0,
$$

the tangent line is horizontal.

For example, for

$$
f(x)=x^2,
$$

the derivative is

$$
f'(x)=2x.
$$

Therefore, at $x=2$,

$$
f'(2)=4.
$$

The tangent line has slope $4$ at the point $(2,4)$.

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::

## 3. Differentiability and continuity

If a function is differentiable at $x=a$, then it is continuous at $x=a$.

$$
\\boxed{
\\text{Differentiable}
\\implies
\\text{Continuous}
}
$$

The converse is not always true.

For example,

$$
f(x)=|x|
$$

is continuous at $x=0$, but it is not differentiable there because the left and right derivatives are different.

$$
f'_-(0)=-1,
\\qquad
f'_+(0)=1.
$$

Therefore,

$$
\\boxed{|x|\\text{ is continuous but not differentiable at }x=0.}
$$

:::function-graph{expression="abs(x)" restriction="-4<=x<=4"}
:::

## 4. Basic differentiation rules

### Constant rule

If

$$
f(x)=c,
$$

where $c$ is constant, then

$$
\\boxed{f'(x)=0}.
$$

### Power rule

For

$$
f(x)=x^n,
$$

the derivative is

$$
\\boxed{
\\frac{d}{dx}x^n=nx^{n-1}
}.
$$

For example,

$$
\\frac{d}{dx}x^5
=
5x^4.
$$

The rule also applies to negative and fractional powers where the function is differentiable:

$$
\\frac{d}{dx}x^{-2}
=
-2x^{-3},
$$

and

$$
\\frac{d}{dx}\\sqrt{x}
=
\\frac{d}{dx}x^{1/2}
=
\\frac{1}{2\\sqrt{x}}.
$$

### Constant multiple rule

If

$$
f(x)=c\\,g(x),
$$

then

$$
\\boxed{
f'(x)=c\\,g'(x)
}.
$$

For example,

$$
\\frac{d}{dx}(7x^3)
=
21x^2.
$$

### Sum and difference rules

For functions $f$ and $g$,

$$
\\boxed{
(f\\pm g)'=f'\\pm g'
}.
$$

For example,

$$
\\frac{d}{dx}(x^3+2x^2-5x+1)
=
3x^2+4x-5.
$$

## 5. Product rule

When two functions are multiplied,

$$
f(x)=u(x)v(x),
$$

the derivative is

$$
\\boxed{
(uv)'=u'v+uv'
}.
$$

For example,

$$
f(x)=x^2\\sin(x).
$$

Then

$$
f'(x)
=
2x\\sin(x)+x^2\\cos(x).
$$

The product rule is necessary because, in general,

$$
(uv)'\\neq u'v'.
$$

## 6. Quotient rule

For

$$
f(x)=\\frac{u(x)}{v(x)},
\\qquad v(x)\\neq0,
$$

the derivative is

$$
\\boxed{
\\left(\\frac{u}{v}\\right)'
=
\\frac{u'v-uv'}{v^2}
}.
$$

For example,

$$
f(x)=\\frac{x^2+1}{x}.
$$

Then

$$
f'(x)
=
\\frac{2x(x)-(x^2+1)}{x^2}
=
\\boxed{
\\frac{x^2-1}{x^2}
}.
$$

## 7. Chain rule

The **chain rule** is used when one function is composed with another.

If

$$
f(x)=g(h(x)),
$$

then

$$
\\boxed{
f'(x)=g'(h(x))h'(x)
}.
$$

In other words, differentiate the outer function and multiply by the derivative of the inner function.

For example,

$$
f(x)=(3x+1)^5.
$$

The outer function is $u^5$ and the inner function is $u=3x+1$.

Therefore,

$$
f'(x)
=
5(3x+1)^4\\cdot3.
$$

Hence,

$$
\\boxed{
f'(x)=15(3x+1)^4
}.
$$

Another example is

$$
f(x)=\\sqrt{x^2+1}.
$$

Writing the square root as a power,

$$
f(x)=(x^2+1)^{1/2},
$$

gives

$$
f'(x)
=
\\frac12(x^2+1)^{-1/2}(2x).
$$

Therefore,

$$
\\boxed{
f'(x)=\\frac{x}{\\sqrt{x^2+1}}
}.
$$

## 8. Derivatives of common functions

Some important derivatives are

$$
\\boxed{
\\frac{d}{dx}e^x=e^x
}
$$

$$
\\boxed{
\\frac{d}{dx}\\ln(x)=\\frac1x
}
$$

$$
\\boxed{
\\frac{d}{dx}\\sin(x)=\\cos(x)
}
$$

$$
\\boxed{
\\frac{d}{dx}\\cos(x)=-\\sin(x)
}
$$

$$
\\boxed{
\\frac{d}{dx}\\tan(x)=\\sec^2(x)
}
$$

These formulas are combined with the basic differentiation rules and the chain rule.

For example,

$$
f(x)=e^{2x}
$$

has derivative

$$
\\boxed{
f'(x)=2e^{2x}
}.
$$

## 9. Higher-order derivatives

The derivative of the derivative is called the **second derivative**:

$$
f''(x)=\\frac{d}{dx}f'(x).
$$

More generally,

$$
f^{(n)}(x)
$$

denotes the $n$-th derivative.

For example, if

$$
f(x)=x^4,
$$

then

$$
f'(x)=4x^3,
$$

$$
f''(x)=12x^2,
$$

$$
f'''(x)=24x,
$$

and

$$
f^{(4)}(x)=24.
$$

## 10. Derivatives and monotonicity

The first derivative can be used to determine where a function increases or decreases.

If

$$
f'(x)>0
$$

throughout an interval, then $f$ is increasing on that interval.

If

$$
f'(x)<0
$$

throughout an interval, then $f$ is decreasing.

Therefore,

$$
\\boxed{
f'(x)>0\\Rightarrow f\\text{ increasing}
}
$$

and

$$
\\boxed{
f'(x)<0\\Rightarrow f\\text{ decreasing}
}.
$$

Points where

$$
f'(x)=0
$$

or where $f'(x)$ does not exist are called **critical points**, provided they belong to the domain of $f$.

## 11. Derivatives and local extrema

A local maximum or minimum can occur at a critical point.

If

$$
f'(a)=0,
$$

the point $x=a$ is a candidate for a local extremum.

However, $f'(a)=0$ alone does not guarantee a maximum or minimum.

For example,

$$
f(x)=x^3
$$

satisfies

$$
f'(0)=0,
$$

but $x=0$ is not a local maximum or minimum.

The sign of the derivative around the critical point provides more information.

If the derivative changes from positive to negative,

$$
+\\rightarrow-,
$$

the function has a local maximum.

If it changes from negative to positive,

$$
-\\rightarrow+,
$$

the function has a local minimum.

## 12. Tangent line

If $f$ is differentiable at $x=a$, the tangent line at $(a,f(a))$ has slope $f'(a)$.

Its equation is

$$
\\boxed{
y-f(a)=f'(a)(x-a)
}.
$$

For example, let

$$
f(x)=x^2
$$

and $a=1$.

We have

$$
f(1)=1,
\\qquad
f'(x)=2x,
\\qquad
f'(1)=2.
$$

Therefore,

$$
y-1=2(x-1),
$$

so

$$
\\boxed{
y=2x-1
}.
$$

## 13. Differentiation workflow

When differentiating a function:

1. Identify the structure of the function.
2. Check whether it is a sum, product, quotient, or composition.
3. Choose the appropriate differentiation rule.
4. Apply the rule carefully.
5. Simplify the result.
6. Check the domain where the derivative exists.
7. If necessary, analyze the sign of the derivative.

The main rules are

$$
\\boxed{
\\frac{d}{dx}x^n=nx^{n-1}
}
$$

$$
\\boxed{
(uv)'=u'v+uv'
}
$$

$$
\\boxed{
\\left(\\frac uv\\right)'
=
\\frac{u'v-uv'}{v^2}
}
$$

and

$$
\\boxed{
(g(h(x)))'
=
g'(h(x))h'(x)
}.
$$
`;function c(){let{locale:c}=t();return e(i,{id:`function-differentiation`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-F7qGvVTE.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};