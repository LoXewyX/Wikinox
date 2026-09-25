const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FunctionGraph-DhRerF9Y.js","assets/rolldown-runtime-B0Z9INg1.js","assets/jsxRuntime.module-BcIaG-9p.js","assets/index-C1BT9wAk.js","assets/index-DBwiFk51.css","assets/Card-CSrVt1SD.js","assets/dist-DgzhcLSW.js"])))=>i.map(i=>d[i]);
import{t as e}from"./jsxRuntime.module-BcIaG-9p.js";import{c as t,d as n,f as r}from"./index-C1BT9wAk.js";import{t as i}from"./TopicPage-DZNFNl0A.js";var a=`# Funciones exponenciales y logarítmicas

Las **funciones exponenciales** y **logarítmicas** están estrechamente relacionadas. De hecho, una función logarítmica es la **función inversa** de una función exponencial.

## Función exponencial

Una función exponencial tiene la forma:

$$
f(x)=a^x
$$

donde:

$$
a>0,\\qquad a\\neq1
$$

La base $a$ determina el comportamiento de la función.

### Crecimiento exponencial

Si:

$$
a>1
$$

la función es creciente.

Por ejemplo:

$$
f(x)=2^x
$$

:::function-graph{expression="2^x" restriction="-5<=x<=5"}
:::

Cuanto mayor es $x$, más rápidamente aumenta el valor de la función.

### Decrecimiento exponencial

Si:

$$
0<a<1
$$

la función es decreciente.

Por ejemplo:

$$
f(x)=\\left(\\frac12\\right)^x
$$

:::function-graph{expression="(1/2)^x" restriction="-5<=x<=5"}
:::

## Propiedades de las potencias

Las funciones exponenciales utilizan las propiedades de las potencias:

$$
a^x\\cdot a^y=a^{x+y}
$$

$$
\\frac{a^x}{a^y}=a^{x-y}
$$

$$
(a^x)^y=a^{xy}
$$

$$
a^{-x}=\\frac{1}{a^x}
$$

Estas propiedades son especialmente útiles para resolver ecuaciones exponenciales.

## Función logarítmica

La función logarítmica es la inversa de la función exponencial.

Se escribe:

$$
f(x)=\\log_a(x)
$$

donde:

$$
a>0,\\qquad a\\neq1,\\qquad x>0
$$

La relación fundamental entre logaritmos y exponenciales es:

$$
\\log_a(x)=y
\\iff
a^y=x
$$

Por ejemplo:

$$
\\log_2(8)=3
$$

porque:

$$
2^3=8
$$

### Función logarítmica en base 2

La función:

$$
f(x)=\\log_2(x)
$$

solo está definida para:

$$
x>0
$$

:::function-graph{expression="log(x)/log(2)" restriction="0.1<=x<=10"}
:::

## Dominio y recorrido

Para una función exponencial:

$$
f(x)=a^x
$$

el dominio es:

$$
D_f=\\mathbb{R}
$$

y el recorrido es:

$$
R_f=(0,\\infty)
$$

Una función exponencial nunca toma valores iguales o menores que cero.

Para una función logarítmica:

$$
f(x)=\\log_a(x)
$$

el dominio es:

$$
D_f=(0,\\infty)
$$

y el recorrido es:

$$
R_f=\\mathbb{R}
$$

## Relación entre las funciones

Las funciones:

$$
f(x)=a^x
$$

y

$$
g(x)=\\log_a(x)
$$

son funciones inversas.

Por eso:

$$
\\log_a(a^x)=x
$$

y:

$$
a^{\\log_a(x)}=x
$$

Geométricamente, sus gráficas son simétricas respecto de la recta:

$$
y=x
$$

Podemos visualizar ambas funciones:

:::function-graph{expression="2^x" restriction="-5<=x<=5"}
:::

:::function-graph{expression="log(x)/log(2)" restriction="0.1<=x<=10"}
:::

## Propiedades de los logaritmos

Para $x>0$ e $y>0$:

### Producto

$$
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

### Cociente

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

### Potencia

$$
\\log_a(x^n)=n\\log_a(x)
$$

Estas propiedades permiten transformar expresiones complicadas en otras más sencillas.

## Logaritmo natural

El **logaritmo natural** es el logaritmo en base $e$:

$$
\\ln(x)=\\log_e(x)
$$

donde:

$$
e\\approx2.71828
$$

La función exponencial correspondiente es:

$$
e^x
$$

Por tanto:

$$
\\ln(e^x)=x
$$

y:

$$
e^{\\ln(x)}=x
$$

## Cambio de base

Podemos calcular un logaritmo en cualquier base utilizando otra base:

$$
\\log_a(x)=\\frac{\\log_b(x)}{\\log_b(a)}
$$

En particular:

$$
\\log_a(x)=\\frac{\\ln(x)}{\\ln(a)}
$$

## Resolver ecuaciones exponenciales

Si podemos escribir ambos lados con la misma base:

$$
2^x=8
$$

Como:

$$
8=2^3
$$

entonces:

$$
2^x=2^3
$$

y, por tanto:

$$
x=3
$$

Cuando no podemos utilizar la misma base, podemos aplicar logaritmos.

Por ejemplo:

$$
3^x=10
$$

Aplicamos $\\ln$ a ambos lados:

$$
\\ln(3^x)=\\ln(10)
$$

Utilizando la propiedad de la potencia:

$$
x\\ln(3)=\\ln(10)
$$

Por tanto:

$$
x=\\frac{\\ln(10)}{\\ln(3)}
$$

## Resolver ecuaciones logarítmicas

Consideremos:

$$
\\log_2(x)=5
$$

Utilizamos la definición de logaritmo:

$$
2^5=x
$$

Por tanto:

$$
x=32
$$

Es importante comprobar siempre las **condiciones de existencia**. El argumento de un logaritmo debe ser positivo:

$$
x>0
$$

## Aplicaciones

Las funciones exponenciales y logarítmicas aparecen en numerosos problemas reales.

Algunos ejemplos son:

- crecimiento de poblaciones;
- interés compuesto;
- crecimiento y decrecimiento exponencial;
- radiactividad;
- escalas logarítmicas;
- intensidad del sonido;
- magnitud de terremotos;
- modelos de crecimiento y aprendizaje.

Un modelo exponencial típico es:

$$
P(t)=P_0e^{kt}
$$

donde $P_0$ es el valor inicial y $k$ determina la velocidad de crecimiento o decrecimiento.

## Resumen

Las ideas fundamentales son:

$$
\\boxed{f(x)=a^x}
$$

función exponencial, y

$$
\\boxed{f(x)=\\log_a(x)}
$$

función logarítmica.

Son funciones inversas:

$$
\\boxed{\\log_a(a^x)=x}
$$

$$
\\boxed{a^{\\log_a(x)}=x}
$$

y sus dominios son diferentes:

$$
a^x:\\quad x\\in\\mathbb{R}
$$

$$
\\log_a(x):\\quad x>0
$$
`,o=`# Funcions exponencials i logarítmiques

Les **funcions exponencials** i **logarítmiques** estan estretament relacionades. De fet, una funció logarítmica és la **funció inversa** d'una funció exponencial.

## Funció exponencial

Una funció exponencial té la forma:

$$
f(x)=a^x
$$

on:

$$
a>0,\\qquad a\\neq1
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
f(x)=\\left(\\frac12\\right)^x
$$

:::function-graph{expression="(1/2)^x" restriction="-5<=x<=5"}
:::

## Propietats de les potències

Les funcions exponencials utilitzen les propietats de les potències:

$$
a^x\\cdot a^y=a^{x+y}
$$

$$
\\frac{a^x}{a^y}=a^{x-y}
$$

$$
(a^x)^y=a^{xy}
$$

$$
a^{-x}=\\frac{1}{a^x}
$$

Aquestes propietats són especialment útils per resoldre equacions exponencials.

## Funció logarítmica

La funció logarítmica és la inversa de la funció exponencial.

S'escriu:

$$
f(x)=\\log_a(x)
$$

on:

$$
a>0,\\qquad a\\neq1,\\qquad x>0
$$

La relació fonamental entre logaritmes i exponencials és:

$$
\\log_a(x)=y
\\iff
a^y=x
$$

Per exemple:

$$
\\log_2(8)=3
$$

perquè:

$$
2^3=8
$$

### Funció logarítmica en base 2

La funció:

$$
f(x)=\\log_2(x)
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
D_f=\\mathbb{R}
$$

i el recorregut és:

$$
R_f=(0,\\infty)
$$

Una funció exponencial mai no pren valors iguals o menors que zero.

Per a una funció logarítmica:

$$
f(x)=\\log_a(x)
$$

el domini és:

$$
D_f=(0,\\infty)
$$

i el recorregut és:

$$
R_f=\\mathbb{R}
$$

## Relació entre les funcions

Les funcions:

$$
f(x)=a^x
$$

i

$$
g(x)=\\log_a(x)
$$

són funcions inverses.

Per això:

$$
\\log_a(a^x)=x
$$

i:

$$
a^{\\log_a(x)}=x
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
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

### Quocient

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

### Potència

$$
\\log_a(x^n)=n\\log_a(x)
$$

Aquestes propietats permeten transformar expressions complicades en d'altres més senzilles.

## Logaritme natural

El **logaritme natural** és el logaritme en base $e$:

$$
\\ln(x)=\\log_e(x)
$$

on:

$$
e\\approx2.71828
$$

La funció exponencial corresponent és:

$$
e^x
$$

Per tant:

$$
\\ln(e^x)=x
$$

i:

$$
e^{\\ln(x)}=x
$$

## Canvi de base

Podem calcular un logaritme en qualsevol base utilitzant una altra base:

$$
\\log_a(x)=\\frac{\\log_b(x)}{\\log_b(a)}
$$

En particular:

$$
\\log_a(x)=\\frac{\\ln(x)}{\\ln(a)}
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

Apliquem $\\ln$ als dos costats:

$$
\\ln(3^x)=\\ln(10)
$$

Utilitzant la propietat de la potència:

$$
x\\ln(3)=\\ln(10)
$$

Per tant:

$$
x=\\frac{\\ln(10)}{\\ln(3)}
$$

## Resoldre equacions logarítmiques

Considerem:

$$
\\log_2(x)=5
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
\\boxed{f(x)=a^x}
$$

funció exponencial, i

$$
\\boxed{f(x)=\\log_a(x)}
$$

funció logarítmica.

Són funcions inverses:

$$
\\boxed{\\log_a(a^x)=x}
$$

$$
\\boxed{a^{\\log_a(x)}=x}
$$

i els seus dominis són diferents:

$$
a^x:\\quad x\\in\\mathbb{R}
$$

$$
\\log_a(x):\\quad x>0
$$
`,s=`# Exponential and logarithmic functions

**Exponential functions** and **logarithmic functions** are closely related. In fact, a logarithmic function is the **inverse function** of an exponential function.

## Exponential function

An exponential function has the form:

$$
f(x)=a^x
$$

where:

$$
a>0,\\qquad a\\neq1
$$

The base $a$ determines the behavior of the function.

### Exponential growth

If:

$$
a>1
$$

the function is increasing.

For example:

$$
f(x)=2^x
$$

:::function-graph{expression="2^x" restriction="-5<=x<=5"}
:::

As $x$ increases, the value of the function grows increasingly quickly.

### Exponential decay

If:

$$
0<a<1
$$

the function is decreasing.

For example:

$$
f(x)=\\left(\\frac12\\right)^x
$$

:::function-graph{expression="(1/2)^x" restriction="-5<=x<=5"}
:::

## Properties of powers

Exponential functions use the properties of powers:

$$
a^x\\cdot a^y=a^{x+y}
$$

$$
\\frac{a^x}{a^y}=a^{x-y}
$$

$$
(a^x)^y=a^{xy}
$$

$$
a^{-x}=\\frac{1}{a^x}
$$

These properties are especially useful when solving exponential equations.

## Logarithmic function

A logarithmic function is the inverse of an exponential function.

It is written as:

$$
f(x)=\\log_a(x)
$$

where:

$$
a>0,\\qquad a\\neq1,\\qquad x>0
$$

The fundamental relationship between logarithms and exponentials is:

$$
\\log_a(x)=y
\\iff
a^y=x
$$

For example:

$$
\\log_2(8)=3
$$

because:

$$
2^3=8
$$

### Logarithmic function with base 2

The function:

$$
f(x)=\\log_2(x)
$$

is only defined for:

$$
x>0
$$

:::function-graph{expression="log(x)/log(2)" restriction="0.1<=x<=10"}
:::

## Domain and range

For an exponential function:

$$
f(x)=a^x
$$

the domain is:

$$
D_f=\\mathbb{R}
$$

and the range is:

$$
R_f=(0,\\infty)
$$

An exponential function never takes values equal to or less than zero.

For a logarithmic function:

$$
f(x)=\\log_a(x)
$$

the domain is:

$$
D_f=(0,\\infty)
$$

and the range is:

$$
R_f=\\mathbb{R}
$$

## Relationship between the functions

The functions:

$$
f(x)=a^x
$$

and

$$
g(x)=\\log_a(x)
$$

are inverse functions.

Therefore:

$$
\\log_a(a^x)=x
$$

and:

$$
a^{\\log_a(x)}=x
$$

Geometrically, their graphs are symmetric about the line:

$$
y=x
$$

We can visualize both functions:

:::function-graph{expression="2^x" restriction="-5<=x<=5"}
:::

:::function-graph{expression="log(x)/log(2)" restriction="0.1<=x<=10"}
:::

## Properties of logarithms

For $x>0$ and $y>0$:

### Product

$$
\\log_a(xy)=\\log_a(x)+\\log_a(y)
$$

### Quotient

$$
\\log_a\\left(\\frac{x}{y}\\right)
=
\\log_a(x)-\\log_a(y)
$$

### Power

$$
\\log_a(x^n)=n\\log_a(x)
$$

These properties allow complicated expressions to be transformed into simpler ones.

## Natural logarithm

The **natural logarithm** is the logarithm with base $e$:

$$
\\ln(x)=\\log_e(x)
$$

where:

$$
e\\approx2.71828
$$

The corresponding exponential function is:

$$
e^x
$$

Therefore:

$$
\\ln(e^x)=x
$$

and:

$$
e^{\\ln(x)}=x
$$

## Change of base

We can calculate a logarithm in any base by using another base:

$$
\\log_a(x)=\\frac{\\log_b(x)}{\\log_b(a)}
$$

In particular:

$$
\\log_a(x)=\\frac{\\ln(x)}{\\ln(a)}
$$

## Solving exponential equations

If we can write both sides using the same base:

$$
2^x=8
$$

Since:

$$
8=2^3
$$

we obtain:

$$
2^x=2^3
$$

and therefore:

$$
x=3
$$

When we cannot use the same base, we can apply logarithms.

For example:

$$
3^x=10
$$

Apply $\\ln$ to both sides:

$$
\\ln(3^x)=\\ln(10)
$$

Using the power property:

$$
x\\ln(3)=\\ln(10)
$$

Therefore:

$$
x=\\frac{\\ln(10)}{\\ln(3)}
$$

## Solving logarithmic equations

Consider:

$$
\\log_2(x)=5
$$

Using the definition of a logarithm:

$$
2^5=x
$$

Therefore:

$$
x=32
$$

It is important to always check the **domain conditions**. The argument of a logarithm must be positive:

$$
x>0
$$

## Applications

Exponential and logarithmic functions appear in many real-world problems.

Some examples include:

- population growth;
- compound interest;
- exponential growth and decay;
- radioactive decay;
- logarithmic scales;
- sound intensity;
- earthquake magnitude;
- growth and learning models.

A typical exponential model is:

$$
P(t)=P_0e^{kt}
$$

where $P_0$ is the initial value and $k$ determines the growth or decay rate.

## Summary

The fundamental ideas are:

$$
\\boxed{f(x)=a^x}
$$

exponential function, and

$$
\\boxed{f(x)=\\log_a(x)}
$$

logarithmic function.

They are inverse functions:

$$
\\boxed{\\log_a(a^x)=x}
$$

$$
\\boxed{a^{\\log_a(x)}=x}
$$

and their domains are different:

$$
a^x:\\quad x\\in\\mathbb{R}
$$

$$
\\log_a(x):\\quad x>0
$$
`;function c(){let{locale:c}=t();return e(i,{id:`exponential-logarithmic-functions`,content:{es:a,ca:o,en:s}[c],directiveComponents:{"function-graph":n(()=>r(()=>import(`./FunctionGraph-DhRerF9Y.js`),__vite__mapDeps([0,1,2,3,4,5,6])))}})}export{c as default};