import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-d08MTCHk.js";import{t as n}from"./TopicPage-BLzDn4N1.js";var r=`# Notación matemática

La matemática utiliza símbolos y convenciones para expresar ideas de forma precisa y compacta. Esta notación permite escribir operaciones, relaciones, conjuntos, funciones, límites, derivadas, integrales y muchas otras estructuras.

Conocer los símbolos no consiste solamente en memorizar su significado. También es importante saber **cómo se leen, cuándo se utilizan y qué información representan**.

---

## 1. Operaciones básicas

Los símbolos más habituales son:

| Símbolo   | Significado           | Ejemplo           |
| --------- | --------------------- | ----------------- |
| $+$       | Suma                  | $a+b$             |
| $-$       | Resta                 | $a-b$             |
| $\\cdot$   | Multiplicación        | $a\\cdot b$        |
| $\\times$  | Multiplicación        | $a\\times b$       |
| $/$       | División              | $a/b$             |
| $=$       | Igualdad              | $a=b$             |
| $\\neq$    | Distinto de           | $a\\neq b$         |
| $\\approx$ | Aproximadamente igual | $\\pi\\approx3.14$  |
| $\\pm$     | Más o menos           | $x=\\pm2$          |
| $\\mp$     | Menos o más           | $a\\pm b,\\ a\\mp b$ |
| $\\%$      | Porcentaje            | $25\\%$            |
| $\\infty$  | Infinito              | $x\\to\\infty$      |

La multiplicación suele omitirse cuando no existe riesgo de confusión:

$$
3\\cdot x=3x
$$

$$
a\\cdot b=ab
$$

---

## 2. Comparaciones

Estos símbolos permiten comparar cantidades:

| Símbolo | Significado       |
| ------- | ----------------- |
| $<$     | Menor que         |
| $>$     | Mayor que         |
| $\\leq$  | Menor o igual que |
| $\\geq$  | Mayor o igual que |
| $\\ll$   | Mucho menor que   |
| $\\gg$   | Mucho mayor que   |

Por ejemplo:

$$
2<5
$$

significa que 2 es menor que 5.

Mientras que:

$$
x\\geq3
$$

significa que $x$ puede ser 3 o cualquier número mayor.

---

## 3. Igualdad, equivalencia y aproximación

No todos los símbolos parecidos a $=$ significan exactamente lo mismo.

### Igualdad

$$
a=b
$$

Los dos valores son exactamente iguales.

### Aproximación

$$
a\\approx b
$$

Los valores son aproximadamente iguales.

Por ejemplo:

$$
\\pi\\approx3.14159
$$

### Identidad

$$
(a+b)^2\\equiv a^2+2ab+b^2
$$

El símbolo $\\equiv$ puede utilizarse para indicar una identidad, es decir, una igualdad que se cumple para todos los valores permitidos de las variables.

### Congruencia

En teoría de números:

$$
a\\equiv b\\pmod n
$$

significa que $a$ y $b$ dejan el mismo resto al dividirlos entre $n$.

---

# 4. Conjuntos numéricos

Los principales conjuntos numéricos se representan mediante letras especiales:

| Símbolo      | Conjunto   |
| ------------ | ---------- |
| $\\mathbb{N}$ | Naturales  |
| $\\mathbb{Z}$ | Enteros    |
| $\\mathbb{Q}$ | Racionales |
| $\\mathbb{R}$ | Reales     |
| $\\mathbb{C}$ | Complejos  |

Existe una relación de inclusión:

$$
\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}\\subset\\mathbb{C}
$$

Por ejemplo:

$$
3\\in\\mathbb{N}
$$

$$
-2\\in\\mathbb{Z}
$$

$$
\\frac12\\in\\mathbb{Q}
$$

$$
\\sqrt2\\in\\mathbb{R}
$$

$$
i\\in\\mathbb{C}
$$

> La definición de $\\mathbb N$ puede variar: algunas convenciones incluyen el $0$ y otras empiezan en $1$.

---

# 5. Pertenencia a conjuntos

Los símbolos fundamentales son:

| Símbolo       | Significado              |
| ------------- | ------------------------ |
| $\\in$         | Pertenece a              |
| $\\notin$      | No pertenece a           |
| $\\subset$     | Es subconjunto de        |
| $\\subseteq$   | Es subconjunto o igual   |
| $\\supset$     | Es superconjunto de      |
| $\\supseteq$   | Es superconjunto o igual |
| $\\varnothing$ | Conjunto vacío           |

Por ejemplo:

$$
3\\in\\mathbb{N}
$$

pero:

$$
-3\\notin\\mathbb{N}
$$

Si todos los elementos de $A$ pertenecen también a $B$:

$$
A\\subseteq B
$$

---

# 6. Operaciones con conjuntos

### Unión

$$
A\\cup B
$$

Contiene los elementos que pertenecen a $A$, a $B$ o a ambos.

### Intersección

$$
A\\cap B
$$

Contiene los elementos comunes a ambos conjuntos.

### Diferencia

$$
A\\setminus B
$$

Contiene los elementos de $A$ que no pertenecen a $B$.

### Complementario

$$
A^c
$$

Representa los elementos que no pertenecen a $A$ dentro del conjunto universal considerado.

### Producto cartesiano

$$
A\\times B
$$

Es el conjunto de pares ordenados:

$$
A\\times B=\\{(a,b):a\\in A,\\ b\\in B\\}
$$

---

# 7. Intervalos

Los intervalos permiten representar conjuntos de números reales.

### Intervalo abierto

$$
(a,b)
$$

Significa:

$$
a<x<b
$$

Los extremos no están incluidos.

### Intervalo cerrado

$$
[a,b]
$$

Significa:

$$
a\\leq x\\leq b
$$

Los extremos están incluidos.

### Intervalos semiabiertos

$$
[a,b)
$$

significa:

$$
a\\leq x<b
$$

Mientras que:

$$
(a,b]
$$

significa:

$$
a<x\\leq b
$$

También aparecen intervalos infinitos:

$$
(-\\infty,a)
$$

$$
[a,\\infty)
$$

El infinito nunca se incluye como extremo de un intervalo.

---

# 8. Potencias

Una potencia tiene la forma:

$$
a^n
$$

donde:

- $a$ es la base;
- $n$ es el exponente.

Por ejemplo:

$$
2^3=8
$$

### Exponente cero

$$
a^0=1
$$

para $a\\neq0$.

### Exponente negativo

$$
a^{-n}=\\frac{1}{a^n}
$$

Por ejemplo:

$$
2^{-3}=\\frac18
$$

### Exponente fraccionario

$$
a^{1/n}=\\sqrt[n]{a}
$$

Por tanto:

$$
a^{m/n}=\\sqrt[n]{a^m}
$$

---

# 9. Raíces

El símbolo:

$$
\\sqrt{x}
$$

representa la raíz cuadrada.

También existen raíces de otros órdenes:

$$
\\sqrt[3]{x}
$$

$$
\\sqrt[n]{x}
$$

La relación con las potencias es:

$$
\\sqrt[n]{x}=x^{1/n}
$$

---

# 10. Valor absoluto

El valor absoluto se representa mediante barras:

$$
|x|
$$

Representa la distancia de $x$ al cero.

Por ejemplo:

$$
|5|=5
$$

$$
|-5|=5
$$

Formalmente:

$$
|x|=
\\begin{cases}
x & x\\geq0\\\\
-x & x<0
\\end{cases}
$$

El símbolo también puede tener otros significados dependiendo del contexto. Por ejemplo, para una matriz $A$, puede representar su determinante:

$$
|A|
$$

---

# 11. Factorial

El factorial se representa mediante:

$$
!
$$

Para un entero no negativo:

$$
n!=n(n-1)(n-2)\\cdots2\\cdot1
$$

Por ejemplo:

$$
5!=5\\cdot4\\cdot3\\cdot2\\cdot1=120
$$

Por convenio:

$$
0!=1
$$

El factorial aparece especialmente en combinatoria, probabilidad y series.

---

# 12. Sumatorios

El símbolo de sumatorio es:

$$
\\sum
$$

Permite representar una suma de muchos términos de forma compacta.

Por ejemplo:

$$
\\sum_{i=1}^{5}i
$$

significa:

$$
1+2+3+4+5
$$

En:

