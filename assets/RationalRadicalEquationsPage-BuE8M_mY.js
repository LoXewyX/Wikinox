import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-CQZABaDC.js";import{t as n}from"./TopicPage-DyShI14R.js";var r=`# Ecuaciones racionales y con radicales

Las ecuaciones racionales y las ecuaciones con radicales contienen expresiones que pueden introducir **restricciones en el dominio**. Por ello, además de transformar y resolver la ecuación, es fundamental comprobar las soluciones obtenidas.

---

## 1. ¿Qué son las ecuaciones racionales?

Una ecuación racional es una ecuación que contiene expresiones racionales, normalmente fracciones algebraicas en las que la incógnita aparece en el denominador.

Por ejemplo:

$$
\\frac{1}{x}=2
$$

o:

$$
\\frac{x+1}{x-2}=3
$$

La primera condición que debemos establecer es:

$$
x\\neq0
$$

porque no se puede dividir entre cero.

En general, cualquier valor que haga cero un denominador debe excluirse del dominio.

---

## 2. Restricciones del dominio

Antes de manipular una ecuación racional debemos identificar los valores prohibidos.

Por ejemplo:

$$
\\frac{x+1}{x-3}=2
$$

El denominador no puede ser cero:

$$
x-3\\neq0
$$

por tanto:

$$
\\boxed{x\\neq3}
$$

Esta restricción debe mantenerse durante todo el proceso.

---

## 3. Resolver una ecuación racional sencilla

Consideremos:

$$
\\frac{1}{x}=2
$$

con:

$$
x\\neq0
$$

Multiplicamos ambos lados por $x$:

$$
1=2x
$$

Despejamos:

$$
x=\\frac12
$$

La solución respeta la restricción $x\\neq0$.

Por tanto:

$$
\\boxed{x=\\frac12}
$$

---

## 4. Eliminar denominadores

Cuando una ecuación contiene varias fracciones, podemos multiplicar toda la ecuación por el **mínimo común múltiplo de los denominadores**.

Por ejemplo:

$$
\\frac{1}{x}+\\frac{1}{2}=1
$$

La restricción es:

$$
x\\neq0
$$

Multiplicamos por $2x$:

$$
2+x=2x
$$

Por tanto:

$$
x=2
$$

Como $2\\neq0$, la solución es válida:

$$
\\boxed{x=2}
$$

---

## 5. Ejemplo con varios denominadores

Consideremos:

$$
\\frac{2}{x-1}+\\frac{1}{x+1}=1
$$

Las restricciones son:

$$
x\\neq1
$$

y:

$$
x\\neq-1
$$

El mínimo común denominador es:

$$
(x-1)(x+1)
$$

Multiplicamos toda la ecuación:

$$
2(x+1)+(x-1)=x^2-1
$$

Desarrollamos:

$$
2x+2+x-1=x^2-1
$$

$$
3x+1=x^2-1
$$

Reordenamos:

$$
x^2-3x-2=0
$$

Aplicando la fórmula cuadrática:

$$
x=\\frac{3\\pm\\sqrt{17}}{2}
$$

Ninguna de estas soluciones es $1$ o $-1$, por lo que ambas son válidas.

---

## 6. ¿Qué son las ecuaciones con radicales?

Una ecuación con radicales contiene la incógnita dentro de una raíz.

Por ejemplo:

$$
\\sqrt{x}=3
$$

o:

$$
\\sqrt{x+1}=x-1
$$

También pueden aparecer raíces de distintos órdenes:

$$
\\sqrt[3]{x+2}=4
$$

---

## 7. Restricciones de las raíces

En los números reales, una raíz de índice par requiere que su radicando sea no negativo.

Por ejemplo:

$$
\\sqrt{x-2}
$$

requiere:

$$
x-2\\geq0
$$

por tanto:

$$
\\boxed{x\\geq2}
$$

En cambio, una raíz de índice impar, como:

$$
\\sqrt[3]{x}
$$

está definida para cualquier número real.

---

## 8. Resolver una raíz sencilla

Consideremos:

$$
\\sqrt{x}=5
$$

Elevamos ambos lados al cuadrado:

$$
(\\sqrt{x})^2=5^2
$$

Por tanto:

$$
x=25
$$

La solución es:

$$
\\boxed{x=25}
$$

---

## 9. Eliminar una raíz

Cuando tenemos una ecuación como:

$$
\\sqrt{f(x)}=g(x)
$$

podemos elevar ambos lados al cuadrado:

$$
f(x)=g(x)^2
$$

Sin embargo, este procedimiento puede introducir **soluciones extrañas**.

