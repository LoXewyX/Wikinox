import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-CQZABaDC.js";import{t as n}from"./TopicPage-DyShI14R.js";var r=`# Factorización de polinomios

La factorización de polinomios consiste en expresar un polinomio como un **producto de polinomios más sencillos**.

Es una herramienta fundamental para simplificar expresiones, resolver ecuaciones, encontrar raíces y estudiar funciones polinómicas.

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

---

## 1. ¿Qué significa factorizar?

Factorizar significa transformar una suma o diferencia de términos en un producto.

Por ejemplo:

$$

x^2+5x+6
$$

se puede escribir como:

$$
(x+2)(x+3)
$$

Los polinomios:

$$

x+2
$$

y:

$$
x+3
$$

son **factores** del polinomio original.

La factorización es, por tanto, la operación inversa del desarrollo de productos.

---

## 2. Factor común

El primer método que debemos comprobar es siempre la existencia de un **factor común**.

Por ejemplo:

$$

6x^3+9x^2
$$

Ambos términos tienen $3x^2$ en común:

$$
6x^3+9x^2
=

3x^2(2x+3)
$$

Por tanto:

$$

\\boxed{6x^3+9x^2=3x^2(2x+3)}
$$

---

## 3. Factor común con varias variables

El factor común puede contener varias variables.

Por ejemplo:

$$
12x^3y+18x^2y^2
$$

El máximo factor común es:

$$

6x^2y
$$

Por tanto:

$$
12x^3y+18x^2y^2
=

6x^2y(2x+3y)
$$

---

## 4. Factorización por agrupación

Cuando no existe un factor común para todos los términos, podemos intentar agruparlos.

Por ejemplo:

$$

ax+ay+bx+by
$$

Agrupamos:

$$
a(x+y)+b(x+y)
$$

Ahora aparece un factor común:

$$

\\boxed{(a+b)(x+y)}
$$

Otro ejemplo:

$$
x^3+2x^2+3x+6
$$

Agrupamos:

$$

x^2(x+2)+3(x+2)
$$

Por tanto:

$$
\\boxed{(x^2+3)(x+2)}
$$

---

## 5. Diferencia de cuadrados

Una identidad fundamental es:

$$

\\boxed{a^2-b^2=(a-b)(a+b)}
$$

Por ejemplo:

$$
x^2-25
$$

es una diferencia de cuadrados:

$$

x^2-5^2
$$

Por tanto:

$$
\\boxed{x^2-25=(x-5)(x+5)}
$$

Otro ejemplo:

$$

9x^2-16
$$

es:

$$
(3x)^2-4^2
$$

y por tanto:

$$

\\boxed{9x^2-16=(3x-4)(3x+4)}
$$

---

## 6. Trinomio cuadrado perfecto

Otra identidad importante es:

$$
\\boxed{a^2+2ab+b^2=(a+b)^2}
$$

y:

$$

\\boxed{a^2-2ab+b^2=(a-b)^2}
$$

Por ejemplo:

$$
x^2+6x+9
$$

puede escribirse como:

$$

x^2+2(x)(3)+3^2
$$

Por tanto:

$$
\\boxed{x^2+6x+9=(x+3)^2}
$$

También:

$$

x^2-10x+25=(x-5)^2
$$

---

## 7. Trinomios de segundo grado

Una expresión de la forma:

$$
x^2+bx+c
$$

puede factorizarse buscando dos números $m$ y $n$ que cumplan:

$$

m+n=b
$$

y:

$$
mn=c
$$

Entonces:

$$

x^2+bx+c=(x+m)(x+n)
$$

Por ejemplo:

$$
x^2+5x+6
$$

Buscamos dos números cuya suma sea $5$ y cuyo producto sea $6$:

$$

2+3=5
$$

$$
2\\cdot3=6
$$

Por tanto:

$$

\\boxed{x^2+5x+6=(x+2)(x+3)}
$$

---

## 8. Trinomios con término principal diferente de 1

Consideremos:

$$
2x^2+7x+3
$$

Buscamos una factorización de la forma:

$$

(2x+a)(x+b)
$$

Necesitamos:

$$
ab=3
$$

y:

$$

2b+a=7
$$

Tomamos:

$$
a=1,\\qquad b=3
$$

Por tanto:

$$

\\boxed{2x^2+7x+3=(2x+1)(x+3)}
$$

---

## 9. Método del producto $ac$

Para un trinomio:

$$
ax^2+bx+c
$$

podemos buscar dos números cuyo producto sea:

$$

ac
$$

y cuya suma sea:

$$
b
$$

Por ejemplo:

$$

6x^2+11x+3
$$

Calculamos:

$$
ac=18
$$

Buscamos dos números cuyo producto sea $18$ y cuya suma sea $11$:

$$

9+2=11
$$

Descomponemos el término central:

$$
6x^2+9x+2x+3
$$

Agrupamos:

$$

3x(2x+3)+1(2x+3)
$$

Por tanto:

$$
\\boxed{6x^2+11x+3=(3x+1)(2x+3)}
$$

---

## 10. Factorización de un polinomio cuadrático mediante sus raíces

Si un polinomio cuadrático tiene raíces $r_1$ y $r_2$, entonces puede escribirse como:

