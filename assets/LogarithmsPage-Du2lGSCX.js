import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-C1BT9wAk.js";import{t as n}from"./TopicPage-DZNFNl0A.js";var r=`# Logaritmos

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
2^3=2\\cdot2\\cdot2=8
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
\\log_b(x)=y
$$

significa exactamente lo mismo que:

$$
b^y=x
$$

Es decir:

$$
\\boxed{\\log_b(x)=y\\iff b^y=x}
$$

Por ejemplo:

$$
\\log_2(8)=3
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
\\log_b(x)=y
$$

tenemos tres elementos:

- $b$: **base**.
- $x$: **argumento** del logaritmo.
- $y$: **resultado del logaritmo**.

Por ejemplo:

$$
\\log_3(81)=4
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
\\log_b(x)=y
$$

Por ejemplo:

$$
5^3=125
$$

puede escribirse como:

$$
\\log_5(125)=3
$$

Otro ejemplo:

$$
10^4=10000
$$

equivale a:

$$
\\log_{10}(10000)=4
$$

Y:

$$
7^2=49
$$

equivale a:

$$
\\log_7(49)=2
$$

### Regla fundamental

Cuando veamos:

$$
\\log_b(x)=y
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
x=\\log_2(17)
$$

El logaritmo nos proporciona una forma matemática de representar ese exponente.

Por tanto, si tenemos:

$$
a^x=b
$$

podemos escribir:

$$
\\boxed{x=\\log_a(b)}
$$

---

## 6. Condiciones para que exista un logaritmo

No podemos utilizar cualquier número como base ni cualquier número como argumento.

Para que

$$
\\log_b(x)
$$

esté definido en los números reales, deben cumplirse dos condiciones:

$$
b>0
$$

y

$$
b\\neq1
$$

Además, el argumento debe ser positivo:

$$
x>0
$$

Por tanto:

$$
\\boxed{b>0,\\quad b\\neq1,\\quad x>0}
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
2^{-3}=\\frac{1}{8}
$$

Todos los resultados son positivos.

Por eso no existe ningún número real $x$ que satisfaga:

$$
2^x=-4
$$

En consecuencia:

$$
\\log_2(-4)
$$

no está definido en los números reales.

Tampoco podemos calcular:

$$
\\log_2(0)
$$

porque ninguna potencia de $2$ es igual a $0$.

Por tanto:

$$
\\boxed{\\log_b(x)\\text{ requiere }x>0}
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
\\log_1(1)
$$

no tendría un único resultado.

Por eso la base debe cumplir:

$$
\\boxed{b\\neq1}
$$

---

## 8. Logaritmos con resultados sencillos

Muchos logaritmos pueden calcularse directamente utilizando potencias conocidas.

### Ejemplo 1

$$
\\log_2(16)
$$

Preguntamos:

> ¿A qué exponente debemos elevar $2$ para obtener $16$?

Como:

$$
2^4=16
$$

entonces:

$$
\\boxed{\\log_2(16)=4}
$$

### Ejemplo 2

$$
\\log_3(27)
$$

Como:

$$
3^3=27
$$

tenemos:

$$
\\boxed{\\log_3(27)=3}
$$

### Ejemplo 3

$$
\\log_5(625)
$$

Como:

$$
5^4=625
$$

entonces:

$$
\\boxed{\\log_5(625)=4}
$$

---

## 9. Logaritmos de 1

Una propiedad importante es:

$$
\\boxed{\\log_b(1)=0}
$$

siempre que la base sea válida.

¿Por qué?

Porque:

$$
b^0=1
$$

Por ejemplo:

$$
\\log_2(1)=0
$$

$$
\\log_{10}(1)=0
$$

$$
\\log_7(1)=0
$$

---

## 10. Logaritmos de la propia base

Otra propiedad fundamental es:

$$
\\boxed{\\log_b(b)=1}
$$

porque:

$$
b^1=b
$$

Por ejemplo:

$$
\\log_2(2)=1
$$

$$
\\log_{10}(10)=1
$$

$$
\\log_5(5)=1
$$

---

## 11. Logaritmos de potencias de la base

Si tenemos:

$$
\\log_b(b^n)
$$

el resultado es directamente $n$:

$$
\\boxed{\\log_b(b^n)=n}
$$

Por ejemplo:

$$
\\log_2(2^7)=7
$$

porque:

$$
2^7=128
$$

y, por tanto:

$$
\\log_2(128)=7
$$

---

# 12. Logaritmo decimal

El logaritmo de base $10$ recibe el nombre de **logaritmo decimal**.

Normalmente se escribe:

$$
\\log(x)
$$

sin indicar la base.

Cuando escribimos:

$$
\\log(1000)
$$

normalmente estamos utilizando base $10$:

$$
\\log_{10}(1000)
$$

Como:

$$
10^3=1000
$$

tenemos:

$$
\\boxed{\\log(1000)=3}
$$

Otros ejemplos:

$$
\\log(10)=1
$$

$$
\\log(100)=2
$$

$$
\\log(10000)=4
$$

---

# 13. Logaritmo natural

Existe una base especialmente importante en matemáticas:

$$
e
$$

donde aproximadamente:

$$
e\\approx2.71828
$$

El logaritmo de base $e$ recibe el nombre de **logaritmo natural** y se representa mediante:

$$
\\ln(x)
$$

Por definición:

$$
\\ln(x)=\\log_e(x)
$$

Por ejemplo:

$$
\\ln(e)=1
$$

porque:

$$
e^1=e
$$

También:

$$
\\ln(e^3)=3
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
\\boxed{\\log_b(xy)=\\log_b(x)+\\log_b(y)}
$$

Es decir, el logaritmo de un producto puede convertirse en una suma.

### Ejemplo

Consideremos:

$$
\\log_2(8\\cdot4)
$$

Podemos escribir:

$$
\\log_2(8)+\\log_2(4)
$$

Como:

$$
\\log_2(8)=3
$$

y:

$$
\\log_2(4)=2
$$

obtenemos:

$$
3+2=5
$$

Por tanto:

$$
\\log_2(32)=5
$$

---

# 15. Propiedad del cociente

Para un cociente:

$$
\\boxed{
\\log_b\\left(\\frac{x}{y}\\right)
=
\\log_b(x)-\\log_b(y)
}
$$

### Ejemplo

Consideremos:

$$
\\log_2\\left(\\frac{32}{4}\\right)
$$

Podemos escribir:

$$
\\log_2(32)-\\log_2(4)
$$

Por tanto:

$$
5-2=3
$$

y:

$$
\\log_2(8)=3
$$

---

# 16. Propiedad de las potencias

Otra propiedad fundamental es:

$$
\\boxed{
\\log_b(x^n)=n\\log_b(x)
}
$$

El exponente pasa delante del logaritmo como un multiplicador.

### Ejemplo

$$
\\log_2(8^2)
$$

podemos escribir:

$$
2\\log_2(8)
$$

Como:

$$
\\log_2(8)=3
$$

obtenemos:

$$
2\\cdot3=6
$$

Por tanto:

$$
\\log_2(64)=6
$$

---

# 17. Raíces y logaritmos

Una raíz puede escribirse como una potencia:

$$
\\sqrt[n]{x}=x^{1/n}
$$

Por tanto:

$$
\\log_b(\\sqrt[n]{x})
=
\\log_b(x^{1/n})
$$

Aplicando la propiedad de las potencias:

$$
\\boxed{
\\log_b(\\sqrt[n]{x})
=
\\frac{1}{n}\\log_b(x)
}
$$

### Ejemplo

$$
\\log_2(\\sqrt{16})
$$

Como:

$$
\\sqrt{16}=16^{1/2}
$$

tenemos:

$$
\\log_2(16^{1/2})
=
\\frac12\\log_2(16)
$$

Como:

$$
\\log_2(16)=4
$$

obtenemos:

$$
\\frac12\\cdot4=2
$$

Por tanto:

$$
\\boxed{\\log_2(4)=2}
$$

---

# 18. Desarrollar expresiones logarítmicas

Las propiedades anteriores permiten transformar un único logaritmo en varios.

Por ejemplo:

$$
\\log_b(xyz)
$$

se puede desarrollar como:

$$
\\boxed{
\\log_b(x)+\\log_b(y)+\\log_b(z)
}
$$

Y:

$$
\\log_b\\left(\\frac{x^2y}{z}\\right)
$$

se puede desarrollar como:

$$
\\log_b(x^2)+\\log_b(y)-\\log_b(z)
$$

Aplicando la propiedad de las potencias:

$$
\\boxed{
2\\log_b(x)+\\log_b(y)-\\log_b(z)
}
$$

---

# 19. Condensar expresiones logarítmicas

También podemos hacer el proceso contrario.

Por ejemplo:

$$
\\log_b(x)+\\log_b(y)
$$

puede escribirse como:

$$
\\boxed{
\\log_b(xy)
}
$$

Y:

$$
\\log_b(x)-\\log_b(y)
$$

puede escribirse como:

$$
\\boxed{
\\log_b\\left(\\frac{x}{y}\\right)
}
$$

También:

$$
3\\log_b(x)
$$

puede escribirse como:

$$
\\boxed{
\\log_b(x^3)
}
$$

Estas transformaciones son especialmente útiles para resolver ecuaciones logarítmicas.

---

# 20. Cambio de base

A veces necesitamos calcular un logaritmo cuya base no está disponible directamente en una calculadora.

Podemos utilizar la fórmula de **cambio de base**:

$$
\\boxed{
\\log_b(x)
=
\\frac{\\log_a(x)}{\\log_a(b)}
}
$$

La base $a$ puede ser cualquier base válida.

En particular, podemos utilizar $10$:

$$
\\boxed{
\\log_b(x)
=
\\frac{\\log(x)}{\\log(b)}
}
$$

o $e$:

$$
\\boxed{
\\log_b(x)
=
\\frac{\\ln(x)}{\\ln(b)}
}
$$

### Ejemplo

Queremos calcular:

$$
\\log_2(10)
$$

Utilizamos cambio de base:

$$
\\log_2(10)
=
\\frac{\\log(10)}{\\log(2)}
$$

Como:

$$
\\log(10)=1
$$

obtenemos:

$$
\\log_2(10)
=
\\frac{1}{\\log(2)}
$$

Aproximadamente:

$$
\\log_2(10)\\approx3.3219
$$

Esto significa que:

$$
2^{3.3219}\\approx10
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
\\log_2(16)=x
$$

Como:

$$
\\log_2(16)=4
$$

obtenemos:

$$
\\boxed{x=4}
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
\\log(3^x)=\\log(20)
$$

Utilizando la propiedad de las potencias:

$$
x\\log(3)=\\log(20)
$$

Despejamos $x$:

$$
\\boxed{
x=\\frac{\\log(20)}{\\log(3)}
}
$$

Aproximadamente:

$$
x\\approx2.7268
$$

Por tanto:

$$
3^{2.7268}\\approx20
$$

---

# 23. Resolver ecuaciones logarítmicas mediante la definición

Supongamos:

$$
\\log_2(x)=5
$$

Utilizamos la definición de logaritmo:

$$
2^5=x
$$

Por tanto:

$$
\\boxed{x=32}
$$

Otro ejemplo:

$$
\\log_3(x)=4
$$

equivale a:

$$
3^4=x
$$

por lo que:

$$
\\boxed{x=81}
$$

---

# 24. Cuando el argumento contiene una expresión

Consideremos:

$$
\\log_2(x-1)=3
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
\\boxed{x=9}
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
\\log_2(x)+\\log_2(4)=5
$$

Utilizamos la propiedad del producto:

$$
\\log_2(4x)=5
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
\\boxed{x=8}
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
\\log_3(x)-\\log_3(2)=2
$$

Aplicamos la propiedad del cociente:

$$
\\log_3\\left(\\frac{x}{2}\\right)=2
$$

Pasamos a forma exponencial:

$$
3^2=\\frac{x}{2}
$$

Entonces:

$$
9=\\frac{x}{2}
$$

y:

$$
\\boxed{x=18}
$$

---

# 27. La importancia del dominio

En una ecuación logarítmica no basta con encontrar un valor de $x$.

También debemos comprobar que todos los argumentos de los logaritmos sean positivos.

Por ejemplo:

$$
\\log(x-3)
$$

requiere:

$$
x-3>0
$$

por tanto:

$$
\\boxed{x>3}
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
\\log(-1)
$$

en los números reales.

---

# 28. Errores frecuentes

Hay algunas reglas que **no** son ciertas.

### Error 1: separar una suma dentro del logaritmo

No podemos escribir:

$$
\\log(x+y)=\\log(x)+\\log(y)
$$

Esto es falso.

La propiedad correcta es:

$$
\\log(xy)=\\log(x)+\\log(y)
$$

Es decir, la propiedad del producto se aplica a una multiplicación, no a una suma.

---

### Error 2: separar una resta

Tampoco podemos escribir:

