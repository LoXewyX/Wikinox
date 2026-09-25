import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-C1BT9wAk.js";import{t as n}from"./TopicPage-DZNFNl0A.js";var r=`# Matrices inversas

La **matriz inversa** de una matriz es una matriz que, al multiplicarla por la matriz original, produce la **matriz identidad**.

La matriz inversa es fundamental para resolver sistemas de ecuaciones, transformar vectores y estudiar transformaciones lineales.

---

## 1. Definición

Sea una matriz cuadrada:

$$
A
$$

Su inversa se escribe:

$$
A^{-1}
$$

y cumple:

$$
\\boxed{AA^{-1}=A^{-1}A=I}
$$

donde $I$ es la **matriz identidad**.

Por ejemplo:

$$
I=
\\begin{pmatrix}
1&0\\\\
0&1
\\end{pmatrix}
$$

Por tanto, $A^{-1}$ es la matriz que "deshace" el efecto de $A$.

---

## 2. ¿Cuándo existe una matriz inversa?

No todas las matrices tienen inversa.

Una matriz cuadrada $A$ es invertible si y solo si:

$$
\\boxed{\\det(A)\\neq0}
$$

Equivalentemente:

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ existe}
}
$$

Si:

$$
\\det(A)=0
$$

la matriz no tiene inversa y se denomina **matriz singular**.

---

## 3. Inversa de una matriz $2\\times2$

Sea:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

Su inversa es:

$$
\\boxed{
A^{-1}
=
\\frac{1}{ad-bc}
\\begin{pmatrix}
d&-b\\\\
-c&a
\\end{pmatrix}
}
$$

siempre que:

$$
ad-bc\\neq0
$$

Es decir:

$$
\\det(A)\\neq0
$$

---

## 4. Ejemplo $2\\times2$

Consideremos:

$$
A=
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
$$

Primero calculamos el determinante:

$$
\\det(A)=(2)(1)-(1)(1)
$$

$$
\\det(A)=1
$$

Como:

$$
\\det(A)\\neq0
$$

la inversa existe.

Aplicamos la fórmula:

$$
A^{-1}
=
\\frac{1}{1}
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
$$

Por tanto:

$$
\\boxed{
A^{-1}=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
}
$$

Podemos comprobarlo:

$$
AA^{-1}
=
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
$$

$$
=
\\begin{pmatrix}
1&0\\\\
0&1
\\end{pmatrix}
=I
$$

---

# 5. Ejemplo de una matriz sin inversa

Consideremos:

$$
A=
\\begin{pmatrix}
1&2\\\\
2&4
\\end{pmatrix}
$$

El determinante es:

$$
\\det(A)=(1)(4)-(2)(2)
$$

$$
=4-4=0
$$

Por tanto:

$$
\\boxed{\\det(A)=0}
$$

y:

$$
\\boxed{A^{-1}\\text{ no existe}}
$$

La matriz es **singular**.

---

# 6. Propiedades de la matriz inversa

## Inversa de la inversa

$$
\\boxed{(A^{-1})^{-1}=A}
$$

---

## Inversa de la identidad

$$
\\boxed{I^{-1}=I}
$$

---

## Inversa de un producto

Si $A$ y $B$ son invertibles:

$$
\\boxed{(AB)^{-1}=B^{-1}A^{-1}}
$$

El orden se invierte.

En general:

$$
(AB)^{-1}\\neq A^{-1}B^{-1}
$$

---

## Inversa de la traspuesta

$$
\\boxed{(A^T)^{-1}=(A^{-1})^T}
$$

---

## Determinante de la inversa

Si $A$ es invertible:

$$
\\boxed{
\\det(A^{-1})=\\frac{1}{\\det(A)}
}
$$

---

# 7. Inversa y determinante

La relación entre inversa y determinante es:

$$
\\boxed{
A^{-1}\\text{ existe}
\\iff
\\det(A)\\neq0
}
$$

Esto significa que el determinante nos permite saber inmediatamente si una matriz cuadrada es invertible.

| Determinante   | Matriz inversa |
| -------------- | -------------- |
| $\\det(A)\\neq0$ | Existe         |
| $\\det(A)=0$    | No existe      |

---

# 8. Cálculo de la inversa mediante Gauss-Jordan

