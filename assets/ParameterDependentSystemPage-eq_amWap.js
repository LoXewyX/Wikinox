import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-C1BT9wAk.js";import{t as n}from"./TopicPage-DZNFNl0A.js";var r=`# Sistema de ecuaciones dependiente de un parámetro

Un **sistema de ecuaciones dependiente de un parámetro** es un sistema en el que uno o más coeficientes contienen una variable adicional llamada **parámetro**.

El valor del parámetro puede determinar si el sistema tiene una solución, ninguna solución o infinitas soluciones.

Por ejemplo:

$$
\\begin{cases}
x+y=3\\\\
x+ay=2
\\end{cases}
$$

El parámetro es $a$.

## Resolver según el parámetro

Consideremos:

$$
\\begin{cases}
x+y=3\\\\
x+ay=2
\\end{cases}
$$

Restamos la primera ecuación de la segunda:

$$
(a-1)y=-1
$$

Si:

$$
a\\neq1
$$

podemos despejar $y$:

$$
y=-\\frac{1}{a-1}
$$

y después obtener $x$:

$$
x=3-y
$$

Por tanto, para cualquier $a\\neq1$ existe una única solución.

## Caso especial

Ahora consideremos:

$$
a=1
$$

El sistema se convierte en:

$$
\\begin{cases}
x+y=3\\\\
x+y=2
\\end{cases}
$$

Las dos ecuaciones tienen el mismo lado izquierdo pero diferentes términos independientes.

Por tanto, no pueden cumplirse simultáneamente:

$$
\\boxed{\\text{Sin solución}}
$$

Así, el sistema tiene:

$$
\\boxed{
\\begin{cases}
\\text{Una solución}, & a\\neq1\\\\
\\text{Sin solución}, & a=1
\\end{cases}
}
$$

## Otro ejemplo

Consideremos:

$$
\\begin{cases}
x+y=2\\\\
2x+2y=k
\\end{cases}
$$

La segunda ecuación es el doble de la primera cuando:

$$
k=4
$$

Por tanto:

- Si $k=4$, las dos ecuaciones representan la misma recta y existen infinitas soluciones.
- Si $k\\neq4$, las ecuaciones son incompatibles y no existe ninguna solución.

Por tanto:

$$
\\boxed{
\\begin{cases}
\\text{Infinitas soluciones}, & k=4\\\\
\\text{Sin solución}, & k\\neq4
\\end{cases}
}
$$

## Determinante y parámetro

Para un sistema de dos ecuaciones:

$$
\\begin{cases}
a_1x+b_1y=c_1\\\\
a_2x+b_2y=c_2
\\end{cases}
$$

podemos utilizar el determinante:

$$
D=
\\begin{vmatrix}
a_1&b_1\\\\
a_2&b_2
\\end{vmatrix}
=
a_1b_2-a_2b_1
$$

Si:

$$
D\\neq0
$$

el sistema tiene una única solución.

Si:

$$
D=0
$$

el sistema puede tener ninguna solución o infinitas soluciones. En ese caso debemos analizar también los términos independientes.

## Estrategia

Para resolver un sistema dependiente de un parámetro:

1. Identifica el parámetro.
2. Resuelve el sistema simbólicamente.
3. Identifica los valores del parámetro que hacen que alguna operación no sea válida, como dividir entre cero.
4. Analiza esos valores por separado.
5. Determina si cada caso tiene una solución, ninguna solución o infinitas soluciones.
6. Expresa el resultado separando los diferentes valores del parámetro.
`,i=`# Sistema d'equacions dependent d'un paràmetre

Un **sistema d'equacions dependent d'un paràmetre** és un sistema en què un o més coeficients contenen una variable addicional anomenada **paràmetre**.

El valor del paràmetre pot determinar si el sistema té una solució, cap solució o infinites solucions.

Per exemple:

$$
\\begin{cases}
x+y=3\\\\
x+ay=2
\\end{cases}
$$

El paràmetre és $a$.

## Resoldre segons el paràmetre

Considerem:

$$
\\begin{cases}
x+y=3\\\\
x+ay=2
\\end{cases}
$$

Restem la primera equació de la segona:

$$
(a-1)y=-1
$$

Si:

$$
a\\neq1
$$

podem aïllar $y$:

$$
y=-\\frac{1}{a-1}
$$

i després obtenir $x$:

$$
x=3-y
$$

Per tant, per a qualsevol $a\\neq1$ existeix una única solució.

## Cas especial

Ara considerem:

$$
a=1
$$

El sistema es converteix en:

$$
\\begin{cases}
x+y=3\\\\
x+y=2
\\end{cases}
$$

Les dues equacions tenen el mateix costat esquerre però diferents termes independents.

Per tant, no es poden complir simultàniament:

$$
\\boxed{\\text{Sense solució}}
$$

