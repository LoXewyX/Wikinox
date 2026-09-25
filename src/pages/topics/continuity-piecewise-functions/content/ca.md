# Continuïtat de les funcions definides a trossos

Una **funció definida a trossos** és una funció que utilitza diferents expressions en diferents parts del seu domini.

Per exemple:

$$
f(x)=
\begin{cases}
x+1 & x<2\\
x^2-1 & x\geq2
\end{cases}
$$

En estudiar la continuïtat, els punts més importants són les **fronteres entre les diferents parts**.

## Continuïtat en un punt

Una funció $f$ és contínua en $x=a$ si:

$$
\boxed{
\lim_{x\to a}f(x)=f(a)
}
$$

En una funció definida a trossos cal estudiar el comportament des dels dos costats.

S'ha de complir:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$

Si algun d'aquests valors és diferent, la funció no és contínua en $x=a$.

## Punts de frontera

Considerem:

$$
f(x)=
\begin{cases}
f_1(x) & x<a\\
f_2(x) & x\geq a
\end{cases}
$$

Per determinar si $f$ és contínua en $x=a$, calculem:

$$
\lim_{x\to a^-}f_1(x)
$$

$$
\lim_{x\to a^+}f_2(x)
$$

i el valor de la funció:

$$
f(a)=f_2(a)
$$

La continuïtat requereix:

$$
\boxed{
\lim_{x\to a^-}f_1(x)
=
\lim_{x\to a^+}f_2(x)
=
f_2(a)
}
$$

## Exemple

Considerem:

$$
f(x)=
\begin{cases}
x+1 & x<2\\
x^2-1 & x\geq2
\end{cases}
$$

Estudiem la continuïtat en $x=2$.

### Límit per l'esquerra

Per a $x<2$:

$$
f(x)=x+1
$$

Per tant:

$$
\lim_{x\to2^-}f(x)=2+1=3
$$

### Límit per la dreta

Per a $x\geq2$:

$$
f(x)=x^2-1
$$

Per tant:

$$
\lim_{x\to2^+}f(x)=2^2-1=3
$$

### Valor de la funció

Com que la segona part conté $x=2$:

$$
f(2)=2^2-1=3
$$

Així:

$$
\boxed{
\lim_{x\to2^-}f(x)
=
\lim_{x\to2^+}f(x)
=
f(2)=3
}
$$

La funció és contínua en $x=2$.

## Condicions de continuïtat

Per a:

$$
f(x)=
\begin{cases}
f_1(x) & x<a\\
f_2(x) & x\geq a
\end{cases}
$$

la continuïtat en $x=a$ requereix:

### 1. Límit per l'esquerra

$$
L_-=\lim_{x\to a^-}f_1(x)
$$

### 2. Límit per la dreta

$$
L_+=\lim_{x\to a^+}f_2(x)
$$

### 3. Valor de la funció

$$
f(a)=f_2(a)
$$

Per tant:

$$
\boxed{
L_-=L_+=f(a)
}
$$

## Trobar un paràmetre desconegut

Les funcions definides a trossos sovint contenen paràmetres que s'han de determinar per garantir la continuïtat.

Considerem:

$$
f(x)=
\begin{cases}
x^2+1 & x<2\\
ax+3 & x\geq2
\end{cases}
$$

Perquè sigui contínua en $x=2$:

$$
\lim_{x\to2^-}f(x)
=
\lim_{x\to2^+}f(x)
$$

El límit per l'esquerra és:

$$
2^2+1=5
$$

El límit per la dreta és:

$$
2a+3
$$

Per tant:

$$
5=2a+3
$$

$$
2a=2
$$

$$
\boxed{a=1}
$$

Amb $a=1$, la funció és contínua en $x=2$.

## Diversos punts de frontera

Una funció definida a trossos pot tenir diversos punts de frontera.

Per exemple:

$$
f(x)=
\begin{cases}
x+2 & x<1\\
x^2 & 1\leq x<3\\
2x-3 & x\geq3
\end{cases}
$$

Els punts de frontera són:

$$
\boxed{x=1,\quad x=3}
$$

Tots dos punts s'han d'estudiar per separat.

### En $x=1$

