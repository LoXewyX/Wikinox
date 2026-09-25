# Logaritmes

Els **logaritmes** són una eina matemàtica que ens permet descobrir un exponent desconegut.

Per entendre'ls bé, primer hem de recordar què significa una potència.

## 1. Recordatori: les potències

Una potència té la forma

$$
a^n
$$

on:

- $a$ és la **base**.
- $n$ és l'**exponent**.
- El resultat és el nombre que obtenim en multiplicar la base per ella mateixa $n$ vegades.

Per exemple:

$$
2^3=2\cdot2\cdot2=8
$$

Per tant:

$$
2^3=8
$$

Aquí coneixem la base $2$ i l'exponent $3$, i obtenim el resultat $8$.

Però què passa si coneixem la base i el resultat, però no coneixem l'exponent?

Per exemple:

$$
2^x=8
$$

Sabem que:

$$
2^3=8
$$

per tant:

$$
x=3
$$

Els logaritmes ens permeten expressar precisament aquesta pregunta.

---

## 2. Què és un logaritme?

Un logaritme respon a la pregunta:

> **A quin exponent hem d'elevar una base per obtenir un nombre determinat?**

L'expressió

$$
\log_b(x)=y
$$

significa exactament el mateix que:

$$
b^y=x
$$

És a dir:

$$
\boxed{\log_b(x)=y\iff b^y=x}
$$

Per exemple:

$$
\log_2(8)=3
$$

perquè:

$$
2^3=8
$$

El logaritme ens està preguntant:

> A quin exponent hem d'elevar $2$ per obtenir $8$?

La resposta és $3$.

---

## 3. Les tres parts d'un logaritme

En l'expressió

$$
\log_b(x)=y
$$

tenim tres elements:

- $b$: **base**.
- $x$: **argument** del logaritme.
- $y$: **resultat del logaritme**.

Per exemple:

$$
\log_3(81)=4
$$

En aquest cas:

- la base és $3$;
- l'argument és $81$;
- el resultat és $4$.

Per què?

Perquè:

$$
3^4=81
$$

---

## 4. La relació entre potències i logaritmes

Els logaritmes i les potències estan directament relacionats.

Podem passar d'una forma a l'altra:

$$
b^y=x
$$

equival a:

$$
\log_b(x)=y
$$

Per exemple:

$$
5^3=125
$$

es pot escriure com:

$$
\log_5(125)=3
$$

Un altre exemple:

$$
10^4=10000
$$

equival a:

$$
\log_{10}(10000)=4
$$

I:

$$
7^2=49
$$

equival a:

$$
\log_7(49)=2
$$

### Regla fonamental

Quan veiem:

$$
\log_b(x)=y
$$

ho podem transformar immediatament en:

$$
b^y=x
$$

Aquesta equivalència és la base de tot l'estudi dels logaritmes.

---

## 5. Per què necessitem els logaritmes?

Suposem que volem resoldre:

$$
2^x=32
$$

Podem reconèixer que:

$$
2^5=32
$$

i concloure que:

$$
x=5
$$

Però ara imaginem:

$$
2^x=17
$$

No existeix un exponent enter senzill que puguem reconèixer mentalment.

Podem expressar la solució mitjançant un logaritme:

$$
x=\log_2(17)
$$

El logaritme ens proporciona una manera matemàtica de representar aquest exponent.

Per tant, si tenim:

$$
a^x=b
$$

podem escriure:

$$
\boxed{x=\log_a(b)}
$$

---

## 6. Condicions perquè existeixi un logaritme

No podem utilitzar qualsevol nombre com a base ni qualsevol nombre com a argument.

Perquè

$$
\log_b(x)
$$

estigui definit en els nombres reals, s'han de complir dues condicions:

$$
b>0
$$

i

$$
b\neq1
$$

A més, l'argument ha de ser positiu:

$$
x>0
$$

Per tant:

$$
\boxed{b>0,\quad b\neq1,\quad x>0}
$$

### Per què l'argument ha de ser positiu?

Considerem una potència amb base positiva:

$$
2^x
$$

El resultat sempre és positiu, independentment del valor de $x$.

Per exemple:

$$
2^3=8
$$

$$
2^0=1
$$

$$
2^{-3}=\frac{1}{8}
$$

Tots els resultats són positius.

Per això no existeix cap nombre real $x$ que satisfaci:

$$
2^x=-4
$$

En conseqüència:

$$
\log_2(-4)
$$

no està definit en els nombres reals.

Tampoc podem calcular:

$$
\log_2(0)
$$

perquè cap potència de $2$ és igual a $0$.

Per tant:

$$
\boxed{\log_b(x)\text{ requereix }x>0}
$$

---

## 7. Per què la base no pot ser 1?

Si la base fos $1$, tindríem:

$$
1^x=1
$$

per a qualsevol valor de $x$.

