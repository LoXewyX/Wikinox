import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-C1BT9wAk.js";import{t as n}from"./TopicPage-DZNFNl0A.js";var r=`# Teorema del resto

El **teorema del resto** permite calcular el resto de la división de un polinomio entre un binomio de la forma $x-a$ sin realizar toda la división.

Es especialmente útil para evaluar polinomios, comprobar raíces y factorizar polinomios.

## 1. División de polinomios

Cuando dividimos un polinomio $P(x)$ entre otro polinomio $D(x)$, obtenemos:

$$
P(x)=D(x)Q(x)+R(x)
$$

donde:

- $P(x)$ es el **dividendo**.
- $D(x)$ es el **divisor**.
- $Q(x)$ es el **cociente**.
- $R(x)$ es el **resto**.

Si el divisor es $x-a$, que tiene grado $1$, el resto debe tener grado menor que $1$. Por tanto, el resto es un número constante:

$$
P(x)=(x-a)Q(x)+r
$$

El teorema del resto permite obtener directamente ese valor.

## 2. Enunciado del teorema del resto

Si un polinomio $P(x)$ se divide entre $x-a$, el resto de la división es:

$$
\\boxed{P(a)}
$$

Es decir:

> Para encontrar el resto de dividir $P(x)$ entre $x-a$, basta con evaluar el polinomio en $x=a$.

### Ejemplo

Sea:

$$
P(x)=2x^3-3x^2+4x-5
$$

Queremos calcular el resto de dividirlo entre:

$$
x-2
$$

Como $a=2$, calculamos:

$$
P(2)=2(2)^3-3(2)^2+4(2)-5
$$

$$
=16-12+8-5
$$

$$
=7
$$

Por tanto, el resto es:

$$
\\boxed{7}
$$

No es necesario realizar la división de polinomios.

## 3. Por qué funciona

Por el algoritmo de la división:

$$
P(x)=(x-a)Q(x)+r
$$

Si hacemos $x=a$:

$$
P(a)=(a-a)Q(a)+r
$$

Como:

$$
a-a=0
$$

queda:

$$
P(a)=r
$$

Por eso el resto coincide exactamente con $P(a)$.

## 4. Divisor de la forma $x-a$

La forma del divisor es importante.

Si tenemos:

$$
x-3
$$

entonces:

$$
a=3
$$

y el resto es:

$$
P(3)
$$

Si tenemos:

$$
x+3
$$

debemos escribirlo como:

$$
x-(-3)
$$

Por tanto:

$$
a=-3
$$

y el resto es:

$$
P(-3)
$$

### Ejemplo

Sea:

$$
P(x)=x^3+2x^2-x+4
$$

Queremos el resto de dividir entre:

$$
x+2
$$

Como:

$$
x+2=x-(-2)
$$

calculamos:

$$
P(-2)=(-2)^3+2(-2)^2-(-2)+4
$$

$$
=-8+8+2+4
$$

$$
=6
$$

El resto es:

$$
\\boxed{6}
$$

## 5. Evaluar un polinomio

El teorema del resto convierte una división en una simple evaluación.

Por ejemplo:

$$
P(x)=3x^4-2x^3+x-7
$$

Si queremos el resto al dividir entre $x-1$, calculamos:

$$
P(1)=3(1)^4-2(1)^3+1-7
$$

$$
=3-2+1-7
$$

$$
=-5
$$

Por tanto:

$$
\\boxed{r=-5}
$$

## 6. Comprobar si un número es raíz

El teorema del resto permite comprobar rápidamente si un número $a$ es raíz de un polinomio.

Si:

$$
P(a)=0
$$

entonces el resto al dividir $P(x)$ entre $x-a$ es cero.

Por tanto:

$$
\\boxed{P(a)=0\\iff x-a\\text{ divide exactamente a }P(x)}
$$

y también:

$$
\\boxed{P(a)=0\\iff a\\text{ es una raíz de }P(x)}
$$

### Ejemplo

Sea:

$$
P(x)=x^3-6x^2+11x-6
$$

Comprobamos si $x=2$ es una raíz:

$$
P(2)=2^3-6(2)^2+11(2)-6
$$

$$
=8-24+22-6
$$

$$
=0
$$

Por tanto, $2$ es una raíz y:

$$
x-2
$$

es un factor de $P(x)$.

## 7. Relación con el teorema del factor

El **teorema del factor** es una consecuencia directa del teorema del resto.

Si:

$$
P(a)=0
$$

entonces el resto de dividir $P(x)$ entre $x-a$ es cero.

Por tanto:

$$
x-a
$$

es un factor de $P(x)$.

La equivalencia fundamental es:

$$
\\boxed{P(a)=0\\iff x-a\\text{ es factor de }P(x)}
$$

### Ejemplo

Sea:

$$
P(x)=x^3-4x^2+x+6
$$

Comprobamos $a=2$:

$$
P(2)=8-16+2+6=0
$$

Por tanto:

$$
x-2
$$

es factor.

## 8. Encontrar factores mediante el teorema del resto

Si sospechamos que $a$ es una raíz, podemos evaluarlo.

Por ejemplo:

$$
P(x)=x^3-6x^2+11x-6
$$

Probamos $x=1$:

$$
P(1)=1-6+11-6=0
$$

Entonces:

$$
x-1
$$

es factor.

Podemos dividir:

$$
P(x)\\div(x-1)
$$

y obtener:

$$
P(x)=(x-1)(x^2-5x+6)
$$

Después podemos factorizar:

$$
x^2-5x+6=(x-2)(x-3)
$$

Por tanto:

$$
\\boxed{P(x)=(x-1)(x-2)(x-3)}
$$

## 9. Encontrar todas las raíces

El teorema del resto también puede formar parte de un procedimiento para encontrar las raíces de un polinomio.

### Ejemplo

Sea:

$$
P(x)=x^3-6x^2+11x-6
$$

Probamos posibles raíces:

$$
P(1)=0
$$

Por tanto, $x-1$ es factor.

Dividimos:

$$
P(x)=(x-1)(x^2-5x+6)
$$

Factorizamos el segundo polinomio:

$$
x^2-5x+6=(x-2)(x-3)
$$

Así:

$$
P(x)=(x-1)(x-2)(x-3)
$$

Las raíces son:

$$
\\boxed{x=1,\\quad x=2,\\quad x=3}
$$

## 10. Resto cuando el divisor no es mónico

El teorema del resto se aplica directamente cuando el divisor tiene la forma $x-a$.

Si el divisor es:

$$
2x-6
$$

podemos escribir:

$$
2x-6=2(x-3)
$$

Pero no podemos aplicar directamente $P(3)$ como resto de la división entre $2x-6$.

Por ejemplo, sea:

$$
P(x)=x^2+1
$$

Al dividir entre:

$$
2x-6
$$

tenemos:

$$
x-3=\\frac{2x-6}{2}
$$

Como:

$$
P(x)=(x-3)Q(x)+P(3)
$$

al adaptar la expresión al divisor $2(x-3)$, el resto es:

$$
\\boxed{\\frac{P(3)}{2}}
$$

En general, si el divisor es:

$$
ax-b
$$

podemos escribirlo como:

$$
a\\left(x-\\frac{b}{a}\\right)
$$

y el resto será:

$$
\\boxed{P\\left(\\frac{b}{a}\\right)}
$$

dividido por $a$ cuando se expresa la división respecto a $ax-b$.

## 11. Regla general para $ax-b$

Si:

$$
P(x)
$$

se divide entre:

$$
ax-b
$$

podemos escribir:

$$
ax-b=a\\left(x-\\frac{b}{a}\\right)
$$

Por tanto, el resto $r$ satisface:

$$
\\boxed{r=P\\left(\\frac{b}{a}\\right)}
$$

### Ejemplo

Sea:

$$
P(x)=x^2+3x+1
$$

y dividimos entre:

$$
2x-4
$$

Tenemos:

$$
a=2,\\qquad b=4
$$

Por tanto:

$$
\\frac{b}{a}=2
$$

Calculamos:

$$
P(2)=2^2+3(2)+1=11
$$

El resto es:

$$
\\boxed{11}
$$

## 12. Teorema del resto y división sintética

La división sintética, o regla de Ruffini, permite dividir rápidamente un polinomio entre un divisor de la forma:

$$
x-a
$$

El último número obtenido mediante Ruffini es precisamente el resto.

### Ejemplo

Sea:

$$
P(x)=x^3-4x^2+5x-2
$$

Dividimos entre:

$$
x-2
$$

Usamos $a=2$.

Los coeficientes son:

$$
1,\\;-4,\\;5,\\;-2
$$

La división sintética produce un resto igual a:

$$
0
$$

Por tanto:

$$
P(2)=0
$$

y $x-2$ es un factor.

## 13. Diferencia entre resto y cociente

El teorema del resto permite obtener únicamente el **resto**.

Si:

$$
P(x)=(x-a)Q(x)+r
$$

el teorema proporciona:

$$
r=P(a)
$$

pero no proporciona directamente $Q(x)$.

Si necesitamos el cociente, debemos realizar una división de polinomios, utilizar división sintética u otro método equivalente.

## 14. Resto cero

Cuando:

$$
P(a)=0
$$

el resto es cero:

$$
r=0
$$

Esto significa que la división es exacta:

$$
P(x)=(x-a)Q(x)
$$

No queda ningún término adicional.

## 15. Resto distinto de cero

Si:

$$
P(a)\\neq0
$$

entonces el resto no es cero.

Por tanto:

$$
P(x)=(x-a)Q(x)+P(a)
$$

El divisor no es un factor del polinomio.

### Ejemplo

Sea:

$$
P(x)=x^2+2x+5
$$

y consideremos $x-1$.

Calculamos:

$$
P(1)=1+2+5=8
$$

Por tanto:

$$
r=8
$$

y $x-1$ no es factor de $P(x)$.

## 16. Polinomios con coeficientes desconocidos

El teorema del resto también permite encontrar parámetros desconocidos.

### Ejemplo

Sea:

$$
P(x)=x^3+ax^2+2x+1
$$

y sabemos que al dividir entre $x-2$ el resto es $5$.

Por el teorema del resto:

$$
P(2)=5
$$

Sustituimos:

$$
2^3+a(2)^2+2(2)+1=5
$$

