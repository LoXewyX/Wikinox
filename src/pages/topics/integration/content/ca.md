# Integrals

Les integrals són una de les eines fonamentals del càlcul. Permeten estudiar acumulacions, calcular àrees, obtenir desplaçaments a partir de velocitats i resoldre molts problemes de ciència i enginyeria.

## 1. Idea fonamental

La integral es pot interpretar com una **acumulació**.

Per exemple, si coneixem una funció $f(x)$, podem acumular els seus valors entre dos punts mitjançant una integral definida:

$$
\int_a^b f(x)\,dx
$$

Geomètricament, aquesta integral representa l'**àrea amb signe** entre la gràfica de $f(x)$ i l'eix $x$, des de $x=a$ fins a $x=b$.

- Les regions per damunt de l'eix $x$ aporten àrea positiva.
- Les regions per davall de l'eix $x$ aporten àrea negativa.

## 2. La notació de la integral

Una integral té diversos elements:

$$
\int_a^b f(x)\,dx
$$

- $\int$: símbol d'integració.
- $a$: límit inferior.
- $b$: límit superior.
- $f(x)$: funció que integrem, anomenada **integrand**.
- $dx$: indica la variable d'integració.

Per exemple:

$$
\int_0^3 x^2\,dx
$$

vol dir integrar $x^2$ des de $0$ fins a $3$.

## 3. Integral indefinida

Una integral indefinida busca una funció la derivada de la qual sigui la funció original:

$$
\int f(x)\,dx=F(x)+C
$$

on:

$$
F'(x)=f(x)
$$

La constant $C$ apareix perquè moltes funcions tenen la mateixa derivada.

Per exemple:

$$
\int 2x\,dx=x^2+C
$$

perquè:

$$
\frac{d}{dx}(x^2)=2x
$$

## 4. Integral definida

Una integral definida té límits:

$$
\int_a^b f(x)\,dx
$$

Si $F$ és una primitiva de $f$, podem calcular-la mitjançant el teorema fonamental del càlcul:

$$
\int_a^b f(x)\,dx=F(b)-F(a)
$$

Per exemple:

$$
\int_0^2 x\,dx
$$

Una primitiva de $x$ és:

$$
F(x)=\frac{x^2}{2}
$$

Per tant:

$$
\int_0^2 x\,dx
=

\left[\frac{x^2}{2}\right]_0^2
=

2
$$

## 5. Propietats bàsiques

### Linealitat

$$
\int (af(x)+bg(x))\,dx
=

a\int f(x)\,dx+b\int g(x)\,dx
$$

on $a$ i $b$ són constants.

També:

$$
\int_a^b(f(x)+g(x))\,dx
=

\int_a^b f(x)\,dx+
\int_a^b g(x)\,dx
$$

### Canvi d'orientació

$$
\int_a^b f(x)\,dx
=

-\int_b^a f(x)\,dx
$$

### Interval de longitud zero

$$
\int_a^a f(x)\,dx=0
$$

### Divisió d'un interval

Si $a<c<b$:

$$
\int_a^b f(x)\,dx
=

\int_a^c f(x)\,dx+
\int_c^b f(x)\,dx
$$

## 6. Integrals de potències

Una de les regles més importants és:

$$
\int x^n\,dx
=

\frac{x^{n+1}}{n+1}+C
$$

si:

$$
n\neq-1
$$

Per exemple:

$$
\int x^3\,dx
=

\frac{x^4}{4}+C
$$

Un altre exemple:

$$
\int 5x^2\,dx
=

\frac{5x^3}{3}+C
$$

## 7. Cas especial: $1/x$

La regla de les potències no es pot utilitzar directament quan $n=-1$.

En aquest cas:

$$
\int\frac{1}{x}\,dx
=

\ln|x|+C
$$

El valor absolut és important perquè la funció $1/x$ està definida tant per a $x>0$ com per a $x<0$.

## 8. Integrals de funcions exponencials

Per a la funció exponencial:

$$
\int e^x\,dx=e^x+C
$$

Per a una base $a>0$, $a\neq1$:

$$
\int a^x\,dx
=

\frac{a^x}{\ln(a)}+C
$$

## 9. Integrals trigonomètriques bàsiques

Algunes primitives importants són:

$$
\int\cos x\,dx=\sin x+C
$$

$$
\int\sin x\,dx=-\cos x+C
$$

També:

$$
\int\frac{1}{\cos^2x}\,dx=\tan x+C
$$

i:

$$
\int\frac{1}{\sin^2x}\,dx=-\cot x+C
$$

## 10. Substitució

El canvi de variable permet transformar una integral complicada en una altra de més senzilla.

Si:

$$
u=g(x)
$$

aleshores:

$$
du=g'(x)\,dx
$$

Per exemple:

$$
\int 2x\cos(x^2)\,dx
$$

Prenem:

$$
u=x^2
$$

Aleshores:

$$
du=2x\,dx
$$

i obtenim:

$$
\int\cos(u)\,du
=

\sin(u)+C
$$

Finalment:

$$
\boxed{\sin(x^2)+C}
$$

## 11. Integració per parts

La integració per parts es basa en la regla del producte de les derivades:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

És especialment útil quan tenim un producte de funcions.

Per exemple:

$$
\int xe^x\,dx
$$

Prenem:

$$
u=x
$$

i:

$$
dv=e^x\,dx
$$

Aleshores:

$$
du=dx
$$

