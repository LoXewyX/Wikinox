import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-CQZABaDC.js";import{t as n}from"./TopicPage-DyShI14R.js";var r=`# Soluciones de ecuaciones trigonométricas

Las **ecuaciones trigonométricas** son aquellas en las que la incógnita aparece dentro de una función trigonométrica, como el seno, el coseno o la tangente.

A diferencia de una ecuación algebraica, normalmente una ecuación trigonométrica tiene **infinitas soluciones**, porque las funciones trigonométricas son periódicas.

## 1. Periodicidad

Las funciones trigonométricas se repiten periódicamente:

$$
\\sin(x+2\\pi)=\\sin(x)
$$

$$
\\cos(x+2\\pi)=\\cos(x)
$$

$$
\\tan(x+\\pi)=\\tan(x)
$$

Por ello, si encontramos una solución, podemos obtener otras soluciones sumando el período correspondiente.

La forma general de las soluciones depende de la función utilizada.

### Seno

Si

$$
\\sin(x)=a
$$

y $\\alpha$ es un ángulo tal que

$$
\\sin(\\alpha)=a,
$$

las soluciones generales son

$$
x=\\alpha+2k\\pi
$$

o

$$
x=\\pi-\\alpha+2k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

### Coseno

Si

$$
\\cos(x)=a,
$$

las soluciones pueden escribirse como

$$
x=\\pm\\alpha+2k\\pi,
\\qquad k\\in\\mathbb{Z},
$$

donde $\\cos(\\alpha)=a$.

### Tangente

Si

$$
\\tan(x)=a,
$$

las soluciones son

$$
x=\\alpha+k\\pi,
\\qquad k\\in\\mathbb{Z},
$$

donde $\\tan(\\alpha)=a$.

---

## 2. Resolver una ecuación de seno

Consideremos

$$
\\sin(x)=\\frac{1}{2}.
$$

Sabemos que

$$
\\sin\\left(\\frac{\\pi}{6}\\right)=\\frac{1}{2}.
$$

El seno también toma este valor en el segundo cuadrante:

$$
\\pi-\\frac{\\pi}{6}=\\frac{5\\pi}{6}.
$$

Por tanto, las soluciones generales son

$$
x=\\frac{\\pi}{6}+2k\\pi
$$

o

$$
x=\\frac{5\\pi}{6}+2k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

Si únicamente buscamos soluciones en el intervalo $[0,2\\pi)$, obtenemos

$$
x=\\frac{\\pi}{6},
\\qquad
x=\\frac{5\\pi}{6}.
$$

---

## 3. Resolver una ecuación de coseno

Consideremos

$$
\\cos(x)=-\\frac{\\sqrt{3}}{2}.
$$

El ángulo de referencia es

$$
\\frac{\\pi}{6},
$$

porque

$$
\\cos\\left(\\frac{\\pi}{6}\\right)=\\frac{\\sqrt{3}}{2}.
$$

Como el coseno es negativo en los cuadrantes II y III:

$$
x=\\pi-\\frac{\\pi}{6}=\\frac{5\\pi}{6}
$$

y

$$
x=\\pi+\\frac{\\pi}{6}=\\frac{7\\pi}{6}.
$$

Por tanto,

$$
x=\\frac{5\\pi}{6}+2k\\pi
$$

o

$$
x=\\frac{7\\pi}{6}+2k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

En $[0,2\\pi)$:

$$
\\boxed{x=\\frac{5\\pi}{6},\\frac{7\\pi}{6}}
$$

---

## 4. Resolver una ecuación de tangente

Consideremos

$$
\\tan(x)=1.
$$

Sabemos que

$$
\\tan\\left(\\frac{\\pi}{4}\\right)=1.
$$

La tangente tiene período $\\pi$, por lo que todas las soluciones son

$$
\\boxed{x=\\frac{\\pi}{4}+k\\pi},
\\qquad k\\in\\mathbb{Z}.
$$

En el intervalo $[0,2\\pi)$:

$$
x=\\frac{\\pi}{4}
$$

y

$$
x=\\frac{5\\pi}{4}.
$$

---

## 5. Ecuaciones trigonométricas con una expresión lineal

A veces la incógnita no aparece directamente como $x$, sino dentro de una expresión.

Por ejemplo:

$$
\\sin(2x)=\\frac{\\sqrt{3}}{2}.
$$

