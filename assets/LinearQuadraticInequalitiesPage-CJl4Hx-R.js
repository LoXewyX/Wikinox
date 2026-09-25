import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-CC0Uwr-v.js";import{t as n}from"./TopicPage-CxUbQKDL.js";var r=`# Inecuaciones lineales y cuadráticas

Las **inecuaciones lineales y cuadráticas** permiten determinar qué valores de una variable hacen que una desigualdad algebraica sea verdadera.

A diferencia de una ecuación, una inecuación normalmente no tiene una única solución. Su solución suele ser un **intervalo** o una unión de intervalos.

---

## 1. ¿Qué es una inecuación?

Una inecuación es una desigualdad que contiene una variable.

Los símbolos principales son:

- $<$ menor que
- $>$ mayor que
- $\\leq$ menor o igual que
- $\\geq$ mayor o igual que

Por ejemplo:

$$
2x+3>7
$$

Resolver esta inecuación significa encontrar todos los valores de $x$ que hacen verdadera la desigualdad.

---

## 2. Inecuaciones lineales

Una inecuación lineal tiene la variable con exponente $1$.

Por ejemplo:

$$
3x-5>7
$$

El objetivo es aislar $x$, de forma similar a una ecuación.

### Ejemplo

$$
3x-5>7
$$

Sumamos $5$:

$$
3x>12
$$

Dividimos entre $3$:

$$
x>4
$$

Por tanto:

$$
\\boxed{x>4}
$$

En notación de intervalo:

$$
(4,\\infty)
$$

---

## 3. Regla fundamental al multiplicar o dividir por un número negativo

Esta es una de las reglas más importantes de las inecuaciones.

Si multiplicamos o dividimos una desigualdad por un número negativo, **el sentido de la desigualdad cambia**.

Por ejemplo:

$$
-2x>6
$$

Dividimos entre $-2$:

$$
x<-3
$$

El símbolo $>$ se convierte en $<$.

### Ejemplo

$$
-3x+2\\leq 11
$$

Restamos $2$:

$$
-3x\\leq 9
$$

Dividimos entre $-3$ y cambiamos el sentido:

$$
x\\geq -3
$$

Por tanto:

$$
\\boxed{x\\geq -3}
$$

---

## 4. Representación en la recta real

Las soluciones de una inecuación pueden representarse sobre la recta real.

Para:

$$
x>2
$$

se utilizan valores mayores que $2$, sin incluir el $2$.

En notación de intervalo:

$$
(2,\\infty)
$$

Para:

$$
x\\geq 2
$$

el $2$ sí está incluido:

$$
[2,\\infty)
$$

### Regla

- $<$ o $>$ → extremo abierto
- $\\leq$ o $\\geq$ → extremo cerrado

---

## 5. Inecuaciones lineales con varios términos

Consideremos:

$$
4x-7\\leq 2x+5
$$

Agrupamos los términos con $x$:

$$
4x-2x\\leq 5+7
$$

$$
2x\\leq 12
$$

Dividimos entre $2$:

$$
x\\leq 6
$$

Solución:

$$
\\boxed{x\\leq 6}
$$

En intervalos:

$$
(-\\infty,6]
$$

---

## 6. Inecuaciones con paréntesis

Primero desarrollamos los paréntesis.

Por ejemplo:

$$
3(x-2)+1>2x+4
$$

Desarrollamos:

$$
3x-6+1>2x+4
$$

Simplificamos:

$$
3x-5>2x+4
$$

Restamos $2x$:

$$
x-5>4
$$

Sumamos $5$:

$$
x>9
$$

Por tanto:

$$
\\boxed{x>9}
$$

---

## 7. Inecuaciones dobles

También podemos tener dos desigualdades simultáneas.

Por ejemplo:

$$
2<x+1\\leq 5
$$

Restamos $1$ en los tres miembros:

$$
1<x\\leq 4
$$

Por tanto:

$$
\\boxed{1<x\\leq 4}
$$

En notación de intervalo:

$$
(1,4]
$$

---

## 8. Inecuaciones cuadráticas

Una inecuación cuadrática contiene un polinomio de segundo grado.

Por ejemplo:

$$
x^2-5x+6>0
$$

Primero factorizamos:

$$
(x-2)(x-3)>0
$$

Los valores críticos son:

$$
x=2
$$

y

$$
x=3
$$

Estos valores dividen la recta real en tres intervalos:

$$
(-\\infty,2),\\qquad (2,3),\\qquad (3,\\infty)
$$

---

## 9. Análisis del signo

Para determinar dónde el producto es positivo o negativo, estudiamos el signo de cada factor.

| Intervalo     | $x-2$ | $x-3$ | Producto |
| ------------- | ----: | ----: | -------: |
| $(-\\infty,2)$ |   $-$ |   $-$ |      $+$ |
| $(2,3)$       |   $+$ |   $-$ |      $-$ |
| $(3,\\infty)$  |   $+$ |   $+$ |      $+$ |

Como queremos:

$$
(x-2)(x-3)>0
$$

seleccionamos los intervalos donde el producto es positivo:

$$
\\boxed{x<2\\quad\\text{o}\\quad x>3}
$$

En intervalos:

$$
\\boxed{(-\\infty,2)\\cup(3,\\infty)}
$$

---

## 10. ¿Por qué aparecen los puntos críticos?

Los puntos críticos son los valores donde la expresión puede cambiar de signo.

Para un polinomio factorizado:

$$
(x-a)(x-b)
$$

los puntos críticos son:

$$
x=a,\\qquad x=b
$$

Estos valores dividen la recta real en regiones donde el signo permanece constante.

---

## 11. Inecuación cuadrática menor que cero

Consideremos:

$$
x^2-5x+6<0
$$

Factorizamos:

$$
(x-2)(x-3)<0
$$

De la tabla anterior sabemos que el producto es negativo entre las raíces.