Para matrices más grandes, podemos calcular la inversa utilizando la **eliminación de Gauss-Jordan**.

Comenzamos con:

$$
A
$$

y construimos la matriz aumentada:

$$
\\boxed{[A\\mid I]}
$$

Después aplicamos operaciones elementales de fila hasta obtener:

$$
[I\\mid A^{-1}]
$$

Es decir:

$$
[A\\mid I]
\\longrightarrow
[I\\mid A^{-1}]
$$

---

# 9. Ejemplo con Gauss-Jordan

Consideremos:

$$
A=
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
$$

Construimos:

$$
[A\\mid I]
=
\\left[
\\begin{array}{cc|cc}
2&1&1&0\\\\
1&1&0&1
\\end{array}
\\right]
$$

Intercambiamos las filas:

$$
\\left[
\\begin{array}{cc|cc}
1&1&0&1\\\\
2&1&1&0
\\end{array}
\\right]
$$

Hacemos:

$$
F_2\\rightarrow F_2-2F_1
$$

Obtenemos:

$$
\\left[
\\begin{array}{cc|cc}
1&1&0&1\\\\
0&-1&1&-2
\\end{array}
\\right]
$$

Ahora:

$$
F_2\\rightarrow -F_2
$$

$$
\\left[
\\begin{array}{cc|cc}
1&1&0&1\\\\
0&1&-1&2
\\end{array}
\\right]
$$

Finalmente:

$$
F_1\\rightarrow F_1-F_2
$$

Obtenemos:

$$
\\left[
\\begin{array}{cc|cc}
1&0&1&-1\\\\
0&1&-1&2
\\end{array}
\\right]
$$

Por tanto:

$$
\\boxed{
A^{-1}
=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
}
$$

---

# 10. Inversa y sistemas de ecuaciones

Una de las aplicaciones más importantes de las matrices inversas es resolver sistemas de ecuaciones.

Consideremos:

$$
A\\mathbf{x}=\\mathbf{b}
$$

Si $A$ es invertible, multiplicamos ambos lados por $A^{-1}$:

$$
A^{-1}A\\mathbf{x}=A^{-1}\\mathbf{b}
$$

Como:

$$
A^{-1}A=I
$$

tenemos:

$$
I\\mathbf{x}=A^{-1}\\mathbf{b}
$$

Por tanto:

$$
\\boxed{\\mathbf{x}=A^{-1}\\mathbf{b}}
$$

---

# 11. Ejemplo

Consideremos el sistema:

$$
\\begin{cases}
2x+y=5\\\\
x+y=3
\\end{cases}
$$

Podemos escribirlo como:

$$
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
5\\\\
3
\\end{pmatrix}
$$

Es decir:

$$
A\\mathbf{x}=\\mathbf{b}
$$

Sabemos que:

$$
A^{-1}
=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
$$

Por tanto:

$$
\\mathbf{x}=A^{-1}\\mathbf{b}
$$

$$
\\mathbf{x}
=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
\\begin{pmatrix}
5\\\\
3
\\end{pmatrix}
$$

$$
=
\\begin{pmatrix}
5-3\\\\
-5+6
\\end{pmatrix}
$$

$$
=
\\begin{pmatrix}
2\\\\
1
\\end{pmatrix}
$$

Por tanto:

$$
\\boxed{x=2,\\qquad y=1}
$$

---

# 12. Interpretación geométrica

Una matriz invertible representa una transformación que puede ser **deshecha**.

Si:

$$
\\mathbf{y}=A\\mathbf{x}
$$

podemos recuperar $\\mathbf{x}$ mediante:

$$
\\boxed{\\mathbf{x}=A^{-1}\\mathbf{y}}
$$

Por tanto:

- $A$ aplica una transformación.
- $A^{-1}$ deshace esa transformación.

Si:

$$
\\det(A)=0
$$

la transformación reduce la dimensión del espacio y no puede deshacerse completamente.

---

# 13. Relación con el rango

Para una matriz $n\\times n$:

$$
\\boxed{
A\\text{ es invertible}
\\iff
\\operatorname{rango}(A)=n
}
$$

Por tanto:

$$
\\boxed{
\\det(A)\\neq0
\\iff
\\operatorname{rango}(A)=n
\\iff
A^{-1}\\text{ existe}
}
$$

---

