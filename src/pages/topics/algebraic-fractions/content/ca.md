# Fraccions algebraiques

Les **fraccions algebraiques** són expressions que contenen polinomis al numerador, al denominador o a tots dos.

Per exemple:

$$
\frac{x+2}{x-3}
$$

o:

$$
\frac{x^2-4}{x^2-9}
$$

Les fraccions algebraiques es comporten de manera semblant a les fraccions numèriques, però tenen una característica fonamental: **el denominador no pot ser igual a zero**.

---

## 1. Què és una fracció algebraica?

Una fracció algebraica té la forma:

$$
\frac{P(x)}{Q(x)}
$$

on $P(x)$ i $Q(x)$ són expressions algebraiques i:

$$
Q(x)\neq 0
$$

Per exemple:

$$
\frac{2x+1}{x-4}
$$

és una fracció algebraica.

El seu domini exclou el valor:

$$
x=4
$$

perquè faria que el denominador fos zero.

---

## 2. Numerador i denominador

En:

$$
\frac{x^2-1}{x+3}
$$

tenim:

- Numerador: $x^2-1$
- Denominador: $x+3$

El denominador determina les restriccions de domini.

$$
x+3\neq 0
$$

Per tant:

$$
x\neq -3
$$

---

## 3. Restriccions de domini

Abans de simplificar una fracció algebraica, és convenient determinar els valors que fan zero el denominador.

Per exemple:

$$
\frac{x+1}{x^2-4}
$$

Factoritzem:

$$
x^2-4=(x-2)(x+2)
$$

Per tant:

$$
(x-2)(x+2)\neq 0
$$

i:

$$
x\neq 2,\qquad x\neq -2
$$

El domini és:

$$
\boxed{\mathbb{R}\setminus\{-2,2\}}
$$

---

## 4. Simplificació de fraccions algebraiques

Simplificar una fracció algebraica significa escriure-la en una forma equivalent més senzilla.

Per fer-ho podem factoritzar el numerador i el denominador i cancel·lar els factors comuns.

Per exemple:

$$
\frac{x^2-4}{x^2-2x}
$$

Factoritzem:

$$
\frac{(x-2)(x+2)}{x(x-2)}
$$

Cancel·lem el factor comú $x-2$:

$$
\frac{x+2}{x}
$$

Però hem de conservar les restriccions originals:

$$
x\neq 0,\qquad x\neq 2
$$

Per tant:

$$
\boxed{\frac{x^2-4}{x^2-2x}=\frac{x+2}{x}}
$$

amb:

$$
x\neq 0,2
$$

---

## 5. Cancel·lar factors, no termes

Aquesta és una regla fonamental.

Podem cancel·lar factors:

$$
\frac{(x-2)(x+3)}{x-2}=x+3
$$

però no podem cancel·lar termes individuals:

$$
\frac{x+2}{x}\neq 2
$$

Tampoc podem fer:

$$
\frac{x+2}{x+3}= \frac{2}{3}
$$

perquè $x+2$ i $x+3$ són sumes, no factors comuns.

---

## 6. Factor comú

Una de les tècniques més importants és extreure factors comuns.

Per exemple:

$$
\frac{6x^2+9x}{3x}
$$

Factoritzem el numerador:

$$
\frac{3x(2x+3)}{3x}
$$

Cancel·lem:

$$
2x+3
$$

L'expressió simplificada és:

$$
\boxed{2x+3}
$$

amb la restricció original:

$$
x\neq 0
$$

---

## 7. Diferència de quadrats

Recordem la identitat:

$$
a^2-b^2=(a-b)(a+b)
$$

Per exemple:

$$
\frac{x^2-9}{x-3}
$$

Factoritzem:

$$
\frac{(x-3)(x+3)}{x-3}
$$

Simplifiquem:

$$
x+3
$$

Però:

$$
x\neq 3
$$

Per tant:

$$
\boxed{\frac{x^2-9}{x-3}=x+3,\qquad x\neq 3}
$$

---

## 8. Trinomis quadràtics

També podem simplificar fraccions factoritzant trinomis.

Per exemple:

$$
\frac{x^2+5x+6}{x^2+3x+2}
$$

Factoritzem:

$$
x^2+5x+6=(x+2)(x+3)
$$

i:

$$
x^2+3x+2=(x+1)(x+2)
$$

Per tant:

$$
\frac{(x+2)(x+3)}{(x+1)(x+2)}
$$

Cancel·lem:

$$
\frac{x+3}{x+1}
$$

Les restriccions originals són:

$$
x\neq -1,\qquad x\neq -2
$$

