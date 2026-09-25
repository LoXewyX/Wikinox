# Funciones trigonométricas

Las **funciones trigonométricas** relacionan un ángulo con las proporciones entre los lados de un triángulo rectángulo.

Las tres funciones fundamentales son:

- **seno**: $\sin(x)$
- **coseno**: $\cos(x)$
- **tangente**: $\tan(x)$

Estas funciones aparecen en geometría, física, ingeniería, señales, ondas y muchas otras áreas de las matemáticas.

## Seno, coseno y tangente

En un triángulo rectángulo, para un ángulo agudo $\theta$:

$$
\sin(\theta)=\frac{\text{cateto opuesto}}{\text{hipotenusa}}
$$

$$
\cos(\theta)=\frac{\text{cateto adyacente}}{\text{hipotenusa}}
$$

$$
\tan(\theta)=\frac{\text{cateto opuesto}}{\text{cateto adyacente}}
$$

Una forma habitual de recordar estas relaciones es **SOH-CAH-TOA**:

- **SOH**: seno = opuesto / hipotenusa
- **CAH**: coseno = adyacente / hipotenusa
- **TOA**: tangente = opuesto / adyacente

:::right-triangle-diagram{mode="trigonometry"}
:::

## La función seno

La función seno asigna a cada ángulo un número entre $-1$ y $1$.

$$
f(x)=\sin(x)
$$

Su período es $2\pi$:

$$
\sin(x+2\pi)=\sin(x)
$$

Su gráfica es una onda periódica.

:::function-graph{expression="sin(x)" restriction="-2*pi<=x<=2*pi"}
:::

### Valores importantes

Algunos valores habituales son:

$$
\sin(0)=0
$$

$$
\sin\left(\frac{\pi}{6}\right)=\frac12
$$

$$
\sin\left(\frac{\pi}{4}\right)=\frac{\sqrt2}{2}
$$

$$
\sin\left(\frac{\pi}{3}\right)=\frac{\sqrt3}{2}
$$

$$
\sin\left(\frac{\pi}{2}\right)=1
$$

## La función coseno

La función coseno también toma valores entre $-1$ y $1$.

$$
f(x)=\cos(x)
$$

Tiene el mismo período que el seno:

$$
\cos(x+2\pi)=\cos(x)
$$

:::function-graph{expression="cos(x)" restriction="-2*pi<=x<=2*pi"}
:::

Algunos valores importantes son:

$$
\cos(0)=1
$$

$$
\cos\left(\frac{\pi}{6}\right)=\frac{\sqrt3}{2}
$$

$$
\cos\left(\frac{\pi}{4}\right)=\frac{\sqrt2}{2}
$$

$$
\cos\left(\frac{\pi}{3}\right)=\frac12
$$

$$
\cos\left(\frac{\pi}{2}\right)=0
$$

## La función tangente

La tangente se define como:

$$
\tan(x)=\frac{\sin(x)}{\cos(x)}
$$

Por tanto, no está definida cuando:

$$
\cos(x)=0
$$

Esto ocurre en:

$$
x=\frac{\pi}{2}+k\pi,
\qquad k\in\mathbb Z
$$

La función tangente tiene período $\pi$:

$$
\tan(x+\pi)=\tan(x)
$$

:::function-graph{expression="tan(x)" restriction="-2*pi<=x<=2*pi"}
:::

A diferencia del seno y el coseno, la tangente puede tomar cualquier valor real.

## Relación entre seno y coseno

Una de las identidades trigonométricas fundamentales es:

$$
\sin^2(x)+\cos^2(x)=1
$$

Esta identidad se obtiene a partir del teorema de Pitágoras aplicado a la circunferencia unitaria.

También podemos despejar:

$$
\sin^2(x)=1-\cos^2(x)
$$

o:

$$
\cos^2(x)=1-\sin^2(x)
$$

## Relación entre tangente, seno y coseno

Como:

$$
\tan(x)=\frac{\sin(x)}{\cos(x)}
$$

podemos expresar la tangente utilizando las otras dos funciones.

Además:

$$
1+\tan^2(x)=\frac{1}{\cos^2(x)}
$$

y:

$$
1+\cot^2(x)=\frac{1}{\sin^2(x)}
$$

## Ángulos en grados y radianes

Los ángulos pueden expresarse en **grados** o en **radianes**.

Una vuelta completa equivale a:

$$
360^\circ=2\pi
$$

Por tanto:

$$
180^\circ=\pi
$$

$$
90^\circ=\frac{\pi}{2}
$$

$$
60^\circ=\frac{\pi}{3}
$$

$$
45^\circ=\frac{\pi}{4}
$$

$$
30^\circ=\frac{\pi}{6}
$$

La conversión de grados a radianes es:

$$
\text{radianes}
=
\text{grados}\cdot\frac{\pi}{180}
$$

Por ejemplo:

$$
60^\circ\cdot\frac{\pi}{180}
=
\frac{\pi}{3}
$$

