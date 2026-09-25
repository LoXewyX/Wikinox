import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-BYtsCiYd.js";import{t as n}from"./TopicPage-BAzQYl-h.js";var r=`# Inecuaciones racionales

Una **inecuación racional** es una desigualdad en la que aparece una expresión racional, es decir, un cociente de polinomios.

Por ejemplo:

$$
\\frac{x-2}{x+1}>0
$$

El objetivo es determinar todos los valores de $x$ que hacen verdadera la desigualdad.

A diferencia de una ecuación racional, no basta con encontrar los valores que hacen que la expresión sea igual a cero. Es necesario estudiar el **signo de la expresión en diferentes intervalos**.

---

## 1. Expresiones racionales

Una expresión racional tiene la forma:

$$
\\frac{P(x)}{Q(x)}
$$

donde $P(x)$ y $Q(x)$ son polinomios y:

$$
Q(x)\\neq0
$$

Por ejemplo:

$$
\\frac{x+2}{x-3}
$$

es una expresión racional.

El valor $x=3$ no pertenece al dominio porque hace que el denominador sea cero.

---

## 2. ¿Qué es una inecuación racional?

Una inecuación racional compara una expresión racional con un número, normalmente $0$.

Ejemplos:

$$
\\frac{x-1}{x+2}>0
$$

$$
\\frac{x+3}{x-4}\\leq0
$$

$$
\\frac{x^2-1}{x+2}\\geq0
$$

También podemos encontrar inecuaciones en las que ambos lados contienen expresiones racionales.

Por ejemplo:

$$
\\frac{1}{x-1}>\\frac{2}{x+3}
$$

En estos casos, normalmente conviene llevar todos los términos a un mismo lado.

---

## 3. Restricciones del dominio

El primer paso es determinar dónde está definida la expresión.

Consideremos:

$$
\\frac{x+1}{x-4}>0
$$

El denominador no puede ser cero:

$$
x-4\\neq0
$$

Por tanto:

$$
x\\neq4
$$

El punto $x=4$ será un punto crítico y nunca podrá pertenecer a la solución.

---

## 4. Puntos críticos

Los puntos críticos son los valores que pueden cambiar el signo de la expresión.

Para una expresión:

$$
\\frac{P(x)}{Q(x)}
$$

debemos buscar:

1. Los ceros del numerador.
2. Los ceros del denominador.

Por ejemplo:

$$
\\frac{(x-2)(x+3)}{x-1}
$$

Los puntos críticos son:

$$
x=-3,\\qquad x=1,\\qquad x=2
$$

El punto $x=1$ procede del denominador y, por tanto, nunca puede pertenecer al dominio.

---

## 5. ¿Por qué son importantes los puntos críticos?

El signo de una expresión racional solamente puede cambiar al atravesar un cero del numerador o del denominador.

Por ejemplo:

$$
\\frac{x-2}{x+1}
$$

tiene los puntos críticos:

$$
x=-1,\\qquad x=2
$$

Estos puntos dividen la recta real en tres intervalos:

$$
(-\\infty,-1)
$$

$$
(-1,2)
$$

$$
(2,\\infty)
$$

En cada intervalo la expresión mantiene un signo constante.

---

## 6. Tabla de signos

La herramienta principal para resolver inecuaciones racionales es la **tabla de signos**.

Consideremos:

$$
\\frac{x-2}{x+1}>0
$$

Los puntos críticos son:

$$
x=-1,\\qquad x=2
$$

Dividimos la recta:

$$
(-\\infty,-1),\\qquad(-1,2),\\qquad(2,\\infty)
$$

Podemos estudiar el signo de cada factor.

| Intervalo      | $x-2$ | $x+1$ | Cociente |
| -------------- | ----: | ----: | -------: |
| $(-\\infty,-1)$ |   $-$ |   $-$ |      $+$ |
| $(-1,2)$       |   $-$ |   $+$ |      $-$ |
| $(2,\\infty)$   |   $+$ |   $+$ |      $+$ |

Como queremos:

$$
\\frac{x-2}{x+1}>0
$$

seleccionamos los intervalos donde el cociente es positivo:

$$
\\boxed{(-\\infty,-1)\\cup(2,\\infty)}
$$

Los extremos no se incluyen porque la desigualdad es estricta.

Además, $x=-1$ no pertenece al dominio.

---

## 7. Desigualdad estricta

Si tenemos:

$$
\\frac{x-2}{x+1}>0
$$

los valores donde la expresión es exactamente cero tampoco forman parte de la solución.

En este caso:

$$
x=2
$$

hace que el numerador sea cero.

Como la desigualdad es $>0$, debemos excluir $2$.

Por tanto:

$$
\\boxed{(-\\infty,-1)\\cup(2,\\infty)}
$$

---

## 8. Desigualdad no estricta

Si tenemos:

$$
\\frac{x-2}{x+1}\\geq0
$$

ahora sí podemos incluir el cero del numerador:

$$
x=2
$$

Pero seguimos sin poder incluir $x=-1$, porque el denominador sería cero.

Por tanto:

$$
\\boxed{(-\\infty,-1)\\cup[2,\\infty)}
$$

La diferencia entre $>$ y $\\geq$ es importante.

---

## 9. Ceros del numerador y denominador

Es fundamental distinguir entre ambos tipos de puntos críticos.

### Cero del numerador

Si:

$$
P(a)=0
$$

entonces la expresión puede valer $0$, siempre que el denominador no sea cero.

Por tanto, el punto puede incluirse cuando la desigualdad permite la igualdad.

### Cero del denominador

Si:

$$
Q(a)=0
$$

la expresión no está definida.

Por tanto:

$$
a
$$

nunca puede pertenecer a la solución.

---

## 10. Ejemplo con dos factores