$$
\\sum_{i=1}^{n}a_i
$$

tenemos:

- $\\sum$: símbolo de sumatorio;
- $i$: índice;
- $1$: límite inferior;
- $n$: límite superior;
- $a_i$: término que se suma.

Una fórmula conocida es:

$$
\\sum_{i=1}^{n}i=\\frac{n(n+1)}{2}
$$

También pueden utilizarse varios índices:

$$
\\sum_{i=1}^{n}\\sum_{j=1}^{m}a_{ij}
$$

---

# 13. Productorios

El productorío es el equivalente multiplicativo del sumatorio.

Su símbolo es:

$$
\\prod
$$

Por ejemplo:

$$
\\prod_{i=1}^{5}i
$$

significa:

$$
1\\cdot2\\cdot3\\cdot4\\cdot5
$$

Por tanto:

$$
\\prod_{i=1}^{n}i=n!
$$

Los productorios aparecen en combinatoria, teoría de números, probabilidad y análisis matemático.

---

# 14. Combinaciones

El coeficiente binomial se representa como:

$$
\\binom{n}{k}
$$

Se lee «$n$ sobre $k$».

Su fórmula es:

$$
\\binom{n}{k}
=

\\frac{n!}{k!(n-k)!}
$$

Aparece, entre otros lugares, en el desarrollo del binomio:

$$
(a+b)^n
=

\\sum_{k=0}^{n}
\\binom{n}{k}a^{n-k}b^k
$$

---

# 15. Funciones

Una función puede escribirse como:

$$
f:A\\to B
$$

Esto indica que $f$ transforma elementos de $A$ en elementos de $B$.

Por ejemplo:

$$
f(x)=x^2
$$

En:

$$
f:A\\to B
$$

- $A$ es el dominio;
- $B$ es el codominio;
- $f(x)$ es el valor de la función en $x$.

También puede escribirse:

$$
x\\mapsto x^2
$$

que se lee «$x$ se transforma en $x^2$».

---

# 16. Imagen y preimagen

Si:

$$
f(x)=x^2
$$

entonces:

$$
f(3)=9
$$

El número $9$ es la imagen de $3$.

La preimagen de $9$ contiene los valores que se transforman en $9$:

$$
f^{-1}(\\{9\\})=\\{-3,3\\}
$$

No debe confundirse $f^{-1}$ con $1/f$. En general, $f^{-1}$ representa la función inversa cuando esta existe.

---

# 17. Composición de funciones

La composición se representa mediante:

$$
(f\\circ g)(x)
$$

y significa:

$$
(f\\circ g)(x)=f(g(x))
$$

Primero se aplica $g$ y después $f$.

---

# 18. Funciones inyectivas, sobreyectivas y biyectivas

Una función puede tener diferentes propiedades.

### Inyectiva

Elementos diferentes del dominio tienen imágenes diferentes.

### Sobreyectiva

Todo elemento del codominio es imagen de al menos un elemento del dominio.

### Biyectiva

Es simultáneamente inyectiva y sobreyectiva.

Las funciones biyectivas tienen función inversa.

---

# 19. Límites

El límite se representa mediante:

$$
\\lim_{x\\to a}f(x)
$$

Se lee:

«límite de $f(x)$ cuando $x$ tiende a $a$».

Por ejemplo:

$$
\\lim_{x\\to2}(x+3)=5
$$

El límite describe el comportamiento de una función cuando la variable se aproxima a un determinado valor.

---

# 20. Límites laterales

Podemos aproximarnos a un punto desde la izquierda:

$$
\\lim_{x\\to a^-}f(x)
$$

o desde la derecha:

$$
\\lim_{x\\to a^+}f(x)
$$

Para que exista el límite bilateral finito, normalmente deben coincidir:

$$
\\lim_{x\\to a^-}f(x)
=

\\lim_{x\\to a^+}f(x)
$$

---

# 21. Límites en el infinito

También podemos estudiar qué ocurre cuando $x$ crece indefinidamente:

$$
\\lim_{x\\to\\infty}f(x)
$$

o cuando disminuye indefinidamente:

$$
\\lim_{x\\to-\\infty}f(x)
$$

También pueden aparecer límites infinitos:

$$
\\lim_{x\\to a}f(x)=\\infty
$$

Estos conceptos son fundamentales para estudiar las asíntotas.

---

# 22. Derivadas

La derivada puede escribirse de varias formas:

$$
f'(x)
$$

$$
\\frac{df}{dx}
$$

$$
\\frac{dy}{dx}
$$

Todas estas notaciones están relacionadas con la tasa de variación de una función.

La segunda derivada puede escribirse:

$$
f''(x)
$$

o:

$$
\\frac{d^2f}{dx^2}
$$

Las derivadas de orden superior pueden escribirse como:

$$
f^{(n)}(x)
$$

---

# 23. Derivadas parciales

Cuando una función depende de varias variables se utilizan derivadas parciales.

Por ejemplo:

$$
f(x,y)
$$

Su derivada parcial respecto de $x$ es:

$$
\\frac{\\partial f}{\\partial x}
$$

y respecto de $y$:

$$
\\frac{\\partial f}{\\partial y}
$$

El símbolo:

$$
\\partial
$$

se utiliza para indicar una derivada parcial.

---

# 24. Integrales

La integral indefinida se representa mediante:

$$
\\int f(x)\\,dx
$$

El símbolo $dx$ indica la variable respecto de la cual se integra.

Una integral definida tiene límites:

$$
\\int_a^b f(x)\\,dx
$$

donde $a$ es el límite inferior y $b$ el límite superior.

También existen integrales múltiples:

$$
\\iint
$$

$$
\\iiint
$$

y la integral de línea:

$$
\\oint
$$

---

# 25. Sucesiones y series

Una sucesión puede escribirse:

$$
(a_n)_{n=1}^{\\infty}
$$

donde $a_n$ representa el término de índice $n$.

Una serie es una suma de términos de una sucesión:

$$
\\sum_{n=1}^{\\infty}a_n
$$

Una serie puede ser convergente o divergente.

Por ejemplo, la serie geométrica:

$$
\\sum_{n=0}^{\\infty}r^n
$$

converge cuando:

$$
|r|<1
$$

y entonces:

$$
\\sum_{n=0}^{\\infty}r^n
=

\\frac{1}{1-r}
$$

---

# 26. Lógica matemática

La lógica utiliza símbolos para representar proposiciones y relaciones lógicas.

| Símbolo           | Significado     |
| ----------------- | --------------- |
| $\\neg$            | No / negación   |
| $\\land$           | Y               |
| $\\lor$            | O               |
| $\\Rightarrow$     | Implica         |
| $\\Leftrightarrow$ | Si y solo si    |
| $\\forall$         | Para todo       |
| $\\exists$         | Existe          |
| $\\nexists$        | No existe       |
| $\\exists!$        | Existe un único |

Por ejemplo:

$$
\\forall x\\in\\mathbb{R},\\quad x^2\\geq0
$$

significa:

«Para todo número real $x$, $x^2$ es mayor o igual que cero».

---

# 27. Implicación y equivalencia

Es importante distinguir:

$$
A\\Rightarrow B
$$

de:

$$
A\\Leftrightarrow B
$$

La primera significa:

> Si $A$ es verdadera, entonces $B$ también lo es.

La segunda significa:

> $A$ es verdadera si y solo si $B$ es verdadera.

Por ejemplo:

$$
x=2\\Rightarrow x^2=4
$$

pero:

$$
x^2=4\\Leftrightarrow x=\\pm2
$$

---

# 28. Cuantificadores

El cuantificador universal:

$$
\\forall
$$

significa «para todo».

El cuantificador existencial:

$$
\\exists
$$

significa «existe al menos uno».

Por ejemplo:

$$
\\exists x\\in\\mathbb{R}:x^2=4
$$

significa que existe al menos un número real cuyo cuadrado es 4.

---

# 29. Vectores

Un vector puede representarse como:

$$
\\vec v
$$

o mediante sus componentes:

$$
\\vec v=
\\begin{pmatrix}
v_1\\\\
v_2
\\end{pmatrix}
$$

La norma de un vector se representa mediante:

$$
\\|\\vec v\\|
$$

El producto escalar:

$$
\\vec u\\cdot\\vec v
$$

