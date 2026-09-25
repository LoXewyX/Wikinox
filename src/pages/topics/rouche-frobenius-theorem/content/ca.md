# Teorema de Rouché-Frobenius

El **teorema de Rouché-Frobenius** permet determinar si un sistema d'equacions lineals té:

- cap solució,
- una única solució, o
- infinites solucions.

Es basa en comparar el **rang de la matriu de coeficients** amb el **rang de la matriu ampliada**.

---

## 1. Sistemes d'equacions lineals

Considerem un sistema de $m$ equacions lineals amb $n$ incògnites:

$$
\begin{cases}
a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=b_1\\
a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=b_2\\
\vdots\\
a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n=b_m
\end{cases}
$$

Es pot escriure en forma matricial com:

$$
\boxed{A\mathbf{x}=\mathbf{b}}
$$

on:

- $A$ és la **matriu de coeficients**,
- $\mathbf{x}$ és el vector d'incògnites,
- $\mathbf{b}$ és el vector de termes independents.

Per exemple:

$$
\begin{cases}
x+y=3\\
2x-y=0
\end{cases}
$$

es pot escriure com:

$$
\begin{pmatrix}
1&1\\
2&-1
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
3\\
0
\end{pmatrix}
$$

---

## 2. Matriu de coeficients i matriu ampliada

La **matriu de coeficients** és:

$$
A=
\begin{pmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{m1}&a_{m2}&\cdots&a_{mn}
\end{pmatrix}
$$

La **matriu ampliada** s'obté afegint els termes independents:

$$
[A\mid\mathbf{b}]
$$

Per exemple:

$$
\begin{cases}
x+y=3\\
2x-y=0
\end{cases}
$$

té:

$$
A=
\begin{pmatrix}
1&1\\
2&-1
\end{pmatrix}
$$

i:

$$
[A\mid\mathbf{b}]
=
\left[
\begin{array}{cc|c}
1&1&3\\
2&-1&0
\end{array}
\right]
$$

El teorema compara:

$$
\boxed{\operatorname{rank}(A)}
$$

amb:

$$
\boxed{\operatorname{rank}([A\mid\mathbf{b}])}
$$

---

## 3. Enunciat del teorema de Rouché-Frobenius

Per a un sistema lineal:

$$
A\mathbf{x}=\mathbf{b}
$$

amb $n$ incògnites:

$$
\boxed{
\text{El sistema és compatible}
\iff
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid\mathbf{b}])
}
$$

Si els rangs són iguals, el sistema té almenys una solució.

El nombre de solucions depèn del valor d'aquest rang comú.

---

## 4. Classificació de les solucions

Sigui:

$$
r=\operatorname{rank}(A)
$$

i:

$$
r'=\operatorname{rank}([A\mid\mathbf{b}])
$$

Hi ha tres possibilitats.

### Cas 1: Cap solució

Si:

$$
\boxed{
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid\mathbf{b}])
}
$$

el sistema és **incompatible**.

Per tant:

$$
\boxed{\text{No té cap solució}}
$$

---

### Cas 2: Una única solució

Si:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid\mathbf{b}])
=
n
}
$$

on $n$ és el nombre d'incògnites, aleshores:

$$
\boxed{\text{Existeix una única solució}}
$$

---

### Cas 3: Infinites solucions

Si:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid\mathbf{b}])
<
n
}
$$

aleshores:

$$
\boxed{\text{Existeixen infinites solucions}}
$$

Hi ha variables lliures que poden prendre valors arbitraris.

---

## 5. Taula resum

| Condició                                                    | Nombre de solucions |
| ----------------------------------------------------------- | ------------------- |
| $\operatorname{rank}(A)<\operatorname{rank}([A\mid b])$   | Cap                 |
| $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=n$ | Una                 |
| $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])<n$ | Infinites           |

La condició fonamental és:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
}
$$

Aquesta determina si el sistema és **compatible**.

---