Resolvamos:

$$
\\frac{(x-1)(x+3)}{x-2}>0
$$

Los puntos críticos son:

$$
x=-3,\\qquad x=1,\\qquad x=2
$$

Los intervalos son:

$$
(-\\infty,-3)
$$

$$
(-3,1)
$$

$$
(1,2)
$$

$$
(2,\\infty)
$$

Analizamos los signos:

| Intervalo      | $x+3$ | $x-1$ | $x-2$ | Expresión |
| -------------- | ----: | ----: | ----: | --------: |
| $(-\\infty,-3)$ |   $-$ |   $-$ |   $-$ |       $-$ |
| $(-3,1)$       |   $+$ |   $-$ |   $-$ |       $+$ |
| $(1,2)$        |   $+$ |   $+$ |   $-$ |       $-$ |
| $(2,\\infty)$   |   $+$ |   $+$ |   $+$ |       $+$ |

Queremos los intervalos positivos:

$$
\\boxed{(-3,1)\\cup(2,\\infty)}
$$

---

## 11. Resolver primero una inecuación racional

Consideremos:

$$
\\frac{1}{x-1}>\\frac{2}{x+3}
$$

Llevamos todo al mismo lado:

$$
\\frac{1}{x-1}-\\frac{2}{x+3}>0
$$

Buscamos denominador común:

$$
\\frac{x+3-2(x-1)}{(x-1)(x+3)}>0
$$

Simplificamos el numerador:

$$
x+3-2x+2=5-x
$$

Por tanto:

$$
\\frac{5-x}{(x-1)(x+3)}>0
$$

Los puntos críticos son:

$$
x=-3,\\qquad x=1,\\qquad x=5
$$

A partir de la tabla de signos obtenemos:

$$
\\boxed{(-3,1)\\cup(5,\\infty)}
$$

---

## 12. Inecuaciones racionales con polinomios factorizados

Es conveniente factorizar tanto el numerador como el denominador.

Por ejemplo:

$$
\\frac{x^2-4}{x^2-x-6}\\leq0
$$

Factorizamos:

$$
\\frac{(x-2)(x+2)}{(x-3)(x+2)}\\leq0
$$

Aunque algebraicamente podríamos simplificar:

$$
\\frac{x-2}{x-3}\\leq0
$$

debemos recordar que la expresión original no está definida en:

$$
x=-2
$$

Por tanto, la restricción original debe conservarse.

La solución de la expresión simplificada es:

$$
[2,3)
$$

En este caso $-2$ no afecta al intervalo solución, pero en otros ejercicios sí puede hacerlo.

---

## 13. No cancelar restricciones

Este es un error frecuente.

Consideremos:

$$
\\frac{(x-2)(x+1)}{x+1}>0
$$

Para $x\\neq-1$ podemos simplificar:

$$
x-2>0
$$

Por tanto:

$$
x>2
$$

En este caso la solución es:

$$
\\boxed{(2,\\infty)}
$$

Pero la restricción:

$$
x\\neq-1
$$

sigue existiendo.

Aunque $-1$ no termine perteneciendo al intervalo solución, nunca debemos olvidar las restricciones de la expresión original.

---

## 14. Multiplicar por el denominador

En las ecuaciones podemos multiplicar por un denominador sin cambiar el tipo de igualdad.

En una inecuación racional esto requiere mucho cuidado.

Por ejemplo:

$$
\\frac{1}{x}>0
$$

No podemos simplemente multiplicar por $x$ y escribir:

$$
1>0
$$

porque no sabemos si $x$ es positivo o negativo.

Si $x>0$, multiplicar por $x$ conserva el sentido:

$$
1>0
$$

Pero si $x<0$, el sentido de la desigualdad cambia:

$$
1<0
$$

Por eso, en las inecuaciones racionales suele ser más seguro utilizar una **tabla de signos**.

---

## 15. Regla de los signos

Para determinar el signo de un producto o cociente:

- Un número par de factores negativos produce un resultado positivo.
- Un número impar de factores negativos produce un resultado negativo.

Por ejemplo:

$$
(-)\\cdot(-)\\cdot(+)=+
$$

mientras que:

$$
(-)\\cdot(+)\\cdot(+) = -
$$

Esta regla permite construir rápidamente una tabla de signos.

---

## 16. Multiplicidad de las raíces

La multiplicidad de un factor determina si el signo cambia al atravesar una raíz.

Consideremos:

$$
(x-2)
$$

El factor tiene multiplicidad $1$, por lo que su signo cambia al pasar por $x=2$.

En cambio:

$$
(x-2)^2
$$

tiene multiplicidad $2$.

Su signo es siempre no negativo y no cambia de signo al atravesar $x=2$.

De forma general:

- multiplicidad **impar** → el signo cambia;
- multiplicidad **par** → el signo no cambia.

---

## 17. Ejemplo con una raíz doble

Resolvamos:

$$
\\frac{(x-2)^2}{x+1}>0
$$

Los puntos críticos son:

$$
x=-1,\\qquad x=2
$$

El factor $(x-2)^2$ es siempre positivo excepto en $x=2$.

Por tanto, el signo depende principalmente de $x+1$.

La expresión es positiva cuando:

$$
x>-1
$$

excepto en $x=2$, donde vale cero.

Por tanto:

$$
\\boxed{(-1,2)\\cup(2,\\infty)}
$$

---

## 18. Inecuaciones racionales con valor cero

Si queremos resolver:

$$
\\frac{(x-1)(x+2)}{x-3}\\geq0
$$

debemos incluir los ceros del numerador:

$$
x=1,\\qquad x=-2
$$

pero excluir el cero del denominador:

$$
x=3
$$

La tabla de signos proporciona:

$$
\\boxed{[-2,1]\\cup(3,\\infty)}
$$