$$

a(x-r_1)(x-r_2)
$$

Por ejemplo:

$$
x^2-5x+6
$$

tiene raíces:

$$

x=2
$$

y:

$$
x=3
$$

Por tanto:

$$

\\boxed{x^2-5x+6=(x-2)(x-3)}
$$

---

## 11. Relación entre raíces y factores

Si:

$$
P(r)=0
$$

entonces:

$$

x-r
$$

es un factor de $P(x)$.

Esta propiedad es el **teorema del factor**:

$$
\\boxed{P(r)=0\\iff(x-r)\\text{ es factor de }P(x)}
$$

Por ejemplo, si:

$$

P(x)=x^3-4x^2+x+6
$$

y comprobamos que:

$$
P(2)=0
$$

entonces:

$$

x-2
$$

es un factor.

---

## 12. Teorema del resto

El teorema del resto establece que el resto de dividir $P(x)$ entre $x-a$ es:

$$
\\boxed{P(a)}
$$

Por ejemplo, si:

$$

P(x)=x^2+3x+2
$$

dividimos entre:

$$
x-1
$$

el resto es:

$$

P(1)=1+3+2=6
$$

Por tanto, $x-1$ no es factor.

Si:

$$
P(a)=0
$$

el resto es cero y $x-a$ es factor.

---

## 13. Regla de Ruffini

La regla de Ruffini permite dividir rápidamente un polinomio entre un binomio de la forma:

$$

x-a
$$

Es especialmente útil cuando conocemos una raíz.

Por ejemplo:

$$
P(x)=x^3-6x^2+11x-6
$$

Probamos $x=1$:

$$

P(1)=0
$$

Por tanto:

$$
x-1
$$

es factor.

Aplicando Ruffini obtenemos:

$$

x^2-5x+6
$$

que podemos volver a factorizar:

$$
x^2-5x+6=(x-2)(x-3)
$$

Por tanto:

$$

\\boxed{
x^3-6x^2+11x-6
=

(x-1)(x-2)(x-3)
}
$$

---

## 14. Raíces múltiples

Una raíz puede aparecer más de una vez.

Por ejemplo:

$$
P(x)=(x-2)^2(x+1)
$$

tiene:

- raíz $x=2$ de multiplicidad $2$;
- raíz $x=-1$ de multiplicidad $1$.

La multiplicidad indica cuántas veces aparece un factor.

---

## 15. Factorización completa

Factorizar completamente significa continuar factorizando hasta que los factores no puedan descomponerse más dentro del conjunto numérico considerado.

Por ejemplo:

$$

2x^3-8x
$$

Primero extraemos factor común:

$$
2x(x^2-4)
$$

Después aplicamos diferencia de cuadrados:

$$

2x(x-2)(x+2)
$$

Por tanto:

$$
\\boxed{2x^3-8x=2x(x-2)(x+2)}
$$

---

## 16. Factorización de cubos

Existen dos identidades importantes.

### Suma de cubos

$$

\\boxed{a^3+b^3=(a+b)(a^2-ab+b^2)}
$$

Por ejemplo:

$$
x^3+8
$$

es:

$$

x^3+2^3
$$

Por tanto:

$$
\\boxed{x^3+8=(x+2)(x^2-2x+4)}
$$

### Diferencia de cubos

$$

\\boxed{a^3-b^3=(a-b)(a^2+ab+b^2)}
$$

Por ejemplo:

$$
x^3-27
$$

es:

$$

x^3-3^3
$$

Por tanto:

$$
\\boxed{x^3-27=(x-3)(x^2+3x+9)}
$$

---

## 17. Factorización mediante sustitución

Algunos polinomios tienen una estructura que permite realizar una sustitución.

Por ejemplo:

$$

x^4-5x^2+6
$$

Tomamos:

$$
u=x^2
$$

Entonces:

$$

u^2-5u+6
$$

Factorizamos:

$$
(u-2)(u-3)
$$

Volvemos a $x$:

$$

(x^2-2)(x^2-3)
$$

Por tanto:

$$
\\boxed{x^4-5x^2+6=(x^2-2)(x^2-3)}
$$

---

## 18. Factorización y resolución de ecuaciones

La factorización es especialmente útil para resolver ecuaciones.

Consideremos:

$$

x^2-5x+6=0
$$

Factorizamos:

$$
(x-2)(x-3)=0
$$

Por la propiedad del producto nulo:

$$

x-2=0
$$

o:

$$
x-3=0
$$

Por tanto:

$$

\\boxed{x=2\\quad\\text{o}\\quad x=3}
$$

---

## 19. Propiedad del producto nulo

Si:

$$
AB=0
$$

entonces:

$$

\\boxed{A=0\\quad\\text{o}\\quad B=0}
$$

Esta propiedad permite transformar una ecuación factorizada en varias ecuaciones más sencillas.

Por ejemplo:

$$
(x-1)(x+4)=0
$$

implica:

$$

x-1=0
$$

o:

$$
x+4=0
$$

Por tanto:

$$

\\boxed{x=1,\\,-4}
$$

---

## 20. Factorización y simplificación de fracciones