y, en tres dimensiones, el producto vectorial:

$$
\\vec u\\times\\vec v
$$

---

# 30. Matrices

Una matriz puede escribirse:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

Algunas notaciones habituales son:

| Símbolo                  | Significado       |
| ------------------------ | ----------------- |
| $A^T$                    | Matriz traspuesta |
| $A^{-1}$                 | Matriz inversa    |
| $\\det(A)$                | Determinante      |
| $\\operatorname{rank}(A)$ | Rango             |
| $I$                      | Matriz identidad  |
| $0$                      | Matriz nula       |

---

# 31. Números complejos

Un número complejo se escribe:

$$
z=a+bi
$$

donde:

$$
i^2=-1
$$

La parte real:

$$
\\operatorname{Re}(z)
$$

La parte imaginaria:

$$
\\operatorname{Im}(z)
$$

El conjugado:

$$
\\overline z
$$

El módulo:

$$
|z|
$$

Un número complejo también puede escribirse en forma polar:

$$
z=re^{i\\theta}
$$

---

# 32. Geometría

Algunos símbolos habituales en geometría son:

| Símbolo     | Significado   |
| ----------- | ------------- |
| $\\angle$    | Ángulo        |
| $\\perp$     | Perpendicular |
| $\\parallel$ | Paralelo      |
| $\\triangle$ | Triángulo     |
| $\\cong$     | Congruente    |
| $\\sim$      | Semejante     |

Por ejemplo:

$$
AB\\parallel CD
$$

significa que las rectas $AB$ y $CD$ son paralelas.

Mientras que:

$$
AB\\perp CD
$$

indica que son perpendiculares.

---

# 33. Probabilidad

La probabilidad de un suceso $A$ se representa mediante:

$$
P(A)
$$

La probabilidad condicionada:

$$
P(A\\mid B)
$$

La intersección:

$$
P(A\\cap B)
$$

La unión:

$$
P(A\\cup B)
$$

El complementario:

$$
P(A^c)
$$

---

# 34. Estadística

Algunas letras aparecen constantemente en estadística:

| Símbolo                   | Significado habitual            |
| ------------------------- | ------------------------------- |
| $\\mu$                     | Media poblacional               |
| $\\bar{x}$                 | Media muestral                  |
| $\\sigma$                  | Desviación estándar poblacional |
| $s$                       | Desviación estándar muestral    |
| $\\sigma^2$                | Varianza poblacional            |
| $s^2$                     | Varianza muestral               |
| $\\operatorname{Var}(X)$   | Varianza                        |
| $E(X)$                    | Esperanza matemática            |
| $\\operatorname{Cov}(X,Y)$ | Covarianza                      |

La varianza puede expresarse como:

$$
\\operatorname{Var}(X)
=

E(X^2)-[E(X)]^2
$$

---

# 35. Aproximaciones y comportamiento asintótico

El símbolo:

$$
\\sim
$$

puede indicar que dos expresiones son asintóticamente equivalentes:

$$
f(x)\\sim g(x)
$$

cuando:

$$
\\lim_{x\\to a}\\frac{f(x)}{g(x)}=1
$$

En análisis y ciencias de la computación también aparecen:

$$
O(n)
$$

$$
o(n)
$$

$$
\\Theta(n)
$$

Estas notaciones permiten describir el crecimiento de funciones.

---

# 36. Letras habituales

En matemáticas determinadas letras aparecen frecuentemente con significados convencionales.

| Símbolo   | Uso habitual                           |
| --------- | -------------------------------------- |
| $x,y,z$   | Variables                              |
| $a,b,c$   | Constantes o parámetros                |
| $n,m,k$   | Enteros o índices                      |
| $i,j$     | Índices                                |
| $f,g,h$   | Funciones                              |
| $A,B,C$   | Conjuntos, matrices u objetos          |
| $P,Q$     | Proposiciones, puntos o probabilidades |
| $r$       | Radio o razón                          |
| $t$       | Tiempo o parámetro                     |
| $\\lambda$ | Parámetro o valor propio               |
| $\\mu$     | Media o parámetro                      |
| $\\sigma$  | Desviación estándar                    |

El significado exacto siempre depende del contexto.

---

# 37. Cómo leer una expresión matemática

Una expresión puede contener varios niveles de información.

Por ejemplo:

$$
\\sum_{i=1}^{n} i^2
$$

puede leerse como:

> «Sumatorio desde $i=1$ hasta $n$ de $i$ al cuadrado».

La misma expresión significa:

$$
1^2+2^2+3^2+\\cdots+n^2
$$

Otro ejemplo:

$$
\\lim_{x\\to0}\\frac{\\sin x}{x}=1
$$

se lee:

> «El límite cuando $x$ tiende a cero de seno de $x$ dividido entre $x$ es uno».

---

# 38. Símbolos que conviene reconocer

Esta tabla resume algunos de los símbolos más importantes:

| Símbolo                 | Concepto              |
| ----------------------- | --------------------- |
| $=$                     | Igualdad              |
| $\\neq$                  | Desigualdad           |
| $\\approx$               | Aproximación          |
| $\\pm$                   | Más o menos           |
| $<,>$                   | Comparación           |
| $\\leq,\\geq$             | Comparación inclusiva |
| $\\in$                   | Pertenencia           |
| $\\subseteq$             | Inclusión             |
| $\\cup$                  | Unión                 |
| $\\cap$                  | Intersección          |
| $\\varnothing$           | Conjunto vacío        |
| $\\infty$                | Infinito              |
| $\\sqrt{}$               | Raíz                  |
| $                       | x                     | $   | Valor absoluto |
| $n!$                    | Factorial             |
| $\\sum$                  | Sumatorio             |
| $\\prod$                 | Productorio           |
| $\\binom nk$             | Coeficiente binomial  |
| $f(x)$                  | Función               |
| $f^{-1}$                | Función inversa       |
| $\\circ$                 | Composición           |
| $\\lim$                  | Límite                |
| $f'$                    | Derivada              |
| $\\partial$              | Derivada parcial      |
| $\\int$                  | Integral              |
| $\\iint$                 | Integral doble        |
| $\\oint$                 | Integral de contorno  |
| $\\forall$               | Para todo             |
| $\\exists$               | Existe                |
| $\\Rightarrow$           | Implicación           |
| $\\Leftrightarrow$       | Equivalencia          |
| $\\mathbb N$             | Naturales             |
| $\\mathbb Z$             | Enteros               |
| $\\mathbb Q$             | Racionales            |
| $\\mathbb R$             | Reales                |
| $\\mathbb C$             | Complejos             |
| $\\vec v$                | Vector                |
| $\\|v\\|$                 | Norma                 |
| $A^T$                   | Traspuesta            |
| $A^{-1}$                | Inversa               |
| $\\det(A)$               | Determinante          |
| $P(A)$                  | Probabilidad          |
| $E(X)$                  | Esperanza             |
| $\\operatorname{Var}(X)$ | Varianza              |

---

# 39. Idea fundamental

La notación matemática permite expresar estructuras complejas de manera compacta.

Por ejemplo:

$$
\\sum_{i=1}^{n}a_i
$$

es mucho más compacto que escribir:

$$
a_1+a_2+a_3+\\cdots+a_n
$$

De la misma manera:

$$
\\lim_{x\\to a}f(x)
$$

resume una idea completa sobre el comportamiento de una función cerca de $a$.

Aprender matemáticas implica tanto comprender los conceptos como aprender a **leer y escribir su lenguaje simbólico**.
`,i=`# Notació matemàtica

Les matemàtiques utilitzen símbols i convencions per expressar idees de manera precisa i compacta. Aquesta notació permet escriure operacions, relacions, conjunts, funcions, límits, derivades, integrals i moltes altres estructures.

Conèixer els símbols no consisteix només a memoritzar-ne el significat. També és important saber **com es llegeixen, quan s'utilitzen i quina informació representen**.

---

## 1. Operacions bàsiques

