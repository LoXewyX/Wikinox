# Integración por sustitución

La **integración por sustitución** es una técnica que permite simplificar integrales en las que aparece una función compuesta junto con su derivada.

La idea es realizar un cambio de variable:

$$
u=g(x)
$$

y transformar la integral en una integral respecto de $u$.

La regla fundamental es:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

---

## Idea principal

Supongamos que tenemos:

$$
\int f(g(x))g'(x)\,dx
$$

Elegimos:

$$
u=g(x)
$$

Entonces:

$$
du=g'(x)\,dx
$$

Por tanto, la integral se transforma en:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

Después de integrar, sustituimos nuevamente $u=g(x)$.

---

## Procedimiento

Para resolver una integral mediante sustitución:

1. Identificar una función interior conveniente.
2. Definir la sustitución:

$$
u=g(x)
$$

3. Calcular:

$$
du=g'(x)\,dx
$$

4. Reescribir completamente la integral en términos de $u$.
5. Integrar respecto de $u$.
6. Volver a sustituir $u=g(x)$.
7. Añadir la constante de integración $C$.

---

## Ejemplo básico

Consideremos:

$$
\int 2x(x^2+1)^3\,dx
$$

La expresión $x^2+1$ aparece elevada a una potencia y su derivada es $2x$.

Elegimos:

$$
u=x^2+1
$$

Entonces:

$$
du=2x\,dx
$$

La integral queda:

$$
\int u^3\,du
$$

Aplicamos la regla de la potencia:

$$
\frac{u^4}{4}+C
$$

Volvemos a $x$:

$$
\boxed{
\int 2x(x^2+1)^3\,dx
=
\frac{(x^2+1)^4}{4}+C
}
$$

---

## Sustitución con una función trigonométrica

Consideremos:

$$
\int \cos(x)\sin^4(x)\,dx
$$

Podemos elegir:

$$
u=\sin(x)
$$

Entonces:

$$
du=\cos(x)\,dx
$$

La integral se convierte en:

$$
\int u^4\,du
$$

Por tanto:

$$
\frac{u^5}{5}+C
$$

Volviendo a $x$:

$$
\boxed{
\int \cos(x)\sin^4(x)\,dx
=
\frac{\sin^5(x)}{5}+C
}
$$

---

## Sustitución con exponenciales

Consideremos:

$$
\int e^{3x+1}\,dx
$$

Elegimos:

$$
u=3x+1
$$

Entonces:

$$
du=3\,dx
$$

y:

$$
dx=\frac{du}{3}
$$

La integral queda:

$$
\int e^u\frac{du}{3}
=
\frac13\int e^u\,du
$$

Por tanto:

$$
\boxed{
\int e^{3x+1}\,dx
=
\frac13e^{3x+1}+C
}
$$

---

## Cuando la derivada aparece con un factor constante

A veces la derivada de la sustitución no aparece exactamente, sino multiplicada por una constante.

Por ejemplo:

$$
\int x(x^2+4)^5\,dx
$$

Elegimos:

$$
u=x^2+4
$$

Entonces:

$$
du=2x\,dx
$$

Como solo tenemos $x\,dx$:

$$
x\,dx=\frac12du
$$

Por tanto:

$$
\int x(x^2+4)^5\,dx
=
\frac12\int u^5\,du
$$

$$
=
\frac{u^6}{12}+C
$$

Volviendo a $x$:

$$
\boxed{
\int x(x^2+4)^5\,dx
=
\frac{(x^2+4)^6}{12}+C
}
$$

---

## Sustitución en integrales definidas

La sustitución también puede utilizarse en integrales definidas.

Consideremos:

$$
\int_0^1 2x(x^2+1)^3\,dx
$$

Tomamos:

$$
u=x^2+1
$$

y:

$$
du=2x\,dx
$$

También debemos transformar los límites.

Cuando $x=0$:

$$
u=0^2+1=1
$$

Cuando $x=1$:

$$
u=1^2+1=2
$$

Por tanto:

$$
\int_0^1 2x(x^2+1)^3\,dx
=
\int_1^2u^3\,du
$$

Calculamos:

$$
\int_1^2u^3\,du
=
\left[\frac{u^4}{4}\right]_1^2
$$

$$
=
\frac{16}{4}-\frac14
$$

$$
\boxed{
\int_0^1 2x(x^2+1)^3\,dx
=
\frac{15}{4}
}
$$

Cuando se transforman los límites, no es necesario volver a $x$ al final.

---

## Cómo identificar una sustitución

Una buena sustitución suele aparecer como una **función dentro de otra función**.

Por ejemplo:

$$
\int 2x\cos(x^2)\,dx
$$

La función interior es:

$$
x^2
$$

y su derivada es:

$$
2x
$$

Por tanto:

$$
u=x^2
$$

es una sustitución natural.

Otros patrones frecuentes son:

$$
\int f(g(x))g'(x)\,dx
$$

$$
\int \frac{g'(x)}{g(x)}\,dx
$$

$$
\int e^{g(x)}g'(x)\,dx
$$

$$
\int \cos(g(x))g'(x)\,dx
$$

$$
\int \sin(g(x))g'(x)\,dx
$$

---

## Ejemplo con un cociente

Consideremos:

$$
\int \frac{2x}{x^2+1}\,dx
$$

Elegimos:

$$
u=x^2+1
$$

Entonces:

$$
du=2x\,dx
$$

La integral queda:

$$
\int\frac{1}{u}\,du
$$

Sabemos que:

$$
\int\frac1u\,du=\ln|u|+C
$$

Por tanto:

$$
\boxed{
\int\frac{2x}{x^2+1}\,dx
=
\ln(x^2+1)+C
}
$$

En este caso $x^2+1>0$, por lo que no es necesario mantener el valor absoluto.

---

## Ejemplo con una raíz

Consideremos:

$$
\int \frac{x}{\sqrt{x^2+1}}\,dx
$$

Elegimos:

$$
u=x^2+1
$$

Entonces:

$$
du=2x\,dx
$$

y:

$$
x\,dx=\frac12du
$$

Por tanto:

$$
\int\frac{x}{\sqrt{x^2+1}}\,dx
=
\frac12\int u^{-1/2}\,du
$$

$$
=
\frac12\cdot2u^{1/2}+C
$$

Volviendo a $x$:

$$
\boxed{
\int\frac{x}{\sqrt{x^2+1}}\,dx
=
\sqrt{x^2+1}+C
}
$$

---

## Sustitución y regla de la cadena

La integración por sustitución es, esencialmente, la operación inversa de la **regla de la cadena**.

Sabemos que:

$$
\frac{d}{dx}F(g(x))
=
F'(g(x))g'(x)
$$

Por tanto, al integrar:

$$
\boxed{
\int F'(g(x))g'(x)\,dx
=
F(g(x))+C
}
$$

La sustitución permite reconocer esta estructura sin tener que desarrollar la función compuesta.

---

## Comprobación mediante derivación

Una forma útil de comprobar una integral es derivar el resultado.

Por ejemplo:

$$
\int 2x(x^2+1)^3\,dx
=
\frac{(x^2+1)^4}{4}+C
$$

Derivamos:

$$
\frac{d}{dx}
\left[
\frac{(x^2+1)^4}{4}
\right]
$$

Aplicando la regla de la cadena:

$$
=
\frac14\cdot4(x^2+1)^3(2x)
$$

$$
=2x(x^2+1)^3
$$

Por tanto, el resultado es correcto.

---

## Sustitución en integrales con límites

Para una integral definida:

$$
\int_a^b f(g(x))g'(x)\,dx
$$

podemos utilizar:

$$
u=g(x)
$$

y transformar los límites:

$$
u(a)=g(a),\qquad u(b)=g(b)
$$

Entonces:

$$
\boxed{
\int_a^b f(g(x))g'(x)\,dx
=
\int_{g(a)}^{g(b)}f(u)\,du
}
$$

---

## Errores frecuentes

### No sustituir toda la integral

Después de elegir $u$, todos los elementos que dependan de $x$ deben eliminarse.

### Olvidar el diferencial

Si:

$$
u=g(x)
$$

también debemos calcular:

$$
du=g'(x)\,dx
$$

### No ajustar un factor constante

Si:

$$
du=2x\,dx
$$

pero la integral contiene $x\,dx$, entonces:

$$
x\,dx=\frac12du
$$

### No cambiar los límites

En una integral definida, si cambiamos de $x$ a $u$, también debemos cambiar los límites.

### Volver a $x$ innecesariamente

Si ya hemos transformado los límites de una integral definida, podemos dejar el resultado completamente en términos de $u$.

---

## Procedimiento resumido

Ante una integral:

$$
\int f(g(x))g'(x)\,dx
$$

identificamos:

$$
u=g(x)
$$

Calculamos:

$$
du=g'(x)\,dx
$$

Transformamos:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

Integramos y finalmente sustituimos:

$$
\boxed{u=g(x)}
$$

Para integrales definidas, también transformamos los límites.

---

## Resumen

La integración por sustitución es especialmente útil cuando aparece una función compuesta junto con su derivada.

La estructura fundamental es:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

con:

$$
\boxed{u=g(x),\qquad du=g'(x)\,dx}
$$

Es la técnica inversa de la regla de la cadena y constituye una de las herramientas básicas para integrar funciones compuestas.
