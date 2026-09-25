const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-F7qGvVTE.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-CC0Uwr-v.js","assets/index-BUO5hoW9.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-CC0Uwr-v.js";import{t as i}from"./TopicPage-CxUbQKDL.js";var a=`# Funciones

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

:::function-graph{expression="2*x"}
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
f(2)=2\\cdot2+1=5
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
f(3)=2\\cdot3+1=7
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

:::function-graph{expression="2*x+1"}
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

:::function-graph{expression="x^2"}
:::

### 4.4. Por qué aparece una recta

Consideremos de nuevo:

$$
f(x)=2x+1
$$

Cuando $x$ aumenta una unidad, $f(x)$ aumenta siempre dos unidades.

El cambio de $x$ se puede representar mediante \${\\Delta x}$.

El símbolo $\\Delta$ indica un **cambio** o una **variación**.

Por tanto, $\\Delta x$ representa el cambio de $x$.

De forma similar, $\\Delta y$ representa el cambio de $y$.

La relación entre ambos cambios se expresa mediante:

$$
\\frac{\\Delta y}{\\Delta x}=m
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

:::function-graph{expression="x^2"}
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

:::function-graph{expression="2*x+1"}
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

:::function-graph{expression="-2*x+1"}
:::

### 4.9. Una gráfica puede cambiar de dirección

Una función no tiene por qué ser siempre creciente o siempre decreciente.

Por ejemplo:

$$
f(x)=x^2
$$

decrece cuando $x$ se acerca a cero desde valores negativos y crece cuando $x$ se aleja de cero hacia valores positivos.

La gráfica cambia de dirección en su punto mínimo.

:::function-graph{expression="x^2"}
:::

### 4.10. Funciones con dos ramas

Algunas funciones tienen gráficas formadas por dos ramas separadas.

Por ejemplo:

$$
f(x)=\\frac{1}{x}
$$

Esta función no está definida cuando:

$$
x=0
$$

Por tanto, su dominio no contiene el número cero.

El símbolo $\\mathbb{R}$ representa el conjunto de los números reales.

El símbolo $\\setminus$ significa **sin** o **quitando los elementos de**.

Por tanto:

$$
\\mathbb{R}\\setminus\\{0\\}
$$

representa todos los números reales excepto el cero.

El dominio de la función es:

$$
D_f=\\mathbb{R}\\setminus\\{0\\}
$$

:::function-graph{expression="1/x"}
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

:::function-graph{expression="abs(x)"}
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
f(x)=\\frac{1}{x}
$$

produce una gráfica con dos ramas.

:::function-graph{expression="x^2"}
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

:::function-graph{expression="4"}
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

:::function-graph{expression="2*x"}
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

:::function-graph{expression="2*x+3"}
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
a\\neq0
$$

El símbolo $\\neq$ significa **distinto de**.

Por ejemplo:

$$
3\\neq5
$$

significa que 3 es distinto de 5.

El término $x^2$ indica que la variable $x$ está elevada al cuadrado.

Una función cuadrática tiene como gráfica una **parábola**.

Por ejemplo:

$$
f(x)=x^2
$$

:::function-graph{expression="x^2"}
:::

Si $a>0$, la parábola se abre hacia arriba.

Si $a<0$, la parábola se abre hacia abajo.

Por ejemplo:

$$
f(x)=-x^2
$$

:::function-graph{expression="-x^2"}
:::

## 10. Función de valor absoluto

La función de valor absoluto tiene la forma:

$$
f(x)=|x|
$$

El valor absoluto representa la distancia entre un número y cero.

Por eso siempre obtenemos un valor mayor o igual que cero:

$$
|x|\\geq0
$$

El símbolo $\\geq$ significa **mayor o igual que**.

Por ejemplo:

$$
5\\geq0
$$

La gráfica de:

$$
f(x)=|x|
$$

tiene forma de V y su vértice está en el origen.

:::function-graph{expression="abs(x)"}
:::

## 11. Función racional

Una **función racional** es una función que puede escribirse como el cociente de dos polinomios.

Por ejemplo:

$$
f(x)=\\frac{1}{x}
$$

Esta función no está definida para:

$$
x=0
$$

porque no podemos dividir entre cero.

Por tanto, su dominio es:

$$
D_f=\\mathbb{R}\\setminus\\{0\\}
$$

La gráfica tiene dos ramas.

:::function-graph{expression="1/x"}
:::

Otro ejemplo es:

$$
f(x)=\\frac{x+1}{x-2}
$$

En este caso, el denominador no puede ser cero.

Por tanto:

$$
x-2\\neq0
$$

y, en consecuencia:

$$
x\\neq2
$$

El dominio es:

$$
D_f=\\mathbb{R}\\setminus\\{2\\}
$$

## 12. Dominio

El **dominio** de una función es el conjunto de todos los valores de entrada para los que la función está definida.

El dominio se suele representar mediante:

$$
D_f
$$

Por ejemplo:

$$
f(x)=\\frac{1}{x}
$$

no está definida cuando $x=0$.

Por tanto:

$$
D_f=\\mathbb{R}\\setminus\\{0\\}
$$

En cambio, la función:

$$
f(x)=x^2
$$

está definida para cualquier número real.

Su dominio es:

$$
D_f=\\mathbb{R}
$$

## 13. Imagen o recorrido

La **imagen**, también llamada **recorrido**, es el conjunto de valores que puede tomar la salida de una función.

Se puede representar mediante:

$$
\\operatorname{Im}(f)
$$

Por ejemplo, consideremos:

$$
f(x)=x^2
$$

El cuadrado de cualquier número real nunca es negativo.

Por tanto:

$$
f(x)\\geq0
$$

La imagen de la función es:

$$
\\operatorname{Im}(f)=[0,\\infty)
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

:::function-graph{expression="x-3"}
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
f(0)=2\\cdot0+3=3
$$

Por tanto, la gráfica corta el eje $y$ en:

$$
(0,3)
$$

