# Teorema del residu

El **teorema del residu** permet calcular el residu de la divisió d'un polinomi entre un binomi de la forma $x-a$ sense haver de fer tota la divisió.

És especialment útil per avaluar polinomis, comprovar arrels i factoritzar polinomis.

## 1. Divisió de polinomis

Quan dividim un polinomi $P(x)$ entre un altre polinomi $D(x)$, obtenim:

$$
P(x)=D(x)Q(x)+R(x)
$$

on:

- $P(x)$ és el **dividend**.
- $D(x)$ és el **divisor**.
- $Q(x)$ és el **quocient**.
- $R(x)$ és el **residu**.

Si el divisor és $x-a$, que té grau $1$, el residu ha de tenir grau menor que $1$. Per tant, el residu és una constant:

$$
P(x)=(x-a)Q(x)+r
$$

El teorema del residu permet obtenir directament aquest valor.

## 2. Enunciat del teorema del residu

Si un polinomi $P(x)$ es divideix entre $x-a$, el residu de la divisió és:

$$
\boxed{P(a)}
$$

És a dir:

> Per trobar el residu de dividir $P(x)$ entre $x-a$, només cal avaluar el polinomi en $x=a$.

### Exemple

Sigui:

$$
P(x)=2x^3-3x^2+4x-5
$$

Volem calcular el residu de dividir-lo entre:

$$
x-2
$$

Com que $a=2$, calculem:

$$
P(2)=2(2)^3-3(2)^2+4(2)-5
$$

$$
=16-12+8-5
$$

$$
=7
$$

Per tant, el residu és:

$$
\boxed{7}
$$

No cal fer la divisió de polinomis.

## 3. Per què funciona

Pel teorema de la divisió:

$$
P(x)=(x-a)Q(x)+r
$$

Si fem $x=a$:

$$
P(a)=(a-a)Q(a)+r
$$

Com que:

$$
a-a=0
$$

queda:

$$
P(a)=r
$$

Per això el residu coincideix exactament amb $P(a)$.

## 4. Divisor de la forma $x-a$

La forma del divisor és important.

Si tenim:

$$
x-3
$$

aleshores:

$$
a=3
$$

i el residu és:

$$
P(3)
$$

Si tenim:

$$
x+3
$$

hem d'escriure'l com:

$$
x-(-3)
$$

Per tant:

$$
a=-3
$$

i el residu és:

$$
P(-3)
$$

### Exemple

Sigui:

$$
P(x)=x^3+2x^2-x+4
$$

Volem el residu de dividir entre:

$$
x+2
$$

Com que:

$$
x+2=x-(-2)
$$

calculem:

$$
P(-2)=(-2)^3+2(-2)^2-(-2)+4
$$

$$
=-8+8+2+4
$$

$$
=6
$$

El residu és:

$$
\boxed{6}
$$

## 5. Avaluar un polinomi

El teorema del residu converteix una divisió en una simple avaluació.

Per exemple:

$$
P(x)=3x^4-2x^3+x-7
$$

Si volem el residu en dividir entre $x-1$, calculem:

$$
P(1)=3(1)^4-2(1)^3+1-7
$$

$$
=3-2+1-7
$$

$$
=-5
$$

Per tant:

$$
\boxed{r=-5}
$$

## 6. Comprovar si un nombre és una arrel

El teorema del residu permet comprovar ràpidament si un nombre $a$ és una arrel d'un polinomi.

Si:

$$
P(a)=0
$$

aleshores el residu de dividir $P(x)$ entre $x-a$ és zero.

Per tant:

$$
\boxed{P(a)=0\iff x-a\text{ divideix exactament }P(x)}
$$

i també:

$$
\boxed{P(a)=0\iff a\text{ és una arrel de }P(x)}
$$

### Exemple

Sigui:

$$
P(x)=x^3-6x^2+11x-6
$$

Comprovem si $x=2$ és una arrel:

$$
P(2)=2^3-6(2)^2+11(2)-6
$$

$$
=8-24+22-6
$$

$$
=0
$$

Per tant, $2$ és una arrel i:

$$
x-2
$$

és un factor de $P(x)$.

## 7. Relació amb el teorema del factor

El **teorema del factor** és una conseqüència directa del teorema del residu.

Si:

$$
P(a)=0
$$

aleshores el residu de dividir $P(x)$ entre $x-a$ és zero.

Per tant:

$$
x-a
$$

és un factor de $P(x)$.

La equivalència fonamental és:

$$
\boxed{P(a)=0\iff x-a\text{ és factor de }P(x)}
$$

### Exemple

Sigui:

$$
P(x)=x^3-4x^2+x+6
$$

Comprovem $a=2$:

$$
P(2)=8-16+2+6=0
$$

Per tant:

$$
x-2
$$

és un factor.

## 8. Trobar factors mitjançant el teorema del residu

Si sospitem que $a$ és una arrel, podem avaluar-lo.

Per exemple:

$$
P(x)=x^3-6x^2+11x-6
$$

Provem $x=1$:

$$
P(1)=1-6+11-6=0
$$

Per tant:

$$
x-1
$$

és un factor.

Podem dividir:

$$
P(x)\div(x-1)
$$

i obtenir:

$$
P(x)=(x-1)(x^2-5x+6)
$$

Després podem factoritzar:

$$
x^2-5x+6=(x-2)(x-3)
$$

Per tant:

$$
\boxed{P(x)=(x-1)(x-2)(x-3)}
$$

## 9. Trobar totes les arrels

El teorema del residu també pot formar part d'un procediment per trobar les arrels d'un polinomi.

### Exemple

Sigui:

$$
P(x)=x^3-6x^2+11x-6
$$

Provem possibles arrels:

$$
P(1)=0
$$

Per tant, $x-1$ és factor.

Dividim:

$$
P(x)=(x-1)(x^2-5x+6)
$$

Factoritzem el segon polinomi:

$$
x^2-5x+6=(x-2)(x-3)
$$

Així:

$$
P(x)=(x-1)(x-2)(x-3)
$$

Les arrels són:

$$
\boxed{x=1,\quad x=2,\quad x=3}
$$

## 10. Residu quan el divisor no és mònic

El teorema del residu s'aplica directament quan el divisor té la forma $x-a$.

Si el divisor és:

$$
2x-6
$$

podem escriure:

$$
2x-6=2(x-3)
$$

En aquest cas, el valor que cal avaluar és $P(3)$.

Per exemple, si:

$$
P(x)=x^2+1
$$

aleshores:

$$
P(3)=10
$$

i el residu de la divisió respecte de $2x-6$ és:

$$
\boxed{10}
$$

En general, si el divisor és:

$$
ax-b
$$

el residu és:

$$
\boxed{P\left(\frac{b}{a}\right)}
$$

## 11. Regla general per a $ax-b$

Si:

$$
P(x)
$$

es divideix entre:

$$
ax-b
$$

el valor de $x$ que anul·la el divisor és:

$$
x=\frac{b}{a}
$$

Per tant, el residu és:

$$
\boxed{P\left(\frac{b}{a}\right)}
$$

### Exemple

Sigui:

$$
P(x)=x^2+3x+1
$$

i dividim entre:

$$
2x-4
$$

Tenim:

$$
a=2,\qquad b=4
$$

Per tant:

$$
\frac{b}{a}=2
$$

Calculem:

$$
P(2)=2^2+3(2)+1=11
$$

El residu és:

$$
\boxed{11}
$$

## 12. Teorema del residu i divisió sintètica

La divisió sintètica, o regla de Ruffini, permet dividir ràpidament un polinomi entre un divisor de la forma:

$$
x-a
$$

L'últim nombre obtingut mitjançant Ruffini és precisament el residu.

### Exemple

Sigui:

$$
P(x)=x^3-4x^2+5x-2
$$

Dividim entre:

$$
x-2
$$

Fem servir $a=2$.

Els coeficients són:

$$
1,\;-4,\;5,\;-2
$$

La divisió sintètica dona un residu igual a:

$$
0
$$

Per tant:

$$
P(2)=0
$$

i $x-2$ és un factor.

## 13. Diferència entre residu i quocient

El teorema del residu permet obtenir únicament el **residu**.

Si:

$$
P(x)=(x-a)Q(x)+r
$$

el teorema proporciona:

$$
r=P(a)
$$

però no proporciona directament $Q(x)$.

Si necessitem el quocient, hem de fer una divisió de polinomis, utilitzar divisió sintètica o un altre mètode equivalent.

## 14. Residu zero

Quan:

$$
P(a)=0
$$

el residu és zero:

$$
r=0
$$

Això significa que la divisió és exacta:

$$
P(x)=(x-a)Q(x)
$$

No queda cap terme addicional.

## 15. Residu diferent de zero

Si:

$$
P(a)\neq0
$$

aleshores el residu no és zero.

Per tant:

$$
P(x)=(x-a)Q(x)+P(a)
$$

El divisor no és un factor del polinomi.

### Exemple

Sigui:

$$
P(x)=x^2+2x+5
$$

i considerem $x-1$.

Calculem:

$$
P(1)=1+2+5=8
$$

Per tant:

$$
r=8
$$

i $x-1$ no és factor de $P(x)$.

## 16. Polinomis amb coeficients desconeguts

El teorema del residu també permet trobar paràmetres desconeguts.

### Exemple

Sigui:

$$
P(x)=x^3+ax^2+2x+1
$$

i sabem que en dividir entre $x-2$ el residu és $5$.

Pel teorema del residu:

$$
P(2)=5
$$

Substituïm:

$$
2^3+a(2)^2+2(2)+1=5
$$

$$
8+4a+4+1=5
$$

$$
13+4a=5
$$

$$
4a=-8
$$

$$
a=-2
$$

Per tant:

$$
\boxed{a=-2}
$$

## 17. Trobar un paràmetre per obtenir una arrel

Suposem:

$$
P(x)=x^3+kx^2-4x+4
$$

i volem que $x=2$ sigui una arrel.

Això significa:

$$
P(2)=0
$$

Aleshores:

$$
8+4k-8+4=0
$$

$$
4+4k=0
$$

$$
k=-1
$$

Per tant, per a $k=-1$, el polinomi té l'arrel $x=2$.

## 18. Diversos divisors i diversos residus

Si coneixem diferents condicions, podem obtenir un sistema d'equacions.

Per exemple, si:

$$
P(x)=x^3+ax^2+bx+c
$$

i coneixem:

$$
P(1)=2
$$

$$
P(2)=5
$$

cada condició proporciona una equació sobre els coeficients.

El teorema del residu permet convertir condicions de divisibilitat o residus en equacions algebraiques.

## 19. Procediment general

Per trobar el residu de dividir $P(x)$ entre $x-a$:

1. Identifica $a$.
2. Substitueix $x=a$ a $P(x)$.
3. Calcula el valor obtingut.
4. Aquest valor és el residu.

En resum:

$$
\boxed{\text{Residu}=P(a)}
$$

### Exemple complet

Sigui:

$$
P(x)=2x^4-x^3+3x^2-5x+7
$$

i volem dividir entre:

$$
x+1
$$

Primer escrivim:

$$
x+1=x-(-1)
$$

Per tant:

$$
a=-1
$$

Avaluem:

$$
P(-1)=2(-1)^4-(-1)^3+3(-1)^2-5(-1)+7
$$

$$
=2+1+3+5+7
$$

$$
=18
$$

Per tant:

$$
\boxed{r=18}
$$

## 20. Errors freqüents

### Confondre $x-a$ amb $x+a$

Si el divisor és:

$$
x+4
$$

cal utilitzar:

$$
a=-4
$$

i no $a=4$.

### Confondre el residu amb el valor de $a$

Si:

$$
P(x)\div(x-3)
$$

aleshores:

$$
a=3
$$

però el residu és:

$$
P(3)
$$

No han de coincidir.

### Pensar que sempre cal dividir

Per trobar el residu no és necessari fer tota la divisió.

### Oblidar els termes amb coeficient zero

Si:

$$
P(x)=x^4+3x^2-2
$$

també es pot escriure:

$$
P(x)=x^4+0x^3+3x^2+0x-2
$$

Això és especialment important quan utilitzem Ruffini.

### Confondre el teorema del residu amb el teorema del factor

El teorema del residu afirma:

$$
\operatorname{residu}=P(a)
$$

El teorema del factor afegeix la condició especial:

$$
P(a)=0\iff x-a\text{ és factor}
$$

## 21. Resum

| Concepte                 | Resultat         |
| ------------------------ | ---------------- |
| Divisor                  | $x-a$            |
| Valor que se substitueix | $a$              |
| Residu                   | $P(a)$           |
| Residu zero              | $P(a)=0$         |
| $x-a$ és factor          | $P(a)=0$         |
| $a$ és arrel             | $P(a)=0$         |
| Divisor $x+a$            | utilitzar $a=-a$ |
| Divisor $ax-b$           | avaluar en $b/a$ |

La relació fonamental és:

$$
\boxed{P(x)=(x-a)Q(x)+P(a)}
$$

i, en particular:

$$
\boxed{\text{residu de }P(x)\div(x-a)=P(a)}
$$

## 22. Idea fonamental

El teorema del residu transforma una divisió de polinomis en una avaluació.

En lloc de calcular tota la divisió:

$$
P(x)\div(x-a)
$$

simplement calculem:

$$
P(a)
$$

El resultat és exactament el residu.

A més, quan aquest valor és zero:

$$
P(a)=0
$$

obtenim immediatament una arrel i un factor:

$$
\boxed{a\text{ és arrel}\iff x-a\text{ és factor}}
$$