---

## 9. Multiplicació de fraccions algebraiques

Per multiplicar fraccions algebraiques:

1. Factoritza quan sigui possible.
2. Cancel·la els factors comuns.
3. Multiplica els numeradors.
4. Multiplica els denominadors.
5. Indica les restriccions del domini.

Per exemple:

$$
\frac{x^2-4}{x+1}\cdot\frac{x+1}{x+2}
$$

Factoritzem:

$$
\frac{(x-2)(x+2)}{x+1}\cdot\frac{x+1}{x+2}
$$

Cancel·lem:

$$
x-2
$$

Per tant:

$$
\boxed{x-2}
$$

Les restriccions són:

$$
x\neq -1,\qquad x\neq -2
$$

---

## 10. Divisió de fraccions algebraiques

Dividir entre una fracció equival a multiplicar per la seva inversa.

Per exemple:

$$
\frac{x^2-4}{x+1}\div\frac{x-2}{x+3}
$$

Convertim la divisió en multiplicació:

$$
\frac{x^2-4}{x+1}\cdot\frac{x+3}{x-2}
$$

Factoritzem:

$$
\frac{(x-2)(x+2)}{x+1}\cdot\frac{x+3}{x-2}
$$

Cancel·lem:

$$
\frac{(x+2)(x+3)}{x+1}
$$

Cal considerar totes les restriccions:

$$
x\neq -1,\qquad x\neq -3,\qquad x\neq 2
$$

Per tant:

$$
\boxed{\frac{(x+2)(x+3)}{x+1}}
$$

amb:

$$
x\neq -1,-3,2
$$

---

## 11. Suma i resta de fraccions algebraiques

Per sumar o restar fraccions algebraiques necessitem un **denominador comú**.

Per exemple:

$$
\frac{1}{x}+\frac{2}{x+1}
$$

El denominador comú és:

$$
x(x+1)
$$

Aleshores:

$$
\frac{x+1}{x(x+1)}
+
\frac{2x}{x(x+1)}
$$

Sumem els numeradors:

$$
\frac{x+1+2x}{x(x+1)}
$$

$$
\frac{3x+1}{x(x+1)}
$$

Per tant:

$$
\boxed{\frac{3x+1}{x(x+1)}}
$$

amb:

$$
x\neq 0,-1
$$

---

## 12. Mínim comú múltiple de polinomis

Quan els denominadors són més complexos, podem utilitzar el mínim comú múltiple.

Per exemple:

$$
\frac{1}{x^2-4}+\frac{1}{x-2}
$$

Factoritzem:

$$
x^2-4=(x-2)(x+2)
$$

El mínim comú denominador és:

$$
(x-2)(x+2)
$$

Per tant:

$$
\frac{1}{(x-2)(x+2)}
+
\frac{x+2}{(x-2)(x+2)}
$$

Sumem:

$$
\frac{x+3}{(x-2)(x+2)}
$$

Les restriccions són:

$$
x\neq 2,\qquad x\neq -2
$$

---

## 13. Denominadors amb factors comuns

Considerem:

$$
\frac{2}{x^2-x}+\frac{1}{x}
$$

Factoritzem:

$$
x^2-x=x(x-1)
$$

El mínim comú denominador és:

$$
x(x-1)
$$

Aleshores:

$$
\frac{2}{x(x-1)}
+
\frac{x-1}{x(x-1)}
$$

Sumem:

$$
\frac{2+x-1}{x(x-1)}
$$

$$
\boxed{\frac{x+1}{x(x-1)}}
$$

amb:

$$
x\neq 0,1
$$

---

## 14. Fraccions algebraiques complexes

Una fracció algebraica complexa conté fraccions al seu numerador o denominador.

Per exemple:

$$
\frac{\frac{1}{x}+\frac{1}{y}}{\frac{1}{x}}
$$

Primer simplifiquem el numerador:

$$
\frac{1}{x}+\frac{1}{y}
=
\frac{x+y}{xy}
$$

Aleshores:

$$
\frac{\frac{x+y}{xy}}{\frac{1}{x}}
$$

Dividim per $\frac{1}{x}$:

$$
\frac{x+y}{xy}\cdot x
$$

Simplifiquem:

$$
\boxed{\frac{x+y}{y}}
$$

---

## 15. Eliminar denominadors

En una expressió o equació amb diverses fraccions, podem multiplicar tota l'expressió pel mínim comú denominador.

Per exemple:

$$
\frac{x}{2}+\frac{x}{3}=5
$$

El mínim comú denominador és $6$.