i:

$$
v=e^x
$$

Aplicant la fórmula:

$$
\int xe^x\,dx
=

xe^x-\int e^x\,dx
$$

Per tant:

$$
\boxed{xe^x-e^x+C}
$$

## 12. Àrea sota una corba

Si:

$$
f(x)\geq0
$$

en l'interval $[a,b]$, aleshores:

$$
A=\int_a^b f(x)\,dx
$$

representa l'àrea compresa entre la corba i l'eix $x$.

Per exemple:

$$
A=\int_0^2x^2\,dx
$$

resulta:

$$
A=\frac{8}{3}
$$

## 13. Àrea entre dues funcions

Si $f(x)$ està per damunt de $g(x)$, l'àrea entre les dues funcions és:

$$
A=
\int_a^b(f(x)-g(x))\,dx
$$

Primer cal determinar els punts d'intersecció per conèixer els límits d'integració.

## 14. Integral com a acumulació

Les integrals no representen únicament àrees.

També permeten acumular magnituds.

Si $v(t)$ representa una velocitat, el desplaçament entre $t=a$ i $t=b$ és:

$$
\Delta s=
\int_a^b v(t)\,dt
$$

Si $r(t)$ representa una taxa de creixement, la variació acumulada és:

$$
\Delta Q=
\int_a^b r(t)\,dt
$$

## 15. Relació entre derivades i integrals

La derivació i la integració són operacions estretament relacionades.

El teorema fonamental del càlcul estableix que:

$$
\frac{d}{dx}
\left(
\int_a^x f(t)\,dt
\right)
=

f(x)
$$

És a dir, derivar una acumulació retorna la funció original.

També:

$$
\int_a^b f(x)\,dx
=

F(b)-F(a)
$$

quan $F'(x)=f(x)$.

## 16. Integrals impròpies

Una integral pot tenir límits infinits:

$$
\int_a^\infty f(x)\,dx
$$

En aquest cas es defineix mitjançant un límit:

$$
\int_a^\infty f(x)\,dx
=

\lim_{b\to\infty}
\int_a^b f(x)\,dx
$$

També pot aparèixer una singularitat dins de l'interval.

Per exemple:

$$
\int_0^1\frac{1}{\sqrt{x}}\,dx
$$

requereix estudiar el comportament de la funció prop de $x=0$.

## 17. Integrals múltiples

Per a funcions de diverses variables apareixen integrals múltiples.

Integral doble:

$$
\iint_D f(x,y)\,dA
$$

Integral triple:

$$
\iiint_V f(x,y,z)\,dV
$$

Aquestes eines permeten calcular, entre altres coses:

- àrees;
- volums;
- masses;
- centres de massa;
- quantitats acumulades en regions.

## 18. Integrals de línia

Una integral de línia integra una funció al llarg d'una corba:

$$
\int_C f\,ds
$$

També poden aparèixer integrals de camps vectorials:

$$
\int_C\vec F\cdot d\vec r
$$

Són importants en física i enginyeria, especialment en l'estudi del treball realitzat per una força.

## 19. Símbols importants

| Símbol     | Significat                        |
| ---------- | --------------------------------- |
| $\int$     | Integral                          |
| $\int_a^b$ | Integral definida entre $a$ i $b$ |
| $dx$       | Diferencial respecte de $x$       |
| $C$        | Constant d'integració             |
| $F(x)$     | Primitiva de $f(x)$               |
| $\iint$    | Integral doble                    |
| $\iiint$   | Integral triple                   |
| $\oint$    | Integral sobre una corba tancada  |
| $\int_C$   | Integral de línia                 |

## 20. Errors freqüents

### Oblidar la constant

Incorrecte:

$$
\int2x\,dx=x^2
$$

Correcte:

$$
\int2x\,dx=x^2+C
$$

### Aplicar malament la regla de les potències

Incorrecte:

$$
\int x^2\,dx=\frac{x^2}{2}
$$

Correcte:

$$
\int x^2\,dx=\frac{x^3}{3}+C
$$

### Confondre integral definida i indefinida

Una integral indefinida produeix una família de funcions:

$$
\int f(x)\,dx=F(x)+C
$$

Una integral definida produeix un nombre:

$$
\int_a^b f(x)\,dx
$$

### Confondre àrea amb integral amb signe

Si la funció pren valors negatius, la integral definida pot no coincidir amb l'àrea geomètrica total.

En aquest cas pot ser necessari dividir l'interval o utilitzar:

$$
\int_a^b|f(x)|\,dx
$$

## 21. Procediment general

Per resoldre una integral:

1. Identifica la funció que s'està integrant.
2. Comprova si pots aplicar una regla bàsica.
3. Simplifica l'expressió si és necessari.
4. Considera un canvi de variable si apareix una composició.
5. Considera la integració per parts si apareix un producte adequat.
6. Calcula la primitiva.
7. Afegeix $C$ si la integral és indefinida.
8. Si és definida, aplica els límits.
9. Comprova el resultat derivant la primitiva quan sigui possible.
10. Comprova les condicions de domini.

## 22. Idea fonamental

La idea essencial de la integració es pot resumir així:

$$
\boxed{
\text{integrar}\approx\text{acumular}
}
$$

i, en el context de primitives:

$$
\boxed{
\int f(x)\,dx=F(x)+C
\iff
F'(x)=f(x)
}
$$

La integral i la derivada són, en molts sentits, operacions inverses.
