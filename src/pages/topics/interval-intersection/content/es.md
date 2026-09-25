# Intersección de intervalos

La **intersección de intervalos** permite encontrar los números que pertenecen simultáneamente a dos o más intervalos.

Es una herramienta fundamental para trabajar con desigualdades, dominios, sistemas de inecuaciones y conjuntos de soluciones.

## 1. Qué es un intervalo

Un intervalo representa un conjunto de números reales comprendidos entre determinados extremos.

Por ejemplo:

$$
[2,5]
$$

representa todos los números reales $x$ que cumplen:

$$
2\leq x\leq5
$$

Los extremos pueden incluirse o excluirse.

### Intervalo cerrado

$$
[a,b]
$$

Significa:

$$
a\leq x\leq b
$$

Los dos extremos están incluidos.

### Intervalo abierto

$$
(a,b)
$$

Significa:

$$
a<x<b
$$

Los dos extremos están excluidos.

### Intervalo semiabierto

$$
[a,b)
$$

Significa:

$$
a\leq x<b
$$

El extremo $a$ está incluido y $b$ está excluido.

Análogamente:

$$
(a,b]
$$

significa:

$$
a<x\leq b
$$

## 2. Qué significa intersección

La intersección de dos conjuntos contiene los elementos que pertenecen a **ambos conjuntos al mismo tiempo**.

Se representa mediante:

$$
A\cap B
$$

Por ejemplo:

$$
A=[1,6]
$$

y:

$$
B=[4,9]
$$

Los números que pertenecen simultáneamente a ambos intervalos son:

$$
[4,6]
$$

Por tanto:

$$
\boxed{[1,6]\cap[4,9]=[4,6]}
$$

## 3. Interpretación sobre la recta real

La intersección puede visualizarse como la zona donde dos intervalos se superponen.

Para:

$$
A=[1,6]
$$

y:

$$
B=[4,9]
$$

la zona común es:

$$
[4,6]
$$

El intervalo de la intersección comienza en el mayor de los extremos izquierdos y termina en el menor de los extremos derechos.

En general:

$$
\boxed{\text{extremo izquierdo}=\max(a,c)}
$$

$$
\boxed{\text{extremo derecho}=\min(b,d)}
$$

para:

$$
[a,b]\cap[c,d]
$$

siempre que exista solapamiento.

## 4. Intersección de intervalos cerrados

Consideremos:

$$
A=[2,8]
$$

y:

$$
B=[5,10]
$$

El mayor extremo izquierdo es:

$$
\max(2,5)=5
$$

El menor extremo derecho es:

$$
\min(8,10)=8
$$

Por tanto:

$$
\boxed{A\cap B=[5,8]}
$$

## 5. Intersección de intervalos abiertos

Consideremos:

$$
A=(2,8)
$$

y:

$$
B=(5,10)
$$

Los extremos de la intersección son $5$ y $8$.

Como ambos intervalos excluyen esos extremos:

$$
\boxed{A\cap B=(5,8)}
$$

## 6. Intersección con extremos diferentes

Consideremos:

$$
A=[2,8)
$$

y:

$$
B=(5,10]
$$

El resultado es:

$$
(5,8)
$$

porque:

- $5$ está excluido por $B$.
- $8$ está excluido por $A$.

Por tanto:

$$
\boxed{[2,8)\cap(5,10]=(5,8)}
$$

## 7. Cómo decidir si un extremo está incluido

Para que un extremo pertenezca a la intersección, debe pertenecer a **todos los intervalos** que estamos intersectando.

Por ejemplo:

$$
[2,7]\cap(5,10]
$$

El extremo $5$ no pertenece al segundo intervalo:

$$
5\notin(5,10]
$$

Por tanto, no pertenece a la intersección.

El extremo $7$ sí pertenece a ambos:

$$
7\in[2,7]
$$

y:

$$
7\in(5,10]
$$

Por tanto:

$$
\boxed{[2,7]\cap(5,10]=(5,7]}
$$

Regla fundamental:

> Un extremo solo se incluye en la intersección si todos los intervalos lo incluyen.

## 8. Intervalos que no se superponen

Consideremos:

$$
A=[1,3]
$$

y:

$$
B=[5,8]
$$

No existe ningún número real que pertenezca simultáneamente a ambos.

Por tanto:

$$
\boxed{A\cap B=\varnothing}
$$

El símbolo $\varnothing$ representa el conjunto vacío.

## 9. Intervalos que solo se tocan

Consideremos:

$$
A=[1,4]
$$

y:

$$
B=(4,8]
$$

El primer intervalo contiene $4$:

$$
4\in[1,4]
$$

pero el segundo no:

$$
4\notin(4,8]
$$

Por tanto:

$$
\boxed{[1,4]\cap(4,8]=\varnothing}
$$

En cambio:

$$
[1,4]\cap[4,8]=\{4\}
$$

