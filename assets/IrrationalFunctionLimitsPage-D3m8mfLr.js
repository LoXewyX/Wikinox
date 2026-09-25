import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-BYtsCiYd.js";import{t as n}from"./TopicPage-BAzQYl-h.js";var r=`# Límites de funciones irracionales

Una **función irracional** es una función que contiene la variable dentro de una raíz u otra expresión irracional. Un ejemplo sencillo es

$$
f(x)=\\sqrt{x+1}.
$$

Los límites de funciones irracionales requieren especial atención porque la expresión puede no estar definida para todos los valores de $x$, y la sustitución directa puede producir formas indeterminadas como $0/0$.

## 1. Sustitución directa

Si la función es continua en $x=a$, normalmente podemos calcular el límite mediante sustitución directa:

$$
\\lim_{x\\to a}\\sqrt{x+3}
=
\\sqrt{a+3}.
$$

Por ejemplo,

$$
\\lim_{x\\to1}\\sqrt{x+3}
=
\\sqrt4
=
\\boxed{2}.
$$

Es necesario comprobar que la expresión está definida alrededor del punto donde calculamos el límite.

## 2. Límites con cocientes

Consideremos

$$
\\lim_{x\\to a}
\\frac{\\sqrt{x+1}-\\sqrt{a+1}}{x-a}.
$$

La sustitución directa produce

$$
\\frac00,
$$

que es una forma indeterminada.

En estos casos, la **racionalización** suele ser la técnica más útil.

## 3. Racionalización

El conjugado de

$$
\\sqrt{x+1}-\\sqrt{a+1}
$$

es

$$
\\sqrt{x+1}+\\sqrt{a+1}.
$$

Multiplicamos por el conjugado:

$$
\\frac{\\sqrt{x+1}-\\sqrt{a+1}}{x-a}
\\cdot
\\frac{\\sqrt{x+1}+\\sqrt{a+1}}
{\\sqrt{x+1}+\\sqrt{a+1}}.
$$

Aplicando la diferencia de cuadrados,

$$
(\\sqrt{x+1})^2-(\\sqrt{a+1})^2
=
x-a.
$$

Por tanto,

$$
\\frac{\\sqrt{x+1}-\\sqrt{a+1}}{x-a}
=
\\frac{1}
{\\sqrt{x+1}+\\sqrt{a+1}}.
$$

Ahora podemos calcular el límite directamente:

$$
\\lim_{x\\to a}
\\frac{1}
{\\sqrt{x+1}+\\sqrt{a+1}}
=
\\boxed{
\\frac{1}{2\\sqrt{a+1}}
}.
$$

## 4. Ejemplo completo

Calculamos

$$
\\lim_{x\\to4}
\\frac{\\sqrt{x}-2}{x-4}.
$$

La sustitución directa produce

$$
\\frac00.
$$

Racionalizamos:

$$
\\frac{\\sqrt{x}-2}{x-4}
\\cdot
\\frac{\\sqrt{x}+2}{\\sqrt{x}+2}.
$$

Entonces,

$$
\\frac{x-4}{(x-4)(\\sqrt{x}+2)}
=
\\frac{1}{\\sqrt{x}+2}.
$$

Por tanto,

$$
\\lim_{x\\to4}
\\frac{\\sqrt{x}-2}{x-4}
=
\\frac{1}{2+2}
=
\\boxed{\\frac14}.
$$

## 5. Diferencia de raíces cuadradas

Una forma frecuente es

$$
\\lim_{x\\to a}
\\frac{\\sqrt{f(x)}-\\sqrt{g(x)}}{h(x)}.
$$

Multiplicamos por el conjugado:

$$
\\frac{
\\sqrt{f(x)}-\\sqrt{g(x)}
}{
h(x)
}
\\cdot
\\frac{
\\sqrt{f(x)}+\\sqrt{g(x)}
}{
\\sqrt{f(x)}+\\sqrt{g(x)}
}.
$$

El numerador se convierte en

$$
f(x)-g(x).
$$

Así,

$$
\\frac{
\\sqrt{f(x)}-\\sqrt{g(x)}
}{
h(x)
}
=
\\frac{
f(x)-g(x)
}{
h(x)\\left(\\sqrt{f(x)}+\\sqrt{g(x)}\\right)
}.
$$

Esto suele eliminar la forma indeterminada.

## 6. Racionalización del denominador

La racionalización también puede ser útil cuando la raíz aparece en el denominador.