---

## 19. Representación en la recta real

Los intervalos pueden representarse mediante:

- círculo abierto $\\rightarrow$ extremo no incluido;
- círculo cerrado $\\rightarrow$ extremo incluido.

Por ejemplo:

$$
[-2,3)
$$

incluye $-2$ pero no incluye $3$.

En una inecuación racional, los ceros del denominador siempre se representan como puntos excluidos.

---

## 20. Notación de intervalos

Algunas soluciones frecuentes son:

$$
(-\\infty,a)
$$

$$
(a,\\infty)
$$

$$
[a,b]
$$

$$
(a,b)
$$

$$
[a,b)
$$

$$
(a,b]
$$

El infinito nunca se incluye:

$$
(-\\infty,a]
$$

es correcto, pero:

$$
[-\\infty,a]
$$

no lo es.

---

## 21. Procedimiento general

Para resolver una inecuación racional:

1. Lleva todos los términos a un mismo lado.
2. Simplifica la expresión.
3. Factoriza numerador y denominador.
4. Determina las restricciones del dominio.
5. Encuentra los ceros del numerador.
6. Encuentra los ceros del denominador.
7. Ordena todos los puntos críticos.
8. Divide la recta real en intervalos.
9. Determina el signo en cada intervalo.
10. Selecciona los intervalos que cumplen la desigualdad.
11. Incluye los ceros del numerador cuando la desigualdad sea $\\geq$ o $\\leq$.
12. Excluye siempre los ceros del denominador.
13. Escribe la solución en notación de intervalos.

---

## 22. Ejemplo completo

Resolvamos:

$$
\\frac{x^2-1}{x^2-4}>0
$$

### Paso 1: factorizar

$$
\\frac{(x-1)(x+1)}{(x-2)(x+2)}>0
$$

### Paso 2: encontrar los puntos críticos

Ceros del numerador:

$$
x=-1,\\qquad x=1
$$

Ceros del denominador:

$$
x=-2,\\qquad x=2
$$

Los puntos críticos ordenados son:

$$
-2,\\quad -1,\\quad 1,\\quad 2
$$

### Paso 3: estudiar los signos

| Intervalo      | Signo |
| -------------- | ----: |
| $(-\\infty,-2)$ |   $+$ |
| $(-2,-1)$      |   $-$ |
| $(-1,1)$       |   $+$ |
| $(1,2)$        |   $-$ |
| $(2,\\infty)$   |   $+$ |

Queremos valores positivos:

$$
(-\\infty,-2)
$$

$$
(-1,1)
$$

$$
(2,\\infty)
$$

Por tanto:

$$
\\boxed{
(-\\infty,-2)\\cup(-1,1)\\cup(2,\\infty)
}
$$

---

## 23. Errores frecuentes

### Multiplicar por el denominador sin conocer su signo

Esto puede invertir incorrectamente la desigualdad.

### Incluir un cero del denominador

Si:

$$
Q(a)=0
$$

entonces $a$ nunca puede pertenecer a la solución.

### Olvidar los ceros del numerador

Si la desigualdad permite la igualdad, los ceros del numerador pueden incluirse.

### Cancelar factores y olvidar restricciones

Las restricciones pertenecen a la expresión original y deben conservarse.

### No factorizar completamente

Una factorización incompleta puede ocultar puntos críticos importantes.

### Probar solamente un punto

Un punto de prueba sirve para determinar el signo de un intervalo, pero primero debemos encontrar todos los puntos críticos.

---

## 24. Resumen

Las ideas fundamentales son:

| Concepto                    | Regla                             |
| --------------------------- | --------------------------------- |
| Cero del numerador          | Puede pertenecer a la solución    |
| Cero del denominador        | Nunca pertenece a la solución     |
| Desigualdad $>$ o $<$       | No incluye los ceros              |
| Desigualdad $\\geq$ o $\\leq$ | Puede incluir ceros del numerador |
| Multiplicidad impar         | El signo cambia                   |
| Multiplicidad par           | El signo no cambia                |
| Tabla de signos             | Determina el signo por intervalos |
| Restricciones               | Siempre deben conservarse         |

## 25. Idea fundamental

Una inecuación racional no se resuelve tratando el denominador como si fuera siempre positivo.

La idea central es dividir la recta real mediante los puntos donde el numerador o el denominador se hacen cero y estudiar el signo en cada intervalo:

$$
\\boxed{
\\text{factorizar}
\\rightarrow
\\text{puntos críticos}
\\rightarrow
\\text{tabla de signos}
\\rightarrow
\\text{intervalos solución}
}
$$

La regla más importante es:

$$
\\boxed{
\\text{cero del denominador}
\\Rightarrow
\\text{siempre excluido}
}
$$
`,i=`# Inequacions racionals

Una **inequació racional** és una desigualtat en què apareix una expressió racional, és a dir, un quocient de polinomis.

Per exemple:

$$
\\frac{x-2}{x+1}>0
$$

L'objectiu és determinar tots els valors de $x$ que fan certa la desigualtat.

A diferència d'una equació racional, no n'hi ha prou amb trobar els valors que fan que l'expressió sigui igual a zero. Cal estudiar el **signe de l'expressió en diferents intervals**.

---

## 1. Expressions racionals

Una expressió racional té la forma:

$$
\\frac{P(x)}{Q(x)}
$$

on $P(x)$ i $Q(x)$ són polinomis i:

$$
Q(x)\\neq0
$$

Per exemple:

$$
\\frac{x+2}{x-3}
$$

és una expressió racional.

El valor $x=3$ no pertany al domini perquè fa que el denominador sigui zero.

---

## 2. Què és una inequació racional?

Una inequació racional compara una expressió racional amb un nombre, normalment $0$.

