# Funciones polinómicas

Una **función polinómica** es una función que puede escribirse como una suma de potencias enteras no negativas de una variable, multiplicadas por números llamados **coeficientes**.

La forma general de una función polinómica es:

$$
f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_2x^2+a_1x+a_0
$$

Antes de utilizar esta expresión, definimos su notación:

- $x$ es la **variable** o entrada de la función.
- $f(x)$ representa el **valor de la función** para una determinada entrada $x$.
- $a_0,a_1,\ldots,a_n$ son los **coeficientes**.
- $n$ es un número entero no negativo que determina el exponente mayor de $x$.
- $x^k$ significa que $x$ se multiplica por sí misma $k$ veces.
- $\cdots$ indica que se han omitido los términos intermedios.

Por ejemplo:

$$
f(x)=2x^3-5x^2+x+4
$$

es una función polinómica.

Sus coeficientes son $2$, $-5$, $1$ y $4$, y su exponente mayor es $3$.

## Grado de un polinomio

El **grado** de un polinomio es el exponente mayor de la variable cuyo coeficiente no es cero.

Por ejemplo:

$$
f(x)=3x^4-2x^2+7
$$

tiene grado $4$.

El coeficiente del término de mayor grado se llama **coeficiente principal**. En este ejemplo, el coeficiente principal es $3$.

## Funciones polinómicas según el grado

Las funciones polinómicas se pueden clasificar según su grado.

### Funciones constantes

Una función constante distinta de cero tiene grado $0$:

$$
f(x)=a
$$

donde $a$ es un número real.

Por ejemplo:

$$
f(x)=4
$$

Su gráfica es una recta horizontal.

### Funciones lineales

Una función polinómica de grado $1$ tiene la forma:

$$
f(x)=ax+b
$$

donde $a$ y $b$ son números reales y $a\neq0$.

El símbolo $\neq$ significa **distinto de**.

Por ejemplo:

$$
f(x)=2x+1
$$

Su gráfica es una recta.

### Funciones cuadráticas

Una función polinómica de grado $2$ tiene la forma:

$$
f(x)=ax^2+bx+c
$$

donde $a\neq0$.

Por ejemplo:

$$
f(x)=x^2-4x+3
$$

Su gráfica es una parábola.

:::function-graph{expression="x^2-4*x+3" restriction="-2<=x<=6"}
:::

### Funciones cúbicas

Una función polinómica de grado $3$ tiene la forma:

$$
f(x)=ax^3+bx^2+cx+d
$$

donde $a\neq0$.

Por ejemplo:

$$
f(x)=x^3-2x+1
$$

es una función polinómica cúbica.

:::function-graph{expression="x^3-2*x+1" restriction="-3<=x<=3"}
:::

## Términos de un polinomio

Un polinomio está formado por **términos**.

Por ejemplo:

$$
f(x)=4x^3-2x^2+7x-5
$$

tiene cuatro términos:

$$
4x^3,\qquad -2x^2,\qquad 7x,\qquad -5
$$

El término que no contiene $x$ se llama **término independiente**.

En este ejemplo, el término independiente es $-5$.

## Coeficientes

El número que multiplica a una potencia de $x$ es su **coeficiente**.

Por ejemplo:

$$
f(x)=3x^4-7x^2+x+6
$$

Los coeficientes son:

- coeficiente de $x^4$: $3$
- coeficiente de $x^3$: $0$
- coeficiente de $x^2$: $-7$
- coeficiente de $x$: $1$
- término independiente: $6$

Aunque $x^3$ no aparece explícitamente, su coeficiente es $0$.

Por tanto, también podemos escribir:

$$
f(x)=3x^4+0x^3-7x^2+x+6
$$

## Evaluación de una función polinómica

Evaluar una función significa calcular su valor para una determinada entrada.

Consideremos:

$$
f(x)=2x^2+3x-1
$$

Queremos calcular $f(2)$.

Sustituimos $x$ por $2$:

$$
f(2)=2(2)^2+3(2)-1
$$

A continuación:

$$
f(2)=2\cdot4+6-1
$$

Por tanto:

$$
f(2)=13
$$

Esto significa que el punto $(2,13)$ pertenece a la gráfica de la función.

## Ceros de una función polinómica

Un **cero** o **raíz** de una función es un valor de $x$ para el cual la función toma el valor $0$.

El símbolo $=$ significa que dos expresiones tienen el mismo valor.

Por tanto, buscamos los valores de $x$ que cumplen:

$$
f(x)=0
$$

Por ejemplo:

$$
f(x)=x^2-5x+6
$$

Resolvemos:

$$
x^2-5x+6=0
$$

Podemos factorizar el polinomio:

$$
(x-2)(x-3)=0
$$

Por tanto:

$$
x=2
$$

o

$$
x=3
$$

Los ceros de la función son $2$ y $3$.

## Factorización de un polinomio

**Factorizar** significa expresar un polinomio como un producto de factores más sencillos.

Por ejemplo:

$$
x^2-5x+6=(x-2)(x-3)
$$

