# Continuïtat d'una funció

La **continuïtat** descriu si una funció es pot recórrer sense salts, forats o interrupcions en un punt o en un interval.

Intuïtivament, una funció és contínua quan la seva gràfica no presenta cap ruptura.

## Continuïtat en un punt

Una funció $f(x)$ és contínua en $x=a$ si es compleixen simultàniament aquestes tres condicions:

1. $f(a)$ està definida.
2. Existeix el límit $\lim_{x\to a}f(x)$.
3. El límit coincideix amb el valor de la funció:

$$
\boxed{\lim_{x\to a}f(x)=f(a)}
$$

Per tant:

$$
\boxed{
f \text{ és contínua en }a
\iff
\lim_{x\to a}f(x)=f(a)
}
$$

## Exemple

Considerem:

$$
f(x)=x^2+1
$$

En $x=2$:

$$
f(2)=2^2+1=5
$$

I:

$$
\lim_{x\to2}(x^2+1)=5
$$

Per tant:

$$
\boxed{\lim_{x\to2}f(x)=f(2)=5}
$$

La funció és contínua en $x=2$.

## Continuïtat lateral

En funcions definides a trossos o als extrems d'un interval cal estudiar els límits laterals.

El límit per l'esquerra és:

$$
\lim_{x\to a^-}f(x)
$$

i el límit per la dreta és:

$$
\lim_{x\to a^+}f(x)
$$

Perquè existeixi el límit:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
}
$$

Perquè hi hagi continuïtat:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$

## Continuïtat en un interval

Una funció és contínua en un interval obert $(a,b)$ si és contínua en tots els punts de l'interval.

$$
\boxed{
f \text{ contínua en }(a,b)
\iff
\forall x\in(a,b),\
\lim_{t\to x}f(t)=f(x)
}
$$

En un interval tancat $[a,b]$ també cal continuïtat lateral als extrems:

$$
\lim_{x\to a^+}f(x)=f(a)
$$

i

$$
\lim_{x\to b^-}f(x)=f(b)
$$

## Tipus de discontinuïtat

### Discontinuïtat evitable

El límit existeix, però la funció no està definida en el punt o té un valor diferent.

Per exemple:

$$
f(x)=\frac{x^2-1}{x-1}
$$

Factoritzant:

$$
f(x)=x+1
\qquad x\neq1
$$

En $x=1$ la funció original no està definida, però:

$$
\lim_{x\to1}f(x)=2
$$

Hi ha un forat a la gràfica.

$$
\boxed{\text{Discontinuïtat evitable en }x=1}
$$

### Discontinuïtat de salt

Els límits laterals existeixen però són diferents:

$$
\lim_{x\to a^-}f(x)
\neq
\lim_{x\to a^+}f(x)
$$

Per tant, el límit no existeix.

$$
\boxed{\text{Discontinuïtat de salt}}
$$

### Discontinuïtat infinita

La funció creix sense límit quan s'aproxima al punt:

$$
\lim_{x\to a}f(x)=\pm\infty
$$

Normalment apareix una asímptota vertical.

$$
\boxed{\text{Discontinuïtat infinita}}
$$

### Discontinuïtat oscil·latòria

La funció oscil·la cada vegada més ràpidament i el límit no existeix.

Un exemple típic és:

$$
f(x)=\sin\left(\frac{1}{x}\right)
$$

quan $x\to0$.

$$
\boxed{
\lim_{x\to0}\sin\left(\frac{1}{x}\right)
\text{ no existeix}
}
$$

## Continuïtat de funcions habituals

Moltes funcions conegudes són contínues en tot el seu domini.

### Polinomis

Tot polinomi és continu en $\mathbb{R}$:

$$
\boxed{
p(x)\text{ polinomi}
\Rightarrow
p\text{ és continu en }\mathbb{R}
}
$$

### Funcions racionals

Una funció racional

$$
f(x)=\frac{p(x)}{q(x)}
$$

és contínua on $q(x)\neq0$.

$$
\boxed{
f(x)=\frac{p(x)}{q(x)}
\text{ és contínua on }q(x)\neq0
}
$$

### Funcions exponencials

$$
f(x)=a^x
\qquad a>0
$$

és contínua en tot $\mathbb{R}$.

### Funcions logarítmiques

$$
f(x)=\log_a(x)
\qquad a>0,\ a\neq1
$$

és contínua en el seu domini:

$$
\boxed{x>0}
$$

### Funcions trigonomètriques

$\sin(x)$ i $\cos(x)$ són contínues en $\mathbb{R}$.

La funció $\tan(x)$ és contínua en tots els punts on està definida:

$$
\boxed{
x\neq\frac{\pi}{2}+k\pi,
\qquad k\in\mathbb{Z}
}
$$

## Continuïtat de funcions definides a trossos

Considerem:

$$
f(x)=
\begin{cases}
x+1 & x<2\\
5 & x=2\\
x^2-3 & x>2
\end{cases}
$$

Per estudiar la continuïtat en $x=2$:

$$
\lim_{x\to2^-}f(x)=3
$$

$$
\lim_{x\to2^+}f(x)=1
$$

Com que:

$$
3\neq1
$$

el límit no existeix i la funció no és contínua en $x=2$.

$$
\boxed{\text{f no és contínua en }x=2}
$$

## Operacions amb funcions contínues

Si $f$ i $g$ són contínues en $a$, també són contínues:

- $f+g$
- $f-g$
- $fg$
- $\frac{f}{g}$, sempre que $g(a)\neq0$
- les composicions $f\circ g$, quan estan definides

Per exemple:

$$
f(x)=x^2
$$

i

$$
g(x)=\sin(x)
$$

són contínues, per tant:

$$
h(x)=\sin(x^2)
$$

també és contínua en $\mathbb{R}$.

## Teorema del valor intermedi

Si una funció és contínua en $[a,b]$, pren tots els valors compresos entre $f(a)$ i $f(b)$.

Si:

$$
f(a)<L<f(b)
$$

aleshores existeix almenys un $c\in(a,b)$ tal que:

$$
\boxed{f(c)=L}
$$

Aquest resultat és especialment útil per demostrar l'existència de solucions.

### Aplicació a les arrels

Si $f$ és contínua en $[a,b]$ i:

$$
f(a)\cdot f(b)<0
$$

aleshores existeix almenys un $c\in(a,b)$ tal que:

$$
\boxed{f(c)=0}
$$

Aquest resultat es coneix com una conseqüència del **teorema de Bolzano**.

## Com estudiar la continuïtat

Per estudiar la continuïtat d'una funció en $x=a$:

1. Comprova que $f(a)$ està definida.
2. Calcula $\lim_{x\to a^-}f(x)$.
3. Calcula $\lim_{x\to a^+}f(x)$.
4. Comprova que els límits laterals coincideixen.
5. Compara el límit amb $f(a)$.
6. Classifica la discontinuïtat si no és contínua.

En resum:

$$
\boxed{
\text{Continuïtat en }a
\iff
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::