Exemples:

$$
\\frac{x-1}{x+2}>0
$$

$$
\\frac{x+3}{x-4}\\leq0
$$

$$
\\frac{x^2-1}{x+2}\\geq0
$$

També podem trobar inequacions en què tots dos costats contenen expressions racionals.

Per exemple:

$$
\\frac{1}{x-1}>\\frac{2}{x+3}
$$

En aquests casos, normalment convé portar tots els termes a un mateix costat.

---

## 3. Restriccions del domini

El primer pas és determinar on està definida l'expressió.

Considerem:

$$
\\frac{x+1}{x-4}>0
$$

El denominador no pot ser zero:

$$
x-4\\neq0
$$

Per tant:

$$
x\\neq4
$$

El punt $x=4$ serà un punt crític i mai podrà pertànyer a la solució.

---

## 4. Punts crítics

Els punts crítics són els valors que poden canviar el signe de l'expressió.

Per a una expressió:

$$
\\frac{P(x)}{Q(x)}
$$

hem de buscar:

1. Els zeros del numerador.
2. Els zeros del denominador.

Per exemple:

$$
\\frac{(x-2)(x+3)}{x-1}
$$

Els punts crítics són:

$$
x=-3,\\qquad x=1,\\qquad x=2
$$

El punt $x=1$ prové del denominador i, per tant, mai pot pertànyer al domini.

---

## 5. Per què són importants els punts crítics?

El signe d'una expressió racional només pot canviar en travessar un zero del numerador o del denominador.

Per exemple:

$$
\\frac{x-2}{x+1}
$$

té els punts crítics:

$$
x=-1,\\qquad x=2
$$

Aquests punts divideixen la recta real en tres intervals:

$$
(-\\infty,-1)
$$

$$
(-1,2)
$$

$$
(2,\\infty)
$$

En cada interval l'expressió manté un signe constant.

---

## 6. Taula de signes

L'eina principal per resoldre inequacions racionals és la **taula de signes**.

Considerem:

$$
\\frac{x-2}{x+1}>0
$$

Els punts crítics són:

$$
x=-1,\\qquad x=2
$$

Dividim la recta:

$$
(-\\infty,-1),\\qquad(-1,2),\\qquad(2,\\infty)
$$

Podem estudiar el signe de cada factor.

| Interval       | $x-2$ | $x+1$ | Quocient |
| -------------- | ----: | ----: | -------: |
| $(-\\infty,-1)$ |   $-$ |   $-$ |      $+$ |
| $(-1,2)$       |   $-$ |   $+$ |      $-$ |
| $(2,\\infty)$   |   $+$ |   $+$ |      $+$ |

Com que volem:

$$
\\frac{x-2}{x+1}>0
$$

seleccionem els intervals on el quocient és positiu:

$$
\\boxed{(-\\infty,-1)\\cup(2,\\infty)}
$$

Els extrems no s'inclouen perquè la desigualtat és estricta.

A més, $x=-1$ no pertany al domini.

---

## 7. Desigualtat estricta

Si tenim:

$$
\\frac{x-2}{x+1}>0
$$

els valors on l'expressió és exactament zero tampoc formen part de la solució.

En aquest cas:

$$
x=2
$$

fa que el numerador sigui zero.

Com que la desigualtat és $>0$, hem d'excloure $2$.

Per tant:

$$
\\boxed{(-\\infty,-1)\\cup(2,\\infty)}
$$

---

## 8. Desigualtat no estricta

Si tenim:

$$
\\frac{x-2}{x+1}\\geq0
$$

ara sí que podem incloure el zero del numerador:

$$
x=2
$$

Però continuem sense poder incloure $x=-1$, perquè el denominador seria zero.

Per tant:

$$
\\boxed{(-\\infty,-1)\\cup[2,\\infty)}
$$

La diferència entre $>$ i $\\geq$ és important.

---

## 9. Zeros del numerador i del denominador

És fonamental distingir entre tots dos tipus de punts crítics.

### Zero del numerador

Si:

$$
P(a)=0
$$

aleshores l'expressió pot valer $0$, sempre que el denominador no sigui zero.

Per tant, el punt es pot incloure quan la desigualtat permet la igualtat.

### Zero del denominador

Si:

$$
Q(a)=0
$$

l'expressió no està definida.

Per tant:

$$
a
$$

mai pot pertànyer a la solució.

---

## 10. Exemple amb dos factors

Resolem:

$$
\\frac{(x-1)(x+3)}{x-2}>0
$$

Els punts crítics són:

$$
x=-3,\\qquad x=1,\\qquad x=2
$$

Els intervals són:

$$
(-\\infty,-3)
$$

$$
(-3,1)
$$

$$
(1,2)
$$

$$
(2,\\infty)
$$

Analitzem els signes:

| Interval       | $x+3$ | $x-1$ | $x-2$ | Expressió |
| -------------- | ----: | ----: | ----: | --------: |
| $(-\\infty,-3)$ |   $-$ |   $-$ |   $-$ |       $-$ |
| $(-3,1)$       |   $+$ |   $-$ |   $-$ |       $+$ |
| $(1,2)$        |   $+$ |   $+$ |   $-$ |       $-$ |
| $(2,\\infty)$   |   $+$ |   $+$ |   $+$ |       $+$ |

Volem els intervals positius:

$$
\\boxed{(-3,1)\\cup(2,\\infty)}
$$

---

## 11. Resoldre primer una inequació racional

Considerem:

$$
\\frac{1}{x-1}>\\frac{2}{x+3}
$$

Portem-ho tot al mateix costat:

$$
\\frac{1}{x-1}-\\frac{2}{x+3}>0
$$

Busquem un denominador comú:

$$
\\frac{x+3-2(x-1)}{(x-1)(x+3)}>0
$$

