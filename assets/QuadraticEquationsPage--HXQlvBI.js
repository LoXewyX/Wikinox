const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-Cuk8m7yK.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-CQZABaDC.js","assets/index-DhjOBkmr.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-CQZABaDC.js";import{t as i}from"./TopicPage-DyShI14R.js";var a=`# Ecuaciones de segundo grado

Una **ecuación de segundo grado** es una ecuación polinómica en la que la incógnita aparece elevada, como máximo, al exponente $2$ y el coeficiente de $x^2$ es distinto de cero.

Su forma general es:

$$
ax^2+bx+c=0
$$

donde:

- $a$, $b$ y $c$ son números reales;
- $a\\neq0$;
- $x$ es la incógnita.

Por ejemplo:

$$
2x^2-5x+3=0
$$

es una ecuación de segundo grado porque el término de mayor grado es $2x^2$.

## Coeficientes

En la ecuación

$$
ax^2+bx+c=0
$$

los valores $a$, $b$ y $c$ reciben nombres específicos:

- $a$ es el **coeficiente cuadrático**;
- $b$ es el **coeficiente lineal**;
- $c$ es el **término independiente**.

Por ejemplo, en

$$
3x^2-7x+2=0
$$

tenemos:

$$
a=3,\\qquad b=-7,\\qquad c=2
$$

Es importante identificar correctamente los signos de los coeficientes antes de aplicar cualquier método de resolución.

## Resolver una ecuación de segundo grado

Resolver una ecuación de segundo grado significa encontrar todos los valores de $x$ que hacen verdadera la igualdad.

Por ejemplo:

$$
x^2-5x+6=0
$$

Podemos factorizar:

$$
(x-2)(x-3)=0
$$

Un producto es cero cuando al menos uno de sus factores es cero:

$$
x-2=0
$$

o

$$
x-3=0
$$

Por tanto:

$$
\\boxed{x=2,\\quad x=3}
$$

## Fórmula cuadrática

La fórmula cuadrática permite resolver cualquier ecuación de segundo grado real:

$$
ax^2+bx+c=0
$$

siempre que:

$$
a\\neq0
$$

Las soluciones vienen dadas por:

$$
x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}
$$

El símbolo $\\pm$ indica que debemos considerar dos posibilidades:

$$
x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}
$$

y

$$
x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}
$$

## El discriminante

La expresión que aparece dentro de la raíz cuadrada recibe el nombre de **discriminante**:

$$
\\Delta=b^2-4ac
$$

El discriminante permite determinar el número de soluciones reales de una ecuación de segundo grado.

### Si $\\Delta>0$

Existen **dos soluciones reales distintas**:

$$
x_1\\neq x_2
$$

Por ejemplo:

$$
x^2-5x+6=0
$$

Aquí:

$$
a=1,\\qquad b=-5,\\qquad c=6
$$

Calculamos:

$$
\\Delta=(-5)^2-4(1)(6)
$$

$$
\\Delta=25-24=1
$$

Como:

$$
\\Delta>0
$$

hay dos soluciones reales:

$$
x_1=2,\\qquad x_2=3
$$

### Si $\\Delta=0$

Existe **una única solución real**, que es una raíz doble:

$$
x_1=x_2
$$

Por ejemplo:

$$
x^2-4x+4=0
$$

El discriminante es:

$$
\\Delta=(-4)^2-4(1)(4)=0
$$

Por tanto:

$$
x=\\frac{4}{2}=2
$$

La solución es:

$$
\\boxed{x=2}
$$

### Si $\\Delta<0$

No existen soluciones reales.

Por ejemplo:

$$
x^2+4x+5=0
$$

Tenemos:

$$
\\Delta=4^2-4(1)(5)
$$

$$
\\Delta=16-20=-4
$$

Como:

$$
\\Delta<0
$$

la ecuación no tiene soluciones reales.

## Método de factorización

Cuando una ecuación se puede factorizar fácilmente, la factorización suele ser una forma rápida de resolverla.

