import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-CQZABaDC.js";import{t as n}from"./TopicPage-DyShI14R.js";var r=`# Área mediante integrales

La integral definida proporciona un método general para calcular el área situada entre una curva y los ejes de coordenadas o entre dos curvas.

## 1. Área bajo una curva

Supongamos que $f(x)\\geq0$ en $[a,b]$. El área entre la gráfica de $f$ y el eje $x$ es

$$
A=\\int_a^b f(x)\\,dx
$$

La integral puede interpretarse como el límite de sumas de rectángulos cada vez más estrechos.

:::function-graph{expression="x^2" restriction="-1<=x<=3"}
:::

Por ejemplo, el área bajo $f(x)=x^2$ entre $x=0$ y $x=2$ es

$$
A=\\int_0^2x^2\\,dx
$$

Usando una primitiva,

$$
A=\\left[\\frac{x^3}{3}\\right]_0^2
=\\frac{8}{3}
$$

Por tanto,

$$
\\boxed{A=\\frac{8}{3}}
$$

---

## 2. Cuando la función está por debajo del eje $x$

Una integral definida representa **área con signo**. Si $f(x)<0$, la integral es negativa.

El área geométrica siempre debe ser positiva, por lo que

$$
A=-\\int_a^b f(x)\\,dx
$$

cuando toda la función está por debajo del eje $x$.

En general,

$$
\\boxed{A=\\int_a^b|f(x)|\\,dx}
$$

proporciona el área geométrica entre la curva y el eje $x$.

---

## 3. Cuando la función cruza el eje $x$

Si la función cambia de signo dentro de $[a,b]$, no podemos utilizar directamente la integral para obtener el área geométrica total.

Primero debemos encontrar los ceros de $f$ y dividir el intervalo.

Por ejemplo, consideremos

$$
f(x)=x^2-1
$$

Los ceros son

$$
x=-1,\\qquad x=1
$$

El área total en $[-2,2]$ es

$$
A=
\\int_{-2}^{-1}(x^2-1)\\,dx
-\\int_{-1}^{1}(x^2-1)\\,dx
+\\int_1^2(x^2-1)\\,dx
$$

Equivalentemente,

$$
\\boxed{A=\\int_{-2}^{2}|x^2-1|\\,dx}
$$

El valor absoluto convierte automáticamente las contribuciones negativas en áreas positivas.

---

## 4. Área entre dos curvas

Supongamos que $f(x)$ está por encima de $g(x)$ en $[a,b]$.

El área entre las dos curvas es

$$
\\boxed{A=\\int_a^b\\left(f(x)-g(x)\\right)\\,dx}
$$

La idea fundamental es

$$
\\text{área}=\\int(\\text{función superior}-\\text{función inferior})\\,dx
$$

Por ejemplo,

$$
f(x)=x+2,\\qquad g(x)=x^2
$$

Primero encontramos los puntos de intersección:

$$
x+2=x^2
$$

$$
x^2-x-2=0
$$

$$
(x-2)(x+1)=0
$$

Por tanto,

$$
x=-1,\\qquad x=2
$$

En este intervalo, $x+2$ está por encima de $x^2$, por lo que

$$
A=\\int_{-1}^{2}(x+2-x^2)\\,dx
$$

Evaluando,

$$
A=
\\left[
\\frac{x^2}{2}+2x-\\frac{x^3}{3}
\\right]_{-1}^{2}
$$

y obtenemos

$$
\\boxed{A=\\frac{9}{2}}
$$

---

## 5. Área respecto de $y$

A veces es más sencillo integrar horizontalmente.

Si las curvas están escritas como

$$
x=f(y),\\qquad x=g(y)
$$

entonces

$$
\\boxed{A=\\int_c^d(\\text{función derecha}-\\text{función izquierda})\\,dy}
$$

Esto resulta útil cuando expresar las curvas como $y=f(x)$ es complicado.

Por tanto:

- Franjas verticales $\\rightarrow$ integrar respecto de $x$.
- Franjas horizontales $\\rightarrow$ integrar respecto de $y$.

---

## 6. Elección de los límites

Los límites de integración normalmente proceden de:

1. Extremos dados.
2. Intersecciones entre curvas.
3. Ceros de una función cuando calculamos el área con el eje $x$.
4. Puntos donde cambia el orden de las funciones.

Por ejemplo, para calcular el área entre dos curvas, resolvemos

$$
f(x)=g(x)
$$

para determinar los puntos de intersección.

---

## 7. Procedimiento sistemático

Para calcular un área mediante integrales:

1. **Identifica la región.**
2. **Encuentra las intersecciones o los límites.**
3. **Determina qué curva está arriba o abajo.**
4. **Elige franjas verticales u horizontales.**
5. **Divide la integral si cambia el orden de las curvas.**
6. **Plantea la integral definida.**
7. **Calcula una primitiva.**
8. **Evalúa los límites.**
9. **Comprueba que el área geométrica final sea no negativa.**

---

## 8. Errores habituales

### Olvidar la diferencia entre las curvas

Para dos curvas,

$$
\\int_a^b f(x)\\,dx
$$

no representa generalmente el área entre ellas.

Debemos utilizar

$$
\\boxed{\\int_a^b(\\text{superior}-\\text{inferior})\\,dx}
$$

### Ignorar un cambio de signo

Si una curva cruza el eje, debemos dividir la integral o utilizar un valor absoluto.

### Utilizar límites incorrectos

Los límites deben corresponder a la región cuya área queremos calcular.

### Elegir una dirección inadecuada

Si resulta complicado expresar las funciones como $y=f(x)$, puede ser más sencillo integrar respecto de $y$.

---

## Resumen

Las fórmulas fundamentales son:

### Área bajo una curva

$$
\\boxed{A=\\int_a^b f(x)\\,dx}
$$

cuando $f(x)\\geq0$.

### Área geométrica con el eje $x$

$$
\\boxed{A=\\int_a^b|f(x)|\\,dx}
$$

### Área entre dos curvas

$$
\\boxed{A=\\int_a^b(\\text{superior}-\\text{inferior})\\,dx}
$$

### Área mediante franjas horizontales

$$
\\boxed{A=\\int_c^d(\\text{derecha}-\\text{izquierda})\\,dy}
$$

El principio central es interpretar la integral como la acumulación de infinitas franjas pequeñas de área.
`,i=`# Àrea mitjançant integrals

La integral definida proporciona un mètode general per calcular l'àrea situada entre una corba i els eixos de coordenades o entre dues corbes.

## 1. Àrea sota una corba

Suposem que $f(x)\\geq0$ en $[a,b]$. L'àrea entre el gràfic de $f$ i l'eix $x$ és

$$
A=\\int_a^b f(x)\\,dx
$$

La integral es pot interpretar com el límit de sumes de rectangles cada vegada més prims.

:::function-graph{expression="x^2" restriction="-1<=x<=3"}
:::

Per exemple, l'àrea sota $f(x)=x^2$ entre $x=0$ i $x=2$ és

$$
A=\\int_0^2x^2\\,dx
$$

Calculant la primitiva,

$$
A=\\left[\\frac{x^3}{3}\\right]_0^2
=\\frac{8}{3}
$$

Per tant,

$$
\\boxed{A=\\frac{8}{3}}
$$

---

## 2. Quan la funció està per sota de l'eix $x$

Una integral definida representa una **àrea amb signe**. Si $f(x)<0$, la integral és negativa.

L'àrea geomètrica sempre ha de ser positiva, de manera que

$$
A=-\\int_a^b f(x)\\,dx
$$

quan tota la funció està per sota de l'eix $x$.

En general,

$$
\\boxed{A=\\int_a^b|f(x)|\\,dx}
$$

dona l'àrea geomètrica entre la corba i l'eix $x$.

---

## 3. Quan la funció talla l'eix $x$

Si la funció canvia de signe dins de $[a,b]$, no podem utilitzar directament la integral per obtenir l'àrea geomètrica total.

Primer cal trobar els zeros de $f$ i dividir l'interval.

Per exemple, considerem

$$
f(x)=x^2-1
$$

Els zeros són

$$
x=-1,\\qquad x=1
$$

L'àrea total a $[-2,2]$ és

$$
A=
\\int_{-2}^{-1}(x^2-1)\\,dx
-\\int_{-1}^{1}(x^2-1)\\,dx
+\\int_1^2(x^2-1)\\,dx
$$

Equivalentment,

$$
\\boxed{A=\\int_{-2}^{2}|x^2-1|\\,dx}
$$

El valor absolut converteix automàticament les contribucions negatives en àrees positives.

---

## 4. Àrea entre dues corbes

Suposem que $f(x)$ està per sobre de $g(x)$ en $[a,b]$.

L'àrea entre les dues corbes és

$$
\\boxed{A=\\int_a^b\\left(f(x)-g(x)\\right)\\,dx}
$$

La idea principal és

$$
\\text{àrea}=\\int(\\text{funció superior}-\\text{funció inferior})\\,dx
$$

Per exemple,

$$
f(x)=x+2,\\qquad g(x)=x^2
$$