Las dos expresiones representan el mismo polinomio.

La factorización es especialmente útil para encontrar los ceros de una función polinómica.

## Multiplicidad de una raíz

Una raíz puede aparecer más de una vez en una factorización.

Por ejemplo:

$$
f(x)=(x-2)^2
$$

La expresión $(x-2)^2$ significa:

$$
f(x)=(x-2)(x-2)
$$

Por tanto, $x=2$ es una raíz de **multiplicidad $2$**.

De forma similar:

$$
f(x)=(x+1)^3
$$

tiene la raíz $x=-1$ con multiplicidad $3$.

La multiplicidad de una raíz influye en la forma en que se comporta la gráfica alrededor de esa raíz.

## Comportamiento en los extremos de una función polinómica

El grado y el coeficiente principal ayudan a determinar el comportamiento de la gráfica cuando $x$ toma valores muy grandes en valor absoluto.

Por ejemplo:

$$
f(x)=x^2
$$

tiene grado par y coeficiente principal positivo. Sus valores se hacen positivos cuando $x$ se aleja de cero en cualquiera de las dos direcciones.

En cambio:

$$
f(x)=x^3
$$

tiene grado impar y coeficiente principal positivo. Sus valores se hacen negativos para valores negativos grandes de $x$ y positivos para valores positivos grandes de $x$.

El comportamiento en los extremos depende principalmente del grado y del signo del coeficiente principal.

## Suma y resta de polinomios

Para sumar o restar polinomios, agrupamos los **términos semejantes**, es decir, los términos que contienen la misma potencia de $x$.

Por ejemplo:

$$
(3x^2+2x-1)+(x^2-5x+4)
$$

Agrupamos los términos semejantes:

$$
(3x^2+x^2)+(2x-5x)+(-1+4)
$$

Por tanto:

$$
4x^2-3x+3
$$

## Multiplicación de polinomios

Para multiplicar polinomios utilizamos la **propiedad distributiva**.

Por ejemplo:

$$
(x+2)(x+3)
$$

Multiplicamos cada término:

$$
x\cdot x+x\cdot3+2\cdot x+2\cdot3
$$

Por tanto:

$$
x^2+3x+2x+6
$$

y, después de agrupar los términos semejantes:

$$
x^2+5x+6
$$

Así:

$$
(x+2)(x+3)=x^2+5x+6
$$

## División de polinomios

Los polinomios también se pueden dividir entre otros polinomios.

Por ejemplo:

$$
\frac{x^2-5x+6}{x-2}
$$

Como:

$$
x^2-5x+6=(x-2)(x-3)
$$

obtenemos:

$$
\frac{(x-2)(x-3)}{x-2}=x-3
$$

siempre que $x\neq2$.

Por tanto:

$$
\frac{x^2-5x+6}{x-2}=x-3,
\qquad x\neq2
$$

## Representación gráfica

Una función polinómica se puede representar mediante una gráfica en el plano de coordenadas.

Cada valor de $x$ produce un valor $f(x)$ y, por tanto, un punto:

$$
(x,f(x))
$$

La gráfica está formada por todos los puntos que cumplen esta relación.

Por ejemplo, consideremos:

$$
f(x)=x^2
$$

Algunos valores son:

$$
f(-2)=4,\qquad f(-1)=1,\qquad f(0)=0
$$

$$
f(1)=1,\qquad f(2)=4
$$

Los puntos correspondientes son:

$$
(-2,4),\quad(-1,1),\quad(0,0),\quad(1,1),\quad(2,4)
$$

Estos puntos pertenecen a la parábola que representa la función.

:::function-graph{expression="x^2" restriction="-3<=x<=3"}
:::

## Grado y número de raíces

Una función polinómica de grado $n$ puede tener como máximo $n$ raíces reales distintas.

Por ejemplo, una función cuadrática tiene grado $2$ y puede tener:

- ninguna raíz real;
- una raíz real;
- dos raíces reales distintas.

Una función cúbica tiene grado $3$ y puede tener hasta tres raíces reales distintas.

Esto no significa que un polinomio de grado $n$ tenga necesariamente $n$ raíces reales.

Por ejemplo:

$$
f(x)=x^2+1
$$

tiene grado $2$, pero no tiene raíces reales porque:

$$
x^2+1>0
$$

para cualquier número real $x$.

El símbolo $>$ significa **mayor que**.

## Propiedades fundamentales

Las funciones polinómicas tienen varias propiedades importantes:

- están definidas para todos los números reales;
- son continuas para todos los números reales;
- su grado determina parte de su comportamiento global;
- sus raíces corresponden a los puntos donde la gráfica corta el eje $x$;
- el coeficiente principal, junto con el grado, determina el comportamiento en los extremos de la gráfica;
- un mismo polinomio se puede escribir de diferentes formas equivalentes, como la forma desarrollada o la forma factorizada.

Por ejemplo, la forma desarrollada:

$$
x^2-5x+6
$$

y la forma factorizada:

$$
(x-2)(x-3)
$$

representan el mismo polinomio.
