const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-WuYhu2Kl.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-BYtsCiYd.js","assets/index-BUO5hoW9.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-BYtsCiYd.js";import{t as i}from"./TopicPage-BAzQYl-h.js";var a=`# Funciones polinómicas

Una **función polinómica** es una función que puede escribirse como una suma de potencias enteras no negativas de una variable, multiplicadas por números llamados **coeficientes**.

La forma general de una función polinómica es:

$$
f(x)=a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_2x^2+a_1x+a_0
$$

Antes de utilizar esta expresión, definimos su notación:

- $x$ es la **variable** o entrada de la función.
- $f(x)$ representa el **valor de la función** para una determinada entrada $x$.
- $a_0,a_1,\\ldots,a_n$ son los **coeficientes**.
- $n$ es un número entero no negativo que determina el exponente mayor de $x$.
- $x^k$ significa que $x$ se multiplica por sí misma $k$ veces.
- $\\cdots$ indica que se han omitido los términos intermedios.

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

donde $a$ y $b$ son números reales y $a\\neq0$.

El símbolo $\\neq$ significa **distinto de**.

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

donde $a\\neq0$.

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

donde $a\\neq0$.

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
4x^3,\\qquad -2x^2,\\qquad 7x,\\qquad -5
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
f(2)=2\\cdot4+6-1
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
x\\cdot x+x\\cdot3+2\\cdot x+2\\cdot3
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
\\frac{x^2-5x+6}{x-2}
$$

Como:

$$
x^2-5x+6=(x-2)(x-3)
$$

obtenemos:

$$
\\frac{(x-2)(x-3)}{x-2}=x-3
$$

siempre que $x\\neq2$.

Por tanto:

$$
\\frac{x^2-5x+6}{x-2}=x-3,
\\qquad x\\neq2
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
f(-2)=4,\\qquad f(-1)=1,\\qquad f(0)=0
$$

$$
f(1)=1,\\qquad f(2)=4
$$

Los puntos correspondientes son:

$$
(-2,4),\\quad(-1,1),\\quad(0,0),\\quad(1,1),\\quad(2,4)
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
`,o=`# Funcions polinòmiques

Una **funció polinòmica** és una funció que es pot escriure com una suma de potències enteres no negatives d'una variable, multiplicades per nombres anomenats **coeficients**.

La forma general d'una funció polinòmica és:

$$
f(x)=a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_2x^2+a_1x+a_0
$$

Abans d'utilitzar aquesta expressió, definim la seva notació:

- $x$ és la **variable** o entrada de la funció.
- $f(x)$ representa el **valor de la funció** per a una determinada entrada $x$.
- $a_0,a_1,\\ldots,a_n$ són els **coeficients**.
- $n$ és un nombre enter no negatiu que determina l'exponent més gran de $x$.
- $x^k$ significa que $x$ es multiplica per si mateixa $k$ vegades.
- $\\cdots$ indica que s'han omès els termes intermedis.

Per exemple:

$$
f(x)=2x^3-5x^2+x+4
$$

és una funció polinòmica.

Els seus coeficients són $2$, $-5$, $1$ i $4$, i el seu exponent més gran és $3$.

## Grau d'un polinomi

El **grau** d'un polinomi és l'exponent més gran de la variable el coeficient del qual no és zero.

Per exemple:

$$
f(x)=3x^4-2x^2+7
$$

té grau $4$.

El coeficient del terme de grau més gran s'anomena **coeficient principal**. En aquest exemple, el coeficient principal és $3$.

## Funcions polinòmiques segons el grau

Les funcions polinòmiques es poden classificar segons el seu grau.

### Funcions constants

Una funció constant diferent de zero té grau $0$:

$$
f(x)=a
$$

on $a$ és un nombre real.

Per exemple:

$$
f(x)=4
$$

La seva gràfica és una recta horitzontal.

### Funcions lineals

Una funció polinòmica de grau $1$ té la forma:

$$
f(x)=ax+b
$$

on $a$ i $b$ són nombres reals i $a\\neq0$.

Per exemple:

$$
f(x)=2x+1
$$

La seva gràfica és una recta.

### Funcions quadràtiques

Una funció polinòmica de grau $2$ té la forma:

