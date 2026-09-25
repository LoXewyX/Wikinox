# Ecuaciones exponenciales y logarítmicas

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

con $a>0$ y $a\neq1$, entonces:

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
\ln(2^x)=\ln(6)
$$

Utilizando la propiedad de la potencia:

$$
x\ln(2)=\ln(6)
$$

Por tanto:

$$
x=\frac{\ln(6)}{\ln(2)}
$$

Equivalentemente:

$$
x=\log_2(6)
$$

El valor aproximado es:

$$
x\approx2.585
$$

---

## 4. El logaritmo natural

El logaritmo natural es el logaritmo en base $e$:

$$
\ln(x)=\log_e(x)
$$

donde:

$$
e\approx2.71828
$$

El logaritmo natural es especialmente útil para resolver ecuaciones exponenciales porque:

$$
\ln(e^x)=x
$$

Por ejemplo:

$$
e^{3x}=10
$$

Aplicamos $\ln$ a ambos lados:

$$
\ln(e^{3x})=\ln(10)
$$

Por tanto:

$$
3x=\ln(10)
$$

y:

$$
x=\frac{\ln(10)}{3}
$$

---

## 5. Ecuaciones logarítmicas

Una ecuación logarítmica contiene la incógnita dentro de un logaritmo.

Por ejemplo:

$$
\log_2(x)=3
$$

Utilizando la definición de logaritmo:

$$
\log_2(x)=3
\iff
2^3=x
$$

Por tanto:

$$
x=8
$$

### Definición de logaritmo

Para $a>0$, $a\neq1$ y $x>0$:

$$
\log_a(x)=b
\iff
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
\log_a(x)
$$

requiere:

$$
x>0
$$

Por ejemplo:

$$
\log(x-2)
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
\log_3(x)=4
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
\log_5(x-1)=2
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

Estas propiedades permiten simplificar y transformar ecuaciones logarítmicas.

---

## 9. Combinar logaritmos

Consideremos:

$$
\log_2(x)+\log_2(x-2)=3
$$

Utilizando la propiedad del producto:

$$
\log_2(x(x-2))=3
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
\log_2(x+3)=\log_2(7)
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
\log_a(f(x))=\log_a(g(x))
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
\ln(7^x)=\ln(20)
$$

Utilizando la propiedad de la potencia:

$$
x\ln(7)=\ln(20)
$$

Por tanto:

$$
x=\frac{\ln(20)}{\ln(7)}
$$

En general:

$$
a^x=b
$$

puede resolverse mediante:

$$
x=\frac{\ln(b)}{\ln(a)}
$$

para $a>0$, $a\neq1$ y $b>0$.

---

## 12. Cambio de base

Un logaritmo puede convertirse a otra base mediante:

$$
\log_a(x)=\frac{\log_b(x)}{\log_b(a)}
$$

La opción más habitual es $b=e$:

$$
\log_a(x)=\frac{\ln(x)}{\ln(a)}
$$

Por ejemplo:

$$
\log_2(10)
=
\frac{\ln(10)}{\ln(2)}
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
x=\log_2(6)
$$

---

## 14. Funciones exponenciales y logarítmicas como funciones inversas

La función exponencial:

$$
f(x)=a^x
$$

y la función logarítmica:

$$
g(x)=\log_a(x)
$$

son funciones inversas.

Esto significa que:

$$
a^{\log_a(x)}=x
$$

y:

$$
\log_a(a^x)=x
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
y=\log_2(x)
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
x=\log_2(3)
$$

Por tanto, las soluciones son:

$$
x=1
$$

y:

$$
x=\log_2(3)
$$

---

## 17. Errores frecuentes

### Olvidar las restricciones del dominio

Expresiones como:

$$
\ln(x)
$$

requieren:

$$
x>0
$$

### Aplicar incorrectamente las propiedades de los logaritmos

En general:

$$
\log_a(x+y)
\neq
\log_a(x)+\log_a(y)
$$

La propiedad correcta para un producto es:

$$
\log_a(xy)
=
\log_a(x)+\log_a(y)
$$

### No comprobar las soluciones

Al transformar ecuaciones logarítmicas, siempre debemos comprobar las soluciones obtenidas en la ecuación original.

### Confundir la notación logarítmica y exponencial

Estas dos expresiones son equivalentes:

$$
\log_a(x)=b
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
x=\log_a(b)
$$

o:

$$
x=\frac{\ln(b)}{\ln(a)}
$$

### Ecuaciones logarítmicas

Para:

$$
\log_a(x)=b
$$

tenemos:

$$
x=a^b
$$

### Propiedades principales de los logaritmos

$$
\log_a(xy)=\log_a(x)+\log_a(y)
$$

$$
\log_a\left(\frac{x}{y}\right)
=
\log_a(x)-\log_a(y)
$$

$$
\log_a(x^n)=n\log_a(x)
$$

### Cambio de base

$$
\log_a(x)=\frac{\ln(x)}{\ln(a)}
$$

La idea central es que **las ecuaciones exponenciales y logarítmicas pueden transformarse unas en otras**, lo que permite elegir el método más conveniente para resolver cada ecuación.
