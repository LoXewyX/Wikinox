# Inecuaciones racionales

Una **inecuación racional** es una desigualdad en la que aparece una expresión racional, es decir, un cociente de polinomios.

Por ejemplo:

$$
\frac{x-2}{x+1}>0
$$

El objetivo es determinar todos los valores de $x$ que hacen verdadera la desigualdad.

A diferencia de una ecuación racional, no basta con encontrar los valores que hacen que la expresión sea igual a cero. Es necesario estudiar el **signo de la expresión en diferentes intervalos**.

---

## 1. Expresiones racionales

Una expresión racional tiene la forma:

$$
\frac{P(x)}{Q(x)}
$$

donde $P(x)$ y $Q(x)$ son polinomios y:

$$
Q(x)\neq0
$$

Por ejemplo:

$$
\frac{x+2}{x-3}
$$

es una expresión racional.

El valor $x=3$ no pertenece al dominio porque hace que el denominador sea cero.

---

## 2. ¿Qué es una inecuación racional?

Una inecuación racional compara una expresión racional con un número, normalmente $0$.

Ejemplos:

$$
\frac{x-1}{x+2}>0
$$

$$
\frac{x+3}{x-4}\leq0
$$

$$
\frac{x^2-1}{x+2}\geq0
$$

También podemos encontrar inecuaciones en las que ambos lados contienen expresiones racionales.

Por ejemplo:

$$
\frac{1}{x-1}>\frac{2}{x+3}
$$

En estos casos, normalmente conviene llevar todos los términos a un mismo lado.

---

## 3. Restricciones del dominio

El primer paso es determinar dónde está definida la expresión.

Consideremos:

$$
\frac{x+1}{x-4}>0
$$

El denominador no puede ser cero:

$$
x-4\neq0
$$

Por tanto:

$$
x\neq4
$$

El punto $x=4$ será un punto crítico y nunca podrá pertenecer a la solución.

---

## 4. Puntos críticos

Los puntos críticos son los valores que pueden cambiar el signo de la expresión.

Para una expresión:

$$
\frac{P(x)}{Q(x)}
$$

debemos buscar:

1. Los ceros del numerador.
2. Los ceros del denominador.

Por ejemplo:

$$
\frac{(x-2)(x+3)}{x-1}
$$

Los puntos críticos son:

$$
x=-3,\qquad x=1,\qquad x=2
$$

El punto $x=1$ procede del denominador y, por tanto, nunca puede pertenecer al dominio.

---

## 5. ¿Por qué son importantes los puntos críticos?

El signo de una expresión racional solamente puede cambiar al atravesar un cero del numerador o del denominador.

Por ejemplo:

$$
\frac{x-2}{x+1}
$$

tiene los puntos críticos:

$$
x=-1,\qquad x=2
$$

Estos puntos dividen la recta real en tres intervalos:

$$
(-\infty,-1)
$$

$$
(-1,2)
$$

$$
(2,\infty)
$$

En cada intervalo la expresión mantiene un signo constante.

---

## 6. Tabla de signos

La herramienta principal para resolver inecuaciones racionales es la **tabla de signos**.

Consideremos:

$$
\frac{x-2}{x+1}>0
$$

Los puntos críticos son:

$$
x=-1,\qquad x=2
$$

Dividimos la recta:

$$
(-\infty,-1),\qquad(-1,2),\qquad(2,\infty)
$$

Podemos estudiar el signo de cada factor.

| Intervalo      | $x-2$ | $x+1$ | Cociente |
| -------------- | ----: | ----: | -------: |
| $(-\infty,-1)$ |   $-$ |   $-$ |      $+$ |
| $(-1,2)$       |   $-$ |   $+$ |      $-$ |
| $(2,\infty)$   |   $+$ |   $+$ |      $+$ |

Como queremos:

$$
\frac{x-2}{x+1}>0
$$

seleccionamos los intervalos donde el cociente es positivo:

$$
\boxed{(-\infty,-1)\cup(2,\infty)}
$$

Los extremos no se incluyen porque la desigualdad es estricta.

Además, $x=-1$ no pertenece al dominio.

---

## 7. Desigualdad estricta

Si tenemos:

$$
\frac{x-2}{x+1}>0
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
\boxed{(-\infty,-1)\cup(2,\infty)}
$$

---

## 8. Desigualdad no estricta

Si tenemos:

$$
\frac{x-2}{x+1}\geq0
$$

ahora sí podemos incluir el cero del numerador:

$$
x=2
$$

Pero seguimos sin poder incluir $x=-1$, porque el denominador sería cero.

Por tanto:

$$
\boxed{(-\infty,-1)\cup[2,\infty)}
$$

La diferencia entre $>$ y $\geq$ es importante.

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
\frac{(x-1)(x+3)}{x-2}>0
$$

Los puntos críticos son:

$$
x=-3,\qquad x=1,\qquad x=2
$$

Los intervalos son:

$$
(-\infty,-3)
$$

$$
(-3,1)
$$

$$
(1,2)
$$

$$
(2,\infty)
$$

Analizamos los signos:

| Intervalo      | $x+3$ | $x-1$ | $x-2$ | Expresión |
| -------------- | ----: | ----: | ----: | --------: |
| $(-\infty,-3)$ |   $-$ |   $-$ |   $-$ |       $-$ |
| $(-3,1)$       |   $+$ |   $-$ |   $-$ |       $+$ |
| $(1,2)$        |   $+$ |   $+$ |   $-$ |       $-$ |
| $(2,\infty)$   |   $+$ |   $+$ |   $+$ |       $+$ |