Por ello, las soluciones obtenidas siempre deben comprobarse en la ecuación original.

---

## 10. Soluciones extrañas

Consideremos:

$$
\\sqrt{x+1}=x-1
$$

Primero observamos que el lado izquierdo es siempre no negativo. Por tanto, también necesitamos:

$$
x-1\\geq0
$$

es decir:

$$
x\\geq1
$$

Elevamos al cuadrado:

$$
x+1=(x-1)^2
$$

Desarrollamos:

$$
x+1=x^2-2x+1
$$

$$
x=x^2-2x
$$

$$
x^2-3x=0
$$

Factorizamos:

$$
x(x-3)=0
$$

Obtenemos:

$$
x=0
$$

o:

$$
x=3
$$

Pero $x=0$ no cumple $x\\geq1$.

Comprobamos $x=3$:

$$
\\sqrt{3+1}=3-1
$$

$$
2=2
$$

Por tanto:

$$
\\boxed{x=3}
$$

---

## 11. ¿Por qué aparecen soluciones extrañas?

Elevar al cuadrado no es una transformación equivalente en todos los casos.

Por ejemplo:

$$
a=b
$$

implica:

$$
a^2=b^2
$$

pero la igualdad:

$$
a^2=b^2
$$

puede proceder de:

$$
a=b
$$

o:

$$
a=-b
$$

Por eso, después de elevar al cuadrado debemos comprobar las soluciones en la ecuación original.

---

## 12. Radicales en ambos lados

Consideremos:

$$
\\sqrt{x+3}=\\sqrt{2x-1}
$$

Primero establecemos el dominio:

$$
x+3\\geq0
$$

y:

$$
2x-1\\geq0
$$

La segunda condición es más restrictiva:

$$
x\\geq\\frac12
$$

Elevamos ambos lados al cuadrado:

$$
x+3=2x-1
$$

Despejamos:

$$
x=4
$$

Comprobamos:

$$
\\sqrt7=\\sqrt7
$$

Por tanto:

$$
\\boxed{x=4}
$$

---

## 13. Dos radicales

Consideremos:

$$
\\sqrt{x+5}-\\sqrt{x}=1
$$

Aislamos una raíz:

$$
\\sqrt{x+5}=1+\\sqrt{x}
$$

Elevamos al cuadrado:

$$
x+5=1+2\\sqrt{x}+x
$$

Simplificamos:

$$
4=2\\sqrt{x}
$$

$$
\\sqrt{x}=2
$$

Volvemos a elevar al cuadrado:

$$
x=4
$$

Comprobamos en la ecuación original:

$$
\\sqrt9-\\sqrt4=3-2=1
$$

Por tanto:

$$
\\boxed{x=4}
$$

---

## 14. Radicales de índice impar

Las raíces de índice impar no necesitan que el radicando sea positivo.

Por ejemplo:

$$
\\sqrt[3]{x-2}=3
$$

Elevamos al cubo:

$$
x-2=27
$$

Por tanto:

$$
\\boxed{x=29}
$$

---

## 15. Ecuaciones racionales con radicales

Una ecuación puede combinar fracciones y radicales.

Por ejemplo:

$$
\\frac{1}{\\sqrt{x}}=2
$$

Aquí tenemos dos restricciones:

$$
x\\geq0
$$

porque aparece una raíz cuadrada, y además:

$$
\\sqrt{x}\\neq0
$$

porque está en el denominador.

Por tanto:

$$
\\boxed{x>0}
$$

Multiplicamos:

$$
1=2\\sqrt{x}
$$

Entonces:

$$
\\sqrt{x}=\\frac12
$$

Elevamos al cuadrado:

$$
x=\\frac14
$$

La solución es válida.

---

## 16. Radicales en denominadores

Cuando una raíz aparece en el denominador, debemos recordar que el denominador no puede ser cero.

Por ejemplo:

$$
\\frac{1}{\\sqrt{x-2}}
$$

requiere:

$$
x-2>0
$$

Por tanto:

$$
\\boxed{x>2}
$$

Observa que no basta con:

$$
x-2\\geq0
$$

porque $x=2$ haría que el denominador fuera cero.

---

## 17. Racionalización

En algunas expresiones es conveniente eliminar radicales del denominador.

Por ejemplo:

$$
\\frac{1}{\\sqrt2}
$$

Multiplicamos numerador y denominador por $\\sqrt2$:

$$
\\frac{1}{\\sqrt2}
\\cdot
\\frac{\\sqrt2}{\\sqrt2}
=

\\frac{\\sqrt2}{2}
$$

Por tanto:

$$
\\boxed{\\frac{1}{\\sqrt2}=\\frac{\\sqrt2}{2}}
$$

---

## 18. Racionalización con binomios

Para racionalizar expresiones como:

$$
\\frac{1}{a+\\sqrt b}
$$

podemos multiplicar por el conjugado:

$$
a-\\sqrt b
$$

porque:

$$
(a+\\sqrt b)(a-\\sqrt b)=a^2-b
$$

Por ejemplo:

$$
\\frac{1}{2+\\sqrt3}
$$

Multiplicamos por:

$$
\\frac{2-\\sqrt3}{2-\\sqrt3}
$$

Obtenemos:

$$
\\frac{2-\\sqrt3}{4-3}
$$

y por tanto:

$$
\\boxed{2-\\sqrt3}
$$

---

## 19. Ecuaciones con valor absoluto y radicales

Algunas ecuaciones pueden combinar radicales con valores absolutos.

Por ejemplo:

$$
\\sqrt{x^2}=|x|
$$

Esta identidad es importante:

$$
\\boxed{\\sqrt{x^2}=|x|}
$$

No debemos escribir simplemente:

$$
\\sqrt{x^2}=x
$$

porque esto solamente es cierto cuando:

$$
x\\geq0
$$

---

## 20. Procedimiento para ecuaciones racionales

Para resolver una ecuación racional:

1. Identifica todos los denominadores.
2. Determina los valores prohibidos.
3. Calcula el mínimo común denominador.
4. Multiplica toda la ecuación por él.
5. Simplifica.
6. Resuelve la ecuación resultante.
7. Descarta cualquier valor prohibido.
8. Comprueba las soluciones en la ecuación original.

---

## 21. Procedimiento para ecuaciones con radicales

Para resolver una ecuación con radicales:

1. Determina el dominio.
2. Aísla un radical.
3. Eleva ambos lados a la potencia adecuada.
4. Simplifica.
5. Si todavía quedan radicales, vuelve a aislar uno.
6. Repite el proceso si es necesario.
7. Resuelve la ecuación resultante.
8. Comprueba todas las soluciones en la ecuación original.
9. Descarta las soluciones extrañas.

---

## 22. Errores frecuentes

### No establecer el dominio

Incorrecto:

$$
\\frac{1}{x-2}=3
$$

sin indicar:

$$
x\\neq2
$$

### Elevar al cuadrado y no comprobar

Una ecuación como:

$$
\\sqrt{f(x)}=g(x)
$$

puede producir soluciones que no pertenecen a la ecuación original.

### Olvidar que un denominador no puede ser cero

$$
\\frac{1}{\\sqrt{x-1}}
$$

requiere:

$$
x>1
$$

no simplemente:

$$
x\\geq1
$$

### Confundir $\\sqrt{x^2}$ con $x$

La identidad correcta es:

$$
\\sqrt{x^2}=|x|
$$

---

## 23. Resumen de restricciones

### Denominador

Si:

$$
\\frac{1}{f(x)}
$$

entonces:

$$
f(x)\\neq0
$$

### Raíz de índice par

Si:

$$
\\sqrt[n]{f(x)}
$$

con $n$ par:

$$
f(x)\\geq0
$$

### Raíz de índice par en denominador

Si:

$$
\\frac{1}{\\sqrt[n]{f(x)}}
$$

con $n$ par:

$$
f(x)>0
$$

### Raíz de índice impar

Si $n$ es impar, no existe una restricción de signo sobre el radicando en los números reales.

---

## 24. Idea fundamental

Resolver ecuaciones racionales y con radicales no consiste únicamente en realizar operaciones algebraicas.

La idea fundamental es:

$$
\\boxed{
\\text{dominio}
\\rightarrow
\\text{transformación}
\\rightarrow
\\text{resolución}
\\rightarrow
\\text{comprobación}
}
$$

Las restricciones del dominio y la comprobación final son tan importantes como las operaciones algebraicas utilizadas para encontrar las soluciones.
`,i=`# Equacions racionals i amb radicals

Les equacions racionals i les equacions amb radicals contenen expressions que poden introduir **restriccions en el domini**. Per això, a més de transformar i resoldre l'equació, és fonamental comprovar les solucions obtingudes.

---

## 1. Què són les equacions racionals?

Una equació racional és una equació que conté expressions racionals, normalment fraccions algebraiques en què la incògnita apareix al denominador.

Per exemple:

$$
\\frac{1}{x}=2
$$

o:

$$
\\frac{x+1}{x-2}=3
$$

La primera condició que hem d'establir és:

$$
x\\neq0
$$

perquè no es pot dividir per zero.