# 14. Matriz adjunta

Otra forma de calcular la inversa es mediante la **matriz adjunta**:

$$
\\boxed{
A^{-1}
=
\\frac{1}{\\det(A)}
\\operatorname{adj}(A)
}
$$

siempre que:

$$
\\det(A)\\neq0
$$

La matriz adjunta es la traspuesta de la matriz de cofactores:

$$
\\boxed{
\\operatorname{adj}(A)=C^T
}
$$

donde $C$ es la matriz de cofactores.

Este método es útil teóricamente, pero para matrices grandes, Gauss-Jordan suele ser más práctico.

---

# 15. Ideas clave

| Concepto                                   | Resultado                     |
| ------------------------------------------ | ----------------------------- |
| Matriz inversa                             | $A^{-1}$                      |
| Definición                                 | $AA^{-1}=A^{-1}A=I$           |
| Condición                                  | $\\det(A)\\neq0$                |
| $\\det(A)=0$                                | No existe la inversa          |
| $(A^{-1})^{-1}$                            | $A$                           |
| $(AB)^{-1}$                                | $B^{-1}A^{-1}$                |
| $(A^T)^{-1}$                               | $(A^{-1})^T$                  |
| $\\det(A^{-1})$                             | $\\frac{1}{\\det(A)}$           |
| Sistema $A\\mathbf{x}=\\mathbf{b}$           | $\\mathbf{x}=A^{-1}\\mathbf{b}$ |
| Rango de una matriz invertible $n\\times n$ | $n$                           |

### Relación fundamental

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ existe}
\\iff
\\operatorname{rango}(A)=n
}
$$
`,i=`# Matrius inverses

La **matriu inversa** d'una matriu és una matriu que, en multiplicar-la per la matriu original, produeix la **matriu identitat**.

La matriu inversa és fonamental per resoldre sistemes d'equacions, transformar vectors i estudiar transformacions lineals.

---

## 1. Definició

Sigui una matriu quadrada:

$$
A
$$

La seva inversa s'escriu:

$$
A^{-1}
$$

i compleix:

$$
\\boxed{AA^{-1}=A^{-1}A=I}
$$

on $I$ és la **matriu identitat**.

Per exemple:

$$
I=
\\begin{pmatrix}
1&0\\\\
0&1
\\end{pmatrix}
$$

Per tant, $A^{-1}$ és la matriu que "desfà" l'efecte de $A$.

---

## 2. Quan existeix una matriu inversa?

No totes les matrius tenen inversa.

Una matriu quadrada $A$ és invertible si i només si:

$$
\\boxed{\\det(A)\\neq0}
$$

Equivalentment:

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ existeix}
}
$$

Si:

$$
\\det(A)=0
$$

la matriu no té inversa i s'anomena **matriu singular**.

---

## 3. Inversa d'una matriu $2\\times2$

Sigui:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

La seva inversa és:

$$
\\boxed{
A^{-1}
=
\\frac{1}{ad-bc}
\\begin{pmatrix}
d&-b\\\\
-c&a
\\end{pmatrix}
}
$$

sempre que:

$$
ad-bc\\neq0
$$

És a dir:

$$
\\det(A)\\neq0
$$

---

## 4. Exemple $2\\times2$

Considerem:

$$
A=
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
$$

Primer calculem el determinant:

$$
\\det(A)=(2)(1)-(1)(1)
$$

$$
\\det(A)=1
$$

Com que:

$$
\\det(A)\\neq0
$$

la inversa existeix.

Apliquem la fórmula:

$$
A^{-1}
=
\\frac{1}{1}
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
$$

Per tant:

$$
\\boxed{
A^{-1}=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
}
$$

Podem comprovar-ho:

$$
AA^{-1}
=
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
$$

$$
=
\\begin{pmatrix}
1&0\\\\
0&1
\\end{pmatrix}
=I
$$

---

# 5. Exemple d'una matriu sense inversa

Considerem:

$$
A=
\\begin{pmatrix}
1&2\\\\
2&4
\\end{pmatrix}
$$

El determinant és:

$$
\\det(A)=(1)(4)-(2)(2)
$$

$$
=4-4=0
$$

Per tant:

$$
\\boxed{\\det(A)=0}
$$

i:

$$
\\boxed{A^{-1}\\text{ no existeix}}
$$

