import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-BYtsCiYd.js";import{t as n}from"./TopicPage-BAzQYl-h.js";var r=`# Fracciones algebraicas

Las **fracciones algebraicas** son expresiones que contienen polinomios en el numerador, en el denominador o en ambos.

Por ejemplo:

$$
\\frac{x+2}{x-3}
$$

o:

$$
\\frac{x^2-4}{x^2-9}
$$

Las fracciones algebraicas se comportan de forma similar a las fracciones numéricas, pero tienen una característica fundamental: **el denominador no puede ser igual a cero**.

---

## 1. ¿Qué es una fracción algebraica?

Una fracción algebraica tiene la forma:

$$
\\frac{P(x)}{Q(x)}
$$

donde $P(x)$ y $Q(x)$ son expresiones algebraicas y:

$$
Q(x)\\neq 0
$$

Por ejemplo:

$$
\\frac{2x+1}{x-4}
$$

es una fracción algebraica.

Su dominio excluye el valor:

$$
x=4
$$

porque haría que el denominador fuera cero.

---

## 2. Numerador y denominador

En:

$$
\\frac{x^2-1}{x+3}
$$

tenemos:

- Numerador: $x^2-1$
- Denominador: $x+3$

El denominador determina las restricciones de dominio.

$$
x+3\\neq 0
$$

por tanto:

$$
x\\neq -3
$$

---

## 3. Restricciones de dominio

Antes de simplificar una fracción algebraica, conviene determinar los valores que hacen cero el denominador.

Por ejemplo:

$$
\\frac{x+1}{x^2-4}
$$

Factorizamos:

$$
x^2-4=(x-2)(x+2)
$$

Por tanto:

$$
(x-2)(x+2)\\neq 0
$$

y:

$$
x\\neq 2,\\qquad x\\neq -2
$$

El dominio es:

$$
\\boxed{\\mathbb{R}\\setminus\\{-2,2\\}}
$$

---

## 4. Simplificación de fracciones algebraicas

Simplificar una fracción algebraica significa escribirla en una forma equivalente más sencilla.

Para ello podemos factorizar el numerador y el denominador y cancelar factores comunes.

Por ejemplo:

$$
\\frac{x^2-4}{x^2-2x}
$$

Factorizamos:

$$
\\frac{(x-2)(x+2)}{x(x-2)}
$$

Cancelamos el factor común $x-2$:

$$
\\frac{x+2}{x}
$$

Pero debemos conservar las restricciones originales:

$$
x\\neq 0,\\qquad x\\neq 2
$$

Por tanto:

$$
\\boxed{\\frac{x^2-4}{x^2-2x}=\\frac{x+2}{x}}
$$

con:

$$
x\\neq 0,2
$$

---

## 5. Cancelar factores, no términos

Esta es una regla fundamental.

Podemos cancelar factores:

$$
\\frac{(x-2)(x+3)}{x-2}=x+3
$$

pero no podemos cancelar términos individuales:

$$
\\frac{x+2}{x}\\neq 2
$$

Tampoco podemos hacer:

$$
\\frac{x+2}{x+3}= \\frac{2}{3}
$$

porque $x+2$ y $x+3$ son sumas, no factores comunes.

---

## 6. Factor común

Una de las técnicas más importantes es extraer factores comunes.

Por ejemplo:

$$
\\frac{6x^2+9x}{3x}
$$

Factorizamos el numerador:

$$
\\frac{3x(2x+3)}{3x}
$$

Cancelamos:

$$
2x+3
$$

La expresión simplificada es:

$$
\\boxed{2x+3}
$$

con la restricción original:

$$
x\\neq 0
$$

---

## 7. Diferencia de cuadrados

Recordemos la identidad:

$$
a^2-b^2=(a-b)(a+b)
$$

Por ejemplo:

$$
\\frac{x^2-9}{x-3}
$$

Factorizamos:

$$
\\frac{(x-3)(x+3)}{x-3}
$$

Simplificamos:

$$
x+3
$$

Pero:

$$
x\\neq 3
$$

Por tanto:

$$
\\boxed{\\frac{x^2-9}{x-3}=x+3,\\qquad x\\neq 3}
$$

---

## 8. Trinomios cuadráticos

También podemos simplificar fracciones factorizando trinomios.

Por ejemplo:

$$
\\frac{x^2+5x+6}{x^2+3x+2}
$$

Factorizamos:

$$
x^2+5x+6=(x+2)(x+3)
$$

y:

$$
x^2+3x+2=(x+1)(x+2)
$$

Por tanto:

$$
\\frac{(x+2)(x+3)}{(x+1)(x+2)}
$$

Cancelamos:

$$
\\frac{x+3}{x+1}
$$

Las restricciones originales son:

$$
x\\neq -1,\\qquad x\\neq -2
$$

---

## 9. Multiplicación de fracciones algebraicas

Para multiplicar fracciones algebraicas:

1. Factoriza cuando sea posible.
2. Cancela factores comunes.
3. Multiplica numeradores.
4. Multiplica denominadores.
5. Indica las restricciones del dominio.

Por ejemplo:

$$
\\frac{x^2-4}{x+1}\\cdot\\frac{x+1}{x+2}
$$

Factorizamos:

$$
\\frac{(x-2)(x+2)}{x+1}\\cdot\\frac{x+1}{x+2}
$$

Cancelamos:

$$
x-2
$$

Por tanto:

$$
\\boxed{x-2}
$$

Las restricciones son:

$$
x\\neq -1,\\qquad x\\neq -2
$$

---

## 10. División de fracciones algebraicas

Dividir entre una fracción equivale a multiplicar por su inversa.

Por ejemplo:

$$
\\frac{x^2-4}{x+1}\\div\\frac{x-2}{x+3}
$$

Convertimos la división en multiplicación:

$$
\\frac{x^2-4}{x+1}\\cdot\\frac{x+3}{x-2}
$$

Factorizamos:

$$
\\frac{(x-2)(x+2)}{x+1}\\cdot\\frac{x+3}{x-2}
$$

Cancelamos:

$$
\\frac{(x+2)(x+3)}{x+1}
$$

Hay que considerar todas las restricciones:

$$
x\\neq -1,\\qquad x\\neq -3,\\qquad x\\neq 2
$$

Por tanto:

$$
\\boxed{\\frac{(x+2)(x+3)}{x+1}}
$$

con:

$$
x\\neq -1,-3,2
$$

---

## 11. Suma y resta de fracciones algebraicas

Para sumar o restar fracciones algebraicas necesitamos un **denominador común**.

Por ejemplo:

$$
\\frac{1}{x}+\\frac{2}{x+1}
$$

El denominador común es:

$$
x(x+1)
$$

Entonces:

$$
\\frac{x+1}{x(x+1)}
+
\\frac{2x}{x(x+1)}
$$