Primero resolvemos la ecuación para $2x$.

Sabemos que

$$
2x=\\frac{\\pi}{3}+2k\\pi
$$

o

$$
2x=\\frac{2\\pi}{3}+2k\\pi.
$$

Dividiendo entre $2$:

$$
x=\\frac{\\pi}{6}+k\\pi
$$

o

$$
x=\\frac{\\pi}{3}+k\\pi.
$$

Por tanto,

$$
\\boxed{
x=\\frac{\\pi}{6}+k\\pi
\\quad\\text{o}\\quad
x=\\frac{\\pi}{3}+k\\pi
}
$$

---

## 6. Ecuaciones con restricciones

En muchos ejercicios se especifica un intervalo para la incógnita.

Por ejemplo:

$$
2\\cos(x)=1,
\\qquad
0\\leq x<2\\pi.
$$

Dividimos entre $2$:

$$
\\cos(x)=\\frac{1}{2}.
$$

En el intervalo $[0,2\\pi)$, el coseno vale $\\frac12$ en:

$$
x=\\frac{\\pi}{3}
$$

y

$$
x=\\frac{5\\pi}{3}.
$$

Por tanto:

$$
\\boxed{
x\\in
\\left\\{
\\frac{\\pi}{3},
\\frac{5\\pi}{3}
\\right\\}
}
$$

La restricción es importante porque la ecuación tiene infinitas soluciones, pero el intervalo selecciona únicamente algunas de ellas.

---

## 7. Ecuaciones que requieren factorización

No todas las ecuaciones trigonométricas se reducen directamente a una única función.

Por ejemplo:

$$
\\sin^2(x)-\\sin(x)=0.
$$

Factorizamos:

$$
\\sin(x)(\\sin(x)-1)=0.
$$

Por la propiedad del producto nulo:

$$
\\sin(x)=0
$$

o

$$
\\sin(x)=1.
$$

Para la primera ecuación:

$$
x=k\\pi.
$$

Para la segunda:

$$
x=\\frac{\\pi}{2}+2k\\pi.
$$

Por tanto:

$$
\\boxed{
x=k\\pi
\\quad\\text{o}\\quad
x=\\frac{\\pi}{2}+2k\\pi,
\\qquad k\\in\\mathbb{Z}
}
$$

---

## 8. Uso de identidades trigonométricas

Las identidades trigonométricas permiten transformar una ecuación complicada en otra más sencilla.

Una de las identidades fundamentales es:

$$
\\sin^2(x)+\\cos^2(x)=1.
$$

También son útiles:

$$
1+\\tan^2(x)=\\sec^2(x)
$$

y

$$
1+\\cot^2(x)=\\csc^2(x).
$$

Por ejemplo:

$$
2\\sin^2(x)-1=0.
$$

Despejamos:

$$
2\\sin^2(x)=1
$$

$$
\\sin^2(x)=\\frac12.
$$

Tomamos raíces:

$$
\\sin(x)=\\pm\\frac{\\sqrt2}{2}.
$$

En $[0,2\\pi)$ obtenemos cuatro soluciones:

$$
x=
\\frac{\\pi}{4},
\\frac{3\\pi}{4},
\\frac{5\\pi}{4},
\\frac{7\\pi}{4}.
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
\\sin(x)=0
$$

no se obtiene únicamente $x=0$.

La solución general es:

$$
x=k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

### Confundir el período

El seno y el coseno tienen período $2\\pi$:

$$
T_{\\sin}=T_{\\cos}=2\\pi.
$$

La tangente tiene período $\\pi$:

$$
T_{\\tan}=\\pi.
$$

### No considerar todos los cuadrantes

Por ejemplo, si

$$
\\cos(x)=-\\frac12,
$$

no basta con encontrar el ángulo de referencia. También hay que localizar los cuadrantes donde el coseno es negativo.

### Dividir por una expresión que puede ser cero

En una ecuación como

$$
\\sin(x)\\cos(x)=0,
$$

no debemos dividir directamente entre $\\sin(x)$ o $\\cos(x)$, porque podríamos eliminar soluciones.

Es preferible utilizar:

$$
ab=0
\\quad\\Longrightarrow\\quad
a=0\\ \\text{o}\\ b=0.
$$

---

## 11. Soluciones en grados

Las mismas reglas pueden expresarse en grados.

