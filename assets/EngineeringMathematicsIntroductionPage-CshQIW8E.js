const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-ChTwH7hg.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-d08MTCHk.js","assets/index-BUO5hoW9.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-d08MTCHk.js";import{t as i}from"./TopicPage-BLzDn4N1.js";var a=`# Introducción a las matemáticas de ingeniería

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
v=20\\ \\mathrm{m/s}
$$

El número $20$ representa el valor numérico y $\\mathrm{m/s}$ representa la unidad.

En ingeniería es importante distinguir entre unidades y dimensiones.

Algunas magnitudes fundamentales son:

| Magnitud | Unidad SI |
|---|---|
| Longitud | metro ($\\mathrm{m}$) |
| Masa | kilogramo ($\\mathrm{kg}$) |
| Tiempo | segundo ($\\mathrm{s}$) |
| Temperatura | kelvin ($\\mathrm{K}$) |
| Corriente eléctrica | amperio ($\\mathrm{A}$) |

A partir de ellas se construyen otras unidades.

Por ejemplo, la velocidad tiene dimensiones

$$
[v]=\\frac{L}{T}
$$

y la aceleración

$$
[a]=\\frac{L}{T^2}
$$

## 3. Análisis dimensional

El análisis dimensional permite comprobar si una ecuación es coherente.

Por ejemplo,

$$
d=vt
$$

tiene dimensiones

$$
[d]=\\frac{L}{T}T=L
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
I=\\frac{V}{R}
$$

o la resistencia:

$$
R=\\frac{V}{I}
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
\\mathbf{v}=
\\begin{pmatrix}
v_x\\\\
v_y
\\end{pmatrix}
$$

Su magnitud es

$$
\\|\\mathbf{v}\\|
=
\\sqrt{v_x^2+v_y^2}
$$

Los vectores aparecen en mecánica, electricidad, geometría, robótica, gráficos por ordenador y muchas otras áreas.

Por ejemplo, una fuerza puede descomponerse en componentes:

$$
\\mathbf{F}=F_x\\mathbf{i}+F_y\\mathbf{j}
$$

## 8. Matrices y sistemas de ecuaciones

Los sistemas de ecuaciones aparecen cuando varias incógnitas están relacionadas.

Por ejemplo,

$$
\\begin{cases}
2x+y=5\\\\
x-y=1
\\end{cases}
$$

puede escribirse mediante matrices:

$$
A\\mathbf{x}=\\mathbf{b}
$$

con

$$
A=
\\begin{pmatrix}
2&1\\\\
1&-1
\\end{pmatrix},
\\qquad
\\mathbf{x}=
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix},
\\qquad
\\mathbf{b}=
\\begin{pmatrix}
5\\\\
1
\\end{pmatrix}
$$

La formulación matricial es especialmente importante cuando el número de variables aumenta.

## 9. Trigonometría

La trigonometría relaciona ángulos y longitudes.

En un triángulo rectángulo:

$$
\\sin(\\theta)=\\frac{\\text{opuesto}}{\\text{hipotenusa}}
$$

$$
\\cos(\\theta)=\\frac{\\text{adyacente}}{\\text{hipotenusa}}
$$

$$
\\tan(\\theta)=\\frac{\\text{opuesto}}{\\text{adyacente}}
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
f'(x)=\\frac{dy}{dx}
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
\\int_a^b f(x)\\,dx
$$

representa el área con signo entre la gráfica de $f(x)$ y el eje $x$ en el intervalo $[a,b]$.

Las integrales también aparecen en energía, trabajo, masa, carga eléctrica, probabilidad y muchas otras aplicaciones.

## 13. Ecuaciones diferenciales

Una ecuación diferencial relaciona una función desconocida con sus derivadas.

Por ejemplo,

