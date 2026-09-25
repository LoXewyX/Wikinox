# Exemples de derivades

Les regles de derivació s'entenen millor quan s'apliquen a diferents tipus de funcions. Els exemples següents avancen des de potències senzilles fins a productes, quocients, composicions, arrels, funcions exponencials, logaritmes i funcions trigonomètriques.

## 1. Funció polinòmica

Considerem

$$
f(x)=3x^4-5x^2+2x-7.
$$

Derivem cada terme per separat:

$$
f'(x)
=
3(4x^3)-5(2x)+2.
$$

Per tant,

$$
\boxed{
f'(x)=12x^3-10x+2
}.
$$

La constant $-7$ desapareix perquè la derivada d'una constant és zero.

## 2. Potència amb exponent negatiu

Considerem

$$
f(x)=\frac{4}{x^3}.
$$

Escrivim la funció utilitzant un exponent negatiu:

$$
f(x)=4x^{-3}.
$$

Apliquem la regla de la potència:

$$
f'(x)
=
4(-3)x^{-4}.
$$

Així,

$$
\boxed{
f'(x)=-\frac{12}{x^4}
}.
$$

## 3. Arrel quadrada

Considerem

$$
f(x)=\sqrt{x}.
$$

Escrivim l'arrel com una potència:

$$
f(x)=x^{1/2}.
$$

Aleshores,

$$
f'(x)
=
\frac12x^{-1/2}.
$$

Per tant,

$$
\boxed{
f'(x)=\frac{1}{2\sqrt{x}}
}.
$$

## 4. Polinomi multiplicat per una constant

Considerem

$$
f(x)=7x^5-3x^2.
$$

Derivem terme a terme:

$$
f'(x)
=
35x^4-6x.
$$

Per tant,

$$
\boxed{
f'(x)=35x^4-6x
}.
$$

## 5. Producte de dues funcions

Considerem

$$
f(x)=x^2\sin(x).
$$

És un producte, així que utilitzem la regla del producte:

$$
(uv)'=u'v+uv'.
$$

Prenem

$$
u=x^2,
\qquad
v=\sin(x).
$$

Aleshores,

$$
u'=2x,
\qquad
v'=\cos(x).
$$

Per tant,

$$
f'(x)
=
2x\sin(x)+x^2\cos(x).
$$

Així,

$$
\boxed{
f'(x)=2x\sin(x)+x^2\cos(x)
}.
$$

:::function-graph{expression="x^2*sin(x)" restriction="-6<=x<=6"}
:::

## 6. Producte amb una funció exponencial

Considerem

$$
f(x)=xe^x.
$$

Aplicant la regla del producte,

$$
f'(x)
=
1\cdot e^x+x\cdot e^x.
$$

Per tant,

$$
\boxed{
f'(x)=e^x(x+1)
}.
$$

## 7. Quocient de dues funcions

Considerem

$$
f(x)=\frac{x^2+1}{x-1}.
$$

Utilitzem la regla del quocient:

$$
\left(\frac{u}{v}\right)'
=
\frac{u'v-uv'}{v^2}.
$$

Prenem

$$
u=x^2+1,
\qquad
v=x-1.
$$

Aleshores,

$$
u'=2x,
\qquad
v'=1.
$$

Per tant,

$$
f'(x)
=
\frac{2x(x-1)-(x^2+1)}
{(x-1)^2}.
$$

Simplificant,

$$
f'(x)
=
\frac{2x^2-2x-x^2-1}
{(x-1)^2}.
$$

Així,

$$
\boxed{
f'(x)=
\frac{x^2-2x-1}{(x-1)^2}
}.
$$

## 8. Regla de la cadena amb un polinomi

Considerem

$$
f(x)=(2x+3)^4.
$$

La funció exterior és $u^4$ i la funció interior és

$$
u=2x+3.
$$

Aplicant la regla de la cadena,

$$
f'(x)
=
4(2x+3)^3\cdot2.
$$

Per tant,

$$
\boxed{
f'(x)=8(2x+3)^3
}.
$$

## 9. Regla de la cadena amb una arrel

Considerem

$$
f(x)=\sqrt{x^2+4}.
$$

Escrivim la funció com

$$
f(x)=(x^2+4)^{1/2}.
$$

Apliquem la regla de la cadena:

$$
f'(x)
=
\frac12(x^2+4)^{-1/2}\cdot2x.
$$

Per tant,

$$
\boxed{
f'(x)=\frac{x}{\sqrt{x^2+4}}
}.
$$

:::function-graph{expression="sqrt(x^2+4)" restriction="-6<=x<=6"}
:::

## 10. Funció exponencial composta

Considerem

$$
f(x)=e^{3x^2}.
$$

La derivada de $e^u$ és $e^u$, però hem de multiplicar per la derivada de l'exponent:

$$
f'(x)
=
e^{3x^2}\cdot6x.
$$

Per tant,

$$
\boxed{
f'(x)=6xe^{3x^2}
}.
$$

## 11. Funció logarítmica

Considerem

$$
f(x)=\ln(x^2+1).
$$

Utilitzant