La matriu és **singular**.

---

# 6. Propietats de la matriu inversa

## Inversa de la inversa

$$
\\boxed{(A^{-1})^{-1}=A}
$$

---

## Inversa de la identitat

$$
\\boxed{I^{-1}=I}
$$

---

## Inversa d'un producte

Si $A$ i $B$ són invertibles:

$$
\\boxed{(AB)^{-1}=B^{-1}A^{-1}}
$$

L'ordre s'inverteix.

En general:

$$
(AB)^{-1}\\neq A^{-1}B^{-1}
$$

---

## Inversa de la transposada

$$
\\boxed{(A^T)^{-1}=(A^{-1})^T}
$$

---

## Determinant de la inversa

Si $A$ és invertible:

$$
\\boxed{
\\det(A^{-1})=\\frac{1}{\\det(A)}
}
$$

---

# 7. Inversa i determinant

La relació entre inversa i determinant és:

$$
\\boxed{
A^{-1}\\text{ existeix}
\\iff
\\det(A)\\neq0
}
$$

Això significa que el determinant ens permet saber immediatament si una matriu quadrada és invertible.

| Determinant    | Matriu inversa |
| -------------- | -------------- |
| $\\det(A)\\neq0$ | Existeix       |
| $\\det(A)=0$    | No existeix    |

---

# 8. Càlcul de la inversa mitjançant Gauss-Jordan

Per a matrius més grans, podem calcular la inversa utilitzant **eliminació de Gauss-Jordan**.

Comencem amb:

$$
A
$$

i construïm la matriu augmentada:

$$
\\boxed{[A\\mid I]}
$$

Després apliquem operacions elementals de fila fins obtenir:

$$
[I\\mid A^{-1}]
$$

És a dir:

$$
[A\\mid I]
\\longrightarrow
[I\\mid A^{-1}]
$$

---

## 9. Exemple amb Gauss-Jordan

Considerem:

$$
A=
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
$$

Construïm:

$$
[A\\mid I]
=
\\left[
\\begin{array}{cc|cc}
2&1&1&0\\\\
1&1&0&1
\\end{array}
\\right]
$$

Intercanviem les files:

$$
\\left[
\\begin{array}{cc|cc}
1&1&0&1\\\\
2&1&1&0
\\end{array}
\\right]
$$

Fem:

$$
F_2\\rightarrow F_2-2F_1
$$

Obtenim:

$$
\\left[
\\begin{array}{cc|cc}
1&1&0&1\\\\
0&-1&1&-2
\\end{array}
\\right]
$$

Ara:

$$
F_2\\rightarrow -F_2
$$

$$
\\left[
\\begin{array}{cc|cc}
1&1&0&1\\\\
0&1&-1&2
\\end{array}
\\right]
$$

Finalment:

$$
F_1\\rightarrow F_1-F_2
$$

Obtenim:

$$
\\left[
\\begin{array}{cc|cc}
1&0&1&-1\\\\
0&1&-1&2
\\end{array}
\\right]
$$

Per tant:

$$
\\boxed{
A^{-1}
=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
}
$$

---

# 10. Inversa i sistemes d'equacions

Una de les aplicacions més importants de les matrius inverses és resoldre sistemes d'equacions.

Considerem:

$$
A\\mathbf{x}=\\mathbf{b}
$$

Si $A$ és invertible, multipliquem els dos costats per $A^{-1}$:

$$
A^{-1}A\\mathbf{x}=A^{-1}\\mathbf{b}
$$

Com que:

$$
A^{-1}A=I
$$

tenim:

$$
I\\mathbf{x}=A^{-1}\\mathbf{b}
$$

Per tant:

$$
\\boxed{\\mathbf{x}=A^{-1}\\mathbf{b}}
$$

---

## 11. Exemple

Considerem el sistema:

$$
\\begin{cases}
2x+y=5\\\\
x+y=3
\\end{cases}
$$

El podem escriure com:

$$
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
5\\\\
3
\\end{pmatrix}
$$

És a dir:

$$
A\\mathbf{x}=\\mathbf{b}
$$

Sabem que:

$$
A^{-1}
=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
$$

Per tant:

$$
\\mathbf{x}=A^{-1}\\mathbf{b}
$$

