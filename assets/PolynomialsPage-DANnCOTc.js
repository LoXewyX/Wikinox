const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PolynomialGraph-5t3LBLlb.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-d08MTCHk.js","assets/index-BUO5hoW9.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-d08MTCHk.js";import{t as i}from"./TopicPage-BLzDn4N1.js";var a=`# Polinomios

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
x^3=x^3\\cdot1
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

El grado se representa habitualmente mediante una expresión como $\\deg(P)$.

El símbolo $\\deg$ significa **grado**.

Por tanto:

$$
\\deg(P)=3
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

donde $a$ y $b$ son números y $a\\neq0$.

Por ejemplo:

$$
P(x)=2x+1
$$

### Polinomio de segundo grado

Un polinomio de grado $2$ tiene la forma:

$$
P(x)=ax^2+bx+c
$$

donde $a\\neq0$.

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

donde $a\\neq0$.

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
x\\cdot x+x\\cdot3+2\\cdot x+2\\cdot3
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

El símbolo $\\cdot$ representa una multiplicación.

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
\\frac{x^2-5x+6}{x-2}
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

El símbolo $\\rightarrow$ significa "tiende hacia" o "se dirige hacia".

El símbolo $\\infty$ representa infinito.

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
`,o=`# Polinomis

Un **polinomi** és una expressió algebraica formada per sumes i restes de termes. Cada terme conté un nombre anomenat **coeficient** i, normalment, una variable elevada a una potència entera no negativa.

La variable es representa habitualment mitjançant $x$.

El símbol $+$ indica una suma i el símbol $-$ indica una resta.

Una **potència** com $x^n$ representa el producte de $x$ per si mateixa $n$ vegades. El nombre $n$ s'anomena **exponent**.

Per exemple:

$$
3x^2-5x+2
$$

és un polinomi.

## Termes d'un polinomi

Un **terme** és cadascuna de les parts d'un polinomi separades pels signes $+$ o $-$.

En el polinomi

$$
3x^2-5x+2
$$

hi ha tres termes:

- $3x^2$
- $-5x$
- $2$

El terme $2$ no conté cap variable. S'anomena **terme independent**.

## Coeficients

El **coeficient** és el nombre que multiplica una variable.

En

$$
3x^2-5x+2
$$

els coeficients són:

- $3$, coeficient de $x^2$.
- $-5$, coeficient de $x$.
- $2$, terme independent.

Quan un terme no mostra explícitament el seu coeficient, s'entén que és $1$ o $-1$.

Per exemple:

$$
x^3=x^3\\cdot1
$$

i

$$
-x^2=-1x^2
$$

## Grau d'un polinomi

El **grau** d'un polinomi és l'exponent més gran de la variable que apareix amb un coeficient diferent de zero.

Per exemple:

$$
4x^3-2x^2+x-7
$$

té grau $3$ perquè l'exponent més gran és $3$.

El grau es representa habitualment mitjançant una expressió com $\\deg(P)$.

El símbol $\\deg$ significa **grau**.

Per tant:

$$
\\deg(P)=3
$$

## Polinomis segons el seu grau

Els polinomis es poden classificar segons el seu grau.

### Polinomi constant

Un polinomi de grau $0$ no conté cap variable.

Per exemple:

$$
P(x)=5
$$

### Polinomi de primer grau

Un polinomi de grau $1$ té la forma:

$$
P(x)=ax+b
$$

on $a$ i $b$ són nombres i $a\\neq0$.

Per exemple:

$$
P(x)=2x+1
$$

### Polinomi de segon grau

Un polinomi de grau $2$ té la forma:

$$
P(x)=ax^2+bx+c
$$

on $a\\neq0$.

Per exemple:

$$
P(x)=x^2-4x+3
$$

La seva representació gràfica permet observar algunes de les seves propietats.

:::polynomial-graph{expression="x^2-4*x+3" min="-2" max="6"}
:::

### Polinomi de tercer grau

Un polinomi de grau $3$ té la forma:

$$
P(x)=ax^3+bx^2+cx+d
$$

on $a\\neq0$.

Per exemple:

$$
P(x)=x^3-3x
$$

:::polynomial-graph{expression="x^3-3*x" min="-3" max="3"}
:::

## Valor d'un polinomi

Per calcular el **valor d'un polinomi**, substituïm la variable per un nombre.

El símbol $=$ significa que dues expressions tenen el mateix valor.

Per exemple, sigui:

$$
P(x)=2x^2-3x+1
$$

Si volem calcular $P(2)$, substituïm $x$ per $2$:

$$
P(2)=2(2)^2-3(2)+1
$$

Calculem les potències i les operacions:

$$
P(2)=8-6+1=3
$$

Per tant:

$$
P(2)=3
$$

## Polinomis semblants

