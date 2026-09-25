# Logaritmos

Los **logaritmos** son una herramienta matemática que nos permite descubrir un exponente desconocido.

Para entenderlos bien, primero debemos recordar qué significa una potencia.

## 1. Recordatorio: las potencias

Una potencia tiene la forma

$$
a^n
$$

donde:

- $a$ es la **base**.
- $n$ es el **exponente**.
- El resultado es el número que obtenemos al multiplicar la base por sí misma $n$ veces.

Por ejemplo:

$$
2^3=2\cdot2\cdot2=8
$$

Por tanto:

$$
2^3=8
$$

Aquí conocemos la base $2$ y el exponente $3$, y obtenemos el resultado $8$.

Pero ¿qué ocurre si conocemos la base y el resultado, pero no conocemos el exponente?

Por ejemplo:

$$
2^x=8
$$

Sabemos que:

$$
2^3=8
$$

por lo que:

$$
x=3
$$

Los logaritmos nos permiten expresar precisamente esta pregunta.

---

## 2. ¿Qué es un logaritmo?

Un logaritmo responde a la pregunta:

> **¿A qué exponente debemos elevar una base para obtener un número determinado?**

La expresión

$$
\log_b(x)=y
$$

significa exactamente lo mismo que:

$$
b^y=x
$$

Es decir:

$$
\boxed{\log_b(x)=y\iff b^y=x}
$$

Por ejemplo:

$$
\log_2(8)=3
$$

porque:

$$
2^3=8
$$

El logaritmo nos está preguntando:

> ¿A qué exponente tengo que elevar $2$ para obtener $8$?

La respuesta es $3$.

---

## 3. Las tres partes de un logaritmo

En la expresión

$$
\log_b(x)=y
$$

tenemos tres elementos:

- $b$: **base**.
- $x$: **argumento** del logaritmo.
- $y$: **resultado del logaritmo**.

Por ejemplo:

$$
\log_3(81)=4
$$

En este caso:

- la base es $3$;
- el argumento es $81$;
- el resultado es $4$.

¿Por qué?

Porque:

$$
3^4=81
$$

---

## 4. La relación entre potencias y logaritmos

Los logaritmos y las potencias están directamente relacionados.

Podemos pasar de una forma a la otra:

$$
b^y=x
$$

equivale a:

$$
\log_b(x)=y
$$

Por ejemplo:

$$
5^3=125
$$

puede escribirse como:

$$
\log_5(125)=3
$$

Otro ejemplo:

$$
10^4=10000
$$

equivale a:

$$
\log_{10}(10000)=4
$$

Y:

$$
7^2=49
$$

equivale a:

$$
\log_7(49)=2
$$

### Regla fundamental

Cuando veamos:

$$
\log_b(x)=y
$$

podemos transformarlo inmediatamente en:

$$
b^y=x
$$

Esta equivalencia es la base de todo el estudio de los logaritmos.

---

## 5. ¿Por qué necesitamos logaritmos?

Supongamos que queremos resolver:

$$
2^x=32
$$

Podemos reconocer que:

$$
2^5=32
$$

y concluir que:

$$
x=5
$$

Pero ahora imaginemos:

$$
2^x=17
$$

No existe un exponente entero sencillo que podamos reconocer mentalmente.

Podemos expresar la solución mediante un logaritmo:

$$
x=\log_2(17)
$$

El logaritmo nos proporciona una forma matemática de representar ese exponente.

Por tanto, si tenemos:

$$
a^x=b
$$

podemos escribir:

$$
\boxed{x=\log_a(b)}
$$

---

## 6. Condiciones para que exista un logaritmo

No podemos utilizar cualquier número como base ni cualquier número como argumento.

Para que

$$
\log_b(x)
$$

esté definido en los números reales, deben cumplirse dos condiciones:

$$
b>0
$$

y

$$
b\neq1
$$

Además, el argumento debe ser positivo:

$$
x>0
$$

Por tanto:

$$
\boxed{b>0,\quad b\neq1,\quad x>0}
$$

### ¿Por qué el argumento debe ser positivo?

Consideremos una potencia con base positiva:

$$
2^x
$$

El resultado siempre es positivo, independientemente del valor de $x$.

Por ejemplo:

$$
2^3=8
$$

$$
2^0=1
$$

$$
2^{-3}=\frac{1}{8}
$$

Todos los resultados son positivos.

Por eso no existe ningún número real $x$ que satisfaga:

$$
2^x=-4
$$

En consecuencia:

$$
\log_2(-4)
$$

no está definido en los números reales.

Tampoco podemos calcular:

$$
\log_2(0)
$$

porque ninguna potencia de $2$ es igual a $0$.

Por tanto:

$$
\boxed{\log_b(x)\text{ requiere }x>0}
$$

---

## 7. ¿Por qué la base no puede ser 1?

Si la base fuera $1$, tendríamos:

$$
1^x=1
$$

para cualquier valor de $x$.

Por ejemplo:

$$
1^2=1
$$

$$
1^5=1
$$

$$
1^{100}=1
$$

Por tanto, la expresión

$$
\log_1(1)
$$

no tendría un único resultado.

Por eso la base debe cumplir:

$$
\boxed{b\neq1}
$$

---

## 8. Logaritmos con resultados sencillos

Muchos logaritmos pueden calcularse directamente utilizando potencias conocidas.

### Ejemplo 1

$$
\log_2(16)
$$

Preguntamos:

> ¿A qué exponente debemos elevar $2$ para obtener $16$?

Como:

$$
2^4=16
$$

entonces:

$$
\boxed{\log_2(16)=4}
$$

### Ejemplo 2

$$
\log_3(27)
$$

Como:

$$
3^3=27
$$

tenemos:

$$
\boxed{\log_3(27)=3}
$$

### Ejemplo 3

$$
\log_5(625)
$$

Como:

$$
5^4=625
$$

entonces:

$$
\boxed{\log_5(625)=4}
$$

---

## 9. Logaritmos de 1

Una propiedad importante es:

$$
\boxed{\log_b(1)=0}
$$

siempre que la base sea válida.

¿Por qué?

Porque:

$$
b^0=1
$$

Por ejemplo:

$$
\log_2(1)=0
$$

$$
\log_{10}(1)=0
$$

$$
\log_7(1)=0
$$

---

## 10. Logaritmos de la propia base

Otra propiedad fundamental es:

$$
\boxed{\log_b(b)=1}
$$

porque:

$$
b^1=b
$$

Por ejemplo:

$$
\log_2(2)=1
$$

$$
\log_{10}(10)=1
$$

$$
\log_5(5)=1
$$

---

## 11. Logaritmos de potencias de la base

Si tenemos:

$$
\log_b(b^n)
$$

el resultado es directamente $n$:

$$
\boxed{\log_b(b^n)=n}
$$

Por ejemplo:

$$
\log_2(2^7)=7
$$

porque:

$$
2^7=128
$$

y, por tanto:

$$
\log_2(128)=7
$$

---

# 12. Logaritmo decimal

El logaritmo de base $10$ recibe el nombre de **logaritmo decimal**.

Normalmente se escribe:

$$
\log(x)
$$

sin indicar la base.

Cuando escribimos:

$$
\log(1000)
$$

normalmente estamos utilizando base $10$:

$$
\log_{10}(1000)
$$

Como:

$$
10^3=1000
$$

tenemos:

$$
\boxed{\log(1000)=3}
$$

Otros ejemplos:

$$
\log(10)=1
$$

$$
\log(100)=2
$$

$$
\log(10000)=4
$$

---

# 13. Logaritmo natural

Existe una base especialmente importante en matemáticas:

$$
e
$$

donde aproximadamente:

$$
e\approx2.71828
$$

El logaritmo de base $e$ recibe el nombre de **logaritmo natural** y se representa mediante:

$$
\ln(x)
$$

Por definición:

$$
\ln(x)=\log_e(x)
$$

Por ejemplo:

$$
\ln(e)=1
$$

porque:

$$
e^1=e
$$

También:

$$
\ln(e^3)=3
$$

porque:

$$
e^3=e^3
$$

El logaritmo natural aparece constantemente en cálculo, crecimiento y decrecimiento exponencial, ecuaciones diferenciales, probabilidad y muchas otras áreas de las matemáticas.

---

# 14. Propiedad del producto

Una de las propiedades más importantes de los logaritmos es:

$$
\boxed{\log_b(xy)=\log_b(x)+\log_b(y)}
$$

Es decir, el logaritmo de un producto puede convertirse en una suma.

### Ejemplo

Consideremos:

$$
\log_2(8\cdot4)
$$

Podemos escribir:

$$
\log_2(8)+\log_2(4)
$$

Como:

$$
\log_2(8)=3
$$

y:

$$
\log_2(4)=2
$$

obtenemos:

$$
3+2=5
$$

Por tanto:

$$
\log_2(32)=5
$$

---

# 15. Propiedad del cociente

Para un cociente:

$$
\boxed{
\log_b\left(\frac{x}{y}\right)
=
\log_b(x)-\log_b(y)
}
$$

### Ejemplo

Consideremos:

$$
\log_2\left(\frac{32}{4}\right)
$$

Podemos escribir:

$$
\log_2(32)-\log_2(4)
$$

Por tanto:

$$
5-2=3
$$

y:

$$
\log_2(8)=3
$$

---

# 16. Propiedad de las potencias

Otra propiedad fundamental es:

$$
\boxed{
\log_b(x^n)=n\log_b(x)
}
$$

El exponente pasa delante del logaritmo como un multiplicador.

### Ejemplo

$$
\log_2(8^2)
$$

podemos escribir:

$$
2\log_2(8)
$$

Como:

$$
\log_2(8)=3
$$

obtenemos:

$$
2\cdot3=6
$$

Por tanto:

$$
\log_2(64)=6
$$

---

# 17. Raíces y logaritmos

Una raíz puede escribirse como una potencia:

$$
\sqrt[n]{x}=x^{1/n}
$$

Por tanto:

$$
\log_b(\sqrt[n]{x})
=
\log_b(x^{1/n})
$$

Aplicando la propiedad de las potencias:

$$
\boxed{
\log_b(\sqrt[n]{x})
=
\frac{1}{n}\log_b(x)
}
$$

### Ejemplo

$$
\log_2(\sqrt{16})
$$

Como:

$$
\sqrt{16}=16^{1/2}
$$

tenemos:

$$
\log_2(16^{1/2})
=
\frac12\log_2(16)
$$

Como:

$$
\log_2(16)=4
$$

obtenemos:

$$
\frac12\cdot4=2
$$

Por tanto:

$$
\boxed{\log_2(4)=2}
$$

---

# 18. Desarrollar expresiones logarítmicas

Las propiedades anteriores permiten transformar un único logaritmo en varios.

Por ejemplo:

$$
\log_b(xyz)
$$

se puede desarrollar como:

$$
\boxed{
\log_b(x)+\log_b(y)+\log_b(z)
}
$$

Y:

$$
\log_b\left(\frac{x^2y}{z}\right)
$$

se puede desarrollar como:

$$
\log_b(x^2)+\log_b(y)-\log_b(z)
$$

Aplicando la propiedad de las potencias:

$$
\boxed{
2\log_b(x)+\log_b(y)-\log_b(z)
}
$$

---

# 19. Condensar expresiones logarítmicas

También podemos hacer el proceso contrario.

Por ejemplo:

$$
\log_b(x)+\log_b(y)
$$

puede escribirse como:

$$
\boxed{
\log_b(xy)
}
$$

Y:

$$
\log_b(x)-\log_b(y)
$$

puede escribirse como:

$$
\boxed{
\log_b\left(\frac{x}{y}\right)
}
$$

También:

$$
3\log_b(x)
$$

puede escribirse como:

$$
\boxed{
\log_b(x^3)
}
$$

Estas transformaciones son especialmente útiles para resolver ecuaciones logarítmicas.

---

# 20. Cambio de base

A veces necesitamos calcular un logaritmo cuya base no está disponible directamente en una calculadora.

Podemos utilizar la fórmula de **cambio de base**:

$$
\boxed{
\log_b(x)
=
\frac{\log_a(x)}{\log_a(b)}
}
$$

La base $a$ puede ser cualquier base válida.

En particular, podemos utilizar $10$:

$$
\boxed{
\log_b(x)
=
\frac{\log(x)}{\log(b)}
}
$$

o $e$:

$$
\boxed{
\log_b(x)
=
\frac{\ln(x)}{\ln(b)}
}
$$

### Ejemplo

Queremos calcular:

$$
\log_2(10)
$$

Utilizamos cambio de base:

$$
\log_2(10)
=
\frac{\log(10)}{\log(2)}
$$

Como:

$$
\log(10)=1
$$

obtenemos:

$$
\log_2(10)
=
\frac{1}{\log(2)}
$$

Aproximadamente:

$$
\log_2(10)\approx3.3219
$$

Esto significa que:

$$
2^{3.3219}\approx10
$$

---

# 21. Resolver ecuaciones logarítmicas sencillas

Una de las aplicaciones principales de los logaritmos es resolver ecuaciones donde la incógnita aparece como exponente.

Consideremos:

$$
2^x=16
$$

Podemos transformar la ecuación utilizando un logaritmo:

$$
\log_2(16)=x
$$

Como:

$$
\log_2(16)=4
$$

obtenemos:

$$
\boxed{x=4}
$$

---

## 22. Resolver una ecuación exponencial con logaritmos

Consideremos:

$$
3^x=20
$$

No existe un exponente entero sencillo que produzca $20$.

Aplicamos logaritmos:

$$
\log(3^x)=\log(20)
$$

Utilizando la propiedad de las potencias:

$$
x\log(3)=\log(20)
$$

Despejamos $x$:

$$
\boxed{
x=\frac{\log(20)}{\log(3)}
}
$$

Aproximadamente:

$$
x\approx2.7268
$$

Por tanto:

$$
3^{2.7268}\approx20
$$

---

# 23. Resolver ecuaciones logarítmicas mediante la definición

Supongamos:

$$
\log_2(x)=5
$$

Utilizamos la definición de logaritmo:

$$
2^5=x
$$

Por tanto:

$$
\boxed{x=32}
$$

Otro ejemplo:

$$
\log_3(x)=4
$$

equivale a:

$$
3^4=x
$$

por lo que:

$$
\boxed{x=81}
$$

---

# 24. Cuando el argumento contiene una expresión

Consideremos:

$$
\log_2(x-1)=3
$$

Utilizamos la definición:

$$
2^3=x-1
$$

Entonces:

$$
8=x-1
$$

y:

$$
\boxed{x=9}
$$

Debemos comprobar además que el argumento sea positivo:

$$
x-1>0
$$

Para $x=9$:

$$
9-1=8>0
$$

Por tanto, la solución es válida.

---

# 25. Ecuaciones con dos logaritmos

Consideremos:

$$
\log_2(x)+\log_2(4)=5
$$

Utilizamos la propiedad del producto:

$$
\log_2(4x)=5
$$

Aplicamos la definición:

$$
2^5=4x
$$

Entonces:

$$
32=4x
$$

y:

$$
\boxed{x=8}
$$

Comprobamos el dominio:

$$
x>0
$$

Como $8>0$, la solución es válida.

---

# 26. Ecuaciones con una resta de logaritmos

Consideremos:

$$
\log_3(x)-\log_3(2)=2
$$

Aplicamos la propiedad del cociente:

$$
\log_3\left(\frac{x}{2}\right)=2
$$

