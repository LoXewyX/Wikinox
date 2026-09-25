# Integración por partes

La **integración por partes** es una técnica utilizada para integrar productos de funciones cuando la integración directa o la sustitución no resultan adecuadas.

Se basa en la regla del producto de la derivación.

La fórmula fundamental es:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

La idea consiste en transformar una integral difícil en otra que sea más sencilla de calcular.

---

## De dónde viene la fórmula

Partimos de la regla del producto:

$$
\frac{d}{dx}(uv)
=
u\frac{dv}{dx}
+
v\frac{du}{dx}
$$

En forma diferencial:

$$
d(uv)=u\,dv+v\,du
$$

Despejando:

$$
u\,dv=d(uv)-v\,du
$$

Integramos ambos lados:

$$
\int u\,dv
=
\int d(uv)-\int v\,du
$$

Por tanto:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

---

## Procedimiento

Para aplicar integración por partes:

1. Elegir $u$.
2. Elegir $dv$.
3. Calcular $du$.
4. Integrar $dv$ para obtener $v$.
5. Aplicar:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

6. Simplificar y calcular la nueva integral.

La elección de $u$ y $dv$ es la parte más importante del método.

---

## Cómo elegir $u$

Una regla práctica habitual es **LIATE**, que ordena algunos tipos de funciones según su prioridad para elegir $u$:

1. **L** — Logarítmicas
2. **I** — Inversas trigonométricas
3. **A** — Algebraicas
4. **T** — Trigonométricas
5. **E** — Exponenciales

Por ejemplo, en:

$$
\int x e^x\,dx
$$

elegimos:

$$
u=x
$$

porque es algebraica, mientras que:

$$
dv=e^x\,dx
$$

es exponencial.

LIATE es una guía, no una regla absoluta. La elección debe producir una integral más sencilla.

---

## Ejemplo básico

Consideremos:

$$
\int x e^x\,dx
$$

Elegimos:

$$
u=x
$$

y:

$$
dv=e^x\,dx
$$

Entonces:

$$
du=dx
$$

y:

$$
v=e^x
$$

Aplicamos la fórmula:

$$
\int u\,dv=uv-\int v\,du
$$

$$
\int xe^x\,dx
=
xe^x-\int e^x\,dx
$$

Por tanto:

$$
\boxed{
\int xe^x\,dx
=
xe^x-e^x+C
}
$$

o:

$$
\boxed{
\int xe^x\,dx=e^x(x-1)+C
}
$$

---

## Ejemplo con un logaritmo

Consideremos:

$$
\int \ln(x)\,dx
$$

Aunque no parece un producto, podemos escribir:

$$
\int \ln(x)\cdot1\,dx
$$

Elegimos:

$$
u=\ln(x)
$$

y:

$$
dv=dx
$$

Entonces:

$$
du=\frac1x\,dx
$$

y:

$$
v=x
$$

Aplicamos integración por partes:

$$
\int\ln(x)\,dx
=
x\ln(x)-\int x\frac1x\,dx
$$

$$
=
x\ln(x)-\int1\,dx
$$

Por tanto:

$$
\boxed{
\int\ln(x)\,dx
=
x\ln(x)-x+C
}
$$

---

## Ejemplo con una función trigonométrica

Consideremos:

$$
\int x\cos(x)\,dx
$$

Elegimos:

$$
u=x
$$

$$
dv=\cos(x)\,dx
$$

Entonces:

$$
du=dx
$$

$$
v=\sin(x)
$$

Aplicamos la fórmula:

$$
\int x\cos(x)\,dx
=
x\sin(x)-\int\sin(x)\,dx
$$

Como:

$$
\int\sin(x)\,dx=-\cos(x)
$$

obtenemos:

$$
\boxed{
\int x\cos(x)\,dx
=
x\sin(x)+\cos(x)+C
}
$$

---

## Ejemplo con una potencia y un logaritmo

Consideremos:

$$
\int x^2\ln(x)\,dx
$$

Elegimos:

$$
u=\ln(x)
$$

$$
dv=x^2\,dx
$$

Entonces:

$$
du=\frac1x\,dx
$$

y:

$$
v=\frac{x^3}{3}
$$

Aplicamos:

$$
\int x^2\ln(x)\,dx
=
\frac{x^3}{3}\ln(x)
-
\int\frac{x^3}{3}\frac1x\,dx
$$

$$
=
\frac{x^3}{3}\ln(x)
-
\frac13\int x^2\,dx
$$

Por tanto:

$$
\boxed{
\int x^2\ln(x)\,dx
=
\frac{x^3}{3}\ln(x)-\frac{x^3}{9}+C
}
$$

---

## Integración por partes repetida

Algunas integrales requieren aplicar integración por partes más de una vez.

Consideremos:

$$
\int x^2e^x\,dx
$$

Primera aplicación:

$$
u=x^2,
\qquad
dv=e^x\,dx
$$

Entonces:

$$
du=2x\,dx,
\qquad
v=e^x
$$

Por tanto:

$$
\int x^2e^x\,dx
=
x^2e^x-2\int xe^x\,dx
$$

Ya sabemos que:

$$
\int xe^x\,dx=e^x(x-1)
$$

Sustituyendo:

$$
\int x^2e^x\,dx
=
x^2e^x-2e^x(x-1)+C
$$

Simplificando:

$$
\boxed{
\int x^2e^x\,dx
=
e^x(x^2-2x+2)+C
}
$$

---

## Integración por partes con integrales trigonométricas