## Signos de las funciones

Los signos de las funciones trigonométricas dependen del cuadrante.

| Cuadrante | $\sin$ | $\cos$ | $\tan$ |
| --------- | ------ | ------ | ------ |
| I         | +      | +      | +      |
| II        | +      | −      | −      |
| III       | −      | −      | +      |
| IV        | −      | +      | −      |

Esto permite determinar rápidamente el signo de una función cuando conocemos el cuadrante del ángulo.

## Valores de los ángulos notables

Los valores más utilizados pueden organizarse en la siguiente tabla:

| Ángulo     | Radianes        | $\sin$             | $\cos$             | $\tan$             |
| ---------- | --------------- | ------------------ | ------------------ | ------------------ |
| $0^\circ$  | $0$             | $0$                | $1$                | $0$                |
| $30^\circ$ | $\frac{\pi}{6}$ | $\frac12$          | $\frac{\sqrt3}{2}$ | $\frac{\sqrt3}{3}$ |
| $45^\circ$ | $\frac{\pi}{4}$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt2}{2}$ | $1$                |
| $60^\circ$ | $\frac{\pi}{3}$ | $\frac{\sqrt3}{2}$ | $\frac12$          | $\sqrt3$           |
| $90^\circ$ | $\frac{\pi}{2}$ | $1$                | $0$                | no definida        |

## Transformaciones de las funciones trigonométricas

Una función seno general puede escribirse como:

$$
f(x)=A\sin(Bx+C)+D
$$

Cada parámetro modifica una característica de la gráfica.

### Amplitud

El valor absoluto de $A$ determina la amplitud:

$$
\text{amplitud}=|A|
$$

Por ejemplo:

$$
f(x)=3\sin(x)
$$

tiene amplitud $3$.

:::function-graph{expression="3*sin(x)" restriction="-2*pi<=x<=2*pi"}
:::

### Período

Para:

$$
f(x)=\sin(Bx)
$$

el período es:

$$
T=\frac{2\pi}{|B|}
$$

Por ejemplo:

$$
f(x)=\sin(2x)
$$

tiene período:

$$
T=\frac{2\pi}{2}=\pi
$$

:::function-graph{expression="sin(2*x)" restriction="-2*pi<=x<=2*pi"}
:::

### Desplazamiento vertical

En:

$$
f(x)=\sin(x)+D
$$

el valor $D$ desplaza la gráfica verticalmente.

Por ejemplo:

$$
f(x)=\sin(x)+2
$$

:::function-graph{expression="sin(x)+2" restriction="-2*pi<=x<=2*pi"}
:::

### Desplazamiento horizontal

En:

$$
f(x)=\sin(x-C)
$$

el valor $C$ desplaza la función horizontalmente.

Por ejemplo:

$$
f(x)=\sin\left(x-\frac{\pi}{2}\right)
$$

es una versión desplazada del seno.

## Funciones trigonométricas inversas

Las funciones inversas permiten recuperar un ángulo a partir de una razón trigonométrica.

Las principales son:

$$
\arcsin(x)
$$

$$
\arccos(x)
$$

$$
\arctan(x)
$$

Por ejemplo:

$$
\arcsin\left(\frac12\right)=\frac{\pi}{6}
$$

porque:

$$
\sin\left(\frac{\pi}{6}\right)=\frac12
$$

Estas funciones son especialmente útiles para calcular ángulos en triángulos.

## Ejemplo

Supongamos que:

$$
\sin(\theta)=\frac35
$$

Para encontrar $\theta$ utilizamos la función inversa:

$$
\theta=\arcsin\left(\frac35\right)
$$

Aproximadamente:

$$
\theta\approx36.87^\circ
$$

Si trabajamos en radianes:

$$
\theta\approx0.644\text{ rad}
$$

## Aplicaciones

Las funciones trigonométricas permiten modelizar fenómenos periódicos.

Por ejemplo:

- ondas de sonido;
- ondas electromagnéticas;
- movimiento oscilatorio;
- corriente alterna;
- rotación;
- vibraciones;
- movimiento de proyectiles;
- ciclos estacionales.

Un modelo sencillo para una magnitud periódica es:

$$
f(t)=A\sin(Bt+C)+D
$$

donde:

- $A$ determina la amplitud;
- $B$ determina el período;
- $C$ determina el desplazamiento horizontal;
- $D$ determina el desplazamiento vertical.

## Resumen

Las funciones trigonométricas fundamentales son:

$$
\sin(x),\qquad\cos(x),\qquad\tan(x)
$$

Sus relaciones principales son:

$$
\tan(x)=\frac{\sin(x)}{\cos(x)}
$$

y:

$$
\sin^2(x)+\cos^2(x)=1
$$

El seno y el coseno tienen período $2\pi$, mientras que la tangente tiene período $\pi$.

Las transformaciones de las funciones trigonométricas permiten modelizar ondas y otros fenómenos periódicos.