Consideremos:

$$
x^2-7x+12=0
$$

Buscamos dos números cuyo producto sea $12$ y cuya suma sea $-7$:

$$
-3\\cdot-4=12
$$

y

$$
-3+(-4)=-7
$$

Por tanto:

$$
x^2-7x+12=(x-3)(x-4)
$$

La ecuación queda:

$$
(x-3)(x-4)=0
$$

Por tanto:

$$
x=3
\\quad\\text{o}\\quad
x=4
$$

Las soluciones son:

$$
\\boxed{x=3,\\quad x=4}
$$

## Ecuaciones incompletas

Una ecuación de segundo grado es **incompleta** cuando alguno de los coeficientes $b$ o $c$ es cero.

### Caso $b=0$

Tenemos:

$$
ax^2+c=0
$$

Por ejemplo:

$$
2x^2-18=0
$$

Sumamos $18$:

$$
2x^2=18
$$

Dividimos entre $2$:

$$
x^2=9
$$

Por tanto:

$$
x=\\pm3
$$

Las soluciones son:

$$
\\boxed{x=3,\\quad x=-3}
$$

### Caso $c=0$

Tenemos:

$$
ax^2+bx=0
$$

Sacamos factor común:

$$
x(ax+b)=0
$$

Por ejemplo:

$$
x^2-5x=0
$$

Factorizamos:

$$
x(x-5)=0
$$

Por tanto:

$$
x=0
\\quad\\text{o}\\quad
x=5
$$

Las soluciones son:

$$
\\boxed{x=0,\\quad x=5}
$$

## Forma canónica

Una función cuadrática puede escribirse en **forma canónica** como:

$$
f(x)=a(x-h)^2+k
$$

En esta forma, el punto:

$$
(h,k)
$$

es el **vértice** de la parábola.

Por ejemplo:

$$
f(x)=(x-2)^2-3
$$

tiene el vértice:

$$
(2,-3)
$$

La forma canónica permite identificar directamente el vértice y estudiar el comportamiento de la parábola.

## Representación gráfica

Una ecuación de segundo grado está relacionada con una parábola.

Por ejemplo:

$$
x^2-5x+6=0
$$

podemos asociarla con la función:

$$
f(x)=x^2-5x+6
$$

Sus soluciones son los valores de $x$ para los que:

$$
f(x)=0
$$

Por tanto, las soluciones corresponden a las intersecciones de la parábola con el eje $x$.

:::function-graph{expression="x^2-5*x+6" restriction="-2<=x<=7"}
:::

En este caso, la parábola corta el eje $x$ en:

$$
x=2
\\quad\\text{y}\\quad
x=3
$$

Por eso la ecuación tiene dos soluciones reales.

## Relación entre el discriminante y la gráfica

El discriminante también tiene una interpretación geométrica.

### $\\Delta>0$

La parábola corta el eje $x$ en dos puntos.

$$
\\boxed{\\text{2 soluciones reales}}
$$

### $\\Delta=0$

La parábola toca el eje $x$ en un único punto.

$$
\\boxed{\\text{1 solución real doble}}
$$

### $\\Delta<0$

La parábola no corta el eje $x$.

$$
\\boxed{\\text{0 soluciones reales}}
$$

Esta relación permite interpretar algebraicamente y gráficamente el mismo problema.

## Coordenadas del vértice

Para una función cuadrática:

$$
f(x)=ax^2+bx+c
$$

la coordenada $x$ del vértice es:

$$
x_v=-\\frac{b}{2a}
$$

La coordenada $y$ se obtiene sustituyendo este valor en la función:

$$
y_v=f(x_v)
$$

Por tanto, el vértice es:

$$
V\\left(-\\frac{b}{2a},f\\left(-\\frac{b}{2a}\\right)\\right)
$$

Por ejemplo:

$$
f(x)=x^2-4x+3
$$

Tenemos:

$$
a=1,\\qquad b=-4
$$

Entonces:

$$
x_v=-\\frac{-4}{2(1)}=2
$$

Calculamos la coordenada $y$:

$$
y_v=2^2-4(2)+3=-1
$$

Por tanto:

$$
\\boxed{V=(2,-1)}
$$

## Eje de simetría

La parábola es simétrica respecto de una recta vertical.

Esta recta se denomina **eje de simetría** y tiene ecuación:

$$
x=-\\frac{b}{2a}
$$

Por ejemplo, para:

$$
f(x)=x^2-4x+3
$$

el eje de simetría es:

$$
x=2
$$

## Concavidad

El signo de $a$ determina la orientación de la parábola.

Si:

$$
a>0
$$

la parábola abre hacia arriba.

Si:

$$
a<0
$$

la parábola abre hacia abajo.

Por ejemplo:

$$
f(x)=x^2
$$

abre hacia arriba, mientras que:

$$
g(x)=-x^2
$$

abre hacia abajo.

## Suma y producto de las raíces

Si una ecuación de segundo grado tiene dos raíces $x_1$ y $x_2$:

$$
ax^2+bx+c=0
$$

entonces se cumplen las relaciones:

$$
x_1+x_2=-\\frac{b}{a}
$$

y

$$
x_1x_2=\\frac{c}{a}
$$

Estas relaciones se conocen como **relaciones de Viète**.

Por ejemplo:

$$
2x^2-6x+4=0
$$

Si sus raíces son $x_1$ y $x_2$, entonces:

$$
x_1+x_2=\\frac{6}{2}=3
$$

y

$$
x_1x_2=\\frac{4}{2}=2
$$

Las raíces son $1$ y $2$, y efectivamente:

$$
1+2=3
$$

$$
1\\cdot2=2
$$

## Comprobación de las soluciones

Después de resolver una ecuación de segundo grado conviene comprobar las soluciones en la ecuación original.

Por ejemplo:

$$
x^2-5x+6=0
$$

Las soluciones son:

$$
x=2,\\qquad x=3
$$

Comprobamos $x=2$:

$$
2^2-5(2)+6=0
$$

$$
4-10+6=0
$$

Comprobamos $x=3$:

$$
3^2-5(3)+6=0
$$

$$
9-15+6=0
$$

Ambas soluciones satisfacen la ecuación.

## Errores frecuentes

Al resolver ecuaciones de segundo grado conviene evitar estos errores:

- olvidar que $a\\neq0$;
- copiar incorrectamente el signo de $b$;
- calcular mal el discriminante;
- olvidar el símbolo $\\pm$ en la fórmula cuadrática;
- dividir únicamente una parte de la expresión entre $2a$;
- perder una solución al extraer una raíz cuadrada;
- no comprobar las soluciones;
- confundir el vértice con una raíz.

En particular, recuerda que:

$$
\\sqrt{x^2}=|x|
$$

y no simplemente $x$.

## Resumen de métodos de resolución

Dependiendo de la ecuación, podemos utilizar diferentes métodos:

1. **Factorización**, cuando la expresión se puede factorizar fácilmente.
2. **Extracción de la raíz cuadrada**, especialmente en ecuaciones incompletas.
3. **Fórmula cuadrática**, que funciona para cualquier ecuación de segundo grado.
4. **Completación del cuadrado**, útil para obtener la forma canónica.

La fórmula cuadrática es el método general:

$$
\\boxed{x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}}
$$
`,o=`# Equacions de segon grau

Una **equació de segon grau** és una equació polinòmica en què la incògnita apareix, com a màxim, amb exponent $2$ i el coeficient de $x^2$ és diferent de zero.

La seva forma general és:

$$
ax^2+bx+c=0
$$

on:

- $a$, $b$ i $c$ són nombres reals;
- $a\\neq0$;
- $x$ és la incògnita.

Per exemple:

$$
2x^2-5x+3=0
$$

és una equació de segon grau perquè el terme de grau més alt és $2x^2$.

## Coeficients

A l'equació

$$
ax^2+bx+c=0
$$

