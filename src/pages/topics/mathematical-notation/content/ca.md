# Notació matemàtica

Les matemàtiques utilitzen símbols i convencions per expressar idees de manera precisa i compacta. Aquesta notació permet escriure operacions, relacions, conjunts, funcions, límits, derivades, integrals i moltes altres estructures.

Conèixer els símbols no consisteix només a memoritzar-ne el significat. També és important saber **com es llegeixen, quan s'utilitzen i quina informació representen**.

---

## 1. Operacions bàsiques

| Símbol    | Significat           | Exemple           |
| --------- | -------------------- | ----------------- |
| $+$       | Suma                 | $a+b$             |
| $-$       | Resta                | $a-b$             |
| $\cdot$   | Multiplicació        | $a\cdot b$        |
| $\times$  | Multiplicació        | $a\times b$       |
| $/$       | Divisió              | $a/b$             |
| $=$       | Igualtat             | $a=b$             |
| $\neq$    | Diferent de          | $a\neq b$         |
| $\approx$ | Aproximadament igual | $\pi\approx3.14$  |
| $\pm$     | Més o menys          | $x=\pm2$          |
| $\mp$     | Menys o més          | $a\pm b,\ a\mp b$ |
| $\%$      | Percentatge          | $25\%$            |
| $\infty$  | Infinit              | $x\to\infty$      |

La multiplicació sovint s'omet quan no hi ha risc de confusió:

$$
3\cdot x=3x
$$

$$
a\cdot b=ab
$$

---

## 2. Comparacions

| Símbol | Significat        |
| ------ | ----------------- |
| $<$    | Menor que         |
| $>$    | Major que         |
| $\leq$ | Menor o igual que |
| $\geq$ | Major o igual que |
| $\ll$  | Molt menor que    |
| $\gg$  | Molt major que    |

Per exemple:

$$
x\geq3
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
a\approx b
$$

Els valors són aproximadament iguals.

Per exemple:

$$
\pi\approx3.14159
$$

### Identitat

$$
(a+b)^2\equiv a^2+2ab+b^2
$$

El símbol $\equiv$ pot indicar una identitat, és a dir, una igualtat que es compleix per a tots els valors permesos de les variables.

### Congruència

En teoria de nombres:

$$
a\equiv b\pmod n
$$

significa que $a$ i $b$ deixen el mateix residu quan es divideixen entre $n$.

---

## 4. Conjunts numèrics

| Símbol       | Conjunt   |
| ------------ | --------- |
| $\mathbb{N}$ | Naturals  |
| $\mathbb{Z}$ | Enters    |
| $\mathbb{Q}$ | Racionals |
| $\mathbb{R}$ | Reals     |
| $\mathbb{C}$ | Complexos |

La relació d'inclusió és:

$$
\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\subset\mathbb{C}
$$

Per exemple:

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

> La definició de $\mathbb N$ pot variar: algunes convencions inclouen el $0$ i d'altres comencen per $1$.

---

## 5. Pertinença a conjunts

| Símbol        | Significat               |
| ------------- | ------------------------ |
| $\in$         | Pertany a                |
| $\notin$      | No pertany a             |
| $\subset$     | És subconjunt propi de   |
| $\subseteq$   | És subconjunt de         |
| $\supset$     | És superconjunt propi de |
| $\supseteq$   | És superconjunt de       |
| $\varnothing$ | Conjunt buit             |

Per exemple:

$$
3\in\mathbb{N}
$$

però:

$$
-3\notin\mathbb{N}
$$

Si tots els elements de $A$ també pertanyen a $B$:

$$
A\subseteq B
$$

---

## 6. Operacions amb conjunts

### Unió

$$
A\cup B
$$

Conté els elements que pertanyen a $A$, a $B$ o a tots dos.

### Intersecció

$$
A\cap B
$$

Conté els elements comuns als dos conjunts.

### Diferència

$$
A\setminus B
$$

Conté els elements d'$A$ que no pertanyen a $B$.

### Complementari

$$
A^c
$$

Representa els elements que no pertanyen a $A$ dins del conjunt universal considerat.

### Producte cartesià

$$
A\times B
$$

És el conjunt de parells ordenats:

$$
A\times B=\{(a,b):a\in A,\ b\in B\}
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
a\leq x\leq b
$$

Els extrems hi estan inclosos.

### Intervals semioberts

$$
[a,b)
$$