Sumamos los numeradores:

$$
\\frac{x+1+2x}{x(x+1)}
$$

$$
\\frac{3x+1}{x(x+1)}
$$

Por tanto:

$$
\\boxed{\\frac{3x+1}{x(x+1)}}
$$

con:

$$
x\\neq 0,-1
$$

---

## 12. Mínimo común múltiplo de polinomios

Cuando los denominadores son más complejos, podemos utilizar el mínimo común múltiplo.

Por ejemplo:

$$
\\frac{1}{x^2-4}+\\frac{1}{x-2}
$$

Factorizamos:

$$
x^2-4=(x-2)(x+2)
$$

El mínimo común denominador es:

$$
(x-2)(x+2)
$$

Por tanto:

$$
\\frac{1}{(x-2)(x+2)}
+
\\frac{x+2}{(x-2)(x+2)}
$$

Sumamos:

$$
\\frac{x+3}{(x-2)(x+2)}
$$

Las restricciones son:

$$
x\\neq 2,\\qquad x\\neq -2
$$

---

## 13. Denominadores con factores comunes

Consideremos:

$$
\\frac{2}{x^2-x}+\\frac{1}{x}
$$

Factorizamos:

$$
x^2-x=x(x-1)
$$

El mínimo común denominador es:

$$
x(x-1)
$$

Entonces:

$$
\\frac{2}{x(x-1)}
+
\\frac{x-1}{x(x-1)}
$$

Sumamos:

$$
\\frac{2+x-1}{x(x-1)}
$$

$$
\\boxed{\\frac{x+1}{x(x-1)}}
$$

con:

$$
x\\neq 0,1
$$

---

## 14. Fracciones algebraicas complejas

Una fracción algebraica compleja contiene fracciones en su numerador o denominador.

Por ejemplo:

$$
\\frac{\\frac{1}{x}+\\frac{1}{y}}{\\frac{1}{x}}
$$

Primero simplificamos el numerador:

$$
\\frac{1}{x}+\\frac{1}{y}
=
\\frac{x+y}{xy}
$$

Entonces:

$$
\\frac{\\frac{x+y}{xy}}{\\frac{1}{x}}
$$

Dividimos por $\\frac{1}{x}$:

$$
\\frac{x+y}{xy}\\cdot x
$$

Simplificamos:

$$
\\boxed{\\frac{x+y}{y}}
$$

---

## 15. Eliminar denominadores

En una expresión o ecuación con varias fracciones, podemos multiplicar toda la expresión por el mínimo común denominador.

Por ejemplo:

$$
\\frac{x}{2}+\\frac{x}{3}=5
$$

El mínimo común denominador es $6$.

Multiplicamos toda la ecuación por $6$:

$$
3x+2x=30
$$

$$
5x=30
$$

$$
\\boxed{x=6}
$$

Este procedimiento es especialmente útil al resolver ecuaciones racionales.

---

## 16. Ecuaciones con fracciones algebraicas

Consideremos:

$$
\\frac{x+1}{x-2}=3
$$

Primero establecemos la restricción:

$$
x\\neq 2
$$

Multiplicamos por $x-2$:

$$
x+1=3(x-2)
$$

Desarrollamos:

$$
x+1=3x-6
$$

$$
7=2x
$$

$$
x=\\frac{7}{2}
$$

Como:

$$
\\frac{7}{2}\\neq 2
$$

la solución es válida:

$$
\\boxed{x=\\frac{7}{2}}
$$

---

## 17. Identidades algebraicas

Dos expresiones racionales pueden ser equivalentes en todos los puntos de su dominio común.

Por ejemplo:

$$
\\frac{x^2-4}{x-2}=x+2
$$

siempre que:

$$
x\\neq 2
$$

No debemos afirmar que ambas expresiones son iguales para $x=2$, porque la expresión original no está definida allí.

---

## 18. Huecos en la gráfica

Consideremos:

$$
f(x)=\\frac{x^2-4}{x-2}
$$

Simplificamos:

$$
f(x)=x+2
$$

pero:

$$
x\\neq 2
$$

Por tanto, la gráfica coincide con la recta:

$$
y=x+2
$$

excepto en el punto correspondiente a:

$$
x=2
$$

En ese punto hay un **hueco**.

Su coordenada sería:

$$
(2,4)
$$

pero ese punto no pertenece a la función original.

---

## 19. Fracciones algebraicas y valor absoluto

Las fracciones algebraicas también pueden aparecer dentro de valores absolutos.

Por ejemplo:

$$
\\left|\\frac{x-1}{x+2}\\right|
$$

La restricción de dominio es:

$$
x\\neq -2
$$

Para estudiar su signo podemos analizar:

$$
\\frac{x-1}{x+2}
$$

Los puntos críticos son:

$$
x=1,\\qquad x=-2
$$

---

## 20. Fracciones algebraicas con potencias

Las propiedades de las potencias también permiten simplificar fracciones algebraicas.

Por ejemplo:

$$
\\frac{x^5}{x^2}=x^3
$$

siempre que:

$$
x\\neq 0
$$

En general:

$$
\\frac{x^m}{x^n}=x^{m-n}
$$

para $x\\neq 0$.

---

## 21. Exponentes negativos

Un exponente negativo representa el inverso:

$$
x^{-n}=\\frac{1}{x^n}
$$

Por ejemplo:

$$
x^{-2}=\\frac{1}{x^2}
$$

Por tanto:

$$
\\frac{1}{x^{-2}}=x^2
$$

siempre que $x\\neq 0$.

---

## 22. Fracciones algebraicas con raíces

Las raíces también pueden aparecer en fracciones algebraicas.

Por ejemplo:

$$
\\frac{\\sqrt{x}}{x}
$$

Como:

$$
x=\\sqrt{x}\\sqrt{x}
$$

para $x>0$:

$$
\\frac{\\sqrt{x}}{x}
=
\\frac{\\sqrt{x}}{\\sqrt{x}\\sqrt{x}}
=
\\frac{1}{\\sqrt{x}}
$$

La expresión original requiere:

$$
x>0
$$

porque $\\sqrt{x}$ debe estar definida y $x$ no puede ser cero.

---

## 23. Racionalización

A veces queremos eliminar una raíz del denominador.

Por ejemplo:

$$
\\frac{1}{\\sqrt{x}}
$$

Multiplicamos por $\\sqrt{x}$:

$$
\\frac{1}{\\sqrt{x}}\\cdot\\frac{\\sqrt{x}}{\\sqrt{x}}
$$

Obtenemos:

$$
\\frac{\\sqrt{x}}{x}
$$

Por tanto:

$$
\\boxed{\\frac{1}{\\sqrt{x}}=\\frac{\\sqrt{x}}{x}}
$$

para $x>0$.

---

## 24. Racionalización con conjugados