els valors $a$, $b$ i $c$ reben noms específics:

- $a$ és el **coeficient quadràtic**;
- $b$ és el **coeficient lineal**;
- $c$ és el **terme independent**.

Per exemple, en

$$
3x^2-7x+2=0
$$

tenim:

$$
a=3,\\qquad b=-7,\\qquad c=2
$$

És important identificar correctament els signes dels coeficients abans d'aplicar qualsevol mètode de resolució.

## Resoldre una equació de segon grau

Resoldre una equació de segon grau significa trobar tots els valors de $x$ que fan certa la igualtat.

Per exemple:

$$
x^2-5x+6=0
$$

Podem factoritzar:

$$
(x-2)(x-3)=0
$$

Un producte és zero quan almenys un dels seus factors és zero:

$$
x-2=0
$$

o

$$
x-3=0
$$

Per tant:

$$
\\boxed{x=2,\\quad x=3}
$$

## Fórmula quadràtica

La fórmula quadràtica permet resoldre qualsevol equació de segon grau real:

$$
ax^2+bx+c=0
$$

sempre que:

$$
a\\neq0
$$

Les solucions venen donades per:

$$
x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}
$$

El símbol $\\pm$ indica que hem de considerar dues possibilitats:

$$
x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}
$$

i

$$
x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}
$$

## El discriminant

L'expressió que apareix dins de l'arrel quadrada rep el nom de **discriminant**:

$$
\\Delta=b^2-4ac
$$

El discriminant permet determinar el nombre de solucions reals d'una equació de segon grau.

### Si $\\Delta>0$

Hi ha **dues solucions reals diferents**:

$$
x_1\\neq x_2
$$

Per exemple:

$$
x^2-5x+6=0
$$

Aquí:

$$
a=1,\\qquad b=-5,\\qquad c=6
$$

Calculem:

$$
\\Delta=(-5)^2-4(1)(6)
$$

$$
\\Delta=25-24=1
$$

Com que:

$$
\\Delta>0
$$

hi ha dues solucions reals:

$$
x_1=2,\\qquad x_2=3
$$

### Si $\\Delta=0$

Hi ha **una única solució real**, que és una arrel doble:

$$
x_1=x_2
$$

Per exemple:

$$
x^2-4x+4=0
$$

El discriminant és:

$$
\\Delta=(-4)^2-4(1)(4)=0
$$

Per tant:

$$
x=\\frac{4}{2}=2
$$

La solució és:

$$
\\boxed{x=2}
$$

### Si $\\Delta<0$

No hi ha solucions reals.

Per exemple:

$$
x^2+4x+5=0
$$

Tenim:

$$
\\Delta=4^2-4(1)(5)
$$

$$
\\Delta=16-20=-4
$$

Com que:

$$
\\Delta<0
$$

l'equació no té solucions reals.

## Mètode de factorització

Quan una equació es pot factoritzar fàcilment, la factorització sol ser una manera ràpida de resoldre-la.

Considerem:

$$
x^2-7x+12=0
$$

Busquem dos nombres el producte dels quals sigui $12$ i la suma dels quals sigui $-7$:

$$
-3\\cdot-4=12
$$

i

$$
-3+(-4)=-7
$$

Per tant:

$$
x^2-7x+12=(x-3)(x-4)
$$

L'equació queda:

$$
(x-3)(x-4)=0
$$

Per tant:

$$
x=3
\\quad\\text{o}\\quad
x=4
$$

Les solucions són:

$$
\\boxed{x=3,\\quad x=4}
$$

## Equacions incompletes

Una equació de segon grau és **incompleta** quan algun dels coeficients $b$ o $c$ és zero.

### Cas $b=0$

Tenim:

$$
ax^2+c=0
$$

Per exemple:

$$
2x^2-18=0
$$

Sumem $18$:

$$
2x^2=18
$$

Dividim entre $2$:

$$
x^2=9
$$

Per tant:

$$
x=\\pm3
$$

Les solucions són:

$$
\\boxed{x=3,\\quad x=-3}
$$

### Cas $c=0$

Tenim:

$$
ax^2+bx=0
$$

Traiem factor comú:

$$
x(ax+b)=0
$$

Per exemple:

$$
x^2-5x=0
$$

Factoritzem:

$$
x(x-5)=0
$$

Per tant:

$$
x=0
\\quad\\text{o}\\quad
x=5
$$

Les solucions són:

$$
\\boxed{x=0,\\quad x=5}
$$

## Forma canònica

Una funció quadràtica es pot escriure en **forma canònica** com:

$$
f(x)=a(x-h)^2+k
$$

En aquesta forma, el punt:

$$
(h,k)
$$

és el **vèrtex** de la paràbola.

Per exemple:

$$
f(x)=(x-2)^2-3
$$

té el vèrtex:

$$
(2,-3)
$$

La forma canònica permet identificar directament el vèrtex i estudiar el comportament de la paràbola.

## Representació gràfica

Una equació de segon grau està relacionada amb una paràbola.

Per exemple:

$$
x^2-5x+6=0
$$

es pot associar amb la funció:

$$
f(x)=x^2-5x+6
$$

Les seves solucions són els valors de $x$ per als quals:

$$
f(x)=0
$$

Per tant, les solucions corresponen a les interseccions de la paràbola amb l'eix $x$.

:::function-graph{expression="x^2-5*x+6" restriction="-2<=x<=7"}
:::

En aquest cas, la paràbola talla l'eix $x$ en:

$$
x=2
\\quad\\text{i}\\quad
x=3
$$

Per això l'equació té dues solucions reals.

## Relació entre el discriminant i la gràfica

El discriminant també té una interpretació geomètrica.

### $\\Delta>0$

La paràbola talla l'eix $x$ en dos punts.

$$
\\boxed{\\text{2 solucions reals}}
$$

### $\\Delta=0$

La paràbola toca l'eix $x$ en un únic punt.

$$
\\boxed{\\text{1 solució real doble}}
$$

### $\\Delta<0$

La paràbola no talla l'eix $x$.

$$
\\boxed{\\text{0 solucions reals}}
$$

Aquesta relació permet interpretar algebraicament i gràficament el mateix problema.

## Coordenades del vèrtex

Per a una funció quadràtica:

$$
f(x)=ax^2+bx+c
$$

la coordenada $x$ del vèrtex és:

$$
x_v=-\\frac{b}{2a}
$$

La coordenada $y$ s'obté substituint aquest valor a la funció:

$$
y_v=f(x_v)
$$

Per tant, el vèrtex és:

$$
V\\left(-\\frac{b}{2a},f\\left(-\\frac{b}{2a}\\right)\\right)
$$

Per exemple:

$$
f(x)=x^2-4x+3
$$

Tenim:

$$
a=1,\\qquad b=-4
$$

Aleshores:

$$
x_v=-\\frac{-4}{2(1)}=2
$$

Calculem la coordenada $y$:

$$
y_v=2^2-4(2)+3=-1
$$

Per tant:

$$
\\boxed{V=(2,-1)}
$$

## Eix de simetria

La paràbola és simètrica respecte d'una recta vertical.

Aquesta recta s'anomena **eix de simetria** i té l'equació:

$$
x=-\\frac{b}{2a}
$$

Per exemple, per a:

$$
f(x)=x^2-4x+3
$$

l'eix de simetria és:

$$
x=2
$$

## Concavitat

El signe de $a$ determina l'orientació de la paràbola.

Si:

$$
a>0
$$

la paràbola s'obre cap amunt.

Si:

$$
a<0
$$

la paràbola s'obre cap avall.

Per exemple:

$$
f(x)=x^2
$$

s'obre cap amunt, mentre que:

$$
g(x)=-x^2
$$

s'obre cap avall.

## Suma i producte de les arrels

Si una equació de segon grau té dues arrels $x_1$ i $x_2$:

$$
ax^2+bx+c=0
$$

aleshores es compleixen les relacions:

$$
x_1+x_2=-\\frac{b}{a}
$$

i

$$
x_1x_2=\\frac{c}{a}
$$

Aquestes relacions es coneixen com a **relacions de Viète**.

Per exemple:

$$
2x^2-6x+4=0
$$

Si les seves arrels són $x_1$ i $x_2$, aleshores:

$$
x_1+x_2=\\frac{6}{2}=3
$$

i

$$
x_1x_2=\\frac{4}{2}=2
$$

Les arrels són $1$ i $2$, i efectivament:

$$
1+2=3
$$

$$
1\\cdot2=2
$$

## Comprovació de les solucions

Després de resoldre una equació de segon grau convé comprovar les solucions a l'equació original.

Per exemple:

$$
x^2-5x+6=0
$$

Les solucions són:

$$
x=2,\\qquad x=3
$$

Comprovem $x=2$:

$$
2^2-5(2)+6=0
$$

$$
4-10+6=0
$$

Comprovem $x=3$:

$$
3^2-5(3)+6=0
$$

$$
9-15+6=0
$$

Ambdues solucions satisfan l'equació.

## Errors freqüents

En resoldre equacions de segon grau convé evitar aquests errors:

- oblidar que $a\\neq0$;
- copiar incorrectament el signe de $b$;
- calcular malament el discriminant;
- oblidar el símbol $\\pm$ a la fórmula quadràtica;
- dividir només una part de l'expressió entre $2a$;
- perdre una solució en extreure una arrel quadrada;
- no comprovar les solucions;
- confondre el vèrtex amb una arrel.

En particular, recorda que:

$$
\\sqrt{x^2}=|x|
$$

i no simplement $x$.

## Resum dels mètodes de resolució

Segons l'equació, podem utilitzar diferents mètodes:

1. **Factorització**, quan l'expressió es pot factoritzar fàcilment.
2. **Extracció de l'arrel quadrada**, especialment en equacions incompletes.
3. **Fórmula quadràtica**, que funciona per a qualsevol equació de segon grau.
4. **Completació del quadrat**, útil per obtenir la forma canònica.

La fórmula quadràtica és el mètode general:

$$
\\boxed{x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}}
$$
`,s=`# Quadratic Equations

A **quadratic equation** is a polynomial equation in which the unknown appears with a highest exponent of $2$ and the coefficient of $x^2$ is not zero.

Its general form is:

$$
ax^2+bx+c=0
$$

where:

- $a$, $b$, and $c$ are real numbers;
- $a\\neq0$;
- $x$ is the unknown.

For example:

$$
2x^2-5x+3=0
$$

is a quadratic equation because its highest-degree term is $2x^2$.

## Coefficients

In the equation

$$
ax^2+bx+c=0
$$

the values $a$, $b$, and $c$ have specific names:

- $a$ is the **quadratic coefficient**;
- $b$ is the **linear coefficient**;
- $c$ is the **constant term**.

For example, in

$$
3x^2-7x+2=0
$$

we have:

$$
a=3,\\qquad b=-7,\\qquad c=2
$$

It is important to identify the signs of the coefficients correctly before applying any solving method.

## Solving a quadratic equation

Solving a quadratic equation means finding all values of $x$ that make the equality true.

For example:

$$
x^2-5x+6=0
$$

We can factor:

$$
(x-2)(x-3)=0
$$

A product is zero when at least one of its factors is zero:

$$
x-2=0
$$

or

$$
x-3=0
$$

Therefore:

$$
\\boxed{x=2,\\quad x=3}
$$

## Quadratic formula

The quadratic formula can solve any real quadratic equation:

$$
ax^2+bx+c=0
$$

provided that:

$$
a\\neq0
$$

The solutions are:

$$
x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}
$$

The symbol $\\pm$ means that we must consider two possibilities:

$$
x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}
$$

and

$$
x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}
$$

## The discriminant

The expression inside the square root is called the **discriminant**:

$$
\\Delta=b^2-4ac
$$

The discriminant determines the number of real solutions of a quadratic equation.

### If $\\Delta>0$

There are **two distinct real solutions**:

$$
x_1\\neq x_2
$$

For example:

$$
x^2-5x+6=0
$$

Here:

$$
a=1,\\qquad b=-5,\\qquad c=6
$$

Calculate:

$$
\\Delta=(-5)^2-4(1)(6)
$$

$$
\\Delta=25-24=1
$$

Since:

$$
\\Delta>0
$$

there are two real solutions:

$$
x_1=2,\\qquad x_2=3
$$

### If $\\Delta=0$

There is **one real solution**, which is a repeated root:

$$
x_1=x_2
$$

For example:

$$
x^2-4x+4=0
$$

The discriminant is:

$$
\\Delta=(-4)^2-4(1)(4)=0
$$

Therefore:

$$
x=\\frac{4}{2}=2
$$

The solution is:

$$
\\boxed{x=2}
$$

### If $\\Delta<0$

There are no real solutions.

For example:

$$
x^2+4x+5=0
$$

We have:

$$
\\Delta=4^2-4(1)(5)
$$

$$
\\Delta=16-20=-4
$$

Since:

$$
\\Delta<0
$$

the equation has no real solutions.

## Factoring method

When an equation can be factored easily, factoring is often a quick way to solve it.

Consider:

$$
x^2-7x+12=0
$$

We look for two numbers whose product is $12$ and whose sum is $-7$:

$$
-3\\cdot-4=12
$$

and

$$
-3+(-4)=-7
$$

Therefore:

$$
x^2-7x+12=(x-3)(x-4)
$$

The equation becomes:

$$
(x-3)(x-4)=0
$$

Therefore:

$$
x=3
\\quad\\text{or}\\quad
x=4
$$

The solutions are:

$$
\\boxed{x=3,\\quad x=4}
$$

## Incomplete quadratic equations

A quadratic equation is **incomplete** when one of the coefficients $b$ or $c$ is zero.

### Case $b=0$

We have:

$$
ax^2+c=0
$$

For example:

$$
2x^2-18=0
$$

Add $18$:

$$
2x^2=18
$$

Divide by $2$:

$$
x^2=9
$$

Therefore:

$$
x=\\pm3
$$

The solutions are:

$$
\\boxed{x=3,\\quad x=-3}
$$

### Case $c=0$

We have:

$$
ax^2+bx=0
$$

Factor out $x$:

$$
x(ax+b)=0
$$

For example:

$$
x^2-5x=0
$$

Factor:

$$
x(x-5)=0
$$

Therefore:

$$
x=0
\\quad\\text{or}\\quad
x=5
$$

The solutions are:

$$
\\boxed{x=0,\\quad x=5}
$$

## Vertex form

A quadratic function can be written in **vertex form** as:

$$
f(x)=a(x-h)^2+k
$$

In this form, the point:

$$
(h,k)
$$

is the **vertex** of the parabola.

For example:

$$
f(x)=(x-2)^2-3
$$

has vertex:

$$
(2,-3)
$$

Vertex form makes it easy to identify the vertex and study the behavior of the parabola.

## Graphical representation

A quadratic equation is related to a parabola.

For example:

$$
x^2-5x+6=0
$$

can be associated with the function:

$$
f(x)=x^2-5x+6
$$

Its solutions are the values of $x$ for which:

$$
f(x)=0
$$

Therefore, the solutions correspond to the intersections of the parabola with the $x$-axis.

:::function-graph{expression="x^2-5*x+6" restriction="-2<=x<=7"}
:::

In this case, the parabola intersects the $x$-axis at:

$$
x=2
\\quad\\text{and}\\quad
x=3
$$

Therefore, the equation has two real solutions.

## Relationship between the discriminant and the graph

The discriminant also has a geometric interpretation.

### $\\Delta>0$

The parabola intersects the $x$-axis at two points.

