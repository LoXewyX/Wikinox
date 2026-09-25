# Derivació de funcions

La **derivada** descriu com canvia una funció quan canvia la seva variable d'entrada. Es pot interpretar com la taxa de variació instantània o com el pendent de la recta tangent a la gràfica.

## 1. Definició de derivada

La derivada d'una funció $f(x)$ en $x=a$ es defineix com

$$
f'(a)
=
\lim_{h\to0}
\frac{f(a+h)-f(a)}{h}.
$$

El quocient

$$
\frac{f(a+h)-f(a)}{h}
$$

representa la taxa mitjana de variació entre dos punts. Quan $h$ tendeix a $0$, obtenim la taxa de variació instantània.

Si aquest límit existeix, la funció és derivable en $x=a$.

La derivada com a funció s'escriu

$$
f'(x)
=
\lim_{h\to0}
\frac{f(x+h)-f(x)}{h}.
$$

## 2. Interpretació geomètrica

La derivada $f'(a)$ representa el pendent de la recta tangent a la gràfica de $f$ en el punt $(a,f(a))$.

Una derivada positiva indica que la funció és creixent localment, mentre que una derivada negativa indica que és decreixent localment.

Si

$$
f'(a)=0,
$$

la recta tangent és horitzontal.

Per exemple, per a

$$
f(x)=x^2,
$$

la derivada és

$$
f'(x)=2x.
$$

Per tant, en $x=2$,

$$
f'(2)=4.
$$

La recta tangent té pendent $4$ en el punt $(2,4)$.

:::function-graph{expression="x^2" restriction="-4<=x<=4"}
:::

## 3. Derivabilitat i continuïtat

Si una funció és derivable en $x=a$, aleshores és contínua en $x=a$.

$$
\boxed{
\text{Derivable}
\implies
\text{Contínua}
}
$$

La implicació inversa no sempre és certa.

Per exemple,

$$
f(x)=|x|
$$

és contínua en $x=0$, però no és derivable en aquest punt perquè les derivades laterals són diferents.

$$
f'_-(0)=-1,
\qquad
f'_+(0)=1.
$$

Per tant,

$$
\boxed{
|x|\text{ és contínua però no derivable en }x=0.
}
$$

:::function-graph{expression="abs(x)" restriction="-4<=x<=4"}
:::

## 4. Regles bàsiques de derivació

### Regla de la constant

Si

$$
f(x)=c,
$$

on $c$ és una constant, aleshores

