const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-Cuk8m7yK.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-CQZABaDC.js","assets/index-DhjOBkmr.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-CQZABaDC.js";import{t as i}from"./TopicPage-DyShI14R.js";var a=`# Ecuaciones exponenciales y logarítmicas

Las ecuaciones exponenciales y logarítmicas son ecuaciones en las que la incógnita aparece en un exponente o dentro de un logaritmo.

Están estrechamente relacionadas porque las funciones exponenciales y logarítmicas son funciones inversas.

## 1. Ecuaciones exponenciales

Una ecuación exponencial contiene la incógnita en un exponente.

Por ejemplo:

$$
2^x=8
$$

Como:

$$
8=2^3
$$

podemos escribir:

$$
2^x=2^3
$$

Por tanto:

$$
x=3
$$

### Principio general

Si:

$$
a^x=a^b
$$

con $a>0$ y $a\\neq1$, entonces:

$$
x=b
$$

Este método se conoce como **método de igualación de bases**.

---

## 2. Resolver ecuaciones exponenciales con la misma base

Consideremos:

$$
3^{x+1}=27
$$

Como:

$$
27=3^3
$$

obtenemos:

$$
3^{x+1}=3^3
$$

Por tanto:

$$
x+1=3
$$

y:

$$
x=2
$$

Otro ejemplo:

$$
5^{2x-1}=125
$$

Como:

$$
125=5^3
$$

tenemos:

$$
2x-1=3
$$

Por tanto:

$$
x=2
$$

---

## 3. Ecuaciones exponenciales que requieren logaritmos

En ocasiones no es posible o no resulta conveniente expresar ambos miembros utilizando la misma base.

Por ejemplo:

$$
2^x=6
$$

Aplicamos el logaritmo a ambos lados:

$$
\\ln(2^x)=\\ln(6)
$$

Utilizando la propiedad de la potencia:

$$
x\\ln(2)=\\ln(6)
$$

Por tanto:

$$
x=\\frac{\\ln(6)}{\\ln(2)}
$$

Equivalentemente:

$$
x=\\log_2(6)
$$

El valor aproximado es:

$$
x\\approx2.585
$$

---

## 4. El logaritmo natural

El logaritmo natural es el logaritmo en base $e$:

$$
\\ln(x)=\\log_e(x)
$$

donde:

$$
e\\approx2.71828
$$

El logaritmo natural es especialmente útil para resolver ecuaciones exponenciales porque:

$$
\\ln(e^x)=x
$$

Por ejemplo:

$$
e^{3x}=10
$$

Aplicamos $\\ln$ a ambos lados:

$$
\\ln(e^{3x})=\\ln(10)
$$

Por tanto:

$$
3x=\\ln(10)
$$

y:

$$
x=\\frac{\\ln(10)}{3}
$$

---

## 5. Ecuaciones logarítmicas

Una ecuación logarítmica contiene la incógnita dentro de un logaritmo.

Por ejemplo:

$$
\\log_2(x)=3
$$

Utilizando la definición de logaritmo:

$$
\\log_2(x)=3
\\iff
2^3=x
$$

Por tanto:

$$
x=8
$$

### Definición de logaritmo

Para $a>0$, $a\\neq1$ y $x>0$:

$$
\\log_a(x)=b
\\iff
a^b=x
$$

Las tres cantidades tienen funciones diferentes:

- $a$ es la **base**.
- $b$ es el **valor del logaritmo**.
- $x$ es el **argumento**.

---

## 6. Restricciones del dominio

Un logaritmo solamente está definido cuando su argumento es positivo.

Por tanto:

$$
\\log_a(x)
$$

requiere:

$$
x>0
$$

Por ejemplo:

$$
\\log(x-2)
$$

requiere:

$$
x-2>0
$$

por lo que:

$$
x>2
$$

Esta restricción debe comprobarse al resolver ecuaciones logarítmicas.

---

## 7. Resolver ecuaciones logarítmicas mediante la definición

Consideremos:

$$
\\log_3(x)=4
$$

Utilizando la definición:

$$
x=3^4
$$

Por tanto:

$$
x=81
$$

Otro ejemplo:

$$
\\log_5(x-1)=2
$$

Convertimos a forma exponencial:

$$
x-1=5^2
$$

Por tanto:

$$
x=26
$$

La condición de dominio es:

$$
x-1>0
$$

y $x=26$ la cumple.

---

## 8. Propiedades de los logaritmos

Las principales propiedades de los logaritmos son:

### Producto

$$
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

### Cociente

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

### Potencia

$$
\\log_a(x^n)=n\\log_a(x)
$$

Estas propiedades permiten simplificar y transformar ecuaciones logarítmicas.

---

## 9. Combinar logaritmos

Consideremos:

$$
\\log_2(x)+\\log_2(x-2)=3
$$

Utilizando la propiedad del producto:

$$
\\log_2(x(x-2))=3
$$

Convertimos a forma exponencial:

$$
x(x-2)=2^3
$$

Por tanto:

$$
x^2-2x=8
$$

o:

$$
x^2-2x-8=0
$$

Factorizamos:

$$
(x-4)(x+2)=0
$$

Los candidatos son:

$$
x=4
$$

y:

$$
x=-2
$$

Sin embargo, los logaritmos originales requieren:

$$
x>0
$$

y:

$$
x-2>0
$$

Por tanto:

$$
x>2
$$

Solo:

$$
x=4
$$

es válido.

---

## 10. Logaritmos a ambos lados

Consideremos:

$$
\\log_2(x+3)=\\log_2(7)
$$

Como los logaritmos tienen la misma base:

$$
x+3=7
$$

Por tanto:

$$
x=4
$$

La condición de dominio es:

$$
x+3>0
$$

y la solución es válida.

En general:

$$
\\log_a(f(x))=\\log_a(g(x))
$$

implica:

$$
f(x)=g(x)
$$

siempre que ambos argumentos de los logaritmos sean positivos.

---

## 11. Ecuaciones exponenciales utilizando logaritmos

Consideremos:

$$
7^x=20
$$

Aplicamos logaritmos:

$$
\\ln(7^x)=\\ln(20)
$$

Utilizando la propiedad de la potencia:

$$
x\\ln(7)=\\ln(20)
$$

Por tanto:

$$
x=\\frac{\\ln(20)}{\\ln(7)}
$$

En general:

$$
a^x=b
$$

puede resolverse mediante:

$$
x=\\frac{\\ln(b)}{\\ln(a)}
$$

para $a>0$, $a\\neq1$ y $b>0$.

---

## 12. Cambio de base

Un logaritmo puede convertirse a otra base mediante:

$$
\\log_a(x)=\\frac{\\log_b(x)}{\\log_b(a)}
$$

La opción más habitual es $b=e$:

$$
\\log_a(x)=\\frac{\\ln(x)}{\\ln(a)}
$$

Por ejemplo:

$$
\\log_2(10)
=
\\frac{\\ln(10)}{\\ln(2)}
$$

Esta fórmula es especialmente útil cuando una calculadora no dispone directamente del logaritmo en la base necesaria.

---

## 13. Interpretación gráfica

Las ecuaciones exponenciales también pueden interpretarse gráficamente.

Por ejemplo:

$$
2^x=6
$$

La solución es el valor de $x$ para el que la función exponencial alcanza el valor $6$.

:::function-graph{expression="2^x" restriction="-3<=x<=4"}
:::

La solución puede escribirse como:

$$
x=\\log_2(6)
$$

---

## 14. Funciones exponenciales y logarítmicas como funciones inversas

La función exponencial:

$$
f(x)=a^x
$$

y la función logarítmica:

$$
g(x)=\\log_a(x)
$$

son funciones inversas.

Esto significa que:

$$
a^{\\log_a(x)}=x
$$

y:

$$
\\log_a(a^x)=x
$$