Simplifiquem el numerador:

$$
x+3-2x+2=5-x
$$

Per tant:

$$
\\frac{5-x}{(x-1)(x+3)}>0
$$

Els punts crítics són:

$$
x=-3,\\qquad x=1,\\qquad x=5
$$

A partir de la taula de signes obtenim:

$$
\\boxed{(-3,1)\\cup(5,\\infty)}
$$

---

## 12. Inequacions racionals amb polinomis factoritzats

És convenient factoritzar tant el numerador com el denominador.

Per exemple:

$$
\\frac{x^2-4}{x^2-x-6}\\leq0
$$

Factoritzem:

$$
\\frac{(x-2)(x+2)}{(x-3)(x+2)}\\leq0
$$

Tot i que algebraicament podríem simplificar:

$$
\\frac{x-2}{x-3}\\leq0
$$

hem de recordar que l'expressió original no està definida en:

$$
x=-2
$$

Per tant, la restricció original s'ha de conservar.

La solució de l'expressió simplificada és:

$$
[2,3)
$$

En aquest cas $-2$ no afecta l'interval solució, però en altres exercicis sí que ho pot fer.

---

## 13. No cancel·lar les restriccions

Aquest és un error freqüent.

Considerem:

$$
\\frac{(x-2)(x+1)}{x+1}>0
$$

Per a $x\\neq-1$ podem simplificar:

$$
x-2>0
$$

Per tant:

$$
x>2
$$

En aquest cas la solució és:

$$
\\boxed{(2,\\infty)}
$$

Però la restricció:

$$
x\\neq-1
$$

continua existint.

Encara que $-1$ no acabi pertanyent a l'interval solució, mai hem d'oblidar les restriccions de l'expressió original.

---

## 14. Multiplicar pel denominador

En les equacions podem multiplicar per un denominador sense canviar el tipus d'igualtat.

En una inequació racional això requereix molta cura.

Per exemple:

$$
\\frac{1}{x}>0
$$

No podem simplement multiplicar per $x$ i escriure:

$$
1>0
$$

perquè no sabem si $x$ és positiu o negatiu.

Si $x>0$, multiplicar per $x$ conserva el sentit:

$$
1>0
$$

Però si $x<0$, el sentit de la desigualtat canvia:

$$
1<0
$$

Per això, en les inequacions racionals sol ser més segur utilitzar una **taula de signes**.

---

## 15. Regla dels signes

Per determinar el signe d'un producte o quocient:

- Un nombre parell de factors negatius produeix un resultat positiu.
- Un nombre imparell de factors negatius produeix un resultat negatiu.

Per exemple:

$$
(-)\\cdot(-)\\cdot(+)=+
$$

mentre que:

$$
(-)\\cdot(+)\\cdot(+) = -
$$

Aquesta regla permet construir ràpidament una taula de signes.

---

## 16. Multiplicitat de les arrels

La multiplicitat d'un factor determina si el signe canvia en travessar una arrel.

Considerem:

$$
(x-2)
$$

El factor té multiplicitat $1$, de manera que el seu signe canvia en passar per $x=2$.

En canvi:

$$
(x-2)^2
$$

té multiplicitat $2$.

El seu signe és sempre no negatiu i no canvia de signe en travessar $x=2$.

En general:

- multiplicitat **imparell** → el signe canvia;
- multiplicitat **parell** → el signe no canvia.

---

## 17. Exemple amb una arrel doble

Resolem:

$$
\\frac{(x-2)^2}{x+1}>0
$$

Els punts crítics són:

$$
x=-1,\\qquad x=2
$$

El factor $(x-2)^2$ és sempre positiu excepte en $x=2$.

Per tant, el signe depèn principalment de $x+1$.

L'expressió és positiva quan:

$$
x>-1
$$

excepte en $x=2$, on val zero.

Per tant:

$$
\\boxed{(-1,2)\\cup(2,\\infty)}
$$

---

## 18. Inequacions racionals amb valor zero

Si volem resoldre:

$$
\\frac{(x-1)(x+2)}{x-3}\\geq0
$$

hem d'incloure els zeros del numerador:

$$
x=1,\\qquad x=-2
$$

però excloure el zero del denominador:

$$
x=3
$$

La taula de signes proporciona:

$$
\\boxed{[-2,1]\\cup(3,\\infty)}
$$

---

## 19. Representació en la recta real

Els intervals es poden representar mitjançant:

- cercle obert $\\rightarrow$ extrem no inclòs;
- cercle tancat $\\rightarrow$ extrem inclòs.

Per exemple:

$$
[-2,3)
$$

inclou $-2$ però no inclou $3$.

En una inequació racional, els zeros del denominador sempre es representen com a punts exclosos.

---

## 20. Notació d'intervals

Algunes solucions freqüents són:

$$
(-\\infty,a)
$$

$$
(a,\\infty)
$$

$$
[a,b]
$$

$$
(a,b)
$$

$$
[a,b)
$$

$$
(a,b]
$$

L'infinit mai s'inclou:

$$
(-\\infty,a]
$$

és correcte, però:

$$
[-\\infty,a]
$$

no ho és.

---

## 21. Procediment general

Per resoldre una inequació racional:

1. Porta tots els termes a un mateix costat.
2. Simplifica l'expressió.
3. Factoritza el numerador i el denominador.
4. Determina les restriccions del domini.
5. Troba els zeros del numerador.
6. Troba els zeros del denominador.
7. Ordena tots els punts crítics.
8. Divideix la recta real en intervals.
9. Determina el signe en cada interval.
10. Selecciona els intervals que compleixen la desigualtat.
11. Inclou els zeros del numerador quan la desigualtat sigui $\\geq$ o $\\leq$.
12. Exclou sempre els zeros del denominador.
13. Escriu la solució en notació d'intervals.

