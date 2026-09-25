# Funcions

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

:::function-graph{expression="2x+1" showWorkings=true}
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
y=3\cdot2-2=4
$$

Per tant:

$$
f(2)=4
$$

:::function-graph{expression="3x-2" showWorkings=true}
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

:::function-graph{expression="x+1" showWorkings=true}
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
\Delta x
$$

El símbol $\Delta$ s'utilitza per representar un **canvi** o una **variació**.

De manera similar, $\Delta y$ representa el canvi de $y$.

En una funció afí, la relació entre aquests canvis és constant:

$$
\frac{\Delta y}{\Delta x}=m
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

:::function-graph{expression="2x+1" showWorkings=true}
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
(-2,4),\quad(-1,1),\quad(0,0),\quad(1,1),\quad(2,4)
$$

Observem que la funció no augmenta sempre al mateix ritme.

Entre $x=-2$ i $x=-1$, el valor de $y$ disminueix 3 unitats.

Entre $x=-1$ i $x=0$, disminueix 1 unitat.

Després de l'origen comença a augmentar:

$$
0\rightarrow1\rightarrow4
$$

Per tant, la pendent canvia contínuament.

Quan la pendent canvia, els punts deixen d'estar alineats i apareix una **curvatura**.

Per això la gràfica de:

$$
f(x)=x^2
$$

és una **paràbola**.

:::function-graph{expression="x^2" showWorkings=true}
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

:::function-graph{expression="x^2" showWorkings=true}
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

:::function-graph{expression="2x+1" showWorkings=true}
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

:::function-graph{expression="-2x+1" showWorkings=true}
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

:::function-graph{expression="x^2" showWorkings=true}
:::

Aquest canvi de comportament permet identificar punts importants de la gràfica, com els **màxims** i els **mínims**.

### 3.10. Funcions amb dues branques

Considerem ara:

$$
f(x)=\frac{1}{x}
$$

En aquesta funció, el denominador no pot ser 0.

Per tant:

$$
x\neq0
$$

El símbol $\neq$ significa **«diferent de»**.

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

:::function-graph{expression="1/x" showWorkings=true}
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

:::function-graph{expression="abs(x)" showWorkings=true}
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

:::function-graph{expression="3" showWorkings=true}
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

:::function-graph{expression="2x" showWorkings=true}
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

:::function-graph{expression="-2x" showWorkings=true}
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

:::function-graph{expression="2x+1" showWorkings=true}
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

:::function-graph{expression="2x+1" showWorkings=true}
:::

Una funció és **decreixent** quan els seus valors disminueixen en augmentar $x$.

Per exemple:

$$
f(x)=-2x+1
$$

:::function-graph{expression="-2x+1" showWorkings=true}
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

on $a$, $b$ i $c$ són nombres i $a\neq0$.

El símbol $\neq$ significa **«diferent de»**.

El símbol $x^2$ significa que $x$ està elevat a l'exponent 2:

$$
x^2=x\cdot x
$$

Per exemple:

$$
f(x)=x^2
$$

:::function-graph{expression="x^2" showWorkings=true}
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

:::function-graph{expression="-x^2" showWorkings=true}
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

:::function-graph{expression="abs(x)" showWorkings=true}
:::

La seva gràfica té forma de V.

## 10. Funció racional

Una **funció racional** és una funció que es pot expressar com el quocient de dos polinomis.

Per exemple:

$$
f(x)=\frac{1}{x}
$$

El denominador no pot ser igual a zero. Per tant:

$$
x\neq0
$$

La gràfica d'aquesta funció té dues branques.

:::function-graph{expression="1/x" showWorkings=true}
:::

El valor $x=0$ no pertany al domini d'aquesta funció.

## 11. Domini d'una funció

El **domini** d'una funció és el conjunt de valors d'entrada per als quals la funció està definida.

Per exemple:

$$
f(x)=\frac{1}{x}
$$

No podem utilitzar $x=0$, perquè no existeix la divisió per zero.

Per tant, el domini és:

$$
D_f=\mathbb{R}\setminus\{0\}
$$

El símbol $\mathbb{R}$ representa el conjunt dels **nombres reals**.

El símbol $\setminus$ representa la **diferència de conjunts**: prenem els elements del primer conjunt que no pertanyen al segon.

Per tant, $\mathbb{R}\setminus\{0\}$ significa tots els nombres reals excepte el nombre 0.

## 12. Imatge o recorregut

La **imatge**, també anomenada **recorregut**, és el conjunt de valors que pot prendre la sortida d'una funció.

Per exemple:

$$
f(x)=x^2
$$

El quadrat de qualsevol nombre real mai és negatiu.

Per tant:

$$
f(x)\geq0
$$

El símbol $\geq$ significa **«més gran o igual que»**.

La imatge d'aquesta funció és:

$$
[0,\infty)
$$

El símbol $\infty$ representa l'infinit.

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

:::function-graph{expression="x-2" showWorkings=true}
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
f(0)=2\cdot0+3=3
$$

La gràfica talla l'eix $y$ en el punt:

$$
(0,3)
$$

:::function-graph{expression="2x+3" showWorkings=true}
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

:::function-graph{expression="x^2+2" showWorkings=true}
:::

Si restem 2:

$$
g(x)=x^2-2
$$

la gràfica es desplaça 2 unitats cap avall.

:::function-graph{expression="x^2-2" showWorkings=true}
:::

Si canviem $x$ per $x-2$:

$$
g(x)=(x-2)^2
$$

la gràfica es desplaça 2 unitats cap a la dreta.

:::function-graph{expression="(x-2)^2" showWorkings=true}
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
(f\circ g)(x)
$$

El símbol $\circ$ indica que primer apliquem $g$ i després $f$.

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
(f\circ g)(x)=2x+2
$$

:::function-graph{expression="2x+2" showWorkings=true}
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

:::function-graph{expression="x+2" showWorkings=true}
:::

:::function-graph{expression="x-2" showWorkings=true}
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
\begin{cases}
x+1 & \text{si } x<0\\
x^2 & \text{si } x\geq0
\end{cases}
$$

El símbol $<$ significa **«menor que»**.

El símbol $\geq$ significa **«més gran o igual que»**.

Per tant, per a valors negatius de $x$ utilitzem $x+1$, mentre que per a valors més grans o iguals que 0 utilitzem $x^2$.

:::function-graph{expression="x+1" restriction="x<0" showWorkings=true}
:::

:::function-graph{expression="x^2" restriction="x>=0" showWorkings=true}
:::

Les funcions definides a trossos són especialment útils per representar situacions en què una mateixa relació canvia segons l'interval considerat.