Sus gráficas son simétricas respecto a la recta:

$$
y=x
$$

Por ejemplo:

:::function-graph{expression="2^x" restriction="-4<=x<=4"}
:::

La función logarítmica correspondiente es:

$$
y=\\log_2(x)
$$

---

## 15. Ecuaciones exponenciales con la misma base

Cuando sea posible, conviene reescribir ambos miembros utilizando la misma base.

Ejemplo:

$$
4^{x+1}=16
$$

Como:

$$
4=2^2
$$

y:

$$
16=2^4
$$

obtenemos:

$$
(2^2)^{x+1}=2^4
$$

Utilizando:

$$
(a^m)^n=a^{mn}
$$

tenemos:

$$
2^{2x+2}=2^4
$$

Por tanto:

$$
2x+2=4
$$

y:

$$
x=1
$$

---

## 16. Ecuaciones exponenciales que se reducen a una ecuación cuadrática

Algunas ecuaciones exponenciales contienen potencias como:

$$
2^{2x}
$$

y:

$$
2^x
$$

Como:

$$
2^{2x}=(2^x)^2
$$

podemos realizar un cambio de variable.

Consideremos:

$$
2^{2x}-5(2^x)+6=0
$$

Sea:

$$
u=2^x
$$

Entonces:

$$
u^2-5u+6=0
$$

Factorizamos:

$$
(u-2)(u-3)=0
$$

Por tanto:

$$
u=2
$$

o:

$$
u=3
$$

Volviendo a $x$:

$$
2^x=2
$$

da:

$$
x=1
$$

y:

$$
2^x=3
$$

da:

$$
x=\\log_2(3)
$$

Por tanto, las soluciones son:

$$
x=1
$$

y:

$$
x=\\log_2(3)
$$

---

## 17. Errores frecuentes

### Olvidar las restricciones del dominio

Expresiones como:

$$
\\ln(x)
$$

requieren:

$$
x>0
$$

### Aplicar incorrectamente las propiedades de los logaritmos

En general:

$$
\\log_a(x+y)
\\neq
\\log_a(x)+\\log_a(y)
$$

La propiedad correcta para un producto es:

$$
\\log_a(xy)
=
\\log_a(x)+\\log_a(y)
$$

### No comprobar las soluciones

Al transformar ecuaciones logarítmicas, siempre debemos comprobar las soluciones obtenidas en la ecuación original.

### Confundir la notación logarítmica y exponencial

Estas dos expresiones son equivalentes:

$$
\\log_a(x)=b
$$

y:

$$
a^b=x
$$

---

## 18. Resumen

### Ecuaciones exponenciales

Para:

$$
a^x=b
$$

podemos utilizar:

$$
x=\\log_a(b)
$$

o:

$$
x=\\frac{\\ln(b)}{\\ln(a)}
$$

### Ecuaciones logarítmicas

Para:

$$
\\log_a(x)=b
$$

tenemos:

$$
x=a^b
$$

### Propiedades principales de los logaritmos

$$
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

$$
\\log_a(x^n)=n\\log_a(x)
$$

### Cambio de base

$$
\\log_a(x)=\\frac{\\ln(x)}{\\ln(a)}
$$

La idea central es que **las ecuaciones exponenciales y logarítmicas pueden transformarse unas en otras**, lo que permite elegir el método más conveniente para resolver cada ecuación.
`,o=`# Equacions exponencials i logarítmiques

Les equacions exponencials i logarítmiques són equacions en què la incògnita apareix en un exponent o dins d'un logaritme.

Estan estretament relacionades perquè les funcions exponencials i logarítmiques són funcions inverses.

## 1. Equacions exponencials

Una equació exponencial conté la incògnita en un exponent.

Per exemple:

$$
2^x=8
$$

Com que:

$$
8=2^3
$$

podem escriure:

$$
2^x=2^3
$$

Per tant:

$$
x=3
$$

### Principi general

Si:

$$
a^x=a^b
$$

amb $a>0$ i $a\\neq1$, aleshores:

$$
x=b
$$

Aquest mètode s'anomena **mètode d'igualació de bases**.

---

## 2. Resoldre equacions exponencials amb la mateixa base

Considerem:

$$
3^{x+1}=27
$$

Com que:

$$
27=3^3
$$

obtenim:

$$
3^{x+1}=3^3
$$

Per tant:

$$
x+1=3
$$

i:

$$
x=2
$$

Un altre exemple:

$$
5^{2x-1}=125
$$

Com que:

$$
125=5^3
$$

tenim:

$$
2x-1=3
$$

Per tant:

$$
x=2
$$

---

## 3. Equacions exponencials que requereixen logaritmes

De vegades no és possible o no resulta convenient expressar els dos membres utilitzant la mateixa base.

Per exemple:

$$
2^x=6
$$

Apliquem el logaritme als dos membres:

$$
\\ln(2^x)=\\ln(6)
$$

Utilitzant la propietat de la potència:

$$
x\\ln(2)=\\ln(6)
$$

Per tant:

$$
x=\\frac{\\ln(6)}{\\ln(2)}
$$

Equivalentment:

$$
x=\\log_2(6)
$$

El valor aproximat és:

$$
x\\approx2.585
$$

---

## 4. El logaritme natural

El logaritme natural és el logaritme en base $e$:

$$
\\ln(x)=\\log_e(x)
$$

on:

$$
e\\approx2.71828
$$

El logaritme natural és especialment útil per resoldre equacions exponencials perquè:

$$
\\ln(e^x)=x
$$

Per exemple:

$$
e^{3x}=10
$$

Apliquem $\\ln$ als dos membres:

$$
\\ln(e^{3x})=\\ln(10)
$$

Per tant:

$$
3x=\\ln(10)
$$

i:

$$
x=\\frac{\\ln(10)}{3}
$$

---

## 5. Equacions logarítmiques

Una equació logarítmica conté la incògnita dins d'un logaritme.

Per exemple:

$$
\\log_2(x)=3
$$

Utilitzant la definició de logaritme:

$$
\\log_2(x)=3
\\iff
2^3=x
$$

Per tant:

$$
x=8
$$

### Definició de logaritme

Per a $a>0$, $a\\neq1$ i $x>0$:

$$
\\log_a(x)=b
\\iff
a^b=x
$$

Les tres quantitats tenen funcions diferents:

- $a$ és la **base**.
- $b$ és el **valor del logaritme**.
- $x$ és l'**argument**.

---

## 6. Restriccions del domini

Un logaritme només està definit quan el seu argument és positiu.

Per tant:

$$
\\log_a(x)
$$

requereix:

$$
x>0
$$

Per exemple:

$$
\\log(x-2)
$$

requereix:

$$
x-2>0
$$

i, per tant:

$$
x>2
$$

Aquesta restricció s'ha de comprovar quan es resolen equacions logarítmiques.

---

## 7. Resoldre equacions logarítmiques mitjançant la definició

Considerem:

$$
\\log_3(x)=4
$$

Utilitzant la definició:

$$
x=3^4
$$

Per tant:

$$
x=81
$$

Un altre exemple:

$$
\\log_5(x-1)=2
$$

Convertim a forma exponencial:

$$
x-1=5^2
$$

Per tant:

$$
x=26
$$

La condició de domini és:

$$
x-1>0
$$

i $x=26$ la compleix.

---

## 8. Propietats dels logaritmes

Les principals propietats dels logaritmes són:

### Producte

$$
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

### Quocient

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

### Potència

$$
\\log_a(x^n)=n\\log_a(x)
$$

Aquestes propietats permeten simplificar i transformar equacions logarítmiques.

---

## 9. Combinar logaritmes

Considerem:

$$
\\log_2(x)+\\log_2(x-2)=3
$$

Utilitzant la propietat del producte:

$$
\\log_2(x(x-2))=3
$$

Convertim a forma exponencial:

$$
x(x-2)=2^3
$$