---

## 22. Exemple complet

Resolem:

$$
\\frac{x^2-1}{x^2-4}>0
$$

### Pas 1: factoritzar

$$
\\frac{(x-1)(x+1)}{(x-2)(x+2)}>0
$$

### Pas 2: trobar els punts crítics

Zeros del numerador:

$$
x=-1,\\qquad x=1
$$

Zeros del denominador:

$$
x=-2,\\qquad x=2
$$

Els punts crítics ordenats són:

$$
-2,\\quad -1,\\quad 1,\\quad 2
$$

### Pas 3: estudiar els signes

| Interval       | Signe |
| -------------- | ----: |
| $(-\\infty,-2)$ |   $+$ |
| $(-2,-1)$      |   $-$ |
| $(-1,1)$       |   $+$ |
| $(1,2)$        |   $-$ |
| $(2,\\infty)$   |   $+$ |

Volem valors positius:

$$
(-\\infty,-2)
$$

$$
(-1,1)
$$

$$
(2,\\infty)
$$

Per tant:

$$
\\boxed{
(-\\infty,-2)\\cup(-1,1)\\cup(2,\\infty)
}
$$

---

## 23. Errors freqüents

### Multiplicar pel denominador sense conèixer el seu signe

Això pot invertir incorrectament la desigualtat.

### Incloure un zero del denominador

Si:

$$
Q(a)=0
$$

aleshores $a$ mai pot pertànyer a la solució.

### Oblidar els zeros del numerador

Si la desigualtat permet la igualtat, els zeros del numerador es poden incloure.

### Cancel·lar factors i oblidar les restriccions

Les restriccions pertanyen a l'expressió original i s'han de conservar.

### No factoritzar completament

Una factorització incompleta pot ocultar punts crítics importants.

### Provar només un punt

Un punt de prova serveix per determinar el signe d'un interval, però primer hem de trobar tots els punts crítics.

---

## 24. Resum

Les idees fonamentals són:

| Concepte                    | Regla                            |
| --------------------------- | -------------------------------- |
| Zero del numerador          | Pot pertànyer a la solució       |
| Zero del denominador        | Mai pertany a la solució         |
| Desigualtat $>$ o $<$       | No inclou els zeros              |
| Desigualtat $\\geq$ o $\\leq$ | Pot incloure zeros del numerador |
| Multiplicitat imparella     | El signe canvia                  |
| Multiplicitat parella       | El signe no canvia               |
| Taula de signes             | Determina el signe per intervals |
| Restriccions                | Sempre s'han de conservar        |

## 25. Idea fonamental

Una inequació racional no es resol tractant el denominador com si fos sempre positiu.

La idea central és dividir la recta real mitjançant els punts on el numerador o el denominador es fan zero i estudiar el signe en cada interval:

$$
\\boxed{
\\text{factoritzar}
\\rightarrow
\\text{punts crítics}
\\rightarrow
\\text{taula de signes}
\\rightarrow
\\text{intervals solució}
}
$$

La regla més important és:

$$
\\boxed{
\\text{zero del denominador}
\\Rightarrow
\\text{sempre exclòs}
}
$$
`,a=`# Rational Inequalities

A **rational inequality** is an inequality containing a rational expression, that is, a quotient of polynomials.

For example:

$$
\\frac{x-2}{x+1}>0
$$

The goal is to determine all values of $x$ that make the inequality true.

Unlike a rational equation, it is not enough to find the values that make the expression equal to zero. We must study the **sign of the expression over different intervals**.

---

## 1. Rational expressions

A rational expression has the form:

$$
\\frac{P(x)}{Q(x)}
$$

where $P(x)$ and $Q(x)$ are polynomials and:

$$
Q(x)\\neq0
$$

For example:

$$
\\frac{x+2}{x-3}
$$

is a rational expression.

The value $x=3$ is not in the domain because it makes the denominator equal to zero.

---

## 2. What is a rational inequality?

A rational inequality compares a rational expression with a number, usually $0$.

Examples:

$$
\\frac{x-1}{x+2}>0
$$

$$
\\frac{x+3}{x-4}\\leq0
$$

$$
\\frac{x^2-1}{x+2}\\geq0
$$

We can also have inequalities in which both sides contain rational expressions.

For example:

$$
\\frac{1}{x-1}>\\frac{2}{x+3}
$$

In these cases, it is usually convenient to move all terms to the same side.

---

## 3. Domain restrictions

The first step is to determine where the expression is defined.

Consider:

$$
\\frac{x+1}{x-4}>0
$$

The denominator cannot be zero:

$$
x-4\\neq0
$$

Therefore:

$$
x\\neq4
$$

The point $x=4$ is a critical point and can never belong to the solution.

---

## 4. Critical points

Critical points are the values that can change the sign of the expression.

For an expression:

$$
\\frac{P(x)}{Q(x)}
$$

we must find:

1. The zeros of the numerator.
2. The zeros of the denominator.

For example:

$$
\\frac{(x-2)(x+3)}{x-1}
$$

The critical points are:

$$
x=-3,\\qquad x=1,\\qquad x=2
$$

The point $x=1$ comes from the denominator and therefore can never belong to the domain.

---

## 5. Why are critical points important?

The sign of a rational expression can only change when crossing a zero of the numerator or denominator.

For example:

$$
\\frac{x-2}{x+1}
$$

has the critical points:

$$
x=-1,\\qquad x=2
$$

These points divide the real line into three intervals:

$$
(-\\infty,-1)
$$

$$
(-1,2)
$$

$$
(2,\\infty)
$$

Within each interval, the expression has a constant sign.

---

## 6. Sign chart

The main tool for solving rational inequalities is the **sign chart**.