$$
\\frac{dy}{dt}=ky
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
\\bar{x}
=
\\frac{1}{n}
\\sum_{i=1}^{n}x_i
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
x_n-\\frac{f(x_n)}{f'(x_n)}
$$

## 16. Modelización de un problema de ingeniería

Un problema real puede transformarse progresivamente en un modelo matemático.

Por ejemplo, para estudiar el movimiento de un vehículo:

**Problema físico**

Se quiere conocer la posición del vehículo a lo largo del tiempo.

**Variables**

$$
x(t),\\qquad v(t),\\qquad a(t)
$$

**Relaciones**

$$
v(t)=\\frac{dx}{dt}
$$

$$
a(t)=\\frac{dv}{dt}
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
x(t)=x_0+v_0t+\\frac12at^2
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
`,o=`# Introducció a les matemàtiques d'enginyeria

Les matemàtiques d'enginyeria reuneixen les eines matemàtiques necessàries per modelitzar, analitzar i resoldre problemes tècnics. No es limiten al càlcul algebraic: permeten descriure sistemes físics, estudiar canvis, analitzar dades i formular models.

En enginyeria apareixen contínuament conceptes d'àlgebra, funcions, geometria, càlcul, equacions diferencials, estadística i mètodes numèrics.

## 1. Per a què serveixen les matemàtiques en enginyeria?

Les matemàtiques permeten transformar un problema real en un model que es pugui analitzar.

Un procés habitual és:

1. Identificar les magnituds rellevants.
2. Definir variables i paràmetres.
3. Establir relacions matemàtiques entre aquestes magnituds.
4. Resoldre o aproximar el model.
5. Interpretar el resultat en el context físic o tècnic.

Per exemple, si un objecte es mou amb velocitat constant, la seva posició es pot modelitzar mitjançant

$$
x(t)=x_0+vt
$$

on $x_0$ és la posició inicial, $v$ la velocitat i $t$ el temps.

El model matemàtic permet calcular la posició per a qualsevol instant dins de l'interval considerat.

## 2. Magnituds, unitats i dimensions

Una magnitud física combina un valor numèric amb una unitat.

Per exemple:

$$
v=20\\ \\mathrm{m/s}
$$

El número $20$ representa el valor numèric i $\\mathrm{m/s}$ representa la unitat.

En enginyeria és important distingir entre unitats i dimensions.

Algunes magnituds fonamentals són:

| Magnitud         | Unitat SI                 |
| ---------------- | ------------------------- |
| Longitud         | metre ($\\mathrm{m}$)      |
| Massa            | quilogram ($\\mathrm{kg}$) |
| Temps            | segon ($\\mathrm{s}$)      |
| Temperatura      | kelvin ($\\mathrm{K}$)     |
| Corrent elèctric | ampere ($\\mathrm{A}$)     |

A partir d'aquestes magnituds se'n construeixen d'altres.

Per exemple, la velocitat té dimensions

$$
[v]=\\frac{L}{T}
$$

i l'acceleració

$$
[a]=\\frac{L}{T^2}
$$

## 3. Anàlisi dimensional

L'anàlisi dimensional permet comprovar si una equació és coherent.

Per exemple,

$$
d=vt
$$

té dimensions

$$
[d]=\\frac{L}{T}T=L
$$

per tant, tots dos costats representen una longitud.

En canvi, una expressió com

$$
d=v+t
$$

no és dimensionalment vàlida si $v$ representa una velocitat i $t$ un temps, perquè no es poden sumar directament magnituds amb dimensions diferents.

L'anàlisi dimensional també ajuda a detectar errors en fórmules i conversions d'unitats.

## 4. Àlgebra aplicada

L'àlgebra és una de les eines més utilitzades en enginyeria.

Una equació es pot utilitzar per trobar una magnitud desconeguda. Per exemple,

$$
V=IR
$$

permet obtenir el corrent:

$$
I=\\frac{V}{R}
$$

o la resistència:

$$
R=\\frac{V}{I}
$$

La capacitat de reorganitzar equacions és fonamental quan un model conté diverses variables.

## 5. Funcions i models

Una funció descriu com una magnitud depèn d'una altra.

Per exemple,

$$
y=f(x)=2x+3
$$

assigna un valor de $y$ a cada valor permès de $x$.

En enginyeria poden aparèixer funcions lineals, quadràtiques, exponencials, logarítmiques, trigonomètriques i moltes altres.

Una funció lineal pot utilitzar-se per representar una relació aproximada entre dues magnituds:

$$
y=mx+b
$$

on $m$ representa el pendent i $b$ el valor inicial.

Les funcions permeten construir models de sistemes reals.

:::function-graph{expression="2*x+3" restriction="-5<=x<=5"}
:::

## 6. Funcions de diverses variables

Molts sistemes d'enginyeria depenen de més d'una variable.

Per exemple, la temperatura d'una placa pot dependre de dues coordenades espacials:

$$
T=T(x,y)
$$

Un model elèctric podria dependre de diverses magnituds:

$$
P=P(V,I)
$$

Aquestes funcions permeten descriure sistemes més complexos que una relació entre una única variable independent i una variable dependent.

## 7. Vectors

Els vectors permeten representar magnituds que tenen direcció i mòdul.

Un vector bidimensional es pot escriure com

$$
\\mathbf{v}=
\\begin{pmatrix}
v_x\\\\
v_y
\\end{pmatrix}
$$

El seu mòdul és

$$
\\|\\mathbf{v}\\|
=
\\sqrt{v_x^2+v_y^2}
$$

Els vectors apareixen en mecànica, electricitat, geometria, robòtica, gràfics per ordinador i moltes altres àrees.

Per exemple, una força es pot descompondre en components:

$$
\\mathbf{F}=F_x\\mathbf{i}+F_y\\mathbf{j}
$$

## 8. Matrius i sistemes d'equacions

Els sistemes d'equacions apareixen quan diverses incògnites estan relacionades.

Per exemple,

$$
\\begin{cases}
2x+y=5\\\\
x-y=1
\\end{cases}
$$

es pot escriure mitjançant matrius:

$$
A\\mathbf{x}=\\mathbf{b}
$$

amb

$$
A=
\\begin{pmatrix}
2&1\\\\
1&-1
\\end{pmatrix},
\\qquad
\\mathbf{x}=
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix},
\\qquad
\\mathbf{b}=
\\begin{pmatrix}
5\\\\
1
\\end{pmatrix}
$$