Primer trobem els punts d'intersecció:

$$
x+2=x^2
$$

$$
x^2-x-2=0
$$

$$
(x-2)(x+1)=0
$$

Per tant,

$$
x=-1,\\qquad x=2
$$

En aquest interval, $x+2$ està per sobre de $x^2$, de manera que

$$
A=\\int_{-1}^{2}(x+2-x^2)\\,dx
$$

Calculant,

$$
A=
\\left[
\\frac{x^2}{2}+2x-\\frac{x^3}{3}
\\right]_{-1}^{2}
$$

i obtenim

$$
\\boxed{A=\\frac{9}{2}}
$$

---

## 5. Àrea respecte de $y$

De vegades és més senzill integrar horitzontalment.

Si les corbes estan escrites com

$$
x=f(y),\\qquad x=g(y)
$$

aleshores

$$
\\boxed{A=\\int_c^d(\\text{funció dreta}-\\text{funció esquerra})\\,dy}
$$

Això és útil quan expressar les corbes com $y=f(x)$ és complicat.

Per tant:

- Franges verticals $\\rightarrow$ integrar respecte de $x$.
- Franges horitzontals $\\rightarrow$ integrar respecte de $y$.

---

## 6. Elecció dels límits

Els límits d'integració normalment provenen de:

1. Extrems donats.
2. Interseccions entre corbes.
3. Zeros d'una funció quan calculem l'àrea amb l'eix $x$.
4. Punts on canvia l'ordre entre les funcions.

Per exemple, per trobar l'àrea entre dues corbes, resolem

$$
f(x)=g(x)
$$

per obtenir els punts d'intersecció.

---

## 7. Procediment sistemàtic

Per calcular una àrea mitjançant integrals:

1. **Identifica la regió.**
2. **Troba les interseccions o els límits.**
3. **Determina quina corba està per sobre o per sota.**
4. **Tria franges verticals o horitzontals.**
5. **Divideix la integral si canvia l'ordre de les corbes.**
6. **Planteja la integral definida.**
7. **Troba una primitiva.**
8. **Avalua els límits.**
9. **Comprova que l'àrea geomètrica final sigui no negativa.**

---

## 8. Errors habituals

### Oblidar la diferència entre les corbes

Per a dues corbes,

$$
\\int_a^b f(x)\\,dx
$$

no representa generalment l'àrea entre elles.

Cal utilitzar

$$
\\boxed{\\int_a^b(\\text{superior}-\\text{inferior})\\,dx}
$$

### Ignorar un canvi de signe

Si una corba talla l'eix, cal dividir la integral o utilitzar un valor absolut.

### Utilitzar límits incorrectes

Els límits han de correspondre a la regió de la qual volem calcular l'àrea.

### Escollir una direcció inadequada

Si és complicat expressar les funcions com $y=f(x)$, pot ser més senzill integrar respecte de $y$.

---

## Resum

Les fórmules fonamentals són:

### Àrea sota una corba

$$
\\boxed{A=\\int_a^b f(x)\\,dx}
$$

quan $f(x)\\geq0$.

### Àrea geomètrica amb l'eix $x$

$$
\\boxed{A=\\int_a^b|f(x)|\\,dx}
$$

### Àrea entre dues corbes

$$
\\boxed{A=\\int_a^b(\\text{superior}-\\text{inferior})\\,dx}
$$

### Àrea amb franges horitzontals

$$
\\boxed{A=\\int_c^d(\\text{dreta}-\\text{esquerra})\\,dy}
$$

El principi central és interpretar la integral com l'acumulació d'una quantitat infinita de petites franges d'àrea.
`,a=`# Area Using Integrals

The definite integral provides a general method for calculating the area between a curve and the coordinate axes or between two curves.

## 1. Area under a curve

Suppose $f(x)\\geq 0$ on $[a,b]$. The area between the graph of $f$ and the $x$-axis is

$$
A=\\int_a^b f(x)\\,dx
$$

The integral can be understood as the limit of sums of thin rectangles.

:::function-graph{expression="x^2" restriction="-1<=x<=3"}
:::

For example, the area under $f(x)=x^2$ from $x=0$ to $x=2$ is

$$
A=\\int_0^2x^2\\,dx
$$

Using the antiderivative,

$$
A=\\left[\\frac{x^3}{3}\\right]_0^2
=\\frac{8}{3}
$$

Therefore,

$$
\\boxed{A=\\frac{8}{3}}
$$

---

## 2. When the function is below the $x$-axis

A definite integral represents **signed area**. If $f(x)<0$, the integral is negative.

The geometric area must always be positive, so