## 6. Exemple: una única solució

Considerem:

$$
\begin{cases}
x+y=3\\
2x-y=0
\end{cases}
$$

La matriu de coeficients és:

$$
A=
\begin{pmatrix}
1&1\\
2&-1
\end{pmatrix}
$$

La matriu ampliada és:

$$
[A\mid b]
=
\left[
\begin{array}{cc|c}
1&1&3\\
2&-1&0
\end{array}
\right]
$$

Reduint per files:

$$
\left[
\begin{array}{cc|c}
1&1&3\\
0&-3&-6
\end{array}
\right]
$$

Per tant:

$$
\operatorname{rank}(A)=2
$$

i:

$$
\operatorname{rank}([A\mid b])=2
$$

Hi ha $n=2$ incògnites.

Així:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
=
2
}
$$

El sistema té una única solució.

Resolent:

$$
y=2
$$

i:

$$
x=1
$$

Per tant:

$$
\boxed{(x,y)=(1,2)}
$$

---

## 7. Exemple: cap solució

Considerem:

$$
\begin{cases}
x+y=2\\
2x+2y=5
\end{cases}
$$

La matriu ampliada és:

$$
\left[
\begin{array}{cc|c}
1&1&2\\
2&2&5
\end{array}
\right]
$$

Fem:

$$
F_2\rightarrow F_2-2F_1
$$

i obtenim:

$$
\left[
\begin{array}{cc|c}
1&1&2\\
0&0&1
\end{array}
\right]
$$

Per tant:

$$
\operatorname{rank}(A)=1
$$

mentre que:

$$
\operatorname{rank}([A\mid b])=2
$$

Així:

$$
\boxed{
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid b])
}
$$

El sistema:

$$
\boxed{\text{no té cap solució}}
$$

La segona fila representa:

$$
0=1
$$

cosa que és impossible.

---

## 8. Exemple: infinites solucions

Considerem:

$$
\begin{cases}
x+y+z=3\\
2x+2y+2z=6
\end{cases}
$$

La matriu ampliada és:

$$
\left[
\begin{array}{ccc|c}
1&1&1&3\\
2&2&2&6
\end{array}
\right]
$$

Fem:

$$
F_2\rightarrow F_2-2F_1
$$

i obtenim:

$$
\left[
\begin{array}{ccc|c}
1&1&1&3\\
0&0&0&0
\end{array}
\right]
$$

Per tant:

$$
\operatorname{rank}(A)=1
$$

i:

$$
\operatorname{rank}([A\mid b])=1
$$

Hi ha:

$$
n=3
$$

incògnites.

Així:

$$
1=1<3
$$

i, per tant:

$$
\boxed{\text{Existeixen infinites solucions}}
$$

Podem escollir dues variables lliurement.

Per exemple:

$$
y=s,\qquad z=t
$$

Aleshores:

$$
x+s+t=3
$$

i:

$$
x=3-s-t
$$

Per tant:

$$
\boxed{
(x,y,z)=(3-s-t,s,t)
}
$$

on $s,t\in\mathbb{R}$.

---

## 9. Interpretació geomètrica

Per a sistemes amb dues incògnites, cada equació lineal representa una recta.

Hi ha tres possibilitats.

### Una única solució

Dues rectes es tallen en un únic punt:

$$
\boxed{\text{Una solució}}
$$

### Cap solució

Dues rectes paral·leles diferents no es tallen mai:

$$
\boxed{\text{Cap solució}}
$$

### Infinites solucions

Les dues equacions representen la mateixa recta:

$$
\boxed{\text{Infinites solucions}}
$$

Les condicions sobre els rangs descriuen algebraicament aquestes situacions geomètriques.

---

## 10. Interpretació en tres dimensions

Per a tres incògnites, cada equació representa un pla.

Un sistema pot tenir:

- un únic punt d'intersecció,
- cap intersecció comuna,
- una recta d'interseccions,
- o, en casos degenerats, tot un pla de solucions.

