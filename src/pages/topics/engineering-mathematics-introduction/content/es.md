# Introducción a las matemáticas de ingeniería

Las matemáticas de ingeniería reúnen las herramientas matemáticas necesarias para modelar, analizar y resolver problemas técnicos. No se limitan al cálculo algebraico: permiten describir sistemas físicos, estudiar cambios, analizar datos y formular modelos.

En ingeniería aparecen continuamente conceptos de álgebra, funciones, geometría, cálculo, ecuaciones diferenciales, estadística y métodos numéricos.

## 1. ¿Para qué sirven las matemáticas en ingeniería?

Las matemáticas permiten transformar un problema real en un modelo que pueda analizarse.

Un proceso habitual es:

1. Identificar las magnitudes relevantes.
2. Definir variables y parámetros.
3. Establecer relaciones matemáticas entre ellas.
4. Resolver o aproximar el modelo.
5. Interpretar el resultado en el contexto físico o técnico.

Por ejemplo, si un objeto se mueve con velocidad constante, su posición puede modelarse mediante

$$
x(t)=x_0+vt
$$

donde $x_0$ es la posición inicial, $v$ la velocidad y $t$ el tiempo.

El modelo matemático permite calcular la posición para cualquier instante dentro del intervalo considerado.

## 2. Magnitudes, unidades y dimensiones

Una magnitud física combina un valor numérico con una unidad.

Por ejemplo:

$$
v=20\ \mathrm{m/s}
$$

El número $20$ representa el valor numérico y $\mathrm{m/s}$ representa la unidad.

En ingeniería es importante distinguir entre unidades y dimensiones.

Algunas magnitudes fundamentales son:

| Magnitud | Unidad SI |
|---|---|
| Longitud | metro ($\mathrm{m}$) |
| Masa | kilogramo ($\mathrm{kg}$) |
| Tiempo | segundo ($\mathrm{s}$) |
| Temperatura | kelvin ($\mathrm{K}$) |
| Corriente eléctrica | amperio ($\mathrm{A}$) |

A partir de ellas se construyen otras unidades.

Por ejemplo, la velocidad tiene dimensiones

$$
[v]=\frac{L}{T}
$$

y la aceleración

$$
[a]=\frac{L}{T^2}
$$

## 3. Análisis dimensional

El análisis dimensional permite comprobar si una ecuación es coherente.

Por ejemplo,

$$
d=vt
$$

tiene dimensiones

$$
[d]=\frac{L}{T}T=L
$$

por lo que ambos lados representan una longitud.

En cambio, una expresión como

$$
d=v+t
$$

no es dimensionalmente válida si $v$ representa una velocidad y $t$ un tiempo, porque no se pueden sumar directamente magnitudes con dimensiones diferentes.

El análisis dimensional también ayuda a detectar errores en fórmulas y conversiones de unidades.

## 4. Álgebra aplicada

El álgebra es una de las herramientas más utilizadas en ingeniería.

Una ecuación puede utilizarse para encontrar una magnitud desconocida. Por ejemplo,

$$
V=IR
$$

permite obtener la corriente:

$$
I=\frac{V}{R}
$$

o la resistencia:

$$
R=\frac{V}{I}
$$

La capacidad para reorganizar ecuaciones es fundamental cuando un modelo contiene varias variables.

## 5. Funciones y modelos

Una función describe cómo una magnitud depende de otra.

Por ejemplo,

$$
y=f(x)=2x+3
$$

asigna un valor de $y$ a cada valor permitido de $x$.

En ingeniería pueden aparecer funciones lineales, cuadráticas, exponenciales, logarítmicas, trigonométricas y muchas otras.

Una función lineal puede utilizarse para representar una relación aproximada entre dos magnitudes:

$$
y=mx+b
$$

donde $m$ representa la pendiente y $b$ el valor inicial.

Las funciones permiten construir modelos de sistemas reales.

:::function-graph{expression="2*x+3" restriction="-5<=x<=5"}
:::