$$
8+4a+4+1=5
$$

$$
13+4a=5
$$

$$
4a=-8
$$

$$
a=-2
$$

Por tanto:

$$
\\boxed{a=-2}
$$

## 17. Encontrar un parámetro para obtener una raíz

Supongamos:

$$
P(x)=x^3+kx^2-4x+4
$$

y queremos que $x=2$ sea una raíz.

Eso significa:

$$
P(2)=0
$$

Entonces:

$$
8+4k-8+4=0
$$

$$
4+4k=0
$$

$$
k=-1
$$

Por tanto, para $k=-1$, el polinomio tiene la raíz $x=2$.

## 18. Varios divisores y varios restos

Si conocemos diferentes condiciones, podemos obtener un sistema de ecuaciones.

Por ejemplo, si:

$$
P(x)=x^3+ax^2+bx+c
$$

y conocemos:

$$
P(1)=2
$$

$$
P(2)=5
$$

cada condición proporciona una ecuación sobre los coeficientes.

El teorema del resto permite convertir condiciones de divisibilidad o restos en ecuaciones algebraicas.

## 19. Procedimiento general

Para encontrar el resto al dividir $P(x)$ entre $x-a$:

1. Identifica $a$.
2. Sustituye $x=a$ en $P(x)$.
3. Calcula el valor obtenido.
4. Ese valor es el resto.

En forma resumida:

$$
\\boxed{\\text{Resto}=P(a)}
$$

### Ejemplo completo

Sea:

$$
P(x)=2x^4-x^3+3x^2-5x+7
$$

y queremos dividir entre:

$$
x+1
$$

Primero escribimos:

$$
x+1=x-(-1)
$$

Por tanto:

$$
a=-1
$$

Evaluamos:

$$
P(-1)=2(-1)^4-(-1)^3+3(-1)^2-5(-1)+7
$$

$$
=2+1+3+5+7
$$

$$
=18
$$

Por tanto:

$$
\\boxed{r=18}
$$

## 20. Errores frecuentes

### Confundir $x-a$ con $x+a$

Si el divisor es:

$$
x+4
$$

hay que usar:

$$
a=-4
$$

no $a=4$.

### Confundir el resto con el valor de $a$

Si:

$$
P(x)\\div(x-3)
$$

entonces:

$$
a=3
$$

pero el resto es:

$$
P(3)
$$

No son necesariamente el mismo número.

### Pensar que siempre hay que dividir

Para encontrar el resto no es necesario realizar la división completa.

### Olvidar los términos con coeficiente cero

Si:

$$
P(x)=x^4+3x^2-2
$$

también puede escribirse como:

$$
P(x)=x^4+0x^3+3x^2+0x-2
$$

Esto es especialmente importante al utilizar Ruffini.

### Confundir el teorema del resto con el teorema del factor

El teorema del resto afirma:

$$
\\operatorname{resto}=P(a)
$$

El teorema del factor añade la condición especial:

$$
P(a)=0\\iff x-a\\text{ es factor}
$$

## 21. Resumen

| Concepto               | Resultado        |
| ---------------------- | ---------------- |
| Divisor                | $x-a$            |
| Valor que se sustituye | $a$              |
| Resto                  | $P(a)$           |
| Resto cero             | $P(a)=0$         |
| $x-a$ es factor        | $P(a)=0$         |
| $a$ es raíz            | $P(a)=0$         |
| Divisor $x+a$          | usar $a=-a$      |
| Divisor $ax-b$         | evaluar en $b/a$ |

La relación fundamental es:

$$
\\boxed{P(x)=(x-a)Q(x)+P(a)}
$$

y, en particular:

$$
\\boxed{\\text{resto de }P(x)\\div(x-a)=P(a)}
$$

## 22. Idea fundamental

El teorema del resto transforma una división de polinomios en una evaluación.

En lugar de calcular toda la división:

$$
P(x)\\div(x-a)
$$

simplemente calculamos:

$$
P(a)
$$

El resultado es exactamente el resto.

Además, cuando ese valor es cero:

$$
P(a)=0
$$

obtenemos inmediatamente una raíz y un factor:

$$
\\boxed{a\\text{ es raíz}\\iff x-a\\text{ es factor}}
$$
`,i=`# Teorema del residu

El **teorema del residu** permet calcular el residu de la divisió d'un polinomi entre un binomi de la forma $x-a$ sense haver de fer tota la divisió.

És especialment útil per avaluar polinomis, comprovar arrels i factoritzar polinomis.

## 1. Divisió de polinomis

Quan dividim un polinomi $P(x)$ entre un altre polinomi $D(x)$, obtenim:

$$
P(x)=D(x)Q(x)+R(x)
$$

on:

- $P(x)$ és el **dividend**.
- $D(x)$ és el **divisor**.
- $Q(x)$ és el **quocient**.
- $R(x)$ és el **residu**.

Si el divisor és $x-a$, que té grau $1$, el residu ha de tenir grau menor que $1$. Per tant, el residu és una constant:

$$
P(x)=(x-a)Q(x)+r
$$

El teorema del residu permet obtenir directament aquest valor.

## 2. Enunciat del teorema del residu

Si un polinomi $P(x)$ es divideix entre $x-a$, el residu de la divisió és:

$$
\\boxed{P(a)}
$$

És a dir:

> Per trobar el residu de dividir $P(x)$ entre $x-a$, només cal avaluar el polinomi en $x=a$.

### Exemple

Sigui:

$$
P(x)=2x^3-3x^2+4x-5
$$

Volem calcular el residu de dividir-lo entre:

$$
x-2
$$

Com que $a=2$, calculem:

$$
P(2)=2(2)^3-3(2)^2+4(2)-5
$$

$$
=16-12+8-5
$$

$$
=7
$$

Per tant, el residu és:

$$
\\boxed{7}
$$

No cal fer la divisió de polinomis.

## 3. Per què funciona

Pel teorema de la divisió:

$$
P(x)=(x-a)Q(x)+r
$$

Si fem $x=a$:

$$
P(a)=(a-a)Q(a)+r
$$

Com que:

$$
a-a=0
$$

queda:

$$
P(a)=r
$$

Per això el residu coincideix exactament amb $P(a)$.

## 4. Divisor de la forma $x-a$

La forma del divisor és important.

Si tenim:

$$
x-3
$$

aleshores:

$$
a=3
$$

i el residu és:

$$
P(3)
$$

Si tenim:

$$
x+3
$$

hem d'escriure'l com:

$$
x-(-3)
$$

Per tant:

$$
a=-3
$$

i el residu és:

$$
P(-3)
$$

### Exemple

Sigui:

$$
P(x)=x^3+2x^2-x+4
$$

Volem el residu de dividir entre:

$$
x+2
$$

Com que:

$$
x+2=x-(-2)
$$

calculem:

$$
P(-2)=(-2)^3+2(-2)^2-(-2)+4
$$

$$
=-8+8+2+4
$$

$$
=6
$$

El residu és:

$$
\\boxed{6}
$$

## 5. Avaluar un polinomi

El teorema del residu converteix una divisió en una simple avaluació.

Per exemple:

$$
P(x)=3x^4-2x^3+x-7
$$

Si volem el residu en dividir entre $x-1$, calculem:

$$
P(1)=3(1)^4-2(1)^3+1-7
$$

$$
=3-2+1-7
$$

$$
=-5
$$

Per tant:

$$
\\boxed{r=-5}
$$

## 6. Comprovar si un nombre és una arrel

El teorema del residu permet comprovar ràpidament si un nombre $a$ és una arrel d'un polinomi.

Si:

$$
P(a)=0
$$

aleshores el residu de dividir $P(x)$ entre $x-a$ és zero.

Per tant:

$$
\\boxed{P(a)=0\\iff x-a\\text{ divideix exactament }P(x)}
$$

i també:

$$
\\boxed{P(a)=0\\iff a\\text{ és una arrel de }P(x)}
$$

### Exemple

Sigui:

$$
P(x)=x^3-6x^2+11x-6
$$

Comprovem si $x=2$ és una arrel:

$$
P(2)=2^3-6(2)^2+11(2)-6
$$

$$
=8-24+22-6
$$

$$
=0
$$

Per tant, $2$ és una arrel i:

$$
x-2
$$

és un factor de $P(x)$.

## 7. Relació amb el teorema del factor

El **teorema del factor** és una conseqüència directa del teorema del residu.

Si:

$$
P(a)=0
$$

aleshores el residu de dividir $P(x)$ entre $x-a$ és zero.

Per tant:

$$
x-a
$$

és un factor de $P(x)$.

La equivalència fonamental és:

$$
\\boxed{P(a)=0\\iff x-a\\text{ és factor de }P(x)}
$$

### Exemple

Sigui:

$$
P(x)=x^3-4x^2+x+6
$$

Comprovem $a=2$:

$$
P(2)=8-16+2+6=0
$$

Per tant:

$$
x-2
$$

és un factor.

## 8. Trobar factors mitjançant el teorema del residu

Si sospitem que $a$ és una arrel, podem avaluar-lo.

Per exemple:

$$
P(x)=x^3-6x^2+11x-6
$$

Provem $x=1$:

$$
P(1)=1-6+11-6=0
$$

Per tant:

$$
x-1
$$

és un factor.

Podem dividir:

$$
P(x)\\div(x-1)
$$

i obtenir:

$$
P(x)=(x-1)(x^2-5x+6)
$$

Després podem factoritzar:

$$
x^2-5x+6=(x-2)(x-3)
$$

Per tant:

$$
\\boxed{P(x)=(x-1)(x-2)(x-3)}
$$

## 9. Trobar totes les arrels

El teorema del residu també pot formar part d'un procediment per trobar les arrels d'un polinomi.

### Exemple

Sigui:

$$
P(x)=x^3-6x^2+11x-6
$$

Provem possibles arrels:

$$
P(1)=0
$$

Per tant, $x-1$ és factor.

Dividim:

$$
P(x)=(x-1)(x^2-5x+6)
$$

Factoritzem el segon polinomi:

$$
x^2-5x+6=(x-2)(x-3)
$$

Així:

$$
P(x)=(x-1)(x-2)(x-3)
$$

Les arrels són:

$$
\\boxed{x=1,\\quad x=2,\\quad x=3}
$$

