# Notación matemática

La matemática utiliza símbolos y convenciones para expresar ideas de forma precisa y compacta. Esta notación permite escribir operaciones, relaciones, conjuntos, funciones, límites, derivadas, integrales y muchas otras estructuras.

Conocer los símbolos no consiste solamente en memorizar su significado. También es importante saber **cómo se leen, cuándo se utilizan y qué información representan**.

---

## 1. Operaciones básicas

Los símbolos más habituales son:

| Símbolo   | Significado           | Ejemplo           |
| --------- | --------------------- | ----------------- |
| $+$       | Suma                  | $a+b$             |
| $-$       | Resta                 | $a-b$             |
| $\cdot$   | Multiplicación        | $a\cdot b$        |
| $\times$  | Multiplicación        | $a\times b$       |
| $/$       | División              | $a/b$             |
| $=$       | Igualdad              | $a=b$             |
| $\neq$    | Distinto de           | $a\neq b$         |
| $\approx$ | Aproximadamente igual | $\pi\approx3.14$  |
| $\pm$     | Más o menos           | $x=\pm2$          |
| $\mp$     | Menos o más           | $a\pm b,\ a\mp b$ |
| $\%$      | Porcentaje            | $25\%$            |
| $\infty$  | Infinito              | $x\to\infty$      |

La multiplicación suele omitirse cuando no existe riesgo de confusión:

$$
3\cdot x=3x
$$

$$
a\cdot b=ab
$$

---

## 2. Comparaciones

Estos símbolos permiten comparar cantidades:

| Símbolo | Significado       |
| ------- | ----------------- |
| $<$     | Menor que         |
| $>$     | Mayor que         |
| $\leq$  | Menor o igual que |
| $\geq$  | Mayor o igual que |
| $\ll$   | Mucho menor que   |
| $\gg$   | Mucho mayor que   |

Por ejemplo:

$$
2<5
$$

significa que 2 es menor que 5.

Mientras que:

$$
x\geq3
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
a\approx b
$$

Los valores son aproximadamente iguales.

Por ejemplo:

$$
\pi\approx3.14159
$$

### Identidad

$$
(a+b)^2\equiv a^2+2ab+b^2
$$

El símbolo $\equiv$ puede utilizarse para indicar una identidad, es decir, una igualdad que se cumple para todos los valores permitidos de las variables.

### Congruencia

En teoría de números:

$$
a\equiv b\pmod n
$$

significa que $a$ y $b$ dejan el mismo resto al dividirlos entre $n$.

---

# 4. Conjuntos numéricos

Los principales conjuntos numéricos se representan mediante letras especiales:

| Símbolo      | Conjunto   |
| ------------ | ---------- |
| $\mathbb{N}$ | Naturales  |
| $\mathbb{Z}$ | Enteros    |
| $\mathbb{Q}$ | Racionales |
| $\mathbb{R}$ | Reales     |
| $\mathbb{C}$ | Complejos  |

Existe una relación de inclusión:

$$
\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\subset\mathbb{C}
$$

Por ejemplo:

$$
3\in\mathbb{N}
$$

$$
-2\in\mathbb{Z}
$$

$$
\frac12\in\mathbb{Q}
$$

$$
\sqrt2\in\mathbb{R}
$$

$$
i\in\mathbb{C}
$$

> La definición de $\mathbb N$ puede variar: algunas convenciones incluyen el $0$ y otras empiezan en $1$.

---

# 5. Pertenencia a conjuntos

Los símbolos fundamentales son:

| Símbolo       | Significado              |
| ------------- | ------------------------ |
| $\in$         | Pertenece a              |
| $\notin$      | No pertenece a           |
| $\subset$     | Es subconjunto de        |
| $\subseteq$   | Es subconjunto o igual   |
| $\supset$     | Es superconjunto de      |
| $\supseteq$   | Es superconjunto o igual |
| $\varnothing$ | Conjunto vacío           |

Por ejemplo:

$$
3\in\mathbb{N}
$$

pero:

$$
-3\notin\mathbb{N}
$$

Si todos los elementos de $A$ pertenecen también a $B$:

$$
A\subseteq B
$$

---

# 6. Operaciones con conjuntos

### Unión

$$
A\cup B
$$

Contiene los elementos que pertenecen a $A$, a $B$ o a ambos.

### Intersección

$$
A\cap B
$$

Contiene los elementos comunes a ambos conjuntos.

### Diferencia

$$
A\setminus B
$$

Contiene los elementos de $A$ que no pertenecen a $B$.

### Complementario

$$
A^c
$$

Representa los elementos que no pertenecen a $A$ dentro del conjunto universal considerado.

### Producto cartesiano

$$
A\times B
$$

Es el conjunto de pares ordenados:

$$
A\times B=\{(a,b):a\in A,\ b\in B\}
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
a\leq x\leq b
$$

Los extremos están incluidos.

### Intervalos semiabiertos

$$
[a,b)
$$

significa:

$$
a\leq x<b
$$

Mientras que:

$$
(a,b]
$$

significa:

$$
a<x\leq b
$$

También aparecen intervalos infinitos:

$$
(-\infty,a)
$$

$$
[a,\infty)
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

para $a\neq0$.

### Exponente negativo

$$
a^{-n}=\frac{1}{a^n}
$$

Por ejemplo:

$$
2^{-3}=\frac18
$$

### Exponente fraccionario

$$
a^{1/n}=\sqrt[n]{a}
$$

Por tanto:

$$
a^{m/n}=\sqrt[n]{a^m}
$$

---

# 9. Raíces

El símbolo:

$$
\sqrt{x}
$$

representa la raíz cuadrada.

También existen raíces de otros órdenes:

$$
\sqrt[3]{x}
$$

$$
\sqrt[n]{x}
$$

La relación con las potencias es:

$$
\sqrt[n]{x}=x^{1/n}
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
\begin{cases}
x & x\geq0\\
-x & x<0
\end{cases}
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
n!=n(n-1)(n-2)\cdots2\cdot1
$$

Por ejemplo:

$$
5!=5\cdot4\cdot3\cdot2\cdot1=120
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
\sum
$$

Permite representar una suma de muchos términos de forma compacta.

Por ejemplo:

$$
\sum_{i=1}^{5}i
$$

significa:

$$
1+2+3+4+5
$$

En:

$$
\sum_{i=1}^{n}a_i
$$

tenemos:

- $\sum$: símbolo de sumatorio;
- $i$: índice;
- $1$: límite inferior;
- $n$: límite superior;
- $a_i$: término que se suma.

Una fórmula conocida es:

$$
\sum_{i=1}^{n}i=\frac{n(n+1)}{2}
$$

También pueden utilizarse varios índices:

$$
\sum_{i=1}^{n}\sum_{j=1}^{m}a_{ij}
$$

---

# 13. Productorios

El productorío es el equivalente multiplicativo del sumatorio.

Su símbolo es:

$$
\prod
$$

Por ejemplo:

$$
\prod_{i=1}^{5}i
$$

significa:

$$
1\cdot2\cdot3\cdot4\cdot5
$$

Por tanto:

$$
\prod_{i=1}^{n}i=n!
$$

Los productorios aparecen en combinatoria, teoría de números, probabilidad y análisis matemático.

---

# 14. Combinaciones

El coeficiente binomial se representa como:

$$
\binom{n}{k}
$$

Se lee «$n$ sobre $k$».

Su fórmula es:

$$
\binom{n}{k}
=

\frac{n!}{k!(n-k)!}
$$

Aparece, entre otros lugares, en el desarrollo del binomio:

$$
(a+b)^n
=

\sum_{k=0}^{n}
\binom{n}{k}a^{n-k}b^k
$$

---

# 15. Funciones

Una función puede escribirse como:

$$
f:A\to B
$$

Esto indica que $f$ transforma elementos de $A$ en elementos de $B$.

Por ejemplo:

$$
f(x)=x^2
$$

En:

$$
f:A\to B
$$

- $A$ es el dominio;
- $B$ es el codominio;
- $f(x)$ es el valor de la función en $x$.

También puede escribirse:

$$
x\mapsto x^2
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
f^{-1}(\{9\})=\{-3,3\}
$$

No debe confundirse $f^{-1}$ con $1/f$. En general, $f^{-1}$ representa la función inversa cuando esta existe.

---

# 17. Composición de funciones

La composición se representa mediante:

$$
(f\circ g)(x)
$$

y significa:

$$
(f\circ g)(x)=f(g(x))
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
\lim_{x\to a}f(x)
$$

Se lee:

«límite de $f(x)$ cuando $x$ tiende a $a$».

Por ejemplo:

$$
\lim_{x\to2}(x+3)=5
$$

El límite describe el comportamiento de una función cuando la variable se aproxima a un determinado valor.

---

# 20. Límites laterales

Podemos aproximarnos a un punto desde la izquierda:

$$
\lim_{x\to a^-}f(x)
$$

o desde la derecha:

$$
\lim_{x\to a^+}f(x)
$$

Para que exista el límite bilateral finito, normalmente deben coincidir:

$$
\lim_{x\to a^-}f(x)
=

\lim_{x\to a^+}f(x)
$$

---

# 21. Límites en el infinito

También podemos estudiar qué ocurre cuando $x$ crece indefinidamente:

$$
\lim_{x\to\infty}f(x)
$$

o cuando disminuye indefinidamente:

$$
\lim_{x\to-\infty}f(x)
$$

También pueden aparecer límites infinitos:

$$
\lim_{x\to a}f(x)=\infty
$$

Estos conceptos son fundamentales para estudiar las asíntotas.

---

# 22. Derivadas

La derivada puede escribirse de varias formas:

$$
f'(x)
$$

$$
\frac{df}{dx}
$$

$$
\frac{dy}{dx}
$$

Todas estas notaciones están relacionadas con la tasa de variación de una función.

La segunda derivada puede escribirse:

$$
f''(x)
$$

o:

$$
\frac{d^2f}{dx^2}
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
\frac{\partial f}{\partial x}
$$

y respecto de $y$:

$$
\frac{\partial f}{\partial y}
$$

El símbolo:

$$
\partial
$$

se utiliza para indicar una derivada parcial.

---

# 24. Integrales

La integral indefinida se representa mediante:

$$
\int f(x)\,dx
$$

El símbolo $dx$ indica la variable respecto de la cual se integra.

Una integral definida tiene límites:

$$
\int_a^b f(x)\,dx
$$

donde $a$ es el límite inferior y $b$ el límite superior.

También existen integrales múltiples:

$$
\iint
$$

$$
\iiint
$$

y la integral de línea:

$$
\oint
$$

---

# 25. Sucesiones y series

Una sucesión puede escribirse:

$$
(a_n)_{n=1}^{\infty}
$$

donde $a_n$ representa el término de índice $n$.

Una serie es una suma de términos de una sucesión:

$$
\sum_{n=1}^{\infty}a_n
$$

Una serie puede ser convergente o divergente.

Por ejemplo, la serie geométrica:

$$
\sum_{n=0}^{\infty}r^n
$$

converge cuando:

$$
|r|<1
$$

y entonces:

$$
\sum_{n=0}^{\infty}r^n
=

\frac{1}{1-r}
$$

---

# 26. Lógica matemática

La lógica utiliza símbolos para representar proposiciones y relaciones lógicas.

| Símbolo           | Significado     |
| ----------------- | --------------- |
| $\neg$            | No / negación   |
| $\land$           | Y               |
| $\lor$            | O               |
| $\Rightarrow$     | Implica         |
| $\Leftrightarrow$ | Si y solo si    |
| $\forall$         | Para todo       |
| $\exists$         | Existe          |
| $\nexists$        | No existe       |
| $\exists!$        | Existe un único |

Por ejemplo:

$$
\forall x\in\mathbb{R},\quad x^2\geq0
$$

significa:

«Para todo número real $x$, $x^2$ es mayor o igual que cero».

---

# 27. Implicación y equivalencia

Es importante distinguir:

$$
A\Rightarrow B
$$

de:

$$
A\Leftrightarrow B
$$

La primera significa:

> Si $A$ es verdadera, entonces $B$ también lo es.

La segunda significa:

> $A$ es verdadera si y solo si $B$ es verdadera.

Por ejemplo:

$$
x=2\Rightarrow x^2=4
$$

pero:

$$
x^2=4\Leftrightarrow x=\pm2
$$

---

# 28. Cuantificadores

El cuantificador universal:

$$
\forall
$$

significa «para todo».

El cuantificador existencial:

$$
\exists
$$

significa «existe al menos uno».

Por ejemplo:

$$
\exists x\in\mathbb{R}:x^2=4
$$

significa que existe al menos un número real cuyo cuadrado es 4.

---

# 29. Vectores

Un vector puede representarse como:

$$
\vec v
$$

o mediante sus componentes:

$$
\vec v=
\begin{pmatrix}
v_1\\
v_2
\end{pmatrix}
$$

La norma de un vector se representa mediante:

$$
\|\vec v\|
$$

El producto escalar:

$$
\vec u\cdot\vec v
$$

y, en tres dimensiones, el producto vectorial:

$$
\vec u\times\vec v
$$

---

# 30. Matrices

Una matriz puede escribirse:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

Algunas notaciones habituales son:

| Símbolo                  | Significado       |
| ------------------------ | ----------------- |
| $A^T$                    | Matriz traspuesta |
| $A^{-1}$                 | Matriz inversa    |
| $\det(A)$                | Determinante      |
| $\operatorname{rank}(A)$ | Rango             |
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
\operatorname{Re}(z)
$$

La parte imaginaria:

$$
\operatorname{Im}(z)
$$

El conjugado:

$$
\overline z
$$

El módulo:

$$
|z|
$$

Un número complejo también puede escribirse en forma polar:

$$
z=re^{i\theta}
$$

---

# 32. Geometría

Algunos símbolos habituales en geometría son:

| Símbolo     | Significado   |
| ----------- | ------------- |
| $\angle$    | Ángulo        |
| $\perp$     | Perpendicular |
| $\parallel$ | Paralelo      |
| $\triangle$ | Triángulo     |
| $\cong$     | Congruente    |
| $\sim$      | Semejante     |

