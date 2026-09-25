# Fracciones algebraicas

Las **fracciones algebraicas** son expresiones que contienen polinomios en el numerador, en el denominador o en ambos.

Por ejemplo:

$$
\frac{x+2}{x-3}
$$

o:

$$
\frac{x^2-4}{x^2-9}
$$

Las fracciones algebraicas se comportan de forma similar a las fracciones numéricas, pero tienen una característica fundamental: **el denominador no puede ser igual a cero**.

---

## 1. ¿Qué es una fracción algebraica?

Una fracción algebraica tiene la forma:

$$
\frac{P(x)}{Q(x)}
$$

donde $P(x)$ y $Q(x)$ son expresiones algebraicas y:

$$
Q(x)\neq 0
$$

Por ejemplo:

$$
\frac{2x+1}{x-4}
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
\frac{x^2-1}{x+3}
$$

tenemos:

- Numerador: $x^2-1$
- Denominador: $x+3$

El denominador determina las restricciones de dominio.

$$
x+3\neq 0
$$

por tanto:

$$
x\neq -3
$$

---

## 3. Restricciones de dominio

Antes de simplificar una fracción algebraica, conviene determinar los valores que hacen cero el denominador.

Por ejemplo:

$$
\frac{x+1}{x^2-4}
$$

Factorizamos:

$$
x^2-4=(x-2)(x+2)
$$

Por tanto:

$$
(x-2)(x+2)\neq 0
$$

y:

$$
x\neq 2,\qquad x\neq -2
$$

El dominio es:

$$
\boxed{\mathbb{R}\setminus\{-2,2\}}
$$

---

## 4. Simplificación de fracciones algebraicas

Simplificar una fracción algebraica significa escribirla en una forma equivalente más sencilla.

Para ello podemos factorizar el numerador y el denominador y cancelar factores comunes.

Por ejemplo:

$$
\frac{x^2-4}{x^2-2x}
$$

Factorizamos:

$$
\frac{(x-2)(x+2)}{x(x-2)}
$$

Cancelamos el factor común $x-2$:

$$
\frac{x+2}{x}
$$

Pero debemos conservar las restricciones originales:

$$
x\neq 0,\qquad x\neq 2
$$

Por tanto:

$$
\boxed{\frac{x^2-4}{x^2-2x}=\frac{x+2}{x}}
$$

con:

$$
x\neq 0,2
$$

---

## 5. Cancelar factores, no términos

Esta es una regla fundamental.

Podemos cancelar factores:

$$
\frac{(x-2)(x+3)}{x-2}=x+3
$$

pero no podemos cancelar términos individuales:

$$
\frac{x+2}{x}\neq 2
$$

Tampoco podemos hacer:

$$
\frac{x+2}{x+3}= \frac{2}{3}
$$

porque $x+2$ y $x+3$ son sumas, no factores comunes.

---

## 6. Factor común

Una de las técnicas más importantes es extraer factores comunes.

Por ejemplo:

$$
\frac{6x^2+9x}{3x}
$$

Factorizamos el numerador:

$$
\frac{3x(2x+3)}{3x}
$$

Cancelamos:

$$
2x+3
$$

La expresión simplificada es:

$$
\boxed{2x+3}
$$

con la restricción original:

$$
x\neq 0
$$

---

## 7. Diferencia de cuadrados

Recordemos la identidad:

$$
a^2-b^2=(a-b)(a+b)
$$

Por ejemplo:

$$
\frac{x^2-9}{x-3}
$$

Factorizamos:

$$
\frac{(x-3)(x+3)}{x-3}
$$

Simplificamos:

$$
x+3
$$

Pero:

$$
x\neq 3
$$

Por tanto:

$$
\boxed{\frac{x^2-9}{x-3}=x+3,\qquad x\neq 3}
$$

---

## 8. Trinomios cuadráticos

También podemos simplificar fracciones factorizando trinomios.

Por ejemplo:

$$
\frac{x^2+5x+6}{x^2+3x+2}
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
\frac{(x+2)(x+3)}{(x+1)(x+2)}
$$

Cancelamos:

$$
\frac{x+3}{x+1}
$$

Las restricciones originales son:

$$
x\neq -1,\qquad x\neq -2
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
\frac{x^2-4}{x+1}\cdot\frac{x+1}{x+2}
$$

Factorizamos:

$$
\frac{(x-2)(x+2)}{x+1}\cdot\frac{x+1}{x+2}
$$

Cancelamos:

$$
x-2
$$

Por tanto:

$$
\boxed{x-2}
$$

Las restricciones son:

$$
x\neq -1,\qquad x\neq -2
$$

---

## 10. División de fracciones algebraicas

Dividir entre una fracción equivale a multiplicar por su inversa.

