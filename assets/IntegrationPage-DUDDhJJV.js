import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-CQZABaDC.js";import{t as n}from"./TopicPage-DyShI14R.js";var r=`# Integrales

Las integrales son una de las herramientas fundamentales del cálculo. Permiten estudiar acumulaciones, calcular áreas, obtener desplazamientos a partir de velocidades y resolver muchos problemas de ciencias e ingeniería.

## 1. Idea fundamental

La integral puede interpretarse como una **acumulación**.

Por ejemplo, si conocemos una función $f(x)$, podemos acumular sus valores entre dos puntos mediante una integral definida:

$$
\\int_a^b f(x)\\,dx
$$

Geométricamente, esta integral representa el **área con signo** entre la gráfica de $f(x)$ y el eje $x$, desde $x=a$ hasta $x=b$.

- Las regiones por encima del eje $x$ aportan área positiva.
- Las regiones por debajo del eje $x$ aportan área negativa.

## 2. La notación de la integral

Una integral tiene varios elementos:

$$
\\int_a^b f(x)\\,dx
$$

- $\\int$: símbolo de integración.
- $a$: límite inferior.
- $b$: límite superior.
- $f(x)$: función que integramos, llamada **integrando**.
- $dx$: indica la variable de integración.

Por ejemplo:

$$
\\int_0^3 x^2\\,dx
$$

significa integrar $x^2$ desde $0$ hasta $3$.

## 3. Integral indefinida

Una integral indefinida busca una función cuya derivada sea la función original:

$$
\\int f(x)\\,dx = F(x)+C
$$

donde:

$$
F'(x)=f(x)
$$

La constante $C$ aparece porque muchas funciones tienen la misma derivada.

Por ejemplo:

$$
\\int 2x\\,dx=x^2+C
$$

porque:

$$
\\frac{d}{dx}(x^2)=2x
$$

## 4. Integral definida

Una integral definida tiene límites:

$$
\\int_a^b f(x)\\,dx
$$

Si $F$ es una primitiva de $f$, podemos calcularla mediante el teorema fundamental del cálculo:

$$
\\int_a^b f(x)\\,dx=F(b)-F(a)
$$

Por ejemplo:

$$
\\int_0^2 x\\,dx
$$

Una primitiva de $x$ es:

$$
F(x)=\\frac{x^2}{2}
$$

Por tanto:

$$
\\int_0^2 x\\,dx
=

\\left[\\frac{x^2}{2}\\right]_0^2
=

2
$$

## 5. Propiedades básicas

### Linealidad

$$
\\int (af(x)+bg(x))\\,dx
=

a\\int f(x)\\,dx+b\\int g(x)\\,dx
$$

donde $a$ y $b$ son constantes.

También:

$$
\\int_a^b (f(x)+g(x))\\,dx
=

\\int_a^b f(x)\\,dx+
\\int_a^b g(x)\\,dx
$$

### Cambio de orientación

$$
\\int_a^b f(x)\\,dx
=

-\\int_b^a f(x)\\,dx
$$

### Intervalo de longitud cero

$$
\\int_a^a f(x)\\,dx=0
$$

### División de un intervalo

Si $a<c<b$:

$$
\\int_a^b f(x)\\,dx
=

\\int_a^c f(x)\\,dx+
\\int_c^b f(x)\\,dx
$$

## 6. Integrales de potencias

Una de las reglas más importantes es:

$$
\\int x^n\\,dx
=

\\frac{x^{n+1}}{n+1}+C
$$

si:

$$
n\\neq -1
$$

Por ejemplo:

$$
\\int x^3\\,dx
=

\\frac{x^4}{4}+C
$$

Otro ejemplo:

$$
\\int 5x^2\\,dx
=

\\frac{5x^3}{3}+C
$$

## 7. Caso especial: $1/x$

La regla de las potencias no se puede utilizar directamente cuando $n=-1$.

En ese caso:

$$
\\int \\frac{1}{x}\\,dx
=

\\ln|x|+C
$$

El valor absoluto es importante porque la función $1/x$ está definida tanto para $x>0$ como para $x<0$.