Los períodos son:

$$
T_{\\sin}=T_{\\cos}=360^\\circ
$$

y

$$
T_{\\tan}=180^\\circ.
$$

Por ejemplo:

$$
\\sin(x)=\\frac12
$$

tiene como soluciones generales:

$$
x=30^\\circ+360^\\circ k
$$

o

$$
x=150^\\circ+360^\\circ k,
\\qquad k\\in\\mathbb{Z}.
$$

Es importante no mezclar grados y radianes dentro del mismo ejercicio.

---

## Resumen

Las soluciones de las ecuaciones trigonométricas dependen principalmente de la **periodicidad** de las funciones y de los **cuadrantes** en los que toman determinados valores.

Las formas fundamentales son:

$$
\\sin(x)=a
\\quad\\Longrightarrow\\quad
x=\\alpha+2k\\pi
\\ \\text{o}\\
x=\\pi-\\alpha+2k\\pi
$$

$$
\\cos(x)=a
\\quad\\Longrightarrow\\quad
x=\\pm\\alpha+2k\\pi
$$

$$
\\tan(x)=a
\\quad\\Longrightarrow\\quad
x=\\alpha+k\\pi
$$

donde $k\\in\\mathbb{Z}$ y $\\alpha$ es un ángulo que produce el valor correspondiente.

Cuando existe un intervalo, como $[0,2\\pi)$, primero se obtiene la solución general y después se seleccionan únicamente las soluciones pertenecientes a dicho intervalo.
`,i=`# Solucions d'equacions trigonomètriques

Les **equacions trigonomètriques** són aquelles en què la incògnita apareix dins d'una funció trigonomètrica, com el sinus, el cosinus o la tangent.

A diferència d'una equació algebraica, normalment una equació trigonomètrica té **infinites solucions**, perquè les funcions trigonomètriques són periòdiques.

## 1. Periodicitat

Les funcions trigonomètriques es repeteixen periòdicament:

$$
\\sin(x+2\\pi)=\\sin(x)
$$

$$
\\cos(x+2\\pi)=\\cos(x)
$$

$$
\\tan(x+\\pi)=\\tan(x)
$$

Per això, si trobem una solució, podem obtenir altres solucions sumant-hi el període corresponent.

La forma general de les solucions depèn de la funció utilitzada.

### Sinus

Si

$$
\\sin(x)=a
$$

i $\\alpha$ és un angle tal que

$$
\\sin(\\alpha)=a,
$$

les solucions generals són

$$
x=\\alpha+2k\\pi
$$

o

$$
x=\\pi-\\alpha+2k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

### Cosinus

Si

$$
\\cos(x)=a,
$$

les solucions es poden escriure com

$$
x=\\pm\\alpha+2k\\pi,
\\qquad k\\in\\mathbb{Z},
$$

on $\\cos(\\alpha)=a$.

### Tangent

Si

$$
\\tan(x)=a,
$$

les solucions són

$$
x=\\alpha+k\\pi,
\\qquad k\\in\\mathbb{Z},
$$

on $\\tan(\\alpha)=a$.

---

## 2. Resoldre una equació de sinus

Considerem

$$
\\sin(x)=\\frac{1}{2}.
$$

Sabem que

$$
\\sin\\left(\\frac{\\pi}{6}\\right)=\\frac{1}{2}.
$$

El sinus també pren aquest valor al segon quadrant:

$$
\\pi-\\frac{\\pi}{6}=\\frac{5\\pi}{6}.
$$

Per tant, les solucions generals són

$$
x=\\frac{\\pi}{6}+2k\\pi
$$

o

$$
x=\\frac{5\\pi}{6}+2k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

Si només busquem solucions a l'interval $[0,2\\pi)$, obtenim

$$
x=\\frac{\\pi}{6},
\\qquad
x=\\frac{5\\pi}{6}.
$$

---

## 3. Resoldre una equació de cosinus

Considerem

$$
\\cos(x)=-\\frac{\\sqrt{3}}{2}.
$$

L'angle de referència és

$$
\\frac{\\pi}{6},
$$

perquè

$$
\\cos\\left(\\frac{\\pi}{6}\\right)=\\frac{\\sqrt{3}}{2}.
$$

Com que el cosinus és negatiu als quadrants II i III:

$$
x=\\pi-\\frac{\\pi}{6}=\\frac{5\\pi}{6}
$$