Por tanto:

$$
\\boxed{2<x<3}
$$

En intervalos:

$$
\\boxed{(2,3)}
$$

---

## 12. Cuando la desigualdad incluye la igualdad

Consideremos:

$$
x^2-5x+6\\geq 0
$$

Factorizamos:

$$
(x-2)(x-3)\\geq 0
$$

El producto es positivo fuera de las raíces y es igual a cero en ellas.

Por tanto:

$$
\\boxed{x\\leq 2\\quad\\text{o}\\quad x\\geq 3}
$$

En intervalos:

$$
\\boxed{(-\\infty,2]\\cup[3,\\infty)}
$$

Los extremos se incluyen porque la desigualdad contiene $\\geq$.

---

## 13. Método de los puntos de prueba

Otra forma de resolver una inecuación cuadrática es elegir un punto de cada intervalo y comprobar el signo.

Para:

$$
(x-2)(x-3)>0
$$

los intervalos son:

$$
(-\\infty,2),\\quad (2,3),\\quad (3,\\infty)
$$

Podemos elegir:

- $x=0$
- $x=2.5$
- $x=4$

### Primer intervalo

$$
(0-2)(0-3)=(-2)(-3)=6>0
$$

Se incluye.

### Segundo intervalo

$$
(2.5-2)(2.5-3)=(0.5)(-0.5)<0
$$

No se incluye.

### Tercer intervalo

$$
(4-2)(4-3)=2>0
$$

Se incluye.

Resultado:

$$
\\boxed{(-\\infty,2)\\cup(3,\\infty)}
$$

---

## 14. Inecuaciones cuadráticas con coeficiente principal negativo

Consideremos:

$$
-x^2+4x-3>0
$$

Factorizamos:

$$
-(x^2-4x+3)>0
$$

$$
-(x-1)(x-3)>0
$$

Los puntos críticos son $1$ y $3$.

La parábola abre hacia abajo, por lo que es positiva entre las raíces.

Así:

$$
\\boxed{1<x<3}
$$

---

## 15. Uso de la parábola

Una inecuación cuadrática también puede interpretarse mediante su función asociada:

$$
f(x)=ax^2+bx+c
$$

Resolver:

$$
ax^2+bx+c>0
$$

equivale a encontrar los valores de $x$ para los que la gráfica de $f$ está **por encima del eje $x$**.

Resolver:

$$
ax^2+bx+c<0
$$

equivale a encontrar dónde la gráfica está **por debajo del eje $x$**.

---

## 16. Ejemplo mediante la gráfica

Consideremos:

$$
x^2-4x+3<0
$$

La expresión se factoriza como:

$$
(x-1)(x-3)<0
$$

Las raíces son $1$ y $3$.

La parábola abre hacia arriba, por lo que está por debajo del eje $x$ entre las raíces.

Por tanto:

$$
\\boxed{1<x<3}
$$

---

## 17. Cuando no existen raíces reales

No todas las expresiones cuadráticas tienen raíces reales.

Consideremos:

$$
x^2+1>0
$$

Como:

$$
x^2\\geq 0
$$

tenemos:

$$
x^2+1\\geq 1
$$

Por tanto, siempre es positivo:

$$
\\boxed{x\\in\\mathbb{R}}
$$

En cambio:

$$
x^2+1<0
$$

no tiene solución real:

$$
\\boxed{\\varnothing}
$$

---

## 18. Discriminante

Para una ecuación cuadrática:

$$
ax^2+bx+c=0
$$

el discriminante es:

$$
\\Delta=b^2-4ac
$$

Permite determinar el número de raíces reales.

### Si $\\Delta>0$

Existen dos raíces reales distintas.

### Si $\\Delta=0$

Existe una raíz real doble.

### Si $\\Delta<0$

No existen raíces reales.

Esto también ayuda a analizar el signo de una expresión cuadrática.

---

## 19. Una raíz doble

Consideremos:

$$
(x-2)^2\\geq 0
$$

Un cuadrado siempre es no negativo.

Por tanto:

$$
\\boxed{x\\in\\mathbb{R}}
$$

En cambio:

$$
(x-2)^2<0
$$

no tiene solución real:

$$
\\boxed{\\varnothing}
$$

La raíz $x=2$ no cambia el signo porque tiene multiplicidad par.

---

## 20. Inecuaciones cuadráticas con fracciones

Si la expresión contiene una fracción, primero debemos tener en cuenta las restricciones del denominador.

Por ejemplo:

$$
\\frac{x^2-4}{x-1}>0
$$

Factorizamos el numerador:

$$
\\frac{(x-2)(x+2)}{x-1}>0
$$

Los puntos críticos son:

$$
x=-2,\\qquad x=1,\\qquad x=2
$$

Pero $x=1$ no pertenece al dominio porque anula el denominador.

Los intervalos son:

$$
(-\\infty,-2),\\quad (-2,1),\\quad (1,2),\\quad (2,\\infty)
$$

Después estudiamos el signo en cada intervalo.

Este procedimiento conecta las inecuaciones cuadráticas con las **inecuaciones racionales**.

---

## 21. Multiplicidad de las raíces

La multiplicidad de una raíz determina si el signo cambia al atravesarla.

### Multiplicidad impar

El signo cambia.

Por ejemplo:

$$
(x-2)
$$

cambia de signo al pasar por $x=2$.

### Multiplicidad par

El signo no cambia.

Por ejemplo:

$$
(x-2)^2
$$

es positivo a ambos lados de $2$.

Esta observación permite construir tablas de signos de forma más rápida.

---

## 22. Procedimiento general para inecuaciones lineales

Para resolver una inecuación lineal:

1. Elimina paréntesis.
2. Reduce términos semejantes.
3. Agrupa las variables en un lado.
4. Agrupa las constantes en el otro.
5. Despeja la variable.
6. Si multiplicas o divides entre un número negativo, cambia el sentido de la desigualdad.
7. Expresa la solución mediante una desigualdad o un intervalo.

