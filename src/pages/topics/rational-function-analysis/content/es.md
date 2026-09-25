# Análisis de funciones racionales

Una **función racional** es una función que puede escribirse como el cociente de dos polinomios:

$$
f(x)=\frac{P(x)}{Q(x)}
$$

donde $P(x)$ y $Q(x)$ son polinomios y $Q(x)\neq0$.

Por ejemplo:

$$
f(x)=\frac{x+1}{x-2}
$$

Las funciones racionales son especialmente importantes porque permiten estudiar **dominio, discontinuidades, asíntotas, límites y comportamiento en el infinito**.

## 1. Dominio

El denominador nunca puede ser cero. Por tanto, para determinar el dominio debemos resolver:

$$
Q(x)=0
$$

Por ejemplo:

$$
f(x)=\frac{x+1}{x-2}
$$

El denominador se anula cuando:

$$
x-2=0
$$

por lo que $x=2$ no pertenece al dominio.

Así:

$$
D_f=\mathbb{R}\setminus\{2\}
$$

:::function-graph{expression="(x+1)/(x-2)" restriction="-8<=x<=8"}
:::

## 2. Ceros de la función

Los ceros de una función racional se obtienen haciendo cero el numerador:

$$
P(x)=0
$$

siempre que el valor obtenido no anule también el denominador.

Por ejemplo:

$$
f(x)=\frac{x-3}{x+2}
$$

El numerador se anula en:

$$
x=3
$$

Por tanto, la función tiene un cero en $x=3$ y corta el eje $x$ en:

$$
(3,0)
$$

## 3. Intersección con el eje $y$

Para encontrar la intersección con el eje $y$, calculamos $f(0)$, siempre que $0$ pertenezca al dominio.

Por ejemplo:

$$
f(x)=\frac{x+1}{x-2}
$$

Entonces:

$$
f(0)=\frac{1}{-2}=-\frac12
$$

La intersección con el eje $y$ es:

$$
\left(0,-\frac12\right)
$$

## 4. Discontinuidades

Una función racional no está definida en los valores que hacen cero el denominador.

Hay dos situaciones principales:

- **Discontinuidad evitable**, cuando un factor se puede simplificar.
- **Asíntota vertical**, cuando el factor permanece en el denominador después de simplificar.

Por ejemplo:

$$
f(x)=\frac{(x-1)(x+2)}{(x-1)(x-3)}
$$

Podemos simplificar:

$$
f(x)=\frac{x+2}{x-3}
$$

pero $x=1$ sigue estando excluido del dominio original.

Por tanto:

- $x=1$ es una discontinuidad evitable.
- $x=3$ es una posible asíntota vertical.

## 5. Asíntotas verticales

Las asíntotas verticales aparecen en los valores donde el denominador se hace cero y el factor no se puede cancelar.

Si:

$$
Q(a)=0
$$

y el factor correspondiente no se simplifica, entonces normalmente:

$$
x=a
$$

es una asíntota vertical.

Por ejemplo:

$$
f(x)=\frac{1}{x-2}
$$

tiene la asíntota vertical:

$$
x=2
$$

## 6. Asíntota horizontal

Para determinar la asíntota horizontal podemos comparar los grados del numerador y del denominador.

Sea:

$$
f(x)=\frac{P(x)}{Q(x)}
$$

### Grado del numerador menor

Si:

$$
\deg(P)<\deg(Q)
$$

entonces:

$$
\lim_{x\to\pm\infty}f(x)=0
$$

y la asíntota horizontal es:

$$
y=0
$$

### Mismo grado

Si:

$$
\deg(P)=\deg(Q)
$$

la asíntota horizontal es el cociente entre los coeficientes principales.

Por ejemplo:

$$
f(x)=\frac{2x^2+1}{x^2-3}
$$

Entonces:

$$
y=2
$$

### Grado del numerador mayor

Si:

$$
\deg(P)>\deg(Q)
$$

no existe una asíntota horizontal.

Puede existir una asíntota oblicua o polinómica.

## 7. Asíntota oblicua

Cuando el grado del numerador es exactamente uno mayor que el del denominador, puede existir una asíntota oblicua.

Por ejemplo:

$$
f(x)=\frac{x^2+1}{x-1}
$$

Dividiendo los polinomios:

$$
\frac{x^2+1}{x-1}=x+1+\frac{2}{x-1}
$$

Cuando $x$ tiende a $\pm\infty$:

$$
\frac{2}{x-1}\to0
$$

Por tanto, la asíntota oblicua es:

$$
y=x+1
$$

## 8. Límites en las discontinuidades

Los límites permiten estudiar qué ocurre cuando nos acercamos a una discontinuidad.

Por ejemplo:

$$
f(x)=\frac{1}{x-2}
$$

Cuando $x$ se aproxima a $2$ por la izquierda:

$$
\lim_{x\to2^-}\frac{1}{x-2}=-\infty
$$

Mientras que por la derecha:

$$
\lim_{x\to2^+}\frac{1}{x-2}=+\infty
$$

Por tanto:

$$
\lim_{x\to2}f(x)
$$

no existe como límite finito y $x=2$ es una asíntota vertical.

## 9. Signo de una función racional

Para estudiar el signo debemos encontrar:

1. Los ceros del numerador.
2. Los ceros del denominador.
3. Los intervalos determinados por estos valores.
4. El signo de la función en cada intervalo.

Por ejemplo:

$$
f(x)=\frac{x-1}{x+2}
$$

Los valores importantes son:

$$
x=1
$$

y

$$
x=-2
$$

Estos valores dividen la recta real en tres intervalos:

$$
(-\infty,-2),\quad(-2,1),\quad(1,\infty)
$$

A partir de ellos podemos construir una tabla de signos.

## 10. Monotonía

Para estudiar la monotonía calculamos la derivada:

$$
f'(x)
$$

Los puntos críticos se obtienen resolviendo:

$$
f'(x)=0
$$

También debemos tener en cuenta los puntos donde la función no está definida.

Por ejemplo:

$$
f(x)=\frac{1}{x}
$$

tiene:

$$
f'(x)=-\frac{1}{x^2}
$$

Como:

$$
f'(x)<0
$$

para todo $x\neq0$, la función es decreciente en:

$$
(-\infty,0)
$$

y:

$$
(0,\infty)
$$

## 11. Simetría

Podemos estudiar la simetría calculando $f(-x)$.

Una función es **par** si:

$$
f(-x)=f(x)
$$

y es simétrica respecto al eje $y$.

Una función es **impar** si:

$$
f(-x)=-f(x)
$$

y es simétrica respecto al origen.

Por ejemplo:

$$
f(x)=\frac{1}{x}
$$

es impar porque:

$$
f(-x)=-f(x)
$$

## 12. Comportamiento en el infinito

También debemos estudiar:

$$
\lim_{x\to+\infty}f(x)
$$

y:

$$
\lim_{x\to-\infty}f(x)
$$

Estos límites permiten identificar las asíntotas horizontales y comprender cómo se comporta la función lejos del origen.

## 13. Ejemplo completo

Consideremos:

$$
f(x)=\frac{x+1}{x-2}
$$

### Dominio

$$
D_f=\mathbb{R}\setminus\{2\}
$$

### Cero

$$
x+1=0
$$

por lo que:

$$
x=-1
$$

### Intersección con el eje $y$

$$
f(0)=-\frac12
$$

### Asíntota vertical

$$
x=2
$$

### Asíntota horizontal

Los grados del numerador y del denominador son iguales. Los coeficientes principales son ambos $1$:

$$
y=1
$$

:::function-graph{expression="(x+1)/(x-2)" restriction="-8<=x<=8"}
:::

## 14. Procedimiento de análisis

Para analizar una función racional de forma sistemática:

1. Factoriza numerador y denominador.
2. Determina el dominio.
3. Simplifica los factores comunes, conservando las restricciones originales.
4. Encuentra los ceros.
5. Calcula la intersección con el eje $y$.
6. Identifica las discontinuidades.
7. Determina las asíntotas verticales.
8. Estudia las asíntotas horizontales u oblicuas.
9. Calcula los límites relevantes.
10. Estudia el signo.
11. Calcula la derivada y estudia la monotonía.
12. Determina los extremos relativos.
13. Estudia la simetría.
14. Representa gráficamente la función.

## Resumen

Una función racional tiene la forma:

$$
f(x)=\frac{P(x)}{Q(x)}
$$

y su análisis requiere prestar especial atención a los ceros del denominador.
