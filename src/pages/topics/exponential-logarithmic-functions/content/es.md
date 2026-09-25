# Funciones exponenciales y logarítmicas

Las **funciones exponenciales** y **logarítmicas** están estrechamente relacionadas. De hecho, una función logarítmica es la **función inversa** de una función exponencial.

## Función exponencial

Una función exponencial tiene la forma:

$$
f(x)=a^x
$$

donde:

$$
a>0,\qquad a\neq1
$$

La base $a$ determina el comportamiento de la función.

### Crecimiento exponencial

Si:

$$
a>1
$$

la función es creciente.

Por ejemplo:

$$
f(x)=2^x
$$

:::function-graph{expression="2^x" restriction="-5<=x<=5"}
:::

Cuanto mayor es $x$, más rápidamente aumenta el valor de la función.

### Decrecimiento exponencial

Si:

$$
0<a<1
$$

la función es decreciente.

Por ejemplo:

$$
f(x)=\left(\frac12\right)^x
$$

:::function-graph{expression="(1/2)^x" restriction="-5<=x<=5"}
:::

## Propiedades de las potencias

Las funciones exponenciales utilizan las propiedades de las potencias:

$$
a^x\cdot a^y=a^{x+y}
$$

$$
\frac{a^x}{a^y}=a^{x-y}
$$

$$
(a^x)^y=a^{xy}
$$

$$
a^{-x}=\frac{1}{a^x}
$$

Estas propiedades son especialmente útiles para resolver ecuaciones exponenciales.

## Función logarítmica

La función logarítmica es la inversa de la función exponencial.

Se escribe:

$$
f(x)=\log_a(x)
$$

donde:

$$
a>0,\qquad a\neq1,\qquad x>0
$$

La relación fundamental entre logaritmos y exponenciales es:

$$
\log_a(x)=y
\iff
a^y=x
$$

Por ejemplo:

$$
\log_2(8)=3
$$

porque:

$$
2^3=8
$$

### Función logarítmica en base 2

La función:

$$
f(x)=\log_2(x)
$$

solo está definida para:

$$
x>0
$$

:::function-graph{expression="log(x)/log(2)" restriction="0.1<=x<=10"}
:::

## Dominio y recorrido

Para una función exponencial:

$$
f(x)=a^x
$$

el dominio es:

$$
D_f=\mathbb{R}
$$

y el recorrido es:

$$
R_f=(0,\infty)
$$

Una función exponencial nunca toma valores iguales o menores que cero.

Para una función logarítmica:

$$
f(x)=\log_a(x)
$$

el dominio es:

$$
D_f=(0,\infty)
$$

y el recorrido es:

$$
R_f=\mathbb{R}
$$

## Relación entre las funciones

Las funciones:

$$
f(x)=a^x
$$

y

$$
g(x)=\log_a(x)
$$

son funciones inversas.

Por eso:

$$
\log_a(a^x)=x
$$

y:

$$
a^{\log_a(x)}=x
$$

Geométricamente, sus gráficas son simétricas respecto de la recta:

$$
y=x
$$

Podemos visualizar ambas funciones:

:::function-graph{expression="2^x" restriction="-5<=x<=5"}
:::

:::function-graph{expression="log(x)/log(2)" restriction="0.1<=x<=10"}
:::

## Propiedades de los logaritmos

Para $x>0$ e $y>0$:

### Producto

$$
\log_a(xy)=\log_a(x)+\log_a(y)
$$

### Cociente

$$
\log_a\left(\frac{x}{y}\right)
=
\log_a(x)-\log_a(y)
$$

### Potencia

$$
\log_a(x^n)=n\log_a(x)
$$

Estas propiedades permiten transformar expresiones complicadas en otras más sencillas.

## Logaritmo natural

El **logaritmo natural** es el logaritmo en base $e$:

$$
\ln(x)=\log_e(x)
$$

donde:

$$
e\approx2.71828
$$

La función exponencial correspondiente es:

$$
e^x
$$

Por tanto:

$$
\ln(e^x)=x
$$

y:

$$
e^{\ln(x)}=x
$$

## Cambio de base

Podemos calcular un logaritmo en cualquier base utilizando otra base:

$$
\log_a(x)=\frac{\log_b(x)}{\log_b(a)}
$$

En particular:

$$
\log_a(x)=\frac{\ln(x)}{\ln(a)}
$$

## Resolver ecuaciones exponenciales

Si podemos escribir ambos lados con la misma base:

$$
2^x=8
$$

Como:

$$
8=2^3
$$

entonces:

$$
2^x=2^3
$$

y, por tanto:

$$
x=3
$$

Cuando no podemos utilizar la misma base, podemos aplicar logaritmos.

Por ejemplo:

$$
3^x=10
$$

Aplicamos $\ln$ a ambos lados:

$$
\ln(3^x)=\ln(10)
$$

Utilizando la propiedad de la potencia:

$$
x\ln(3)=\ln(10)
$$

Por tanto:

$$
x=\frac{\ln(10)}{\ln(3)}
$$

## Resolver ecuaciones logarítmicas

Consideremos:

$$
\log_2(x)=5
$$

Utilizamos la definición de logaritmo:

$$
2^5=x
$$

Por tanto:

$$
x=32
$$

Es importante comprobar siempre las **condiciones de existencia**. El argumento de un logaritmo debe ser positivo:

$$
x>0
$$

## Aplicaciones

Las funciones exponenciales y logarítmicas aparecen en numerosos problemas reales.

Algunos ejemplos son:

- crecimiento de poblaciones;
- interés compuesto;
- crecimiento y decrecimiento exponencial;
- radiactividad;
- escalas logarítmicas;
- intensidad del sonido;
- magnitud de terremotos;
- modelos de crecimiento y aprendizaje.

Un modelo exponencial típico es:

$$
P(t)=P_0e^{kt}
$$

donde $P_0$ es el valor inicial y $k$ determina la velocidad de crecimiento o decrecimiento.

## Resumen

Las ideas fundamentales son:

$$
\boxed{f(x)=a^x}
$$

función exponencial, y

$$
\boxed{f(x)=\log_a(x)}
$$

función logarítmica.

Son funciones inversas:

$$
\boxed{\log_a(a^x)=x}
$$

$$
\boxed{a^{\log_a(x)}=x}
$$

y sus dominios son diferentes:

$$
a^x:\quad x\in\mathbb{R}
$$

$$
\log_a(x):\quad x>0
$$
