# Ejemplos de derivadas

Las reglas de derivación se entienden mejor cuando se aplican a distintos tipos de funciones. Los siguientes ejemplos avanzan desde potencias sencillas hasta productos, cocientes, composiciones, raíces, funciones exponenciales, logaritmos y funciones trigonométricas.

## 1. Función polinómica

Consideremos

$$
f(x)=3x^4-5x^2+2x-7.
$$

Derivamos cada término por separado:

$$
f'(x)
=
3(4x^3)-5(2x)+2.
$$

Por tanto,

$$
\boxed{
f'(x)=12x^3-10x+2
}.
$$

La constante $-7$ desaparece porque la derivada de una constante es cero.

## 2. Potencia con exponente negativo

Consideremos

$$
f(x)=\frac{4}{x^3}.
$$

Escribimos la función utilizando un exponente negativo:

$$
f(x)=4x^{-3}.
$$

Aplicamos la regla de la potencia:

$$
f'(x)
=
4(-3)x^{-4}.
$$

Así,

$$
\boxed{
f'(x)=-\frac{12}{x^4}
}.
$$

## 3. Raíz cuadrada

Consideremos

$$
f(x)=\sqrt{x}.
$$

Escribimos la raíz como una potencia:

$$
f(x)=x^{1/2}.
$$

Entonces,

$$
f'(x)
=
\frac12x^{-1/2}.
$$

Por tanto,

$$
\boxed{
f'(x)=\frac{1}{2\sqrt{x}}
}.
$$

## 4. Polinomio multiplicado por una constante

Consideremos

$$
f(x)=7x^5-3x^2.
$$

Derivamos término a término:

$$
f'(x)
=
35x^4-6x.
$$

Por tanto,

$$
\boxed{
f'(x)=35x^4-6x
}.
$$

## 5. Producto de dos funciones

Consideremos

$$
f(x)=x^2\sin(x).
$$

Es un producto, así que utilizamos la regla del producto:

$$
(uv)'=u'v+uv'.
$$

Tomamos

$$
u=x^2,
\qquad
v=\sin(x).
$$

Entonces,

$$
u'=2x,
\qquad
v'=\cos(x).
$$

Por tanto,

$$
f'(x)
=
2x\sin(x)+x^2\cos(x).
$$

Así,

$$
\boxed{
f'(x)=2x\sin(x)+x^2\cos(x)
}.
$$

:::function-graph{expression="x^2*sin(x)" restriction="-6<=x<=6"}
:::

## 6. Producto con una función exponencial

Consideremos

$$
f(x)=xe^x.
$$

Aplicando la regla del producto,

$$
f'(x)
=
1\cdot e^x+x\cdot e^x.
$$

Por tanto,

$$
\boxed{
f'(x)=e^x(x+1)
}.
$$

## 7. Cociente de dos funciones

Consideremos

$$
f(x)=\frac{x^2+1}{x-1}.
$$

Utilizamos la regla del cociente:

$$
\left(\frac{u}{v}\right)'
=
\frac{u'v-uv'}{v^2}.
$$

Tomamos

$$
u=x^2+1,
\qquad
v=x-1.
$$

Entonces,

$$
u'=2x,
\qquad
v'=1.
$$

Por tanto,

$$
f'(x)
=
\frac{2x(x-1)-(x^2+1)}
{(x-1)^2}.
$$

Simplificando,

$$
f'(x)
=
\frac{2x^2-2x-x^2-1}
{(x-1)^2}.
$$

Así,

$$
\boxed{
f'(x)=
\frac{x^2-2x-1}{(x-1)^2}
}.
$$

## 8. Regla de la cadena con un polinomio

Consideremos

$$
f(x)=(2x+3)^4.
$$

La función exterior es $u^4$ y la función interior es

$$
u=2x+3.
$$

Aplicando la regla de la cadena,

$$
f'(x)
=
4(2x+3)^3\cdot2.
$$

Por tanto,

$$
\boxed{
f'(x)=8(2x+3)^3
}.
$$

## 9. Regla de la cadena con una raíz

Consideremos

$$
f(x)=\sqrt{x^2+4}.
$$

Escribimos la función como

$$
f(x)=(x^2+4)^{1/2}.
$$

Aplicamos la regla de la cadena:

$$
f'(x)
=
\frac12(x^2+4)^{-1/2}\cdot2x.
$$

Por tanto,

$$
\boxed{
f'(x)=\frac{x}{\sqrt{x^2+4}}
}.
$$

:::function-graph{expression="sqrt(x^2+4)" restriction="-6<=x<=6"}
:::

## 10. Función exponencial compuesta

Consideremos

$$
f(x)=e^{3x^2}.
$$

La derivada de $e^u$ es $e^u$, pero debemos multiplicar por la derivada del exponente:

$$
f'(x)
=
e^{3x^2}\cdot6x.
$$

Por tanto,

$$
\boxed{
f'(x)=6xe^{3x^2}
}.
$$

## 11. Función logarítmica

Consideremos

$$
f(x)=\ln(x^2+1).
$$

Utilizando

