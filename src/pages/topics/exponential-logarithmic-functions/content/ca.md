# Funcions exponencials i logarítmiques

Les **funcions exponencials** i **logarítmiques** estan estretament relacionades. De fet, una funció logarítmica és la **funció inversa** d'una funció exponencial.

## Funció exponencial

Una funció exponencial té la forma:

$$
f(x)=a^x
$$

on:

$$
a>0,\qquad a\neq1
$$

La base $a$ determina el comportament de la funció.

### Creixement exponencial

Si:

$$
a>1
$$

la funció és creixent.

Per exemple:

$$
f(x)=2^x
$$

:::function-graph{expression="2^x" restriction="-5<=x<=5"}
:::

Com més gran és $x$, més ràpidament augmenta el valor de la funció.

### Decreixement exponencial

Si:

$$
0<a<1
$$

la funció és decreixent.

Per exemple:

$$
f(x)=\left(\frac12\right)^x
$$

:::function-graph{expression="(1/2)^x" restriction="-5<=x<=5"}
:::

## Propietats de les potències

Les funcions exponencials utilitzen les propietats de les potències:

$$
a^x\cdot a^y=a^{x+y}
$$

$$
\frac{a^x}{a^y}=a^{x-y}
$$

$$
(a^x)^y=a^{xy}
$$

$$
a^{-x}=\frac{1}{a^x}
$$

Aquestes propietats són especialment útils per resoldre equacions exponencials.

## Funció logarítmica

La funció logarítmica és la inversa de la funció exponencial.

S'escriu:

$$
f(x)=\log_a(x)
$$

on:

$$
a>0,\qquad a\neq1,\qquad x>0
$$

La relació fonamental entre logaritmes i exponencials és:

$$
\log_a(x)=y
\iff
a^y=x
$$

Per exemple:

$$
\log_2(8)=3
$$

perquè:

$$
2^3=8
$$

### Funció logarítmica en base 2

La funció:

$$
f(x)=\log_2(x)
$$

només està definida per:

$$
x>0
$$

:::function-graph{expression="log(x)/log(2)" restriction="0.1<=x<=10"}
:::

## Domini i recorregut

Per a una funció exponencial:

$$
f(x)=a^x
$$

el domini és:

$$
D_f=\mathbb{R}
$$

i el recorregut és:

$$
R_f=(0,\infty)
$$

Una funció exponencial mai no pren valors iguals o menors que zero.

Per a una funció logarítmica:

$$
f(x)=\log_a(x)
$$

el domini és:

$$
D_f=(0,\infty)
$$

i el recorregut és:

$$
R_f=\mathbb{R}
$$

## Relació entre les funcions

Les funcions:

$$
f(x)=a^x
$$

i

$$
g(x)=\log_a(x)
$$

són funcions inverses.

Per això:

$$
\log_a(a^x)=x
$$

i:

$$
a^{\log_a(x)}=x
$$

Geomètricament, les seves gràfiques són simètriques respecte de la recta:

$$
y=x
$$

Podem visualitzar les dues funcions:

:::function-graph{expression="2^x" restriction="-5<=x<=5"}
:::

:::function-graph{expression="log(x)/log(2)" restriction="0.1<=x<=10"}
:::

## Propietats dels logaritmes

Per a $x>0$ i $y>0$:

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

Aquestes propietats permeten transformar expressions complicades en d'altres més senzilles.

## Logaritme natural

El **logaritme natural** és el logaritme en base $e$:

$$
\ln(x)=\log_e(x)
$$

on:

$$
e\approx2.71828
$$

La funció exponencial corresponent és:

$$
e^x
$$

Per tant:

$$
\ln(e^x)=x
$$

i:

$$
e^{\ln(x)}=x
$$

## Canvi de base

Podem calcular un logaritme en qualsevol base utilitzant una altra base:

$$
\log_a(x)=\frac{\log_b(x)}{\log_b(a)}
$$

En particular:

$$
\log_a(x)=\frac{\ln(x)}{\ln(a)}
$$

## Resoldre equacions exponencials

Si podem escriure els dos costats amb la mateixa base:

$$
2^x=8
$$

Com que:

$$
8=2^3
$$

aleshores:

$$
2^x=2^3
$$

i, per tant:

$$
x=3
$$

Quan no podem utilitzar la mateixa base, podem aplicar logaritmes.

Per exemple:

$$
3^x=10
$$

Apliquem $\ln$ als dos costats:

$$
\ln(3^x)=\ln(10)
$$

Utilitzant la propietat de la potència:

$$
x\ln(3)=\ln(10)
$$

Per tant:

$$
x=\frac{\ln(10)}{\ln(3)}
$$

## Resoldre equacions logarítmiques

Considerem:

$$
\log_2(x)=5
$$

Utilitzem la definició de logaritme:

$$
2^5=x
$$

Per tant:

$$
x=32
$$

És important comprovar sempre les **condicions d'existència**. L'argument d'un logaritme ha de ser positiu:

$$
x>0
$$

## Aplicacions

Les funcions exponencials i logarítmiques apareixen en nombrosos problemes reals.

Alguns exemples són:

- creixement de poblacions;
- interès compost;
- creixement i decreixement exponencial;
- radioactivitat;
- escales logarítmiques;
- intensitat del so;
- magnitud dels terratrèmols;
- models de creixement i aprenentatge.

Un model exponencial típic és:

$$
P(t)=P_0e^{kt}
$$

on $P_0$ és el valor inicial i $k$ determina la velocitat de creixement o decreixement.

## Resum

Les idees fonamentals són:

$$
\boxed{f(x)=a^x}
$$

funció exponencial, i

$$
\boxed{f(x)=\log_a(x)}
$$

funció logarítmica.

Són funcions inverses:

$$
\boxed{\log_a(a^x)=x}
$$

$$
\boxed{a^{\log_a(x)}=x}
$$

i els seus dominis són diferents:

$$
a^x:\quad x\in\mathbb{R}
$$

$$
\log_a(x):\quad x>0
$$