Per exemple:

$$
1^2=1
$$

$$
1^5=1
$$

$$
1^{100}=1
$$

Per tant, l'expressió

$$
\log_1(1)
$$

no tindria un únic resultat.

Per això la base ha de complir:

$$
\boxed{b\neq1}
$$

---

## 8. Logaritmes amb resultats senzills

Molts logaritmes es poden calcular directament utilitzant potències conegudes.

### Exemple 1

$$
\log_2(16)
$$

Preguntem:

> A quin exponent hem d'elevar $2$ per obtenir $16$?

Com que:

$$
2^4=16
$$

aleshores:

$$
\boxed{\log_2(16)=4}
$$

### Exemple 2

$$
\log_3(27)
$$

Com que:

$$
3^3=27
$$

tenim:

$$
\boxed{\log_3(27)=3}
$$

### Exemple 3

$$
\log_5(625)
$$

Com que:

$$
5^4=625
$$

aleshores:

$$
\boxed{\log_5(625)=4}
$$

---

## 9. Logaritmes de 1

Una propietat important és:

$$
\boxed{\log_b(1)=0}
$$

sempre que la base sigui vàlida.

Per què?

Perquè:

$$
b^0=1
$$

Per exemple:

$$
\log_2(1)=0
$$

$$
\log_{10}(1)=0
$$

$$
\log_7(1)=0
$$

---

## 10. Logaritmes de la pròpia base

Una altra propietat fonamental és:

$$
\boxed{\log_b(b)=1}
$$

perquè:

$$
b^1=b
$$

Per exemple:

$$
\log_2(2)=1
$$

$$
\log_{10}(10)=1
$$

$$
\log_5(5)=1
$$

---

## 11. Logaritmes de potències de la base

Si tenim:

$$
\log_b(b^n)
$$

el resultat és directament $n$:

$$
\boxed{\log_b(b^n)=n}
$$

Per exemple:

$$
\log_2(2^7)=7
$$

perquè:

$$
2^7=128
$$

i, per tant:

$$
\log_2(128)=7
$$

---

# 12. Logaritme decimal

El logaritme de base $10$ rep el nom de **logaritme decimal**.

Normalment s'escriu:

$$
\log(x)
$$

sense indicar la base.

Quan escrivim:

$$
\log(1000)
$$

normalment estem utilitzant base $10$:

$$
\log_{10}(1000)
$$

Com que:

$$
10^3=1000
$$

tenim:

$$
\boxed{\log(1000)=3}
$$

Altres exemples:

$$
\log(10)=1
$$

$$
\log(100)=2
$$

$$
\log(10000)=4
$$

---

# 13. Logaritme natural

Existeix una base especialment important en matemàtiques:

$$
e
$$

on aproximadament:

$$
e\approx2.71828
$$

El logaritme de base $e$ rep el nom de **logaritme natural** i es representa mitjançant:

$$
\ln(x)
$$

Per definició:

$$
\ln(x)=\log_e(x)
$$

Per exemple:

$$
\ln(e)=1
$$

perquè:

$$
e^1=e
$$

També:

$$
\ln(e^3)=3
$$

perquè:

$$
e^3=e^3
$$

El logaritme natural apareix constantment en càlcul, creixement i decreixement exponencial, equacions diferencials, probabilitat i moltes altres àrees de les matemàtiques.

---

# 14. Propietat del producte

Una de les propietats més importants dels logaritmes és:

$$
\boxed{\log_b(xy)=\log_b(x)+\log_b(y)}
$$

És a dir, el logaritme d'un producte es pot convertir en una suma.

### Exemple

Considerem:

$$
\log_2(8\cdot4)
$$

Podem escriure:

$$
\log_2(8)+\log_2(4)
$$

Com que:

$$
\log_2(8)=3
$$

i:

$$
\log_2(4)=2
$$

obtenim:

$$
3+2=5
$$

Per tant:

$$
\log_2(32)=5
$$

---

# 15. Propietat del quocient

Per a un quocient:

$$
\boxed{
\log_b\left(\frac{x}{y}\right)
=
\log_b(x)-\log_b(y)
}
$$

### Exemple

Considerem:

$$
\log_2\left(\frac{32}{4}\right)
$$

Podem escriure:

$$
\log_2(32)-\log_2(4)
$$

Per tant:

$$
5-2=3
$$

i:

$$
\log_2(8)=3
$$

---

# 16. Propietat de les potències

Una altra propietat fonamental és:

$$
\boxed{
\log_b(x^n)=n\log_b(x)
}
$$

L'exponent passa davant del logaritme com un multiplicador.

### Exemple

$$
\log_2(8^2)
$$

podem escriure:

$$
2\log_2(8)
$$

Com que:

$$
\log_2(8)=3
$$

obtenim:

$$
2\cdot3=6
$$