## 6. Funciones de varias variables

Muchos sistemas de ingeniería dependen de más de una variable.

Por ejemplo, la temperatura de una placa puede depender de dos coordenadas espaciales:

$$
T=T(x,y)
$$

Un modelo eléctrico podría depender de varias magnitudes:

$$
P=P(V,I)
$$

Estas funciones permiten describir sistemas más complejos que una relación entre una única variable independiente y una variable dependiente.

## 7. Vectores

Los vectores permiten representar magnitudes que tienen dirección y magnitud.

Un vector bidimensional puede escribirse como

$$
\mathbf{v}=
\begin{pmatrix}
v_x\\
v_y
\end{pmatrix}
$$

Su magnitud es

$$
\|\mathbf{v}\|
=
\sqrt{v_x^2+v_y^2}
$$

Los vectores aparecen en mecánica, electricidad, geometría, robótica, gráficos por ordenador y muchas otras áreas.

Por ejemplo, una fuerza puede descomponerse en componentes:

$$
\mathbf{F}=F_x\mathbf{i}+F_y\mathbf{j}
$$

## 8. Matrices y sistemas de ecuaciones

Los sistemas de ecuaciones aparecen cuando varias incógnitas están relacionadas.

Por ejemplo,

$$
\begin{cases}
2x+y=5\\
x-y=1
\end{cases}
$$

puede escribirse mediante matrices:

$$
A\mathbf{x}=\mathbf{b}
$$

con

$$
A=
\begin{pmatrix}
2&1\\
1&-1
\end{pmatrix},
\qquad
\mathbf{x}=
\begin{pmatrix}
x\\
y
\end{pmatrix},
\qquad
\mathbf{b}=
\begin{pmatrix}
5\\
1
\end{pmatrix}
$$

La formulación matricial es especialmente importante cuando el número de variables aumenta.

## 9. Trigonometría

La trigonometría relaciona ángulos y longitudes.

En un triángulo rectángulo:

$$
\sin(\theta)=\frac{\text{opuesto}}{\text{hipotenusa}}
$$

$$
\cos(\theta)=\frac{\text{adyacente}}{\text{hipotenusa}}
$$

$$
\tan(\theta)=\frac{\text{opuesto}}{\text{adyacente}}
$$

Estas relaciones aparecen en estructuras, mecánica, electricidad, señales, navegación y análisis geométrico.

:::right-triangle-diagram{mode="trigonometry"}
:::

## 10. Números complejos

Los números complejos amplían los números reales mediante la unidad imaginaria:

$$
i^2=-1
$$

Un número complejo tiene la forma

$$
z=a+bi
$$

donde $a$ es la parte real y $b$ la parte imaginaria.

Los números complejos son especialmente importantes en circuitos eléctricos, señales, sistemas de control y análisis de sistemas dinámicos.

## 11. Cálculo diferencial

La derivada mide cómo cambia una magnitud respecto a otra.

Si

$$
y=f(x)
$$

su derivada es

$$
f'(x)=\frac{dy}{dx}
$$

Por ejemplo,

$$
f(x)=x^2
$$

tiene derivada

$$
f'(x)=2x
$$

En ingeniería, las derivadas permiten estudiar velocidad, aceleración, tasas de cambio, optimización y comportamiento de sistemas.

## 12. Cálculo integral

La integral permite acumular cantidades y calcular áreas, volúmenes y otras magnitudes acumuladas.

Por ejemplo,

$$
\int_a^b f(x)\,dx
$$

representa el área con signo entre la gráfica de $f(x)$ y el eje $x$ en el intervalo $[a,b]$.

Las integrales también aparecen en energía, trabajo, masa, carga eléctrica, probabilidad y muchas otras aplicaciones.

## 13. Ecuaciones diferenciales

Una ecuación diferencial relaciona una función desconocida con sus derivadas.

Por ejemplo,

$$
\frac{dy}{dt}=ky
$$

describe un proceso cuya tasa de cambio es proporcional a su propio valor.

