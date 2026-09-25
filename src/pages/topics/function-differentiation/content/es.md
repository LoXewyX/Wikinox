# Derivación de funciones

La **derivada** describe cómo cambia una función cuando cambia su variable de entrada. Puede interpretarse como la tasa de variación instantánea o como la pendiente de la recta tangente a la gráfica.

## 1. Definición de derivada

La derivada de una función $f(x)$ en $x=a$ se define como

$$
f'(a)
=
\lim_{h\to0}
\frac{f(a+h)-f(a)}{h}.
$$

El cociente

$$
\frac{f(a+h)-f(a)}{h}
$$

representa la tasa media de variación entre dos puntos. Al hacer que $h$ tienda a $0$, obtenemos la tasa de variación instantánea.

Si este límite existe, la función es derivable en $x=a$.

La derivada como función se escribe

$$
f'(x)
=
\lim_{h\to0}
\frac{f(x+h)-f(x)}{h}.
$$

## 2. Interpretación geométrica

La derivada $f'(a)$ representa la pendiente de la recta tangente a la gráfica de $f$ en el punto $(a,f(a))$.

Una derivada positiva indica que la función es creciente localmente, mientras que una derivada negativa indica que es decreciente localmente.

Si

$$
f'(a)=0,
$$

la recta tangente es horizontal.

Por ejemplo, para

$$
f(x)=x^2,
$$

la derivada es

$$
f'(x)=2x.
$$

Por tanto, en $x=2$,

$$
f'(2)=4.
$$

La recta tangente tiene pendiente $4$ en el punto $(2,4)$.

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::

## 3. Derivabilidad y continuidad

Si una función es derivable en $x=a$, entonces es continua en $x=a$.

$$
\boxed{
\text{Derivable}
\implies
\text{Continua}
}
$$

La implicación inversa no siempre es cierta.

Por ejemplo,

$$
f(x)=|x|
$$

es continua en $x=0$, pero no es derivable en ese punto porque las derivadas laterales son diferentes.

$$
f'_-(0)=-1,
\qquad
f'_+(0)=1.
$$

Por tanto,

$$
\boxed{
|x|\text{ es continua pero no derivable en }x=0.
}
$$

:::function-graph{expression="abs(x)" restriction="-4<=x<=4"}
:::

## 4. Reglas básicas de derivación

### Regla de la constante

Si

$$
f(x)=c,
$$

donde $c$ es constante, entonces

