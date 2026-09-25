# Factorització de polinomis

La factorització de polinomis consisteix a expressar un polinomi com un **producte de polinomis més senzills**.

És una eina fonamental per simplificar expressions, resoldre equacions, trobar arrels i estudiar funcions polinòmiques.

Per exemple:

$$
x^2-5x+6
$$

es pot factoritzar com:

$$

(x-2)(x-3)
$$

perquè:

$$
(x-2)(x-3)=x^2-5x+6
$$

---

## 1. Què significa factoritzar?

Factoritzar significa transformar una suma o diferència de termes en un producte.

Per exemple:

$$

x^2+5x+6
$$

es pot escriure com:

$$
(x+2)(x+3)
$$

Els polinomis:

$$

x+2
$$

i:

$$
x+3
$$

són **factors** del polinomi original.

La factorització és, per tant, l'operació inversa del desenvolupament de productes.

---

## 2. Factor comú

El primer mètode que hem de comprovar és sempre l'existència d'un **factor comú**.

Per exemple:

$$

6x^3+9x^2
$$

Tots dos termes tenen $3x^2$ en comú:

$$
6x^3+9x^2
=

3x^2(2x+3)
$$

Per tant:

$$

\boxed{6x^3+9x^2=3x^2(2x+3)}
$$

---

## 3. Factor comú amb diverses variables

El factor comú pot contenir diverses variables.

Per exemple:

$$
12x^3y+18x^2y^2
$$

El màxim factor comú és:

$$

6x^2y
$$

Per tant:

$$
12x^3y+18x^2y^2
=

6x^2y(2x+3y)
$$

---

## 4. Factorització per agrupació

Quan no hi ha un factor comú per a tots els termes, podem intentar agrupar-los.

Per exemple:

$$

ax+ay+bx+by
$$

Agrupem:

$$
a(x+y)+b(x+y)
$$

Ara apareix un factor comú:

$$

\boxed{(a+b)(x+y)}
$$

Un altre exemple:

$$
x^3+2x^2+3x+6
$$

Agrupem:

$$

x^2(x+2)+3(x+2)
$$

Per tant:

$$
\boxed{(x^2+3)(x+2)}
$$

---

## 5. Diferència de quadrats

Una identitat fonamental és:

$$

\boxed{a^2-b^2=(a-b)(a+b)}
$$

Per exemple:

$$
x^2-25
$$

és una diferència de quadrats:

$$

x^2-5^2
$$

Per tant:

$$
\boxed{x^2-25=(x-5)(x+5)}
$$

Un altre exemple:

$$

9x^2-16
$$

és:

$$
(3x)^2-4^2
$$

i, per tant:

$$

\boxed{9x^2-16=(3x-4)(3x+4)}
$$

---

## 6. Trinomi quadrat perfecte

Una altra identitat important és:

$$
\boxed{a^2+2ab+b^2=(a+b)^2}
$$

i:

$$

\boxed{a^2-2ab+b^2=(a-b)^2}
$$

Per exemple:

$$
x^2+6x+9
$$

es pot escriure com:

$$

x^2+2(x)(3)+3^2
$$

Per tant:

$$
\boxed{x^2+6x+9=(x+3)^2}
$$

També:

$$

x^2-10x+25=(x-5)^2
$$

---

## 7. Trinomis de segon grau

Una expressió de la forma:

$$
x^2+bx+c
$$

es pot factoritzar buscant dos nombres $m$ i $n$ que compleixin:

$$

m+n=b
$$

i:

$$
mn=c
$$

Aleshores:

$$

x^2+bx+c=(x+m)(x+n)
$$

Per exemple:

$$
x^2+5x+6
$$

Busquem dos nombres la suma dels quals sigui $5$ i el producte dels quals sigui $6$:

$$

2+3=5
$$

$$
2\cdot3=6
$$

Per tant:

$$

\boxed{x^2+5x+6=(x+2)(x+3)}
$$

---

## 8. Trinomis amb terme principal diferent d'1

Considerem:

$$
2x^2+7x+3
$$

Busquem una factorització de la forma:

$$

(2x+a)(x+b)
$$

Necessitem:

$$
ab=3
$$

i:

$$

2b+a=7
$$

Prenem:

$$
a=1,\qquad b=3
$$

Per tant:

$$

\boxed{2x^2+7x+3=(2x+1)(x+3)}
$$

---

## 9. Mètode del producte $ac$

Per a un trinomi:

$$
ax^2+bx+c
$$

podem buscar dos nombres el producte dels quals sigui:

$$

ac
$$

i la suma dels quals sigui:

$$
b
$$

Per exemple:

$$

6x^2+11x+3
$$

Calculem:

$$
ac=18
$$

