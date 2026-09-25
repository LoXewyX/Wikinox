# Ecuaciones logarítmicas (Ampliación)

Las **ecuaciones logarítmicas** son ecuaciones en las que la incógnita aparece dentro del argumento de uno o varios logaritmos.

En este tema estudiaremos técnicas para resolver ecuaciones logarítmicas más complejas, prestando especial atención al **dominio**, las propiedades de los logaritmos y la comprobación de las soluciones.

## 1. Dominio de una ecuación logarítmica

Antes de aplicar cualquier propiedad de los logaritmos, debemos determinar para qué valores de \(x\) están definidos todos los logaritmos de la ecuación.

Para un logaritmo:

$$
\log_a(f(x))
$$

debe cumplirse:

$$
a > 0,\qquad a \neq 1,\qquad f(x) > 0.
$$

Por tanto, una solución de una ecuación logarítmica debe pertenecer necesariamente al dominio de la ecuación.

### Ejemplo

Consideremos:

$$
\log(x-2)=2.
$$

La condición de existencia es:

$$
x-2>0
$$

y, por tanto:

$$
x>2.
$$

Resolviendo la ecuación:

$$
x-2=10^2
$$

$$
x=102.
$$

Como \(102>2\), la solución es válida.

## 2. Propiedades de los logaritmos

Las propiedades fundamentales permiten transformar una ecuación logarítmica.

### Producto

$$
\log_a(xy)=\log_a(x)+\log_a(y)
$$

### Cociente

$$
\log_a\left(\frac{x}{y}\right)
=
\log_a(x)-\log_a(y)
$$

### Potencia

$$
\log_a(x^n)=n\log_a(x)
$$

Estas propiedades solamente pueden utilizarse cuando los argumentos involucrados son positivos.

## 3. Ecuaciones con varios logaritmos

Cuando una ecuación contiene varios logaritmos con la misma base, podemos utilizar las propiedades anteriores para combinarlos.

### Ejemplo

Resolvamos:

$$
\log(x)+\log(x-3)=1.
$$

Primero imponemos las condiciones:

$$
x>0
$$

y

$$
x-3>0.
$$

Por tanto:

$$
x>3.
$$

Aplicamos la propiedad del producto:

$$
\log(x(x-3))=1.
$$

Pasamos a forma exponencial:

$$
x(x-3)=10.
$$

Desarrollamos:

$$
x^2-3x-10=0.
$$

Factorizamos:

$$
(x-5)(x+2)=0.
$$

Obtenemos:

$$
x=5
$$

o

$$
x=-2.
$$

Pero el dominio exige \(x>3\), por lo que:

$$
\boxed{x=5}
$$

## 4. Ecuaciones con logaritmos en ambos miembros

Consideremos:

$$
\log(x+1)=\log(3x-5).
$$

Si ambos logaritmos tienen la misma base, podemos igualar sus argumentos:

$$
x+1=3x-5.
$$

Por tanto:

$$
6=2x
$$

y:

$$
x=3.
$$

Comprobamos el dominio:

$$
x+1>0
$$

$$
3x-5>0.
$$

Para \(x=3\), ambas condiciones se cumplen.

Por tanto:

$$
\boxed{x=3}
$$

## 5. Cambio de base

Cuando una ecuación contiene logaritmos con bases diferentes, puede ser útil utilizar la fórmula de cambio de base:

$$
\log_a(x)=\frac{\log_b(x)}{\log_b(a)}.
$$

Por ejemplo:

$$
\log_2(x)=\log_3(x+1)
$$

puede transformarse mediante:

$$
\frac{\ln(x)}{\ln(2)}
=
\frac{\ln(x+1)}{\ln(3)}.
$$

En general, estas ecuaciones pueden requerir técnicas algebraicas adicionales o métodos numéricos.

## 6. Ecuaciones logarítmicas que requieren sustitución

Algunas ecuaciones pueden simplificarse realizando una sustitución.

Por ejemplo:

$$
(\log x)^2-5\log x+6=0.
$$

Definimos:

$$
t=\log x.
$$

La ecuación se convierte en:

$$
t^2-5t+6=0.
$$

Factorizamos:

$$
(t-2)(t-3)=0.
$$

Por tanto:

$$
t=2
\qquad\text{o}\qquad
t=3.
$$

Volvemos a la variable original:

$$
\log x=2
$$

o

$$
\log x=3.
$$

Así:

$$
x=100
\qquad\text{o}\qquad
x=1000.
$$

Las dos soluciones cumplen \(x>0\).

## 7. Soluciones extrañas

Una transformación algebraica puede introducir valores que no pertenecen al dominio original.

Por este motivo, después de resolver una ecuación logarítmica debemos comprobar siempre las soluciones en la ecuación original.

### Esquema general

1. Determinar el dominio.
2. Simplificar utilizando las propiedades de los logaritmos.
3. Resolver la ecuación resultante.
4. Comprobar las soluciones obtenidas.
5. Conservar únicamente las soluciones pertenecientes al dominio.

## 8. Estrategia de resolución

Ante una ecuación logarítmica compleja, podemos seguir este procedimiento:

$$
\boxed{
\text{Dominio}
\rightarrow
\text{Propiedades}
\rightarrow
\text{Resolución}
\rightarrow
\text{Comprobación}
}
$$

El paso más importante es no olvidar las **condiciones de existencia de los logaritmos**.

## Resumen

Una ecuación logarítmica avanzada puede requerir:

- determinar cuidadosamente el dominio;
- combinar logaritmos mediante sus propiedades;
- convertir ecuaciones logarítmicas en ecuaciones algebraicas;
- utilizar sustituciones;
- aplicar el cambio de base;
- comprobar las soluciones en la ecuación original.

La comprobación final es fundamental porque no todas las soluciones de la ecuación transformada tienen por qué ser soluciones de la ecuación original.