La factorización también permite simplificar fracciones algebraicas.

Por ejemplo:

$$
\\frac{x^2-9}{x^2+3x}
$$

Factorizamos:

$$

\\frac{(x-3)(x+3)}{x(x+3)}
$$

Podemos cancelar $x+3$, siempre que:

$$
x\\neq-3
$$

Por tanto:

$$

\\boxed{
\\frac{x^2-9}{x^2+3x}
=

\\frac{x-3}{x}
}
$$

con las restricciones:

$$
x\\neq0,\\qquad x\\neq-3
$$

---

## 21. Factorización sobre distintos conjuntos

La factorización puede depender del conjunto numérico utilizado.

Por ejemplo:

$$

x^2-2
$$

no se puede factorizar utilizando factores con coeficientes racionales.

Pero sobre los números reales:

$$
x^2-2=(x-\\sqrt2)(x+\\sqrt2)
$$

Por tanto, siempre es importante saber sobre qué conjunto se está trabajando.

---

## 22. Estrategia general

Para factorizar un polinomio:

1. Ordena el polinomio por grado.
2. Comprueba si existe un factor común.
3. Busca identidades notables.
4. Comprueba si puede factorizarse por agrupación.
5. Si es un trinomio cuadrático, busca sus factores.
6. Si es de grado mayor, busca posibles raíces.
7. Utiliza el teorema del factor.
8. Utiliza Ruffini cuando sea apropiado.
9. Repite el proceso con los factores obtenidos.
10. Comprueba multiplicando los factores.

---

## 23. Identidades fundamentales

### Cuadrado de una suma

$$

(a+b)^2=a^2+2ab+b^2
$$

### Cuadrado de una diferencia

$$
(a-b)^2=a^2-2ab+b^2
$$

### Diferencia de cuadrados

$$

a^2-b^2=(a-b)(a+b)
$$

### Suma de cubos

$$
a^3+b^3=(a+b)(a^2-ab+b^2)
$$

### Diferencia de cubos

$$

a^3-b^3=(a-b)(a^2+ab+b^2)
$$

---

## 24. Errores frecuentes

### No extraer el factor común

Antes de aplicar otros métodos, comprueba siempre si existe un factor común.

### Cambiar incorrectamente los signos

Por ejemplo:

$$
a^2-b^2=(a-b)(a+b)
$$

no:

$$

(a-b)^2
$$

### No comprobar la factorización

Después de factorizar, podemos multiplicar los factores para comprobar que recuperamos el polinomio original.

### Confundir factores y raíces

Si:

$$
x-a
$$

es un factor, entonces:

$$

a
$$

es una raíz.

Pero el factor y la raíz no son el mismo objeto.

---

## 25. Resumen

Las técnicas fundamentales de factorización son:

| Método                  | Estructura                              |
| ----------------------- | --------------------------------------- |
| Factor común            | $ax+ay=a(x+y)$                          |
| Agrupación              | $ax+ay+bx+by=(a+b)(x+y)$                |
| Diferencia de cuadrados | $a^2-b^2=(a-b)(a+b)$                    |
| Cuadrado perfecto       | $a^2\\pm2ab+b^2=(a\\pm b)^2$              |
| Suma de cubos           | $a^3+b^3=(a+b)(a^2-ab+b^2)$             |
| Diferencia de cubos     | $a^3-b^3=(a-b)(a^2+ab+b^2)$             |
| Teorema del factor      | $P(a)=0\\Rightarrow(x-a)$ es factor      |
| Ruffini                 | División entre $x-a$                    |
| Sustitución             | Transformación de estructuras repetidas |

## 26. Idea fundamental

Factorizar significa encontrar una estructura multiplicativa oculta dentro de un polinomio:

$$
\\boxed{
\\text{polinomio}
\\rightarrow
\\text{factores}
}
$$

La factorización conecta directamente el álgebra con las raíces de un polinomio:

$$
\\boxed{
P(a)=0
\\iff
(x-a)\\text{ es factor de }P(x)
}
$$

Por eso, factorizar es una de las herramientas principales para resolver ecuaciones y estudiar funciones polinómicas.
`,i=`# Factorització de polinomis

La factorització de polinomis consisteix a expressar un polinomi com un **producte de polinomis més senzills**.

És una eina fonamental per simplificar expressions, resoldre equacions, trobar arrels i estudiar funcions polinòmiques.

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

---

## 1. Què significa factoritzar?

Factoritzar significa transformar una suma o diferència de termes en un producte.

Per exemple:

$$

x^2+5x+6
$$

es pot escriure com:

$$
(x+2)(x+3)
$$

Els polinomis:

$$

x+2
$$

i:

$$
x+3
$$

són **factors** del polinomi original.

La factorització és, per tant, l'operació inversa del desenvolupament de productes.

---

## 2. Factor comú

El primer mètode que hem de comprovar és sempre l'existència d'un **factor comú**.

Per exemple:

$$

6x^3+9x^2
$$

Tots dos termes tenen $3x^2$ en comú:

$$
6x^3+9x^2
=

3x^2(2x+3)
$$

Per tant:

$$

\\boxed{6x^3+9x^2=3x^2(2x+3)}
$$

