# Integrales

Las integrales son una de las herramientas fundamentales del cálculo. Permiten estudiar acumulaciones, calcular áreas, obtener desplazamientos a partir de velocidades y resolver muchos problemas de ciencias e ingeniería.

## 1. Idea fundamental

La integral puede interpretarse como una **acumulación**.

Por ejemplo, si conocemos una función $f(x)$, podemos acumular sus valores entre dos puntos mediante una integral definida:

$$
\int_a^b f(x)\,dx
$$

Geométricamente, esta integral representa el **área con signo** entre la gráfica de $f(x)$ y el eje $x$, desde $x=a$ hasta $x=b$.

- Las regiones por encima del eje $x$ aportan área positiva.
- Las regiones por debajo del eje $x$ aportan área negativa.

## 2. La notación de la integral

Una integral tiene varios elementos:

$$
\int_a^b f(x)\,dx
$$

- $\int$: símbolo de integración.
- $a$: límite inferior.
- $b$: límite superior.
- $f(x)$: función que integramos, llamada **integrando**.
- $dx$: indica la variable de integración.

Por ejemplo:

$$
\int_0^3 x^2\,dx
$$

significa integrar $x^2$ desde $0$ hasta $3$.

## 3. Integral indefinida

Una integral indefinida busca una función cuya derivada sea la función original:

$$
\int f(x)\,dx = F(x)+C
$$

donde:

$$
F'(x)=f(x)
$$

La constante $C$ aparece porque muchas funciones tienen la misma derivada.

Por ejemplo:

$$
\int 2x\,dx=x^2+C
$$

porque:

$$
\frac{d}{dx}(x^2)=2x
$$

## 4. Integral definida

Una integral definida tiene límites:

$$
\int_a^b f(x)\,dx
$$

Si $F$ es una primitiva de $f$, podemos calcularla mediante el teorema fundamental del cálculo:

$$
\int_a^b f(x)\,dx=F(b)-F(a)
$$

Por ejemplo:

$$
\int_0^2 x\,dx
$$

Una primitiva de $x$ es:

$$
F(x)=\frac{x^2}{2}
$$

Por tanto:

$$
\int_0^2 x\,dx
=

\left[\frac{x^2}{2}\right]_0^2
=

2
$$

## 5. Propiedades básicas

### Linealidad

$$
\int (af(x)+bg(x))\,dx
=

a\int f(x)\,dx+b\int g(x)\,dx
$$

donde $a$ y $b$ son constantes.

También:

$$
\int_a^b (f(x)+g(x))\,dx
=

\int_a^b f(x)\,dx+
\int_a^b g(x)\,dx
$$

### Cambio de orientación

$$
\int_a^b f(x)\,dx
=

-\int_b^a f(x)\,dx
$$

### Intervalo de longitud cero

$$
\int_a^a f(x)\,dx=0
$$

### División de un intervalo

Si $a<c<b$:

$$
\int_a^b f(x)\,dx
=

\int_a^c f(x)\,dx+
\int_c^b f(x)\,dx
$$

## 6. Integrales de potencias

Una de las reglas más importantes es:

$$
\int x^n\,dx
=

\frac{x^{n+1}}{n+1}+C
$$

si:

$$
n\neq -1
$$

Por ejemplo:

$$
\int x^3\,dx
=

\frac{x^4}{4}+C
$$

Otro ejemplo:

$$
\int 5x^2\,dx
=

\frac{5x^3}{3}+C
$$

## 7. Caso especial: $1/x$

La regla de las potencias no se puede utilizar directamente cuando $n=-1$.

En ese caso:

$$
\int \frac{1}{x}\,dx
=

\ln|x|+C
$$

El valor absoluto es importante porque la función $1/x$ está definida tanto para $x>0$ como para $x<0$.

## 8. Integrales de funciones exponenciales

Para la función exponencial:

$$
\int e^x\,dx=e^x+C
$$

Para una base $a>0$, $a\neq1$:

$$
\int a^x\,dx
=

\frac{a^x}{\ln(a)}+C
$$

## 9. Integrales trigonométricas básicas

Algunas primitivas importantes son:

$$
\int \cos x\,dx=\sin x+C
$$

$$
\int \sin x\,dx=-\cos x+C
$$

También:

$$
\int \frac{1}{\cos^2x}\,dx=\tan x+C
$$

y:

$$
\int \frac{1}{\sin^2x}\,dx=-\cot x+C
$$

## 10. Sustitución

El cambio de variable permite transformar una integral complicada en otra más sencilla.

Si:

$$
u=g(x)
$$

entonces:

$$
du=g'(x)\,dx
$$

Por ejemplo:

$$
\int 2x\cos(x^2)\,dx
$$

Tomamos:

$$
u=x^2
$$

Entonces:

$$
du=2x\,dx
$$

y obtenemos:

$$
\int \cos(u)\,du
=

\sin(u)+C
$$

Finalmente:

$$
\boxed{\sin(x^2)+C}
$$

## 11. Integración por partes

La integración por partes se basa en la regla del producto de las derivadas:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

Es especialmente útil cuando tenemos un producto de funciones.

Por ejemplo:

$$
\int x e^x\,dx
$$

Tomamos:

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

Aplicando la fórmula:

$$
\int xe^x\,dx
=

xe^x-\int e^x\,dx
$$

