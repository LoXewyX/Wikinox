# Funciones

Una **función** es una relación que asigna a cada valor de entrada exactamente un valor de salida.

Una función se suele escribir como:

$$
f(x)
$$

El símbolo $f$ representa el nombre de la función y $x$ representa el valor que introducimos en ella.

Por ejemplo:

$$
f(x)=2x+1
$$

Esta expresión indica que la función toma un valor $x$, lo multiplica por 2 y después suma 1.

:::function-graph{expression="2*x" showWorkings=true}
:::

## 1. Funciones

Una función puede entenderse como una regla que transforma valores de entrada en valores de salida.

Podemos representarla mediante una tabla:

| Entrada $x$ | Salida $f(x)$ |
| ----------: | ------------: |
|           0 |             1 |
|           1 |             3 |
|           2 |             5 |
|           3 |             7 |

En este caso, la regla es:

$$
f(x)=2x+1
$$

Por ejemplo, si introducimos $x=2$:

$$
f(2)=2\cdot2+1=5
$$

Por tanto, la entrada es $2$ y la salida es $5$.

Una función también puede representarse mediante una gráfica.

## 2. Elementos de una función

Una función tiene tres elementos fundamentales:

- **Entrada:** el valor que introducimos en la función.
- **Regla:** la operación que indica cómo se obtiene la salida.
- **Salida:** el resultado obtenido.

Por ejemplo, consideremos:

$$
f(x)=x+3
$$

El símbolo $x$ representa la entrada.

La expresión $x+3$ es la regla de la función.

El símbolo $f(x)$ representa la salida correspondiente a la entrada $x$.

Si utilizamos $x=4$:

$$
f(4)=4+3=7
$$

Por tanto, la función transforma la entrada $4$ en la salida $7$.

## 3. Variable independiente y variable dependiente

La **variable independiente** es la variable cuyo valor podemos elegir como entrada.

Habitualmente se representa mediante $x$.

La **variable dependiente** es la variable cuyo valor depende de la entrada.

Habitualmente se representa mediante $y$ o mediante $f(x)$.

Por ejemplo:

$$
y=2x+1
$$

Aquí $x$ es la variable independiente y $y$ es la variable dependiente.

También podemos escribir la misma función como:

$$
f(x)=2x+1
$$

En esta notación, $f(x)$ representa el valor de salida que depende de $x$.

Si $x=3$:

$$
f(3)=2\cdot3+1=7
$$

Por tanto:

$$
x=3
$$

es la entrada y:

$$
f(3)=7
$$

es la salida.

## 4. Representación gráfica de una función

Una función puede representarse visualmente mediante una **gráfica**.

La gráfica permite observar cómo cambian los valores de salida cuando cambia la entrada.

Para representar una función necesitamos un **plano cartesiano**.

### 4.1. El plano cartesiano

El plano cartesiano está formado por dos ejes perpendiculares:

- El **eje $x$**, que representa los valores de entrada.
- El **eje $y$**, que representa los valores de salida.

El punto donde ambos ejes se cruzan se llama **origen** y se representa mediante:

$$
(0,0)
$$

Un punto del plano se representa mediante un par ordenado:

$$
(x,y)
$$

El primer número indica la posición sobre el eje $x$ y el segundo indica la posición sobre el eje $y$.

Por ejemplo:

$$
(2,5)
$$

representa el punto cuya coordenada $x$ es $2$ y cuya coordenada $y$ es $5$.

### 4.2. Cómo obtenemos los puntos de una función

Consideremos:

$$
f(x)=2x+1
$$

Podemos elegir diferentes valores de $x$ y calcular el correspondiente valor de $f(x)$.

|  $x$ | $f(x)=2x+1$ |     Punto |
| ---: | ----------: | --------: |
| $-2$ |        $-3$ | $(-2,-3)$ |
| $-1$ |        $-1$ | $(-1,-1)$ |
|  $0$ |         $1$ |   $(0,1)$ |
|  $1$ |         $3$ |   $(1,3)$ |
|  $2$ |         $5$ |   $(2,5)$ |

Cada par $(x,f(x))$ corresponde a un punto de la gráfica.

Por ejemplo, para $x=2$:

$$
f(2)=5
$$

Por tanto, obtenemos el punto:

$$
(2,5)
$$

