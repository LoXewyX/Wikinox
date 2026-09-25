const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-Dq3f7KlK.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-DZ7Q0ij0.js","assets/index-BUO5hoW9.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-DZ7Q0ij0.js";import{t as i}from"./TopicPage-BzOTKymX.js";var a=`# Continuidad de las funciones racionales

Una **función racional** es una función que puede escribirse como el cociente de dos polinomios:

$$
f(x)=\\frac{p(x)}{q(x)}
$$

donde $p(x)$ y $q(x)$ son polinomios y $q(x)\\neq0$.

La continuidad de una función racional está directamente relacionada con los valores que hacen que su denominador sea cero.

## Dominio

Una función racional está definida únicamente cuando su denominador es distinto de cero.

Por tanto:

$$
\\boxed{
D_f=\\{x\\in\\mathbb{R}:q(x)\\neq0\\}
}
$$

Por ejemplo:

$$
f(x)=\\frac{x+1}{x-2}
$$

El denominador es cero cuando:

$$
x-2=0
$$

Por tanto:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{2\\}}
$$

## Continuidad

Como los polinomios son continuos en todo $\\mathbb{R}$, el cociente de dos polinomios es continuo allí donde el denominador no sea cero.

Por tanto:

$$
\\boxed{
f(x)=\\frac{p(x)}{q(x)}
\\text{ es continua donde }q(x)\\neq0
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
f(x)=\\frac{x^2+1}{x-3}
$$

El denominador es cero en:

$$
x=3
$$

Por tanto:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{3\\}}
$$

La función es continua en:

$$
\\boxed{(-\\infty,3)\\cup(3,\\infty)}
$$

No está definida y, por tanto, no es continua en $x=3$.

## Discontinuidades evitables

Una discontinuidad es **evitable** cuando existe un factor común que puede simplificarse.

Consideremos:

$$
f(x)=\\frac{x^2-1}{x-1}
$$

Factorizamos el numerador:

$$
f(x)=\\frac{(x-1)(x+1)}{x-1}
$$

Para $x\\neq1$:

$$
f(x)=x+1
$$

Sin embargo, la función original sigue sin estar definida en $x=1$.

El límite es:

$$
\\lim_{x\\to1}f(x)
=
\\lim_{x\\to1}(x+1)
=
2
$$

Por tanto:

$$
\\boxed{
\\lim_{x\\to1}f(x)=2
}
$$

pero:

$$
f(1)\\text{ no está definida}
$$

Existe una discontinuidad evitable en $x=1$.

Geométricamente, la gráfica tiene un hueco en:

$$
\\boxed{(1,2)}
$$

## Discontinuidades no evitables

Si el denominador se hace cero y el factor correspondiente no puede simplificarse completamente, la discontinuidad generalmente no es evitable.

Por ejemplo:

$$
f(x)=\\frac{1}{x-2}
$$

En $x=2$:

$$
\\lim_{x\\to2^-}f(x)=-\\infty
$$

y:

$$
\\lim_{x\\to2^+}f(x)=+\\infty
$$

Por tanto:

$$
\\boxed{x=2}
$$

es una asíntota vertical y la discontinuidad es infinita.

## Factorización y continuidad

Factorizar el numerador y el denominador es especialmente útil para estudiar la continuidad.

Consideremos:

$$
f(x)=\\frac{(x-2)(x+1)}{(x-2)(x-3)}
$$

Para $x\\neq2$:

$$
f(x)=\\frac{x+1}{x-3}
$$

El factor $(x-2)$ se puede simplificar, por lo que $x=2$ produce una discontinuidad evitable.

Sin embargo, $x=3$ permanece en el denominador.

Por tanto:

$$
\\boxed{x=2\\text{ es una discontinuidad evitable}}
$$

y:

$$
\\boxed{x=3\\text{ es una discontinuidad infinita}}
$$

El dominio de la función original es:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{2,3\\}}
$$

## Límites en las discontinuidades

Para cada valor $a$ que cumple:

$$
q(a)=0
$$

debemos estudiar:

$$
\\lim_{x\\to a^-}f(x)
$$

y:

$$
\\lim_{x\\to a^+}f(x)
$$

El resultado permite clasificar la discontinuidad.

### Discontinuidad evitable

Si:

$$
\\boxed{
\\lim_{x\\to a}f(x)=L
}
$$

existe y es finito, pero $f(a)$ no está definida o $f(a)\\neq L$, la discontinuidad es evitable.

### Discontinuidad infinita

Si:

$$
\\boxed{
\\lim_{x\\to a}f(x)=\\pm\\infty
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
f(x)=\\frac{x+2}{(x-1)(x+3)}
$$

El denominador es cero en:

$$
x=1,\\qquad x=-3
$$

Por tanto:

$$
\\boxed{
D_f=\\mathbb{R}\\setminus\\{-3,1\\}
}
$$

y la función es continua en:

$$
\\boxed{
(-\\infty,-3)\\cup(-3,1)\\cup(1,\\infty)
}
$$

## Relación con las asíntotas verticales

Un cero del denominador no implica automáticamente que exista una asíntota vertical.

Por ejemplo:

$$
f(x)=\\frac{x^2-4}{x-2}
$$

Factorizamos:

$$
f(x)=\\frac{(x-2)(x+2)}{x-2}
$$

Por tanto:

$$
f(x)=x+2
\\qquad x\\neq2
$$

Existe un hueco en $x=2$, no una asíntota vertical.

En cambio:

$$
f(x)=\\frac{x+1}{x-2}
$$

no tiene ningún factor que permita simplificar $x-2$, por lo que:

$$
\\boxed{x=2\\text{ es una asíntota vertical}}
$$

## Ejemplo completo

Consideremos:

$$
f(x)=\\frac{x^2-1}{x^2-3x+2}
$$

Factorizamos:

$$
f(x)=\\frac{(x-1)(x+1)}{(x-1)(x-2)}
$$

Para $x\\neq1$:

$$
f(x)=\\frac{x+1}{x-2}
$$

### Dominio

El denominador original es cero en:

$$
x=1,\\qquad x=2
$$

Por tanto:

$$
\\boxed{
D_f=\\mathbb{R}\\setminus\\{1,2\\}
}
$$

### Discontinuidad en $x=1$

El factor común se simplifica, por lo que la discontinuidad es evitable.

El límite es:

$$
\\lim_{x\\to1}f(x)
=
\\frac{1+1}{1-2}
=-2
$$

Por tanto:

$$
\\boxed{\\text{Hueco en }(1,-2)}
$$

### Discontinuidad en $x=2$

El factor $x-2$ permanece en el denominador.

Por tanto:

$$
\\boxed{x=2\\text{ es una asíntota vertical}}
$$

### Continuidad

La función es continua en:

$$
\\boxed{
(-\\infty,1)\\cup(1,2)\\cup(2,\\infty)
}
$$

## Procedimiento

Para estudiar la continuidad de una función racional:

1. Escribe la función como $\\frac{p(x)}{q(x)}$.
2. Resuelve $q(x)=0$.
3. Determina el dominio.
4. Factoriza numerador y denominador.
5. Simplifica los factores comunes cuando sea posible.
6. Estudia el límite en cada valor excluido.
7. Distingue las discontinuidades evitables de las asíntotas verticales.
8. Indica los intervalos de continuidad.

La idea fundamental es:

$$
\\boxed{
\\text{Una función racional es continua donde su denominador es distinto de cero}
}
$$

:::function-graph{expression="(x^2-1)/(x^2-3*x+2)" restriction="-5<=x<=5"}
:::
`,o=`# Continuïtat de les funcions racionals

Una **funció racional** és una funció que es pot escriure com el quocient de dos polinomis:

$$
f(x)=\\frac{p(x)}{q(x)}
$$

on $p(x)$ i $q(x)$ són polinomis i $q(x)\\neq0$.

La continuïtat d'una funció racional està directament relacionada amb els valors que fan que el seu denominador sigui zero.

## Domini

Una funció racional està definida únicament quan el seu denominador és diferent de zero.

Per tant:

$$
\\boxed{
D_f=\\{x\\in\\mathbb{R}:q(x)\\neq0\\}
}
$$

Per exemple:

$$
f(x)=\\frac{x+1}{x-2}
$$

El denominador és zero quan:

$$
x-2=0
$$

Per tant:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{2\\}}
$$

## Continuïtat

Com que els polinomis són continus en tot $\\mathbb{R}$, el quocient de dos polinomis és continu allà on el denominador no sigui zero.

Per tant:

$$
\\boxed{
f(x)=\\frac{p(x)}{q(x)}
\\text{ és contínua on }q(x)\\neq0
}
$$

Una funció racional només pot ser discontínua en els valors on:

$$
q(x)=0
$$

Aquests punts s'han d'estudiar per separat.

## Exemple

Considerem:

$$
f(x)=\\frac{x^2+1}{x-3}
$$

El denominador és zero en:

$$
x=3
$$

Per tant:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{3\\}}
$$

La funció és contínua en:

$$
\\boxed{(-\\infty,3)\\cup(3,\\infty)}
$$

No està definida i, per tant, no és contínua en $x=3$.

## Discontinuïtats evitables

Una discontinuïtat és **evitable** quan existeix un factor comú que es pot simplificar.

Considerem:

$$
f(x)=\\frac{x^2-1}{x-1}
$$

Factoritzem el numerador:

$$
f(x)=\\frac{(x-1)(x+1)}{x-1}
$$

Per a $x\\neq1$:

$$
f(x)=x+1
$$

Tanmateix, la funció original continua sense estar definida en $x=1$.

El límit és:

$$
\\lim_{x\\to1}f(x)
=
\\lim_{x\\to1}(x+1)
=
2
$$

Per tant:

$$
\\boxed{
\\lim_{x\\to1}f(x)=2
}
$$

però:

$$
f(1)\\text{ no està definida}
$$

Hi ha una discontinuïtat evitable en $x=1$.

Geomètricament, la gràfica té un forat en:

$$
\\boxed{(1,2)}
$$

## Discontinuïtats no evitables

Si el denominador es fa zero i el factor corresponent no es pot simplificar completament, la discontinuïtat generalment no és evitable.

Per exemple:

$$
f(x)=\\frac{1}{x-2}
$$

En $x=2$:

$$
\\lim_{x\\to2^-}f(x)=-\\infty
$$

i:

$$
\\lim_{x\\to2^+}f(x)=+\\infty
$$

Per tant:

$$
\\boxed{x=2}
$$

és una asímptota vertical i la discontinuïtat és infinita.

## Factorització i continuïtat

Factoritzar el numerador i el denominador és especialment útil per estudiar la continuïtat.

Considerem:

$$
f(x)=\\frac{(x-2)(x+1)}{(x-2)(x-3)}
$$

Per a $x\\neq2$:

$$
f(x)=\\frac{x+1}{x-3}
$$

El factor $(x-2)$ es pot simplificar, de manera que $x=2$ produeix una discontinuïtat evitable.

Tanmateix, $x=3$ continua al denominador.

Per tant:

$$
\\boxed{x=2\\text{ és una discontinuïtat evitable}}
$$

i:

$$
\\boxed{x=3\\text{ és una discontinuïtat infinita}}
$$

El domini de la funció original és:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{2,3\\}}
$$

## Límits en les discontinuïtats

Per a cada valor $a$ que compleix:

$$
q(a)=0
$$

hem d'estudiar:

$$
\\lim_{x\\to a^-}f(x)
$$

i:

$$
\\lim_{x\\to a^+}f(x)
$$

El resultat permet classificar la discontinuïtat.

### Discontinuïtat evitable

Si:

$$
\\boxed{
\\lim_{x\\to a}f(x)=L
}
$$

existeix i és finit, però $f(a)$ no està definida o $f(a)\\neq L$, la discontinuïtat és evitable.

### Discontinuïtat infinita

Si:

$$
\\boxed{
\\lim_{x\\to a}f(x)=\\pm\\infty
}
$$

hi ha una asímptota vertical.

## Intervals de continuïtat

Per determinar els intervals on una funció racional és contínua:

1. Troba els zeros del denominador.
2. Elimina aquests valors del domini.
3. Utilitza els valors restants per dividir la recta real en intervals.

Per exemple:

$$
f(x)=\\frac{x+2}{(x-1)(x+3)}
$$

El denominador és zero en:

$$
x=1,\\qquad x=-3
$$

Per tant:

$$
\\boxed{
D_f=\\mathbb{R}\\setminus\\{-3,1\\}
}
$$

i la funció és contínua en:

$$
\\boxed{
(-\\infty,-3)\\cup(-3,1)\\cup(1,\\infty)
}
$$

## Relació amb les asímptotes verticals

Un zero del denominador no implica automàticament que hi hagi una asímptota vertical.

Per exemple:

$$
f(x)=\\frac{x^2-4}{x-2}
$$

Factoritzem:

$$
f(x)=\\frac{(x-2)(x+2)}{x-2}
$$

Per tant:

$$
f(x)=x+2
\\qquad x\\neq2
$$

Hi ha un forat en $x=2$, no una asímptota vertical.

En canvi:

$$
f(x)=\\frac{x+1}{x-2}
$$

no té cap factor que permeti simplificar $x-2$, de manera que:

$$
\\boxed{x=2\\text{ és una asímptota vertical}}
$$

## Exemple complet

Considerem:

$$
f(x)=\\frac{x^2-1}{x^2-3x+2}
$$

Factoritzem:

$$
f(x)=\\frac{(x-1)(x+1)}{(x-1)(x-2)}
$$

Per a $x\\neq1$:

$$
f(x)=\\frac{x+1}{x-2}
$$

### Domini

El denominador original és zero en:

$$
x=1,\\qquad x=2
$$

Per tant:

$$
\\boxed{
D_f=\\mathbb{R}\\setminus\\{1,2\\}
}
$$

### Discontinuïtat en $x=1$

El factor comú es simplifica, de manera que la discontinuïtat és evitable.

El límit és:

$$
\\lim_{x\\to1}f(x)
=
\\frac{1+1}{1-2}
=-2
$$

Per tant:

$$
\\boxed{\\text{Forat en }(1,-2)}
$$

### Discontinuïtat en $x=2$

El factor $x-2$ continua al denominador.

Per tant:

$$
\\boxed{x=2\\text{ és una asímptota vertical}}
$$

### Continuïtat

La funció és contínua en:

$$
\\boxed{
(-\\infty,1)\\cup(1,2)\\cup(2,\\infty)
}
$$

## Procediment

Per estudiar la continuïtat d'una funció racional:

1. Escriu la funció com $\\frac{p(x)}{q(x)}$.
2. Resol $q(x)=0$.
3. Determina el domini.
4. Factoritza el numerador i el denominador.
5. Simplifica els factors comuns quan sigui possible.
6. Estudia el límit en cada valor exclòs.
7. Distingeix les discontinuïtats evitables de les asímptotes verticals.
8. Indica els intervals de continuïtat.

La idea fonamental és:

$$
\\boxed{
\\text{Una funció racional és contínua on el seu denominador és diferent de zero}
}
$$

:::function-graph{expression="(x^2-1)/(x^2-3*x+2)" restriction="-5<=x<=5"}
:::
`,s=`# Continuity of Rational Functions

A **rational function** is a function that can be written as the quotient of two polynomials:

$$
f(x)=\\frac{p(x)}{q(x)}
$$

where $p(x)$ and $q(x)$ are polynomials and $q(x)\\neq0$.

The continuity of a rational function is closely related to the values that make its denominator equal to zero.

## Domain

A rational function is defined only when its denominator is non-zero.

Therefore:

$$
\\boxed{
D_f=\\{x\\in\\mathbb{R}:q(x)\\neq0\\}
}
$$

For example:

$$
f(x)=\\frac{x+1}{x-2}
$$

The denominator is zero when:

$$
x-2=0
$$

so:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{2\\}}
$$

## Continuity

Since polynomials are continuous everywhere, the quotient of two polynomials is continuous wherever the denominator is not zero.

Therefore:

$$
\\boxed{
f(x)=\\frac{p(x)}{q(x)}
\\text{ is continuous wherever }q(x)\\neq0
}
$$

A rational function can only be discontinuous at values where:

$$
q(x)=0
$$

These points must be analyzed separately.

## Example

Consider:

$$
f(x)=\\frac{x^2+1}{x-3}
$$

The denominator is zero at:

$$
x=3
$$

Therefore:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{3\\}}
$$

The function is continuous on:

$$
\\boxed{(-\\infty,3)\\cup(3,\\infty)}
$$

It is not defined, and therefore not continuous, at $x=3$.

## Removable Discontinuities

A discontinuity is **removable** when a common factor can be cancelled algebraically.

Consider:

$$
f(x)=\\frac{x^2-1}{x-1}
$$

Factor the numerator:

$$
f(x)=\\frac{(x-1)(x+1)}{x-1}
$$

For $x\\neq1$:

$$
f(x)=x+1
$$

However, the original function is still undefined at $x=1$.

The limit is:

$$
\\lim_{x\\to1}f(x)
=
\\lim_{x\\to1}(x+1)
=
2
$$

Therefore:

$$
\\boxed{
\\lim_{x\\to1}f(x)=2
}
$$

but:

$$
f(1)\\text{ is undefined}
$$

There is a removable discontinuity at $x=1$.

Geometrically, the graph has a hole at:

$$
\\boxed{(1,2)}
$$

## Non-Removable Discontinuities

If the denominator becomes zero and the factor cannot be completely cancelled, the discontinuity is generally non-removable.

For example:

$$
f(x)=\\frac{1}{x-2}
$$

At $x=2$:

$$
\\lim_{x\\to2^-}f(x)=-\\infty
$$

and:

$$
\\lim_{x\\to2^+}f(x)=+\\infty
$$

Therefore:

$$
\\boxed{x=2}
$$

is a vertical asymptote and the discontinuity is infinite.