## 10. Residu quan el divisor no és mònic

El teorema del residu s'aplica directament quan el divisor té la forma $x-a$.

Si el divisor és:

$$
2x-6
$$

podem escriure:

$$
2x-6=2(x-3)
$$

En aquest cas, el valor que cal avaluar és $P(3)$.

Per exemple, si:

$$
P(x)=x^2+1
$$

aleshores:

$$
P(3)=10
$$

i el residu de la divisió respecte de $2x-6$ és:

$$
\\boxed{10}
$$

En general, si el divisor és:

$$
ax-b
$$

el residu és:

$$
\\boxed{P\\left(\\frac{b}{a}\\right)}
$$

## 11. Regla general per a $ax-b$

Si:

$$
P(x)
$$

es divideix entre:

$$
ax-b
$$

el valor de $x$ que anul·la el divisor és:

$$
x=\\frac{b}{a}
$$

Per tant, el residu és:

$$
\\boxed{P\\left(\\frac{b}{a}\\right)}
$$

### Exemple

Sigui:

$$
P(x)=x^2+3x+1
$$

i dividim entre:

$$
2x-4
$$

Tenim:

$$
a=2,\\qquad b=4
$$

Per tant:

$$
\\frac{b}{a}=2
$$

Calculem:

$$
P(2)=2^2+3(2)+1=11
$$

El residu és:

$$
\\boxed{11}
$$

## 12. Teorema del residu i divisió sintètica

La divisió sintètica, o regla de Ruffini, permet dividir ràpidament un polinomi entre un divisor de la forma:

$$
x-a
$$

L'últim nombre obtingut mitjançant Ruffini és precisament el residu.

### Exemple

Sigui:

$$
P(x)=x^3-4x^2+5x-2
$$

Dividim entre:

$$
x-2
$$

Fem servir $a=2$.

Els coeficients són:

$$
1,\\;-4,\\;5,\\;-2
$$

La divisió sintètica dona un residu igual a:

$$
0
$$

Per tant:

$$
P(2)=0
$$

i $x-2$ és un factor.

## 13. Diferència entre residu i quocient

El teorema del residu permet obtenir únicament el **residu**.

Si:

$$
P(x)=(x-a)Q(x)+r
$$

el teorema proporciona:

$$
r=P(a)
$$

però no proporciona directament $Q(x)$.

Si necessitem el quocient, hem de fer una divisió de polinomis, utilitzar divisió sintètica o un altre mètode equivalent.

## 14. Residu zero

Quan:

$$
P(a)=0
$$

el residu és zero:

$$
r=0
$$

Això significa que la divisió és exacta:

$$
P(x)=(x-a)Q(x)
$$

No queda cap terme addicional.

## 15. Residu diferent de zero

Si:

$$
P(a)\\neq0
$$

aleshores el residu no és zero.

Per tant:

$$
P(x)=(x-a)Q(x)+P(a)
$$

El divisor no és un factor del polinomi.

### Exemple

Sigui:

$$
P(x)=x^2+2x+5
$$

i considerem $x-1$.

Calculem:

$$
P(1)=1+2+5=8
$$

Per tant:

$$
r=8
$$

i $x-1$ no és factor de $P(x)$.

## 16. Polinomis amb coeficients desconeguts

El teorema del residu també permet trobar paràmetres desconeguts.

### Exemple

Sigui:

$$
P(x)=x^3+ax^2+2x+1
$$

i sabem que en dividir entre $x-2$ el residu és $5$.

Pel teorema del residu:

$$
P(2)=5
$$

Substituïm:

$$
2^3+a(2)^2+2(2)+1=5
$$

$$
8+4a+4+1=5
$$

$$
13+4a=5
$$

$$
4a=-8
$$

$$
a=-2
$$

Per tant:

$$
\\boxed{a=-2}
$$

## 17. Trobar un paràmetre per obtenir una arrel

Suposem:

$$
P(x)=x^3+kx^2-4x+4
$$

i volem que $x=2$ sigui una arrel.

Això significa:

$$
P(2)=0
$$

Aleshores:

$$
8+4k-8+4=0
$$

$$
4+4k=0
$$

$$
k=-1
$$

Per tant, per a $k=-1$, el polinomi té l'arrel $x=2$.

## 18. Diversos divisors i diversos residus

Si coneixem diferents condicions, podem obtenir un sistema d'equacions.

Per exemple, si:

$$
P(x)=x^3+ax^2+bx+c
$$

i coneixem:

$$
P(1)=2
$$

$$
P(2)=5
$$

cada condició proporciona una equació sobre els coeficients.

El teorema del residu permet convertir condicions de divisibilitat o residus en equacions algebraiques.

## 19. Procediment general

Per trobar el residu de dividir $P(x)$ entre $x-a$:

1. Identifica $a$.
2. Substitueix $x=a$ a $P(x)$.
3. Calcula el valor obtingut.
4. Aquest valor és el residu.

En resum:

$$
\\boxed{\\text{Residu}=P(a)}
$$

### Exemple complet

Sigui:

$$
P(x)=2x^4-x^3+3x^2-5x+7
$$

i volem dividir entre:

$$
x+1
$$

Primer escrivim:

$$
x+1=x-(-1)
$$

Per tant:

$$
a=-1
$$

Avaluem:

$$
P(-1)=2(-1)^4-(-1)^3+3(-1)^2-5(-1)+7
$$

$$
=2+1+3+5+7
$$

$$
=18
$$

Per tant:

$$
\\boxed{r=18}
$$

## 20. Errors freqüents

### Confondre $x-a$ amb $x+a$

Si el divisor és:

$$
x+4
$$

cal utilitzar:

$$
a=-4
$$

i no $a=4$.

### Confondre el residu amb el valor de $a$

Si:

$$
P(x)\\div(x-3)
$$

aleshores:

$$
a=3
$$

però el residu és:

$$
P(3)
$$

No han de coincidir.

### Pensar que sempre cal dividir

Per trobar el residu no és necessari fer tota la divisió.

### Oblidar els termes amb coeficient zero

Si:

$$
P(x)=x^4+3x^2-2
$$

també es pot escriure:

$$
P(x)=x^4+0x^3+3x^2+0x-2
$$

Això és especialment important quan utilitzem Ruffini.

### Confondre el teorema del residu amb el teorema del factor

El teorema del residu afirma:

$$
\\operatorname{residu}=P(a)
$$

El teorema del factor afegeix la condició especial:

$$
P(a)=0\\iff x-a\\text{ és factor}
$$

## 21. Resum

| Concepte                 | Resultat         |
| ------------------------ | ---------------- |
| Divisor                  | $x-a$            |
| Valor que se substitueix | $a$              |
| Residu                   | $P(a)$           |
| Residu zero              | $P(a)=0$         |
| $x-a$ és factor          | $P(a)=0$         |
| $a$ és arrel             | $P(a)=0$         |
| Divisor $x+a$            | utilitzar $a=-a$ |
| Divisor $ax-b$           | avaluar en $b/a$ |

La relació fonamental és:

$$
\\boxed{P(x)=(x-a)Q(x)+P(a)}
$$

i, en particular:

$$
\\boxed{\\text{residu de }P(x)\\div(x-a)=P(a)}
$$

## 22. Idea fonamental

El teorema del residu transforma una divisió de polinomis en una avaluació.

En lloc de calcular tota la divisió:

$$
P(x)\\div(x-a)
$$

simplement calculem:

$$
P(a)
$$

El resultat és exactament el residu.

A més, quan aquest valor és zero:

$$
P(a)=0
$$

obtenim immediatament una arrel i un factor:

$$
\\boxed{a\\text{ és arrel}\\iff x-a\\text{ és factor}}
$$
`,a=`# Remainder theorem

The **remainder theorem** allows us to find the remainder when a polynomial is divided by a binomial of the form $x-a$ without performing the entire division.

It is especially useful for evaluating polynomials, checking roots, and factoring polynomials.

## 1. Polynomial division

When we divide a polynomial $P(x)$ by another polynomial $D(x)$, we obtain:

$$
P(x)=D(x)Q(x)+R(x)
$$

where:

- $P(x)$ is the **dividend**.
- $D(x)$ is the **divisor**.
- $Q(x)$ is the **quotient**.
- $R(x)$ is the **remainder**.

If the divisor is $x-a$, which has degree $1$, the remainder must have degree less than $1$. Therefore, the remainder is a constant:

$$
P(x)=(x-a)Q(x)+r
$$

The remainder theorem gives this value directly.

## 2. Statement of the remainder theorem

If a polynomial $P(x)$ is divided by $x-a$, the remainder is:

$$
\\boxed{P(a)}
$$

In other words:

> To find the remainder when $P(x)$ is divided by $x-a$, simply evaluate the polynomial at $x=a$.

### Example

Let:

$$
P(x)=2x^3-3x^2+4x-5
$$

We want to find the remainder when it is divided by:

$$
x-2
$$

Since $a=2$, calculate:

$$
P(2)=2(2)^3-3(2)^2+4(2)-5
$$

$$
=16-12+8-5
$$

$$
=7
$$

Therefore, the remainder is:

$$
\\boxed{7}
$$

There is no need to perform polynomial division.

## 3. Why it works

From the division algorithm:

$$
P(x)=(x-a)Q(x)+r
$$

Set $x=a$:

$$
P(a)=(a-a)Q(a)+r
$$

Since:

$$
a-a=0
$$

we obtain:

$$
P(a)=r
$$

Therefore, the remainder is exactly $P(a)$.

## 4. Divisors of the form $x-a$

The form of the divisor is important.

If we have:

$$
x-3
$$

then:

$$
a=3
$$

and the remainder is:

$$
P(3)
$$

If we have:

$$
x+3
$$

we must write it as:

$$
x-(-3)
$$

Therefore:

$$
a=-3
$$

and the remainder is:

$$
P(-3)
$$

### Example

Let:

$$
P(x)=x^3+2x^2-x+4
$$

We want the remainder when dividing by:

$$
x+2
$$

Since:

$$
x+2=x-(-2)
$$

we calculate:

$$
P(-2)=(-2)^3+2(-2)^2-(-2)+4
$$

$$
=-8+8+2+4
$$

$$
=6
$$

The remainder is:

$$
\\boxed{6}
$$

## 5. Evaluating a polynomial

