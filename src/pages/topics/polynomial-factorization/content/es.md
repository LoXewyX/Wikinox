# Factorización de polinomios

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

\boxed{6x^3+9x^2=3x^2(2x+3)}
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

\boxed{(a+b)(x+y)}
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
\boxed{(x^2+3)(x+2)}
$$

---

## 5. Diferencia de cuadrados

Una identidad fundamental es:

$$

\boxed{a^2-b^2=(a-b)(a+b)}
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
\boxed{x^2-25=(x-5)(x+5)}
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

\boxed{9x^2-16=(3x-4)(3x+4)}
$$

---

## 6. Trinomio cuadrado perfecto

Otra identidad importante es:

$$
\boxed{a^2+2ab+b^2=(a+b)^2}
$$

y:

$$

\boxed{a^2-2ab+b^2=(a-b)^2}
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
\boxed{x^2+6x+9=(x+3)^2}
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
2\cdot3=6
$$

Por tanto:

$$

\boxed{x^2+5x+6=(x+2)(x+3)}
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
a=1,\qquad b=3
$$

Por tanto:

$$

\boxed{2x^2+7x+3=(2x+1)(x+3)}
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
\boxed{6x^2+11x+3=(3x+1)(2x+3)}
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

\boxed{x^2-5x+6=(x-2)(x-3)}
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
\boxed{P(r)=0\iff(x-r)\text{ es factor de }P(x)}
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
\boxed{P(a)}
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

\boxed{
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
\boxed{2x^3-8x=2x(x-2)(x+2)}
$$

---

## 16. Factorización de cubos

Existen dos identidades importantes.

### Suma de cubos

$$

\boxed{a^3+b^3=(a+b)(a^2-ab+b^2)}
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
\boxed{x^3+8=(x+2)(x^2-2x+4)}
$$

### Diferencia de cubos

$$

\boxed{a^3-b^3=(a-b)(a^2+ab+b^2)}
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
\boxed{x^3-27=(x-3)(x^2+3x+9)}
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
\boxed{x^4-5x^2+6=(x^2-2)(x^2-3)}
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

\boxed{x=2\quad\text{o}\quad x=3}
$$

---

## 19. Propiedad del producto nulo

Si:

$$
AB=0
$$

entonces:

$$

\boxed{A=0\quad\text{o}\quad B=0}
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

\boxed{x=1,\,-4}
$$

---

## 20. Factorización y simplificación de fracciones

La factorización también permite simplificar fracciones algebraicas.

Por ejemplo:

$$
\frac{x^2-9}{x^2+3x}
$$

Factorizamos:

$$

\frac{(x-3)(x+3)}{x(x+3)}
$$

Podemos cancelar $x+3$, siempre que:

$$
x\neq-3
$$

Por tanto:

$$

\boxed{
\frac{x^2-9}{x^2+3x}
=

\frac{x-3}{x}
}
$$

con las restricciones:

$$
x\neq0,\qquad x\neq-3
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
x^2-2=(x-\sqrt2)(x+\sqrt2)
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
| Cuadrado perfecto       | $a^2\pm2ab+b^2=(a\pm b)^2$              |
| Suma de cubos           | $a^3+b^3=(a+b)(a^2-ab+b^2)$             |
| Diferencia de cubos     | $a^3-b^3=(a-b)(a^2+ab+b^2)$             |
| Teorema del factor      | $P(a)=0\Rightarrow(x-a)$ es factor      |
| Ruffini                 | División entre $x-a$                    |
| Sustitución             | Transformación de estructuras repetidas |

## 26. Idea fundamental

Factorizar significa encontrar una estructura multiplicativa oculta dentro de un polinomio:

$$
\boxed{
\text{polinomio}
\rightarrow
\text{factores}
}
$$

La factorización conecta directamente el álgebra con las raíces de un polinomio:

$$
\boxed{
P(a)=0
\iff
(x-a)\text{ es factor de }P(x)
}
$$

Por eso, factorizar es una de las herramientas principales para resolver ecuaciones y estudiar funciones polinómicas.
