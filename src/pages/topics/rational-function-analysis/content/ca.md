# Anàlisi de funcions racionals

Una **funció racional** és una funció que es pot escriure com el quocient de dos polinomis:

$$
f(x)=\frac{P(x)}{Q(x)}
$$

on $P(x)$ i $Q(x)$ són polinomis i $Q(x)\neq0$.

Per exemple:

$$
f(x)=\frac{x+1}{x-2}
$$

Les funcions racionals són especialment importants perquè permeten estudiar **domini, discontinuïtats, asímptotes, límits i comportament a l'infinit**.

## 1. Domini

El denominador mai pot ser zero. Per tant, per determinar el domini hem de resoldre:

$$
Q(x)=0
$$

Per exemple:

$$
f(x)=\frac{x+1}{x-2}
$$

El denominador s'anul·la quan:

$$
x-2=0
$$

per tant, $x=2$ no pertany al domini.

Així:

$$
D_f=\mathbb{R}\setminus\{2\}
$$

:::function-graph{expression="(x+1)/(x-2)" restriction="-8<=x<=8"}
:::

## 2. Zeros de la funció

Els zeros d'una funció racional s'obtenen igualant a zero el numerador:

$$
P(x)=0
$$

sempre que el valor obtingut no anul·li també el denominador.

Per exemple:

$$
f(x)=\frac{x-3}{x+2}
$$

El numerador s'anul·la en:

$$
x=3
$$

Per tant, la funció té un zero en $x=3$ i talla l'eix $x$ en:

$$
(3,0)
$$

## 3. Intersecció amb l'eix $y$

Per trobar la intersecció amb l'eix $y$, calculem $f(0)$, sempre que $0$ pertanyi al domini.

Per exemple:

$$
f(x)=\frac{x+1}{x-2}
$$

Aleshores:

$$
f(0)=\frac{1}{-2}=-\frac12
$$

La intersecció amb l'eix $y$ és:

$$
\left(0,-\frac12\right)
$$

## 4. Discontinuïtats

Una funció racional no està definida en els valors que fan zero el denominador.

Hi ha dues situacions principals:

- **Discontinuïtat evitable**, quan un factor es pot simplificar.
- **Asímptota vertical**, quan el factor continua al denominador després de simplificar.

Per exemple:

$$
f(x)=\frac{(x-1)(x+2)}{(x-1)(x-3)}
$$

Podem simplificar:

$$
f(x)=\frac{x+2}{x-3}
$$

però $x=1$ continua exclòs del domini original.

Per tant:

- $x=1$ és una discontinuïtat evitable.
- $x=3$ és una possible asímptota vertical.

## 5. Asímptotes verticals

Les asímptotes verticals apareixen en els valors on el denominador s'anul·la i el factor no es pot cancel·lar.

Si:

$$
Q(a)=0
$$

i el factor corresponent no es simplifica, aleshores normalment:

$$
x=a
$$

és una asímptota vertical.

Per exemple:

$$
f(x)=\frac{1}{x-2}
$$

té l'asímptota vertical:

$$
x=2
$$

## 6. Asímptota horitzontal

Per determinar l'asímptota horitzontal podem comparar els graus del numerador i del denominador.

Sigui:

$$
f(x)=\frac{P(x)}{Q(x)}
$$

### Grau del numerador menor

Si:

$$
\deg(P)<\deg(Q)
$$

aleshores:

$$
\lim_{x\to\pm\infty}f(x)=0
$$

i l'asímptota horitzontal és:

$$
y=0
$$

### Mateix grau

Si:

$$
\deg(P)=\deg(Q)
$$

l'asímptota horitzontal és el quocient entre els coeficients principals.

Per exemple:

$$
f(x)=\frac{2x^2+1}{x^2-3}
$$

Aleshores:

$$
y=2
$$

### Grau del numerador més gran

Si:

$$
\deg(P)>\deg(Q)
$$

no existeix una asímptota horitzontal.

Pot existir una asímptota obliqua o polinòmica.

## 7. Asímptota obliqua

Quan el grau del numerador és exactament un més que el del denominador, pot existir una asímptota obliqua.

Per exemple:

$$
f(x)=\frac{x^2+1}{x-1}
$$

Dividint els polinomis:

$$
\frac{x^2+1}{x-1}=x+1+\frac{2}{x-1}
$$

