import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-C1BT9wAk.js";import{t as n}from"./TopicPage-DZNFNl0A.js";var r=`# Teorema de Rouché-Frobenius

El **teorema de Rouché-Frobenius** permite determinar si un sistema de ecuaciones lineales tiene:

- ninguna solución,
- una única solución, o
- infinitas soluciones.

Se basa en comparar el **rango de la matriz de coeficientes** con el **rango de la matriz ampliada**.

---

## 1. Sistemas de ecuaciones lineales

Consideremos un sistema de $m$ ecuaciones lineales con $n$ incógnitas:

$$
\\begin{cases}
a_{11}x_1+a_{12}x_2+\\cdots+a_{1n}x_n=b_1\\\\
a_{21}x_1+a_{22}x_2+\\cdots+a_{2n}x_n=b_2\\\\
\\vdots\\\\
a_{m1}x_1+a_{m2}x_2+\\cdots+a_{mn}x_n=b_m
\\end{cases}
$$

Puede escribirse en forma matricial como:

$$
\\boxed{A\\mathbf{x}=\\mathbf{b}}
$$

donde:

- $A$ es la **matriz de coeficientes**,
- $\\mathbf{x}$ es el vector de incógnitas,
- $\\mathbf{b}$ es el vector de términos independientes.

Por ejemplo:

$$
\\begin{cases}
x+y=3\\\\
2x-y=0
\\end{cases}
$$

puede escribirse como:

$$
\\begin{pmatrix}
1&1\\\\
2&-1
\\end{pmatrix}
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
3\\\\
0
\\end{pmatrix}
$$

---

## 2. Matriz de coeficientes y matriz ampliada

La **matriz de coeficientes** es:

$$
A=
\\begin{pmatrix}
a_{11}&a_{12}&\\cdots&a_{1n}\\\\
a_{21}&a_{22}&\\cdots&a_{2n}\\\\
\\vdots&\\vdots&\\ddots&\\vdots\\\\
a_{m1}&a_{m2}&\\cdots&a_{mn}
\\end{pmatrix}
$$

La **matriz ampliada** se obtiene añadiendo los términos independientes:

$$
[A\\mid\\mathbf{b}]
$$

Por ejemplo:

$$
\\begin{cases}
x+y=3\\\\
2x-y=0
\\end{cases}
$$

tiene:

$$
A=
\\begin{pmatrix}
1&1\\\\
2&-1
\\end{pmatrix}
$$

y:

$$
[A\\mid\\mathbf{b}]
=
\\left[
\\begin{array}{cc|c}
1&1&3\\\\
2&-1&0
\\end{array}
\\right]
$$

El teorema compara:

$$
\\boxed{\\operatorname{rank}(A)}
$$

con:

$$
\\boxed{\\operatorname{rank}([A\\mid\\mathbf{b}])}
$$

---

## 3. Enunciado del teorema de Rouché-Frobenius

Para un sistema lineal:

$$
A\\mathbf{x}=\\mathbf{b}
$$

con $n$ incógnitas:

$$
\\boxed{
\\text{El sistema es compatible}
\\iff
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid\\mathbf{b}])
}
$$

Si los rangos son iguales, el sistema tiene al menos una solución.

El número de soluciones depende de cuál sea ese rango común.

---

## 4. Clasificación de las soluciones

Sea:

$$
r=\\operatorname{rank}(A)
$$

y:

$$
r'=\\operatorname{rank}([A\\mid\\mathbf{b}])
$$

Existen tres posibilidades.

### Caso 1: Ninguna solución

Si:

$$
\\boxed{
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid\\mathbf{b}])
}
$$

el sistema es **incompatible**.

Por tanto:

$$
\\boxed{\\text{No tiene solución}}
$$

---

### Caso 2: Una única solución

Si:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid\\mathbf{b}])
=
n
}
$$

donde $n$ es el número de incógnitas, entonces:

$$
\\boxed{\\text{Existe una única solución}}
$$

---

### Caso 3: Infinitas soluciones

Si:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid\\mathbf{b}])
<
n
}
$$

entonces:

$$
\\boxed{\\text{Existen infinitas soluciones}}
$$

Existen variables libres que pueden tomar valores arbitrarios.

---

## 5. Tabla resumen

| Condición                                                   | Número de soluciones |
| ----------------------------------------------------------- | -------------------- |
| $\\operatorname{rank}(A)<\\operatorname{rank}([A\\mid b])$   | Ninguna              |
| $\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])=n$ | Una                  |
| $\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])<n$ | Infinitas            |

La condición fundamental es:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
}
$$

Esta determina si el sistema es **compatible**.

---

## 6. Ejemplo: una única solución

Consideremos:

$$
\\begin{cases}
x+y=3\\\\
2x-y=0
\\end{cases}
$$

La matriz de coeficientes es:

$$
A=
\\begin{pmatrix}
1&1\\\\
2&-1
\\end{pmatrix}
$$

La matriz ampliada es:

$$
[A\\mid b]
=
\\left[
\\begin{array}{cc|c}
1&1&3\\\\
2&-1&0
\\end{array}
\\right]
$$

Reduciendo por filas:

$$
\\left[
\\begin{array}{cc|c}
1&1&3\\\\
0&-3&-6
\\end{array}
\\right]
$$

Por tanto:

$$
\\operatorname{rank}(A)=2
$$

y:

$$
\\operatorname{rank}([A\\mid b])=2
$$

Hay $n=2$ incógnitas.

Por tanto:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
=
2
}
$$

El sistema tiene una única solución.

Resolviendo:

$$
y=2
$$

y:

$$
x=1
$$

Por tanto:

$$
\\boxed{(x,y)=(1,2)}
$$

---

## 7. Ejemplo: ninguna solución

Consideremos:

$$
\\begin{cases}
x+y=2\\\\
2x+2y=5
\\end{cases}
$$

La matriz ampliada es:

$$
\\left[
\\begin{array}{cc|c}
1&1&2\\\\
2&2&5
\\end{array}
\\right]
$$

Realizamos:

$$
F_2\\rightarrow F_2-2F_1
$$

