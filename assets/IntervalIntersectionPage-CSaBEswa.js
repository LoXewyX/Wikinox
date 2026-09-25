import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t}from"./index-CQZABaDC.js";import{t as n}from"./TopicPage-DyShI14R.js";var r=`# Intersección de intervalos

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
2\\leq x\\leq5
$$

Los extremos pueden incluirse o excluirse.

### Intervalo cerrado

$$
[a,b]
$$

Significa:

$$
a\\leq x\\leq b
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
a\\leq x<b
$$

El extremo $a$ está incluido y $b$ está excluido.

Análogamente:

$$
(a,b]
$$

significa:

$$
a<x\\leq b
$$

## 2. Qué significa intersección

La intersección de dos conjuntos contiene los elementos que pertenecen a **ambos conjuntos al mismo tiempo**.

Se representa mediante:

$$
A\\cap B
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
\\boxed{[1,6]\\cap[4,9]=[4,6]}
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
\\boxed{\\text{extremo izquierdo}=\\max(a,c)}
$$

$$
\\boxed{\\text{extremo derecho}=\\min(b,d)}
$$

para:

$$
[a,b]\\cap[c,d]
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
\\max(2,5)=5
$$

El menor extremo derecho es:

$$
\\min(8,10)=8
$$

Por tanto:

$$
\\boxed{A\\cap B=[5,8]}
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
\\boxed{A\\cap B=(5,8)}
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
\\boxed{[2,8)\\cap(5,10]=(5,8)}
$$

## 7. Cómo decidir si un extremo está incluido

Para que un extremo pertenezca a la intersección, debe pertenecer a **todos los intervalos** que estamos intersectando.

Por ejemplo:

$$
[2,7]\\cap(5,10]
$$

El extremo $5$ no pertenece al segundo intervalo:

$$
5\\notin(5,10]
$$

Por tanto, no pertenece a la intersección.

El extremo $7$ sí pertenece a ambos:

$$
7\\in[2,7]
$$

y:

$$
7\\in(5,10]
$$

Por tanto:

$$
\\boxed{[2,7]\\cap(5,10]=(5,7]}
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
\\boxed{A\\cap B=\\varnothing}
$$

El símbolo $\\varnothing$ representa el conjunto vacío.

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
4\\in[1,4]
$$

pero el segundo no:

$$
4\\notin(4,8]
$$

Por tanto:

$$
\\boxed{[1,4]\\cap(4,8]=\\varnothing}
$$

En cambio:

$$
[1,4]\\cap[4,8]=\\{4\\}
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
B\\subseteq A
$$

tenemos:

$$
\\boxed{A\\cap B=[3,7]}
$$

## 11. Intersección de intervalos infinitos

Los intervalos también pueden extenderse hasta el infinito.

Por ejemplo:

$$
A=[2,\\infty)
$$

y:

$$
B=(-\\infty,7]
$$

Los números comunes cumplen:

$$
2\\leq x\\leq7
$$

Por tanto:

$$
\\boxed{A\\cap B=[2,7]}
$$

## 12. Intersección con $+\\infty$

Consideremos:

$$
A=(3,\\infty)
$$

y:

$$
B=[5,\\infty)
$$

El segundo intervalo está contenido en el primero:

$$
B\\subset A
$$

Por tanto:

$$
\\boxed{A\\cap B=[5,\\infty)}
$$

El infinito nunca se incluye mediante un corchete.

Siempre se escribe:

$$
(a,\\infty)
$$

o:

$$
[a,\\infty)
$$

## 13. Intersección con $-\\infty$

Por ejemplo:

$$
A=(-\\infty,5]
$$

y:

$$
B=(-\\infty,2)
$$

El intervalo más restrictivo es:

$$
(-\\infty,2)
$$

Por tanto:

$$
\\boxed{A\\cap B=(-\\infty,2)}
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
A\\cap B=[3,8]
$$

Después:

$$
[3,8]\\cap[5,12]=[5,8]
$$

Por tanto:

$$
\\boxed{A\\cap B\\cap C=[5,8]}
$$

## 15. Regla general para varios intervalos

Para varios intervalos, el extremo izquierdo de la intersección viene determinado por el mayor de todos los extremos izquierdos y el extremo derecho por el menor de todos los extremos derechos.

Para:

$$
I_1,I_2,\\ldots,I_n
$$

si sus extremos son:

$$
[a_1,b_1],\\ [a_2,b_2],\\ldots,[a_n,b_n]
$$

entonces los candidatos para la intersección son:

$$
\\max(a_1,a_2,\\ldots,a_n)
$$

y:

$$
\\min(b_1,b_2,\\ldots,b_n)
$$

Si:

$$
\\max(a_1,\\ldots,a_n)>\\min(b_1,\\ldots,b_n)
$$

la intersección es vacía.

Si ambos valores son iguales, la intersección puede ser el conjunto formado por ese único punto, pero solo si todos los intervalos contienen dicho punto.

## 16. Intersección y desigualdades

La intersección aparece constantemente al resolver sistemas de desigualdades.

Por ejemplo:

$$
x\\geq2
$$

y:

$$
x<7
$$

Las soluciones de la primera desigualdad son:

$$
[2,\\infty)
$$

Las soluciones de la segunda son:

$$
(-\\infty,7)
$$

Por tanto:

$$
[2,\\infty)\\cap(-\\infty,7)=[2,7)
$$

La solución del sistema es:

$$
\\boxed{x\\in[2,7)}
$$

## 17. Sistemas de desigualdades

Consideremos:

$$
\\begin{cases}
x>1\\\\
x\\leq5
\\end{cases}
$$

Cada desigualdad define un intervalo:

$$
(1,\\infty)
$$

y:

$$
(-\\infty,5]
$$

Su intersección es:

$$
\\boxed{(1,5]}
$$

Por tanto:

$$
\\boxed{1<x\\leq5}
$$

## 18. Intersección de soluciones

Cuando un problema contiene varias condiciones simultáneas, debemos utilizar la intersección.

Por ejemplo:

$$
x\\geq-2
$$

$$
x<4
$$

$$
x\\neq1
$$

Las dos primeras condiciones producen:

$$
[-2,4)
$$

La tercera condición elimina $1$:

$$
[-2,1)\\cup(1,4)
$$

Por tanto:

$$
\\boxed{x\\in[-2,1)\\cup(1,4)}
$$

## 19. Diferencia entre intersección y unión

Es importante distinguir:

$$
\\cap
$$

de:

$$
\\cup
$$

La **intersección** representa los elementos comunes:

$$
A\\cap B
$$

La **unión** representa los elementos que pertenecen a $A$, a $B$ o a ambos:

$$
A\\cup B
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
A\\cap B=[4,5]
$$

mientras que:

$$
A\\cup B=[1,8]
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
\\max(-2,3)=3
$$

Extremo derecho:

$$
\\min(7,10)=7
$$

El $3$ está incluido en $B$ pero no en $A$.

El $7$ está incluido en ambos.

Por tanto:

$$
\\boxed{A\\cap B=(3,7]}
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
\\begin{cases}
2x-4\\geq0\\\\
3x+6<18
\\end{cases}
$$

Primera desigualdad:

$$
2x\\geq4
$$

$$
x\\geq2
$$

Por tanto:

$$
x\\in[2,\\infty)
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
x\\in(-\\infty,4)
$$

Intersectamos:

$$
[2,\\infty)\\cap(-\\infty,4)
$$

y obtenemos:

$$
\\boxed{x\\in[2,4)}
$$

## 22. Intersección de intervalos con extremos iguales

Los extremos iguales requieren especial atención.

Por ejemplo:

$$
[1,5)\\cap[5,9]
$$

El primer intervalo no contiene $5$:

$$
5\\notin[1,5)
$$

Por tanto:

$$
\\boxed{[1,5)\\cap[5,9]=\\varnothing}
$$

En cambio:

$$
[1,5]\\cap[5,9]=\\{5\\}
$$

## 23. Propiedades de la intersección

### Conmutativa

$$
A\\cap B=B\\cap A
$$

El orden no importa.

### Asociativa

$$
(A\\cap B)\\cap C=A\\cap(B\\cap C)
$$

Podemos agrupar los intervalos de diferentes maneras.

### Idempotente

$$
A\\cap A=A
$$

Intersectar un conjunto consigo mismo no lo modifica.

### Conjunto vacío

$$
A\\cap\\varnothing=\\varnothing
$$

El conjunto vacío no tiene elementos comunes con ningún conjunto.

## 24. Intersección y subconjuntos

Si:

$$
A\\subseteq B
$$

entonces:

$$
A\\cap B=A
$$

Por ejemplo:

$$
[3,5]\\subseteq[1,10]
$$

por lo que:

$$
[3,5]\\cap[1,10]=[3,5]
$$

## 25. Errores frecuentes

### Confundir intersección con unión

Para condiciones simultáneas utilizamos:

$$
\\cap
$$

no:

$$
\\cup
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
[a,\\infty]
$$

Debe escribirse:

$$
[a,\\infty)
$$

## 26. Resumen

| Situación                | Resultado                                   |
| ------------------------ | ------------------------------------------- |
| Intersección             | Elementos comunes                           |
| Símbolo                  | $\\cap$                                      |
| Extremo izquierdo        | Mayor de los extremos izquierdos            |
| Extremo derecho          | Menor de los extremos derechos              |
| Sin solapamiento         | $\\varnothing$                               |
| Condiciones simultáneas  | Intersección                                |
| Condiciones alternativas | Unión                                       |
| Extremo incluido         | Debe estar incluido en todos los intervalos |
| Infinito                 | Siempre con paréntesis                      |

Para dos intervalos:

$$
[a,b]\\cap[c,d]
$$

el intervalo común se obtiene tomando:

$$
\\max(a,c)
$$

como extremo izquierdo y:

$$
\\min(b,d)
$$

como extremo derecho, siempre que exista solapamiento.

## 27. Idea fundamental

La intersección representa aquello que **todas las condiciones tienen en común**.

Si:

$$
x\\in A
$$

y:

$$
x\\in B
$$

entonces:

$$
x\\in A\\cap B
$$

Por eso, al resolver varias desigualdades que deben cumplirse simultáneamente, buscamos la intersección de sus conjuntos de soluciones:

$$
\\boxed{\\text{solución conjunta}=\\text{intersección de las soluciones}}
$$
`,i=`# Intersecció d'intervals

La **intersecció d'intervals** permet trobar els nombres que pertanyen simultàniament a dos o més intervals.

És una eina fonamental per treballar amb desigualtats, dominis, sistemes de desigualtats i conjunts de solucions.

## 1. Què és un interval

Un interval representa un conjunt de nombres reals compresos entre determinats extrems.

Per exemple:

$$
[2,5]
$$

representa tots els nombres reals $x$ que compleixen:

$$
2\\leq x\\leq5
$$

Els extrems poden estar inclosos o exclosos.

### Interval tancat

$$
[a,b]
$$

Significa:

$$
a\\leq x\\leq b
$$

Els dos extrems estan inclosos.

### Interval obert

$$
(a,b)
$$

Significa:

$$
a<x<b
$$

Els dos extrems estan exclosos.

### Interval semiobert

$$
[a,b)
$$

Significa:

$$
a\\leq x<b
$$

L'extrem $a$ està inclòs i $b$ està exclòs.

De manera anàloga:

$$
(a,b]
$$

significa:

$$
a<x\\leq b
$$

## 2. Què significa intersecció

La intersecció de dos conjunts conté els elements que pertanyen a **tots dos conjunts alhora**.

Es representa mitjançant:

$$
A\\cap B
$$

Per exemple:

$$
A=[1,6]
$$

i:

$$
B=[4,9]
$$

Els nombres que pertanyen simultàniament als dos intervals són:

$$
[4,6]
$$

Per tant:

$$
\\boxed{[1,6]\\cap[4,9]=[4,6]}
$$

## 3. Interpretació sobre la recta real

La intersecció es pot visualitzar com la zona on dos intervals se superposen.

Per a:

$$
A=[1,6]
$$

i:

$$
B=[4,9]
$$

la zona comuna és:

$$
[4,6]
$$

L'interval de la intersecció comença en el més gran dels extrems esquerres i acaba en el més petit dels extrems drets.

En general:

$$
\\boxed{\\text{extrem esquerre}=\\max(a,c)}
$$

$$
\\boxed{\\text{extrem dret}=\\min(b,d)}
$$

per a:

$$
[a,b]\\cap[c,d]
$$

sempre que hi hagi solapament.

## 4. Intersecció d'intervals tancats

Considerem:

$$
A=[2,8]
$$

i:

$$
B=[5,10]
$$

El més gran dels extrems esquerres és:

$$
\\max(2,5)=5
$$

El més petit dels extrems drets és:

$$
\\min(8,10)=8
$$

Per tant:

$$
\\boxed{A\\cap B=[5,8]}
$$

## 5. Intersecció d'intervals oberts

Considerem:

$$
A=(2,8)
$$

i:

$$
B=(5,10)
$$

Els extrems de la intersecció són $5$ i $8$.

Com que tots dos intervals exclouen aquests extrems:

$$
\\boxed{A\\cap B=(5,8)}
$$

## 6. Intersecció amb extrems diferents

Considerem:

$$
A=[2,8)
$$

i:

$$
B=(5,10]
$$

El resultat és:

$$
(5,8)
$$

perquè:

- $5$ està exclòs per $B$.
- $8$ està exclòs per $A$.

Per tant:

$$
\\boxed{[2,8)\\cap(5,10]=(5,8)}
$$

## 7. Com decidir si un extrem està inclòs

Perquè un extrem pertanyi a la intersecció, ha de pertànyer a **tots els intervals** que estem intersectant.

Per exemple:

$$
[2,7]\\cap(5,10]
$$

L'extrem $5$ no pertany al segon interval:

$$
5\\notin(5,10]
$$

Per tant, no pertany a la intersecció.

L'extrem $7$ sí que pertany a tots dos:

$$
7\\in[2,7]
$$

i:

$$
7\\in(5,10]
$$

Per tant:

$$
\\boxed{[2,7]\\cap(5,10]=(5,7]}
$$

Regla fonamental:

> Un extrem només s'inclou en la intersecció si tots els intervals l'inclouen.

## 8. Intervals que no se superposen

Considerem:

$$
A=[1,3]
$$

i:

$$
B=[5,8]
$$

No existeix cap nombre real que pertanyi simultàniament als dos.

Per tant:

$$
\\boxed{A\\cap B=\\varnothing}
$$

El símbol $\\varnothing$ representa el conjunt buit.

## 9. Intervals que només es toquen

Considerem:

$$
A=[1,4]
$$

i:

$$
B=(4,8]
$$

El primer interval conté $4$:

$$
4\\in[1,4]
$$

però el segon no:

$$
4\\notin(4,8]
$$

Per tant:

$$
\\boxed{[1,4]\\cap(4,8]=\\varnothing}
$$

En canvi:

$$
[1,4]\\cap[4,8]=\\{4\\}
$$

Aquí la intersecció conté únicament el nombre $4$.

## 10. Un interval contingut en un altre

Si un interval està completament dins d'un altre, la intersecció és l'interval més petit, tenint en compte els seus extrems.

Per exemple:

$$
A=[1,10]
$$

i:

$$
B=[3,7]
$$

Com que:

$$
B\\subseteq A
$$

tenim:

$$
\\boxed{A\\cap B=[3,7]}
$$

## 11. Intersecció d'intervals infinits

Els intervals també poden estendre's fins a l'infinit.

Per exemple:

$$
A=[2,\\infty)
$$

i:

$$
B=(-\\infty,7]
$$

Els nombres comuns compleixen:

$$
2\\leq x\\leq7
$$

Per tant:

$$
\\boxed{A\\cap B=[2,7]}
$$

## 12. Intersecció amb $+\\infty$

Considerem:

$$
A=(3,\\infty)
$$

i:

$$
B=[5,\\infty)
$$

El segon interval està contingut en el primer:

$$
B\\subset A
$$

Per tant:

$$
\\boxed{A\\cap B=[5,\\infty)}
$$

L'infinit mai s'inclou mitjançant un claudàtor.

Sempre s'escriu:

$$
(a,\\infty)
$$

o:

$$
[a,\\infty)
$$

## 13. Intersecció amb $-\\infty$

Per exemple:

$$
A=(-\\infty,5]
$$

i:

$$
B=(-\\infty,2)
$$

L'interval més restrictiu és:

$$
(-\\infty,2)
$$

Per tant:

$$
\\boxed{A\\cap B=(-\\infty,2)}
$$

## 14. Intersecció de tres intervals

La intersecció es pot aplicar a més de dos intervals.

Per exemple:

$$
A=[1,9]
$$

$$
B=[3,8]
$$

$$
C=[5,12]
$$

Primer:

$$
A\\cap B=[3,8]
$$

Després:

$$
[3,8]\\cap[5,12]=[5,8]
$$

Per tant:

$$
\\boxed{A\\cap B\\cap C=[5,8]}
$$

## 15. Regla general per a diversos intervals

Per a diversos intervals, l'extrem esquerre de la intersecció ve determinat pel més gran de tots els extrems esquerres i l'extrem dret pel més petit de tots els extrems drets.

Per a:

$$
I_1,I_2,\\ldots,I_n
$$

si els seus extrems són:

$$
[a_1,b_1],\\ [a_2,b_2],\\ldots,[a_n,b_n]
$$

els candidats per a la intersecció són:

$$
\\max(a_1,a_2,\\ldots,a_n)
$$

i:

$$
\\min(b_1,b_2,\\ldots,b_n)
$$

Si:

$$
\\max(a_1,\\ldots,a_n)>\\min(b_1,\\ldots,b_n)
$$

la intersecció és buida.

Si tots dos valors són iguals, la intersecció pot ser el conjunt format per aquest únic punt, però només si tots els intervals contenen aquest punt.

## 16. Intersecció i desigualtats

La intersecció apareix constantment en resoldre sistemes de desigualtats.

Per exemple:

$$
x\\geq2
$$

i:

$$
x<7
$$

Les solucions de la primera desigualtat són:

$$
[2,\\infty)
$$

Les solucions de la segona són:

$$
(-\\infty,7)
$$

Per tant:

$$
[2,\\infty)\\cap(-\\infty,7)=[2,7)
$$

La solució del sistema és:

$$
\\boxed{x\\in[2,7)}
$$

## 17. Sistemes de desigualtats

Considerem:

$$
\\begin{cases}
x>1\\\\
x\\leq5
\\end{cases}
$$

Cada desigualtat defineix un interval:

$$
(1,\\infty)
$$

i:

$$
(-\\infty,5]
$$

La seva intersecció és:

$$
\\boxed{(1,5]}
$$

Per tant:

$$
\\boxed{1<x\\leq5}
$$

## 18. Intersecció de solucions

Quan un problema conté diverses condicions simultànies, hem d'utilitzar la intersecció.

Per exemple:

$$
x\\geq-2
$$

$$
x<4
$$

$$
x\\neq1
$$

Les dues primeres condicions produeixen:

$$
[-2,4)
$$

La tercera condició elimina $1$:

$$
[-2,1)\\cup(1,4)
$$

Per tant:

$$
\\boxed{x\\in[-2,1)\\cup(1,4)}
$$

## 19. Diferència entre intersecció i unió

És important distingir:

$$
\\cap
$$

de:

$$
\\cup
$$

La **intersecció** representa els elements comuns:

$$
A\\cap B
$$

La **unió** representa els elements que pertanyen a $A$, a $B$ o a tots dos:

$$
A\\cup B
$$

Per exemple:

$$
A=[1,5]
$$

$$
B=[4,8]
$$

Aleshores:

$$
A\\cap B=[4,5]
$$

mentre que:

$$
A\\cup B=[1,8]
$$

## 20. Mètode ràpid

Per intersectar dos intervals:

1. Busca el més gran dels extrems esquerres.
2. Busca el més petit dels extrems drets.
3. Comprova si existeix solapament.
4. Decideix si cada extrem està inclòs.
5. Escriu l'interval resultant.

### Exemple

$$
A=(-2,7]
$$

$$
B=[3,10)
$$

Extrem esquerre:

$$
\\max(-2,3)=3
$$

Extrem dret:

$$
\\min(7,10)=7
$$

El $3$ està inclòs en $B$ però no en $A$.

El $7$ està inclòs en tots dos.

Per tant:

$$
\\boxed{A\\cap B=(3,7]}
$$

## 21. Procediment per a sistemes de desigualtats

Quan tenim diverses desigualtats:

1. Resol cada desigualtat per separat.
2. Converteix cada conjunt de solucions en un interval.
3. Intersecta tots els intervals.
4. Comprova els extrems.
5. Escriu la solució final.

### Exemple complet

Resoldre:

$$
\\begin{cases}
2x-4\\geq0\\\\
3x+6<18
\\end{cases}
$$

Primera desigualtat:

$$
2x\\geq4
$$

$$
x\\geq2
$$

Per tant:

$$
x\\in[2,\\infty)
$$

Segona desigualtat:

$$
3x<12
$$

$$
x<4
$$

Per tant:

$$
x\\in(-\\infty,4)
$$

Intersectem:

$$
[2,\\infty)\\cap(-\\infty,4)
$$

i obtenim:

$$
\\boxed{x\\in[2,4)}
$$

## 22. Intersecció d'intervals amb extrems iguals

Els extrems iguals requereixen una atenció especial.

Per exemple:

$$
[1,5)\\cap[5,9]
$$

El primer interval no conté $5$:

$$
5\\notin[1,5)
$$

Per tant:

$$
\\boxed{[1,5)\\cap[5,9]=\\varnothing}
$$

En canvi:

$$
[1,5]\\cap[5,9]=\\{5\\}
$$

## 23. Propietats de la intersecció

### Commutativa

$$
A\\cap B=B\\cap A
$$

L'ordre no importa.

### Associativa

$$
(A\\cap B)\\cap C=A\\cap(B\\cap C)
$$

Podem agrupar els intervals de diferents maneres.

### Idempotent

$$
A\\cap A=A
$$

Intersectar un conjunt amb ell mateix no el modifica.

### Conjunt buit

$$
A\\cap\\varnothing=\\varnothing
$$

El conjunt buit no té elements comuns amb cap conjunt.

## 24. Intersecció i subconjunts

Si:

$$
A\\subseteq B
$$

aleshores:

$$
A\\cap B=A
$$

Per exemple:

$$
[3,5]\\subseteq[1,10]
$$

i per tant:

$$
[3,5]\\cap[1,10]=[3,5]
$$

## 25. Errors freqüents

### Confondre intersecció amb unió

Per a condicions simultànies utilitzem:

$$
\\cap
$$

i no:

$$
\\cup
$$

### Escollir incorrectament l'extrem esquerre

En una intersecció hem d'escollir el **més gran** dels extrems esquerres.

### Escollir incorrectament l'extrem dret

Hem d'escollir el **més petit** dels extrems drets.

### Ignorar els parèntesis i claudàtors

Els extrems poden estar inclosos en un interval i exclosos en un altre.

### Incloure un extrem que algun interval exclou

En una intersecció, un extrem només s'inclou si pertany a tots els intervals corresponents.

### Incloure l'infinit

Mai escrivim:

$$
[a,\\infty]
$$

Cal escriure:

$$
[a,\\infty)
$$

## 26. Resum

| Situació                | Resultat                                |
| ----------------------- | --------------------------------------- |
| Intersecció             | Elements comuns                         |
| Símbol                  | $\\cap$                                  |
| Extrem esquerre         | Més gran dels extrems esquerres         |
| Extrem dret             | Més petit dels extrems drets            |
| Sense solapament        | $\\varnothing$                           |
| Condicions simultànies  | Intersecció                             |
| Condicions alternatives | Unió                                    |
| Extrem inclòs           | Ha d'estar inclòs en tots els intervals |
| Infinit                 | Sempre amb parèntesis                   |

Per a dos intervals:

$$
[a,b]\\cap[c,d]
$$

l'interval comú s'obté prenent:

$$
\\max(a,c)
$$

com a extrem esquerre i:

$$
\\min(b,d)
$$

com a extrem dret, sempre que hi hagi solapament.

## 27. Idea fonamental

La intersecció representa allò que **totes les condicions tenen en comú**.

Si:

$$
x\\in A
$$

i:

$$
x\\in B
$$

aleshores:

$$
x\\in A\\cap B
$$

Per això, quan resolem diverses desigualtats que s'han de complir simultàniament, busquem la intersecció dels seus conjunts de solucions:

$$
\\boxed{\\text{solució conjunta}=\\text{intersecció de les solucions}}
$$
`,a=`# Interval intersection

**Interval intersection** allows us to find the numbers that belong to two or more intervals simultaneously.

It is a fundamental tool for working with inequalities, domains, systems of inequalities, and solution sets.

## 1. What is an interval?

An interval represents a set of real numbers between specified endpoints.

For example:

$$
[2,5]
$$

represents all real numbers $x$ satisfying:

$$
2\\leq x\\leq5
$$

Endpoints can be included or excluded.

### Closed interval

$$
[a,b]
$$

means:

$$
a\\leq x\\leq b
$$

Both endpoints are included.

### Open interval

$$
(a,b)
$$

means:

$$
a<x<b
$$

Both endpoints are excluded.

### Half-open interval

$$
[a,b)
$$

means:

$$
a\\leq x<b
$$

The endpoint $a$ is included and $b$ is excluded.

Similarly:

$$
(a,b]
$$

means:

$$
a<x\\leq b
$$

## 2. What does intersection mean?

The intersection of two sets contains the elements that belong to **both sets at the same time**.

It is represented by:

$$
A\\cap B
$$

For example:

$$
A=[1,6]
$$

and:

$$
B=[4,9]
$$

The numbers that belong to both intervals are:

$$
[4,6]
$$

Therefore:

$$
\\boxed{[1,6]\\cap[4,9]=[4,6]}
$$

## 3. Interpretation on the real number line

The intersection can be visualized as the region where two intervals overlap.

For:

$$
A=[1,6]
$$

and:

$$
B=[4,9]
$$

the common region is:

$$
[4,6]
$$

The intersection begins at the greater left endpoint and ends at the smaller right endpoint.

In general:

$$
\\boxed{\\text{left endpoint}=\\max(a,c)}
$$

$$
\\boxed{\\text{right endpoint}=\\min(b,d)}
$$

for:

$$
[a,b]\\cap[c,d]
$$

provided that the intervals overlap.

## 4. Intersection of closed intervals

Consider:

$$
A=[2,8]
$$

and:

$$
B=[5,10]
$$

The greater left endpoint is:

$$
\\max(2,5)=5
$$

The smaller right endpoint is:

$$
\\min(8,10)=8
$$

Therefore:

$$
\\boxed{A\\cap B=[5,8]}
$$

## 5. Intersection of open intervals

Consider:

$$
A=(2,8)
$$

and:

$$
B=(5,10)
$$

The endpoints of the intersection are $5$ and $8$.

Since both intervals exclude those endpoints:

$$
\\boxed{A\\cap B=(5,8)}
$$

## 6. Intersection with different endpoint types

Consider:

$$
A=[2,8)
$$

and:

$$
B=(5,10]
$$

The result is:

$$
(5,8)
$$

because:

- $5$ is excluded by $B$.
- $8$ is excluded by $A$.

Therefore:

$$
\\boxed{[2,8)\\cap(5,10]=(5,8)}
$$

## 7. How to determine whether an endpoint is included

For an endpoint to belong to the intersection, it must belong to **every interval** being intersected.

For example:

$$
[2,7]\\cap(5,10]
$$

The endpoint $5$ does not belong to the second interval:

$$
5\\notin(5,10]
$$

Therefore, it does not belong to the intersection.

The endpoint $7$ belongs to both:

$$
7\\in[2,7]
$$

and:

$$
7\\in(5,10]
$$

Therefore:

$$
\\boxed{[2,7]\\cap(5,10]=(5,7]}
$$

Fundamental rule:

> An endpoint is included in an intersection only if all relevant intervals include it.

## 8. Non-overlapping intervals

Consider:

$$
A=[1,3]
$$

and:

$$
B=[5,8]
$$

There is no real number belonging to both intervals.

Therefore:

$$
\\boxed{A\\cap B=\\varnothing}
$$

The symbol $\\varnothing$ represents the empty set.

## 9. Intervals that only touch

Consider:

$$
A=[1,4]
$$

and:

$$
B=(4,8]
$$

The first interval contains $4$:

$$
4\\in[1,4]
$$

but the second does not:

$$
4\\notin(4,8]
$$

Therefore:

$$
\\boxed{[1,4]\\cap(4,8]=\\varnothing}
$$

However:

$$
[1,4]\\cap[4,8]=\\{4\\}
$$

In this case, the intersection contains only the number $4$.

## 10. One interval contained in another

If one interval is completely contained within another, their intersection is the smaller interval, taking its endpoints into account.

For example:

$$
A=[1,10]
$$

and:

$$
B=[3,7]
$$

Since:

$$
B\\subseteq A
$$

we have:

$$
\\boxed{A\\cap B=[3,7]}
$$

## 11. Intersection of infinite intervals

Intervals can also extend toward infinity.

For example:

$$
A=[2,\\infty)
$$

and:

$$
B=(-\\infty,7]
$$

The common numbers satisfy:

$$
2\\leq x\\leq7
$$

Therefore:

$$
\\boxed{A\\cap B=[2,7]}
$$

## 12. Intersection with $+\\infty$

Consider:

$$
A=(3,\\infty)
$$

and:

$$
B=[5,\\infty)
$$

The second interval is contained in the first:

$$
B\\subset A
$$

Therefore:

$$
\\boxed{A\\cap B=[5,\\infty)}
$$

Infinity is never included with a square bracket.

We always write:

$$
(a,\\infty)
$$

or:

$$
[a,\\infty)
$$

## 13. Intersection with $-\\infty$

For example:

$$
A=(-\\infty,5]
$$

and:

$$
B=(-\\infty,2)
$$

The more restrictive interval is:

$$
(-\\infty,2)
$$

Therefore:

$$
\\boxed{A\\cap B=(-\\infty,2)}
$$

## 14. Intersection of three intervals

Intersection can be applied to more than two intervals.

For example:

$$
A=[1,9]
$$

$$
B=[3,8]
$$

$$
C=[5,12]
$$

First:

$$
A\\cap B=[3,8]
$$

Then:

$$
[3,8]\\cap[5,12]=[5,8]
$$

Therefore:

$$
\\boxed{A\\cap B\\cap C=[5,8]}
$$

## 15. General rule for several intervals

For several intervals, the left endpoint of the intersection is determined by the greatest of all left endpoints, and the right endpoint by the smallest of all right endpoints.

For:

$$
I_1,I_2,\\ldots,I_n
$$

with endpoints:

$$
[a_1,b_1],\\ [a_2,b_2],\\ldots,[a_n,b_n]
$$

the candidate endpoints are:

$$
\\max(a_1,a_2,\\ldots,a_n)
$$

and:

$$
\\min(b_1,b_2,\\ldots,b_n)
$$

If:

$$
\\max(a_1,\\ldots,a_n)>\\min(b_1,\\ldots,b_n)
$$

the intersection is empty.

If the two values are equal, the intersection may consist of that single point, but only if every interval contains that point.

## 16. Intersection and inequalities

Intersection appears constantly when solving systems of inequalities.

For example:

$$
x\\geq2
$$

and:

$$
x<7
$$

The solutions of the first inequality are:

$$
[2,\\infty)
$$

The solutions of the second are:

$$
(-\\infty,7)
$$

Therefore:

$$
[2,\\infty)\\cap(-\\infty,7)=[2,7)
$$

The solution of the system is:

$$
\\boxed{x\\in[2,7)}
$$

## 17. Systems of inequalities

Consider:

$$
\\begin{cases}
x>1\\\\
x\\leq5
\\end{cases}
$$

Each inequality defines an interval:

$$
(1,\\infty)
$$

and:

$$
(-\\infty,5]
$$

Their intersection is:

$$
\\boxed{(1,5]}
$$

Therefore:

$$
\\boxed{1<x\\leq5}
$$

## 18. Intersection of solution sets

When a problem contains several simultaneous conditions, we use intersection.

For example:

$$
x\\geq-2
$$

$$
x<4
$$

$$
x\\neq1
$$

The first two conditions produce:

$$
[-2,4)
$$

The third condition removes $1$:

$$
[-2,1)\\cup(1,4)
$$

Therefore:

$$
\\boxed{x\\in[-2,1)\\cup(1,4)}
$$

## 19. Difference between intersection and union

It is important to distinguish:

$$
\\cap
$$

from:

$$
\\cup
$$

The **intersection** represents common elements:

$$
A\\cap B
$$

The **union** represents elements belonging to $A$, $B$, or both:

$$
A\\cup B
$$

For example:

$$
A=[1,5]
$$

$$
B=[4,8]
$$

Then:

$$
A\\cap B=[4,5]
$$

while:

$$
A\\cup B=[1,8]
$$

## 20. Quick method

To intersect two intervals:

1. Find the greater left endpoint.
2. Find the smaller right endpoint.
3. Check whether the intervals overlap.
4. Determine whether each endpoint is included.
5. Write the resulting interval.

### Example

$$
A=(-2,7]
$$

$$
B=[3,10)
$$

Left endpoint:

$$
\\max(-2,3)=3
$$

Right endpoint:

$$
\\min(7,10)=7
$$

The number $3$ is included in $B$ but not in $A$.

The number $7$ is included in both.

Therefore:

$$
\\boxed{A\\cap B=(3,7]}
$$

## 21. Procedure for systems of inequalities

When we have several inequalities:

1. Solve each inequality separately.
2. Convert each solution set into an interval.
3. Intersect all intervals.
4. Check the endpoints.
5. Write the final solution.

### Complete example

Solve:

$$
\\begin{cases}
2x-4\\geq0\\\\
3x+6<18
\\end{cases}
$$

First inequality:

$$
2x\\geq4
$$

$$
x\\geq2
$$

Therefore:

$$
x\\in[2,\\infty)
$$

Second inequality:

$$
3x<12
$$

$$
x<4
$$

Therefore:

$$
x\\in(-\\infty,4)
$$

Intersect:

$$
[2,\\infty)\\cap(-\\infty,4)
$$

and obtain:

$$
\\boxed{x\\in[2,4)}
$$

## 22. Intersection with equal endpoints

Equal endpoints require special attention.

For example:

$$
[1,5)\\cap[5,9]
$$

The first interval does not contain $5$:

$$
5\\notin[1,5)
$$

Therefore:

$$
\\boxed{[1,5)\\cap[5,9]=\\varnothing}
$$

However:

$$
[1,5]\\cap[5,9]=\\{5\\}
$$

## 23. Properties of intersection

### Commutative

$$
A\\cap B=B\\cap A
$$

The order does not matter.

### Associative

$$
(A\\cap B)\\cap C=A\\cap(B\\cap C)
$$

The intervals can be grouped in different ways.

### Idempotent

$$
A\\cap A=A
$$

Intersecting a set with itself does not change it.

### Empty set

$$
A\\cap\\varnothing=\\varnothing
$$

The empty set has no elements in common with any set.

## 24. Intersection and subsets

If:

$$
A\\subseteq B
$$

then:

$$
A\\cap B=A
$$

For example:

$$
[3,5]\\subseteq[1,10]
$$

therefore:

$$
[3,5]\\cap[1,10]=[3,5]
$$

## 25. Common mistakes

### Confusing intersection with union

For simultaneous conditions, use:

$$
\\cap
$$

not:

$$
\\cup
$$

### Choosing the wrong left endpoint

For an intersection, choose the **greatest** left endpoint.

### Choosing the wrong right endpoint

Choose the **smallest** right endpoint.

### Ignoring parentheses and brackets

Endpoints can be included in one interval and excluded in another.

### Including an endpoint that one interval excludes

In an intersection, an endpoint is included only if every relevant interval contains it.

### Including infinity

Never write:

$$
[a,\\infty]
$$

Write:

$$
[a,\\infty)
$$

## 26. Summary

| Situation               | Result                             |
| ----------------------- | ---------------------------------- |
| Intersection            | Common elements                    |
| Symbol                  | $\\cap$                             |
| Left endpoint           | Greatest left endpoint             |
| Right endpoint          | Smallest right endpoint            |
| No overlap              | $\\varnothing$                      |
| Simultaneous conditions | Intersection                       |
| Alternative conditions  | Union                              |
| Included endpoint       | Must be included in every interval |
| Infinity                | Always uses parentheses            |

For two intervals:

$$
[a,b]\\cap[c,d]
$$

the common interval is obtained by taking:

$$
\\max(a,c)
$$

as the left endpoint and:

$$
\\min(b,d)
$$

as the right endpoint, provided that the intervals overlap.

## 27. Fundamental idea

Intersection represents what **all conditions have in common**.

If:

$$
x\\in A
$$

and:

$$
x\\in B
$$

then:

$$
x\\in A\\cap B
$$

Therefore, when solving several inequalities that must hold simultaneously, we find the intersection of their solution sets:

$$
\\boxed{\\text{joint solution}=\\text{intersection of the solutions}}
$$
`;function o(){let{locale:o}=t();return e(n,{id:`interval-intersection`,content:{es:r,ca:i,en:a}[o]})}export{o as default};