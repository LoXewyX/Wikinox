# Resolución de triángulos rectángulos

Un **triángulo rectángulo** es un triángulo que tiene un ángulo de $90^\circ$.

Para resolver un triángulo rectángulo podemos utilizar el **teorema de Pitágoras** y las **razones trigonométricas** seno, coseno y tangente.

## Elementos de un triángulo rectángulo

En un triángulo rectángulo tenemos:

- **Hipotenusa**: lado opuesto al ángulo recto y siempre el lado más largo.
- **Cateto opuesto**: lado situado frente al ángulo que estamos utilizando.
- **Cateto adyacente**: cateto que forma el ángulo que estamos utilizando.

:::right-triangle-diagram
:::

## Teorema de Pitágoras

Si los catetos son $a$ y $b$ y la hipotenusa es $c$:

$$
a^2+b^2=c^2
$$

Por ejemplo, si conocemos los dos catetos:

$$
a=3,\qquad b=4
$$

podemos calcular la hipotenusa:

$$
c=\sqrt{3^2+4^2}
$$

$$
c=\sqrt{25}=5
$$

## Razones trigonométricas

:::right-triangle-diagram{mode="trigonometry"}
:::

Para un ángulo agudo $\theta$:

$$
\sin(\theta)=\frac{\text{cateto opuesto}}{\text{hipotenusa}}
$$

$$
\cos(\theta)=\frac{\text{cateto adyacente}}{\text{hipotenusa}}
$$

$$
\tan(\theta)=\frac{\text{cateto opuesto}}{\text{cateto adyacente}}
$$

Una forma sencilla de recordarlas es **SOH-CAH-TOA**:

- **SOH**: Seno = Opuesto / Hipotenusa
- **CAH**: Coseno = Adyacente / Hipotenusa
- **TOA**: Tangente = Opuesto / Adyacente

## Calcular un lado

Si conocemos un ángulo y un lado, podemos calcular otro lado utilizando una razón trigonométrica.

Por ejemplo, si:

$$
\theta=30^\circ
$$

y la hipotenusa mide $10$:

$$
\sin(30^\circ)=\frac{a}{10}
$$

Por tanto:

$$
a=10\sin(30^\circ)
$$

$$
a=5
$$

## Calcular un ángulo

Si conocemos dos lados, podemos calcular un ángulo utilizando las funciones trigonométricas inversas:

$$
\theta=\arcsin\left(\frac{\text{opuesto}}{\text{hipotenusa}}\right)
$$

$$
\theta=\arccos\left(\frac{\text{adyacente}}{\text{hipotenusa}}\right)
$$

$$
\theta=\arctan\left(\frac{\text{opuesto}}{\text{adyacente}}\right)
$$

## Estrategia para resolver un triángulo

1. Identifica la hipotenusa.
2. Elige el ángulo que conoces o quieres calcular.
3. Identifica el cateto opuesto y el adyacente.
4. Comprueba si puedes utilizar Pitágoras.
5. Si conoces un ángulo, utiliza seno, coseno o tangente.
6. Si necesitas encontrar un ángulo, utiliza $\arcsin$, $\arccos$ o $\arctan$.
7. Comprueba que los resultados son coherentes.

## Ejemplo completo

Supongamos que tenemos un triángulo rectángulo con:

$$
a=6,\qquad b=8
$$

Primero calculamos la hipotenusa:

$$
c=\sqrt{6^2+8^2}
$$

$$
c=\sqrt{36+64}
$$

$$
c=10
$$

Ahora podemos calcular uno de los ángulos:

$$
\theta=\arcsin\left(\frac{6}{10}\right)
$$

Por tanto:

$$
\theta\approx36.87^\circ
$$

El otro ángulo agudo será:

$$
90^\circ-36.87^\circ\approx53.13^\circ
$$

Así conocemos todos los lados y ángulos del triángulo.