Dos termes són **semblants** quan tenen la mateixa variable elevada al mateix exponent.

Per exemple:

$$
3x^2
$$

i

$$
-5x^2
$$

són termes semblants.

En canvi:

$$
3x^2
$$

i

$$
3x
$$

no són semblants perquè els seus exponents són diferents.

Els termes semblants es poden combinar mitjançant suma o resta.

Per exemple:

$$
3x^2-5x^2=-2x^2
$$

## Suma de polinomis

Per sumar polinomis, agrupem els termes semblants.

Per exemple:

$$
(3x^2+2x+1)+(x^2-5x+4)
$$

Agrupem els termes semblants:

$$
3x^2+x^2+2x-5x+1+4
$$

i obtenim:

$$
4x^2-3x+5
$$

## Resta de polinomis

Per restar polinomis, canviem el signe de cada terme del polinomi que es resta i després agrupem els termes semblants.

Per exemple:

$$
(3x^2+2x+1)-(x^2-5x+4)
$$

es transforma en:

$$
3x^2+2x+1-x^2+5x-4
$$

Per tant:

$$
2x^2+7x-3
$$

## Multiplicació de polinomis

Per multiplicar polinomis, cada terme d'un polinomi es multiplica per cada terme de l'altre.

Per exemple:

$$
(x+2)(x+3)
$$

Multipliquem cada terme:

$$
x\\cdot x+x\\cdot3+2\\cdot x+2\\cdot3
$$

Obtenim:

$$
x^2+3x+2x+6
$$

i simplifiquem:

$$
x^2+5x+6
$$

## Potències de polinomis

Una potència indica que una expressió es multiplica per si mateixa.

Per exemple:

$$
(x+2)^2
$$

significa:

$$
(x+2)(x+2)
$$

En desenvolupar:

$$
x^2+4x+4
$$

Per tant:

$$
(x+2)^2=x^2+4x+4
$$

## Factorització

**Factoritzar** un polinomi significa escriure'l com un producte de factors més senzills.

El símbol $\\cdot$ representa una multiplicació.

Per exemple:

$$
x^2-5x+6
$$

es pot factoritzar com:

$$
(x-2)(x-3)
$$

perquè:

$$
(x-2)(x-3)=x^2-5x+6
$$

## Arrels o zeros d'un polinomi

Una **arrel** o **zero** d'un polinomi és un valor de $x$ per al qual el polinomi val zero.

El nombre $0$ representa l'element neutre de la suma.

Per exemple, per a:

$$
P(x)=x^2-5x+6
$$

busquem els valors que compleixen:

$$
P(x)=0
$$

Factoritzem:

$$
(x-2)(x-3)=0
$$

Les arrels són:

$$
x=2
$$

i

$$
x=3
$$

En la representació gràfica, les arrels corresponen als punts on la corba talla l'eix $x$.

:::polynomial-graph{expression="x^2-5*x+6" min="-1" max="6"}
:::

## Multiplicitat d'una arrel

La **multiplicitat** indica quantes vegades apareix un factor associat a una arrel.

Per exemple:

$$
P(x)=(x-2)^2
$$

té l'arrel $x=2$ amb multiplicitat $2$.

En canvi:

$$
P(x)=(x-2)^3
$$

té l'arrel $x=2$ amb multiplicitat $3$.

La multiplicitat pot afectar la manera com la gràfica es comporta al voltant d'una arrel.

## Divisió de polinomis

Els polinomis també es poden dividir.

Per exemple:

$$
\\frac{x^2-5x+6}{x-2}
$$

El resultat és:

$$
x-3
$$

perquè:

$$
(x-2)(x-3)=x^2-5x+6
$$

En una divisió de polinomis poden aparèixer un **quocient** i un **residu**.

## Teorema del residu

El **teorema del residu** permet calcular ràpidament el residu de la divisió d'un polinomi $P(x)$ entre un polinomi de la forma $x-a$.

El símbol $a$ representa un nombre.

El teorema estableix que el residu és:

$$
P(a)
$$

Per exemple, si:

$$
P(x)=x^2+3x+2
$$

i dividim entre:

$$
x-1
$$

el residu és:

$$
P(1)=1^2+3(1)+2=6
$$

## Comportament d'un polinomi

El **comportament** d'un polinomi descriu com canvia el seu valor quan $x$ augmenta o disminueix.

El símbol $\\rightarrow$ significa "tendeix cap a" o "es dirigeix cap a".

El símbol $\\infty$ representa infinit.

Per exemple, per a:

$$
P(x)=x^2
$$

quan $x$ augmenta en valor absolut, $P(x)$ també augmenta.

:::polynomial-graph{expression="x^2" min="-5" max="5"}
:::

Per a un polinomi de grau imparell, el comportament als dos extrems pot ser diferent.

Per exemple:

$$
P(x)=x^3
$$

:::polynomial-graph{expression="x^3" min="-5" max="5"}
:::

## Nombre d'arrels

Un polinomi de grau $n$ pot tenir com a màxim $n$ arrels reals diferents.

Per exemple:

- Un polinomi de grau $1$ pot tenir com a màxim una arrel real.
- Un polinomi de grau $2$ pot tenir com a màxim dues arrels reals.
- Un polinomi de grau $3$ pot tenir com a màxim tres arrels reals.

Que un polinomi tingui grau $n$ no significa necessàriament que tingui exactament $n$ arrels reals.

Per exemple:

$$
P(x)=x^2+1
$$

té grau $2$, però no té arrels reals perquè $x^2$ mai és negatiu.

## Identitat entre polinomis

Dos polinomis són idèntics quan tenen els mateixos coeficients en els termes corresponents.

Per exemple:

$$
P(x)=2x^2+3x+1
$$

i

$$
Q(x)=2x^2+3x+1
$$

són el mateix polinomi.

També podem escriure:

$$
P(x)=Q(x)
$$

quan ambdues expressions representen el mateix polinomi.
`,s=`# Polynomials

A **polynomial** is an algebraic expression formed by sums and differences of terms. Each term contains a number called a **coefficient** and, usually, a variable raised to a non-negative integer power.

The variable is commonly represented by $x$.

The symbol $+$ indicates addition and the symbol $-$ indicates subtraction.

A **power** such as $x^n$ represents multiplying $x$ by itself $n$ times. The number $n$ is called the **exponent**.

For example:

$$
3x^2-5x+2
$$

is a polynomial.

## Terms of a polynomial

A **term** is each part of a polynomial separated by the signs $+$ or $-$.

In the polynomial

$$
3x^2-5x+2
$$

there are three terms:

- $3x^2$
- $-5x$
- $2$

The term $2$ does not contain a variable. It is called the **constant term**.

## Coefficients

The **coefficient** is the number that multiplies a variable.

In

$$
3x^2-5x+2
$$

the coefficients are:

- $3$, the coefficient of $x^2$.
- $-5$, the coefficient of $x$.
- $2$, the constant term.

When the coefficient of a term is not explicitly shown, it is understood to be $1$ or $-1$.

For example:

$$
x^3=x^3\\cdot1
$$

and

$$
-x^2=-1x^2
$$

## Degree of a polynomial

The **degree** of a polynomial is the greatest exponent of the variable that has a non-zero coefficient.

For example:

$$
4x^3-2x^2+x-7
$$

has degree $3$ because the greatest exponent is $3$.

The degree is commonly represented using an expression such as $\\deg(P)$.

The symbol $\\deg$ means **degree**.

Therefore:

$$
\\deg(P)=3
$$

## Polynomials by degree

Polynomials can be classified according to their degree.

### Constant polynomial

A polynomial of degree $0$ contains no variable.

For example:

$$
P(x)=5
$$

### Linear polynomial

A polynomial of degree $1$ has the form:

$$
P(x)=ax+b
$$

where $a$ and $b$ are numbers and $a\\neq0$.

For example:

$$
P(x)=2x+1
$$

### Quadratic polynomial

A polynomial of degree $2$ has the form:

$$
P(x)=ax^2+bx+c
$$

where $a\\neq0$.

For example:

$$
P(x)=x^2-4x+3
$$

Its graph allows us to observe some of its properties.

:::polynomial-graph{expression="x^2-4*x+3" min="-2" max="6"}
:::

### Cubic polynomial

A polynomial of degree $3$ has the form:

$$
P(x)=ax^3+bx^2+cx+d
$$

where $a\\neq0$.

For example:

$$
P(x)=x^3-3x
$$

:::polynomial-graph{expression="x^3-3*x" min="-3" max="3"}
:::

## Value of a polynomial

To calculate the **value of a polynomial**, we substitute a number for the variable.

The symbol $=$ means that two expressions have the same value.

For example, let:

$$
P(x)=2x^2-3x+1
$$

If we want to calculate $P(2)$, we substitute $x$ with $2$:

$$
P(2)=2(2)^2-3(2)+1
$$

We calculate the powers and operations:

$$
P(2)=8-6+1=3
$$

Therefore:

$$
P(2)=3
$$

## Like terms

Two terms are **like terms** when they contain the same variable raised to the same exponent.

For example:

$$
3x^2
$$

and

$$
-5x^2
$$

are like terms.

However:

$$
3x^2
$$

and

$$
3x
$$

are not like terms because their exponents are different.

Like terms can be combined using addition or subtraction.

For example:

$$
3x^2-5x^2=-2x^2
$$

## Adding polynomials

To add polynomials, we group like terms.

For example:

$$
(3x^2+2x+1)+(x^2-5x+4)
$$

