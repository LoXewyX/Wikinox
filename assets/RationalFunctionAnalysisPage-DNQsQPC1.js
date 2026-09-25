const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-Dq3f7KlK.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-DZ7Q0ij0.js","assets/index-BUO5hoW9.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-DZ7Q0ij0.js";import{t as i}from"./TopicPage-BzOTKymX.js";var a=`# Análisis de funciones racionales

Una **función racional** es una función que puede escribirse como el cociente de dos polinomios:

$$
f(x)=\\frac{P(x)}{Q(x)}
$$

donde $P(x)$ y $Q(x)$ son polinomios y $Q(x)\\neq0$.

Por ejemplo:

$$
f(x)=\\frac{x+1}{x-2}
$$

Las funciones racionales son especialmente importantes porque permiten estudiar **dominio, discontinuidades, asíntotas, límites y comportamiento en el infinito**.

## 1. Dominio

El denominador nunca puede ser cero. Por tanto, para determinar el dominio debemos resolver:

$$
Q(x)=0
$$

Por ejemplo:

$$
f(x)=\\frac{x+1}{x-2}
$$

El denominador se anula cuando:

$$
x-2=0
$$

por lo que $x=2$ no pertenece al dominio.

Así:

$$
D_f=\\mathbb{R}\\setminus\\{2\\}
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
f(x)=\\frac{x-3}{x+2}
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
f(x)=\\frac{x+1}{x-2}
$$

Entonces:

$$
f(0)=\\frac{1}{-2}=-\\frac12
$$

La intersección con el eje $y$ es:

$$
\\left(0,-\\frac12\\right)
$$

## 4. Discontinuidades

Una función racional no está definida en los valores que hacen cero el denominador.

Hay dos situaciones principales:

- **Discontinuidad evitable**, cuando un factor se puede simplificar.
- **Asíntota vertical**, cuando el factor permanece en el denominador después de simplificar.

Por ejemplo:

$$
f(x)=\\frac{(x-1)(x+2)}{(x-1)(x-3)}
$$

Podemos simplificar:

$$
f(x)=\\frac{x+2}{x-3}
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
f(x)=\\frac{1}{x-2}
$$

tiene la asíntota vertical:

$$
x=2
$$

## 6. Asíntota horizontal

Para determinar la asíntota horizontal podemos comparar los grados del numerador y del denominador.

Sea:

$$
f(x)=\\frac{P(x)}{Q(x)}
$$

### Grado del numerador menor

Si:

$$
\\deg(P)<\\deg(Q)
$$

entonces:

$$
\\lim_{x\\to\\pm\\infty}f(x)=0
$$

y la asíntota horizontal es:

$$
y=0
$$

### Mismo grado

Si:

$$
\\deg(P)=\\deg(Q)
$$

la asíntota horizontal es el cociente entre los coeficientes principales.

Por ejemplo:

$$
f(x)=\\frac{2x^2+1}{x^2-3}
$$

Entonces:

$$
y=2
$$

### Grado del numerador mayor

Si:

$$
\\deg(P)>\\deg(Q)
$$

no existe una asíntota horizontal.

Puede existir una asíntota oblicua o polinómica.

## 7. Asíntota oblicua

Cuando el grado del numerador es exactamente uno mayor que el del denominador, puede existir una asíntota oblicua.

Por ejemplo:

$$
f(x)=\\frac{x^2+1}{x-1}
$$

Dividiendo los polinomios:

$$
\\frac{x^2+1}{x-1}=x+1+\\frac{2}{x-1}
$$

Cuando $x$ tiende a $\\pm\\infty$:

$$
\\frac{2}{x-1}\\to0
$$

Por tanto, la asíntota oblicua es:

$$
y=x+1
$$

## 8. Límites en las discontinuidades

Los límites permiten estudiar qué ocurre cuando nos acercamos a una discontinuidad.

Por ejemplo:

$$
f(x)=\\frac{1}{x-2}
$$

Cuando $x$ se aproxima a $2$ por la izquierda:

$$
\\lim_{x\\to2^-}\\frac{1}{x-2}=-\\infty
$$

Mientras que por la derecha:

$$
\\lim_{x\\to2^+}\\frac{1}{x-2}=+\\infty
$$

Por tanto:

$$
\\lim_{x\\to2}f(x)
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
f(x)=\\frac{x-1}{x+2}
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
(-\\infty,-2),\\quad(-2,1),\\quad(1,\\infty)
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
f(x)=\\frac{1}{x}
$$

