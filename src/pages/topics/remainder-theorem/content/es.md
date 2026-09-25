# Teorema del resto

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
\boxed{P(a)}
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
\boxed{7}
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
\boxed{6}
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
\boxed{r=-5}
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
\boxed{P(a)=0\iff x-a\text{ divide exactamente a }P(x)}
$$

y también:

$$
\boxed{P(a)=0\iff a\text{ es una raíz de }P(x)}
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
\boxed{P(a)=0\iff x-a\text{ es factor de }P(x)}
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
P(x)\div(x-1)
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
\boxed{P(x)=(x-1)(x-2)(x-3)}
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
\boxed{x=1,\quad x=2,\quad x=3}
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
x-3=\frac{2x-6}{2}
$$

Como:

$$
P(x)=(x-3)Q(x)+P(3)
$$

al adaptar la expresión al divisor $2(x-3)$, el resto es:

$$
\boxed{\frac{P(3)}{2}}
$$

En general, si el divisor es:

$$
ax-b
$$

podemos escribirlo como:

$$
a\left(x-\frac{b}{a}\right)
$$

y el resto será:

$$
\boxed{P\left(\frac{b}{a}\right)}
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
ax-b=a\left(x-\frac{b}{a}\right)
$$

Por tanto, el resto $r$ satisface:

$$
\boxed{r=P\left(\frac{b}{a}\right)}
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
a=2,\qquad b=4
$$

Por tanto:

$$
\frac{b}{a}=2
$$

Calculamos:

$$
P(2)=2^2+3(2)+1=11
$$

El resto es:

$$
\boxed{11}
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
1,\;-4,\;5,\;-2
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
P(a)\neq0
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
\boxed{a=-2}
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
\boxed{\text{Resto}=P(a)}
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
\boxed{r=18}
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
P(x)\div(x-3)
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
\operatorname{resto}=P(a)
$$

El teorema del factor añade la condición especial:

$$
P(a)=0\iff x-a\text{ es factor}
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
\boxed{P(x)=(x-a)Q(x)+P(a)}
$$

y, en particular:

$$
\boxed{\text{resto de }P(x)\div(x-a)=P(a)}
$$

## 22. Idea fundamental

El teorema del resto transforma una división de polinomios en una evaluación.

En lugar de calcular toda la división:

$$
P(x)\div(x-a)
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
\boxed{a\text{ es raíz}\iff x-a\text{ es factor}}
$$