$$
\lim_{x\to1^-}f(x)=1+2=3
$$

$$
\lim_{x\to1^+}f(x)=1^2=1
$$

Com que:

$$
3\neq1
$$

la funció no és contínua en $x=1$.

$$
\boxed{\text{Discontinuïtat en }x=1}
$$

### En $x=3$

$$
\lim_{x\to3^-}f(x)=3^2=9
$$

$$
\lim_{x\to3^+}f(x)=2(3)-3=3
$$

Com que:

$$
9\neq3
$$

la funció no és contínua en $x=3$.

$$
\boxed{\text{Discontinuïtat en }x=3}
$$

## Tipus de discontinuïtat

Les funcions definides a trossos poden presentar diferents tipus de discontinuïtat.

### Discontinuïtat evitable

Si els dos límits laterals coincideixen però el valor de la funció és diferent o no està definit:

$$
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=L
$$

però:

$$
f(a)\neq L
$$

aleshores:

$$
\boxed{\text{Discontinuïtat evitable}}
$$

### Discontinuïtat de salt

Si:

$$
\lim_{x\to a^-}f(x)
\neq
\lim_{x\to a^+}f(x)
$$

aleshores:

$$
\boxed{\text{Discontinuïtat de salt}}
$$

### Discontinuïtat infinita

Si un o tots dos límits laterals són infinits:

$$
\lim_{x\to a^\pm}f(x)=\pm\infty
$$

hi ha una discontinuïtat infinita.

$$
\boxed{\text{Discontinuïtat infinita}}
$$

## Continuïtat en un interval

Una funció definida a trossos és contínua en un interval si:

1. Cada part és contínua en el seu propi interval.
2. La funció és contínua en tots els punts de frontera.

Per exemple, si:

$$
f(x)=
\begin{cases}
f_1(x) & x<a\\
f_2(x) & a\leq x<b\\
f_3(x) & x\geq b
\end{cases}
$$

cal comprovar:

$$
\boxed{\text{continuïtat en }x=a\text{ i }x=b}
$$

a més de la continuïtat de $f_1$, $f_2$ i $f_3$ en els seus respectius intervals.

## Interpretació gràfica

En un punt de frontera $x=a$, la continuïtat significa que la gràfica s'aproxima al mateix punt des dels dos costats i que la funció realment pren aquest valor.

No hi ha d'haver:

- Un forat.
- Un salt.
- Una asímptota vertical.
- Una diferència entre el límit i el valor de la funció.

Per tant:

$$
\boxed{
\text{Contínua}
\iff
\text{no hi ha cap ruptura en el punt de frontera}
}
$$

:::function-graph{expression="x+1" restriction="-4<=x<2"}
:::

## Exemple complet

Considerem:

$$
f(x)=
\begin{cases}
x^2 & x<1\\
ax+2 & x\geq1
\end{cases}
$$

Volem trobar $a$ perquè $f$ sigui contínua en $x=1$.

El límit per l'esquerra és:

$$
\lim_{x\to1^-}f(x)=1^2=1
$$

El límit per la dreta és:

$$
\lim_{x\to1^+}f(x)=a+2
$$

El valor de la funció és:

$$
f(1)=a+2
$$

Perquè hi hagi continuïtat:

$$
1=a+2
$$

Per tant:

$$
\boxed{a=-1}
$$

La funció resultant és:

$$
f(x)=
\begin{cases}
x^2 & x<1\\
-x+2 & x\geq1
\end{cases}
$$

i:

$$
\boxed{
\lim_{x\to1^-}f(x)
=
\lim_{x\to1^+}f(x)
=
f(1)=1
}
$$

## Procediment

Per estudiar la continuïtat d'una funció definida a trossos:

1. Identifica tots els punts de frontera.
2. Comprova si cada part és contínua.
3. Calcula el límit per l'esquerra a cada frontera.
4. Calcula el límit per la dreta.
5. Calcula el valor de la funció.
6. Compara els tres valors.
7. Si cal, classifica la discontinuïtat.
8. Si hi ha un paràmetre desconegut, resol l'equació de continuïtat.

La condició fonamental és:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
=
f(a)
}
$$
