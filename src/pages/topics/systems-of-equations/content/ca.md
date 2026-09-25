# Sistemes d'equacions

Un **sistema d'equacions** és un conjunt de dues o més equacions que comparteixen les mateixes incògnites.

La solució d'un sistema és el conjunt de valors que satisfà **totes les equacions simultàniament**.

Per exemple:

$$
\begin{cases}
x+y=7\\
x-y=1
\end{cases}
$$

## Mètodes per resoldre sistemes

Els principals mètodes per resoldre sistemes d'equacions són:

- **Substitució**: aïllem una incògnita en una equació i la substituïm en l'altra.
- **Igualació**: aïllem la mateixa incògnita en les dues equacions i després igualem les expressions.
- **Reducció**: sumem o restem les equacions per eliminar una de les incògnites.
- **Mètode gràfic**: representem les equacions i busquem els seus punts d'intersecció.

## Mètode de substitució

Considerem el sistema:

$$
\begin{cases}
x+y=7\\
x-y=1
\end{cases}
$$

Aïllem $y$ en la primera equació:

$$
y=7-x
$$

Substituïm aquesta expressió en la segona equació:

$$
x-(7-x)=1
$$

Simplifiquem:

$$
x-7+x=1
$$

$$
2x=8
$$

Per tant:

$$
x=4
$$

Ara substituïm $x=4$ en:

$$
y=7-x
$$

Obtenim:

$$
y=7-4=3
$$

Per tant, la solució és:

$$
\boxed{(x,y)=(4,3)}
$$

## Mètode d'igualació

Considerem:

$$
\begin{cases}
2x+y=8\\
x-y=1
\end{cases}
$$

Aïllem $y$ en les dues equacions:

$$
y=8-2x
$$

$$
y=x-1
$$

Com que totes dues expressions són iguals a $y$, les podem igualar:

$$
8-2x=x-1
$$

$$
9=3x
$$

$$
x=3
$$

Substituïm:

$$
y=3-1=2
$$

La solució és:

$$
\boxed{(x,y)=(3,2)}
$$

## Mètode de reducció

Considerem:

$$
\begin{cases}
2x+y=7\\
3x-y=8
\end{cases}
$$

Sumem les dues equacions:

$$
(2x+y)+(3x-y)=7+8
$$

Els termes $y$ es cancel·len:

$$
5x=15
$$

Per tant:

$$
x=3
$$

Substituïm en la primera equació:

$$
2(3)+y=7
$$

$$
6+y=7
$$

$$
y=1
$$

La solució és:

$$
\boxed{(x,y)=(3,1)}
$$

## Mètode gràfic

Cada equació lineal amb dues incògnites representa una recta.

Per exemple:

$$
\begin{cases}
y=7-x\\
y=x-1
\end{cases}
$$

La solució del sistema correspon al **punt on les dues rectes es tallen**.

::contentReference[oaicite:1]{index=1}

En aquest cas, les rectes es tallen en:

$$
(4,3)
$$

## Tipus de sistemes

Un sistema de dues equacions lineals pot tenir tres tipus de solució.

### Una solució

Les rectes es tallen en un únic punt.

$$
\boxed{\text{Una solució}}
$$

### Cap solució

Les rectes són paral·leles i mai no es tallen.

$$
\boxed{\text{Sense solució}}
$$

### Infinites solucions

Les dues equacions representen la mateixa recta.

$$
\boxed{\text{Infinites solucions}}
$$

## Sistemes de tres equacions

També podem treballar amb tres o més incògnites.

Per exemple:

$$
\begin{cases}
x+y+z=6\\
x-y+z=4\\
2x+y-z=3
\end{cases}
$$

Aquests sistemes es poden resoldre mitjançant substitució, reducció o mètodes matricials com l'**eliminació de Gauss**.

## Estratègia per resoldre un sistema

1. Identifica les incògnites.
2. Decideix quin mètode és més convenient.
3. Resol el sistema.
4. Obtén el valor de cada incògnita.
5. Comprova la solució substituint-la en totes les equacions.

Una solució només és correcta si satisfà **totes les equacions del sistema**.
