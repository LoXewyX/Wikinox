# Equacions exponencials i logarítmiques

Les equacions exponencials i logarítmiques són equacions en què la incògnita apareix en un exponent o dins d'un logaritme.

Estan estretament relacionades perquè les funcions exponencials i logarítmiques són funcions inverses.

## 1. Equacions exponencials

Una equació exponencial conté la incògnita en un exponent.

Per exemple:

$$
2^x=8
$$

Com que:

$$
8=2^3
$$

podem escriure:

$$
2^x=2^3
$$

Per tant:

$$
x=3
$$

### Principi general

Si:

$$
a^x=a^b
$$

amb $a>0$ i $a\neq1$, aleshores:

$$
x=b
$$

Aquest mètode s'anomena **mètode d'igualació de bases**.

---

## 2. Resoldre equacions exponencials amb la mateixa base

Considerem:

$$
3^{x+1}=27
$$

Com que:

$$
27=3^3
$$

obtenim:

$$
3^{x+1}=3^3
$$

Per tant:

$$
x+1=3
$$

i:

$$
x=2
$$

Un altre exemple:

$$
5^{2x-1}=125
$$

Com que:

$$
125=5^3
$$

tenim:

$$
2x-1=3
$$

Per tant:

$$
x=2
$$

---

## 3. Equacions exponencials que requereixen logaritmes

De vegades no és possible o no resulta convenient expressar els dos membres utilitzant la mateixa base.

Per exemple:

$$
2^x=6
$$

Apliquem el logaritme als dos membres:

$$
\ln(2^x)=\ln(6)
$$

Utilitzant la propietat de la potència:

$$
x\ln(2)=\ln(6)
$$

Per tant:

$$
x=\frac{\ln(6)}{\ln(2)}
$$

Equivalentment:

$$
x=\log_2(6)
$$

El valor aproximat és:

$$
x\approx2.585
$$

---

## 4. El logaritme natural

El logaritme natural és el logaritme en base $e$:

$$
\ln(x)=\log_e(x)
$$

on:

$$
e\approx2.71828
$$

El logaritme natural és especialment útil per resoldre equacions exponencials perquè:

$$
\ln(e^x)=x
$$

Per exemple:

$$
e^{3x}=10
$$

Apliquem $\ln$ als dos membres:

$$
\ln(e^{3x})=\ln(10)
$$

Per tant:

$$
3x=\ln(10)
$$

i:

$$
x=\frac{\ln(10)}{3}
$$

---

## 5. Equacions logarítmiques

Una equació logarítmica conté la incògnita dins d'un logaritme.

Per exemple:

$$
\log_2(x)=3
$$

Utilitzant la definició de logaritme:

$$
\log_2(x)=3
\iff
2^3=x
$$

Per tant:

$$
x=8
$$

### Definició de logaritme

Per a $a>0$, $a\neq1$ i $x>0$:

$$
\log_a(x)=b
\iff
a^b=x
$$

Les tres quantitats tenen funcions diferents:

- $a$ és la **base**.
- $b$ és el **valor del logaritme**.
- $x$ és l'**argument**.

---

## 6. Restriccions del domini

Un logaritme només està definit quan el seu argument és positiu.

Per tant:

$$
\log_a(x)
$$

requereix:

$$
x>0
$$

Per exemple:

$$
\log(x-2)
$$

requereix:

$$
x-2>0
$$

i, per tant:

$$
x>2
$$

Aquesta restricció s'ha de comprovar quan es resolen equacions logarítmiques.

---

## 7. Resoldre equacions logarítmiques mitjançant la definició

Considerem:

$$
\log_3(x)=4
$$

Utilitzant la definició:

$$
x=3^4
$$

Per tant:

$$
x=81
$$

Un altre exemple:

$$
\log_5(x-1)=2
$$

Convertim a forma exponencial:

$$
x-1=5^2
$$

Per tant:

$$
x=26
$$

La condició de domini és:

$$
x-1>0
$$

i $x=26$ la compleix.

---

## 8. Propietats dels logaritmes

Les principals propietats dels logaritmes són:

### Producte

$$
\log_a(xy)=\log_a(x)+\log_a(y)
$$

### Quocient

$$
\log_a\left(\frac{x}{y}\right)
=
\log_a(x)-\log_a(y)
$$

### Potència

$$
\log_a(x^n)=n\log_a(x)
$$

Aquestes propietats permeten simplificar i transformar equacions logarítmiques.

---

## 9. Combinar logaritmes

Considerem:

$$
\log_2(x)+\log_2(x-2)=3
$$

Utilitzant la propietat del producte:

$$
\log_2(x(x-2))=3
$$

Convertim a forma exponencial:

$$
x(x-2)=2^3
$$

Per tant:

$$
x^2-2x=8
$$

o:

$$
x^2-2x-8=0
$$

Factoritzem:

$$
(x-4)(x+2)=0
$$

Els candidats són:

$$
x=4
$$

i:

$$
x=-2
$$

Tanmateix, els logaritmes originals requereixen:

$$
x>0
$$

i:

$$
x-2>0
$$

Per tant:

$$
x>2
$$

Només:

$$
x=4
$$

és vàlid.

---

## 10. Logaritmes als dos membres

Considerem:

$$
\log_2(x+3)=\log_2(7)
$$

Com que els logaritmes tenen la mateixa base:

$$
x+3=7
$$

Per tant:

$$
x=4
$$

La condició de domini és:

$$
x+3>0
$$

i la solució és vàlida.

En general:

$$
\log_a(f(x))=\log_a(g(x))
$$

implica:

$$
f(x)=g(x)
$$

sempre que els dos arguments dels logaritmes siguin positius.

---

## 11. Equacions exponencials utilitzant logaritmes

Considerem:

$$
7^x=20
$$

Apliquem logaritmes:

$$
\ln(7^x)=\ln(20)
$$

Utilitzant la propietat de la potència:

$$
x\ln(7)=\ln(20)
$$

Per tant:

$$
x=\frac{\ln(20)}{\ln(7)}
$$

En general:

$$
a^x=b
$$

es pot resoldre mitjançant:

$$
x=\frac{\ln(b)}{\ln(a)}
$$

per a $a>0$, $a\neq1$ i $b>0$.

---

## 12. Canvi de base

Un logaritme es pot convertir a una altra base mitjançant:

$$
\log_a(x)=\frac{\log_b(x)}{\log_b(a)}
$$

L'opció més habitual és $b=e$:

$$
\log_a(x)=\frac{\ln(x)}{\ln(a)}
$$

Per exemple:

$$
\log_2(10)
=
\frac{\ln(10)}{\ln(2)}
$$

Aquesta fórmula és especialment útil quan una calculadora no disposa directament del logaritme en la base necessària.

---

## 13. Interpretació gràfica

Les equacions exponencials també es poden interpretar gràficament.

Per exemple:

$$
2^x=6
$$

La solució és el valor de $x$ per al qual la funció exponencial assoleix el valor $6$.

:::function-graph{expression="2^x" restriction="-3<=x<=4"}
:::

La solució es pot escriure com:

$$
x=\log_2(6)
$$

---

## 14. Funcions exponencials i logarítmiques com a funcions inverses

La funció exponencial:

$$
f(x)=a^x
$$

i la funció logarítmica:

$$
g(x)=\log_a(x)
$$

són funcions inverses.

Això significa que:

$$
a^{\log_a(x)}=x
$$

i:

$$
\log_a(a^x)=x
$$

Les seves gràfiques són simètriques respecte de la recta:

$$
y=x
$$

Per exemple:

:::function-graph{expression="2^x" restriction="-4<=x<=4"}
:::

La funció logarítmica corresponent és:

$$
y=\log_2(x)
$$

---

## 15. Equacions exponencials amb la mateixa base

Quan sigui possible, convé reescriure els dos membres utilitzant la mateixa base.

Exemple:

$$
4^{x+1}=16
$$

Com que:

$$
4=2^2
$$

i:

$$
16=2^4
$$

obtenim:

$$
(2^2)^{x+1}=2^4
$$

Utilitzant:

$$
(a^m)^n=a^{mn}
$$

tenim:

$$
2^{2x+2}=2^4
$$

Per tant:

$$
2x+2=4
$$

i:

$$
x=1
$$

---

## 16. Equacions exponencials que es redueixen a una equació de segon grau

Algunes equacions exponencials contenen potències com:

$$
2^{2x}
$$

i:

$$
2^x
$$

Com que:

$$
2^{2x}=(2^x)^2
$$

podem fer un canvi de variable.

Considerem:

$$
2^{2x}-5(2^x)+6=0
$$

Sigui:

$$
u=2^x
$$

Aleshores:

$$
u^2-5u+6=0
$$

Factoritzem:

$$
(u-2)(u-3)=0
$$

Per tant:

$$
u=2
$$

o:

$$
u=3
$$

Tornant a $x$:

$$
2^x=2
$$

dona:

$$
x=1
$$

i:

$$
2^x=3
$$

dona:

$$
x=\log_2(3)
$$

Per tant, les solucions són:

$$
x=1
$$

i:

$$
x=\log_2(3)
$$

---

## 17. Errors freqüents

### Oblidar les restriccions del domini

Expressions com:

$$
\ln(x)
$$

requereixen:

$$
x>0
$$

### Aplicar incorrectament les propietats dels logaritmes

En general:

$$
\log_a(x+y)
\neq
\log_a(x)+\log_a(y)
$$

La propietat correcta per a un producte és:

$$
\log_a(xy)
=
\log_a(x)+\log_a(y)
$$

### No comprovar les solucions

Quan transformem equacions logarítmiques, sempre hem de comprovar les solucions obtingudes en l'equació original.

### Confondre la notació logarítmica i exponencial

Aquestes dues expressions són equivalents:

$$
\log_a(x)=b
$$

i:

$$
a^b=x
$$

---

## 18. Resum

### Equacions exponencials

Per a:

$$
a^x=b
$$

podem utilitzar:

$$
x=\log_a(b)
$$

o:

$$
x=\frac{\ln(b)}{\ln(a)}
$$

### Equacions logarítmiques

Per a:

$$
\log_a(x)=b
$$

tenim:

$$
x=a^b
$$

### Propietats principals dels logaritmes

$$
\log_a(xy)=\log_a(x)+\log_a(y)
$$

$$
\log_a\left(\frac{x}{y}\right)
=
\log_a(x)-\log_a(y)
$$

$$
\log_a(x^n)=n\log_a(x)
$$

### Canvi de base

$$
\log_a(x)=\frac{\ln(x)}{\ln(a)}
$$

La idea central és que **les equacions exponencials i logarítmiques es poden transformar les unes en les altres**, cosa que permet escollir el mètode més convenient per resoldre cada equació.
