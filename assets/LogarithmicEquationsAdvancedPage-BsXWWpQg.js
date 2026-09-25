import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-CQZABaDC.js";import{t as n}from"./TopicPage-DyShI14R.js";var r=`# Ecuaciones logarítmicas (Ampliación)

Las **ecuaciones logarítmicas** son ecuaciones en las que la incógnita aparece dentro del argumento de uno o varios logaritmos.

En este tema estudiaremos técnicas para resolver ecuaciones logarítmicas más complejas, prestando especial atención al **dominio**, las propiedades de los logaritmos y la comprobación de las soluciones.

## 1. Dominio de una ecuación logarítmica

Antes de aplicar cualquier propiedad de los logaritmos, debemos determinar para qué valores de \\(x\\) están definidos todos los logaritmos de la ecuación.

Para un logaritmo:

$$
\\log_a(f(x))
$$

debe cumplirse:

$$
a > 0,\\qquad a \\neq 1,\\qquad f(x) > 0.
$$

Por tanto, una solución de una ecuación logarítmica debe pertenecer necesariamente al dominio de la ecuación.

### Ejemplo

Consideremos:

$$
\\log(x-2)=2.
$$

La condición de existencia es:

$$
x-2>0
$$

y, por tanto:

$$
x>2.
$$

Resolviendo la ecuación:

$$
x-2=10^2
$$

$$
x=102.
$$

Como \\(102>2\\), la solución es válida.

## 2. Propiedades de los logaritmos

Las propiedades fundamentales permiten transformar una ecuación logarítmica.

### Producto

$$
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

### Cociente

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

### Potencia

$$
\\log_a(x^n)=n\\log_a(x)
$$

Estas propiedades solamente pueden utilizarse cuando los argumentos involucrados son positivos.

## 3. Ecuaciones con varios logaritmos

Cuando una ecuación contiene varios logaritmos con la misma base, podemos utilizar las propiedades anteriores para combinarlos.

### Ejemplo

Resolvamos:

$$
\\log(x)+\\log(x-3)=1.
$$

Primero imponemos las condiciones:

$$
x>0
$$

y

$$
x-3>0.
$$

Por tanto:

$$
x>3.
$$

Aplicamos la propiedad del producto:

$$
\\log(x(x-3))=1.
$$

Pasamos a forma exponencial:

$$
x(x-3)=10.
$$

Desarrollamos:

$$
x^2-3x-10=0.
$$

Factorizamos:

$$
(x-5)(x+2)=0.
$$

Obtenemos:

$$
x=5
$$

o

$$
x=-2.
$$

Pero el dominio exige \\(x>3\\), por lo que:

$$
\\boxed{x=5}
$$

## 4. Ecuaciones con logaritmos en ambos miembros

Consideremos:

$$
\\log(x+1)=\\log(3x-5).
$$

Si ambos logaritmos tienen la misma base, podemos igualar sus argumentos:

$$
x+1=3x-5.
$$

Por tanto:

$$
6=2x
$$

y:

$$
x=3.
$$

Comprobamos el dominio:

$$
x+1>0
$$

$$
3x-5>0.
$$

Para \\(x=3\\), ambas condiciones se cumplen.

Por tanto:

$$
\\boxed{x=3}
$$

## 5. Cambio de base

Cuando una ecuación contiene logaritmos con bases diferentes, puede ser útil utilizar la fórmula de cambio de base:

$$
\\log_a(x)=\\frac{\\log_b(x)}{\\log_b(a)}.
$$

Por ejemplo:

$$
\\log_2(x)=\\log_3(x+1)
$$

puede transformarse mediante:

$$
\\frac{\\ln(x)}{\\ln(2)}
=
\\frac{\\ln(x+1)}{\\ln(3)}.
$$

En general, estas ecuaciones pueden requerir técnicas algebraicas adicionales o métodos numéricos.

## 6. Ecuaciones logarítmicas que requieren sustitución

Algunas ecuaciones pueden simplificarse realizando una sustitución.

Por ejemplo:

$$
(\\log x)^2-5\\log x+6=0.
$$

Definimos:

$$
t=\\log x.
$$

La ecuación se convierte en:

$$
t^2-5t+6=0.
$$

Factorizamos:

$$
(t-2)(t-3)=0.
$$

Por tanto:

$$
t=2
\\qquad\\text{o}\\qquad
t=3.
$$

Volvemos a la variable original:

$$
\\log x=2
$$

o

$$
\\log x=3.
$$

Así:

$$
x=100
\\qquad\\text{o}\\qquad
x=1000.
$$

Las dos soluciones cumplen \\(x>0\\).

## 7. Soluciones extrañas

Una transformación algebraica puede introducir valores que no pertenecen al dominio original.

Por este motivo, después de resolver una ecuación logarítmica debemos comprobar siempre las soluciones en la ecuación original.

### Esquema general

1. Determinar el dominio.
2. Simplificar utilizando las propiedades de los logaritmos.
3. Resolver la ecuación resultante.
4. Comprobar las soluciones obtenidas.
5. Conservar únicamente las soluciones pertenecientes al dominio.

## 8. Estrategia de resolución

Ante una ecuación logarítmica compleja, podemos seguir este procedimiento:

$$
\\boxed{
\\text{Dominio}
\\rightarrow
\\text{Propiedades}
\\rightarrow
\\text{Resolución}
\\rightarrow
\\text{Comprobación}
}
$$

El paso más importante es no olvidar las **condiciones de existencia de los logaritmos**.

## Resumen

Una ecuación logarítmica avanzada puede requerir:

- determinar cuidadosamente el dominio;
- combinar logaritmos mediante sus propiedades;
- convertir ecuaciones logarítmicas en ecuaciones algebraicas;
- utilizar sustituciones;
- aplicar el cambio de base;
- comprobar las soluciones en la ecuación original.

La comprobación final es fundamental porque no todas las soluciones de la ecuación transformada tienen por qué ser soluciones de la ecuación original.
`,i=`# Equacions logarítmiques (Ampliació)

Les **equacions logarítmiques** són equacions en què la incògnita apareix dins de l'argument d'un o diversos logaritmes.

En aquest tema estudiarem tècniques per resoldre equacions logarítmiques més complexes, prestant especial atenció al **domini**, les propietats dels logaritmes i la comprovació de les solucions.

## 1. Domini d'una equació logarítmica

Abans d'aplicar qualsevol propietat dels logaritmes, hem de determinar per a quins valors de \\(x\\) estan definits tots els logaritmes de l'equació.

Per a un logaritme:

$$
\\log_a(f(x))
$$

s'ha de complir:

$$
a > 0,\\qquad a \\neq 1,\\qquad f(x) > 0.
$$

Per tant, una solució d'una equació logarítmica ha de pertànyer necessàriament al domini de l'equació.

### Exemple

Considerem:

$$
\\log(x-2)=2.
$$

La condició d'existència és:

$$
x-2>0
$$

i, per tant:

$$
x>2.
$$

Resolem l'equació:

$$
x-2=10^2
$$

$$
x=102.
$$

Com que \\(102>2\\), la solució és vàlida.

## 2. Propietats dels logaritmes

Les propietats fonamentals permeten transformar una equació logarítmica.

### Producte

$$
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

### Quocient

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

### Potència

$$
\\log_a(x^n)=n\\log_a(x)
$$

Aquestes propietats només es poden utilitzar quan els arguments involucrats són positius.

## 3. Equacions amb diversos logaritmes

Quan una equació conté diversos logaritmes amb la mateixa base, podem utilitzar les propietats anteriors per combinar-los.

### Exemple

Resolem:

$$
\\log(x)+\\log(x-3)=1.
$$

Primer imposem les condicions:

$$
x>0
$$

i

$$
x-3>0.
$$

Per tant:

$$
x>3.
$$

Apliquem la propietat del producte:

$$
\\log(x(x-3))=1.
$$

Passem a forma exponencial:

$$
x(x-3)=10.
$$

Desenvolupem:

$$
x^2-3x-10=0.
$$

Factoritzem:

$$
(x-5)(x+2)=0.
$$

Obtenim:

$$
x=5
$$

o

$$
x=-2.
$$

Però el domini exigeix \\(x>3\\), de manera que:

$$
\\boxed{x=5}
$$

## 4. Equacions amb logaritmes als dos membres

Considerem:

$$
\\log(x+1)=\\log(3x-5).
$$

Si tots dos logaritmes tenen la mateixa base, podem igualar els seus arguments:

$$
x+1=3x-5.
$$

Per tant:

$$
6=2x
$$

i:

$$
x=3.
$$

Comprovem el domini:

$$
x+1>0
$$

$$
3x-5>0.
$$

Per a \\(x=3\\), totes dues condicions es compleixen.

Per tant:

$$
\\boxed{x=3}
$$

## 5. Canvi de base

Quan una equació conté logaritmes amb bases diferents, pot ser útil utilitzar la fórmula de canvi de base:

$$
\\log_a(x)=\\frac{\\log_b(x)}{\\log_b(a)}.
$$

Per exemple:

$$
\\log_2(x)=\\log_3(x+1)
$$

es pot transformar mitjançant:

$$
\\frac{\\ln(x)}{\\ln(2)}
=
\\frac{\\ln(x+1)}{\\ln(3)}.
$$

En general, aquestes equacions poden requerir tècniques algebraiques addicionals o mètodes numèrics.

## 6. Equacions logarítmiques que requereixen substitució

Algunes equacions es poden simplificar fent una substitució.

Per exemple:

$$
(\\log x)^2-5\\log x+6=0.
$$

Definim:

$$
t=\\log x.
$$

L'equació es converteix en:

$$
t^2-5t+6=0.
$$

Factoritzem:

$$
(t-2)(t-3)=0.
$$

Per tant:

$$
t=2
\\qquad\\text{o}\\qquad
t=3.
$$

Tornem a la variable original:

$$
\\log x=2
$$

o

$$
\\log x=3.
$$

Així:

$$
x=100
\\qquad\\text{o}\\qquad
x=1000.
$$

Les dues solucions compleixen \\(x>0\\).

## 7. Solucions estranyes

Una transformació algebraica pot introduir valors que no pertanyen al domini original.

Per aquest motiu, després de resoldre una equació logarítmica hem de comprovar sempre les solucions en l'equació original.

### Esquema general

1. Determinar el domini.
2. Simplificar utilitzant les propietats dels logaritmes.
3. Resoldre l'equació resultant.
4. Comprovar les solucions obtingudes.
5. Conservar únicament les solucions que pertanyen al domini.

## 8. Estratègia de resolució

Davant d'una equació logarítmica complexa, podem seguir aquest procediment:

$$
\\boxed{
\\text{Domini}
\\rightarrow
\\text{Propietats}
\\rightarrow
\\text{Resolució}
\\rightarrow
\\text{Comprovació}
}
$$

El pas més important és no oblidar les **condicions d'existència dels logaritmes**.

## Resum

Una equació logarítmica avançada pot requerir:

- determinar acuradament el domini;
- combinar logaritmes mitjançant les seves propietats;
- convertir equacions logarítmiques en equacions algebraiques;
- utilitzar substitucions;
- aplicar el canvi de base;
- comprovar les solucions en l'equació original.

La comprovació final és fonamental perquè no totes les solucions de l'equació transformada han de ser necessàriament solucions de l'equació original.
`,a=`# Logarithmic Equations (Advanced)

**Logarithmic equations** are equations in which the unknown appears inside the argument of one or more logarithms.

In this topic, we study techniques for solving more complex logarithmic equations, with particular attention to the **domain**, logarithm properties, and verification of solutions.

## 1. Domain of a logarithmic equation

Before applying any logarithm property, we must determine the values of \\(x\\) for which all logarithms in the equation are defined.

For a logarithm:

$$
\\log_a(f(x))
$$

we must have:

$$
a > 0,\\qquad a \\neq 1,\\qquad f(x) > 0.
$$

Therefore, a solution of a logarithmic equation must necessarily belong to the domain of the equation.

### Example

Consider:

$$
\\log(x-2)=2.
$$