Quan $x$ tendeix a $\pm\infty$:

$$
\frac{2}{x-1}\to0
$$

Per tant, l'asímptota obliqua és:

$$
y=x+1
$$

## 8. Límits en les discontinuïtats

Els límits permeten estudiar què passa quan ens acostem a una discontinuïtat.

Per exemple:

$$
f(x)=\frac{1}{x-2}
$$

Quan $x$ s'aproxima a $2$ per l'esquerra:

$$
\lim_{x\to2^-}\frac{1}{x-2}=-\infty
$$

Mentre que per la dreta:

$$
\lim_{x\to2^+}\frac{1}{x-2}=+\infty
$$

Per tant:

$$
\lim_{x\to2}f(x)
$$

no existeix com a límit finit i $x=2$ és una asímptota vertical.

## 9. Signe d'una funció racional

Per estudiar el signe hem de trobar:

1. Els zeros del numerador.
2. Els zeros del denominador.
3. Els intervals determinats per aquests valors.
4. El signe de la funció en cada interval.

Per exemple:

$$
f(x)=\frac{x-1}{x+2}
$$

Els valors importants són:

$$
x=1
$$

i:

$$
x=-2
$$

Aquests valors divideixen la recta real en tres intervals:

$$
(-\infty,-2),\quad(-2,1),\quad(1,\infty)
$$

A partir d'aquests intervals podem construir una taula de signes.

## 10. Monotonia

Per estudiar la monotonia calculem la derivada:

$$
f'(x)
$$

Els punts crítics s'obtenen resolent:

$$
f'(x)=0
$$

També hem de tenir en compte els punts on la funció no està definida.

Per exemple:

$$
f(x)=\frac{1}{x}
$$

té:

$$
f'(x)=-\frac{1}{x^2}
$$

Com que:

$$
f'(x)<0
$$

per a tot $x\neq0$, la funció és decreixent en:

$$
(-\infty,0)
$$

i:

$$
(0,\infty)
$$

## 11. Simetria

Podem estudiar la simetria calculant $f(-x)$.

Una funció és **parella** si:

$$
f(-x)=f(x)
$$

i és simètrica respecte de l'eix $y$.

Una funció és **senar** si:

$$
f(-x)=-f(x)
$$

i és simètrica respecte de l'origen.

Per exemple:

$$
f(x)=\frac{1}{x}
$$

és senar perquè:

$$
f(-x)=-f(x)
$$

## 12. Comportament a l'infinit

També hem d'estudiar:

$$
\lim_{x\to+\infty}f(x)
$$

i:

$$
\lim_{x\to-\infty}f(x)
$$

Aquests límits permeten identificar les asímptotes horitzontals i comprendre com es comporta la funció lluny de l'origen.

## 13. Exemple complet

Considerem:

$$
f(x)=\frac{x+1}{x-2}
$$

### Domini

$$
D_f=\mathbb{R}\setminus\{2\}
$$

### Zero

$$
x+1=0
$$

per tant:

$$
x=-1
$$

### Intersecció amb l'eix $y$

$$
f(0)=-\frac12
$$

### Asímptota vertical

$$
x=2
$$

### Asímptota horitzontal

Els graus del numerador i del denominador són iguals. Els coeficients principals són tots dos $1$:

$$
y=1
$$

:::function-graph{expression="(x+1)/(x-2)" restriction="-8<=x<=8"}
:::

## 14. Procediment d'anàlisi

Per analitzar una funció racional de manera sistemàtica:

1. Factoritza el numerador i el denominador.
2. Determina el domini.
3. Simplifica els factors comuns, conservant les restriccions originals.
4. Troba els zeros.
5. Calcula la intersecció amb l'eix $y$.
6. Identifica les discontinuïtats.
7. Determina les asímptotes verticals.
8. Estudia les asímptotes horitzontals o obliqües.
9. Calcula els límits rellevants.
10. Estudia el signe.
11. Calcula la derivada i estudia la monotonia.
12. Determina els extrems relatius.
13. Estudia la simetria.
14. Representa gràficament la funció.

## Resum

Una funció racional té la forma:

$$
f(x)=\frac{P(x)}{Q(x)}
$$

i el seu anàlisi requereix prestar especial atenció als zeros del denominador.
