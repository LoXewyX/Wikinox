# Sistemes indeterminats

Un sistema d'equacions és **indeterminat** quan té infinites solucions. Això passa quan les equacions no proporcionen prou restriccions independents per determinar un únic valor per a totes les incògnites.

## 1. Definició

Considerem un sistema lineal:

$$
A\mathbf{x}=\mathbf{b}
$$

Un sistema és indeterminat quan té infinites solucions.

Per exemple:

$$
\begin{cases}
x+y=5\\
2x+2y=10
\end{cases}
$$

La segona equació és simplement el doble de la primera, de manera que totes dues representen la mateixa restricció.

El sistema es redueix a:

$$
x+y=5
$$

Per tant, podem escollir lliurement una de les variables.

Si

$$
y=t
$$

aleshores

$$
x=5-t
$$

i totes les solucions es poden escriure com

$$
(x,y)=(5-t,t),
\qquad t\in\mathbb{R}
$$

## 2. Representació geomètrica

En dues variables, cada equació lineal representa una recta.

Per al sistema

$$
\begin{cases}
x+y=5\\
2x+2y=10
\end{cases}
$$

les dues equacions representen exactament la mateixa recta.

Per tant, tots els punts d'aquesta recta són solucions.

:::function-graph{expression="5-x" restriction="-5<=x<=10"}
:::

Un sistema determinat tindria un únic punt d'intersecció, mentre que un sistema incompatible no tindria cap punt d'intersecció.

## 3. Dependència entre equacions

La causa fonamental d'un sistema indeterminat és que les equacions no són totes independents.

Per exemple:

$$
\begin{cases}
x+y+z=6\\
2x+2y+2z=12
\end{cases}
$$

La segona equació és el doble de la primera.

Per tant, només existeix una restricció independent per a tres incògnites.

Podem prendre dues variables com a paràmetres:

$$
y=s,\qquad z=t
$$

Aleshores:

$$
x=6-s-t
$$

i la solució general és

$$
(x,y,z)=(6-s-t,s,t)
$$

amb

$$
s,t\in\mathbb{R}
$$

## 4. Rang i nombre d'incògnites

Per a un sistema lineal

$$
A\mathbf{x}=\mathbf{b}
$$

el nombre de solucions està relacionat amb el rang de la matriu de coeficients $A$ i el nombre d'incògnites $n$.

Si el sistema és compatible i

$$
\operatorname{rank}(A)<n
$$

aleshores existeixen variables lliures i, per tant, infinites solucions.

El nombre de variables lliures és

$$
n-\operatorname{rank}(A)
$$

Per exemple, si un sistema té $5$ incògnites i

$$
\operatorname{rank}(A)=3
$$

aleshores té

$$
5-3=2
$$

variables lliures.

## 5. Forma escalonada

L'eliminació de Gauss permet identificar fàcilment les variables lliures.

Considerem:

$$
\begin{cases}
x+y+z=4\\
2x+2y+2z=8
\end{cases}
$$

La matriu augmentada és

$$
\left[
\begin{array}{ccc|c}
1&1&1&4\\
2&2&2&8
\end{array}
\right]
$$

Aplicant

$$
R_2\leftarrow R_2-2R_1
$$

obtenim

$$
\left[
\begin{array}{ccc|c}
1&1&1&4\\
0&0&0&0
\end{array}
\right]
$$

Només queda una equació independent:

$$
x+y+z=4
$$

Les variables $y$ i $z$ són lliures.

Prenent

$$
y=s,\qquad z=t
$$

obtenim

$$
x=4-s-t
$$

## 6. Diferència entre sistema determinat, indeterminat i incompatible

Per a un sistema lineal es poden donar tres situacions principals:

| Tipus        | Nombre de solucions | Interpretació                     |
| ------------ | ------------------: | --------------------------------- |
| Determinat   |                   1 | Existeix una única solució        |
| Indeterminat |           Infinites | Existeixen variables lliures      |
| Incompatible |                   0 | Les equacions són contradictòries |

En termes del rang, per a un sistema compatible:

- si $\operatorname{rank}(A)=n$, existeix una única solució;
- si $\operatorname{rank}(A)<n$, existeixen infinites solucions.

Si

$$
\operatorname{rank}(A)\neq\operatorname{rank}(A^\ast)
$$

on $A^\ast$ és la matriu augmentada, el sistema és incompatible.

## 7. Interpretació mitjançant variables lliures

Les variables lliures permeten expressar totes les solucions mitjançant paràmetres.

