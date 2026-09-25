# Intersecció d'intervals

La **intersecció d'intervals** permet trobar els nombres que pertanyen simultàniament a dos o més intervals.

És una eina fonamental per treballar amb desigualtats, dominis, sistemes de desigualtats i conjunts de solucions.

## 1. Què és un interval

Un interval representa un conjunt de nombres reals compresos entre determinats extrems.

Per exemple:

$$
[2,5]
$$

representa tots els nombres reals $x$ que compleixen:

$$
2\leq x\leq5
$$

Els extrems poden estar inclosos o exclosos.

### Interval tancat

$$
[a,b]
$$

Significa:

$$
a\leq x\leq b
$$

Els dos extrems estan inclosos.

### Interval obert

$$
(a,b)
$$

Significa:

$$
a<x<b
$$

Els dos extrems estan exclosos.

### Interval semiobert

$$
[a,b)
$$

Significa:

$$
a\leq x<b
$$

L'extrem $a$ està inclòs i $b$ està exclòs.

De manera anàloga:

$$
(a,b]
$$

significa:

$$
a<x\leq b
$$

## 2. Què significa intersecció

La intersecció de dos conjunts conté els elements que pertanyen a **tots dos conjunts alhora**.

Es representa mitjançant:

$$
A\cap B
$$

Per exemple:

$$
A=[1,6]
$$

i:

$$
B=[4,9]
$$

Els nombres que pertanyen simultàniament als dos intervals són:

$$
[4,6]
$$

Per tant:

$$
\boxed{[1,6]\cap[4,9]=[4,6]}
$$

## 3. Interpretació sobre la recta real

La intersecció es pot visualitzar com la zona on dos intervals se superposen.

Per a:

$$
A=[1,6]
$$

i:

$$
B=[4,9]
$$

la zona comuna és:

$$
[4,6]
$$

L'interval de la intersecció comença en el més gran dels extrems esquerres i acaba en el més petit dels extrems drets.

En general:

$$
\boxed{\text{extrem esquerre}=\max(a,c)}
$$

$$
\boxed{\text{extrem dret}=\min(b,d)}
$$

per a:

$$
[a,b]\cap[c,d]
$$

sempre que hi hagi solapament.

## 4. Intersecció d'intervals tancats

Considerem:

$$
A=[2,8]
$$

i:

$$
B=[5,10]
$$

El més gran dels extrems esquerres és:

$$
\max(2,5)=5
$$

El més petit dels extrems drets és:

$$
\min(8,10)=8
$$

Per tant:

$$
\boxed{A\cap B=[5,8]}
$$

## 5. Intersecció d'intervals oberts

Considerem:

$$
A=(2,8)
$$

i:

$$
B=(5,10)
$$

Els extrems de la intersecció són $5$ i $8$.

Com que tots dos intervals exclouen aquests extrems:

$$
\boxed{A\cap B=(5,8)}
$$

## 6. Intersecció amb extrems diferents

Considerem:

$$
A=[2,8)
$$

i:

$$
B=(5,10]
$$

El resultat és:

$$
(5,8)
$$

perquè:

- $5$ està exclòs per $B$.
- $8$ està exclòs per $A$.

Per tant:

$$
\boxed{[2,8)\cap(5,10]=(5,8)}
$$

## 7. Com decidir si un extrem està inclòs

Perquè un extrem pertanyi a la intersecció, ha de pertànyer a **tots els intervals** que estem intersectant.

Per exemple:

$$
[2,7]\cap(5,10]
$$

L'extrem $5$ no pertany al segon interval:

$$
5\notin(5,10]
$$

Per tant, no pertany a la intersecció.

L'extrem $7$ sí que pertany a tots dos:

$$
7\in[2,7]
$$

i:

$$
7\in(5,10]
$$

Per tant:

$$
\boxed{[2,7]\cap(5,10]=(5,7]}
$$

Regla fonamental:

> Un extrem només s'inclou en la intersecció si tots els intervals l'inclouen.

## 8. Intervals que no se superposen

Considerem:

$$
A=[1,3]
$$

i:

$$
B=[5,8]
$$

No existeix cap nombre real que pertanyi simultàniament als dos.

Per tant:

$$
\boxed{A\cap B=\varnothing}
$$

El símbol $\varnothing$ representa el conjunt buit.

## 9. Intervals que només es toquen

Considerem:

$$
A=[1,4]
$$

i:

$$
B=(4,8]
$$

El primer interval conté $4$:

$$
4\in[1,4]
$$

però el segon no:

$$
4\notin(4,8]
$$

Per tant:

$$
\boxed{[1,4]\cap(4,8]=\varnothing}
$$

En canvi:

$$
[1,4]\cap[4,8]=\{4\}
$$

Aquí la intersecció conté únicament el nombre $4$.

