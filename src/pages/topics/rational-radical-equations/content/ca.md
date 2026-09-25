# Equacions racionals i amb radicals

Les equacions racionals i les equacions amb radicals contenen expressions que poden introduir **restriccions en el domini**. Per això, a més de transformar i resoldre l'equació, és fonamental comprovar les solucions obtingudes.

---

## 1. Què són les equacions racionals?

Una equació racional és una equació que conté expressions racionals, normalment fraccions algebraiques en què la incògnita apareix al denominador.

Per exemple:

$$
\frac{1}{x}=2
$$

o:

$$
\frac{x+1}{x-2}=3
$$

La primera condició que hem d'establir és:

$$
x\neq0
$$

perquè no es pot dividir per zero.

En general, qualsevol valor que faci zero un denominador s'ha d'excloure del domini.

---

## 2. Restriccions del domini

Abans de manipular una equació racional hem d'identificar els valors prohibits.

Per exemple:

$$
\frac{x+1}{x-3}=2
$$

El denominador no pot ser zero:

$$
x-3\neq0
$$

per tant:

$$
\boxed{x\neq3}
$$

Aquesta restricció s'ha de mantenir durant tot el procés.

---

## 3. Resoldre una equació racional senzilla

Considerem:

$$
\frac{1}{x}=2
$$

amb:

$$
x\neq0
$$

Multipliquem els dos membres per $x$:

$$
1=2x
$$

Aïllem:

$$
x=\frac12
$$

La solució respecta la restricció $x\neq0$.

Per tant:

$$
\boxed{x=\frac12}
$$

---

## 4. Eliminar denominadors

Quan una equació conté diverses fraccions, podem multiplicar tota l'equació pel **mínim comú múltiple dels denominadors**.

Per exemple:

$$
\frac{1}{x}+\frac{1}{2}=1
$$

La restricció és:

$$
x\neq0
$$

Multipliquem per $2x$:

$$
2+x=2x
$$

Per tant:

$$
x=2
$$

Com que $2\neq0$, la solució és vàlida:

$$
\boxed{x=2}
$$

---

## 5. Exemple amb diversos denominadors

Considerem:

$$
\frac{2}{x-1}+\frac{1}{x+1}=1
$$

Les restriccions són:

$$
x\neq1
$$

i:

$$
x\neq-1
$$

El mínim comú denominador és:

$$
(x-1)(x+1)
$$

Multipliquem tota l'equació:

$$
2(x+1)+(x-1)=x^2-1
$$

Desenvolupem:

$$
2x+2+x-1=x^2-1
$$

$$
3x+1=x^2-1
$$

Reordenem:

$$
x^2-3x-2=0
$$

Aplicant la fórmula quadràtica:

$$
x=\frac{3\pm\sqrt{17}}{2}
$$

Cap d'aquestes solucions és $1$ o $-1$, per tant totes dues són vàlides.

---

## 6. Què són les equacions amb radicals?

Una equació amb radicals conté la incògnita dins d'una arrel.

Per exemple:

$$
\sqrt{x}=3
$$

o:

$$
\sqrt{x+1}=x-1
$$

També poden aparèixer arrels de diferents índexs:

$$
\sqrt[3]{x+2}=4
$$

---

## 7. Restriccions de les arrels

En els nombres reals, una arrel d'índex parell requereix que el radicand sigui no negatiu.

Per exemple:

$$
\sqrt{x-2}
$$

requereix:

$$
x-2\geq0
$$

per tant:

$$
\boxed{x\geq2}
$$

En canvi, una arrel d'índex senar, com:

$$
\sqrt[3]{x}
$$

està definida per a qualsevol nombre real.

---

## 8. Resoldre una arrel senzilla

Considerem:

$$
\sqrt{x}=5
$$

Elevem els dos membres al quadrat:

$$
(\sqrt{x})^2=5^2
$$

Per tant:

$$
x=25
$$

La solució és:

$$
\boxed{x=25}
$$

---

## 9. Eliminar una arrel

Quan tenim una equació com:

$$
\sqrt{f(x)}=g(x)
$$

podem elevar els dos membres al quadrat:

$$
f(x)=g(x)^2
$$

Tanmateix, aquest procediment pot introduir **solucions estranyes**.

Per això, les solucions obtingudes sempre s'han de comprovar en l'equació original.

---

## 10. Solucions estranyes

Considerem:

$$
\sqrt{x+1}=x-1
$$

Primer observem que el membre esquerre sempre és no negatiu. Per tant, també necessitem:

$$
x-1\geq0
$$

és a dir:

$$
x\geq1
$$

Elevem al quadrat:

$$
x+1=(x-1)^2
$$

Desenvolupem:

$$
x+1=x^2-2x+1
$$

$$
x=x^2-2x
$$

$$
x^2-3x=0
$$

Factoritzem:

$$
x(x-3)=0
$$

Obtenim:

$$
x=0
$$

o:

$$
x=3
$$

Però $x=0$ no compleix $x\geq1$.

Comprovem $x=3$:

$$
\sqrt{3+1}=3-1
$$

$$
2=2
$$

Per tant:

$$
\boxed{x=3}
$$

---

## 11. Per què apareixen solucions estranyes?

Elevar al quadrat no és una transformació equivalent en tots els casos.

Per exemple:

$$
a=b
$$

implica:

$$
a^2=b^2
$$

però la igualtat:

$$
a^2=b^2
$$

pot provenir de:

$$
a=b
$$

o:

$$
a=-b
$$

Per això, després d'elevar al quadrat hem de comprovar les solucions en l'equació original.

---

## 12. Radicals als dos membres

Considerem:

$$
\sqrt{x+3}=\sqrt{2x-1}
$$

Primer establim el domini:

$$
x+3\geq0
$$

i:

$$
2x-1\geq0
$$

La segona condició és més restrictiva:

$$
x\geq\frac12
$$

Elevem els dos membres al quadrat:

$$
x+3=2x-1
$$

Aïllem:

$$
x=4
$$

Comprovem:

$$
\sqrt7=\sqrt7
$$

Per tant:

$$
\boxed{x=4}
$$

---

## 13. Dos radicals

Considerem:

$$
\sqrt{x+5}-\sqrt{x}=1
$$

Aïllem una arrel:

$$
\sqrt{x+5}=1+\sqrt{x}
$$

Elevem al quadrat:

$$
x+5=1+2\sqrt{x}+x
$$

Simplifiquem:

$$
4=2\sqrt{x}
$$

$$
\sqrt{x}=2
$$

Tornem a elevar al quadrat:

$$
x=4
$$

Comprovem en l'equació original:

$$
\sqrt9-\sqrt4=3-2=1
$$

Per tant:

$$
\boxed{x=4}
$$

---

## 14. Radicals d'índex senar

Les arrels d'índex senar no necessiten que el radicand sigui positiu.

Per exemple:

$$
\sqrt[3]{x-2}=3
$$

Elevem al cub:

$$
x-2=27
$$

Per tant:

$$
\boxed{x=29}
$$

---

## 15. Equacions racionals amb radicals

Una equació pot combinar fraccions i radicals.

Per exemple:

$$
\frac{1}{\sqrt{x}}=2
$$

Aquí tenim dues restriccions:

$$
x\geq0
$$

perquè apareix una arrel quadrada, i també:

$$
\sqrt{x}\neq0
$$

perquè està al denominador.

Per tant:

$$
\boxed{x>0}
$$

Multipliquem:

$$
1=2\sqrt{x}
$$

Aleshores:

$$
\sqrt{x}=\frac12
$$

Elevem al quadrat:

$$
x=\frac14
$$

La solució és vàlida.

---

## 16. Radicals als denominadors

Quan una arrel apareix al denominador, hem de recordar que el denominador no pot ser zero.

Per exemple:

$$
\frac{1}{\sqrt{x-2}}
$$

requereix:

$$
x-2>0
$$

Per tant:

$$
\boxed{x>2}
$$

Observa que no n'hi ha prou amb:

$$
x-2\geq0
$$

perquè $x=2$ faria que el denominador fos zero.

---

## 17. Racionalització