We group like terms:

$$
3x^2+x^2+2x-5x+1+4
$$

and obtain:

$$
4x^2-3x+5
$$

## Subtracting polynomials

To subtract polynomials, we change the sign of each term in the polynomial being subtracted and then group like terms.

For example:

$$
(3x^2+2x+1)-(x^2-5x+4)
$$

becomes:

$$
3x^2+2x+1-x^2+5x-4
$$

Therefore:

$$
2x^2+7x-3
$$

## Multiplying polynomials

To multiply polynomials, each term of one polynomial is multiplied by each term of the other.

For example:

$$
(x+2)(x+3)
$$

We multiply each term:

$$
x\\cdot x+x\\cdot3+2\\cdot x+2\\cdot3
$$

We obtain:

$$
x^2+3x+2x+6
$$

and simplify:

$$
x^2+5x+6
$$

## Powers of polynomials

A power indicates that an expression is multiplied by itself.

For example:

$$
(x+2)^2
$$

means:

$$
(x+2)(x+2)
$$

Expanding gives:

$$
x^2+4x+4
$$

Therefore:

$$
(x+2)^2=x^2+4x+4
$$

## Factoring

**Factoring** a polynomial means writing it as a product of simpler factors.

The symbol $\\cdot$ represents multiplication.

For example:

$$
x^2-5x+6
$$

can be factored as:

$$
(x-2)(x-3)
$$

because:

$$
(x-2)(x-3)=x^2-5x+6
$$

## Roots or zeros of a polynomial

A **root** or **zero** of a polynomial is a value of $x$ for which the polynomial equals zero.

The number $0$ represents the additive identity.

For example, for:

$$
P(x)=x^2-5x+6
$$

we look for the values that satisfy:

$$
P(x)=0
$$

We factor the polynomial:

$$
(x-2)(x-3)=0
$$

The roots are:

$$
x=2
$$

and

$$
x=3
$$

On the graph, the roots correspond to the points where the curve crosses the $x$-axis.

:::polynomial-graph{expression="x^2-5*x+6" min="-1" max="6"}
:::

## Multiplicity of a root

The **multiplicity** indicates how many times a factor associated with a root appears.

For example:

$$
P(x)=(x-2)^2
$$

has the root $x=2$ with multiplicity $2$.

In contrast:

$$
P(x)=(x-2)^3
$$

has the root $x=2$ with multiplicity $3$.

Multiplicity can affect how the graph behaves around a root.

## Polynomial division

Polynomials can also be divided.

For example:

$$
\\frac{x^2-5x+6}{x-2}
$$

gives:

$$
x-3
$$

because:

$$
(x-2)(x-3)=x^2-5x+6
$$

A polynomial division can produce a **quotient** and a **remainder**.

## Remainder theorem

The **remainder theorem** allows us to quickly calculate the remainder when a polynomial $P(x)$ is divided by a polynomial of the form $x-a$.

The symbol $a$ represents a number.

The theorem states that the remainder is:

$$
P(a)
$$

For example, if:

$$
P(x)=x^2+3x+2
$$

and we divide by:

$$
x-1
$$

the remainder is:

$$
P(1)=1^2+3(1)+2=6
$$

## Polynomial behavior

The **behavior** of a polynomial describes how its value changes as $x$ increases or decreases.

The symbol $\\rightarrow$ means "approaches" or "tends toward".

The symbol $\\infty$ represents infinity.

For example, for:

$$
P(x)=x^2
$$

as the absolute value of $x$ increases, $P(x)$ also increases.

:::polynomial-graph{expression="x^2" min="-5" max="5"}
:::

For an odd-degree polynomial, the behavior at the two ends can be different.

For example:

$$
P(x)=x^3
$$

:::polynomial-graph{expression="x^3" min="-5" max="5"}
:::

## Number of roots

A polynomial of degree $n$ can have at most $n$ distinct real roots.

For example:

- A degree $1$ polynomial can have at most one real root.
- A degree $2$ polynomial can have at most two real roots.
- A degree $3$ polynomial can have at most three real roots.

Having degree $n$ does not necessarily mean that a polynomial has exactly $n$ real roots.

For example:

$$
P(x)=x^2+1
$$

has degree $2$, but it has no real roots because $x^2$ is never negative.

## Identity between polynomials

Two polynomials are identical when they have the same coefficients in corresponding terms.

For example:

$$
P(x)=2x^2+3x+1
$$

and

$$
Q(x)=2x^2+3x+1
$$

are the same polynomial.

We can also write:

$$
P(x)=Q(x)
$$

when both expressions represent the same polynomial.
`;function c(){let{locale:c}=t();return e(i,{id:`polynomials`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"polynomial-graph":n(()=>r(()=>import(`./PolynomialGraph-5t3LBLlb.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};