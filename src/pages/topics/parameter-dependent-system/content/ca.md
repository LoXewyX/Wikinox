# Sistema d'equacions dependent d'un paràmetre

Un **sistema d'equacions dependent d'un paràmetre** és un sistema en què un o més coeficients contenen una variable addicional anomenada **paràmetre**.

El valor del paràmetre pot determinar si el sistema té una solució, cap solució o infinites solucions.

Per exemple:

$$
\begin{cases}
x+y=3\\
x+ay=2
\end{cases}
$$

El paràmetre és $a$.

## Resoldre segons el paràmetre

Considerem:

$$
\begin{cases}
x+y=3\\
x+ay=2
\end{cases}
$$

Restem la primera equació de la segona:

$$
(a-1)y=-1
$$

Si:

$$
a\neq1
$$

podem aïllar $y$:

$$
y=-\frac{1}{a-1}
$$

i després obtenir $x$:

$$
x=3-y
$$

Per tant, per a qualsevol $a\neq1$ existeix una única solució.

## Cas especial

Ara considerem:

$$
a=1
$$

El sistema es converteix en:

$$
\begin{cases}
x+y=3\\
x+y=2
\end{cases}
$$

Les dues equacions tenen el mateix costat esquerre però diferents termes independents.

Per tant, no es poden complir simultàniament:

$$
\boxed{\text{Sense solució}}
$$

Així, el sistema té:

$$
\boxed{
\begin{cases}
\text{Una solució}, & a\neq1\\
\text{Sense solució}, & a=1
\end{cases}
}
$$

## Un altre exemple

Considerem:

$$
\begin{cases}
x+y=2\\
2x+2y=k
\end{cases}
$$

La segona equació és el doble de la primera quan:

$$
k=4
$$

Per tant:

- Si $k=4$, les dues equacions representen la mateixa recta i existeixen infinites solucions.
- Si $k\neq4$, les equacions són incompatibles i no existeix cap solució.

Per tant:

$$
\boxed{
\begin{cases}
\text{Infinites solucions}, & k=4\\
\text{Sense solució}, & k\neq4
\end{cases}
}
$$

## Determinant i paràmetre

Per a un sistema de dues equacions:

$$
\begin{cases}
a_1x+b_1y=c_1\\
a_2x+b_2y=c_2
\end{cases}
$$

podem utilitzar el determinant:

$$
D=
\begin{vmatrix}
a_1&b_1\\
a_2&b_2
\end{vmatrix}
=
a_1b_2-a_2b_1
$$

Si:

$$
D\neq0
$$

el sistema té una única solució.

Si:

$$
D=0
$$

el sistema pot tenir cap solució o infinites solucions. En aquest cas hem d'analitzar també els termes independents.

## Estratègia

Per resoldre un sistema dependent d'un paràmetre:

1. Identifica el paràmetre.
2. Resol el sistema simbòlicament.
3. Identifica els valors del paràmetre que fan que alguna operació no sigui vàlida, com dividir per zero.
4. Analitza aquests valors per separat.
5. Determina si cada cas té una solució, cap solució o infinites solucions.
6. Expressa el resultat separant els diferents valors del paràmetre.
