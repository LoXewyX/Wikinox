# Continuidad de las funciones racionales

Una **función racional** es una función que puede escribirse como el cociente de dos polinomios:

$$
f(x)=\frac{p(x)}{q(x)}
$$

donde $p(x)$ y $q(x)$ son polinomios y $q(x)\neq0$.

La continuidad de una función racional está directamente relacionada con los valores que hacen que su denominador sea cero.

## Dominio

Una función racional está definida únicamente cuando su denominador es distinto de cero.

Por tanto:

$$
\boxed{
D_f=\{x\in\mathbb{R}:q(x)\neq0\}
}
$$

Por ejemplo:

$$
f(x)=\frac{x+1}{x-2}
$$

El denominador es cero cuando:

$$
x-2=0
$$

Por tanto:

$$
\boxed{D_f=\mathbb{R}\setminus\{2\}}
$$

## Continuidad

Como los polinomios son continuos en todo $\mathbb{R}$, el cociente de dos polinomios es continuo allí donde el denominador no sea cero.

Por tanto:

$$
\boxed{
f(x)=\frac{p(x)}{q(x)}
\text{ es continua donde }q(x)\neq0
}
$$

Una función racional solo puede ser discontinua en los valores donde:

$$
q(x)=0
$$

Estos puntos deben estudiarse por separado.

## Ejemplo

Consideremos:

$$
f(x)=\frac{x^2+1}{x-3}
$$

El denominador es cero en:

$$
x=3
$$

Por tanto:

$$
\boxed{D_f=\mathbb{R}\setminus\{3\}}
$$

La función es continua en:

$$
\boxed{(-\infty,3)\cup(3,\infty)}
$$

No está definida y, por tanto, no es continua en $x=3$.

## Discontinuidades evitables

Una discontinuidad es **evitable** cuando existe un factor común que puede simplificarse.

Consideremos:

$$
f(x)=\frac{x^2-1}{x-1}
$$

Factorizamos el numerador:

$$
f(x)=\frac{(x-1)(x+1)}{x-1}
$$

Para $x\neq1$:

$$
f(x)=x+1
$$

Sin embargo, la función original sigue sin estar definida en $x=1$.

El límite es:

$$
\lim_{x\to1}f(x)
=
\lim_{x\to1}(x+1)
=
2
$$

Por tanto:

$$
\boxed{
\lim_{x\to1}f(x)=2
}
$$

pero:

$$
f(1)\text{ no está definida}
$$

Existe una discontinuidad evitable en $x=1$.

Geométricamente, la gráfica tiene un hueco en:

$$
\boxed{(1,2)}
$$

## Discontinuidades no evitables

Si el denominador se hace cero y el factor correspondiente no puede simplificarse completamente, la discontinuidad generalmente no es evitable.

Por ejemplo:

$$
f(x)=\frac{1}{x-2}
$$

En $x=2$:

$$
\lim_{x\to2^-}f(x)=-\infty
$$

y:

$$
\lim_{x\to2^+}f(x)=+\infty
$$

Por tanto:

$$
\boxed{x=2}
$$

es una asíntota vertical y la discontinuidad es infinita.

## Factorización y continuidad

Factorizar el numerador y el denominador es especialmente útil para estudiar la continuidad.

Consideremos:

$$
f(x)=\frac{(x-2)(x+1)}{(x-2)(x-3)}
$$

Para $x\neq2$:

$$
f(x)=\frac{x+1}{x-3}
$$

El factor $(x-2)$ se puede simplificar, por lo que $x=2$ produce una discontinuidad evitable.

Sin embargo, $x=3$ permanece en el denominador.

Por tanto:

$$
\boxed{x=2\text{ es una discontinuidad evitable}}
$$

y:

$$
\boxed{x=3\text{ es una discontinuidad infinita}}
$$

El dominio de la función original es:

$$
\boxed{D_f=\mathbb{R}\setminus\{2,3\}}
$$