| Símbol    | Significat           | Exemple           |
| --------- | -------------------- | ----------------- |
| $+$       | Suma                 | $a+b$             |
| $-$       | Resta                | $a-b$             |
| $\\cdot$   | Multiplicació        | $a\\cdot b$        |
| $\\times$  | Multiplicació        | $a\\times b$       |
| $/$       | Divisió              | $a/b$             |
| $=$       | Igualtat             | $a=b$             |
| $\\neq$    | Diferent de          | $a\\neq b$         |
| $\\approx$ | Aproximadament igual | $\\pi\\approx3.14$  |
| $\\pm$     | Més o menys          | $x=\\pm2$          |
| $\\mp$     | Menys o més          | $a\\pm b,\\ a\\mp b$ |
| $\\%$      | Percentatge          | $25\\%$            |
| $\\infty$  | Infinit              | $x\\to\\infty$      |

La multiplicació sovint s'omet quan no hi ha risc de confusió:

$$
3\\cdot x=3x
$$

$$
a\\cdot b=ab
$$

---

## 2. Comparacions

| Símbol | Significat        |
| ------ | ----------------- |
| $<$    | Menor que         |
| $>$    | Major que         |
| $\\leq$ | Menor o igual que |
| $\\geq$ | Major o igual que |
| $\\ll$  | Molt menor que    |
| $\\gg$  | Molt major que    |

Per exemple:

$$
x\\geq3
$$

significa que $x$ pot ser 3 o qualsevol nombre més gran.

---

## 3. Igualtat, equivalència i aproximació

### Igualtat

$$
a=b
$$

Els dos valors són exactament iguals.

### Aproximació

$$
a\\approx b
$$

Els valors són aproximadament iguals.

Per exemple:

$$
\\pi\\approx3.14159
$$

### Identitat

$$
(a+b)^2\\equiv a^2+2ab+b^2
$$

El símbol $\\equiv$ pot indicar una identitat, és a dir, una igualtat que es compleix per a tots els valors permesos de les variables.

### Congruència

En teoria de nombres:

$$
a\\equiv b\\pmod n
$$

significa que $a$ i $b$ deixen el mateix residu quan es divideixen entre $n$.

---

## 4. Conjunts numèrics

| Símbol       | Conjunt   |
| ------------ | --------- |
| $\\mathbb{N}$ | Naturals  |
| $\\mathbb{Z}$ | Enters    |
| $\\mathbb{Q}$ | Racionals |
| $\\mathbb{R}$ | Reals     |
| $\\mathbb{C}$ | Complexos |

La relació d'inclusió és:

$$
\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}\\subset\\mathbb{C}
$$

Per exemple:

$$
3\\in\\mathbb{N}
$$

$$
-2\\in\\mathbb{Z}
$$

$$
\\frac12\\in\\mathbb{Q}
$$

$$
\\sqrt2\\in\\mathbb{R}
$$

$$
i\\in\\mathbb{C}
$$

> La definició de $\\mathbb N$ pot variar: algunes convencions inclouen el $0$ i d'altres comencen per $1$.

---

## 5. Pertinença a conjunts

| Símbol        | Significat               |
| ------------- | ------------------------ |
| $\\in$         | Pertany a                |
| $\\notin$      | No pertany a             |
| $\\subset$     | És subconjunt propi de   |
| $\\subseteq$   | És subconjunt de         |
| $\\supset$     | És superconjunt propi de |
| $\\supseteq$   | És superconjunt de       |
| $\\varnothing$ | Conjunt buit             |

Per exemple:

$$
3\\in\\mathbb{N}
$$

però:

$$
-3\\notin\\mathbb{N}
$$

Si tots els elements de $A$ també pertanyen a $B$:

$$
A\\subseteq B
$$

---

## 6. Operacions amb conjunts

### Unió

$$
A\\cup B
$$

Conté els elements que pertanyen a $A$, a $B$ o a tots dos.

### Intersecció

$$
A\\cap B
$$

Conté els elements comuns als dos conjunts.

### Diferència

$$
A\\setminus B
$$

Conté els elements d'$A$ que no pertanyen a $B$.

### Complementari

$$
A^c
$$

Representa els elements que no pertanyen a $A$ dins del conjunt universal considerat.

### Producte cartesià

$$
A\\times B
$$

És el conjunt de parells ordenats:

$$
A\\times B=\\{(a,b):a\\in A,\\ b\\in B\\}
$$

---

## 7. Intervals

Els intervals permeten representar conjunts de nombres reals.

### Interval obert

$$
(a,b)
$$

significa:

$$
a<x<b
$$

Els extrems no hi estan inclosos.

### Interval tancat

$$
[a,b]
$$

significa:

$$
a\\leq x\\leq b
$$

Els extrems hi estan inclosos.

### Intervals semioberts

$$
[a,b)
$$

significa:

$$
a\\leq x<b
$$

Mentre que:

$$
(a,b]
$$

significa:

$$
a<x\\leq b
$$

També apareixen intervals infinits:

$$
(-\\infty,a)
$$

$$
[a,\\infty)
$$

L'infinit mai no s'inclou com a extrem d'un interval.

---

## 8. Potències

Una potència té la forma:

$$
a^n
$$

on $a$ és la base i $n$ és l'exponent.

Per exemple:

$$
2^3=8
$$

### Exponent zero

$$
a^0=1
$$

per a $a\\neq0$.

### Exponent negatiu

$$
a^{-n}=\\frac{1}{a^n}
$$

### Exponent fraccionari

$$
a^{1/n}=\\sqrt[n]{a}
$$

Per tant:

$$
a^{m/n}=\\sqrt[n]{a^m}
$$

---

## 9. Arrels

El símbol:

$$
\\sqrt{x}
$$

representa l'arrel quadrada.

També existeixen arrels d'altres ordres:

$$
\\sqrt[3]{x}
$$

$$
\\sqrt[n]{x}
$$

La relació amb les potències és:

$$
\\sqrt[n]{x}=x^{1/n}
$$

---

## 10. Valor absolut

El valor absolut es representa mitjançant barres:

$$
|x|
$$

Representa la distància de $x$ al zero.

Per exemple:

$$
|5|=5
$$

$$
|-5|=5
$$

Formalment:

$$
|x|=
\\begin{cases}
x & x\\geq0\\\\
-x & x<0
\\end{cases}
$$

El mateix símbol pot tenir altres significats segons el context.

---

## 11. Factorial

El factorial es representa mitjançant:

$$
!
$$

Per a un enter no negatiu:

$$
n!=n(n-1)(n-2)\\cdots2\\cdot1
$$

Per exemple:

$$
5!=120
$$

Per conveni:

$$
0!=1
$$

---

## 12. Sumatoris

El símbol de sumatori és:

$$
\\sum
$$

Permet representar una suma de molts termes de manera compacta.

Per exemple:

$$
\\sum_{i=1}^{5}i
$$

significa:

$$
1+2+3+4+5
$$

En:

$$
\\sum_{i=1}^{n}a_i
$$

tenim:

- $\\sum$: símbol de sumatori;
- $i$: índex;
- $1$: límit inferior;
- $n$: límit superior;
- $a_i$: terme que se suma.

Una fórmula coneguda és:

$$
\\sum_{i=1}^{n}i=\\frac{n(n+1)}{2}
$$

També poden utilitzar-se diversos índexs:

$$
\\sum_{i=1}^{n}\\sum_{j=1}^{m}a_{ij}
$$

---

## 13. Productoris

El productori és l'equivalent multiplicatiu del sumatori.

El seu símbol és:

$$
\\prod
$$

Per exemple:

$$
\\prod_{i=1}^{5}i
$$

significa:

$$
1\\cdot2\\cdot3\\cdot4\\cdot5
$$

Per tant:

$$
\\prod_{i=1}^{n}i=n!
$$

---

## 14. Combinacions

El coeficient binomial es representa com:

$$
\\binom{n}{k}
$$

i es llegeix «$n$ sobre $k$».

La seva fórmula és:

$$
\\binom{n}{k}
=

\\frac{n!}{k!(n-k)!}
$$

Apareix, entre altres llocs, en el desenvolupament del binomi:

$$
(a+b)^n
=

\\sum_{k=0}^{n}
\\binom{n}{k}a^{n-k}b^k
$$

---

## 15. Funcions

Una funció pot escriure's:

$$
f:A\\to B
$$

Això indica que $f$ transforma elements d'$A$ en elements de $B$.

Per exemple:

$$
f(x)=x^2
$$

En:

$$
f:A\\to B
$$

- $A$ és el domini;
- $B$ és el codomini;
- $f(x)$ és el valor de la funció en $x$.

