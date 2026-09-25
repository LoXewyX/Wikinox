# Solucions d'equacions trigonomètriques

Les **equacions trigonomètriques** són aquelles en què la incògnita apareix dins d'una funció trigonomètrica, com el sinus, el cosinus o la tangent.

A diferència d'una equació algebraica, normalment una equació trigonomètrica té **infinites solucions**, perquè les funcions trigonomètriques són periòdiques.

## 1. Periodicitat

Les funcions trigonomètriques es repeteixen periòdicament:

$$
\sin(x+2\pi)=\sin(x)
$$

$$
\cos(x+2\pi)=\cos(x)
$$

$$
\tan(x+\pi)=\tan(x)
$$

Per això, si trobem una solució, podem obtenir altres solucions sumant-hi el període corresponent.

La forma general de les solucions depèn de la funció utilitzada.

### Sinus

Si

$$
\sin(x)=a
$$

i $\alpha$ és un angle tal que

$$
\sin(\alpha)=a,
$$

les solucions generals són

$$
x=\alpha+2k\pi
$$

o

$$
x=\pi-\alpha+2k\pi,
\qquad k\in\mathbb{Z}.
$$

### Cosinus

Si

$$
\cos(x)=a,
$$

les solucions es poden escriure com

$$
x=\pm\alpha+2k\pi,
\qquad k\in\mathbb{Z},
$$

on $\cos(\alpha)=a$.

### Tangent

Si

$$
\tan(x)=a,
$$

les solucions són

$$
x=\alpha+k\pi,
\qquad k\in\mathbb{Z},
$$

on $\tan(\alpha)=a$.

---

## 2. Resoldre una equació de sinus

Considerem

$$
\sin(x)=\frac{1}{2}.
$$

Sabem que

$$
\sin\left(\frac{\pi}{6}\right)=\frac{1}{2}.
$$

El sinus també pren aquest valor al segon quadrant:

$$
\pi-\frac{\pi}{6}=\frac{5\pi}{6}.
$$

Per tant, les solucions generals són

$$
x=\frac{\pi}{6}+2k\pi
$$

o

$$
x=\frac{5\pi}{6}+2k\pi,
\qquad k\in\mathbb{Z}.
$$

Si només busquem solucions a l'interval $[0,2\pi)$, obtenim

$$
x=\frac{\pi}{6},
\qquad
x=\frac{5\pi}{6}.
$$

---

## 3. Resoldre una equació de cosinus

Considerem

$$
\cos(x)=-\frac{\sqrt{3}}{2}.
$$

L'angle de referència és

$$
\frac{\pi}{6},
$$

perquè

$$
\cos\left(\frac{\pi}{6}\right)=\frac{\sqrt{3}}{2}.
$$

Com que el cosinus és negatiu als quadrants II i III:

$$
x=\pi-\frac{\pi}{6}=\frac{5\pi}{6}
$$

i

$$
x=\pi+\frac{\pi}{6}=\frac{7\pi}{6}.
$$

Per tant,

$$
x=\frac{5\pi}{6}+2k\pi
$$

o

$$
x=\frac{7\pi}{6}+2k\pi,
\qquad k\in\mathbb{Z}.
$$

A $[0,2\pi)$:

$$
\boxed{x=\frac{5\pi}{6},\frac{7\pi}{6}}
$$

---

## 4. Resoldre una equació de tangent

Considerem

$$
\tan(x)=1.
$$

Sabem que

$$
\tan\left(\frac{\pi}{4}\right)=1.
$$

La tangent té període $\pi$, de manera que totes les solucions són

$$
\boxed{x=\frac{\pi}{4}+k\pi},
\qquad k\in\mathbb{Z}.
$$

A l'interval $[0,2\pi)$:

$$
x=\frac{\pi}{4}
$$

i

$$
x=\frac{5\pi}{4}.
$$

---

## 5. Equacions trigonomètriques amb una expressió lineal

De vegades la incògnita no apareix directament com $x$, sinó dins d'una expressió.

Per exemple:

$$
\sin(2x)=\frac{\sqrt{3}}{2}.
$$

Primer resolem l'equació per a $2x$.

Sabem que

$$
2x=\frac{\pi}{3}+2k\pi
$$

o

$$
2x=\frac{2\pi}{3}+2k\pi.
$$

Dividint entre $2$:

$$
x=\frac{\pi}{6}+k\pi
$$

o

$$
x=\frac{\pi}{3}+k\pi.
$$

Per tant,

$$
\boxed{
x=\frac{\pi}{6}+k\pi
\quad\text{o}\quad
x=\frac{\pi}{3}+k\pi
}
$$

---

## 6. Equacions amb restriccions

En molts exercicis s'especifica un interval per a la incògnita.

Per exemple:

$$
2\cos(x)=1,
\qquad
0\leq x<2\pi.
$$

Dividim entre $2$:

$$
\cos(x)=\frac{1}{2}.
$$

A l'interval $[0,2\pi)$, el cosinus val $\frac12$ a:

$$
x=\frac{\pi}{3}
$$

i

$$
x=\frac{5\pi}{3}.
$$

Per tant:

$$
\boxed{
x\in
\left\{
\frac{\pi}{3},
\frac{5\pi}{3}
\right\}
}
$$

La restricció és important perquè l'equació té infinites solucions, però l'interval en selecciona només algunes.

---

## 7. Equacions que requereixen factorització

No totes les equacions trigonomètriques es redueixen directament a una única funció.

Per exemple:

$$
\sin^2(x)-\sin(x)=0.
$$

Factoritzem:

$$
\sin(x)(\sin(x)-1)=0.
$$

Per la propietat del producte nul:

$$
\sin(x)=0
$$

o

$$
\sin(x)=1.
$$

Per a la primera equació:

$$
x=k\pi.
$$

Per a la segona:

$$
x=\frac{\pi}{2}+2k\pi.
$$

Per tant:

$$
\boxed{
x=k\pi
\quad\text{o}\quad
x=\frac{\pi}{2}+2k\pi,
\qquad k\in\mathbb{Z}
}
$$

---

## 8. Ús d'identitats trigonomètriques

Les identitats trigonomètriques permeten transformar una equació complicada en una altra de més senzilla.

Una de les identitats fonamentals és:

$$
\sin^2(x)+\cos^2(x)=1.
$$

També són útils:

$$
1+\tan^2(x)=\sec^2(x)
$$

i

$$
1+\cot^2(x)=\csc^2(x).
$$

Per exemple:

$$
2\sin^2(x)-1=0.
$$

Aïllem:

$$
2\sin^2(x)=1
$$

$$
\sin^2(x)=\frac12.
$$

Prenem arrels:

$$
\sin(x)=\pm\frac{\sqrt2}{2}.
$$

A $[0,2\pi)$ obtenim quatre solucions:

$$
x=
\frac{\pi}{4},
\frac{3\pi}{4},
\frac{5\pi}{4},
\frac{7\pi}{4}.
$$

---

## 9. Mètode general

Per resoldre una equació trigonomètrica convé seguir aquests passos:

1. **Simplificar l'equació** tant com sigui possible.
2. **Aïllar una funció trigonomètrica** quan sigui possible.
3. **Trobar l'angle de referència** utilitzant valors coneguts o la funció inversa.
4. **Determinar els quadrants** en què la funció té el signe corresponent.
5. **Escriure la solució general** utilitzant la periodicitat.
6. **Aplicar l'interval indicat**, si n'hi ha.
7. **Comprovar les solucions** a l'equació original.

---

## 10. Errors freqüents

### Oblidar la periodicitat

De

$$
\sin(x)=0
$$

no s'obté únicament $x=0$.

La solució general és:

$$
x=k\pi,
\qquad k\in\mathbb{Z}.
$$

### Confondre el període

El sinus i el cosinus tenen període $2\pi$:

$$
T_{\sin}=T_{\cos}=2\pi.
$$

La tangent té període $\pi$:

$$
T_{\tan}=\pi.
$$

### No considerar tots els quadrants

Per exemple, si

$$
\cos(x)=-\frac12,
$$

no n'hi ha prou amb trobar l'angle de referència. També cal localitzar els quadrants on el cosinus és negatiu.

### Dividir per una expressió que pot ser zero

En una equació com

$$
\sin(x)\cos(x)=0,
$$

no hem de dividir directament entre $\sin(x)$ o $\cos(x)$, perquè podríem eliminar solucions.

És preferible utilitzar:

$$
ab=0
\quad\Longrightarrow\quad
a=0\ \text{o}\ b=0.
$$

---

## 11. Solucions en graus

Les mateixes regles es poden expressar en graus.

Els períodes són:

$$
T_{\sin}=T_{\cos}=360^\circ
$$

i

$$
T_{\tan}=180^\circ.
$$

Per exemple:

$$
\sin(x)=\frac12
$$

té com a solucions generals:

$$
x=30^\circ+360^\circ k
$$

o

$$
x=150^\circ+360^\circ k,
\qquad k\in\mathbb{Z}.
$$

És important no barrejar graus i radians dins del mateix exercici.

---

## Resum

Les solucions de les equacions trigonomètriques depenen principalment de la **periodicitat** de les funcions i dels **quadrants** en què prenen determinats valors.

Les formes fonamentals són:

$$
\sin(x)=a
\quad\Longrightarrow\quad
x=\alpha+2k\pi
\ \text{o}\
x=\pi-\alpha+2k\pi
$$

$$
\cos(x)=a
\quad\Longrightarrow\quad
x=\pm\alpha+2k\pi
$$

$$
\tan(x)=a
\quad\Longrightarrow\quad
x=\alpha+k\pi
$$

on $k\in\mathbb{Z}$ i $\alpha$ és un angle que produeix el valor corresponent.

Quan hi ha un interval, com $[0,2\pi)$, primer s'obté la solució general i després se seleccionen únicament les solucions que pertanyen a aquest interval.