Les condicions de rang permeten determinar quina d'aquestes situacions es produeix.

---

## 11. Nombre de variables lliures

Si el sistema és compatible:

$$
\boxed{
\text{Nombre de variables lliures}
=
n-\operatorname{rank}(A)
}
$$

on $n$ és el nombre d'incògnites.

Per exemple, si:

$$
n=5
$$

i:

$$
\operatorname{rank}(A)=3
$$

aleshores:

$$
5-3=2
$$

variables són lliures.

Per tant, un sistema compatible té infinites solucions amb dos graus de llibertat.

---

## 12. Dimensió del conjunt de solucions

Per a un sistema compatible:

$$
A\mathbf{x}=\mathbf{b}
$$

la dimensió del conjunt de solucions és:

$$
\boxed{
n-\operatorname{rank}(A)
}
$$

Per tant:

|       Rang | Nombre d'incògnites | Conjunt de solucions |
| ---------: | ------------------: | -------------------- |
|      $n$ |               $n$ | Un punt              |
|    $n-1$ |               $n$ | 1-dimensional        |
|    $n-2$ |               $n$ | 2-dimensional        |
| $\vdots$ |               $n$ | $\vdots$           |
|      $0$ |               $n$ | $n$-dimensional    |

Això s'aplica quan el sistema és compatible.

---

## 13. Sistemes homogenis

Un sistema homogeni té la forma:

$$
\boxed{A\mathbf{x}=\mathbf{0}}
$$

Per exemple:

$$
\begin{cases}
x+y=0\\
2x+2y=0
\end{cases}
$$

Un sistema homogeni és **sempre compatible**, perquè:

$$
\mathbf{x}=\mathbf{0}
$$

sempre és una solució.

Per tant:

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid0])
}
$$

El sistema homogeni té:

- únicament la solució trivial si $\operatorname{rank}(A)=n$,
- infinites solucions si $\operatorname{rank}(A)<n$.

---

## 14. Relació amb la invertibilitat

Per a una matriu quadrada $A\in\mathbb{R}^{n\times n}$:

$$
\boxed{
A\text{ és invertible}
\iff
\operatorname{rank}(A)=n
}
$$

Equivalentment:

$$
\boxed{
A\text{ és invertible}
\iff
\det(A)\neq0
}
$$

Per tant:

$$
\boxed{
\det(A)\neq0
\iff
\operatorname{rank}(A)=n
\iff
A^{-1}\text{ existeix}
}
$$

En aquest cas, tot sistema:

$$
A\mathbf{x}=\mathbf{b}
$$

té exactament una solució.

---

## 15. Relació amb el determinant

Per a una matriu quadrada $n\times n$:

$$
\det(A)\neq0
$$

implica:

$$
\operatorname{rank}(A)=n
$$

Per tant, per a:

$$
A\mathbf{x}=\mathbf{b}
$$

tenim:

$$
\boxed{\text{Una única solució}}
$$

per a qualsevol vector $\mathbf{b}$.

Si:

$$
\det(A)=0
$$

aleshores:

$$
\operatorname{rank}(A)<n
$$

i el sistema pot tenir:

- cap solució, o
- infinites solucions.

El determinant per si sol **no permet distingir** entre aquests dos casos.

Cal analitzar la matriu ampliada.

---

## 16. Rouché-Frobenius i eliminació de Gauss

L'eliminació de Gauss permet determinar tots dos rangs.

Comencem amb:

$$
[A\mid b]
$$

i apliquem operacions elementals per files.

Per exemple:

$$
[A\mid b]
\longrightarrow
\text{forma esglaonada}
$$

El nombre de files no nul·les de la part de coeficients proporciona:

$$
\operatorname{rank}(A)
$$

El nombre de files no nul·les de tota la matriu ampliada proporciona:

$$
\operatorname{rank}([A\mid b])
$$

Per això, l'eliminació de Gauss és un dels mètodes més pràctics per aplicar el teorema.