En algunes expressions és convenient eliminar radicals del denominador.

Per exemple:

$$
\frac{1}{\sqrt2}
$$

Multipliquem numerador i denominador per $\sqrt2$:

$$
\frac{1}{\sqrt2}
\cdot
\frac{\sqrt2}{\sqrt2}
=
\frac{\sqrt2}{2}
$$

Per tant:

$$
\boxed{\frac{1}{\sqrt2}=\frac{\sqrt2}{2}}
$$

---

## 18. Racionalització amb binomis

Per racionalitzar expressions com:

$$
\frac{1}{a+\sqrt b}
$$

podem multiplicar pel conjugat:

$$
a-\sqrt b
$$

perquè:

$$
(a+\sqrt b)(a-\sqrt b)=a^2-b
$$

Per exemple:

$$
\frac{1}{2+\sqrt3}
$$

Multipliquem per:

$$
\frac{2-\sqrt3}{2-\sqrt3}
$$

Obtenim:

$$
\frac{2-\sqrt3}{4-3}
$$

i, per tant:

$$
\boxed{2-\sqrt3}
$$

---

## 19. Equacions amb valor absolut i radicals

Algunes equacions poden combinar radicals amb valors absoluts.

Per exemple:

$$
\sqrt{x^2}=|x|
$$

Aquesta identitat és important:

$$
\boxed{\sqrt{x^2}=|x|}
$$

No hem d'escriure simplement:

$$
\sqrt{x^2}=x
$$

perquè això només és cert quan:

$$
x\geq0
$$

---

## 20. Procediment per a equacions racionals

Per resoldre una equació racional:

1. Identifica tots els denominadors.
2. Determina els valors prohibits.
3. Calcula el mínim comú denominador.
4. Multiplica tota l'equació per aquest denominador.
5. Simplifica.
6. Resol l'equació resultant.
7. Descarta qualsevol valor prohibit.
8. Comprova les solucions en l'equació original.

---

## 21. Procediment per a equacions amb radicals

Per resoldre una equació amb radicals:

1. Determina el domini.
2. Aïlla un radical.
3. Eleva els dos membres a la potència adequada.
4. Simplifica.
5. Si encara queden radicals, torna a aïllar-ne un.
6. Repeteix el procés si és necessari.
7. Resol l'equació resultant.
8. Comprova totes les solucions en l'equació original.
9. Descarta les solucions estranyes.

---

## 22. Errors freqüents

### No establir el domini

Incorrecte:

$$
\frac{1}{x-2}=3
$$

sense indicar:

$$
x\neq2
$$

### Elevar al quadrat i no comprovar

Una equació com:

$$
\sqrt{f(x)}=g(x)
$$

pot produir solucions que no pertanyen a l'equació original.

### Oblidar que un denominador no pot ser zero

$$
\frac{1}{\sqrt{x-1}}
$$

requereix:

$$
x>1
$$

no simplement:

$$
x\geq1
$$

### Confondre $\sqrt{x^2}$ amb $x$

La identitat correcta és:

$$
\sqrt{x^2}=|x|
$$

---

## 23. Resum de restriccions

### Denominador

Si:

$$
\frac{1}{f(x)}
$$

aleshores:

$$
f(x)\neq0
$$

### Arrel d'índex parell

Si:

$$
\sqrt[n]{f(x)}
$$

amb $n$ parell:

$$
f(x)\geq0
$$

### Arrel d'índex parell al denominador

Si:

$$
\frac{1}{\sqrt[n]{f(x)}}
$$

amb $n$ parell:

$$
f(x)>0
$$

### Arrel d'índex senar

Si $n$ és senar, no hi ha una restricció de signe sobre el radicand en els nombres reals.

---

## 24. Idea fonamental

Resoldre equacions racionals i amb radicals no consisteix únicament a fer operacions algebraiques.

La idea fonamental és:

$$
\boxed{
\text{domini}
\rightarrow
\text{transformació}
\rightarrow
\text{resolució}
\rightarrow
\text{comprovació}
}
$$

Les restriccions del domini i la comprovació final són tan importants com les operacions algebraiques utilitzades per trobar les solucions.
