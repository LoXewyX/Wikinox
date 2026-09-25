import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-CQZABaDC.js";import{t as n}from"./TopicPage-DyShI14R.js";var r=`# Integración por partes

La **integración por partes** es una técnica utilizada para integrar productos de funciones cuando la integración directa o la sustitución no resultan adecuadas.

Se basa en la regla del producto de la derivación.

La fórmula fundamental es:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

La idea consiste en transformar una integral difícil en otra que sea más sencilla de calcular.

---

## De dónde viene la fórmula

Partimos de la regla del producto:

$$
\\frac{d}{dx}(uv)
=
u\\frac{dv}{dx}
+
v\\frac{du}{dx}
$$

En forma diferencial:

$$
d(uv)=u\\,dv+v\\,du
$$

Despejando:

$$
u\\,dv=d(uv)-v\\,du
$$

Integramos ambos lados:

$$
\\int u\\,dv
=
\\int d(uv)-\\int v\\,du
$$

Por tanto:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

---

## Procedimiento

Para aplicar integración por partes:

1. Elegir $u$.
2. Elegir $dv$.
3. Calcular $du$.
4. Integrar $dv$ para obtener $v$.
5. Aplicar:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

6. Simplificar y calcular la nueva integral.

La elección de $u$ y $dv$ es la parte más importante del método.

---

## Cómo elegir $u$

Una regla práctica habitual es **LIATE**, que ordena algunos tipos de funciones según su prioridad para elegir $u$:

1. **L** — Logarítmicas
2. **I** — Inversas trigonométricas
3. **A** — Algebraicas
4. **T** — Trigonométricas
5. **E** — Exponenciales

Por ejemplo, en:

$$
\\int x e^x\\,dx
$$

elegimos:

$$
u=x
$$

porque es algebraica, mientras que:

$$
dv=e^x\\,dx
$$

es exponencial.

LIATE es una guía, no una regla absoluta. La elección debe producir una integral más sencilla.

---

## Ejemplo básico

Consideremos:

$$
\\int x e^x\\,dx
$$

Elegimos:

$$
u=x
$$

y:

$$
dv=e^x\\,dx
$$

Entonces:

$$
du=dx
$$

y:

$$
v=e^x
$$

Aplicamos la fórmula:

$$
\\int u\\,dv=uv-\\int v\\,du
$$

$$
\\int xe^x\\,dx
=
xe^x-\\int e^x\\,dx
$$

Por tanto:

$$
\\boxed{
\\int xe^x\\,dx
=
xe^x-e^x+C
}
$$

o:

$$
\\boxed{
\\int xe^x\\,dx=e^x(x-1)+C
}
$$

---

## Ejemplo con un logaritmo

Consideremos:

$$
\\int \\ln(x)\\,dx
$$

Aunque no parece un producto, podemos escribir:

$$
\\int \\ln(x)\\cdot1\\,dx
$$

Elegimos:

$$
u=\\ln(x)
$$

y:

$$
dv=dx
$$

Entonces:

$$
du=\\frac1x\\,dx
$$

y:

$$
v=x
$$

Aplicamos integración por partes:

$$
\\int\\ln(x)\\,dx
=
x\\ln(x)-\\int x\\frac1x\\,dx
$$

$$
=
x\\ln(x)-\\int1\\,dx
$$

Por tanto:

$$
\\boxed{
\\int\\ln(x)\\,dx
=
x\\ln(x)-x+C
}
$$

---

## Ejemplo con una función trigonométrica

Consideremos:

$$
\\int x\\cos(x)\\,dx
$$

Elegimos:

$$
u=x
$$

$$
dv=\\cos(x)\\,dx
$$

Entonces:

$$
du=dx
$$

$$
v=\\sin(x)
$$

Aplicamos la fórmula:

$$
\\int x\\cos(x)\\,dx
=
x\\sin(x)-\\int\\sin(x)\\,dx
$$

Como:

$$
\\int\\sin(x)\\,dx=-\\cos(x)
$$

obtenemos:

$$
\\boxed{
\\int x\\cos(x)\\,dx
=
x\\sin(x)+\\cos(x)+C
}
$$

---

## Ejemplo con una potencia y un logaritmo

Consideremos:

$$
\\int x^2\\ln(x)\\,dx
$$

