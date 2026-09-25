import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-d08MTCHk.js";import{t as n}from"./TopicPage-BLzDn4N1.js";var r=`# Integración por sustitución

La **integración por sustitución** es una técnica que permite simplificar integrales en las que aparece una función compuesta junto con su derivada.

La idea es realizar un cambio de variable:

$$
u=g(x)
$$

y transformar la integral en una integral respecto de $u$.

La regla fundamental es:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

---

## Idea principal

Supongamos que tenemos:

$$
\\int f(g(x))g'(x)\\,dx
$$

Elegimos:

$$
u=g(x)
$$

Entonces:

$$
du=g'(x)\\,dx
$$

Por tanto, la integral se transforma en:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

Después de integrar, sustituimos nuevamente $u=g(x)$.

---

## Procedimiento

Para resolver una integral mediante sustitución:

1. Identificar una función interior conveniente.
2. Definir la sustitución:

$$
u=g(x)
$$

3. Calcular:

$$
du=g'(x)\\,dx
$$

4. Reescribir completamente la integral en términos de $u$.
5. Integrar respecto de $u$.
6. Volver a sustituir $u=g(x)$.
7. Añadir la constante de integración $C$.

---

## Ejemplo básico

Consideremos:

$$
\\int 2x(x^2+1)^3\\,dx
$$

La expresión $x^2+1$ aparece elevada a una potencia y su derivada es $2x$.

Elegimos:

$$
u=x^2+1
$$

Entonces:

$$
du=2x\\,dx
$$

La integral queda:

$$
\\int u^3\\,du
$$

Aplicamos la regla de la potencia:

$$
\\frac{u^4}{4}+C
$$

Volvemos a $x$:

$$
\\boxed{
\\int 2x(x^2+1)^3\\,dx
=
\\frac{(x^2+1)^4}{4}+C
}
$$

---

## Sustitución con una función trigonométrica

Consideremos:

$$
\\int \\cos(x)\\sin^4(x)\\,dx
$$

Podemos elegir:

$$
u=\\sin(x)
$$

Entonces:

$$
du=\\cos(x)\\,dx
$$

La integral se convierte en:

$$
\\int u^4\\,du
$$

Por tanto:

$$
\\frac{u^5}{5}+C
$$

Volviendo a $x$:

$$
\\boxed{
\\int \\cos(x)\\sin^4(x)\\,dx
=
\\frac{\\sin^5(x)}{5}+C
}
$$

---

## Sustitución con exponenciales

Consideremos:

$$
\\int e^{3x+1}\\,dx
$$

Elegimos:

$$
u=3x+1
$$

Entonces:

$$
du=3\\,dx
$$

y:

$$
dx=\\frac{du}{3}
$$

La integral queda:

$$
\\int e^u\\frac{du}{3}
=
\\frac13\\int e^u\\,du
$$

Por tanto:

$$
\\boxed{
\\int e^{3x+1}\\,dx
=
\\frac13e^{3x+1}+C
}
$$

---

## Cuando la derivada aparece con un factor constante

A veces la derivada de la sustitución no aparece exactamente, sino multiplicada por una constante.

Por ejemplo:

$$
\\int x(x^2+4)^5\\,dx
$$

Elegimos:

$$
u=x^2+4
$$

Entonces:

$$
du=2x\\,dx
$$

Como solo tenemos $x\\,dx$:

$$
x\\,dx=\\frac12du
$$

Por tanto:

$$
\\int x(x^2+4)^5\\,dx
=
\\frac12\\int u^5\\,du
$$

$$
=
\\frac{u^6}{12}+C
$$

Volviendo a $x$:

$$
\\boxed{
\\int x(x^2+4)^5\\,dx
=
\\frac{(x^2+4)^6}{12}+C
}
$$

---

## Sustitución en integrales definidas

La sustitución también puede utilizarse en integrales definidas.

Consideremos:

$$
\\int_0^1 2x(x^2+1)^3\\,dx
$$

Tomamos:

$$
u=x^2+1
$$

y:

$$
du=2x\\,dx
$$

También debemos transformar los límites.

Cuando $x=0$:

$$
u=0^2+1=1
$$