---

## 23. Procedimiento general para inecuaciones cuadráticas

Para resolver una inecuación cuadrática:

1. Lleva todos los términos a un mismo lado.
2. Simplifica la expresión.
3. Encuentra sus raíces.
4. Factoriza cuando sea posible.
5. Ordena los puntos críticos.
6. Divide la recta real en intervalos.
7. Determina el signo en cada intervalo.
8. Selecciona los intervalos que cumplen la desigualdad.
9. Incluye las raíces si la desigualdad contiene $\\leq$ o $\\geq$.
10. Escribe la solución en notación de intervalo.

---

## 24. Ejemplo completo

Resolvamos:

$$
2x^2-x-3\\leq 0
$$

### Paso 1: Factorizar

Buscamos dos factores:

$$
2x^2-x-3=(2x-3)(x+1)
$$

Por tanto:

$$
(2x-3)(x+1)\\leq 0
$$

### Paso 2: Encontrar los puntos críticos

Igualamos cada factor a cero:

$$
2x-3=0
$$

$$
x=\\frac{3}{2}
$$

y:

$$
x+1=0
$$

$$
x=-1
$$

### Paso 3: Ordenar los puntos

$$
-1<\\frac{3}{2}
$$

Los intervalos son:

$$
(-\\infty,-1),\\quad
\\left(-1,\\frac{3}{2}\\right),\\quad
\\left(\\frac{3}{2},\\infty\\right)
$$

### Paso 4: Analizar el signo

| Intervalo                         | $2x-3$ | $x+1$ | Producto |
| --------------------------------- | -----: | ----: | -------: |
| $(-\\infty,-1)$                    |    $-$ |   $-$ |      $+$ |
| $\\left(-1,\\frac{3}{2}\\right)$     |    $-$ |   $+$ |      $-$ |
| $\\left(\\frac{3}{2},\\infty\\right)$ |    $+$ |   $+$ |      $+$ |

Queremos:

$$
(2x-3)(x+1)\\leq 0
$$

Por tanto, seleccionamos el intervalo donde el producto es negativo y los puntos donde es cero:

$$
\\boxed{-1\\leq x\\leq\\frac{3}{2}}
$$

En intervalos:

$$
\\boxed{\\left[-1,\\frac{3}{2}\\right]}
$$

---

## 25. Errores frecuentes

### Olvidar cambiar el sentido al dividir entre un número negativo

Incorrecto:

$$
-2x>4
\\Rightarrow x> -2
$$

Correcto:

$$
-2x>4
\\Rightarrow x<-2
$$

### Incluir una raíz en una desigualdad estricta

Para:

$$
(x-2)(x-3)>0
$$

no podemos incluir $2$ ni $3$.

La solución es:

$$
(-\\infty,2)\\cup(3,\\infty)
$$

### Incluir siempre las raíces

Las raíces solo se incluyen cuando la desigualdad contiene:

$$
\\leq
$$

o

$$
\\geq
$$

### Resolver una cuadrática como si fuera una ecuación

Encontrar las raíces no es suficiente. Las raíces solamente dividen la recta en intervalos donde debemos estudiar el signo.

### Olvidar el dominio

En expresiones con denominadores, los valores que hacen cero el denominador nunca pueden pertenecer a la solución.

---

## 26. Resumen

| Tipo                         | Método principal                                                            |
| ---------------------------- | --------------------------------------------------------------------------- |
| Lineal                       | Despejar la variable                                                        |
| Lineal con número negativo   | Cambiar el sentido de la desigualdad                                        |
| Cuadrática                   | Encontrar raíces y analizar signos                                          |
| Cuadrática factorizada       | Tabla de signos                                                             |
| Cuadrática sin raíces reales | Analizar el signo mediante el coeficiente principal o completar el cuadrado |
| Cuadrática con raíz doble    | El signo no cambia en la raíz                                               |
| Racional                     | Puntos críticos y restricciones de dominio                                  |

Las ideas fundamentales son:

$$
\\boxed{\\text{raíces}+\\text{signos}+\\text{intervalos}}
$$

para las inecuaciones cuadráticas, y

$$
\\boxed{\\text{despejar}+\\text{invertir el signo si corresponde}}
$$

para las inecuaciones lineales.

---

## 27. Idea fundamental

Resolver una inecuación significa determinar **en qué regiones de la recta real la desigualdad es verdadera**.

En las inecuaciones lineales, normalmente basta con despejar la variable.

En las inecuaciones cuadráticas, las raíces dividen la recta real en intervalos y el signo de la expresión determina cuáles de ellos forman parte de la solución.

Por eso, una inecuación cuadrática puede entenderse como un problema de:

$$
\\boxed{\\text{puntos críticos}\\longrightarrow\\text{signos}\\longrightarrow\\text{intervalos}}
$$
`,i=`# Inequacions lineals i quadràtiques

Les **inequacions lineals i quadràtiques** permeten determinar quins valors d'una variable fan que una desigualtat algebraica sigui certa.

A diferència d'una equació, una inequació normalment no té una única solució. La seva solució sol ser un **interval** o una unió d'intervals.

---

## 1. Què és una inequació?

Una inequació és una desigualtat que conté una variable.

Els símbols principals són:

- $<$ menor que
- $>$ major que
- $\\leq$ menor o igual que
- $\\geq$ major o igual que

Per exemple:

$$
2x+3>7
$$

Resoldre aquesta inequació significa trobar tots els valors de $x$ que fan que la desigualtat sigui certa.

---

## 2. Inequacions lineals

Una inequació lineal té la variable amb exponent $1$.

Per exemple:

$$
3x-5>7
$$

L'objectiu és aïllar $x$, de manera semblant a una equació.

### Exemple

