# Inecuaciones lineales y cuadráticas

Las **inecuaciones lineales y cuadráticas** permiten determinar qué valores de una variable hacen que una desigualdad algebraica sea verdadera.

A diferencia de una ecuación, una inecuación normalmente no tiene una única solución. Su solución suele ser un **intervalo** o una unión de intervalos.

---

## 1. ¿Qué es una inecuación?

Una inecuación es una desigualdad que contiene una variable.

Los símbolos principales son:

- $<$ menor que
- $>$ mayor que
- $\leq$ menor o igual que
- $\geq$ mayor o igual que

Por ejemplo:

$$
2x+3>7
$$

Resolver esta inecuación significa encontrar todos los valores de $x$ que hacen verdadera la desigualdad.

---

## 2. Inecuaciones lineales

Una inecuación lineal tiene la variable con exponente $1$.

Por ejemplo:

$$
3x-5>7
$$

El objetivo es aislar $x$, de forma similar a una ecuación.

### Ejemplo

$$
3x-5>7
$$

Sumamos $5$:

$$
3x>12
$$

Dividimos entre $3$:

$$
x>4
$$

Por tanto:

$$
\boxed{x>4}
$$

En notación de intervalo:

$$
(4,\infty)
$$

---

## 3. Regla fundamental al multiplicar o dividir por un número negativo

Esta es una de las reglas más importantes de las inecuaciones.

Si multiplicamos o dividimos una desigualdad por un número negativo, **el sentido de la desigualdad cambia**.

Por ejemplo:

$$
-2x>6
$$

Dividimos entre $-2$:

$$
x<-3
$$

El símbolo $>$ se convierte en $<$.

### Ejemplo

$$
-3x+2\leq 11
$$

Restamos $2$:

$$
-3x\leq 9
$$

Dividimos entre $-3$ y cambiamos el sentido:

$$
x\geq -3
$$

Por tanto:

$$
\boxed{x\geq -3}
$$

---

## 4. Representación en la recta real

Las soluciones de una inecuación pueden representarse sobre la recta real.

Para:

$$
x>2
$$

se utilizan valores mayores que $2$, sin incluir el $2$.

En notación de intervalo:

$$
(2,\infty)
$$

Para:

$$
x\geq 2
$$

el $2$ sí está incluido:

$$
[2,\infty)
$$

### Regla

- $<$ o $>$ → extremo abierto
- $\leq$ o $\geq$ → extremo cerrado

---

## 5. Inecuaciones lineales con varios términos

Consideremos:

$$
4x-7\leq 2x+5
$$

Agrupamos los términos con $x$:

$$
4x-2x\leq 5+7
$$

$$
2x\leq 12
$$

Dividimos entre $2$:

$$
x\leq 6
$$

Solución:

$$
\boxed{x\leq 6}
$$

En intervalos:

$$
(-\infty,6]
$$

---

## 6. Inecuaciones con paréntesis

Primero desarrollamos los paréntesis.

Por ejemplo:

$$
3(x-2)+1>2x+4
$$

Desarrollamos:

$$
3x-6+1>2x+4
$$

Simplificamos:

$$
3x-5>2x+4
$$

Restamos $2x$:

$$
x-5>4
$$

Sumamos $5$:

$$
x>9
$$

Por tanto:

$$
\boxed{x>9}
$$

---

## 7. Inecuaciones dobles

También podemos tener dos desigualdades simultáneas.

Por ejemplo:

$$
2<x+1\leq 5
$$

Restamos $1$ en los tres miembros:

$$
1<x\leq 4
$$

Por tanto:

$$
\boxed{1<x\leq 4}
$$

En notación de intervalo:

$$
(1,4]
$$

---

## 8. Inecuaciones cuadráticas

Una inecuación cuadrática contiene un polinomio de segundo grado.

Por ejemplo:

$$
x^2-5x+6>0
$$

Primero factorizamos:

$$
(x-2)(x-3)>0
$$

Los valores críticos son:

$$
x=2
$$

y

$$
x=3
$$