Cuando $x=1$:

$$
u=1^2+1=2
$$

Por tanto:

$$
\\int_0^1 2x(x^2+1)^3\\,dx
=
\\int_1^2u^3\\,du
$$

Calculamos:

$$
\\int_1^2u^3\\,du
=
\\left[\\frac{u^4}{4}\\right]_1^2
$$

$$
=
\\frac{16}{4}-\\frac14
$$

$$
\\boxed{
\\int_0^1 2x(x^2+1)^3\\,dx
=
\\frac{15}{4}
}
$$

Cuando se transforman los límites, no es necesario volver a $x$ al final.

---

## Cómo identificar una sustitución

Una buena sustitución suele aparecer como una **función dentro de otra función**.

Por ejemplo:

$$
\\int 2x\\cos(x^2)\\,dx
$$

La función interior es:

$$
x^2
$$

y su derivada es:

$$
2x
$$

Por tanto:

$$
u=x^2
$$

es una sustitución natural.

Otros patrones frecuentes son:

$$
\\int f(g(x))g'(x)\\,dx
$$

$$
\\int \\frac{g'(x)}{g(x)}\\,dx
$$

$$
\\int e^{g(x)}g'(x)\\,dx
$$

$$
\\int \\cos(g(x))g'(x)\\,dx
$$

$$
\\int \\sin(g(x))g'(x)\\,dx
$$

---

## Ejemplo con un cociente

Consideremos:

$$
\\int \\frac{2x}{x^2+1}\\,dx
$$

Elegimos:

$$
u=x^2+1
$$

Entonces:

$$
du=2x\\,dx
$$

La integral queda:

$$
\\int\\frac{1}{u}\\,du
$$

Sabemos que:

$$
\\int\\frac1u\\,du=\\ln|u|+C
$$

Por tanto:

$$
\\boxed{
\\int\\frac{2x}{x^2+1}\\,dx
=
\\ln(x^2+1)+C
}
$$

En este caso $x^2+1>0$, por lo que no es necesario mantener el valor absoluto.

---

## Ejemplo con una raíz

Consideremos:

$$
\\int \\frac{x}{\\sqrt{x^2+1}}\\,dx
$$

Elegimos:

$$
u=x^2+1
$$

Entonces:

$$
du=2x\\,dx
$$

y:

$$
x\\,dx=\\frac12du
$$

Por tanto:

$$
\\int\\frac{x}{\\sqrt{x^2+1}}\\,dx
=
\\frac12\\int u^{-1/2}\\,du
$$

$$
=
\\frac12\\cdot2u^{1/2}+C
$$

Volviendo a $x$:

$$
\\boxed{
\\int\\frac{x}{\\sqrt{x^2+1}}\\,dx
=
\\sqrt{x^2+1}+C
}
$$

---

## Sustitución y regla de la cadena

La integración por sustitución es, esencialmente, la operación inversa de la **regla de la cadena**.

Sabemos que:

$$
\\frac{d}{dx}F(g(x))
=
F'(g(x))g'(x)
$$

Por tanto, al integrar:

$$
\\boxed{
\\int F'(g(x))g'(x)\\,dx
=
F(g(x))+C
}
$$

La sustitución permite reconocer esta estructura sin tener que desarrollar la función compuesta.

---

## Comprobación mediante derivación

Una forma útil de comprobar una integral es derivar el resultado.

Por ejemplo:

$$
\\int 2x(x^2+1)^3\\,dx
=
\\frac{(x^2+1)^4}{4}+C
$$

Derivamos:

$$
\\frac{d}{dx}
\\left[
\\frac{(x^2+1)^4}{4}
\\right]
$$

Aplicando la regla de la cadena:

$$
=
\\frac14\\cdot4(x^2+1)^3(2x)
$$

$$
=2x(x^2+1)^3
$$

Por tanto, el resultado es correcto.

---

## Sustitución en integrales con límites

Para una integral definida:

$$
\\int_a^b f(g(x))g'(x)\\,dx
$$

podemos utilizar:

$$
u=g(x)
$$

y transformar los límites:

$$
u(a)=g(a),\\qquad u(b)=g(b)
$$

Entonces:

$$
\\boxed{
\\int_a^b f(g(x))g'(x)\\,dx
=
\\int_{g(a)}^{g(b)}f(u)\\,du
}
$$

---

## Errores frecuentes

### No sustituir toda la integral

Después de elegir $u$, todos los elementos que dependan de $x$ deben eliminarse.

### Olvidar el diferencial

Si:

$$
u=g(x)
$$

también debemos calcular:

$$
du=g'(x)\\,dx
$$

### No ajustar un factor constante

Si:

$$
du=2x\\,dx
$$

pero la integral contiene $x\\,dx$, entonces:

$$
x\\,dx=\\frac12du
$$

### No cambiar los límites

En una integral definida, si cambiamos de $x$ a $u$, también debemos cambiar los límites.

### Volver a $x$ innecesariamente

Si ya hemos transformado los límites de una integral definida, podemos dejar el resultado completamente en términos de $u$.

---

## Procedimiento resumido

Ante una integral:

$$
\\int f(g(x))g'(x)\\,dx
$$

identificamos:

$$
u=g(x)
$$

Calculamos:

$$
du=g'(x)\\,dx
$$

Transformamos:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

Integramos y finalmente sustituimos:

$$
\\boxed{u=g(x)}
$$

Para integrales definidas, también transformamos los límites.

---

## Resumen

La integración por sustitución es especialmente útil cuando aparece una función compuesta junto con su derivada.

La estructura fundamental es:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

con:

$$
\\boxed{u=g(x),\\qquad du=g'(x)\\,dx}
$$

Es la técnica inversa de la regla de la cadena y constituye una de las herramientas básicas para integrar funciones compuestas.
`,i=`# Integració per substitució

La **integració per substitució** és una tècnica que permet simplificar integrals en què apareix una funció composta juntament amb la seva derivada.

La idea és fer un canvi de variable:

$$
u=g(x)
$$

i transformar la integral en una integral respecte de $u$.

La regla fonamental és:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

---

## Idea principal

Suposem que tenim:

$$
\\int f(g(x))g'(x)\\,dx
$$

Triem:

$$
u=g(x)
$$

Aleshores:

$$
du=g'(x)\\,dx
$$

Per tant, la integral es transforma en:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

Després d'integrar, tornem a substituir $u=g(x)$.

---

## Procediment

Per resoldre una integral mitjançant substitució:

1. Identificar una funció interior convenient.
2. Definir la substitució:

$$
u=g(x)
$$

3. Calcular:

$$
du=g'(x)\\,dx
$$

4. Reescriure completament la integral en termes de $u$.
5. Integrar respecte de $u$.
6. Tornar a substituir $u=g(x)$.
7. Afegir la constant d'integració $C$.

---

## Exemple bàsic

Considerem:

$$
\\int 2x(x^2+1)^3\\,dx
$$

L'expressió $x^2+1$ apareix elevada a una potència i la seva derivada és $2x$.

Triem:

$$
u=x^2+1
$$

Aleshores:

$$
du=2x\\,dx
$$

La integral queda:

$$
\\int u^3\\,du
$$

Apliquem la regla de la potència:

$$
\\frac{u^4}{4}+C
$$

Tornem a $x$:

$$
\\boxed{
\\int 2x(x^2+1)^3\\,dx
=
\\frac{(x^2+1)^4}{4}+C
}
$$

---

## Substitució amb una funció trigonomètrica

Considerem:

$$
\\int \\cos(x)\\sin^4(x)\\,dx
$$

Podem triar:

$$
u=\\sin(x)
$$

Aleshores:

$$
du=\\cos(x)\\,dx
$$

La integral es converteix en:

$$
\\int u^4\\,du
$$

Per tant:

$$
\\frac{u^5}{5}+C
$$

Tornant a $x$:

$$
\\boxed{
\\int \\cos(x)\\sin^4(x)\\,dx
=
\\frac{\\sin^5(x)}{5}+C
}
$$

---

## Substitució amb exponencials

Considerem:

$$
\\int e^{3x+1}\\,dx
$$

Triem:

$$
u=3x+1
$$

Aleshores:

$$
du=3\\,dx
$$

i:

$$
dx=\\frac{du}{3}
$$

La integral queda:

$$
\\int e^u\\frac{du}{3}
=
\\frac13\\int e^u\\,du
$$

Per tant:

$$
\\boxed{
\\int e^{3x+1}\\,dx
=
\\frac13e^{3x+1}+C
}
$$

---

## Quan la derivada apareix amb un factor constant

De vegades la derivada de la substitució no apareix exactament, sinó multiplicada per una constant.

Per exemple:

$$
\\int x(x^2+4)^5\\,dx
$$

Triem:

$$
u=x^2+4
$$

Aleshores:

$$
du=2x\\,dx
$$

Com que només tenim $x\\,dx$:

$$
x\\,dx=\\frac12du
$$

Per tant:

$$
\\int x(x^2+4)^5\\,dx
=
\\frac12\\int u^5\\,du
$$

$$
=
\\frac{u^6}{12}+C
$$

Tornant a $x$:

$$
\\boxed{
\\int x(x^2+4)^5\\,dx
=
\\frac{(x^2+4)^6}{12}+C
}
$$

---

## Substitució en integrals definides

La substitució també es pot utilitzar en integrals definides.

Considerem:

$$
\\int_0^1 2x(x^2+1)^3\\,dx
$$

Prenem:

$$
u=x^2+1
$$

i:

$$
du=2x\\,dx
$$

També hem de transformar els límits.

Quan $x=0$:

$$
u=0^2+1=1
$$

Quan $x=1$:

$$
u=1^2+1=2
$$

Per tant:

$$
\\int_0^1 2x(x^2+1)^3\\,dx
=
\\int_1^2u^3\\,du
$$

Calculem:

$$
\\int_1^2u^3\\,du
=
\\left[\\frac{u^4}{4}\\right]_1^2
$$

$$
=
\\frac{16}{4}-\\frac14
$$

$$
\\boxed{
\\int_0^1 2x(x^2+1)^3\\,dx
=
\\frac{15}{4}
}
$$

Quan transformem els límits, no cal tornar a $x$ al final.

---

## Com identificar una substitució

Una bona substitució sol aparèixer com una **funció dins d'una altra funció**.

Per exemple:

$$
\\int 2x\\cos(x^2)\\,dx
$$

La funció interior és:

$$
x^2
$$

i la seva derivada és:

$$
2x
$$

Per tant:

$$
u=x^2
$$

és una substitució natural.

Altres patrons freqüents són:

$$
\\int f(g(x))g'(x)\\,dx
$$

$$
\\int \\frac{g'(x)}{g(x)}\\,dx
$$

$$
\\int e^{g(x)}g'(x)\\,dx
$$

$$
\\int \\cos(g(x))g'(x)\\,dx
$$

$$
\\int \\sin(g(x))g'(x)\\,dx
$$

---

## Exemple amb un quocient

Considerem:

$$
\\int \\frac{2x}{x^2+1}\\,dx
$$

Triem:

$$
u=x^2+1
$$

Aleshores:

$$
du=2x\\,dx
$$

La integral queda:

$$
\\int\\frac{1}{u}\\,du
$$

Sabem que:

$$
\\int\\frac1u\\,du=\\ln|u|+C
$$

Per tant:

$$
\\boxed{
\\int\\frac{2x}{x^2+1}\\,dx
=
\\ln(x^2+1)+C
}
$$

En aquest cas $x^2+1>0$, de manera que no cal mantenir el valor absolut.

---

## Exemple amb una arrel

Considerem:

$$
\\int \\frac{x}{\\sqrt{x^2+1}}\\,dx
$$

Triem:

$$
u=x^2+1
$$

Aleshores:

$$
du=2x\\,dx
$$

i:

$$
x\\,dx=\\frac12du
$$

Per tant:

$$
\\int\\frac{x}{\\sqrt{x^2+1}}\\,dx
=
\\frac12\\int u^{-1/2}\\,du
$$

$$
=
\\frac12\\cdot2u^{1/2}+C
$$

Tornant a $x$:

$$
\\boxed{
\\int\\frac{x}{\\sqrt{x^2+1}}\\,dx
=
\\sqrt{x^2+1}+C
}
$$

---

## Substitució i regla de la cadena

La integració per substitució és, essencialment, l'operació inversa de la **regla de la cadena**.

Sabem que:

$$
\\frac{d}{dx}F(g(x))
=
F'(g(x))g'(x)
$$

Per tant, en integrar:

$$
\\boxed{
\\int F'(g(x))g'(x)\\,dx
=
F(g(x))+C
}
$$

La substitució permet reconèixer aquesta estructura sense haver de desenvolupar la funció composta.

---

## Comprovació mitjançant derivació

Una manera útil de comprovar una integral és derivar el resultat.

Per exemple:

$$
\\int 2x(x^2+1)^3\\,dx
=
\\frac{(x^2+1)^4}{4}+C
$$

Derivem:

$$
\\frac{d}{dx}
\\left[
\\frac{(x^2+1)^4}{4}
\\right]
$$

Aplicant la regla de la cadena:

$$
=
\\frac14\\cdot4(x^2+1)^3(2x)
$$

$$
=2x(x^2+1)^3
$$

Per tant, el resultat és correcte.

---

## Substitució en integrals amb límits

Per a una integral definida:

$$
\\int_a^b f(g(x))g'(x)\\,dx
$$

podem utilitzar:

$$
u=g(x)
$$

i transformar els límits:

$$
u(a)=g(a),\\qquad u(b)=g(b)
$$

Aleshores:

$$
\\boxed{
\\int_a^b f(g(x))g'(x)\\,dx
=
\\int_{g(a)}^{g(b)}f(u)\\,du
}
$$

---

## Errors freqüents

### No substituir tota la integral

Després de triar $u$, tots els elements que depenguin de $x$ s'han d'eliminar.

### Oblidar el diferencial

Si:

$$
u=g(x)
$$

també hem de calcular:

$$
du=g'(x)\\,dx
$$

### No ajustar un factor constant

Si:

$$
du=2x\\,dx
$$

però la integral conté $x\\,dx$, aleshores:

$$
x\\,dx=\\frac12du
$$

### No canviar els límits

En una integral definida, si canviem de $x$ a $u$, també hem de canviar els límits.

### Tornar a $x$ innecessàriament

Si ja hem transformat els límits d'una integral definida, podem deixar el resultat completament en termes de $u$.

---

## Procediment resumit

Davant d'una integral:

$$
\\int f(g(x))g'(x)\\,dx
$$

identifiquem:

$$
u=g(x)
$$

Calculem:

$$
du=g'(x)\\,dx
$$

Transformem:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

Integram i finalment substituïm:

$$
\\boxed{u=g(x)}
$$

Per a integrals definides, també transformem els límits.

---

## Resum

La integració per substitució és especialment útil quan apareix una funció composta juntament amb la seva derivada.

L'estructura fonamental és:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

amb:

$$
\\boxed{u=g(x),\\qquad du=g'(x)\\,dx}
$$

És la tècnica inversa de la regla de la cadena i constitueix una de les eines bàsiques per integrar funcions compostes.
`,a=`# Integration by Substitution

**Integration by substitution** is a technique used to simplify integrals that contain a composite function together with its derivative.

The idea is to make a change of variable:

$$
u=g(x)
$$

and transform the integral into an integral with respect to $u$.

The fundamental rule is:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

---

## Main idea

Suppose we have:

$$
\\int f(g(x))g'(x)\\,dx
$$

Choose:

$$
u=g(x)
$$

Then:

$$
du=g'(x)\\,dx
$$

Therefore, the integral becomes:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

After integrating, substitute $u=g(x)$ back.

---

## Procedure

To solve an integral using substitution:

1. Identify a convenient inner function.
2. Define the substitution:

$$
u=g(x)
$$

3. Calculate:

$$
du=g'(x)\\,dx
$$

4. Rewrite the entire integral in terms of $u$.
5. Integrate with respect to $u$.
6. Substitute $u=g(x)$ back.
7. Add the constant of integration $C$.

---

## Basic example

Consider:

$$
\\int 2x(x^2+1)^3\\,dx
$$

The expression $x^2+1$ appears as a power, and its derivative is $2x$.

Choose:

$$
u=x^2+1
$$

Then:

$$
du=2x\\,dx
$$

The integral becomes:

$$
\\int u^3\\,du
$$

Using the power rule:

$$
\\frac{u^4}{4}+C
$$

Substituting back:

$$
\\boxed{
\\int 2x(x^2+1)^3\\,dx
=
\\frac{(x^2+1)^4}{4}+C
}
$$

---

## Substitution with a trigonometric function

Consider:

$$
\\int \\cos(x)\\sin^4(x)\\,dx
$$

Choose:

$$
u=\\sin(x)
$$

Then:

$$
du=\\cos(x)\\,dx
$$

The integral becomes:

$$
\\int u^4\\,du
$$

Therefore:

$$
\\frac{u^5}{5}+C
$$

Substituting back:

$$
\\boxed{
\\int \\cos(x)\\sin^4(x)\\,dx
=
\\frac{\\sin^5(x)}{5}+C
}
$$

---

## Substitution with exponentials

Consider:

$$
\\int e^{3x+1}\\,dx
$$

Choose:

$$
u=3x+1
$$

Then:

$$
du=3\\,dx
$$

and:

$$
dx=\\frac{du}{3}
$$

The integral becomes:

$$
\\int e^u\\frac{du}{3}
=
\\frac13\\int e^u\\,du
$$

Therefore:

$$
\\boxed{
\\int e^{3x+1}\\,dx
=
\\frac13e^{3x+1}+C
}
$$

---

## When the derivative appears with a constant factor

Sometimes the derivative of the substitution does not appear exactly, but differs by a constant factor.

For example:

$$
\\int x(x^2+4)^5\\,dx
$$

Choose:

$$
u=x^2+4
$$

Then:

$$
du=2x\\,dx
$$

Since the integral contains $x\\,dx$:

$$
x\\,dx=\\frac12du
$$

Therefore:

$$
\\int x(x^2+4)^5\\,dx
=
\\frac12\\int u^5\\,du
$$

$$
=
\\frac{u^6}{12}+C
$$

Substituting back:

$$
\\boxed{
\\int x(x^2+4)^5\\,dx
=
\\frac{(x^2+4)^6}{12}+C
}
$$

---

## Substitution in definite integrals

Substitution can also be used with definite integrals.

Consider:

$$
\\int_0^1 2x(x^2+1)^3\\,dx
$$

Take:

$$
u=x^2+1
$$

and:

$$
du=2x\\,dx
$$

We must also transform the limits.

When $x=0$:

$$
u=0^2+1=1
$$

When $x=1$:

$$
u=1^2+1=2
$$

Therefore:

$$
\\int_0^1 2x(x^2+1)^3\\,dx
=
\\int_1^2u^3\\,du
$$

Calculate:

$$
\\int_1^2u^3\\,du
=
\\left[\\frac{u^4}{4}\\right]_1^2
$$

$$
=
\\frac{16}{4}-\\frac14
$$

$$
\\boxed{
\\int_0^1 2x(x^2+1)^3\\,dx
=
\\frac{15}{4}
}
$$

When the limits have been transformed, there is no need to substitute back to $x$.

---

## How to identify a substitution

A useful substitution often appears as a **function inside another function**.

For example:

$$
\\int 2x\\cos(x^2)\\,dx
$$

The inner function is:

$$
x^2
$$

and its derivative is:

$$
2x
$$

Therefore:

$$
u=x^2
$$

is a natural substitution.

Other common patterns include:

$$
\\int f(g(x))g'(x)\\,dx
$$

$$
\\int \\frac{g'(x)}{g(x)}\\,dx
$$

$$
\\int e^{g(x)}g'(x)\\,dx
$$

$$
\\int \\cos(g(x))g'(x)\\,dx
$$

$$
\\int \\sin(g(x))g'(x)\\,dx
$$

---

## Example with a quotient

Consider:

$$
\\int \\frac{2x}{x^2+1}\\,dx
$$

Choose:

$$
u=x^2+1
$$

Then:

$$
du=2x\\,dx
$$

The integral becomes:

$$
\\int\\frac{1}{u}\\,du
$$

We know that:

$$
\\int\\frac1u\\,du=\\ln|u|+C
$$

Therefore:

$$
\\boxed{
\\int\\frac{2x}{x^2+1}\\,dx
=
\\ln(x^2+1)+C
}
$$

In this case, $x^2+1>0$, so the absolute value is unnecessary.

---

## Example with a square root

Consider:

$$
\\int \\frac{x}{\\sqrt{x^2+1}}\\,dx
$$

Choose:

$$
u=x^2+1
$$

Then:

$$
du=2x\\,dx
$$

and:

$$
x\\,dx=\\frac12du
$$

Therefore:

$$
\\int\\frac{x}{\\sqrt{x^2+1}}\\,dx
=
\\frac12\\int u^{-1/2}\\,du
$$

$$
=
\\frac12\\cdot2u^{1/2}+C
$$

Substituting back:

$$
\\boxed{
\\int\\frac{x}{\\sqrt{x^2+1}}\\,dx
=
\\sqrt{x^2+1}+C
}
$$

---

## Substitution and the chain rule

Integration by substitution is essentially the inverse operation of the **chain rule**.

We know that:

$$
\\frac{d}{dx}F(g(x))
=
F'(g(x))g'(x)
$$

Therefore, when integrating:

$$
\\boxed{
\\int F'(g(x))g'(x)\\,dx
=
F(g(x))+C
}
$$

Substitution allows us to recognize this structure without expanding the composite function.

---

## Checking the result by differentiation

A useful way to verify an integral is to differentiate the result.

For example:

$$
\\int 2x(x^2+1)^3\\,dx
=
\\frac{(x^2+1)^4}{4}+C
$$

Differentiate:

$$
\\frac{d}{dx}
\\left[
\\frac{(x^2+1)^4}{4}
\\right]
$$

Using the chain rule:

$$
=
\\frac14\\cdot4(x^2+1)^3(2x)
$$

$$
=2x(x^2+1)^3
$$

Therefore, the result is correct.

---

## Substitution in integrals with limits

For a definite integral:

$$
\\int_a^b f(g(x))g'(x)\\,dx
$$

we can use:

$$
u=g(x)
$$

and transform the limits:

$$
u(a)=g(a),\\qquad u(b)=g(b)
$$

Then:

$$
\\boxed{
\\int_a^b f(g(x))g'(x)\\,dx
=
\\int_{g(a)}^{g(b)}f(u)\\,du
}
$$

---

## Common mistakes

### Not replacing the entire integral

After choosing $u$, every part that depends on $x$ must be removed.

### Forgetting the differential

If:

$$
u=g(x)
$$

we must also calculate:

$$
du=g'(x)\\,dx
$$

### Forgetting a constant factor

If:

$$
du=2x\\,dx
$$

but the integral contains $x\\,dx$, then:

$$
x\\,dx=\\frac12du
$$

### Not changing the limits

For a definite integral, if we change from $x$ to $u$, the limits must also be changed.

### Substituting back unnecessarily

If the limits of a definite integral have already been transformed, we can leave the final result entirely in terms of $u$.

---

## Summary procedure

Given an integral:

$$
\\int f(g(x))g'(x)\\,dx
$$

identify:

$$
u=g(x)
$$

Calculate:

$$
du=g'(x)\\,dx
$$

Transform:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

Integrate and finally substitute:

$$
\\boxed{u=g(x)}
$$

For definite integrals, also transform the limits.

---

## Summary

Integration by substitution is especially useful when a composite function appears together with its derivative.

The fundamental structure is:

$$
\\boxed{
\\int f(g(x))g'(x)\\,dx
=
\\int f(u)\\,du
}
$$

with:

$$
\\boxed{u=g(x),\\qquad du=g'(x)\\,dx}
$$

It is the inverse technique of the chain rule and is one of the fundamental methods for integrating composite functions.
`;function o(){let{locale:o}=t();return e(n,{id:`integration-by-substitution`,content:{es:r,ca:i,en:a}[o]})}export{o as default};