## 8. Integrales de funciones exponenciales

Para la función exponencial:

$$
\\int e^x\\,dx=e^x+C
$$

Para una base $a>0$, $a\\neq1$:

$$
\\int a^x\\,dx
=

\\frac{a^x}{\\ln(a)}+C
$$

## 9. Integrales trigonométricas básicas

Algunas primitivas importantes son:

$$
\\int \\cos x\\,dx=\\sin x+C
$$

$$
\\int \\sin x\\,dx=-\\cos x+C
$$

También:

$$
\\int \\frac{1}{\\cos^2x}\\,dx=\\tan x+C
$$

y:

$$
\\int \\frac{1}{\\sin^2x}\\,dx=-\\cot x+C
$$

## 10. Sustitución

El cambio de variable permite transformar una integral complicada en otra más sencilla.

Si:

$$
u=g(x)
$$

entonces:

$$
du=g'(x)\\,dx
$$

Por ejemplo:

$$
\\int 2x\\cos(x^2)\\,dx
$$

Tomamos:

$$
u=x^2
$$

Entonces:

$$
du=2x\\,dx
$$

y obtenemos:

$$
\\int \\cos(u)\\,du
=

\\sin(u)+C
$$

Finalmente:

$$
\\boxed{\\sin(x^2)+C}
$$

## 11. Integración por partes

La integración por partes se basa en la regla del producto de las derivadas:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

Es especialmente útil cuando tenemos un producto de funciones.

Por ejemplo:

$$
\\int x e^x\\,dx
$$

Tomamos:

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

Aplicando la fórmula:

$$
\\int xe^x\\,dx
=

xe^x-\\int e^x\\,dx
$$

Por tanto:

$$
\\boxed{xe^x-e^x+C}
$$

## 12. Área bajo una curva

Si:

$$
f(x)\\geq0
$$

en el intervalo $[a,b]$, entonces:

$$
A=\\int_a^b f(x)\\,dx
$$

representa el área comprendida entre la curva y el eje $x$.

Por ejemplo:

$$
A=\\int_0^2 x^2\\,dx
$$

resulta:

$$
A=\\frac{8}{3}
$$

## 13. Área entre dos funciones

Si $f(x)$ está por encima de $g(x)$, el área entre ambas funciones es:

$$
A=
\\int_a^b
\\left(f(x)-g(x)\\right)\\,dx
$$

Es necesario determinar primero los puntos de intersección para conocer los límites de integración.

## 14. Integral como acumulación

Las integrales no solamente representan áreas.

También permiten acumular magnitudes.

Si $v(t)$ representa una velocidad, el desplazamiento entre $t=a$ y $t=b$ es:

$$
\\Delta s=
\\int_a^b v(t)\\,dt
$$

Si $r(t)$ representa una tasa de crecimiento, la variación acumulada es:

$$
\\Delta Q=
\\int_a^b r(t)\\,dt
$$

## 15. Relación entre derivadas e integrales

La derivación y la integración son operaciones estrechamente relacionadas.

El teorema fundamental del cálculo establece que:

$$
\\frac{d}{dx}
\\left(
\\int_a^x f(t)\\,dt
\\right)
=

f(x)
$$

Es decir, derivar una acumulación devuelve la función original.

También:

$$
\\int_a^b f(x)\\,dx
=

F(b)-F(a)
$$

cuando $F'(x)=f(x)$.

## 16. Integrales impropias

Una integral puede tener límites infinitos:

$$
\\int_a^\\infty f(x)\\,dx
$$

En ese caso se define mediante un límite:

$$
\\int_a^\\infty f(x)\\,dx
=

\\lim_{b\\to\\infty}
\\int_a^b f(x)\\,dx
$$

También puede aparecer una singularidad dentro del intervalo.

Por ejemplo:

$$
\\int_0^1\\frac{1}{\\sqrt{x}}\\,dx
$$

requiere tratar el comportamiento de la función cerca de $x=0$.

## 17. Integrales múltiples

Para funciones de varias variables aparecen integrales múltiples.

Integral doble:

$$
\\iint_D f(x,y)\\,dA
$$

Integral triple:

$$
\\iiint_V f(x,y,z)\\,dV
$$

Estas herramientas permiten calcular, entre otras cosas:

- áreas;
- volúmenes;
- masas;
- centros de masa;
- cantidades acumuladas en regiones.

## 18. Integrales de línea

Una integral de línea integra una función a lo largo de una curva:

$$
\\int_C f\\,ds
$$

También pueden aparecer integrales de campos vectoriales:

$$
\\int_C \\vec F\\cdot d\\vec r
$$

Son importantes en física e ingeniería, especialmente en el estudio del trabajo realizado por una fuerza.

## 19. Símbolos importantes

| Símbolo    | Significado                       |
| ---------- | --------------------------------- |
| $\\int$     | Integral                          |
| $\\int_a^b$ | Integral definida entre $a$ y $b$ |
| $dx$       | Diferencial respecto de $x$       |
| $C$        | Constante de integración          |
| $F(x)$     | Primitiva de $f(x)$               |
| $\\iint$    | Integral doble                    |
| $\\iiint$   | Integral triple                   |
| $\\oint$    | Integral sobre una curva cerrada  |
| $\\int_C$   | Integral de línea                 |

## 20. Errores frecuentes

### Olvidar la constante

Incorrecto:

$$
\\int 2x\\,dx=x^2
$$

Correcto:

$$
\\int 2x\\,dx=x^2+C
$$

### Aplicar mal la regla de las potencias

Incorrecto:

$$
\\int x^2\\,dx=\\frac{x^2}{2}
$$

Correcto:

$$
\\int x^2\\,dx=\\frac{x^3}{3}+C
$$

### Confundir integral definida e indefinida

Una integral indefinida produce una familia de funciones:

$$
\\int f(x)\\,dx=F(x)+C
$$

Una integral definida produce un número:

$$
\\int_a^b f(x)\\,dx
$$

### Confundir área con integral con signo

Si la función toma valores negativos, la integral definida puede no coincidir con el área geométrica total.

En ese caso puede ser necesario dividir el intervalo o utilizar:

$$
\\int_a^b |f(x)|\\,dx
$$

## 21. Procedimiento general

Para resolver una integral:

1. Identifica la función que se está integrando.
2. Comprueba si puedes aplicar una regla básica.
3. Simplifica la expresión si es necesario.
4. Considera un cambio de variable si aparece una composición.
5. Considera integración por partes si aparece un producto adecuado.
6. Calcula la primitiva.
7. Añade $C$ si la integral es indefinida.
8. Si es definida, aplica los límites.
9. Comprueba el resultado derivando la primitiva cuando sea posible.
10. Comprueba las condiciones de dominio.

## 22. Idea fundamental

La idea esencial de la integración puede resumirse así:

$$
\\boxed{
\\text{integrar} \\approx \\text{acumular}
}
$$

y, en el contexto de primitivas:

$$
\\boxed{
\\int f(x)\\,dx=F(x)+C
\\iff
F'(x)=f(x)
}
$$

La integral y la derivada son, en muchos sentidos, operaciones inversas.
`,i=`# Integrals

Les integrals són una de les eines fonamentals del càlcul. Permeten estudiar acumulacions, calcular àrees, obtenir desplaçaments a partir de velocitats i resoldre molts problemes de ciència i enginyeria.

## 1. Idea fonamental

La integral es pot interpretar com una **acumulació**.

Per exemple, si coneixem una funció $f(x)$, podem acumular els seus valors entre dos punts mitjançant una integral definida:

$$
\\int_a^b f(x)\\,dx
$$

Geomètricament, aquesta integral representa l'**àrea amb signe** entre la gràfica de $f(x)$ i l'eix $x$, des de $x=a$ fins a $x=b$.

- Les regions per damunt de l'eix $x$ aporten àrea positiva.
- Les regions per davall de l'eix $x$ aporten àrea negativa.

## 2. La notació de la integral

Una integral té diversos elements:

$$
\\int_a^b f(x)\\,dx
$$

