# Nombres

## 1. Què és un nombre?

Un **nombre** és un objecte matemàtic que utilitzem per representar quantitats, posicions, mesures, relacions i resultats d'operacions.

Per exemple:

$$
3,\quad 15,\quad -7,\quad \frac{2}{3},\quad \sqrt{2},\quad \pi
$$

Tots són nombres, però no tots pertanyen al mateix conjunt numèric.

Per exemple:

- $3$ és un nombre natural.
- $-7$ és un nombre enter.
- $\frac{2}{3}$ és un nombre racional.
- $\sqrt{2}$ és un nombre irracional.
- $\pi$ és un nombre irracional.

Per classificar els nombres utilitzem diferents **conjunts numèrics**. Aquests conjunts s'amplien progressivament per poder representar cada vegada més tipus de nombres.

La relació principal entre aquests conjunts és:

$$
\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}
$$

El símbol $\subset$ significa **«està contingut en»** o **«és un subconjunt de»**.

Per exemple:

$$
\mathbb{N}\subset\mathbb{Z}
$$

significa que tot nombre natural també és un nombre enter.

Al llarg d'aquest tema estudiarem els principals conjunts numèrics, les seves propietats i les operacions que podem fer amb ells.

---

## 2. Nombres positius, negatius i zero

Els nombres reals es poden situar sobre una recta numèrica.

Abans de comparar nombres, és important distingir entre **nombres positius**, **nombres negatius** i **zero**.

Un nombre és **positiu** quan és més gran que zero.

El símbol $>$ significa **«més gran que»**.

Per exemple:

$$
x>0
$$

significa que el nombre $x$ és més gran que zero.

Alguns nombres positius són:

$$
1,\quad4,\quad10,\quad25
$$

Un nombre és **negatiu** quan és més petit que zero.

El símbol $<$ significa **«més petit que»**.

Per exemple:

$$
x<0
$$

significa que el nombre $x$ és més petit que zero.

Alguns nombres negatius són:

$$
-1,\quad-4,\quad-10,\quad-25
$$

El nombre $0$ no és ni positiu ni negatiu.

Podem visualitzar aquestes posicions:

:::number-line{min="-5" max="5" highlight="-3,0,3"}
:::

A la recta numèrica:

- els nombres positius estan a la dreta del zero;
- els nombres negatius estan a l'esquerra del zero;
- el zero es troba entre tots dos.

Per exemple:

$$
-3<0<3
$$

El signe $-$ davant d'un nombre indica el seu oposat.

Per exemple:

$$
-3
$$

és l'oposat de $3$.

De la mateixa manera:

$$
-(-3)=3
$$

L'oposat de $0$ és el mateix $0$:

$$
-0=0
$$

### Nombres oposats

Dos nombres són **oposats** quan tenen el mateix valor absolut i signes diferents.

Per exemple, $3$ i $-3$ són oposats.

De la mateixa manera, $8$ i $-8$ són oposats.

En general, si $a$ és un nombre, el seu oposat s'escriu $-a$.

---

## 3. La recta numèrica

La **recta numèrica** permet representar nombres mitjançant punts situats sobre una línia.

El zero s'utilitza habitualment com a punt de referència.

:::number-line{min="-5" max="5"}
:::

Una propietat fonamental de la recta numèrica és que els nombres augmenten d'esquerra a dreta.

Per tant, si un nombre està més a la dreta que un altre, és més gran.

Per exemple:

$$
5>2
$$

perquè $5$ està a la dreta de $2$.

De la mateixa manera:

$$
-5<-2
$$

perquè $-5$ està a l'esquerra de $-2$.

Això és especialment important amb els nombres negatius.

Encara que $5$ és més gran que $2$, entre els nombres negatius tenim:

$$
-2>-5
$$

perquè $-2$ està més a la dreta a la recta numèrica.

Per exemple:

$$
-1>-4
$$

### Distància entre nombres

La recta numèrica també permet interpretar la **distància entre dos nombres**.

La distància entre dos punts sempre és una quantitat no negativa.

Per exemple, la distància entre $2$ i $7$ és:

$$
7-2=5
$$

La distància entre $-3$ i $2$ és:

$$
2-(-3)=5
$$

Més endavant veurem que podem expressar la distància entre dos nombres qualssevol $a$ i $b$ mitjançant el valor absolut:

$$
|a-b|
$$

---

## 4. Comparació de nombres

Per comparar nombres utilitzem diferents símbols matemàtics.

Els principals són:

| Símbol | Significat            |
| ------ | --------------------- |
| $>$    | més gran que          |
| $<$    | més petit que         |
| $=$    | igual a               |
| $\geq$ | més gran o igual que  |
| $\leq$ | més petit o igual que |
| $\neq$ | diferent de           |

El símbol $=$ significa **«és igual a»**.

Per exemple:

$$
5=5
$$

El símbol $\geq$ significa **«més gran o igual que»**.

Per exemple:

$$
x\geq3
$$

significa que $x$ pot ser més gran que $3$ o exactament igual a $3$.

El símbol $\leq$ significa **«més petit o igual que»**.

Per exemple:

$$
x\leq3
$$

significa que $x$ pot ser més petit que $3$ o exactament igual a $3$.

El símbol $\neq$ significa **«diferent de»**.

Per exemple:

$$
x\neq0
$$

significa que $x$ no és igual a zero.

### Comparació a la recta numèrica

La posició dels nombres a la recta numèrica permet comparar-los.

Si $a$ està a l'esquerra de $b$, aleshores:

$$
a<b
$$

Si $a$ està a la dreta de $b$, aleshores:

$$
a>b
$$

---

## 5. Conjunts numèrics

Els nombres es classifiquen en diferents conjunts.

Les lletres que utilitzem per representar-los formen part de la notació matemàtica convencional.

El símbol $\mathbb{N}$ representa el conjunt dels **nombres naturals**.

El símbol $\mathbb{Z}$ representa el conjunt dels **nombres enters**.

El símbol $\mathbb{Q}$ representa el conjunt dels **nombres racionals**.

El símbol $\mathbb{R}$ representa el conjunt dels **nombres reals**.

La relació entre aquests conjunts és:

$$
\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}
$$

:::number-sets
:::

El símbol $\subset$ significa que tots els elements del conjunt de l'esquerra també pertanyen al conjunt de la dreta.

Per exemple:

$$
\mathbb{Z}\subset\mathbb{Q}
$$

significa que tot nombre enter també és un nombre racional.

A més d'aquests conjunts, distingim els **nombres irracionals**, que són nombres reals que no són racionals.

Denotarem el conjunt dels nombres irracionals amb $I$.

Els nombres irracionals compleixen:

$$
I=\mathbb{R}\setminus\mathbb{Q}
$$

Aquí el símbol $\setminus$ representa la **diferència de conjunts**: $A\setminus B$ conté els elements que pertanyen a $A$ però no pertanyen a $B$.

Per tant, $I$ conté els nombres reals que no són racionals.

---

## 6. Nombres naturals

Els **nombres naturals** s'utilitzen principalment per comptar i ordenar.

En aquest lloc web adoptarem la convenció:

$$
\mathbb{N}=\{0,1,2,3,4,\ldots\}
$$

El símbol $\in$ significa **«pertany a»**.

Per exemple:

$$
3\in\mathbb{N}
$$

significa que $3$ pertany al conjunt dels nombres naturals.

El símbol $\ldots$ indica que la successió continua seguint el mateix patró.

Així:

$$
0,1,2,3,4,\ldots
$$

continua amb $5$, $6$, $7$ i així successivament.

Alguns llibres utilitzen una convenció diferent i comencen els nombres naturals en $1$:

$$
\{1,2,3,4,\ldots\}
$$

Per això és important comprovar quina convenció s'està utilitzant.

### Propietats bàsiques

Els nombres naturals són tancats respecte de la suma i la multiplicació.

Això significa que en sumar o multiplicar dos nombres naturals obtenim un altre nombre natural.

Per exemple:

$$
3+5=8
$$

i:

$$
4\cdot6=24
$$

En canvi, la resta i la divisió no sempre produeixen nombres naturals.

Per exemple:

$$
3-5=-2
$$

i $-2$ no pertany a $\mathbb{N}$.

També:

$$
1\div2=\frac{1}{2}
$$

i $\frac{1}{2}$ no pertany a $\mathbb{N}$.

---

## 7. Nombres enters

Els **nombres enters** inclouen els nombres naturals, els seus oposats i el zero.

Es representen mitjançant $\mathbb{Z}$:

$$
\mathbb{Z}=\{\ldots,-3,-2,-1,0,1,2,3,\ldots\}
$$

Per exemple:

$$
-5\in\mathbb{Z}
$$

perquè $-5$ és un nombre enter.

També:

$$
7\in\mathbb{Z}
$$

Els nombres naturals estan continguts en els enters:

$$
\mathbb{N}\subset\mathbb{Z}
$$

Per exemple:

$$
4\in\mathbb{N}
$$

i, per tant:

$$
4\in\mathbb{Z}
$$

### Suma d'enters

Per sumar nombres enters podem utilitzar la recta numèrica.

Si sumem un nombre positiu, ens desplacem cap a la dreta.

Si sumem un nombre negatiu, ens desplacem cap a l'esquerra.

Per exemple:

$$
3+(-5)=-2
$$

Partim de $3$ i ens desplacem cinc unitats cap a l'esquerra.

### Producte d'enters

En multiplicar nombres enters hem de tenir en compte els seus signes.

Dues regles fonamentals són:

$$
(+)\cdot(+)=+
$$

i:

$$
(-)\cdot(-)=+
$$

En canvi:

$$
(+)\cdot(-)=-
$$

i:

$$
(-)\cdot(+)=-
$$

És a dir:

- signes iguals produeixen un resultat positiu;
- signes diferents produeixen un resultat negatiu.

Per exemple:

$$
(-3)\cdot(-4)=12
$$

i:

$$
(-3)\cdot4=-12
$$

---

## 8. Valor absolut

El **valor absolut** d'un nombre és la seva distància fins al zero a la recta numèrica.

El valor absolut es representa mitjançant dues barres verticals:

$$
|x|
$$

Les barres $|\,|$ indiquen que estem calculant el valor absolut de $x$.

Per exemple:

$$
|-5|=5
$$

perquè $-5$ es troba a una distància de $5$ unitats del zero.

També:

$$
|5|=5
$$

Tant $-5$ com $5$ estan a cinc unitats del zero.

:::absolute-value
:::

El valor absolut mai no és negatiu.

Per tant:

$$
|x|\geq0
$$

El símbol $\geq$ significa **«més gran o igual que»**.

### Distància entre dos nombres

El valor absolut permet expressar la distància entre dos nombres $a$ i $b$:

$$
|a-b|
$$

Per exemple, la distància entre $-3$ i $4$ és:

$$
|-3-4|=|-7|=7
$$

Per tant, els nombres $-3$ i $4$ estan separats per set unitats.

---

## 9. Nombres racionals

Un **nombre racional** és qualsevol nombre que es pot escriure com una fracció:

$$
\frac{a}{b}
$$

on $a$ i $b$ són nombres enters i $b\neq0$.

El símbol $\neq$ significa **«diferent de»**.

Per tant, el denominador $b$ no pot ser zero.

Per exemple:

$$
\frac{3}{4}
$$

és un nombre racional perquè $3$ i $4$ són enters i $4\neq0$.

També són racionals:

$$
\frac{-5}{2},\quad
\frac{7}{3},\quad
8
$$

El nombre enter $8$ també es pot escriure com una fracció:

$$
8=\frac{8}{1}
$$

Per tant, tot nombre enter és racional:

$$
\mathbb{Z}\subset\mathbb{Q}
$$

### Fraccions equivalents

Dues fraccions poden representar el mateix nombre.

Per exemple:

$$
\frac{1}{2}=\frac{2}{4}=\frac{3}{6}
$$

Aquestes fraccions són **equivalents**.

Una fracció es pot simplificar dividint el numerador i el denominador pel mateix nombre diferent de zero.

Per exemple:

$$
\frac{6}{8}=\frac{3}{4}
$$

---

## 10. Expressió decimal dels nombres racionals

Els nombres racionals es poden expressar mitjançant nombres decimals.

Per exemple:

$$
\frac{1}{2}=0.5
$$

i:

$$
\frac{3}{4}=0.75
$$

L'expressió decimal d'un nombre racional pot ser:

- finita;
- infinita periòdica.

Una expressió decimal és **periòdica** quan una seqüència de xifres es repeteix indefinidament.

Per exemple:

$$
\frac{1}{3}=0.333\ldots
$$

El patró $3$ es repeteix indefinidament.

Un altre exemple és:

$$
\frac{2}{11}=0.181818\ldots
$$

En aquest cas es repeteix el patró $18$.

Per tant, tot nombre racional té una representació decimal finita o periòdica.

---

## 11. Nombres irracionals

Els **nombres irracionals** són nombres reals que no es poden expressar com una fracció de dos nombres enters amb denominador diferent de zero.

En altres paraules, un nombre irracional és un nombre real que no pertany a $\mathbb{Q}$.

L'expressió:

$$
I=\mathbb{R}\setminus\mathbb{Q}
$$

utilitza $\setminus$ per indicar la diferència de conjunts.

Alguns exemples de nombres irracionals són:

$$
\sqrt{2},\quad\sqrt{3},\quad\pi
$$