:::function-graph{expression="2*x+1" showWorkings=true}
:::

### 4.3. De los puntos a la curva

Cuando representamos suficientes puntos de una función, podemos observar la forma que siguen.

En algunas funciones los puntos forman una línea recta.

En otras forman una curva.

La forma depende de la expresión que define la función.

Por ejemplo:

$$
f(x)=2x+1
$$

produce una recta.

En cambio:

$$
f(x)=x^2
$$

produce una curva llamada **parábola**.

:::function-graph{expression="x^2" showWorkings=true}
:::

### 4.4. Por qué aparece una recta

Consideremos de nuevo:

$$
f(x)=2x+1
$$

Cuando $x$ aumenta una unidad, $f(x)$ aumenta siempre dos unidades.

El cambio de $x$ se puede representar mediante ${\Delta x}$.

El símbolo $\Delta$ indica un **cambio** o una **variación**.

Por tanto, $\Delta x$ representa el cambio de $x$.

De forma similar, $\Delta y$ representa el cambio de $y$.

La relación entre ambos cambios se expresa mediante:

$$
\frac{\Delta y}{\Delta x}=m
$$

El símbolo $m$ representa la **pendiente** de una recta.

En la función:

$$
f(x)=2x+1
$$

la pendiente es:

$$
m=2
$$

Esto significa que por cada aumento de una unidad en $x$, el valor de $y$ aumenta dos unidades.

### 4.5. Cuando la pendiente cambia

En una recta, la pendiente es constante.

Por ejemplo:

$$
f(x)=3x+1
$$

tiene pendiente:

$$
m=3
$$

La pendiente no cambia cuando nos desplazamos por la recta.

En una función como:

$$
f(x)=x^2
$$

la pendiente cambia según el lugar de la gráfica.

Por eso la representación gráfica no es una recta, sino una curva.

:::function-graph{expression="x^2" showWorkings=true}
:::

### 4.6. Qué significa la curvatura

Una gráfica es curva cuando la forma en que cambia la salida no permanece constante.

Por ejemplo:

$$
f(x)=x^2
$$

produce valores cada vez mayores cuando $x$ se aleja de cero.

Podemos observar algunos valores:

|  $x$ | $f(x)$ |
| ---: | -----: |
| $-3$ |    $9$ |
| $-2$ |    $4$ |
| $-1$ |    $1$ |
|  $0$ |    $0$ |
|  $1$ |    $1$ |
|  $2$ |    $4$ |
|  $3$ |    $9$ |

Los valores de salida no aumentan siempre en la misma cantidad.

Por eso los puntos no forman una recta.

### 4.7. Cómo reconocer una función creciente

Una función es **creciente** en un intervalo cuando, al aumentar $x$, también aumenta el valor de la función.

Por ejemplo:

$$
f(x)=2x+1
$$

es creciente porque su pendiente es positiva:

$$
m>0
$$

El símbolo $>$ significa **mayor que**.

Por ejemplo:

$$
5>2
$$

significa que 5 es mayor que 2.

En una gráfica, una función creciente sube cuando avanzamos de izquierda a derecha.

:::function-graph{expression="2*x+1" showWorkings=true}
:::

### 4.8. Cómo reconocer una función decreciente

Una función es **decreciente** en un intervalo cuando, al aumentar $x$, disminuye el valor de la función.

Por ejemplo:

$$
f(x)=-2x+1
$$

tiene pendiente negativa:

$$
m<0
$$

El símbolo $<$ significa **menor que**.

Por ejemplo:

$$
2<5
$$

significa que 2 es menor que 5.

En una gráfica, una función decreciente baja cuando avanzamos de izquierda a derecha.

:::function-graph{expression="-2*x+1" showWorkings=true}
:::

### 4.9. Una gráfica puede cambiar de dirección

Una función no tiene por qué ser siempre creciente o siempre decreciente.

Por ejemplo:

$$
f(x)=x^2
$$

decrece cuando $x$ se acerca a cero desde valores negativos y crece cuando $x$ se aleja de cero hacia valores positivos.

La gráfica cambia de dirección en su punto mínimo.

:::function-graph{expression="x^2" showWorkings=true}
:::

### 4.10. Funciones con dos ramas

Algunas funciones tienen gráficas formadas por dos ramas separadas.