També pot escriure's:

$$
x\\mapsto x^2
$$

---

## 16. Imatge i antiimatge

Si:

$$
f(x)=x^2
$$

aleshores:

$$
f(3)=9
$$

El nombre $9$ és la imatge de $3$.

Les antiimatges de $9$ són:

$$
f^{-1}(\\{9\\})=\\{-3,3\\}
$$

No s'ha de confondre $f^{-1}$ amb $1/f$.

---

## 17. Composició de funcions

La composició es representa mitjançant:

$$
(f\\circ g)(x)
$$

i significa:

$$
(f\\circ g)(x)=f(g(x))
$$

Primer s'aplica $g$ i després $f$.

---

## 18. Funcions injectives, exhaustives i bijectives

Una funció pot tenir diferents propietats.

### Injectiva

Elements diferents del domini tenen imatges diferents.

### Exhaustiva o sobrejectiva

Tot element del codomini és imatge d'almenys un element del domini.

### Bijectiva

És simultàniament injectiva i exhaustiva.

Les funcions bijectives tenen funció inversa.

---

## 19. Límits

El límit es representa mitjançant:

$$
\\lim_{x\\to a}f(x)
$$

Es llegeix:

«límit de $f(x)$ quan $x$ tendeix a $a$».

Per exemple:

$$
\\lim_{x\\to2}(x+3)=5
$$

El límit descriu el comportament d'una funció quan la variable s'aproxima a un valor determinat.

---

## 20. Límits laterals

Podem aproximar-nos a un punt des de l'esquerra:

$$
\\lim_{x\\to a^-}f(x)
$$

o des de la dreta:

$$
\\lim_{x\\to a^+}f(x)
$$

Perquè existeixi el límit bilateral finit, normalment han de coincidir:

$$
\\lim_{x\\to a^-}f(x)
=

\\lim_{x\\to a^+}f(x)
$$

---

## 21. Límits a l'infinit

Podem estudiar què passa quan $x$ creix indefinidament:

$$
\\lim_{x\\to\\infty}f(x)
$$

o quan disminueix indefinidament:

$$
\\lim_{x\\to-\\infty}f(x)
$$

També poden aparèixer límits infinits:

$$
\\lim_{x\\to a}f(x)=\\infty
$$

Aquests conceptes són fonamentals per estudiar les asímptotes.

---

## 22. Derivades

La derivada pot escriure's de diverses maneres:

$$
f'(x)
$$

$$
\\frac{df}{dx}
$$

$$
\\frac{dy}{dx}
$$

La segona derivada pot escriure's:

$$
f''(x)
$$

o:

$$
\\frac{d^2f}{dx^2}
$$

Les derivades d'ordre superior poden escriure's:

$$
f^{(n)}(x)
$$

---

## 23. Derivades parcials

Quan una funció depèn de diverses variables s'utilitzen derivades parcials.

Per exemple:

$$
f(x,y)
$$

La derivada parcial respecte d'$x$ és:

$$
\\frac{\\partial f}{\\partial x}
$$

i respecte d'$y$:

$$
\\frac{\\partial f}{\\partial y}
$$

El símbol:

$$
\\partial
$$

indica una derivada parcial.

---

## 24. Integrals

La integral indefinida es representa:

$$
\\int f(x)\\,dx
$$

El símbol $dx$ indica la variable respecte de la qual s'integra.

Una integral definida té límits:

$$
\\int_a^b f(x)\\,dx
$$

També existeixen integrals múltiples:

$$
\\iint
$$

$$
\\iiint
$$

i integrals de contorn:

$$
\\oint
$$

---

## 25. Successions i sèries

Una successió pot escriure's:

$$
(a_n)_{n=1}^{\\infty}
$$

on $a_n$ representa el terme d'índex $n$.

Una sèrie és una suma de termes d'una successió:

$$
\\sum_{n=1}^{\\infty}a_n
$$

Una sèrie pot ser convergent o divergent.

Per exemple:

$$
\\sum_{n=0}^{\\infty}r^n
$$

convergeix quan:

$$
|r|<1
$$

i llavors:

$$
\\sum_{n=0}^{\\infty}r^n
=

\\frac{1}{1-r}
$$

---

## 26. Lògica matemàtica

| Símbol            | Significat       |
| ----------------- | ---------------- |
| $\\neg$            | No / negació     |
| $\\land$           | I                |
| $\\lor$            | O                |
| $\\Rightarrow$     | Implica          |
| $\\Leftrightarrow$ | Si i només si    |
| $\\forall$         | Per a tot        |
| $\\exists$         | Existeix         |
| $\\nexists$        | No existeix      |
| $\\exists!$        | Existeix un únic |

Per exemple:

$$
\\forall x\\in\\mathbb{R},\\quad x^2\\geq0
$$

significa:

«Per a tot nombre real $x$, $x^2$ és major o igual que zero».

---

## 27. Implicació i equivalència

És important distingir:

$$
A\\Rightarrow B
$$

de:

$$
A\\Leftrightarrow B
$$

La primera significa:

> Si $A$ és certa, llavors $B$ també ho és.

La segona significa:

> $A$ és certa si i només si $B$ és certa.

Per exemple:

$$
x=2\\Rightarrow x^2=4
$$

però:

$$
x^2=4\\Leftrightarrow x=\\pm2
$$

---

## 28. Quantificadors

El quantificador universal:

$$
\\forall
$$

significa «per a tot».

El quantificador existencial:

$$
\\exists
$$

significa «existeix almenys un».

Per exemple:

$$
\\exists x\\in\\mathbb{R}:x^2=4
$$

significa que existeix almenys un nombre real el quadrat del qual és 4.

---

## 29. Vectors

Un vector pot representar-se:

$$
\\vec v
$$

o mitjançant les seves components:

$$
\\vec v=
\\begin{pmatrix}
v_1\\\\
v_2
\\end{pmatrix}
$$

La norma d'un vector:

$$
\\|\\vec v\\|
$$

El producte escalar:

$$
\\vec u\\cdot\\vec v
$$

I, en tres dimensions, el producte vectorial:

$$
\\vec u\\times\\vec v
$$

---

## 30. Matrius

Una matriu pot escriure's:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

| Símbol                   | Significat         |
| ------------------------ | ------------------ |
| $A^T$                    | Matriu transposada |
| $A^{-1}$                 | Matriu inversa     |
| $\\det(A)$                | Determinant        |
| $\\operatorname{rank}(A)$ | Rang               |
| $I$                      | Matriu identitat   |
| $0$                      | Matriu nul·la      |

---

## 31. Nombres complexos

Un nombre complex s'escriu:

$$
z=a+bi
$$

on:

$$
i^2=-1
$$

La part real:

$$
\\operatorname{Re}(z)
$$

La part imaginària:

$$
\\operatorname{Im}(z)
$$

El conjugat:

$$
\\overline z
$$

El mòdul:

$$
|z|
$$

En forma polar:

$$
z=re^{i\\theta}
$$

---

## 32. Geometria

| Símbol      | Significat    |
| ----------- | ------------- |
| $\\angle$    | Angle         |
| $\\perp$     | Perpendicular |
| $\\parallel$ | Paral·lel     |
| $\\triangle$ | Triangle      |
| $\\cong$     | Congruent     |
| $\\sim$      | Semblant      |

Per exemple:

$$
AB\\parallel CD
$$

indica que les rectes són paral·leles.

---

## 33. Probabilitat

La probabilitat d'un esdeveniment $A$:

$$
P(A)
$$

Probabilitat condicionada:

$$
P(A\\mid B)
$$

Intersecció:

$$
P(A\\cap B)
$$

Unió:

$$
P(A\\cup B)
$$

Complementari:

$$
P(A^c)
$$

---

## 34. Estadística

| Símbol                    | Significat habitual             |
| ------------------------- | ------------------------------- |
| $\\mu$                     | Mitjana poblacional             |
| $\\bar{x}$                 | Mitjana mostral                 |
| $\\sigma$                  | Desviació estàndard poblacional |
| $s$                       | Desviació estàndard mostral     |
| $\\sigma^2$                | Variància poblacional           |
| $s^2$                     | Variància mostral               |
| $\\operatorname{Var}(X)$   | Variància                       |
| $E(X)$                    | Esperança matemàtica            |
| $\\operatorname{Cov}(X,Y)$ | Covariància                     |