Consider:

$$
\\frac{x-2}{x+1}>0
$$

The critical points are:

$$
x=-1,\\qquad x=2
$$

Divide the real line:

$$
(-\\infty,-1),\\qquad(-1,2),\\qquad(2,\\infty)
$$

We can study the sign of each factor.

| Interval       | $x-2$ | $x+1$ | Quotient |
| -------------- | ----: | ----: | -------: |
| $(-\\infty,-1)$ |   $-$ |   $-$ |      $+$ |
| $(-1,2)$       |   $-$ |   $+$ |      $-$ |
| $(2,\\infty)$   |   $+$ |   $+$ |      $+$ |

Since we want:

$$
\\frac{x-2}{x+1}>0
$$

we select the intervals where the quotient is positive:

$$
\\boxed{(-\\infty,-1)\\cup(2,\\infty)}
$$

The endpoints are not included because the inequality is strict.

Also, $x=-1$ is not in the domain.

---

## 7. Strict inequality

If we have:

$$
\\frac{x-2}{x+1}>0
$$

the values where the expression is exactly zero are also excluded from the solution.

In this case:

$$
x=2
$$

makes the numerator equal to zero.

Since the inequality is $>0$, we must exclude $2$.

Therefore:

$$
\\boxed{(-\\infty,-1)\\cup(2,\\infty)}
$$

---

## 8. Non-strict inequality

If we have:

$$
\\frac{x-2}{x+1}\\geq0
$$

we can now include the zero of the numerator:

$$
x=2
$$

But we still cannot include $x=-1$, because the denominator would be zero.

Therefore:

$$
\\boxed{(-\\infty,-1)\\cup[2,\\infty)}
$$

The difference between $>$ and $\\geq$ is important.

---

## 9. Zeros of the numerator and denominator

It is essential to distinguish between the two types of critical points.

### Zero of the numerator

If:

$$
P(a)=0
$$

the expression can equal $0$, provided that the denominator is not zero.

Therefore, the point can be included when the inequality allows equality.

### Zero of the denominator

If:

$$
Q(a)=0
$$

the expression is undefined.

Therefore:

$$
a
$$

can never belong to the solution.

---

## 10. Example with two factors

Solve:

$$
\\frac{(x-1)(x+3)}{x-2}>0
$$

The critical points are:

$$
x=-3,\\qquad x=1,\\qquad x=2
$$

The intervals are:

$$
(-\\infty,-3)
$$

$$
(-3,1)
$$

$$
(1,2)
$$

$$
(2,\\infty)
$$

Analyze the signs:

| Interval       | $x+3$ | $x-1$ | $x-2$ | Expression |
| -------------- | ----: | ----: | ----: | ---------: |
| $(-\\infty,-3)$ |   $-$ |   $-$ |   $-$ |        $-$ |
| $(-3,1)$       |   $+$ |   $-$ |   $-$ |        $+$ |
| $(1,2)$        |   $+$ |   $+$ |   $-$ |        $-$ |
| $(2,\\infty)$   |   $+$ |   $+$ |   $+$ |        $+$ |

We want the positive intervals:

$$
\\boxed{(-3,1)\\cup(2,\\infty)}
$$

---

## 11. Solving a rational inequality first

Consider:

$$
\\frac{1}{x-1}>\\frac{2}{x+3}
$$

Move everything to the same side:

$$
\\frac{1}{x-1}-\\frac{2}{x+3}>0
$$

Find a common denominator:

$$
\\frac{x+3-2(x-1)}{(x-1)(x+3)}>0
$$

Simplify the numerator:

$$
x+3-2x+2=5-x
$$

Therefore:

$$
\\frac{5-x}{(x-1)(x+3)}>0
$$

The critical points are:

$$
x=-3,\\qquad x=1,\\qquad x=5
$$

The sign chart gives:

$$
\\boxed{(-3,1)\\cup(5,\\infty)}
$$

---

## 12. Rational inequalities with factored polynomials

It is useful to factor both the numerator and denominator.

For example:

$$
\\frac{x^2-4}{x^2-x-6}\\leq0
$$

Factor:

$$
\\frac{(x-2)(x+2)}{(x-3)(x+2)}\\leq0
$$

Although we could simplify algebraically:

$$
\\frac{x-2}{x-3}\\leq0
$$

we must remember that the original expression is undefined at:

$$
x=-2
$$

Therefore, the original restriction must be preserved.

The solution of the simplified expression is:

$$
[2,3)
$$

In this case, $-2$ does not affect the solution interval, but in other problems it can.

---

## 13. Do not cancel restrictions

This is a common mistake.

Consider:

$$
\\frac{(x-2)(x+1)}{x+1}>0
$$

For $x\\neq-1$ we can simplify:

$$
x-2>0
$$

Therefore:

$$
x>2
$$

The solution is:

$$
\\boxed{(2,\\infty)}
$$

However, the restriction:

$$
x\\neq-1
$$

still exists.

Even though $-1$ does not end up belonging to the solution interval, we must never forget the restrictions of the original expression.

---

## 14. Multiplying by the denominator

In equations, we can multiply by a denominator without changing the type of equality.

In a rational inequality, this requires great care.

For example:

$$
\\frac{1}{x}>0
$$

We cannot simply multiply by $x$ and write:

$$
1>0
$$

because we do not know whether $x$ is positive or negative.

If $x>0$, multiplying by $x$ preserves the inequality:

$$
1>0
$$

But if $x<0$, the inequality reverses:

$$
1<0
$$

For this reason, it is usually safer to use a **sign chart** when solving rational inequalities.

---

## 15. Sign rule

To determine the sign of a product or quotient:

- An even number of negative factors produces a positive result.
- An odd number of negative factors produces a negative result.

For example:

$$
(-)\\cdot(-)\\cdot(+)=+
$$

while:

$$
(-)\\cdot(+)\\cdot(+) = -
$$

This rule allows us to construct sign charts quickly.

---

## 16. Multiplicity of roots

The multiplicity of a factor determines whether the sign changes when crossing a root.

Consider:

$$
(x-2)
$$

The factor has multiplicity $1$, so its sign changes when passing through $x=2$.

On the other hand:

$$
(x-2)^2
$$

has multiplicity $2$.

Its sign is always non-negative and does not change when crossing $x=2$.

In general:

- **odd multiplicity** → the sign changes;
- **even multiplicity** → the sign does not change.

---

## 17. Example with a double root

Solve:

$$
\\frac{(x-2)^2}{x+1}>0
$$

The critical points are:

$$
x=-1,\\qquad x=2
$$

The factor $(x-2)^2$ is always positive except at $x=2$.

Therefore, the sign mainly depends on $x+1$.

The expression is positive when:

$$
x>-1
$$

except at $x=2$, where it equals zero.

Therefore:

$$
\\boxed{(-1,2)\\cup(2,\\infty)}
$$

---

## 18. Rational inequalities with zero included

Suppose we want to solve:

$$
\\frac{(x-1)(x+2)}{x-3}\\geq0
$$

We must include the zeros of the numerator:

$$
x=1,\\qquad x=-2
$$

but exclude the zero of the denominator:

$$
x=3
$$

The sign chart gives:

$$
\\boxed{[-2,1]\\cup(3,\\infty)}
$$

---

## 19. Representing the solution on the real line

Intervals can be represented using:

- open circle $\\rightarrow$ endpoint not included;
- closed circle $\\rightarrow$ endpoint included.

For example:

$$
[-2,3)
$$

includes $-2$ but does not include $3$.

In a rational inequality, zeros of the denominator are always represented as excluded points.

---

## 20. Interval notation

Some common solution intervals are:

$$
(-\\infty,a)
$$

$$
(a,\\infty)
$$

$$
[a,b]
$$

$$
(a,b)
$$

$$
[a,b)
$$

$$
(a,b]
$$

Infinity is never included:

$$
(-\\infty,a]
$$

is correct, but:

$$
[-\\infty,a]
$$

is not.

---

## 21. General procedure

To solve a rational inequality:

1. Move all terms to the same side.
2. Simplify the expression.
3. Factor the numerator and denominator.
4. Determine the domain restrictions.
5. Find the zeros of the numerator.
6. Find the zeros of the denominator.
7. Order all critical points.
8. Divide the real line into intervals.
9. Determine the sign on each interval.
10. Select the intervals that satisfy the inequality.
11. Include zeros of the numerator when the inequality is $\\geq$ or $\\leq$.
12. Always exclude zeros of the denominator.
13. Write the solution using interval notation.

---

## 22. Complete example

Solve:

$$
\\frac{x^2-1}{x^2-4}>0
$$

### Step 1: Factor

$$
\\frac{(x-1)(x+1)}{(x-2)(x+2)}>0
$$

### Step 2: Find the critical points

Zeros of the numerator:

$$
x=-1,\\qquad x=1
$$

Zeros of the denominator:

$$
x=-2,\\qquad x=2
$$

The ordered critical points are:

$$
-2,\\quad -1,\\quad 1,\\quad 2
$$

### Step 3: Analyze the signs

| Interval       | Sign |
| -------------- | ---: |
| $(-\\infty,-2)$ |  $+$ |
| $(-2,-1)$      |  $-$ |
| $(-1,1)$       |  $+$ |
| $(1,2)$        |  $-$ |
| $(2,\\infty)$   |  $+$ |

We want positive values:

$$
(-\\infty,-2)
$$

$$
(-1,1)
$$

$$
(2,\\infty)
$$

Therefore:

$$
\\boxed{
(-\\infty,-2)\\cup(-1,1)\\cup(2,\\infty)
}
$$

---

## 23. Common mistakes

### Multiplying by the denominator without knowing its sign

This can incorrectly reverse the inequality.

### Including a zero of the denominator

If:

$$
Q(a)=0
$$

then $a$ can never belong to the solution.

### Forgetting zeros of the numerator

If the inequality allows equality, zeros of the numerator can be included.

### Canceling factors and forgetting restrictions

Restrictions belong to the original expression and must be preserved.

### Not factoring completely

An incomplete factorization can hide important critical points.

### Testing only one point

A test point determines the sign of an interval, but we must first find all critical points.

---

## 24. Summary

The fundamental ideas are:

| Concept                     | Rule                               |
| --------------------------- | ---------------------------------- |
| Zero of numerator           | May belong to the solution         |
| Zero of denominator         | Never belongs to the solution      |
| Inequality $>$ or $<$       | Does not include zeros             |
| Inequality $\\geq$ or $\\leq$ | May include zeros of the numerator |
| Odd multiplicity            | Sign changes                       |
| Even multiplicity           | Sign does not change               |
| Sign chart                  | Determines the sign on intervals   |
| Restrictions                | Must always be preserved           |

## 25. Fundamental idea

A rational inequality cannot be solved by treating the denominator as if it were always positive.

The central idea is to divide the real line using the points where the numerator or denominator becomes zero and study the sign on each interval:

$$
\\boxed{
\\text{factor}
\\rightarrow
\\text{critical points}
\\rightarrow
\\text{sign chart}
\\rightarrow
\\text{solution intervals}
}
$$

The most important rule is:

$$
\\boxed{
\\text{zero of the denominator}
\\Rightarrow
\\text{always excluded}
}
$$
`;function o(){let{locale:o}=t();return e(n,{id:`rational-inequalities`,content:{es:r,ca:i,en:a}[o]})}export{o as default};