$$
\\mathbf{x}
=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
\\begin{pmatrix}
5\\\\
3
\\end{pmatrix}
$$

$$
=
\\begin{pmatrix}
5-3\\\\
-5+6
\\end{pmatrix}
$$

$$
=
\\begin{pmatrix}
2\\\\
1
\\end{pmatrix}
$$

Per tant:

$$
\\boxed{x=2,\\qquad y=1}
$$

---

# 12. Interpretació geomètrica

Una matriu invertible representa una transformació que es pot **desfer**.

Si:

$$
\\mathbf{y}=A\\mathbf{x}
$$

podem recuperar $\\mathbf{x}$ mitjançant:

$$
\\boxed{\\mathbf{x}=A^{-1}\\mathbf{y}}
$$

Per tant:

- $A$ aplica una transformació.
- $A^{-1}$ desfà aquesta transformació.

Si:

$$
\\det(A)=0
$$

la transformació redueix la dimensió de l'espai i no es pot desfer completament.

---

# 13. Relació amb el rang

Per a una matriu $n\\times n$:

$$
\\boxed{
A\\text{ és invertible}
\\iff
\\operatorname{rang}(A)=n
}
$$

Per tant:

$$
\\boxed{
\\det(A)\\neq0
\\iff
\\operatorname{rang}(A)=n
\\iff
A^{-1}\\text{ existeix}
}
$$

---

# 14. Matriu adjunta

Una altra manera de calcular la inversa és mitjançant la **matriu adjunta**:

$$
\\boxed{
A^{-1}
=
\\frac{1}{\\det(A)}
\\operatorname{adj}(A)
}
$$

sempre que:

$$
\\det(A)\\neq0
$$

La matriu adjunta és la transposada de la matriu de cofactors:

$$
\\boxed{
\\operatorname{adj}(A)=C^T
}
$$

on $C$ és la matriu de cofactors.

Aquest mètode és útil teòricament, però per a matrius grans, Gauss-Jordan acostuma a ser més pràctic.

---

# 15. Idees clau

| Concepte                                 | Resultat                      |
| ---------------------------------------- | ----------------------------- |
| Matriu inversa                           | $A^{-1}$                      |
| Definició                                | $AA^{-1}=A^{-1}A=I$           |
| Condició                                 | $\\det(A)\\neq0$                |
| $\\det(A)=0$                              | No existeix la inversa        |
| $(A^{-1})^{-1}$                          | $A$                           |
| $(AB)^{-1}$                              | $B^{-1}A^{-1}$                |
| $(A^T)^{-1}$                             | $(A^{-1})^T$                  |
| $\\det(A^{-1})$                           | $\\frac{1}{\\det(A)}$           |
| Sistema $A\\mathbf{x}=\\mathbf{b}$         | $\\mathbf{x}=A^{-1}\\mathbf{b}$ |
| Rang d'una matriu invertible $n\\times n$ | $n$                           |

### Relació fonamental

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ existeix}
\\iff
\\operatorname{rang}(A)=n
}
$$
`,a=`# Inverse Matrices

The **inverse matrix** of a matrix is a matrix that, when multiplied by the original matrix, produces the **identity matrix**.

The inverse matrix is fundamental for solving systems of equations, transforming vectors, and studying linear transformations.

---

## 1. Definition

Let $A$ be a square matrix.

Its inverse is written as:

$$
A^{-1}
$$

and satisfies:

$$
\\boxed{AA^{-1}=A^{-1}A=I}
$$

where $I$ is the **identity matrix**.

For example:

$$
I=
\\begin{pmatrix}
1&0\\\\
0&1
\\end{pmatrix}
$$

Therefore, $A^{-1}$ is the matrix that "undoes" the effect of $A$.

---

## 2. When does an inverse matrix exist?

Not every matrix has an inverse.

A square matrix $A$ is invertible if and only if:

$$
\\boxed{\\det(A)\\neq0}
$$

Equivalently:

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ exists}
}
$$

If:

$$
\\det(A)=0
$$

the matrix has no inverse and is called a **singular matrix**.

---

## 3. Inverse of a $2\\times2$ matrix

Let:

$$
A=
\\begin{pmatrix}
a&b\\\\
c&d
\\end{pmatrix}
$$

Its inverse is:

$$
\\boxed{
A^{-1}
=
\\frac{1}{ad-bc}
\\begin{pmatrix}
d&-b\\\\
-c&a
\\end{pmatrix}
}
$$

provided that:

$$
ad-bc\\neq0
$$

That is:

$$
\\det(A)\\neq0
$$

---

## 4. Example: $2\\times2$

Consider:

$$
A=
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
$$

First, calculate the determinant:

$$
\\det(A)=(2)(1)-(1)(1)
$$

$$
\\det(A)=1
$$

Since:

$$
\\det(A)\\neq0
$$

the inverse exists.

Apply the formula:

$$
A^{-1}
=
\\frac{1}{1}
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
$$

Therefore:

$$
\\boxed{
A^{-1}=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
}
$$

We can verify it:

$$
AA^{-1}
=
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
$$

$$
=
\\begin{pmatrix}
1&0\\\\
0&1
\\end{pmatrix}
=I
$$

---

# 5. Example: a matrix without an inverse

Consider:

$$
A=
\\begin{pmatrix}
1&2\\\\
2&4
\\end{pmatrix}
$$

The determinant is:

$$
\\det(A)=(1)(4)-(2)(2)
$$

$$
=4-4=0
$$

Therefore:

$$
\\boxed{\\det(A)=0}
$$

and:

$$
\\boxed{A^{-1}\\text{ does not exist}}
$$

The matrix is **singular**.

---

# 6. Properties of the inverse matrix

## Inverse of the inverse

$$
\\boxed{(A^{-1})^{-1}=A}
$$

---

## Inverse of the identity matrix

$$
\\boxed{I^{-1}=I}
$$

---

## Inverse of a product

If $A$ and $B$ are invertible:

$$
\\boxed{(AB)^{-1}=B^{-1}A^{-1}}
$$

The order is reversed.

In general:

$$
(AB)^{-1}\\neq A^{-1}B^{-1}
$$

---

## Inverse of the transpose

$$
\\boxed{(A^T)^{-1}=(A^{-1})^T}
$$

---

## Determinant of the inverse

If $A$ is invertible:

$$
\\boxed{
\\det(A^{-1})=\\frac{1}{\\det(A)}
}
$$

---

# 7. Inverse and determinant

The relationship between the inverse and the determinant is:

$$
\\boxed{
A^{-1}\\text{ exists}
\\iff
\\det(A)\\neq0
}
$$

This means that the determinant immediately tells us whether a square matrix is invertible.

| Determinant    | Inverse matrix |
| -------------- | -------------- |
| $\\det(A)\\neq0$ | Exists         |
| $\\det(A)=0$    | Does not exist |

---

# 8. Calculating the inverse using Gauss-Jordan elimination

For larger matrices, we can calculate the inverse using **Gauss-Jordan elimination**.

We start with:

$$
A
$$

and construct the augmented matrix:

$$
\\boxed{[A\\mid I]}
$$

Then we apply elementary row operations until we obtain:

$$
[I\\mid A^{-1}]
$$

In other words:

$$
[A\\mid I]
\\longrightarrow
[I\\mid A^{-1}]
$$

---

# 9. Example using Gauss-Jordan elimination

Consider:

$$
A=
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
$$

Construct:

$$
[A\\mid I]
=
\\left[
\\begin{array}{cc|cc}
2&1&1&0\\\\
1&1&0&1
\\end{array}
\\right]
$$

Swap the rows:

$$
\\left[
\\begin{array}{cc|cc}
1&1&0&1\\\\
2&1&1&0
\\end{array}
\\right]
$$

Perform:

$$
F_2\\rightarrow F_2-2F_1
$$

We obtain:

$$
\\left[
\\begin{array}{cc|cc}
1&1&0&1\\\\
0&-1&1&-2
\\end{array}
\\right]
$$

Now:

$$
F_2\\rightarrow -F_2
$$

giving:

$$
\\left[
\\begin{array}{cc|cc}
1&1&0&1\\\\
0&1&-1&2
\\end{array}
\\right]
$$

Finally:

$$
F_1\\rightarrow F_1-F_2
$$

We obtain:

$$
\\left[
\\begin{array}{cc|cc}
1&0&1&-1\\\\
0&1&-1&2
\\end{array}
\\right]
$$

Therefore:

$$
\\boxed{
A^{-1}
=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
}
$$

---

# 10. Inverse matrices and systems of equations

One of the most important applications of inverse matrices is solving systems of equations.

Consider:

$$
A\\mathbf{x}=\\mathbf{b}
$$

If $A$ is invertible, multiply both sides by $A^{-1}$:

$$
A^{-1}A\\mathbf{x}=A^{-1}\\mathbf{b}
$$

Since:

$$
A^{-1}A=I
$$

we obtain:

$$
I\\mathbf{x}=A^{-1}\\mathbf{b}
$$

Therefore:

$$
\\boxed{\\mathbf{x}=A^{-1}\\mathbf{b}}
$$

---

# 11. Example

Consider the system:

$$
\\begin{cases}
2x+y=5\\\\
x+y=3
\\end{cases}
$$

We can write it as:

$$
\\begin{pmatrix}
2&1\\\\
1&1
\\end{pmatrix}
\\begin{pmatrix}
x\\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
5\\\\
3
\\end{pmatrix}
$$

That is:

$$
A\\mathbf{x}=\\mathbf{b}
$$

We know that:

$$
A^{-1}
=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
$$

Therefore:

$$
\\mathbf{x}=A^{-1}\\mathbf{b}
$$

$$
\\mathbf{x}
=
\\begin{pmatrix}
1&-1\\\\
-1&2
\\end{pmatrix}
\\begin{pmatrix}
5\\\\
3
\\end{pmatrix}
$$

$$
=
\\begin{pmatrix}
5-3\\\\
-5+6
\\end{pmatrix}
$$

$$
=
\\begin{pmatrix}
2\\\\
1
\\end{pmatrix}
$$

Therefore:

$$
\\boxed{x=2,\\qquad y=1}
$$

---

# 12. Geometric interpretation

An invertible matrix represents a transformation that can be **undone**.

If:

$$
\\mathbf{y}=A\\mathbf{x}
$$

we can recover $\\mathbf{x}$ using:

$$
\\boxed{\\mathbf{x}=A^{-1}\\mathbf{y}}
$$

Therefore:

- $A$ applies a transformation.
- $A^{-1}$ reverses that transformation.

If:

$$
\\det(A)=0
$$

the transformation reduces the dimension of the space and cannot be completely reversed.

---

# 13. Relationship with rank

For an $n\\times n$ matrix:

$$
\\boxed{
A\\text{ is invertible}
\\iff
\\operatorname{rank}(A)=n
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

---

# 14. Adjugate matrix

Another way to calculate the inverse is using the **adjugate matrix**:

$$
\\boxed{
A^{-1}
=
\\frac{1}{\\det(A)}
\\operatorname{adj}(A)
}
$$

provided that:

$$
\\det(A)\\neq0
$$

The adjugate matrix is the transpose of the cofactor matrix:

$$
\\boxed{
\\operatorname{adj}(A)=C^T
}
$$

where $C$ is the cofactor matrix.

This method is useful theoretically, but for larger matrices, Gauss-Jordan elimination is usually more practical.

---

# 15. Key ideas

| Concept                                  | Result                        |
| ---------------------------------------- | ----------------------------- |
| Inverse matrix                           | $A^{-1}$                      |
| Definition                               | $AA^{-1}=A^{-1}A=I$           |
| Condition                                | $\\det(A)\\neq0$                |
| $\\det(A)=0$                              | Inverse does not exist        |
| $(A^{-1})^{-1}$                          | $A$                           |
| $(AB)^{-1}$                              | $B^{-1}A^{-1}$                |
| $(A^T)^{-1}$                             | $(A^{-1})^T$                  |
| $\\det(A^{-1})$                           | $\\frac{1}{\\det(A)}$           |
| System $A\\mathbf{x}=\\mathbf{b}$          | $\\mathbf{x}=A^{-1}\\mathbf{b}$ |
| Rank of an invertible $n\\times n$ matrix | $n$                           |

### Fundamental relationship

$$
\\boxed{
\\det(A)\\neq0
\\iff
A^{-1}\\text{ exists}
\\iff
\\operatorname{rank}(A)=n
}
$$
`;function o(){let{locale:o}=t();return e(n,{id:`inverse-matrix`,content:{es:r,ca:i,en:a}[o]})}export{o as default};