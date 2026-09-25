# Equacions de segon grau

Una **equació de segon grau** és una equació polinòmica en què la incògnita apareix, com a màxim, amb exponent $2$ i el coeficient de $x^2$ és diferent de zero.

La seva forma general és:

$$
ax^2+bx+c=0
$$

on:

- $a$, $b$ i $c$ són nombres reals;
- $a\neq0$;
- $x$ és la incògnita.

Per exemple:

$$
2x^2-5x+3=0
$$

és una equació de segon grau perquè el terme de grau més alt és $2x^2$.

## Coeficients

A l'equació

$$
ax^2+bx+c=0
$$

els valors $a$, $b$ i $c$ reben noms específics:

- $a$ és el **coeficient quadràtic**;
- $b$ és el **coeficient lineal**;
- $c$ és el **terme independent**.

Per exemple, en

$$
3x^2-7x+2=0
$$

tenim:

$$
a=3,\qquad b=-7,\qquad c=2
$$

És important identificar correctament els signes dels coeficients abans d'aplicar qualsevol mètode de resolució.

## Resoldre una equació de segon grau

Resoldre una equació de segon grau significa trobar tots els valors de $x$ que fan certa la igualtat.

Per exemple:

$$
x^2-5x+6=0
$$

Podem factoritzar:

$$
(x-2)(x-3)=0
$$

Un producte és zero quan almenys un dels seus factors és zero:

$$
x-2=0
$$

o

$$
x-3=0
$$

Per tant:

$$
\boxed{x=2,\quad x=3}
$$

## Fórmula quadràtica

La fórmula quadràtica permet resoldre qualsevol equació de segon grau real:

$$
ax^2+bx+c=0
$$

sempre que:

$$
a\neq0
$$

Les solucions venen donades per:

$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

El símbol $\pm$ indica que hem de considerar dues possibilitats:

$$
x_1=\frac{-b+\sqrt{b^2-4ac}}{2a}
$$

i

$$
x_2=\frac{-b-\sqrt{b^2-4ac}}{2a}
$$

## El discriminant

L'expressió que apareix dins de l'arrel quadrada rep el nom de **discriminant**:

$$
\Delta=b^2-4ac
$$

El discriminant permet determinar el nombre de solucions reals d'una equació de segon grau.

### Si $\Delta>0$

Hi ha **dues solucions reals diferents**:

$$
x_1\neq x_2
$$

Per exemple:

$$
x^2-5x+6=0
$$

Aquí:

$$
a=1,\qquad b=-5,\qquad c=6
$$

Calculem:

$$
\Delta=(-5)^2-4(1)(6)
$$

$$
\Delta=25-24=1
$$

Com que:

$$
\Delta>0
$$

hi ha dues solucions reals:

$$
x_1=2,\qquad x_2=3
$$

### Si $\Delta=0$

Hi ha **una única solució real**, que és una arrel doble:

$$
x_1=x_2
$$

Per exemple:

$$
x^2-4x+4=0
$$

El discriminant és:

$$
\Delta=(-4)^2-4(1)(4)=0
$$

Per tant:

$$
x=\frac{4}{2}=2
$$

La solució és:

$$
\boxed{x=2}
$$

### Si $\Delta<0$

No hi ha solucions reals.

Per exemple:

$$
x^2+4x+5=0
$$

Tenim:

$$
\Delta=4^2-4(1)(5)
$$

$$
\Delta=16-20=-4
$$

Com que:

$$
\Delta<0
$$

l'equació no té solucions reals.

## Mètode de factorització

Quan una equació es pot factoritzar fàcilment, la factorització sol ser una manera ràpida de resoldre-la.

Considerem:

$$
x^2-7x+12=0
$$

Busquem dos nombres el producte dels quals sigui $12$ i la suma dels quals sigui $-7$:

$$
-3\cdot-4=12
$$

i

$$
-3+(-4)=-7
$$

Per tant:

$$
x^2-7x+12=(x-3)(x-4)
$$

L'equació queda:

$$
(x-3)(x-4)=0
$$

Per tant:

$$
x=3
\quad\text{o}\quad
x=4
$$

Les solucions són:

$$
\boxed{x=3,\quad x=4}
$$

## Equacions incompletes

Una equació de segon grau és **incompleta** quan algun dels coeficients $b$ o $c$ és zero.

### Cas $b=0$

Tenim:

$$
ax^2+c=0
$$

Per exemple:

$$
2x^2-18=0
$$

Sumem $18$:

$$
2x^2=18
$$

Dividim entre $2$:

$$
x^2=9
$$

Per tant:

$$
x=\pm3
$$

Les solucions són:

$$
\boxed{x=3,\quad x=-3}
$$

### Cas $c=0$

Tenim:

$$
ax^2+bx=0
$$

Traiem factor comú:

$$
x(ax+b)=0
$$

Per exemple:

$$
x^2-5x=0
$$

Factoritzem:

$$
x(x-5)=0
$$

Per tant:

$$
x=0
\quad\text{o}\quad
x=5
$$

Les solucions són:

$$
\boxed{x=0,\quad x=5}
$$

## Forma canònica

Una funció quadràtica es pot escriure en **forma canònica** com:

$$
f(x)=a(x-h)^2+k
$$

En aquesta forma, el punt:

$$
(h,k)
$$

és el **vèrtex** de la paràbola.