$$
A=-\\int_a^b f(x)\\,dx
$$

when the entire function is below the $x$-axis.

More generally,

$$
\\boxed{A=\\int_a^b|f(x)|\\,dx}
$$

gives the geometric area between the curve and the $x$-axis.

---

## 3. Function crossing the $x$-axis

If the function changes sign inside $[a,b]$, the integral cannot be used directly to obtain the total geometric area.

First find the zeros of $f$ and split the interval.

For example, consider

$$
f(x)=x^2-1
$$

The zeros are

$$
x=-1,\\qquad x=1
$$

The total area on $[-2,2]$ is

$$
A=
\\int_{-2}^{-1}(x^2-1)\\,dx
-\\int_{-1}^{1}(x^2-1)\\,dx
+\\int_1^2(x^2-1)\\,dx
$$

Equivalently,

$$
\\boxed{A=\\int_{-2}^{2}|x^2-1|\\,dx}
$$

The absolute value automatically converts negative contributions into positive areas.

---

## 4. Area between two curves

Suppose $f(x)$ is above $g(x)$ on $[a,b]$.

The area between the curves is

$$
\\boxed{A=\\int_a^b\\left(f(x)-g(x)\\right)\\,dx}
$$

The key idea is

$$
\\text{area}=\\int(\\text{upper function}-\\text{lower function})\\,dx
$$

For example,

$$
f(x)=x+2,\\qquad g(x)=x^2
$$

First find their intersection points:

$$
x+2=x^2
$$

$$
x^2-x-2=0
$$

$$
(x-2)(x+1)=0
$$

Thus,

$$
x=-1,\\qquad x=2
$$

On this interval, $x+2$ is above $x^2$, so

$$
A=\\int_{-1}^{2}(x+2-x^2)\\,dx
$$

Evaluating,

$$
A=
\\left[
\\frac{x^2}{2}+2x-\\frac{x^3}{3}
\\right]_{-1}^{2}
$$

and therefore

$$
\\boxed{A=\\frac{9}{2}}
$$

---

## 5. Area with respect to $y$

Sometimes it is easier to integrate horizontally.

If the curves are written as

$$
x=f(y),\\qquad x=g(y)
$$

then

$$
\\boxed{A=\\int_c^d(\\text{right function}-\\text{left function})\\,dy}
$$

This is useful when solving the curves for $y$ as a function of $x$ would be complicated.

The choice is therefore:

- Vertical slices $\\rightarrow$ integrate with respect to $x$.
- Horizontal slices $\\rightarrow$ integrate with respect to $y$.

---

## 6. Choosing the correct limits

The limits of integration normally come from:

1. Given endpoints.
2. Intersections between curves.
3. Zeros of a function when calculating area with the $x$-axis.
4. Points where the upper and lower functions change.

For example, for the region between two curves, solve

$$
f(x)=g(x)
$$

to determine the intersection points.

---

## 7. A systematic procedure

To calculate an area using integrals:

1. **Identify the region.**
2. **Find the relevant intersection points or limits.**
3. **Determine which curve is above or below.**
4. **Choose vertical or horizontal slices.**
5. **Split the integral if the order of the curves changes.**
6. **Set up the definite integral.**
7. **Find an antiderivative.**
8. **Evaluate the limits.**
9. **Check that the final geometric area is non-negative.**

---

## 8. Common mistakes

### Forgetting the difference between curves

For two curves,

$$
\\int_a^b f(x)\\,dx
$$

is not generally the area between them.

Use

$$
\\boxed{\\int_a^b(\\text{upper}-\\text{lower})\\,dx}
$$

### Ignoring a sign change

If a curve crosses the axis, split the integral or use an absolute value.

### Using incorrect limits

The limits must correspond to the region being measured.

### Choosing the wrong direction

If the functions are difficult to express as $y=f(x)$, integrating with respect to $y$ may be simpler.

---

## Summary

The fundamental formulas are:

### Area under a curve

$$
\\boxed{A=\\int_a^b f(x)\\,dx}
$$

when $f(x)\\geq0$.

### Geometric area with the $x$-axis

$$
\\boxed{A=\\int_a^b|f(x)|\\,dx}
$$

### Area between two curves

$$
\\boxed{A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx}
$$

### Area using horizontal slices

$$
\\boxed{A=\\int_c^d(\\text{right}-\\text{left})\\,dy}
$$

The central principle is to interpret the integral as the accumulation of infinitely many thin slices of area.
`;function o(){let{locale:o}=t();return e(n,{id:`area-using-integrals`,content:{es:r,ca:i,en:a}[o]})}export{o as default};