En general, qualsevol valor que faci zero un denominador s'ha d'excloure del domini.

---

## 2. Restriccions del domini

Abans de manipular una equació racional hem d'identificar els valors prohibits.

Per exemple:

$$
\\frac{x+1}{x-3}=2
$$

El denominador no pot ser zero:

$$
x-3\\neq0
$$

per tant:

$$
\\boxed{x\\neq3}
$$

Aquesta restricció s'ha de mantenir durant tot el procés.

---

## 3. Resoldre una equació racional senzilla

Considerem:

$$
\\frac{1}{x}=2
$$

amb:

$$
x\\neq0
$$

Multipliquem els dos membres per $x$:

$$
1=2x
$$

Aïllem:

$$
x=\\frac12
$$

La solució respecta la restricció $x\\neq0$.

Per tant:

$$
\\boxed{x=\\frac12}
$$

---

## 4. Eliminar denominadors

Quan una equació conté diverses fraccions, podem multiplicar tota l'equació pel **mínim comú múltiple dels denominadors**.

Per exemple:

$$
\\frac{1}{x}+\\frac{1}{2}=1
$$

La restricció és:

$$
x\\neq0
$$

Multipliquem per $2x$:

$$
2+x=2x
$$

Per tant:

$$
x=2
$$

Com que $2\\neq0$, la solució és vàlida:

$$
\\boxed{x=2}
$$

---

## 5. Exemple amb diversos denominadors

Considerem:

$$
\\frac{2}{x-1}+\\frac{1}{x+1}=1
$$

Les restriccions són:

$$
x\\neq1
$$

i:

$$
x\\neq-1
$$

El mínim comú denominador és:

$$
(x-1)(x+1)
$$

Multipliquem tota l'equació:

$$
2(x+1)+(x-1)=x^2-1
$$

Desenvolupem:

$$
2x+2+x-1=x^2-1
$$

$$
3x+1=x^2-1
$$

Reordenem:

$$
x^2-3x-2=0
$$

Aplicant la fórmula quadràtica:

$$
x=\\frac{3\\pm\\sqrt{17}}{2}
$$

Cap d'aquestes solucions és $1$ o $-1$, per tant totes dues són vàlides.

---

## 6. Què són les equacions amb radicals?

Una equació amb radicals conté la incògnita dins d'una arrel.

Per exemple:

$$
\\sqrt{x}=3
$$

o:

$$
\\sqrt{x+1}=x-1
$$

També poden aparèixer arrels de diferents índexs:

$$
\\sqrt[3]{x+2}=4
$$

---

## 7. Restriccions de les arrels

En els nombres reals, una arrel d'índex parell requereix que el radicand sigui no negatiu.

Per exemple:

$$
\\sqrt{x-2}
$$

requereix:

$$
x-2\\geq0
$$

per tant:

$$
\\boxed{x\\geq2}
$$

En canvi, una arrel d'índex senar, com:

$$
\\sqrt[3]{x}
$$

està definida per a qualsevol nombre real.

---

## 8. Resoldre una arrel senzilla

Considerem:

$$
\\sqrt{x}=5
$$

Elevem els dos membres al quadrat:

$$
(\\sqrt{x})^2=5^2
$$

Per tant:

$$
x=25
$$

La solució és:

$$
\\boxed{x=25}
$$

---

## 9. Eliminar una arrel

Quan tenim una equació com:

$$
\\sqrt{f(x)}=g(x)
$$

podem elevar els dos membres al quadrat:

$$
f(x)=g(x)^2
$$

Tanmateix, aquest procediment pot introduir **solucions estranyes**.

Per això, les solucions obtingudes sempre s'han de comprovar en l'equació original.

---

## 10. Solucions estranyes

Considerem:

$$
\\sqrt{x+1}=x-1
$$

Primer observem que el membre esquerre sempre és no negatiu. Per tant, també necessitem:

$$
x-1\\geq0
$$

és a dir:

$$
x\\geq1
$$

Elevem al quadrat:

$$
x+1=(x-1)^2
$$

Desenvolupem:

$$
x+1=x^2-2x+1
$$

$$
x=x^2-2x
$$

$$
x^2-3x=0
$$

Factoritzem:

$$
x(x-3)=0
$$

Obtenim:

$$
x=0
$$

o:

$$
x=3
$$

Però $x=0$ no compleix $x\\geq1$.

Comprovem $x=3$:

$$
\\sqrt{3+1}=3-1
$$

$$
2=2
$$

Per tant:

$$
\\boxed{x=3}
$$

---

## 11. Per què apareixen solucions estranyes?

Elevar al quadrat no és una transformació equivalent en tots els casos.