También puede utilizarse cuando el producto contiene funciones trigonométricas.

Por ejemplo:

$$
\int x\sin(x)\,dx
$$

Elegimos:

$$
u=x,
\qquad
dv=\sin(x)\,dx
$$

Entonces:

$$
du=dx,
\qquad
v=-\cos(x)
$$

Aplicamos la fórmula:

$$
\int x\sin(x)\,dx
=
-x\cos(x)+\int\cos(x)\,dx
$$

Por tanto:

$$
\boxed{
\int x\sin(x)\,dx
=
-x\cos(x)+\sin(x)+C
}
$$

---

## Cuando aparece de nuevo la integral original

Existe un caso especialmente interesante en el que, después de aplicar integración por partes, vuelve a aparecer la integral original.

Por ejemplo:

$$
\int e^x\cos(x)\,dx
$$

Sea:

$$
I=\int e^x\cos(x)\,dx
$$

Primera integración por partes:

$$
u=\cos(x),
\qquad
dv=e^x\,dx
$$

Entonces:

$$
du=-\sin(x)\,dx,
\qquad
v=e^x
$$

Por tanto:

$$
I=e^x\cos(x)+\int e^x\sin(x)\,dx
$$

Definimos:

$$
J=\int e^x\sin(x)\,dx
$$

Aplicamos integración por partes de nuevo:

$$
u=\sin(x),
\qquad
dv=e^x\,dx
$$

Entonces:

$$
du=\cos(x)\,dx,
\qquad
v=e^x
$$

Así:

$$
J=e^x\sin(x)-\int e^x\cos(x)\,dx
$$

Como la última integral es $I$:

$$
J=e^x\sin(x)-I
$$

Sustituimos en la primera expresión:

$$
I=e^x\cos(x)+e^x\sin(x)-I
$$

Por tanto:

$$
2I=e^x(\sin(x)+\cos(x))
$$

y finalmente:

$$
\boxed{
\int e^x\cos(x)\,dx
=
\frac{e^x}{2}
\left(\sin(x)+\cos(x)\right)+C
}
$$

---

## Integración por partes en integrales definidas

La fórmula también funciona para integrales definidas:

$$
\boxed{
\int_a^b u\,dv
=
[uv]_a^b-\int_a^b v\,du
}
$$

### Ejemplo

Consideremos:

$$
\int_0^1 xe^x\,dx
$$

Elegimos:

$$
u=x,
\qquad
dv=e^x\,dx
$$

Entonces:

$$
du=dx,
\qquad
v=e^x
$$

Aplicamos:

$$
\int_0^1xe^x\,dx
=
[xe^x]_0^1
-
\int_0^1e^x\,dx
$$

Calculamos:

$$
[e^x]_0^1=e-1
$$

y:

$$
[xe^x]_0^1=e
$$

Por tanto:

$$
\boxed{
\int_0^1xe^x\,dx=1
}
$$

---

## Cómo saber cuándo usar integración por partes

La integración por partes suele ser apropiada cuando aparece un producto de funciones de tipos diferentes, especialmente:

$$
\boxed{
\text{polinomio}\times\text{exponencial}
}
$$

$$
\boxed{
\text{polinomio}\times\text{trigonométrica}
}
$$

$$
\boxed{
\text{polinomio}\times\text{logarítmica}
}
$$

También es útil para:

$$
\int\ln(x)\,dx
$$

y:

$$
\int\arctan(x)\,dx
$$

aunque no aparezcan inicialmente como productos.

---

## Integración por partes frente a sustitución

Las dos técnicas tienen objetivos diferentes.

### Sustitución

Es especialmente útil cuando aparece una función compuesta junto con su derivada:

$$
\int f(g(x))g'(x)\,dx
$$

### Integración por partes

Es especialmente útil cuando aparece un producto:

$$
\int u\,dv
$$

Una regla práctica es:

> Si una función compuesta viene acompañada de su derivada, considera sustitución. Si aparece un producto de funciones diferentes, considera integración por partes.

---

## Errores frecuentes

### Elegir mal $u$

La elección debe hacer que:

$$
\int v\,du
$$

sea más sencilla que la integral original.

### Olvidar calcular $du$

Después de elegir:

$$
u=g(x)
$$

debemos calcular:

$$
du=g'(x)\,dx
$$

### Integrar incorrectamente $dv$

Debemos calcular:

$$
v=\int dv
$$

### Olvidar el signo negativo

La fórmula es:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

No:

$$
uv+\int v\,du
$$

### Aplicar partes cuando sustitución es más sencilla

No todas las integrales de productos requieren integración por partes. Siempre conviene comprobar primero si existe una sustitución natural.

---

## Procedimiento resumido

Ante una integral:

$$
\int f(x)g(x)\,dx
$$

podemos intentar escribir:

$$
u=f(x)
$$

y:

$$
dv=g(x)\,dx
$$

Después calculamos:

$$
du=f'(x)\,dx
$$

y:

$$
v=\int g(x)\,dx
$$

Finalmente aplicamos:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

---

## Resumen

La integración por partes se basa en la regla del producto y permite transformar una integral en otra más sencilla.

La fórmula fundamental es:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

Para integrales definidas:

$$
\boxed{
\int_a^b u\,dv
=
[uv]_a^b-\int_a^b v\,du
}
$$

Una elección adecuada de $u$ debe simplificar la nueva integral.

La estrategia es:

$$
\boxed{
u\longrightarrow du,
\qquad
dv\longrightarrow v
}
$$

y después aplicar la fórmula.