Busquem dos nombres el producte dels quals sigui $18$ i la suma dels quals sigui $11$:

$$

9+2=11
$$

Descomponem el terme central:

$$
6x^2+9x+2x+3
$$

Agrupem:

$$

3x(2x+3)+1(2x+3)
$$

Per tant:

$$
\boxed{6x^2+11x+3=(3x+1)(2x+3)}
$$

---

## 10. Factorització d'un polinomi quadràtic mitjançant les arrels

Si un polinomi quadràtic té arrels $r_1$ i $r_2$, es pot escriure com:

$$

a(x-r_1)(x-r_2)
$$

Per exemple:

$$
x^2-5x+6
$$

té les arrels:

$$

x=2
$$

i:

$$
x=3
$$

Per tant:

$$

\boxed{x^2-5x+6=(x-2)(x-3)}
$$

---

## 11. Relació entre arrels i factors

Si:

$$
P(r)=0
$$

aleshores:

$$

x-r
$$

és un factor de $P(x)$.

Aquesta propietat és el **teorema del factor**:

$$
\boxed{P(r)=0\iff(x-r)\text{ és factor de }P(x)}
$$

Per exemple, si:

$$

P(x)=x^3-4x^2+x+6
$$

i comprovem que:

$$
P(2)=0
$$

aleshores:

$$

x-2
$$

és un factor.

---

## 12. Teorema del residu

El teorema del residu estableix que el residu de dividir $P(x)$ entre $x-a$ és:

$$
\boxed{P(a)}
$$

Per exemple, si:

$$

P(x)=x^2+3x+2
$$

dividim entre:

$$
x-1
$$

el residu és:

$$

P(1)=1+3+2=6
$$

Per tant, $x-1$ no és factor.

Si:

$$
P(a)=0
$$

el residu és zero i $x-a$ és factor.

---

## 13. Regla de Ruffini

La regla de Ruffini permet dividir ràpidament un polinomi entre un binomi de la forma:

$$

x-a
$$

És especialment útil quan coneixem una arrel.

Per exemple:

$$
P(x)=x^3-6x^2+11x-6
$$

Provem $x=1$:

$$

P(1)=0
$$

Per tant:

$$
x-1
$$

és factor.

Aplicant Ruffini obtenim:

$$

x^2-5x+6
$$

que podem tornar a factoritzar:

$$
x^2-5x+6=(x-2)(x-3)
$$

Per tant:

$$

\boxed{
x^3-6x^2+11x-6
=

(x-1)(x-2)(x-3)
}
$$

---

## 14. Arrels múltiples

Una arrel pot aparèixer més d'una vegada.

Per exemple:

$$
P(x)=(x-2)^2(x+1)
$$

té:

- arrel $x=2$ de multiplicitat $2$;
- arrel $x=-1$ de multiplicitat $1$.

La multiplicitat indica quantes vegades apareix un factor.

---

## 15. Factorització completa

Factoritzar completament significa continuar factoritzant fins que els factors no es puguin descompondre més dins del conjunt numèric considerat.

Per exemple:

$$

2x^3-8x
$$

Primer extraiem factor comú:

$$
2x(x^2-4)
$$

Després apliquem la diferència de quadrats:

$$

2x(x-2)(x+2)
$$

Per tant:

$$
\boxed{2x^3-8x=2x(x-2)(x+2)}
$$

---

## 16. Factorització de cubs

Hi ha dues identitats importants.

### Suma de cubs

$$

\boxed{a^3+b^3=(a+b)(a^2-ab+b^2)}
$$

Per exemple:

$$
x^3+8
$$

és:

$$

x^3+2^3
$$

Per tant:

$$
\boxed{x^3+8=(x+2)(x^2-2x+4)}
$$

### Diferència de cubs

$$

\boxed{a^3-b^3=(a-b)(a^2+ab+b^2)}
$$

Per exemple:

$$
x^3-27
$$

és:

$$

x^3-3^3
$$

Per tant:

$$
\boxed{x^3-27=(x-3)(x^2+3x+9)}
$$

---

## 17. Factorització mitjançant substitució

Alguns polinomis tenen una estructura que permet fer una substitució.

Per exemple:

$$

x^4-5x^2+6
$$

Prenem:

$$
u=x^2
$$

Aleshores:

$$

u^2-5u+6
$$

Factoritzem:

$$
(u-2)(u-3)
$$

Tornem a $x$:

$$

(x^2-2)(x^2-3)
$$

Per tant:

$$
\boxed{x^4-5x^2+6=(x^2-2)(x^2-3)}
$$

---

## 18. Factorització i resolució d'equacions

La factorització és especialment útil per resoldre equacions.

Considerem:

$$

x^2-5x+6=0
$$

Factoritzem:

$$
(x-2)(x-3)=0
$$