Per exemple:

$$
a=b
$$

implica:

$$
a^2=b^2
$$

però la igualtat:

$$
a^2=b^2
$$

pot provenir de:

$$
a=b
$$

o:

$$
a=-b
$$

Per això, després d'elevar al quadrat hem de comprovar les solucions en l'equació original.

---

## 12. Radicals als dos membres

Considerem:

$$
\\sqrt{x+3}=\\sqrt{2x-1}
$$

Primer establim el domini:

$$
x+3\\geq0
$$

i:

$$
2x-1\\geq0
$$

La segona condició és més restrictiva:

$$
x\\geq\\frac12
$$

Elevem els dos membres al quadrat:

$$
x+3=2x-1
$$

Aïllem:

$$
x=4
$$

Comprovem:

$$
\\sqrt7=\\sqrt7
$$

Per tant:

$$
\\boxed{x=4}
$$

---

## 13. Dos radicals

Considerem:

$$
\\sqrt{x+5}-\\sqrt{x}=1
$$

Aïllem una arrel:

$$
\\sqrt{x+5}=1+\\sqrt{x}
$$

Elevem al quadrat:

$$
x+5=1+2\\sqrt{x}+x
$$

Simplifiquem:

$$
4=2\\sqrt{x}
$$

$$
\\sqrt{x}=2
$$

Tornem a elevar al quadrat:

$$
x=4
$$

Comprovem en l'equació original:

$$
\\sqrt9-\\sqrt4=3-2=1
$$

Per tant:

$$
\\boxed{x=4}
$$

---

## 14. Radicals d'índex senar

Les arrels d'índex senar no necessiten que el radicand sigui positiu.

Per exemple:

$$
\\sqrt[3]{x-2}=3
$$

Elevem al cub:

$$
x-2=27
$$

Per tant:

$$
\\boxed{x=29}
$$

---

## 15. Equacions racionals amb radicals

Una equació pot combinar fraccions i radicals.

Per exemple:

$$
\\frac{1}{\\sqrt{x}}=2
$$

Aquí tenim dues restriccions:

$$
x\\geq0
$$

perquè apareix una arrel quadrada, i també:

$$
\\sqrt{x}\\neq0
$$

perquè està al denominador.

Per tant:

$$
\\boxed{x>0}
$$

Multipliquem:

$$
1=2\\sqrt{x}
$$

Aleshores:

$$
\\sqrt{x}=\\frac12
$$

Elevem al quadrat:

$$
x=\\frac14
$$

La solució és vàlida.

---

## 16. Radicals als denominadors

Quan una arrel apareix al denominador, hem de recordar que el denominador no pot ser zero.

Per exemple:

$$
\\frac{1}{\\sqrt{x-2}}
$$

requereix:

$$
x-2>0
$$

Per tant:

$$
\\boxed{x>2}
$$

Observa que no n'hi ha prou amb:

$$
x-2\\geq0
$$

perquè $x=2$ faria que el denominador fos zero.

---

## 17. Racionalització

En algunes expressions és convenient eliminar radicals del denominador.

Per exemple:

$$
\\frac{1}{\\sqrt2}
$$

Multipliquem numerador i denominador per $\\sqrt2$:

$$
\\frac{1}{\\sqrt2}
\\cdot
\\frac{\\sqrt2}{\\sqrt2}
=
\\frac{\\sqrt2}{2}
$$

Per tant:

$$
\\boxed{\\frac{1}{\\sqrt2}=\\frac{\\sqrt2}{2}}
$$

---

## 18. Racionalització amb binomis

Per racionalitzar expressions com:

$$
\\frac{1}{a+\\sqrt b}
$$

podem multiplicar pel conjugat:

$$
a-\\sqrt b
$$

perquè:

$$
(a+\\sqrt b)(a-\\sqrt b)=a^2-b
$$

Per exemple:

$$
\\frac{1}{2+\\sqrt3}
$$

Multipliquem per:

$$
\\frac{2-\\sqrt3}{2-\\sqrt3}
$$

Obtenim:

$$
\\frac{2-\\sqrt3}{4-3}
$$

i, per tant:

$$
\\boxed{2-\\sqrt3}
$$

---

## 19. Equacions amb valor absolut i radicals

Algunes equacions poden combinar radicals amb valors absoluts.

Per exemple:

$$
\\sqrt{x^2}=|x|
$$

Aquesta identitat és important:

$$
\\boxed{\\sqrt{x^2}=|x|}
$$

No hem d'escriure simplement:

$$
\\sqrt{x^2}=x
$$

perquè això només és cert quan:

$$
x\\geq0
$$