The existence condition is:

$$
x-2>0
$$

and therefore:

$$
x>2.
$$

Solving the equation:

$$
x-2=10^2
$$

$$
x=102.
$$

Since \\(102>2\\), the solution is valid.

## 2. Properties of logarithms

The fundamental properties allow us to transform logarithmic equations.

### Product

$$
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

### Quotient

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

### Power

$$
\\log_a(x^n)=n\\log_a(x)
$$

These properties can only be used when the involved arguments are positive.

## 3. Equations with several logarithms

When an equation contains several logarithms with the same base, we can use the properties above to combine them.

### Example

Solve:

$$
\\log(x)+\\log(x-3)=1.
$$

First, impose the conditions:

$$
x>0
$$

and

$$
x-3>0.
$$

Therefore:

$$
x>3.
$$

Using the product property:

$$
\\log(x(x-3))=1.
$$

Convert to exponential form:

$$
x(x-3)=10.
$$

Expand:

$$
x^2-3x-10=0.
$$

Factor:

$$
(x-5)(x+2)=0.
$$

We obtain:

$$
x=5
$$

or

$$
x=-2.
$$

However, the domain requires \\(x>3\\), so:

$$
\\boxed{x=5}
$$

## 4. Equations with logarithms on both sides

Consider:

$$
\\log(x+1)=\\log(3x-5).
$$

If both logarithms have the same base, we can equate their arguments:

$$
x+1=3x-5.
$$

Therefore:

$$
6=2x
$$

and:

$$
x=3.
$$

Check the domain:

$$
x+1>0
$$

$$
3x-5>0.
$$

For \\(x=3\\), both conditions are satisfied.

Therefore:

$$
\\boxed{x=3}
$$

## 5. Change of base

When an equation contains logarithms with different bases, it can be useful to use the change-of-base formula:

$$
\\log_a(x)=\\frac{\\log_b(x)}{\\log_b(a)}.
$$

For example:

$$
\\log_2(x)=\\log_3(x+1)
$$

can be transformed into:

$$
\\frac{\\ln(x)}{\\ln(2)}
=
\\frac{\\ln(x+1)}{\\ln(3)}.
$$

In general, these equations may require additional algebraic techniques or numerical methods.

## 6. Logarithmic equations requiring substitution

Some equations can be simplified by introducing a substitution.

For example:

$$
(\\log x)^2-5\\log x+6=0.
$$

Define:

$$
t=\\log x.
$$

The equation becomes:

$$
t^2-5t+6=0.
$$

Factor:

$$
(t-2)(t-3)=0.
$$

Therefore:

$$
t=2
\\qquad\\text{or}\\qquad
t=3.
$$

Return to the original variable:

$$
\\log x=2
$$

or

$$
\\log x=3.
$$

Thus:

$$
x=100
\\qquad\\text{or}\\qquad
x=1000.
$$

Both solutions satisfy \\(x>0\\).

## 7. Extraneous solutions

An algebraic transformation can introduce values that do not belong to the original domain.

For this reason, after solving a logarithmic equation, we must always verify the solutions in the original equation.

### General procedure

1. Determine the domain.
2. Simplify using logarithm properties.
3. Solve the resulting equation.
4. Check the solutions obtained.
5. Keep only the solutions that belong to the domain.

## 8. Solving strategy

For a complex logarithmic equation, we can follow this procedure:

$$
\\boxed{
\\text{Domain}
\\rightarrow
\\text{Properties}
\\rightarrow
\\text{Solve}
\\rightarrow
\\text{Verify}
}
$$

The most important step is not to forget the **existence conditions of logarithms**.

## Summary

An advanced logarithmic equation may require us to:

- determine the domain carefully;
- combine logarithms using their properties;
- transform logarithmic equations into algebraic equations;
- use substitutions;
- apply the change-of-base formula;
- verify solutions in the original equation.

Final verification is essential because not every solution of the transformed equation is necessarily a solution of the original equation.
`;function o(){let{locale:o}=t();return e(n,{id:`logarithmic-equations-advanced`,content:{es:r,ca:i,en:a}[o]})}export{o as default};