---

## 3. Factor comú amb diverses variables

El factor comú pot contenir diverses variables.

Per exemple:

$$
12x^3y+18x^2y^2
$$

El màxim factor comú és:

$$

6x^2y
$$

Per tant:

$$
12x^3y+18x^2y^2
=

6x^2y(2x+3y)
$$

---

## 4. Factorització per agrupació

Quan no hi ha un factor comú per a tots els termes, podem intentar agrupar-los.

Per exemple:

$$

ax+ay+bx+by
$$

Agrupem:

$$
a(x+y)+b(x+y)
$$

Ara apareix un factor comú:

$$

\\boxed{(a+b)(x+y)}
$$

Un altre exemple:

$$
x^3+2x^2+3x+6
$$

Agrupem:

$$

x^2(x+2)+3(x+2)
$$

Per tant:

$$
\\boxed{(x^2+3)(x+2)}
$$

---

## 5. Diferència de quadrats

Una identitat fonamental és:

$$

\\boxed{a^2-b^2=(a-b)(a+b)}
$$

Per exemple:

$$
x^2-25
$$

és una diferència de quadrats:

$$

x^2-5^2
$$

Per tant:

$$
\\boxed{x^2-25=(x-5)(x+5)}
$$

Un altre exemple:

$$

9x^2-16
$$

és:

$$
(3x)^2-4^2
$$

i, per tant:

$$

\\boxed{9x^2-16=(3x-4)(3x+4)}
$$

---

## 6. Trinomi quadrat perfecte

Una altra identitat important és:

$$
\\boxed{a^2+2ab+b^2=(a+b)^2}
$$

i:

$$

\\boxed{a^2-2ab+b^2=(a-b)^2}
$$

Per exemple:

$$
x^2+6x+9
$$

es pot escriure com:

$$

x^2+2(x)(3)+3^2
$$

Per tant:

$$
\\boxed{x^2+6x+9=(x+3)^2}
$$

També:

$$

x^2-10x+25=(x-5)^2
$$

---

## 7. Trinomis de segon grau

Una expressió de la forma:

$$
x^2+bx+c
$$

es pot factoritzar buscant dos nombres $m$ i $n$ que compleixin:

$$

m+n=b
$$

i:

$$
mn=c
$$

Aleshores:

$$

x^2+bx+c=(x+m)(x+n)
$$

Per exemple:

$$
x^2+5x+6
$$

Busquem dos nombres la suma dels quals sigui $5$ i el producte dels quals sigui $6$:

$$

2+3=5
$$

$$
2\\cdot3=6
$$

Per tant:

$$

\\boxed{x^2+5x+6=(x+2)(x+3)}
$$

---

## 8. Trinomis amb terme principal diferent d'1

Considerem:

$$
2x^2+7x+3
$$

Busquem una factorització de la forma:

$$

(2x+a)(x+b)
$$

Necessitem:

$$
ab=3
$$

i:

$$

2b+a=7
$$

Prenem:

$$
a=1,\\qquad b=3
$$

Per tant:

$$

\\boxed{2x^2+7x+3=(2x+1)(x+3)}
$$

---

## 9. Mètode del producte $ac$

Per a un trinomi:

$$
ax^2+bx+c
$$

podem buscar dos nombres el producte dels quals sigui:

$$

ac
$$

i la suma dels quals sigui:

$$
b
$$

Per exemple:

$$

6x^2+11x+3
$$

Calculem:

$$
ac=18
$$

Busquem dos nombres el producte dels quals sigui $18$ i la suma dels quals sigui $11$:

$$

9+2=11
$$

Descomponem el terme central:

$$
6x^2+9x+2x+3
$$

Agrupem:

$$

3x(2x+3)+1(2x+3)
$$

Per tant:

$$
\\boxed{6x^2+11x+3=(3x+1)(2x+3)}
$$

---

## 10. Factorització d'un polinomi quadràtic mitjançant les arrels

Si un polinomi quadràtic té arrels $r_1$ i $r_2$, es pot escriure com:

$$

a(x-r_1)(x-r_2)
$$

Per exemple:

$$
x^2-5x+6
$$

té les arrels:

$$

x=2
$$

i:

$$
x=3
$$

Per tant:

$$

\\boxed{x^2-5x+6=(x-2)(x-3)}
$$

---

## 11. Relació entre arrels i factors

Si:

$$
P(r)=0
$$

aleshores:

$$

x-r
$$

és un factor de $P(x)$.

Aquesta propietat és el **teorema del factor**:

$$
\\boxed{P(r)=0\\iff(x-r)\\text{ és factor de }P(x)}
$$

Per exemple, si:

$$

P(x)=x^3-4x^2+x+6
$$

i comprovem que:

$$
P(2)=0
$$

aleshores:

$$

x-2
$$

és un factor.

---

## 12. Teorema del residu

El teorema del residu estableix que el residu de dividir $P(x)$ entre $x-a$ és:

$$
\\boxed{P(a)}
$$

Per exemple, si:

$$

P(x)=x^2+3x+2
$$

dividim entre:

$$
x-1
$$

el residu és:

$$

P(1)=1+3+2=6
$$

Per tant, $x-1$ no és factor.