Por ejemplo,

$$
\\lim_{x\\to0}
\\frac{x}{\\sqrt{1+x}-1}.
$$

La sustitución directa produce

$$
\\frac00.
$$

Multiplicamos por el conjugado:

$$
\\frac{x}{\\sqrt{1+x}-1}
\\cdot
\\frac{\\sqrt{1+x}+1}{\\sqrt{1+x}+1}.
$$

Entonces,

$$
\\frac{x(\\sqrt{1+x}+1)}
{(1+x)-1}
=
\\sqrt{1+x}+1.
$$

Por tanto,

$$
\\lim_{x\\to0}
\\frac{x}{\\sqrt{1+x}-1}
=
\\boxed{2}.
$$

## 7. Restricciones del dominio

Las expresiones con raíces imponen restricciones sobre el dominio.

Para una raíz de índice par,

$$
\\sqrt{f(x)},
$$

necesitamos

$$
f(x)\\geq0.
$$

Por ejemplo,

$$
f(x)=\\sqrt{x-2}
$$

tiene dominio

$$
[2,\\infty).
$$

Por ello, un límite bilateral en $x=2$ debe analizarse con cuidado, ya que la función solamente está definida a la derecha de $2$.

En este caso,

$$
\\lim_{x\\to2^+}\\sqrt{x-2}
=
\\boxed{0}.
$$

El límite por la izquierda no existe en los números reales.

## 8. Límites en el infinito

Las funciones irracionales también pueden requerir racionalización cuando estudiamos su comportamiento en el infinito.

Consideremos

$$
\\lim_{x\\to\\infty}
\\left(\\sqrt{x^2+x}-x\\right).
$$

Ambos términos tienden a infinito, por lo que tenemos una forma $\\infty-\\infty$.

Racionalizamos:

$$
\\sqrt{x^2+x}-x
=
\\frac{(x^2+x)-x^2}
{\\sqrt{x^2+x}+x}.
$$

Por tanto,

$$
\\sqrt{x^2+x}-x
=
\\frac{x}
{\\sqrt{x^2+x}+x}.
$$

Sacamos $x$ de la raíz:

$$
\\frac{x}
{x\\sqrt{1+\\frac1x}+x}
=
\\frac{1}
{\\sqrt{1+\\frac1x}+1}.
$$

Al calcular el límite,

$$
\\boxed{
\\lim_{x\\to\\infty}
\\left(\\sqrt{x^2+x}-x\\right)
=
\\frac12
}.
$$

## 9. Formas indeterminadas frecuentes

En los límites de funciones irracionales aparecen especialmente las formas

$$
\\frac00,
\\qquad
\\infty-\\infty.
$$

Una forma indeterminada **no significa que el límite no exista**. Significa que necesitamos realizar alguna transformación algebraica antes de determinarlo.

## 10. Procedimiento general

Para calcular un límite que contiene raíces:

1. Determina el dominio de la función.
2. Intenta la sustitución directa.
3. Comprueba si aparece una forma indeterminada.
4. Si aparece una diferencia de raíces, multiplica por el conjugado.
5. Simplifica mediante la diferencia de cuadrados.
6. Cancela factores comunes cuando sea válido.
7. Calcula el límite de la expresión simplificada.
8. Comprueba si el dominio obliga a utilizar un límite lateral.

La técnica fundamental es la racionalización:

$$
\\boxed{
(a-b)(a+b)=a^2-b^2
}.
$$

En expresiones con raíces, el conjugado suele transformar una expresión complicada en otra algebraicamente más sencilla.
`,i=`# Límits de funcions irracionals

Una **funció irracional** és una funció que conté la variable dins d'una arrel o una altra expressió irracional. Un exemple senzill és

$$
f(x)=\\sqrt{x+1}.
$$

Els límits de funcions irracionals requereixen una atenció especial perquè l'expressió pot no estar definida per a tots els valors de $x$, i la substitució directa pot produir formes indeterminades com $0/0$.

## 1. Substitució directa

Si la funció és contínua en $x=a$, normalment podem calcular el límit mitjançant substitució directa:

$$
\\lim_{x\\to a}\\sqrt{x+3}
=
\\sqrt{a+3}.
$$

Per exemple,

$$
\\lim_{x\\to1}\\sqrt{x+3}
=
\\sqrt4
=
\\boxed{2}.
$$

Cal comprovar que l'expressió està definida al voltant del punt on calculem el límit.

## 2. Límits amb quocients

