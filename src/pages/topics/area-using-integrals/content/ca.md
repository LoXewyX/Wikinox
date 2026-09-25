# Àrea mitjançant integrals

La integral definida proporciona un mètode general per calcular l'àrea situada entre una corba i els eixos de coordenades o entre dues corbes.

## 1. Àrea sota una corba

Suposem que $f(x)\geq0$ en $[a,b]$. L'àrea entre el gràfic de $f$ i l'eix $x$ és

$$
A=\int_a^b f(x)\,dx
$$

La integral es pot interpretar com el límit de sumes de rectangles cada vegada més prims.

:::function-graph{expression="x^2" restriction="-1<=x<=3"}
:::

Per exemple, l'àrea sota $f(x)=x^2$ entre $x=0$ i $x=2$ és

$$
A=\int_0^2x^2\,dx
$$

Calculant la primitiva,

$$
A=\left[\frac{x^3}{3}\right]_0^2
=\frac{8}{3}
$$

Per tant,

$$
\boxed{A=\frac{8}{3}}
$$

---

## 2. Quan la funció està per sota de l'eix $x$

Una integral definida representa una **àrea amb signe**. Si $f(x)<0$, la integral és negativa.

L'àrea geomètrica sempre ha de ser positiva, de manera que

$$
A=-\int_a^b f(x)\,dx
$$

quan tota la funció està per sota de l'eix $x$.

En general,

$$
\boxed{A=\int_a^b|f(x)|\,dx}
$$

dona l'àrea geomètrica entre la corba i l'eix $x$.

---

## 3. Quan la funció talla l'eix $x$

Si la funció canvia de signe dins de $[a,b]$, no podem utilitzar directament la integral per obtenir l'àrea geomètrica total.

Primer cal trobar els zeros de $f$ i dividir l'interval.

Per exemple, considerem

$$
f(x)=x^2-1
$$

Els zeros són

$$
x=-1,\qquad x=1
$$

L'àrea total a $[-2,2]$ és

$$
A=
\int_{-2}^{-1}(x^2-1)\,dx
-\int_{-1}^{1}(x^2-1)\,dx
+\int_1^2(x^2-1)\,dx
$$

Equivalentment,

$$
\boxed{A=\int_{-2}^{2}|x^2-1|\,dx}
$$

El valor absolut converteix automàticament les contribucions negatives en àrees positives.

---

## 4. Àrea entre dues corbes

Suposem que $f(x)$ està per sobre de $g(x)$ en $[a,b]$.

L'àrea entre les dues corbes és

$$
\boxed{A=\int_a^b\left(f(x)-g(x)\right)\,dx}
$$

La idea principal és

$$
\text{àrea}=\int(\text{funció superior}-\text{funció inferior})\,dx
$$

Per exemple,

$$
f(x)=x+2,\qquad g(x)=x^2
$$

Primer trobem els punts d'intersecció:

$$
x+2=x^2
$$

$$
x^2-x-2=0
$$

$$
(x-2)(x+1)=0
$$

Per tant,

$$
x=-1,\qquad x=2
$$

En aquest interval, $x+2$ està per sobre de $x^2$, de manera que

$$
A=\int_{-1}^{2}(x+2-x^2)\,dx
$$

Calculant,

$$
A=
\left[
\frac{x^2}{2}+2x-\frac{x^3}{3}
\right]_{-1}^{2}
$$

i obtenim

$$
\boxed{A=\frac{9}{2}}
$$

---

## 5. Àrea respecte de $y$

De vegades és més senzill integrar horitzontalment.

Si les corbes estan escrites com

$$
x=f(y),\qquad x=g(y)
$$

aleshores

$$
\boxed{A=\int_c^d(\text{funció dreta}-\text{funció esquerra})\,dy}
$$

Això és útil quan expressar les corbes com $y=f(x)$ és complicat.

Per tant:

- Franges verticals $\rightarrow$ integrar respecte de $x$.
- Franges horitzontals $\rightarrow$ integrar respecte de $y$.

---

## 6. Elecció dels límits

Els límits d'integració normalment provenen de:

1. Extrems donats.
2. Interseccions entre corbes.
3. Zeros d'una funció quan calculem l'àrea amb l'eix $x$.
4. Punts on canvia l'ordre entre les funcions.

Per exemple, per trobar l'àrea entre dues corbes, resolem

$$
f(x)=g(x)
$$

per obtenir els punts d'intersecció.

---

## 7. Procediment sistemàtic

Per calcular una àrea mitjançant integrals:

1. **Identifica la regió.**
2. **Troba les interseccions o els límits.**
3. **Determina quina corba està per sobre o per sota.**
4. **Tria franges verticals o horitzontals.**
5. **Divideix la integral si canvia l'ordre de les corbes.**
6. **Planteja la integral definida.**
7. **Troba una primitiva.**
8. **Avalua els límits.**
9. **Comprova que l'àrea geomètrica final sigui no negativa.**

---

## 8. Errors habituals

### Oblidar la diferència entre les corbes

Per a dues corbes,

$$
\int_a^b f(x)\,dx
$$

no representa generalment l'àrea entre elles.

Cal utilitzar

$$
\boxed{\int_a^b(\text{superior}-\text{inferior})\,dx}
$$

### Ignorar un canvi de signe

Si una corba talla l'eix, cal dividir la integral o utilitzar un valor absolut.

### Utilitzar límits incorrectes

Els límits han de correspondre a la regió de la qual volem calcular l'àrea.

### Escollir una direcció inadequada

Si és complicat expressar les funcions com $y=f(x)$, pot ser més senzill integrar respecte de $y$.

---

## Resum

Les fórmules fonamentals són:

### Àrea sota una corba

$$
\boxed{A=\int_a^b f(x)\,dx}
$$

quan $f(x)\geq0$.

### Àrea geomètrica amb l'eix $x$

$$
\boxed{A=\int_a^b|f(x)|\,dx}
$$

### Àrea entre dues corbes

$$
\boxed{A=\int_a^b(\text{superior}-\text{inferior})\,dx}
$$

### Àrea amb franges horitzontals

$$
\boxed{A=\int_c^d(\text{dreta}-\text{esquerra})\,dy}
$$

El principi central és interpretar la integral com l'acumulació d'una quantitat infinita de petites franges d'àrea.