La formulació matricial és especialment important quan augmenta el nombre de variables.

## 9. Trigonometria

La trigonometria relaciona angles i longituds.

En un triangle rectangle:

$$
\\sin(\\theta)=\\frac{\\text{oposat}}{\\text{hipotenusa}}
$$

$$
\\cos(\\theta)=\\frac{\\text{adjacent}}{\\text{hipotenusa}}
$$

$$
\\tan(\\theta)=\\frac{\\text{oposat}}{\\text{adjacent}}
$$

Aquestes relacions apareixen en estructures, mecànica, electricitat, senyals, navegació i anàlisi geomètrica.

:::right-triangle-diagram{mode="trigonometry"}
:::

## 10. Nombres complexos

Els nombres complexos amplien els nombres reals mitjançant la unitat imaginària:

$$
i^2=-1
$$

Un nombre complex té la forma

$$
z=a+bi
$$

on $a$ és la part real i $b$ la part imaginària.

Els nombres complexos són especialment importants en circuits elèctrics, senyals, sistemes de control i anàlisi de sistemes dinàmics.

## 11. Càlcul diferencial

La derivada mesura com canvia una magnitud respecte d'una altra.

Si

$$
y=f(x)
$$

la seva derivada és

$$
f'(x)=\\frac{dy}{dx}
$$

Per exemple,

$$
f(x)=x^2
$$

té com a derivada

$$
f'(x)=2x
$$

En enginyeria, les derivades permeten estudiar velocitat, acceleració, taxes de canvi, optimització i comportament de sistemes.

## 12. Càlcul integral

La integral permet acumular quantitats i calcular àrees, volums i altres magnituds acumulades.

Per exemple,

$$
\\int_a^b f(x)\\,dx
$$

representa l'àrea amb signe entre la gràfica de $f(x)$ i l'eix $x$ en l'interval $[a,b]$.

Les integrals també apareixen en energia, treball, massa, càrrega elèctrica, probabilitat i moltes altres aplicacions.

## 13. Equacions diferencials

Una equació diferencial relaciona una funció desconeguda amb les seves derivades.

Per exemple,

$$
\\frac{dy}{dt}=ky
$$

descriu un procés en què la taxa de canvi és proporcional al seu propi valor.

La seva solució general és

$$
y(t)=Ce^{kt}
$$

Aquest tipus de models apareix en creixement i decreixement, circuits, vibracions, transferència de calor i sistemes dinàmics.

## 14. Estadística i probabilitat

L'enginyeria utilitza dades per analitzar sistemes i prendre decisions basades en mesures.

Algunes eines fonamentals són:

- mitjana;
- mediana;
- variància;
- desviació estàndard;
- distribucions de probabilitat;
- correlació;
- regressió.

Per exemple, la mitjana de $n$ observacions és

$$
\\bar{x}
=
\\frac{1}{n}
\\sum_{i=1}^{n}x_i
$$

La variància mesura la dispersió de les dades respecte de la seva mitjana.

## 15. Mètodes numèrics

Molts problemes d'enginyeria no tenen una solució analítica senzilla.

En aquests casos s'utilitzen mètodes numèrics per obtenir aproximacions.