---

## 35. Aproximacions i comportament asimptòtic

El símbol:

$$
\\sim
$$

pot indicar equivalència asimptòtica:

$$
f(x)\\sim g(x)
$$

quan:

$$
\\lim_{x\\to a}\\frac{f(x)}{g(x)}=1
$$

També apareixen:

$$
O(n)
$$

$$
o(n)
$$

$$
\\Theta(n)
$$

Aquestes notacions permeten descriure el creixement de funcions i són especialment importants en anàlisi d'algoritmes.

---

## 36. Lletres habituals

| Símbol    | Ús habitual                         |
| --------- | ----------------------------------- |
| $x,y,z$   | Variables                           |
| $a,b,c$   | Constants o paràmetres              |
| $n,m,k$   | Enters o índexs                     |
| $i,j$     | Índexs                              |
| $f,g,h$   | Funcions                            |
| $A,B,C$   | Conjunts, matrius o objectes        |
| $P,Q$     | Proposicions, punts o probabilitats |
| $r$       | Radi o raó                          |
| $t$       | Temps o paràmetre                   |
| $\\lambda$ | Paràmetre o valor propi             |
| $\\mu$     | Mitjana o paràmetre                 |
| $\\sigma$  | Desviació estàndard                 |

El significat exacte depèn sempre del context.

---

## 37. Com llegir una expressió matemàtica

Per exemple:

$$
\\sum_{i=1}^{n}i^2
$$

es pot llegir:

> «Sumatori des d'$i=1$ fins a $n$ d'$i$ al quadrat».

Aquesta expressió equival a:

$$
1^2+2^2+3^2+\\cdots+n^2
$$

Un altre exemple:

$$
\\lim_{x\\to0}\\frac{\\sin x}{x}=1
$$

es llegeix:

> «El límit quan $x$ tendeix a zero del sinus de $x$ dividit per $x$ és igual a u».

---

## 38. Símbols que convé reconèixer

| Símbol                  | Concepte             |
| ----------------------- | -------------------- |
| $=$                     | Igualtat             |
| $\\neq$                  | Desigualtat          |
| $\\approx$               | Aproximació          |
| $\\pm$                   | Més o menys          |
| $<,>$                   | Comparació           |
| $\\leq,\\geq$             | Comparació inclusiva |
| $\\in$                   | Pertinença           |
| $\\subseteq$             | Inclusió             |
| $\\cup$                  | Unió                 |
| $\\cap$                  | Intersecció          |
| $\\varnothing$           | Conjunt buit         |
| $\\infty$                | Infinit              |
| $\\sqrt{}$               | Arrel                |
| $                       | x                    | $   | Valor absolut |
| $n!$                    | Factorial            |
| $\\sum$                  | Sumatori             |
| $\\prod$                 | Productori           |
| $\\binom nk$             | Coeficient binomial  |
| $f(x)$                  | Funció               |
| $f^{-1}$                | Funció inversa       |
| $\\circ$                 | Composició           |
| $\\lim$                  | Límit                |
| $f'$                    | Derivada             |
| $\\partial$              | Derivada parcial     |
| $\\int$                  | Integral             |
| $\\iint$                 | Integral doble       |
| $\\oint$                 | Integral de contorn  |
| $\\forall$               | Per a tot            |
| $\\exists$               | Existeix             |
| $\\Rightarrow$           | Implicació           |
| $\\Leftrightarrow$       | Equivalència         |
| $\\mathbb N$             | Naturals             |
| $\\mathbb Z$             | Enters               |
| $\\mathbb Q$             | Racionals            |
| $\\mathbb R$             | Reals                |
| $\\mathbb C$             | Complexos            |
| $\\vec v$                | Vector               |
| $\\|v\\|$                 | Norma                |
| $A^T$                   | Transposada          |
| $A^{-1}$                | Inversa              |
| $\\det(A)$               | Determinant          |
| $P(A)$                  | Probabilitat         |
| $E(X)$                  | Esperança            |
| $\\operatorname{Var}(X)$ | Variància            |

---

## 39. Idea fonamental

La notació matemàtica permet expressar estructures complexes de manera compacta.

Per exemple:

$$
\\sum_{i=1}^{n}a_i
$$

és molt més compacte que escriure:

$$
a_1+a_2+a_3+\\cdots+a_n
$$

De la mateixa manera:

$$
\\lim_{x\\to a}f(x)
$$

resumeix una idea completa sobre el comportament d'una funció prop d'$a$.

Aprendre matemàtiques implica comprendre els conceptes i també aprendre a **llegir i escriure el seu llenguatge simbòlic**.
`,a=`# Mathematical notation

Mathematics uses symbols and conventions to express ideas precisely and compactly. This notation allows us to write operations, relations, sets, functions, limits, derivatives, integrals, and many other structures.

Learning mathematical notation is not only about memorizing symbols. It is also important to understand **how they are read, when they are used, and what information they represent**.

---

## 1. Basic operations

| Symbol    | Meaning             | Example           |
| --------- | ------------------- | ----------------- |
| $+$       | Addition            | $a+b$             |
| $-$       | Subtraction         | $a-b$             |
| $\\cdot$   | Multiplication      | $a\\cdot b$        |
| $\\times$  | Multiplication      | $a\\times b$       |
| $/$       | Division            | $a/b$             |
| $=$       | Equality            | $a=b$             |
| $\\neq$    | Not equal           | $a\\neq b$         |
| $\\approx$ | Approximately equal | $\\pi\\approx3.14$  |
| $\\pm$     | Plus or minus       | $x=\\pm2$          |
| $\\mp$     | Minus or plus       | $a\\pm b,\\ a\\mp b$ |
| $\\%$      | Percentage          | $25\\%$            |
| $\\infty$  | Infinity            | $x\\to\\infty$      |

Multiplication is often omitted when there is no risk of confusion:

$$
3\\cdot x=3x
$$

$$
a\\cdot b=ab
$$

---

## 2. Comparisons

| Symbol | Meaning                  |
| ------ | ------------------------ |
| $<$    | Less than                |
| $>$    | Greater than             |
| $\\leq$ | Less than or equal to    |
| $\\geq$ | Greater than or equal to |
| $\\ll$  | Much less than           |
| $\\gg$  | Much greater than        |

For example:

$$
x\\geq3
$$

means that $x$ can be 3 or any larger number.

---

## 3. Equality, equivalence, and approximation

### Equality

$$
a=b
$$

The two values are exactly equal.

### Approximation

$$
a\\approx b
$$

The values are approximately equal.

For example:

$$
\\pi\\approx3.14159
$$

### Identity

$$
(a+b)^2\\equiv a^2+2ab+b^2
$$

The symbol $\\equiv$ can indicate an identity, meaning an equality that holds for all allowed values of the variables.

### Congruence

In number theory:

$$
a\\equiv b\\pmod n
$$

means that $a$ and $b$ leave the same remainder when divided by $n$.

---

## 4. Number sets

| Symbol       | Set              |
| ------------ | ---------------- |
| $\\mathbb{N}$ | Natural numbers  |
| $\\mathbb{Z}$ | Integers         |
| $\\mathbb{Q}$ | Rational numbers |
| $\\mathbb{R}$ | Real numbers     |
| $\\mathbb{C}$ | Complex numbers  |

The inclusion relationship is:

$$
\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}\\subset\\mathbb{C}
$$

For example:

$$
3\\in\\mathbb{N}
$$

$$
-2\\in\\mathbb{Z}
$$

$$
\\frac12\\in\\mathbb{Q}
$$

$$
\\sqrt2\\in\\mathbb{R}
$$

$$
i\\in\\mathbb{C}
$$

> The definition of $\\mathbb N$ varies between conventions: some include $0$, while others start at $1$.

---

## 5. Set membership

| Symbol        | Meaning              |
| ------------- | -------------------- |
| $\\in$         | Is an element of     |
| $\\notin$      | Is not an element of |
| $\\subset$     | Proper subset        |
| $\\subseteq$   | Subset               |
| $\\supset$     | Proper superset      |
| $\\supseteq$   | Superset             |
| $\\varnothing$ | Empty set            |

For example:

$$
3\\in\\mathbb{N}
$$