tiene:

$$
f'(x)=-\\frac{1}{x^2}
$$

Como:

$$
f'(x)<0
$$

para todo $x\\neq0$, la función es decreciente en:

$$
(-\\infty,0)
$$

y:

$$
(0,\\infty)
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
f(x)=\\frac{1}{x}
$$

es impar porque:

$$
f(-x)=-f(x)
$$

## 12. Comportamiento en el infinito

También debemos estudiar:

$$
\\lim_{x\\to+\\infty}f(x)
$$

y:

$$
\\lim_{x\\to-\\infty}f(x)
$$

Estos límites permiten identificar las asíntotas horizontales y comprender cómo se comporta la función lejos del origen.

## 13. Ejemplo completo

Consideremos:

$$
f(x)=\\frac{x+1}{x-2}
$$

### Dominio

$$
D_f=\\mathbb{R}\\setminus\\{2\\}
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
f(0)=-\\frac12
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
f(x)=\\frac{P(x)}{Q(x)}
$$

y su análisis requiere prestar especial atención a los ceros del denominador.
`,o=`# Anàlisi de funcions racionals

Una **funció racional** és una funció que es pot escriure com el quocient de dos polinomis:

$$
f(x)=\\frac{P(x)}{Q(x)}
$$

on $P(x)$ i $Q(x)$ són polinomis i $Q(x)\\neq0$.

Per exemple:

$$
f(x)=\\frac{x+1}{x-2}
$$

Les funcions racionals són especialment importants perquè permeten estudiar **domini, discontinuïtats, asímptotes, límits i comportament a l'infinit**.

## 1. Domini

El denominador mai pot ser zero. Per tant, per determinar el domini hem de resoldre:

$$
Q(x)=0
$$

Per exemple:

$$
f(x)=\\frac{x+1}{x-2}
$$

El denominador s'anul·la quan:

$$
x-2=0
$$

per tant, $x=2$ no pertany al domini.

Així:

$$
D_f=\\mathbb{R}\\setminus\\{2\\}
$$

:::function-graph{expression="(x+1)/(x-2)" restriction="-8<=x<=8"}
:::

## 2. Zeros de la funció

Els zeros d'una funció racional s'obtenen igualant a zero el numerador:

$$
P(x)=0
$$

sempre que el valor obtingut no anul·li també el denominador.

Per exemple:

$$
f(x)=\\frac{x-3}{x+2}
$$

El numerador s'anul·la en:

$$
x=3
$$

Per tant, la funció té un zero en $x=3$ i talla l'eix $x$ en:

$$
(3,0)
$$

## 3. Intersecció amb l'eix $y$

Per trobar la intersecció amb l'eix $y$, calculem $f(0)$, sempre que $0$ pertanyi al domini.

Per exemple:

$$
f(x)=\\frac{x+1}{x-2}
$$

Aleshores:

$$
f(0)=\\frac{1}{-2}=-\\frac12
$$

La intersecció amb l'eix $y$ és:

$$
\\left(0,-\\frac12\\right)
$$

## 4. Discontinuïtats

Una funció racional no està definida en els valors que fan zero el denominador.

Hi ha dues situacions principals:

- **Discontinuïtat evitable**, quan un factor es pot simplificar.
- **Asímptota vertical**, quan el factor continua al denominador després de simplificar.

Per exemple:

$$
f(x)=\\frac{(x-1)(x+2)}{(x-1)(x-3)}
$$

Podem simplificar:

$$
f(x)=\\frac{x+2}{x-3}
$$

però $x=1$ continua exclòs del domini original.

Per tant:

- $x=1$ és una discontinuïtat evitable.
- $x=3$ és una possible asímptota vertical.

## 5. Asímptotes verticals

Les asímptotes verticals apareixen en els valors on el denominador s'anul·la i el factor no es pot cancel·lar.

Si:

$$
Q(a)=0
$$

i el factor corresponent no es simplifica, aleshores normalment:

$$
x=a
$$

és una asímptota vertical.

Per exemple:

$$
f(x)=\\frac{1}{x-2}
$$

té l'asímptota vertical:

$$
x=2
$$

## 6. Asímptota horitzontal

Per determinar l'asímptota horitzontal podem comparar els graus del numerador i del denominador.

Sigui:

$$
f(x)=\\frac{P(x)}{Q(x)}
$$

### Grau del numerador menor

Si:

$$
\\deg(P)<\\deg(Q)
$$

aleshores:

$$
\\lim_{x\\to\\pm\\infty}f(x)=0
$$

i l'asímptota horitzontal és:

$$
y=0
$$

### Mateix grau

Si:

$$
\\deg(P)=\\deg(Q)
$$

l'asímptota horitzontal és el quocient entre els coeficients principals.

Per exemple:

$$
f(x)=\\frac{2x^2+1}{x^2-3}
$$

Aleshores:

$$
y=2
$$

### Grau del numerador més gran

Si:

$$
\\deg(P)>\\deg(Q)
$$

no existeix una asímptota horitzontal.

Pot existir una asímptota obliqua o polinòmica.

## 7. Asímptota obliqua

Quan el grau del numerador és exactament un més que el del denominador, pot existir una asímptota obliqua.

Per exemple:

$$
f(x)=\\frac{x^2+1}{x-1}
$$

Dividint els polinomis:

$$
\\frac{x^2+1}{x-1}=x+1+\\frac{2}{x-1}
$$

Quan $x$ tendeix a $\\pm\\infty$:

$$
\\frac{2}{x-1}\\to0
$$

Per tant, l'asímptota obliqua és:

$$
y=x+1
$$

## 8. Límits en les discontinuïtats

Els límits permeten estudiar què passa quan ens acostem a una discontinuïtat.

Per exemple:

$$
f(x)=\\frac{1}{x-2}
$$

Quan $x$ s'aproxima a $2$ per l'esquerra:

$$
\\lim_{x\\to2^-}\\frac{1}{x-2}=-\\infty
$$

Mentre que per la dreta:

$$
\\lim_{x\\to2^+}\\frac{1}{x-2}=+\\infty
$$

Per tant:

$$
\\lim_{x\\to2}f(x)
$$

no existeix com a límit finit i $x=2$ és una asímptota vertical.

## 9. Signe d'una funció racional

Per estudiar el signe hem de trobar:

1. Els zeros del numerador.
2. Els zeros del denominador.
3. Els intervals determinats per aquests valors.
4. El signe de la funció en cada interval.

Per exemple:

$$
f(x)=\\frac{x-1}{x+2}
$$

Els valors importants són:

$$
x=1
$$

i:

$$
x=-2
$$

Aquests valors divideixen la recta real en tres intervals:

$$
(-\\infty,-2),\\quad(-2,1),\\quad(1,\\infty)
$$

A partir d'aquests intervals podem construir una taula de signes.

## 10. Monotonia

Per estudiar la monotonia calculem la derivada:

$$
f'(x)
$$

Els punts crítics s'obtenen resolent:

$$
f'(x)=0
$$

També hem de tenir en compte els punts on la funció no està definida.

Per exemple:

$$
f(x)=\\frac{1}{x}
$$

té:

$$
f'(x)=-\\frac{1}{x^2}
$$

Com que:

$$
f'(x)<0
$$

per a tot $x\\neq0$, la funció és decreixent en:

$$
(-\\infty,0)
$$

i:

$$
(0,\\infty)
$$

## 11. Simetria

Podem estudiar la simetria calculant $f(-x)$.

Una funció és **parella** si:

$$
f(-x)=f(x)
$$

i és simètrica respecte de l'eix $y$.

Una funció és **senar** si:

$$
f(-x)=-f(x)
$$

i és simètrica respecte de l'origen.

Per exemple:

$$
f(x)=\\frac{1}{x}
$$

és senar perquè:

$$
f(-x)=-f(x)
$$

## 12. Comportament a l'infinit

També hem d'estudiar:

$$
\\lim_{x\\to+\\infty}f(x)
$$

i:

$$
\\lim_{x\\to-\\infty}f(x)
$$

Aquests límits permeten identificar les asímptotes horitzontals i comprendre com es comporta la funció lluny de l'origen.

## 13. Exemple complet

Considerem:

$$
f(x)=\\frac{x+1}{x-2}
$$

### Domini

$$
D_f=\\mathbb{R}\\setminus\\{2\\}
$$

### Zero

$$
x+1=0
$$

per tant:

$$
x=-1
$$

### Intersecció amb l'eix $y$

$$
f(0)=-\\frac12
$$

### Asímptota vertical

$$
x=2
$$

### Asímptota horitzontal

Els graus del numerador i del denominador són iguals. Els coeficients principals són tots dos $1$:

$$
y=1
$$

