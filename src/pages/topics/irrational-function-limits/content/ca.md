# Límits de funcions irracionals

Una **funció irracional** és una funció que conté la variable dins d'una arrel o una altra expressió irracional. Un exemple senzill és

$$
f(x)=\sqrt{x+1}.
$$

Els límits de funcions irracionals requereixen una atenció especial perquè l'expressió pot no estar definida per a tots els valors de $x$, i la substitució directa pot produir formes indeterminades com $0/0$.

## 1. Substitució directa

Si la funció és contínua en $x=a$, normalment podem calcular el límit mitjançant substitució directa:

$$
\lim_{x\to a}\sqrt{x+3}
=
\sqrt{a+3}.
$$

Per exemple,

$$
\lim_{x\to1}\sqrt{x+3}
=
\sqrt4
=
\boxed{2}.
$$

Cal comprovar que l'expressió està definida al voltant del punt on calculem el límit.

## 2. Límits amb quocients

Considerem

$$
\lim_{x\to a}
\frac{\sqrt{x+1}-\sqrt{a+1}}{x-a}.
$$

La substitució directa produeix

$$
\frac00,
$$

que és una forma indeterminada.

En aquests casos, la **racionalització** sol ser la tècnica més útil.

## 3. Racionalització

El conjugat de

$$
\sqrt{x+1}-\sqrt{a+1}
$$

és

$$
\sqrt{x+1}+\sqrt{a+1}.
$$

Multipliquem pel conjugat:

$$
\frac{\sqrt{x+1}-\sqrt{a+1}}{x-a}
\cdot
\frac{\sqrt{x+1}+\sqrt{a+1}}
{\sqrt{x+1}+\sqrt{a+1}}.
$$

Aplicant la diferència de quadrats,

$$
(\sqrt{x+1})^2-(\sqrt{a+1})^2
=
x-a.
$$

Per tant,

$$
\frac{\sqrt{x+1}-\sqrt{a+1}}{x-a}
=
\frac{1}
{\sqrt{x+1}+\sqrt{a+1}}.
$$

Ara podem calcular el límit directament:

$$
\lim_{x\to a}
\frac{1}
{\sqrt{x+1}+\sqrt{a+1}}
=
\boxed{
\frac{1}{2\sqrt{a+1}}
}.
$$

## 4. Exemple complet

Calculem

$$
\lim_{x\to4}
\frac{\sqrt{x}-2}{x-4}.
$$

La substitució directa produeix

$$
\frac00.
$$

Racionalitzem:

$$
\frac{\sqrt{x}-2}{x-4}
\cdot
\frac{\sqrt{x}+2}{\sqrt{x}+2}.
$$

Aleshores,

$$
\frac{x-4}{(x-4)(\sqrt{x}+2)}
=
\frac{1}{\sqrt{x}+2}.
$$

Per tant,

$$
\lim_{x\to4}
\frac{\sqrt{x}-2}{x-4}
=
\frac{1}{2+2}
=
\boxed{\frac14}.
$$

## 5. Diferència d'arrels quadrades

Una forma freqüent és

$$
\lim_{x\to a}
\frac{\sqrt{f(x)}-\sqrt{g(x)}}{h(x)}.
$$

Multipliquem pel conjugat:

$$
\frac{
\sqrt{f(x)}-\sqrt{g(x)}
}{
h(x)
}
\cdot
\frac{
\sqrt{f(x)}+\sqrt{g(x)}
}{
\sqrt{f(x)}+\sqrt{g(x)}
}.
$$

El numerador es converteix en

$$
f(x)-g(x).
$$

Així,

$$
\frac{
\sqrt{f(x)}-\sqrt{g(x)}
}{
h(x)
}
=
\frac{
f(x)-g(x)
}{
h(x)\left(\sqrt{f(x)}+\sqrt{g(x)}\right)
}.
$$

Això sol eliminar la forma indeterminada.

## 6. Racionalització del denominador

La racionalització també pot ser útil quan l'arrel apareix al denominador.

Per exemple,

$$
\lim_{x\to0}
\frac{x}{\sqrt{1+x}-1}.
$$

La substitució directa produeix

$$
\frac00.
$$

Multipliquem pel conjugat:

$$
\frac{x}{\sqrt{1+x}-1}
\cdot
\frac{\sqrt{1+x}+1}{\sqrt{1+x}+1}.
$$

Aleshores,

$$
\frac{x(\sqrt{1+x}+1)}
{(1+x)-1}
=
\sqrt{1+x}+1.
$$

Per tant,

$$
\lim_{x\to0}
\frac{x}{\sqrt{1+x}-1}
=
\boxed{2}.
$$

## 7. Restriccions del domini

Les expressions amb arrels imposen restriccions sobre el domini.

Per a una arrel d'índex parell,

$$
\sqrt{f(x)},
$$

necessitem

$$
f(x)\geq0.
$$

Per exemple,

$$
f(x)=\sqrt{x-2}
$$

té domini

$$
[2,\infty).
$$

Per això, un límit bilateral en $x=2$ s'ha d'analitzar amb cura, ja que la funció només està definida a la dreta de $2$.

En aquest cas,

$$
\lim_{x\to2^+}\sqrt{x-2}
=
\boxed{0}.
$$

El límit per l'esquerra no existeix en els nombres reals.

## 8. Límits a l'infinit

Les funcions irracionals també poden requerir racionalització quan estudiem el seu comportament a l'infinit.

Considerem

$$
\lim_{x\to\infty}
\left(\sqrt{x^2+x}-x\right).
$$

Tots dos termes tendeixen a infinit, de manera que tenim una forma $\infty-\infty$.

Racionalitzem:

$$
\sqrt{x^2+x}-x
=
\frac{(x^2+x)-x^2}
{\sqrt{x^2+x}+x}.
$$

Per tant,

$$
\sqrt{x^2+x}-x
=
\frac{x}
{\sqrt{x^2+x}+x}.
$$

Traiem $x$ de l'arrel:

$$
\frac{x}
{x\sqrt{1+\frac1x}+x}
=
\frac{1}
{\sqrt{1+\frac1x}+1}.
$$

Calculant el límit,

$$
\boxed{
\lim_{x\to\infty}
\left(\sqrt{x^2+x}-x\right)
=
\frac12
}.
$$

## 9. Formes indeterminades freqüents

En els límits de funcions irracionals apareixen especialment les formes

$$
\frac00,
\qquad
\infty-\infty.
$$

Una forma indeterminada **no significa que el límit no existeixi**. Significa que cal fer alguna transformació algebraica abans de determinar-lo.

## 10. Procediment general

Per calcular un límit que conté arrels:

1. Determina el domini de la funció.
2. Intenta la substitució directa.
3. Comprova si apareix una forma indeterminada.
4. Si apareix una diferència d'arrels, multiplica pel conjugat.
5. Simplifica mitjançant la diferència de quadrats.
6. Cancel·la factors comuns quan sigui vàlid.
7. Calcula el límit de l'expressió simplificada.
8. Comprova si el domini obliga a utilitzar un límit lateral.

La tècnica fonamental és la racionalització:

$$
\boxed{
(a-b)(a+b)=a^2-b^2
}.
$$

En expressions amb arrels, el conjugat sol transformar una expressió complicada en una altra d'algebraicament més senzilla.