i

$$
x=\\pi+\\frac{\\pi}{6}=\\frac{7\\pi}{6}.
$$

Per tant,

$$
x=\\frac{5\\pi}{6}+2k\\pi
$$

o

$$
x=\\frac{7\\pi}{6}+2k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

A $[0,2\\pi)$:

$$
\\boxed{x=\\frac{5\\pi}{6},\\frac{7\\pi}{6}}
$$

---

## 4. Resoldre una equació de tangent

Considerem

$$
\\tan(x)=1.
$$

Sabem que

$$
\\tan\\left(\\frac{\\pi}{4}\\right)=1.
$$

La tangent té període $\\pi$, de manera que totes les solucions són

$$
\\boxed{x=\\frac{\\pi}{4}+k\\pi},
\\qquad k\\in\\mathbb{Z}.
$$

A l'interval $[0,2\\pi)$:

$$
x=\\frac{\\pi}{4}
$$

i

$$
x=\\frac{5\\pi}{4}.
$$

---

## 5. Equacions trigonomètriques amb una expressió lineal

De vegades la incògnita no apareix directament com $x$, sinó dins d'una expressió.

Per exemple:

$$
\\sin(2x)=\\frac{\\sqrt{3}}{2}.
$$

Primer resolem l'equació per a $2x$.

Sabem que

$$
2x=\\frac{\\pi}{3}+2k\\pi
$$

o

$$
2x=\\frac{2\\pi}{3}+2k\\pi.
$$

Dividint entre $2$:

$$
x=\\frac{\\pi}{6}+k\\pi
$$

o

$$
x=\\frac{\\pi}{3}+k\\pi.
$$

Per tant,

$$
\\boxed{
x=\\frac{\\pi}{6}+k\\pi
\\quad\\text{o}\\quad
x=\\frac{\\pi}{3}+k\\pi
}
$$

---

## 6. Equacions amb restriccions

En molts exercicis s'especifica un interval per a la incògnita.

Per exemple:

$$
2\\cos(x)=1,
\\qquad
0\\leq x<2\\pi.
$$

Dividim entre $2$:

$$
\\cos(x)=\\frac{1}{2}.
$$

A l'interval $[0,2\\pi)$, el cosinus val $\\frac12$ a:

$$
x=\\frac{\\pi}{3}
$$

i

$$
x=\\frac{5\\pi}{3}.
$$

Per tant:

$$
\\boxed{
x\\in
\\left\\{
\\frac{\\pi}{3},
\\frac{5\\pi}{3}
\\right\\}
}
$$

La restricció és important perquè l'equació té infinites solucions, però l'interval en selecciona només algunes.

---

## 7. Equacions que requereixen factorització

No totes les equacions trigonomètriques es redueixen directament a una única funció.

Per exemple:

$$
\\sin^2(x)-\\sin(x)=0.
$$

Factoritzem:

$$
\\sin(x)(\\sin(x)-1)=0.
$$

Per la propietat del producte nul:

$$
\\sin(x)=0
$$

o

$$
\\sin(x)=1.
$$

Per a la primera equació:

$$
x=k\\pi.
$$

Per a la segona:

$$
x=\\frac{\\pi}{2}+2k\\pi.
$$

Per tant:

$$
\\boxed{
x=k\\pi
\\quad\\text{o}\\quad
x=\\frac{\\pi}{2}+2k\\pi,
\\qquad k\\in\\mathbb{Z}
}
$$

---

## 8. Ús d'identitats trigonomètriques

Les identitats trigonomètriques permeten transformar una equació complicada en una altra de més senzilla.

Una de les identitats fonamentals és:

$$
\\sin^2(x)+\\cos^2(x)=1.
$$

També són útils:

$$
1+\\tan^2(x)=\\sec^2(x)
$$

i

$$
1+\\cot^2(x)=\\csc^2(x).
$$

Per exemple:

$$
2\\sin^2(x)-1=0.
$$

Aïllem:

$$
2\\sin^2(x)=1
$$

$$
\\sin^2(x)=\\frac12.
$$

Prenem arrels:

$$
\\sin(x)=\\pm\\frac{\\sqrt2}{2}.
$$

A $[0,2\\pi)$ obtenim quatre solucions:

$$
x=
\\frac{\\pi}{4},
\\frac{3\\pi}{4},
\\frac{5\\pi}{4},
\\frac{7\\pi}{4}.
$$

---

## 9. Mètode general

Per resoldre una equació trigonomètrica convé seguir aquests passos:

1. **Simplificar l'equació** tant com sigui possible.
2. **Aïllar una funció trigonomètrica** quan sigui possible.
3. **Trobar l'angle de referència** utilitzant valors coneguts o la funció inversa.
4. **Determinar els quadrants** en què la funció té el signe corresponent.
5. **Escriure la solució general** utilitzant la periodicitat.
6. **Aplicar l'interval indicat**, si n'hi ha.
7. **Comprovar les solucions** a l'equació original.

---

## 10. Errors freqüents

### Oblidar la periodicitat

De

$$
\\sin(x)=0
$$

no s'obté únicament $x=0$.

La solució general és:

$$
x=k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

### Confondre el període

El sinus i el cosinus tenen període $2\\pi$:

$$
T_{\\sin}=T_{\\cos}=2\\pi.
$$

La tangent té període $\\pi$:

$$
T_{\\tan}=\\pi.
$$

### No considerar tots els quadrants

Per exemple, si

$$
\\cos(x)=-\\frac12,
$$

no n'hi ha prou amb trobar l'angle de referència. També cal localitzar els quadrants on el cosinus és negatiu.

### Dividir per una expressió que pot ser zero

En una equació com

$$
\\sin(x)\\cos(x)=0,
$$

no hem de dividir directament entre $\\sin(x)$ o $\\cos(x)$, perquè podríem eliminar solucions.

És preferible utilitzar:

$$
ab=0
\\quad\\Longrightarrow\\quad
a=0\\ \\text{o}\\ b=0.
$$

---

## 11. Solucions en graus

Les mateixes regles es poden expressar en graus.

Els períodes són:

$$
T_{\\sin}=T_{\\cos}=360^\\circ
$$

i

$$
T_{\\tan}=180^\\circ.
$$

Per exemple:

$$
\\sin(x)=\\frac12
$$

té com a solucions generals:

$$
x=30^\\circ+360^\\circ k
$$

o

$$
x=150^\\circ+360^\\circ k,
\\qquad k\\in\\mathbb{Z}.
$$

És important no barrejar graus i radians dins del mateix exercici.

---

## Resum

Les solucions de les equacions trigonomètriques depenen principalment de la **periodicitat** de les funcions i dels **quadrants** en què prenen determinats valors.

Les formes fonamentals són:

$$
\\sin(x)=a
\\quad\\Longrightarrow\\quad
x=\\alpha+2k\\pi
\\ \\text{o}\\
x=\\pi-\\alpha+2k\\pi
$$

$$
\\cos(x)=a
\\quad\\Longrightarrow\\quad
x=\\pm\\alpha+2k\\pi
$$

$$
\\tan(x)=a
\\quad\\Longrightarrow\\quad
x=\\alpha+k\\pi
$$

on $k\\in\\mathbb{Z}$ i $\\alpha$ és un angle que produeix el valor corresponent.

Quan hi ha un interval, com $[0,2\\pi)$, primer s'obté la solució general i després se seleccionen únicament les solucions que pertanyen a aquest interval.
`,a=`# Solutions of trigonometric equations

**Trigonometric equations** are equations in which the unknown appears inside a trigonometric function, such as sine, cosine, or tangent.

Unlike an algebraic equation, a trigonometric equation usually has **infinitely many solutions**, because trigonometric functions are periodic.

## 1. Periodicity

Trigonometric functions repeat periodically:

$$
\\sin(x+2\\pi)=\\sin(x)
$$

$$
\\cos(x+2\\pi)=\\cos(x)
$$

$$
\\tan(x+\\pi)=\\tan(x)
$$

Therefore, if we find one solution, we can obtain other solutions by adding the corresponding period.

The general form of the solutions depends on the function being used.

### Sine

If

$$
\\sin(x)=a
$$

and $\\alpha$ is an angle such that

$$
\\sin(\\alpha)=a,
$$

the general solutions are

$$
x=\\alpha+2k\\pi
$$

or

$$
x=\\pi-\\alpha+2k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

### Cosine

If

$$
\\cos(x)=a,
$$

the solutions can be written as

$$
x=\\pm\\alpha+2k\\pi,
\\qquad k\\in\\mathbb{Z},
$$