Por ejemplo:

$$
\frac{x^2-4}{x+1}\div\frac{x-2}{x+3}
$$

Convertimos la división en multiplicación:

$$
\frac{x^2-4}{x+1}\cdot\frac{x+3}{x-2}
$$

Factorizamos:

$$
\frac{(x-2)(x+2)}{x+1}\cdot\frac{x+3}{x-2}
$$

Cancelamos:

$$
\frac{(x+2)(x+3)}{x+1}
$$

Hay que considerar todas las restricciones:

$$
x\neq -1,\qquad x\neq -3,\qquad x\neq 2
$$

Por tanto:

$$
\boxed{\frac{(x+2)(x+3)}{x+1}}
$$

con:

$$
x\neq -1,-3,2
$$

---

## 11. Suma y resta de fracciones algebraicas

Para sumar o restar fracciones algebraicas necesitamos un **denominador común**.

Por ejemplo:

$$
\frac{1}{x}+\frac{2}{x+1}
$$

El denominador común es:

$$
x(x+1)
$$

Entonces:

$$
\frac{x+1}{x(x+1)}
+
\frac{2x}{x(x+1)}
$$

Sumamos los numeradores:

$$
\frac{x+1+2x}{x(x+1)}
$$

$$
\frac{3x+1}{x(x+1)}
$$

Por tanto:

$$
\boxed{\frac{3x+1}{x(x+1)}}
$$

con:

$$
x\neq 0,-1
$$

---

## 12. Mínimo común múltiplo de polinomios

Cuando los denominadores son más complejos, podemos utilizar el mínimo común múltiplo.

Por ejemplo:

$$
\frac{1}{x^2-4}+\frac{1}{x-2}
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
\frac{1}{(x-2)(x+2)}
+
\frac{x+2}{(x-2)(x+2)}
$$

Sumamos:

$$
\frac{x+3}{(x-2)(x+2)}
$$

Las restricciones son:

$$
x\neq 2,\qquad x\neq -2
$$

---

## 13. Denominadores con factores comunes

Consideremos:

$$
\frac{2}{x^2-x}+\frac{1}{x}
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
\frac{2}{x(x-1)}
+
\frac{x-1}{x(x-1)}
$$

Sumamos:

$$
\frac{2+x-1}{x(x-1)}
$$

$$
\boxed{\frac{x+1}{x(x-1)}}
$$

con:

$$
x\neq 0,1
$$

---

## 14. Fracciones algebraicas complejas

Una fracción algebraica compleja contiene fracciones en su numerador o denominador.

Por ejemplo:

$$
\frac{\frac{1}{x}+\frac{1}{y}}{\frac{1}{x}}
$$

Primero simplificamos el numerador:

$$
\frac{1}{x}+\frac{1}{y}
=
\frac{x+y}{xy}
$$

Entonces:

$$
\frac{\frac{x+y}{xy}}{\frac{1}{x}}
$$

Dividimos por $\frac{1}{x}$:

$$
\frac{x+y}{xy}\cdot x
$$

Simplificamos:

$$
\boxed{\frac{x+y}{y}}
$$

---

## 15. Eliminar denominadores

En una expresión o ecuación con varias fracciones, podemos multiplicar toda la expresión por el mínimo común denominador.

Por ejemplo:

$$
\frac{x}{2}+\frac{x}{3}=5
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
\boxed{x=6}
$$

Este procedimiento es especialmente útil al resolver ecuaciones racionales.

---

## 16. Ecuaciones con fracciones algebraicas

Consideremos:

$$
\frac{x+1}{x-2}=3
$$

Primero establecemos la restricción:

$$
x\neq 2
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
x=\frac{7}{2}
$$

Como:

$$
\frac{7}{2}\neq 2
$$

la solución es válida:

$$
\boxed{x=\frac{7}{2}}
$$

---

## 17. Identidades algebraicas

Dos expresiones racionales pueden ser equivalentes en todos los puntos de su dominio común.

Por ejemplo:

$$
\frac{x^2-4}{x-2}=x+2
$$

siempre que:

$$
x\neq 2
$$

No debemos afirmar que ambas expresiones son iguales para $x=2$, porque la expresión original no está definida allí.

---

## 18. Huecos en la gráfica

Consideremos:

$$
f(x)=\frac{x^2-4}{x-2}
$$

Simplificamos:

$$
f(x)=x+2
$$

pero:

$$
x\neq 2
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
\left|\frac{x-1}{x+2}\right|
$$

La restricción de dominio es:

$$
x\neq -2
$$

Para estudiar su signo podemos analizar:

$$
\frac{x-1}{x+2}
$$

Los puntos críticos son:

$$
x=1,\qquad x=-2
$$

---

## 20. Fracciones algebraicas con potencias