$$
\frac{d}{dx}\ln(u)=\frac{u'}{u},
$$

con

$$
u=x^2+1,
\qquad
u'=2x,
$$

obtenemos

$$
\boxed{
f'(x)=\frac{2x}{x^2+1}
}.
$$

## 12. Función seno compuesta

Consideremos

$$
f(x)=\sin(4x).
$$

Aplicando la regla de la cadena,

$$
f'(x)
=
\cos(4x)\cdot4.
$$

Por tanto,

$$
\boxed{
f'(x)=4\cos(4x)
}.
$$

## 13. Función coseno compuesta

Consideremos

$$
f(x)=\cos(x^2).
$$

La derivada exterior es $-\sin(u)$ y la derivada interior es $2x$.

Por tanto,

$$
f'(x)
=
-\sin(x^2)\cdot2x.
$$

Así,

$$
\boxed{
f'(x)=-2x\sin(x^2)
}.
$$

## 14. Función tangente

Consideremos

$$
f(x)=\tan(3x+1).
$$

Utilizando

$$
\frac{d}{dx}\tan(u)=\sec^2(u)u',
$$

obtenemos

$$
f'(x)
=
3\sec^2(3x+1).
$$

Por tanto,

$$
\boxed{
f'(x)=3\sec^2(3x+1)
}.
$$

## 15. Combinación de varias reglas

Consideremos

$$
f(x)=x^2e^{x^2}.
$$

Es un producto y, además, la función exponencial contiene una composición.

Primero aplicamos la regla del producto:

$$
f'(x)
=
2xe^{x^2}
+
x^2\frac{d}{dx}e^{x^2}.
$$

Ahora aplicamos la regla de la cadena:

$$
\frac{d}{dx}e^{x^2}
=
2xe^{x^2}.
$$

Por tanto,

$$
f'(x)
=
2xe^{x^2}
+
2x^3e^{x^2}.
$$

Sacando factor común,

$$
\boxed{
f'(x)=2xe^{x^2}(1+x^2)
}.
$$

## 16. Calcular la derivada en un punto

Supongamos que

$$
f(x)=x^3-2x+1.
$$

Su derivada es

$$
f'(x)=3x^2-2.
$$

Para calcular la tasa de variación instantánea en $x=2$:

$$
f'(2)
=
3(2)^2-2
=
12-2
=
\boxed{10}.
$$

Por tanto, la gráfica tiene pendiente $10$ en $x=2$.

## 17. Calcular una recta tangente

Sea

$$
f(x)=x^2+1.
$$

Queremos obtener la recta tangente en $x=2$.

Primero calculamos la derivada:

$$
f'(x)=2x.
$$

Entonces,

$$
f'(2)=4.
$$

El punto de la gráfica es

$$
f(2)=5.
$$

Por tanto, el punto de tangencia es $(2,5)$.

Utilizando la ecuación punto-pendiente,

$$
y-5=4(x-2).
$$

Así,

$$
\boxed{
y=4x-3
}.
$$

## 18. Segunda derivada

Consideremos

$$
f(x)=x^4-2x^2.
$$

La primera derivada es

$$
f'(x)=4x^3-4x.
$$

Derivamos de nuevo:

$$
f''(x)=12x^2-4.
$$

Por tanto,

$$
\boxed{
f''(x)=12x^2-4
}.
$$

La segunda derivada puede utilizarse para estudiar la concavidad y el comportamiento de los puntos críticos.

## 19. Ejemplo completo

Consideremos

$$
f(x)=x^3-3x^2-9x+5.
$$

Primera derivada:

$$
f'(x)
=
3x^2-6x-9.
$$

Factorizamos:

$$
f'(x)
=
3(x^2-2x-3)
=
3(x-3)(x+1).
$$

Los puntos críticos satisfacen

$$
f'(x)=0.
$$

Por tanto,

$$
x=-1,
\qquad
x=3.
$$

El signo de $f'(x)$ es:

$$
\begin{array}{c|ccc}
x & (-\infty,-1) & (-1,3) & (3,\infty)\\
\hline
f'(x) & + & - & +
\end{array}
$$

Por tanto, la función es creciente en

$$
(-\infty,-1)
\cup
(3,\infty),
$$

y decreciente en

$$
(-1,3).
$$

Como la derivada cambia de positiva a negativa en $x=-1$, existe un máximo local.

Como cambia de negativa a positiva en $x=3$, existe un mínimo local.

Los valores correspondientes son

$$
f(-1)=10,
\qquad
f(3)=-22.
$$

Por tanto,

$$
\boxed{
\text{Máximo local: }(-1,10)
}
$$

y

$$
\boxed{
\text{Mínimo local: }(3,-22)
}.
$$

## 20. Elegir la regla adecuada

Antes de derivar, identifica la estructura de la función:

| Estructura de la función | Regla principal      |
| ------------------------ | -------------------- |
| $x^n$                    | Regla de la potencia |
| $c\,f(x)$                | Múltiplo constante   |
| $f(x)\pm g(x)$           | Suma/diferencia      |
| $f(x)g(x)$               | Regla del producto   |
| $\frac{f(x)}{g(x)}$      | Regla del cociente   |
| $f(g(x))$                | Regla de la cadena   |

Muchas funciones requieren **más de una regla**.

Por ejemplo,

$$
x^2e^{x^2}
$$

requiere la regla del producto y la regla de la cadena.

La clave es identificar primero la estructura exterior y después trabajar hacia el interior.
