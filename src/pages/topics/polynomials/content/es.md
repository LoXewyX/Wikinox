# Polinomios

Un **polinomio** es una expresión algebraica formada por sumas y restas de términos. Cada término contiene un número llamado **coeficiente** y, normalmente, una variable elevada a una potencia entera no negativa.

La variable se representa habitualmente mediante $x$.

El símbolo $+$ indica una suma y el símbolo $-$ indica una resta.

Una **potencia** como $x^n$ representa el producto de $x$ por sí misma $n$ veces. El número $n$ se llama **exponente**.

Por ejemplo:

$$
3x^2-5x+2
$$

es un polinomio.

## Términos de un polinomio

Un **término** es cada una de las partes de un polinomio separadas por los signos $+$ o $-$.

En el polinomio

$$
3x^2-5x+2
$$

hay tres términos:

- $3x^2$
- $-5x$
- $2$

El término $2$ no contiene ninguna variable. Se llama **término independiente**.

## Coeficientes

El **coeficiente** es el número que multiplica a una variable.

En

$$
3x^2-5x+2
$$

los coeficientes son:

- $3$, coeficiente de $x^2$.
- $-5$, coeficiente de $x$.
- $2$, término independiente.

Cuando un término no muestra explícitamente su coeficiente, se entiende que es $1$ o $-1$.

Por ejemplo:

$$
x^3=x^3\cdot1
$$

y

$$
-x^2=-1x^2
$$

## Grado de un polinomio

El **grado** de un polinomio es el mayor exponente de la variable que aparece con un coeficiente distinto de cero.

Por ejemplo:

$$
4x^3-2x^2+x-7
$$

tiene grado $3$ porque el mayor exponente es $3$.

El grado se representa habitualmente mediante una expresión como $\deg(P)$.

El símbolo $\deg$ significa **grado**.

Por tanto:

$$
\deg(P)=3
$$

## Polinomios según su grado

Los polinomios pueden clasificarse según su grado.

### Polinomio constante

Un polinomio de grado $0$ no contiene ninguna variable.

Por ejemplo:

$$
P(x)=5
$$

### Polinomio de primer grado

Un polinomio de grado $1$ tiene la forma:

$$
P(x)=ax+b
$$

donde $a$ y $b$ son números y $a\neq0$.

Por ejemplo:

$$
P(x)=2x+1
$$

### Polinomio de segundo grado

Un polinomio de grado $2$ tiene la forma:

$$
P(x)=ax^2+bx+c
$$

donde $a\neq0$.

Por ejemplo:

$$
P(x)=x^2-4x+3
$$

Su representación gráfica permite observar algunas de sus propiedades.

:::polynomial-graph{expression="x^2-4*x+3" min="-2" max="6"}
:::

### Polinomio de tercer grado

Un polinomio de grado $3$ tiene la forma:

$$
P(x)=ax^3+bx^2+cx+d
$$

donde $a\neq0$.

Por ejemplo:

$$
P(x)=x^3-3x
$$

:::polynomial-graph{expression="x^3-3*x" min="-3" max="3"}
:::

## Valor de un polinomio

Para calcular el **valor de un polinomio**, sustituimos la variable por un número.

El símbolo $=$ significa que dos expresiones tienen el mismo valor.

Por ejemplo, sea:

$$
P(x)=2x^2-3x+1
$$

Si queremos calcular $P(2)$, sustituimos $x$ por $2$:

$$
P(2)=2(2)^2-3(2)+1
$$

Calculamos las potencias y las operaciones:

$$
P(2)=8-6+1=3
$$

Por tanto:

$$
P(2)=3
$$

## Polinomios semejantes

Dos términos son **semejantes** cuando tienen la misma variable elevada al mismo exponente.

Por ejemplo:

$$
3x^2
$$

y

$$
-5x^2
$$

son términos semejantes.

En cambio:

$$
3x^2
$$

y

$$
3x
$$

no son semejantes porque sus exponentes son diferentes.

Los términos semejantes pueden combinarse mediante suma o resta.

Por ejemplo:

$$
3x^2-5x^2=-2x^2
$$

## Suma de polinomios

Para sumar polinomios, agrupamos los términos semejantes.

Por ejemplo:

$$
(3x^2+2x+1)+(x^2-5x+4)
$$

Agrupamos términos semejantes:

$$
3x^2+x^2+2x-5x+1+4
$$

y obtenemos:

$$
4x^2-3x+5
$$

## Resta de polinomios

Para restar polinomios, cambiamos el signo de cada término del polinomio que se resta y después agrupamos términos semejantes.

Por ejemplo:

$$
(3x^2+2x+1)-(x^2-5x+4)
$$

se transforma en:

$$
3x^2+2x+1-x^2+5x-4
$$

Por tanto:

$$
2x^2+7x-3
$$