y obtenemos:

$$
\\left[
\\begin{array}{cc|c}
1&1&2\\\\
0&0&1
\\end{array}
\\right]
$$

Por tanto:

$$
\\operatorname{rank}(A)=1
$$

mientras que:

$$
\\operatorname{rank}([A\\mid b])=2
$$

Así:

$$
\\boxed{
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid b])
}
$$

El sistema:

$$
\\boxed{\\text{no tiene solución}}
$$

La segunda fila representa:

$$
0=1
$$

lo cual es imposible.

---

## 8. Ejemplo: infinitas soluciones

Consideremos:

$$
\\begin{cases}
x+y+z=3\\\\
2x+2y+2z=6
\\end{cases}
$$

La matriz ampliada es:

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&3\\\\
2&2&2&6
\\end{array}
\\right]
$$

Realizamos:

$$
F_2\\rightarrow F_2-2F_1
$$

y obtenemos:

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&3\\\\
0&0&0&0
\\end{array}
\\right]
$$

Por tanto:

$$
\\operatorname{rank}(A)=1
$$

y:

$$
\\operatorname{rank}([A\\mid b])=1
$$

Hay:

$$
n=3
$$

incógnitas.

Así:

$$
1=1<3
$$

y por tanto:

$$
\\boxed{\\text{Existen infinitas soluciones}}
$$

Podemos elegir dos variables libremente.

Por ejemplo:

$$
y=s,\\qquad z=t
$$

Entonces:

$$
x+s+t=3
$$

y:

$$
x=3-s-t
$$

Por tanto:

$$
\\boxed{
(x,y,z)=(3-s-t,s,t)
}
$$

donde $s,t\\in\\mathbb{R}$.

---

## 9. Interpretación geométrica

Para sistemas con dos incógnitas, cada ecuación lineal representa una recta.

Existen tres posibilidades.

### Una única solución

Dos rectas se cortan en un único punto:

$$
\\boxed{\\text{Una solución}}
$$

### Ninguna solución

Dos rectas paralelas distintas nunca se cortan:

$$
\\boxed{\\text{Ninguna solución}}
$$

### Infinitas soluciones

Las dos ecuaciones representan la misma recta:

$$
\\boxed{\\text{Infinitas soluciones}}
$$

Las condiciones sobre los rangos describen algebraicamente estas situaciones geométricas.

---

## 10. Interpretación en tres dimensiones

Para tres incógnitas, cada ecuación representa un plano.

Un sistema puede tener:

- un único punto de intersección,
- ninguna intersección común,
- una recta de intersecciones,
- o, en casos degenerados, un plano completo de soluciones.

Las condiciones de rango permiten determinar cuál de estas situaciones se produce.

---

## 11. Número de variables libres

Si el sistema es compatible:

$$
\\boxed{
\\text{Número de variables libres}
=
n-\\operatorname{rank}(A)
}
$$

donde $n$ es el número de incógnitas.

Por ejemplo, si:

$$
n=5
$$

y:

$$
\\operatorname{rank}(A)=3
$$

entonces:

$$
5-3=2
$$

variables son libres.

Por tanto, un sistema compatible tiene infinitas soluciones con dos grados de libertad.

---

## 12. Dimensión del conjunto de soluciones

Para un sistema compatible:

$$
A\\mathbf{x}=\\mathbf{b}
$$

la dimensión del conjunto de soluciones es:

$$
\\boxed{
n-\\operatorname{rank}(A)
}
$$

Por tanto:

|      Rango | Número de incógnitas | Conjunto de soluciones |
| ---------: | -------------------: | ---------------------- |
|      $n$ |                $n$ | Un punto               |
|    $n-1$ |                $n$ | 1-dimensional          |
|    $n-2$ |                $n$ | 2-dimensional          |
| $\\vdots$ |                $n$ | $\\vdots$             |
|      $0$ |                $n$ | $n$-dimensional      |

Esto se aplica cuando el sistema es compatible.

---

## 13. Sistemas homogéneos

Un sistema homogéneo tiene la forma:

$$
\\boxed{A\\mathbf{x}=\\mathbf{0}}
$$

Por ejemplo:

$$
\\begin{cases}
x+y=0\\\\
2x+2y=0
\\end{cases}
$$

Un sistema homogéneo es **siempre compatible**, porque:

$$
\\mathbf{x}=\\mathbf{0}
$$

siempre es una solución.

Por tanto:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid0])
}
$$

El sistema homogéneo tiene:

- únicamente la solución trivial si $\\operatorname{rank}(A)=n$,
- infinitas soluciones si $\\operatorname{rank}(A)<n$.

---

## 14. Relación con la invertibilidad

Para una matriz cuadrada $A\\in\\mathbb{R}^{n\\times n}$:

$$
\\boxed{
A\\text{ es invertible}
\\iff
\\operatorname{rank}(A)=n
}
$$

Equivalentemente:

$$
\\boxed{
A\\text{ es invertible}
\\iff
\\det(A)\\neq0
}
$$

Por tanto:

$$
\\boxed{
\\det(A)\\neq0
\\iff
\\operatorname{rank}(A)=n
\\iff
A^{-1}\\text{ existe}
}
$$

En este caso, todo sistema:

$$
A\\mathbf{x}=\\mathbf{b}
$$

tiene exactamente una solución.

---

## 15. Relación con el determinante

Para una matriz cuadrada $n\\times n$:

$$
\\det(A)\\neq0
$$

implica:

$$
\\operatorname{rank}(A)=n
$$

Por tanto, para:

$$
A\\mathbf{x}=\\mathbf{b}
$$

tenemos:

$$
\\boxed{\\text{Una única solución}}
$$

para cualquier vector $\\mathbf{b}$.

Si:

$$
\\det(A)=0
$$

entonces:

$$
\\operatorname{rank}(A)<n
$$

y el sistema puede tener:

- ninguna solución, o
- infinitas soluciones.

El determinante por sí solo **no permite distinguir** entre estos dos casos.

Es necesario analizar la matriz ampliada.

---

## 16. Rouché-Frobenius y eliminación de Gauss

