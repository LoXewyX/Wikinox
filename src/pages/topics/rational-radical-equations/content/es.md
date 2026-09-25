# Ecuaciones racionales y con radicales

Las ecuaciones racionales y las ecuaciones con radicales contienen expresiones que pueden introducir **restricciones en el dominio**. Por ello, además de transformar y resolver la ecuación, es fundamental comprobar las soluciones obtenidas.

---

## 1. ¿Qué son las ecuaciones racionales?

Una ecuación racional es una ecuación que contiene expresiones racionales, normalmente fracciones algebraicas en las que la incógnita aparece en el denominador.

Por ejemplo:

$$
\frac{1}{x}=2
$$

o:

$$
\frac{x+1}{x-2}=3
$$

La primera condición que debemos establecer es:

$$
x\neq0
$$

porque no se puede dividir entre cero.

En general, cualquier valor que haga cero un denominador debe excluirse del dominio.

---

## 2. Restricciones del dominio

Antes de manipular una ecuación racional debemos identificar los valores prohibidos.

Por ejemplo:

$$
\frac{x+1}{x-3}=2
$$

El denominador no puede ser cero:

$$
x-3\neq0
$$

por tanto:

$$
\boxed{x\neq3}
$$

Esta restricción debe mantenerse durante todo el proceso.

---

## 3. Resolver una ecuación racional sencilla

Consideremos:

$$
\frac{1}{x}=2
$$

con:

$$
x\neq0
$$

Multiplicamos ambos lados por $x$:

$$
1=2x
$$

Despejamos:

$$
x=\frac12
$$

La solución respeta la restricción $x\neq0$.

Por tanto:

$$
\boxed{x=\frac12}
$$

---

## 4. Eliminar denominadores

Cuando una ecuación contiene varias fracciones, podemos multiplicar toda la ecuación por el **mínimo común múltiplo de los denominadores**.

Por ejemplo:

$$
\frac{1}{x}+\frac{1}{2}=1
$$

La restricción es:

$$
x\neq0
$$

Multiplicamos por $2x$:

$$
2+x=2x
$$

Por tanto:

$$
x=2
$$

Como $2\neq0$, la solución es válida:

$$
\boxed{x=2}
$$

---

## 5. Ejemplo con varios denominadores

Consideremos:

$$
\frac{2}{x-1}+\frac{1}{x+1}=1
$$

Las restricciones son:

$$
x\neq1
$$

y:

$$
x\neq-1
$$

El mínimo común denominador es:

$$
(x-1)(x+1)
$$

Multiplicamos toda la ecuación:

$$
2(x+1)+(x-1)=x^2-1
$$

Desarrollamos:

$$
2x+2+x-1=x^2-1
$$

$$
3x+1=x^2-1
$$

Reordenamos:

$$
x^2-3x-2=0
$$

Aplicando la fórmula cuadrática:

$$
x=\frac{3\pm\sqrt{17}}{2}
$$

Ninguna de estas soluciones es $1$ o $-1$, por lo que ambas son válidas.

---

## 6. ¿Qué son las ecuaciones con radicales?

Una ecuación con radicales contiene la incógnita dentro de una raíz.

Por ejemplo:

$$
\sqrt{x}=3
$$

o:

$$
\sqrt{x+1}=x-1
$$

También pueden aparecer raíces de distintos órdenes:

$$
\sqrt[3]{x+2}=4
$$

---

## 7. Restricciones de las raíces

En los números reales, una raíz de índice par requiere que su radicando sea no negativo.

Por ejemplo:

$$
\sqrt{x-2}
$$

requiere:

$$
x-2\geq0
$$

por tanto:

$$
\boxed{x\geq2}
$$

En cambio, una raíz de índice impar, como:

$$
\sqrt[3]{x}
$$

está definida para cualquier número real.

---

## 8. Resolver una raíz sencilla

Consideremos:

$$
\sqrt{x}=5
$$

Elevamos ambos lados al cuadrado:

$$
(\sqrt{x})^2=5^2
$$

Por tanto:

$$
x=25
$$

La solución es:

$$
\boxed{x=25}
$$

---

## 9. Eliminar una raíz

Cuando tenemos una ecuación como:

$$
\sqrt{f(x)}=g(x)
$$