Les seves expressions decimals són infinites i no periòdiques.

Per exemple:

$$
\sqrt{2}=1.41421356\ldots
$$

Les xifres continuen indefinidament i no segueixen un patró periòdic.

És important distingir entre una expressió decimal infinita i una expressió decimal irracional: no tota expressió decimal infinita és necessàriament irracional. Per exemple:

$$
\frac{1}{3}=0.333\ldots
$$

és infinita, però és racional perquè les seves xifres es repeteixen periòdicament.

---

## 12. Fraccions

Una **fracció** representa una quantitat formada per parts iguals d'una unitat.

Una fracció s'escriu així:

$$
\frac{a}{b}
$$

El nombre situat a dalt s'anomena **numerador** i representa quantes parts prenem.

El nombre situat a baix s'anomena **denominador** i representa en quantes parts iguals es divideix cada unitat.

Per exemple:

$$
\frac{3}{5}
$$

En aquesta fracció, $3$ és el numerador i $5$ és el denominador. Per tant, dividim una unitat en 5 parts iguals i en prenem 3.

:::fraction{numerator="3" denominator="5"}
:::

### Fraccions pròpies

Una **fracció pròpia** té el numerador menor que el denominador. El seu valor és menor que 1.

Per exemple:

$$
\frac{3}{5}
$$

La unitat està dividida en 5 parts iguals i en prenem 3.

:::fraction{numerator="3" denominator="5"}
:::

Un altre exemple és:

$$
\frac{7}{10}
$$

La unitat està dividida en 10 parts iguals i en prenem 7.

:::fraction{numerator="7" denominator="10"}
:::

### Fraccions iguals a una unitat

Quan el numerador i el denominador són iguals, la fracció representa exactament una unitat.

Per exemple:

$$
\frac{4}{4}=1
$$

El denominador indica que cada unitat té 4 parts, i el numerador indica que en prenem les 4.

:::fraction{numerator="4" denominator="4"}
:::

### Fraccions impròpies

Una **fracció impròpia** té el numerador major que el denominador. El seu valor és major que 1.

Per exemple:

$$
\frac{7}{4}
$$

El denominador $4$ indica que cada unitat està formada per 4 parts iguals.

Tenim 7 parts. Les primeres 4 formen una unitat completa i en queden 3 d'una segona unitat.

Per tant:

$$
\frac{7}{4}=1+\frac{3}{4}
$$

També podem escriure aquesta quantitat com a nombre mixt:

$$
1\frac{3}{4}
$$

:::fraction{numerator="7" denominator="4"}
:::

Un altre exemple és:

$$
\frac{9}{4}
$$

Podem formar dues unitats completes utilitzant 8 parts i en queda 1 d'una tercera unitat:

$$
\frac{9}{4}=2+\frac{1}{4}
$$

:::fraction{numerator="9" denominator="4"}
:::

De manera similar:

$$
\frac{11}{5}=2+\frac{1}{5}
$$

:::fraction{numerator="11" denominator="5"}
:::

### Fraccions equivalents

Dues fraccions són **equivalents** quan representen la mateixa quantitat, encara que estiguin escrites amb nombres diferents.

Per exemple:

$$
\frac{1}{2}=\frac{2}{4}=\frac{3}{6}
$$

Les tres fraccions representen la meitat d'una unitat.

:::fraction{numerator="1" denominator="2"}
:::

:::fraction{numerator="2" denominator="4"}
:::

:::fraction{numerator="3" denominator="6"}
:::

Podem obtenir una fracció equivalent multiplicant el numerador i el denominador pel mateix nombre diferent de zero.

Per exemple:

$$
\frac{1}{2}=\frac{1\cdot2}{2\cdot2}=\frac{2}{4}
$$

També podem simplificar una fracció dividint el numerador i el denominador pel mateix divisor comú.

Per exemple:

$$
\frac{6}{8}=\frac{3}{4}
$$

perquè tant 6 com 8 es poden dividir entre 2.

:::fraction{numerator="6" denominator="8"}
:::

:::fraction{numerator="3" denominator="4"}
:::

### Fraccions majors que una unitat

Una fracció pot representar una quantitat formada per diverses unitats completes i una part d'una altra unitat.

Per exemple:

$$
\frac{13}{5}
$$

Com que cada unitat conté 5 parts, podem formar dues unitats completes utilitzant 10 parts i en queden 3:

$$
\frac{13}{5}=2+\frac{3}{5}
$$

:::fraction{numerator="13" denominator="5"}
:::

Això ens permet interpretar una fracció impròpia com la suma d'un nombre enter i una fracció pròpia.