La eliminación de Gauss permite determinar ambos rangos.

Comenzamos con:

$$
[A\\mid b]
$$

y aplicamos operaciones elementales por filas.

Por ejemplo:

$$
[A\\mid b]
\\longrightarrow
\\text{forma escalonada}
$$

El número de filas no nulas en la parte de coeficientes proporciona:

$$
\\operatorname{rank}(A)
$$

El número de filas no nulas de toda la matriz ampliada proporciona:

$$
\\operatorname{rank}([A\\mid b])
$$

Por ello, la eliminación de Gauss es uno de los métodos más prácticos para aplicar el teorema.

---

## 17. La fila contradictoria

Una situación especialmente importante es:

$$
\\left[
\\begin{array}{cccc|c}
0&0&\\cdots&0&c
\\end{array}
\\right]
$$

donde:

$$
c\\neq0
$$

Esto representa:

$$
\\boxed{0=c}
$$

lo cual es imposible.

Por tanto:

$$
\\boxed{\\text{El sistema no tiene solución}}
$$

Esto corresponde a:

$$
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid b])
$$

---

## 18. Procedimiento práctico

Para determinar el número de soluciones:

### Paso 1 — Escribir la matriz de coeficientes

$$
A
$$

### Paso 2 — Escribir la matriz ampliada

$$
[A\\mid b]
$$

### Paso 3 — Aplicar eliminación de Gauss

Reducir la matriz ampliada a forma escalonada.

### Paso 4 — Determinar los rangos

Contar las filas no nulas de:

$$
A
$$

y:

$$
[A\\mid b]
$$

### Paso 5 — Comparar los rangos

Si:

$$
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid b])
$$

entonces:

$$
\\boxed{\\text{Ninguna solución}}
$$

Si:

$$
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
=
n
$$

entonces:

$$
\\boxed{\\text{Una única solución}}
$$

Si:

$$
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
<
n
$$

entonces:

$$
\\boxed{\\text{Infinitas soluciones}}
$$

---

## 19. Teorema fundamental

Para un sistema:

$$
A\\mathbf{x}=\\mathbf{b}
$$

con $n$ incógnitas:

$$
\\boxed{
\\begin{aligned}
\\operatorname{rank}(A)
&<
\\operatorname{rank}([A\\mid b])
&&\\Longrightarrow \\text{ninguna solución}\\\\[4pt]
\\operatorname{rank}(A)
&=
\\operatorname{rank}([A\\mid b])
=
n
&&\\Longrightarrow \\text{una solución}\\\\[4pt]
\\operatorname{rank}(A)
&=
\\operatorname{rank}([A\\mid b])
<
n
&&\\Longrightarrow \\text{infinitas soluciones}
\\end{aligned}
}
$$

---

## 20. Ideas clave

| Concepto                   | Resultado                                                 |
| -------------------------- | --------------------------------------------------------- |
| Matriz de coeficientes     | $A$                                                     |
| Matriz ampliada            | $[A\\mid b]$                                             |
| Sistema compatible         | $\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])$ |
| Ninguna solución           | $\\operatorname{rank}(A)<\\operatorname{rank}([A\\mid b])$ |
| Una única solución         | Ambos rangos son $n$                                    |
| Infinitas soluciones       | Ambos rangos son iguales y menores que $n$              |
| Variables libres           | $n-\\operatorname{rank}(A)$                              |
| Sistema homogéneo          | $A\\mathbf{x}=0$                                         |
| Sistema homogéneo          | Siempre compatible                                        |
| Matriz cuadrada invertible | $\\operatorname{rank}(A)=n$                              |
| Matriz cuadrada invertible | $\\det(A)\\neq0$                                          |

## Relación fundamental

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
\\iff
A\\mathbf{x}=\\mathbf{b}
\\text{ tiene al menos una solución}
}
$$

Y, para $n$ incógnitas:

$$
\\boxed{
\\begin{array}{c}
\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])=n
\\\\[2pt]
\\Downarrow
\\\\[2pt]
\\text{Una única solución}
\\end{array}
}
$$

$$
\\boxed{
\\begin{array}{c}
\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])<n
\\\\[2pt]
\\Downarrow
\\\\[2pt]
\\text{Infinitas soluciones}
\\end{array}
}
$$

$$
\\boxed{
\\begin{array}{c}
\\operatorname{rank}(A)<\\operatorname{rank}([A\\mid b])
\\\\[2pt]
\\Downarrow
\\\\[2pt]
\\text{Ninguna solución}
\\end{array}
}
$$
`,i=`# Teorema de Rouché-Frobenius

El **teorema de Rouché-Frobenius** permet determinar si un sistema d'equacions lineals té:

- cap solució,
- una única solució, o
- infinites solucions.

Es basa en comparar el **rang de la matriu de coeficients** amb el **rang de la matriu ampliada**.

---

## 1. Sistemes d'equacions lineals

Considerem un sistema de $m$ equacions lineals amb $n$ incògnites:

$$
\\begin{cases}
a_{11}x_1+a_{12}x_2+\\cdots+a_{1n}x_n=b_1\\\\
a_{21}x_1+a_{22}x_2+\\cdots+a_{2n}x_n=b_2\\\\
\\vdots\\\\
a_{m1}x_1+a_{m2}x_2+\\cdots+a_{mn}x_n=b_m
\\end{cases}
$$

Es pot escriure en forma matricial com:

$$
\\boxed{A\\mathbf{x}=\\mathbf{b}}
$$

on:

- $A$ és la **matriu de coeficients**,
- $\\mathbf{x}$ és el vector d'incògnites,
- $\\mathbf{b}$ és el vector de termes independents.

Per exemple:

$$
\\begin{cases}
x+y=3\\\\
2x-y=0
\\end{cases}
$$

es pot escriure com:

$$
\\begin{pmatrix}
1&1\\\\
2&-1
\\end{pmatrix}
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
3\\\\
0
\\end{pmatrix}
$$

---

## 2. Matriu de coeficients i matriu ampliada

La **matriu de coeficients** és:

$$
A=
\\begin{pmatrix}
a_{11}&a_{12}&\\cdots&a_{1n}\\\\
a_{21}&a_{22}&\\cdots&a_{2n}\\\\
\\vdots&\\vdots&\\ddots&\\vdots\\\\
a_{m1}&a_{m2}&\\cdots&a_{mn}
\\end{pmatrix}
$$

La **matriu ampliada** s'obté afegint els termes independents:

$$
[A\\mid\\mathbf{b}]
$$

Per exemple:

$$
\\begin{cases}
x+y=3\\\\
2x-y=0
\\end{cases}
$$

té:

$$
A=
\\begin{pmatrix}
1&1\\\\
2&-1
\\end{pmatrix}
$$

i:

$$
[A\\mid\\mathbf{b}]
=
\\left[
\\begin{array}{cc|c}
1&1&3\\\\
2&-1&0
\\end{array}
\\right]
$$

El teorema compara:

$$
\\boxed{\\operatorname{rank}(A)}
$$

amb:

$$
\\boxed{\\operatorname{rank}([A\\mid\\mathbf{b}])}
$$

---

## 3. Enunciat del teorema de Rouché-Frobenius

Per a un sistema lineal:

$$
A\\mathbf{x}=\\mathbf{b}
$$

amb $n$ incògnites:

$$
\\boxed{
\\text{El sistema és compatible}
\\iff
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid\\mathbf{b}])
}
$$

Si els rangs són iguals, el sistema té almenys una solució.

El nombre de solucions depèn del valor d'aquest rang comú.

---

## 4. Classificació de les solucions

Sigui:

$$
r=\\operatorname{rank}(A)
$$

i:

$$
r'=\\operatorname{rank}([A\\mid\\mathbf{b}])
$$

Hi ha tres possibilitats.

### Cas 1: Cap solució

Si:

$$
\\boxed{
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid\\mathbf{b}])
}
$$

el sistema és **incompatible**.

Per tant:

$$
\\boxed{\\text{No té cap solució}}
$$

---

### Cas 2: Una única solució

Si:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid\\mathbf{b}])
=
n
}
$$

on $n$ és el nombre d'incògnites, aleshores:

$$
\\boxed{\\text{Existeix una única solució}}
$$

---

### Cas 3: Infinites solucions

Si:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid\\mathbf{b}])
<
n
}
$$

aleshores:

$$
\\boxed{\\text{Existeixen infinites solucions}}
$$

Hi ha variables lliures que poden prendre valors arbitraris.

---

## 5. Taula resum

| Condició                                                    | Nombre de solucions |
| ----------------------------------------------------------- | ------------------- |
| $\\operatorname{rank}(A)<\\operatorname{rank}([A\\mid b])$   | Cap                 |
| $\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])=n$ | Una                 |
| $\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])<n$ | Infinites           |

La condició fonamental és:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
}
$$

Aquesta determina si el sistema és **compatible**.

---

## 6. Exemple: una única solució

Considerem:

$$
\\begin{cases}
x+y=3\\\\
2x-y=0
\\end{cases}
$$

La matriu de coeficients és:

$$
A=
\\begin{pmatrix}
1&1\\\\
2&-1
\\end{pmatrix}
$$

La matriu ampliada és:

$$
[A\\mid b]
=
\\left[
\\begin{array}{cc|c}
1&1&3\\\\
2&-1&0
\\end{array}
\\right]
$$

Reduint per files:

$$
\\left[
\\begin{array}{cc|c}
1&1&3\\\\
0&-3&-6
\\end{array}
\\right]
$$

Per tant:

$$
\\operatorname{rank}(A)=2
$$

i:

$$
\\operatorname{rank}([A\\mid b])=2
$$

Hi ha $n=2$ incògnites.

Així:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
=
2
}
$$

El sistema té una única solució.

Resolent:

$$
y=2
$$

i:

$$
x=1
$$

Per tant:

$$
\\boxed{(x,y)=(1,2)}
$$

---

## 7. Exemple: cap solució

Considerem:

$$
\\begin{cases}
x+y=2\\\\
2x+2y=5
\\end{cases}
$$

La matriu ampliada és:

$$
\\left[
\\begin{array}{cc|c}
1&1&2\\\\
2&2&5
\\end{array}
\\right]
$$

Fem:

$$
F_2\\rightarrow F_2-2F_1
$$

i obtenim:

$$
\\left[
\\begin{array}{cc|c}
1&1&2\\\\
0&0&1
\\end{array}
\\right]
$$

Per tant:

$$
\\operatorname{rank}(A)=1
$$

mentre que:

$$
\\operatorname{rank}([A\\mid b])=2
$$

Així:

$$
\\boxed{
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid b])
}
$$

El sistema:

$$
\\boxed{\\text{no té cap solució}}
$$

La segona fila representa:

$$
0=1
$$

cosa que és impossible.

---

## 8. Exemple: infinites solucions

Considerem:

$$
\\begin{cases}
x+y+z=3\\\\
2x+2y+2z=6
\\end{cases}
$$

La matriu ampliada és:

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&3\\\\
2&2&2&6
\\end{array}
\\right]
$$

Fem:

$$
F_2\\rightarrow F_2-2F_1
$$

i obtenim:

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&3\\\\
0&0&0&0
\\end{array}
\\right]
$$

Per tant:

$$
\\operatorname{rank}(A)=1
$$

i:

$$
\\operatorname{rank}([A\\mid b])=1
$$

Hi ha:

$$
n=3
$$

incògnites.

Així:

$$
1=1<3
$$

i, per tant:

$$
\\boxed{\\text{Existeixen infinites solucions}}
$$

Podem escollir dues variables lliurement.

Per exemple:

$$
y=s,\\qquad z=t
$$

Aleshores:

$$
x+s+t=3
$$

i:

$$
x=3-s-t
$$

Per tant:

$$
\\boxed{
(x,y,z)=(3-s-t,s,t)
}
$$

on $s,t\\in\\mathbb{R}$.

---

## 9. Interpretació geomètrica

Per a sistemes amb dues incògnites, cada equació lineal representa una recta.

Hi ha tres possibilitats.

### Una única solució