Per tant:

$$
\log_2(64)=6
$$

---

# 17. Arrels i logaritmes

Una arrel es pot escriure com una potència:

$$
\sqrt[n]{x}=x^{1/n}
$$

Per tant:

$$
\log_b(\sqrt[n]{x})
=
\log_b(x^{1/n})
$$

Aplicant la propietat de les potències:

$$
\boxed{
\log_b(\sqrt[n]{x})
=
\frac{1}{n}\log_b(x)
}
$$

### Exemple

$$
\log_2(\sqrt{16})
$$

Com que:

$$
\sqrt{16}=16^{1/2}
$$

tenim:

$$
\log_2(16^{1/2})
=
\frac12\log_2(16)
$$

Com que:

$$
\log_2(16)=4
$$

obtenim:

$$
\frac12\cdot4=2
$$

Per tant:

$$
\boxed{\log_2(4)=2}
$$

---

# 18. Desenvolupar expressions logarítmiques

Les propietats anteriors permeten transformar un únic logaritme en diversos.

Per exemple:

$$
\log_b(xyz)
$$

es pot desenvolupar com:

$$
\boxed{
\log_b(x)+\log_b(y)+\log_b(z)
}
$$

I:

$$
\log_b\left(\frac{x^2y}{z}\right)
$$

es pot desenvolupar com:

$$
\log_b(x^2)+\log_b(y)-\log_b(z)
$$

Aplicant la propietat de les potències:

$$
\boxed{
2\log_b(x)+\log_b(y)-\log_b(z)
}
$$

---

# 19. Condensar expressions logarítmiques

També podem fer el procés contrari.

Per exemple:

$$
\log_b(x)+\log_b(y)
$$

es pot escriure com:

$$
\boxed{
\log_b(xy)
}
$$

I:

$$
\log_b(x)-\log_b(y)
$$

es pot escriure com:

$$
\boxed{
\log_b\left(\frac{x}{y}\right)
}
$$

També:

$$
3\log_b(x)
$$

es pot escriure com:

$$
\boxed{
\log_b(x^3)
}
$$

Aquestes transformacions són especialment útils per resoldre equacions logarítmiques.

---

# 20. Canvi de base

De vegades necessitem calcular un logaritme la base del qual no està disponible directament en una calculadora.

Podem utilitzar la fórmula de **canvi de base**:

$$
\boxed{
\log_b(x)
=
\frac{\log_a(x)}{\log_a(b)}
}
$$

La base $a$ pot ser qualsevol base vàlida.

En particular, podem utilitzar $10$:

$$
\boxed{
\log_b(x)
=
\frac{\log(x)}{\log(b)}
}
$$

o $e$:

$$
\boxed{
\log_b(x)
=
\frac{\ln(x)}{\ln(b)}
}
$$

### Exemple

Volem calcular:

$$
\log_2(10)
$$

Utilitzem el canvi de base:

$$
\log_2(10)
=
\frac{\log(10)}{\log(2)}
$$

Com que:

$$
\log(10)=1
$$

obtenim:

$$
\log_2(10)
=
\frac{1}{\log(2)}
$$

Aproximadament:

$$
\log_2(10)\approx3.3219
$$

Això significa que:

$$
2^{3.3219}\approx10
$$

---

# 21. Resoldre equacions logarítmiques senzilles

Una de les aplicacions principals dels logaritmes és resoldre equacions on la incògnita apareix com a exponent.

Considerem:

$$
2^x=16
$$

Podem transformar l'equació utilitzant un logaritme:

$$
\log_2(16)=x
$$

Com que:

$$
\log_2(16)=4
$$

obtenim:

$$
\boxed{x=4}
$$

---

# 22. Resoldre una equació exponencial amb logaritmes

Considerem:

$$
3^x=20
$$

No existeix un exponent enter senzill que produeixi $20$.

Apliquem logaritmes:

$$
\log(3^x)=\log(20)
$$

Utilitzant la propietat de les potències:

$$
x\log(3)=\log(20)
$$

Aïllem $x$:

$$
\boxed{
x=\frac{\log(20)}{\log(3)}
}
$$

Aproximadament:

$$
x\approx2.7268
$$

Per tant:

$$
3^{2.7268}\approx20
$$

---

# 23. Resoldre equacions logarítmiques mitjançant la definició

Suposem:

$$
\log_2(x)=5
$$

Utilitzem la definició de logaritme:

$$
2^5=x
$$

Per tant:

$$
\boxed{x=32}
$$

Un altre exemple:

$$
\log_3(x)=4
$$

equival a:

$$
3^4=x
$$

i, per tant:

$$
\boxed{x=81}
$$

---

# 24. Quan l'argument conté una expressió

Considerem:

$$
\log_2(x-1)=3
$$

Utilitzem la definició:

$$
2^3=x-1
$$