$$
3x-5>7
$$

Sumem $5$:

$$
3x>12
$$

Dividim entre $3$:

$$
x>4
$$

Per tant:

$$
\\boxed{x>4}
$$

En notació d'interval:

$$
(4,\\infty)
$$

---

## 3. Regla fonamental en multiplicar o dividir per un nombre negatiu

Aquesta és una de les regles més importants de les inequacions.

Si multipliquem o dividim una desigualtat per un nombre negatiu, **el sentit de la desigualtat canvia**.

Per exemple:

$$
-2x>6
$$

Dividim entre $-2$:

$$
x<-3
$$

El símbol $>$ es converteix en $<$.

### Exemple

$$
-3x+2\\leq 11
$$

Restem $2$:

$$
-3x\\leq 9
$$

Dividim entre $-3$ i canviem el sentit:

$$
x\\geq -3
$$

Per tant:

$$
\\boxed{x\\geq -3}
$$

---

## 4. Representació a la recta real

Les solucions d'una inequació es poden representar sobre la recta real.

Per a:

$$
x>2
$$

s'utilitzen els valors majors que $2$, sense incloure el $2$.

En notació d'interval:

$$
(2,\\infty)
$$

Per a:

$$
x\\geq 2
$$

el $2$ sí que està inclòs:

$$
[2,\\infty)
$$

### Regla

- $<$ o $>$ → extrem obert
- $\\leq$ o $\\geq$ → extrem tancat

---

## 5. Inequacions lineals amb diversos termes

Considerem:

$$
4x-7\\leq 2x+5
$$

Agrupem els termes amb $x$:

$$
4x-2x\\leq 5+7
$$

$$
2x\\leq 12
$$

Dividim entre $2$:

$$
x\\leq 6
$$

Solució:

$$
\\boxed{x\\leq 6}
$$

En intervals:

$$
(-\\infty,6]
$$

---

## 6. Inequacions amb parèntesis

Primer desenvolupem els parèntesis.

Per exemple:

$$
3(x-2)+1>2x+4
$$

Desenvolupem:

$$
3x-6+1>2x+4
$$

Simplifiquem:

$$
3x-5>2x+4
$$

Restem $2x$:

$$
x-5>4
$$

Sumem $5$:

$$
x>9
$$

Per tant:

$$
\\boxed{x>9}
$$

---

## 7. Inequacions dobles

També podem tenir dues desigualtats simultànies.

Per exemple:

$$
2<x+1\\leq 5
$$

Restem $1$ als tres membres:

$$
1<x\\leq 4
$$

Per tant:

$$
\\boxed{1<x\\leq 4}
$$

En notació d'interval:

$$
(1,4]
$$

---

## 8. Inequacions quadràtiques

Una inequació quadràtica conté un polinomi de segon grau.

Per exemple:

$$
x^2-5x+6>0
$$

Primer factoritzem:

$$
(x-2)(x-3)>0
$$

Els valors crítics són:

$$
x=2
$$

i

$$
x=3
$$

Aquests valors divideixen la recta real en tres intervals:

$$
(-\\infty,2),\\qquad (2,3),\\qquad (3,\\infty)
$$

---

## 9. Anàlisi del signe

Per determinar on el producte és positiu o negatiu, estudiem el signe de cada factor.

| Interval      | $x-2$ | $x-3$ | Producte |
| ------------- | ----: | ----: | -------: |
| $(-\\infty,2)$ |   $-$ |   $-$ |      $+$ |
| $(2,3)$       |   $+$ |   $-$ |      $-$ |
| $(3,\\infty)$  |   $+$ |   $+$ |      $+$ |

Com que volem:

$$
(x-2)(x-3)>0
$$

seleccionem els intervals on el producte és positiu:

$$
\\boxed{x<2\\quad\\text{o}\\quad x>3}
$$

En intervals:

$$
\\boxed{(-\\infty,2)\\cup(3,\\infty)}
$$

---

## 10. Per què apareixen els punts crítics?

Els punts crítics són els valors on l'expressió pot canviar de signe.

Per a un polinomi factoritzat:

$$
(x-a)(x-b)
$$

els punts crítics són:

$$
x=a,\\qquad x=b
$$

Aquests valors divideixen la recta real en regions on el signe roman constant.

---

## 11. Inequació quadràtica menor que zero

Considerem:

$$
x^2-5x+6<0
$$

Factoritzem:

$$
(x-2)(x-3)<0
$$

De la taula anterior sabem que el producte és negatiu entre les arrels.

Per tant:

$$
\\boxed{2<x<3}
$$

En intervals:

$$
\\boxed{(2,3)}
$$

---

## 12. Quan la desigualtat inclou la igualtat

Considerem:

$$
x^2-5x+6\\geq 0
$$

Factoritzem:

$$
(x-2)(x-3)\\geq 0
$$

El producte és positiu fora de les arrels i és igual a zero en aquestes.

Per tant:

$$
\\boxed{x\\leq 2\\quad\\text{o}\\quad x\\geq 3}
$$

En intervals:

$$
\\boxed{(-\\infty,2]\\cup[3,\\infty)}
$$

Els extrems s'inclouen perquè la desigualtat conté $\\geq$.

---

## 13. Mètode dels punts de prova

Una altra manera de resoldre una inequació quadràtica és escollir un punt de cada interval i comprovar el signe.

Per a:

$$
(x-2)(x-3)>0
$$

els intervals són:

$$
(-\\infty,2),\\quad (2,3),\\quad (3,\\infty)
$$

Podem escollir:

- $x=0$
- $x=2.5$
- $x=4$

### Primer interval

$$
(0-2)(0-3)=(-2)(-3)=6>0
$$

S'inclou.

### Segon interval

$$
(2.5-2)(2.5-3)=(0.5)(-0.5)<0
$$

No s'inclou.

### Tercer interval

$$
(4-2)(4-3)=2>0
$$