Multipliquem tota l'equació per $6$:

$$
3x+2x=30
$$

$$
5x=30
$$

$$
\boxed{x=6}
$$

Aquest procediment és especialment útil per resoldre equacions racionals.

---

## 16. Equacions amb fraccions algebraiques

Considerem:

$$
\frac{x+1}{x-2}=3
$$

Primer establim la restricció:

$$
x\neq 2
$$

Multipliquem per $x-2$:

$$
x+1=3(x-2)
$$

Desenvolupem:

$$
x+1=3x-6
$$

$$
7=2x
$$

$$
x=\frac{7}{2}
$$

Com que:

$$
\frac{7}{2}\neq 2
$$

la solució és vàlida:

$$
\boxed{x=\frac{7}{2}}
$$

---

## 17. Identitats algebraiques

Dues expressions racionals poden ser equivalents en tots els punts del seu domini comú.

Per exemple:

$$
\frac{x^2-4}{x-2}=x+2
$$

sempre que:

$$
x\neq 2
$$

No hem d'afirmar que totes dues expressions són iguals per a $x=2$, perquè l'expressió original no està definida en aquest punt.

---

## 18. Forats a la gràfica

Considerem:

$$
f(x)=\frac{x^2-4}{x-2}
$$

Simplifiquem:

$$
f(x)=x+2
$$

però:

$$
x\neq 2
$$

Per tant, la gràfica coincideix amb la recta:

$$
y=x+2
$$

excepte en el punt corresponent a:

$$
x=2
$$

En aquest punt hi ha un **forat**.

La seva coordenada seria:

$$
(2,4)
$$

però aquest punt no pertany a la funció original.

---

## 19. Fraccions algebraiques i valor absolut

Les fraccions algebraiques també poden aparèixer dins de valors absoluts.

Per exemple:

$$
\left|\frac{x-1}{x+2}\right|
$$

La restricció de domini és:

$$
x\neq -2
$$

Per estudiar-ne el signe podem analitzar:

$$
\frac{x-1}{x+2}
$$

Els punts crítics són:

$$
x=1,\qquad x=-2
$$

---

## 20. Fraccions algebraiques amb potències

Les propietats de les potències també permeten simplificar fraccions algebraiques.

Per exemple:

$$
\frac{x^5}{x^2}=x^3
$$

sempre que:

$$
x\neq 0
$$

En general:

$$
\frac{x^m}{x^n}=x^{m-n}
$$

per a $x\neq 0$.

---

## 21. Exponents negatius

Un exponent negatiu representa l'invers:

$$
x^{-n}=\frac{1}{x^n}
$$

Per exemple:

$$
x^{-2}=\frac{1}{x^2}
$$

Per tant:

$$
\frac{1}{x^{-2}}=x^2
$$

sempre que $x\neq 0$.

---

## 22. Fraccions algebraiques amb arrels

Les arrels també poden aparèixer en fraccions algebraiques.

Per exemple:

$$
\frac{\sqrt{x}}{x}
$$

Com que:

$$
x=\sqrt{x}\sqrt{x}
$$

per a $x>0$:

$$
\frac{\sqrt{x}}{x}
=
\frac{\sqrt{x}}{\sqrt{x}\sqrt{x}}
=
\frac{1}{\sqrt{x}}
$$

L'expressió original requereix:

$$
x>0
$$

perquè $\sqrt{x}$ ha d'estar definida i $x$ no pot ser zero.

---

## 23. Racionalització

De vegades volem eliminar una arrel del denominador.

Per exemple:

$$
\frac{1}{\sqrt{x}}
$$

Multipliquem per $\sqrt{x}$:

$$
\frac{1}{\sqrt{x}}\cdot\frac{\sqrt{x}}{\sqrt{x}}
$$

Obtenim:

$$
\frac{\sqrt{x}}{x}
$$

Per tant:

$$
\boxed{\frac{1}{\sqrt{x}}=\frac{\sqrt{x}}{x}}
$$

per a $x>0$.

---

## 24. Racionalització amb conjugats

Si el denominador conté una suma o diferència d'arrels, utilitzem el conjugat.

Per exemple:

$$
\frac{1}{\sqrt{x}+1}
$$

Multipliquem per:

$$
\frac{\sqrt{x}-1}{\sqrt{x}-1}
$$

Aleshores:

$$
\frac{\sqrt{x}-1}{(\sqrt{x}+1)(\sqrt{x}-1)}
$$

Apliquem la diferència de quadrats:

$$
\frac{\sqrt{x}-1}{x-1}
$$

per a:

$$
x\geq 0,\qquad x\neq 1
$$

---

## 25. Procediment general per simplificar

Per simplificar una fracció algebraica:

1. Determina les restriccions del denominador.
2. Factoritza numerador i denominador.
3. Identifica els factors comuns.
4. Cancel·la únicament factors.
5. Conserva les restriccions originals.
6. Comprova que l'expressió resultant estigui correctament simplificada.

---

## 26. Procediment per multiplicar

Per multiplicar:

$$
\frac{P}{Q}\cdot\frac{R}{S}
$$

podem seguir aquests passos:

1. Factoritza tots els polinomis.
2. Identifica els factors comuns.
3. Cancel·la abans de multiplicar.
4. Multiplica els factors restants.
5. Indica les restriccions.

---

## 27. Procediment per dividir

Per dividir:

$$
\frac{P}{Q}\div\frac{R}{S}
$$

1. Conserva la primera fracció.
2. Inverteix la segona.
3. Canvia la divisió per una multiplicació.
4. Factoritza.
5. Simplifica.
6. Comprova les restriccions.

A més, la segona fracció no pot ser igual a zero.

---

## 28. Procediment per sumar o restar

Per sumar o restar:

1. Factoritza els denominadors.
2. Troba el mínim comú denominador.
3. Reescriu cada fracció amb aquest denominador.
4. Opera amb els numeradors.
5. Simplifica el resultat.
6. Conserva les restriccions originals.

---

## 29. Exemple complet

Simplifiquem:

$$
\frac{x^2-9}{x^2-5x+6}
+
\frac{1}{x-2}
$$

### Pas 1: Factoritzar

Tenim:

$$
x^2-9=(x-3)(x+3)
$$

i:

$$
x^2-5x+6=(x-2)(x-3)
$$

Per tant:

$$
\frac{(x-3)(x+3)}{(x-2)(x-3)}
+
\frac{1}{x-2}
$$

Les restriccions són:

$$
x\neq 2,\qquad x\neq 3
$$

### Pas 2: Simplificar la primera fracció

$$
\frac{x+3}{x-2}
+
\frac{1}{x-2}
$$

### Pas 3: Sumar

$$
\frac{x+3+1}{x-2}
$$

$$
\boxed{\frac{x+4}{x-2}}
$$

amb:

$$
x\neq 2,3
$$

Encara que $x=3$ ja no aparegui al denominador final, continua sent una restricció perquè pertanyia al domini de l'expressió original.

---

## 30. Errors freqüents

### Cancel·lar termes en lloc de factors

Incorrecte:

$$
\frac{x+2}{x}=2
$$

No es poden cancel·lar termes d'una suma.

### Oblidar les restriccions

De:

$$
\frac{x^2-4}{x-2}=x+2
$$

no hem d'oblidar:

$$
x\neq 2
$$

### Multiplicar incorrectament els denominadors

Recordem:

$$
\frac{a}{b}\cdot\frac{c}{d}
=
\frac{ac}{bd}
$$

### Dividir sense invertir la segona fracció

Recordem:

$$
\frac{a}{b}\div\frac{c}{d}
=
\frac{a}{b}\cdot\frac{d}{c}
$$

### Cancel·lar abans de factoritzar

Moltes simplificacions només apareixen després de factoritzar els polinomis.

---

## 31. Resum

| Operació        | Idea principal                                    |
| --------------- | ------------------------------------------------- |
| Simplificació   | Factoritzar i cancel·lar factors                  |
| Multiplicació   | Multiplicar numeradors i denominadors             |
| Divisió         | Multiplicar per la fracció inversa                |
| Suma            | Buscar denominador comú                           |
| Resta           | Buscar denominador comú                           |
| Equacions       | Eliminar denominadors respectant les restriccions |
| Racionalització | Eliminar arrels del denominador                   |
| Domini          | Excloure els valors que anul·len denominadors     |

La regla fonamental és:

$$
\boxed{\text{factoritzar}\longrightarrow\text{simplificar}\longrightarrow\text{comprovar el domini}}
$$

---

## 32. Idea fonamental

Una fracció algebraica no és simplement una fracció amb lletres.

El seu comportament depèn de:

$$
\boxed{\text{factors}+\text{restriccions}+\text{operacions}}
$$

Factoritzar permet simplificar les expressions, però les restriccions del domini pertanyen a l'expressió original i s'han de conservar.

Per això, quan treballem amb fraccions algebraiques, sempre hem de distingir entre:

$$
\boxed{\text{expressió simplificada}}
$$

i

$$
\boxed{\text{domini original}}
$$