Elegimos:

$$
u=\\ln(x)
$$

$$
dv=x^2\\,dx
$$

Entonces:

$$
du=\\frac1x\\,dx
$$

y:

$$
v=\\frac{x^3}{3}
$$

Aplicamos:

$$
\\int x^2\\ln(x)\\,dx
=
\\frac{x^3}{3}\\ln(x)
-
\\int\\frac{x^3}{3}\\frac1x\\,dx
$$

$$
=
\\frac{x^3}{3}\\ln(x)
-
\\frac13\\int x^2\\,dx
$$

Por tanto:

$$
\\boxed{
\\int x^2\\ln(x)\\,dx
=
\\frac{x^3}{3}\\ln(x)-\\frac{x^3}{9}+C
}
$$

---

## Integración por partes repetida

Algunas integrales requieren aplicar integración por partes más de una vez.

Consideremos:

$$
\\int x^2e^x\\,dx
$$

Primera aplicación:

$$
u=x^2,
\\qquad
dv=e^x\\,dx
$$

Entonces:

$$
du=2x\\,dx,
\\qquad
v=e^x
$$

Por tanto:

$$
\\int x^2e^x\\,dx
=
x^2e^x-2\\int xe^x\\,dx
$$

Ya sabemos que:

$$
\\int xe^x\\,dx=e^x(x-1)
$$

Sustituyendo:

$$
\\int x^2e^x\\,dx
=
x^2e^x-2e^x(x-1)+C
$$

Simplificando:

$$
\\boxed{
\\int x^2e^x\\,dx
=
e^x(x^2-2x+2)+C
}
$$

---

## Integración por partes con integrales trigonométricas

También puede utilizarse cuando el producto contiene funciones trigonométricas.

Por ejemplo:

$$
\\int x\\sin(x)\\,dx
$$

Elegimos:

$$
u=x,
\\qquad
dv=\\sin(x)\\,dx
$$

Entonces:

$$
du=dx,
\\qquad
v=-\\cos(x)
$$

Aplicamos la fórmula:

$$
\\int x\\sin(x)\\,dx
=
-x\\cos(x)+\\int\\cos(x)\\,dx
$$

Por tanto:

$$
\\boxed{
\\int x\\sin(x)\\,dx
=
-x\\cos(x)+\\sin(x)+C
}
$$

---

## Cuando aparece de nuevo la integral original

Existe un caso especialmente interesante en el que, después de aplicar integración por partes, vuelve a aparecer la integral original.

Por ejemplo:

$$
\\int e^x\\cos(x)\\,dx
$$

Sea:

$$
I=\\int e^x\\cos(x)\\,dx
$$

Primera integración por partes:

$$
u=\\cos(x),
\\qquad
dv=e^x\\,dx
$$

Entonces:

$$
du=-\\sin(x)\\,dx,
\\qquad
v=e^x
$$

Por tanto:

$$
I=e^x\\cos(x)+\\int e^x\\sin(x)\\,dx
$$

Definimos:

$$
J=\\int e^x\\sin(x)\\,dx
$$

Aplicamos integración por partes de nuevo:

$$
u=\\sin(x),
\\qquad
dv=e^x\\,dx
$$

Entonces:

$$
du=\\cos(x)\\,dx,
\\qquad
v=e^x
$$

Así:

$$
J=e^x\\sin(x)-\\int e^x\\cos(x)\\,dx
$$

Como la última integral es $I$:

$$
J=e^x\\sin(x)-I
$$

Sustituimos en la primera expresión:

$$
I=e^x\\cos(x)+e^x\\sin(x)-I
$$

Por tanto:

$$
2I=e^x(\\sin(x)+\\cos(x))
$$

y finalmente:

$$
\\boxed{
\\int e^x\\cos(x)\\,dx
=
\\frac{e^x}{2}
\\left(\\sin(x)+\\cos(x)\\right)+C
}
$$

---

## Integración por partes en integrales definidas

La fórmula también funciona para integrales definidas:

$$
\\boxed{
\\int_a^b u\\,dv
=
[uv]_a^b-\\int_a^b v\\,du
}
$$

### Ejemplo

Consideremos:

$$
\\int_0^1 xe^x\\,dx
$$

Elegimos:

$$
u=x,
\\qquad
dv=e^x\\,dx
$$

Entonces:

$$
du=dx,
\\qquad
v=e^x
$$

Aplicamos:

$$
\\int_0^1xe^x\\,dx
=
[xe^x]_0^1
-
\\int_0^1e^x\\,dx
$$

Calculamos:

$$
[e^x]_0^1=e-1
$$

y:

$$
[xe^x]_0^1=e
$$

Por tanto:

$$
\\boxed{
\\int_0^1xe^x\\,dx=1
}
$$

---

## Cómo saber cuándo usar integración por partes

La integración por partes suele ser apropiada cuando aparece un producto de funciones de tipos diferentes, especialmente:

$$
\\boxed{
\\text{polinomio}\\times\\text{exponencial}
}
$$

$$
\\boxed{
\\text{polinomio}\\times\\text{trigonométrica}
}
$$

$$
\\boxed{
\\text{polinomio}\\times\\text{logarítmica}
}
$$

También es útil para:

$$
\\int\\ln(x)\\,dx
$$

y:

$$
\\int\\arctan(x)\\,dx
$$

aunque no aparezcan inicialmente como productos.

---

## Integración por partes frente a sustitución

Las dos técnicas tienen objetivos diferentes.

### Sustitución

Es especialmente útil cuando aparece una función compuesta junto con su derivada:

$$
\\int f(g(x))g'(x)\\,dx
$$

### Integración por partes

Es especialmente útil cuando aparece un producto:

$$
\\int u\\,dv
$$

Una regla práctica es:

> Si una función compuesta viene acompañada de su derivada, considera sustitución. Si aparece un producto de funciones diferentes, considera integración por partes.

---

## Errores frecuentes

### Elegir mal $u$

La elección debe hacer que:

$$
\\int v\\,du
$$

sea más sencilla que la integral original.

### Olvidar calcular $du$

Después de elegir:

$$
u=g(x)
$$

debemos calcular:

$$
du=g'(x)\\,dx
$$

### Integrar incorrectamente $dv$

Debemos calcular:

$$
v=\\int dv
$$

### Olvidar el signo negativo

La fórmula es:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

No:

$$
uv+\\int v\\,du
$$

### Aplicar partes cuando sustitución es más sencilla

No todas las integrales de productos requieren integración por partes. Siempre conviene comprobar primero si existe una sustitución natural.

---

## Procedimiento resumido

Ante una integral:

$$
\\int f(x)g(x)\\,dx
$$

podemos intentar escribir:

$$
u=f(x)
$$

y:

$$
dv=g(x)\\,dx
$$

Después calculamos:

$$
du=f'(x)\\,dx
$$

y:

$$
v=\\int g(x)\\,dx
$$

Finalmente aplicamos:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

---

## Resumen

La integración por partes se basa en la regla del producto y permite transformar una integral en otra más sencilla.

La fórmula fundamental es:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

Para integrales definidas:

$$
\\boxed{
\\int_a^b u\\,dv
=
[uv]_a^b-\\int_a^b v\\,du
}
$$

Una elección adecuada de $u$ debe simplificar la nueva integral.

La estrategia es:

$$
\\boxed{
u\\longrightarrow du,
\\qquad
dv\\longrightarrow v
}
$$

y después aplicar la fórmula.
`,i=`# Integració per parts

La **integració per parts** és una tècnica utilitzada per integrar productes de funcions quan la integració directa o la substitució no són adequades.

Es basa en la regla del producte de la derivació.

La fórmula fonamental és:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

La idea és transformar una integral difícil en una altra que sigui més senzilla de calcular.

---

## D'on prové la fórmula

Partim de la regla del producte:

$$
\\frac{d}{dx}(uv)
=
u\\frac{dv}{dx}
+
v\\frac{du}{dx}
$$

En forma diferencial:

$$
d(uv)=u\\,dv+v\\,du
$$

Despejant:

$$
u\\,dv=d(uv)-v\\,du
$$

Integram els dos costats:

$$
\\int u\\,dv
=
\\int d(uv)-\\int v\\,du
$$

Per tant:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

---

## Procediment

Per aplicar integració per parts:

1. Triar $u$.
2. Triar $dv$.
3. Calcular $du$.
4. Integrar $dv$ per obtenir $v$.
5. Aplicar:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