The remainder theorem turns a division into a simple evaluation.

For example:

$$
P(x)=3x^4-2x^3+x-7
$$

If we want the remainder when dividing by $x-1$, calculate:

$$
P(1)=3(1)^4-2(1)^3+1-7
$$

$$
=3-2+1-7
$$

$$
=-5
$$

Therefore:

$$
\\boxed{r=-5}
$$

## 6. Checking whether a number is a root

The remainder theorem provides a quick way to check whether a number $a$ is a root of a polynomial.

If:

$$
P(a)=0
$$

then the remainder when dividing $P(x)$ by $x-a$ is zero.

Therefore:

$$
\\boxed{P(a)=0\\iff x-a\\text{ divides }P(x)}
$$

and also:

$$
\\boxed{P(a)=0\\iff a\\text{ is a root of }P(x)}
$$

### Example

Let:

$$
P(x)=x^3-6x^2+11x-6
$$

Check whether $x=2$ is a root:

$$
P(2)=2^3-6(2)^2+11(2)-6
$$

$$
=8-24+22-6
$$

$$
=0
$$

Therefore, $2$ is a root and:

$$
x-2
$$

is a factor of $P(x)$.

## 7. Relationship with the factor theorem

The **factor theorem** is a direct consequence of the remainder theorem.

If:

$$
P(a)=0
$$

then the remainder when dividing $P(x)$ by $x-a$ is zero.

Therefore:

$$
x-a
$$

is a factor of $P(x)$.

The fundamental equivalence is:

$$
\\boxed{P(a)=0\\iff x-a\\text{ is a factor of }P(x)}
$$

### Example

Let:

$$
P(x)=x^3-4x^2+x+6
$$

Check $a=2$:

$$
P(2)=8-16+2+6=0
$$

Therefore:

$$
x-2
$$

is a factor.

## 8. Finding factors using the remainder theorem

If we suspect that $a$ is a root, we can evaluate the polynomial at $a$.

For example:

$$
P(x)=x^3-6x^2+11x-6
$$

Try $x=1$:

$$
P(1)=1-6+11-6=0
$$

Therefore:

$$
x-1
$$

is a factor.

We can divide:

$$
P(x)\\div(x-1)
$$

to obtain:

$$
P(x)=(x-1)(x^2-5x+6)
$$

Then factor:

$$
x^2-5x+6=(x-2)(x-3)
$$

Therefore:

$$
\\boxed{P(x)=(x-1)(x-2)(x-3)}
$$

## 9. Finding all roots

The remainder theorem can also be part of a procedure for finding the roots of a polynomial.

### Example

Let:

$$
P(x)=x^3-6x^2+11x-6
$$

Try possible roots:

$$
P(1)=0
$$

Therefore, $x-1$ is a factor.

Divide:

$$
P(x)=(x-1)(x^2-5x+6)
$$

Factor the second polynomial:

$$
x^2-5x+6=(x-2)(x-3)
$$

Thus:

$$
P(x)=(x-1)(x-2)(x-3)
$$

The roots are:

$$
\\boxed{x=1,\\quad x=2,\\quad x=3}
$$

## 10. Remainder when the divisor is not monic

The remainder theorem applies directly when the divisor has the form $x-a$.

If the divisor is:

$$
2x-6
$$

we can write:

$$
2x-6=2(x-3)
$$

The value of $x$ that makes the divisor zero is $x=3$.

For example, if:

$$
P(x)=x^2+1
$$

then:

$$
P(3)=10
$$

and the remainder when dividing by $2x-6$ is:

$$
\\boxed{10}
$$

In general, if the divisor is:

$$
ax-b
$$

the remainder is:

$$
\\boxed{P\\left(\\frac{b}{a}\\right)}
$$

## 11. General rule for $ax-b$

If:

$$
P(x)
$$

is divided by:

$$
ax-b
$$

the value of $x$ that makes the divisor zero is:

$$
x=\\frac{b}{a}
$$

Therefore, the remainder is:

$$
\\boxed{P\\left(\\frac{b}{a}\\right)}
$$

### Example

Let:

$$
P(x)=x^2+3x+1
$$

and divide by:

$$
2x-4
$$

We have:

$$
a=2,\\qquad b=4
$$

Therefore:

$$
\\frac{b}{a}=2
$$

Calculate:

$$
P(2)=2^2+3(2)+1=11
$$

The remainder is:

$$
\\boxed{11}
$$

## 12. Remainder theorem and synthetic division

Synthetic division, or Ruffini's rule, allows us to quickly divide a polynomial by a divisor of the form:

$$
x-a
$$

The last number obtained by synthetic division is exactly the remainder.

### Example

Let:

$$
P(x)=x^3-4x^2+5x-2
$$

Divide by:

$$
x-2
$$

Use $a=2$.

The coefficients are:

$$
1,\\;-4,\\;5,\\;-2
$$

Synthetic division gives a remainder of:

$$
0
$$

Therefore:

$$
P(2)=0
$$

and $x-2$ is a factor.

## 13. Difference between remainder and quotient

The remainder theorem gives only the **remainder**.

If:

$$
P(x)=(x-a)Q(x)+r
$$

the theorem gives:

$$
r=P(a)
$$