:::function-graph{expression="2*x+3"}
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

:::function-graph{expression="x^2+2"}
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

:::function-graph{expression="(x-2)^2"}
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

:::function-graph{expression="-x^2"}
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
\\{(1,2),(2,4),(3,6)\\}
$$

es una función porque cada valor de entrada aparece asociado con una única salida.

En cambio:

$$
\\{(1,2),(1,3)\\}
$$

no representa una función porque la misma entrada $1$ tiene dos salidas diferentes.

La idea fundamental es que una entrada no puede tener dos valores de salida distintos dentro de una misma función.

## 19. Composición de funciones

La **composición** consiste en aplicar una función después de otra.

El símbolo $\\circ$ representa la composición de funciones.

La composición de $f$ con $g$ se escribe:

$$
(f\\circ g)(x)
$$

y significa:

$$
(f\\circ g)(x)=f(g(x))
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
(f\\circ g)(x)=2(x+1)
$$

que podemos simplificar como:

$$
(f\\circ g)(x)=2x+2
$$

El orden es importante porque, en general:

$$
(f\\circ g)(x)\\neq(g\\circ f)(x)
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
\\begin{cases}
x+1 & \\text{si } x<0\\\\
x^2 & \\text{si } x\\geq0
\\end{cases}
$$

El símbolo $\\geq$ significa **mayor o igual que**.

La expresión anterior indica que:

- cuando $x<0$, utilizamos $x+1$;
- cuando $x\\geq0$, utilizamos $x^2$.

Por ejemplo, para $x=-2$:

$$
f(-2)=-2+1=-1
$$

Para $x=2$:

$$
f(2)=2^2=4
$$

Una función definida a trozos puede tener diferentes comportamientos en diferentes partes de su dominio.

:::function-graph{expression="x+1" restriction="x<0"}
:::
`,o=`# Funcions

Una **funció** és una relació que assigna a cada valor d'entrada exactament un valor de sortida.

La variable d'entrada se sol representar mitjançant $x$ i la variable de sortida mitjançant $y$.

Quan volem indicar que $y$ depèn de $x$, podem escriure:

$$
y=f(x)
$$

L'expressió $f(x)$ es llegeix **«efa de x»** i representa el valor que pren la funció quan l'entrada és $x$.

Per exemple:

$$
f(x)=2x+1
$$

Això significa que la funció pren un nombre $x$, el multiplica per 2 i després hi suma 1.

:::function-graph{expression="2x+1"}
:::

## 1. Elements d'una funció

Una funció té principalment:

- un **domini**, que és el conjunt de valors que podem utilitzar com a entrada;
- un **codomini**, que és el conjunt de valors on es troben les possibles sortides;
- una **regla de correspondència**, que indica com s'obté la sortida a partir de l'entrada.

Per representar una funció podem utilitzar una expressió algebraica, una taula, un diagrama de correspondència o una gràfica.

Per exemple:

$$
f(x)=x+2
$$

Si $x=3$, substituïm $x$ per 3:

$$
f(3)=3+2=5
$$

Per tant, la funció associa el valor 3 amb el valor 5.

## 2. Variable independent i variable dependent

La variable $x$ se sol utilitzar com a **variable independent**.

La variable $y$, o equivalentment $f(x)$, se sol utilitzar com a **variable dependent**, perquè el seu valor depèn de $x$.

Per exemple:

$$
y=3x-2
$$

Aquí, $x$ és l'entrada i $y$ és la sortida.

Si $x=2$:

$$
y=3\\cdot2-2=4
$$

Per tant:

$$
f(2)=4
$$

:::function-graph{expression="3x-2"}
:::

## 3. Representació gràfica d'una funció

Una funció es pot representar visualment mitjançant una **gràfica**.

La gràfica ens permet observar com canvia el valor de sortida quan canvia el valor d'entrada.

### 3.1. El pla cartesià

Per representar una funció utilitzem un **pla cartesià**.

Està format per dos eixos:

- l'**eix $x$**, que representa els valors d'entrada;
- l'**eix $y$**, que representa els valors de sortida.

El punt on es creuen els dos eixos s'anomena **origen** i correspon al valor 0 en tots dos eixos.

Un punt del pla s'escriu mitjançant un parell de nombres:

$$
(x,y)
$$

El primer nombre indica la posició horitzontal i el segon indica la posició vertical.

Per exemple, el punt:

$$
(2,4)
$$

significa que ens desplacem 2 unitats horitzontalment i 4 unitats verticalment.

### 3.2. Com obtenim els punts d'una funció

Recordem que una funció es pot escriure com:

$$
y=f(x)
$$

Això significa que el valor de $y$ s'obté a partir del valor de $x$.

Per representar una funció podem escollir diferents valors de $x$, calcular el valor corresponent de $f(x)$ i obtenir així diversos punts.

Per exemple, considerem:

$$
f(x)=x+1
$$

Escollim el valor:

$$
x=0
$$

Substituïm $x$ per 0:

$$
f(0)=0+1=1
$$

Per tant, obtenim el punt:

$$
(0,1)
$$

Escollim ara:

$$
x=1
$$

Aleshores:

$$
f(1)=1+1=2
$$

i obtenim:

$$
(1,2)
$$

Si continuem calculant valors, obtenim més punts:

$$
(-2,-1)
$$

$$
(-1,0)
$$

$$
(0,1)
$$

$$
(1,2)
$$

$$
(2,3)
$$

Tots aquests punts pertanyen a la gràfica de la funció.

:::function-graph{expression="x+1"}
:::

### 3.3. Dels punts a la corba

Una gràfica no s'obté simplement col·locant punts.

Després de calcular prou punts, podem observar com es comporten i com canvia la funció entre ells.

Si la funció és contínua en un interval, els punts es poden unir formant una línia o una corba contínua.

Per exemple, per a:

$$
f(x)=x+1
$$

els punts estan alineats.

Això passa perquè la funció augmenta sempre al mateix ritme.