Alguns exemples són:

- mètode de Newton;
- interpolació;
- integració numèrica;
- resolució numèrica d'equacions diferencials;
- mètodes matricials;
- optimització numèrica.

Per exemple, el mètode de Newton es pot utilitzar per aproximar una arrel de

$$
f(x)=0
$$

mitjançant

$$
x_{n+1}
=
x_n-\\frac{f(x_n)}{f'(x_n)}
$$

## 16. Modelització d'un problema d'enginyeria

Un problema real es pot transformar progressivament en un model matemàtic.

Per exemple, per estudiar el moviment d'un vehicle:

**Problema físic**

Es vol conèixer la posició del vehicle al llarg del temps.

**Variables**

$$
x(t),\\qquad v(t),\\qquad a(t)
$$

**Relacions**

$$
v(t)=\\frac{dx}{dt}
$$

$$
a(t)=\\frac{dv}{dt}
$$

Si l'acceleració és constant,

$$
a(t)=a
$$

es pot obtenir

$$
v(t)=v_0+at
$$

i posteriorment

$$
x(t)=x_0+v_0t+\\frac12at^2
$$

El problema físic s'ha convertit en un conjunt de relacions matemàtiques que es poden analitzar i resoldre.

## 17. Eines matemàtiques fonamentals

Al llarg dels estudis d'enginyeria, els blocs següents apareixen de manera recurrent:

| Àrea                   | Aplicacions                   |
| ---------------------- | ----------------------------- |
| Àlgebra                | Equacions i models            |
| Geometria              | Espai, estructures i mesures  |
| Trigonometria          | Angles i components           |
| Àlgebra lineal         | Vectors, matrius i sistemes   |
| Càlcul diferencial     | Taxes de canvi i optimització |
| Càlcul integral        | Acumulació i àrees            |
| Equacions diferencials | Sistemes dinàmics             |
| Probabilitat           | Incertesa i models aleatoris  |
| Estadística            | Anàlisi de dades              |
| Mètodes numèrics       | Aproximació computacional     |

## 18. Estratègia per resoldre problemes

Una estratègia general és:

1. **Identificar el problema.**
2. **Definir les variables.**
3. **Anotar les unitats.**
4. **Determinar quines relacions matemàtiques són rellevants.**
5. **Construir el model.**
6. **Resoldre'l simbòlicament o numèricament.**
7. **Comprovar les dimensions i els resultats.**
8. **Interpretar el resultat físicament.**

És important no confondre una solució matemàtica amb una solució físicament vàlida. Un resultat ha de ser compatible amb les restriccions del problema.

## Resum

Les matemàtiques d'enginyeria proporcionen un llenguatge per descriure i analitzar sistemes tècnics.

Els conceptes fonamentals inclouen:

- àlgebra i equacions;
- funcions i modelització;
- unitats i anàlisi dimensional;
- vectors i matrius;
- trigonometria;
- nombres complexos;
- derivades i integrals;
- equacions diferencials;
- probabilitat i estadística;
- mètodes numèrics.

L'objectiu no és únicament calcular, sinó **construir models matemàtics que representin correctament problemes reals i permetin analitzar-ne els resultats**.
`,s=`# Introduction to Engineering Mathematics

Engineering mathematics brings together the mathematical tools needed to model, analyze, and solve technical problems. It is not limited to algebraic calculation: it provides ways to describe physical systems, study change, analyze data, and formulate models.

Engineering applications continuously use concepts from algebra, functions, geometry, calculus, differential equations, statistics, and numerical methods.

## 1. What is mathematics used for in engineering?

Mathematics allows a real-world problem to be transformed into a model that can be analyzed.

A typical process is:

1. Identify the relevant quantities.
2. Define variables and parameters.
3. Establish mathematical relationships between them.
4. Solve or approximate the model.
5. Interpret the result in its physical or technical context.

For example, if an object moves at constant velocity, its position can be modeled by

$$
x(t)=x_0+vt
$$

where $x_0$ is the initial position, $v$ is the velocity, and $t$ is time.

The mathematical model allows the position to be calculated at any time within the considered interval.

## 2. Quantities, units, and dimensions

A physical quantity combines a numerical value with a unit.

For example:

$$
v=20\\ \\mathrm{m/s}
$$

The number $20$ represents the numerical value and $\\mathrm{m/s}$ represents the unit.

In engineering, it is important to distinguish between units and dimensions.

Some fundamental quantities are:

| Quantity         | SI unit                  |
| ---------------- | ------------------------ |
| Length           | metre ($\\mathrm{m}$)     |
| Mass             | kilogram ($\\mathrm{kg}$) |
| Time             | second ($\\mathrm{s}$)    |
| Temperature      | kelvin ($\\mathrm{K}$)    |
| Electric current | ampere ($\\mathrm{A}$)    |

Other units are derived from these fundamental quantities.

For example, velocity has dimensions

$$
[v]=\\frac{L}{T}
$$

and acceleration has dimensions

$$
[a]=\\frac{L}{T^2}
$$

## 3. Dimensional analysis

Dimensional analysis can be used to check whether an equation is consistent.

For example,

$$
d=vt
$$

has dimensions

$$
[d]=\\frac{L}{T}T=L
$$

so both sides represent a length.

In contrast, an expression such as

$$
d=v+t
$$

is not dimensionally valid if $v$ represents a velocity and $t$ represents a time, because quantities with different dimensions cannot be directly added.

Dimensional analysis is also useful for detecting errors in formulas and unit conversions.

## 4. Applied algebra

Algebra is one of the most frequently used mathematical tools in engineering.

An equation can be rearranged to find an unknown quantity. For example,

$$
V=IR
$$

can be used to obtain the current:

$$
I=\\frac{V}{R}
$$

or the resistance:

$$
R=\\frac{V}{I}
$$

The ability to rearrange equations is fundamental when a model contains several variables.

## 5. Functions and models

A function describes how one quantity depends on another.

For example,

$$
y=f(x)=2x+3
$$

assigns a value of $y$ to each allowed value of $x$.

Engineering applications may involve linear, quadratic, exponential, logarithmic, trigonometric, and many other types of functions.

A linear function can be used to represent an approximate relationship between two quantities:

$$
y=mx+b
$$

where $m$ represents the slope and $b$ represents the initial value.

Functions provide a mathematical way to build models of real systems.

:::function-graph{expression="2*x+3" restriction="-5<=x<=5"}
:::

## 6. Functions of several variables

Many engineering systems depend on more than one variable.

For example, the temperature of a plate may depend on two spatial coordinates:

$$
T=T(x,y)
$$

An electrical model might depend on several quantities:

$$
P=P(V,I)
$$

Such functions allow more complex systems to be described than a simple relationship between one independent variable and one dependent variable.

## 7. Vectors

Vectors represent quantities that have both magnitude and direction.

A two-dimensional vector can be written as

$$
\\mathbf{v}=
\\begin{pmatrix}
v_x\\\\
v_y
\\end{pmatrix}
$$

Its magnitude is

$$
\\|\\mathbf{v}\\|
=
\\sqrt{v_x^2+v_y^2}
$$

Vectors appear in mechanics, electricity, geometry, robotics, computer graphics, and many other fields.

For example, a force can be decomposed into components:

$$
\\mathbf{F}=F_x\\mathbf{i}+F_y\\mathbf{j}
$$

## 8. Matrices and systems of equations

Systems of equations appear whenever several unknowns are related.

For example,

$$
\\begin{cases}
2x+y=5\\\\
x-y=1
\\end{cases}
$$

can be written using matrices:

$$
A\\mathbf{x}=\\mathbf{b}
$$

with

$$
A=
\\begin{pmatrix}
2&1\\\\
1&-1
\\end{pmatrix},
\\qquad
\\mathbf{x}=
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix},
\\qquad
\\mathbf{b}=
\\begin{pmatrix}
5\\\\
1
\\end{pmatrix}
$$