but it does not directly give $Q(x)$.

If we need the quotient, we must perform polynomial division, use synthetic division, or use an equivalent method.

## 14. Zero remainder

When:

$$
P(a)=0
$$

the remainder is zero:

$$
r=0
$$

This means the division is exact:

$$
P(x)=(x-a)Q(x)
$$

There is no additional remainder term.

## 15. Nonzero remainder

If:

$$
P(a)\\neq0
$$

then the remainder is nonzero.

Therefore:

$$
P(x)=(x-a)Q(x)+P(a)
$$

The divisor is not a factor of the polynomial.

### Example

Let:

$$
P(x)=x^2+2x+5
$$

and consider $x-1$.

Calculate:

$$
P(1)=1+2+5=8
$$

Therefore:

$$
r=8
$$

and $x-1$ is not a factor of $P(x)$.

## 16. Polynomials with unknown coefficients

The remainder theorem can also be used to find unknown parameters.

### Example

Let:

$$
P(x)=x^3+ax^2+2x+1
$$

and suppose that the remainder when dividing by $x-2$ is $5$.

By the remainder theorem:

$$
P(2)=5
$$

Substitute:

$$
2^3+a(2)^2+2(2)+1=5
$$

$$
8+4a+4+1=5
$$

$$
13+4a=5
$$

$$
4a=-8
$$

$$
a=-2
$$

Therefore:

$$
\\boxed{a=-2}
$$

## 17. Finding a parameter that produces a root

Suppose:

$$
P(x)=x^3+kx^2-4x+4
$$

and we want $x=2$ to be a root.

This means:

$$
P(2)=0
$$

Therefore:

$$
8+4k-8+4=0
$$

$$
4+4k=0
$$

$$
k=-1
$$

Therefore, when $k=-1$, the polynomial has the root $x=2$.

## 18. Multiple divisors and multiple remainders

If we know several conditions, we can obtain a system of equations.

For example, if:

$$
P(x)=x^3+ax^2+bx+c
$$

and we know:

$$
P(1)=2
$$

$$
P(2)=5
$$

each condition gives an equation involving the coefficients.

The remainder theorem allows divisibility and remainder conditions to be converted into algebraic equations.

## 19. General procedure

To find the remainder when $P(x)$ is divided by $x-a$:

1. Identify $a$.
2. Substitute $x=a$ into $P(x)$.
3. Calculate the resulting value.
4. That value is the remainder.

In short:

$$
\\boxed{\\text{Remainder}=P(a)}
$$

### Complete example

Let:

$$
P(x)=2x^4-x^3+3x^2-5x+7
$$

and suppose we divide by:

$$
x+1
$$

First write:

$$
x+1=x-(-1)
$$

Therefore:

$$
a=-1
$$

Evaluate:

$$
P(-1)=2(-1)^4-(-1)^3+3(-1)^2-5(-1)+7
$$

$$
=2+1+3+5+7
$$

$$
=18
$$

Therefore:

$$
\\boxed{r=18}
$$

## 20. Common mistakes

### Confusing $x-a$ with $x+a$

If the divisor is:

$$
x+4
$$

we must use:

$$
a=-4
$$

not $a=4$.

### Confusing the remainder with $a$

If:

$$
P(x)\\div(x-3)
$$

then:

$$
a=3
$$

but the remainder is:

$$
P(3)
$$

They are not necessarily equal.

### Thinking that division is always necessary

To find the remainder, there is no need to perform the complete division.

### Forgetting terms with zero coefficients

If:

$$
P(x)=x^4+3x^2-2
$$

we can also write:

$$
P(x)=x^4+0x^3+3x^2+0x-2
$$

This is especially important when using synthetic division.

### Confusing the remainder theorem with the factor theorem

The remainder theorem states:

$$
\\operatorname{remainder}=P(a)
$$

The factor theorem adds the special condition:

$$
P(a)=0\\iff x-a\\text{ is a factor}
$$

## 21. Summary

| Concept           | Result            |
| ----------------- | ----------------- |
| Divisor           | $x-a$             |
| Value substituted | $a$               |
| Remainder         | $P(a)$            |
| Zero remainder    | $P(a)=0$          |
| $x-a$ is a factor | $P(a)=0$          |
| $a$ is a root     | $P(a)=0$          |
| Divisor $x+a$     | use $a=-a$        |
| Divisor $ax-b$    | evaluate at $b/a$ |

The fundamental relationship is:

$$
\\boxed{P(x)=(x-a)Q(x)+P(a)}
$$

and, in particular:

$$
\\boxed{\\text{remainder of }P(x)\\div(x-a)=P(a)}
$$

## 22. Fundamental idea

The remainder theorem transforms polynomial division into evaluation.

Instead of calculating the entire division:

$$
P(x)\\div(x-a)
$$

we simply calculate:

$$
P(a)
$$

The result is exactly the remainder.

Furthermore, when this value is zero:

$$
P(a)=0
$$

we immediately obtain a root and a factor:

$$
\\boxed{a\\text{ is a root}\\iff x-a\\text{ is a factor}}
$$
`;function o(){let{locale:o}=t();return e(n,{id:`remainder-theorem`,content:{es:r,ca:i,en:a}[o]})}export{o as default};