## 10. Un interval contingut en un altre

Si un interval està completament dins d'un altre, la intersecció és l'interval més petit, tenint en compte els seus extrems.

Per exemple:

$$
A=[1,10]
$$

i:

$$
B=[3,7]
$$

Com que:

$$
B\subseteq A
$$

tenim:

$$
\boxed{A\cap B=[3,7]}
$$

## 11. Intersecció d'intervals infinits

Els intervals també poden estendre's fins a l'infinit.

Per exemple:

$$
A=[2,\infty)
$$

i:

$$
B=(-\infty,7]
$$

Els nombres comuns compleixen:

$$
2\leq x\leq7
$$

Per tant:

$$
\boxed{A\cap B=[2,7]}
$$

## 12. Intersecció amb $+\infty$

Considerem:

$$
A=(3,\infty)
$$

i:

$$
B=[5,\infty)
$$

El segon interval està contingut en el primer:

$$
B\subset A
$$

Per tant:

$$
\boxed{A\cap B=[5,\infty)}
$$

L'infinit mai s'inclou mitjançant un claudàtor.

Sempre s'escriu:

$$
(a,\infty)
$$

o:

$$
[a,\infty)
$$

## 13. Intersecció amb $-\infty$

Per exemple:

$$
A=(-\infty,5]
$$

i:

$$
B=(-\infty,2)
$$

L'interval més restrictiu és:

$$
(-\infty,2)
$$

Per tant:

$$
\boxed{A\cap B=(-\infty,2)}
$$

## 14. Intersecció de tres intervals

La intersecció es pot aplicar a més de dos intervals.

Per exemple:

$$
A=[1,9]
$$

$$
B=[3,8]
$$

$$
C=[5,12]
$$

Primer:

$$
A\cap B=[3,8]
$$

Després:

$$
[3,8]\cap[5,12]=[5,8]
$$

Per tant:

$$
\boxed{A\cap B\cap C=[5,8]}
$$

## 15. Regla general per a diversos intervals

Per a diversos intervals, l'extrem esquerre de la intersecció ve determinat pel més gran de tots els extrems esquerres i l'extrem dret pel més petit de tots els extrems drets.

Per a:

$$
I_1,I_2,\ldots,I_n
$$

si els seus extrems són:

$$
[a_1,b_1],\ [a_2,b_2],\ldots,[a_n,b_n]
$$

els candidats per a la intersecció són:

$$
\max(a_1,a_2,\ldots,a_n)
$$

i:

$$
\min(b_1,b_2,\ldots,b_n)
$$

Si:

$$
\max(a_1,\ldots,a_n)>\min(b_1,\ldots,b_n)
$$

la intersecció és buida.

Si tots dos valors són iguals, la intersecció pot ser el conjunt format per aquest únic punt, però només si tots els intervals contenen aquest punt.

## 16. Intersecció i desigualtats

La intersecció apareix constantment en resoldre sistemes de desigualtats.

Per exemple:

$$
x\geq2
$$

i:

$$
x<7
$$

Les solucions de la primera desigualtat són:

$$
[2,\infty)
$$

Les solucions de la segona són:

$$
(-\infty,7)
$$

Per tant:

$$
[2,\infty)\cap(-\infty,7)=[2,7)
$$

La solució del sistema és:

$$
\boxed{x\in[2,7)}
$$

## 17. Sistemes de desigualtats

Considerem:

$$
\begin{cases}
x>1\\
x\leq5
\end{cases}
$$

Cada desigualtat defineix un interval:

$$
(1,\infty)
$$

i:

$$
(-\infty,5]
$$

La seva intersecció és:

$$
\boxed{(1,5]}
$$

Per tant:

$$
\boxed{1<x\leq5}
$$

## 18. Intersecció de solucions

Quan un problema conté diverses condicions simultànies, hem d'utilitzar la intersecció.

Per exemple:

$$
x\geq-2
$$

$$
x<4
$$

$$
x\neq1
$$

Les dues primeres condicions produeixen:

$$
[-2,4)
$$

La tercera condició elimina $1$:

$$
[-2,1)\cup(1,4)
$$

Per tant:

$$
\boxed{x\in[-2,1)\cup(1,4)}
$$

## 19. Diferència entre intersecció i unió

És important distingir:

$$
\cap
$$

de:

$$
\cup
$$

La **intersecció** representa els elements comuns:

$$
A\cap B
$$

La **unió** representa els elements que pertanyen a $A$, a $B$ o a tots dos:

$$
A\cup B
$$

Per exemple:

$$
A=[1,5]
$$

$$
B=[4,8]
$$

Aleshores:

$$
A\cap B=[4,5]
$$

mentre que:

$$
A\cup B=[1,8]
$$

## 20. Mètode ràpid

Per intersectar dos intervals:

1. Busca el més gran dels extrems esquerres.
2. Busca el més petit dels extrems drets.
3. Comprova si existeix solapament.
4. Decideix si cada extrem està inclòs.
5. Escriu l'interval resultant.

### Exemple

$$
A=(-2,7]
$$

$$
B=[3,10)
$$

Extrem esquerre:

$$
\max(-2,3)=3
$$

Extrem dret:

$$
\min(7,10)=7
$$

El $3$ està inclòs en $B$ però no en $A$.

El $7$ està inclòs en tots dos.

Per tant:

$$
\boxed{A\cap B=(3,7]}
$$

## 21. Procediment per a sistemes de desigualtats

Quan tenim diverses desigualtats:

1. Resol cada desigualtat per separat.
2. Converteix cada conjunt de solucions en un interval.
3. Intersecta tots els intervals.
4. Comprova els extrems.
5. Escriu la solució final.

### Exemple complet

Resoldre:

$$
\begin{cases}
2x-4\geq0\\
3x+6<18
\end{cases}
$$

Primera desigualtat:

$$
2x\geq4
$$

$$
x\geq2
$$

Per tant:

$$
x\in[2,\infty)
$$

Segona desigualtat:

$$
3x<12
$$

$$
x<4
$$

Per tant:

$$
x\in(-\infty,4)
$$

Intersectem:

$$
[2,\infty)\cap(-\infty,4)
$$

i obtenim:

$$
\boxed{x\in[2,4)}
$$

## 22. Intersecció d'intervals amb extrems iguals

Els extrems iguals requereixen una atenció especial.

Per exemple:

$$
[1,5)\cap[5,9]
$$

El primer interval no conté $5$:

$$
5\notin[1,5)
$$

Per tant:

$$
\boxed{[1,5)\cap[5,9]=\varnothing}
$$

En canvi:

$$
[1,5]\cap[5,9]=\{5\}
$$

## 23. Propietats de la intersecció

### Commutativa

$$
A\cap B=B\cap A
$$

L'ordre no importa.

### Associativa

$$
(A\cap B)\cap C=A\cap(B\cap C)
$$

Podem agrupar els intervals de diferents maneres.

### Idempotent

$$
A\cap A=A
$$

Intersectar un conjunt amb ell mateix no el modifica.

### Conjunt buit

$$
A\cap\varnothing=\varnothing
$$

El conjunt buit no té elements comuns amb cap conjunt.

## 24. Intersecció i subconjunts

Si:

$$
A\subseteq B
$$

aleshores:

$$
A\cap B=A
$$

Per exemple:

$$
[3,5]\subseteq[1,10]
$$

i per tant:

$$
[3,5]\cap[1,10]=[3,5]
$$

## 25. Errors freqüents

### Confondre intersecció amb unió

Per a condicions simultànies utilitzem:

$$
\cap
$$

i no:

$$
\cup
$$

### Escollir incorrectament l'extrem esquerre

En una intersecció hem d'escollir el **més gran** dels extrems esquerres.

### Escollir incorrectament l'extrem dret

Hem d'escollir el **més petit** dels extrems drets.

### Ignorar els parèntesis i claudàtors

Els extrems poden estar inclosos en un interval i exclosos en un altre.

### Incloure un extrem que algun interval exclou

En una intersecció, un extrem només s'inclou si pertany a tots els intervals corresponents.

### Incloure l'infinit

Mai escrivim:

$$
[a,\infty]
$$

Cal escriure:

$$
[a,\infty)
$$

## 26. Resum

| Situació                | Resultat                                |
| ----------------------- | --------------------------------------- |
| Intersecció             | Elements comuns                         |
| Símbol                  | $\cap$                                  |
| Extrem esquerre         | Més gran dels extrems esquerres         |
| Extrem dret             | Més petit dels extrems drets            |
| Sense solapament        | $\varnothing$                           |
| Condicions simultànies  | Intersecció                             |
| Condicions alternatives | Unió                                    |
| Extrem inclòs           | Ha d'estar inclòs en tots els intervals |
| Infinit                 | Sempre amb parèntesis                   |

Per a dos intervals:

$$
[a,b]\cap[c,d]
$$

l'interval comú s'obté prenent:

$$
\max(a,c)
$$

com a extrem esquerre i:

$$
\min(b,d)
$$

com a extrem dret, sempre que hi hagi solapament.

## 27. Idea fonamental

La intersecció representa allò que **totes les condicions tenen en comú**.

Si:

$$
x\in A
$$

i:

$$
x\in B
$$

aleshores:

$$
x\in A\cap B
$$

Per això, quan resolem diverses desigualtats que s'han de complir simultàniament, busquem la intersecció dels seus conjunts de solucions:

$$
\boxed{\text{solució conjunta}=\text{intersecció de les solucions}}
$$