## Factorization and Continuity

Factoring the numerator and denominator is particularly useful when studying continuity.

Consider:

$$
f(x)=\\frac{(x-2)(x+1)}{(x-2)(x-3)}
$$

For $x\\neq2$:

$$
f(x)=\\frac{x+1}{x-3}
$$

The factor $(x-2)$ can be cancelled, so $x=2$ produces a removable discontinuity.

However, $x=3$ remains in the denominator.

Therefore:

$$
\\boxed{x=2\\text{ is a removable discontinuity}}
$$

and:

$$
\\boxed{x=3\\text{ is an infinite discontinuity}}
$$

The domain of the original function is:

$$
\\boxed{D_f=\\mathbb{R}\\setminus\\{2,3\\}}
$$

## Limits at Discontinuities

For every value $a$ where:

$$
q(a)=0
$$

we should study:

$$
\\lim_{x\\to a^-}f(x)
$$

and:

$$
\\lim_{x\\to a^+}f(x)
$$

The result allows us to classify the discontinuity.

### Removable discontinuity

If:

$$
\\boxed{
\\lim_{x\\to a}f(x)=L
}
$$

exists and is finite, but $f(a)$ is undefined or $f(a)\\neq L$, the discontinuity is removable.

### Infinite discontinuity

If:

$$
\\boxed{
\\lim_{x\\to a}f(x)=\\pm\\infty
}
$$

there is a vertical asymptote.

## Continuity Intervals

To determine the intervals where a rational function is continuous:

1. Find the zeros of the denominator.
2. Remove those values from the domain.
3. Use the remaining values to divide the real line into intervals.

For example:

$$
f(x)=\\frac{x+2}{(x-1)(x+3)}
$$

The denominator is zero at:

$$
x=1,\\qquad x=-3
$$

Therefore:

$$
\\boxed{
D_f=\\mathbb{R}\\setminus\\{-3,1\\}
}
$$

and the function is continuous on:

$$
\\boxed{
(-\\infty,-3)\\cup(-3,1)\\cup(1,\\infty)
}
$$

## Connection with Vertical Asymptotes

A zero of the denominator does not automatically mean that there is a vertical asymptote.

For example:

$$
f(x)=\\frac{x^2-4}{x-2}
$$

Factor:

$$
f(x)=\\frac{(x-2)(x+2)}{x-2}
$$

so:

$$
f(x)=x+2
\\qquad x\\neq2
$$

There is a hole at $x=2$, not a vertical asymptote.

In contrast:

$$
f(x)=\\frac{x+1}{x-2}
$$

has no factor that cancels $x-2$, so:

$$
\\boxed{x=2\\text{ is a vertical asymptote}}
$$

## Complete Example

Consider:

$$
f(x)=\\frac{x^2-1}{x^2-3x+2}
$$

Factor:

$$
f(x)=\\frac{(x-1)(x+1)}{(x-1)(x-2)}
$$

For $x\\neq1$:

$$
f(x)=\\frac{x+1}{x-2}
$$

### Domain

The original denominator is zero at:

$$
x=1,\\qquad x=2
$$

Therefore:

$$
\\boxed{
D_f=\\mathbb{R}\\setminus\\{1,2\\}
}
$$

### Discontinuity at $x=1$

The common factor cancels, so the discontinuity is removable.

The limit is:

$$
\\lim_{x\\to1}f(x)
=
\\frac{1+1}{1-2}
=-2
$$

Therefore:

$$
\\boxed{\\text{Hole at }(1,-2)}
$$

### Discontinuity at $x=2$

The factor $x-2$ remains in the denominator.

Therefore:

$$
\\boxed{x=2\\text{ is a vertical asymptote}}
$$

### Continuity

The function is continuous on:

$$
\\boxed{
(-\\infty,1)\\cup(1,2)\\cup(2,\\infty)
}
$$

## Procedure

To study the continuity of a rational function:

1. Write the function as $\\frac{p(x)}{q(x)}$.
2. Solve $q(x)=0$.
3. Determine the domain.
4. Factor the numerator and denominator.
5. Cancel common factors when possible.
6. Study the limit at every excluded value.
7. Distinguish removable discontinuities from vertical asymptotes.
8. State the intervals of continuity.

The key principle is:

$$
\\boxed{
\\text{A rational function is continuous wherever its denominator is non-zero}
}
$$

:::function-graph{expression="(x^2-1)/(x^2-3*x+2)" restriction="-5<=x<=5"}
:::
`;function c(){let{locale:c}=t();return e(i,{id:`continuity-rational-functions`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-Dq3f7KlK.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};