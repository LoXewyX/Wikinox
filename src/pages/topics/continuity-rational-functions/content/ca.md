# Continuïtat de les funcions racionals

Una **funció racional** és una funció que es pot escriure com el quocient de dos polinomis:

$$
f(x)=\frac{p(x)}{q(x)}
$$

on $p(x)$ i $q(x)$ són polinomis i $q(x)\neq0$.

La continuïtat d'una funció racional està directament relacionada amb els valors que fan que el seu denominador sigui zero.

## Domini

Una funció racional està definida únicament quan el seu denominador és diferent de zero.

Per tant:

$$
\boxed{
D_f=\{x\in\mathbb{R}:q(x)\neq0\}
}
$$

Per exemple:

$$
f(x)=\frac{x+1}{x-2}
$$

El denominador és zero quan:

$$
x-2=0
$$

Per tant:

$$
\boxed{D_f=\mathbb{R}\setminus\{2\}}
$$

## Continuïtat

Com que els polinomis són continus en tot $\mathbb{R}$, el quocient de dos polinomis és continu allà on el denominador no sigui zero.

Per tant:

$$
\boxed{
f(x)=\frac{p(x)}{q(x)}
\text{ és contínua on }q(x)\neq0
}
$$

Una funció racional només pot ser discontínua en els valors on:

$$
q(x)=0
$$

Aquests punts s'han d'estudiar per separat.

## Exemple

Considerem:

$$
f(x)=\frac{x^2+1}{x-3}
$$

El denominador és zero en:

$$
x=3
$$

Per tant:

$$
\boxed{D_f=\mathbb{R}\setminus\{3\}}
$$

La funció és contínua en:

$$
\boxed{(-\infty,3)\cup(3,\infty)}
$$

No està definida i, per tant, no és contínua en $x=3$.

## Discontinuïtats evitables

Una discontinuïtat és **evitable** quan existeix un factor comú que es pot simplificar.

Considerem:

$$
f(x)=\frac{x^2-1}{x-1}
$$

Factoritzem el numerador:

$$
f(x)=\frac{(x-1)(x+1)}{x-1}
$$

Per a $x\neq1$:

$$
f(x)=x+1
$$

Tanmateix, la funció original continua sense estar definida en $x=1$.

El límit és:

$$
\lim_{x\to1}f(x)
=
\lim_{x\to1}(x+1)
=
2
$$

Per tant:

$$
\boxed{
\lim_{x\to1}f(x)=2
}
$$

però:

$$
f(1)\text{ no està definida}
$$

Hi ha una discontinuïtat evitable en $x=1$.

Geomètricament, la gràfica té un forat en:

$$
\boxed{(1,2)}
$$

## Discontinuïtats no evitables

Si el denominador es fa zero i el factor corresponent no es pot simplificar completament, la discontinuïtat generalment no és evitable.

Per exemple:

$$
f(x)=\frac{1}{x-2}
$$

En $x=2$:

$$
\lim_{x\to2^-}f(x)=-\infty
$$

i:

$$
\lim_{x\to2^+}f(x)=+\infty
$$

Per tant:

$$
\boxed{x=2}
$$

és una asímptota vertical i la discontinuïtat és infinita.

## Factorització i continuïtat

Factoritzar el numerador i el denominador és especialment útil per estudiar la continuïtat.

Considerem:

$$
f(x)=\frac{(x-2)(x+1)}{(x-2)(x-3)}
$$

Per a $x\neq2$:

$$
f(x)=\frac{x+1}{x-3}
$$

El factor $(x-2)$ es pot simplificar, de manera que $x=2$ produeix una discontinuïtat evitable.

Tanmateix, $x=3$ continua al denominador.

Per tant:

$$
\boxed{x=2\text{ és una discontinuïtat evitable}}
$$

i:

$$
\boxed{x=3\text{ és una discontinuïtat infinita}}
$$

El domini de la funció original és:

$$
\boxed{D_f=\mathbb{R}\setminus\{2,3\}}
$$