significa:

$$
a\leq x<b
$$

Mentre que:

$$
(a,b]
$$

significa:

$$
a<x\leq b
$$

També apareixen intervals infinits:

$$
(-\infty,a)
$$

$$
[a,\infty)
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

per a $a\neq0$.

### Exponent negatiu

$$
a^{-n}=\frac{1}{a^n}
$$

### Exponent fraccionari

$$
a^{1/n}=\sqrt[n]{a}
$$

Per tant:

$$
a^{m/n}=\sqrt[n]{a^m}
$$

---

## 9. Arrels

El símbol:

$$
\sqrt{x}
$$

representa l'arrel quadrada.

També existeixen arrels d'altres ordres:

$$
\sqrt[3]{x}
$$

$$
\sqrt[n]{x}
$$

La relació amb les potències és:

$$
\sqrt[n]{x}=x^{1/n}
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
\begin{cases}
x & x\geq0\\
-x & x<0
\end{cases}
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
n!=n(n-1)(n-2)\cdots2\cdot1
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
\sum
$$

Permet representar una suma de molts termes de manera compacta.

Per exemple:

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

tenim:

- $\sum$: símbol de sumatori;
- $i$: índex;
- $1$: límit inferior;
- $n$: límit superior;
- $a_i$: terme que se suma.

Una fórmula coneguda és:

$$
\sum_{i=1}^{n}i=\frac{n(n+1)}{2}
$$

També poden utilitzar-se diversos índexs:

$$
\sum_{i=1}^{n}\sum_{j=1}^{m}a_{ij}
$$

---

## 13. Productoris

El productori és l'equivalent multiplicatiu del sumatori.

El seu símbol és:

$$
\prod
$$

Per exemple:

$$
\prod_{i=1}^{5}i
$$

significa:

$$
1\cdot2\cdot3\cdot4\cdot5
$$

Per tant:

$$
\prod_{i=1}^{n}i=n!
$$

---

## 14. Combinacions

El coeficient binomial es representa com:

$$
\binom{n}{k}
$$

i es llegeix «$n$ sobre $k$».

La seva fórmula és:

$$
\binom{n}{k}
=

\frac{n!}{k!(n-k)!}
$$

Apareix, entre altres llocs, en el desenvolupament del binomi:

$$
(a+b)^n
=

\sum_{k=0}^{n}
\binom{n}{k}a^{n-k}b^k
$$

---

## 15. Funcions

Una funció pot escriure's:

$$
f:A\to B
$$

Això indica que $f$ transforma elements d'$A$ en elements de $B$.

Per exemple:

$$
f(x)=x^2
$$

En:

$$
f:A\to B
$$

- $A$ és el domini;
- $B$ és el codomini;
- $f(x)$ és el valor de la funció en $x$.

També pot escriure's:

$$
x\mapsto x^2
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
f^{-1}(\{9\})=\{-3,3\}
$$

No s'ha de confondre $f^{-1}$ amb $1/f$.

---

## 17. Composició de funcions

La composició es representa mitjançant:

$$
(f\circ g)(x)
$$

i significa:

$$
(f\circ g)(x)=f(g(x))
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
\lim_{x\to a}f(x)
$$

Es llegeix:

«límit de $f(x)$ quan $x$ tendeix a $a$».

Per exemple:

$$
\lim_{x\to2}(x+3)=5
$$

El límit descriu el comportament d'una funció quan la variable s'aproxima a un valor determinat.

---

## 20. Límits laterals

Podem aproximar-nos a un punt des de l'esquerra:

$$
\lim_{x\to a^-}f(x)
$$

o des de la dreta:

$$
\lim_{x\to a^+}f(x)
$$

Perquè existeixi el límit bilateral finit, normalment han de coincidir:

$$
\lim_{x\to a^-}f(x)
=

\lim_{x\to a^+}f(x)
$$

---

## 21. Límits a l'infinit

Podem estudiar què passa quan $x$ creix indefinidament:

$$
\lim_{x\to\infty}f(x)
$$

o quan disminueix indefinidament:

$$
\lim_{x\to-\infty}f(x)
$$

També poden aparèixer límits infinits:

$$
\lim_{x\to a}f(x)=\infty
$$

Aquests conceptes són fonamentals per estudiar les asímptotes.

---

## 22. Derivades

La derivada pot escriure's de diverses maneres:

$$
f'(x)
$$

$$
\frac{df}{dx}
$$

$$
\frac{dy}{dx}
$$

La segona derivada pot escriure's:

$$
f''(x)
$$

o:

$$
\frac{d^2f}{dx^2}
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
\frac{\partial f}{\partial x}
$$

i respecte d'$y$:

$$
\frac{\partial f}{\partial y}
$$

El símbol:

$$
\partial
$$

indica una derivada parcial.

---

## 24. Integrals

La integral indefinida es representa:

$$
\int f(x)\,dx
$$

El símbol $dx$ indica la variable respecte de la qual s'integra.

Una integral definida té límits:

$$
\int_a^b f(x)\,dx
$$

També existeixen integrals múltiples:

$$
\iint
$$

$$
\iiint
$$

i integrals de contorn:

$$
\oint
$$

---

## 25. Successions i sèries

Una successió pot escriure's:

$$
(a_n)_{n=1}^{\infty}
$$

on $a_n$ representa el terme d'índex $n$.

Una sèrie és una suma de termes d'una successió:

$$
\sum_{n=1}^{\infty}a_n
$$

Una sèrie pot ser convergent o divergent.

Per exemple:

$$
\sum_{n=0}^{\infty}r^n
$$

convergeix quan:

$$
|r|<1
$$

i llavors:

$$
\sum_{n=0}^{\infty}r^n
=

\frac{1}{1-r}
$$

---

## 26. Lògica matemàtica

| Símbol            | Significat       |
| ----------------- | ---------------- |
| $\neg$            | No / negació     |
| $\land$           | I                |
| $\lor$            | O                |
| $\Rightarrow$     | Implica          |
| $\Leftrightarrow$ | Si i només si    |
| $\forall$         | Per a tot        |
| $\exists$         | Existeix         |
| $\nexists$        | No existeix      |
| $\exists!$        | Existeix un únic |

Per exemple:

$$
\forall x\in\mathbb{R},\quad x^2\geq0
$$

significa:

«Per a tot nombre real $x$, $x^2$ és major o igual que zero».

---

## 27. Implicació i equivalència

És important distingir:

$$
A\Rightarrow B
$$

de:

$$
A\Leftrightarrow B
$$

La primera significa:

> Si $A$ és certa, llavors $B$ també ho és.

La segona significa:

> $A$ és certa si i només si $B$ és certa.

Per exemple:

$$
x=2\Rightarrow x^2=4
$$

però:

$$
x^2=4\Leftrightarrow x=\pm2
$$

---

## 28. Quantificadors

El quantificador universal:

$$
\forall
$$

significa «per a tot».

El quantificador existencial:

$$
\exists
$$

significa «existeix almenys un».

Per exemple:

$$
\exists x\in\mathbb{R}:x^2=4
$$

significa que existeix almenys un nombre real el quadrat del qual és 4.

---

## 29. Vectors

Un vector pot representar-se:

$$
\vec v
$$

o mitjançant les seves components:

$$
\vec v=
\begin{pmatrix}
v_1\\
v_2
\end{pmatrix}
$$

La norma d'un vector:

$$
\|\vec v\|
$$

El producte escalar:

$$
\vec u\cdot\vec v
$$

I, en tres dimensions, el producte vectorial:

$$
\vec u\times\vec v
$$

---

## 30. Matrius

Una matriu pot escriure's:

$$
A=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$

| Símbol                   | Significat         |
| ------------------------ | ------------------ |
| $A^T$                    | Matriu transposada |
| $A^{-1}$                 | Matriu inversa     |
| $\det(A)$                | Determinant        |
| $\operatorname{rank}(A)$ | Rang               |
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
\operatorname{Re}(z)
$$

La part imaginària:

$$
\operatorname{Im}(z)
$$

El conjugat:

$$
\overline z
$$

El mòdul:

$$
|z|
$$

En forma polar:

$$
z=re^{i\theta}
$$

---

## 32. Geometria

| Símbol      | Significat    |
| ----------- | ------------- |
| $\angle$    | Angle         |
| $\perp$     | Perpendicular |
| $\parallel$ | Paral·lel     |
| $\triangle$ | Triangle      |
| $\cong$     | Congruent     |
| $\sim$      | Semblant      |

Per exemple:

$$
AB\parallel CD
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
P(A\mid B)
$$

Intersecció:

$$
P(A\cap B)
$$