Por ejemplo:

$$
f(x)=\frac{1}{x}
$$

Esta función no está definida cuando:

$$
x=0
$$

Por tanto, su dominio no contiene el número cero.

El símbolo $\mathbb{R}$ representa el conjunto de los números reales.

El símbolo $\setminus$ significa **sin** o **quitando los elementos de**.

Por tanto:

$$
\mathbb{R}\setminus\{0\}
$$

representa todos los números reales excepto el cero.

El dominio de la función es:

$$
D_f=\mathbb{R}\setminus\{0\}
$$

:::function-graph{expression="1/x" showWorkings=true}
:::

### 4.11. La gráfica del valor absoluto

El **valor absoluto** de un número representa su distancia respecto de cero.

El valor absoluto se representa mediante dos barras verticales:

$$
|x|
$$

Por ejemplo:

$$
|-3|=3
$$

y:

$$
|3|=3
$$

La función de valor absoluto se define como:

$$
f(x)=|x|
$$

Su gráfica tiene forma de V.

:::function-graph{expression="abs(x)" showWorkings=true}
:::

### 4.12. La forma de la gráfica depende de la expresión

La expresión que define una función determina la forma de su gráfica.

Por ejemplo:

$$
f(x)=2x+1
$$

produce una recta.

En cambio:

$$
f(x)=x^2
$$

produce una parábola.

Y:

$$
f(x)=\frac{1}{x}
$$

produce una gráfica con dos ramas.

:::function-graph{expression="x^2" showWorkings=true}
:::

## 5. Función constante

Una **función constante** siempre produce el mismo valor de salida.

Por ejemplo:

$$
f(x)=4
$$

Independientemente del valor de $x$, la salida siempre es 4.

Por ejemplo:

$$
f(0)=4
$$

$$
f(2)=4
$$

$$
f(-5)=4
$$

Su gráfica es una recta horizontal.

:::function-graph{expression="4" showWorkings=true}
:::

## 6. Función lineal

Una función lineal tiene la forma:

$$
f(x)=mx
$$

El número $m$ representa la pendiente.

Por ejemplo:

$$
f(x)=2x
$$

tiene pendiente:

$$
m=2
$$

Su gráfica es una recta que pasa por el origen.

:::function-graph{expression="2*x" showWorkings=true}
:::

Cuando $m>0$, la función es creciente.

Cuando $m<0$, la función es decreciente.

Cuando $m=0$, obtenemos una función constante:

$$
f(x)=0
$$

## 7. Función afín

Una función afín tiene la forma:

$$
f(x)=mx+b
$$

El número $m$ representa la pendiente.

El número $b$ representa el valor donde la recta corta al eje $y$.

Por ejemplo:

$$
f(x)=2x+3
$$

En esta función:

$$
m=2
$$

y:

$$
b=3
$$

Por tanto, la recta tiene pendiente 2 y corta al eje $y$ en el punto:

$$
(0,3)
$$

:::function-graph{expression="2*x+3" showWorkings=true}
:::

## 8. Crecimiento y decrecimiento

El comportamiento de una función puede analizarse observando cómo cambia su salida cuando aumenta la entrada.

Una función es creciente cuando sus valores aumentan.

Una función es decreciente cuando sus valores disminuyen.

En una función afín:

$$
f(x)=mx+b
$$

el signo de $m$ determina el comportamiento:

- Si $m>0$, la función es creciente.
- Si $m<0$, la función es decreciente.
- Si $m=0$, la función es constante.

## 9. Función cuadrática

Una función cuadrática tiene la forma:

$$
f(x)=ax^2+bx+c
$$

donde $a$, $b$ y $c$ son números reales y:

$$
a\neq0
$$

El símbolo $\neq$ significa **distinto de**.

Por ejemplo:

$$
3\neq5
$$

significa que 3 es distinto de 5.

El término $x^2$ indica que la variable $x$ está elevada al cuadrado.

Una función cuadrática tiene como gráfica una **parábola**.

Por ejemplo:

$$
f(x)=x^2
$$

:::function-graph{expression="x^2" showWorkings=true}
:::

Si $a>0$, la parábola se abre hacia arriba.

Si $a<0$, la parábola se abre hacia abajo.

Por ejemplo:

$$
f(x)=-x^2
$$