En general, si el numerador és major que el denominador, podem dividir el numerador entre el denominador per obtenir les unitats completes i les parts que sobren.

Per exemple:

$$
\frac{17}{6}
$$

Tenim 2 unitats completes perquè $2\cdot6=12$, i sobren 5 parts:

$$
\frac{17}{6}=2+\frac{5}{6}
$$

:::fraction{numerator="17" denominator="6"}
:::

---

## 13. Operacions amb fraccions

### Suma i resta amb el mateix denominador

Si dues fraccions tenen el mateix denominador, podem sumar o restar els numeradors i mantenir el denominador.

Per exemple:

$$
\frac{2}{7}+\frac{3}{7}
=
\frac{5}{7}
$$

I:

$$
\frac{6}{7}-\frac{2}{7}
=
\frac{4}{7}
$$

### Suma i resta amb denominadors diferents

Quan els denominadors són diferents, primer necessitem obtenir un denominador comú.

Per exemple:

$$
\frac{1}{2}+\frac{1}{3}
$$

El mínim comú múltiple de $2$ i $3$ és $6$.

Per tant:

$$
\frac{1}{2}=\frac{3}{6}
$$

i:

$$
\frac{1}{3}=\frac{2}{6}
$$

Aleshores:

$$
\frac{1}{2}+\frac{1}{3}
=
\frac{3}{6}+\frac{2}{6}
=
\frac{5}{6}
$$

### Multiplicació

Per multiplicar fraccions multipliquem els numeradors entre si i els denominadors entre si.

Per exemple:

$$
\frac{2}{3}\cdot\frac{4}{5}
=
\frac{8}{15}
$$

### Divisió

Dividir per una fracció equival a multiplicar per la seva fracció inversa.

La **fracció inversa** de $\frac{a}{b}$ és $\frac{b}{a}$, sempre que $a\neq0$.

Per exemple:

$$
\frac{2}{3}\div\frac{4}{5}
=
\frac{2}{3}\cdot\frac{5}{4}
=
\frac{10}{12}
=
\frac{5}{6}
$$

---

## 14. Potències

Una **potència** permet representar de manera abreujada una multiplicació repetida.

L'expressió:

$$
a^n
$$

es llegeix **«a elevat a n»**.

El nombre $a$ és la **base** i el nombre $n$ és l'**exponent**.

Si $n$ és un nombre natural positiu, la potència significa multiplicar la base per ella mateixa $n$ vegades.

Per exemple:

$$
2^4=2\cdot2\cdot2\cdot2=16
$$

Aquí:

- $2$ és la base;
- $4$ és l'exponent;
- $16$ és el resultat.

### Exponent zero

Per a qualsevol nombre diferent de zero:

$$
a^0=1
$$

Per exemple:

$$
5^0=1
$$

### Exponents negatius

Si $a\neq0$ i $n$ és positiu:

$$
a^{-n}=\frac{1}{a^n}
$$

Per exemple:

$$
2^{-3}=\frac{1}{2^3}=\frac{1}{8}
$$

---

## 15. Propietats de les potències

Les potències compleixen diverses propietats importants.

### Producte de potències amb la mateixa base

Quan multipliquem potències amb la mateixa base, sumem els seus exponents:

$$
a^m\cdot a^n=a^{m+n}
$$

Per exemple:

$$
2^3\cdot2^2=2^5
$$

### Quocient de potències amb la mateixa base

Quan dividim potències amb la mateixa base, restem els seus exponents:

$$
\frac{a^m}{a^n}=a^{m-n}
$$

sempre que $a\neq0$.

Per exemple:

$$
\frac{2^5}{2^2}=2^3
$$

### Potència d'una potència

Quan una potència s'eleva a una altra potència, multipliquem els exponents:

$$
(a^m)^n=a^{m\cdot n}
$$

Per exemple:

$$
(2^3)^2=2^6
$$

---

## 16. Arrels quadrades

El símbol $\sqrt{\phantom{x}}$ s'anomena **signe radical**.

L'expressió:

$$
\sqrt{a}
$$

representa l'**arrel quadrada principal** de $a$.

Per a $a\geq0$, $\sqrt{a}$ és el nombre no negatiu el quadrat del qual és $a$.

El símbol $\geq$ significa **«més gran o igual que»**.

Per exemple:

$$
\sqrt{9}=3
$$

perquè:

$$
3^2=9
$$

i $3$ és el nombre no negatiu el quadrat del qual és $9$.

De manera equivalent:

$$
\sqrt{a}=b
$$

si i només si:

$$
b\geq0
\quad\text{i}\quad
b^2=a
$$

Per exemple:

$$
\sqrt{16}=4
$$

No hem d'escriure $\sqrt{16}=\pm4$.

L'arrel quadrada principal és $4$.

Tanmateix, l'equació:

$$
x^2=16
$$

té dues solucions:

$$
x=4
\quad\text{o}\quad
x=-4
$$

---

## 17. Arrels i potències

Les arrels i les potències estan relacionades.

Per exemple:

$$
\sqrt{a}=a^{1/2}
$$

per a $a\geq0$.

També:

$$
\sqrt[n]{a}=a^{1/n}
$$

quan l'expressió està definida.

El nombre $n$ indica l'**índex de l'arrel**.

Per exemple:

$$
\sqrt[3]{8}=2
$$

perquè:

$$
2^3=8
$$

L'arrel cúbica també es pot definir per a nombres negatius:

$$
\sqrt[3]{-8}=-2
$$

perquè:

$$
(-2)^3=-8
$$

---

## 18. Prioritat de les operacions

Quan una expressió conté diverses operacions, hem de seguir un ordre determinat.

L'ordre habitual és:

1. parèntesis;
2. potències i arrels;
3. multiplicacions i divisions;
4. sumes i restes.

Per exemple:

$$
2+3\cdot4
$$

Primer fem la multiplicació:

$$
3\cdot4=12
$$

i després la suma:

$$
2+12=14
$$

Per tant:

$$
2+3\cdot4=14
$$

Els parèntesis permeten modificar aquest ordre.

Per exemple:

$$
(2+3)\cdot4
$$

Primer calculem l'expressió que hi ha dins dels parèntesis:

$$
2+3=5
$$

i després:

$$
5\cdot4=20
$$

Per tant:

$$
(2+3)\cdot4=20
$$

---

## 19. Divisibilitat

Diem que un nombre enter $a$ és **divisible** per un altre nombre enter $b$ si existeix un nombre enter $k$ tal que:

$$
a=b\cdot k
$$

Per expressar que $b$ divideix $a$, utilitzem el símbol $\mid$.

L'expressió:

$$
b\mid a
$$

es llegeix **«b divideix a»**.

Per exemple:

$$
3\mid12
$$

perquè existeix un nombre enter $4$ tal que:

$$
12=3\cdot4
$$

Si un nombre no divideix un altre nombre, podem utilitzar el símbol $\nmid$, que significa **«no divideix»**.

Per exemple:

$$
5\nmid12
$$

perquè no existeix cap nombre enter $k$ que compleixi:

$$
12=5\cdot k
$$

### Múltiples

Els múltiples d'un nombre s'obtenen multiplicant-lo per nombres enters.

Per exemple, alguns múltiples de $4$ són:

$$
0,\quad4,\quad8,\quad12,\quad16,\ldots
$$

---

## 20. Nombres primers

Un nombre natural més gran que $1$ és **primer** si té exactament dos divisors positius diferents: $1$ i el mateix nombre.

Per exemple, $7$ és primer perquè els seus únics divisors positius són $1$ i $7$.

En canvi, $8$ no és primer perquè té més divisors:

$$
1,\quad2,\quad4,\quad8
$$

Alguns nombres primers són:

$$
2,\quad3,\quad5,\quad7,\quad11,\quad13,\quad17,\ldots
$$

El nombre $2$ és l'únic nombre primer que és parell.

Un nombre natural més gran que $1$ que no és primer s'anomena **compost**.

---

## 21. Descomposició en factors primers

Tot nombre natural més gran que $1$ es pot expressar com un producte de nombres primers.

Aquesta expressió s'anomena **descomposició en factors primers**.

Per exemple:

$$
60=2\cdot2\cdot3\cdot5
$$

També podem escriure:

$$
60=2^2\cdot3\cdot5
$$

La descomposició en factors primers és útil per simplificar fraccions i calcular el màxim comú divisor i el mínim comú múltiple.

---

## 22. Màxim comú divisor

El **màxim comú divisor**, abreujat com a **MCD**, de diversos nombres és el nombre natural més gran que divideix exactament tots els nombres.

Per exemple, considerem $12$ i $18$.

Els seus divisors comuns són:

$$
1,\quad2,\quad3,\quad6
$$

El més gran és $6$.

Per tant:

$$
\operatorname{MCD}(12,18)=6
$$

L'expressió $\operatorname{MCD}$ significa **màxim comú divisor**.

### Càlcul mitjançant factors primers

Podem descompondre:

$$
12=2^2\cdot3
$$