Per exemple:

$$
\begin{cases}
x+2y-z=3\\
x+2y-z=3
\end{cases}
$$

només conté una equació independent.

Podem escollir

$$
y=s,\qquad z=t
$$

i obtenir

$$
x=3-2s+t
$$

Per tant,

$$
(x,y,z)=(3-2s+t,s,t)
$$

amb $s,t\in\mathbb{R}$.

La solució no és un únic punt, sinó un conjunt de punts.

## 8. Interpretació geomètrica en tres dimensions

Amb tres incògnites, una equació lineal representa normalment un pla.

Si dues equacions representen el mateix pla, la seva intersecció conté infinits punts.

Si tenim:

$$
\begin{cases}
x+y+z=3\\
2x+2y+2z=6
\end{cases}
$$

ambdues equacions representen el mateix pla.

Per tant, existeixen infinites solucions.

Si hi ha tres incògnites i només una equació independent, normalment queden dues variables lliures.

## 9. Sistema homogeni

Un cas important és el sistema homogeni:

$$
A\mathbf{x}=\mathbf{0}
$$

Sempre té almenys la solució trivial:

$$
\mathbf{x}=\mathbf{0}
$$

Si

$$
\operatorname{rank}(A)<n
$$

també existeixen infinites solucions no trivials.

Per exemple:

$$
\begin{cases}
x+y+z=0\\
2x+2y+2z=0
\end{cases}
$$

podem prendre

$$
y=s,\qquad z=t
$$

i obtenir

$$
x=-s-t
$$

Per tant:

$$
\mathbf{x}
=
s
\begin{pmatrix}
-1\\
1\\
0
\end{pmatrix}
+
t
\begin{pmatrix}
-1\\
0\\
1
\end{pmatrix}
$$

Això mostra que les solucions formen un subespai vectorial.

## 10. Com identificar un sistema indeterminat

Una estratègia pràctica és:

1. Escriure la matriu augmentada.
2. Aplicar l'eliminació de Gauss.
3. Obtenir la forma escalonada.
4. Identificar les variables pivot.
5. Identificar les variables lliures.
6. Comprovar que no apareix cap contradicció.
7. Expressar les variables pivot en funció de les variables lliures.

Una fila de la forma

$$
[0\quad0\quad\cdots\quad0\mid c],
\qquad c\neq0
$$

indica que el sistema és incompatible.

Si no apareix cap contradicció i existeixen variables lliures, el sistema és indeterminat.

## 11. Exemple complet

Considerem:

$$
\begin{cases}
x+y+z=6\\
2x+2y+2z=12\\
x-y+z=2
\end{cases}
$$

La segona equació és dependent de la primera.

Restant la primera equació de la tercera:

$$
(x-y+z)-(x+y+z)=2-6
$$

obtenim:

$$
-2y=-4
$$

per tant,

$$
y=2
$$

Substituint en la primera equació:

$$
x+2+z=6
$$

i aleshores:

$$
x+z=4
$$

Podem prendre

$$
z=t
$$

i obtenir

$$
x=4-t
$$

La solució general és:

$$
(x,y,z)=(4-t,2,t),
\qquad t\in\mathbb{R}
$$

Existeix una variable lliure, $z$, per tant hi ha infinites solucions.

## 12. Sistemes sobredeterminats i subdeterminats

És important distingir entre el nombre d'equacions i el nombre d'incògnites.

Un sistema amb menys equacions que incògnites s'anomena **subdeterminat**. Pot tenir infinites solucions, però no necessàriament: també pot ser incompatible.

Un sistema amb més equacions que incògnites s'anomena **sobredeterminat**. Pot tenir una solució, cap solució o, en casos especials, infinites solucions.

Per tant, tenir menys equacions que incògnites no és suficient per concloure que un sistema és indeterminat.

## Resum

Un sistema lineal és indeterminat quan és compatible i té variables lliures.

La condició fonamental és:

$$
\operatorname{rank}(A)<n
$$

on $n$ és el nombre d'incògnites.

Les idees principals són:

- algunes equacions poden ser dependents;
- les variables lliures es poden escollir com a paràmetres;
- les variables pivot depenen de les variables lliures;
- el nombre de variables lliures és $n-\operatorname{rank}(A)$;
- un sistema indeterminat té infinites solucions;
- l'eliminació de Gauss permet identificar-lo sistemàticament.

La forma paramètrica permet descriure **totes** les solucions del sistema, no només trobar-ne una de concreta.