The matrix formulation becomes particularly important as the number of variables increases.

## 9. Trigonometry

Trigonometry relates angles and lengths.

In a right triangle:

$$
\\sin(\\theta)=\\frac{\\text{opposite}}{\\text{hypotenuse}}
$$

$$
\\cos(\\theta)=\\frac{\\text{adjacent}}{\\text{hypotenuse}}
$$

$$
\\tan(\\theta)=\\frac{\\text{opposite}}{\\text{adjacent}}
$$

These relationships appear in structures, mechanics, electrical engineering, signals, navigation, and geometric analysis.

:::right-triangle-diagram{mode="trigonometry"}
:::

## 10. Complex numbers

Complex numbers extend the real numbers by introducing the imaginary unit:

$$
i^2=-1
$$

A complex number has the form

$$
z=a+bi
$$

where $a$ is the real part and $b$ is the imaginary part.

Complex numbers are particularly important in electrical circuits, signal processing, control systems, and dynamic system analysis.

## 11. Differential calculus

A derivative measures how one quantity changes with respect to another.

If

$$
y=f(x)
$$

its derivative is

$$
f'(x)=\\frac{dy}{dx}
$$

For example,

$$
f(x)=x^2
$$

has derivative

$$
f'(x)=2x
$$

In engineering, derivatives are used to study velocity, acceleration, rates of change, optimization, and system behavior.