Aleshores:

$$
8=x-1
$$

i:

$$
\boxed{x=9}
$$

Hem de comprovar, a més, que l'argument sigui positiu:

$$
x-1>0
$$

Per a $x=9$:

$$
9-1=8>0
$$

Per tant, la solució és vàlida.

---

# 25. Equacions amb dos logaritmes

Considerem:

$$
\log_2(x)+\log_2(4)=5
$$

Utilitzem la propietat del producte:

$$
\log_2(4x)=5
$$

Apliquem la definició:

$$
2^5=4x
$$

Aleshores:

$$
32=4x
$$

i:

$$
\boxed{x=8}
$$

Comprovem el domini:

$$
x>0
$$

Com que $8>0$, la solució és vàlida.

---

# 26. Equacions amb una resta de logaritmes

Considerem:

$$
\log_3(x)-\log_3(2)=2
$$

Apliquem la propietat del quocient:

$$
\log_3\left(\frac{x}{2}\right)=2
$$

Passem a forma exponencial:

$$
3^2=\frac{x}{2}
$$

Aleshores:

$$
9=\frac{x}{2}
$$

i:

$$
\boxed{x=18}
$$

---

# 27. La importància del domini

En una equació logarítmica no n'hi ha prou amb trobar un valor de $x$.

També hem de comprovar que tots els arguments dels logaritmes siguin positius.

Per exemple:

$$
\log(x-3)
$$

requereix:

$$
x-3>0
$$

per tant:

$$
\boxed{x>3}
$$

Si durant la resolució obtenim:

$$
x=2
$$

aquesta solució no és vàlida perquè:

$$
2-3=-1
$$

i no existeix:

$$
\log(-1)
$$

en els nombres reals.

---

# 28. Errors freqüents

Hi ha algunes regles que **no** són certes.

### Error 1: separar una suma dins del logaritme

No podem escriure:

$$
\log(x+y)=\log(x)+\log(y)
$$

Això és fals.

La propietat correcta és:

$$
\log(xy)=\log(x)+\log(y)
$$

És a dir, la propietat del producte s'aplica a una multiplicació, no a una suma.

---

### Error 2: separar una resta

Tampoc podem escriure:

$$
\log(x-y)=\log(x)-\log(y)
$$

Això és fals.

La propietat correcta és:

$$
\log\left(\frac{x}{y}\right)
=
\log(x)-\log(y)
$$

---

### Error 3: oblidar el domini

No podem acceptar automàticament qualsevol solució obtinguda.

Sempre hem de comprovar:

$$
\boxed{\text{argument}>0}
$$

---

### Error 4: confondre la base amb l'argument

En:

$$
\log_2(8)
$$

la base és $2$ i l'argument és $8$.

No els hem d'intercanviar.

---

# 29. Resum de les propietats fonamentals

Per a una base vàlida $b$:

### Logaritme de 1

$$
\boxed{\log_b(1)=0}
$$

### Logaritme de la base

$$
\boxed{\log_b(b)=1}
$$

### Producte

$$
\boxed{
\log_b(xy)=\log_b(x)+\log_b(y)
}
$$

### Quocient

$$
\boxed{
\log_b\left(\frac{x}{y}\right)
=
\log_b(x)-\log_b(y)
}
$$

### Potència

$$
\boxed{
\log_b(x^n)=n\log_b(x)
}
$$

### Canvi de base

$$
\boxed{
\log_b(x)
=
\frac{\log_a(x)}{\log_a(b)}
}
$$

### Relació amb les potències

$$
\boxed{
\log_b(x)=y
\iff
b^y=x
}
$$

---

# 30. Procediment per treballar amb logaritmes

Quan aparegui una expressió logarítmica, podem seguir aquests passos:

1. **Identificar la base i l'argument.**
2. **Comprovar el domini.**
3. **Buscar potències conegudes** per calcular directament el logaritme.
4. **Aplicar les propietats** de producte, quocient i potència quan sigui necessari.
5. **Utilitzar el canvi de base** si necessitem calcular un logaritme amb una base determinada.
6. **Transformar entre forma logarítmica i exponencial** quan sigui útil.
7. **Comprovar les solucions** en l'expressió original quan estiguem resolent una equació.

---

# 31. Idea fonamental

La idea més important que hem de recordar és:

$$
\boxed{
\log_b(x)=y
\iff
b^y=x
}
$$

Un logaritme no és una operació completament independent de les potències.

És una altra manera d'expressar la mateixa relació.

Si sabem que:

$$
2^5=32
$$

aleshores automàticament sabem que:

$$
\log_2(32)=5
$$

I si sabem que:

$$
\log_3(81)=4
$$

aleshores sabem que:

$$
3^4=81
$$

Per això, per aprendre logaritmes correctament, és fonamental dominar primer les potències i les seves propietats.