Si:

$$
P(a)=0
$$

el residu és zero i $x-a$ és factor.

---

## 13. Regla de Ruffini

La regla de Ruffini permet dividir ràpidament un polinomi entre un binomi de la forma:

$$

x-a
$$

És especialment útil quan coneixem una arrel.

Per exemple:

$$
P(x)=x^3-6x^2+11x-6
$$

Provem $x=1$:

$$

P(1)=0
$$

Per tant:

$$
x-1
$$

és factor.

Aplicant Ruffini obtenim:

$$

x^2-5x+6
$$

que podem tornar a factoritzar:

$$
x^2-5x+6=(x-2)(x-3)
$$

Per tant:

$$

\\boxed{
x^3-6x^2+11x-6
=

(x-1)(x-2)(x-3)
}
$$

---

## 14. Arrels múltiples

Una arrel pot aparèixer més d'una vegada.

Per exemple:

$$
P(x)=(x-2)^2(x+1)
$$

té:

- arrel $x=2$ de multiplicitat $2$;
- arrel $x=-1$ de multiplicitat $1$.

La multiplicitat indica quantes vegades apareix un factor.

---

## 15. Factorització completa

Factoritzar completament significa continuar factoritzant fins que els factors no es puguin descompondre més dins del conjunt numèric considerat.

Per exemple:

$$

2x^3-8x
$$

Primer extraiem factor comú:

$$
2x(x^2-4)
$$

Després apliquem la diferència de quadrats:

$$

2x(x-2)(x+2)
$$

Per tant:

$$
\\boxed{2x^3-8x=2x(x-2)(x+2)}
$$

---

## 16. Factorització de cubs

Hi ha dues identitats importants.

### Suma de cubs

$$

\\boxed{a^3+b^3=(a+b)(a^2-ab+b^2)}
$$

Per exemple:

$$
x^3+8
$$

és:

$$

x^3+2^3
$$

Per tant:

$$
\\boxed{x^3+8=(x+2)(x^2-2x+4)}
$$

### Diferència de cubs

$$

\\boxed{a^3-b^3=(a-b)(a^2+ab+b^2)}
$$

Per exemple:

$$
x^3-27
$$

és:

$$

x^3-3^3
$$

Per tant:

$$
\\boxed{x^3-27=(x-3)(x^2+3x+9)}
$$

---

## 17. Factorització mitjançant substitució

Alguns polinomis tenen una estructura que permet fer una substitució.

Per exemple:

$$

x^4-5x^2+6
$$

Prenem:

$$
u=x^2
$$

Aleshores:

$$

u^2-5u+6
$$

Factoritzem:

$$
(u-2)(u-3)
$$

Tornem a $x$:

$$

(x^2-2)(x^2-3)
$$

Per tant:

$$
\\boxed{x^4-5x^2+6=(x^2-2)(x^2-3)}
$$

---

## 18. Factorització i resolució d'equacions

La factorització és especialment útil per resoldre equacions.

Considerem:

$$

x^2-5x+6=0
$$

Factoritzem:

$$
(x-2)(x-3)=0
$$

Per la propietat del producte nul:

$$

x-2=0
$$

o:

$$
x-3=0
$$

Per tant:

$$

\\boxed{x=2\\quad\\text{o}\\quad x=3}
$$

---

## 19. Propietat del producte nul

Si:

$$
AB=0
$$

aleshores:

$$

\\boxed{A=0\\quad\\text{o}\\quad B=0}
$$

Aquesta propietat permet transformar una equació factoritzada en diverses equacions més senzilles.

Per exemple:

$$
(x-1)(x+4)=0
$$

implica:

$$

x-1=0
$$

o:

$$
x+4=0
$$

Per tant:

$$

\\boxed{x=1,\\,-4}
$$

---

## 20. Factorització i simplificació de fraccions

La factorització també permet simplificar fraccions algebraiques.

Per exemple:

$$
\\frac{x^2-9}{x^2+3x}
$$

Factoritzem:

$$

\\frac{(x-3)(x+3)}{x(x+3)}
$$

Podem simplificar $x+3$, sempre que:

$$
x\\neq-3
$$

Per tant:

$$

\\boxed{
\\frac{x^2-9}{x^2+3x}
=

\\frac{x-3}{x}
}
$$

amb les restriccions:

$$
x\\neq0,\\qquad x\\neq-3
$$

---

## 21. Factorització sobre diferents conjunts

La factorització pot dependre del conjunt numèric utilitzat.

Per exemple:

$$

x^2-2
$$

no es pot factoritzar utilitzant factors amb coeficients racionals.

Però sobre els nombres reals:

$$
x^2-2=(x-\\sqrt2)(x+\\sqrt2)
$$

Per tant, sempre és important saber sobre quin conjunt s'està treballant.

---

## 22. Estratègia general

Per factoritzar un polinomi:

1. Ordena el polinomi per grau.
2. Comprova si existeix un factor comú.
3. Busca identitats notables.
4. Comprova si es pot factoritzar per agrupació.
5. Si és un trinomi quadràtic, busca els seus factors.
6. Si és de grau superior, busca possibles arrels.
7. Utilitza el teorema del factor.
8. Utilitza Ruffini quan sigui apropiat.
9. Repeteix el procés amb els factors obtinguts.
10. Comprova multiplicant els factors.