Considerem

$$
\\lim_{x\\to a}
\\frac{\\sqrt{x+1}-\\sqrt{a+1}}{x-a}.
$$

La substitució directa produeix

$$
\\frac00,
$$

que és una forma indeterminada.

En aquests casos, la **racionalització** sol ser la tècnica més útil.

## 3. Racionalització

El conjugat de

$$
\\sqrt{x+1}-\\sqrt{a+1}
$$

és

$$
\\sqrt{x+1}+\\sqrt{a+1}.
$$

Multipliquem pel conjugat:

$$
\\frac{\\sqrt{x+1}-\\sqrt{a+1}}{x-a}
\\cdot
\\frac{\\sqrt{x+1}+\\sqrt{a+1}}
{\\sqrt{x+1}+\\sqrt{a+1}}.
$$

Aplicant la diferència de quadrats,

$$
(\\sqrt{x+1})^2-(\\sqrt{a+1})^2
=
x-a.
$$

Per tant,

$$
\\frac{\\sqrt{x+1}-\\sqrt{a+1}}{x-a}
=
\\frac{1}
{\\sqrt{x+1}+\\sqrt{a+1}}.
$$

Ara podem calcular el límit directament:

$$
\\lim_{x\\to a}
\\frac{1}
{\\sqrt{x+1}+\\sqrt{a+1}}
=
\\boxed{
\\frac{1}{2\\sqrt{a+1}}
}.
$$

## 4. Exemple complet

Calculem

$$
\\lim_{x\\to4}
\\frac{\\sqrt{x}-2}{x-4}.
$$

La substitució directa produeix

$$
\\frac00.
$$

Racionalitzem:

$$
\\frac{\\sqrt{x}-2}{x-4}
\\cdot
\\frac{\\sqrt{x}+2}{\\sqrt{x}+2}.
$$

Aleshores,

$$
\\frac{x-4}{(x-4)(\\sqrt{x}+2)}
=
\\frac{1}{\\sqrt{x}+2}.
$$

Per tant,

$$
\\lim_{x\\to4}
\\frac{\\sqrt{x}-2}{x-4}
=
\\frac{1}{2+2}
=
\\boxed{\\frac14}.
$$

## 5. Diferència d'arrels quadrades

Una forma freqüent és

$$
\\lim_{x\\to a}
\\frac{\\sqrt{f(x)}-\\sqrt{g(x)}}{h(x)}.
$$

Multipliquem pel conjugat:

$$
\\frac{
\\sqrt{f(x)}-\\sqrt{g(x)}
}{
h(x)
}
\\cdot
\\frac{
\\sqrt{f(x)}+\\sqrt{g(x)}
}{
\\sqrt{f(x)}+\\sqrt{g(x)}
}.
$$

El numerador es converteix en

$$
f(x)-g(x).
$$

Així,

$$
\\frac{
\\sqrt{f(x)}-\\sqrt{g(x)}
}{
h(x)
}
=
\\frac{
f(x)-g(x)
}{
h(x)\\left(\\sqrt{f(x)}+\\sqrt{g(x)}\\right)
}.
$$

Això sol eliminar la forma indeterminada.

## 6. Racionalització del denominador

La racionalització també pot ser útil quan l'arrel apareix al denominador.

Per exemple,

$$
\\lim_{x\\to0}
\\frac{x}{\\sqrt{1+x}-1}.
$$

La substitució directa produeix

$$
\\frac00.
$$

Multipliquem pel conjugat:

$$
\\frac{x}{\\sqrt{1+x}-1}
\\cdot
\\frac{\\sqrt{1+x}+1}{\\sqrt{1+x}+1}.
$$

Aleshores,

$$
\\frac{x(\\sqrt{1+x}+1)}
{(1+x)-1}
=
\\sqrt{1+x}+1.
$$

Per tant,

$$
\\lim_{x\\to0}
\\frac{x}{\\sqrt{1+x}-1}
=
\\boxed{2}.
$$

## 7. Restriccions del domini

Les expressions amb arrels imposen restriccions sobre el domini.

Per a una arrel d'índex parell,

$$
\\sqrt{f(x)},
$$

necessitem

$$
f(x)\\geq0.
$$

Per exemple,

$$
f(x)=\\sqrt{x-2}
$$

té domini

$$
[2,\\infty).
$$

Per això, un límit bilateral en $x=2$ s'ha d'analitzar amb cura, ja que la funció només està definida a la dreta de $2$.