---

## 20. Procediment per a equacions racionals

Per resoldre una equació racional:

1. Identifica tots els denominadors.
2. Determina els valors prohibits.
3. Calcula el mínim comú denominador.
4. Multiplica tota l'equació per aquest denominador.
5. Simplifica.
6. Resol l'equació resultant.
7. Descarta qualsevol valor prohibit.
8. Comprova les solucions en l'equació original.

---

## 21. Procediment per a equacions amb radicals

Per resoldre una equació amb radicals:

1. Determina el domini.
2. Aïlla un radical.
3. Eleva els dos membres a la potència adequada.
4. Simplifica.
5. Si encara queden radicals, torna a aïllar-ne un.
6. Repeteix el procés si és necessari.
7. Resol l'equació resultant.
8. Comprova totes les solucions en l'equació original.
9. Descarta les solucions estranyes.

---

## 22. Errors freqüents

### No establir el domini

Incorrecte:

$$
\\frac{1}{x-2}=3
$$

sense indicar:

$$
x\\neq2
$$

### Elevar al quadrat i no comprovar

Una equació com:

$$
\\sqrt{f(x)}=g(x)
$$

pot produir solucions que no pertanyen a l'equació original.

### Oblidar que un denominador no pot ser zero

$$
\\frac{1}{\\sqrt{x-1}}
$$

requereix:

$$
x>1
$$

no simplement:

$$
x\\geq1
$$

### Confondre $\\sqrt{x^2}$ amb $x$

La identitat correcta és:

$$
\\sqrt{x^2}=|x|
$$

---

## 23. Resum de restriccions

### Denominador

Si:

$$
\\frac{1}{f(x)}
$$

aleshores:

$$
f(x)\\neq0
$$

### Arrel d'índex parell

Si:

$$
\\sqrt[n]{f(x)}
$$

amb $n$ parell:

$$
f(x)\\geq0
$$

### Arrel d'índex parell al denominador

Si:

$$
\\frac{1}{\\sqrt[n]{f(x)}}
$$

amb $n$ parell:

$$
f(x)>0
$$

### Arrel d'índex senar

Si $n$ és senar, no hi ha una restricció de signe sobre el radicand en els nombres reals.

---

## 24. Idea fonamental

Resoldre equacions racionals i amb radicals no consisteix únicament a fer operacions algebraiques.

La idea fonamental és:

$$
\\boxed{
\\text{domini}
\\rightarrow
\\text{transformació}
\\rightarrow
\\text{resolució}
\\rightarrow
\\text{comprovació}
}
$$

Les restriccions del domini i la comprovació final són tan importants com les operacions algebraiques utilitzades per trobar les solucions.
`,a=`# Rational and Radical Equations

Rational equations and radical equations contain expressions that can introduce **domain restrictions**. Therefore, solving them requires not only algebraic transformations, but also checking the solutions obtained.

---

## 1. What are rational equations?

A rational equation is an equation containing rational expressions, usually algebraic fractions in which the unknown appears in a denominator.

For example:

$$
\\frac{1}{x}=2
$$

or:

$$
\\frac{x+1}{x-2}=3
$$

The first condition we must establish is:

$$
x\\neq0
$$

because division by zero is undefined.

In general, any value that makes a denominator equal to zero must be excluded from the domain.

---

## 2. Domain restrictions

Before manipulating a rational equation, we must identify the forbidden values.

For example:

$$
\\frac{x+1}{x-3}=2
$$

The denominator cannot be zero:

$$
x-3\\neq0
$$

Therefore:

$$
\\boxed{x\\neq3}
$$

This restriction must be maintained throughout the entire process.

---

## 3. Solving a simple rational equation

Consider:

$$
\\frac{1}{x}=2
$$

with:

$$
x\\neq0
$$

Multiply both sides by $x$:

$$
1=2x
$$

Solve for $x$:

$$
x=\\frac12
$$

The solution satisfies the restriction $x\\neq0$.

Therefore:

$$
\\boxed{x=\\frac12}
$$

---

## 4. Eliminating denominators

When an equation contains several fractions, we can multiply the entire equation by the **least common multiple of the denominators**.

For example:

$$
\\frac{1}{x}+\\frac{1}{2}=1
$$

The restriction is:

$$
x\\neq0
$$

Multiply by $2x$:

$$
2+x=2x
$$

Therefore:

$$
x=2
$$

Since $2\\neq0$, the solution is valid:

$$
\\boxed{x=2}
$$

---

## 5. Example with several denominators

Consider:

$$
\\frac{2}{x-1}+\\frac{1}{x+1}=1
$$

The restrictions are:

$$
x\\neq1
$$

and:

$$
x\\neq-1
$$

The least common denominator is:

$$
(x-1)(x+1)
$$

Multiply the entire equation:

$$
2(x+1)+(x-1)=x^2-1
$$

Expand:

$$
2x+2+x-1=x^2-1
$$

$$
3x+1=x^2-1
$$

Rearrange:

$$
x^2-3x-2=0
$$

Using the quadratic formula:

$$
x=\\frac{3\\pm\\sqrt{17}}{2}
$$

Neither solution is $1$ or $-1$, so both are valid.

---

## 6. What are radical equations?

A radical equation contains the unknown inside a root.

For example:

$$
\\sqrt{x}=3
$$

or:

$$
\\sqrt{x+1}=x-1
$$

Roots of different indices can also appear:

$$
\\sqrt[3]{x+2}=4
$$

---

## 7. Restrictions for roots

Over the real numbers, an even-index root requires its radicand to be non-negative.

For example:

$$
\\sqrt{x-2}
$$

requires:

$$
x-2\\geq0
$$

Therefore:

$$
\\boxed{x\\geq2}
$$

An odd-index root, such as:

$$
\\sqrt[3]{x}
$$

is defined for every real number.

---

## 8. Solving a simple radical equation

Consider:

$$
\\sqrt{x}=5
$$

Square both sides:

$$
(\\sqrt{x})^2=5^2
$$

Therefore:

$$
x=25
$$

The solution is:

$$
\\boxed{x=25}
$$

---

## 9. Eliminating a radical

When we have an equation such as:

$$
\\sqrt{f(x)}=g(x)
$$

we can square both sides:

$$
f(x)=g(x)^2
$$

However, this procedure can introduce **extraneous solutions**.

Therefore, the resulting solutions must always be checked in the original equation.

---

## 10. Extraneous solutions

Consider:

$$
\\sqrt{x+1}=x-1
$$

The left-hand side is always non-negative. Therefore, we also need:

$$
x-1\\geq0
$$

which means:

$$
x\\geq1
$$

Square both sides:

$$
x+1=(x-1)^2
$$

Expand:

$$
x+1=x^2-2x+1
$$

$$
x=x^2-2x
$$

$$
x^2-3x=0
$$

Factor:

$$
x(x-3)=0
$$

We obtain:

$$
x=0
$$

or:

$$
x=3
$$

But $x=0$ does not satisfy $x\\geq1$.

Check $x=3$:

$$
\\sqrt{3+1}=3-1
$$

$$
2=2
$$

Therefore:

$$
\\boxed{x=3}
$$

---

## 11. Why do extraneous solutions appear?

Squaring is not an equivalent transformation in every situation.

For example:

$$
a=b
$$

implies:

$$
a^2=b^2
$$

but:

$$
a^2=b^2
$$

can result from either:

$$
a=b
$$

or:

$$
a=-b
$$

Therefore, after squaring, we must check the solutions in the original equation.

---

## 12. Radicals on both sides

Consider:

$$
\\sqrt{x+3}=\\sqrt{2x-1}
$$

First establish the domain:

$$
x+3\\geq0
$$

and:

$$
2x-1\\geq0
$$

The second condition is more restrictive:

$$
x\\geq\\frac12
$$

Square both sides:

$$
x+3=2x-1
$$

Solve:

$$
x=4
$$

Check:

$$
\\sqrt7=\\sqrt7
$$

Therefore:

$$
\\boxed{x=4}
$$

---

## 13. Two radicals

Consider:

$$
\\sqrt{x+5}-\\sqrt{x}=1
$$

Isolate one radical:

$$
\\sqrt{x+5}=1+\\sqrt{x}
$$

Square both sides:

$$
x+5=1+2\\sqrt{x}+x
$$

Simplify:

$$
4=2\\sqrt{x}
$$

$$
\\sqrt{x}=2
$$

Square again:

$$
x=4
$$

Check in the original equation:

$$
\\sqrt9-\\sqrt4=3-2=1
$$

Therefore:

$$
\\boxed{x=4}
$$

---

## 14. Odd-index radicals

Odd-index roots do not require the radicand to be positive.

For example:

$$
\\sqrt[3]{x-2}=3
$$

Cube both sides:

$$
x-2=27
$$

Therefore:

$$
\\boxed{x=29}
$$

---

## 15. Rational equations with radicals

An equation can combine fractions and radicals.

For example:

$$
\\frac{1}{\\sqrt{x}}=2
$$

There are two restrictions:

$$
x\\geq0
$$

because a square root appears, and:

$$
\\sqrt{x}\\neq0
$$