$$
\\log(x-y)=\\log(x)-\\log(y)
$$

Esto es falso.

La propiedad correcta es:

$$
\\log\\left(\\frac{x}{y}\\right)
=
\\log(x)-\\log(y)
$$

---

### Error 3: olvidar el dominio

No podemos aceptar automáticamente cualquier solución obtenida.

Siempre debemos comprobar:

$$
\\boxed{\\text{argumento}>0}
$$

---

### Error 4: confundir la base con el argumento

En:

$$
\\log_2(8)
$$

la base es $2$ y el argumento es $8$.

No debemos intercambiarlos.

---

# 29. Resumen de las propiedades fundamentales

Para una base válida $b$:

### Logaritmo de 1

$$
\\boxed{\\log_b(1)=0}
$$

### Logaritmo de la base

$$
\\boxed{\\log_b(b)=1}
$$

### Producto

$$
\\boxed{
\\log_b(xy)=\\log_b(x)+\\log_b(y)
}
$$

### Cociente

$$
\\boxed{
\\log_b\\left(\\frac{x}{y}\\right)
=
\\log_b(x)-\\log_b(y)
}
$$

### Potencia

$$
\\boxed{
\\log_b(x^n)=n\\log_b(x)
}
$$

### Cambio de base

$$
\\boxed{
\\log_b(x)
=
\\frac{\\log_a(x)}{\\log_a(b)}
}
$$

### Relación con las potencias