$$
\boxed{f'(x)=0}.
$$

### Regla de la potència

Per a

$$
f(x)=x^n,
$$

la derivada és

$$
\boxed{
\frac{d}{dx}x^n=nx^{n-1}
}.
$$

Per exemple,

$$
\frac{d}{dx}x^5
=
5x^4.
$$

La regla també s'aplica a potències negatives i fraccionàries quan la funció és derivable:

$$
\frac{d}{dx}x^{-2}
=
-2x^{-3},
$$

i

$$
\frac{d}{dx}\sqrt{x}
=
\frac{d}{dx}x^{1/2}
=
\frac{1}{2\sqrt{x}}.
$$

### Regla del múltiple constant

Si

$$
f(x)=c\,g(x),
$$

aleshores

$$
\boxed{
f'(x)=c\,g'(x)
}.
$$

Per exemple,

$$
\frac{d}{dx}(7x^3)
=
21x^2.
$$

### Regla de la suma i diferència

Per a les funcions $f$ i $g$,

$$
\boxed{
(f\pm g)'=f'\pm g'
}.
$$

Per exemple,

$$
\frac{d}{dx}(x^3+2x^2-5x+1)
=
3x^2+4x-5.
$$

## 5. Regla del producte

Quan dues funcions es multipliquen,

$$
f(x)=u(x)v(x),
$$

la derivada és

$$
\boxed{
(uv)'=u'v+uv'
}.
$$

Per exemple,

$$
f(x)=x^2\sin(x).
$$

Aleshores,

$$
f'(x)
=
2x\sin(x)+x^2\cos(x).
$$

La regla del producte és necessària perquè, en general,

$$
(uv)'\neq u'v'.
$$

## 6. Regla del quocient

Per a

$$
f(x)=\frac{u(x)}{v(x)},
\qquad v(x)\neq0,
$$

la derivada és

$$
\boxed{
\left(\frac{u}{v}\right)'
=
\frac{u'v-uv'}{v^2}
}.
$$

Per exemple,

$$
f(x)=\frac{x^2+1}{x}.
$$

Aleshores,

$$
f'(x)
=
\frac{2x(x)-(x^2+1)}{x^2}
=
\boxed{
\frac{x^2-1}{x^2}
}.
$$

## 7. Regla de la cadena

La **regla de la cadena** s'utilitza quan una funció està composta amb una altra.

Si

$$
f(x)=g(h(x)),
$$

aleshores

$$
\boxed{
f'(x)=g'(h(x))h'(x)
}.
$$

És a dir, derivem la funció exterior i multipliquem per la derivada de la funció interior.

Per exemple,

$$
f(x)=(3x+1)^5.
$$

La funció exterior és $u^5$ i la funció interior és $u=3x+1$.

Per tant,

$$
f'(x)
=
5(3x+1)^4\cdot3.
$$

Així,

$$
\boxed{
f'(x)=15(3x+1)^4
}.
$$

Un altre exemple és

$$
f(x)=\sqrt{x^2+1}.
$$

Escrivint l'arrel com una potència,

$$
f(x)=(x^2+1)^{1/2},
$$

obtenim

$$
f'(x)
=
\frac12(x^2+1)^{-1/2}(2x).
$$

Per tant,

$$
\boxed{
f'(x)=\frac{x}{\sqrt{x^2+1}}
}.
$$

## 8. Derivades de funcions habituals

Algunes derivades importants són

$$
\boxed{
\frac{d}{dx}e^x=e^x
}
$$

$$
\boxed{
\frac{d}{dx}\ln(x)=\frac1x
}
$$

$$
\boxed{
\frac{d}{dx}\sin(x)=\cos(x)
}
$$

$$
\boxed{
\frac{d}{dx}\cos(x)=-\sin(x)
}
$$

$$
\boxed{
\frac{d}{dx}\tan(x)=\sec^2(x)
}
$$

Aquestes fórmules es combinen amb les regles bàsiques de derivació i la regla de la cadena.

Per exemple,

$$
f(x)=e^{2x}
$$

té com a derivada

$$
\boxed{
f'(x)=2e^{2x}
}.
$$

## 9. Derivades d'ordre superior

La derivada de la derivada s'anomena **segona derivada**:

$$
f''(x)=\frac{d}{dx}f'(x).
$$

De manera general,

$$
f^{(n)}(x)
$$

representa la derivada d'ordre $n$.

Per exemple, si

$$
f(x)=x^4,
$$

aleshores

$$
f'(x)=4x^3,
$$

$$
f''(x)=12x^2,
$$

$$
f'''(x)=24x,
$$

i

$$
f^{(4)}(x)=24.
$$

## 10. Derivades i monotonia

La primera derivada permet determinar on una funció és creixent o decreixent.

Si

$$
f'(x)>0
$$

en tot un interval, aleshores $f$ és creixent en aquest interval.

Si

$$
f'(x)<0
$$

en tot un interval, aleshores $f$ és decreixent.

Per tant,

$$
\boxed{
f'(x)>0\Rightarrow f\text{ creixent}
}
$$

i

$$
\boxed{
f'(x)<0\Rightarrow f\text{ decreixent}
}.
$$

Els punts on

$$
f'(x)=0
$$

o on $f'(x)$ no existeix s'anomenen **punts crítics**, sempre que pertanyin al domini de $f$.

## 11. Derivades i extrems locals

Un màxim o mínim local pot aparèixer en un punt crític.

Si

$$
f'(a)=0,
$$

el punt $x=a$ és candidat a ser un extrem local.

Tanmateix, que $f'(a)=0$ no garanteix per si sol que hi hagi un màxim o mínim.

Per exemple,

$$
f(x)=x^3
$$

satisfà

$$
f'(0)=0,
$$

però $x=0$ no és ni un màxim ni un mínim local.

El signe de la derivada al voltant del punt crític proporciona més informació.

Si la derivada canvia de positiva a negativa,

$$
+\rightarrow-,
$$

la funció té un màxim local.

Si canvia de negativa a positiva,

$$
-\rightarrow+,
$$

la funció té un mínim local.

## 12. Recta tangent

Si $f$ és derivable en $x=a$, la recta tangent en $(a,f(a))$ té pendent $f'(a)$.

La seva equació és

$$
\boxed{
y-f(a)=f'(a)(x-a)
}.
$$

Per exemple, sigui

$$
f(x)=x^2
$$

i $a=1$.

Tenim

$$
f(1)=1,
\qquad
f'(x)=2x,
\qquad
f'(1)=2.
$$

Per tant,

$$
y-1=2(x-1),
$$

i obtenim

$$
\boxed{
y=2x-1
}.
$$

## 13. Procediment per derivar

Per derivar una funció:

1. Identifica l'estructura de la funció.
2. Comprova si és una suma, producte, quocient o composició.
3. Tria la regla de derivació corresponent.
4. Aplica la regla amb cura.
5. Simplifica el resultat.
6. Comprova el domini on existeix la derivada.
7. Si cal, analitza el signe de la derivada.

Les regles principals són

$$
\boxed{
\frac{d}{dx}x^n=nx^{n-1}
}
$$

$$
\boxed{
(uv)'=u'v+uv'
}
$$

$$
\boxed{
\left(\frac uv\right)'
=
\frac{u'v-uv'}{v^2}
}
$$

i

$$
\boxed{
(g(h(x)))'
=
g'(h(x))h'(x)
}.
$$