i:

$$
18=2\cdot3^2
$$

Els factors comuns són $2$ i $3$.

Prenem cada factor comú amb l'exponent més petit:

$$
\operatorname{MCD}(12,18)=2\cdot3=6
$$

---

## 23. Mínim comú múltiple

El **mínim comú múltiple**, abreujat com a **MCM**, de diversos nombres és el nombre natural positiu més petit que és múltiple de tots ells.

Per exemple, els múltiples positius de $4$ són:

$$
4,\quad8,\quad12,\quad16,\ldots
$$

i alguns múltiples positius de $6$ són:

$$
6,\quad12,\quad18,\quad24,\ldots
$$

El primer múltiple positiu que tenen en comú és $12$.

Per tant:

$$
\operatorname{MCM}(4,6)=12
$$

L'expressió $\operatorname{MCM}$ significa **mínim comú múltiple**.

### Càlcul mitjançant factors primers

Tenim:

$$
4=2^2
$$

i:

$$
6=2\cdot3
$$

Per calcular el MCM prenem tots els factors primers que apareixen, utilitzant en cada cas l'exponent més gran:

$$
\operatorname{MCM}(4,6)=2^2\cdot3=12
$$

---

## 24. Propietats de la suma

La suma de nombres reals compleix diverses propietats importants.

### Propietat commutativa

La propietat **commutativa** significa que podem canviar l'ordre dels sumands sense canviar el resultat.

$$
a+b=b+a
$$

Per exemple:

$$
3+5=5+3
$$

### Propietat associativa

La propietat **associativa** significa que podem canviar l'agrupació dels sumands sense canviar el resultat.

$$
(a+b)+c=a+(b+c)
$$

Per exemple:

$$
(2+3)+4=2+(3+4)
$$

En tots dos casos obtenim $9$.

### Element neutre

El $0$ és l'**element neutre de la suma** perquè sumar zero no canvia un nombre:

$$
a+0=a
$$

### Element oposat

Tot nombre real $a$ té un oposat, $-a$.

La seva suma és zero:

$$
a+(-a)=0
$$

---

## 25. Propietats de la multiplicació

La multiplicació també té propietats fonamentals.

### Propietat commutativa

Podem canviar l'ordre dels factors:

$$
a\cdot b=b\cdot a
$$

Per exemple:

$$
3\cdot5=5\cdot3
$$

### Propietat associativa

Podem canviar l'agrupació dels factors:

$$
(a\cdot b)\cdot c=a\cdot(b\cdot c)
$$

### Element neutre

L'$1$ és l'element neutre de la multiplicació:

$$
a\cdot1=a
$$

### Propietat distributiva

La multiplicació es distribueix respecte de la suma:

$$
a(b+c)=a\cdot b+a\cdot c
$$

Per exemple:

$$
3(4+5)=3\cdot4+3\cdot5
$$

Calculant:

$$
3\cdot9=12+15
$$

i:

$$
27=27
$$

---

## 26. Percentatges

Un **percentatge** representa una quantitat expressada **per cada cent**.

El símbol $\%$ es llegeix **«per cent»**.

Per exemple:

$$
25\%
$$

significa **25 de cada 100**.

Per tant:

$$
25\%=\frac{25}{100}=\frac{1}{4}
$$

Per calcular un percentatge d'una quantitat podem convertir el percentatge en una fracció o en un nombre decimal.

Per exemple, el $20\%$ de $50$ és:

$$
20\%\cdot50
=
\frac{20}{100}\cdot50
=
10
$$

Per tant, el $20\%$ de $50$ és $10$.

### Augments i disminucions percentuals

Si una quantitat augmenta un $10\%$, afegim una desena part de la quantitat original.

Si una quantitat disminueix un $10\%$, restem una desena part de la quantitat original.

Per exemple, augmentar $100$ un $10\%$ produeix:

$$
100+10=110
$$

---

## 27. Notació científica

La **notació científica** permet escriure nombres molt grans o molt petits de manera compacta.

Un nombre en notació científica té la forma:

$$
a\cdot10^n
$$

on $a$ és un nombre el valor absolut del qual és més gran o igual que $1$ i més petit que $10$, i $n$ és un nombre enter.

Per exemple:

$$
3000000=3\cdot10^6
$$

També:

$$
0.000004=4\cdot10^{-6}
$$

Els exponents positius permeten representar nombres grans.

Els exponents negatius permeten representar nombres petits.

---

## 28. Nombres reals

Els **nombres reals** inclouen tots els nombres racionals i irracionals.