Dues rectes es tallen en un únic punt:

$$
\\boxed{\\text{Una solució}}
$$

### Cap solució

Dues rectes paral·leles diferents no es tallen mai:

$$
\\boxed{\\text{Cap solució}}
$$

### Infinites solucions

Les dues equacions representen la mateixa recta:

$$
\\boxed{\\text{Infinites solucions}}
$$

Les condicions sobre els rangs descriuen algebraicament aquestes situacions geomètriques.

---

## 10. Interpretació en tres dimensions

Per a tres incògnites, cada equació representa un pla.

Un sistema pot tenir:

- un únic punt d'intersecció,
- cap intersecció comuna,
- una recta d'interseccions,
- o, en casos degenerats, tot un pla de solucions.

Les condicions de rang permeten determinar quina d'aquestes situacions es produeix.

---

## 11. Nombre de variables lliures

Si el sistema és compatible:

$$
\\boxed{
\\text{Nombre de variables lliures}
=
n-\\operatorname{rank}(A)
}
$$

on $n$ és el nombre d'incògnites.

Per exemple, si:

$$
n=5
$$

i:

$$
\\operatorname{rank}(A)=3
$$

aleshores:

$$
5-3=2
$$

variables són lliures.

Per tant, un sistema compatible té infinites solucions amb dos graus de llibertat.

---

## 12. Dimensió del conjunt de solucions

Per a un sistema compatible:

$$
A\\mathbf{x}=\\mathbf{b}
$$

la dimensió del conjunt de solucions és:

$$
\\boxed{
n-\\operatorname{rank}(A)
}
$$

Per tant:

|       Rang | Nombre d'incògnites | Conjunt de solucions |
| ---------: | ------------------: | -------------------- |
|      $n$ |               $n$ | Un punt              |
|    $n-1$ |               $n$ | 1-dimensional        |
|    $n-2$ |               $n$ | 2-dimensional        |
| $\\vdots$ |               $n$ | $\\vdots$           |
|      $0$ |               $n$ | $n$-dimensional    |

Això s'aplica quan el sistema és compatible.

---

## 13. Sistemes homogenis

Un sistema homogeni té la forma:

$$
\\boxed{A\\mathbf{x}=\\mathbf{0}}
$$

Per exemple:

$$
\\begin{cases}
x+y=0\\\\
2x+2y=0
\\end{cases}
$$

Un sistema homogeni és **sempre compatible**, perquè:

$$
\\mathbf{x}=\\mathbf{0}
$$

sempre és una solució.

Per tant:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid0])
}
$$

El sistema homogeni té:

- únicament la solució trivial si $\\operatorname{rank}(A)=n$,
- infinites solucions si $\\operatorname{rank}(A)<n$.

---

## 14. Relació amb la invertibilitat

Per a una matriu quadrada $A\\in\\mathbb{R}^{n\\times n}$:

$$
\\boxed{
A\\text{ és invertible}
\\iff
\\operatorname{rank}(A)=n
}
$$

Equivalentment:

$$
\\boxed{
A\\text{ és invertible}
\\iff
\\det(A)\\neq0
}
$$

Per tant:

$$
\\boxed{
\\det(A)\\neq0
\\iff
\\operatorname{rank}(A)=n
\\iff
A^{-1}\\text{ existeix}
}
$$

En aquest cas, tot sistema:

$$
A\\mathbf{x}=\\mathbf{b}
$$

té exactament una solució.

---

## 15. Relació amb el determinant

Per a una matriu quadrada $n\\times n$:

$$
\\det(A)\\neq0
$$

implica:

$$
\\operatorname{rank}(A)=n
$$

Per tant, per a:

$$
A\\mathbf{x}=\\mathbf{b}
$$

tenim:

$$
\\boxed{\\text{Una única solució}}
$$

per a qualsevol vector $\\mathbf{b}$.

Si:

$$
\\det(A)=0
$$

aleshores:

$$
\\operatorname{rank}(A)<n
$$

i el sistema pot tenir:

- cap solució, o
- infinites solucions.

El determinant per si sol **no permet distingir** entre aquests dos casos.

Cal analitzar la matriu ampliada.

---

## 16. Rouché-Frobenius i eliminació de Gauss

L'eliminació de Gauss permet determinar tots dos rangs.

Comencem amb:

$$
[A\\mid b]
$$

i apliquem operacions elementals per files.

Per exemple:

$$
[A\\mid b]
\\longrightarrow
\\text{forma esglaonada}
$$

El nombre de files no nul·les de la part de coeficients proporciona:

$$
\\operatorname{rank}(A)
$$

El nombre de files no nul·les de tota la matriu ampliada proporciona:

$$
\\operatorname{rank}([A\\mid b])
$$

Per això, l'eliminació de Gauss és un dels mètodes més pràctics per aplicar el teorema.

---

## 17. La fila contradictòria

Una situació especialment important és:

$$
\\left[
\\begin{array}{cccc|c}
0&0&\\cdots&0&c
\\end{array}
\\right]
$$

on:

$$
c\\neq0
$$

Això representa:

$$
\\boxed{0=c}
$$

cosa que és impossible.

Per tant:

$$
\\boxed{\\text{El sistema no té cap solució}}
$$

Això correspon a:

$$
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid b])
$$

---

## 18. Procediment pràctic

Per determinar el nombre de solucions:

### Pas 1 — Escriure la matriu de coeficients

$$
A
$$

### Pas 2 — Escriure la matriu ampliada

$$
[A\\mid b]
$$

### Pas 3 — Aplicar l'eliminació de Gauss

Reduir la matriu ampliada a forma esglaonada.

### Pas 4 — Determinar els rangs

Comptar les files no nul·les de:

$$
A
$$

i:

$$
[A\\mid b]
$$

### Pas 5 — Comparar els rangs

Si:

$$
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid b])
$$

aleshores:

$$
\\boxed{\\text{Cap solució}}
$$

Si:

$$
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
=
n
$$

aleshores:

$$
\\boxed{\\text{Una única solució}}
$$

Si:

$$
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
<
n
$$

aleshores:

$$
\\boxed{\\text{Infinites solucions}}
$$

---

## 19. Teorema fonamental

Per a un sistema:

$$
A\\mathbf{x}=\\mathbf{b}
$$

amb $n$ incògnites:

$$
\\boxed{
\\begin{aligned}
\\operatorname{rank}(A)
&<
\\operatorname{rank}([A\\mid b])
&&\\Longrightarrow \\text{cap solució}\\\\[4pt]
\\operatorname{rank}(A)
&=
\\operatorname{rank}([A\\mid b])
=
n
&&\\Longrightarrow \\text{una solució}\\\\[4pt]
\\operatorname{rank}(A)
&=
\\operatorname{rank}([A\\mid b])
<
n
&&\\Longrightarrow \\text{infinites solucions}
\\end{aligned}
}
$$

---

## 20. Idees clau

| Concepte                   | Resultat                                                  |
| -------------------------- | --------------------------------------------------------- |
| Matriu de coeficients      | $A$                                                     |
| Matriu ampliada            | $[A\\mid b]$                                             |
| Sistema compatible         | $\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])$ |
| Cap solució                | $\\operatorname{rank}(A)<\\operatorname{rank}([A\\mid b])$ |
| Una única solució          | Tots dos rangs són $n$                                  |
| Infinites solucions        | Tots dos rangs són iguals i menors que $n$              |
| Variables lliures          | $n-\\operatorname{rank}(A)$                              |
| Sistema homogeni           | $A\\mathbf{x}=0$                                         |
| Sistema homogeni           | Sempre compatible                                         |
| Matriu quadrada invertible | $\\operatorname{rank}(A)=n$                              |
| Matriu quadrada invertible | $\\det(A)\\neq0$                                          |

## Relació fonamental

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
\\iff
A\\mathbf{x}=\\mathbf{b}
\\text{ té almenys una solució}
}
$$

I, per a $n$ incògnites:

$$
\\boxed{
\\begin{array}{c}
\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])=n
\\\\[2pt]
\\Downarrow
\\\\[2pt]
\\text{Una única solució}
\\end{array}
}
$$

$$
\\boxed{
\\begin{array}{c}
\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])<n
\\\\[2pt]
\\Downarrow
\\\\[2pt]
\\text{Infinites solucions}
\\end{array}
}
$$

$$
\\boxed{
\\begin{array}{c}
\\operatorname{rank}(A)<\\operatorname{rank}([A\\mid b])
\\\\[2pt]
\\Downarrow
\\\\[2pt]
\\text{Cap solució}
\\end{array}
}
$$
`,a=`# Rouché–Frobenius Theorem

The **Rouché–Frobenius theorem** provides a criterion for determining whether a system of linear equations has:

- no solutions,
- exactly one solution, or
- infinitely many solutions.

It is based on comparing the **rank of the coefficient matrix** with the **rank of the augmented matrix**.

---

## 1. Linear systems