$$
\\boxed{\\text{2 real solutions}}
$$

### $\\Delta=0$

The parabola touches the $x$-axis at one point.

$$
\\boxed{\\text{1 repeated real solution}}
$$

### $\\Delta<0$

The parabola does not intersect the $x$-axis.

$$
\\boxed{\\text{0 real solutions}}
$$

This relationship allows us to interpret the same problem both algebraically and graphically.

## Vertex coordinates

For a quadratic function:

$$
f(x)=ax^2+bx+c
$$

the $x$-coordinate of the vertex is:

$$
x_v=-\\frac{b}{2a}
$$

The $y$-coordinate is obtained by substituting this value into the function:

$$
y_v=f(x_v)
$$

Therefore, the vertex is:

$$
V\\left(-\\frac{b}{2a},f\\left(-\\frac{b}{2a}\\right)\\right)
$$

For example:

$$
f(x)=x^2-4x+3
$$

We have:

$$
a=1,\\qquad b=-4
$$

Therefore:

$$
x_v=-\\frac{-4}{2(1)}=2
$$

Calculate the $y$-coordinate:

$$
y_v=2^2-4(2)+3=-1
$$

Therefore:

$$
\\boxed{V=(2,-1)}
$$

## Axis of symmetry

A parabola is symmetric about a vertical line.

This line is called the **axis of symmetry** and has equation:

$$
x=-\\frac{b}{2a}
$$

For example, for:

$$
f(x)=x^2-4x+3
$$

the axis of symmetry is:

$$
x=2
$$

## Concavity

The sign of $a$ determines the orientation of the parabola.

If:

$$
a>0
$$

the parabola opens upward.

If:

$$
a<0
$$

the parabola opens downward.

For example:

$$
f(x)=x^2
$$

opens upward, while:

$$
g(x)=-x^2
$$

opens downward.

## Sum and product of the roots

If a quadratic equation has two roots $x_1$ and $x_2$:

$$
ax^2+bx+c=0
$$

then:

$$
x_1+x_2=-\\frac{b}{a}
$$

and

$$
x_1x_2=\\frac{c}{a}
$$

These relationships are known as **Vieta's formulas**.

For example:

$$
2x^2-6x+4=0
$$

If its roots are $x_1$ and $x_2$, then:

$$
x_1+x_2=\\frac{6}{2}=3
$$

and

$$
x_1x_2=\\frac{4}{2}=2
$$

The roots are $1$ and $2$, and indeed:

$$
1+2=3
$$

$$
1\\cdot2=2
$$

## Checking the solutions

After solving a quadratic equation, it is useful to check the solutions in the original equation.

For example:

$$
x^2-5x+6=0
$$

The solutions are:

$$
x=2,\\qquad x=3
$$

Check $x=2$:

$$
2^2-5(2)+6=0
$$

$$
4-10+6=0
$$

Check $x=3$:

$$
3^2-5(3)+6=0
$$

$$
9-15+6=0
$$

Both solutions satisfy the equation.

## Common mistakes

When solving quadratic equations, avoid these mistakes:

- forgetting that $a\\neq0$;
- copying the sign of $b$ incorrectly;
- calculating the discriminant incorrectly;
- forgetting the $\\pm$ symbol in the quadratic formula;
- dividing only part of the expression by $2a$;
- losing a solution when taking a square root;
- not checking the solutions;
- confusing the vertex with a root.

In particular, remember that:

$$
\\sqrt{x^2}=|x|
$$

not simply $x$.

## Summary of solving methods

Depending on the equation, we can use different methods:

1. **Factoring**, when the expression can be factored easily.
2. **Taking square roots**, especially for incomplete quadratic equations.
3. **The quadratic formula**, which works for any quadratic equation.
4. **Completing the square**, which is useful for obtaining vertex form.

The quadratic formula is the general method:

$$
\\boxed{x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}}
$$
`;function c(){let{locale:c}=t();return e(i,{id:`quadratic-equations`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-Cuk8m7yK.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};