Si el denominador contiene una suma o diferencia de raíces, utilizamos el conjugado.

Por ejemplo:

$$
\\frac{1}{\\sqrt{x}+1}
$$

Multiplicamos por:

$$
\\frac{\\sqrt{x}-1}{\\sqrt{x}-1}
$$

Entonces:

$$
\\frac{\\sqrt{x}-1}{(\\sqrt{x}+1)(\\sqrt{x}-1)}
$$

Aplicamos diferencia de cuadrados:

$$
\\frac{\\sqrt{x}-1}{x-1}
$$

para:

$$
x\\geq 0,\\qquad x\\neq 1
$$

---

## 25. Procedimiento general para simplificar

Para simplificar una fracción algebraica:

1. Determina las restricciones del denominador.
2. Factoriza numerador y denominador.
3. Identifica los factores comunes.
4. Cancela únicamente factores.
5. Conserva las restricciones originales.
6. Comprueba que la expresión resultante esté correctamente simplificada.

---

## 26. Procedimiento para multiplicar

Para multiplicar:

$$
\\frac{P}{Q}\\cdot\\frac{R}{S}
$$

podemos seguir estos pasos:

1. Factoriza todos los polinomios.
2. Identifica factores comunes.
3. Cancela antes de multiplicar.
4. Multiplica los factores restantes.
5. Indica las restricciones.

---

## 27. Procedimiento para dividir

Para dividir:

$$
\\frac{P}{Q}\\div\\frac{R}{S}
$$

1. Conserva la primera fracción.
2. Invierte la segunda.
3. Cambia la división por multiplicación.
4. Factoriza.
5. Simplifica.
6. Comprueba las restricciones.

Además, la segunda fracción no puede ser igual a cero.

---

## 28. Procedimiento para sumar o restar

Para sumar o restar:

1. Factoriza los denominadores.
2. Encuentra el mínimo común denominador.
3. Reescribe cada fracción con ese denominador.
4. Opera con los numeradores.
5. Simplifica el resultado.
6. Conserva las restricciones originales.

---

## 29. Ejemplo completo

Simplifiquemos:

$$
\\frac{x^2-9}{x^2-5x+6}
+
\\frac{1}{x-2}
$$

### Paso 1: Factorizar

Tenemos:

$$
x^2-9=(x-3)(x+3)
$$

y:

$$
x^2-5x+6=(x-2)(x-3)
$$

Por tanto:

$$
\\frac{(x-3)(x+3)}{(x-2)(x-3)}
+
\\frac{1}{x-2}
$$

Las restricciones son:

$$
x\\neq 2,\\qquad x\\neq 3
$$

### Paso 2: Simplificar la primera fracción

$$
\\frac{x+3}{x-2}
+
\\frac{1}{x-2}
$$

### Paso 3: Sumar

$$
\\frac{x+3+1}{x-2}
$$

$$
\\boxed{\\frac{x+4}{x-2}}
$$

con:

$$
x\\neq 2,3
$$

Aunque $x=3$ ya no aparezca en el denominador final, sigue siendo una restricción porque pertenecía al dominio de la expresión original.

---

## 30. Errores frecuentes

### Cancelar términos en lugar de factores

Incorrecto:

$$
\\frac{x+2}{x}=2
$$

No se pueden cancelar términos de una suma.

### Olvidar las restricciones

De:

$$
\\frac{x^2-4}{x-2}=x+2
$$

no debemos olvidar:

$$
x\\neq 2
$$

### Multiplicar denominadores incorrectamente

Recordemos:

$$
\\frac{a}{b}\\cdot\\frac{c}{d}
=
\\frac{ac}{bd}
$$

### Dividir sin invertir la segunda fracción

Recordemos:

$$
\\frac{a}{b}\\div\\frac{c}{d}
=
\\frac{a}{b}\\cdot\\frac{d}{c}
$$

### Cancelar antes de factorizar

Muchas simplificaciones solo aparecen después de factorizar los polinomios.

---

## 31. Resumen

| Operación       | Idea principal                                  |
| --------------- | ----------------------------------------------- |
| Simplificación  | Factorizar y cancelar factores                  |
| Multiplicación  | Multiplicar numeradores y denominadores         |
| División        | Multiplicar por la fracción inversa             |
| Suma            | Buscar denominador común                        |
| Resta           | Buscar denominador común                        |
| Ecuaciones      | Eliminar denominadores respetando restricciones |
| Racionalización | Eliminar raíces del denominador                 |
| Dominio         | Excluir valores que anulan denominadores        |

La regla fundamental es:

$$
\\boxed{\\text{factorizar}\\longrightarrow\\text{simplificar}\\longrightarrow\\text{comprobar el dominio}}
$$

---

## 32. Idea fundamental

Una fracción algebraica no es solamente una fracción con letras.

Su comportamiento depende de:

$$
\\boxed{\\text{factores}+\\text{restricciones}+\\text{operaciones}}
$$

Factorizar permite simplificar las expresiones, pero las restricciones del dominio pertenecen a la expresión original y deben conservarse.

Por eso, al trabajar con fracciones algebraicas, hay que distinguir siempre entre:

$$
\\boxed{\\text{expresión simplificada}}
$$

y

$$
\\boxed{\\text{dominio original}}
$$
`,i=`# Fraccions algebraiques

Les **fraccions algebraiques** són expressions que contenen polinomis al numerador, al denominador o a tots dos.

Per exemple:

$$
\\frac{x+2}{x-3}
$$

o:

$$
\\frac{x^2-4}{x^2-9}
$$

Les fraccions algebraiques es comporten de manera semblant a les fraccions numèriques, però tenen una característica fonamental: **el denominador no pot ser igual a zero**.

---

## 1. Què és una fracció algebraica?

Una fracció algebraica té la forma:

$$
\\frac{P(x)}{Q(x)}
$$

on $P(x)$ i $Q(x)$ són expressions algebraiques i:

$$
Q(x)\\neq 0
$$

Per exemple:

$$
\\frac{2x+1}{x-4}
$$

és una fracció algebraica.

El seu domini exclou el valor:

$$
x=4
$$

perquè faria que el denominador fos zero.

---

## 2. Numerador i denominador

En:

$$
\\frac{x^2-1}{x+3}
$$

tenim:

- Numerador: $x^2-1$
- Denominador: $x+3$

El denominador determina les restriccions de domini.

$$
x+3\\neq 0
$$

Per tant:

$$
x\\neq -3
$$

---

## 3. Restriccions de domini

Abans de simplificar una fracció algebraica, és convenient determinar els valors que fan zero el denominador.

Per exemple:

$$
\\frac{x+1}{x^2-4}
$$

Factoritzem:

$$
x^2-4=(x-2)(x+2)
$$

Per tant:

$$
(x-2)(x+2)\\neq 0
$$

i:

$$
x\\neq 2,\\qquad x\\neq -2
$$