S'inclou.

Resultat:

$$
\\boxed{(-\\infty,2)\\cup(3,\\infty)}
$$

---

## 14. Inequacions quadràtiques amb coeficient principal negatiu

Considerem:

$$
-x^2+4x-3>0
$$

Factoritzem:

$$
-(x^2-4x+3)>0
$$

$$
-(x-1)(x-3)>0
$$

Els punts crítics són $1$ i $3$.

La paràbola obre cap avall, de manera que és positiva entre les arrels.

Així:

$$
\\boxed{1<x<3}
$$

---

## 15. Ús de la paràbola

Una inequació quadràtica també es pot interpretar mitjançant la seva funció associada:

$$
f(x)=ax^2+bx+c
$$

Resoldre:

$$
ax^2+bx+c>0
$$

equival a trobar els valors de $x$ per als quals la gràfica de $f$ està **per sobre de l'eix $x$**.

Resoldre:

$$
ax^2+bx+c<0
$$

equival a trobar on la gràfica està **per sota de l'eix $x$**.

---

## 16. Exemple mitjançant la gràfica

Considerem:

$$
x^2-4x+3<0
$$

L'expressió es factoritza com:

$$
(x-1)(x-3)<0
$$

Les arrels són $1$ i $3$.

La paràbola obre cap amunt, de manera que està per sota de l'eix $x$ entre les arrels.

Per tant:

$$
\\boxed{1<x<3}
$$

---

## 17. Quan no existeixen arrels reals

No totes les expressions quadràtiques tenen arrels reals.

Considerem:

$$
x^2+1>0
$$

Com que:

$$
x^2\\geq 0
$$

tenim:

$$
x^2+1\\geq 1
$$

Per tant, sempre és positiva:

$$
\\boxed{x\\in\\mathbb{R}}
$$

En canvi:

$$
x^2+1<0
$$

no té solució real:

$$
\\boxed{\\varnothing}
$$

---

## 18. Discriminant

Per a una equació quadràtica:

$$
ax^2+bx+c=0
$$

el discriminant és:

$$
\\Delta=b^2-4ac
$$

Permet determinar el nombre d'arrels reals.

### Si $\\Delta>0$

Existeixen dues arrels reals diferents.

### Si $\\Delta=0$

Existeix una arrel real doble.

### Si $\\Delta<0$

No existeixen arrels reals.

Això també ajuda a analitzar el signe d'una expressió quadràtica.

---

## 19. Una arrel doble

Considerem:

$$
(x-2)^2\\geq 0
$$

Un quadrat sempre és no negatiu.

Per tant:

$$
\\boxed{x\\in\\mathbb{R}}
$$

En canvi:

$$
(x-2)^2<0
$$

no té solució real:

$$
\\boxed{\\varnothing}
$$

L'arrel $x=2$ no canvia el signe perquè té multiplicitat parella.

---

## 20. Inequacions quadràtiques amb fraccions

Si l'expressió conté una fracció, primer hem de tenir en compte les restriccions del denominador.

Per exemple:

$$
\\frac{x^2-4}{x-1}>0
$$

Factoritzem el numerador:

$$
\\frac{(x-2)(x+2)}{x-1}>0
$$

Els punts crítics són:

$$
x=-2,\\qquad x=1,\\qquad x=2
$$

Però $x=1$ no pertany al domini perquè anul·la el denominador.

Els intervals són:

$$
(-\\infty,-2),\\quad (-2,1),\\quad (1,2),\\quad (2,\\infty)
$$

Després estudiem el signe en cada interval.

Aquest procediment connecta les inequacions quadràtiques amb les **inequacions racionals**.

---

## 21. Multiplicitat de les arrels

La multiplicitat d'una arrel determina si el signe canvia en travessar-la.

### Multiplicitat senar

El signe canvia.

Per exemple:

$$
(x-2)
$$

canvia de signe en passar per $x=2$.

### Multiplicitat parella

El signe no canvia.

Per exemple:

$$
(x-2)^2
$$

és positiu als dos costats de $2$.

Aquesta observació permet construir taules de signes de manera més ràpida.

---

## 22. Procediment general per a inequacions lineals

Per resoldre una inequació lineal:

1. Elimina els parèntesis.
2. Redueix els termes semblants.
3. Agrupa les variables en un costat.
4. Agrupa les constants a l'altre.
5. Aïlla la variable.
6. Si multipliques o divideixes entre un nombre negatiu, canvia el sentit de la desigualtat.
7. Expressa la solució mitjançant una desigualtat o un interval.

---

## 23. Procediment general per a inequacions quadràtiques

Per resoldre una inequació quadràtica:

1. Porta tots els termes a un mateix costat.
2. Simplifica l'expressió.
3. Troba les arrels.
4. Factoritza quan sigui possible.
5. Ordena els punts crítics.
6. Divideix la recta real en intervals.
7. Determina el signe en cada interval.
8. Selecciona els intervals que compleixen la desigualtat.
9. Inclou les arrels si la desigualtat conté $\\leq$ o $\\geq$.
10. Escriu la solució en notació d'interval.

---

## 24. Exemple complet

Resolem:

$$
2x^2-x-3\\leq 0
$$

### Pas 1: Factoritzar

Busquem dos factors:

$$
2x^2-x-3=(2x-3)(x+1)
$$

Per tant:

$$
(2x-3)(x+1)\\leq 0
$$

### Pas 2: Trobar els punts crítics

Igualem cada factor a zero:

$$
2x-3=0
$$

$$
x=\\frac{3}{2}
$$

i:

$$
x+1=0
$$

$$
x=-1
$$

### Pas 3: Ordenar els punts

$$
-1<\\frac{3}{2}
$$

Els intervals són:

$$
(-\\infty,-1),\\quad
\\left(-1,\\frac{3}{2}\\right),\\quad
\\left(\\frac{3}{2},\\infty\\right)
$$