Queremos los intervalos positivos:

$$
\boxed{(-3,1)\cup(2,\infty)}
$$

---

## 11. Resolver primero una inecuación racional

Consideremos:

$$
\frac{1}{x-1}>\frac{2}{x+3}
$$

Llevamos todo al mismo lado:

$$
\frac{1}{x-1}-\frac{2}{x+3}>0
$$

Buscamos denominador común:

$$
\frac{x+3-2(x-1)}{(x-1)(x+3)}>0
$$

Simplificamos el numerador:

$$
x+3-2x+2=5-x
$$

Por tanto:

$$
\frac{5-x}{(x-1)(x+3)}>0
$$

Los puntos críticos son:

$$
x=-3,\qquad x=1,\qquad x=5
$$

A partir de la tabla de signos obtenemos:

$$
\boxed{(-3,1)\cup(5,\infty)}
$$

---

## 12. Inecuaciones racionales con polinomios factorizados

Es conveniente factorizar tanto el numerador como el denominador.

Por ejemplo:

$$
\frac{x^2-4}{x^2-x-6}\leq0
$$

Factorizamos:

$$
\frac{(x-2)(x+2)}{(x-3)(x+2)}\leq0
$$

Aunque algebraicamente podríamos simplificar:

$$
\frac{x-2}{x-3}\leq0
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
\frac{(x-2)(x+1)}{x+1}>0
$$

Para $x\neq-1$ podemos simplificar:

$$
x-2>0
$$

Por tanto:

$$
x>2
$$

En este caso la solución es:

$$
\boxed{(2,\infty)}
$$

Pero la restricción:

$$
x\neq-1
$$

sigue existiendo.

Aunque $-1$ no termine perteneciendo al intervalo solución, nunca debemos olvidar las restricciones de la expresión original.

---

## 14. Multiplicar por el denominador

En las ecuaciones podemos multiplicar por un denominador sin cambiar el tipo de igualdad.

En una inecuación racional esto requiere mucho cuidado.

Por ejemplo:

$$
\frac{1}{x}>0
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
(-)\cdot(-)\cdot(+)=+
$$

mientras que:

$$
(-)\cdot(+)\cdot(+) = -
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
\frac{(x-2)^2}{x+1}>0
$$

Los puntos críticos son:

$$
x=-1,\qquad x=2
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
\boxed{(-1,2)\cup(2,\infty)}
$$

---

## 18. Inecuaciones racionales con valor cero

Si queremos resolver:

$$
\frac{(x-1)(x+2)}{x-3}\geq0
$$

debemos incluir los ceros del numerador:

$$
x=1,\qquad x=-2
$$

pero excluir el cero del denominador:

$$
x=3
$$

La tabla de signos proporciona:

$$
\boxed{[-2,1]\cup(3,\infty)}
$$

---

## 19. Representación en la recta real

Los intervalos pueden representarse mediante:

- círculo abierto $\rightarrow$ extremo no incluido;
- círculo cerrado $\rightarrow$ extremo incluido.

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
(-\infty,a)
$$

$$
(a,\infty)
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
(-\infty,a]
$$

es correcto, pero:

$$
[-\infty,a]
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
11. Incluye los ceros del numerador cuando la desigualdad sea $\geq$ o $\leq$.
12. Excluye siempre los ceros del denominador.
13. Escribe la solución en notación de intervalos.

---

## 22. Ejemplo completo

Resolvamos:

$$
\frac{x^2-1}{x^2-4}>0
$$

### Paso 1: factorizar

$$
\frac{(x-1)(x+1)}{(x-2)(x+2)}>0
$$

### Paso 2: encontrar los puntos críticos

Ceros del numerador:

$$
x=-1,\qquad x=1
$$

Ceros del denominador:

$$
x=-2,\qquad x=2
$$

Los puntos críticos ordenados son:

$$
-2,\quad -1,\quad 1,\quad 2
$$

### Paso 3: estudiar los signos

| Intervalo      | Signo |
| -------------- | ----: |
| $(-\infty,-2)$ |   $+$ |
| $(-2,-1)$      |   $-$ |
| $(-1,1)$       |   $+$ |
| $(1,2)$        |   $-$ |
| $(2,\infty)$   |   $+$ |

Queremos valores positivos:

$$
(-\infty,-2)
$$

$$
(-1,1)
$$

$$
(2,\infty)
$$

Por tanto:

$$
\boxed{
(-\infty,-2)\cup(-1,1)\cup(2,\infty)
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
| Desigualdad $\geq$ o $\leq$ | Puede incluir ceros del numerador |
| Multiplicidad impar         | El signo cambia                   |
| Multiplicidad par           | El signo no cambia                |
| Tabla de signos             | Determina el signo por intervalos |
| Restricciones               | Siempre deben conservarse         |

## 25. Idea fundamental

Una inecuación racional no se resuelve tratando el denominador como si fuera siempre positivo.

La idea central es dividir la recta real mediante los puntos donde el numerador o el denominador se hacen cero y estudiar el signo en cada intervalo:

$$
\boxed{
\text{factorizar}
\rightarrow
\text{puntos críticos}
\rightarrow
\text{tabla de signos}
\rightarrow
\text{intervalos solución}
}
$$

La regla más importante es:

$$
\boxed{
\text{cero del denominador}
\Rightarrow
\text{siempre excluido}
}
$$
