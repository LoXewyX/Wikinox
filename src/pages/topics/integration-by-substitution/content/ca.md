# Integració per substitució

La **integració per substitució** és una tècnica que permet simplificar integrals en què apareix una funció composta juntament amb la seva derivada.

La idea és fer un canvi de variable:

$$
u=g(x)
$$

i transformar la integral en una integral respecte de $u$.

La regla fonamental és:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

---

## Idea principal

Suposem que tenim:

$$
\int f(g(x))g'(x)\,dx
$$

Triem:

$$
u=g(x)
$$

Aleshores:

$$
du=g'(x)\,dx
$$

Per tant, la integral es transforma en:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

Després d'integrar, tornem a substituir $u=g(x)$.

---

## Procediment

Per resoldre una integral mitjançant substitució:

1. Identificar una funció interior convenient.
2. Definir la substitució:

$$
u=g(x)
$$

3. Calcular:

$$
du=g'(x)\,dx
$$

4. Reescriure completament la integral en termes de $u$.
5. Integrar respecte de $u$.
6. Tornar a substituir $u=g(x)$.
7. Afegir la constant d'integració $C$.

---

## Exemple bàsic

Considerem:

$$
\int 2x(x^2+1)^3\,dx
$$

L'expressió $x^2+1$ apareix elevada a una potència i la seva derivada és $2x$.

Triem:

$$
u=x^2+1
$$

Aleshores:

$$
du=2x\,dx
$$

La integral queda:

$$
\int u^3\,du
$$

Apliquem la regla de la potència:

$$
\frac{u^4}{4}+C
$$

Tornem a $x$:

$$
\boxed{
\int 2x(x^2+1)^3\,dx
=
\frac{(x^2+1)^4}{4}+C
}
$$

---

## Substitució amb una funció trigonomètrica

Considerem:

$$
\int \cos(x)\sin^4(x)\,dx
$$

Podem triar:

$$
u=\sin(x)
$$

Aleshores:

$$
du=\cos(x)\,dx
$$

La integral es converteix en:

$$
\int u^4\,du
$$

Per tant:

$$
\frac{u^5}{5}+C
$$

Tornant a $x$:

$$
\boxed{
\int \cos(x)\sin^4(x)\,dx
=
\frac{\sin^5(x)}{5}+C
}
$$

---

## Substitució amb exponencials

Considerem:

$$
\int e^{3x+1}\,dx
$$

Triem:

$$
u=3x+1
$$

Aleshores:

$$
du=3\,dx
$$

i:

$$
dx=\frac{du}{3}
$$

La integral queda:

$$
\int e^u\frac{du}{3}
=
\frac13\int e^u\,du
$$

Per tant:

$$
\boxed{
\int e^{3x+1}\,dx
=
\frac13e^{3x+1}+C
}
$$

---

## Quan la derivada apareix amb un factor constant

De vegades la derivada de la substitució no apareix exactament, sinó multiplicada per una constant.

Per exemple:

$$
\int x(x^2+4)^5\,dx
$$

Triem:

$$
u=x^2+4
$$

Aleshores:

$$
du=2x\,dx
$$

Com que només tenim $x\,dx$:

$$
x\,dx=\frac12du
$$

Per tant:

$$
\int x(x^2+4)^5\,dx
=
\frac12\int u^5\,du
$$

$$
=
\frac{u^6}{12}+C
$$

Tornant a $x$:

$$
\boxed{
\int x(x^2+4)^5\,dx
=
\frac{(x^2+4)^6}{12}+C
}
$$

---

## Substitució en integrals definides

La substitució també es pot utilitzar en integrals definides.

Considerem:

$$
\int_0^1 2x(x^2+1)^3\,dx
$$

Prenem:

$$
u=x^2+1
$$

i:

$$
du=2x\,dx
$$

També hem de transformar els límits.

Quan $x=0$:

$$
u=0^2+1=1
$$

Quan $x=1$:

$$
u=1^2+1=2
$$

Per tant:

$$
\int_0^1 2x(x^2+1)^3\,dx
=
\int_1^2u^3\,du
$$

Calculem:

$$
\int_1^2u^3\,du
=
\left[\frac{u^4}{4}\right]_1^2
$$

$$
=
\frac{16}{4}-\frac14
$$

$$
\boxed{
\int_0^1 2x(x^2+1)^3\,dx
=
\frac{15}{4}
}
$$

Quan transformem els límits, no cal tornar a $x$ al final.

---

## Com identificar una substitució

Una bona substitució sol aparèixer com una **funció dins d'una altra funció**.

Per exemple:

$$
\int 2x\cos(x^2)\,dx
$$

La funció interior és:

$$
x^2
$$