Unió:

$$
P(A\cup B)
$$

Complementari:

$$
P(A^c)
$$

---

## 34. Estadística

| Símbol                    | Significat habitual             |
| ------------------------- | ------------------------------- |
| $\mu$                     | Mitjana poblacional             |
| $\bar{x}$                 | Mitjana mostral                 |
| $\sigma$                  | Desviació estàndard poblacional |
| $s$                       | Desviació estàndard mostral     |
| $\sigma^2$                | Variància poblacional           |
| $s^2$                     | Variància mostral               |
| $\operatorname{Var}(X)$   | Variància                       |
| $E(X)$                    | Esperança matemàtica            |
| $\operatorname{Cov}(X,Y)$ | Covariància                     |

---

## 35. Aproximacions i comportament asimptòtic

El símbol:

$$
\sim
$$

pot indicar equivalència asimptòtica:

$$
f(x)\sim g(x)
$$

quan:

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=1
$$

També apareixen:

$$
O(n)
$$

$$
o(n)
$$

$$
\Theta(n)
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
| $\lambda$ | Paràmetre o valor propi             |
| $\mu$     | Mitjana o paràmetre                 |
| $\sigma$  | Desviació estàndard                 |

El significat exacte depèn sempre del context.

---

## 37. Com llegir una expressió matemàtica

Per exemple:

$$
\sum_{i=1}^{n}i^2
$$

es pot llegir:

> «Sumatori des d'$i=1$ fins a $n$ d'$i$ al quadrat».

Aquesta expressió equival a:

$$
1^2+2^2+3^2+\cdots+n^2
$$

Un altre exemple:

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

es llegeix:

> «El límit quan $x$ tendeix a zero del sinus de $x$ dividit per $x$ és igual a u».

---

## 38. Símbols que convé reconèixer

| Símbol                  | Concepte             |
| ----------------------- | -------------------- |
| $=$                     | Igualtat             |
| $\neq$                  | Desigualtat          |
| $\approx$               | Aproximació          |
| $\pm$                   | Més o menys          |
| $<,>$                   | Comparació           |
| $\leq,\geq$             | Comparació inclusiva |
| $\in$                   | Pertinença           |
| $\subseteq$             | Inclusió             |
| $\cup$                  | Unió                 |
| $\cap$                  | Intersecció          |
| $\varnothing$           | Conjunt buit         |
| $\infty$                | Infinit              |
| $\sqrt{}$               | Arrel                |
| $                       | x                    | $   | Valor absolut |
| $n!$                    | Factorial            |
| $\sum$                  | Sumatori             |
| $\prod$                 | Productori           |
| $\binom nk$             | Coeficient binomial  |
| $f(x)$                  | Funció               |
| $f^{-1}$                | Funció inversa       |
| $\circ$                 | Composició           |
| $\lim$                  | Límit                |
| $f'$                    | Derivada             |
| $\partial$              | Derivada parcial     |
| $\int$                  | Integral             |
| $\iint$                 | Integral doble       |
| $\oint$                 | Integral de contorn  |
| $\forall$               | Per a tot            |
| $\exists$               | Existeix             |
| $\Rightarrow$           | Implicació           |
| $\Leftrightarrow$       | Equivalència         |
| $\mathbb N$             | Naturals             |
| $\mathbb Z$             | Enters               |
| $\mathbb Q$             | Racionals            |
| $\mathbb R$             | Reals                |
| $\mathbb C$             | Complexos            |
| $\vec v$                | Vector               |
| $\|v\|$                 | Norma                |
| $A^T$                   | Transposada          |
| $A^{-1}$                | Inversa              |
| $\det(A)$               | Determinant          |
| $P(A)$                  | Probabilitat         |
| $E(X)$                  | Esperança            |
| $\operatorname{Var}(X)$ | Variància            |

---

## 39. Idea fonamental

La notació matemàtica permet expressar estructures complexes de manera compacta.

Per exemple:

$$
\sum_{i=1}^{n}a_i
$$

és molt més compacte que escriure:

$$
a_1+a_2+a_3+\cdots+a_n
$$

De la mateixa manera:

$$
\lim_{x\to a}f(x)
$$

resumeix una idea completa sobre el comportament d'una funció prop d'$a$.

Aprendre matemàtiques implica comprendre els conceptes i també aprendre a **llegir i escriure el seu llenguatge simbòlic**.