6. Simplificar i calcular la nova integral.

L'elecció de $u$ i $dv$ és la part més important del mètode.

---

## Com triar $u$

Una regla pràctica habitual és **LIATE**, que ordena alguns tipus de funcions segons la seva prioritat per triar $u$:

1. **L** — Logarítmiques
2. **I** — Inverses trigonomètriques
3. **A** — Algebraiques
4. **T** — Trigonomètriques
5. **E** — Exponencials

Per exemple, en:

$$
\\int x e^x\\,dx
$$

trié:

$$
u=x
$$

perquè és algebraica, mentre que:

$$
dv=e^x\\,dx
$$

és exponencial.

LIATE és una guia, no una regla absoluta. L'elecció ha de produir una integral més senzilla.

---

## Exemple bàsic

Considerem:

$$
\\int x e^x\\,dx
$$

Triem:

$$
u=x
$$

i:

$$
dv=e^x\\,dx
$$

Aleshores:

$$
du=dx
$$

i:

$$
v=e^x
$$

Apliquem la fórmula:

$$
\\int u\\,dv=uv-\\int v\\,du
$$

$$
\\int xe^x\\,dx
=
xe^x-\\int e^x\\,dx
$$

Per tant:

$$
\\boxed{
\\int xe^x\\,dx
=
xe^x-e^x+C
}
$$

o:

$$
\\boxed{
\\int xe^x\\,dx=e^x(x-1)+C
}
$$

---

## Exemple amb un logaritme

Considerem:

$$
\\int \\ln(x)\\,dx
$$

Encara que no sembli un producte, podem escriure:

$$
\\int \\ln(x)\\cdot1\\,dx
$$

Triem:

$$
u=\\ln(x)
$$

i:

$$
dv=dx
$$

Aleshores:

$$
du=\\frac1x\\,dx
$$

i:

$$
v=x
$$

Apliquem integració per parts:

$$
\\int\\ln(x)\\,dx
=
x\\ln(x)-\\int x\\frac1x\\,dx
$$

$$
=
x\\ln(x)-\\int1\\,dx
$$

Per tant:

$$
\\boxed{
\\int\\ln(x)\\,dx
=
x\\ln(x)-x+C
}
$$

---

## Exemple amb una funció trigonomètrica

Considerem:

$$
\\int x\\cos(x)\\,dx
$$

Triem:

$$
u=x
$$

$$
dv=\\cos(x)\\,dx
$$

Aleshores:

$$
du=dx
$$

$$
v=\\sin(x)
$$

Apliquem la fórmula:

$$
\\int x\\cos(x)\\,dx
=
x\\sin(x)-\\int\\sin(x)\\,dx
$$

Com que:

$$
\\int\\sin(x)\\,dx=-\\cos(x)
$$

obtenim:

$$
\\boxed{
\\int x\\cos(x)\\,dx
=
x\\sin(x)+\\cos(x)+C
}
$$

---

## Exemple amb una potència i un logaritme

Considerem:

$$
\\int x^2\\ln(x)\\,dx
$$

Triem:

$$
u=\\ln(x)
$$

$$
dv=x^2\\,dx
$$

Aleshores:

$$
du=\\frac1x\\,dx
$$

i:

$$
v=\\frac{x^3}{3}
$$

Apliquem:

$$
\\int x^2\\ln(x)\\,dx
=
\\frac{x^3}{3}\\ln(x)
-
\\int\\frac{x^3}{3}\\frac1x\\,dx
$$

$$
=
\\frac{x^3}{3}\\ln(x)
-
\\frac13\\int x^2\\,dx
$$

Per tant:

$$
\\boxed{
\\int x^2\\ln(x)\\,dx
=
\\frac{x^3}{3}\\ln(x)-\\frac{x^3}{9}+C
}
$$

---

## Integració per parts repetida

Algunes integrals requereixen aplicar integració per parts més d'una vegada.

Considerem:

$$
\\int x^2e^x\\,dx
$$

Primera aplicació:

$$
u=x^2,
\\qquad
dv=e^x\\,dx
$$

Aleshores:

$$
du=2x\\,dx,
\\qquad
v=e^x
$$

Per tant:

$$
\\int x^2e^x\\,dx
=
x^2e^x-2\\int xe^x\\,dx
$$

Ja sabem que:

$$
\\int xe^x\\,dx=e^x(x-1)
$$

Substituint:

$$
\\int x^2e^x\\,dx
=
x^2e^x-2e^x(x-1)+C
$$

Simplificant:

$$
\\boxed{
\\int x^2e^x\\,dx
=
e^x(x^2-2x+2)+C
}
$$

---

## Integració per parts amb integrals trigonomètriques

També es pot utilitzar quan el producte conté funcions trigonomètriques.

Per exemple:

$$
\\int x\\sin(x)\\,dx
$$

Triem:

$$
u=x,
\\qquad
dv=\\sin(x)\\,dx
$$

Aleshores:

$$
du=dx,
\\qquad
v=-\\cos(x)
$$

Apliquem la fórmula:

$$
\\int x\\sin(x)\\,dx
=
-x\\cos(x)+\\int\\cos(x)\\,dx
$$

Per tant:

$$
\\boxed{
\\int x\\sin(x)\\,dx
=
-x\\cos(x)+\\sin(x)+C
}
$$

---

## Quan torna a aparèixer la integral original

Existeix un cas especialment interessant en què, després d'aplicar integració per parts, torna a aparèixer la integral original.

Per exemple:

$$
\\int e^x\\cos(x)\\,dx
$$

Sigui:

$$
I=\\int e^x\\cos(x)\\,dx
$$

Primera integració per parts:

$$
u=\\cos(x),
\\qquad
dv=e^x\\,dx
$$

Aleshores:

$$
du=-\\sin(x)\\,dx,
\\qquad
v=e^x
$$

Per tant:

$$
I=e^x\\cos(x)+\\int e^x\\sin(x)\\,dx
$$

Definim:

$$
J=\\int e^x\\sin(x)\\,dx
$$

Apliquem integració per parts de nou:

$$
u=\\sin(x),
\\qquad
dv=e^x\\,dx
$$

Aleshores:

$$
du=\\cos(x)\\,dx,
\\qquad
v=e^x
$$

Així:

$$
J=e^x\\sin(x)-\\int e^x\\cos(x)\\,dx
$$

Com que l'última integral és $I$:

$$
J=e^x\\sin(x)-I
$$

Substituïm en la primera expressió:

$$
I=e^x\\cos(x)+e^x\\sin(x)-I
$$

Per tant:

$$
2I=e^x(\\sin(x)+\\cos(x))
$$

i finalment:

$$
\\boxed{
\\int e^x\\cos(x)\\,dx
=
\\frac{e^x}{2}
\\left(\\sin(x)+\\cos(x)\\right)+C
}
$$

---

## Integració per parts en integrals definides

La fórmula també funciona per a integrals definides:

$$
\\boxed{
\\int_a^b u\\,dv
=
[uv]_a^b-\\int_a^b v\\,du
}
$$

### Exemple

Considerem:

$$
\\int_0^1 xe^x\\,dx
$$

Triem:

$$
u=x,
\\qquad
dv=e^x\\,dx
$$

Aleshores:

$$
du=dx,
\\qquad
v=e^x
$$

Apliquem:

$$
\\int_0^1xe^x\\,dx
=
[xe^x]_0^1
-
\\int_0^1e^x\\,dx
$$

Calculem:

$$
[e^x]_0^1=e-1
$$

i:

$$
[xe^x]_0^1=e
$$

Per tant:

$$
\\boxed{
\\int_0^1xe^x\\,dx=1
}
$$

---

## Com saber quan utilitzar integració per parts

La integració per parts sol ser adequada quan apareix un producte de funcions de tipus diferents, especialment:

$$
\\boxed{
\\text{polinomi}\\times\\text{exponencial}
}
$$

$$
\\boxed{
\\text{polinomi}\\times\\text{trigonomètrica}
}
$$

$$
\\boxed{
\\text{polinomi}\\times\\text{logarítmica}
}
$$

També és útil per a:

$$
\\int\\ln(x)\\,dx
$$

i:

$$
\\int\\arctan(x)\\,dx
$$

encara que inicialment no apareguin com a productes.

---

## Integració per parts i substitució

Les dues tècniques tenen objectius diferents.

### Substitució