$$
\frac{d}{dx}\ln(u)=\frac{u'}{u},
$$

amb

$$
u=x^2+1,
\qquad
u'=2x,
$$

obtenim

$$
\boxed{
f'(x)=\frac{2x}{x^2+1}
}.
$$

## 12. Funció sinus composta

Considerem

$$
f(x)=\sin(4x).
$$

Aplicant la regla de la cadena,

$$
f'(x)
=
\cos(4x)\cdot4.
$$

Per tant,

$$
\boxed{
f'(x)=4\cos(4x)
}.
$$

## 13. Funció cosinus composta

Considerem

$$
f(x)=\cos(x^2).
$$

La derivada exterior és $-\sin(u)$ i la derivada interior és $2x$.

Per tant,

$$
f'(x)
=
-\sin(x^2)\cdot2x.
$$

Així,

$$
\boxed{
f'(x)=-2x\sin(x^2)
}.
$$

## 14. Funció tangent

Considerem

$$
f(x)=\tan(3x+1).
$$

Utilitzant

$$
\frac{d}{dx}\tan(u)=\sec^2(u)u',
$$

obtenim

$$
f'(x)
=
3\sec^2(3x+1).
$$

Per tant,

$$
\boxed{
f'(x)=3\sec^2(3x+1)
}.
$$

## 15. Combinació de diverses regles

Considerem

$$
f(x)=x^2e^{x^2}.
$$

És un producte i, a més, la funció exponencial conté una composició.

Primer apliquem la regla del producte:

$$
f'(x)
=
2xe^{x^2}
+
x^2\frac{d}{dx}e^{x^2}.
$$

Ara apliquem la regla de la cadena:

$$
\frac{d}{dx}e^{x^2}
=
2xe^{x^2}.
$$

Per tant,

$$
f'(x)
=
2xe^{x^2}
+
2x^3e^{x^2}.
$$

Traient factor comú,

$$
\boxed{
f'(x)=2xe^{x^2}(1+x^2)
}.
$$

## 16. Calcular la derivada en un punt

Suposem que

$$
f(x)=x^3-2x+1.
$$

La seva derivada és

$$
f'(x)=3x^2-2.
$$

Per calcular la taxa de variació instantània en $x=2$:

$$
f'(2)
=
3(2)^2-2
=
12-2
=
\boxed{10}.
$$

Per tant, la gràfica té pendent $10$ en $x=2$.

## 17. Calcular una recta tangent

Sigui

$$
f(x)=x^2+1.
$$

Volem obtenir la recta tangent en $x=2$.

Primer calculem la derivada:

$$
f'(x)=2x.
$$

Aleshores,

$$
f'(2)=4.
$$

El punt de la gràfica és

$$
f(2)=5.
$$

Per tant, el punt de tangència és $(2,5)$.

Utilitzant l'equació punt-pendent,

$$
y-5=4(x-2).
$$

Així,

$$
\boxed{
y=4x-3
}.
$$

## 18. Segona derivada

Considerem

$$
f(x)=x^4-2x^2.
$$

La primera derivada és

$$
f'(x)=4x^3-4x.
$$

Derivem de nou:

$$
f''(x)=12x^2-4.
$$

Per tant,

$$
\boxed{
f''(x)=12x^2-4
}.
$$

La segona derivada es pot utilitzar per estudiar la concavitat i el comportament dels punts crítics.

## 19. Exemple complet

Considerem

$$
f(x)=x^3-3x^2-9x+5.
$$

Primera derivada:

$$
f'(x)
=
3x^2-6x-9.
$$

Factoritzem:

$$
f'(x)
=
3(x^2-2x-3)
=
3(x-3)(x+1).
$$

Els punts crítics satisfan

$$
f'(x)=0.
$$

Per tant,

$$
x=-1,
\qquad
x=3.
$$

El signe de $f'(x)$ és:

$$
\begin{array}{c|ccc}
x & (-\infty,-1) & (-1,3) & (3,\infty)\\
\hline
f'(x) & + & - & +
\end{array}
$$

Per tant, la funció és creixent en

$$
(-\infty,-1)
\cup
(3,\infty),
$$

i decreixent en

$$
(-1,3).
$$

Com que la derivada canvia de positiva a negativa en $x=-1$, hi ha un màxim local.

Com que canvia de negativa a positiva en $x=3$, hi ha un mínim local.

Els valors corresponents són

$$
f(-1)=10,
\qquad
f(3)=-22.
$$

Per tant,

$$
\boxed{
\text{Màxim local: }(-1,10)
}
$$

i

$$
\boxed{
\text{Mínim local: }(3,-22)
}.
$$

## 20. Triar la regla adequada

Abans de derivar, identifica l'estructura de la funció:

| Estructura de la funció | Regla principal      |
| ----------------------- | -------------------- |
| $x^n$                   | Regla de la potència |
| $c\,f(x)$               | Múltiple constant    |
| $f(x)\pm g(x)$          | Suma/diferència      |
| $f(x)g(x)$              | Regla del producte   |
| $\frac{f(x)}{g(x)}$     | Regla del quocient   |
| $f(g(x))$               | Regla de la cadena   |

Moltes funcions requereixen **més d'una regla**.

Per exemple,

$$
x^2e^{x^2}
$$

requereix la regla del producte i la regla de la cadena.

La clau és identificar primer l'estructura exterior i després treballar cap a l'interior.