La gràfica resultant és una **recta**.

### 3.4. Per què apareix una recta

Considerem la funció:

$$
f(x)=2x+1
$$

El nombre 2 indica quant augmenta $y$ quan $x$ augmenta una unitat.

Per exemple:

$$
f(0)=1
$$

$$
f(1)=3
$$

$$
f(2)=5
$$

Observem que cada vegada que $x$ augmenta 1, $y$ augmenta 2.

El canvi de $x$ es pot representar mitjançant:

$$
\\Delta x
$$

El símbol $\\Delta$ s'utilitza per representar un **canvi** o una **variació**.

De manera similar, $\\Delta y$ representa el canvi de $y$.

En una funció afí, la relació entre aquests canvis és constant:

$$
\\frac{\\Delta y}{\\Delta x}=m
$$

El nombre $m$ s'anomena **pendent**.

Per exemple, per a:

$$
f(x)=2x+1
$$

tenim:

$$
m=2
$$

Això significa que per cada unitat que avancem horitzontalment, pugem 2 unitats verticalment.

Per això tots els punts mantenen la mateixa direcció i la gràfica és una recta.

:::function-graph{expression="2x+1"}
:::

### 3.5. Quan canvia la pendent

Ara considerem:

$$
f(x)=x^2
$$

Calculem alguns valors:

$$
f(-2)=4
$$

$$
f(-1)=1
$$

$$
f(0)=0
$$

$$
f(1)=1
$$

$$
f(2)=4
$$

Els punts són:

$$
(-2,4),\\quad(-1,1),\\quad(0,0),\\quad(1,1),\\quad(2,4)
$$

Observem que la funció no augmenta sempre al mateix ritme.

Entre $x=-2$ i $x=-1$, el valor de $y$ disminueix 3 unitats.

Entre $x=-1$ i $x=0$, disminueix 1 unitat.

Després de l'origen comença a augmentar:

$$
0\\rightarrow1\\rightarrow4
$$

Per tant, la pendent canvia contínuament.

Quan la pendent canvia, els punts deixen d'estar alineats i apareix una **curvatura**.

Per això la gràfica de:

$$
f(x)=x^2
$$

és una **paràbola**.

:::function-graph{expression="x^2"}
:::

### 3.6. Què significa la curvatura

La **curvatura** d'una gràfica està relacionada amb com canvia la seva pendent.

Si la pendent es manté constant, obtenim una recta.

Si la pendent canvia, la gràfica es pot corbar.

Per exemple, en:

$$
f(x)=x^2
$$

la pendent és cada vegada més gran a mesura que avancem cap a valors positius de $x$.

A la part esquerra de la paràbola, la funció decreix.

En el punt:

$$
(0,0)
$$

assoleix el seu valor mínim.

Després comença a créixer.

:::function-graph{expression="x^2"}
:::

La forma de la gràfica, per tant, no és arbitrària.

**La forma d'una gràfica reflecteix com canvia la funció.**

### 3.7. Com reconèixer una funció creixent

Una funció és **creixent** quan, en augmentar $x$, també augmenta el valor de $f(x)$.

Per exemple:

$$
f(x)=2x+1
$$

Si passem de:

$$
x=1
$$

a:

$$
x=2
$$

tenim:

$$
f(1)=3
$$

i:

$$
f(2)=5
$$

El valor de la funció augmenta.

Per això la gràfica puja d'esquerra a dreta.

:::function-graph{expression="2x+1"}
:::

### 3.8. Com reconèixer una funció decreixent

Una funció és **decreixent** quan, en augmentar $x$, disminueix el valor de $f(x)$.

Per exemple:

$$
f(x)=-2x+1
$$

Tenim:

$$
f(0)=1
$$

i:

$$
f(1)=-1
$$

En augmentar $x$, el valor de la funció disminueix.

Per això la gràfica baixa d'esquerra a dreta.

:::function-graph{expression="-2x+1"}
:::

### 3.9. Una gràfica pot canviar de direcció

No totes les funcions són sempre creixents o sempre decreixents.

Considerem:

$$
f(x)=x^2
$$

Per a valors negatius de $x$, la funció decreix quan ens acostem a 0.

Després d'arribar al mínim, comença a créixer.

Podem observar aquest comportament a la gràfica:

:::function-graph{expression="x^2"}
:::

Aquest canvi de comportament permet identificar punts importants de la gràfica, com els **màxims** i els **mínims**.

### 3.10. Funcions amb dues branques

Considerem ara:

$$
f(x)=\\frac{1}{x}
$$

En aquesta funció, el denominador no pot ser 0.

Per tant:

$$
x\\neq0
$$

El símbol $\\neq$ significa **«diferent de»**.

La gràfica no pot passar per $x=0$.

Quan $x$ s'aproxima a 0 per valors positius, $f(x)$ augmenta molt.

Per exemple:

$$
f(1)=1
$$

$$
f(0.1)=10
$$

$$
f(0.01)=100
$$

Per l'altre costat, quan $x$ s'aproxima a 0 mitjançant valors negatius, obtenim valors negatius cada vegada més grans en valor absolut.

Per això la gràfica té dues branques separades.

:::function-graph{expression="1/x"}
:::

La recta:

$$
x=0
$$

actua com una **asímptota vertical** de la funció.

Una asímptota és una recta a la qual la gràfica s'aproxima sense arribar a coincidir-hi en la regió considerada.

### 3.11. La gràfica del valor absolut

El valor absolut representa la distància d'un nombre respecte de zero.

S'escriu mitjançant barres verticals:

$$
|x|
$$

Per exemple:

$$
|3|=3
$$

i:

$$
|-3|=3
$$

La funció:

$$
f(x)=|x|
$$

es pot interpretar com una funció que converteix els valors negatius en els seus valors positius corresponents i manté els valors positius.

Per això:

$$
f(-2)=2
$$

$$
f(-1)=1
$$

$$
f(0)=0
$$

$$
f(1)=1
$$