:::function-graph{expression="-x^2" showWorkings=true}
:::

## 10. Función de valor absoluto

La función de valor absoluto tiene la forma:

$$
f(x)=|x|
$$

El valor absoluto representa la distancia entre un número y cero.

Por eso siempre obtenemos un valor mayor o igual que cero:

$$
|x|\geq0
$$

El símbolo $\geq$ significa **mayor o igual que**.

Por ejemplo:

$$
5\geq0
$$

La gráfica de:

$$
f(x)=|x|
$$

tiene forma de V y su vértice está en el origen.

:::function-graph{expression="abs(x)" showWorkings=true}
:::

## 11. Función racional

Una **función racional** es una función que puede escribirse como el cociente de dos polinomios.

Por ejemplo:

$$
f(x)=\frac{1}{x}
$$

Esta función no está definida para:

$$
x=0
$$

porque no podemos dividir entre cero.

Por tanto, su dominio es:

$$
D_f=\mathbb{R}\setminus\{0\}
$$

La gráfica tiene dos ramas.

:::function-graph{expression="1/x" showWorkings=true}
:::

Otro ejemplo es:

$$
f(x)=\frac{x+1}{x-2}
$$

En este caso, el denominador no puede ser cero.

Por tanto:

$$
x-2\neq0
$$

y, en consecuencia:

$$
x\neq2
$$

El dominio es:

$$
D_f=\mathbb{R}\setminus\{2\}
$$

## 12. Dominio

El **dominio** de una función es el conjunto de todos los valores de entrada para los que la función está definida.

El dominio se suele representar mediante:

$$
D_f
$$

Por ejemplo:

$$
f(x)=\frac{1}{x}
$$

no está definida cuando $x=0$.

Por tanto:

$$
D_f=\mathbb{R}\setminus\{0\}
$$

En cambio, la función:

$$
f(x)=x^2
$$

está definida para cualquier número real.

Su dominio es:

$$
D_f=\mathbb{R}
$$

## 13. Imagen o recorrido

La **imagen**, también llamada **recorrido**, es el conjunto de valores que puede tomar la salida de una función.

Se puede representar mediante:

$$
\operatorname{Im}(f)
$$

Por ejemplo, consideremos:

$$
f(x)=x^2
$$

El cuadrado de cualquier número real nunca es negativo.

Por tanto:

$$
f(x)\geq0
$$

La imagen de la función es:

$$
\operatorname{Im}(f)=[0,\infty)
$$

Esto significa que la función puede tomar cualquier valor real mayor o igual que cero.

## 14. Ceros de una función

Un **cero de una función** es un valor de $x$ para el que la salida es cero.

Por tanto, buscamos los valores que cumplen:

$$
f(x)=0
$$

Por ejemplo:

$$
f(x)=x-3
$$

Para encontrar su cero:

$$
x-3=0
$$

Por tanto:

$$
x=3
$$

El cero de la función es $3$.

Gráficamente, los ceros de una función corresponden a los puntos donde su gráfica corta el eje $x$.

:::function-graph{expression="x-3" showWorkings=true}
:::

## 15. Intersección con el eje y

La intersección de una función con el eje $y$ se obtiene haciendo:

$$
x=0
$$

Por ejemplo:

$$
f(x)=2x+3
$$

Calculamos:

$$
f(0)=2\cdot0+3=3
$$

Por tanto, la gráfica corta el eje $y$ en:

$$
(0,3)
$$

:::function-graph{expression="2*x+3" showWorkings=true}
:::

## 16. Transformaciones de funciones

Podemos modificar una función desplazando, reflejando o cambiando el tamaño de su gráfica.

Partimos de una función:

$$
f(x)
$$

### Desplazamiento vertical

Si sumamos un número $k$:

$$
f(x)+k
$$

la gráfica se desplaza verticalmente.

Por ejemplo:

$$
f(x)=x^2
$$

y:

$$
g(x)=x^2+2
$$

La segunda gráfica está desplazada dos unidades hacia arriba.

:::function-graph{expression="x^2+2" showWorkings=true}
:::

### Desplazamiento horizontal

Una expresión de la forma:

$$
f(x-h)
$$

desplaza la gráfica horizontalmente.

El número $h$ determina el desplazamiento.

Por ejemplo:

$$
g(x)=(x-2)^2
$$

