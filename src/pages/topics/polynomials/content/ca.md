# Polinomis

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
x^3=x^3\cdot1
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

El grau es representa habitualment mitjançant una expressió com $\deg(P)$.

El símbol $\deg$ significa **grau**.

Per tant:

$$
\deg(P)=3
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

on $a$ i $b$ són nombres i $a\neq0$.

Per exemple:

$$
P(x)=2x+1
$$

### Polinomi de segon grau

Un polinomi de grau $2$ té la forma:

$$
P(x)=ax^2+bx+c
$$

on $a\neq0$.

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

on $a\neq0$.

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
x\cdot x+x\cdot3+2\cdot x+2\cdot3
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

El símbol $\cdot$ representa una multiplicació.

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
\frac{x^2-5x+6}{x-2}
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

El símbol $\rightarrow$ significa "tendeix cap a" o "es dirigeix cap a".

El símbol $\infty$ representa infinit.

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