i la seva derivada és:

$$
2x
$$

Per tant:

$$
u=x^2
$$

és una substitució natural.

Altres patrons freqüents són:

$$
\int f(g(x))g'(x)\,dx
$$

$$
\int \frac{g'(x)}{g(x)}\,dx
$$

$$
\int e^{g(x)}g'(x)\,dx
$$

$$
\int \cos(g(x))g'(x)\,dx
$$

$$
\int \sin(g(x))g'(x)\,dx
$$

---

## Exemple amb un quocient

Considerem:

$$
\int \frac{2x}{x^2+1}\,dx
$$

Triem:

$$
u=x^2+1
$$

Aleshores:

$$
du=2x\,dx
$$

La integral queda:

$$
\int\frac{1}{u}\,du
$$

Sabem que:

$$
\int\frac1u\,du=\ln|u|+C
$$

Per tant:

$$
\boxed{
\int\frac{2x}{x^2+1}\,dx
=
\ln(x^2+1)+C
}
$$

En aquest cas $x^2+1>0$, de manera que no cal mantenir el valor absolut.

---

## Exemple amb una arrel

Considerem:

$$
\int \frac{x}{\sqrt{x^2+1}}\,dx
$$

Triem:

$$
u=x^2+1
$$

Aleshores:

$$
du=2x\,dx
$$

i:

$$
x\,dx=\frac12du
$$

Per tant:

$$
\int\frac{x}{\sqrt{x^2+1}}\,dx
=
\frac12\int u^{-1/2}\,du
$$

$$
=
\frac12\cdot2u^{1/2}+C
$$

Tornant a $x$:

$$
\boxed{
\int\frac{x}{\sqrt{x^2+1}}\,dx
=
\sqrt{x^2+1}+C
}
$$

---

## Substitució i regla de la cadena

La integració per substitució és, essencialment, l'operació inversa de la **regla de la cadena**.

Sabem que:

$$
\frac{d}{dx}F(g(x))
=
F'(g(x))g'(x)
$$

Per tant, en integrar:

$$
\boxed{
\int F'(g(x))g'(x)\,dx
=
F(g(x))+C
}
$$

La substitució permet reconèixer aquesta estructura sense haver de desenvolupar la funció composta.

---

## Comprovació mitjançant derivació

Una manera útil de comprovar una integral és derivar el resultat.

Per exemple:

$$
\int 2x(x^2+1)^3\,dx
=
\frac{(x^2+1)^4}{4}+C
$$

Derivem:

$$
\frac{d}{dx}
\left[
\frac{(x^2+1)^4}{4}
\right]
$$

Aplicant la regla de la cadena:

$$
=
\frac14\cdot4(x^2+1)^3(2x)
$$

$$
=2x(x^2+1)^3
$$

Per tant, el resultat és correcte.

---

## Substitució en integrals amb límits

Per a una integral definida:

$$
\int_a^b f(g(x))g'(x)\,dx
$$

podem utilitzar:

$$
u=g(x)
$$

i transformar els límits:

$$
u(a)=g(a),\qquad u(b)=g(b)
$$

Aleshores:

$$
\boxed{
\int_a^b f(g(x))g'(x)\,dx
=
\int_{g(a)}^{g(b)}f(u)\,du
}
$$

---

## Errors freqüents

### No substituir tota la integral

Després de triar $u$, tots els elements que depenguin de $x$ s'han d'eliminar.

### Oblidar el diferencial

Si:

$$
u=g(x)
$$

també hem de calcular:

$$
du=g'(x)\,dx
$$

### No ajustar un factor constant

Si:

$$
du=2x\,dx
$$

però la integral conté $x\,dx$, aleshores:

$$
x\,dx=\frac12du
$$

### No canviar els límits

En una integral definida, si canviem de $x$ a $u$, també hem de canviar els límits.

### Tornar a $x$ innecessàriament

Si ja hem transformat els límits d'una integral definida, podem deixar el resultat completament en termes de $u$.

---

## Procediment resumit

Davant d'una integral:

$$
\int f(g(x))g'(x)\,dx
$$

identifiquem:

$$
u=g(x)
$$

Calculem:

$$
du=g'(x)\,dx
$$

Transformem:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

Integram i finalment substituïm:

$$
\boxed{u=g(x)}
$$

Per a integrals definides, també transformem els límits.

---

## Resum

La integració per substitució és especialment útil quan apareix una funció composta juntament amb la seva derivada.

L'estructura fonamental és:

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du
}
$$

amb:

$$
\boxed{u=g(x),\qquad du=g'(x)\,dx}
$$

És la tècnica inversa de la regla de la cadena i constitueix una de les eines bàsiques per integrar funcions compostes.