- $\\int$: símbol d'integració.
- $a$: límit inferior.
- $b$: límit superior.
- $f(x)$: funció que integrem, anomenada **integrand**.
- $dx$: indica la variable d'integració.

Per exemple:

$$
\\int_0^3 x^2\\,dx
$$

vol dir integrar $x^2$ des de $0$ fins a $3$.

## 3. Integral indefinida

Una integral indefinida busca una funció la derivada de la qual sigui la funció original:

$$
\\int f(x)\\,dx=F(x)+C
$$

on:

$$
F'(x)=f(x)
$$

La constant $C$ apareix perquè moltes funcions tenen la mateixa derivada.

Per exemple:

$$
\\int 2x\\,dx=x^2+C
$$

perquè:

$$
\\frac{d}{dx}(x^2)=2x
$$

## 4. Integral definida

Una integral definida té límits:

$$
\\int_a^b f(x)\\,dx
$$

Si $F$ és una primitiva de $f$, podem calcular-la mitjançant el teorema fonamental del càlcul:

$$
\\int_a^b f(x)\\,dx=F(b)-F(a)
$$

Per exemple:

$$
\\int_0^2 x\\,dx
$$

Una primitiva de $x$ és:

$$
F(x)=\\frac{x^2}{2}
$$

Per tant:

$$
\\int_0^2 x\\,dx
=

\\left[\\frac{x^2}{2}\\right]_0^2
=

2
$$

## 5. Propietats bàsiques

### Linealitat

$$
\\int (af(x)+bg(x))\\,dx
=

a\\int f(x)\\,dx+b\\int g(x)\\,dx
$$

on $a$ i $b$ són constants.

També:

$$
\\int_a^b(f(x)+g(x))\\,dx
=

\\int_a^b f(x)\\,dx+
\\int_a^b g(x)\\,dx
$$

### Canvi d'orientació

$$
\\int_a^b f(x)\\,dx
=

-\\int_b^a f(x)\\,dx
$$

### Interval de longitud zero

$$
\\int_a^a f(x)\\,dx=0
$$

### Divisió d'un interval

Si $a<c<b$:

$$
\\int_a^b f(x)\\,dx
=

\\int_a^c f(x)\\,dx+
\\int_c^b f(x)\\,dx
$$

## 6. Integrals de potències

Una de les regles més importants és:

$$
\\int x^n\\,dx
=

\\frac{x^{n+1}}{n+1}+C
$$

si:

$$
n\\neq-1
$$

Per exemple:

$$
\\int x^3\\,dx
=

\\frac{x^4}{4}+C
$$

Un altre exemple:

$$
\\int 5x^2\\,dx
=

\\frac{5x^3}{3}+C
$$

## 7. Cas especial: $1/x$

La regla de les potències no es pot utilitzar directament quan $n=-1$.

En aquest cas:

$$
\\int\\frac{1}{x}\\,dx
=

\\ln|x|+C
$$

El valor absolut és important perquè la funció $1/x$ està definida tant per a $x>0$ com per a $x<0$.

## 8. Integrals de funcions exponencials

Per a la funció exponencial:

$$
\\int e^x\\,dx=e^x+C
$$

Per a una base $a>0$, $a\\neq1$:

$$
\\int a^x\\,dx
=

\\frac{a^x}{\\ln(a)}+C
$$

## 9. Integrals trigonomètriques bàsiques

Algunes primitives importants són:

$$
\\int\\cos x\\,dx=\\sin x+C
$$

$$
\\int\\sin x\\,dx=-\\cos x+C
$$

També:

$$
\\int\\frac{1}{\\cos^2x}\\,dx=\\tan x+C
$$

i:

$$
\\int\\frac{1}{\\sin^2x}\\,dx=-\\cot x+C
$$

## 10. Substitució

El canvi de variable permet transformar una integral complicada en una altra de més senzilla.

Si:

$$
u=g(x)
$$

aleshores:

$$
du=g'(x)\\,dx
$$

Per exemple:

$$
\\int 2x\\cos(x^2)\\,dx
$$

Prenem:

$$
u=x^2
$$