---

## 17. La fila contradictòria

Una situació especialment important és:

$$
\left[
\begin{array}{cccc|c}
0&0&\cdots&0&c
\end{array}
\right]
$$

on:

$$
c\neq0
$$

Això representa:

$$
\boxed{0=c}
$$

cosa que és impossible.

Per tant:

$$
\boxed{\text{El sistema no té cap solució}}
$$

Això correspon a:

$$
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid b])
$$

---

## 18. Procediment pràctic

Per determinar el nombre de solucions:

### Pas 1 — Escriure la matriu de coeficients

$$
A
$$

### Pas 2 — Escriure la matriu ampliada

$$
[A\mid b]
$$

### Pas 3 — Aplicar l'eliminació de Gauss

Reduir la matriu ampliada a forma esglaonada.

### Pas 4 — Determinar els rangs

Comptar les files no nul·les de:

$$
A
$$

i:

$$
[A\mid b]
$$

### Pas 5 — Comparar els rangs

Si:

$$
\operatorname{rank}(A)
<
\operatorname{rank}([A\mid b])
$$

aleshores:

$$
\boxed{\text{Cap solució}}
$$

Si:

$$
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
=
n
$$

aleshores:

$$
\boxed{\text{Una única solució}}
$$

Si:

$$
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
<
n
$$

aleshores:

$$
\boxed{\text{Infinites solucions}}
$$

---

## 19. Teorema fonamental

Per a un sistema:

$$
A\mathbf{x}=\mathbf{b}
$$

amb $n$ incògnites:

$$
\boxed{
\begin{aligned}
\operatorname{rank}(A)
&<
\operatorname{rank}([A\mid b])
&&\Longrightarrow \text{cap solució}\\[4pt]
\operatorname{rank}(A)
&=
\operatorname{rank}([A\mid b])
=
n
&&\Longrightarrow \text{una solució}\\[4pt]
\operatorname{rank}(A)
&=
\operatorname{rank}([A\mid b])
<
n
&&\Longrightarrow \text{infinites solucions}
\end{aligned}
}
$$

---

## 20. Idees clau

| Concepte                   | Resultat                                                  |
| -------------------------- | --------------------------------------------------------- |
| Matriu de coeficients      | $A$                                                     |
| Matriu ampliada            | $[A\mid b]$                                             |
| Sistema compatible         | $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])$ |
| Cap solució                | $\operatorname{rank}(A)<\operatorname{rank}([A\mid b])$ |
| Una única solució          | Tots dos rangs són $n$                                  |
| Infinites solucions        | Tots dos rangs són iguals i menors que $n$              |
| Variables lliures          | $n-\operatorname{rank}(A)$                              |
| Sistema homogeni           | $A\mathbf{x}=0$                                         |
| Sistema homogeni           | Sempre compatible                                         |
| Matriu quadrada invertible | $\operatorname{rank}(A)=n$                              |
| Matriu quadrada invertible | $\det(A)\neq0$                                          |

## Relació fonamental

$$
\boxed{
\operatorname{rank}(A)
=
\operatorname{rank}([A\mid b])
\iff
A\mathbf{x}=\mathbf{b}
\text{ té almenys una solució}
}
$$

I, per a $n$ incògnites:

$$
\boxed{
\begin{array}{c}
\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=n
\\[2pt]
\Downarrow
\\[2pt]
\text{Una única solució}
\end{array}
}
$$

$$
\boxed{
\begin{array}{c}
\operatorname{rank}(A)=\operatorname{rank}([A\mid b])<n
\\[2pt]
\Downarrow
\\[2pt]
\text{Infinites solucions}
\end{array}
}
$$

$$
\boxed{
\begin{array}{c}
\operatorname{rank}(A)<\operatorname{rank}([A\mid b])
\\[2pt]
\Downarrow
\\[2pt]
\text{Cap solució}
\end{array}
}
$$