Per exemple:

$$
f(x)=(x-2)^2-3
$$

té el vèrtex:

$$
(2,-3)
$$

La forma canònica permet identificar directament el vèrtex i estudiar el comportament de la paràbola.

## Representació gràfica

Una equació de segon grau està relacionada amb una paràbola.

Per exemple:

$$
x^2-5x+6=0
$$

es pot associar amb la funció:

$$
f(x)=x^2-5x+6
$$

Les seves solucions són els valors de $x$ per als quals:

$$
f(x)=0
$$

Per tant, les solucions corresponen a les interseccions de la paràbola amb l'eix $x$.

:::function-graph{expression="x^2-5*x+6" restriction="-2<=x<=7"}
:::

En aquest cas, la paràbola talla l'eix $x$ en:

$$
x=2
\quad\text{i}\quad
x=3
$$

Per això l'equació té dues solucions reals.

## Relació entre el discriminant i la gràfica

El discriminant també té una interpretació geomètrica.

### $\Delta>0$

La paràbola talla l'eix $x$ en dos punts.

$$
\boxed{\text{2 solucions reals}}
$$

### $\Delta=0$

La paràbola toca l'eix $x$ en un únic punt.

$$
\boxed{\text{1 solució real doble}}
$$

### $\Delta<0$

La paràbola no talla l'eix $x$.

$$
\boxed{\text{0 solucions reals}}
$$

Aquesta relació permet interpretar algebraicament i gràficament el mateix problema.

## Coordenades del vèrtex

Per a una funció quadràtica:

$$
f(x)=ax^2+bx+c
$$

la coordenada $x$ del vèrtex és:

$$
x_v=-\frac{b}{2a}
$$

La coordenada $y$ s'obté substituint aquest valor a la funció:

$$
y_v=f(x_v)
$$

Per tant, el vèrtex és:

$$
V\left(-\frac{b}{2a},f\left(-\frac{b}{2a}\right)\right)
$$

Per exemple:

$$
f(x)=x^2-4x+3
$$

Tenim:

$$
a=1,\qquad b=-4
$$

Aleshores:

$$
x_v=-\frac{-4}{2(1)}=2
$$

Calculem la coordenada $y$:

$$
y_v=2^2-4(2)+3=-1
$$

Per tant:

$$
\boxed{V=(2,-1)}
$$

## Eix de simetria

La paràbola és simètrica respecte d'una recta vertical.

Aquesta recta s'anomena **eix de simetria** i té l'equació:

$$
x=-\frac{b}{2a}
$$

Per exemple, per a:

$$
f(x)=x^2-4x+3
$$

l'eix de simetria és:

$$
x=2
$$

## Concavitat

El signe de $a$ determina l'orientació de la paràbola.

Si:

$$
a>0
$$

la paràbola s'obre cap amunt.

Si:

$$
a<0
$$

la paràbola s'obre cap avall.

Per exemple:

$$
f(x)=x^2
$$

s'obre cap amunt, mentre que:

$$
g(x)=-x^2
$$

s'obre cap avall.

## Suma i producte de les arrels

Si una equació de segon grau té dues arrels $x_1$ i $x_2$:

$$
ax^2+bx+c=0
$$

aleshores es compleixen les relacions:

$$
x_1+x_2=-\frac{b}{a}
$$

i

$$
x_1x_2=\frac{c}{a}
$$

Aquestes relacions es coneixen com a **relacions de Viète**.

Per exemple:

$$
2x^2-6x+4=0
$$

Si les seves arrels són $x_1$ i $x_2$, aleshores:

$$
x_1+x_2=\frac{6}{2}=3
$$

i

$$
x_1x_2=\frac{4}{2}=2
$$

Les arrels són $1$ i $2$, i efectivament:

$$
1+2=3
$$

$$
1\cdot2=2
$$

## Comprovació de les solucions

Després de resoldre una equació de segon grau convé comprovar les solucions a l'equació original.

Per exemple:

$$
x^2-5x+6=0
$$

Les solucions són:

$$
x=2,\qquad x=3
$$

Comprovem $x=2$:

$$
2^2-5(2)+6=0
$$

$$
4-10+6=0
$$

Comprovem $x=3$:

$$
3^2-5(3)+6=0
$$

$$
9-15+6=0
$$

Ambdues solucions satisfan l'equació.

## Errors freqüents

En resoldre equacions de segon grau convé evitar aquests errors:

- oblidar que $a\neq0$;
- copiar incorrectament el signe de $b$;
- calcular malament el discriminant;
- oblidar el símbol $\pm$ a la fórmula quadràtica;
- dividir només una part de l'expressió entre $2a$;
- perdre una solució en extreure una arrel quadrada;
- no comprovar les solucions;
- confondre el vèrtex amb una arrel.

En particular, recorda que:

$$
\sqrt{x^2}=|x|
$$

i no simplement $x$.

## Resum dels mètodes de resolució

Segons l'equació, podem utilitzar diferents mètodes:

1. **Factorització**, quan l'expressió es pot factoritzar fàcilment.
2. **Extracció de l'arrel quadrada**, especialment en equacions incompletes.
3. **Fórmula quadràtica**, que funciona per a qualsevol equació de segon grau.
4. **Completació del quadrat**, útil per obtenir la forma canònica.

La fórmula quadràtica és el mètode general:

$$
\boxed{x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}}
$$
