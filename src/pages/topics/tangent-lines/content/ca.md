# Rectes tangents

La **recta tangent** a una funció en un punt és la recta que descriu la direcció instantània de la funció en aquest punt.

Si $f$ és derivable en $x=a$, el pendent de la recta tangent és la derivada:

$$
m=f'(a)
$$

L'equació de la recta tangent en el punt $(a,f(a))$ és:

$$
\boxed{y-f(a)=f'(a)(x-a)}
$$

o, equivalentment,

$$
\boxed{y=f'(a)(x-a)+f(a)}
$$

---

## Interpretació geomètrica

Considerem una funció $f(x)$ i un punt

$$
P=(a,f(a)).
$$

La derivada $f'(a)$ representa el pendent de la funció exactament en aquest punt.

- Si $f'(a)>0$, la tangent puja.
- Si $f'(a)<0$, la tangent baixa.
- Si $f'(a)=0$, la tangent és horitzontal.
- Com més gran és $|f'(a)|$, més inclinada és la tangent.

La recta tangent aproxima localment la funció prop de $x=a$.

---

## Càlcul d'una recta tangent

Per trobar la recta tangent a $f(x)$ en $x=a$:

1. Calcular $f(a)$.
2. Calcular la derivada $f'(x)$.
3. Avaluar la derivada en $a$ per obtenir el pendent.
4. Utilitzar l'equació punt-pendent.

$$
\boxed{m=f'(a)}
$$

$$
\boxed{P=(a,f(a))}
$$

$$
\boxed{y-f(a)=f'(a)(x-a)}
$$

### Exemple

Sigui

$$
f(x)=x^2+2x
$$

i volem la tangent en $x=1$.

Primer calculem el punt:

$$
f(1)=1^2+2(1)=3
$$

Per tant:

$$
P=(1,3)
$$

Derivem:

$$
f'(x)=2x+2
$$

Avaluem en $x=1$:

$$
f'(1)=4
$$

El pendent és $m=4$.

Apliquem l'equació punt-pendent:

$$
y-3=4(x-1)
$$

Simplificant:

$$
\boxed{y=4x-1}
$$

---

## Recta tangent mitjançant el límit

La derivada es pot definir com el límit dels pendents de les rectes secants:

$$
f'(a)=
\lim_{h\to0}
\frac{f(a+h)-f(a)}{h}
$$

Per tant, el pendent de la tangent s'obté fent que el segon punt de la secant s'apropi al primer.

$$
\boxed{
f'(a)=
\lim_{x\to a}
\frac{f(x)-f(a)}{x-a}
}
$$

Això explica per què la derivada representa el pendent instantani.

---

## Recta secant i recta tangent

Una **recta secant** passa per dos punts de la funció:

$$
(a,f(a)),\qquad (b,f(b))
$$

El seu pendent és:

$$
m_{\text{secant}}
=
\frac{f(b)-f(a)}{b-a}
$$

Quan $b$ s'aproxima a $a$, la secant s'aproxima a la tangent.

$$
\boxed{
m_{\text{tangent}}
=
\lim_{b\to a}
\frac{f(b)-f(a)}{b-a}
=
f'(a)
}
$$

---

## Recta normal

La **recta normal** és perpendicular a la recta tangent.

Si el pendent de la tangent és $m\neq0$, el pendent de la normal és:

$$
\boxed{
m_n=-\frac{1}{m}
}
$$

Per tant:

$$
\boxed{
m_n=-\frac{1}{f'(a)}
}
$$

L'equació de la normal és:

$$
\boxed{
y-f(a)
=
-\frac{1}{f'(a)}(x-a)
}
$$

### Exemple

Per a

$$
f(x)=x^2
$$

en $x=1$:

$$
f(1)=1
$$

$$
f'(x)=2x
$$

$$
f'(1)=2
$$

La tangent és:

$$
y-1=2(x-1)
$$

$$
\boxed{y=2x-1}
$$

La normal té pendent:

$$
m_n=-\frac12
$$

i, per tant:

$$
y-1=-\frac12(x-1)
$$

$$
\boxed{y=-\frac12x+\frac32}
$$

---

## Tangents horitzontals

Una tangent és horitzontal quan el seu pendent és zero:

$$
f'(a)=0
$$

Per trobar els punts on la gràfica té una tangent horitzontal, resolem:

$$
\boxed{f'(x)=0}
$$

Aquests punts són candidats a màxims o mínims locals, encara que no necessàriament ho siguin.

### Exemple

Sigui:

$$
f(x)=x^3-3x
$$

Aleshores:

$$
f'(x)=3x^2-3
$$

Busquem:

$$
3x^2-3=0
$$

$$
x^2=1
$$

$$
x=\pm1
$$

Els punts corresponents són:

$$
f(-1)=2
$$

$$
f(1)=-2
$$

Per tant, hi ha tangents horitzontals en:

$$
\boxed{(-1,2)}
$$

i

$$
\boxed{(1,-2)}
$$

---

## Tangents verticals

Una tangent vertical té direcció vertical i, per tant, el pendent no és finit.

En aquests casos, la derivada pot tendir a infinit:

$$
\lim_{x\to a}f'(x)=\pm\infty
$$

No es pot escriure com $y=mx+b$ perquè una recta vertical té equació:

$$
\boxed{x=a}
$$

Un exemple típic és:

$$
f(x)=\sqrt[3]{x}
$$

En $x=0$ la funció té una tangent vertical:

$$
\boxed{x=0}
$$

---

## Aproximació lineal

La recta tangent també permet aproximar una funció prop d'un punt.

L'**aproximació lineal** de $f(x)$ al voltant de $x=a$ és:

$$
\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

Aquesta expressió coincideix amb l'equació de la recta tangent.

### Exemple

Per aproximar $\sqrt{4.1}$ podem utilitzar:

$$
f(x)=\sqrt{x}
$$

Triem $a=4$ perquè $\sqrt4=2$.

La derivada és:

$$
f'(x)=\frac{1}{2\sqrt{x}}
$$

Per tant:

$$
f'(4)=\frac14
$$

L'aproximació lineal és:

$$
L(x)=2+\frac14(x-4)
$$

Avaluant en $x=4.1$:

$$
L(4.1)=2+\frac14(0.1)
$$

$$
\boxed{\sqrt{4.1}\approx2.025}
$$

---

## Interpretació gràfica

La tangent i la funció coincideixen exactament en el punt de tangència:

$$
P=(a,f(a))
$$

A més, tenen el mateix pendent:

$$
\boxed{f'(a)=m_{\text{tangent}}}
$$

A prop de $a$, la tangent pot proporcionar una bona aproximació de la funció.

:::function-graph{expression="x^2" restriction="-3<=x<=3"}
:::

---

## Procediment general

Per trobar la recta tangent de $f(x)$ en $x=a$:

1. Calcular $f(a)$.
2. Derivar $f(x)$.
3. Calcular $f'(a)$.
4. Identificar el punt $(a,f(a))$.
5. Aplicar:

$$
\boxed{
y-f(a)=f'(a)(x-a)
}
$$

6. Simplificar l'equació.

Si es necessita la normal:

$$
\boxed{
m_n=-\frac1{f'(a)}
}
$$

---

## Errors freqüents

### Confondre $f(a)$ amb $f'(a)$

Són quantitats diferents:

$$
f(a)=\text{coordenada }y
$$

$$
f'(a)=\text{pendent}
$$

### Utilitzar $f'(x)$ com a pendent

El pendent de la tangent en un punt concret és:

$$
\boxed{f'(a)}
$$

no $f'(x)$.

### Oblidar calcular el punt de tangència

El pendent per si sol no determina una recta. També necessitem:

$$
(a,f(a))
$$

### Confondre tangent i normal

Els pendents de tangent i normal, quan tots dos són finits, compleixen:

$$
m_t\,m_n=-1
$$

---

## Resum

La recta tangent a $f(x)$ en $x=a$ té:

- punt de tangència: $(a,f(a))$;
- pendent: $f'(a)$;
- equació:

$$
\boxed{
y=f(a)+f'(a)(x-a)
}
$$

L'aproximació lineal és exactament aquesta mateixa expressió:

$$
\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

La recta normal, quan $f'(a)\neq0$, té pendent:

$$
\boxed{
-\frac1{f'(a)}
}
$$