Por ejemplo:

$$
AB\parallel CD
$$

significa que las rectas $AB$ y $CD$ son paralelas.

Mientras que:

$$
AB\perp CD
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
P(A\mid B)
$$

La intersección:

$$
P(A\cap B)
$$

La unión:

$$
P(A\cup B)
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
| $\mu$                     | Media poblacional               |
| $\bar{x}$                 | Media muestral                  |
| $\sigma$                  | Desviación estándar poblacional |
| $s$                       | Desviación estándar muestral    |
| $\sigma^2$                | Varianza poblacional            |
| $s^2$                     | Varianza muestral               |
| $\operatorname{Var}(X)$   | Varianza                        |
| $E(X)$                    | Esperanza matemática            |
| $\operatorname{Cov}(X,Y)$ | Covarianza                      |

La varianza puede expresarse como:

$$
\operatorname{Var}(X)
=

E(X^2)-[E(X)]^2
$$

---

# 35. Aproximaciones y comportamiento asintótico

El símbolo:

$$
\sim
$$

puede indicar que dos expresiones son asintóticamente equivalentes:

$$
f(x)\sim g(x)
$$

cuando:

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=1
$$

En análisis y ciencias de la computación también aparecen:

$$
O(n)
$$

$$
o(n)
$$

$$
\Theta(n)
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
| $\lambda$ | Parámetro o valor propio               |
| $\mu$     | Media o parámetro                      |
| $\sigma$  | Desviación estándar                    |

El significado exacto siempre depende del contexto.

---

# 37. Cómo leer una expresión matemática

Una expresión puede contener varios niveles de información.

Por ejemplo:

$$
\sum_{i=1}^{n} i^2
$$

puede leerse como:

> «Sumatorio desde $i=1$ hasta $n$ de $i$ al cuadrado».

La misma expresión significa:

$$
1^2+2^2+3^2+\cdots+n^2
$$

Otro ejemplo:

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

se lee:

> «El límite cuando $x$ tiende a cero de seno de $x$ dividido entre $x$ es uno».

---

# 38. Símbolos que conviene reconocer

Esta tabla resume algunos de los símbolos más importantes:

| Símbolo                 | Concepto              |
| ----------------------- | --------------------- |
| $=$                     | Igualdad              |
| $\neq$                  | Desigualdad           |
| $\approx$               | Aproximación          |
| $\pm$                   | Más o menos           |
| $<,>$                   | Comparación           |
| $\leq,\geq$             | Comparación inclusiva |
| $\in$                   | Pertenencia           |
| $\subseteq$             | Inclusión             |
| $\cup$                  | Unión                 |
| $\cap$                  | Intersección          |
| $\varnothing$           | Conjunto vacío        |
| $\infty$                | Infinito              |
| $\sqrt{}$               | Raíz                  |
| $                       | x                     | $   | Valor absoluto |
| $n!$                    | Factorial             |
| $\sum$                  | Sumatorio             |
| $\prod$                 | Productorio           |
| $\binom nk$             | Coeficiente binomial  |
| $f(x)$                  | Función               |
| $f^{-1}$                | Función inversa       |
| $\circ$                 | Composición           |
| $\lim$                  | Límite                |
| $f'$                    | Derivada              |
| $\partial$              | Derivada parcial      |
| $\int$                  | Integral              |
| $\iint$                 | Integral doble        |
| $\oint$                 | Integral de contorno  |
| $\forall$               | Para todo             |
| $\exists$               | Existe                |
| $\Rightarrow$           | Implicación           |
| $\Leftrightarrow$       | Equivalencia          |
| $\mathbb N$             | Naturales             |
| $\mathbb Z$             | Enteros               |
| $\mathbb Q$             | Racionales            |
| $\mathbb R$             | Reales                |
| $\mathbb C$             | Complejos             |
| $\vec v$                | Vector                |
| $\|v\|$                 | Norma                 |
| $A^T$                   | Traspuesta            |
| $A^{-1}$                | Inversa               |
| $\det(A)$               | Determinante          |
| $P(A)$                  | Probabilidad          |
| $E(X)$                  | Esperanza             |
| $\operatorname{Var}(X)$ | Varianza              |

---

# 39. Idea fundamental

La notación matemática permite expresar estructuras complejas de manera compacta.

Por ejemplo:

$$
\sum_{i=1}^{n}a_i
$$

es mucho más compacto que escribir:

$$
a_1+a_2+a_3+\cdots+a_n
$$

De la misma manera:

$$
\lim_{x\to a}f(x)
$$

resume una idea completa sobre el comportamiento de una función cerca de $a$.

Aprender matemáticas implica tanto comprender los conceptos como aprender a **leer y escribir su lenguaje simbólico**.