Aleshores:

$$
du=2x\\,dx
$$

i obtenim:

$$
\\int\\cos(u)\\,du
=

\\sin(u)+C
$$

Finalment:

$$
\\boxed{\\sin(x^2)+C}
$$

## 11. Integració per parts

La integració per parts es basa en la regla del producte de les derivades:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

És especialment útil quan tenim un producte de funcions.

Per exemple:

$$
\\int xe^x\\,dx
$$

Prenem:

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

Aplicant la fórmula:

$$
\\int xe^x\\,dx
=

xe^x-\\int e^x\\,dx
$$

Per tant:

$$
\\boxed{xe^x-e^x+C}
$$

## 12. Àrea sota una corba

Si:

$$
f(x)\\geq0
$$

en l'interval $[a,b]$, aleshores:

$$
A=\\int_a^b f(x)\\,dx
$$

representa l'àrea compresa entre la corba i l'eix $x$.

Per exemple:

$$
A=\\int_0^2x^2\\,dx
$$

resulta:

$$
A=\\frac{8}{3}
$$

## 13. Àrea entre dues funcions

Si $f(x)$ està per damunt de $g(x)$, l'àrea entre les dues funcions és:

$$
A=
\\int_a^b(f(x)-g(x))\\,dx
$$

Primer cal determinar els punts d'intersecció per conèixer els límits d'integració.

## 14. Integral com a acumulació

Les integrals no representen únicament àrees.

També permeten acumular magnituds.

Si $v(t)$ representa una velocitat, el desplaçament entre $t=a$ i $t=b$ és:

$$
\\Delta s=
\\int_a^b v(t)\\,dt
$$

Si $r(t)$ representa una taxa de creixement, la variació acumulada és:

$$
\\Delta Q=
\\int_a^b r(t)\\,dt
$$

## 15. Relació entre derivades i integrals

La derivació i la integració són operacions estretament relacionades.

El teorema fonamental del càlcul estableix que:

$$
\\frac{d}{dx}
\\left(
\\int_a^x f(t)\\,dt
\\right)
=

f(x)
$$

És a dir, derivar una acumulació retorna la funció original.

També:

$$
\\int_a^b f(x)\\,dx
=

F(b)-F(a)
$$

quan $F'(x)=f(x)$.

## 16. Integrals impròpies

Una integral pot tenir límits infinits:

$$
\\int_a^\\infty f(x)\\,dx
$$

En aquest cas es defineix mitjançant un límit:

$$
\\int_a^\\infty f(x)\\,dx
=

\\lim_{b\\to\\infty}
\\int_a^b f(x)\\,dx
$$

També pot aparèixer una singularitat dins de l'interval.

Per exemple:

$$
\\int_0^1\\frac{1}{\\sqrt{x}}\\,dx
$$

requereix estudiar el comportament de la funció prop de $x=0$.

## 17. Integrals múltiples

Per a funcions de diverses variables apareixen integrals múltiples.

Integral doble:

$$
\\iint_D f(x,y)\\,dA
$$

Integral triple:

$$
\\iiint_V f(x,y,z)\\,dV
$$

Aquestes eines permeten calcular, entre altres coses:

- àrees;
- volums;
- masses;
- centres de massa;
- quantitats acumulades en regions.

## 18. Integrals de línia

Una integral de línia integra una funció al llarg d'una corba:

$$
\\int_C f\\,ds
$$

També poden aparèixer integrals de camps vectorials:

$$
\\int_C\\vec F\\cdot d\\vec r
$$

Són importants en física i enginyeria, especialment en l'estudi del treball realitzat per una força.

## 19. Símbols importants

| Símbol     | Significat                        |
| ---------- | --------------------------------- |
| $\\int$     | Integral                          |
| $\\int_a^b$ | Integral definida entre $a$ i $b$ |
| $dx$       | Diferencial respecte de $x$       |
| $C$        | Constant d'integració             |
| $F(x)$     | Primitiva de $f(x)$               |
| $\\iint$    | Integral doble                    |
| $\\iiint$   | Integral triple                   |
| $\\oint$    | Integral sobre una corba tancada  |
| $\\int_C$   | Integral de línia                 |