podemos elevar ambos lados al cuadrado:

$$
f(x)=g(x)^2
$$

Sin embargo, este procedimiento puede introducir **soluciones extrañas**.

Por ello, las soluciones obtenidas siempre deben comprobarse en la ecuación original.

---

## 10. Soluciones extrañas

Consideremos:

$$
\sqrt{x+1}=x-1
$$

Primero observamos que el lado izquierdo es siempre no negativo. Por tanto, también necesitamos:

$$
x-1\geq0
$$

es decir:

$$
x\geq1
$$

Elevamos al cuadrado:

$$
x+1=(x-1)^2
$$

Desarrollamos:

$$
x+1=x^2-2x+1
$$

$$
x=x^2-2x
$$

$$
x^2-3x=0
$$

Factorizamos:

$$
x(x-3)=0
$$

Obtenemos:

$$
x=0
$$

o:

$$
x=3
$$

Pero $x=0$ no cumple $x\geq1$.

Comprobamos $x=3$:

$$
\sqrt{3+1}=3-1
$$

$$
2=2
$$

Por tanto:

$$
\boxed{x=3}
$$

---

## 11. ¿Por qué aparecen soluciones extrañas?

Elevar al cuadrado no es una transformación equivalente en todos los casos.

Por ejemplo:

$$
a=b
$$

implica:

$$
a^2=b^2
$$

pero la igualdad:

$$
a^2=b^2
$$

puede proceder de:

$$
a=b
$$

o:

$$
a=-b
$$

Por eso, después de elevar al cuadrado debemos comprobar las soluciones en la ecuación original.

---

## 12. Radicales en ambos lados

Consideremos:

$$
\sqrt{x+3}=\sqrt{2x-1}
$$

Primero establecemos el dominio:

$$
x+3\geq0
$$

y:

$$
2x-1\geq0
$$

La segunda condición es más restrictiva:

$$
x\geq\frac12
$$

Elevamos ambos lados al cuadrado:

$$
x+3=2x-1
$$

Despejamos:

$$
x=4
$$

Comprobamos:

$$
\sqrt7=\sqrt7
$$

Por tanto:

$$
\boxed{x=4}
$$

---

## 13. Dos radicales

Consideremos:

$$
\sqrt{x+5}-\sqrt{x}=1
$$

Aislamos una raíz:

$$
\sqrt{x+5}=1+\sqrt{x}
$$

Elevamos al cuadrado:

$$
x+5=1+2\sqrt{x}+x
$$

Simplificamos:

$$
4=2\sqrt{x}
$$

$$
\sqrt{x}=2
$$

Volvemos a elevar al cuadrado:

$$
x=4
$$

Comprobamos en la ecuación original:

$$
\sqrt9-\sqrt4=3-2=1
$$

Por tanto:

$$
\boxed{x=4}
$$

---

## 14. Radicales de índice impar

Las raíces de índice impar no necesitan que el radicando sea positivo.

Por ejemplo:

$$
\sqrt[3]{x-2}=3
$$

Elevamos al cubo:

$$
x-2=27
$$

Por tanto:

$$
\boxed{x=29}
$$

---

## 15. Ecuaciones racionales con radicales

Una ecuación puede combinar fracciones y radicales.

Por ejemplo:

$$
\frac{1}{\sqrt{x}}=2
$$

Aquí tenemos dos restricciones:

$$
x\geq0
$$

porque aparece una raíz cuadrada, y además:

$$
\sqrt{x}\neq0
$$

porque está en el denominador.

Por tanto:

$$
\boxed{x>0}
$$

Multiplicamos:

$$
1=2\sqrt{x}
$$

Entonces:

$$
\sqrt{x}=\frac12
$$

Elevamos al cuadrado:

$$
x=\frac14
$$

La solución es válida.

---

## 16. Radicales en denominadores

Cuando una raíz aparece en el denominador, debemos recordar que el denominador no puede ser cero.

Por ejemplo:

$$
\frac{1}{\sqrt{x-2}}
$$

requiere:

$$
x-2>0
$$

Por tanto:

$$
\boxed{x>2}
$$

Observa que no basta con:

$$
x-2\geq0
$$

porque $x=2$ haría que el denominador fuera cero.

---

## 17. Racionalización