:::function-graph{expression="(x+1)/(x-2)" restriction="-8<=x<=8"}
:::

## 14. Procediment d'anàlisi

Per analitzar una funció racional de manera sistemàtica:

1. Factoritza el numerador i el denominador.
2. Determina el domini.
3. Simplifica els factors comuns, conservant les restriccions originals.
4. Troba els zeros.
5. Calcula la intersecció amb l'eix $y$.
6. Identifica les discontinuïtats.
7. Determina les asímptotes verticals.
8. Estudia les asímptotes horitzontals o obliqües.
9. Calcula els límits rellevants.
10. Estudia el signe.
11. Calcula la derivada i estudia la monotonia.
12. Determina els extrems relatius.
13. Estudia la simetria.
14. Representa gràficament la funció.

## Resum

Una funció racional té la forma:

$$
f(x)=\\frac{P(x)}{Q(x)}
$$

i el seu anàlisi requereix prestar especial atenció als zeros del denominador.
`,s=`# Analysis of Rational Functions

A **rational function** is a function that can be written as the quotient of two polynomials:

$$
f(x)=\\frac{P(x)}{Q(x)}
$$

where $P(x)$ and $Q(x)$ are polynomials and $Q(x)\\neq0$.

For example:

$$
f(x)=\\frac{x+1}{x-2}
$$

Rational functions are especially useful because they allow us to study **domain, discontinuities, asymptotes, limits, and behavior at infinity**.

## 1. Domain

The denominator can never be zero. Therefore, to determine the domain, we solve:

$$
Q(x)=0
$$

For example:

$$
f(x)=\\frac{x+1}{x-2}
$$

The denominator is zero when:

$$
x-2=0
$$

so $x=2$ does not belong to the domain.

Therefore:

$$
D_f=\\mathbb{R}\\setminus\\{2\\}
$$

:::function-graph{expression="(x+1)/(x-2)" restriction="-8<=x<=8"}
:::

## 2. Zeros of the Function

The zeros of a rational function are obtained by setting the numerator equal to zero:

$$
P(x)=0
$$

provided that the resulting value does not also make the denominator zero.

For example:

$$
f(x)=\\frac{x-3}{x+2}
$$

The numerator is zero when:

$$
x=3
$$

Therefore, the function has a zero at $x=3$ and crosses the $x$-axis at:

$$
(3,0)
$$

## 3. $y$-Intercept

To find the $y$-intercept, calculate $f(0)$, provided that $0$ belongs to the domain.

For example:

$$
f(x)=\\frac{x+1}{x-2}
$$

Then:

$$
f(0)=\\frac{1}{-2}=-\\frac12
$$

The $y$-intercept is:

$$
\\left(0,-\\frac12\\right)
$$

## 4. Discontinuities

A rational function is not defined at values that make the denominator zero.

There are two main situations:

- **Removable discontinuity**, when a factor can be cancelled.
- **Vertical asymptote**, when the factor remains in the denominator after simplification.

For example:

$$
f(x)=\\frac{(x-1)(x+2)}{(x-1)(x-3)}
$$

We can simplify:

$$
f(x)=\\frac{x+2}{x-3}
$$

but $x=1$ is still excluded from the original domain.

Therefore:

- $x=1$ is a removable discontinuity.
- $x=3$ is a possible vertical asymptote.

## 5. Vertical Asymptotes

Vertical asymptotes occur at values where the denominator is zero and the corresponding factor cannot be cancelled.

If:

$$
Q(a)=0
$$

and the corresponding factor does not cancel, then usually:

$$
x=a
$$

is a vertical asymptote.

For example:

$$
f(x)=\\frac{1}{x-2}
$$

has the vertical asymptote:

$$
x=2
$$

## 6. Horizontal Asymptote

To determine a horizontal asymptote, we can compare the degrees of the numerator and denominator.

Let:

$$
f(x)=\\frac{P(x)}{Q(x)}
$$

### Numerator degree is smaller

If:

$$
\\deg(P)<\\deg(Q)
$$

then:

$$
\\lim_{x\\to\\pm\\infty}f(x)=0
$$

and the horizontal asymptote is:

$$
y=0
$$

### Same degree

If:

$$
\\deg(P)=\\deg(Q)
$$

the horizontal asymptote is the ratio of the leading coefficients.

For example:

$$
f(x)=\\frac{2x^2+1}{x^2-3}
$$

Therefore:

$$
y=2
$$

### Numerator degree is larger

If:

$$
\\deg(P)>\\deg(Q)
$$

there is no horizontal asymptote.

There may instead be a slant or polynomial asymptote.

## 7. Slant Asymptote

When the degree of the numerator is exactly one greater than the degree of the denominator, a slant asymptote may exist.

For example:

$$
f(x)=\\frac{x^2+1}{x-1}
$$

Polynomial division gives:

$$
\\frac{x^2+1}{x-1}=x+1+\\frac{2}{x-1}
$$

As $x$ tends to $\\pm\\infty$:

$$
\\frac{2}{x-1}\\to0
$$

Therefore, the slant asymptote is:

$$
y=x+1
$$

## 8. Limits at Discontinuities

Limits allow us to study what happens as we approach a discontinuity.

For example:

$$
f(x)=\\frac{1}{x-2}
$$

As $x$ approaches $2$ from the left:

$$
\\lim_{x\\to2^-}\\frac{1}{x-2}=-\\infty
$$

while from the right:

$$
\\lim_{x\\to2^+}\\frac{1}{x-2}=+\\infty
$$

Therefore:

$$
\\lim_{x\\to2}f(x)
$$

does not exist as a finite limit, and $x=2$ is a vertical asymptote.

## 9. Sign of a Rational Function

To study the sign of a rational function, find:

1. The zeros of the numerator.
2. The zeros of the denominator.
3. The intervals determined by these values.
4. The sign of the function on each interval.

For example:

$$
f(x)=\\frac{x-1}{x+2}
$$

The important values are:

$$
x=1
$$

and:

$$
x=-2
$$

These values divide the real line into three intervals:

$$
(-\\infty,-2),\\quad(-2,1),\\quad(1,\\infty)
$$

We can then construct a sign chart from these intervals.

## 10. Monotonicity

To study monotonicity, calculate the derivative:

$$
f'(x)
$$

Critical points are obtained by solving:

$$
f'(x)=0
$$

We must also consider points where the function is undefined.

For example:

$$
f(x)=\\frac{1}{x}
$$

has:

$$
f'(x)=-\\frac{1}{x^2}
$$

Since:

$$
f'(x)<0
$$

for every $x\\neq0$, the function is decreasing on:

$$
(-\\infty,0)
$$

and:

$$
(0,\\infty)
$$

## 11. Symmetry

We can study symmetry by calculating $f(-x)$.

A function is **even** if:

$$
f(-x)=f(x)
$$

and is symmetric about the $y$-axis.

A function is **odd** if:

$$
f(-x)=-f(x)
$$

and is symmetric about the origin.

For example:

$$
f(x)=\\frac{1}{x}
$$

is odd because:

$$
f(-x)=-f(x)
$$

## 12. Behavior at Infinity

We should also study:

$$
\\lim_{x\\to+\\infty}f(x)
$$

and:

$$
\\lim_{x\\to-\\infty}f(x)
$$

These limits allow us to identify horizontal asymptotes and understand how the function behaves far from the origin.

## 13. Complete Example

Consider:

$$
f(x)=\\frac{x+1}{x-2}
$$

### Domain

$$
D_f=\\mathbb{R}\\setminus\\{2\\}
$$

### Zero

$$
x+1=0
$$

therefore:

$$
x=-1
$$

### $y$-Intercept

$$
f(0)=-\\frac12
$$

### Vertical Asymptote

$$
x=2
$$

### Horizontal Asymptote

The numerator and denominator have the same degree. Their leading coefficients are both $1$:

$$
y=1
$$

:::function-graph{expression="(x+1)/(x-2)" restriction="-8<=x<=8"}
:::

## 14. Analysis Procedure

To analyze a rational function systematically:

1. Factor the numerator and denominator.
2. Determine the domain.
3. Simplify common factors while preserving the original restrictions.
4. Find the zeros.
5. Calculate the $y$-intercept.
6. Identify discontinuities.
7. Determine vertical asymptotes.
8. Study horizontal or slant asymptotes.
9. Calculate relevant limits.
10. Study the sign.
11. Calculate the derivative and study monotonicity.
12. Determine relative extrema.
13. Study symmetry.
14. Represent the function graphically.

## Summary

A rational function has the form:

$$
f(x)=\\frac{P(x)}{Q(x)}
$$

and its analysis requires particular attention to the zeros of the denominator.
`;function c(){let{locale:c}=t();return e(i,{id:`rational-function-analysis`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-Dq3f7KlK.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};