## 20. Errors freqüents

### Oblidar la constant

Incorrecte:

$$
\\int2x\\,dx=x^2
$$

Correcte:

$$
\\int2x\\,dx=x^2+C
$$

### Aplicar malament la regla de les potències

Incorrecte:

$$
\\int x^2\\,dx=\\frac{x^2}{2}
$$

Correcte:

$$
\\int x^2\\,dx=\\frac{x^3}{3}+C
$$

### Confondre integral definida i indefinida

Una integral indefinida produeix una família de funcions:

$$
\\int f(x)\\,dx=F(x)+C
$$

Una integral definida produeix un nombre:

$$
\\int_a^b f(x)\\,dx
$$

### Confondre àrea amb integral amb signe

Si la funció pren valors negatius, la integral definida pot no coincidir amb l'àrea geomètrica total.

En aquest cas pot ser necessari dividir l'interval o utilitzar:

$$
\\int_a^b|f(x)|\\,dx
$$

## 21. Procediment general

Per resoldre una integral:

1. Identifica la funció que s'està integrant.
2. Comprova si pots aplicar una regla bàsica.
3. Simplifica l'expressió si és necessari.
4. Considera un canvi de variable si apareix una composició.
5. Considera la integració per parts si apareix un producte adequat.
6. Calcula la primitiva.
7. Afegeix $C$ si la integral és indefinida.
8. Si és definida, aplica els límits.
9. Comprova el resultat derivant la primitiva quan sigui possible.
10. Comprova les condicions de domini.

## 22. Idea fonamental

La idea essencial de la integració es pot resumir així:

$$
\\boxed{
\\text{integrar}\\approx\\text{acumular}
}
$$

i, en el context de primitives:

$$
\\boxed{
\\int f(x)\\,dx=F(x)+C
\\iff
F'(x)=f(x)
}
$$

La integral i la derivada són, en molts sentits, operacions inverses.
`,a=`# Integrals

Integrals are one of the fundamental tools of calculus. They allow us to study accumulation, calculate areas, obtain displacement from velocity, and solve many problems in science and engineering.

## 1. Fundamental idea

An integral can be interpreted as an **accumulation**.

For example, if we know a function $f(x)$, we can accumulate its values between two points using a definite integral:

$$
\\int_a^b f(x)\\,dx
$$

Geometrically, this integral represents the **signed area** between the graph of $f(x)$ and the $x$-axis, from $x=a$ to $x=b$.

- Regions above the $x$-axis contribute positive area.
- Regions below the $x$-axis contribute negative area.

## 2. Integral notation

An integral contains several elements:

$$
\\int_a^b f(x)\\,dx
$$

- $\\int$: integration symbol.
- $a$: lower limit.
- $b$: upper limit.
- $f(x)$: function being integrated, called the **integrand**.
- $dx$: indicates the variable of integration.

For example:

$$
\\int_0^3 x^2\\,dx
$$

means integrating $x^2$ from $0$ to $3$.

## 3. Indefinite integral

An indefinite integral looks for a function whose derivative is the original function:

$$
\\int f(x)\\,dx=F(x)+C
$$

where:

$$
F'(x)=f(x)
$$

The constant $C$ appears because many functions have the same derivative.

For example:

$$
\\int 2x\\,dx=x^2+C
$$

because:

$$
\\frac{d}{dx}(x^2)=2x
$$

## 4. Definite integral

A definite integral has limits:

$$
\\int_a^b f(x)\\,dx
$$

If $F$ is an antiderivative of $f$, we can calculate it using the fundamental theorem of calculus:

$$
\\int_a^b f(x)\\,dx=F(b)-F(a)
$$

For example:

$$
\\int_0^2 x\\,dx
$$

An antiderivative of $x$ is:

$$
F(x)=\\frac{x^2}{2}
$$

Therefore:

$$
\\int_0^2 x\\,dx
=

\\left[\\frac{x^2}{2}\\right]_0^2
=

2
$$

## 5. Basic properties