En algunas expresiones es conveniente eliminar radicales del denominador.

Por ejemplo:

$$
\frac{1}{\sqrt2}
$$

Multiplicamos numerador y denominador por $\sqrt2$:

$$
\frac{1}{\sqrt2}
\cdot
\frac{\sqrt2}{\sqrt2}
=

\frac{\sqrt2}{2}
$$

Por tanto:

$$
\boxed{\frac{1}{\sqrt2}=\frac{\sqrt2}{2}}
$$

---

## 18. Racionalización con binomios

Para racionalizar expresiones como:

$$
\frac{1}{a+\sqrt b}
$$

podemos multiplicar por el conjugado:

$$
a-\sqrt b
$$

porque:

$$
(a+\sqrt b)(a-\sqrt b)=a^2-b
$$

Por ejemplo:

$$
\frac{1}{2+\sqrt3}
$$

Multiplicamos por:

$$
\frac{2-\sqrt3}{2-\sqrt3}
$$

Obtenemos:

$$
\frac{2-\sqrt3}{4-3}
$$

y por tanto:

$$
\boxed{2-\sqrt3}
$$

---

## 19. Ecuaciones con valor absoluto y radicales

Algunas ecuaciones pueden combinar radicales con valores absolutos.

Por ejemplo:

$$
\sqrt{x^2}=|x|
$$

Esta identidad es importante:

$$
\boxed{\sqrt{x^2}=|x|}
$$

No debemos escribir simplemente:

$$
\sqrt{x^2}=x
$$

porque esto solamente es cierto cuando:

$$
x\geq0
$$

---

## 20. Procedimiento para ecuaciones racionales

Para resolver una ecuación racional:

1. Identifica todos los denominadores.
2. Determina los valores prohibidos.
3. Calcula el mínimo común denominador.
4. Multiplica toda la ecuación por él.
5. Simplifica.
6. Resuelve la ecuación resultante.
7. Descarta cualquier valor prohibido.
8. Comprueba las soluciones en la ecuación original.

---

## 21. Procedimiento para ecuaciones con radicales

Para resolver una ecuación con radicales:

1. Determina el dominio.
2. Aísla un radical.
3. Eleva ambos lados a la potencia adecuada.
4. Simplifica.
5. Si todavía quedan radicales, vuelve a aislar uno.
6. Repite el proceso si es necesario.
7. Resuelve la ecuación resultante.
8. Comprueba todas las soluciones en la ecuación original.
9. Descarta las soluciones extrañas.

---

## 22. Errores frecuentes

### No establecer el dominio

Incorrecto:

$$
\frac{1}{x-2}=3
$$

sin indicar:

$$
x\neq2
$$

### Elevar al cuadrado y no comprobar

Una ecuación como:

$$
\sqrt{f(x)}=g(x)
$$

puede producir soluciones que no pertenecen a la ecuación original.

### Olvidar que un denominador no puede ser cero

$$
\frac{1}{\sqrt{x-1}}
$$

requiere:

$$
x>1
$$

no simplemente:

$$
x\geq1
$$

### Confundir $\sqrt{x^2}$ con $x$

La identidad correcta es:

$$
\sqrt{x^2}=|x|
$$

---

## 23. Resumen de restricciones

### Denominador

Si:

$$
\frac{1}{f(x)}
$$

entonces:

$$
f(x)\neq0
$$

### Raíz de índice par

Si:

$$
\sqrt[n]{f(x)}
$$

con $n$ par:

$$
f(x)\geq0
$$

### Raíz de índice par en denominador

Si:

$$
\frac{1}{\sqrt[n]{f(x)}}
$$

con $n$ par:

$$
f(x)>0
$$

### Raíz de índice impar

Si $n$ es impar, no existe una restricción de signo sobre el radicando en los números reales.

---

## 24. Idea fundamental

Resolver ecuaciones racionales y con radicales no consiste únicamente en realizar operaciones algebraicas.

La idea fundamental es:

$$
\boxed{
\text{dominio}
\rightarrow
\text{transformación}
\rightarrow
\text{resolución}
\rightarrow
\text{comprobación}
}
$$

Las restricciones del dominio y la comprobación final son tan importantes como las operaciones algebraicas utilizadas para encontrar las soluciones.
