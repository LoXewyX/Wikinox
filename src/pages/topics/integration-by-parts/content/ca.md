# Integració per parts

La **integració per parts** és una tècnica utilitzada per integrar productes de funcions quan la integració directa o la substitució no són adequades.

Es basa en la regla del producte de la derivació.

La fórmula fonamental és:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

La idea és transformar una integral difícil en una altra que sigui més senzilla de calcular.

---

## D'on prové la fórmula

Partim de la regla del producte:

$$
\frac{d}{dx}(uv)
=
u\frac{dv}{dx}
+
v\frac{du}{dx}
$$

En forma diferencial:

$$
d(uv)=u\,dv+v\,du
$$

Despejant:

$$
u\,dv=d(uv)-v\,du
$$

Integram els dos costats:

$$
\int u\,dv
=
\int d(uv)-\int v\,du
$$

Per tant:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

---

## Procediment

Per aplicar integració per parts:

1. Triar $u$.
2. Triar $dv$.
3. Calcular $du$.
4. Integrar $dv$ per obtenir $v$.
5. Aplicar:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

6. Simplificar i calcular la nova integral.

L'elecció de $u$ i $dv$ és la part més important del mètode.

---

## Com triar $u$

Una regla pràctica habitual és **LIATE**, que ordena alguns tipus de funcions segons la seva prioritat per triar $u$:

1. **L** — Logarítmiques
2. **I** — Inverses trigonomètriques
3. **A** — Algebraiques
4. **T** — Trigonomètriques
5. **E** — Exponencials

Per exemple, en:

$$
\int x e^x\,dx
$$

trié:

$$
u=x
$$

perquè és algebraica, mentre que:

$$
dv=e^x\,dx
$$

és exponencial.

LIATE és una guia, no una regla absoluta. L'elecció ha de produir una integral més senzilla.

---

## Exemple bàsic

Considerem:

$$
\int x e^x\,dx
$$

Triem:

$$
u=x
$$

i:

$$
dv=e^x\,dx
$$

Aleshores:

$$
du=dx
$$

i:

$$
v=e^x
$$

Apliquem la fórmula:

$$
\int u\,dv=uv-\int v\,du
$$

$$
\int xe^x\,dx
=
xe^x-\int e^x\,dx
$$

Per tant:

$$
\boxed{
\int xe^x\,dx
=
xe^x-e^x+C
}
$$

o:

$$
\boxed{
\int xe^x\,dx=e^x(x-1)+C
}
$$

---

## Exemple amb un logaritme

Considerem:

$$
\int \ln(x)\,dx
$$

Encara que no sembli un producte, podem escriure:

$$
\int \ln(x)\cdot1\,dx
$$

Triem:

$$
u=\ln(x)
$$

i:

$$
dv=dx
$$

Aleshores:

$$
du=\frac1x\,dx
$$

i:

$$
v=x
$$

Apliquem integració per parts:

$$
\int\ln(x)\,dx
=
x\ln(x)-\int x\frac1x\,dx
$$

$$
=
x\ln(x)-\int1\,dx
$$

Per tant:

$$
\boxed{
\int\ln(x)\,dx
=
x\ln(x)-x+C
}
$$

---

## Exemple amb una funció trigonomètrica

Considerem:

$$
\int x\cos(x)\,dx
$$

Triem:

$$
u=x
$$

$$
dv=\cos(x)\,dx
$$

Aleshores:

$$
du=dx
$$

$$
v=\sin(x)
$$

Apliquem la fórmula:

$$
\int x\cos(x)\,dx
=
x\sin(x)-\int\sin(x)\,dx
$$

Com que:

$$
\int\sin(x)\,dx=-\cos(x)
$$

obtenim:

$$
\boxed{
\int x\cos(x)\,dx
=
x\sin(x)+\cos(x)+C
}
$$

---

## Exemple amb una potència i un logaritme

Considerem:

$$
\int x^2\ln(x)\,dx
$$

Triem:

$$
u=\ln(x)
$$

$$
dv=x^2\,dx
$$

Aleshores:

$$
du=\frac1x\,dx
$$

i:

$$
v=\frac{x^3}{3}
$$

Apliquem:

$$
\int x^2\ln(x)\,dx
=
\frac{x^3}{3}\ln(x)
-
\int\frac{x^3}{3}\frac1x\,dx
$$

$$
=
\frac{x^3}{3}\ln(x)
-
\frac13\int x^2\,dx
$$

Per tant:

$$
\boxed{
\int x^2\ln(x)\,dx
=
\frac{x^3}{3}\ln(x)-\frac{x^3}{9}+C
}
$$

---

## Integració per parts repetida

Algunes integrals requereixen aplicar integració per parts més d'una vegada.

Considerem:

$$
\int x^2e^x\,dx
$$

Primera aplicació:

$$
u=x^2,
\qquad
dv=e^x\,dx
$$

Aleshores:

$$
du=2x\,dx,
\qquad
v=e^x
$$

Per tant:

$$
\int x^2e^x\,dx
=
x^2e^x-2\int xe^x\,dx
$$

Ja sabem que:

$$
\int xe^x\,dx=e^x(x-1)
$$

Substituint:

$$
\int x^2e^x\,dx
=
x^2e^x-2e^x(x-1)+C
$$

Simplificant:

$$
\boxed{
\int x^2e^x\,dx
=
e^x(x^2-2x+2)+C
}
$$

---

## Integració per parts amb integrals trigonomètriques