En aquest cas,

$$
\\lim_{x\\to2^+}\\sqrt{x-2}
=
\\boxed{0}.
$$

El límit per l'esquerra no existeix en els nombres reals.

## 8. Límits a l'infinit

Les funcions irracionals també poden requerir racionalització quan estudiem el seu comportament a l'infinit.

Considerem

$$
\\lim_{x\\to\\infty}
\\left(\\sqrt{x^2+x}-x\\right).
$$

Tots dos termes tendeixen a infinit, de manera que tenim una forma $\\infty-\\infty$.

Racionalitzem:

$$
\\sqrt{x^2+x}-x
=
\\frac{(x^2+x)-x^2}
{\\sqrt{x^2+x}+x}.
$$

Per tant,

$$
\\sqrt{x^2+x}-x
=
\\frac{x}
{\\sqrt{x^2+x}+x}.
$$

Traiem $x$ de l'arrel:

$$
\\frac{x}
{x\\sqrt{1+\\frac1x}+x}
=
\\frac{1}
{\\sqrt{1+\\frac1x}+1}.
$$

Calculant el límit,

$$
\\boxed{
\\lim_{x\\to\\infty}
\\left(\\sqrt{x^2+x}-x\\right)
=
\\frac12
}.
$$

## 9. Formes indeterminades freqüents

En els límits de funcions irracionals apareixen especialment les formes

$$
\\frac00,
\\qquad
\\infty-\\infty.
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
\\boxed{
(a-b)(a+b)=a^2-b^2
}.
$$

En expressions amb arrels, el conjugat sol transformar una expressió complicada en una altra d'algebraicament més senzilla.
`,a=`# Limits of Irrational Functions

An **irrational function** is a function that contains a variable inside a root or another irrational expression. A common example is

$$
f(x)=\\sqrt{x+1}.
$$

Limits of irrational functions often require special care because the expression may not be defined for every value of $x$, and direct substitution can produce indeterminate forms such as $0/0$.

## 1. Direct substitution

If the function is continuous at $x=a$, its limit can usually be found by direct substitution:

$$
\\lim_{x\\to a}\\sqrt{x+3}
=
\\sqrt{a+3}.
$$

For example,

$$
\\lim_{x\\to 1}\\sqrt{x+3}
=
\\sqrt{4}
=
\\boxed{2}.
$$

The key point is that the expression must be defined around the point where the limit is being evaluated.

## 2. Limits involving a quotient

Consider

$$
\\lim_{x\\to a}
\\frac{\\sqrt{x+1}-\\sqrt{a+1}}{x-a}.
$$

Direct substitution gives

$$
\\frac{0}{0},
$$

which is an indeterminate form.

In this situation, **rationalization** is often the most useful technique.

## 3. Rationalization

The conjugate of

$$
\\sqrt{x+1}-\\sqrt{a+1}
$$

is

$$
\\sqrt{x+1}+\\sqrt{a+1}.
$$

Multiplying by the conjugate gives

$$
\\frac{\\sqrt{x+1}-\\sqrt{a+1}}{x-a}
\\cdot
\\frac{\\sqrt{x+1}+\\sqrt{a+1}}
{\\sqrt{x+1}+\\sqrt{a+1}}.
$$

Using the difference of squares,

$$
(\\sqrt{x+1})^2-(\\sqrt{a+1})^2
=
x-a.
$$

Therefore,

$$
\\frac{\\sqrt{x+1}-\\sqrt{a+1}}{x-a}
=
\\frac{1}
{\\sqrt{x+1}+\\sqrt{a+1}}.
$$

Now the limit can be evaluated directly:

$$
\\lim_{x\\to a}
\\frac{1}
{\\sqrt{x+1}+\\sqrt{a+1}}
=
\\boxed{
\\frac{1}{2\\sqrt{a+1}}
}.
$$

## 4. A complete example

Calculate

$$
\\lim_{x\\to 4}
\\frac{\\sqrt{x}-2}{x-4}.
$$

Direct substitution gives

$$
\\frac{0}{0}.
$$

Rationalize:

$$
\\frac{\\sqrt{x}-2}{x-4}
\\cdot
\\frac{\\sqrt{x}+2}{\\sqrt{x}+2}.
$$

Then

$$
\\frac{x-4}{(x-4)(\\sqrt{x}+2)}
=
\\frac{1}{\\sqrt{x}+2}.
$$

Therefore,

