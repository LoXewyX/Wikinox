# Inequacions racionals

Una **inequació racional** és una desigualtat en què apareix una expressió racional, és a dir, un quocient de polinomis.

Per exemple:

$$
\frac{x-2}{x+1}>0
$$

L'objectiu és determinar tots els valors de $x$ que fan certa la desigualtat.

A diferència d'una equació racional, no n'hi ha prou amb trobar els valors que fan que l'expressió sigui igual a zero. Cal estudiar el **signe de l'expressió en diferents intervals**.

---

## 1. Expressions racionals

Una expressió racional té la forma:

$$
\frac{P(x)}{Q(x)}
$$

on $P(x)$ i $Q(x)$ són polinomis i:

$$
Q(x)\neq0
$$

Per exemple:

$$
\frac{x+2}{x-3}
$$

és una expressió racional.

El valor $x=3$ no pertany al domini perquè fa que el denominador sigui zero.

---

## 2. Què és una inequació racional?

Una inequació racional compara una expressió racional amb un nombre, normalment $0$.

Exemples:

$$
\frac{x-1}{x+2}>0
$$

$$
\frac{x+3}{x-4}\leq0
$$

$$
\frac{x^2-1}{x+2}\geq0
$$

També podem trobar inequacions en què tots dos costats contenen expressions racionals.

Per exemple:

$$
\frac{1}{x-1}>\frac{2}{x+3}
$$

En aquests casos, normalment convé portar tots els termes a un mateix costat.

---

## 3. Restriccions del domini

El primer pas és determinar on està definida l'expressió.

Considerem:

$$
\frac{x+1}{x-4}>0
$$

El denominador no pot ser zero:

$$
x-4\neq0
$$

Per tant:

$$
x\neq4
$$

El punt $x=4$ serà un punt crític i mai podrà pertànyer a la solució.

---

## 4. Punts crítics

Els punts crítics són els valors que poden canviar el signe de l'expressió.

Per a una expressió:

$$
\frac{P(x)}{Q(x)}
$$

hem de buscar:

1. Els zeros del numerador.
2. Els zeros del denominador.

Per exemple:

$$
\frac{(x-2)(x+3)}{x-1}
$$

Els punts crítics són:

$$
x=-3,\qquad x=1,\qquad x=2
$$

El punt $x=1$ prové del denominador i, per tant, mai pot pertànyer al domini.

---

## 5. Per què són importants els punts crítics?

El signe d'una expressió racional només pot canviar en travessar un zero del numerador o del denominador.

Per exemple:

$$
\frac{x-2}{x+1}
$$

té els punts crítics:

$$
x=-1,\qquad x=2
$$

Aquests punts divideixen la recta real en tres intervals:

$$
(-\infty,-1)
$$

$$
(-1,2)
$$

$$
(2,\infty)
$$

En cada interval l'expressió manté un signe constant.

---

## 6. Taula de signes

L'eina principal per resoldre inequacions racionals és la **taula de signes**.

Considerem:

$$
\frac{x-2}{x+1}>0
$$

Els punts crítics són:

$$
x=-1,\qquad x=2
$$

Dividim la recta:

$$
(-\infty,-1),\qquad(-1,2),\qquad(2,\infty)
$$

Podem estudiar el signe de cada factor.

| Interval       | $x-2$ | $x+1$ | Quocient |
| -------------- | ----: | ----: | -------: |
| $(-\infty,-1)$ |   $-$ |   $-$ |      $+$ |
| $(-1,2)$       |   $-$ |   $+$ |      $-$ |
| $(2,\infty)$   |   $+$ |   $+$ |      $+$ |

Com que volem:

$$
\frac{x-2}{x+1}>0
$$

seleccionem els intervals on el quocient és positiu:

$$
\boxed{(-\infty,-1)\cup(2,\infty)}
$$

Els extrems no s'inclouen perquè la desigualtat és estricta.

A més, $x=-1$ no pertany al domini.

---

## 7. Desigualtat estricta

Si tenim:

$$
\frac{x-2}{x+1}>0
$$

els valors on l'expressió és exactament zero tampoc formen part de la solució.

En aquest cas:

$$
x=2
$$

fa que el numerador sigui zero.

Com que la desigualtat és $>0$, hem d'excloure $2$.

Per tant:

$$
\boxed{(-\infty,-1)\cup(2,\infty)}
$$

---

## 8. Desigualtat no estricta

Si tenim:

$$
\frac{x-2}{x+1}\geq0
$$

ara sí que podem incloure el zero del numerador:

$$
x=2
$$

Però continuem sense poder incloure $x=-1$, perquè el denominador seria zero.

Per tant:

$$
\boxed{(-\infty,-1)\cup[2,\infty)}
$$

La diferència entre $>$ i $\geq$ és important.

---

## 9. Zeros del numerador i del denominador

És fonamental distingir entre tots dos tipus de punts crítics.

### Zero del numerador

Si:

$$
P(a)=0
$$

aleshores l'expressió pot valer $0$, sempre que el denominador no sigui zero.

Per tant, el punt es pot incloure quan la desigualtat permet la igualtat.

### Zero del denominador

Si:

$$
Q(a)=0
$$

l'expressió no està definida.

Per tant:

$$
a
$$

mai pot pertànyer a la solució.

---

## 10. Exemple amb dos factors

Resolem:

$$
\frac{(x-1)(x+3)}{x-2}>0
$$

Els punts crítics són:

$$
x=-3,\qquad x=1,\qquad x=2
$$

Els intervals són:

$$
(-\infty,-3)
$$

$$
(-3,1)
$$

$$
(1,2)
$$

$$
(2,\infty)
$$

Analitzem els signes:

| Interval       | $x+3$ | $x-1$ | $x-2$ | Expressió |
| -------------- | ----: | ----: | ----: | --------: |
| $(-\infty,-3)$ |   $-$ |   $-$ |   $-$ |       $-$ |
| $(-3,1)$       |   $+$ |   $-$ |   $-$ |       $+$ |
| $(1,2)$        |   $+$ |   $+$ |   $-$ |       $-$ |
| $(2,\infty)$   |   $+$ |   $+$ |   $+$ |       $+$ |

Volem els intervals positius:

$$
\boxed{(-3,1)\cup(2,\infty)}
$$

---

## 11. Resoldre primer una inequació racional

Considerem:

$$
\frac{1}{x-1}>\frac{2}{x+3}
$$

Portem-ho tot al mateix costat:

$$
\frac{1}{x-1}-\frac{2}{x+3}>0
$$

Busquem un denominador comú:

$$
\frac{x+3-2(x-1)}{(x-1)(x+3)}>0
$$

Simplifiquem el numerador:

$$
x+3-2x+2=5-x
$$

Per tant:

$$
\frac{5-x}{(x-1)(x+3)}>0
$$

Els punts crítics són:

$$
x=-3,\qquad x=1,\qquad x=5
$$

A partir de la taula de signes obtenim:

$$
\boxed{(-3,1)\cup(5,\infty)}
$$

---

## 12. Inequacions racionals amb polinomis factoritzats

És convenient factoritzar tant el numerador com el denominador.

Per exemple:

$$
\frac{x^2-4}{x^2-x-6}\leq0
$$

Factoritzem:

$$
\frac{(x-2)(x+2)}{(x-3)(x+2)}\leq0
$$

Tot i que algebraicament podríem simplificar:

$$
\frac{x-2}{x-3}\leq0
$$

hem de recordar que l'expressió original no està definida en:

$$
x=-2
$$

Per tant, la restricció original s'ha de conservar.

La solució de l'expressió simplificada és:

$$
[2,3)
$$

En aquest cas $-2$ no afecta l'interval solució, però en altres exercicis sí que ho pot fer.

---

## 13. No cancel·lar les restriccions

Aquest és un error freqüent.

Considerem:

$$
\frac{(x-2)(x+1)}{x+1}>0
$$

Per a $x\neq-1$ podem simplificar:

$$
x-2>0
$$

Per tant:

$$
x>2
$$

En aquest cas la solució és:

$$
\boxed{(2,\infty)}
$$

Però la restricció:

$$
x\neq-1
$$

continua existint.

Encara que $-1$ no acabi pertanyent a l'interval solució, mai hem d'oblidar les restriccions de l'expressió original.

---

## 14. Multiplicar pel denominador

En les equacions podem multiplicar per un denominador sense canviar el tipus d'igualtat.

En una inequació racional això requereix molta cura.

Per exemple:

$$
\frac{1}{x}>0
$$

No podem simplement multiplicar per $x$ i escriure:

$$
1>0
$$

perquè no sabem si $x$ és positiu o negatiu.

Si $x>0$, multiplicar per $x$ conserva el sentit:

$$
1>0
$$

Però si $x<0$, el sentit de la desigualtat canvia:

$$
1<0
$$

Per això, en les inequacions racionals sol ser més segur utilitzar una **taula de signes**.

---

## 15. Regla dels signes

Per determinar el signe d'un producte o quocient:

- Un nombre parell de factors negatius produeix un resultat positiu.
- Un nombre imparell de factors negatius produeix un resultat negatiu.

Per exemple:

$$
(-)\cdot(-)\cdot(+)=+
$$

mentre que:

$$
(-)\cdot(+)\cdot(+) = -
$$

Aquesta regla permet construir ràpidament una taula de signes.

---

## 16. Multiplicitat de les arrels

La multiplicitat d'un factor determina si el signe canvia en travessar una arrel.

Considerem:

$$
(x-2)
$$

El factor té multiplicitat $1$, de manera que el seu signe canvia en passar per $x=2$.

En canvi:

$$
(x-2)^2
$$

té multiplicitat $2$.

El seu signe és sempre no negatiu i no canvia de signe en travessar $x=2$.

En general:

- multiplicitat **imparell** → el signe canvia;
- multiplicitat **parell** → el signe no canvia.

---

## 17. Exemple amb una arrel doble

Resolem:

$$
\frac{(x-2)^2}{x+1}>0
$$

Els punts crítics són:

$$
x=-1,\qquad x=2
$$

El factor $(x-2)^2$ és sempre positiu excepte en $x=2$.