but:

$$
-3\\notin\\mathbb{N}
$$

If every element of $A$ also belongs to $B$:

$$
A\\subseteq B
$$

---

## 6. Set operations

### Union

$$
A\\cup B
$$

Contains elements that belong to $A$, $B$, or both.

### Intersection

$$
A\\cap B
$$

Contains elements common to both sets.

### Difference

$$
A\\setminus B
$$

Contains elements of $A$ that do not belong to $B$.

### Complement

$$
A^c
$$

Represents elements that do not belong to $A$ within the relevant universal set.

### Cartesian product

$$
A\\times B
$$

Is the set of ordered pairs:

$$
A\\times B=\\{(a,b):a\\in A,\\ b\\in B\\}
$$

---

## 7. Intervals

Intervals represent sets of real numbers.

### Open interval

$$
(a,b)
$$

means:

$$
a<x<b
$$

The endpoints are not included.

### Closed interval

$$
[a,b]
$$

means:

$$
a\\leq x\\leq b
$$

The endpoints are included.

### Half-open intervals

$$
[a,b)
$$

means:

$$
a\\leq x<b
$$

while:

$$
(a,b]
$$

means:

$$
a<x\\leq b
$$

Infinite intervals include:

$$
(-\\infty,a)
$$

$$
[a,\\infty)
$$

Infinity is never included as an endpoint of an interval.

---

## 8. Powers

A power has the form:

$$
a^n
$$

where $a$ is the base and $n$ is the exponent.

For example:

$$
2^3=8
$$

### Zero exponent

$$
a^0=1
$$

for $a\\neq0$.

### Negative exponent

$$
a^{-n}=\\frac{1}{a^n}
$$

### Fractional exponent

$$
a^{1/n}=\\sqrt[n]{a}
$$

Therefore:

$$
a^{m/n}=\\sqrt[n]{a^m}
$$

---

## 9. Roots

The symbol:

$$
\\sqrt{x}
$$

represents the square root.

Other roots include:

$$
\\sqrt[3]{x}
$$

$$
\\sqrt[n]{x}
$$

The relationship with powers is:

$$
\\sqrt[n]{x}=x^{1/n}
$$

---

## 10. Absolute value

Absolute value is represented by vertical bars:

$$
|x|
$$

It represents the distance from $x$ to zero.

For example:

$$
|5|=5
$$

$$
|-5|=5
$$

Formally:

$$
|x|=
\\begin{cases}
x & x\\geq0\\\\
-x & x<0
\\end{cases}
$$

The same notation can have other meanings depending on context.

---

## 11. Factorial

The factorial is represented by:

$$
!
$$

For a non-negative integer:

$$
n!=n(n-1)(n-2)\\cdots2\\cdot1
$$

For example:

$$
5!=120
$$

By convention:

$$
0!=1
$$

---

## 12. Summation

The summation symbol is:

$$
\\sum
$$

It represents a sum of many terms compactly.

For example:

$$
\\sum_{i=1}^{5}i
$$

means:

$$
1+2+3+4+5
$$

In:

$$
\\sum_{i=1}^{n}a_i
$$

we have:

- $\\sum$: summation symbol;
- $i$: index;
- $1$: lower bound;
- $n$: upper bound;
- $a_i$: term being added.

A well-known formula is:

$$
\\sum_{i=1}^{n}i=\\frac{n(n+1)}{2}
$$

Multiple indices can also be used:

$$
\\sum_{i=1}^{n}\\sum_{j=1}^{m}a_{ij}
$$

---

## 13. Products

The product notation is the multiplicative counterpart of summation.

Its symbol is:

$$
\\prod
$$

For example:

$$
\\prod_{i=1}^{5}i
$$

means:

$$
1\\cdot2\\cdot3\\cdot4\\cdot5
$$

Therefore:

$$
\\prod_{i=1}^{n}i=n!
$$

---

## 14. Combinations

The binomial coefficient is written as:

$$
\\binom{n}{k}
$$

It is read as «$n$ choose $k$».

Its formula is:

$$
\\binom{n}{k}
=

\\frac{n!}{k!(n-k)!}
$$

It appears, among other places, in the binomial theorem:

$$
(a+b)^n
=

\\sum_{k=0}^{n}
\\binom{n}{k}a^{n-k}b^k
$$

---

## 15. Functions

A function can be written as:

$$
f:A\\to B
$$

This indicates that $f$ maps elements of $A$ to elements of $B$.

For example:

$$
f(x)=x^2
$$

In:

$$
f:A\\to B
$$

- $A$ is the domain;
- $B$ is the codomain;
- $f(x)$ is the value of the function at $x$.

It can also be written:

$$
x\\mapsto x^2
$$

---

## 16. Image and preimage

If:

$$
f(x)=x^2
$$

then:

$$
f(3)=9
$$

The number $9$ is the image of $3$.

The preimage of $9$ is:

$$
f^{-1}(\\{9\\})=\\{-3,3\\}
$$

Do not confuse $f^{-1}$ with $1/f$. In general, $f^{-1}$ represents the inverse function when one exists.

---

## 17. Function composition

Composition is written:

$$
(f\\circ g)(x)
$$

and means:

$$
(f\\circ g)(x)=f(g(x))
$$

First $g$ is applied, then $f$.

---

## 18. Injective, surjective, and bijective functions

A function can have different properties.

### Injective

Different elements of the domain have different images.

### Surjective

Every element of the codomain is the image of at least one element of the domain.

### Bijective

It is both injective and surjective.

Bijective functions have inverse functions.

---

## 19. Limits

A limit is written:

$$
\\lim_{x\\to a}f(x)
$$

It is read as:

«the limit of $f(x)$ as $x$ approaches $a$».

For example:

$$
\\lim_{x\\to2}(x+3)=5
$$

A limit describes the behavior of a function as the variable approaches a particular value.

---

## 20. One-sided limits

We can approach a point from the left:

$$
\\lim_{x\\to a^-}f(x)
$$

or from the right:

$$
\\lim_{x\\to a^+}f(x)
$$

For a finite two-sided limit to exist, the two one-sided limits must normally agree:

$$
\\lim_{x\\to a^-}f(x)
=

\\lim_{x\\to a^+}f(x)
$$

---

## 21. Limits at infinity

We can study what happens as $x$ grows without bound:

$$
\\lim_{x\\to\\infty}f(x)
$$

or decreases without bound:

$$
\\lim_{x\\to-\\infty}f(x)
$$

Infinite limits can also occur:

$$
\\lim_{x\\to a}f(x)=\\infty
$$

These concepts are fundamental when studying asymptotes.

---

## 22. Derivatives

A derivative can be written in several ways:

$$
f'(x)
$$

$$
\\frac{df}{dx}
$$

$$
\\frac{dy}{dx}
$$

The second derivative can be written:

$$
f''(x)
$$

or:

$$
\\frac{d^2f}{dx^2}
$$

Higher-order derivatives can be written:

$$
f^{(n)}(x)
$$

---

## 23. Partial derivatives

When a function depends on several variables, partial derivatives are used.

For example:

$$
f(x,y)
$$

The partial derivative with respect to $x$ is:

$$
\\frac{\\partial f}{\\partial x}
$$

and with respect to $y$:

$$
\\frac{\\partial f}{\\partial y}
$$

The symbol:

$$
\\partial
$$

indicates a partial derivative.

---

## 24. Integrals

An indefinite integral is written:

$$
\\int f(x)\\,dx
$$

The $dx$ indicates the variable with respect to which we integrate.

A definite integral has bounds:

$$
\\int_a^b f(x)\\,dx
$$

Multiple integrals include:

$$
\\iint
$$

$$
\\iiint
$$

and contour integrals:

$$
\\oint
$$

---

## 25. Sequences and series

A sequence can be written:

$$
(a_n)_{n=1}^{\\infty}
$$

where $a_n$ represents the term with index $n$.

A series is a sum of terms from a sequence:

$$
\\sum_{n=1}^{\\infty}a_n
$$

A series can be convergent or divergent.

For example:

$$
\\sum_{n=0}^{\\infty}r^n
$$

converges when:

$$
|r|<1
$$

and then:

$$
\\sum_{n=0}^{\\infty}r^n
=

\\frac{1}{1-r}
$$

---

