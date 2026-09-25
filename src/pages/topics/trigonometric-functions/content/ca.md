# Dues equacions lineals amb dues incògnites

Un **sistema de dues equacions lineals amb dues incògnites** està format per dues equacions de primer grau que contenen dues variables, normalment $x$ i $y$.

La seva forma general és:

$$
\begin{cases}
a_1x+b_1y=c_1\\
a_2x+b_2y=c_2
\end{cases}
$$

Resoldre el sistema significa trobar els valors de $x$ i $y$ que satisfan **les dues equacions simultàniament**.

Per exemple:

$$
\begin{cases}
x+y=7\\
x-y=1
\end{cases}
$$

La solució és:

$$
\boxed{x=4,\qquad y=3}
$$

## Mètode de substitució

El mètode de substitució consisteix a aïllar una incògnita en una de les equacions i substituir-la en l'altra.

Considerem:

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

Substituïm en la segona:

$$
x-(7-x)=1
$$

Simplifiquem:

$$
2x-7=1
$$

$$
2x=8
$$

$$
x=4
$$

Ara substituïm $x=4$:

$$
y=7-4
$$

$$
y=3
$$

Per tant:

$$
\boxed{(x,y)=(4,3)}
$$

## Mètode d'igualació

En el mètode d'igualació aïllem la mateixa incògnita en les dues equacions i després igualem les expressions obtingudes.

Per exemple:

$$
\begin{cases}
2x+y=8\\
x-y=1
\end{cases}
$$

Aïllem $y$:

$$
y=8-2x
$$

$$
y=x-1
$$

Com que totes dues expressions són iguals a $y$:

$$
8-2x=x-1
$$

Resolent:

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

El mètode de reducció consisteix a sumar o restar les equacions per eliminar una de les incògnites.

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

La solució del sistema és el **punt d'intersecció de les dues rectes**.

::contentReference[oaicite:1]{index=1}

En aquest cas:

$$
\boxed{(x,y)=(4,3)}
$$

## Tipus de solucions

Un sistema de dues equacions lineals amb dues incògnites pot tenir tres tipus de solució.

### Una solució

Les dues rectes es tallen en un únic punt.

$$
\boxed{\text{Una solució}}
$$

### Cap solució

Les dues rectes són paral·leles i no tenen cap punt en comú.

Per exemple:

$$
\begin{cases}
y=2x+1\\
y=2x-3
\end{cases}
$$

Les dues rectes tenen el mateix pendent però diferents ordenades a l'origen.

$$
\boxed{\text{Sense solució}}
$$

### Infinites solucions

Les dues equacions representen exactament la mateixa recta.

Per exemple:

$$
\begin{cases}
x+y=5\\
2x+2y=10
\end{cases}
$$

La segona equació és simplement el doble de la primera.

$$
\boxed{\text{Infinites solucions}}
$$

## Comprovació de la solució

Sempre podem comprovar una solució substituint els valors obtinguts en les dues equacions originals.

Per a:

$$
\begin{cases}
x+y=7\\
x-y=1
\end{cases}
$$

i la solució:

$$
x=4,\qquad y=3
$$

Comprovem la primera equació:

$$
4+3=7
$$

I la segona:

$$
4-3=1
$$

Les dues equacions es compleixen, de manera que la solució és correcta.

## Estratègia per resoldre un sistema

1. Identifica les dues incògnites.
2. Decideix quin mètode és més senzill.
3. Elimina una de les incògnites.
4. Calcula l'altra incògnita.
5. Substitueix el resultat per trobar la segona incògnita.
6. Comprova els dos valors en les equacions originals.
