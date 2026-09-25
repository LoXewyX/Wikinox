# Anàlisi d'una funció

L'**anàlisi d'una funció** consisteix a estudiar-ne les principals propietats per comprendre i descriure el seu comportament.

Els aspectes més importants són el domini, recorregut, zeros, signe, continuïtat, límits, monotonia, extrems, concavitat, asímptotes i simetria.

## Domini

El **domini** d'una funció $f(x)$ és el conjunt de tots els valors de $x$ per als quals la funció està definida.

$$
\boxed{D_f=\{x\in\mathbb{R}:f(x)\text{ està definida}\}}
$$

En determinar el domini cal comprovar:

- Divisions per zero.
- Arrels parelles de nombres negatius.
- Logaritmes de nombres no positius.
- Altres restriccions imposades per l'expressió.

Per exemple:

$$
f(x)=\frac{1}{x-2}
$$

El denominador no pot ser zero:

$$
x-2\neq0
$$

Per tant:

$$
\boxed{D_f=\mathbb{R}\setminus\{2\}}
$$

## Recorregut

El **recorregut** d'una funció és el conjunt de valors que pot prendre $f(x)$.

$$
\boxed{
R_f=\{f(x):x\in D_f\}
}
$$

Per exemple:

$$
f(x)=x^2
$$

Com que $x^2\geq0$:

$$
\boxed{R_f=[0,\infty)}
$$

## Zeros i interseccions amb l'eix $x$

Els **zeros** d'una funció són els valors de $x$ que compleixen:

$$
f(x)=0
$$

Corresponen als punts on la gràfica talla l'eix $x$.

Per exemple:

$$
f(x)=x^2-4
$$

Aleshores:

$$
x^2-4=0
$$

$$
(x-2)(x+2)=0
$$

Per tant:

$$
\boxed{x=-2,\quad x=2}
$$

Les interseccions són:

$$
(-2,0),\qquad(2,0)
$$

## Intersecció amb l'eix $y$

La intersecció amb l'eix $y$ s'obté fent $x=0$:

$$
\boxed{y=f(0)}
$$

Per exemple:

$$
f(x)=x^2+3x+2
$$

$$
f(0)=2
$$

Per tant:

$$
\boxed{(0,2)}
$$

## Signe d'una funció

Estudiar el **signe** permet determinar on la funció és positiva, negativa o zero.

$$
f(x)>0
$$

significa que la gràfica està per sobre de l'eix $x$.

$$
f(x)<0
$$

significa que està per sota de l'eix $x$.

Els zeros divideixen el domini en intervals on es pot estudiar el signe.

## Continuïtat

Una funció és contínua en $x=a$ quan:

$$
\boxed{
\lim_{x\to a}f(x)=f(a)
}
$$

Una funció és contínua en un interval si és contínua en tots els seus punts.

Les discontinuïtats poden aparèixer per:

- Punts on la funció no està definida.
- Forats.
- Salts.
- Asímptotes verticals.

## Límits

Un límit descriu el valor al qual s'aproxima $f(x)$ quan $x$ s'aproxima a un valor determinat.

$$
\boxed{
\lim_{x\to a}f(x)=L
}
$$

Els límits laterals són:

$$
\lim_{x\to a^-}f(x)
$$

i

$$
\lim_{x\to a^+}f(x)
$$

Perquè existeixi el límit:

$$
\boxed{
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
}
$$

També podem estudiar el comportament a l'infinit:

$$
\lim_{x\to\infty}f(x)
$$

i

$$
\lim_{x\to-\infty}f(x)
$$

## Monotonia

La monotonia indica si una funció creix o decreix.

Una funció és **creixent** si:

$$
x_1<x_2
\Rightarrow
f(x_1)<f(x_2)
$$

És **decreixent** si:

$$
x_1<x_2
\Rightarrow
f(x_1)>f(x_2)
$$

Quan la funció és derivable:

$$
\boxed{
f'(x)>0\Rightarrow f\text{ és creixent}
}
$$

$$
\boxed{
f'(x)<0\Rightarrow f\text{ és decreixent}
}
$$

## Punts crítics

Un **punt crític** apareix quan:

$$
f'(x)=0
$$

o quan $f'(x)$ no existeix.

Els punts crítics són importants perquè poden correspondre a màxims o mínims locals.

## Extrems locals

Un **màxim local** apareix quan la funció assoleix un valor més gran que els valors propers.

Un **mínim local** apareix quan assoleix un valor més petit que els valors propers.

Si la derivada canvia de:

$$
+\to-
$$

la funció passa de creixent a decreixent:

$$
\boxed{\text{màxim local}}
$$

Si canvia de:

$$
-\to+
$$

passa de decreixent a creixent:

$$
\boxed{\text{mínim local}}
$$

## Concavitat

La concavitat descriu com es corba la gràfica.

Si:

$$
f''(x)>0
$$