### Linearity

$$
\\int(af(x)+bg(x))\\,dx
=

a\\int f(x)\\,dx+b\\int g(x)\\,dx
$$

where $a$ and $b$ are constants.

Also:

$$
\\int_a^b(f(x)+g(x))\\,dx
=

\\int_a^b f(x)\\,dx+
\\int_a^b g(x)\\,dx
$$

### Reversing the limits

$$
\\int_a^b f(x)\\,dx
=

-\\int_b^a f(x)\\,dx
$$

### Zero-length interval

$$
\\int_a^a f(x)\\,dx=0
$$

### Splitting an interval

If $a<c<b$:

$$
\\int_a^b f(x)\\,dx
=

\\int_a^c f(x)\\,dx+
\\int_c^b f(x)\\,dx
$$

## 6. Power integrals

One of the most important rules is:

$$
\\int x^n\\,dx
=

\\frac{x^{n+1}}{n+1}+C
$$

when:

$$
n\\neq-1
$$

For example:

$$
\\int x^3\\,dx
=

\\frac{x^4}{4}+C
$$

Another example:

$$
\\int 5x^2\\,dx
=

\\frac{5x^3}{3}+C
$$

## 7. Special case: $1/x$

The power rule cannot be applied directly when $n=-1$.

In that case:

$$
\\int\\frac{1}{x}\\,dx
=

\\ln|x|+C
$$

The absolute value is important because $1/x$ is defined for both $x>0$ and $x<0$.

## 8. Integrals of exponential functions

For the exponential function:

$$
\\int e^x\\,dx=e^x+C
$$

For a base $a>0$, $a\\neq1$:

$$
\\int a^x\\,dx
=

\\frac{a^x}{\\ln(a)}+C
$$

## 9. Basic trigonometric integrals

Some important antiderivatives are:

$$
\\int\\cos x\\,dx=\\sin x+C
$$

$$
\\int\\sin x\\,dx=-\\cos x+C
$$

Also:

$$
\\int\\frac{1}{\\cos^2x}\\,dx=\\tan x+C
$$

and:

$$
\\int\\frac{1}{\\sin^2x}\\,dx=-\\cot x+C
$$

## 10. Substitution

A change of variable can transform a complicated integral into a simpler one.

If:

$$
u=g(x)
$$

then:

$$
du=g'(x)\\,dx
$$

For example:

$$
\\int 2x\\cos(x^2)\\,dx
$$

Take:

$$
u=x^2
$$

Then:

$$
du=2x\\,dx
$$

and we obtain:

$$
\\int\\cos(u)\\,du
=

\\sin(u)+C
$$

Finally:

$$
\\boxed{\\sin(x^2)+C}
$$

## 11. Integration by parts

Integration by parts is based on the product rule for derivatives:

$$
\\boxed{
\\int u\\,dv=uv-\\int v\\,du
}
$$

It is particularly useful when integrating a suitable product of functions.

For example:

$$
\\int xe^x\\,dx
$$

Take:

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

Applying the formula:

$$
\\int xe^x\\,dx
=

xe^x-\\int e^x\\,dx
$$

Therefore:

$$
\\boxed{xe^x-e^x+C}
$$

## 12. Area under a curve

If:

$$
f(x)\\geq0
$$

on the interval $[a,b]$, then:

$$
A=\\int_a^b f(x)\\,dx
$$

represents the area between the curve and the $x$-axis.

For example:

$$
A=\\int_0^2x^2\\,dx
$$

gives:

$$
A=\\frac{8}{3}
$$

## 13. Area between two functions

If $f(x)$ lies above $g(x)$, the area between the two functions is:

$$
A=
\\int_a^b(f(x)-g(x))\\,dx
$$

The intersection points must first be determined in order to find the integration limits.

## 14. Integral as accumulation

Integrals do not only represent areas.

They can also accumulate physical quantities.

If $v(t)$ represents velocity, the displacement between $t=a$ and $t=b$ is:

$$
\\Delta s=
\\int_a^b v(t)\\,dt
$$

If $r(t)$ represents a rate of growth, the accumulated change is:

$$
\\Delta Q=
\\int_a^b r(t)\\,dt
$$

## 15. Relationship between derivatives and integrals

Differentiation and integration are closely related operations.

The fundamental theorem of calculus states:

$$
\\frac{d}{dx}
\\left(
\\int_a^x f(t)\\,dt
\\right)
=

f(x)
$$

In other words, differentiating an accumulation returns the original function.

Also:

$$
\\int_a^b f(x)\\,dx
=

F(b)-F(a)
$$

when $F'(x)=f(x)$.

## 16. Improper integrals

An integral may have an infinite limit:

$$
\\int_a^\\infty f(x)\\,dx
$$

In this case it is defined using a limit:

$$
\\int_a^\\infty f(x)\\,dx
=

\\lim_{b\\to\\infty}
\\int_a^b f(x)\\,dx
$$

A singularity may also occur inside the interval.

For example:

$$
\\int_0^1\\frac{1}{\\sqrt{x}}\\,dx
$$

requires studying the behavior of the function near $x=0$.

## 17. Multiple integrals

For functions of several variables, we use multiple integrals.

Double integral:

$$
\\iint_D f(x,y)\\,dA
$$

Triple integral:

$$
\\iiint_V f(x,y,z)\\,dV
$$

These tools can be used to calculate, among other things:

- areas;
- volumes;
- masses;
- centers of mass;
- accumulated quantities over regions.

## 18. Line integrals

A line integral integrates a function along a curve:

$$
\\int_C f\\,ds
$$

Line integrals of vector fields can also appear:

$$
\\int_C\\vec F\\cdot d\\vec r
$$

They are important in physics and engineering, particularly when studying work performed by a force.

## 19. Important symbols

| Symbol     | Meaning                           |
| ---------- | --------------------------------- |
| $\\int$     | Integral                          |
| $\\int_a^b$ | Definite integral from $a$ to $b$ |
| $dx$       | Differential with respect to $x$  |
| $C$        | Constant of integration           |
| $F(x)$     | Antiderivative of $f(x)$          |
| $\\iint$    | Double integral                   |
| $\\iiint$   | Triple integral                   |
| $\\oint$    | Integral over a closed curve      |
| $\\int_C$   | Line integral                     |

## 20. Common mistakes

### Forgetting the constant

Incorrect:

$$
\\int2x\\,dx=x^2
$$

Correct:

$$
\\int2x\\,dx=x^2+C
$$

### Applying the power rule incorrectly

Incorrect:

$$
\\int x^2\\,dx=\\frac{x^2}{2}
$$

Correct:

$$
\\int x^2\\,dx=\\frac{x^3}{3}+C
$$

### Confusing definite and indefinite integrals

An indefinite integral produces a family of functions:

$$
\\int f(x)\\,dx=F(x)+C
$$

A definite integral produces a number:

$$
\\int_a^b f(x)\\,dx
$$

### Confusing area with signed integral

If the function takes negative values, the definite integral may not equal the total geometric area.

In that case, it may be necessary to split the interval or use:

$$
\\int_a^b|f(x)|\\,dx
$$

## 21. General procedure

To solve an integral:

1. Identify the function being integrated.
2. Check whether a basic rule can be applied.
3. Simplify the expression if necessary.
4. Consider a substitution when a composition appears.
5. Consider integration by parts when a suitable product appears.
6. Find the antiderivative.
7. Add $C$ if the integral is indefinite.
8. If it is definite, apply the limits.
9. Check the result by differentiating the antiderivative when possible.
10. Check the domain conditions.

## 22. Fundamental idea

The essential idea of integration can be summarized as:

$$
\\boxed{
\\text{integrate}\\approx\\text{accumulate}
}
$$

and, in the context of antiderivatives:

$$
\\boxed{
\\int f(x)\\,dx=F(x)+C
\\iff
F'(x)=f(x)
}
$$

Integration and differentiation are, in many respects, inverse operations.
`;function o(){let{locale:o}=t();return e(n,{id:`integration`,content:{es:r,ca:i,en:a}[o]})}export{o as default};