---

## 23. Identitats fonamentals

### Quadrat d'una suma

$$

(a+b)^2=a^2+2ab+b^2
$$

### Quadrat d'una diferència

$$
(a-b)^2=a^2-2ab+b^2
$$

### Diferència de quadrats

$$

a^2-b^2=(a-b)(a+b)
$$

### Suma de cubs

$$
a^3+b^3=(a+b)(a^2-ab+b^2)
$$

### Diferència de cubs

$$

a^3-b^3=(a-b)(a^2+ab+b^2)
$$

---

## 24. Errors freqüents

### No extreure el factor comú

Abans d'aplicar altres mètodes, comprova sempre si hi ha un factor comú.

### Canviar incorrectament els signes

Per exemple:

$$
a^2-b^2=(a-b)(a+b)
$$

no:

$$

(a-b)^2
$$

### No comprovar la factorització

Després de factoritzar, podem multiplicar els factors per comprovar que recuperem el polinomi original.

### Confondre factors i arrels

Si:

$$
x-a
$$

és un factor, aleshores:

$$

a
$$

és una arrel.

Però el factor i l'arrel no són el mateix objecte.

---

## 25. Resum

Les tècniques fonamentals de factorització són:

| Mètode                 | Estructura                            |
| ---------------------- | ------------------------------------- |
| Factor comú            | $ax+ay=a(x+y)$                        |
| Agrupació              | $ax+ay+bx+by=(a+b)(x+y)$              |
| Diferència de quadrats | $a^2-b^2=(a-b)(a+b)$                  |
| Quadrat perfecte       | $a^2\\pm2ab+b^2=(a\\pm b)^2$            |
| Suma de cubs           | $a^3+b^3=(a+b)(a^2-ab+b^2)$           |
| Diferència de cubs     | $a^3-b^3=(a-b)(a^2+ab+b^2)$           |
| Teorema del factor     | $P(a)=0\\Rightarrow(x-a)$ és factor    |
| Ruffini                | Divisió entre $x-a$                   |
| Substitució            | Transformació d'estructures repetides |

## 26. Idea fonamental

Factoritzar significa trobar una estructura multiplicativa oculta dins d'un polinomi:

$$
\\boxed{
\\text{polinomi}
\\rightarrow
\\text{factors}
}
$$

La factorització connecta directament l'àlgebra amb les arrels d'un polinomi:

$$
\\boxed{
P(a)=0
\\iff
(x-a)\\text{ és factor de }P(x)
}
$$

Per això, factoritzar és una de les eines principals per resoldre equacions i estudiar funcions polinòmiques.
`,a=`# Polynomial Factorization

Polynomial factorization consists of expressing a polynomial as a **product of simpler polynomials**.

It is a fundamental tool for simplifying expressions, solving equations, finding roots, and studying polynomial functions.

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

---

## 1. What does factorization mean?

To factor means to transform a sum or difference of terms into a product.

For example:

$$
x^2+5x+6
$$

can be written as:

$$
(x+2)(x+3)
$$

The polynomials:

$$
x+2
$$

and:

$$
x+3
$$

are **factors** of the original polynomial.

Factorization is therefore the inverse operation of expanding products.

---

## 2. Common factor

The first method we should always check is whether there is a **common factor**.

For example:

$$
6x^3+9x^2
$$

Both terms contain $3x^2$:

$$
6x^3+9x^2
=

3x^2(2x+3)
$$

Therefore:

$$
\\boxed{6x^3+9x^2=3x^2(2x+3)}
$$

---

## 3. Common factor with several variables

The common factor can contain several variables.

For example:

$$
12x^3y+18x^2y^2
$$

The greatest common factor is:

$$
6x^2y
$$

Therefore:

$$
12x^3y+18x^2y^2
=

6x^2y(2x+3y)
$$

---

## 4. Factoring by grouping

When there is no common factor for every term, we can try grouping terms.

For example:

$$
ax+ay+bx+by
$$

Group the terms:

$$
a(x+y)+b(x+y)
$$

Now there is a common factor:

$$
\\boxed{(a+b)(x+y)}
$$

Another example:

$$
x^3+2x^2+3x+6
$$

Group the terms:

$$
x^2(x+2)+3(x+2)
$$

Therefore:

$$
\\boxed{(x^2+3)(x+2)}
$$

---

## 5. Difference of squares

A fundamental identity is:

$$
\\boxed{a^2-b^2=(a-b)(a+b)}
$$

For example:

$$
x^2-25
$$

is a difference of squares:

$$
x^2-5^2
$$

Therefore:

$$
\\boxed{x^2-25=(x-5)(x+5)}
$$

Another example:

$$
9x^2-16
$$

is:

$$
(3x)^2-4^2
$$

Therefore:

$$
\\boxed{9x^2-16=(3x-4)(3x+4)}
$$

---

## 6. Perfect-square trinomial

Another important identity is:

$$
\\boxed{a^2+2ab+b^2=(a+b)^2}
$$

and:

$$
\\boxed{a^2-2ab+b^2=(a-b)^2}
$$

For example:

$$
x^2+6x+9
$$

can be written as:

$$
x^2+2(x)(3)+3^2
$$

Therefore:

$$
\\boxed{x^2+6x+9=(x+3)^2}
$$

Also:

$$
x^2-10x+25=(x-5)^2
$$

---

## 7. Quadratic trinomials

An expression of the form:

$$
x^2+bx+c
$$

can be factored by finding two numbers $m$ and $n$ such that:

$$
m+n=b
$$

and:

$$
mn=c
$$

Then:

$$
x^2+bx+c=(x+m)(x+n)
$$

For example:

$$
x^2+5x+6
$$

We need two numbers whose sum is $5$ and whose product is $6$:

$$
2+3=5
$$

$$
2\\cdot3=6
$$

Therefore:

$$
\\boxed{x^2+5x+6=(x+2)(x+3)}
$$

---

## 8. Trinomials with a leading coefficient different from 1

Consider:

$$
2x^2+7x+3
$$

We look for a factorization of the form:

$$
(2x+a)(x+b)
$$

We need:

$$
ab=3
$$

and:

$$
2b+a=7
$$

Take:

$$
a=1,\\qquad b=3
$$

Therefore:

$$
\\boxed{2x^2+7x+3=(2x+1)(x+3)}
$$

---

## 9. The $ac$ method

For a trinomial:

$$
ax^2+bx+c
$$

we can find two numbers whose product is:

$$
ac
$$

and whose sum is:

$$
b
$$

For example:

$$
6x^2+11x+3
$$

Calculate:

$$
ac=18
$$

We need two numbers whose product is $18$ and whose sum is $11$:

$$
9+2=11
$$

Split the middle term:

$$
6x^2+9x+2x+3
$$

Group:

$$
3x(2x+3)+1(2x+3)
$$

Therefore:

$$
\\boxed{6x^2+11x+3=(3x+1)(2x+3)}
$$

---

## 10. Factoring a quadratic using its roots

If a quadratic polynomial has roots $r_1$ and $r_2$, it can be written as:

$$
a(x-r_1)(x-r_2)
$$

For example:

$$
x^2-5x+6
$$

has roots:

$$
x=2
$$

and:

$$
x=3
$$

Therefore:

$$
\\boxed{x^2-5x+6=(x-2)(x-3)}
$$

---

## 11. Relationship between roots and factors

If:

$$
P(r)=0
$$

then:

$$
x-r
$$

is a factor of $P(x)$.

This is the **factor theorem**:

$$
\\boxed{P(r)=0\\iff(x-r)\\text{ is a factor of }P(x)}
$$

For example, if:

$$
P(x)=x^3-4x^2+x+6
$$

and we verify that:

$$
P(2)=0
$$

then:

$$
x-2
$$

is a factor.

---

## 12. Remainder theorem

The remainder theorem states that the remainder when $P(x)$ is divided by $x-a$ is:

$$
\\boxed{P(a)}
$$

For example, if:

$$
P(x)=x^2+3x+2
$$

is divided by:

$$
x-1
$$

the remainder is:

$$
P(1)=1+3+2=6
$$

Therefore, $x-1$ is not a factor.

If:

$$
P(a)=0
$$

the remainder is zero and $x-a$ is a factor.

---

## 13. Synthetic division

Synthetic division allows us to quickly divide a polynomial by a binomial of the form:

$$
x-a
$$

It is particularly useful when we know a root.

For example:

$$
P(x)=x^3-6x^2+11x-6
$$

Test $x=1$:

$$
P(1)=0
$$

Therefore:

$$
x-1
$$

is a factor.

Using synthetic division gives:

$$
x^2-5x+6
$$

which can be factored again:

$$
x^2-5x+6=(x-2)(x-3)
$$

Therefore:

$$
\\boxed{
x^3-6x^2+11x-6
=

(x-1)(x-2)(x-3)
}
$$

---

## 14. Multiple roots

A root can appear more than once.

For example:

$$
P(x)=(x-2)^2(x+1)
$$

has:

- root $x=2$ with multiplicity $2$;
- root $x=-1$ with multiplicity $1$.

Multiplicity indicates how many times a factor occurs.

---

## 15. Complete factorization

Complete factorization means continuing to factor until the factors cannot be decomposed further over the number set being used.

For example:

$$
2x^3-8x
$$

First extract the common factor:

$$
2x(x^2-4)
$$

Then apply the difference of squares:

$$
2x(x-2)(x+2)
$$

Therefore:

$$
\\boxed{2x^3-8x=2x(x-2)(x+2)}
$$

---

## 16. Factoring cubes

There are two important identities.

### Sum of cubes

$$
\\boxed{a^3+b^3=(a+b)(a^2-ab+b^2)}
$$

For example:

$$
x^3+8
$$

is:

$$
x^3+2^3
$$

Therefore:

$$
\\boxed{x^3+8=(x+2)(x^2-2x+4)}
$$

### Difference of cubes

$$
\\boxed{a^3-b^3=(a-b)(a^2+ab+b^2)}
$$

For example:

$$
x^3-27
$$

is:

$$
x^3-3^3
$$