Per tant:

$$
x^2-2x=8
$$

o:

$$
x^2-2x-8=0
$$

Factoritzem:

$$
(x-4)(x+2)=0
$$

Els candidats són:

$$
x=4
$$

i:

$$
x=-2
$$

Tanmateix, els logaritmes originals requereixen:

$$
x>0
$$

i:

$$
x-2>0
$$

Per tant:

$$
x>2
$$

Només:

$$
x=4
$$

és vàlid.

---

## 10. Logaritmes als dos membres

Considerem:

$$
\\log_2(x+3)=\\log_2(7)
$$

Com que els logaritmes tenen la mateixa base:

$$
x+3=7
$$

Per tant:

$$
x=4
$$

La condició de domini és:

$$
x+3>0
$$

i la solució és vàlida.

En general:

$$
\\log_a(f(x))=\\log_a(g(x))
$$

implica:

$$
f(x)=g(x)
$$

sempre que els dos arguments dels logaritmes siguin positius.

---

## 11. Equacions exponencials utilitzant logaritmes

Considerem:

$$
7^x=20
$$

Apliquem logaritmes:

$$
\\ln(7^x)=\\ln(20)
$$

Utilitzant la propietat de la potència:

$$
x\\ln(7)=\\ln(20)
$$

Per tant:

$$
x=\\frac{\\ln(20)}{\\ln(7)}
$$

En general:

$$
a^x=b
$$

es pot resoldre mitjançant:

$$
x=\\frac{\\ln(b)}{\\ln(a)}
$$

per a $a>0$, $a\\neq1$ i $b>0$.

---

## 12. Canvi de base

Un logaritme es pot convertir a una altra base mitjançant:

$$
\\log_a(x)=\\frac{\\log_b(x)}{\\log_b(a)}
$$

L'opció més habitual és $b=e$:

$$
\\log_a(x)=\\frac{\\ln(x)}{\\ln(a)}
$$

Per exemple:

$$
\\log_2(10)
=
\\frac{\\ln(10)}{\\ln(2)}
$$

Aquesta fórmula és especialment útil quan una calculadora no disposa directament del logaritme en la base necessària.

---

## 13. Interpretació gràfica

Les equacions exponencials també es poden interpretar gràficament.

Per exemple:

$$
2^x=6
$$

La solució és el valor de $x$ per al qual la funció exponencial assoleix el valor $6$.

:::function-graph{expression="2^x" restriction="-3<=x<=4"}
:::

La solució es pot escriure com:

$$
x=\\log_2(6)
$$

---

## 14. Funcions exponencials i logarítmiques com a funcions inverses

La funció exponencial:

$$
f(x)=a^x
$$

i la funció logarítmica:

$$
g(x)=\\log_a(x)
$$

són funcions inverses.

Això significa que:

$$
a^{\\log_a(x)}=x
$$

i:

$$
\\log_a(a^x)=x
$$

Les seves gràfiques són simètriques respecte de la recta:

$$
y=x
$$

Per exemple:

:::function-graph{expression="2^x" restriction="-4<=x<=4"}
:::

La funció logarítmica corresponent és:

$$
y=\\log_2(x)
$$

---

## 15. Equacions exponencials amb la mateixa base

Quan sigui possible, convé reescriure els dos membres utilitzant la mateixa base.

Exemple:

$$
4^{x+1}=16
$$

Com que:

$$
4=2^2
$$

i:

$$
16=2^4
$$

obtenim:

$$
(2^2)^{x+1}=2^4
$$

Utilitzant:

$$
(a^m)^n=a^{mn}
$$

tenim:

$$
2^{2x+2}=2^4
$$

Per tant:

$$
2x+2=4
$$

i:

$$
x=1
$$

---

## 16. Equacions exponencials que es redueixen a una equació de segon grau

Algunes equacions exponencials contenen potències com:

$$
2^{2x}
$$

i:

$$
2^x
$$

Com que:

$$
2^{2x}=(2^x)^2
$$