because it is in the denominator.

Therefore:

$$
\\boxed{x>0}
$$

Multiply:

$$
1=2\\sqrt{x}
$$

Then:

$$
\\sqrt{x}=\\frac12
$$

Square both sides:

$$
x=\\frac14
$$

The solution is valid.

---

## 16. Radicals in denominators

When a root appears in the denominator, the denominator cannot be zero.

For example:

$$
\\frac{1}{\\sqrt{x-2}}
$$

requires:

$$
x-2>0
$$

Therefore:

$$
\\boxed{x>2}
$$

Notice that:

$$
x-2\\geq0
$$

is not sufficient because $x=2$ would make the denominator zero.

---

## 17. Rationalization

In some expressions it is useful to remove radicals from denominators.

For example:

$$
\\frac{1}{\\sqrt2}
$$

Multiply numerator and denominator by $\\sqrt2$:

$$
\\frac{1}{\\sqrt2}
\\cdot
\\frac{\\sqrt2}{\\sqrt2}
=

\\frac{\\sqrt2}{2}
$$

Therefore:

$$
\\boxed{\\frac{1}{\\sqrt2}=\\frac{\\sqrt2}{2}}
$$

---

## 18. Rationalization with binomials

To rationalize expressions such as:

$$
\\frac{1}{a+\\sqrt b}
$$

we can multiply by the conjugate:

$$
a-\\sqrt b
$$

because:

$$
(a+\\sqrt b)(a-\\sqrt b)=a^2-b
$$

For example:

$$
\\frac{1}{2+\\sqrt3}
$$

Multiply by:

$$
\\frac{2-\\sqrt3}{2-\\sqrt3}
$$

We obtain:

$$
\\frac{2-\\sqrt3}{4-3}
$$

and therefore:

$$
\\boxed{2-\\sqrt3}
$$

---

## 19. Equations with absolute values and radicals

Some equations can combine radicals with absolute values.

For example:

$$
\\sqrt{x^2}=|x|
$$

This identity is important:

$$
\\boxed{\\sqrt{x^2}=|x|}
$$

We must not simply write:

$$
\\sqrt{x^2}=x
$$

because this is only true when:

$$
x\\geq0
$$

---

## 20. Procedure for rational equations

To solve a rational equation:

1. Identify all denominators.
2. Determine the forbidden values.
3. Find the least common denominator.
4. Multiply the entire equation by it.
5. Simplify.
6. Solve the resulting equation.
7. Discard any forbidden value.
8. Check the solutions in the original equation.

---

## 21. Procedure for radical equations

To solve a radical equation:

1. Determine the domain.
2. Isolate one radical.
3. Raise both sides to the appropriate power.
4. Simplify.
5. If radicals remain, isolate another one.
6. Repeat if necessary.
7. Solve the resulting equation.
8. Check every solution in the original equation.
9. Discard extraneous solutions.

---

## 22. Common mistakes

### Not establishing the domain

Incorrect:

$$
\\frac{1}{x-2}=3
$$

without stating:

$$
x\\neq2
$$

### Squaring without checking

An equation such as:

$$
\\sqrt{f(x)}=g(x)
$$

can produce solutions that do not belong to the original equation.

### Forgetting that a denominator cannot be zero

$$
\\frac{1}{\\sqrt{x-1}}
$$

requires:

$$
x>1
$$

not simply:

$$
x\\geq1
$$

### Confusing $\\sqrt{x^2}$ with $x$

The correct identity is:

$$
\\sqrt{x^2}=|x|
$$

---

## 23. Summary of restrictions

### Denominator

If:

$$
\\frac{1}{f(x)}
$$

then:

$$
f(x)\\neq0
$$

### Even-index root

If:

$$
\\sqrt[n]{f(x)}
$$

with even $n$:

$$
f(x)\\geq0
$$

### Even-index root in a denominator

If:

$$
\\frac{1}{\\sqrt[n]{f(x)}}
$$

with even $n$:

$$
f(x)>0
$$

### Odd-index root

If $n$ is odd, there is no sign restriction on the radicand over the real numbers.

---

## 24. Fundamental idea

Solving rational and radical equations is not only about performing algebraic operations.

The fundamental idea is:

$$
\\boxed{
\\text{domain}
\\rightarrow
\\text{transformation}
\\rightarrow
\\text{solution}
\\rightarrow
\\text{verification}
}
$$

Domain restrictions and final verification are just as important as the algebraic operations used to find the solutions.
`;function o(){let{locale:o}=t();return e(n,{id:`rational-radical-equations`,content:{es:r,ca:i,en:a}[o]})}export{o as default};