## 12. Integral calculus

An integral can be used to accumulate quantities and calculate areas, volumes, and other accumulated quantities.

For example,

$$
\\int_a^b f(x)\\,dx
$$

represents the signed area between the graph of $f(x)$ and the $x$-axis over the interval $[a,b]$.

Integrals also appear in energy, work, mass, electric charge, probability, and many other applications.

## 13. Differential equations

A differential equation relates an unknown function to its derivatives.

For example,

$$
\\frac{dy}{dt}=ky
$$

describes a process in which the rate of change is proportional to the current value.

Its general solution is

$$
y(t)=Ce^{kt}
$$

This type of model appears in growth and decay, circuits, vibrations, heat transfer, and dynamic systems.

## 14. Statistics and probability

Engineering uses data to analyze systems and make decisions based on measurements.

Some fundamental tools include:

- mean;
- median;
- variance;
- standard deviation;
- probability distributions;
- correlation;
- regression.

For example, the mean of $n$ observations is

$$
\\bar{x}
=
\\frac{1}{n}
\\sum_{i=1}^{n}x_i
$$

Variance measures the spread of data around its mean.

## 15. Numerical methods

Many engineering problems do not have a simple analytical solution.

In such cases, numerical methods are used to obtain approximations.

Examples include:

- Newton's method;
- interpolation;
- numerical integration;
- numerical solutions of differential equations;
- matrix methods;
- numerical optimization.

For example, Newton's method can be used to approximate a root of

$$
f(x)=0
$$

using

$$
x_{n+1}
=
x_n-\\frac{f(x_n)}{f'(x_n)}
$$

## 16. Modeling an engineering problem

A real-world problem can be progressively transformed into a mathematical model.

For example, consider the motion of a vehicle.

**Physical problem**

Determine the position of the vehicle over time.

**Variables**

$$
x(t),\\qquad v(t),\\qquad a(t)
$$

**Relationships**

$$
v(t)=\\frac{dx}{dt}
$$

$$
a(t)=\\frac{dv}{dt}
$$

If acceleration is constant,

$$
a(t)=a
$$

we can obtain

$$
v(t)=v_0+at
$$

and then

$$
x(t)=x_0+v_0t+\\frac12at^2
$$

The physical problem has been converted into a set of mathematical relationships that can be analyzed and solved.

## 17. Fundamental mathematical tools

Throughout engineering studies, the following areas appear repeatedly:

| Area                   | Applications                        |
| ---------------------- | ----------------------------------- |
| Algebra                | Equations and models                |
| Geometry               | Space, structures, and measurements |
| Trigonometry           | Angles and components               |
| Linear algebra         | Vectors, matrices, and systems      |
| Differential calculus  | Rates of change and optimization    |
| Integral calculus      | Accumulation and areas              |
| Differential equations | Dynamic systems                     |
| Probability            | Uncertainty and random models       |
| Statistics             | Data analysis                       |
| Numerical methods      | Computational approximation         |

## 18. Problem-solving strategy

A general strategy is:

1. **Identify the problem.**
2. **Define the variables.**
3. **Write down the units.**
4. **Determine which mathematical relationships are relevant.**
5. **Build the model.**
6. **Solve it symbolically or numerically.**
7. **Check dimensions and results.**
8. **Interpret the result physically.**

A mathematical solution should not automatically be considered a physically valid solution. The result must also satisfy the constraints of the problem.

## Summary

Engineering mathematics provides a language for describing and analyzing technical systems.

The fundamental concepts include:

- algebra and equations;
- functions and modeling;
- units and dimensional analysis;
- vectors and matrices;
- trigonometry;
- complex numbers;
- derivatives and integrals;
- differential equations;
- probability and statistics;
- numerical methods.

The goal is not simply to perform calculations, but to **build mathematical models that correctly represent real-world problems and allow their results to be analyzed**.
`;function c(){let{locale:c}=t();return e(i,{id:`engineering-mathematics-introduction`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-ChTwH7hg.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};