$$
\boxed{f'(x)=0}.
$$

### Regla de la potencia

Para

$$
f(x)=x^n,
$$

la derivada es

$$
\boxed{
\frac{d}{dx}x^n=nx^{n-1}
}.
$$

Por ejemplo,

$$
\frac{d}{dx}x^5
=
5x^4.
$$

La regla también se aplica a potencias negativas y fraccionarias cuando la función es derivable:

$$
\frac{d}{dx}x^{-2}
=
-2x^{-3},
$$

y

$$
\frac{d}{dx}\sqrt{x}
=
\frac{d}{dx}x^{1/2}
=
\frac{1}{2\sqrt{x}}.
$$

### Regla del múltiplo constante

Si

$$
f(x)=c\,g(x),
$$

entonces

$$
\boxed{
f'(x)=c\,g'(x)
}.
$$

Por ejemplo,

$$
\frac{d}{dx}(7x^3)
=
21x^2.
$$

### Regla de la suma y diferencia

Para las funciones $f$ y $g$,

$$
\boxed{
(f\pm g)'=f'\pm g'
}.
$$

Por ejemplo,

$$
\frac{d}{dx}(x^3+2x^2-5x+1)
=
3x^2+4x-5.
$$

## 5. Regla del producto

Cuando dos funciones se multiplican,

$$
f(x)=u(x)v(x),
$$

la derivada es

$$
\boxed{
(uv)'=u'v+uv'
}.
$$

Por ejemplo,

$$
f(x)=x^2\sin(x).
$$

Entonces,

$$
f'(x)
=
2x\sin(x)+x^2\cos(x).
$$

La regla del producto es necesaria porque, en general,

$$
(uv)'\neq u'v'.
$$

## 6. Regla del cociente

Para

$$
f(x)=\frac{u(x)}{v(x)},
\qquad v(x)\neq0,
$$

la derivada es

$$
\boxed{
\left(\frac{u}{v}\right)'
=
\frac{u'v-uv'}{v^2}
}.
$$

Por ejemplo,

$$
f(x)=\frac{x^2+1}{x}.
$$

Entonces,

$$
f'(x)
=
\frac{2x(x)-(x^2+1)}{x^2}
=
\boxed{
\frac{x^2-1}{x^2}
}.
$$

## 7. Regla de la cadena

La **regla de la cadena** se utiliza cuando una función está compuesta por otra.

Si

$$
f(x)=g(h(x)),
$$

entonces

$$
\boxed{
f'(x)=g'(h(x))h'(x)
}.
$$

Es decir, derivamos la función exterior y multiplicamos por la derivada de la función interior.

Por ejemplo,

$$
f(x)=(3x+1)^5.
$$

La función exterior es $u^5$ y la función interior es $u=3x+1$.

Por tanto,

$$
f'(x)
=
5(3x+1)^4\cdot3.
$$

Así,

$$
\boxed{
f'(x)=15(3x+1)^4
}.
$$

Otro ejemplo es

$$
f(x)=\sqrt{x^2+1}.
$$

Escribiendo la raíz como una potencia,

$$
f(x)=(x^2+1)^{1/2},
$$

obtenemos

$$
f'(x)
=
\frac12(x^2+1)^{-1/2}(2x).
$$

Por tanto,

$$
\boxed{
f'(x)=\frac{x}{\sqrt{x^2+1}}
}.
$$

## 8. Derivadas de funciones habituales

Algunas derivadas importantes son

$$
\boxed{
\frac{d}{dx}e^x=e^x
}
$$

$$
\boxed{
\frac{d}{dx}\ln(x)=\frac1x
}
$$

$$
\boxed{
\frac{d}{dx}\sin(x)=\cos(x)
}
$$

$$
\boxed{
\frac{d}{dx}\cos(x)=-\sin(x)
}
$$

$$
\boxed{
\frac{d}{dx}\tan(x)=\sec^2(x)
}
$$

Estas fórmulas se combinan con las reglas básicas de derivación y la regla de la cadena.

Por ejemplo,

$$
f(x)=e^{2x}
$$

tiene como derivada

$$
\boxed{
f'(x)=2e^{2x}
}.
$$

## 9. Derivadas de orden superior

La derivada de la derivada se denomina **segunda derivada**:

$$
f''(x)=\frac{d}{dx}f'(x).
$$

De forma general,

$$
f^{(n)}(x)
$$

representa la derivada de orden $n$.

Por ejemplo, si

$$
f(x)=x^4,
$$

entonces

$$
f'(x)=4x^3,
$$

$$
f''(x)=12x^2,
$$

$$
f'''(x)=24x,
$$

y

$$
f^{(4)}(x)=24.
$$

## 10. Derivadas y monotonía

La primera derivada permite determinar dónde una función es creciente o decreciente.

Si

$$
f'(x)>0
$$

en todo un intervalo, entonces $f$ es creciente en ese intervalo.

Si

$$
f'(x)<0
$$

en todo un intervalo, entonces $f$ es decreciente.

Por tanto,

$$
\boxed{
f'(x)>0\Rightarrow f\text{ creciente}
}
$$

y

$$
\boxed{
f'(x)<0\Rightarrow f\text{ decreciente}
}.
$$

Los puntos donde

$$
f'(x)=0
$$

o donde $f'(x)$ no existe se denominan **puntos críticos**, siempre que pertenezcan al dominio de $f$.

## 11. Derivadas y extremos locales

Un máximo o mínimo local puede aparecer en un punto crítico.

Si

$$
f'(a)=0,
$$

el punto $x=a$ es candidato a ser un extremo local.

Sin embargo, que $f'(a)=0$ no garantiza por sí solo que exista un máximo o mínimo.

Por ejemplo,

$$
f(x)=x^3
$$

satisface

$$
f'(0)=0,
$$

pero $x=0$ no es un máximo ni un mínimo local.

El signo de la derivada alrededor del punto crítico proporciona más información.

Si la derivada cambia de positiva a negativa,

$$
+\rightarrow-,
$$

la función tiene un máximo local.

Si cambia de negativa a positiva,

$$
-\rightarrow+,
$$

la función tiene un mínimo local.

## 12. Recta tangente

Si $f$ es derivable en $x=a$, la recta tangente en $(a,f(a))$ tiene pendiente $f'(a)$.

Su ecuación es

$$
\boxed{
y-f(a)=f'(a)(x-a)
}.
$$

Por ejemplo, sea

$$
f(x)=x^2
$$

y $a=1$.

Tenemos

$$
f(1)=1,
\qquad
f'(x)=2x,
\qquad
f'(1)=2.
$$

Por tanto,

$$
y-1=2(x-1),
$$

y obtenemos

$$
\boxed{
y=2x-1
}.
$$

## 13. Procedimiento para derivar

Al derivar una función:

1. Identifica la estructura de la función.
2. Comprueba si es una suma, producto, cociente o composición.
3. Elige la regla de derivación correspondiente.
4. Aplica la regla cuidadosamente.
5. Simplifica el resultado.
6. Comprueba el dominio donde existe la derivada.
7. Si es necesario, analiza el signo de la derivada.

Las reglas principales son

$$
\boxed{
\frac{d}{dx}x^n=nx^{n-1}
}
$$

$$
\boxed{
(uv)'=u'v+uv'
}
$$

$$
\boxed{
\left(\frac uv\right)'
=
\frac{u'v-uv'}{v^2}
}
$$

y

$$
\boxed{
(g(h(x)))'
=
g'(h(x))h'(x)
}.
$$