És especialment útil quan apareix una funció composta acompanyada de la seva derivada:

$$
\\int f(g(x))g'(x)\\,dx
$$

### Integració per parts

És especialment útil quan apareix un producte:

$$
\\int u\\,dv
$$

Una regla pràctica és:

> Si una funció composta va acompanyada de la seva derivada, considera la substitució. Si apareix un producte de funcions diferents, considera la integració per parts.

---

## Errors freqüents

### Triar malament $u$

L'elecció ha de fer que:

$$
\\int v\\,du
$$

sigui més senzilla que la integral original.

### Oblidar calcular $du$

Després de triar:

$$
u=g(x)
$$

hem de calcular:

$$
du=g'(x)\\,dx
$$

### Integrar incorrectament $dv$

Hem de calcular:

$$
v=\\int dv
$$

### Oblidar el signe negatiu

La fórmula és:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

No:

$$
uv+\\int v\\,du
$$

### Aplicar parts quan la substitució és més senzilla

No totes les integrals de productes requereixen integració per parts. Sempre convé comprovar primer si existeix una substitució natural.

---

## Procediment resumit

Davant d'una integral:

$$
\\int f(x)g(x)\\,dx
$$

podem intentar escriure:

$$
u=f(x)
$$

i:

$$
dv=g(x)\\,dx
$$

Després calculem:

$$
du=f'(x)\\,dx
$$

i:

$$
v=\\int g(x)\\,dx
$$

Finalment apliquem:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

---

## Resum

La integració per parts es basa en la regla del producte i permet transformar una integral en una altra de més senzilla.

La fórmula fonamental és:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

Per a integrals definides:

$$
\\boxed{
\\int_a^b u\\,dv
=
[uv]_a^b-\\int_a^b v\\,du
}
$$

Una elecció adequada de $u$ ha de simplificar la nova integral.

L'estratègia és:

$$
\\boxed{
u\\longrightarrow du,
\\qquad
dv\\longrightarrow v
}
$$

i després aplicar la fórmula.
`,a=`# Integration by Parts

**Integration by parts** is a technique used to integrate products of functions when direct integration or substitution is not suitable.

It is based on the product rule for differentiation.

The fundamental formula is:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

The idea is to transform a difficult integral into another integral that is easier to evaluate.

---

## Where the formula comes from

Start with the product rule:

$$
\\frac{d}{dx}(uv)
=
u\\frac{dv}{dx}
+
v\\frac{du}{dx}
$$

In differential form:

$$
d(uv)=u\\,dv+v\\,du
$$

Rearranging:

$$
u\\,dv=d(uv)-v\\,du
$$

Integrating both sides:

$$
\\int u\\,dv
=
\\int d(uv)-\\int v\\,du
$$

Therefore:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

---

## Procedure

To apply integration by parts:

1. Choose $u$.
2. Choose $dv$.
3. Calculate $du$.
4. Integrate $dv$ to obtain $v$.
5. Apply:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

6. Simplify and evaluate the new integral.

Choosing $u$ and $dv$ is the most important part of the method.

---

## How to choose $u$

A common practical guideline is **LIATE**, which gives a priority order for choosing $u$:

1. **L** — Logarithmic
2. **I** — Inverse trigonometric
3. **A** — Algebraic
4. **T** — Trigonometric
5. **E** — Exponential

For example, in:

$$
\\int x e^x\\,dx
$$

choose:

$$
u=x
$$

because it is algebraic, while:

$$
dv=e^x\\,dx
$$

is exponential.

LIATE is a guideline, not an absolute rule. The choice should make the resulting integral simpler.

---

## Basic example

Consider:

$$
\\int x e^x\\,dx
$$

Choose:

$$
u=x
$$

and:

$$
dv=e^x\\,dx
$$

Then:

$$
du=dx
$$

and:

$$
v=e^x
$$

Apply the formula:

$$
\\int u\\,dv=uv-\\int v\\,du
$$

$$
\\int xe^x\\,dx
=
xe^x-\\int e^x\\,dx
$$

Therefore:

$$
\\boxed{
\\int xe^x\\,dx
=
xe^x-e^x+C
}
$$

or:

$$
\\boxed{
\\int xe^x\\,dx=e^x(x-1)+C
}
$$

---