Consider a system of \`m\` linear equations with \`n\` unknowns:

$$
\\begin{cases}
a_{11}x_1+a_{12}x_2+\\cdots+a_{1n}x_n=b_1\\\\
a_{21}x_1+a_{22}x_2+\\cdots+a_{2n}x_n=b_2\\\\
\\vdots\\\\
a_{m1}x_1+a_{m2}x_2+\\cdots+a_{mn}x_n=b_m
\\end{cases}
$$

It can be written in matrix form as:

$$
\\boxed{A\\mathbf{x}=\\mathbf{b}}
$$

where:

- $A$ is the **coefficient matrix**,
- $\\mathbf{x}$ is the vector of unknowns,
- $\\mathbf{b}$ is the vector of constants.

For example:

$$
\\begin{cases}
x+y=3\\\\
2x-y=0
\\end{cases}
$$

can be written as:

$$
\\begin{pmatrix}
1&1\\\\
2&-1
\\end{pmatrix}
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
3\\\\
0
\\end{pmatrix}
$$

---

## 2. Coefficient and augmented matrices

The **coefficient matrix** is:

$$
A=
\\begin{pmatrix}
a_{11}&a_{12}&\\cdots&a_{1n}\\\\
a_{21}&a_{22}&\\cdots&a_{2n}\\\\
\\vdots&\\vdots&\\ddots&\\vdots\\\\
a_{m1}&a_{m2}&\\cdots&a_{mn}
\\end{pmatrix}
$$

The **augmented matrix** is obtained by adding the constants:

$$
[A\\mid\\mathbf{b}]
$$

For example:

$$
\\begin{cases}
x+y=3\\\\
2x-y=0
\\end{cases}
$$

has:

$$
A=
\\begin{pmatrix}
1&1\\\\
2&-1
\\end{pmatrix}
$$

and:

$$
[A\\mid\\mathbf{b}]
=
\\left[
\\begin{array}{cc|c}
1&1&3\\\\
2&-1&0
\\end{array}
\\right]
$$

The theorem compares:

$$
\\boxed{\\operatorname{rank}(A)}
$$

with:

$$
\\boxed{\\operatorname{rank}([A\\mid\\mathbf{b}])}
$$

---

## 3. Statement of the Rouché–Frobenius theorem

For a linear system

$$
A\\mathbf{x}=\\mathbf{b}
$$

with $n$ unknowns:

$$
\\boxed{
\\text{The system is consistent}
\\iff
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid\\mathbf{b}])
}
$$

If the ranks are equal, the system has at least one solution.

The number of solutions depends on the common rank.

---

## 4. Classification of solutions

Let:

$$
r=\\operatorname{rank}(A)
$$

and:

$$
r'=\\operatorname{rank}([A\\mid\\mathbf{b}])
$$

There are three possibilities.

### Case 1: No solution

If:

$$
\\boxed{
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid\\mathbf{b}])
}
$$

then the system is **inconsistent**.

Therefore:

$$
\\boxed{\\text{No solution}}
$$

---

### Case 2: Unique solution

If:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid\\mathbf{b}])
=
n
}
$$

where $n$ is the number of unknowns, then:

$$
\\boxed{\\text{Exactly one solution}}
$$

---

### Case 3: Infinitely many solutions

If:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid\\mathbf{b}])
<
n
}
$$

then:

$$
\\boxed{\\text{Infinitely many solutions}}
$$

There are free variables, which can take arbitrary values.

---

## 5. Summary table

| Condition                                                   | Number of solutions |
| ----------------------------------------------------------- | ------------------- |
| $\\operatorname{rank}(A)<\\operatorname{rank}([A\\mid b])$   | No solution         |
| $\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])=n$ | Exactly one         |
| $\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])<n$ | Infinitely many     |

The most important condition is:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
}
$$

This determines whether the system is **consistent**.

---

# 6. Example: Unique solution

Consider:

$$
\\begin{cases}
x+y=3\\\\
2x-y=0
\\end{cases}
$$

The coefficient matrix is:

$$
A=
\\begin{pmatrix}
1&1\\\\
2&-1
\\end{pmatrix}
$$

The augmented matrix is:

$$
[A\\mid b]
=
\\left[
\\begin{array}{cc|c}
1&1&3\\\\
2&-1&0
\\end{array}
\\right]
$$

Row reduction gives:

$$
\\left[
\\begin{array}{cc|c}
1&1&3\\\\
0&-3&-6
\\end{array}
\\right]
$$

Therefore:

$$
\\operatorname{rank}(A)=2
$$

and:

$$
\\operatorname{rank}([A\\mid b])=2
$$

There are $n=2$ unknowns.

Thus:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
=
2
}
$$

Therefore, the system has exactly one solution.

Solving:

$$
y=2
$$

and:

$$
x=1
$$

so:

$$
\\boxed{(x,y)=(1,2)}
$$

---

# 7. Example: No solution

Consider:

$$
\\begin{cases}
x+y=2\\\\
2x+2y=5
\\end{cases}
$$

The augmented matrix is:

$$
\\left[
\\begin{array}{cc|c}
1&1&2\\\\
2&2&5
\\end{array}
\\right]
$$

Perform:

$$
F_2\\rightarrow F_2-2F_1
$$

giving:

$$
\\left[
\\begin{array}{cc|c}
1&1&2\\\\
0&0&1
\\end{array}
\\right]
$$

The coefficient matrix has rank:

$$
\\operatorname{rank}(A)=1
$$

while the augmented matrix has rank:

$$
\\operatorname{rank}([A\\mid b])=2
$$

Therefore:

$$
\\boxed{
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid b])
}
$$

The system has:

$$
\\boxed{\\text{No solution}}
$$

The second row represents:

$$
0=1
$$

which is impossible.

---

# 8. Example: Infinitely many solutions

Consider:

$$
\\begin{cases}
x+y+z=3\\\\
2x+2y+2z=6
\\end{cases}
$$

The augmented matrix is:

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&3\\\\
2&2&2&6
\\end{array}
\\right]
$$

Perform:

$$
F_2\\rightarrow F_2-2F_1
$$

giving:

$$
\\left[
\\begin{array}{ccc|c}
1&1&1&3\\\\
0&0&0&0
\\end{array}
\\right]
$$

Therefore:

$$
\\operatorname{rank}(A)=1
$$

and:

$$
\\operatorname{rank}([A\\mid b])=1
$$

There are:

$$
n=3
$$

unknowns.

Thus:

$$
1=1<3
$$

and therefore:

$$
\\boxed{\\text{Infinitely many solutions}}
$$

We can choose two variables freely.

For example:

$$
y=s,\\qquad z=t
$$

Then:

$$
x+s+t=3
$$

so:

$$
x=3-s-t
$$

Therefore:

$$
\\boxed{
(x,y,z)=(3-s-t,s,t)
}
$$

where $s,t\\in\\mathbb{R}$.

---

# 9. Geometric interpretation

For systems with two unknowns, each linear equation represents a line.

For example:

$$
a_1x+b_1y=c_1
$$

represents a line in the plane.

There are three possibilities.

### Unique solution

Two lines intersect at exactly one point:

$$
\\boxed{\\text{One solution}}
$$

### No solution

Two distinct parallel lines never intersect:

$$
\\boxed{\\text{No solution}}
$$

### Infinitely many solutions

The equations represent the same line:

$$
\\boxed{\\text{Infinitely many solutions}}
$$

The rank conditions describe these geometric situations algebraically.

---

# 10. Three-dimensional interpretation

For three unknowns, each equation represents a plane.

A system can have:

- one common intersection point,
- no common intersection,
- a line of intersections,
- or, in degenerate cases, an entire plane of solutions.

The rank conditions determine the dimension of the solution set.

---

# 11. Number of free variables

If the system is consistent, then:

$$
\\boxed{
\\text{Number of free variables}
=
n-\\operatorname{rank}(A)
}
$$

where $n$ is the number of unknowns.

For example, if:

$$
n=5
$$

and:

$$
\\operatorname{rank}(A)=3
$$

then:

$$
5-3=2
$$

free variables exist.

Therefore, a consistent system has infinitely many solutions with two degrees of freedom.

---

# 12. Dimension of the solution set

For a consistent system:

$$
A\\mathbf{x}=\\mathbf{b}
$$

the dimension of the solution set is:

$$
\\boxed{
n-\\operatorname{rank}(A)
}
$$

Therefore:

|       Rank | Number of unknowns | Solution set      |
| ---------: | -----------------: | ----------------- |
|      $n$ |              $n$ | One point         |
|    $n-1$ |              $n$ | 1-dimensional     |
|    $n-2$ |              $n$ | 2-dimensional     |
| $\\vdots$ |              $n$ | $\\vdots$        |
|      $0$ |              $n$ | $n$-dimensional |

This applies when the system is consistent.

---

# 13. Homogeneous systems

A homogeneous system has the form:

$$
\\boxed{A\\mathbf{x}=\\mathbf{0}}
$$

For example:

$$
\\begin{cases}
x+y=0\\\\
2x+2y=0
\\end{cases}
$$

A homogeneous system is **always consistent**, because:

$$
\\mathbf{x}=\\mathbf{0}
$$

is always a solution.

Therefore:

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid0])
}
$$

The homogeneous system has:

- only the trivial solution if $\\operatorname{rank}(A)=n$,
- infinitely many solutions if $\\operatorname{rank}(A)<n$.

---

# 14. Relationship with invertibility

For a square matrix $A\\in\\mathbb{R}^{n\\times n}$:

$$
\\boxed{
A\\text{ is invertible}
\\iff
\\operatorname{rank}(A)=n
}
$$

Equivalently:

$$
\\boxed{
A\\text{ is invertible}
\\iff
\\det(A)\\neq0
}
$$

Therefore:

$$
\\boxed{
\\det(A)\\neq0
\\iff
\\operatorname{rank}(A)=n
\\iff
A^{-1}\\text{ exists}
}
$$

In this case, every system:

$$
A\\mathbf{x}=\\mathbf{b}
$$

has exactly one solution.

---

# 15. Relationship with determinants

For a square $n\\times n$ matrix:

$$
\\det(A)\\neq0
$$

implies:

$$
\\operatorname{rank}(A)=n
$$

Therefore, for:

$$
A\\mathbf{x}=\\mathbf{b}
$$

we have:

$$
\\boxed{\\text{Exactly one solution}}
$$

for every vector $\\mathbf{b}$.

If:

$$
\\det(A)=0
$$

then:

$$
\\operatorname{rank}(A)<n
$$

and the system can have either:

- no solution, or
- infinitely many solutions.

The determinant alone does **not** distinguish these two cases.

The augmented matrix is required.

---

# 16. Rouché–Frobenius and Gaussian elimination

Gaussian elimination can be used to determine both ranks.

Start with:

$$
[A\\mid b]
$$

and apply elementary row operations.

For example:

$$
[A\\mid b]
\\longrightarrow
\\text{row-echelon form}
$$

The number of non-zero rows in the coefficient part gives:

$$
\\operatorname{rank}(A)
$$

The number of non-zero rows in the entire augmented matrix gives:

$$
\\operatorname{rank}([A\\mid b])
$$

This makes Gaussian elimination one of the most practical methods for applying the theorem.

---

# 17. The contradictory row

A particularly important situation is:

$$
\\left[
\\begin{array}{cccc|c}
0&0&\\cdots&0&c
\\end{array}
\\right]
$$

where:

$$
c\\neq0
$$

This represents:

$$
\\boxed{0=c}
$$

which is impossible.

Therefore:

$$
\\boxed{\\text{The system has no solution}}
$$

This corresponds to:

$$
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid b])
$$

---

# 18. A practical procedure

To determine the number of solutions:

### Step 1 — Write the coefficient matrix

$$
A
$$

### Step 2 — Write the augmented matrix

$$
[A\\mid b]
$$

### Step 3 — Perform Gaussian elimination

Reduce the augmented matrix to row-echelon form.

### Step 4 — Determine the ranks

Count the non-zero rows of:

$$
A
$$

and:

$$
[A\\mid b]
$$

### Step 5 — Compare the ranks

If:

$$
\\operatorname{rank}(A)
<
\\operatorname{rank}([A\\mid b])
$$

then:

$$
\\boxed{\\text{No solution}}
$$

If:

$$
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
=
n
$$

then:

$$
\\boxed{\\text{Exactly one solution}}
$$

If:

$$
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
<
n
$$

then:

$$
\\boxed{\\text{Infinitely many solutions}}
$$

---

# 19. Fundamental theorem

For a system:

$$
A\\mathbf{x}=\\mathbf{b}
$$

with $n$ unknowns:

$$
\\boxed{
\\begin{aligned}
\\operatorname{rank}(A)
&<
\\operatorname{rank}([A\\mid b])
&&\\Longrightarrow \\text{no solution}\\\\[4pt]
\\operatorname{rank}(A)
&=
\\operatorname{rank}([A\\mid b])
=
n
&&\\Longrightarrow \\text{one solution}\\\\[4pt]
\\operatorname{rank}(A)
&=
\\operatorname{rank}([A\\mid b])
<
n
&&\\Longrightarrow \\text{infinitely many solutions}
\\end{aligned}
}
$$

---

# 20. Key ideas

| Concept                  | Result                                                    |
| ------------------------ | --------------------------------------------------------- |
| Coefficient matrix       | $A$                                                     |
| Augmented matrix         | $[A\\mid b]$                                             |
| Consistent system        | $\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])$ |
| No solution              | $\\operatorname{rank}(A)<\\operatorname{rank}([A\\mid b])$ |
| Unique solution          | Both ranks equal $n$                                    |
| Infinite solutions       | Both ranks equal but are less than $n$                  |
| Free variables           | $n-\\operatorname{rank}(A)$                              |
| Homogeneous system       | $A\\mathbf{x}=0$                                         |
| Homogeneous system       | Always consistent                                         |
| Invertible square matrix | $\\operatorname{rank}(A)=n$                              |
| Invertible square matrix | $\\det(A)\\neq0$                                          |

## Fundamental relationship

$$
\\boxed{
\\operatorname{rank}(A)
=
\\operatorname{rank}([A\\mid b])
\\iff
A\\mathbf{x}=\\mathbf{b}
\\text{ has at least one solution}
}
$$

And, for $n$ unknowns:

$$
\\boxed{
\\begin{array}{c}
\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])=n
\\\\[2pt]
\\Downarrow
\\\\[2pt]
\\text{Exactly one solution}
\\end{array}
}
$$

$$
\\boxed{
\\begin{array}{c}
\\operatorname{rank}(A)=\\operatorname{rank}([A\\mid b])<n
\\\\[2pt]
\\Downarrow
\\\\[2pt]
\\text{Infinitely many solutions}
\\end{array}
}
$$

$$
\\boxed{
\\begin{array}{c}
\\operatorname{rank}(A)<\\operatorname{rank}([A\\mid b])
\\\\[2pt]
\\Downarrow
\\\\[2pt]
\\text{No solution}
\\end{array}
}
$$
`;function o(){let{locale:o}=t();return e(n,{id:`rouche-frobenius-theorem`,content:{es:r,ca:i,en:a}[o]})}export{o as default};