podem fer un canvi de variable.

Considerem:

$$
2^{2x}-5(2^x)+6=0
$$

Sigui:

$$
u=2^x
$$

Aleshores:

$$
u^2-5u+6=0
$$

Factoritzem:

$$
(u-2)(u-3)=0
$$

Per tant:

$$
u=2
$$

o:

$$
u=3
$$

Tornant a $x$:

$$
2^x=2
$$

dona:

$$
x=1
$$

i:

$$
2^x=3
$$

dona:

$$
x=\\log_2(3)
$$

Per tant, les solucions són:

$$
x=1
$$

i:

$$
x=\\log_2(3)
$$

---

## 17. Errors freqüents

### Oblidar les restriccions del domini

Expressions com:

$$
\\ln(x)
$$

requereixen:

$$
x>0
$$

### Aplicar incorrectament les propietats dels logaritmes

En general:

$$
\\log_a(x+y)
\\neq
\\log_a(x)+\\log_a(y)
$$

La propietat correcta per a un producte és:

$$
\\log_a(xy)
=
\\log_a(x)+\\log_a(y)
$$

### No comprovar les solucions

Quan transformem equacions logarítmiques, sempre hem de comprovar les solucions obtingudes en l'equació original.

### Confondre la notació logarítmica i exponencial

Aquestes dues expressions són equivalents:

$$
\\log_a(x)=b
$$

i:

$$
a^b=x
$$

---

## 18. Resum

### Equacions exponencials

Per a:

$$
a^x=b
$$

podem utilitzar:

$$
x=\\log_a(b)
$$

o:

$$
x=\\frac{\\ln(b)}{\\ln(a)}
$$

### Equacions logarítmiques

Per a:

$$
\\log_a(x)=b
$$

tenim:

$$
x=a^b
$$

### Propietats principals dels logaritmes

$$
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

$$
\\log_a(x^n)=n\\log_a(x)
$$

### Canvi de base

$$
\\log_a(x)=\\frac{\\ln(x)}{\\ln(a)}
$$

La idea central és que **les equacions exponencials i logarítmiques es poden transformar les unes en les altres**, cosa que permet escollir el mètode més convenient per resoldre cada equació.
`,s=`# Exponential and Logarithmic Equations

Exponential and logarithmic equations are equations in which the unknown appears in an exponent or inside a logarithm.

They are closely related because exponential and logarithmic functions are inverse functions.

## 1. Exponential equations

An exponential equation contains the unknown in an exponent.

For example:

$$
2^x = 8
$$

Since

$$
8 = 2^3
$$

we can write:

$$
2^x = 2^3
$$

Therefore:

$$
x = 3
$$

### General principle

If

$$
a^x = a^b
$$

with $a>0$ and $a\\neq1$, then:

$$
x=b
$$

This is the **common-base method**.

---

## 2. Solving exponential equations with a common base

Consider:

$$
3^{x+1}=27
$$

Since

$$
27=3^3
$$

we obtain:

$$
3^{x+1}=3^3
$$

Therefore:

$$
x+1=3
$$

and:

$$
x=2
$$

Another example:

$$
5^{2x-1}=125
$$

Since

$$
125=5^3
$$

we get:

$$
2x-1=3
$$

Therefore:

$$
x=2
$$

---

## 3. Exponential equations that require logarithms

Sometimes it is impossible or inconvenient to express both sides using the same base.

For example:

$$
2^x=6
$$

Taking the logarithm of both sides:

$$
\\ln(2^x)=\\ln(6)
$$

Using the logarithm power rule:

$$
x\\ln(2)=\\ln(6)
$$

Therefore:

$$
x=\\frac{\\ln(6)}{\\ln(2)}
$$

Equivalently:

$$
x=\\log_2(6)
$$

The numerical value is approximately:

$$
x\\approx2.585
$$

---

## 4. The natural logarithm

The natural logarithm is the logarithm with base $e$:

$$
\\ln(x)=\\log_e(x)
$$