### Pas 4: Analitzar el signe

| Interval                          | $2x-3$ | $x+1$ | Producte |
| --------------------------------- | -----: | ----: | -------: |
| $(-\\infty,-1)$                    |    $-$ |   $-$ |      $+$ |
| $\\left(-1,\\frac{3}{2}\\right)$     |    $-$ |   $+$ |      $-$ |
| $\\left(\\frac{3}{2},\\infty\\right)$ |    $+$ |   $+$ |      $+$ |

Volem:

$$
(2x-3)(x+1)\\leq 0
$$

Per tant, seleccionem l'interval on el producte és negatiu i els punts on és zero:

$$
\\boxed{-1\\leq x\\leq\\frac{3}{2}}
$$

En intervals:

$$
\\boxed{\\left[-1,\\frac{3}{2}\\right]}
$$

---

## 25. Errors freqüents

### Oblidar canviar el sentit en dividir entre un nombre negatiu

Incorrecte:

$$
-2x>4
\\Rightarrow x>-2
$$

Correcte:

$$
-2x>4
\\Rightarrow x<-2
$$

### Incloure una arrel en una desigualtat estricta

Per a:

$$
(x-2)(x-3)>0
$$

no podem incloure $2$ ni $3$.

La solució és:

$$
(-\\infty,2)\\cup(3,\\infty)
$$

### Incloure sempre les arrels

Les arrels només s'inclouen quan la desigualtat conté:

$$
\\leq
$$

o

$$
\\geq
$$

### Resoldre una quadràtica com si fos una equació

Trobar les arrels no és suficient. Les arrels només divideixen la recta en intervals on hem d'estudiar el signe.

### Oblidar el domini

En expressions amb denominadors, els valors que fan zero el denominador mai poden pertànyer a la solució.

---

## 26. Resum

| Tipus                         | Mètode principal                                                              |
| ----------------------------- | ----------------------------------------------------------------------------- |
| Lineal                        | Aïllar la variable                                                            |
| Lineal amb nombre negatiu     | Canviar el sentit de la desigualtat                                           |
| Quadràtica                    | Trobar arrels i analitzar signes                                              |
| Quadràtica factoritzada       | Taula de signes                                                               |
| Quadràtica sense arrels reals | Analitzar el signe mitjançant el coeficient principal o completant el quadrat |
| Quadràtica amb arrel doble    | El signe no canvia a l'arrel                                                  |
| Racional                      | Punts crítics i restriccions de domini                                        |

Les idees fonamentals són:

$$
\\boxed{\\text{arrels}+\\text{signes}+\\text{intervals}}
$$

per a les inequacions quadràtiques, i

$$
\\boxed{\\text{aïllar}+\\text{invertir el signe si correspon}}
$$

per a les inequacions lineals.

---

## 27. Idea fonamental

Resoldre una inequació significa determinar **en quines regions de la recta real la desigualtat és certa**.

En les inequacions lineals, normalment n'hi ha prou amb aïllar la variable.

En les inequacions quadràtiques, les arrels divideixen la recta real en intervals i el signe de l'expressió determina quins formen part de la solució.

Per això, una inequació quadràtica es pot entendre com un problema de:

$$
\\boxed{\\text{punts crítics}\\longrightarrow\\text{signes}\\longrightarrow\\text{intervals}}
$$
`,a=`# Linear and quadratic inequalities

**Linear and quadratic inequalities** allow us to determine which values of a variable make an algebraic inequality true.

Unlike an equation, an inequality usually does not have a single solution. Its solution is usually an **interval** or a union of intervals.

---

## 1. What is an inequality?

An inequality is a statement involving a variable and a comparison between expressions.

The main symbols are:

- $<$ less than
- $>$ greater than
- $\\leq$ less than or equal to
- $\\geq$ greater than or equal to

For example:

$$
2x+3>7
$$

Solving this inequality means finding all values of $x$ that make the inequality true.

---

## 2. Linear inequalities

A linear inequality contains the variable with exponent $1$.

For example:

$$
3x-5>7
$$

The goal is to isolate $x$, similarly to solving an equation.

### Example

$$
3x-5>7
$$

Add $5$:

$$
3x>12
$$

Divide by $3$:

$$
x>4
$$

Therefore:

$$
\\boxed{x>4}
$$

In interval notation:

$$
(4,\\infty)
$$

---

## 3. The fundamental rule when multiplying or dividing by a negative number

This is one of the most important rules for inequalities.

If we multiply or divide an inequality by a negative number, **the direction of the inequality changes**.

For example:

$$
-2x>6
$$

Divide by $-2$:

$$
x<-3
$$

The symbol $>$ becomes $<$.

### Example

$$
-3x+2\\leq 11
$$

Subtract $2$:

$$
-3x\\leq 9
$$

Divide by $-3$ and reverse the inequality:

$$
x\\geq -3
$$

Therefore:

$$
\\boxed{x\\geq -3}
$$

---

## 4. Representation on the real number line

The solutions of an inequality can be represented on the real number line.

For:

$$
x>2
$$

we use values greater than $2$, without including $2$.

In interval notation:

$$
(2,\\infty)
$$

For:

$$
x\\geq 2
$$

the value $2$ is included:

$$
[2,\\infty)
$$

### Rule

- $<$ or $>$ → open endpoint
- $\\leq$ or $\\geq$ → closed endpoint

---

## 5. Linear inequalities with several terms

Consider:

$$
4x-7\\leq 2x+5
$$

Group the terms containing $x$:

$$
4x-2x\\leq 5+7
$$

$$
2x\\leq 12
$$

Divide by $2$:

$$
x\\leq 6
$$

Solution:

$$
\\boxed{x\\leq 6}
$$

In interval notation:

$$
(-\\infty,6]
$$

---

## 6. Inequalities with parentheses

