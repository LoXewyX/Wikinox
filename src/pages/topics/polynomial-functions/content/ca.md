# Funcions polinòmiques

Una **funció polinòmica** és una funció que es pot escriure com una suma de potències enteres no negatives d'una variable, multiplicades per nombres anomenats **coeficients**.

La forma general d'una funció polinòmica és:

$$
f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_2x^2+a_1x+a_0
$$

Abans d'utilitzar aquesta expressió, definim la seva notació:

- $x$ és la **variable** o entrada de la funció.
- $f(x)$ representa el **valor de la funció** per a una determinada entrada $x$.
- $a_0,a_1,\ldots,a_n$ són els **coeficients**.
- $n$ és un nombre enter no negatiu que determina l'exponent més gran de $x$.
- $x^k$ significa que $x$ es multiplica per si mateixa $k$ vegades.
- $\cdots$ indica que s'han omès els termes intermedis.

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

on $a$ i $b$ són nombres reals i $a\neq0$.

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

on $a\neq0$.

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

on $a\neq0$.

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
4x^3,\qquad -2x^2,\qquad 7x,\qquad -5
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
f(2)=2\cdot4+6-1
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
x\cdot x+x\cdot3+2\cdot x+2\cdot3
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
\frac{x^2-5x+6}{x-2}
$$

Com que:

$$
x^2-5x+6=(x-2)(x-3)
$$

obtenim:

$$
\frac{(x-2)(x-3)}{x-2}=x-3
$$

sempre que $x\neq2$.

El símbol $\neq$ significa **diferent de**.

Per tant:

$$
\frac{x^2-5x+6}{x-2}=x-3,
\qquad x\neq2
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
f(-2)=4,\qquad f(-1)=1,\qquad f(0)=0
$$

$$
f(1)=1,\qquad f(2)=4
$$

Els punts corresponents són:

$$
(-2,4),\quad(-1,1),\quad(0,0),\quad(1,1),\quad(2,4)
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