where $\\cos(\\alpha)=a$.

### Tangent

If

$$
\\tan(x)=a,
$$

the solutions are

$$
x=\\alpha+k\\pi,
\\qquad k\\in\\mathbb{Z},
$$

where $\\tan(\\alpha)=a$.

---

## 2. Solving a sine equation

Consider

$$
\\sin(x)=\\frac{1}{2}.
$$

We know that

$$
\\sin\\left(\\frac{\\pi}{6}\\right)=\\frac{1}{2}.
$$

Sine also takes this value in the second quadrant:

$$
\\pi-\\frac{\\pi}{6}=\\frac{5\\pi}{6}.
$$

Therefore, the general solutions are

$$
x=\\frac{\\pi}{6}+2k\\pi
$$

or

$$
x=\\frac{5\\pi}{6}+2k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

If we only look for solutions in the interval $[0,2\\pi)$, we obtain

$$
x=\\frac{\\pi}{6},
\\qquad
x=\\frac{5\\pi}{6}.
$$

---

## 3. Solving a cosine equation

Consider

$$
\\cos(x)=-\\frac{\\sqrt{3}}{2}.
$$

The reference angle is

$$
\\frac{\\pi}{6},
$$

because

$$
\\cos\\left(\\frac{\\pi}{6}\\right)=\\frac{\\sqrt{3}}{2}.
$$

Since cosine is negative in the second and third quadrants:

$$
x=\\pi-\\frac{\\pi}{6}=\\frac{5\\pi}{6}
$$

and

$$
x=\\pi+\\frac{\\pi}{6}=\\frac{7\\pi}{6}.
$$

Therefore,

$$
x=\\frac{5\\pi}{6}+2k\\pi
$$

or

$$
x=\\frac{7\\pi}{6}+2k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

In $[0,2\\pi)$:

$$
\\boxed{x=\\frac{5\\pi}{6},\\frac{7\\pi}{6}}
$$

---

## 4. Solving a tangent equation

Consider

$$
\\tan(x)=1.
$$

We know that

$$
\\tan\\left(\\frac{\\pi}{4}\\right)=1.
$$

Tangent has period $\\pi$, so all solutions are

$$
\\boxed{x=\\frac{\\pi}{4}+k\\pi},
\\qquad k\\in\\mathbb{Z}.
$$

In the interval $[0,2\\pi)$:

$$
x=\\frac{\\pi}{4}
$$

and

$$
x=\\frac{5\\pi}{4}.
$$

---

## 5. Equations with a linear expression

Sometimes the unknown does not appear directly as $x$, but inside another expression.

For example:

$$
\\sin(2x)=\\frac{\\sqrt{3}}{2}.
$$

First solve the equation for $2x$.

We know that

$$
2x=\\frac{\\pi}{3}+2k\\pi
$$

or

$$
2x=\\frac{2\\pi}{3}+2k\\pi.
$$

Dividing by $2$:

$$
x=\\frac{\\pi}{6}+k\\pi
$$

or

$$
x=\\frac{\\pi}{3}+k\\pi.
$$

Therefore,

$$
\\boxed{
x=\\frac{\\pi}{6}+k\\pi
\\quad\\text{or}\\quad
x=\\frac{\\pi}{3}+k\\pi
}
$$

---

## 6. Equations with restrictions

Many exercises specify an interval for the unknown.

For example:

$$
2\\cos(x)=1,
\\qquad
0\\leq x<2\\pi.
$$

Divide by $2$:

$$
\\cos(x)=\\frac{1}{2}.
$$

In the interval $[0,2\\pi)$, cosine equals $\\frac12$ at:

$$
x=\\frac{\\pi}{3}
$$

and

$$
x=\\frac{5\\pi}{3}.
$$

Therefore:

$$
\\boxed{
x\\in
\\left\\{
\\frac{\\pi}{3},
\\frac{5\\pi}{3}
\\right\\}
}
$$

The restriction is important because the equation has infinitely many solutions, but the interval selects only some of them.

---

## 7. Equations that require factoring

Not all trigonometric equations can be reduced directly to a single function.

For example:

$$
\\sin^2(x)-\\sin(x)=0.
$$

Factor:

$$
\\sin(x)(\\sin(x)-1)=0.
$$

Using the zero-product property:

$$
\\sin(x)=0
$$

