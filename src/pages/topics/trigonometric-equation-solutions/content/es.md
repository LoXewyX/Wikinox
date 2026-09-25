# Soluciones de ecuaciones trigonométricas

Las **ecuaciones trigonométricas** son aquellas en las que la incógnita aparece dentro de una función trigonométrica, como el seno, el coseno o la tangente.

A diferencia de una ecuación algebraica, normalmente una ecuación trigonométrica tiene **infinitas soluciones**, porque las funciones trigonométricas son periódicas.

## 1. Periodicidad

Las funciones trigonométricas se repiten periódicamente:

$$
\sin(x+2\pi)=\sin(x)
$$

$$
\cos(x+2\pi)=\cos(x)
$$

$$
\tan(x+\pi)=\tan(x)
$$

Por ello, si encontramos una solución, podemos obtener otras soluciones sumando el período correspondiente.

La forma general de las soluciones depende de la función utilizada.

### Seno

Si

$$
\sin(x)=a
$$

y $\alpha$ es un ángulo tal que

$$
\sin(\alpha)=a,
$$

las soluciones generales son

$$
x=\alpha+2k\pi
$$

o

$$
x=\pi-\alpha+2k\pi,
\qquad k\in\mathbb{Z}.
$$

### Coseno

Si

$$
\cos(x)=a,
$$

las soluciones pueden escribirse como

$$
x=\pm\alpha+2k\pi,
\qquad k\in\mathbb{Z},
$$

donde $\cos(\alpha)=a$.

### Tangente

Si

$$
\tan(x)=a,
$$

las soluciones son

$$
x=\alpha+k\pi,
\qquad k\in\mathbb{Z},
$$

donde $\tan(\alpha)=a$.

---

## 2. Resolver una ecuación de seno

Consideremos

$$
\sin(x)=\frac{1}{2}.
$$

Sabemos que

$$
\sin\left(\frac{\pi}{6}\right)=\frac{1}{2}.
$$

El seno también toma este valor en el segundo cuadrante:

$$
\pi-\frac{\pi}{6}=\frac{5\pi}{6}.
$$

Por tanto, las soluciones generales son

$$
x=\frac{\pi}{6}+2k\pi
$$

o

$$
x=\frac{5\pi}{6}+2k\pi,
\qquad k\in\mathbb{Z}.
$$

Si únicamente buscamos soluciones en el intervalo $[0,2\pi)$, obtenemos

$$
x=\frac{\pi}{6},
\qquad
x=\frac{5\pi}{6}.
$$

---

## 3. Resolver una ecuación de coseno

Consideremos

$$
\cos(x)=-\frac{\sqrt{3}}{2}.
$$

El ángulo de referencia es

$$
\frac{\pi}{6},
$$

porque

$$
\cos\left(\frac{\pi}{6}\right)=\frac{\sqrt{3}}{2}.
$$

Como el coseno es negativo en los cuadrantes II y III:

$$
x=\pi-\frac{\pi}{6}=\frac{5\pi}{6}
$$

y

$$
x=\pi+\frac{\pi}{6}=\frac{7\pi}{6}.
$$

Por tanto,

$$
x=\frac{5\pi}{6}+2k\pi
$$

o

$$
x=\frac{7\pi}{6}+2k\pi,
\qquad k\in\mathbb{Z}.
$$

En $[0,2\pi)$:

$$
\boxed{x=\frac{5\pi}{6},\frac{7\pi}{6}}
$$

---

## 4. Resolver una ecuación de tangente

Consideremos

$$
\tan(x)=1.
$$

Sabemos que

$$
\tan\left(\frac{\pi}{4}\right)=1.
$$

La tangente tiene período $\pi$, por lo que todas las soluciones son

$$
\boxed{x=\frac{\pi}{4}+k\pi},
\qquad k\in\mathbb{Z}.
$$

En el intervalo $[0,2\pi)$:

$$
x=\frac{\pi}{4}
$$

y

$$
x=\frac{5\pi}{4}.
$$

---

## 5. Ecuaciones trigonométricas con una expresión lineal

A veces la incógnita no aparece directamente como $x$, sino dentro de una expresión.

Por ejemplo:

$$
\sin(2x)=\frac{\sqrt{3}}{2}.
$$

Primero resolvemos la ecuación para $2x$.

Sabemos que

$$
2x=\frac{\pi}{3}+2k\pi
$$

o

$$
2x=\frac{2\pi}{3}+2k\pi.
$$

Dividiendo entre $2$:

$$
x=\frac{\pi}{6}+k\pi
$$

o

$$
x=\frac{\pi}{3}+k\pi.
$$

Por tanto,

$$
\boxed{
x=\frac{\pi}{6}+k\pi
\quad\text{o}\quad
x=\frac{\pi}{3}+k\pi
}
$$

---

## 6. Ecuaciones con restricciones

En muchos ejercicios se especifica un intervalo para la incógnita.

Por ejemplo:

$$
2\cos(x)=1,
\qquad
0\leq x<2\pi.
$$

Dividimos entre $2$:

$$
\cos(x)=\frac{1}{2}.
$$

En el intervalo $[0,2\pi)$, el coseno vale $\frac12$ en:

$$
x=\frac{\pi}{3}
$$

y

$$
x=\frac{5\pi}{3}.
$$

Por tanto:

$$
\boxed{
x\in
\left\{
\frac{\pi}{3},
\frac{5\pi}{3}
\right\}
}
$$

La restricción es importante porque la ecuación tiene infinitas soluciones, pero el intervalo selecciona únicamente algunas de ellas.

---

## 7. Ecuaciones que requieren factorización

No todas las ecuaciones trigonométricas se reducen directamente a una única función.

Por ejemplo:

$$
\sin^2(x)-\sin(x)=0.
$$

Factorizamos:

$$
\sin(x)(\sin(x)-1)=0.
$$

Por la propiedad del producto nulo:

$$
\sin(x)=0
$$

o

$$
\sin(x)=1.
$$

Para la primera ecuación:

$$
x=k\pi.
$$

Para la segunda:

$$
x=\frac{\pi}{2}+2k\pi.
$$

Por tanto:

$$
\boxed{
x=k\pi
\quad\text{o}\quad
x=\frac{\pi}{2}+2k\pi,
\qquad k\in\mathbb{Z}
}
$$

---

## 8. Uso de identidades trigonométricas

Las identidades trigonométricas permiten transformar una ecuación complicada en otra más sencilla.

Una de las identidades fundamentales es:

$$
\sin^2(x)+\cos^2(x)=1.
$$

También son útiles:

$$
1+\tan^2(x)=\sec^2(x)
$$

y

$$
1+\cot^2(x)=\csc^2(x).
$$

Por ejemplo:

$$
2\sin^2(x)-1=0.
$$

Despejamos:

$$
2\sin^2(x)=1
$$

$$
\sin^2(x)=\frac12.
$$

Tomamos raíces:

$$
\sin(x)=\pm\frac{\sqrt2}{2}.
$$

En $[0,2\pi)$ obtenemos cuatro soluciones:

$$
x=
\frac{\pi}{4},
\frac{3\pi}{4},
\frac{5\pi}{4},
\frac{7\pi}{4}.
$$

---

## 9. Método general

Para resolver una ecuación trigonométrica conviene seguir estos pasos:

1. **Simplificar la ecuación** todo lo posible.
2. **Aislar una función trigonométrica** cuando sea posible.
3. **Encontrar el ángulo de referencia** utilizando valores conocidos o la función inversa.
4. **Determinar los cuadrantes** en los que la función tiene el signo correspondiente.
5. **Escribir la solución general** utilizando la periodicidad.
6. **Aplicar el intervalo indicado**, si existe.
7. **Comprobar las soluciones** en la ecuación original.

---

## 10. Errores frecuentes

### Olvidar la periodicidad

De

$$
\sin(x)=0
$$

no se obtiene únicamente $x=0$.

La solución general es:

$$
x=k\pi,
\qquad k\in\mathbb{Z}.
$$

### Confundir el período

El seno y el coseno tienen período $2\pi$:

$$
T_{\sin}=T_{\cos}=2\pi.
$$

La tangente tiene período $\pi$:

$$
T_{\tan}=\pi.
$$

### No considerar todos los cuadrantes

Por ejemplo, si

$$
\cos(x)=-\frac12,
$$

no basta con encontrar el ángulo de referencia. También hay que localizar los cuadrantes donde el coseno es negativo.

### Dividir por una expresión que puede ser cero

En una ecuación como

$$
\sin(x)\cos(x)=0,
$$

no debemos dividir directamente entre $\sin(x)$ o $\cos(x)$, porque podríamos eliminar soluciones.

Es preferible utilizar:

$$
ab=0
\quad\Longrightarrow\quad
a=0\ \text{o}\ b=0.
$$

---

## 11. Soluciones en grados

Las mismas reglas pueden expresarse en grados.

Los períodos son:

$$
T_{\sin}=T_{\cos}=360^\circ
$$

y

$$
T_{\tan}=180^\circ.
$$

Por ejemplo:

$$
\sin(x)=\frac12
$$

tiene como soluciones generales:

$$
x=30^\circ+360^\circ k
$$

o

$$
x=150^\circ+360^\circ k,
\qquad k\in\mathbb{Z}.
$$

Es importante no mezclar grados y radianes dentro del mismo ejercicio.

---

## Resumen

Las soluciones de las ecuaciones trigonométricas dependen principalmente de la **periodicidad** de las funciones y de los **cuadrantes** en los que toman determinados valores.

Las formas fundamentales son:

$$
\sin(x)=a
\quad\Longrightarrow\quad
x=\alpha+2k\pi
\ \text{o}\
x=\pi-\alpha+2k\pi
$$

$$
\cos(x)=a
\quad\Longrightarrow\quad
x=\pm\alpha+2k\pi
$$

$$
\tan(x)=a
\quad\Longrightarrow\quad
x=\alpha+k\pi
$$

donde $k\in\mathbb{Z}$ y $\alpha$ es un ángulo que produce el valor correspondiente.

Cuando existe un intervalo, como $[0,2\pi)$, primero se obtiene la solución general y después se seleccionan únicamente las soluciones pertenecientes a dicho intervalo.