Per la propietat del producte nul:

$$

x-2=0
$$

o:

$$
x-3=0
$$

Per tant:

$$

\boxed{x=2\quad\text{o}\quad x=3}
$$

---

## 19. Propietat del producte nul

Si:

$$
AB=0
$$

aleshores:

$$

\boxed{A=0\quad\text{o}\quad B=0}
$$

Aquesta propietat permet transformar una equació factoritzada en diverses equacions més senzilles.

Per exemple:

$$
(x-1)(x+4)=0
$$

implica:

$$

x-1=0
$$

o:

$$
x+4=0
$$

Per tant:

$$

\boxed{x=1,\,-4}
$$

---

## 20. Factorització i simplificació de fraccions

La factorització també permet simplificar fraccions algebraiques.

Per exemple:

$$
\frac{x^2-9}{x^2+3x}
$$

Factoritzem:

$$

\frac{(x-3)(x+3)}{x(x+3)}
$$

Podem simplificar $x+3$, sempre que:

$$
x\neq-3
$$

Per tant:

$$

\boxed{
\frac{x^2-9}{x^2+3x}
=

\frac{x-3}{x}
}
$$

amb les restriccions:

$$
x\neq0,\qquad x\neq-3
$$

---

## 21. Factorització sobre diferents conjunts

La factorització pot dependre del conjunt numèric utilitzat.

Per exemple:

$$

x^2-2
$$

no es pot factoritzar utilitzant factors amb coeficients racionals.

Però sobre els nombres reals:

$$
x^2-2=(x-\sqrt2)(x+\sqrt2)
$$

Per tant, sempre és important saber sobre quin conjunt s'està treballant.

---

## 22. Estratègia general

Per factoritzar un polinomi:

1. Ordena el polinomi per grau.
2. Comprova si existeix un factor comú.
3. Busca identitats notables.
4. Comprova si es pot factoritzar per agrupació.
5. Si és un trinomi quadràtic, busca els seus factors.
6. Si és de grau superior, busca possibles arrels.
7. Utilitza el teorema del factor.
8. Utilitza Ruffini quan sigui apropiat.
9. Repeteix el procés amb els factors obtinguts.
10. Comprova multiplicant els factors.

---

## 23. Identitats fonamentals

### Quadrat d'una suma

$$

(a+b)^2=a^2+2ab+b^2
$$

### Quadrat d'una diferència

$$
(a-b)^2=a^2-2ab+b^2
$$

### Diferència de quadrats

$$

a^2-b^2=(a-b)(a+b)
$$

### Suma de cubs

$$
a^3+b^3=(a+b)(a^2-ab+b^2)
$$

### Diferència de cubs

$$

a^3-b^3=(a-b)(a^2+ab+b^2)
$$

---

## 24. Errors freqüents

### No extreure el factor comú

Abans d'aplicar altres mètodes, comprova sempre si hi ha un factor comú.

### Canviar incorrectament els signes

Per exemple:

$$
a^2-b^2=(a-b)(a+b)
$$

no:

$$

(a-b)^2
$$

### No comprovar la factorització

Després de factoritzar, podem multiplicar els factors per comprovar que recuperem el polinomi original.

### Confondre factors i arrels

Si:

$$
x-a
$$

és un factor, aleshores:

$$

a
$$

és una arrel.

Però el factor i l'arrel no són el mateix objecte.

---

## 25. Resum

Les tècniques fonamentals de factorització són:

| Mètode                 | Estructura                            |
| ---------------------- | ------------------------------------- |
| Factor comú            | $ax+ay=a(x+y)$                        |
| Agrupació              | $ax+ay+bx+by=(a+b)(x+y)$              |
| Diferència de quadrats | $a^2-b^2=(a-b)(a+b)$                  |
| Quadrat perfecte       | $a^2\pm2ab+b^2=(a\pm b)^2$            |
| Suma de cubs           | $a^3+b^3=(a+b)(a^2-ab+b^2)$           |
| Diferència de cubs     | $a^3-b^3=(a-b)(a^2+ab+b^2)$           |
| Teorema del factor     | $P(a)=0\Rightarrow(x-a)$ és factor    |
| Ruffini                | Divisió entre $x-a$                   |
| Substitució            | Transformació d'estructures repetides |

## 26. Idea fonamental

Factoritzar significa trobar una estructura multiplicativa oculta dins d'un polinomi:

$$
\boxed{
\text{polinomi}
\rightarrow
\text{factors}
}
$$

La factorització connecta directament l'àlgebra amb les arrels d'un polinomi:

$$
\boxed{
P(a)=0
\iff
(x-a)\text{ és factor de }P(x)
}
$$

Per això, factoritzar és una de les eines principals per resoldre equacions i estudiar funcions polinòmiques.
