# Área mediante integrales

La integral definida proporciona un método general para calcular el área situada entre una curva y los ejes de coordenadas o entre dos curvas.

## 1. Área bajo una curva

Supongamos que $f(x)\geq0$ en $[a,b]$. El área entre la gráfica de $f$ y el eje $x$ es

$$
A=\int_a^b f(x)\,dx
$$

La integral puede interpretarse como el límite de sumas de rectángulos cada vez más estrechos.

:::function-graph{expression="x^2" restriction="-1<=x<=3"}
:::

Por ejemplo, el área bajo $f(x)=x^2$ entre $x=0$ y $x=2$ es

$$
A=\int_0^2x^2\,dx
$$

Usando una primitiva,

$$
A=\left[\frac{x^3}{3}\right]_0^2
=\frac{8}{3}
$$

Por tanto,

$$
\boxed{A=\frac{8}{3}}
$$

---

## 2. Cuando la función está por debajo del eje $x$

Una integral definida representa **área con signo**. Si $f(x)<0$, la integral es negativa.

El área geométrica siempre debe ser positiva, por lo que

$$
A=-\int_a^b f(x)\,dx
$$

cuando toda la función está por debajo del eje $x$.

En general,

$$
\boxed{A=\int_a^b|f(x)|\,dx}
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
x=-1,\qquad x=1
$$

El área total en $[-2,2]$ es

$$
A=
\int_{-2}^{-1}(x^2-1)\,dx
-\int_{-1}^{1}(x^2-1)\,dx
+\int_1^2(x^2-1)\,dx
$$

Equivalentemente,

$$
\boxed{A=\int_{-2}^{2}|x^2-1|\,dx}
$$

El valor absoluto convierte automáticamente las contribuciones negativas en áreas positivas.

---

## 4. Área entre dos curvas

Supongamos que $f(x)$ está por encima de $g(x)$ en $[a,b]$.

El área entre las dos curvas es

$$
\boxed{A=\int_a^b\left(f(x)-g(x)\right)\,dx}
$$

La idea fundamental es

$$
\text{área}=\int(\text{función superior}-\text{función inferior})\,dx
$$

Por ejemplo,

$$
f(x)=x+2,\qquad g(x)=x^2
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
x=-1,\qquad x=2
$$

En este intervalo, $x+2$ está por encima de $x^2$, por lo que

$$
A=\int_{-1}^{2}(x+2-x^2)\,dx
$$

Evaluando,

$$
A=
\left[
\frac{x^2}{2}+2x-\frac{x^3}{3}
\right]_{-1}^{2}
$$

y obtenemos

$$
\boxed{A=\frac{9}{2}}
$$

---

## 5. Área respecto de $y$

A veces es más sencillo integrar horizontalmente.

Si las curvas están escritas como

$$
x=f(y),\qquad x=g(y)
$$

entonces

$$
\boxed{A=\int_c^d(\text{función derecha}-\text{función izquierda})\,dy}
$$

Esto resulta útil cuando expresar las curvas como $y=f(x)$ es complicado.

Por tanto:

- Franjas verticales $\rightarrow$ integrar respecto de $x$.
- Franjas horizontales $\rightarrow$ integrar respecto de $y$.

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
\int_a^b f(x)\,dx
$$

no representa generalmente el área entre ellas.

Debemos utilizar

$$
\boxed{\int_a^b(\text{superior}-\text{inferior})\,dx}
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
\boxed{A=\int_a^b f(x)\,dx}
$$

cuando $f(x)\geq0$.

### Área geométrica con el eje $x$

$$
\boxed{A=\int_a^b|f(x)|\,dx}
$$

### Área entre dos curvas

$$
\boxed{A=\int_a^b(\text{superior}-\text{inferior})\,dx}
$$

### Área mediante franjas horizontales

$$
\boxed{A=\int_c^d(\text{derecha}-\text{izquierda})\,dy}
$$

El principio central es interpretar la integral como la acumulación de infinitas franjas pequeñas de área.