First expand the parentheses.

For example:

$$
3(x-2)+1>2x+4
$$

Expand:

$$
3x-6+1>2x+4
$$

Simplify:

$$
3x-5>2x+4
$$

Subtract $2x$:

$$
x-5>4
$$

Add $5$:

$$
x>9
$$

Therefore:

$$
\\boxed{x>9}
$$

---

## 7. Compound inequalities

We can also have two inequalities that must hold simultaneously.

For example:

$$
2<x+1\\leq 5
$$

Subtract $1$ from all three parts:

$$
1<x\\leq 4
$$

Therefore:

$$
\\boxed{1<x\\leq 4}
$$

In interval notation:

$$
(1,4]
$$

---

## 8. Quadratic inequalities

A quadratic inequality contains a second-degree polynomial.

For example:

$$
x^2-5x+6>0
$$

First factor:

$$
(x-2)(x-3)>0
$$

The critical values are:

$$
x=2
$$

and

$$
x=3
$$

These values divide the real number line into three intervals:

$$
(-\\infty,2),\\qquad (2,3),\\qquad (3,\\infty)
$$

---

## 9. Sign analysis

To determine where the product is positive or negative, we study the sign of each factor.

| Interval      | $x-2$ | $x-3$ | Product |
| ------------- | ----: | ----: | ------: |
| $(-\\infty,2)$ |   $-$ |   $-$ |     $+$ |
| $(2,3)$       |   $+$ |   $-$ |     $-$ |
| $(3,\\infty)$  |   $+$ |   $+$ |     $+$ |

Since we want:

$$
(x-2)(x-3)>0
$$

we select the intervals where the product is positive:

$$
\\boxed{x<2\\quad\\text{or}\\quad x>3}
$$

In interval notation:

$$
\\boxed{(-\\infty,2)\\cup(3,\\infty)}
$$

---

## 10. Why do critical points appear?

Critical points are values where the expression can change sign.

For a factored polynomial:

$$
(x-a)(x-b)
$$

the critical points are:

$$
x=a,\\qquad x=b
$$

These values divide the real number line into regions where the sign remains constant.

---

## 11. Quadratic inequality less than zero

Consider:

$$
x^2-5x+6<0
$$

Factor:

$$
(x-2)(x-3)<0
$$

From the previous sign table, we know that the product is negative between the roots.

Therefore:

$$
\\boxed{2<x<3}
$$

In interval notation:

$$
\\boxed{(2,3)}
$$

---

## 12. When the inequality includes equality

Consider:

$$
x^2-5x+6\\geq 0
$$

Factor:

$$
(x-2)(x-3)\\geq 0
$$

The product is positive outside the roots and equal to zero at the roots.

Therefore:

$$
\\boxed{x\\leq 2\\quad\\text{or}\\quad x\\geq 3}
$$

In interval notation:

$$
\\boxed{(-\\infty,2]\\cup[3,\\infty)}
$$

The endpoints are included because the inequality contains $\\geq$.

---

## 13. Test-point method

Another way to solve a quadratic inequality is to choose one point from each interval and test its sign.

For:

$$
(x-2)(x-3)>0
$$

the intervals are:

$$
(-\\infty,2),\\quad (2,3),\\quad (3,\\infty)
$$

We can choose:

- $x=0$
- $x=2.5$
- $x=4$

### First interval

$$
(0-2)(0-3)=(-2)(-3)=6>0
$$

Include it.

### Second interval

$$
(2.5-2)(2.5-3)=(0.5)(-0.5)<0
$$

Do not include it.

### Third interval

$$
(4-2)(4-3)=2>0
$$

Include it.

Result:

$$
\\boxed{(-\\infty,2)\\cup(3,\\infty)}
$$

---

## 14. Quadratic inequalities with a negative leading coefficient

Consider:

$$
-x^2+4x-3>0
$$

Factor:

$$
-(x^2-4x+3)>0
$$

$$
-(x-1)(x-3)>0
$$

The critical points are $1$ and $3$.

The parabola opens downward, so it is positive between the roots.

Therefore:

$$
\\boxed{1<x<3}
$$

---

## 15. Using the parabola

A quadratic inequality can also be interpreted using its associated function:

$$
f(x)=ax^2+bx+c
$$

Solving:

$$
ax^2+bx+c>0
$$

means finding the values of $x$ for which the graph of $f$ is **above the $x$-axis**.

Solving:

$$
ax^2+bx+c<0
$$

means finding where the graph is **below the $x$-axis**.

---

## 16. Example using the graph

Consider:

$$
x^2-4x+3<0
$$

The expression factors as:

$$
(x-1)(x-3)<0
$$

The roots are $1$ and $3$.

The parabola opens upward, so it is below the $x$-axis between the roots.

Therefore:

$$
\\boxed{1<x<3}
$$

---

## 17. When there are no real roots

Not every quadratic expression has real roots.

Consider:

$$
x^2+1>0
$$

Since:

$$
x^2\\geq 0
$$

we have:

$$
x^2+1\\geq 1
$$

Therefore, it is always positive:

$$
\\boxed{x\\in\\mathbb{R}}
$$

On the other hand:

$$
x^2+1<0
$$

has no real solution:

$$
\\boxed{\\varnothing}
$$

---

## 18. Discriminant

For a quadratic equation:

$$
ax^2+bx+c=0
$$

the discriminant is:

$$
\\Delta=b^2-4ac
$$

It determines the number of real roots.

### If $\\Delta>0$

There are two distinct real roots.

### If $\\Delta=0$

There is one repeated real root.

### If $\\Delta<0$

There are no real roots.

This also helps us analyze the sign of a quadratic expression.

---

## 19. A repeated root

Consider:

$$
(x-2)^2\\geq 0
$$

A square is always non-negative.

Therefore:

$$
\\boxed{x\\in\\mathbb{R}}
$$

On the other hand:

$$
(x-2)^2<0
$$

has no real solution:

$$
\\boxed{\\varnothing}
$$

The root $x=2$ does not change the sign because it has even multiplicity.

---

## 20. Quadratic inequalities involving fractions

If the expression contains a fraction, we must first consider the restrictions imposed by the denominator.

For example:

$$
\\frac{x^2-4}{x-1}>0
$$

Factor the numerator:

$$
\\frac{(x-2)(x+2)}{x-1}>0
$$

The critical points are:

$$
x=-2,\\qquad x=1,\\qquad x=2
$$

But $x=1$ is not in the domain because it makes the denominator zero.

The intervals are:

$$
(-\\infty,-2),\\quad (-2,1),\\quad (1,2),\\quad (2,\\infty)
$$

We then analyze the sign on each interval.

This procedure connects quadratic inequalities with **rational inequalities**.

---

## 21. Root multiplicity

The multiplicity of a root determines whether the sign changes when passing through it.

### Odd multiplicity

The sign changes.

For example:

$$
(x-2)
$$

changes sign when passing through $x=2$.

### Even multiplicity

The sign does not change.

For example:

$$
(x-2)^2
$$

is positive on both sides of $2$.

This observation allows us to construct sign tables more quickly.

---

## 22. General procedure for linear inequalities

To solve a linear inequality:

1. Expand parentheses.
2. Combine like terms.
3. Group the variables on one side.
4. Group the constants on the other side.
5. Isolate the variable.
6. If you multiply or divide by a negative number, reverse the inequality.
7. Express the solution as an inequality or interval.

---

## 23. General procedure for quadratic inequalities

To solve a quadratic inequality:

1. Move all terms to the same side.
2. Simplify the expression.
3. Find its roots.
4. Factor when possible.
5. Order the critical points.
6. Divide the real number line into intervals.
7. Determine the sign on each interval.
8. Select the intervals that satisfy the inequality.
9. Include the roots if the inequality contains $\\leq$ or $\\geq$.
10. Write the solution in interval notation.

---

## 24. Complete example

Solve:

$$
2x^2-x-3\\leq 0
$$

### Step 1: Factor

We look for two factors:

$$
2x^2-x-3=(2x-3)(x+1)
$$

Therefore:

$$
(2x-3)(x+1)\\leq 0
$$

### Step 2: Find the critical points

Set each factor equal to zero:

$$
2x-3=0
$$

$$
x=\\frac{3}{2}
$$

and:

$$
x+1=0
$$

$$
x=-1
$$

### Step 3: Order the points

$$
-1<\\frac{3}{2}
$$

The intervals are:

$$
(-\\infty,-1),\\quad
\\left(-1,\\frac{3}{2}\\right),\\quad
\\left(\\frac{3}{2},\\infty\\right)
$$

### Step 4: Analyze the sign

| Interval                          | $2x-3$ | $x+1$ | Product |
| --------------------------------- | -----: | ----: | ------: |
| $(-\\infty,-1)$                    |    $-$ |   $-$ |     $+$ |
| $\\left(-1,\\frac{3}{2}\\right)$     |    $-$ |   $+$ |     $-$ |
| $\\left(\\frac{3}{2},\\infty\\right)$ |    $+$ |   $+$ |     $+$ |

We want:

$$
(2x-3)(x+1)\\leq 0
$$

Therefore, we select the interval where the product is negative and the points where it is zero:

$$
\\boxed{-1\\leq x\\leq\\frac{3}{2}}
$$

In interval notation:

$$
\\boxed{\\left[-1,\\frac{3}{2}\\right]}
$$

---

## 25. Common mistakes

### Forgetting to reverse the inequality when dividing by a negative number

Incorrect:

$$
-2x>4
\\Rightarrow x>-2
$$

Correct:

$$
-2x>4
\\Rightarrow x<-2
$$

### Including a root in a strict inequality

For:

$$
(x-2)(x-3)>0
$$

we cannot include $2$ or $3$.

The solution is:

$$
(-\\infty,2)\\cup(3,\\infty)
$$

### Always including the roots

Roots are included only when the inequality contains:

$$
\\leq
$$

or

$$
\\geq
$$

### Solving a quadratic as if it were an equation

Finding the roots is not enough. The roots only divide the real number line into intervals where we must analyze the sign.

### Forgetting the domain

In expressions with denominators, values that make the denominator zero can never belong to the solution.

---

## 26. Summary

| Type                           | Main method                                                             |
| ------------------------------ | ----------------------------------------------------------------------- |
| Linear                         | Isolate the variable                                                    |
| Linear with a negative number  | Reverse the inequality                                                  |
| Quadratic                      | Find roots and analyze signs                                            |
| Factored quadratic             | Sign table                                                              |
| Quadratic with no real roots   | Analyze the sign using the leading coefficient or completing the square |
| Quadratic with a repeated root | The sign does not change at the root                                    |
| Rational                       | Critical points and domain restrictions                                 |

The fundamental ideas are:

$$
\\boxed{\\text{roots}+\\text{signs}+\\text{intervals}}
$$

for quadratic inequalities, and

$$
\\boxed{\\text{isolate}+\\text{reverse the sign when necessary}}
$$

for linear inequalities.

---

## 27. Fundamental idea

Solving an inequality means determining **which regions of the real number line make the inequality true**.

For linear inequalities, it is usually enough to isolate the variable.

For quadratic inequalities, the roots divide the real number line into intervals, and the sign of the expression determines which intervals belong to the solution.

Therefore, a quadratic inequality can be understood as a problem of:

$$
\\boxed{\\text{critical points}\\longrightarrow\\text{signs}\\longrightarrow\\text{intervals}}
$$
`;function o(){let{locale:o}=t();return e(n,{id:`linear-quadratic-inequalities`,content:{es:r,ca:i,en:a}[o]})}export{o as default};