Pasamos a forma exponencial:

$$
3^2=\frac{x}{2}
$$

Entonces:

$$
9=\frac{x}{2}
$$

y:

$$
\boxed{x=18}
$$

---

# 27. La importancia del dominio

En una ecuación logarítmica no basta con encontrar un valor de $x$.

También debemos comprobar que todos los argumentos de los logaritmos sean positivos.

Por ejemplo:

$$
\log(x-3)
$$

requiere:

$$
x-3>0
$$

por tanto:

$$
\boxed{x>3}
$$

Si durante la resolución obtenemos:

$$
x=2
$$

esa solución no es válida porque:

$$
2-3=-1
$$

y no existe:

$$
\log(-1)
$$

en los números reales.

---

# 28. Errores frecuentes

Hay algunas reglas que **no** son ciertas.

### Error 1: separar una suma dentro del logaritmo

No podemos escribir:

$$
\log(x+y)=\log(x)+\log(y)
$$

Esto es falso.

La propiedad correcta es:

$$
\log(xy)=\log(x)+\log(y)
$$

Es decir, la propiedad del producto se aplica a una multiplicación, no a una suma.

---

### Error 2: separar una resta

Tampoco podemos escribir:

$$
\log(x-y)=\log(x)-\log(y)
$$

Esto es falso.

La propiedad correcta es:

$$
\log\left(\frac{x}{y}\right)
=
\log(x)-\log(y)
$$

---

### Error 3: olvidar el dominio

No podemos aceptar automáticamente cualquier solución obtenida.

Siempre debemos comprobar:

$$
\boxed{\text{argumento}>0}
$$

---

### Error 4: confundir la base con el argumento

En:

$$
\log_2(8)
$$

la base es $2$ y el argumento es $8$.

No debemos intercambiarlos.

---

# 29. Resumen de las propiedades fundamentales

Para una base válida $b$:

### Logaritmo de 1

$$
\boxed{\log_b(1)=0}
$$

### Logaritmo de la base

$$
\boxed{\log_b(b)=1}
$$

### Producto

$$
\boxed{
\log_b(xy)=\log_b(x)+\log_b(y)
}
$$

### Cociente

$$
\boxed{
\log_b\left(\frac{x}{y}\right)
=
\log_b(x)-\log_b(y)
}
$$

### Potencia

$$
\boxed{
\log_b(x^n)=n\log_b(x)
}
$$

### Cambio de base

$$
\boxed{
\log_b(x)
=
\frac{\log_a(x)}{\log_a(b)}
}
$$

### Relación con las potencias

$$
\boxed{
\log_b(x)=y
\iff
b^y=x
}
$$

---

# 30. Procedimiento para trabajar con logaritmos

Cuando aparezca una expresión logarítmica, podemos seguir estos pasos:

1. **Identificar la base y el argumento.**
2. **Comprobar el dominio.**
3. **Buscar potencias conocidas** para calcular directamente el logaritmo.
4. **Aplicar las propiedades** de producto, cociente y potencia cuando sea necesario.
5. **Utilizar el cambio de base** si necesitamos calcular un logaritmo con una base determinada.
6. **Transformar entre forma logarítmica y exponencial** cuando sea útil.
7. **Comprobar las soluciones** en la expresión original cuando estemos resolviendo una ecuación.

---

# 31. Idea fundamental

La idea más importante que debemos recordar es:

$$
\boxed{
\log_b(x)=y
\iff
b^y=x
}
$$

Un logaritmo no es una operación completamente independiente de las potencias.

Es otra forma de expresar la misma relación.

Si sabemos que:

$$
2^5=32
$$

entonces automáticamente sabemos que:

$$
\log_2(32)=5
$$

Y si sabemos que:

$$
\log_3(81)=4
$$

entonces sabemos que:

$$
3^4=81
$$

Por eso, para aprender logaritmos correctamente, es fundamental dominar primero las potencias y sus propiedades.