## Límits en les discontinuïtats

Per a cada valor $a$ que compleix:

$$
q(a)=0
$$

hem d'estudiar:

$$
\lim_{x\to a^-}f(x)
$$

i:

$$
\lim_{x\to a^+}f(x)
$$

El resultat permet classificar la discontinuïtat.

### Discontinuïtat evitable

Si:

$$
\boxed{
\lim_{x\to a}f(x)=L
}
$$

existeix i és finit, però $f(a)$ no està definida o $f(a)\neq L$, la discontinuïtat és evitable.

### Discontinuïtat infinita

Si:

$$
\boxed{
\lim_{x\to a}f(x)=\pm\infty
}
$$

hi ha una asímptota vertical.

## Intervals de continuïtat

Per determinar els intervals on una funció racional és contínua:

1. Troba els zeros del denominador.
2. Elimina aquests valors del domini.
3. Utilitza els valors restants per dividir la recta real en intervals.

Per exemple:

$$
f(x)=\frac{x+2}{(x-1)(x+3)}
$$

El denominador és zero en:

$$
x=1,\qquad x=-3
$$

Per tant:

$$
\boxed{
D_f=\mathbb{R}\setminus\{-3,1\}
}
$$

i la funció és contínua en:

$$
\boxed{
(-\infty,-3)\cup(-3,1)\cup(1,\infty)
}
$$

## Relació amb les asímptotes verticals

Un zero del denominador no implica automàticament que hi hagi una asímptota vertical.

Per exemple:

$$
f(x)=\frac{x^2-4}{x-2}
$$

Factoritzem:

$$
f(x)=\frac{(x-2)(x+2)}{x-2}
$$

Per tant:

$$
f(x)=x+2
\qquad x\neq2
$$

Hi ha un forat en $x=2$, no una asímptota vertical.

En canvi:

$$
f(x)=\frac{x+1}{x-2}
$$

no té cap factor que permeti simplificar $x-2$, de manera que:

$$
\boxed{x=2\text{ és una asímptota vertical}}
$$

## Exemple complet

Considerem:

$$
f(x)=\frac{x^2-1}{x^2-3x+2}
$$

Factoritzem:

$$
f(x)=\frac{(x-1)(x+1)}{(x-1)(x-2)}
$$

Per a $x\neq1$:

$$
f(x)=\frac{x+1}{x-2}
$$

### Domini

El denominador original és zero en:

$$
x=1,\qquad x=2
$$

Per tant:

$$
\boxed{
D_f=\mathbb{R}\setminus\{1,2\}
}
$$

### Discontinuïtat en $x=1$

El factor comú es simplifica, de manera que la discontinuïtat és evitable.

El límit és:

$$
\lim_{x\to1}f(x)
=
\frac{1+1}{1-2}
=-2
$$

Per tant:

$$
\boxed{\text{Forat en }(1,-2)}
$$

### Discontinuïtat en $x=2$

El factor $x-2$ continua al denominador.

Per tant:

$$
\boxed{x=2\text{ és una asímptota vertical}}
$$

### Continuïtat

La funció és contínua en:

$$
\boxed{
(-\infty,1)\cup(1,2)\cup(2,\infty)
}
$$

## Procediment

Per estudiar la continuïtat d'una funció racional:

1. Escriu la funció com $\frac{p(x)}{q(x)}$.
2. Resol $q(x)=0$.
3. Determina el domini.
4. Factoritza el numerador i el denominador.
5. Simplifica els factors comuns quan sigui possible.
6. Estudia el límit en cada valor exclòs.
7. Distingeix les discontinuïtats evitables de les asímptotes verticals.
8. Indica els intervals de continuïtat.

La idea fonamental és:

$$
\boxed{
\text{Una funció racional és contínua on el seu denominador és diferent de zero}
}
$$

:::function-graph{expression="(x^2-1)/(x^2-3*x+2)" restriction="-5<=x<=5"}
:::