El domini és:

$$
\\boxed{\\mathbb{R}\\setminus\\{-2,2\\}}
$$

---

## 4. Simplificació de fraccions algebraiques

Simplificar una fracció algebraica significa escriure-la en una forma equivalent més senzilla.

Per fer-ho podem factoritzar el numerador i el denominador i cancel·lar els factors comuns.

Per exemple:

$$
\\frac{x^2-4}{x^2-2x}
$$

Factoritzem:

$$
\\frac{(x-2)(x+2)}{x(x-2)}
$$

Cancel·lem el factor comú $x-2$:

$$
\\frac{x+2}{x}
$$

Però hem de conservar les restriccions originals:

$$
x\\neq 0,\\qquad x\\neq 2
$$

Per tant:

$$
\\boxed{\\frac{x^2-4}{x^2-2x}=\\frac{x+2}{x}}
$$

amb:

$$
x\\neq 0,2
$$

---

## 5. Cancel·lar factors, no termes

Aquesta és una regla fonamental.

Podem cancel·lar factors:

$$
\\frac{(x-2)(x+3)}{x-2}=x+3
$$

però no podem cancel·lar termes individuals:

$$
\\frac{x+2}{x}\\neq 2
$$

Tampoc podem fer:

$$
\\frac{x+2}{x+3}= \\frac{2}{3}
$$

perquè $x+2$ i $x+3$ són sumes, no factors comuns.

---

## 6. Factor comú

Una de les tècniques més importants és extreure factors comuns.

Per exemple:

$$
\\frac{6x^2+9x}{3x}
$$

Factoritzem el numerador:

$$
\\frac{3x(2x+3)}{3x}
$$

Cancel·lem:

$$
2x+3
$$

L'expressió simplificada és:

$$
\\boxed{2x+3}
$$

amb la restricció original:

$$
x\\neq 0
$$

---

## 7. Diferència de quadrats

Recordem la identitat:

$$
a^2-b^2=(a-b)(a+b)
$$

Per exemple:

$$
\\frac{x^2-9}{x-3}
$$

Factoritzem:

$$
\\frac{(x-3)(x+3)}{x-3}
$$

Simplifiquem:

$$
x+3
$$

Però:

$$
x\\neq 3
$$

Per tant:

$$
\\boxed{\\frac{x^2-9}{x-3}=x+3,\\qquad x\\neq 3}
$$

---

## 8. Trinomis quadràtics

També podem simplificar fraccions factoritzant trinomis.

Per exemple:

$$
\\frac{x^2+5x+6}{x^2+3x+2}
$$

Factoritzem:

$$
x^2+5x+6=(x+2)(x+3)
$$

i:

$$
x^2+3x+2=(x+1)(x+2)
$$

Per tant:

$$
\\frac{(x+2)(x+3)}{(x+1)(x+2)}
$$

Cancel·lem:

$$
\\frac{x+3}{x+1}
$$

Les restriccions originals són:

$$
x\\neq -1,\\qquad x\\neq -2
$$

---

## 9. Multiplicació de fraccions algebraiques

Per multiplicar fraccions algebraiques:

1. Factoritza quan sigui possible.
2. Cancel·la els factors comuns.
3. Multiplica els numeradors.
4. Multiplica els denominadors.
5. Indica les restriccions del domini.

Per exemple:

$$
\\frac{x^2-4}{x+1}\\cdot\\frac{x+1}{x+2}
$$

Factoritzem:

$$
\\frac{(x-2)(x+2)}{x+1}\\cdot\\frac{x+1}{x+2}
$$

Cancel·lem:

$$
x-2
$$

Per tant:

$$
\\boxed{x-2}
$$

Les restriccions són:

$$
x\\neq -1,\\qquad x\\neq -2
$$

---

## 10. Divisió de fraccions algebraiques

Dividir entre una fracció equival a multiplicar per la seva inversa.

Per exemple:

$$
\\frac{x^2-4}{x+1}\\div\\frac{x-2}{x+3}
$$

Convertim la divisió en multiplicació:

$$
\\frac{x^2-4}{x+1}\\cdot\\frac{x+3}{x-2}
$$

Factoritzem:

$$
\\frac{(x-2)(x+2)}{x+1}\\cdot\\frac{x+3}{x-2}
$$

Cancel·lem:

$$
\\frac{(x+2)(x+3)}{x+1}
$$

Cal considerar totes les restriccions:

$$
x\\neq -1,\\qquad x\\neq -3,\\qquad x\\neq 2
$$

Per tant:

$$
\\boxed{\\frac{(x+2)(x+3)}{x+1}}
$$

amb:

$$
x\\neq -1,-3,2
$$

---

## 11. Suma i resta de fraccions algebraiques

Per sumar o restar fraccions algebraiques necessitem un **denominador comú**.

Per exemple:

$$
\\frac{1}{x}+\\frac{2}{x+1}
$$

El denominador comú és:

$$
x(x+1)
$$

Aleshores:

$$
\\frac{x+1}{x(x+1)}
+
\\frac{2x}{x(x+1)}
$$

Sumem els numeradors:

$$
\\frac{x+1+2x}{x(x+1)}
$$

$$
\\frac{3x+1}{x(x+1)}
$$

Per tant:

$$
\\boxed{\\frac{3x+1}{x(x+1)}}
$$

amb:

$$
x\\neq 0,-1
$$

---

## 12. Mínim comú múltiple de polinomis

Quan els denominadors són més complexos, podem utilitzar el mínim comú múltiple.

Per exemple:

$$
\\frac{1}{x^2-4}+\\frac{1}{x-2}
$$

Factoritzem:

$$
x^2-4=(x-2)(x+2)
$$

El mínim comú denominador és:

$$
(x-2)(x+2)
$$

Per tant:

$$
\\frac{1}{(x-2)(x+2)}
+
\\frac{x+2}{(x-2)(x+2)}
$$

Sumem:

$$
\\frac{x+3}{(x-2)(x+2)}
$$

Les restriccions són:

$$
x\\neq 2,\\qquad x\\neq -2
$$

---

## 13. Denominadors amb factors comuns

Considerem:

$$
\\frac{2}{x^2-x}+\\frac{1}{x}
$$

Factoritzem:

$$
x^2-x=x(x-1)
$$

El mínim comú denominador és:

$$
x(x-1)
$$

Aleshores:

$$
\\frac{2}{x(x-1)}
+
\\frac{x-1}{x(x-1)}
$$

Sumem:

$$
\\frac{2+x-1}{x(x-1)}
$$

$$
\\boxed{\\frac{x+1}{x(x-1)}}
$$

amb:

$$
x\\neq 0,1
$$

---

## 14. Fraccions algebraiques complexes

Una fracció algebraica complexa conté fraccions al seu numerador o denominador.

Per exemple:

$$
\\frac{\\frac{1}{x}+\\frac{1}{y}}{\\frac{1}{x}}
$$

Primer simplifiquem el numerador:

$$
\\frac{1}{x}+\\frac{1}{y}
=
\\frac{x+y}{xy}
$$

Aleshores:

$$
\\frac{\\frac{x+y}{xy}}{\\frac{1}{x}}
$$

Dividim per $\\frac{1}{x}$:

$$
\\frac{x+y}{xy}\\cdot x
$$

Simplifiquem:

$$
\\boxed{\\frac{x+y}{y}}
$$

---

## 15. Eliminar denominadors

En una expressió o equació amb diverses fraccions, podem multiplicar tota l'expressió pel mínim comú denominador.

Per exemple:

$$
\\frac{x}{2}+\\frac{x}{3}=5
$$

El mínim comú denominador és $6$.

Multipliquem tota l'equació per $6$:

$$
3x+2x=30
$$

$$
5x=30
$$

$$
\\boxed{x=6}
$$

Aquest procediment és especialment útil per resoldre equacions racionals.

---

## 16. Equacions amb fraccions algebraiques

Considerem:

$$
\\frac{x+1}{x-2}=3
$$

Primer establim la restricció:

$$
x\\neq 2
$$

Multipliquem per $x-2$:

$$
x+1=3(x-2)
$$

Desenvolupem:

$$
x+1=3x-6
$$

$$
7=2x
$$

$$
x=\\frac{7}{2}
$$

Com que:

$$
\\frac{7}{2}\\neq 2
$$

la solució és vàlida:

$$
\\boxed{x=\\frac{7}{2}}
$$

---

## 17. Identitats algebraiques

Dues expressions racionals poden ser equivalents en tots els punts del seu domini comú.

Per exemple:

$$
\\frac{x^2-4}{x-2}=x+2
$$

sempre que:

$$
x\\neq 2
$$

No hem d'afirmar que totes dues expressions són iguals per a $x=2$, perquè l'expressió original no està definida en aquest punt.

---

## 18. Forats a la gràfica

Considerem:

$$
f(x)=\\frac{x^2-4}{x-2}
$$

Simplifiquem:

$$
f(x)=x+2
$$

però:

$$
x\\neq 2
$$

Per tant, la gràfica coincideix amb la recta:

$$
y=x+2
$$

excepte en el punt corresponent a:

$$
x=2
$$

En aquest punt hi ha un **forat**.

La seva coordenada seria:

$$
(2,4)
$$

però aquest punt no pertany a la funció original.

---

## 19. Fraccions algebraiques i valor absolut

Les fraccions algebraiques també poden aparèixer dins de valors absoluts.

Per exemple:

$$
\\left|\\frac{x-1}{x+2}\\right|
$$

La restricció de domini és:

$$
x\\neq -2
$$

Per estudiar-ne el signe podem analitzar:

$$
\\frac{x-1}{x+2}
$$

Els punts crítics són:

$$
x=1,\\qquad x=-2
$$

---

## 20. Fraccions algebraiques amb potències

Les propietats de les potències també permeten simplificar fraccions algebraiques.

Per exemple:

$$
\\frac{x^5}{x^2}=x^3
$$

sempre que:

$$
x\\neq 0
$$

En general:

$$
\\frac{x^m}{x^n}=x^{m-n}
$$

per a $x\\neq 0$.

---

## 21. Exponents negatius

Un exponent negatiu representa l'invers:

$$
x^{-n}=\\frac{1}{x^n}
$$

Per exemple:

$$
x^{-2}=\\frac{1}{x^2}
$$

Per tant:

$$
\\frac{1}{x^{-2}}=x^2
$$

sempre que $x\\neq 0$.

---

## 22. Fraccions algebraiques amb arrels

Les arrels també poden aparèixer en fraccions algebraiques.

Per exemple:

$$
\\frac{\\sqrt{x}}{x}
$$

Com que:

$$
x=\\sqrt{x}\\sqrt{x}
$$

per a $x>0$:

$$
\\frac{\\sqrt{x}}{x}
=
\\frac{\\sqrt{x}}{\\sqrt{x}\\sqrt{x}}
=
\\frac{1}{\\sqrt{x}}
$$

L'expressió original requereix:

$$
x>0
$$

perquè $\\sqrt{x}$ ha d'estar definida i $x$ no pot ser zero.

---

## 23. Racionalització

De vegades volem eliminar una arrel del denominador.

Per exemple:

$$
\\frac{1}{\\sqrt{x}}
$$

Multipliquem per $\\sqrt{x}$:

$$
\\frac{1}{\\sqrt{x}}\\cdot\\frac{\\sqrt{x}}{\\sqrt{x}}
$$

Obtenim:

$$
\\frac{\\sqrt{x}}{x}
$$

Per tant:

$$
\\boxed{\\frac{1}{\\sqrt{x}}=\\frac{\\sqrt{x}}{x}}
$$

per a $x>0$.

---

## 24. Racionalització amb conjugats

Si el denominador conté una suma o diferència d'arrels, utilitzem el conjugat.

Per exemple:

$$
\\frac{1}{\\sqrt{x}+1}
$$

Multipliquem per:

$$
\\frac{\\sqrt{x}-1}{\\sqrt{x}-1}
$$

Aleshores:

$$
\\frac{\\sqrt{x}-1}{(\\sqrt{x}+1)(\\sqrt{x}-1)}
$$

Apliquem la diferència de quadrats:

$$
\\frac{\\sqrt{x}-1}{x-1}
$$

per a:

$$
x\\geq 0,\\qquad x\\neq 1
$$

---

## 25. Procediment general per simplificar

Per simplificar una fracció algebraica:

1. Determina les restriccions del denominador.
2. Factoritza numerador i denominador.
3. Identifica els factors comuns.
4. Cancel·la únicament factors.
5. Conserva les restriccions originals.
6. Comprova que l'expressió resultant estigui correctament simplificada.

---

## 26. Procediment per multiplicar

Per multiplicar:

$$
\\frac{P}{Q}\\cdot\\frac{R}{S}
$$

podem seguir aquests passos:

1. Factoritza tots els polinomis.
2. Identifica els factors comuns.
3. Cancel·la abans de multiplicar.
4. Multiplica els factors restants.
5. Indica les restriccions.

---

## 27. Procediment per dividir

Per dividir:

$$
\\frac{P}{Q}\\div\\frac{R}{S}
$$

1. Conserva la primera fracció.
2. Inverteix la segona.
3. Canvia la divisió per una multiplicació.
4. Factoritza.
5. Simplifica.
6. Comprova les restriccions.

A més, la segona fracció no pot ser igual a zero.

---

## 28. Procediment per sumar o restar

Per sumar o restar:

1. Factoritza els denominadors.
2. Troba el mínim comú denominador.
3. Reescriu cada fracció amb aquest denominador.
4. Opera amb els numeradors.
5. Simplifica el resultat.
6. Conserva les restriccions originals.

---

## 29. Exemple complet

Simplifiquem:

$$
\\frac{x^2-9}{x^2-5x+6}
+
\\frac{1}{x-2}
$$

### Pas 1: Factoritzar

Tenim:

$$
x^2-9=(x-3)(x+3)
$$

i:

$$
x^2-5x+6=(x-2)(x-3)
$$

Per tant:

$$
\\frac{(x-3)(x+3)}{(x-2)(x-3)}
+
\\frac{1}{x-2}
$$

Les restriccions són:

$$
x\\neq 2,\\qquad x\\neq 3
$$

### Pas 2: Simplificar la primera fracció

$$
\\frac{x+3}{x-2}
+
\\frac{1}{x-2}
$$

### Pas 3: Sumar

$$
\\frac{x+3+1}{x-2}
$$

$$
\\boxed{\\frac{x+4}{x-2}}
$$

amb:

$$
x\\neq 2,3
$$

Encara que $x=3$ ja no aparegui al denominador final, continua sent una restricció perquè pertanyia al domini de l'expressió original.

---

## 30. Errors freqüents

### Cancel·lar termes en lloc de factors

Incorrecte:

$$
\\frac{x+2}{x}=2
$$

No es poden cancel·lar termes d'una suma.

### Oblidar les restriccions

De:

$$
\\frac{x^2-4}{x-2}=x+2
$$

no hem d'oblidar:

$$
x\\neq 2
$$

### Multiplicar incorrectament els denominadors

Recordem:

$$
\\frac{a}{b}\\cdot\\frac{c}{d}
=
\\frac{ac}{bd}
$$

### Dividir sense invertir la segona fracció

Recordem:

$$
\\frac{a}{b}\\div\\frac{c}{d}
=
\\frac{a}{b}\\cdot\\frac{d}{c}
$$

### Cancel·lar abans de factoritzar

Moltes simplificacions només apareixen després de factoritzar els polinomis.

---

## 31. Resum

| Operació        | Idea principal                                    |
| --------------- | ------------------------------------------------- |
| Simplificació   | Factoritzar i cancel·lar factors                  |
| Multiplicació   | Multiplicar numeradors i denominadors             |
| Divisió         | Multiplicar per la fracció inversa                |
| Suma            | Buscar denominador comú                           |
| Resta           | Buscar denominador comú                           |
| Equacions       | Eliminar denominadors respectant les restriccions |
| Racionalització | Eliminar arrels del denominador                   |
| Domini          | Excloure els valors que anul·len denominadors     |

La regla fonamental és:

$$
\\boxed{\\text{factoritzar}\\longrightarrow\\text{simplificar}\\longrightarrow\\text{comprovar el domini}}
$$

---

## 32. Idea fonamental

Una fracció algebraica no és simplement una fracció amb lletres.

El seu comportament depèn de:

$$
\\boxed{\\text{factors}+\\text{restriccions}+\\text{operacions}}
$$

Factoritzar permet simplificar les expressions, però les restriccions del domini pertanyen a l'expressió original i s'han de conservar.

Per això, quan treballem amb fraccions algebraiques, sempre hem de distingir entre:

$$
\\boxed{\\text{expressió simplificada}}
$$

i

$$
\\boxed{\\text{domini original}}
$$
`,a=`# Algebraic fractions

**Algebraic fractions** are expressions that contain polynomials in the numerator, denominator, or both.

For example:

$$
\\frac{x+2}{x-3}
$$

or:

$$
\\frac{x^2-4}{x^2-9}
$$

Algebraic fractions behave similarly to numerical fractions, but they have one fundamental property: **the denominator cannot be zero**.

---

## 1. What is an algebraic fraction?

An algebraic fraction has the form:

$$
\\frac{P(x)}{Q(x)}
$$

where $P(x)$ and $Q(x)$ are algebraic expressions and:

$$
Q(x)\\neq 0
$$

For example:

$$
\\frac{2x+1}{x-4}
$$

is an algebraic fraction.

Its domain excludes:

$$
x=4
$$

because this value makes the denominator zero.

---

## 2. Numerator and denominator

In:

$$
\\frac{x^2-1}{x+3}
$$

we have:

- Numerator: $x^2-1$
- Denominator: $x+3$

The denominator determines the domain restrictions.

$$
x+3\\neq 0
$$

Therefore:

$$
x\\neq -3
$$

---

## 3. Domain restrictions

Before simplifying an algebraic fraction, it is useful to determine the values that make the denominator zero.

For example:

$$
\\frac{x+1}{x^2-4}
$$

Factor:

$$
x^2-4=(x-2)(x+2)
$$

Therefore:

$$
(x-2)(x+2)\\neq 0
$$

and:

$$
x\\neq 2,\\qquad x\\neq -2
$$

The domain is:

$$
\\boxed{\\mathbb{R}\\setminus\\{-2,2\\}}
$$

---

## 4. Simplifying algebraic fractions

Simplifying an algebraic fraction means writing it in an equivalent, simpler form.

We can do this by factoring the numerator and denominator and cancelling common factors.

For example:

$$
\\frac{x^2-4}{x^2-2x}
$$

Factor:

$$
\\frac{(x-2)(x+2)}{x(x-2)}
$$

Cancel the common factor $x-2$:

$$
\\frac{x+2}{x}
$$

But we must preserve the original restrictions:

$$
x\\neq 0,\\qquad x\\neq 2
$$

Therefore:

$$
\\boxed{\\frac{x^2-4}{x^2-2x}=\\frac{x+2}{x}}
$$

with:

$$
x\\neq 0,2
$$

---

## 5. Cancel factors, not terms

This is a fundamental rule.

We can cancel factors:

$$
\\frac{(x-2)(x+3)}{x-2}=x+3
$$

but we cannot cancel individual terms:

$$
\\frac{x+2}{x}\\neq 2
$$

We also cannot write:

$$
\\frac{x+2}{x+3}= \\frac{2}{3}
$$

because $x+2$ and $x+3$ are sums, not common factors.

---

## 6. Common factors

One of the most important techniques is extracting common factors.

For example:

$$
\\frac{6x^2+9x}{3x}
$$

Factor the numerator:

$$
\\frac{3x(2x+3)}{3x}
$$

Cancel:

$$
2x+3
$$

The simplified expression is:

$$
\\boxed{2x+3}
$$

with the original restriction:

$$
x\\neq 0
$$

---

## 7. Difference of squares

Recall the identity:

$$
a^2-b^2=(a-b)(a+b)
$$

For example:

$$
\\frac{x^2-9}{x-3}
$$

Factor:

$$
\\frac{(x-3)(x+3)}{x-3}
$$