la funció és còncava cap amunt:

$$
\boxed{f''(x)>0\Rightarrow\text{còncava cap amunt}}
$$

Si:

$$
f''(x)<0
$$

és còncava cap avall:

$$
\boxed{f''(x)<0\Rightarrow\text{còncava cap avall}}
$$

## Punts d'inflexió

Un **punt d'inflexió** és un punt on canvia la concavitat.

Un possible punt d'inflexió es pot trobar resolent:

$$
f''(x)=0
$$

però aquesta condició per si sola no és suficient. La concavitat ha de canviar realment.

Per tant:

$$
\boxed{
\text{Punt d'inflexió}
\iff
\text{canvia la concavitat}
}
$$

## Asímptotes

Una asímptota és una recta a la qual la gràfica s'aproxima.

### Asímptotes verticals

Hi ha una asímptota vertical en $x=a$ quan:

$$
\boxed{
\lim_{x\to a}f(x)=\pm\infty
}
$$

L'asímptota és:

$$
\boxed{x=a}
$$

### Asímptotes horitzontals

Si:

$$
\lim_{x\to\infty}f(x)=L
$$

aleshores:

$$
\boxed{y=L}
$$

és una asímptota horitzontal.

També es pot estudiar el límit quan $x\to-\infty$.

### Asímptotes obliqües

Una asímptota obliqua té la forma:

$$
\boxed{y=mx+n}
$$

i descriu el comportament lineal de la funció a l'infinit.

## Simetria

La simetria pot simplificar considerablement l'anàlisi.

### Funcions parelles

Una funció és parella si:

$$
f(-x)=f(x)
$$

La seva gràfica és simètrica respecte de l'eix $y$.

$$
\boxed{f(-x)=f(x)\Rightarrow\text{funció parella}}
$$

### Funcions senars

Una funció és senar si:

$$
f(-x)=-f(x)
$$

La seva gràfica és simètrica respecte de l'origen.

$$
\boxed{f(-x)=-f(x)\Rightarrow\text{funció senar}}
$$

## Comportament a l'infinit

Els límits:

$$
\lim_{x\to\infty}f(x)
$$

i

$$
\lim_{x\to-\infty}f(x)
$$

descriuen el comportament de la funció quan $x$ pren valors molt grans positius o negatius.

Per exemple:

$$
f(x)=\frac{1}{x}
$$

compleix:

$$
\boxed{
\lim_{x\to\infty}\frac1x
=
\lim_{x\to-\infty}\frac1x
=0
}
$$

Per tant, $y=0$ és una asímptota horitzontal.

## Exemple complet

Considerem:

$$
f(x)=x^3-3x
$$

### Domini

Com que és un polinomi:

$$
\boxed{D_f=\mathbb{R}}
$$

### Zeros

$$
x^3-3x=0
$$

$$
x(x^2-3)=0
$$

Per tant:

$$
\boxed{x=-\sqrt3,\quad x=0,\quad x=\sqrt3}
$$

### Primera derivada

$$
f'(x)=3x^2-3
$$

Factoritzant:

$$
f'(x)=3(x-1)(x+1)
$$

Els punts crítics són:

$$
\boxed{x=-1,\quad x=1}
$$

### Monotonia

El signe de $f'(x)$ indica:

- Creixent a $(-\infty,-1)$.
- Decreixent a $(-1,1)$.
- Creixent a $(1,\infty)$.

Per tant:

$$
\boxed{x=-1\text{ és un màxim local}}
$$

i

$$
\boxed{x=1\text{ és un mínim local}}
$$

### Segona derivada

$$
f''(x)=6x
$$

Per tant:

- $f''(x)<0$ quan $x<0$.
- $f''(x)>0$ quan $x>0$.

La concavitat canvia en $x=0$:

$$
\boxed{(0,0)\text{ és un punt d'inflexió}}
$$

### Gràfica

:::function-graph{expression="x^3-3*x" restriction="-3<=x<=3" showWorkings=true}
:::

## Ordre recomanat per analitzar una funció

Una anàlisi sistemàtica pot seguir aquest ordre:

1. **Domini**
2. **Simetria**
3. **Zeros i interseccions**
4. **Signe**
5. **Continuïtat**
6. **Límits**
7. **Asímptotes**
8. **Primera derivada**
9. **Punts crítics**
10. **Monotonia**
11. **Extrems locals**
12. **Segona derivada**
13. **Concavitat**
14. **Punts d'inflexió**
15. **Comportament a l'infinit**
16. **Gràfica**

L'ordre exacte pot variar segons la funció.

## Resum

L'objectiu principal de l'anàlisi d'una funció és determinar com es comporta en tot el seu domini.

Les propietats fonamentals són:

$$
\boxed{
\text{domini, recorregut, zeros, signe, continuïtat, límits, monotonia, extrems, concavitat, asímptotes i simetria}
}
$$