$$
\\boxed{
\\log_b(x)=y
\\iff
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
\\boxed{
\\log_b(x)=y
\\iff
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
\\log_2(32)=5
$$

Y si sabemos que:

$$
\\log_3(81)=4
$$

entonces sabemos que:

$$
3^4=81
$$

Por eso, para aprender logaritmos correctamente, es fundamental dominar primero las potencias y sus propiedades.
`,i=`# Logaritmes

Els **logaritmes** són una eina matemàtica que ens permet descobrir un exponent desconegut.

Per entendre'ls bé, primer hem de recordar què significa una potència.

## 1. Recordatori: les potències

Una potència té la forma

$$
a^n
$$

on:

- $a$ és la **base**.
- $n$ és l'**exponent**.
- El resultat és el nombre que obtenim en multiplicar la base per ella mateixa $n$ vegades.

Per exemple:

$$
2^3=2\\cdot2\\cdot2=8
$$

Per tant:

$$
2^3=8
$$

Aquí coneixem la base $2$ i l'exponent $3$, i obtenim el resultat $8$.

Però què passa si coneixem la base i el resultat, però no coneixem l'exponent?

Per exemple:

$$
2^x=8
$$

Sabem que:

$$
2^3=8
$$

per tant:

$$
x=3
$$

Els logaritmes ens permeten expressar precisament aquesta pregunta.

---

## 2. Què és un logaritme?

Un logaritme respon a la pregunta:

> **A quin exponent hem d'elevar una base per obtenir un nombre determinat?**

L'expressió

$$
\\log_b(x)=y
$$

significa exactament el mateix que:

$$
b^y=x
$$

És a dir:

$$
\\boxed{\\log_b(x)=y\\iff b^y=x}
$$

Per exemple:

$$
\\log_2(8)=3
$$

perquè:

$$
2^3=8
$$

El logaritme ens està preguntant:

> A quin exponent hem d'elevar $2$ per obtenir $8$?

La resposta és $3$.

---

## 3. Les tres parts d'un logaritme

En l'expressió

$$
\\log_b(x)=y
$$

tenim tres elements:

- $b$: **base**.
- $x$: **argument** del logaritme.
- $y$: **resultat del logaritme**.

Per exemple:

$$
\\log_3(81)=4
$$

En aquest cas:

- la base és $3$;
- l'argument és $81$;
- el resultat és $4$.

Per què?

Perquè:

$$
3^4=81
$$

---

## 4. La relació entre potències i logaritmes

Els logaritmes i les potències estan directament relacionats.

Podem passar d'una forma a l'altra:

$$
b^y=x
$$

equival a:

$$
\\log_b(x)=y
$$

Per exemple:

$$
5^3=125
$$

es pot escriure com:

$$
\\log_5(125)=3
$$

Un altre exemple:

$$
10^4=10000
$$

equival a:

$$
\\log_{10}(10000)=4
$$

I:

$$
7^2=49
$$

equival a:

$$
\\log_7(49)=2
$$

### Regla fonamental

Quan veiem:

$$
\\log_b(x)=y
$$

ho podem transformar immediatament en:

$$
b^y=x
$$

Aquesta equivalència és la base de tot l'estudi dels logaritmes.

---

## 5. Per què necessitem els logaritmes?

Suposem que volem resoldre:

$$
2^x=32
$$

Podem reconèixer que:

$$
2^5=32
$$

i concloure que:

$$
x=5
$$

Però ara imaginem:

$$
2^x=17
$$

No existeix un exponent enter senzill que puguem reconèixer mentalment.

Podem expressar la solució mitjançant un logaritme:

$$
x=\\log_2(17)
$$

El logaritme ens proporciona una manera matemàtica de representar aquest exponent.

Per tant, si tenim:

$$
a^x=b
$$

podem escriure:

$$
\\boxed{x=\\log_a(b)}
$$

---

## 6. Condicions perquè existeixi un logaritme

No podem utilitzar qualsevol nombre com a base ni qualsevol nombre com a argument.

Perquè

$$
\\log_b(x)
$$

estigui definit en els nombres reals, s'han de complir dues condicions:

$$
b>0
$$

i

$$
b\\neq1
$$

A més, l'argument ha de ser positiu:

$$
x>0
$$

Per tant:

$$
\\boxed{b>0,\\quad b\\neq1,\\quad x>0}
$$

### Per què l'argument ha de ser positiu?

Considerem una potència amb base positiva:

$$
2^x
$$

El resultat sempre és positiu, independentment del valor de $x$.

Per exemple:

$$
2^3=8
$$

$$
2^0=1
$$

$$
2^{-3}=\\frac{1}{8}
$$

Tots els resultats són positius.

Per això no existeix cap nombre real $x$ que satisfaci:

$$
2^x=-4
$$

En conseqüència:

$$
\\log_2(-4)
$$

no està definit en els nombres reals.

Tampoc podem calcular:

$$
\\log_2(0)
$$

perquè cap potència de $2$ és igual a $0$.

Per tant:

$$
\\boxed{\\log_b(x)\\text{ requereix }x>0}
$$

---

## 7. Per què la base no pot ser 1?

Si la base fos $1$, tindríem:

$$
1^x=1
$$

per a qualsevol valor de $x$.

Per exemple:

$$
1^2=1
$$

$$
1^5=1
$$

$$
1^{100}=1
$$

Per tant, l'expressió

$$
\\log_1(1)
$$

no tindria un únic resultat.

Per això la base ha de complir:

$$
\\boxed{b\\neq1}
$$

---

## 8. Logaritmes amb resultats senzills

Molts logaritmes es poden calcular directament utilitzant potències conegudes.

### Exemple 1

$$
\\log_2(16)
$$

Preguntem:

> A quin exponent hem d'elevar $2$ per obtenir $16$?

Com que:

$$
2^4=16
$$

aleshores:

$$
\\boxed{\\log_2(16)=4}
$$

### Exemple 2

$$
\\log_3(27)
$$

Com que:

$$
3^3=27
$$

tenim:

$$
\\boxed{\\log_3(27)=3}
$$

### Exemple 3

$$
\\log_5(625)
$$

Com que:

$$
5^4=625
$$

aleshores:

$$
\\boxed{\\log_5(625)=4}
$$

---

## 9. Logaritmes de 1

Una propietat important és:

$$
\\boxed{\\log_b(1)=0}
$$

sempre que la base sigui vàlida.

Per què?

Perquè:

$$
b^0=1
$$

Per exemple:

$$
\\log_2(1)=0
$$

$$
\\log_{10}(1)=0
$$

$$
\\log_7(1)=0
$$

---

## 10. Logaritmes de la pròpia base

Una altra propietat fonamental és:

$$
\\boxed{\\log_b(b)=1}
$$

perquè:

$$
b^1=b
$$

Per exemple:

$$
\\log_2(2)=1
$$

$$
\\log_{10}(10)=1
$$

$$
\\log_5(5)=1
$$

---

## 11. Logaritmes de potències de la base

Si tenim:

$$
\\log_b(b^n)
$$

el resultat és directament $n$:

$$
\\boxed{\\log_b(b^n)=n}
$$

Per exemple:

$$
\\log_2(2^7)=7
$$

perquè:

$$
2^7=128
$$

i, per tant:

$$
\\log_2(128)=7
$$

---

# 12. Logaritme decimal

El logaritme de base $10$ rep el nom de **logaritme decimal**.

Normalment s'escriu:

$$
\\log(x)
$$

sense indicar la base.

Quan escrivim:

$$
\\log(1000)
$$

normalment estem utilitzant base $10$:

$$
\\log_{10}(1000)
$$

Com que:

$$
10^3=1000
$$

tenim:

$$
\\boxed{\\log(1000)=3}
$$

Altres exemples:

$$
\\log(10)=1
$$

$$
\\log(100)=2
$$

$$
\\log(10000)=4
$$

---

# 13. Logaritme natural

Existeix una base especialment important en matemàtiques:

$$
e
$$

on aproximadament:

$$
e\\approx2.71828
$$

El logaritme de base $e$ rep el nom de **logaritme natural** i es representa mitjançant:

$$
\\ln(x)
$$

Per definició:

$$
\\ln(x)=\\log_e(x)
$$

Per exemple:

$$
\\ln(e)=1
$$

perquè:

$$
e^1=e
$$

També:

$$
\\ln(e^3)=3
$$

perquè:

$$
e^3=e^3
$$

El logaritme natural apareix constantment en càlcul, creixement i decreixement exponencial, equacions diferencials, probabilitat i moltes altres àrees de les matemàtiques.

---

# 14. Propietat del producte

Una de les propietats més importants dels logaritmes és:

$$
\\boxed{\\log_b(xy)=\\log_b(x)+\\log_b(y)}
$$

És a dir, el logaritme d'un producte es pot convertir en una suma.

### Exemple

Considerem:

$$
\\log_2(8\\cdot4)
$$

Podem escriure:

$$
\\log_2(8)+\\log_2(4)
$$

Com que:

$$
\\log_2(8)=3
$$

i:

$$
\\log_2(4)=2
$$

obtenim:

$$
3+2=5
$$

Per tant:

$$
\\log_2(32)=5
$$

---

# 15. Propietat del quocient

Per a un quocient:

$$
\\boxed{
\\log_b\\left(\\frac{x}{y}\\right)
=
\\log_b(x)-\\log_b(y)
}
$$

### Exemple

Considerem:

$$
\\log_2\\left(\\frac{32}{4}\\right)
$$

Podem escriure:

$$
\\log_2(32)-\\log_2(4)
$$

Per tant:

$$
5-2=3
$$

i:

$$
\\log_2(8)=3
$$

---

# 16. Propietat de les potències

Una altra propietat fonamental és:

$$
\\boxed{
\\log_b(x^n)=n\\log_b(x)
}
$$

L'exponent passa davant del logaritme com un multiplicador.

### Exemple

$$
\\log_2(8^2)
$$

podem escriure:

$$
2\\log_2(8)
$$

Com que:

$$
\\log_2(8)=3
$$

obtenim:

$$
2\\cdot3=6
$$

Per tant:

$$
\\log_2(64)=6
$$

---

# 17. Arrels i logaritmes

Una arrel es pot escriure com una potència:

$$
\\sqrt[n]{x}=x^{1/n}
$$

Per tant:

$$
\\log_b(\\sqrt[n]{x})
=
\\log_b(x^{1/n})
$$

Aplicant la propietat de les potències:

$$
\\boxed{
\\log_b(\\sqrt[n]{x})
=
\\frac{1}{n}\\log_b(x)
}
$$

### Exemple

$$
\\log_2(\\sqrt{16})
$$

Com que:

$$
\\sqrt{16}=16^{1/2}
$$

tenim:

$$
\\log_2(16^{1/2})
=
\\frac12\\log_2(16)
$$

Com que:

$$
\\log_2(16)=4
$$

obtenim:

$$
\\frac12\\cdot4=2
$$

Per tant:

$$
\\boxed{\\log_2(4)=2}
$$

---

# 18. Desenvolupar expressions logarítmiques

Les propietats anteriors permeten transformar un únic logaritme en diversos.

Per exemple:

$$
\\log_b(xyz)
$$

es pot desenvolupar com:

$$
\\boxed{
\\log_b(x)+\\log_b(y)+\\log_b(z)
}
$$

I:

$$
\\log_b\\left(\\frac{x^2y}{z}\\right)
$$

es pot desenvolupar com:

$$
\\log_b(x^2)+\\log_b(y)-\\log_b(z)
$$

Aplicant la propietat de les potències:

$$
\\boxed{
2\\log_b(x)+\\log_b(y)-\\log_b(z)
}
$$

---

# 19. Condensar expressions logarítmiques

També podem fer el procés contrari.

Per exemple:

$$
\\log_b(x)+\\log_b(y)
$$

es pot escriure com:

$$
\\boxed{
\\log_b(xy)
}
$$

I:

$$
\\log_b(x)-\\log_b(y)
$$

es pot escriure com:

$$
\\boxed{
\\log_b\\left(\\frac{x}{y}\\right)
}
$$

També:

$$
3\\log_b(x)
$$

es pot escriure com:

$$
\\boxed{
\\log_b(x^3)
}
$$

Aquestes transformacions són especialment útils per resoldre equacions logarítmiques.

---

# 20. Canvi de base

De vegades necessitem calcular un logaritme la base del qual no està disponible directament en una calculadora.

Podem utilitzar la fórmula de **canvi de base**:

$$
\\boxed{
\\log_b(x)
=
\\frac{\\log_a(x)}{\\log_a(b)}
}
$$

La base $a$ pot ser qualsevol base vàlida.

En particular, podem utilitzar $10$:

$$
\\boxed{
\\log_b(x)
=
\\frac{\\log(x)}{\\log(b)}
}
$$

o $e$:

$$
\\boxed{
\\log_b(x)
=
\\frac{\\ln(x)}{\\ln(b)}
}
$$

### Exemple

Volem calcular:

$$
\\log_2(10)
$$

Utilitzem el canvi de base:

$$
\\log_2(10)
=
\\frac{\\log(10)}{\\log(2)}
$$

Com que:

$$
\\log(10)=1
$$

obtenim:

$$
\\log_2(10)
=
\\frac{1}{\\log(2)}
$$

Aproximadament:

$$
\\log_2(10)\\approx3.3219
$$

Això significa que:

$$
2^{3.3219}\\approx10
$$

---

# 21. Resoldre equacions logarítmiques senzilles

Una de les aplicacions principals dels logaritmes és resoldre equacions on la incògnita apareix com a exponent.

Considerem:

$$
2^x=16
$$

Podem transformar l'equació utilitzant un logaritme:

$$
\\log_2(16)=x
$$

Com que:

$$
\\log_2(16)=4
$$

obtenim:

$$
\\boxed{x=4}
$$

---

# 22. Resoldre una equació exponencial amb logaritmes

Considerem:

$$
3^x=20
$$

No existeix un exponent enter senzill que produeixi $20$.

Apliquem logaritmes:

$$
\\log(3^x)=\\log(20)
$$

Utilitzant la propietat de les potències:

$$
x\\log(3)=\\log(20)
$$

Aïllem $x$:

$$
\\boxed{
x=\\frac{\\log(20)}{\\log(3)}
}
$$

Aproximadament:

$$
x\\approx2.7268
$$

Per tant:

$$
3^{2.7268}\\approx20
$$

---

# 23. Resoldre equacions logarítmiques mitjançant la definició

Suposem:

$$
\\log_2(x)=5
$$

Utilitzem la definició de logaritme:

$$
2^5=x
$$

Per tant:

$$
\\boxed{x=32}
$$

Un altre exemple:

$$
\\log_3(x)=4
$$

equival a:

$$
3^4=x
$$

i, per tant:

$$
\\boxed{x=81}
$$

---

# 24. Quan l'argument conté una expressió

Considerem:

$$
\\log_2(x-1)=3
$$

Utilitzem la definició:

$$
2^3=x-1
$$

Aleshores:

$$
8=x-1
$$

i:

$$
\\boxed{x=9}
$$

Hem de comprovar, a més, que l'argument sigui positiu:

$$
x-1>0
$$

Per a $x=9$:

$$
9-1=8>0
$$

Per tant, la solució és vàlida.

---

# 25. Equacions amb dos logaritmes

Considerem:

$$
\\log_2(x)+\\log_2(4)=5
$$

Utilitzem la propietat del producte:

$$
\\log_2(4x)=5
$$

Apliquem la definició:

$$
2^5=4x
$$

Aleshores:

$$
32=4x
$$

i:

$$
\\boxed{x=8}
$$

Comprovem el domini:

$$
x>0
$$

Com que $8>0$, la solució és vàlida.

---

# 26. Equacions amb una resta de logaritmes

Considerem:

$$
\\log_3(x)-\\log_3(2)=2
$$

Apliquem la propietat del quocient:

$$
\\log_3\\left(\\frac{x}{2}\\right)=2
$$

Passem a forma exponencial:

$$
3^2=\\frac{x}{2}
$$

Aleshores:

$$
9=\\frac{x}{2}
$$

i:

$$
\\boxed{x=18}
$$

---

# 27. La importància del domini

En una equació logarítmica no n'hi ha prou amb trobar un valor de $x$.

També hem de comprovar que tots els arguments dels logaritmes siguin positius.

Per exemple:

$$
\\log(x-3)
$$

requereix:

$$
x-3>0
$$

per tant:

$$
\\boxed{x>3}
$$

Si durant la resolució obtenim:

$$
x=2
$$

aquesta solució no és vàlida perquè:

$$
2-3=-1
$$

i no existeix:

$$
\\log(-1)
$$

en els nombres reals.

---

# 28. Errors freqüents

Hi ha algunes regles que **no** són certes.

### Error 1: separar una suma dins del logaritme

No podem escriure:

$$
\\log(x+y)=\\log(x)+\\log(y)
$$

Això és fals.

La propietat correcta és:

$$
\\log(xy)=\\log(x)+\\log(y)
$$

És a dir, la propietat del producte s'aplica a una multiplicació, no a una suma.

---

### Error 2: separar una resta

Tampoc podem escriure:

$$
\\log(x-y)=\\log(x)-\\log(y)
$$

Això és fals.

La propietat correcta és:

$$
\\log\\left(\\frac{x}{y}\\right)
=
\\log(x)-\\log(y)
$$

---

### Error 3: oblidar el domini

No podem acceptar automàticament qualsevol solució obtinguda.

Sempre hem de comprovar:

$$
\\boxed{\\text{argument}>0}
$$

---

### Error 4: confondre la base amb l'argument

En:

$$
\\log_2(8)
$$

la base és $2$ i l'argument és $8$.

No els hem d'intercanviar.

---

# 29. Resum de les propietats fonamentals

Per a una base vàlida $b$:

### Logaritme de 1

$$
\\boxed{\\log_b(1)=0}
$$

### Logaritme de la base

$$
\\boxed{\\log_b(b)=1}
$$

### Producte

$$
\\boxed{
\\log_b(xy)=\\log_b(x)+\\log_b(y)
}
$$

### Quocient

$$
\\boxed{
\\log_b\\left(\\frac{x}{y}\\right)
=
\\log_b(x)-\\log_b(y)
}
$$

### Potència

$$
\\boxed{
\\log_b(x^n)=n\\log_b(x)
}
$$

### Canvi de base

$$
\\boxed{
\\log_b(x)
=
\\frac{\\log_a(x)}{\\log_a(b)}
}
$$

### Relació amb les potències

$$
\\boxed{
\\log_b(x)=y
\\iff
b^y=x
}
$$

---

# 30. Procediment per treballar amb logaritmes

Quan aparegui una expressió logarítmica, podem seguir aquests passos:

1. **Identificar la base i l'argument.**
2. **Comprovar el domini.**
3. **Buscar potències conegudes** per calcular directament el logaritme.
4. **Aplicar les propietats** de producte, quocient i potència quan sigui necessari.
5. **Utilitzar el canvi de base** si necessitem calcular un logaritme amb una base determinada.
6. **Transformar entre forma logarítmica i exponencial** quan sigui útil.
7. **Comprovar les solucions** en l'expressió original quan estiguem resolent una equació.

---

# 31. Idea fonamental

La idea més important que hem de recordar és:

$$
\\boxed{
\\log_b(x)=y
\\iff
b^y=x
}
$$

Un logaritme no és una operació completament independent de les potències.

És una altra manera d'expressar la mateixa relació.

Si sabem que:

$$
2^5=32
$$

aleshores automàticament sabem que:

$$
\\log_2(32)=5
$$

I si sabem que:

$$
\\log_3(81)=4
$$

aleshores sabem que:

$$
3^4=81
$$

Per això, per aprendre logaritmes correctament, és fonamental dominar primer les potències i les seves propietats.
`,a=`# Logarithms

**Logarithms** are a mathematical tool that allows us to find an unknown exponent.

To understand them properly, we first need to remember what a power means.

## 1. Review: powers

A power has the form

$$
a^n
$$

where:

- $a$ is the **base**.
- $n$ is the **exponent**.
- The result is the number obtained by multiplying the base by itself $n$ times.

For example:

$$
2^3=2\\cdot2\\cdot2=8
$$

Therefore:

$$
2^3=8
$$

Here we know the base $2$ and the exponent $3$, and we obtain the result $8$.

But what happens if we know the base and the result, but we do not know the exponent?

For example:

$$
2^x=8
$$

We know that:

$$
2^3=8
$$

so:

$$
x=3
$$

Logarithms allow us to express precisely this question.

---

## 2. What is a logarithm?

A logarithm answers the question:

> **To what exponent must we raise a base to obtain a given number?**

The expression

$$
\\log_b(x)=y
$$

means exactly the same thing as:

$$
b^y=x
$$

That is:

$$
\\boxed{\\log_b(x)=y\\iff b^y=x}
$$

For example:

$$
\\log_2(8)=3
$$

because:

$$
2^3=8
$$

The logarithm is asking:

> To what exponent must we raise $2$ to obtain $8$?

The answer is $3$.

---

## 3. The three parts of a logarithm

In the expression

$$
\\log_b(x)=y
$$

we have three elements:

- $b$: the **base**.
- $x$: the **argument** of the logarithm.
- $y$: the **value of the logarithm**.

For example:

$$
\\log_3(81)=4
$$

In this case:

- the base is $3$;
- the argument is $81$;
- the result is $4$.

Why?

Because:

$$
3^4=81
$$

---

## 4. The relationship between powers and logarithms

Logarithms and powers are directly related.

We can move from one form to the other:

$$
b^y=x
$$

is equivalent to:

$$
\\log_b(x)=y
$$

For example:

$$
5^3=125
$$

can be written as:

$$
\\log_5(125)=3
$$

Another example:

$$
10^4=10000
$$

is equivalent to:

$$
\\log_{10}(10000)=4
$$

And:

$$
7^2=49
$$

is equivalent to:

$$
\\log_7(49)=2
$$

### Fundamental rule

Whenever we see:

$$
\\log_b(x)=y
$$

we can immediately transform it into:

$$
b^y=x
$$

This equivalence is the foundation of the study of logarithms.

---

## 5. Why do we need logarithms?

Suppose we want to solve:

$$
2^x=32
$$

We can recognize that:

$$
2^5=32
$$

and conclude that:

$$
x=5
$$

But now imagine:

$$
2^x=17
$$

There is no simple integer exponent that we can recognize mentally.

We can express the solution using a logarithm:

$$
x=\\log_2(17)
$$

The logarithm gives us a mathematical way to represent that exponent.

Therefore, if we have:

$$
a^x=b
$$

we can write:

$$
\\boxed{x=\\log_a(b)}
$$

---

## 6. Conditions for a logarithm to exist

We cannot use any number as a base or any number as an argument.

For

$$
\\log_b(x)
$$

to be defined over the real numbers, two conditions must hold:

$$
b>0
$$

and

$$
b\\neq1
$$

In addition, the argument must be positive:

$$
x>0
$$

Therefore:

$$
\\boxed{b>0,\\quad b\\neq1,\\quad x>0}
$$

### Why must the argument be positive?

Consider a power with a positive base:

$$
2^x
$$

The result is always positive, regardless of the value of $x$.

For example:

$$
2^3=8
$$

$$
2^0=1
$$

$$
2^{-3}=\\frac{1}{8}
$$

All of these results are positive.

Therefore, there is no real number $x$ satisfying:

$$
2^x=-4
$$

Consequently:

$$
\\log_2(-4)
$$

is not defined over the real numbers.

We also cannot calculate:

$$
\\log_2(0)
$$

because no power of $2$ is equal to $0$.

Therefore:

$$
\\boxed{\\log_b(x)\\text{ requires }x>0}
$$

---

## 7. Why can the base not be 1?

If the base were $1$, we would have:

$$
1^x=1
$$

for every value of $x$.

For example:

$$
1^2=1
$$

$$
1^5=1
$$

$$
1^{100}=1
$$

Therefore, the expression

$$
\\log_1(1)
$$

would not have a unique result.

That is why the base must satisfy:

$$
\\boxed{b\\neq1}
$$

---

## 8. Logarithms with simple results

Many logarithms can be calculated directly using familiar powers.

### Example 1

$$
\\log_2(16)
$$

We ask:

> To what exponent must we raise $2$ to obtain $16$?

Since:

$$
2^4=16
$$

we have:

$$
\\boxed{\\log_2(16)=4}
$$

### Example 2

$$
\\log_3(27)
$$

Since:

$$
3^3=27
$$

we have:

$$
\\boxed{\\log_3(27)=3}
$$

### Example 3

$$
\\log_5(625)
$$

Since:

$$
5^4=625
$$

we have:

$$
\\boxed{\\log_5(625)=4}
$$

---

## 9. Logarithms of 1

An important property is:

$$
\\boxed{\\log_b(1)=0}
$$

provided that the base is valid.

Why?

Because:

$$
b^0=1
$$

For example:

$$
\\log_2(1)=0
$$

$$
\\log_{10}(1)=0
$$

$$
\\log_7(1)=0
$$

---

## 10. Logarithms of the base itself

Another fundamental property is:

$$
\\boxed{\\log_b(b)=1}
$$

because:

$$
b^1=b
$$

For example:

$$
\\log_2(2)=1
$$

$$
\\log_{10}(10)=1
$$

$$
\\log_5(5)=1
$$

---

## 11. Logarithms of powers of the base

If we have:

$$
\\log_b(b^n)
$$

the result is directly $n$:

$$
\\boxed{\\log_b(b^n)=n}
$$

For example:

$$
\\log_2(2^7)=7
$$

because:

$$
2^7=128
$$

and therefore:

$$
\\log_2(128)=7
$$

---

# 12. Common logarithm

The logarithm with base $10$ is called the **common logarithm** or **decimal logarithm**.

It is normally written as:

$$
\\log(x)
$$

without explicitly writing the base.

When we write:

$$
\\log(1000)
$$

we normally mean base $10$:

$$
\\log_{10}(1000)
$$

Since:

$$
10^3=1000
$$

we have:

$$
\\boxed{\\log(1000)=3}
$$

Other examples:

$$
\\log(10)=1
$$

$$
\\log(100)=2
$$

$$
\\log(10000)=4
$$

---

# 13. Natural logarithm

There is a particularly important mathematical constant:

$$
e
$$

where approximately:

$$
e\\approx2.71828
$$

The logarithm with base $e$ is called the **natural logarithm** and is represented by:

$$
\\ln(x)
$$

By definition:

$$
\\ln(x)=\\log_e(x)
$$

For example:

$$
\\ln(e)=1
$$

because:

$$
e^1=e
$$

Also:

$$
\\ln(e^3)=3
$$

because:

$$
e^3=e^3
$$

The natural logarithm appears throughout calculus, exponential growth and decay, differential equations, probability, and many other areas of mathematics.

---

# 14. Product property

One of the most important logarithm properties is:

$$
\\boxed{\\log_b(xy)=\\log_b(x)+\\log_b(y)}
$$

In other words, the logarithm of a product can be converted into a sum.

### Example

Consider:

$$
\\log_2(8\\cdot4)
$$

We can write:

$$
\\log_2(8)+\\log_2(4)
$$

Since:

$$
\\log_2(8)=3
$$

and:

$$
\\log_2(4)=2
$$

we obtain:

$$
3+2=5
$$

Therefore:

$$
\\log_2(32)=5
$$

---

# 15. Quotient property

For a quotient:

$$
\\boxed{
\\log_b\\left(\\frac{x}{y}\\right)
=
\\log_b(x)-\\log_b(y)
}
$$

### Example

Consider:

$$
\\log_2\\left(\\frac{32}{4}\\right)
$$

We can write:

$$
\\log_2(32)-\\log_2(4)
$$

Therefore:

$$
5-2=3
$$

and:

$$
\\log_2(8)=3
$$

---

# 16. Power property

Another fundamental property is:

$$
\\boxed{
\\log_b(x^n)=n\\log_b(x)
}
$$

The exponent becomes a multiplier in front of the logarithm.

### Example

$$
\\log_2(8^2)
$$

can be written as:

$$
2\\log_2(8)
$$

Since:

$$
\\log_2(8)=3
$$

we obtain:

$$
2\\cdot3=6
$$

Therefore:

$$
\\log_2(64)=6
$$

---

# 17. Roots and logarithms

A root can be written as a power:

$$
\\sqrt[n]{x}=x^{1/n}
$$

Therefore:

$$
\\log_b(\\sqrt[n]{x})
=
\\log_b(x^{1/n})
$$

Using the power property:

$$
\\boxed{
\\log_b(\\sqrt[n]{x})
=
\\frac{1}{n}\\log_b(x)
}
$$

### Example

$$
\\log_2(\\sqrt{16})
$$

Since:

$$
\\sqrt{16}=16^{1/2}
$$

we have:

$$
\\log_2(16^{1/2})
=
\\frac12\\log_2(16)
$$

Since:

$$
\\log_2(16)=4
$$

we obtain:

$$
\\frac12\\cdot4=2
$$

Therefore:

$$
\\boxed{\\log_2(4)=2}
$$

---

# 18. Expanding logarithmic expressions

The properties above allow us to transform one logarithm into several.

For example:

$$
\\log_b(xyz)
$$

can be expanded as:

$$
\\boxed{
\\log_b(x)+\\log_b(y)+\\log_b(z)
}
$$

And:

$$
\\log_b\\left(\\frac{x^2y}{z}\\right)
$$

can be expanded as:

$$
\\log_b(x^2)+\\log_b(y)-\\log_b(z)
$$

Using the power property:

$$
\\boxed{
2\\log_b(x)+\\log_b(y)-\\log_b(z)
}
$$

---

# 19. Condensing logarithmic expressions

We can also perform the reverse process.

For example:

$$
\\log_b(x)+\\log_b(y)
$$

can be written as:

$$
\\boxed{
\\log_b(xy)
}
$$

And:

$$
\\log_b(x)-\\log_b(y)
$$

can be written as:

$$
\\boxed{
\\log_b\\left(\\frac{x}{y}\\right)
}
$$

Also:

$$
3\\log_b(x)
$$

can be written as:

$$
\\boxed{
\\log_b(x^3)
}
$$

These transformations are particularly useful when solving logarithmic equations.

---

# 20. Change of base

Sometimes we need to calculate a logarithm whose base is not directly available on a calculator.

We can use the **change-of-base formula**:

$$
\\boxed{
\\log_b(x)
=
\\frac{\\log_a(x)}{\\log_a(b)}
}
$$

The base $a$ can be any valid base.

In particular, we can use $10$:

$$
\\boxed{
\\log_b(x)
=
\\frac{\\log(x)}{\\log(b)}
}
$$

or $e$:

$$
\\boxed{
\\log_b(x)
=
\\frac{\\ln(x)}{\\ln(b)}
}
$$

### Example

Suppose we want to calculate:

$$
\\log_2(10)
$$

Using change of base:

$$
\\log_2(10)
=
\\frac{\\log(10)}{\\log(2)}
$$

Since:

$$
\\log(10)=1
$$

we obtain:

$$
\\log_2(10)
=
\\frac{1}{\\log(2)}
$$

Approximately:

$$
\\log_2(10)\\approx3.3219
$$

This means that:

$$
2^{3.3219}\\approx10
$$

---

# 21. Solving simple logarithmic equations

One of the main applications of logarithms is solving equations where the unknown appears as an exponent.

Consider:

$$
2^x=16
$$

We can transform the equation using a logarithm:

$$
\\log_2(16)=x
$$

Since:

$$
\\log_2(16)=4
$$

we obtain:

$$
\\boxed{x=4}
$$

---

# 22. Solving an exponential equation using logarithms

Consider:

$$
3^x=20
$$

There is no simple integer exponent that produces $20$.

Take logarithms:

$$
\\log(3^x)=\\log(20)
$$

Using the power property:

$$
x\\log(3)=\\log(20)
$$

Solve for $x$:

$$
\\boxed{
x=\\frac{\\log(20)}{\\log(3)}
}
$$

Approximately:

$$
x\\approx2.7268
$$

Therefore:

$$
3^{2.7268}\\approx20
$$

---

# 23. Solving logarithmic equations using the definition

Suppose:

$$
\\log_2(x)=5
$$

Using the definition of a logarithm:

$$
2^5=x
$$

Therefore:

$$
\\boxed{x=32}
$$

Another example:

$$
\\log_3(x)=4
$$

is equivalent to:

$$
3^4=x
$$

so:

$$
\\boxed{x=81}
$$

---

# 24. When the argument contains an expression

Consider:

$$
\\log_2(x-1)=3
$$

Using the definition:

$$
2^3=x-1
$$

Therefore:

$$
8=x-1
$$

and:

$$
\\boxed{x=9}
$$

We must also check that the argument is positive:

$$
x-1>0
$$

For $x=9$:

$$
9-1=8>0
$$

Therefore, the solution is valid.

---

# 25. Equations with two logarithms

Consider:

$$
\\log_2(x)+\\log_2(4)=5
$$

Using the product property:

$$
\\log_2(4x)=5
$$

Apply the definition:

$$
2^5=4x
$$

Therefore:

$$
32=4x
$$

and:

$$
\\boxed{x=8}
$$

Check the domain:

$$
x>0
$$

Since $8>0$, the solution is valid.

---

# 26. Equations involving a difference of logarithms

Consider:

$$
\\log_3(x)-\\log_3(2)=2
$$

Using the quotient property:

$$
\\log_3\\left(\\frac{x}{2}\\right)=2
$$

Convert to exponential form:

$$
3^2=\\frac{x}{2}
$$

Therefore:

$$
9=\\frac{x}{2}
$$

and:

$$
\\boxed{x=18}
$$

---

# 27. The importance of the domain

When solving a logarithmic equation, finding a value of $x$ is not enough.

We must also check that every logarithm argument is positive.

For example:

$$
\\log(x-3)
$$

requires:

$$
x-3>0
$$

therefore:

$$
\\boxed{x>3}
$$

If we obtain:

$$
x=2
$$

during the solution process, that value is not valid because:

$$
2-3=-1
$$

and:

$$
\\log(-1)
$$

is not defined over the real numbers.

---

# 28. Common mistakes

Some apparently plausible rules are **not** true.

### Mistake 1: splitting a sum inside a logarithm

We cannot write:

$$
\\log(x+y)=\\log(x)+\\log(y)
$$

This is false.

The correct property is:

$$
\\log(xy)=\\log(x)+\\log(y)
$$

The product property applies to multiplication, not addition.

---

### Mistake 2: splitting a difference

We also cannot write:

$$
\\log(x-y)=\\log(x)-\\log(y)
$$

This is false.

The correct property is:

$$
\\log\\left(\\frac{x}{y}\\right)
=
\\log(x)-\\log(y)
$$

---

### Mistake 3: forgetting the domain

We cannot automatically accept every solution obtained.

We must always check:

$$
\\boxed{\\text{argument}>0}
$$

---

### Mistake 4: confusing the base and the argument

In:

$$
\\log_2(8)
$$

the base is $2$ and the argument is $8$.

They must not be switched.

---

# 29. Summary of the fundamental properties

For a valid base $b$:

### Logarithm of 1

$$
\\boxed{\\log_b(1)=0}
$$

### Logarithm of the base

$$
\\boxed{\\log_b(b)=1}
$$

### Product

$$
\\boxed{
\\log_b(xy)=\\log_b(x)+\\log_b(y)
}
$$

### Quotient

$$
\\boxed{
\\log_b\\left(\\frac{x}{y}\\right)
=
\\log_b(x)-\\log_b(y)
}
$$

### Power

$$
\\boxed{
\\log_b(x^n)=n\\log_b(x)
}
$$

### Change of base

$$
\\boxed{
\\log_b(x)
=
\\frac{\\log_a(x)}{\\log_a(b)}
}
$$

### Relationship with powers

$$
\\boxed{
\\log_b(x)=y
\\iff
b^y=x
}
$$

---

# 30. A procedure for working with logarithms

When we encounter a logarithmic expression, we can follow these steps:

1. **Identify the base and the argument.**
2. **Check the domain.**
3. **Look for familiar powers** to calculate the logarithm directly.
4. **Apply the product, quotient, and power properties** when necessary.
5. **Use change of base** when we need to calculate a logarithm with a particular base.
6. **Convert between logarithmic and exponential forms** when useful.
7. **Check solutions** in the original expression when solving an equation.

---

# 31. The fundamental idea

The most important idea to remember is:

$$
\\boxed{
\\log_b(x)=y
\\iff
b^y=x
}
$$

A logarithm is not a completely separate operation from powers.

It is another way of expressing the same relationship.

If we know that:

$$
2^5=32
$$

then we automatically know that:

$$
\\log_2(32)=5
$$

And if we know that:

$$
\\log_3(81)=4
$$

then we know that:

$$
3^4=81
$$

Therefore, to learn logarithms properly, it is essential to first understand powers and their properties.
`;function o(){let{locale:o}=t();return e(n,{id:`logarithms`,content:{es:r,ca:i,en:a}[o]})}export{o as default};