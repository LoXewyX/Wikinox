# Límites de funciones irracionales

Una **función irracional** es una función que contiene la variable dentro de una raíz u otra expresión irracional. Un ejemplo sencillo es

$$
f(x)=\sqrt{x+1}.
$$

Los límites de funciones irracionales requieren especial atención porque la expresión puede no estar definida para todos los valores de $x$, y la sustitución directa puede producir formas indeterminadas como $0/0$.

## 1. Sustitución directa

Si la función es continua en $x=a$, normalmente podemos calcular el límite mediante sustitución directa:

$$
\lim_{x\to a}\sqrt{x+3}
=
\sqrt{a+3}.
$$

Por ejemplo,

$$
\lim_{x\to1}\sqrt{x+3}
=
\sqrt4
=
\boxed{2}.
$$

Es necesario comprobar que la expresión está definida alrededor del punto donde calculamos el límite.

## 2. Límites con cocientes

Consideremos

$$
\lim_{x\to a}
\frac{\sqrt{x+1}-\sqrt{a+1}}{x-a}.
$$

La sustitución directa produce

$$
\frac00,
$$

que es una forma indeterminada.

En estos casos, la **racionalización** suele ser la técnica más útil.

## 3. Racionalización

El conjugado de

$$
\sqrt{x+1}-\sqrt{a+1}
$$

es

$$
\sqrt{x+1}+\sqrt{a+1}.
$$

Multiplicamos por el conjugado:

$$
\frac{\sqrt{x+1}-\sqrt{a+1}}{x-a}
\cdot
\frac{\sqrt{x+1}+\sqrt{a+1}}
{\sqrt{x+1}+\sqrt{a+1}}.
$$

Aplicando la diferencia de cuadrados,

$$
(\sqrt{x+1})^2-(\sqrt{a+1})^2
=
x-a.
$$

Por tanto,

$$
\frac{\sqrt{x+1}-\sqrt{a+1}}{x-a}
=
\frac{1}
{\sqrt{x+1}+\sqrt{a+1}}.
$$

Ahora podemos calcular el límite directamente:

$$
\lim_{x\to a}
\frac{1}
{\sqrt{x+1}+\sqrt{a+1}}
=
\boxed{
\frac{1}{2\sqrt{a+1}}
}.
$$

## 4. Ejemplo completo

Calculamos

$$
\lim_{x\to4}
\frac{\sqrt{x}-2}{x-4}.
$$

La sustitución directa produce

$$
\frac00.
$$

Racionalizamos:

$$
\frac{\sqrt{x}-2}{x-4}
\cdot
\frac{\sqrt{x}+2}{\sqrt{x}+2}.
$$

Entonces,

$$
\frac{x-4}{(x-4)(\sqrt{x}+2)}
=
\frac{1}{\sqrt{x}+2}.
$$

Por tanto,

$$
\lim_{x\to4}
\frac{\sqrt{x}-2}{x-4}
=
\frac{1}{2+2}
=
\boxed{\frac14}.
$$

## 5. Diferencia de raíces cuadradas

Una forma frecuente es

$$
\lim_{x\to a}
\frac{\sqrt{f(x)}-\sqrt{g(x)}}{h(x)}.
$$

Multiplicamos por el conjugado:

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

El numerador se convierte en

$$
f(x)-g(x).
$$

Así,

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

Esto suele eliminar la forma indeterminada.

## 6. Racionalización del denominador

La racionalización también puede ser útil cuando la raíz aparece en el denominador.

Por ejemplo,

$$
\lim_{x\to0}
\frac{x}{\sqrt{1+x}-1}.
$$

La sustitución directa produce

$$
\frac00.
$$

Multiplicamos por el conjugado:

$$
\frac{x}{\sqrt{1+x}-1}
\cdot
\frac{\sqrt{1+x}+1}{\sqrt{1+x}+1}.
$$

Entonces,

$$
\frac{x(\sqrt{1+x}+1)}
{(1+x)-1}
=
\sqrt{1+x}+1.
$$

Por tanto,

$$
\lim_{x\to0}
\frac{x}{\sqrt{1+x}-1}
=
\boxed{2}.
$$

## 7. Restricciones del dominio

Las expresiones con raíces imponen restricciones sobre el dominio.

Para una raíz de índice par,

$$
\sqrt{f(x)},
$$

necesitamos

$$
f(x)\geq0.
$$

Por ejemplo,

$$
f(x)=\sqrt{x-2}
$$

tiene dominio

$$
[2,\infty).
$$

Por ello, un límite bilateral en $x=2$ debe analizarse con cuidado, ya que la función solamente está definida a la derecha de $2$.

En este caso,

$$
\lim_{x\to2^+}\sqrt{x-2}
=
\boxed{0}.
$$

El límite por la izquierda no existe en los números reales.

## 8. Límites en el infinito

Las funciones irracionales también pueden requerir racionalización cuando estudiamos su comportamiento en el infinito.

Consideremos

$$
\lim_{x\to\infty}
\left(\sqrt{x^2+x}-x\right).
$$

Ambos términos tienden a infinito, por lo que tenemos una forma $\infty-\infty$.

Racionalizamos:

$$
\sqrt{x^2+x}-x
=
\frac{(x^2+x)-x^2}
{\sqrt{x^2+x}+x}.
$$

Por tanto,

$$
\sqrt{x^2+x}-x
=
\frac{x}
{\sqrt{x^2+x}+x}.
$$

Sacamos $x$ de la raíz:

$$
\frac{x}
{x\sqrt{1+\frac1x}+x}
=
\frac{1}
{\sqrt{1+\frac1x}+1}.
$$

Al calcular el límite,

$$
\boxed{
\lim_{x\to\infty}
\left(\sqrt{x^2+x}-x\right)
=
\frac12
}.
$$

## 9. Formas indeterminadas frecuentes

En los límites de funciones irracionales aparecen especialmente las formas

$$
\frac00,
\qquad
\infty-\infty.
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
\boxed{
(a-b)(a+b)=a^2-b^2
}.
$$

En expresiones con raíces, el conjugado suele transformar una expresión complicada en otra algebraicamente más sencilla.