$$
f(2)=2
$$

Els punts formen dues rectes que es troben a l'origen.

Per això la gràfica té forma de V.

:::function-graph{expression="abs(x)"}
:::

### 3.12. La forma de la gràfica depèn de l'expressió

Podem observar una diferència fonamental entre diverses funcions:

| Funció      | Comportament                 | Forma aproximada |
| ----------- | ---------------------------- | ---------------- |
| $f(x)=2x+1$ | Pendent constant             | Recta            |
| $f(x)=x^2$  | Pendent variable             | Paràbola         |
| $f(x)=      | x                            | $                | Dos comportaments lineals | V   |
| $f(x)=1/x$  | Domini separat en dues parts | Dues branques    |

La gràfica és, per tant, una representació visual del comportament de la funció.

No hem de memoritzar únicament la forma de cada gràfica.

És més important entendre **per què apareix aquesta forma** a partir de l'expressió de la funció.

## 4. Funció constant

Una **funció constant** sempre produeix el mateix valor de sortida, independentment del valor d'entrada.

La seva forma general és:

$$
f(x)=c
$$

on $c$ és un nombre constant.

Per exemple:

$$
f(x)=3
$$

Per a qualsevol valor de $x$, el resultat és 3.

:::function-graph{expression="3"}
:::

La seva gràfica és una recta horitzontal.

## 5. Funció lineal

Una funció lineal es pot escriure en la forma:

$$
f(x)=mx
$$

El nombre $m$ s'anomena **pendent**.

La pendent indica quant canvia $y$ quan $x$ augmenta una unitat.

Per exemple:

$$
f(x)=2x
$$

Si $x$ augmenta en 1, el valor de $f(x)$ augmenta en 2.

:::function-graph{expression="2x"}
:::

Si la pendent és positiva, la funció augmenta.

Per exemple:

$$
f(x)=2x
$$

Si la pendent és negativa, la funció disminueix.

Per exemple:

$$
f(x)=-2x
$$

:::function-graph{expression="-2x"}
:::

## 6. Funció afí

Una funció afí té la forma:

$$
f(x)=mx+b
$$

El nombre $m$ és la **pendent** i $b$ és el valor on la recta talla l'eix $y$.

Per exemple:

$$
f(x)=2x+1
$$

En aquesta funció, la pendent és $2$ i el terme independent és $1$.

:::function-graph{expression="2x+1"}
:::

Si $b=0$, obtenim una funció lineal:

$$
f(x)=mx
$$

Per tant, tota funció lineal és un cas particular de funció afí.

## 7. Creixement i decreixement

Una funció és **creixent** quan els seus valors augmenten en augmentar la variable $x$.

Per exemple:

$$
f(x)=2x+1
$$

:::function-graph{expression="2x+1"}
:::

Una funció és **decreixent** quan els seus valors disminueixen en augmentar $x$.

Per exemple:

$$
f(x)=-2x+1
$$

:::function-graph{expression="-2x+1"}
:::

En les funcions afins, el signe de la pendent permet determinar si la funció és creixent o decreixent.

El símbol $>$ significa **«més gran que»** i el símbol $<$ significa **«més petit que»**.

Per tant:

- si $m>0$, la funció és creixent;
- si $m<0$, la funció és decreixent;
- si $m=0$, la funció és constant.

## 8. Funció quadràtica

Una **funció quadràtica** té la forma:

$$
f(x)=ax^2+bx+c
$$

on $a$, $b$ i $c$ són nombres i $a\\neq0$.

El símbol $\\neq$ significa **«diferent de»**.

El símbol $x^2$ significa que $x$ està elevat a l'exponent 2:

$$
x^2=x\\cdot x
$$

Per exemple:

$$
f(x)=x^2
$$

:::function-graph{expression="x^2"}
:::

La seva gràfica té forma de paràbola.

Si $a>0$, la paràbola s'obre cap amunt.

Per exemple:

$$
f(x)=x^2
$$

Si $a<0$, la paràbola s'obre cap avall.

Per exemple:

$$
f(x)=-x^2
$$

:::function-graph{expression="-x^2"}
:::

## 9. Funció de valor absolut

El **valor absolut** d'un nombre representa la seva distància respecte de zero.

S'escriu utilitzant barres verticals:

$$
|x|
$$

Per exemple:

$$
|3|=3
$$

i:

$$
|-3|=3
$$

La funció de valor absolut es defineix com:

$$
f(x)=|x|
$$

:::function-graph{expression="abs(x)"}
:::

La seva gràfica té forma de V.

## 10. Funció racional

Una **funció racional** és una funció que es pot expressar com el quocient de dos polinomis.

Per exemple:

$$
f(x)=\\frac{1}{x}
$$

El denominador no pot ser igual a zero. Per tant:

$$
x\\neq0
$$

La gràfica d'aquesta funció té dues branques.

:::function-graph{expression="1/x"}
:::

El valor $x=0$ no pertany al domini d'aquesta funció.

## 11. Domini d'una funció

El **domini** d'una funció és el conjunt de valors d'entrada per als quals la funció està definida.

Per exemple:

$$
f(x)=\\frac{1}{x}
$$

No podem utilitzar $x=0$, perquè no existeix la divisió per zero.

Per tant, el domini és:

$$
D_f=\\mathbb{R}\\setminus\\{0\\}
$$

El símbol $\\mathbb{R}$ representa el conjunt dels **nombres reals**.

El símbol $\\setminus$ representa la **diferència de conjunts**: prenem els elements del primer conjunt que no pertanyen al segon.

Per tant, $\\mathbb{R}\\setminus\\{0\\}$ significa tots els nombres reals excepte el nombre 0.

## 12. Imatge o recorregut

La **imatge**, també anomenada **recorregut**, és el conjunt de valors que pot prendre la sortida d'una funció.

Per exemple:

$$
f(x)=x^2
$$

El quadrat de qualsevol nombre real mai és negatiu.

Per tant:

$$
f(x)\\geq0
$$

El símbol $\\geq$ significa **«més gran o igual que»**.

La imatge d'aquesta funció és:

$$
[0,\\infty)
$$

El símbol $\\infty$ representa l'infinit.

La notació d'interval indica que 0 pertany a la imatge i que els valors continuen indefinidament cap als nombres positius.

## 13. Zeros d'una funció

Un **zero d'una funció** és un valor de $x$ per al qual la funció pren el valor 0.

Per tant, busquem els valors que compleixen:

$$
f(x)=0
$$

Per exemple:

$$
f(x)=x-2
$$

Busquem:

$$
x-2=0
$$

i obtenim:

$$
x=2
$$

Per tant, $x=2$ és un zero de la funció.

Gràficament, correspon al punt on la gràfica talla l'eix $x$.

:::function-graph{expression="x-2"}
:::

## 14. Intersecció amb l'eix $y$

Per trobar la intersecció d'una funció amb l'eix $y$, calculem el valor de la funció quan:

$$
x=0
$$

Per exemple:

$$
f(x)=2x+3
$$

Aleshores:

$$
f(0)=2\\cdot0+3=3
$$

La gràfica talla l'eix $y$ en el punt:

$$
(0,3)
$$

:::function-graph{expression="2x+3"}
:::

## 15. Transformacions de funcions

A partir d'una funció podem obtenir altres funcions modificant-ne l'expressió.

Per exemple, partim de:

$$
f(x)=x^2
$$

Si sumem 2:

$$
g(x)=x^2+2
$$

la gràfica es desplaça 2 unitats cap amunt.

:::function-graph{expression="x^2+2"}
:::

Si restem 2:

$$
g(x)=x^2-2
$$

la gràfica es desplaça 2 unitats cap avall.

:::function-graph{expression="x^2-2"}
:::

Si canviem $x$ per $x-2$:

$$
g(x)=(x-2)^2
$$

la gràfica es desplaça 2 unitats cap a la dreta.

:::function-graph{expression="(x-2)^2"}
:::

## 16. Funcions i taules de valors

Una funció també es pot representar mitjançant una **taula de valors**.

Per exemple, considerem:

$$
f(x)=x+1
$$

Podem calcular alguns valors:

$$
f(0)=1
$$

$$
f(1)=2
$$

$$
f(2)=3
$$

$$
f(3)=4
$$

Cada valor de $x$ té associat exactament un valor de $f(x)$.

La taula de valors permet obtenir punts de la gràfica de la funció.

## 17. Funcions i relacions

No tota relació entre dues variables és una funció.

Perquè una relació sigui una funció, cada valor d'entrada ha de tenir **un únic valor de sortida**.

Per exemple:

$$
y=x+2
$$

defineix una funció perquè per a cada valor de $x$ obtenim exactament un valor de $y$.

En canvi, una relació com:

$$
x=y^2
$$

no es pot expressar com una funció $y=f(x)$ sobre tots els nombres reals, perquè alguns valors de $x$ corresponen a dos valors diferents de $y$.

Per exemple, si $x=4$:

$$
y=2
$$

o:

$$
y=-2
$$

Per tant, un mateix valor d'entrada pot produir dues sortides diferents.

## 18. Composició de funcions

Podem aplicar una funció després d'una altra.

Si tenim dues funcions $f$ i $g$, la composició s'escriu:

$$
(f\\circ g)(x)
$$

El símbol $\\circ$ indica que primer apliquem $g$ i després $f$.

Per exemple:

$$
g(x)=x+1
$$

i:

$$
f(x)=2x
$$

Primer apliquem $g$:

$$
g(x)=x+1
$$

Després apliquem $f$:

$$
f(g(x))=2(x+1)
$$

Per tant:

$$
(f\\circ g)(x)=2x+2
$$

:::function-graph{expression="2x+2"}
:::

## 19. Funció inversa

Una **funció inversa** desfà l'efecte d'una funció.

La funció inversa de $f$ s'escriu:

$$
f^{-1}
$$

L'exponent $-1$ en aquesta notació no significa elevar els valors de la funció a $-1$. Indica que estem parlant de la funció inversa.

Per exemple:

$$
f(x)=x+2
$$

Per obtenir la funció inversa, intercanviem $x$ i $y$:

$$
y=x+2
$$

$$
x=y+2
$$

Aïllant $y$:

$$
y=x-2
$$

Per tant:

$$
f^{-1}(x)=x-2
$$

:::function-graph{expression="x+2"}
:::

:::function-graph{expression="x-2"}
:::

La funció i la seva inversa reflecteixen les seves gràfiques respecte de la recta:

$$
y=x
$$

## 20. Funcions definides a trossos

Una funció pot utilitzar diferents expressions depenent del valor de $x$.

Per exemple:

$$
f(x)=
\\begin{cases}
x+1 & \\text{si } x<0\\\\
x^2 & \\text{si } x\\geq0
\\end{cases}
$$

El símbol $<$ significa **«menor que»**.

El símbol $\\geq$ significa **«més gran o igual que»**.

Per tant, per a valors negatius de $x$ utilitzem $x+1$, mentre que per a valors més grans o iguals que 0 utilitzem $x^2$.

:::function-graph{expression="x+1" restriction="x<0"}
:::

:::function-graph{expression="x^2" restriction="x>=0"}
:::

Les funcions definides a trossos són especialment útils per representar situacions en què una mateixa relació canvia segons l'interval considerat.
`,s=`# Functions

A **function** is a relation that assigns exactly one output value to each input value.

The input variable is usually represented by $x$, and the output variable by $y$.

When we want to indicate that $y$ depends on $x$, we can write:

$$
y=f(x)
$$

The expression $f(x)$ is read **“f of x”** and represents the value of the function when the input is $x$.

For example:

$$
f(x)=2x+1
$$

This means that the function takes a number $x$, multiplies it by 2, and then adds 1.

:::function-graph{expression="2x+1"}
:::