Es representen mitjançant el símbol $\mathbb{R}$.

Per tant:

$$
\mathbb{Q}\subset\mathbb{R}
$$

i també:

$$
I\subset\mathbb{R}
$$

Els nombres reals es poden representar mitjançant punts d'una recta numèrica.

Dins dels nombres reals trobem:

- nombres naturals;
- nombres enters;
- nombres racionals;
- nombres irracionals.

La relació completa es pot visualitzar així:

:::number-sets
:::

Per exemple:

$$
-3,\quad0,\quad\frac{1}{2},\quad\sqrt{2},\quad\pi
$$

són tots nombres reals.

Tanmateix, pertanyen a categories diferents.

Per exemple:

$$
-3\in\mathbb{Z}
$$

mentre que:

$$
\frac{1}{2}\in\mathbb{Q}
$$

i:

$$
\sqrt{2}\in I
$$

---

## 29. Intervals de nombres reals

Un **interval** és un conjunt de nombres reals compresos entre determinats límits.

Per descriure intervals utilitzem parèntesis i claudàtors.

El claudàtor $[$ o $]$ indica que l'extrem **està inclòs**.

El parèntesi $($ o $)$ indica que l'extrem **no està inclòs**.

Per exemple:

$$
[2,5]
$$

representa tots els nombres reals des de $2$ fins a $5$, incloent-hi els dos extrems.

Això significa:

$$
2\leq x\leq5
$$

El símbol $\leq$ significa **«més petit o igual que»**.

Per tant, $2$ i $5$ pertanyen a l'interval.

### Interval obert

L'interval:

$$
(2,5)
$$

no inclou els extrems.

Per tant:

$$
2<x<5
$$

El símbol $<$ significa **«més petit que»**.

Així, $3$ pertany a l'interval, però $2$ i $5$ no.

### Intervals semioberts

També podem incloure només un dels extrems.

Per exemple:

$$
[2,5)
$$

inclou $2$ però no inclou $5$.

Es pot expressar mitjançant:

$$
2\leq x<5
$$

Un altre exemple és:

$$
(2,5]
$$

que s'expressa com:

$$
2<x\leq5
$$

### Intervals infinits

També podem representar conjunts que s'estenen indefinidament.

Per exemple:

$$
[3,\infty)
$$

representa tots els nombres reals més grans o iguals que $3$.

El símbol $\infty$ representa el concepte d'**infinit**. No és un nombre real, sinó una manera d'indicar que l'interval continua sense límit.

També podem escriure:

$$
(-\infty,4]
$$

per representar tots els nombres reals més petits o iguals que $4$.

---

## 30. Unió i intersecció de conjunts

Quan treballem amb conjunts, podem necessitar combinar o comparar diferents conjunts.

El símbol $\cup$ representa la **unió** de dos conjunts.

La unió conté tots els elements que pertanyen al primer conjunt, al segon conjunt o a tots dos.

Per exemple:

$$
[1,3]\cup[5,7]
$$

representa tots els nombres compresos entre $1$ i $3$, juntament amb tots els nombres compresos entre $5$ i $7$.

El símbol $\cap$ representa la **intersecció** de dos conjunts.

La intersecció conté únicament els elements que pertanyen als dos conjunts.

Per exemple:

$$
[1,5]\cap[3,7]=[3,5]
$$

perquè els nombres que pertanyen simultàniament als dos intervals són els compresos entre $3$ i $5$.

El símbol $\varnothing$ representa el **conjunt buit**, és a dir, un conjunt que no conté cap element.

Per exemple:

$$
[1,2]\cap[3,4]=\varnothing
$$

perquè no existeix cap nombre real que pertanyi simultàniament als dos intervals.

---

## 31. Relacions entre conjunts numèrics

Els conjunts numèrics no són independents.

Cada conjunt conté conjunts més petits.

La relació fonamental és:

$$
\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}
$$

Això significa:

- tot nombre natural és enter;
- tot nombre enter és racional;
- tot nombre racional és real.

Els nombres irracionals també pertanyen als nombres reals:

$$
I\subset\mathbb{R}
$$

Però els nombres irracionals no són racionals:

$$
I\cap\mathbb{Q}=\varnothing
$$

Aquí $\cap$ representa la intersecció i $\varnothing$ representa el conjunt buit.

Per tant, els nombres reals es poden dividir en dos grans grups:

$$
\mathbb{R}=\mathbb{Q}\cup I
$$

El símbol $\cup$ representa la unió.

Aquesta classificació serà fonamental per estudiar posteriorment expressions algebraiques, funcions, equacions i càlcul.