where

$$
e\\approx2.71828
$$

The natural logarithm is especially useful for solving exponential equations because:

$$
\\ln(e^x)=x
$$

For example:

$$
e^{3x}=10
$$

Taking $\\ln$ on both sides:

$$
\\ln(e^{3x})=\\ln(10)
$$

Therefore:

$$
3x=\\ln(10)
$$

and:

$$
x=\\frac{\\ln(10)}{3}
$$

---

## 5. Logarithmic equations

A logarithmic equation contains the unknown inside a logarithm.

For example:

$$
\\log_2(x)=3
$$

Using the definition of a logarithm:

$$
\\log_2(x)=3
\\iff
2^3=x
$$

Therefore:

$$
x=8
$$

### Definition of a logarithm

For $a>0$, $a\\neq1$, and $x>0$:

$$
\\log_a(x)=b
\\iff
a^b=x
$$

The three quantities have different roles:

- $a$ is the **base**.
- $b$ is the **logarithm value**.
- $x$ is the **argument**.

---

## 6. Domain restrictions

A logarithm is only defined when its argument is positive.

Therefore:

$$
\\log_a(x)
$$

requires:

$$
x>0
$$

For example:

$$
\\log(x-2)
$$

requires:

$$
x-2>0
$$

so:

$$
x>2
$$

This restriction must be checked when solving logarithmic equations.

---

## 7. Solving logarithmic equations using the definition

Consider:

$$
\\log_3(x)=4
$$

Using the definition:

$$
x=3^4
$$

Therefore:

$$
x=81
$$

Another example:

$$
\\log_5(x-1)=2
$$

Convert to exponential form:

$$
x-1=5^2
$$

Therefore:

$$
x=26
$$

The domain condition is:

$$
x-1>0
$$

and $x=26$ satisfies it.

---

## 8. Properties of logarithms

The main logarithm properties are:

### Product

$$
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

### Quotient

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

### Power

$$
\\log_a(x^n)=n\\log_a(x)
$$

These properties are useful for simplifying logarithmic equations.

---

## 9. Combining logarithms

Consider:

$$
\\log_2(x)+\\log_2(x-2)=3
$$

Using the product property:

$$
\\log_2(x(x-2))=3
$$

Convert to exponential form:

$$
x(x-2)=2^3
$$

Therefore:

$$
x^2-2x=8
$$

or:

$$
x^2-2x-8=0
$$

Factorizing:

$$
(x-4)(x+2)=0
$$

The candidates are:

$$
x=4
$$

and:

$$
x=-2
$$

However, the original logarithms require:

$$
x>0
$$

and:

$$
x-2>0
$$

Therefore:

$$
x>2
$$

Only:

$$
x=4
$$

is valid.

---

## 10. Logarithms on both sides

Consider:

$$
\\log_2(x+3)=\\log_2(7)
$$

Since the logarithms have the same base:

$$
x+3=7
$$

Therefore:

$$
x=4
$$

The domain condition is:

$$
x+3>0
$$

and the solution is valid.

In general:

$$
\\log_a(f(x))=\\log_a(g(x))
$$

implies:

$$
f(x)=g(x)
$$

provided that both logarithmic arguments are positive.

---

## 11. Exponential equations using logarithms

Consider:

$$
7^x=20
$$

Taking logarithms:

$$
\\ln(7^x)=\\ln(20)
$$

Using the power property:

$$
x\\ln(7)=\\ln(20)
$$

Therefore:

$$
x=\\frac{\\ln(20)}{\\ln(7)}
$$

More generally:

$$
a^x=b
$$

can be solved as:

$$
x=\\frac{\\ln(b)}{\\ln(a)}
$$

for $a>0$, $a\\neq1$, and $b>0$.

---

## 12. Change of base

A logarithm can be converted to another base using:

$$
\\log_a(x)=\\frac{\\log_b(x)}{\\log_b(a)}
$$

The most common choice is $b=e$:

$$
\\log_a(x)=\\frac{\\ln(x)}{\\ln(a)}
$$

For example:

$$
\\log_2(10)
=
\\frac{\\ln(10)}{\\ln(2)}
$$

This formula is particularly useful when a calculator does not have a button for the required logarithm base.

---

## 13. Graphical interpretation

Exponential equations can also be interpreted graphically.

For example:

$$
2^x=6
$$

The solution is the $x$-coordinate where the exponential function reaches the value $6$.

:::function-graph{expression="2^x" restriction="-3<=x<=4"}
:::

The solution can be written as:

$$
x=\\log_2(6)
$$

---

## 14. Exponential and logarithmic functions as inverses

The exponential function

$$
f(x)=a^x
$$

and the logarithmic function

$$
g(x)=\\log_a(x)
$$

are inverse functions.

This means:

$$
a^{\\log_a(x)}=x
$$

and:

$$
\\log_a(a^x)=x
$$

Their graphs are symmetric with respect to the line:

$$
y=x
$$

For example:

:::function-graph{expression="2^x" restriction="-4<=x<=4"}
:::

The corresponding logarithmic function is:

$$
y=\\log_2(x)
$$

---

## 15. Exponential equations with the same base

When possible, rewrite both sides using the same base.

Example:

$$
4^{x+1}=16
$$

Since:

$$
4=2^2
$$

and:

$$
16=2^4
$$

we obtain:

$$
(2^2)^{x+1}=2^4
$$

Using:

$$
(a^m)^n=a^{mn}
$$

we get:

$$
2^{2x+2}=2^4
$$

Therefore:

$$
2x+2=4
$$

and:

$$
x=1
$$

---

## 16. Exponential equations that reduce to a quadratic equation

Some exponential equations contain powers such as:

$$
2^{2x}
$$

and:

$$
2^x
$$

Since:

$$
2^{2x}=(2^x)^2
$$

we can introduce a substitution.

Consider:

$$
2^{2x}-5(2^x)+6=0
$$

Let:

$$
u=2^x
$$

Then:

$$
u^2-5u+6=0
$$

Factorizing:

$$
(u-2)(u-3)=0
$$

Therefore:

$$
u=2
$$

or:

$$
u=3
$$

Returning to $x$:

$$
2^x=2
$$

gives:

$$
x=1
$$

and:

$$
2^x=3
$$

gives:

$$
x=\\log_2(3)
$$

Therefore the solutions are:

$$
x=1
$$

and:

$$
x=\\log_2(3)
$$

---

## 17. Common mistakes

### Forgetting logarithm domain restrictions

Expressions such as:

$$
\\ln(x)
$$

require:

$$
x>0
$$

### Incorrect logarithm rule

In general:

$$
\\log_a(x+y)
\\neq
\\log_a(x)+\\log_a(y)
$$

The product rule is:

$$
\\log_a(xy)
=
\\log_a(x)+\\log_a(y)
$$

### Forgetting to check solutions

When transforming logarithmic equations, always verify the resulting solutions in the original equation.

### Confusing logarithmic and exponential notation

These statements are equivalent:

$$
\\log_a(x)=b
$$

and:

$$
a^b=x
$$

---

## 18. Summary

### Exponential equations

For:

$$
a^x=b
$$

we can use:

$$
x=\\log_a(b)
$$

or:

$$
x=\\frac{\\ln(b)}{\\ln(a)}
$$

### Logarithmic equations

For:

$$
\\log_a(x)=b
$$

we have:

$$
x=a^b
$$

### Main logarithm properties

$$
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

$$
\\log_a(x^n)=n\\log_a(x)
$$

### Change of base

$$
\\log_a(x)=\\frac{\\ln(x)}{\\ln(a)}
$$

The central idea is that **exponential and logarithmic equations can be transformed into each other**, allowing us to choose the most convenient method for solving the equation.
`;function c(){let{locale:c}=t();return e(i,{id:`exponential-logarithmic-equations`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-Cuk8m7yK.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};