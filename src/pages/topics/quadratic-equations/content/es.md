# Ecuaciones de segundo grado

Una **ecuación de segundo grado** es una ecuación polinómica en la que la incógnita aparece elevada, como máximo, al exponente $2$ y el coeficiente de $x^2$ es distinto de cero.

Su forma general es:

$$
ax^2+bx+c=0
$$

donde:

- $a$, $b$ y $c$ son números reales;
- $a\neq0$;
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
a=3,\qquad b=-7,\qquad c=2
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
\boxed{x=2,\quad x=3}
$$

## Fórmula cuadrática

La fórmula cuadrática permite resolver cualquier ecuación de segundo grado real:

$$
ax^2+bx+c=0
$$

siempre que:

$$
a\neq0
$$

Las soluciones vienen dadas por:

$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

El símbolo $\pm$ indica que debemos considerar dos posibilidades:

$$
x_1=\frac{-b+\sqrt{b^2-4ac}}{2a}
$$

y

$$
x_2=\frac{-b-\sqrt{b^2-4ac}}{2a}
$$

## El discriminante

La expresión que aparece dentro de la raíz cuadrada recibe el nombre de **discriminante**:

$$
\Delta=b^2-4ac
$$

El discriminante permite determinar el número de soluciones reales de una ecuación de segundo grado.

### Si $\Delta>0$

Existen **dos soluciones reales distintas**:

$$
x_1\neq x_2
$$

Por ejemplo:

$$
x^2-5x+6=0
$$

Aquí:

$$
a=1,\qquad b=-5,\qquad c=6
$$

Calculamos:

$$
\Delta=(-5)^2-4(1)(6)
$$

$$
\Delta=25-24=1
$$

Como:

$$
\Delta>0
$$

hay dos soluciones reales:

$$
x_1=2,\qquad x_2=3
$$

### Si $\Delta=0$

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
\Delta=(-4)^2-4(1)(4)=0
$$

Por tanto:

$$
x=\frac{4}{2}=2
$$

La solución es:

$$
\boxed{x=2}
$$

### Si $\Delta<0$

No existen soluciones reales.

Por ejemplo:

$$
x^2+4x+5=0
$$

Tenemos:

$$
\Delta=4^2-4(1)(5)
$$

$$
\Delta=16-20=-4
$$

Como:

$$
\Delta<0
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
-3\cdot-4=12
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
\quad\text{o}\quad
x=4
$$

Las soluciones son:

$$
\boxed{x=3,\quad x=4}
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
x=\pm3
$$

Las soluciones son:

$$
\boxed{x=3,\quad x=-3}
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
\quad\text{o}\quad
x=5
$$

Las soluciones son:

$$
\boxed{x=0,\quad x=5}
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
\quad\text{y}\quad
x=3
$$

Por eso la ecuación tiene dos soluciones reales.

## Relación entre el discriminante y la gráfica

El discriminante también tiene una interpretación geométrica.

### $\Delta>0$

La parábola corta el eje $x$ en dos puntos.

$$
\boxed{\text{2 soluciones reales}}
$$

### $\Delta=0$

La parábola toca el eje $x$ en un único punto.

$$
\boxed{\text{1 solución real doble}}
$$

### $\Delta<0$

La parábola no corta el eje $x$.

$$
\boxed{\text{0 soluciones reales}}
$$

Esta relación permite interpretar algebraicamente y gráficamente el mismo problema.

## Coordenadas del vértice

Para una función cuadrática:

$$
f(x)=ax^2+bx+c
$$

la coordenada $x$ del vértice es:

$$
x_v=-\frac{b}{2a}
$$

La coordenada $y$ se obtiene sustituyendo este valor en la función:

$$
y_v=f(x_v)
$$

Por tanto, el vértice es:

$$
V\left(-\frac{b}{2a},f\left(-\frac{b}{2a}\right)\right)
$$

Por ejemplo:

$$
f(x)=x^2-4x+3
$$

Tenemos:

$$
a=1,\qquad b=-4
$$

Entonces:

$$
x_v=-\frac{-4}{2(1)}=2
$$

Calculamos la coordenada $y$:

$$
y_v=2^2-4(2)+3=-1
$$

Por tanto:

$$
\boxed{V=(2,-1)}
$$

## Eje de simetría

La parábola es simétrica respecto de una recta vertical.

Esta recta se denomina **eje de simetría** y tiene ecuación:

$$
x=-\frac{b}{2a}
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
x_1+x_2=-\frac{b}{a}
$$

y

$$
x_1x_2=\frac{c}{a}
$$

Estas relaciones se conocen como **relaciones de Viète**.

Por ejemplo:

$$
2x^2-6x+4=0
$$

Si sus raíces son $x_1$ y $x_2$, entonces:

$$
x_1+x_2=\frac{6}{2}=3
$$

y

$$
x_1x_2=\frac{4}{2}=2
$$

Las raíces son $1$ y $2$, y efectivamente:

$$
1+2=3
$$

$$
1\cdot2=2
$$

## Comprobación de las soluciones

Después de resolver una ecuación de segundo grado conviene comprobar las soluciones en la ecuación original.

Por ejemplo:

$$
x^2-5x+6=0
$$

Las soluciones son:

$$
x=2,\qquad x=3
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

- olvidar que $a\neq0$;
- copiar incorrectamente el signo de $b$;
- calcular mal el discriminante;
- olvidar el símbolo $\pm$ en la fórmula cuadrática;
- dividir únicamente una parte de la expresión entre $2a$;
- perder una solución al extraer una raíz cuadrada;
- no comprobar las soluciones;
- confundir el vértice con una raíz.

En particular, recuerda que:

$$
\sqrt{x^2}=|x|
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
\boxed{x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}}
$$