Simplify:

$$
x+3
$$

But:

$$
x\\neq 3
$$

Therefore:

$$
\\boxed{\\frac{x^2-9}{x-3}=x+3,\\qquad x\\neq 3}
$$

---

## 8. Quadratic trinomials

We can also simplify fractions by factoring quadratic trinomials.

For example:

$$
\\frac{x^2+5x+6}{x^2+3x+2}
$$

Factor:

$$
x^2+5x+6=(x+2)(x+3)
$$

and:

$$
x^2+3x+2=(x+1)(x+2)
$$

Therefore:

$$
\\frac{(x+2)(x+3)}{(x+1)(x+2)}
$$

Cancel:

$$
\\frac{x+3}{x+1}
$$

The original restrictions are:

$$
x\\neq -1,\\qquad x\\neq -2
$$

---

## 9. Multiplying algebraic fractions

To multiply algebraic fractions:

1. Factor when possible.
2. Cancel common factors.
3. Multiply the numerators.
4. Multiply the denominators.
5. State the domain restrictions.

For example:

$$
\\frac{x^2-4}{x+1}\\cdot\\frac{x+1}{x+2}
$$

Factor:

$$
\\frac{(x-2)(x+2)}{x+1}\\cdot\\frac{x+1}{x+2}
$$

Cancel:

$$
x-2
$$

Therefore:

$$
\\boxed{x-2}
$$

The restrictions are:

$$
x\\neq -1,\\qquad x\\neq -2
$$

---

## 10. Dividing algebraic fractions

Dividing by a fraction is equivalent to multiplying by its reciprocal.

For example:

$$
\\frac{x^2-4}{x+1}\\div\\frac{x-2}{x+3}
$$

Convert the division into multiplication:

$$
\\frac{x^2-4}{x+1}\\cdot\\frac{x+3}{x-2}
$$

Factor:

$$
\\frac{(x-2)(x+2)}{x+1}\\cdot\\frac{x+3}{x-2}
$$

Cancel:

$$
\\frac{(x+2)(x+3)}{x+1}
$$

We must consider all restrictions:

$$
x\\neq -1,\\qquad x\\neq -3,\\qquad x\\neq 2
$$

Therefore:

$$
\\boxed{\\frac{(x+2)(x+3)}{x+1}}
$$

with:

$$
x\\neq -1,-3,2
$$

---

## 11. Adding and subtracting algebraic fractions

To add or subtract algebraic fractions, we need a **common denominator**.

For example:

$$
\\frac{1}{x}+\\frac{2}{x+1}
$$

The common denominator is:

$$
x(x+1)
$$

Therefore:

$$
\\frac{x+1}{x(x+1)}
+
\\frac{2x}{x(x+1)}
$$

Add the numerators:

$$
\\frac{x+1+2x}{x(x+1)}
$$

$$
\\frac{3x+1}{x(x+1)}
$$

Therefore:

$$
\\boxed{\\frac{3x+1}{x(x+1)}}
$$

with:

$$
x\\neq 0,-1
$$

---

## 12. Least common multiple of polynomials

When denominators are more complicated, we can use the least common multiple.

For example:

$$
\\frac{1}{x^2-4}+\\frac{1}{x-2}
$$

Factor:

$$
x^2-4=(x-2)(x+2)
$$

The least common denominator is:

$$
(x-2)(x+2)
$$

Therefore:

$$
\\frac{1}{(x-2)(x+2)}
+
\\frac{x+2}{(x-2)(x+2)}
$$

Add:

$$
\\frac{x+3}{(x-2)(x+2)}
$$

The restrictions are:

$$
x\\neq 2,\\qquad x\\neq -2
$$

---

## 13. Denominators with common factors

Consider:

$$
\\frac{2}{x^2-x}+\\frac{1}{x}
$$

Factor:

$$
x^2-x=x(x-1)
$$

The least common denominator is:

$$
x(x-1)
$$

Therefore:

$$
\\frac{2}{x(x-1)}
+
\\frac{x-1}{x(x-1)}
$$

Add:

$$
\\frac{2+x-1}{x(x-1)}
$$

$$
\\boxed{\\frac{x+1}{x(x-1)}}
$$

with:

$$
x\\neq 0,1
$$

---

## 14. Complex algebraic fractions

A complex algebraic fraction contains fractions in its numerator or denominator.

For example:

$$
\\frac{\\frac{1}{x}+\\frac{1}{y}}{\\frac{1}{x}}
$$

First simplify the numerator:

$$
\\frac{1}{x}+\\frac{1}{y}
=
\\frac{x+y}{xy}
$$

Then:

$$
\\frac{\\frac{x+y}{xy}}{\\frac{1}{x}}
$$

Divide by $\\frac{1}{x}$:

$$
\\frac{x+y}{xy}\\cdot x
$$

Simplify:

$$
\\boxed{\\frac{x+y}{y}}
$$

---

## 15. Clearing denominators

In an expression or equation with several fractions, we can multiply the entire expression by the least common denominator.

For example:

$$
\\frac{x}{2}+\\frac{x}{3}=5
$$

The least common denominator is $6$.

Multiply the entire equation by $6$:

$$
3x+2x=30
$$

$$
5x=30
$$

$$
\\boxed{x=6}
$$

This procedure is especially useful when solving rational equations.

---

## 16. Equations with algebraic fractions

Consider:

$$
\\frac{x+1}{x-2}=3
$$

First establish the restriction:

$$
x\\neq 2
$$

Multiply by $x-2$:

$$
x+1=3(x-2)
$$

Expand:

$$
x+1=3x-6
$$

$$
7=2x
$$

$$
x=\\frac{7}{2}
$$

Since:

$$
\\frac{7}{2}\\neq 2
$$

the solution is valid:

$$
\\boxed{x=\\frac{7}{2}}
$$

---

## 17. Algebraic identities

Two rational expressions can be equivalent at every point in their common domain.

For example:

$$
\\frac{x^2-4}{x-2}=x+2
$$

provided that:

$$
x\\neq 2
$$

We should not say that both expressions are equal at $x=2$, because the original expression is undefined there.

---

## 18. Holes in the graph

Consider:

$$
f(x)=\\frac{x^2-4}{x-2}
$$

Simplify:

$$
f(x)=x+2
$$

but:

$$
x\\neq 2
$$

Therefore, the graph coincides with the line:

$$
y=x+2
$$

except at the point corresponding to:

$$
x=2
$$

There is a **hole** at that point.

Its coordinate would be:

$$
(2,4)
$$

but this point does not belong to the original function.

---

## 19. Algebraic fractions and absolute value

Algebraic fractions can also appear inside absolute values.

For example:

$$
\\left|\\frac{x-1}{x+2}\\right|
$$

The domain restriction is:

$$
x\\neq -2
$$

To study its sign, we can analyze:

$$
\\frac{x-1}{x+2}
$$

The critical points are:

$$
x=1,\\qquad x=-2
$$

---

## 20. Algebraic fractions with powers

Power properties can also be used to simplify algebraic fractions.

For example:

$$
\\frac{x^5}{x^2}=x^3
$$

provided that:

$$
x\\neq 0
$$

In general:

$$
\\frac{x^m}{x^n}=x^{m-n}
$$

for $x\\neq 0$.

---

## 21. Negative exponents

A negative exponent represents a reciprocal:

$$
x^{-n}=\\frac{1}{x^n}
$$

For example:

$$
x^{-2}=\\frac{1}{x^2}
$$

Therefore:

$$
\\frac{1}{x^{-2}}=x^2
$$

provided that $x\\neq 0$.

---

## 22. Algebraic fractions with radicals

Radicals can also appear in algebraic fractions.

For example:

$$
\\frac{\\sqrt{x}}{x}
$$

Since:

$$
x=\\sqrt{x}\\sqrt{x}
$$

for $x>0$:

$$
\\frac{\\sqrt{x}}{x}
=
\\frac{\\sqrt{x}}{\\sqrt{x}\\sqrt{x}}
=
\\frac{1}{\\sqrt{x}}
$$

The original expression requires:

$$
x>0
$$

because $\\sqrt{x}$ must be defined and $x$ cannot be zero.

---

## 23. Rationalization

Sometimes we want to remove a radical from the denominator.

For example:

$$
\\frac{1}{\\sqrt{x}}
$$

Multiply by $\\sqrt{x}$:

$$
\\frac{1}{\\sqrt{x}}\\cdot\\frac{\\sqrt{x}}{\\sqrt{x}}
$$

We obtain:

$$
\\frac{\\sqrt{x}}{x}
$$

Therefore:

$$
\\boxed{\\frac{1}{\\sqrt{x}}=\\frac{\\sqrt{x}}{x}}
$$

for $x>0$.

---

## 24. Rationalization using conjugates

If the denominator contains a sum or difference of radicals, we use the conjugate.

For example:

$$
\\frac{1}{\\sqrt{x}+1}
$$

Multiply by:

$$
\\frac{\\sqrt{x}-1}{\\sqrt{x}-1}
$$

Then:

$$
\\frac{\\sqrt{x}-1}{(\\sqrt{x}+1)(\\sqrt{x}-1)}
$$

Apply the difference of squares:

$$
\\frac{\\sqrt{x}-1}{x-1}
$$

for:

$$
x\\geq 0,\\qquad x\\neq 1
$$

---

## 25. General procedure for simplifying

To simplify an algebraic fraction:

1. Determine the denominator restrictions.
2. Factor the numerator and denominator.
3. Identify common factors.
4. Cancel only factors.
5. Preserve the original restrictions.
6. Check that the resulting expression is fully simplified.

---

## 26. Procedure for multiplication

To multiply:

$$
\\frac{P}{Q}\\cdot\\frac{R}{S}
$$

we can follow these steps:

1. Factor all polynomials.
2. Identify common factors.
3. Cancel before multiplying.
4. Multiply the remaining factors.
5. State the restrictions.

---

## 27. Procedure for division

To divide:

$$
\\frac{P}{Q}\\div\\frac{R}{S}
$$

1. Keep the first fraction.
2. Invert the second fraction.
3. Change division into multiplication.
4. Factor.
5. Simplify.
6. Check the restrictions.

In addition, the second fraction cannot be equal to zero.

---

## 28. Procedure for addition or subtraction

To add or subtract:

1. Factor the denominators.
2. Find the least common denominator.
3. Rewrite each fraction using that denominator.
4. Perform the operation on the numerators.
5. Simplify the result.
6. Preserve the original restrictions.

---

## 29. Complete example

Simplify:

$$
\\frac{x^2-9}{x^2-5x+6}
+
\\frac{1}{x-2}
$$

### Step 1: Factor

We have:

$$
x^2-9=(x-3)(x+3)
$$

and:

$$
x^2-5x+6=(x-2)(x-3)
$$

Therefore:

$$
\\frac{(x-3)(x+3)}{(x-2)(x-3)}
+
\\frac{1}{x-2}
$$

The restrictions are:

$$
x\\neq 2,\\qquad x\\neq 3
$$

### Step 2: Simplify the first fraction

$$
\\frac{x+3}{x-2}
+
\\frac{1}{x-2}
$$

### Step 3: Add

$$
\\frac{x+3+1}{x-2}
$$

$$
\\boxed{\\frac{x+4}{x-2}}
$$

with:

$$
x\\neq 2,3
$$

Even though $x=3$ no longer appears in the final denominator, it remains a restriction because it was excluded from the domain of the original expression.

---

## 30. Common mistakes

### Cancelling terms instead of factors

Incorrect:

$$
\\frac{x+2}{x}=2
$$

Terms in a sum cannot be cancelled.

### Forgetting restrictions

From:

$$
\\frac{x^2-4}{x-2}=x+2
$$

we must not forget:

$$
x\\neq 2
$$

### Multiplying denominators incorrectly

Remember:

$$
\\frac{a}{b}\\cdot\\frac{c}{d}
=
\\frac{ac}{bd}
$$

### Dividing without inverting the second fraction

Remember:

$$
\\frac{a}{b}\\div\\frac{c}{d}
=
\\frac{a}{b}\\cdot\\frac{d}{c}
$$

### Cancelling before factoring

Many simplifications only become visible after factoring the polynomials.

---

## 31. Summary

| Operation       | Main idea                                        |
| --------------- | ------------------------------------------------ |
| Simplification  | Factor and cancel factors                        |
| Multiplication  | Multiply numerators and denominators             |
| Division        | Multiply by the reciprocal                       |
| Addition        | Find a common denominator                        |
| Subtraction     | Find a common denominator                        |
| Equations       | Clear denominators while respecting restrictions |
| Rationalization | Remove radicals from the denominator             |
| Domain          | Exclude values that make denominators zero       |

The fundamental rule is:

$$
\\boxed{\\text{factor}\\longrightarrow\\text{simplify}\\longrightarrow\\text{check the domain}}
$$

---

## 32. Fundamental idea

An algebraic fraction is not simply a fraction containing letters.

Its behavior depends on:

$$
\\boxed{\\text{factors}+\\text{restrictions}+\\text{operations}}
$$

Factoring allows us to simplify expressions, but domain restrictions belong to the original expression and must be preserved.

Therefore, when working with algebraic fractions, we must always distinguish between:

$$
\\boxed{\\text{simplified expression}}
$$

and

$$
\\boxed{\\text{original domain}}
$$
`;function o(){let{locale:o}=t();return e(n,{id:`algebraic-fractions`,content:{es:r,ca:i,en:a}[o]})}export{o as default};