Així, el sistema té:

$$
\\boxed{
\\begin{cases}
\\text{Una solució}, & a\\neq1\\\\
\\text{Sense solució}, & a=1
\\end{cases}
}
$$

## Un altre exemple

Considerem:

$$
\\begin{cases}
x+y=2\\\\
2x+2y=k
\\end{cases}
$$

La segona equació és el doble de la primera quan:

$$
k=4
$$

Per tant:

- Si $k=4$, les dues equacions representen la mateixa recta i existeixen infinites solucions.
- Si $k\\neq4$, les equacions són incompatibles i no existeix cap solució.

Per tant:

$$
\\boxed{
\\begin{cases}
\\text{Infinites solucions}, & k=4\\\\
\\text{Sense solució}, & k\\neq4
\\end{cases}
}
$$

## Determinant i paràmetre

Per a un sistema de dues equacions:

$$
\\begin{cases}
a_1x+b_1y=c_1\\\\
a_2x+b_2y=c_2
\\end{cases}
$$

podem utilitzar el determinant:

$$
D=
\\begin{vmatrix}
a_1&b_1\\\\
a_2&b_2
\\end{vmatrix}
=
a_1b_2-a_2b_1
$$

Si:

$$
D\\neq0
$$

el sistema té una única solució.

Si:

$$
D=0
$$

el sistema pot tenir cap solució o infinites solucions. En aquest cas hem d'analitzar també els termes independents.

## Estratègia

Per resoldre un sistema dependent d'un paràmetre:

1. Identifica el paràmetre.
2. Resol el sistema simbòlicament.
3. Identifica els valors del paràmetre que fan que alguna operació no sigui vàlida, com dividir per zero.
4. Analitza aquests valors per separat.
5. Determina si cada cas té una solució, cap solució o infinites solucions.
6. Expressa el resultat separant els diferents valors del paràmetre.
`,a=`# Parameter-dependent system of equations

A **parameter-dependent system of equations** is a system in which one or more coefficients contain an additional variable called a **parameter**.

The value of the parameter can determine whether the system has one solution, no solution, or infinitely many solutions.

For example:

$$
\\begin{cases}
x+y=3\\\\
x+ay=2
\\end{cases}
$$

The parameter is $a$.

## Solving according to the parameter

Consider:

$$
\\begin{cases}
x+y=3\\\\
x+ay=2
\\end{cases}
$$

Subtract the first equation from the second:

$$
(a-1)y=-1
$$

If:

$$
a\\neq1
$$

we can solve for $y$:

$$
y=-\\frac{1}{a-1}
$$

and then obtain $x$:

$$
x=3-y
$$

Therefore, for every $a\\neq1$, there is a unique solution.

## Special case

Now consider:

$$
a=1
$$

The system becomes:

$$
\\begin{cases}
x+y=3\\\\
x+y=2
\\end{cases}
$$

The two equations have the same left-hand side but different right-hand sides.

Therefore, they cannot both be satisfied:

$$
\\boxed{\\text{No solution}}
$$

Thus, the system has:

$$
\\boxed{
\\begin{cases}
\\text{One solution}, & a\\neq1\\\\
\\text{No solution}, & a=1
\\end{cases}
}
$$

## Another example

Consider:

$$
\\begin{cases}
x+y=2\\\\
2x+2y=k
\\end{cases}
$$

The second equation is twice the first one when:

$$
k=4
$$

Therefore:

- If $k=4$, the two equations represent the same line and there are infinitely many solutions.
- If $k\\neq4$, the equations are inconsistent and there is no solution.

Therefore:

$$
\\boxed{
\\begin{cases}
\\text{Infinitely many solutions}, & k=4\\\\
\\text{No solution}, & k\\neq4
\\end{cases}
}
$$

## Determinant and parameter

For a system of two equations:

$$
\\begin{cases}
a_1x+b_1y=c_1\\\\
a_2x+b_2y=c_2
\\end{cases}
$$

we can use the determinant:

$$
D=
\\begin{vmatrix}
a_1&b_1\\\\
a_2&b_2
\\end{vmatrix}
=
a_1b_2-a_2b_1
$$

If:

$$
D\\neq0
$$

the system has a unique solution.

If:

$$
D=0
$$

the system may have no solution or infinitely many solutions. In this case, we must also analyze the constant terms.

## Strategy

To solve a parameter-dependent system:

1. Identify the parameter.
2. Solve the system symbolically.
3. Identify parameter values that make an operation invalid, such as division by zero.
4. Analyze those values separately.
5. Determine whether each case has one solution, no solution, or infinitely many solutions.
6. Express the result by separating the different parameter cases.
`;function o(){let{locale:o}=t();return e(n,{id:`parameter-dependent-system`,content:{es:r,ca:i,en:a}[o]})}export{o as default};