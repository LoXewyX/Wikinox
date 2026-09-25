# Rectas tangentes

La **recta tangente** a una función en un punto es la recta que describe la dirección instantánea de la función en ese punto.

Si $f$ es derivable en $x=a$, la pendiente de la recta tangente es la derivada:

$$
m=f'(a)
$$

La ecuación de la recta tangente en el punto $(a,f(a))$ es:

$$
\boxed{y-f(a)=f'(a)(x-a)}
$$

o, equivalentemente,

$$
\boxed{y=f'(a)(x-a)+f(a)}
$$

---

## Interpretación geométrica

Consideremos una función $f(x)$ y un punto

$$
P=(a,f(a)).
$$

La derivada $f'(a)$ representa la pendiente de la función exactamente en ese punto.

- Si $f'(a)>0$, la tangente asciende.
- Si $f'(a)<0$, la tangente desciende.
- Si $f'(a)=0$, la tangente es horizontal.
- Cuanto mayor es $|f'(a)|$, más inclinada es la tangente.

La recta tangente aproxima localmente a la función cerca de $x=a$.

---

## Cálculo de una recta tangente

Para encontrar la recta tangente a $f(x)$ en $x=a$, seguimos estos pasos:

1. Calcular $f(a)$.
2. Calcular la derivada $f'(x)$.
3. Evaluar la derivada en $a$ para obtener la pendiente.
4. Usar la ecuación punto-pendiente.

$$
\boxed{m=f'(a)}
$$

$$
\boxed{P=(a,f(a))}
$$

$$
\boxed{y-f(a)=f'(a)(x-a)}
$$

### Ejemplo

Sea

$$
f(x)=x^2+2x
$$

y queremos la tangente en $x=1$.

Primero calculamos el punto:

$$
f(1)=1^2+2(1)=3
$$

Por tanto:

$$
P=(1,3)
$$

Derivamos:

$$
f'(x)=2x+2
$$

Evaluamos en $x=1$:

$$
f'(1)=4
$$

La pendiente es $m=4$.

Aplicamos la ecuación punto-pendiente:

$$
y-3=4(x-1)
$$

Simplificando:

$$
\boxed{y=4x-1}
$$

---

## Tangente en un punto dado

A veces el punto se proporciona directamente, por ejemplo:

$$
P=(2,5)
$$

Si sabemos que $f(2)=5$, podemos utilizar directamente ese punto.

Si

$$
f'(2)=3
$$

entonces:

$$
y-5=3(x-2)
$$

y por tanto:

$$
\boxed{y=3x-1}
$$

---

## Recta tangente mediante el límite

La derivada puede definirse como el límite de las pendientes de las rectas secantes:

$$
f'(a)=
\lim_{h\to0}
\frac{f(a+h)-f(a)}{h}
$$

Por tanto, la pendiente de la tangente se obtiene haciendo que el segundo punto de la secante se aproxime al primero.

$$
\boxed{
f'(a)=
\lim_{x\to a}
\frac{f(x)-f(a)}{x-a}
}
$$

Esto explica por qué la derivada representa la pendiente instantánea.

---

## Recta secante y recta tangente

Una **recta secante** pasa por dos puntos de la función:

$$
(a,f(a)),\qquad (b,f(b))
$$

Su pendiente es:

$$
m_{\text{secante}}
=
\frac{f(b)-f(a)}{b-a}
$$

Cuando $b$ se aproxima a $a$, la secante se aproxima a la tangente.

$$
\boxed{
m_{\text{tangente}}
=
\lim_{b\to a}
\frac{f(b)-f(a)}{b-a}
=
f'(a)
}
$$

---

## Recta normal

La **recta normal** es perpendicular a la recta tangente.

Si la pendiente de la tangente es $m\neq0$, la pendiente de la normal es:

$$
\boxed{
m_n=-\frac{1}{m}
}
$$

Por tanto:

$$
\boxed{
m_n=-\frac{1}{f'(a)}
}
$$

La ecuación de la normal es:

$$
\boxed{
y-f(a)
=
-\frac{1}{f'(a)}(x-a)
}
$$

### Ejemplo

Para

$$
f(x)=x^2
$$

en $x=1$:

$$
f(1)=1
$$

$$
f'(x)=2x
$$

$$
f'(1)=2
$$

La tangente es:

$$
y-1=2(x-1)
$$

$$
\boxed{y=2x-1}
$$

La normal tiene pendiente:

$$
m_n=-\frac12
$$

y por tanto:

$$
y-1=-\frac12(x-1)
$$

$$
\boxed{y=-\frac12x+\frac32}
$$

---

## Tangentes horizontales

Una tangente es horizontal cuando su pendiente es cero:

$$
f'(a)=0
$$

Por tanto, para encontrar los puntos donde la gráfica tiene tangente horizontal, resolvemos:

$$
\boxed{f'(x)=0}
$$

Estos puntos son candidatos a máximos o mínimos locales, aunque no necesariamente lo son.

### Ejemplo

Sea:

$$
f(x)=x^3-3x
$$

Entonces:

$$
f'(x)=3x^2-3
$$

Buscamos:

$$
3x^2-3=0
$$

$$
x^2=1
$$

$$
x=\pm1
$$

Los puntos correspondientes son:

$$
f(-1)=2
$$

$$
f(1)=-2
$$

Por tanto, hay tangentes horizontales en:

$$
\boxed{(-1,2)}
$$

y

$$
\boxed{(1,-2)}
$$

---

## Tangentes verticales

Una tangente vertical tiene dirección vertical y, por tanto, su pendiente no es finita.

En estos casos, la derivada puede tender a infinito:

$$
\lim_{x\to a}f'(x)=\pm\infty
$$

No puede escribirse como $y=mx+b$ porque una recta vertical tiene ecuación:

$$
\boxed{x=a}
$$

Un ejemplo típico es:

$$
f(x)=\sqrt[3]{x}
$$

En $x=0$ la función tiene una tangente vertical:

$$
\boxed{x=0}
$$

---

## Aproximación lineal

La recta tangente también permite aproximar una función cerca de un punto.

La **aproximación lineal** de $f(x)$ alrededor de $x=a$ es:

$$
\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

Esta expresión coincide con la ecuación de la recta tangente.

### Ejemplo

Para aproximar $\sqrt{4.1}$ podemos utilizar:

$$
f(x)=\sqrt{x}
$$

Elegimos $a=4$ porque $\sqrt4=2$.

La derivada es:

$$
f'(x)=\frac{1}{2\sqrt{x}}
$$

Por tanto:

$$
f'(4)=\frac14
$$

La aproximación lineal es:

$$
L(x)=2+\frac14(x-4)
$$

Evaluando en $x=4.1$:

$$
L(4.1)=2+\frac14(0.1)
$$

$$
\boxed{\sqrt{4.1}\approx2.025}
$$

---

## Interpretación gráfica

La tangente y la función coinciden exactamente en el punto de tangencia:

$$
P=(a,f(a))
$$

Además, tienen la misma pendiente:

$$
\boxed{f'(a)=m_{\text{tangente}}}
$$

Cerca de $a$, la tangente puede proporcionar una buena aproximación de la función.

:::function-graph{expression="x^2" restriction="-3<=x<=3"}
:::

---

## Procedimiento general

Para encontrar la recta tangente de $f(x)$ en $x=a$:

1. Calcular $f(a)$.
2. Derivar $f(x)$.
3. Calcular $f'(a)$.
4. Identificar el punto $(a,f(a))$.
5. Aplicar:

$$
\boxed{
y-f(a)=f'(a)(x-a)
}
$$

6. Simplificar la ecuación.

Si se necesita la normal:

$$
\boxed{
m_n=-\frac1{f'(a)}
}
$$

---

## Errores frecuentes

### Confundir $f(a)$ con $f'(a)$

Son cantidades diferentes:

$$
f(a)=\text{coordenada }y
$$

$$
f'(a)=\text{pendiente}
$$

### Usar $f'(x)$ como pendiente

La pendiente de la tangente en un punto concreto es:

$$
\boxed{f'(a)}
$$

no $f'(x)$.

### Olvidar calcular el punto de tangencia

La pendiente por sí sola no determina una recta. También necesitamos:

$$
(a,f(a))
$$

### Confundir tangente y normal

Las pendientes de tangente y normal, cuando ambas son finitas, cumplen:

$$
m_t\,m_n=-1
$$

---

## Resumen

La recta tangente a $f(x)$ en $x=a$ tiene:

- punto de tangencia: $(a,f(a))$;
- pendiente: $f'(a)$;
- ecuación:

$$
\boxed{
y=f(a)+f'(a)(x-a)
}
$$

La aproximación lineal es exactamente esta misma expresión:

$$
\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

La recta normal, cuando $f'(a)\neq0$, tiene pendiente:

$$
\boxed{
-\frac1{f'(a)}
}
$$