Aquí la intersección contiene únicamente el número $4$.

## 10. Un intervalo contenido en otro

Si un intervalo está completamente dentro de otro, la intersección es el intervalo más pequeño, teniendo en cuenta sus extremos.

Por ejemplo:

$$
A=[1,10]
$$

y:

$$
B=[3,7]
$$

Como:

$$
B\subseteq A
$$

tenemos:

$$
\boxed{A\cap B=[3,7]}
$$

## 11. Intersección de intervalos infinitos

Los intervalos también pueden extenderse hasta el infinito.

Por ejemplo:

$$
A=[2,\infty)
$$

y:

$$
B=(-\infty,7]
$$

Los números comunes cumplen:

$$
2\leq x\leq7
$$

Por tanto:

$$
\boxed{A\cap B=[2,7]}
$$

## 12. Intersección con $+\infty$

Consideremos:

$$
A=(3,\infty)
$$

y:

$$
B=[5,\infty)
$$

El segundo intervalo está contenido en el primero:

$$
B\subset A
$$

Por tanto:

$$
\boxed{A\cap B=[5,\infty)}
$$

El infinito nunca se incluye mediante un corchete.

Siempre se escribe:

$$
(a,\infty)
$$

o:

$$
[a,\infty)
$$

## 13. Intersección con $-\infty$

Por ejemplo:

$$
A=(-\infty,5]
$$

y:

$$
B=(-\infty,2)
$$

El intervalo más restrictivo es:

$$
(-\infty,2)
$$

Por tanto:

$$
\boxed{A\cap B=(-\infty,2)}
$$

## 14. Intersección de tres intervalos

La intersección puede aplicarse a más de dos intervalos.

Por ejemplo:

$$
A=[1,9]
$$

$$
B=[3,8]
$$

$$
C=[5,12]
$$

Primero:

$$
A\cap B=[3,8]
$$

Después:

$$
[3,8]\cap[5,12]=[5,8]
$$

Por tanto:

$$
\boxed{A\cap B\cap C=[5,8]}
$$

## 15. Regla general para varios intervalos

Para varios intervalos, el extremo izquierdo de la intersección viene determinado por el mayor de todos los extremos izquierdos y el extremo derecho por el menor de todos los extremos derechos.

Para:

$$
I_1,I_2,\ldots,I_n
$$

si sus extremos son:

$$
[a_1,b_1],\ [a_2,b_2],\ldots,[a_n,b_n]
$$

entonces los candidatos para la intersección son:

$$
\max(a_1,a_2,\ldots,a_n)
$$

y:

$$
\min(b_1,b_2,\ldots,b_n)
$$

Si:

$$
\max(a_1,\ldots,a_n)>\min(b_1,\ldots,b_n)
$$

la intersección es vacía.

Si ambos valores son iguales, la intersección puede ser el conjunto formado por ese único punto, pero solo si todos los intervalos contienen dicho punto.

## 16. Intersección y desigualdades

La intersección aparece constantemente al resolver sistemas de desigualdades.

Por ejemplo:

$$
x\geq2
$$

y:

$$
x<7
$$

Las soluciones de la primera desigualdad son:

$$
[2,\infty)
$$

Las soluciones de la segunda son:

$$
(-\infty,7)
$$

Por tanto:

$$
[2,\infty)\cap(-\infty,7)=[2,7)
$$

La solución del sistema es:

$$
\boxed{x\in[2,7)}
$$

## 17. Sistemas de desigualdades

Consideremos:

$$
\begin{cases}
x>1\\
x\leq5
\end{cases}
$$

Cada desigualdad define un intervalo:

$$
(1,\infty)
$$

y:

$$
(-\infty,5]
$$

Su intersección es:

$$
\boxed{(1,5]}
$$

Por tanto:

$$
\boxed{1<x\leq5}
$$

## 18. Intersección de soluciones

Cuando un problema contiene varias condiciones simultáneas, debemos utilizar la intersección.

Por ejemplo:

$$
x\geq-2
$$

$$
x<4
$$

$$
x\neq1
$$

Las dos primeras condiciones producen:

$$
[-2,4)
$$

La tercera condición elimina $1$:

$$
[-2,1)\cup(1,4)
$$

Por tanto:

$$
\boxed{x\in[-2,1)\cup(1,4)}
$$

## 19. Diferencia entre intersección y unión

Es importante distinguir:

$$
\cap
$$

de:

$$
\cup
$$

La **intersección** representa los elementos comunes:

$$
A\cap B
$$

La **unión** representa los elementos que pertenecen a $A$, a $B$ o a ambos:

$$
A\cup B
$$

Por ejemplo:

$$
A=[1,5]
$$

$$
B=[4,8]
$$

Entonces:

$$
A\cap B=[4,5]
$$

mientras que:

$$
A\cup B=[1,8]
$$

## 20. Método rápido

Para intersectar dos intervalos:

1. Busca el mayor de los extremos izquierdos.
2. Busca el menor de los extremos derechos.
3. Comprueba si existe solapamiento.
4. Decide si cada extremo está incluido.
5. Escribe el intervalo resultante.

### Ejemplo

$$
A=(-2,7]
$$

$$
B=[3,10)
$$

Extremo izquierdo:

$$
\max(-2,3)=3
$$

Extremo derecho:

$$
\min(7,10)=7
$$

El $3$ está incluido en $B$ pero no en $A$.

El $7$ está incluido en ambos.

Por tanto:

$$
\boxed{A\cap B=(3,7]}
$$

## 21. Procedimiento para sistemas de desigualdades

Cuando tenemos varias desigualdades:

1. Resuelve cada desigualdad por separado.
2. Convierte cada conjunto de soluciones en un intervalo.
3. Intersecta todos los intervalos.
4. Comprueba los extremos.
5. Escribe la solución final.

### Ejemplo completo

Resolver:

$$
\begin{cases}
2x-4\geq0\\
3x+6<18
\end{cases}
$$

Primera desigualdad:

$$
2x\geq4
$$

$$
x\geq2
$$

Por tanto:

$$
x\in[2,\infty)
$$

Segunda desigualdad:

$$
3x<12
$$

$$
x<4
$$

Por tanto:

$$
x\in(-\infty,4)
$$

Intersectamos:

$$
[2,\infty)\cap(-\infty,4)
$$

y obtenemos:

$$
\boxed{x\in[2,4)}
$$

## 22. Intersección de intervalos con extremos iguales

Los extremos iguales requieren especial atención.

Por ejemplo:

$$
[1,5)\cap[5,9]
$$

El primer intervalo no contiene $5$:

$$
5\notin[1,5)
$$

Por tanto:

$$
\boxed{[1,5)\cap[5,9]=\varnothing}
$$

En cambio:

$$
[1,5]\cap[5,9]=\{5\}
$$

## 23. Propiedades de la intersección

### Conmutativa

$$
A\cap B=B\cap A
$$

El orden no importa.

### Asociativa

$$
(A\cap B)\cap C=A\cap(B\cap C)
$$

Podemos agrupar los intervalos de diferentes maneras.

### Idempotente

$$
A\cap A=A
$$

Intersectar un conjunto consigo mismo no lo modifica.

### Conjunto vacío

$$
A\cap\varnothing=\varnothing
$$

El conjunto vacío no tiene elementos comunes con ningún conjunto.

## 24. Intersección y subconjuntos

Si:

$$
A\subseteq B
$$

entonces:

$$
A\cap B=A
$$

Por ejemplo:

$$
[3,5]\subseteq[1,10]
$$

por lo que:

$$
[3,5]\cap[1,10]=[3,5]
$$

## 25. Errores frecuentes

### Confundir intersección con unión

Para condiciones simultáneas utilizamos:

$$
\cap
$$

no:

$$
\cup
$$

### Elegir el extremo izquierdo incorrecto

En una intersección debemos escoger el **mayor** extremo izquierdo.

### Elegir el extremo derecho incorrecto

Debemos escoger el **menor** extremo derecho.

### Ignorar los paréntesis y corchetes

Los extremos pueden estar incluidos en un intervalo y excluidos en otro.

### Incluir un extremo que algún intervalo excluye

En una intersección, un extremo solo se incluye si pertenece a todos los intervalos relevantes.

### Incluir el infinito

Nunca escribimos:

$$
[a,\infty]
$$

Debe escribirse:

$$
[a,\infty)
$$

## 26. Resumen

| Situación                | Resultado                                   |
| ------------------------ | ------------------------------------------- |
| Intersección             | Elementos comunes                           |
| Símbolo                  | $\cap$                                      |
| Extremo izquierdo        | Mayor de los extremos izquierdos            |
| Extremo derecho          | Menor de los extremos derechos              |
| Sin solapamiento         | $\varnothing$                               |
| Condiciones simultáneas  | Intersección                                |
| Condiciones alternativas | Unión                                       |
| Extremo incluido         | Debe estar incluido en todos los intervalos |
| Infinito                 | Siempre con paréntesis                      |

Para dos intervalos:

$$
[a,b]\cap[c,d]
$$

el intervalo común se obtiene tomando:

$$
\max(a,c)
$$

como extremo izquierdo y:

$$
\min(b,d)
$$

como extremo derecho, siempre que exista solapamiento.

## 27. Idea fundamental

La intersección representa aquello que **todas las condiciones tienen en común**.

Si:

$$
x\in A
$$

y:

$$
x\in B
$$

entonces:

$$
x\in A\cap B
$$

Por eso, al resolver varias desigualdades que deben cumplirse simultáneamente, buscamos la intersección de sus conjuntos de soluciones:

$$
\boxed{\text{solución conjunta}=\text{intersección de las soluciones}}
$$