$$
f(x)=ax^2+bx+c
$$

on $a\\neq0$.

Per exemple:

$$
f(x)=x^2-4x+3
$$

La seva gràfica és una paràbola.

:::function-graph{expression="x^2-4*x+3" restriction="-2<=x<=6"}
:::

### Funcions cúbiques

Una funció polinòmica de grau $3$ té la forma:

$$
f(x)=ax^3+bx^2+cx+d
$$

on $a\\neq0$.

Per exemple:

$$
f(x)=x^3-2x+1
$$

és una funció polinòmica cúbica.

:::function-graph{expression="x^3-2*x+1" restriction="-3<=x<=3"}
:::

## Termes d'un polinomi

Un polinomi està format per **termes**.

Per exemple:

$$
f(x)=4x^3-2x^2+7x-5
$$

té quatre termes:

$$
4x^3,\\qquad -2x^2,\\qquad 7x,\\qquad -5
$$

El terme que no conté $x$ s'anomena **terme independent**.

En aquest exemple, el terme independent és $-5$.

## Coeficients

El nombre que multiplica una potència de $x$ és el seu **coeficient**.

Per exemple:

$$
f(x)=3x^4-7x^2+x+6
$$

Els coeficients són:

- coeficient de $x^4$: $3$
- coeficient de $x^3$: $0$
- coeficient de $x^2$: $-7$
- coeficient de $x$: $1$
- terme independent: $6$

Encara que $x^3$ no aparegui explícitament, el seu coeficient és $0$.

Per tant, també podem escriure:

$$
f(x)=3x^4+0x^3-7x^2+x+6
$$

## Avaluació d'una funció polinòmica

Avaluar una funció significa calcular-ne el valor per a una determinada entrada.

Considerem:

$$
f(x)=2x^2+3x-1
$$

Volem calcular $f(2)$.

Substituïm $x$ per $2$:

$$
f(2)=2(2)^2+3(2)-1
$$

A continuació:

$$
f(2)=2\\cdot4+6-1
$$

Per tant:

$$
f(2)=13
$$

Això significa que el punt $(2,13)$ pertany a la gràfica de la funció.

## Zeros d'una funció polinòmica

Un **zero** o **arrel** d'una funció és un valor de $x$ per al qual la funció pren el valor $0$.

El símbol $=$ significa que dues expressions tenen el mateix valor.

Per tant, busquem els valors de $x$ que compleixen:

$$
f(x)=0
$$

Per exemple:

$$
f(x)=x^2-5x+6
$$

Resolem:

$$
x^2-5x+6=0
$$

Podem factoritzar el polinomi:

$$
(x-2)(x-3)=0
$$

Per tant:

$$
x=2
$$

o bé:

$$
x=3
$$

Els zeros de la funció són $2$ i $3$.

## Factorització d'un polinomi

**Factoritzar** significa expressar un polinomi com un producte de factors més senzills.

Per exemple:

$$
x^2-5x+6=(x-2)(x-3)
$$

Les dues expressions representen el mateix polinomi.

La factorització és especialment útil per trobar els zeros d'una funció polinòmica.

## Multiplicitat d'una arrel

Una arrel pot aparèixer més d'una vegada en una factorització.

Per exemple:

$$
f(x)=(x-2)^2
$$

L'expressió $(x-2)^2$ significa:

$$
f(x)=(x-2)(x-2)
$$

Per tant, $x=2$ és una arrel de **multiplicitat $2$**.

De manera similar:

$$
f(x)=(x+1)^3
$$

té l'arrel $x=-1$ amb multiplicitat $3$.

La multiplicitat d'una arrel influeix en la manera com es comporta la gràfica al voltant d'aquesta arrel.

## Comportament als extrems d'una funció polinòmica

El grau i el coeficient principal ajuden a determinar el comportament de la gràfica quan $x$ pren valors molt grans en valor absolut.

Per exemple:

$$
f(x)=x^2
$$

té grau parell i coeficient principal positiu. Els seus valors es fan positius quan $x$ s'allunya de zero en qualsevol de les dues direccions.

En canvi:

$$
f(x)=x^3
$$

