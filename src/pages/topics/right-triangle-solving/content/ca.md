# Resolució de triangles rectangles

Un **triangle rectangle** és un triangle que té un angle de $90^\circ$.

Per resoldre un triangle rectangle podem utilitzar el **teorema de Pitàgores** i les **raons trigonomètriques** sinus, cosinus i tangent.

## Elements d'un triangle rectangle

En un triangle rectangle tenim:

- **Hipotenusa**: costat oposat a l'angle recte i sempre el costat més llarg.
- **Catet oposat**: costat situat davant de l'angle que estem utilitzant.
- **Catet adjacent**: catet que forma l'angle que estem utilitzant.

:::right-triangle-diagram
:::

## Teorema de Pitàgores

Si els catets són $a$ i $b$ i la hipotenusa és $c$:

$$
a^2+b^2=c^2
$$

Per exemple, si coneixem els dos catets:

$$
a=3,\qquad b=4
$$

podem calcular la hipotenusa:

$$
c=\sqrt{3^2+4^2}
$$

$$
c=\sqrt{25}=5
$$

## Raons trigonomètriques

:::right-triangle-diagram{mode="trigonometry"}
:::

Per a un angle agut $\theta$:

$$
\sin(\theta)=\frac{\text{catet oposat}}{\text{hipotenusa}}
$$

$$
\cos(\theta)=\frac{\text{catet adjacent}}{\text{hipotenusa}}
$$

$$
\tan(\theta)=\frac{\text{catet oposat}}{\text{catet adjacent}}
$$

Una manera senzilla de recordar-les és **SOH-CAH-TOA**:

- **SOH**: Sinus = Oposat / Hipotenusa
- **CAH**: Cosinus = Adjacent / Hipotenusa
- **TOA**: Tangent = Oposat / Adjacent

## Calcular un costat

Si coneixem un angle i un costat, podem calcular un altre costat utilitzant una raó trigonomètrica.

Per exemple, si:

$$
\theta=30^\circ
$$

i la hipotenusa mesura $10$:

$$
\sin(30^\circ)=\frac{a}{10}
$$

Per tant:

$$
a=10\sin(30^\circ)
$$

$$
a=5
$$

## Calcular un angle

Si coneixem dos costats, podem calcular un angle utilitzant les funcions trigonomètriques inverses:

$$
\theta=\arcsin\left(\frac{\text{oposat}}{\text{hipotenusa}}\right)
$$

$$
\theta=\arccos\left(\frac{\text{adjacent}}{\text{hipotenusa}}\right)
$$

$$
\theta=\arctan\left(\frac{\text{oposat}}{\text{adjacent}}\right)
$$

## Estratègia per resoldre un triangle

1. Identifica la hipotenusa.
2. Tria l'angle que coneixes o vols calcular.
3. Identifica el catet oposat i l'adjacent.
4. Comprova si pots utilitzar Pitàgores.
5. Si coneixes un angle, utilitza sinus, cosinus o tangent.
6. Si necessites trobar un angle, utilitza $\arcsin$, $\arccos$ o $\arctan$.
7. Comprova que els resultats siguin coherents.

## Exemple complet

Suposem que tenim un triangle rectangle amb:

$$
a=6,\qquad b=8
$$

Primer calculem la hipotenusa:

$$
c=\sqrt{6^2+8^2}
$$

$$
c=\sqrt{36+64}
$$

$$
c=10
$$

Ara podem calcular un dels angles:

$$
\theta=\arcsin\left(\frac{6}{10}\right)
$$

Per tant:

$$
\theta\approx36.87^\circ
$$

L'altre angle agut serà:

$$
90^\circ-36.87^\circ\approx53.13^\circ
$$

Així coneixem tots els costats i angles del triangle.