## 1. Elements of a function

A function mainly has:

- a **domain**, which is the set of values that can be used as inputs;
- a **codomain**, which is the target set containing the possible output values;
- a **rule of correspondence**, which describes how the output is obtained from the input.

A function can be represented using an algebraic expression, a table, a mapping diagram, or a graph.

For example:

$$
f(x)=x+2
$$

If $x=3$, we substitute $x$ with 3:

$$
f(3)=3+2=5
$$

Therefore, the function maps the value 3 to the value 5.

## 2. Independent and dependent variables

The variable $x$ is usually used as the **independent variable**.

The variable $y$, or equivalently $f(x)$, is usually used as the **dependent variable**, because its value depends on $x$.

For example:

$$
y=3x-2
$$

Here, $x$ is the input and $y$ is the output.

If $x=2$:

$$
y=3\\cdot2-2=4
$$

Therefore:

$$
f(2)=4
$$

:::function-graph{expression="3x-2"}
:::

## 3. Graphical representation of a function

A function can be represented visually using a **graph**.

The graph allows us to observe how the output value changes when the input value changes.

### 3.1. The Cartesian plane

To represent a function, we use a **Cartesian plane**.

It consists of two axes:

- the **$x$-axis**, which represents input values;
- the **$y$-axis**, which represents output values.

The point where the two axes intersect is called the **origin** and corresponds to the value 0 on both axes.

A point in the plane is written using a pair of numbers:

$$
(x,y)
$$

The first number indicates the horizontal position and the second indicates the vertical position.

For example, the point:

$$
(2,4)
$$

means that we move 2 units horizontally and 4 units vertically.

### 3.2. How we obtain the points of a function

Recall that a function can be written as:

$$
y=f(x)
$$

This means that the value of $y$ is obtained from the value of $x$.

To represent a function, we can choose different values of $x$, calculate the corresponding value of $f(x)$, and obtain several points.

For example, consider:

$$
f(x)=x+1
$$

We choose the value:

$$
x=0
$$

We substitute $x$ with 0:

$$
f(0)=0+1=1
$$

Therefore, we obtain the point:

$$
(0,1)
$$

Now choose:

$$
x=1
$$

Then:

$$
f(1)=1+1=2
$$

and we obtain:

$$
(1,2)
$$

If we continue calculating values, we obtain more points:

$$
(-2,-1)
$$

$$
(-1,0)
$$

$$
(0,1)
$$

$$
(1,2)
$$

$$
(2,3)
$$

All of these points belong to the graph of the function.

:::function-graph{expression="x+1"}
:::

### 3.3. From points to the curve

A graph is not obtained simply by placing points.

After calculating enough points, we can observe how they behave and how the function changes between them.

If the function is continuous on an interval, the points can be connected to form a continuous line or curve.

For example, for:

$$
f(x)=x+1
$$

the points are aligned.

This happens because the function always increases at the same rate.

The resulting graph is a **straight line**.

### 3.4. Why a straight line appears

Consider the function:

$$
f(x)=2x+1
$$

The number 2 indicates how much $y$ increases when $x$ increases by one unit.

For example:

$$
f(0)=1
$$

$$
f(1)=3
$$

$$
f(2)=5
$$

We observe that every time $x$ increases by 1, $y$ increases by 2.

The change in $x$ can be represented by:

$$
\\Delta x
$$

The symbol $\\Delta$ is used to represent a **change** or **variation**.

Similarly, $\\Delta y$ represents the change in $y$.

For an affine function, the relationship between these changes is constant:

$$
\\frac{\\Delta y}{\\Delta x}=m
$$

The number $m$ is called the **slope**.

For example, for:

$$
f(x)=2x+1
$$

we have:

$$
m=2
$$

This means that for every unit we move horizontally, we move 2 units vertically.

That is why all the points maintain the same direction and the graph is a straight line.

:::function-graph{expression="2x+1"}
:::

### 3.5. When the slope changes

Now consider:

$$
f(x)=x^2
$$

We calculate some values:

$$
f(-2)=4
$$

$$
f(-1)=1
$$

$$
f(0)=0
$$

$$
f(1)=1
$$

$$
f(2)=4
$$

The points are:

$$
(-2,4),\\quad(-1,1),\\quad(0,0),\\quad(1,1),\\quad(2,4)
$$

We observe that the function does not always increase at the same rate.

Between $x=-2$ and $x=-1$, the value of $y$ decreases by 3 units.

Between $x=-1$ and $x=0$, it decreases by 1 unit.

After the origin, it begins to increase:

$$
0\\rightarrow1\\rightarrow4
$$

Therefore, the slope changes continuously.

When the slope changes, the points are no longer aligned and a **curve** appears.

That is why the graph of:

$$
f(x)=x^2
$$

is a **parabola**.

:::function-graph{expression="x^2"}
:::

### 3.6. What curvature means

The **curvature** of a graph is related to how its slope changes.

If the slope remains constant, we obtain a straight line.

If the slope changes, the graph can curve.

For example, in:

$$
f(x)=x^2
$$

the slope becomes increasingly larger as we move toward positive values of $x$.

On the left side of the parabola, the function decreases.

At the point:

$$
(0,0)
$$

it reaches its minimum value.

It then begins to increase.

:::function-graph{expression="x^2"}
:::

The shape of the graph is therefore not arbitrary.

**The shape of a graph reflects how the function changes.**

### 3.7. How to recognize an increasing function

A function is **increasing** when, as $x$ increases, the value of $f(x)$ also increases.

For example:

$$
f(x)=2x+1
$$

If we move from:

$$
x=1
$$

to:

$$
x=2
$$

we have:

$$
f(1)=3
$$

and:

$$
f(2)=5
$$

The value of the function increases.

That is why the graph rises from left to right.

:::function-graph{expression="2x+1"}
:::

### 3.8. How to recognize a decreasing function

A function is **decreasing** when, as $x$ increases, the value of $f(x)$ decreases.