or

$$
\\sin(x)=1.
$$

For the first equation:

$$
x=k\\pi.
$$

For the second:

$$
x=\\frac{\\pi}{2}+2k\\pi.
$$

Therefore:

$$
\\boxed{
x=k\\pi
\\quad\\text{or}\\quad
x=\\frac{\\pi}{2}+2k\\pi,
\\qquad k\\in\\mathbb{Z}
}
$$

---

## 8. Using trigonometric identities

Trigonometric identities allow us to transform a complicated equation into a simpler one.

One of the fundamental identities is:

$$
\\sin^2(x)+\\cos^2(x)=1.
$$

Other useful identities include:

$$
1+\\tan^2(x)=\\sec^2(x)
$$

and

$$
1+\\cot^2(x)=\\csc^2(x).
$$

For example:

$$
2\\sin^2(x)-1=0.
$$

Isolate:

$$
2\\sin^2(x)=1
$$

$$
\\sin^2(x)=\\frac12.
$$

Take the square root:

$$
\\sin(x)=\\pm\\frac{\\sqrt2}{2}.
$$

In $[0,2\\pi)$, we obtain four solutions:

$$
x=
\\frac{\\pi}{4},
\\frac{3\\pi}{4},
\\frac{5\\pi}{4},
\\frac{7\\pi}{4}.
$$

---

## 9. General method

To solve a trigonometric equation, it is useful to follow these steps:

1. **Simplify the equation** as much as possible.
2. **Isolate a trigonometric function** whenever possible.
3. **Find the reference angle** using known values or the inverse function.
4. **Determine the quadrants** where the function has the required sign.
5. **Write the general solution** using periodicity.
6. **Apply the given interval**, if there is one.
7. **Check the solutions** in the original equation.

---

## 10. Common mistakes

### Forgetting periodicity

From

$$
\\sin(x)=0
$$

we do not obtain only $x=0$.

The general solution is:

$$
x=k\\pi,
\\qquad k\\in\\mathbb{Z}.
$$

### Confusing the period

Sine and cosine have period $2\\pi$:

$$
T_{\\sin}=T_{\\cos}=2\\pi.
$$

Tangent has period $\\pi$:

$$
T_{\\tan}=\\pi.
$$

### Not considering all quadrants

For example, if

$$
\\cos(x)=-\\frac12,
$$

it is not enough to find the reference angle. We must also identify the quadrants where cosine is negative.

### Dividing by an expression that may be zero

In an equation such as

$$
\\sin(x)\\cos(x)=0,
$$

we should not divide directly by $\\sin(x)$ or $\\cos(x)$, because we could eliminate solutions.

It is preferable to use:

$$
ab=0
\\quad\\Longrightarrow\\quad
a=0\\ \\text{or}\\ b=0.
$$

---

## 11. Solutions in degrees

The same rules can be expressed in degrees.

The periods are:

$$
T_{\\sin}=T_{\\cos}=360^\\circ
$$

and

$$
T_{\\tan}=180^\\circ.
$$

For example:

$$
\\sin(x)=\\frac12
$$

has the general solutions:

$$
x=30^\\circ+360^\\circ k
$$

or

$$
x=150^\\circ+360^\\circ k,
\\qquad k\\in\\mathbb{Z}.
$$

It is important not to mix degrees and radians within the same exercise.

---

## Summary

The solutions of trigonometric equations depend mainly on the **periodicity** of the functions and the **quadrants** in which they take particular values.

The fundamental forms are:

$$
\\sin(x)=a
\\quad\\Longrightarrow\\quad
x=\\alpha+2k\\pi
\\ \\text{or}\\
x=\\pi-\\alpha+2k\\pi
$$

$$
\\cos(x)=a
\\quad\\Longrightarrow\\quad
x=\\pm\\alpha+2k\\pi
$$

$$
\\tan(x)=a
\\quad\\Longrightarrow\\quad
x=\\alpha+k\\pi
$$

where $k\\in\\mathbb{Z}$ and $\\alpha$ is an angle that produces the corresponding value.

When an interval is given, such as $[0,2\\pi)$, first obtain the general solution and then select only the solutions that belong to that interval.
`;function o(){let{locale:o}=t();return e(n,{id:`trigonometric-equation-solutions`,content:{es:r,ca:i,en:a}[o]})}export{o as default};