Las propiedades de las potencias también permiten simplificar fracciones algebraicas.

Por ejemplo:

$$
\frac{x^5}{x^2}=x^3
$$

siempre que:

$$
x\neq 0
$$

En general:

$$
\frac{x^m}{x^n}=x^{m-n}
$$

para $x\neq 0$.

---

## 21. Exponentes negativos

Un exponente negativo representa el inverso:

$$
x^{-n}=\frac{1}{x^n}
$$

Por ejemplo:

$$
x^{-2}=\frac{1}{x^2}
$$

Por tanto:

$$
\frac{1}{x^{-2}}=x^2
$$

siempre que $x\neq 0$.

---

## 22. Fracciones algebraicas con raíces

Las raíces también pueden aparecer en fracciones algebraicas.

Por ejemplo:

$$
\frac{\sqrt{x}}{x}
$$

Como:

$$
x=\sqrt{x}\sqrt{x}
$$

para $x>0$:

$$
\frac{\sqrt{x}}{x}
=
\frac{\sqrt{x}}{\sqrt{x}\sqrt{x}}
=
\frac{1}{\sqrt{x}}
$$

La expresión original requiere:

$$
x>0
$$

porque $\sqrt{x}$ debe estar definida y $x$ no puede ser cero.

---

## 23. Racionalización

A veces queremos eliminar una raíz del denominador.

Por ejemplo:

$$
\frac{1}{\sqrt{x}}
$$

Multiplicamos por $\sqrt{x}$:

$$
\frac{1}{\sqrt{x}}\cdot\frac{\sqrt{x}}{\sqrt{x}}
$$

Obtenemos:

$$
\frac{\sqrt{x}}{x}
$$

Por tanto:

$$
\boxed{\frac{1}{\sqrt{x}}=\frac{\sqrt{x}}{x}}
$$

para $x>0$.

---

## 24. Racionalización con conjugados

Si el denominador contiene una suma o diferencia de raíces, utilizamos el conjugado.

Por ejemplo:

$$
\frac{1}{\sqrt{x}+1}
$$

Multiplicamos por:

$$
\frac{\sqrt{x}-1}{\sqrt{x}-1}
$$

Entonces:

$$
\frac{\sqrt{x}-1}{(\sqrt{x}+1)(\sqrt{x}-1)}
$$

Aplicamos diferencia de cuadrados:

$$
\frac{\sqrt{x}-1}{x-1}
$$

para:

$$
x\geq 0,\qquad x\neq 1
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
\frac{P}{Q}\cdot\frac{R}{S}
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
\frac{P}{Q}\div\frac{R}{S}
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
\frac{x^2-9}{x^2-5x+6}
+
\frac{1}{x-2}
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
\frac{(x-3)(x+3)}{(x-2)(x-3)}
+
\frac{1}{x-2}
$$

Las restricciones son:

$$
x\neq 2,\qquad x\neq 3
$$

### Paso 2: Simplificar la primera fracción

$$
\frac{x+3}{x-2}
+
\frac{1}{x-2}
$$

### Paso 3: Sumar

$$
\frac{x+3+1}{x-2}
$$

$$
\boxed{\frac{x+4}{x-2}}
$$

con:

$$
x\neq 2,3
$$

Aunque $x=3$ ya no aparezca en el denominador final, sigue siendo una restricción porque pertenecía al dominio de la expresión original.

---

## 30. Errores frecuentes

### Cancelar términos en lugar de factores

Incorrecto:

$$
\frac{x+2}{x}=2
$$

No se pueden cancelar términos de una suma.

### Olvidar las restricciones

De:

$$
\frac{x^2-4}{x-2}=x+2
$$

no debemos olvidar:

$$
x\neq 2
$$

### Multiplicar denominadores incorrectamente

Recordemos:

$$
\frac{a}{b}\cdot\frac{c}{d}
=
\frac{ac}{bd}
$$

### Dividir sin invertir la segunda fracción

Recordemos:

$$
\frac{a}{b}\div\frac{c}{d}
=
\frac{a}{b}\cdot\frac{d}{c}
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
\boxed{\text{factorizar}\longrightarrow\text{simplificar}\longrightarrow\text{comprobar el dominio}}
$$

---

## 32. Idea fundamental

Una fracción algebraica no es solamente una fracción con letras.

Su comportamiento depende de:

$$
\boxed{\text{factores}+\text{restricciones}+\text{operaciones}}
$$

Factorizar permite simplificar las expresiones, pero las restricciones del dominio pertenecen a la expresión original y deben conservarse.

Por eso, al trabajar con fracciones algebraicas, hay que distinguir siempre entre:

$$
\boxed{\text{expresión simplificada}}
$$

y

$$
\boxed{\text{dominio original}}
$$