$$
\\lim_{x\\to4}
\\frac{\\sqrt{x}-2}{x-4}
=
\\frac{1}{2+2}
=
\\boxed{\\frac14}.
$$

## 5. Difference of square roots

A common form is

$$
\\lim_{x\\to a}
\\frac{\\sqrt{f(x)}-\\sqrt{g(x)}}{h(x)}.
$$

Multiplying by the conjugate gives

$$
\\frac{
\\sqrt{f(x)}-\\sqrt{g(x)}
}{
h(x)
}
\\cdot
\\frac{
\\sqrt{f(x)}+\\sqrt{g(x)}
}{
\\sqrt{f(x)}+\\sqrt{g(x)}
}.
$$

The numerator becomes

$$
f(x)-g(x).
$$

Thus,

$$
\\frac{
\\sqrt{f(x)}-\\sqrt{g(x)}
}{
h(x)
}
=
\\frac{
f(x)-g(x)
}{
h(x)\\left(\\sqrt{f(x)}+\\sqrt{g(x)}\\right)
}.
$$

This frequently removes the indeterminate form.

## 6. Rationalizing the denominator

Rationalization can also be useful when the radical appears in the denominator.

For example,

$$
\\lim_{x\\to0}
\\frac{x}{\\sqrt{1+x}-1}.
$$

Direct substitution gives

$$
\\frac{0}{0}.
$$

Multiply by the conjugate:

$$
\\frac{x}{\\sqrt{1+x}-1}
\\cdot
\\frac{\\sqrt{1+x}+1}{\\sqrt{1+x}+1}.
$$

Then

$$
\\frac{x(\\sqrt{1+x}+1)}
{(1+x)-1}
=
\\sqrt{1+x}+1.
$$

Therefore,

$$
\\lim_{x\\to0}
\\frac{x}{\\sqrt{1+x}-1}
=
\\boxed{2}.
$$

## 7. Domain restrictions

Radical expressions impose restrictions on the domain.

For an even root,

$$
\\sqrt{f(x)},
$$

we need

$$
f(x)\\geq0.
$$

For example,

$$
f(x)=\\sqrt{x-2}
$$

has domain

$$
[2,\\infty).
$$

Therefore, a two-sided limit at $x=2$ must be considered carefully because the function is only defined to the right of $2$.

In this case,

$$
\\lim_{x\\to2^+}\\sqrt{x-2}
=
\\boxed{0}.
$$

The left-hand limit does not exist over the real numbers.

## 8. Limits at infinity

Irrational functions can also require rationalization when studying their behavior as $x$ tends to infinity.

Consider

$$
\\lim_{x\\to\\infty}
\\left(\\sqrt{x^2+x}-x\\right).
$$

Direct reasoning can be misleading because both terms become infinite.

Rationalize:

$$
\\sqrt{x^2+x}-x
=
\\frac{(x^2+x)-x^2}
{\\sqrt{x^2+x}+x}.
$$

Therefore,

$$
\\sqrt{x^2+x}-x
=
\\frac{x}
{\\sqrt{x^2+x}+x}.
$$

Factor $x$ from the square root:

$$
\\frac{x}
{x\\sqrt{1+\\frac1x}+x}
=
\\frac{1}
{\\sqrt{1+\\frac1x}+1}.
$$

Taking the limit,

$$
\\boxed{
\\lim_{x\\to\\infty}
\\left(\\sqrt{x^2+x}-x\\right)
=
\\frac12
}.
$$

## 9. Common indeterminate forms

When working with irrational functions, the most common indeterminate forms include

$$
\\frac00,
\\qquad
\\infty-\\infty.
$$

An indeterminate form does **not** mean that the limit does not exist. It means that further algebraic manipulation is required.

## 10. General procedure

When calculating a limit involving radicals:

1. Determine the domain of the function.
2. Try direct substitution.
3. Identify whether an indeterminate form appears.
4. If a difference of radicals appears, multiply by the conjugate.
5. Simplify using the difference of squares.
6. Cancel common factors when valid.
7. Evaluate the resulting limit.
8. Check whether the limit is one-sided because of the domain.

The key technique is rationalization:

$$
\\boxed{
(a-b)(a+b)=a^2-b^2
}.
$$

For square roots, the conjugate often transforms a difficult expression into an algebraically simpler one.
`;function o(){let{locale:o}=t();return e(n,{id:`irrational-function-limits`,content:{es:r,ca:i,en:a}[o]})}export{o as default};