Therefore:

$$
\\boxed{x^3-27=(x-3)(x^2+3x+9)}
$$

---

## 17. Factoring by substitution

Some polynomials have a structure that allows a substitution.

For example:

$$
x^4-5x^2+6
$$

Take:

$$
u=x^2
$$

Then:

$$
u^2-5u+6
$$

Factor:

$$
(u-2)(u-3)
$$

Return to $x$:

$$
(x^2-2)(x^2-3)
$$

Therefore:

$$
\\boxed{x^4-5x^2+6=(x^2-2)(x^2-3)}
$$

---

## 18. Factorization and solving equations

Factorization is particularly useful for solving equations.

Consider:

$$
x^2-5x+6=0
$$

Factor:

$$
(x-2)(x-3)=0
$$

Using the zero-product property:

$$
x-2=0
$$

or:

$$
x-3=0
$$

Therefore:

$$
\\boxed{x=2\\quad\\text{or}\\quad x=3}
$$

---

## 19. Zero-product property

If:

$$
AB=0
$$

then:

$$
\\boxed{A=0\\quad\\text{or}\\quad B=0}
$$

This property allows a factored equation to be transformed into several simpler equations.

For example:

$$
(x-1)(x+4)=0
$$

implies:

$$
x-1=0
$$

or:

$$
x+4=0
$$

Therefore:

$$
\\boxed{x=1,\\,-4}
$$

---

## 20. Factorization and simplifying fractions

Factorization also allows us to simplify algebraic fractions.

For example:

$$
\\frac{x^2-9}{x^2+3x}
$$

Factor:

$$
\\frac{(x-3)(x+3)}{x(x+3)}
$$

We can cancel $x+3$, provided:

$$
x\\neq-3
$$

Therefore:

$$
\\boxed{
\\frac{x^2-9}{x^2+3x}
=

\\frac{x-3}{x}
}
$$

with the restrictions:

$$
x\\neq0,\\qquad x\\neq-3
$$

---

## 21. Factorization over different number sets

Factorization can depend on the number set being used.

For example:

$$
x^2-2
$$

cannot be factored using factors with rational coefficients.

But over the real numbers:

$$
x^2-2=(x-\\sqrt2)(x+\\sqrt2)
$$

Therefore, it is important to know which number set is being used.

---

## 22. General strategy

To factor a polynomial:

1. Arrange the polynomial by degree.
2. Check for a common factor.
3. Look for notable identities.
4. Check whether grouping is possible.
5. If it is a quadratic trinomial, find its factors.
6. If it has higher degree, look for possible roots.
7. Use the factor theorem.
8. Use synthetic division when appropriate.
9. Repeat the process with the resulting factors.
10. Check the result by multiplying the factors.

---

## 23. Fundamental identities

### Square of a sum

$$
(a+b)^2=a^2+2ab+b^2
$$

### Square of a difference

$$
(a-b)^2=a^2-2ab+b^2
$$

### Difference of squares

$$
a^2-b^2=(a-b)(a+b)
$$

### Sum of cubes

$$
a^3+b^3=(a+b)(a^2-ab+b^2)
$$

### Difference of cubes

$$
a^3-b^3=(a-b)(a^2+ab+b^2)
$$

---

## 24. Common mistakes

### Not extracting the common factor

Before applying other methods, always check whether there is a common factor.

### Changing signs incorrectly

For example:

$$
a^2-b^2=(a-b)(a+b)
$$

not:

$$
(a-b)^2
$$

### Not checking the factorization

After factoring, we can multiply the factors to verify that we recover the original polynomial.

### Confusing factors and roots

If:

$$
x-a
$$

is a factor, then:

$$
a
$$

is a root.

However, the factor and the root are not the same object.

---

## 25. Summary

The fundamental factorization techniques are:

| Method                | Structure                             |
| --------------------- | ------------------------------------- |
| Common factor         | $ax+ay=a(x+y)$                        |
| Grouping              | $ax+ay+bx+by=(a+b)(x+y)$              |
| Difference of squares | $a^2-b^2=(a-b)(a+b)$                  |
| Perfect square        | $a^2\\pm2ab+b^2=(a\\pm b)^2$            |
| Sum of cubes          | $a^3+b^3=(a+b)(a^2-ab+b^2)$           |
| Difference of cubes   | $a^3-b^3=(a-b)(a^2+ab+b^2)$           |
| Factor theorem        | $P(a)=0\\Rightarrow(x-a)$ is a factor  |
| Synthetic division    | Division by $x-a$                     |
| Substitution          | Transformation of repeated structures |

## 26. Fundamental idea

Factoring means finding a hidden multiplicative structure inside a polynomial:

$$
\\boxed{
\\text{polynomial}
\\rightarrow
\\text{factors}
}
$$

Factorization directly connects algebra with the roots of a polynomial:

$$
\\boxed{
P(a)=0
\\iff
(x-a)\\text{ is a factor of }P(x)
}
$$

For this reason, factorization is one of the main tools for solving equations and studying polynomial functions.
`;function o(){let{locale:o}=t();return e(n,{id:`polynomial-factorization`,content:{es:r,ca:i,en:a}[o]})}export{o as default};