For example:

$$
f(x)=-2x+1
$$

We have:

$$
f(0)=1
$$

and:

$$
f(1)=-1
$$

As $x$ increases, the value of the function decreases.

That is why the graph falls from left to right.

:::function-graph{expression="-2x+1"}
:::

### 3.9. A graph can change direction

Not all functions are always increasing or always decreasing.

Consider:

$$
f(x)=x^2
$$

For negative values of $x$, the function decreases as we approach 0.

After reaching its minimum, it begins to increase.

We can observe this behavior in the graph:

:::function-graph{expression="x^2"}
:::

This change in behavior allows us to identify important points on a graph, such as **maximums** and **minimums**.

### 3.10. Functions with two branches

Now consider:

$$
f(x)=\\frac{1}{x}
$$

In this function, the denominator cannot be 0.

Therefore:

$$
x\\neq0
$$

The symbol $\\neq$ means **“not equal to”**.

The graph cannot pass through $x=0$.

When $x$ approaches 0 through positive values, $f(x)$ becomes very large.

For example:

$$
f(1)=1
$$

$$
f(0.1)=10
$$

$$
f(0.01)=100
$$

On the other side, when $x$ approaches 0 through negative values, we obtain negative values whose absolute value becomes increasingly large.

That is why the graph has two separate branches.

:::function-graph{expression="1/x"}
:::

The line:

$$
x=0
$$

acts as a **vertical asymptote** of the function.

An asymptote is a line that the graph approaches without coinciding with it in the region under consideration.

### 3.11. The graph of the absolute value

The absolute value represents the distance of a number from zero.

It is written using vertical bars:

$$
|x|
$$

For example:

$$
|3|=3
$$

and:

$$
|-3|=3
$$

The function:

$$
f(x)=|x|
$$

can be interpreted as a function that converts negative values into their corresponding positive values while keeping positive values unchanged.

Therefore:

$$
f(-2)=2
$$

$$
f(-1)=1
$$

$$
f(0)=0
$$

$$
f(1)=1
$$

$$
f(2)=2
$$

The points form two straight lines that meet at the origin.

That is why the graph has a V shape.

:::function-graph{expression="abs(x)"}
:::

### 3.12. The shape of the graph depends on the expression

We can observe a fundamental difference between several functions:

| Function    | Behavior                        | Approximate shape |
| ----------- | ------------------------------- | ----------------- |
| $f(x)=2x+1$ | Constant slope                  | Straight line     |
| $f(x)=x^2$  | Variable slope                  | Parabola          |
| $f(x)=      | x                               | $                 | Two linear behaviors | V shape |
| $f(x)=1/x$  | Domain separated into two parts | Two branches      |

The graph is therefore a visual representation of the behavior of the function.

We should not simply memorize the shape of each graph.

It is more important to understand **why that shape appears** from the expression of the function.

## 4. Constant function

A **constant function** always produces the same output value, regardless of the input value.

Its general form is:

$$
f(x)=c
$$

where $c$ is a constant number.

For example:

$$
f(x)=3
$$

For any value of $x$, the result is 3.

:::function-graph{expression="3"}
:::

Its graph is a horizontal line.

## 5. Linear function

A linear function can be written in the form:

$$
f(x)=mx
$$

The number $m$ is called the **slope**.

The slope indicates how much $y$ changes when $x$ increases by one unit.

For example:

$$
f(x)=2x
$$

If $x$ increases by 1, the value of $f(x)$ increases by 2.

:::function-graph{expression="2x"}
:::

If the slope is positive, the function increases.

For example:

$$
f(x)=2x
$$

If the slope is negative, the function decreases.

For example:

$$
f(x)=-2x
$$

:::function-graph{expression="-2x"}
:::

## 6. Affine function

An affine function has the form:

$$
f(x)=mx+b
$$

The number $m$ is the **slope**, and $b$ is the value where the line crosses the $y$-axis.

For example:

$$
f(x)=2x+1
$$

In this function, the slope is $2$ and the constant term is $1$.

:::function-graph{expression="2x+1"}
:::

If $b=0$, we obtain a linear function:

$$
f(x)=mx
$$

Therefore, every linear function is a particular case of an affine function.

## 7. Increasing and decreasing behavior

A function is **increasing** when its values increase as the variable $x$ increases.

For example:

$$
f(x)=2x+1
$$

:::function-graph{expression="2x+1"}
:::

A function is **decreasing** when its values decrease as $x$ increases.

For example:

$$
f(x)=-2x+1
$$

:::function-graph{expression="-2x+1"}
:::

For affine functions, the sign of the slope determines whether the function is increasing or decreasing.

The symbol $>$ means **“greater than”**, and the symbol $<$ means **“less than”**.

Therefore:

- if $m>0$, the function is increasing;
- if $m<0$, the function is decreasing;
- if $m=0$, the function is constant.

## 8. Quadratic function

A **quadratic function** has the form:

$$
f(x)=ax^2+bx+c
$$

where $a$, $b$, and $c$ are numbers and $a\\neq0$.

The symbol $\\neq$ means **“not equal to”**.

The symbol $x^2$ means that $x$ is raised to the exponent 2:

$$
x^2=x\\cdot x
$$

For example:

$$
f(x)=x^2
$$

:::function-graph{expression="x^2"}
:::

Its graph has the shape of a parabola.

If $a>0$, the parabola opens upward.

For example:

$$
f(x)=x^2
$$

If $a<0$, the parabola opens downward.

For example:

$$
f(x)=-x^2
$$

:::function-graph{expression="-x^2"}
:::

## 9. Absolute value function

The **absolute value** of a number represents its distance from zero.

It is written using vertical bars:

$$
|x|
$$

For example:

$$
|3|=3
$$

and:

$$
|-3|=3
$$

The absolute value function is defined as:

$$
f(x)=|x|
$$

:::function-graph{expression="abs(x)"}
:::

Its graph has a V shape.

## 10. Rational function