representa la parábola $x^2$ desplazada dos unidades hacia la derecha.

:::function-graph{expression="(x-2)^2" showWorkings=true}
:::

### Reflexión respecto del eje x

Si cambiamos $f(x)$ por:

$$
-f(x)
$$

obtenemos una reflexión respecto del eje $x$.

Por ejemplo:

$$
f(x)=x^2
$$

y:

$$
g(x)=-x^2
$$

:::function-graph{expression="-x^2" showWorkings=true}
:::

## 17. Funciones y tablas de valores

Una tabla de valores permite relacionar entradas con sus correspondientes salidas.

Consideremos:

$$
f(x)=x+2
$$

Podemos construir la siguiente tabla:

|  $x$ | $f(x)$ |
| ---: | -----: |
| $-2$ |    $0$ |
| $-1$ |    $1$ |
|  $0$ |    $2$ |
|  $1$ |    $3$ |
|  $2$ |    $4$ |

Cada fila representa un punto de la gráfica.

Por ejemplo:

$$
x=1
$$

produce:

$$
f(1)=3
$$

y por tanto obtenemos el punto:

$$
(1,3)
$$

## 18. Funciones y relaciones

Una **relación** establece una correspondencia entre elementos de dos conjuntos.

Una función es un tipo particular de relación en la que cada entrada tiene exactamente una salida.

Por ejemplo, la relación:

$$
\{(1,2),(2,4),(3,6)\}
$$

es una función porque cada valor de entrada aparece asociado con una única salida.

En cambio:

$$
\{(1,2),(1,3)\}
$$

no representa una función porque la misma entrada $1$ tiene dos salidas diferentes.

La idea fundamental es que una entrada no puede tener dos valores de salida distintos dentro de una misma función.

## 19. Composición de funciones

La **composición** consiste en aplicar una función después de otra.

El símbolo $\circ$ representa la composición de funciones.

La composición de $f$ con $g$ se escribe:

$$
(f\circ g)(x)
$$

y significa:

$$
(f\circ g)(x)=f(g(x))
$$

Primero aplicamos $g$ y después aplicamos $f$.

Por ejemplo, consideremos:

$$
f(x)=2x
$$

y:

$$
g(x)=x+1
$$

Primero calculamos:

$$
g(x)=x+1
$$

Después sustituimos este resultado en $f$:

$$
f(g(x))=2(x+1)
$$

Por tanto:

$$
(f\circ g)(x)=2(x+1)
$$

que podemos simplificar como:

$$
(f\circ g)(x)=2x+2
$$

El orden es importante porque, en general:

$$
(f\circ g)(x)\neq(g\circ f)(x)
$$

## 20. Función inversa

La **función inversa** deshace el efecto de una función.

La función inversa de $f$ se representa mediante:

$$
f^{-1}
$$

El símbolo $^{-1}$ indica que estamos hablando de la función inversa, no de $1/f(x)$.

Por ejemplo, consideremos:

$$
f(x)=x+3
$$

Esta función suma 3 a la entrada.

Para deshacer esta operación debemos restar 3.

Por tanto:

$$
f^{-1}(x)=x-3
$$

Si aplicamos primero $f$ y después $f^{-1}$, recuperamos el valor original.

$$
f^{-1}(f(x))=x
$$

De forma similar:

$$
f(f^{-1}(x))=x
$$

No todas las funciones tienen una función inversa que también sea función en todo su dominio.

## 21. Funciones definidas a trozos

Una **función definida a trozos** utiliza diferentes expresiones dependiendo del valor de la entrada.

Por ejemplo:

$$
f(x)=
\begin{cases}
x+1 & \text{si } x<0\\
x^2 & \text{si } x\geq0
\end{cases}
$$

El símbolo $\geq$ significa **mayor o igual que**.

La expresión anterior indica que:

- cuando $x<0$, utilizamos $x+1$;
- cuando $x\geq0$, utilizamos $x^2$.

Por ejemplo, para $x=-2$:

$$
f(-2)=-2+1=-1
$$

Para $x=2$:

$$
f(2)=2^2=4
$$

Una función definida a trozos puede tener diferentes comportamientos en diferentes partes de su dominio.

:::function-graph{expression="x+1" restriction="x<0" showWorkings=true}
:::