Per tant, el signe depèn principalment de $x+1$.

L'expressió és positiva quan:

$$
x>-1
$$

excepte en $x=2$, on val zero.

Per tant:

$$
\boxed{(-1,2)\cup(2,\infty)}
$$

---

## 18. Inequacions racionals amb valor zero

Si volem resoldre:

$$
\frac{(x-1)(x+2)}{x-3}\geq0
$$

hem d'incloure els zeros del numerador:

$$
x=1,\qquad x=-2
$$

però excloure el zero del denominador:

$$
x=3
$$

La taula de signes proporciona:

$$
\boxed{[-2,1]\cup(3,\infty)}
$$

---

## 19. Representació en la recta real

Els intervals es poden representar mitjançant:

- cercle obert $\rightarrow$ extrem no inclòs;
- cercle tancat $\rightarrow$ extrem inclòs.

Per exemple:

$$
[-2,3)
$$

inclou $-2$ però no inclou $3$.

En una inequació racional, els zeros del denominador sempre es representen com a punts exclosos.

---

## 20. Notació d'intervals

Algunes solucions freqüents són:

$$
(-\infty,a)
$$

$$
(a,\infty)
$$

$$
[a,b]
$$

$$
(a,b)
$$

$$
[a,b)
$$

$$
(a,b]
$$

L'infinit mai s'inclou:

$$
(-\infty,a]
$$

és correcte, però:

$$
[-\infty,a]
$$

no ho és.

---

## 21. Procediment general

Per resoldre una inequació racional:

1. Porta tots els termes a un mateix costat.
2. Simplifica l'expressió.
3. Factoritza el numerador i el denominador.
4. Determina les restriccions del domini.
5. Troba els zeros del numerador.
6. Troba els zeros del denominador.
7. Ordena tots els punts crítics.
8. Divideix la recta real en intervals.
9. Determina el signe en cada interval.
10. Selecciona els intervals que compleixen la desigualtat.
11. Inclou els zeros del numerador quan la desigualtat sigui $\geq$ o $\leq$.
12. Exclou sempre els zeros del denominador.
13. Escriu la solució en notació d'intervals.

---

## 22. Exemple complet

Resolem:

$$
\frac{x^2-1}{x^2-4}>0
$$

### Pas 1: factoritzar

$$
\frac{(x-1)(x+1)}{(x-2)(x+2)}>0
$$

### Pas 2: trobar els punts crítics

Zeros del numerador:

$$
x=-1,\qquad x=1
$$

Zeros del denominador:

$$
x=-2,\qquad x=2
$$

Els punts crítics ordenats són:

$$
-2,\quad -1,\quad 1,\quad 2
$$

### Pas 3: estudiar els signes

| Interval       | Signe |
| -------------- | ----: |
| $(-\infty,-2)$ |   $+$ |
| $(-2,-1)$      |   $-$ |
| $(-1,1)$       |   $+$ |
| $(1,2)$        |   $-$ |
| $(2,\infty)$   |   $+$ |

Volem valors positius:

$$
(-\infty,-2)
$$

$$
(-1,1)
$$

$$
(2,\infty)
$$

Per tant:

$$
\boxed{
(-\infty,-2)\cup(-1,1)\cup(2,\infty)
}
$$

---

## 23. Errors freqüents

### Multiplicar pel denominador sense conèixer el seu signe

Això pot invertir incorrectament la desigualtat.

### Incloure un zero del denominador

Si:

$$
Q(a)=0
$$

aleshores $a$ mai pot pertànyer a la solució.

### Oblidar els zeros del numerador

Si la desigualtat permet la igualtat, els zeros del numerador es poden incloure.

### Cancel·lar factors i oblidar les restriccions

Les restriccions pertanyen a l'expressió original i s'han de conservar.

### No factoritzar completament

Una factorització incompleta pot ocultar punts crítics importants.

### Provar només un punt

Un punt de prova serveix per determinar el signe d'un interval, però primer hem de trobar tots els punts crítics.

---

## 24. Resum

Les idees fonamentals són:

| Concepte                    | Regla                            |
| --------------------------- | -------------------------------- |
| Zero del numerador          | Pot pertànyer a la solució       |
| Zero del denominador        | Mai pertany a la solució         |
| Desigualtat $>$ o $<$       | No inclou els zeros              |
| Desigualtat $\geq$ o $\leq$ | Pot incloure zeros del numerador |
| Multiplicitat imparella     | El signe canvia                  |
| Multiplicitat parella       | El signe no canvia               |
| Taula de signes             | Determina el signe per intervals |
| Restriccions                | Sempre s'han de conservar        |

## 25. Idea fonamental

Una inequació racional no es resol tractant el denominador com si fos sempre positiu.

La idea central és dividir la recta real mitjançant els punts on el numerador o el denominador es fan zero i estudiar el signe en cada interval:

$$
\boxed{
\text{factoritzar}
\rightarrow
\text{punts crítics}
\rightarrow
\text{taula de signes}
\rightarrow
\text{intervals solució}
}
$$

La regla més important és:

$$
\boxed{
\text{zero del denominador}
\Rightarrow
\text{sempre exclòs}
}
$$