té grau imparell i coeficient principal positiu. Els seus valors es fan negatius per a valors negatius grans de $x$ i positius per a valors positius grans de $x$.

El comportament als extrems depèn principalment del grau i del signe del coeficient principal.

## Suma i resta de polinomis

Per sumar o restar polinomis, agrupem els **termes semblants**, és a dir, els termes que contenen la mateixa potència de $x$.

Per exemple:

$$
(3x^2+2x-1)+(x^2-5x+4)
$$

Agrupem els termes semblants:

$$
(3x^2+x^2)+(2x-5x)+(-1+4)
$$

Per tant:

$$
4x^2-3x+3
$$

## Multiplicació de polinomis

Per multiplicar polinomis utilitzem la **propietat distributiva**.

Per exemple:

$$
(x+2)(x+3)
$$

Multipliquem cada terme:

$$
x\\cdot x+x\\cdot3+2\\cdot x+2\\cdot3
$$

Per tant:

$$
x^2+3x+2x+6
$$

i, després d'agrupar els termes semblants:

$$
x^2+5x+6
$$

Així:

$$
(x+2)(x+3)=x^2+5x+6
$$

## Divisió de polinomis

Els polinomis també es poden dividir entre altres polinomis.

Per exemple:

$$
\\frac{x^2-5x+6}{x-2}
$$

Com que:

$$
x^2-5x+6=(x-2)(x-3)
$$

obtenim:

$$
\\frac{(x-2)(x-3)}{x-2}=x-3
$$

sempre que $x\\neq2$.

El símbol $\\neq$ significa **diferent de**.

Per tant:

$$
\\frac{x^2-5x+6}{x-2}=x-3,
\\qquad x\\neq2
$$

## Representació gràfica

Una funció polinòmica es pot representar mitjançant una gràfica en el pla de coordenades.

Cada valor de $x$ produeix un valor $f(x)$ i, per tant, un punt:

$$
(x,f(x))
$$

La gràfica està formada per tots els punts que compleixen aquesta relació.

Per exemple, considerem:

$$
f(x)=x^2
$$

Alguns valors són:

$$
f(-2)=4,\\qquad f(-1)=1,\\qquad f(0)=0
$$

$$
f(1)=1,\\qquad f(2)=4
$$

Els punts corresponents són:

$$
(-2,4),\\quad(-1,1),\\quad(0,0),\\quad(1,1),\\quad(2,4)
$$

Aquests punts pertanyen a la paràbola que representa la funció.

:::function-graph{expression="x^2" restriction="-3<=x<=3"}
:::

## Grau i nombre d'arrels

Una funció polinòmica de grau $n$ pot tenir com a màxim $n$ arrels reals diferents.

Per exemple, una funció quadràtica té grau $2$ i pot tenir:

- cap arrel real;
- una arrel real;
- dues arrels reals diferents.

Una funció cúbica té grau $3$ i pot tenir fins a tres arrels reals diferents.

Això no significa que un polinomi de grau $n$ tingui necessàriament $n$ arrels reals.

Per exemple:

$$
f(x)=x^2+1
$$

té grau $2$, però no té arrels reals perquè:

$$
x^2+1>0
$$

per a qualsevol nombre real $x$.

## Propietats fonamentals

Les funcions polinòmiques tenen diverses propietats importants:

- estan definides per a tots els nombres reals;
- són contínues per a tots els nombres reals;
- el seu grau determina part del seu comportament global;
- les seves arrels corresponen als punts on la gràfica talla l'eix $x$;
- el coeficient principal, juntament amb el grau, determina el comportament als extrems de la gràfica;
- un mateix polinomi es pot escriure de diferents formes equivalents, com ara la forma desenvolupada o la forma factorizada.

Per exemple, la forma desenvolupada:

$$
x^2-5x+6
$$

i la forma factorizada:

$$
(x-2)(x-3)
$$

representen el mateix polinomi.
`,s=`# Polynomial Functions

A **polynomial function** is a function that can be written as a sum of non-negative integer powers of a variable, multiplied by numbers called **coefficients**.

The general form of a polynomial function is:

$$
f(x)=a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_2x^2+a_1x+a_0
$$

Before using this expression, let us define its notation:

- $x$ is the **variable** or input of the function.
- $f(x)$ represents the **value of the function** for a given input $x$.
- $a_0,a_1,\\ldots,a_n$ are the **coefficients**.
- $n$ is a non-negative integer that determines the highest exponent of $x$.
- $x^k$ means that $x$ is multiplied by itself $k$ times.
- $\\cdots$ indicates that intermediate terms have been omitted.

For example:

$$
f(x)=2x^3-5x^2+x+4
$$

is a polynomial function.

Its coefficients are $2$, $-5$, $1$, and $4$, and its highest exponent is $3$.

## Degree of a polynomial

The **degree** of a polynomial is the highest exponent of the variable whose coefficient is not zero.

For example:

$$
f(x)=3x^4-2x^2+7
$$

has degree $4$.

The coefficient of the term with the highest degree is called the **leading coefficient**. In this example, the leading coefficient is $3$.

## Polynomial functions by degree

Polynomial functions can be classified according to their degree.

### Constant functions

A non-zero constant function has degree $0$:

$$
f(x)=a
$$

where $a$ is a real number.

For example:

$$
f(x)=4
$$

Its graph is a horizontal line.

### Linear functions

A polynomial function of degree $1$ has the form:

$$
f(x)=ax+b
$$

where $a$ and $b$ are real numbers and $a\\neq0$.

For example:

$$
f(x)=2x+1
$$

Its graph is a straight line.

### Quadratic functions

A polynomial function of degree $2$ has the form:

$$
f(x)=ax^2+bx+c
$$

where $a\\neq0$.

For example:

$$
f(x)=x^2-4x+3
$$

Its graph is a parabola.

:::function-graph{expression="x^2-4*x+3" restriction="-2<=x<=6"}
:::

### Cubic functions

A polynomial function of degree $3$ has the form:

$$
f(x)=ax^3+bx^2+cx+d
$$

where $a\\neq0$.

For example:

$$
f(x)=x^3-2x+1
$$

is a cubic polynomial function.

:::function-graph{expression="x^3-2*x+1" restriction="-3<=x<=3"}
:::

## Terms of a polynomial

A polynomial is made up of **terms**.

For example:

$$
f(x)=4x^3-2x^2+7x-5
$$

has four terms:

$$
4x^3,\\qquad -2x^2,\\qquad 7x,\\qquad -5
$$

The term that does not contain $x$ is called the **constant term**.

In this example, the constant term is $-5$.

## Coefficients

The number that multiplies a power of $x$ is its **coefficient**.

For example:

$$
f(x)=3x^4-7x^2+x+6
$$

The coefficients are:

- coefficient of $x^4$: $3$
- coefficient of $x^3$: $0$
- coefficient of $x^2$: $-7$
- coefficient of $x$: $1$
- constant term: $6$

Although $x^3$ does not appear explicitly, its coefficient is $0$.

Therefore, we can also write:

$$
f(x)=3x^4+0x^3-7x^2+x+6
$$

## Evaluating a polynomial function

Evaluating a function means calculating its value for a particular input.

Consider:

$$
f(x)=2x^2+3x-1
$$

We want to calculate $f(2)$.

We replace $x$ with $2$:

$$
f(2)=2(2)^2+3(2)-1
$$

Then:

$$
f(2)=2\\cdot4+6-1
$$

Therefore:

$$
f(2)=13
$$

This means that the point $(2,13)$ belongs to the graph of the function.

## Zeros of a polynomial function

A **zero** or **root** of a function is a value of $x$ for which the function has value $0$.

The symbol $=$ means that two expressions have the same value.

Therefore, we look for the values of $x$ that satisfy:

$$
f(x)=0
$$

For example:

$$
f(x)=x^2-5x+6
$$

We solve:

$$
x^2-5x+6=0
$$

We can factor the polynomial:

$$
(x-2)(x-3)=0
$$

Therefore:

$$
x=2
$$

or

$$
x=3
$$

The zeros of the function are $2$ and $3$.

## Factoring a polynomial

**Factoring** means expressing a polynomial as a product of simpler factors.

For example:

$$
x^2-5x+6=(x-2)(x-3)
$$

Both expressions represent the same polynomial.

Factoring is particularly useful for finding the zeros of a polynomial function.