## 26. Mathematical logic

| Symbol            | Meaning                  |
| ----------------- | ------------------------ |
| $\\neg$            | Not / negation           |
| $\\land$           | And                      |
| $\\lor$            | Or                       |
| $\\Rightarrow$     | Implies                  |
| $\\Leftrightarrow$ | If and only if           |
| $\\forall$         | For all                  |
| $\\exists$         | There exists             |
| $\\nexists$        | There does not exist     |
| $\\exists!$        | There exists exactly one |

For example:

$$
\\forall x\\in\\mathbb{R},\\quad x^2\\geq0
$$

means:

«For every real number $x$, $x^2$ is greater than or equal to zero».

---

## 27. Implication and equivalence

It is important to distinguish:

$$
A\\Rightarrow B
$$

from:

$$
A\\Leftrightarrow B
$$

The first means:

> If $A$ is true, then $B$ is also true.

The second means:

> $A$ is true if and only if $B$ is true.

For example:

$$
x=2\\Rightarrow x^2=4
$$

but:

$$
x^2=4\\Leftrightarrow x=\\pm2
$$

---

## 28. Quantifiers

The universal quantifier:

$$
\\forall
$$

means «for all».

The existential quantifier:

$$
\\exists
$$

means «there exists at least one».

For example:

$$
\\exists x\\in\\mathbb{R}:x^2=4
$$

means that there exists at least one real number whose square is 4.

---

## 29. Vectors

A vector can be represented as:

$$
\\vec v
$$

or by its components:

$$
\\vec v=
\\begin{pmatrix}
v_1\\\\
v_2
\\end{pmatrix}
$$

The norm of a vector is:

$$
\\|\\vec v\\|
$$

The dot product:

$$
\\vec u\\cdot\\vec v
$$

and, in three dimensions, the cross product:

$$
\\vec u\\times\\vec v
$$

---

## 30. Matrices

A matrix can be written:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

| Symbol                   | Meaning         |
| ------------------------ | --------------- |
| $A^T$                    | Transpose       |
| $A^{-1}$                 | Inverse         |
| $\\det(A)$                | Determinant     |
| $\\operatorname{rank}(A)$ | Rank            |
| $I$                      | Identity matrix |
| $0$                      | Zero matrix     |

---

## 31. Complex numbers

A complex number is written:

$$
z=a+bi
$$

where:

$$
i^2=-1
$$

The real part:

$$
\\operatorname{Re}(z)
$$

The imaginary part:

$$
\\operatorname{Im}(z)
$$

The conjugate:

$$
\\overline z
$$

The modulus:

$$
|z|
$$

In polar form:

$$
z=re^{i\\theta}
$$

---

## 32. Geometry

| Symbol      | Meaning       |
| ----------- | ------------- |
| $\\angle$    | Angle         |
| $\\perp$     | Perpendicular |
| $\\parallel$ | Parallel      |
| $\\triangle$ | Triangle      |
| $\\cong$     | Congruent     |
| $\\sim$      | Similar       |

For example:

$$
AB\\parallel CD
$$

means that the lines are parallel.

While:

$$
AB\\perp CD
$$

means that they are perpendicular.

---

## 33. Probability

The probability of an event $A$:

$$
P(A)
$$

Conditional probability:

$$
P(A\\mid B)
$$

Intersection:

$$
P(A\\cap B)
$$

Union:

$$
P(A\\cup B)
$$

Complement:

$$
P(A^c)
$$

---

## 34. Statistics

| Symbol                    | Common meaning                |
| ------------------------- | ----------------------------- |
| $\\mu$                     | Population mean               |
| $\\bar{x}$                 | Sample mean                   |
| $\\sigma$                  | Population standard deviation |
| $s$                       | Sample standard deviation     |
| $\\sigma^2$                | Population variance           |
| $s^2$                     | Sample variance               |
| $\\operatorname{Var}(X)$   | Variance                      |
| $E(X)$                    | Expected value                |
| $\\operatorname{Cov}(X,Y)$ | Covariance                    |

---

## 35. Approximation and asymptotic behavior

The symbol:

$$
\\sim
$$

can indicate asymptotic equivalence:

$$
f(x)\\sim g(x)
$$

when:

$$
\\lim_{x\\to a}\\frac{f(x)}{g(x)}=1
$$

We also encounter:

$$
O(n)
$$

$$
o(n)
$$

$$
\\Theta(n)
$$

These notations describe the growth of functions and are particularly important in algorithm analysis.

---

## 36. Common letters

| Symbol    | Common use                             |
| --------- | -------------------------------------- |
| $x,y,z$   | Variables                              |
| $a,b,c$   | Constants or parameters                |
| $n,m,k$   | Integers or indices                    |
| $i,j$     | Indices                                |
| $f,g,h$   | Functions                              |
| $A,B,C$   | Sets, matrices, or objects             |
| $P,Q$     | Propositions, points, or probabilities |
| $r$       | Radius or ratio                        |
| $t$       | Time or parameter                      |
| $\\lambda$ | Parameter or eigenvalue                |
| $\\mu$     | Mean or parameter                      |
| $\\sigma$  | Standard deviation                     |

The exact meaning always depends on context.

---

## 37. Reading a mathematical expression

For example:

$$
\\sum_{i=1}^{n}i^2
$$

can be read as:

> «The sum from $i=1$ to $n$ of $i$ squared».

The expression means:

$$
1^2+2^2+3^2+\\cdots+n^2
$$

Another example:

$$
\\lim_{x\\to0}\\frac{\\sin x}{x}=1
$$

can be read as:

> «The limit as $x$ approaches zero of sine of $x$ divided by $x$ is equal to one».

---

## 38. Symbols worth recognizing

| Symbol                  | Concept              |
| ----------------------- | -------------------- |
| $=$                     | Equality             |
| $\\neq$                  | Inequality           |
| $\\approx$               | Approximation        |
| $\\pm$                   | Plus or minus        |
| $<,>$                   | Comparison           |
| $\\leq,\\geq$             | Inclusive comparison |
| $\\in$                   | Membership           |
| $\\subseteq$             | Inclusion            |
| $\\cup$                  | Union                |
| $\\cap$                  | Intersection         |
| $\\varnothing$           | Empty set            |
| $\\infty$                | Infinity             |
| $\\sqrt{}$               | Root                 |
| $                       | x                    | $   | Absolute value |
| $n!$                    | Factorial            |
| $\\sum$                  | Summation            |
| $\\prod$                 | Product              |
| $\\binom nk$             | Binomial coefficient |
| $f(x)$                  | Function             |
| $f^{-1}$                | Inverse function     |
| $\\circ$                 | Composition          |
| $\\lim$                  | Limit                |
| $f'$                    | Derivative           |
| $\\partial$              | Partial derivative   |
| $\\int$                  | Integral             |
| $\\iint$                 | Double integral      |
| $\\oint$                 | Contour integral     |
| $\\forall$               | For all              |
| $\\exists$               | There exists         |
| $\\Rightarrow$           | Implication          |
| $\\Leftrightarrow$       | Equivalence          |
| $\\mathbb N$             | Natural numbers      |
| $\\mathbb Z$             | Integers             |
| $\\mathbb Q$             | Rational numbers     |
| $\\mathbb R$             | Real numbers         |
| $\\mathbb C$             | Complex numbers      |
| $\\vec v$                | Vector               |
| $\\|v\\|$                 | Norm                 |
| $A^T$                   | Transpose            |
| $A^{-1}$                | Inverse              |
| $\\det(A)$               | Determinant          |
| $P(A)$                  | Probability          |
| $E(X)$                  | Expected value       |
| $\\operatorname{Var}(X)$ | Variance             |

---

## 39. The fundamental idea

Mathematical notation allows complex structures to be expressed compactly.

For example:

$$
\\sum_{i=1}^{n}a_i
$$

is much more compact than writing:

$$
a_1+a_2+a_3+\\cdots+a_n
$$

Similarly:

$$
\\lim_{x\\to a}f(x)
$$

summarizes an entire idea about the behavior of a function near $a$.

Learning mathematics involves understanding concepts and also learning to **read and write its symbolic language**.
`;function o(){let{locale:o}=t();return e(n,{id:`mathematical-notation`,content:{es:r,ca:i,en:a}[o]})}export{o as default};