## Límites en las discontinuidades

Para cada valor $a$ que cumple:

$$
q(a)=0
$$

debemos estudiar:

$$
\lim_{x\to a^-}f(x)
$$

y:

$$
\lim_{x\to a^+}f(x)
$$

El resultado permite clasificar la discontinuidad.

### Discontinuidad evitable

Si:

$$
\boxed{
\lim_{x\to a}f(x)=L
}
$$

existe y es finito, pero $f(a)$ no está definida o $f(a)\neq L$, la discontinuidad es evitable.

### Discontinuidad infinita

Si:

$$
\boxed{
\lim_{x\to a}f(x)=\pm\infty
}
$$

existe una asíntota vertical.

## Intervalos de continuidad

Para determinar los intervalos donde una función racional es continua:

1. Encuentra los ceros del denominador.
2. Elimina esos valores del dominio.
3. Utiliza los valores restantes para dividir la recta real en intervalos.

Por ejemplo:

$$
f(x)=\frac{x+2}{(x-1)(x+3)}
$$

El denominador es cero en:

$$
x=1,\qquad x=-3
$$

Por tanto:

$$
\boxed{
D_f=\mathbb{R}\setminus\{-3,1\}
}
$$

y la función es continua en:

$$
\boxed{
(-\infty,-3)\cup(-3,1)\cup(1,\infty)
}
$$

## Relación con las asíntotas verticales

Un cero del denominador no implica automáticamente que exista una asíntota vertical.

Por ejemplo:

$$
f(x)=\frac{x^2-4}{x-2}
$$

Factorizamos:

$$
f(x)=\frac{(x-2)(x+2)}{x-2}
$$

Por tanto:

$$
f(x)=x+2
\qquad x\neq2
$$

Existe un hueco en $x=2$, no una asíntota vertical.

En cambio:

$$
f(x)=\frac{x+1}{x-2}
$$

no tiene ningún factor que permita simplificar $x-2$, por lo que:

$$
\boxed{x=2\text{ es una asíntota vertical}}
$$

## Ejemplo completo

Consideremos:

$$
f(x)=\frac{x^2-1}{x^2-3x+2}
$$

Factorizamos:

$$
f(x)=\frac{(x-1)(x+1)}{(x-1)(x-2)}
$$

Para $x\neq1$:

$$
f(x)=\frac{x+1}{x-2}
$$

### Dominio

El denominador original es cero en:

$$
x=1,\qquad x=2
$$

Por tanto:

$$
\boxed{
D_f=\mathbb{R}\setminus\{1,2\}
}
$$

### Discontinuidad en $x=1$

El factor común se simplifica, por lo que la discontinuidad es evitable.

El límite es:

$$
\lim_{x\to1}f(x)
=
\frac{1+1}{1-2}
=-2
$$

Por tanto:

$$
\boxed{\text{Hueco en }(1,-2)}
$$

### Discontinuidad en $x=2$

El factor $x-2$ permanece en el denominador.

Por tanto:

$$
\boxed{x=2\text{ es una asíntota vertical}}
$$

### Continuidad

La función es continua en:

$$
\boxed{
(-\infty,1)\cup(1,2)\cup(2,\infty)
}
$$

## Procedimiento

Para estudiar la continuidad de una función racional:

1. Escribe la función como $\frac{p(x)}{q(x)}$.
2. Resuelve $q(x)=0$.
3. Determina el dominio.
4. Factoriza numerador y denominador.
5. Simplifica los factores comunes cuando sea posible.
6. Estudia el límite en cada valor excluido.
7. Distingue las discontinuidades evitables de las asíntotas verticales.
8. Indica los intervalos de continuidad.

La idea fundamental es:

$$
\boxed{
\text{Una función racional es continua donde su denominador es distinto de cero}
}
$$

:::function-graph{expression="(x^2-1)/(x^2-3*x+2)" restriction="-5<=x<=5"}
:::