## Multiplicity of a root

A root can occur more than once in a factorization.

For example:

$$
f(x)=(x-2)^2
$$

The expression $(x-2)^2$ means:

$$
f(x)=(x-2)(x-2)
$$

Therefore, $x=2$ is a root with **multiplicity $2$**.

Similarly:

$$
f(x)=(x+1)^3
$$

has the root $x=-1$ with multiplicity $3$.

The multiplicity of a root affects how the graph behaves near that root.

## End behavior of a polynomial function

The degree and leading coefficient help determine the behavior of the graph when $x$ becomes very large in magnitude.

For example:

$$
f(x)=x^2
$$

has even degree and a positive leading coefficient. Its values become positive when $x$ moves far from zero in either direction.

By contrast:

$$
f(x)=x^3
$$

has odd degree and a positive leading coefficient. Its values become negative for large negative $x$ and positive for large positive $x$.

The end behavior depends mainly on the degree and the sign of the leading coefficient.

## Adding and subtracting polynomials

To add or subtract polynomials, we combine **like terms**, which are terms containing the same power of $x$.

For example:

$$
(3x^2+2x-1)+(x^2-5x+4)
$$

We group like terms:

$$
(3x^2+x^2)+(2x-5x)+(-1+4)
$$

Therefore:

$$
4x^2-3x+3
$$

## Multiplying polynomials

To multiply polynomials, we use the **distributive property**.

For example:

$$
(x+2)(x+3)
$$

Multiplying each term gives:

$$
x\\cdot x+x\\cdot3+2\\cdot x+2\\cdot3
$$

Therefore:

$$
x^2+3x+2x+6
$$

and after combining like terms:

$$
x^2+5x+6
$$

Thus:

$$
(x+2)(x+3)=x^2+5x+6
$$

## Dividing polynomials

Polynomials can also be divided by other polynomials.

For example:

$$
\\frac{x^2-5x+6}{x-2}
$$

Since:

$$
x^2-5x+6=(x-2)(x-3)
$$

we obtain:

$$
\\frac{(x-2)(x-3)}{x-2}=x-3
$$

provided that $x\\neq2$.

The symbol $\\neq$ means **not equal to**.

Therefore:

$$
\\frac{x^2-5x+6}{x-2}=x-3,
\\qquad x\\neq2
$$

## Graphical representation

A polynomial function can be represented by a graph in the coordinate plane.

Each value of $x$ produces a value $f(x)$ and therefore a point:

$$
(x,f(x))
$$

The graph consists of all points that satisfy this relationship.

For example, consider:

$$
f(x)=x^2
$$

Some values are:

$$
f(-2)=4,\\qquad f(-1)=1,\\qquad f(0)=0
$$

$$
f(1)=1,\\qquad f(2)=4
$$

The corresponding points are:

$$
(-2,4),\\quad(-1,1),\\quad(0,0),\\quad(1,1),\\quad(2,4)
$$

These points belong to the parabola representing the function.

:::function-graph{expression="x^2" restriction="-3<=x<=3"}
:::

## Degree and number of roots

A polynomial function of degree $n$ can have at most $n$ distinct real roots.

For example, a quadratic function has degree $2$ and can have:

- no real roots;
- one real root;
- two distinct real roots.

A cubic function has degree $3$ and can have up to three distinct real roots.

This does not mean that a polynomial of degree $n$ necessarily has $n$ real roots.

For example:

$$
f(x)=x^2+1
$$

has degree $2$, but it has no real roots because:

$$
x^2+1>0
$$

for every real number $x$.

## Fundamental properties

Polynomial functions have several important properties:

- they are defined for every real number;
- they are continuous for every real number;
- their degree determines part of their overall behavior;
- their roots correspond to points where the graph intersects the $x$-axis;
- the leading coefficient, together with the degree, determines the end behavior of the graph;
- the same polynomial can be written in different equivalent forms, such as expanded or factored form.

For example, the expanded form:

$$
x^2-5x+6
$$

and the factored form:

$$
(x-2)(x-3)
$$

represent the same polynomial.
`;function c(){let{locale:c}=t();return e(i,{id:`polynomial-functions`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-WuYhu2Kl.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};