Su solución general es

$$
y(t)=Ce^{kt}
$$

Este tipo de modelos aparece en crecimiento y decaimiento, circuitos, vibraciones, transferencia de calor y sistemas dinámicos.

## 14. Estadística y probabilidad

La ingeniería utiliza datos para analizar sistemas y tomar decisiones basadas en mediciones.

Algunas herramientas fundamentales son:

- media;
- mediana;
- varianza;
- desviación estándar;
- distribuciones de probabilidad;
- correlación;
- regresión.

Por ejemplo, la media de $n$ observaciones es

$$
\bar{x}
=
\frac{1}{n}
\sum_{i=1}^{n}x_i
$$

La varianza mide la dispersión de los datos respecto a su media.

## 15. Métodos numéricos

Muchos problemas de ingeniería no tienen una solución analítica sencilla.

En estos casos se utilizan métodos numéricos para obtener aproximaciones.

Algunos ejemplos son:

- método de Newton;
- interpolación;
- integración numérica;
- resolución numérica de ecuaciones diferenciales;
- métodos matriciales;
- optimización numérica.

Por ejemplo, el método de Newton puede utilizarse para aproximar una raíz de

$$
f(x)=0
$$

mediante

$$
x_{n+1}
=
x_n-\frac{f(x_n)}{f'(x_n)}
$$

## 16. Modelización de un problema de ingeniería

Un problema real puede transformarse progresivamente en un modelo matemático.

Por ejemplo, para estudiar el movimiento de un vehículo:

**Problema físico**

Se quiere conocer la posición del vehículo a lo largo del tiempo.

**Variables**

$$
x(t),\qquad v(t),\qquad a(t)
$$

**Relaciones**

$$
v(t)=\frac{dx}{dt}
$$

$$
a(t)=\frac{dv}{dt}
$$

Si la aceleración es constante,

$$
a(t)=a
$$

se puede obtener

$$
v(t)=v_0+at
$$

y posteriormente

$$
x(t)=x_0+v_0t+\frac12at^2
$$

El problema físico se ha convertido en un conjunto de relaciones matemáticas que pueden analizarse y resolverse.

## 17. Herramientas matemáticas fundamentales

A lo largo de los estudios de ingeniería, los siguientes bloques aparecen de forma recurrente:

| Área | Aplicaciones |
|---|---|
| Álgebra | Ecuaciones y modelos |
| Geometría | Espacio, estructuras y medidas |
| Trigonometría | Ángulos y componentes |
| Álgebra lineal | Vectores, matrices y sistemas |
| Cálculo diferencial | Tasas de cambio y optimización |
| Cálculo integral | Acumulación y áreas |
| Ecuaciones diferenciales | Sistemas dinámicos |
| Probabilidad | Incertidumbre y modelos aleatorios |
| Estadística | Análisis de datos |
| Métodos numéricos | Aproximación computacional |

## 18. Estrategia para resolver problemas

Una estrategia general es:

1. **Identificar el problema.**
2. **Definir las variables.**
3. **Anotar las unidades.**
4. **Determinar qué relaciones matemáticas son relevantes.**
5. **Construir el modelo.**
6. **Resolver simbólica o numéricamente.**
7. **Comprobar dimensiones y resultados.**
8. **Interpretar el resultado físicamente.**

Es importante no confundir una solución matemática con una solución físicamente válida. Un resultado debe ser compatible con las restricciones del problema.

## Resumen

Las matemáticas de ingeniería proporcionan un lenguaje para describir y analizar sistemas técnicos.

Los conceptos fundamentales incluyen:

- álgebra y ecuaciones;
- funciones y modelización;
- unidades y análisis dimensional;
- vectores y matrices;
- trigonometría;
- números complejos;
- derivadas e integrales;
- ecuaciones diferenciales;
- probabilidad y estadística;
- métodos numéricos.

El objetivo no es únicamente calcular, sino **construir modelos matemáticos que representen correctamente problemas reales y permitan analizar sus resultados**.