També es pot utilitzar quan el producte conté funcions trigonomètriques.

Per exemple:

$$
\int x\sin(x)\,dx
$$

Triem:

$$
u=x,
\qquad
dv=\sin(x)\,dx
$$

Aleshores:

$$
du=dx,
\qquad
v=-\cos(x)
$$

Apliquem la fórmula:

$$
\int x\sin(x)\,dx
=
-x\cos(x)+\int\cos(x)\,dx
$$

Per tant:

$$
\boxed{
\int x\sin(x)\,dx
=
-x\cos(x)+\sin(x)+C
}
$$

---

## Quan torna a aparèixer la integral original

Existeix un cas especialment interessant en què, després d'aplicar integració per parts, torna a aparèixer la integral original.

Per exemple:

$$
\int e^x\cos(x)\,dx
$$

Sigui:

$$
I=\int e^x\cos(x)\,dx
$$

Primera integració per parts:

$$
u=\cos(x),
\qquad
dv=e^x\,dx
$$

Aleshores:

$$
du=-\sin(x)\,dx,
\qquad
v=e^x
$$

Per tant:

$$
I=e^x\cos(x)+\int e^x\sin(x)\,dx
$$

Definim:

$$
J=\int e^x\sin(x)\,dx
$$

Apliquem integració per parts de nou:

$$
u=\sin(x),
\qquad
dv=e^x\,dx
$$

Aleshores:

$$
du=\cos(x)\,dx,
\qquad
v=e^x
$$

Així:

$$
J=e^x\sin(x)-\int e^x\cos(x)\,dx
$$

Com que l'última integral és $I$:

$$
J=e^x\sin(x)-I
$$

Substituïm en la primera expressió:

$$
I=e^x\cos(x)+e^x\sin(x)-I
$$

Per tant:

$$
2I=e^x(\sin(x)+\cos(x))
$$

i finalment:

$$
\boxed{
\int e^x\cos(x)\,dx
=
\frac{e^x}{2}
\left(\sin(x)+\cos(x)\right)+C
}
$$

---

## Integració per parts en integrals definides

La fórmula també funciona per a integrals definides:

$$
\boxed{
\int_a^b u\,dv
=
[uv]_a^b-\int_a^b v\,du
}
$$

### Exemple

Considerem:

$$
\int_0^1 xe^x\,dx
$$

Triem:

$$
u=x,
\qquad
dv=e^x\,dx
$$

Aleshores:

$$
du=dx,
\qquad
v=e^x
$$

Apliquem:

$$
\int_0^1xe^x\,dx
=
[xe^x]_0^1
-
\int_0^1e^x\,dx
$$

Calculem:

$$
[e^x]_0^1=e-1
$$

i:

$$
[xe^x]_0^1=e
$$

Per tant:

$$
\boxed{
\int_0^1xe^x\,dx=1
}
$$

---

## Com saber quan utilitzar integració per parts

La integració per parts sol ser adequada quan apareix un producte de funcions de tipus diferents, especialment:

$$
\boxed{
\text{polinomi}\times\text{exponencial}
}
$$

$$
\boxed{
\text{polinomi}\times\text{trigonomètrica}
}
$$

$$
\boxed{
\text{polinomi}\times\text{logarítmica}
}
$$

També és útil per a:

$$
\int\ln(x)\,dx
$$

i:

$$
\int\arctan(x)\,dx
$$

encara que inicialment no apareguin com a productes.

---

## Integració per parts i substitució

Les dues tècniques tenen objectius diferents.

### Substitució

És especialment útil quan apareix una funció composta acompanyada de la seva derivada:

$$
\int f(g(x))g'(x)\,dx
$$

### Integració per parts

És especialment útil quan apareix un producte:

$$
\int u\,dv
$$

Una regla pràctica és:

> Si una funció composta va acompanyada de la seva derivada, considera la substitució. Si apareix un producte de funcions diferents, considera la integració per parts.

---

## Errors freqüents

### Triar malament $u$

L'elecció ha de fer que:

$$
\int v\,du
$$

sigui més senzilla que la integral original.

### Oblidar calcular $du$

Després de triar:

$$
u=g(x)
$$

hem de calcular:

$$
du=g'(x)\,dx
$$

### Integrar incorrectament $dv$

Hem de calcular:

$$
v=\int dv
$$

### Oblidar el signe negatiu

La fórmula és:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

No:

$$
uv+\int v\,du
$$

### Aplicar parts quan la substitució és més senzilla

No totes les integrals de productes requereixen integració per parts. Sempre convé comprovar primer si existeix una substitució natural.

---

## Procediment resumit

Davant d'una integral:

$$
\int f(x)g(x)\,dx
$$

podem intentar escriure:

$$
u=f(x)
$$

i:

$$
dv=g(x)\,dx
$$

Després calculem:

$$
du=f'(x)\,dx
$$

i:

$$
v=\int g(x)\,dx
$$

Finalment apliquem:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

---

## Resum

La integració per parts es basa en la regla del producte i permet transformar una integral en una altra de més senzilla.

La fórmula fonamental és:

$$
\boxed{
\int u\,dv=uv-\int v\,du
}
$$

Per a integrals definides:

$$
\boxed{
\int_a^b u\,dv
=
[uv]_a^b-\int_a^b v\,du
}
$$

Una elecció adequada de $u$ ha de simplificar la nova integral.

L'estratègia és:

$$
\boxed{
u\longrightarrow du,
\qquad
dv\longrightarrow v
}
$$

i després aplicar la fórmula.