## Example with a logarithm

Consider:

$$
\\int \\ln(x)\\,dx
$$

Although it does not initially look like a product, we can write:

$$
\\int \\ln(x)\\cdot1\\,dx
$$

Choose:

$$
u=\\ln(x)
$$

and:

$$
dv=dx
$$

Then:

$$
du=\\frac1x\\,dx
$$

and:

$$
v=x
$$

Apply integration by parts:

$$
\\int\\ln(x)\\,dx
=
x\\ln(x)-\\int x\\frac1x\\,dx
$$

$$
=
x\\ln(x)-\\int1\\,dx
$$

Therefore:

$$
\\boxed{
\\int\\ln(x)\\,dx
=
x\\ln(x)-x+C
}
$$

---

## Example with a trigonometric function

Consider:

$$
\\int x\\cos(x)\\,dx
$$

Choose:

$$
u=x
$$

$$
dv=\\cos(x)\\,dx
$$

Then:

$$
du=dx
$$

$$
v=\\sin(x)
$$

Apply the formula:

$$
\\int x\\cos(x)\\,dx
=
x\\sin(x)-\\int\\sin(x)\\,dx
$$

Since:

$$
\\int\\sin(x)\\,dx=-\\cos(x)
$$

we obtain:

$$
\\boxed{
\\int x\\cos(x)\\,dx
=
x\\sin(x)+\\cos(x)+C
}
$$

---

## Example with a power and a logarithm

Consider:

$$
\\int x^2\\ln(x)\\,dx
$$

Choose:

$$
u=\\ln(x)
$$

$$
dv=x^2\\,dx
$$

Then:

$$
du=\\frac1x\\,dx
$$

and:

$$
v=\\frac{x^3}{3}
$$

Apply:

$$
\\int x^2\\ln(x)\\,dx
=
\\frac{x^3}{3}\\ln(x)
-
\\int\\frac{x^3}{3}\\frac1x\\,dx
$$

$$
=
\\frac{x^3}{3}\\ln(x)
-
\\frac13\\int x^2\\,dx
$$

Therefore:

$$
\\boxed{
\\int x^2\\ln(x)\\,dx
=
\\frac{x^3}{3}\\ln(x)-\\frac{x^3}{9}+C
}
$$

---

## Repeated integration by parts

Some integrals require integration by parts more than once.

Consider:

$$
\\int x^2e^x\\,dx
$$

First application:

$$
u=x^2,
\\qquad
dv=e^x\\,dx
$$

Then:

$$
du=2x\\,dx,
\\qquad
v=e^x
$$

Therefore:

$$
\\int x^2e^x\\,dx
=
x^2e^x-2\\int xe^x\\,dx
$$

We already know that:

$$
\\int xe^x\\,dx=e^x(x-1)
$$

Substituting:

$$
\\int x^2e^x\\,dx
=
x^2e^x-2e^x(x-1)+C
$$

Simplifying:

$$
\\boxed{
\\int x^2e^x\\,dx
=
e^x(x^2-2x+2)+C
}
$$

---

## Integration by parts with trigonometric integrals

It can also be used when the product contains trigonometric functions.

For example:

$$
\\int x\\sin(x)\\,dx
$$

Choose:

$$
u=x,
\\qquad
dv=\\sin(x)\\,dx
$$

Then:

$$
du=dx,
\\qquad
v=-\\cos(x)
$$

Apply the formula:

$$
\\int x\\sin(x)\\,dx
=
-x\\cos(x)+\\int\\cos(x)\\,dx
$$

Therefore:

$$
\\boxed{
\\int x\\sin(x)\\,dx
=
-x\\cos(x)+\\sin(x)+C
}
$$

---

## When the original integral appears again

There is a particularly interesting case where applying integration by parts produces the original integral again.

For example:

$$
\\int e^x\\cos(x)\\,dx
$$

Let:

$$
I=\\int e^x\\cos(x)\\,dx
$$

First integration by parts:

$$
u=\\cos(x),
\\qquad
dv=e^x\\,dx
$$

Then:

$$
du=-\\sin(x)\\,dx,
\\qquad
v=e^x
$$

Therefore:

$$
I=e^x\\cos(x)+\\int e^x\\sin(x)\\,dx
$$

Define:

$$
J=\\int e^x\\sin(x)\\,dx
$$

Apply integration by parts again:

$$
u=\\sin(x),
\\qquad
dv=e^x\\,dx
$$

Then:

$$
du=\\cos(x)\\,dx,
\\qquad
v=e^x
$$

Thus:

$$
J=e^x\\sin(x)-\\int e^x\\cos(x)\\,dx
$$

Since the last integral is $I$:

$$
J=e^x\\sin(x)-I
$$

Substitute into the first expression:

$$
I=e^x\\cos(x)+e^x\\sin(x)-I
$$

Therefore:

$$
2I=e^x(\\sin(x)+\\cos(x))
$$

and finally:

$$
\\boxed{
\\int e^x\\cos(x)\\,dx
=
\\frac{e^x}{2}
\\left(\\sin(x)+\\cos(x)\\right)+C
}
$$

---

## Integration by parts in definite integrals

The formula also works for definite integrals:

$$
\\boxed{
\\int_a^b u\\,dv
=
[uv]_a^b-\\int_a^b v\\,du
}
$$

### Example

Consider:

$$
\\int_0^1 xe^x\\,dx
$$

Choose:

$$
u=x,
\\qquad
dv=e^x\\,dx
$$

Then:

$$
du=dx,
\\qquad
v=e^x
$$

Apply:

$$
\\int_0^1xe^x\\,dx
=
[xe^x]_0^1
-
\\int_0^1e^x\\,dx
$$

Calculate:

$$
[e^x]_0^1=e-1
$$

and:

$$
[xe^x]_0^1=e
$$

Therefore:

$$
\\boxed{
\\int_0^1xe^x\\,dx=1
}
$$

---

## When to use integration by parts

Integration by parts is often appropriate when a product contains different types of functions, especially:

$$
\\boxed{
\\text{polynomial}\\times\\text{exponential}
}
$$

$$
\\boxed{
\\text{polynomial}\\times\\text{trigonometric}
}
$$

$$
\\boxed{
\\text{polynomial}\\times\\text{logarithmic}
}
$$

It is also useful for:

$$
\\int\\ln(x)\\,dx
$$

and:

$$
\\int\\arctan(x)\\,dx
$$

even though they do not initially appear as products.

---

## Integration by parts versus substitution

The two techniques have different purposes.

### Substitution

It is especially useful when a composite function appears together with its derivative:

$$
\\int f(g(x))g'(x)\\,dx
$$

### Integration by parts

It is especially useful when a product appears:

$$
\\int u\\,dv
$$

A useful rule of thumb is:

> If a composite function is accompanied by its derivative, consider substitution. If a product of different functions appears, consider integration by parts.

---

## Common mistakes

### Choosing $u$ poorly

The choice should make:

$$
\\int v\\,du
$$

simpler than the original integral.

### Forgetting to calculate $du$

After choosing:

$$
u=g(x)
$$

we must calculate:

$$
du=g'(x)\\,dx
$$

### Integrating $dv$ incorrectly

We must calculate:

$$
v=\\int dv
$$

### Forgetting the negative sign

The formula is:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

not:

$$
uv+\\int v\\,du
$$

### Using integration by parts when substitution is simpler

Not every product requires integration by parts. It is worth checking first whether a natural substitution exists.

---

## Summary procedure

Given an integral:

$$
\\int f(x)g(x)\\,dx
$$

we can try to write:

$$
u=f(x)
$$

and:

$$
dv=g(x)\\,dx
$$

Then calculate:

$$
du=f'(x)\\,dx
$$

and:

$$
v=\\int g(x)\\,dx
$$

Finally apply:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

---

## Summary

Integration by parts is based on the product rule and allows us to transform an integral into another, simpler integral.

The fundamental formula is:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

For definite integrals:

$$
\\boxed{
\\int_a^b u\\,dv
=
[uv]_a^b-\\int_a^b v\\,du
}
$$

A good choice of $u$ should simplify the resulting integral.

The strategy is:

$$
\\boxed{
u\\longrightarrow du,
\\qquad
dv\\longrightarrow v
}
$$

and then apply the formula.
`;function o(){let{locale:o}=t();return e(n,{id:`integration-by-parts`,content:{es:r,ca:i,en:a}[o]})}export{o as default};