A **rational function** is a function that can be expressed as the quotient of two polynomials.

For example:

$$
f(x)=\\frac{1}{x}
$$

The denominator cannot be equal to zero. Therefore:

$$
x\\neq0
$$

The graph of this function has two branches.

:::function-graph{expression="1/x"}
:::

The value $x=0$ does not belong to the domain of this function.

## 11. Domain of a function

The **domain** of a function is the set of input values for which the function is defined.

For example:

$$
f(x)=\\frac{1}{x}
$$

We cannot use $x=0$, because division by zero is not defined.

Therefore, the domain is:

$$
D_f=\\mathbb{R}\\setminus\\{0\\}
$$

The symbol $\\mathbb{R}$ represents the set of **real numbers**.

The symbol $\\setminus$ represents the **set difference**: we take the elements of the first set that do not belong to the second set.

Therefore, $\\mathbb{R}\\setminus\\{0\\}$ means all real numbers except 0.

## 12. Range

The **range**, also called the **image**, is the set of values that the output of a function can take.

For example:

$$
f(x)=x^2
$$

The square of any real number is never negative.

Therefore:

$$
f(x)\\geq0
$$

The symbol $\\geq$ means **“greater than or equal to”**.

The range of this function is:

$$
[0,\\infty)
$$

The symbol $\\infty$ represents infinity.

The interval notation indicates that 0 belongs to the range and that the values continue indefinitely toward positive numbers.

## 13. Zeros of a function

A **zero of a function** is a value of $x$ for which the function has value 0.

Therefore, we look for values that satisfy:

$$
f(x)=0
$$

For example:

$$
f(x)=x-2
$$

We look for:

$$
x-2=0
$$

and obtain:

$$
x=2
$$

Therefore, $x=2$ is a zero of the function.

Graphically, it corresponds to the point where the graph crosses the $x$-axis.

:::function-graph{expression="x-2"}
:::

## 14. Intersection with the $y$-axis

To find the intersection of a function with the $y$-axis, we calculate the value of the function when:

$$
x=0
$$

For example:

$$
f(x)=2x+3
$$

Then:

$$
f(0)=2\\cdot0+3=3
$$

The graph crosses the $y$-axis at the point:

$$
(0,3)
$$

:::function-graph{expression="2x+3"}
:::

## 15. Transformations of functions

We can obtain new functions from an existing function by modifying its expression.

For example, start with:

$$
f(x)=x^2
$$

If we add 2:

$$
g(x)=x^2+2
$$

the graph moves 2 units upward.

:::function-graph{expression="x^2+2"}
:::

If we subtract 2:

$$
g(x)=x^2-2
$$

the graph moves 2 units downward.

:::function-graph{expression="x^2-2"}
:::

If we replace $x$ with $x-2$:

$$
g(x)=(x-2)^2
$$

the graph moves 2 units to the right.

:::function-graph{expression="(x-2)^2"}
:::

## 16. Functions and value tables

A function can also be represented using a **value table**.

For example, consider:

$$
f(x)=x+1
$$

We can calculate some values:

$$
f(0)=1
$$

$$
f(1)=2
$$

$$
f(2)=3
$$

$$
f(3)=4
$$

Each value of $x$ is associated with exactly one value of $f(x)$.

A value table allows us to obtain points of the graph of the function.

## 17. Functions and relations

Not every relation between two variables is a function.

For a relation to be a function, each input value must have **exactly one output value**.

For example:

$$
y=x+2
$$

defines a function because for every value of $x$, we obtain exactly one value of $y$.

On the other hand, a relation such as:

$$
x=y^2
$$

cannot be expressed as a function $y=f(x)$ over all real numbers because some values of $x$ correspond to two different values of $y$.

For example, if $x=4$:

$$
y=2
$$

or:

$$
y=-2
$$

Therefore, the same input value can produce two different outputs.

## 18. Composition of functions

We can apply one function after another.

If we have two functions $f$ and $g$, the composition is written:

$$
(f\\circ g)(x)
$$

The symbol $\\circ$ indicates that we first apply $g$ and then $f$.

For example:

$$
g(x)=x+1
$$

and:

$$
f(x)=2x
$$

First, we apply $g$:

$$
g(x)=x+1
$$

Then we apply $f$:

$$
f(g(x))=2(x+1)
$$

Therefore:

$$
(f\\circ g)(x)=2x+2
$$

:::function-graph{expression="2x+2"}
:::

## 19. Inverse function

An **inverse function** reverses the effect of a function.

The inverse function of $f$ is written:

$$
f^{-1}
$$

The exponent $-1$ in this notation does not mean that the function values are raised to the power $-1$. It indicates that we are referring to the inverse function.

For example:

$$
f(x)=x+2
$$

To obtain the inverse function, we interchange $x$ and $y$:

$$
y=x+2
$$

$$
x=y+2
$$

Solving for $y$:

$$
y=x-2
$$

Therefore:

$$
f^{-1}(x)=x-2
$$

:::function-graph{expression="x+2"}
:::

:::function-graph{expression="x-2"}
:::

The function and its inverse have graphs that are reflections of each other across the line:

$$
y=x
$$

## 20. Piecewise-defined functions

A function can use different expressions depending on the value of $x$.

For example:

$$
f(x)=
\\begin{cases}
x+1 & \\text{if } x<0\\\\
x^2 & \\text{if } x\\geq0
\\end{cases}
$$

The symbol $<$ means **“less than”**.

The symbol $\\geq$ means **“greater than or equal to”**.

Therefore, for negative values of $x$, we use $x+1$, while for values greater than or equal to 0, we use $x^2$.

:::function-graph{expression="x+1" restriction="x<0"}
:::

:::function-graph{expression="x^2" restriction="x>=0"}
:::

Piecewise-defined functions are especially useful for representing situations in which the same relationship changes depending on the interval being considered.
`;function c(){let{locale:c}=t();return e(i,{id:`functions`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-F7qGvVTE.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};