# Inequacions lineals i quadràtiques

Les **inequacions lineals i quadràtiques** permeten determinar quins valors d'una variable fan que una desigualtat algebraica sigui certa.

A diferència d'una equació, una inequació normalment no té una única solució. La seva solució sol ser un **interval** o una unió d'intervals.

---

## 1. Què és una inequació?

Una inequació és una desigualtat que conté una variable.

Els símbols principals són:

- $<$ menor que
- $>$ major que
- $\leq$ menor o igual que
- $\geq$ major o igual que

Per exemple:

$$
2x+3>7
$$

Resoldre aquesta inequació significa trobar tots els valors de $x$ que fan que la desigualtat sigui certa.

---

## 2. Inequacions lineals

Una inequació lineal té la variable amb exponent $1$.

Per exemple:

$$
3x-5>7
$$

L'objectiu és aïllar $x$, de manera semblant a una equació.

### Exemple

$$
3x-5>7
$$

Sumem $5$:

$$
3x>12
$$

Dividim entre $3$:

$$
x>4
$$

Per tant:

$$
\boxed{x>4}
$$

En notació d'interval:

$$
(4,\infty)
$$

---

## 3. Regla fonamental en multiplicar o dividir per un nombre negatiu

Aquesta és una de les regles més importants de les inequacions.

Si multipliquem o dividim una desigualtat per un nombre negatiu, **el sentit de la desigualtat canvia**.

Per exemple:

$$
-2x>6
$$

Dividim entre $-2$:

$$
x<-3
$$

El símbol $>$ es converteix en $<$.

### Exemple

$$
-3x+2\leq 11
$$

Restem $2$:

$$
-3x\leq 9
$$

Dividim entre $-3$ i canviem el sentit:

$$
x\geq -3
$$

Per tant:

$$
\boxed{x\geq -3}
$$

---

## 4. Representació a la recta real

Les solucions d'una inequació es poden representar sobre la recta real.

Per a:

$$
x>2
$$

s'utilitzen els valors majors que $2$, sense incloure el $2$.

En notació d'interval:

$$
(2,\infty)
$$

Per a:

$$
x\geq 2
$$

el $2$ sí que està inclòs:

$$
[2,\infty)
$$

### Regla

- $<$ o $>$ → extrem obert
- $\leq$ o $\geq$ → extrem tancat

---

## 5. Inequacions lineals amb diversos termes

Considerem:

$$
4x-7\leq 2x+5
$$

Agrupem els termes amb $x$:

$$
4x-2x\leq 5+7
$$

$$
2x\leq 12
$$

Dividim entre $2$:

$$
x\leq 6
$$

Solució:

$$
\boxed{x\leq 6}
$$

En intervals:

$$
(-\infty,6]
$$

---

## 6. Inequacions amb parèntesis

Primer desenvolupem els parèntesis.

Per exemple:

$$
3(x-2)+1>2x+4
$$

Desenvolupem:

$$
3x-6+1>2x+4
$$

Simplifiquem:

$$
3x-5>2x+4
$$

Restem $2x$:

$$
x-5>4
$$

Sumem $5$:

$$
x>9
$$

Per tant:

$$
\boxed{x>9}
$$

---

## 7. Inequacions dobles

També podem tenir dues desigualtats simultànies.

Per exemple:

$$
2<x+1\leq 5
$$

Restem $1$ als tres membres:

$$
1<x\leq 4
$$

Per tant:

$$
\boxed{1<x\leq 4}
$$

En notació d'interval:

$$
(1,4]
$$

---

## 8. Inequacions quadràtiques

Una inequació quadràtica conté un polinomi de segon grau.

Per exemple:

$$
x^2-5x+6>0
$$

Primer factoritzem:

$$
(x-2)(x-3)>0
$$

Els valors crítics són:

$$
x=2
$$

i

$$
x=3
$$

Aquests valors divideixen la recta real en tres intervals:

$$
(-\infty,2),\qquad (2,3),\qquad (3,\infty)
$$

---

## 9. Anàlisi del signe

Per determinar on el producte és positiu o negatiu, estudiem el signe de cada factor.

| Interval      | $x-2$ | $x-3$ | Producte |
| ------------- | ----: | ----: | -------: |
| $(-\infty,2)$ |   $-$ |   $-$ |      $+$ |
| $(2,3)$       |   $+$ |   $-$ |      $-$ |
| $(3,\infty)$  |   $+$ |   $+$ |      $+$ |

Com que volem:

$$
(x-2)(x-3)>0
$$

seleccionem els intervals on el producte és positiu:

$$
\boxed{x<2\quad\text{o}\quad x>3}
$$

En intervals:

$$
\boxed{(-\infty,2)\cup(3,\infty)}
$$

---

## 10. Per què apareixen els punts crítics?

Els punts crítics són els valors on l'expressió pot canviar de signe.

Per a un polinomi factoritzat:

$$
(x-a)(x-b)
$$

els punts crítics són:

$$
x=a,\qquad x=b
$$

Aquests valors divideixen la recta real en regions on el signe roman constant.

---

## 11. Inequació quadràtica menor que zero

Considerem:

$$
x^2-5x+6<0
$$

Factoritzem:

$$
(x-2)(x-3)<0
$$

De la taula anterior sabem que el producte és negatiu entre les arrels.

Per tant:

$$
\boxed{2<x<3}
$$

En intervals:

$$
\boxed{(2,3)}
$$

---

## 12. Quan la desigualtat inclou la igualtat

Considerem:

$$
x^2-5x+6\geq 0
$$

Factoritzem:

$$
(x-2)(x-3)\geq 0
$$

El producte és positiu fora de les arrels i és igual a zero en aquestes.

Per tant:

$$
\boxed{x\leq 2\quad\text{o}\quad x\geq 3}
$$

En intervals:

$$
\boxed{(-\infty,2]\cup[3,\infty)}
$$

Els extrems s'inclouen perquè la desigualtat conté $\geq$.

---

## 13. Mètode dels punts de prova

Una altra manera de resoldre una inequació quadràtica és escollir un punt de cada interval i comprovar el signe.

Per a:

$$
(x-2)(x-3)>0
$$

els intervals són:

$$
(-\infty,2),\quad (2,3),\quad (3,\infty)
$$

Podem escollir:

- $x=0$
- $x=2.5$
- $x=4$

### Primer interval

$$
(0-2)(0-3)=(-2)(-3)=6>0
$$

S'inclou.

### Segon interval

$$
(2.5-2)(2.5-3)=(0.5)(-0.5)<0
$$

No s'inclou.

### Tercer interval

$$
(4-2)(4-3)=2>0
$$

S'inclou.

Resultat:

$$
\boxed{(-\infty,2)\cup(3,\infty)}
$$

---

## 14. Inequacions quadràtiques amb coeficient principal negatiu

Considerem:

$$
-x^2+4x-3>0
$$

Factoritzem:

$$
-(x^2-4x+3)>0
$$

$$
-(x-1)(x-3)>0
$$

Els punts crítics són $1$ i $3$.

La paràbola obre cap avall, de manera que és positiva entre les arrels.

Així:

$$
\boxed{1<x<3}
$$

---

## 15. Ús de la paràbola

Una inequació quadràtica també es pot interpretar mitjançant la seva funció associada:

$$
f(x)=ax^2+bx+c
$$

Resoldre:

$$
ax^2+bx+c>0
$$

equival a trobar els valors de $x$ per als quals la gràfica de $f$ està **per sobre de l'eix $x$**.

Resoldre:

$$
ax^2+bx+c<0
$$

equival a trobar on la gràfica està **per sota de l'eix $x$**.

---

## 16. Exemple mitjançant la gràfica

Considerem:

$$
x^2-4x+3<0
$$

L'expressió es factoritza com:

$$
(x-1)(x-3)<0
$$

Les arrels són $1$ i $3$.

La paràbola obre cap amunt, de manera que està per sota de l'eix $x$ entre les arrels.

Per tant:

$$
\boxed{1<x<3}
$$

---

## 17. Quan no existeixen arrels reals

No totes les expressions quadràtiques tenen arrels reals.

Considerem:

$$
x^2+1>0
$$

Com que:

$$
x^2\geq 0
$$

tenim:

$$
x^2+1\geq 1
$$

Per tant, sempre és positiva:

$$
\boxed{x\in\mathbb{R}}
$$

En canvi:

$$
x^2+1<0
$$

no té solució real:

$$
\boxed{\varnothing}
$$

---

## 18. Discriminant

Per a una equació quadràtica:

$$
ax^2+bx+c=0
$$

el discriminant és:

$$
\Delta=b^2-4ac
$$

Permet determinar el nombre d'arrels reals.

### Si $\Delta>0$

Existeixen dues arrels reals diferents.

### Si $\Delta=0$

Existeix una arrel real doble.

### Si $\Delta<0$

No existeixen arrels reals.

Això també ajuda a analitzar el signe d'una expressió quadràtica.

---

## 19. Una arrel doble

Considerem:

$$
(x-2)^2\geq 0
$$

Un quadrat sempre és no negatiu.

Per tant:

$$
\boxed{x\in\mathbb{R}}
$$

En canvi:

$$
(x-2)^2<0
$$

no té solució real:

$$
\boxed{\varnothing}
$$

L'arrel $x=2$ no canvia el signe perquè té multiplicitat parella.

---

## 20. Inequacions quadràtiques amb fraccions

Si l'expressió conté una fracció, primer hem de tenir en compte les restriccions del denominador.

Per exemple:

$$
\frac{x^2-4}{x-1}>0
$$

Factoritzem el numerador:

$$
\frac{(x-2)(x+2)}{x-1}>0
$$

Els punts crítics són:

$$
x=-2,\qquad x=1,\qquad x=2
$$

Però $x=1$ no pertany al domini perquè anul·la el denominador.

Els intervals són:

$$
(-\infty,-2),\quad (-2,1),\quad (1,2),\quad (2,\infty)
$$

Després estudiem el signe en cada interval.

Aquest procediment connecta les inequacions quadràtiques amb les **inequacions racionals**.

---

## 21. Multiplicitat de les arrels

La multiplicitat d'una arrel determina si el signe canvia en travessar-la.

### Multiplicitat senar

El signe canvia.

Per exemple:

$$
(x-2)
$$

canvia de signe en passar per $x=2$.

### Multiplicitat parella

El signe no canvia.

Per exemple:

$$
(x-2)^2
$$

és positiu als dos costats de $2$.

Aquesta observació permet construir taules de signes de manera més ràpida.

---

## 22. Procediment general per a inequacions lineals

Per resoldre una inequació lineal:

1. Elimina els parèntesis.
2. Redueix els termes semblants.
3. Agrupa les variables en un costat.
4. Agrupa les constants a l'altre.
5. Aïlla la variable.
6. Si multipliques o divideixes entre un nombre negatiu, canvia el sentit de la desigualtat.
7. Expressa la solució mitjançant una desigualtat o un interval.

---

## 23. Procediment general per a inequacions quadràtiques

Per resoldre una inequació quadràtica:

1. Porta tots els termes a un mateix costat.
2. Simplifica l'expressió.
3. Troba les arrels.
4. Factoritza quan sigui possible.
5. Ordena els punts crítics.
6. Divideix la recta real en intervals.
7. Determina el signe en cada interval.
8. Selecciona els intervals que compleixen la desigualtat.
9. Inclou les arrels si la desigualtat conté $\leq$ o $\geq$.
10. Escriu la solució en notació d'interval.

---

## 24. Exemple complet

Resolem:

$$
2x^2-x-3\leq 0
$$

### Pas 1: Factoritzar

Busquem dos factors:

$$
2x^2-x-3=(2x-3)(x+1)
$$

Per tant:

$$
(2x-3)(x+1)\leq 0
$$

### Pas 2: Trobar els punts crítics

Igualem cada factor a zero:

$$
2x-3=0
$$

$$
x=\frac{3}{2}
$$

i:

$$
x+1=0
$$

$$
x=-1
$$

### Pas 3: Ordenar els punts

$$
-1<\frac{3}{2}
$$

Els intervals són:

$$
(-\infty,-1),\quad
\left(-1,\frac{3}{2}\right),\quad
\left(\frac{3}{2},\infty\right)
$$

### Pas 4: Analitzar el signe

| Interval                          | $2x-3$ | $x+1$ | Producte |
| --------------------------------- | -----: | ----: | -------: |
| $(-\infty,-1)$                    |    $-$ |   $-$ |      $+$ |
| $\left(-1,\frac{3}{2}\right)$     |    $-$ |   $+$ |      $-$ |
| $\left(\frac{3}{2},\infty\right)$ |    $+$ |   $+$ |      $+$ |

Volem:

$$
(2x-3)(x+1)\leq 0
$$

Per tant, seleccionem l'interval on el producte és negatiu i els punts on és zero:

$$
\boxed{-1\leq x\leq\frac{3}{2}}
$$

En intervals:

$$
\boxed{\left[-1,\frac{3}{2}\right]}
$$

---

## 25. Errors freqüents

### Oblidar canviar el sentit en dividir entre un nombre negatiu

Incorrecte:

$$
-2x>4
\Rightarrow x>-2
$$

Correcte:

$$
-2x>4
\Rightarrow x<-2
$$

### Incloure una arrel en una desigualtat estricta

Per a:

$$
(x-2)(x-3)>0
$$

no podem incloure $2$ ni $3$.

La solució és:

$$
(-\infty,2)\cup(3,\infty)
$$

### Incloure sempre les arrels

Les arrels només s'inclouen quan la desigualtat conté:

$$
\leq
$$

o

$$
\geq
$$

### Resoldre una quadràtica com si fos una equació

Trobar les arrels no és suficient. Les arrels només divideixen la recta en intervals on hem d'estudiar el signe.

### Oblidar el domini

En expressions amb denominadors, els valors que fan zero el denominador mai poden pertànyer a la solució.

---

## 26. Resum

| Tipus                         | Mètode principal                                                              |
| ----------------------------- | ----------------------------------------------------------------------------- |
| Lineal                        | Aïllar la variable                                                            |
| Lineal amb nombre negatiu     | Canviar el sentit de la desigualtat                                           |
| Quadràtica                    | Trobar arrels i analitzar signes                                              |
| Quadràtica factoritzada       | Taula de signes                                                               |
| Quadràtica sense arrels reals | Analitzar el signe mitjançant el coeficient principal o completant el quadrat |
| Quadràtica amb arrel doble    | El signe no canvia a l'arrel                                                  |
| Racional                      | Punts crítics i restriccions de domini                                        |

Les idees fonamentals són:

$$
\boxed{\text{arrels}+\text{signes}+\text{intervals}}
$$

per a les inequacions quadràtiques, i

$$
\boxed{\text{aïllar}+\text{invertir el signe si correspon}}
$$

per a les inequacions lineals.

---

## 27. Idea fonamental

Resoldre una inequació significa determinar **en quines regions de la recta real la desigualtat és certa**.

En les inequacions lineals, normalment n'hi ha prou amb aïllar la variable.

En les inequacions quadràtiques, les arrels divideixen la recta real en intervals i el signe de l'expressió determina quins formen part de la solució.

Per això, una inequació quadràtica es pot entendre com un problema de:

$$
\boxed{\text{punts crítics}\longrightarrow\text{signes}\longrightarrow\text{intervals}}
$$