Por tanto:

$$
\boxed{xe^x-e^x+C}
$$

## 12. Área bajo una curva

Si:

$$
f(x)\geq0
$$

en el intervalo $[a,b]$, entonces:

$$
A=\int_a^b f(x)\,dx
$$

representa el área comprendida entre la curva y el eje $x$.

Por ejemplo:

$$
A=\int_0^2 x^2\,dx
$$

resulta:

$$
A=\frac{8}{3}
$$

## 13. Área entre dos funciones

Si $f(x)$ está por encima de $g(x)$, el área entre ambas funciones es:

$$
A=
\int_a^b
\left(f(x)-g(x)\right)\,dx
$$

Es necesario determinar primero los puntos de intersección para conocer los límites de integración.

## 14. Integral como acumulación

Las integrales no solamente representan áreas.

También permiten acumular magnitudes.

Si $v(t)$ representa una velocidad, el desplazamiento entre $t=a$ y $t=b$ es:

$$
\Delta s=
\int_a^b v(t)\,dt
$$

Si $r(t)$ representa una tasa de crecimiento, la variación acumulada es:

$$
\Delta Q=
\int_a^b r(t)\,dt
$$

## 15. Relación entre derivadas e integrales

La derivación y la integración son operaciones estrechamente relacionadas.

El teorema fundamental del cálculo establece que:

$$
\frac{d}{dx}
\left(
\int_a^x f(t)\,dt
\right)
=

f(x)
$$

Es decir, derivar una acumulación devuelve la función original.

También:

$$
\int_a^b f(x)\,dx
=

F(b)-F(a)
$$

cuando $F'(x)=f(x)$.

## 16. Integrales impropias

Una integral puede tener límites infinitos:

$$
\int_a^\infty f(x)\,dx
$$

En ese caso se define mediante un límite:

$$
\int_a^\infty f(x)\,dx
=

\lim_{b\to\infty}
\int_a^b f(x)\,dx
$$

También puede aparecer una singularidad dentro del intervalo.

Por ejemplo:

$$
\int_0^1\frac{1}{\sqrt{x}}\,dx
$$

requiere tratar el comportamiento de la función cerca de $x=0$.

## 17. Integrales múltiples

Para funciones de varias variables aparecen integrales múltiples.

Integral doble:

$$
\iint_D f(x,y)\,dA
$$

Integral triple:

$$
\iiint_V f(x,y,z)\,dV
$$

Estas herramientas permiten calcular, entre otras cosas:

- áreas;
- volúmenes;
- masas;
- centros de masa;
- cantidades acumuladas en regiones.

## 18. Integrales de línea

Una integral de línea integra una función a lo largo de una curva:

$$
\int_C f\,ds
$$

También pueden aparecer integrales de campos vectoriales:

$$
\int_C \vec F\cdot d\vec r
$$

Son importantes en física e ingeniería, especialmente en el estudio del trabajo realizado por una fuerza.

## 19. Símbolos importantes

| Símbolo    | Significado                       |
| ---------- | --------------------------------- |
| $\int$     | Integral                          |
| $\int_a^b$ | Integral definida entre $a$ y $b$ |
| $dx$       | Diferencial respecto de $x$       |
| $C$        | Constante de integración          |
| $F(x)$     | Primitiva de $f(x)$               |
| $\iint$    | Integral doble                    |
| $\iiint$   | Integral triple                   |
| $\oint$    | Integral sobre una curva cerrada  |
| $\int_C$   | Integral de línea                 |

## 20. Errores frecuentes

### Olvidar la constante

Incorrecto:

$$
\int 2x\,dx=x^2
$$

Correcto:

$$
\int 2x\,dx=x^2+C
$$

### Aplicar mal la regla de las potencias

Incorrecto:

$$
\int x^2\,dx=\frac{x^2}{2}
$$

Correcto:

$$
\int x^2\,dx=\frac{x^3}{3}+C
$$

### Confundir integral definida e indefinida

Una integral indefinida produce una familia de funciones:

$$
\int f(x)\,dx=F(x)+C
$$

Una integral definida produce un número:

$$
\int_a^b f(x)\,dx
$$

### Confundir área con integral con signo

Si la función toma valores negativos, la integral definida puede no coincidir con el área geométrica total.

En ese caso puede ser necesario dividir el intervalo o utilizar:

$$
\int_a^b |f(x)|\,dx
$$

## 21. Procedimiento general

Para resolver una integral:

1. Identifica la función que se está integrando.
2. Comprueba si puedes aplicar una regla básica.
3. Simplifica la expresión si es necesario.
4. Considera un cambio de variable si aparece una composición.
5. Considera integración por partes si aparece un producto adecuado.
6. Calcula la primitiva.
7. Añade $C$ si la integral es indefinida.
8. Si es definida, aplica los límites.
9. Comprueba el resultado derivando la primitiva cuando sea posible.
10. Comprueba las condiciones de dominio.

## 22. Idea fundamental

La idea esencial de la integración puede resumirse así:

$$
\boxed{
\text{integrar} \approx \text{acumular}
}
$$

y, en el contexto de primitivas:

$$
\boxed{
\int f(x)\,dx=F(x)+C
\iff
F'(x)=f(x)
}
$$

La integral y la derivada son, en muchos sentidos, operaciones inversas.