Estos valores dividen la recta real en tres intervalos:

$$
(-\infty,2),\qquad (2,3),\qquad (3,\infty)
$$

---

## 9. Análisis del signo

Para determinar dónde el producto es positivo o negativo, estudiamos el signo de cada factor.

| Intervalo     | $x-2$ | $x-3$ | Producto |
| ------------- | ----: | ----: | -------: |
| $(-\infty,2)$ |   $-$ |   $-$ |      $+$ |
| $(2,3)$       |   $+$ |   $-$ |      $-$ |
| $(3,\infty)$  |   $+$ |   $+$ |      $+$ |

Como queremos:

$$
(x-2)(x-3)>0
$$

seleccionamos los intervalos donde el producto es positivo:

$$
\boxed{x<2\quad\text{o}\quad x>3}
$$

En intervalos:

$$
\boxed{(-\infty,2)\cup(3,\infty)}
$$

---

## 10. ¿Por qué aparecen los puntos críticos?

Los puntos críticos son los valores donde la expresión puede cambiar de signo.

Para un polinomio factorizado:

$$
(x-a)(x-b)
$$

los puntos críticos son:

$$
x=a,\qquad x=b
$$

Estos valores dividen la recta real en regiones donde el signo permanece constante.

---

## 11. Inecuación cuadrática menor que cero

Consideremos:

$$
x^2-5x+6<0
$$

Factorizamos:

$$
(x-2)(x-3)<0
$$

De la tabla anterior sabemos que el producto es negativo entre las raíces.

Por tanto:

$$
\boxed{2<x<3}
$$

En intervalos:

$$
\boxed{(2,3)}
$$

---

## 12. Cuando la desigualdad incluye la igualdad

Consideremos:

$$
x^2-5x+6\geq 0
$$

Factorizamos:

$$
(x-2)(x-3)\geq 0
$$

El producto es positivo fuera de las raíces y es igual a cero en ellas.

Por tanto:

$$
\boxed{x\leq 2\quad\text{o}\quad x\geq 3}
$$

En intervalos:

$$
\boxed{(-\infty,2]\cup[3,\infty)}
$$

Los extremos se incluyen porque la desigualdad contiene $\geq$.

---

## 13. Método de los puntos de prueba

Otra forma de resolver una inecuación cuadrática es elegir un punto de cada intervalo y comprobar el signo.

Para:

$$
(x-2)(x-3)>0
$$

los intervalos son:

$$
(-\infty,2),\quad (2,3),\quad (3,\infty)
$$

Podemos elegir:

- $x=0$
- $x=2.5$
- $x=4$

### Primer intervalo

$$
(0-2)(0-3)=(-2)(-3)=6>0
$$

Se incluye.

### Segundo intervalo

$$
(2.5-2)(2.5-3)=(0.5)(-0.5)<0
$$

No se incluye.

### Tercer intervalo

$$
(4-2)(4-3)=2>0
$$

Se incluye.

Resultado:

$$
\boxed{(-\infty,2)\cup(3,\infty)}
$$

---

## 14. Inecuaciones cuadráticas con coeficiente principal negativo

Consideremos:

$$
-x^2+4x-3>0
$$

Factorizamos:

$$
-(x^2-4x+3)>0
$$

$$
-(x-1)(x-3)>0
$$

Los puntos críticos son $1$ y $3$.

La parábola abre hacia abajo, por lo que es positiva entre las raíces.

Así:

$$
\boxed{1<x<3}
$$

---

## 15. Uso de la parábola

Una inecuación cuadrática también puede interpretarse mediante su función asociada:

$$
f(x)=ax^2+bx+c
$$

Resolver:

$$
ax^2+bx+c>0
$$

equivale a encontrar los valores de $x$ para los que la gráfica de $f$ está **por encima del eje $x$**.

Resolver:

$$
ax^2+bx+c<0
$$

equivale a encontrar dónde la gráfica está **por debajo del eje $x$**.

---

## 16. Ejemplo mediante la gráfica

Consideremos:

$$
x^2-4x+3<0
$$

La expresión se factoriza como:

$$
(x-1)(x-3)<0
$$

Las raíces son $1$ y $3$.

La parábola abre hacia arriba, por lo que está por debajo del eje $x$ entre las raíces.

Por tanto:

$$
\boxed{1<x<3}
$$

---

## 17. Cuando no existen raíces reales

No todas las expresiones cuadráticas tienen raíces reales.

Consideremos:

$$
x^2+1>0
$$

Como:

$$
x^2\geq 0
$$

tenemos:

$$
x^2+1\geq 1
$$

Por tanto, siempre es positivo:

$$
\boxed{x\in\mathbb{R}}
$$

En cambio:

$$
x^2+1<0
$$

no tiene solución real:

$$
\boxed{\varnothing}
$$

---

## 18. Discriminante

Para una ecuación cuadrática:

$$
ax^2+bx+c=0
$$

el discriminante es:

$$
\Delta=b^2-4ac
$$

Permite determinar el número de raíces reales.

### Si $\Delta>0$

Existen dos raíces reales distintas.

### Si $\Delta=0$

Existe una raíz real doble.

### Si $\Delta<0$

No existen raíces reales.

Esto también ayuda a analizar el signo de una expresión cuadrática.

---

## 19. Una raíz doble

Consideremos:

$$
(x-2)^2\geq 0
$$

Un cuadrado siempre es no negativo.

Por tanto:

$$
\boxed{x\in\mathbb{R}}
$$

En cambio:

$$
(x-2)^2<0
$$

no tiene solución real:

$$
\boxed{\varnothing}
$$

La raíz $x=2$ no cambia el signo porque tiene multiplicidad par.

---

## 20. Inecuaciones cuadráticas con fracciones

Si la expresión contiene una fracción, primero debemos tener en cuenta las restricciones del denominador.

Por ejemplo:

$$
\frac{x^2-4}{x-1}>0
$$

Factorizamos el numerador:

$$
\frac{(x-2)(x+2)}{x-1}>0
$$

Los puntos críticos son:

$$
x=-2,\qquad x=1,\qquad x=2
$$

Pero $x=1$ no pertenece al dominio porque anula el denominador.

Los intervalos son:

$$
(-\infty,-2),\quad (-2,1),\quad (1,2),\quad (2,\infty)
$$

Después estudiamos el signo en cada intervalo.

Este procedimiento conecta las inecuaciones cuadráticas con las **inecuaciones racionales**.

---

## 21. Multiplicidad de las raíces

La multiplicidad de una raíz determina si el signo cambia al atravesarla.

### Multiplicidad impar

El signo cambia.

Por ejemplo:

$$
(x-2)
$$

cambia de signo al pasar por $x=2$.

### Multiplicidad par

El signo no cambia.

Por ejemplo:

$$
(x-2)^2
$$

es positivo a ambos lados de $2$.

Esta observación permite construir tablas de signos de forma más rápida.

---

## 22. Procedimiento general para inecuaciones lineales

Para resolver una inecuación lineal:

1. Elimina paréntesis.
2. Reduce términos semejantes.
3. Agrupa las variables en un lado.
4. Agrupa las constantes en el otro.
5. Despeja la variable.
6. Si multiplicas o divides entre un número negativo, cambia el sentido de la desigualdad.
7. Expresa la solución mediante una desigualdad o un intervalo.

---

## 23. Procedimiento general para inecuaciones cuadráticas

Para resolver una inecuación cuadrática:

1. Lleva todos los términos a un mismo lado.
2. Simplifica la expresión.
3. Encuentra sus raíces.
4. Factoriza cuando sea posible.
5. Ordena los puntos críticos.
6. Divide la recta real en intervalos.
7. Determina el signo en cada intervalo.
8. Selecciona los intervalos que cumplen la desigualdad.
9. Incluye las raíces si la desigualdad contiene $\leq$ o $\geq$.
10. Escribe la solución en notación de intervalo.

---

## 24. Ejemplo completo

Resolvamos:

$$
2x^2-x-3\leq 0
$$

### Paso 1: Factorizar

Buscamos dos factores:

$$
2x^2-x-3=(2x-3)(x+1)
$$

Por tanto:

$$
(2x-3)(x+1)\leq 0
$$

### Paso 2: Encontrar los puntos críticos

Igualamos cada factor a cero:

$$
2x-3=0
$$

$$
x=\frac{3}{2}
$$

y:

$$
x+1=0
$$

$$
x=-1
$$

### Paso 3: Ordenar los puntos

$$
-1<\frac{3}{2}
$$

Los intervalos son:

$$
(-\infty,-1),\quad
\left(-1,\frac{3}{2}\right),\quad
\left(\frac{3}{2},\infty\right)
$$

### Paso 4: Analizar el signo

| Intervalo                         | $2x-3$ | $x+1$ | Producto |
| --------------------------------- | -----: | ----: | -------: |
| $(-\infty,-1)$                    |    $-$ |   $-$ |      $+$ |
| $\left(-1,\frac{3}{2}\right)$     |    $-$ |   $+$ |      $-$ |
| $\left(\frac{3}{2},\infty\right)$ |    $+$ |   $+$ |      $+$ |

Queremos:

$$
(2x-3)(x+1)\leq 0
$$

Por tanto, seleccionamos el intervalo donde el producto es negativo y los puntos donde es cero:

$$
\boxed{-1\leq x\leq\frac{3}{2}}
$$

En intervalos:

$$
\boxed{\left[-1,\frac{3}{2}\right]}
$$

---

## 25. Errores frecuentes

### Olvidar cambiar el sentido al dividir entre un número negativo

Incorrecto:

$$
-2x>4
\Rightarrow x> -2
$$

Correcto:

$$
-2x>4
\Rightarrow x<-2
$$

### Incluir una raíz en una desigualdad estricta

Para:

$$
(x-2)(x-3)>0
$$

no podemos incluir $2$ ni $3$.

La solución es:

$$
(-\infty,2)\cup(3,\infty)
$$

### Incluir siempre las raíces

Las raíces solo se incluyen cuando la desigualdad contiene:

$$
\leq
$$

o

$$
\geq
$$

### Resolver una cuadrática como si fuera una ecuación

Encontrar las raíces no es suficiente. Las raíces solamente dividen la recta en intervalos donde debemos estudiar el signo.

### Olvidar el dominio

En expresiones con denominadores, los valores que hacen cero el denominador nunca pueden pertenecer a la solución.

---

## 26. Resumen

| Tipo                         | Método principal                                                            |
| ---------------------------- | --------------------------------------------------------------------------- |
| Lineal                       | Despejar la variable                                                        |
| Lineal con número negativo   | Cambiar el sentido de la desigualdad                                        |
| Cuadrática                   | Encontrar raíces y analizar signos                                          |
| Cuadrática factorizada       | Tabla de signos                                                             |
| Cuadrática sin raíces reales | Analizar el signo mediante el coeficiente principal o completar el cuadrado |
| Cuadrática con raíz doble    | El signo no cambia en la raíz                                               |
| Racional                     | Puntos críticos y restricciones de dominio                                  |

Las ideas fundamentales son:

$$
\boxed{\text{raíces}+\text{signos}+\text{intervalos}}
$$

para las inecuaciones cuadráticas, y

$$
\boxed{\text{despejar}+\text{invertir el signo si corresponde}}
$$

para las inecuaciones lineales.

---

## 27. Idea fundamental

Resolver una inecuación significa determinar **en qué regiones de la recta real la desigualdad es verdadera**.

En las inecuaciones lineales, normalmente basta con despejar la variable.

En las inecuaciones cuadráticas, las raíces dividen la recta real en intervalos y el signo de la expresión determina cuáles de ellos forman parte de la solución.

Por eso, una inecuación cuadrática puede entenderse como un problema de:

$$
\boxed{\text{puntos críticos}\longrightarrow\text{signos}\longrightarrow\text{intervalos}}
$$