## Multiplicación de polinomios

Para multiplicar polinomios, cada término de un polinomio se multiplica por cada término del otro.

Por ejemplo:

$$
(x+2)(x+3)
$$

Multiplicamos cada término:

$$
x\cdot x+x\cdot3+2\cdot x+2\cdot3
$$

Obtenemos:

$$
x^2+3x+2x+6
$$

y simplificamos:

$$
x^2+5x+6
$$

## Potencias de polinomios

Una potencia indica que una expresión se multiplica por sí misma.

Por ejemplo:

$$
(x+2)^2
$$

significa:

$$
(x+2)(x+2)
$$

Al desarrollar:

$$
x^2+4x+4
$$

Por tanto:

$$
(x+2)^2=x^2+4x+4
$$

## Factorización

**Factorizar** un polinomio significa escribirlo como un producto de factores más sencillos.

El símbolo $\cdot$ representa una multiplicación.

Por ejemplo:

$$
x^2-5x+6
$$

puede factorizarse como:

$$
(x-2)(x-3)
$$

porque:

$$
(x-2)(x-3)=x^2-5x+6
$$

## Raíces o ceros de un polinomio

Una **raíz** o **cero** de un polinomio es un valor de $x$ para el que el polinomio vale cero.

El número $0$ representa el elemento neutro de la suma.

Por ejemplo, para:

$$
P(x)=x^2-5x+6
$$

buscamos los valores que cumplen:

$$
P(x)=0
$$

Factorizamos:

$$
(x-2)(x-3)=0
$$

Las raíces son:

$$
x=2
$$

y

$$
x=3
$$

En la representación gráfica, las raíces corresponden a los puntos donde la curva corta el eje $x$.

:::polynomial-graph{expression="x^2-5*x+6" min="-1" max="6"}
:::

## Multiplicidad de una raíz

La **multiplicidad** indica cuántas veces aparece un factor asociado a una raíz.

Por ejemplo:

$$
P(x)=(x-2)^2
$$

tiene la raíz $x=2$ con multiplicidad $2$.

En cambio:

$$
P(x)=(x-2)^3
$$

tiene la raíz $x=2$ con multiplicidad $3$.

La multiplicidad puede afectar a la forma en que la gráfica se comporta alrededor de una raíz.

## División de polinomios

Los polinomios también pueden dividirse.

Por ejemplo:

$$
\frac{x^2-5x+6}{x-2}
$$

El resultado es:

$$
x-3
$$

porque:

$$
(x-2)(x-3)=x^2-5x+6
$$

En una división de polinomios pueden aparecer un **cociente** y un **resto**.

## Teorema del resto

El **teorema del resto** permite calcular rápidamente el resto de la división de un polinomio $P(x)$ entre un polinomio de la forma $x-a$.

El símbolo $a$ representa un número.

El teorema establece que el resto es:

$$
P(a)
$$

Por ejemplo, si:

$$
P(x)=x^2+3x+2
$$

y dividimos entre:

$$
x-1
$$

el resto es:

$$
P(1)=1^2+3(1)+2=6
$$

## Comportamiento de un polinomio

El **comportamiento** de un polinomio describe cómo cambia su valor cuando $x$ aumenta o disminuye.

El símbolo $\rightarrow$ significa "tiende hacia" o "se dirige hacia".

El símbolo $\infty$ representa infinito.

Por ejemplo, para:

$$
P(x)=x^2
$$

cuando $x$ aumenta en valor absoluto, $P(x)$ también aumenta.

:::polynomial-graph{expression="x^2" min="-5" max="5"}
:::

Para un polinomio de grado impar, el comportamiento en los dos extremos puede ser diferente.

Por ejemplo:

$$
P(x)=x^3
$$

:::polynomial-graph{expression="x^3" min="-5" max="5"}
:::

## Número de raíces

Un polinomio de grado $n$ puede tener como máximo $n$ raíces reales distintas.

Por ejemplo:

- Un polinomio de grado $1$ puede tener como máximo una raíz real.
- Un polinomio de grado $2$ puede tener como máximo dos raíces reales.
- Un polinomio de grado $3$ puede tener como máximo tres raíces reales.

Que un polinomio tenga grado $n$ no significa necesariamente que tenga exactamente $n$ raíces reales.

Por ejemplo:

$$
P(x)=x^2+1
$$

tiene grado $2$, pero no tiene raíces reales porque $x^2$ nunca es negativo.

## Identidad entre polinomios

Dos polinomios son idénticos cuando tienen los mismos coeficientes en los términos correspondientes.

Por ejemplo:

$$
P(x)=2x^2+3x+1
$$

y

$$
Q(x)=2x^2+3x+1
$$

son el mismo polinomio.

También podemos escribir:

$$
P(x)=Q(x)
$$

cuando ambas expresiones representan el mismo polinomio.
