# Introducció a les matemàtiques d'enginyeria

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
v=20\ \mathrm{m/s}
$$

El número $20$ representa el valor numèric i $\mathrm{m/s}$ representa la unitat.

En enginyeria és important distingir entre unitats i dimensions.

Algunes magnituds fonamentals són:

| Magnitud         | Unitat SI                 |
| ---------------- | ------------------------- |
| Longitud         | metre ($\mathrm{m}$)      |
| Massa            | quilogram ($\mathrm{kg}$) |
| Temps            | segon ($\mathrm{s}$)      |
| Temperatura      | kelvin ($\mathrm{K}$)     |
| Corrent elèctric | ampere ($\mathrm{A}$)     |

A partir d'aquestes magnituds se'n construeixen d'altres.

Per exemple, la velocitat té dimensions

$$
[v]=\frac{L}{T}
$$

i l'acceleració

$$
[a]=\frac{L}{T^2}
$$

## 3. Anàlisi dimensional

L'anàlisi dimensional permet comprovar si una equació és coherent.

Per exemple,

$$
d=vt
$$

té dimensions

$$
[d]=\frac{L}{T}T=L
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
I=\frac{V}{R}
$$

o la resistència:

$$
R=\frac{V}{I}
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
\mathbf{v}=
\begin{pmatrix}
v_x\\
v_y
\end{pmatrix}
$$

El seu mòdul és

$$
\|\mathbf{v}\|
=
\sqrt{v_x^2+v_y^2}
$$

Els vectors apareixen en mecànica, electricitat, geometria, robòtica, gràfics per ordinador i moltes altres àrees.

Per exemple, una força es pot descompondre en components:

$$
\mathbf{F}=F_x\mathbf{i}+F_y\mathbf{j}
$$

## 8. Matrius i sistemes d'equacions

Els sistemes d'equacions apareixen quan diverses incògnites estan relacionades.

Per exemple,

$$
\begin{cases}
2x+y=5\\
x-y=1
\end{cases}
$$

es pot escriure mitjançant matrius:

$$
A\mathbf{x}=\mathbf{b}
$$

amb

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

La formulació matricial és especialment important quan augmenta el nombre de variables.

## 9. Trigonometria

La trigonometria relaciona angles i longituds.

En un triangle rectangle:

$$
\sin(\theta)=\frac{\text{oposat}}{\text{hipotenusa}}
$$

$$
\cos(\theta)=\frac{\text{adjacent}}{\text{hipotenusa}}
$$

$$
\tan(\theta)=\frac{\text{oposat}}{\text{adjacent}}
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
f'(x)=\frac{dy}{dx}
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
\int_a^b f(x)\,dx
$$

representa l'àrea amb signe entre la gràfica de $f(x)$ i l'eix $x$ en l'interval $[a,b]$.

Les integrals també apareixen en energia, treball, massa, càrrega elèctrica, probabilitat i moltes altres aplicacions.

## 13. Equacions diferencials

Una equació diferencial relaciona una funció desconeguda amb les seves derivades.

Per exemple,

$$
\frac{dy}{dt}=ky
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
\bar{x}
=
\frac{1}{n}
\sum_{i=1}^{n}x_i
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
x_n-\frac{f(x_n)}{f'(x_n)}
$$

## 16. Modelització d'un problema d'enginyeria

Un problema real es pot transformar progressivament en un model matemàtic.

Per exemple, per estudiar el moviment d'un vehicle:

**Problema físic**

Es vol conèixer la posició del vehicle al llarg del temps.

**Variables**

$$
x(t),\qquad v(t),\qquad a(t)
$$

**Relacions**

$$
v(t)=\frac{dx}{dt}
$$

$$
a(t)=\frac{dv}{dt}
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
x(t)=x_0+v_0t+\frac12at^2
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
