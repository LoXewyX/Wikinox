# Equacions logarítmiques (Ampliació)

Les **equacions logarítmiques** són equacions en què la incògnita apareix dins de l'argument d'un o diversos logaritmes.

En aquest tema estudiarem tècniques per resoldre equacions logarítmiques més complexes, prestant especial atenció al **domini**, les propietats dels logaritmes i la comprovació de les solucions.

## 1. Domini d'una equació logarítmica

Abans d'aplicar qualsevol propietat dels logaritmes, hem de determinar per a quins valors de \(x\) estan definits tots els logaritmes de l'equació.

Per a un logaritme:

$$
\log_a(f(x))
$$

s'ha de complir:

$$
a > 0,\qquad a \neq 1,\qquad f(x) > 0.
$$

Per tant, una solució d'una equació logarítmica ha de pertànyer necessàriament al domini de l'equació.

### Exemple

Considerem:

$$
\log(x-2)=2.
$$

La condició d'existència és:

$$
x-2>0
$$

i, per tant:

$$
x>2.
$$

Resolem l'equació:

$$
x-2=10^2
$$

$$
x=102.
$$

Com que \(102>2\), la solució és vàlida.

## 2. Propietats dels logaritmes

Les propietats fonamentals permeten transformar una equació logarítmica.

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

Aquestes propietats només es poden utilitzar quan els arguments involucrats són positius.

## 3. Equacions amb diversos logaritmes

Quan una equació conté diversos logaritmes amb la mateixa base, podem utilitzar les propietats anteriors per combinar-los.

### Exemple

Resolem:

$$
\log(x)+\log(x-3)=1.
$$

Primer imposem les condicions:

$$
x>0
$$

i

$$
x-3>0.
$$

Per tant:

$$
x>3.
$$

Apliquem la propietat del producte:

$$
\log(x(x-3))=1.
$$

Passem a forma exponencial:

$$
x(x-3)=10.
$$

Desenvolupem:

$$
x^2-3x-10=0.
$$

Factoritzem:

$$
(x-5)(x+2)=0.
$$

Obtenim:

$$
x=5
$$

o

$$
x=-2.
$$

Però el domini exigeix \(x>3\), de manera que:

$$
\boxed{x=5}
$$

## 4. Equacions amb logaritmes als dos membres

Considerem:

$$
\log(x+1)=\log(3x-5).
$$

Si tots dos logaritmes tenen la mateixa base, podem igualar els seus arguments:

$$
x+1=3x-5.
$$

Per tant:

$$
6=2x
$$

i:

$$
x=3.
$$

Comprovem el domini:

$$
x+1>0
$$

$$
3x-5>0.
$$

Per a \(x=3\), totes dues condicions es compleixen.

Per tant:

$$
\boxed{x=3}
$$

## 5. Canvi de base

Quan una equació conté logaritmes amb bases diferents, pot ser útil utilitzar la fórmula de canvi de base:

$$
\log_a(x)=\frac{\log_b(x)}{\log_b(a)}.
$$

Per exemple:

$$
\log_2(x)=\log_3(x+1)
$$

es pot transformar mitjançant:

$$
\frac{\ln(x)}{\ln(2)}
=
\frac{\ln(x+1)}{\ln(3)}.
$$

En general, aquestes equacions poden requerir tècniques algebraiques addicionals o mètodes numèrics.

## 6. Equacions logarítmiques que requereixen substitució

Algunes equacions es poden simplificar fent una substitució.

Per exemple:

$$
(\log x)^2-5\log x+6=0.
$$

Definim:

$$
t=\log x.
$$

L'equació es converteix en:

$$
t^2-5t+6=0.
$$

Factoritzem:

$$
(t-2)(t-3)=0.
$$

Per tant:

$$
t=2
\qquad\text{o}\qquad
t=3.
$$

Tornem a la variable original:

$$
\log x=2
$$

o

$$
\log x=3.
$$

Així:

$$
x=100
\qquad\text{o}\qquad
x=1000.
$$

Les dues solucions compleixen \(x>0\).

## 7. Solucions estranyes

Una transformació algebraica pot introduir valors que no pertanyen al domini original.

Per aquest motiu, després de resoldre una equació logarítmica hem de comprovar sempre les solucions en l'equació original.

### Esquema general

1. Determinar el domini.
2. Simplificar utilitzant les propietats dels logaritmes.
3. Resoldre l'equació resultant.
4. Comprovar les solucions obtingudes.
5. Conservar únicament les solucions que pertanyen al domini.

## 8. Estratègia de resolució

Davant d'una equació logarítmica complexa, podem seguir aquest procediment:

$$
\boxed{
\text{Domini}
\rightarrow
\text{Propietats}
\rightarrow
\text{Resolució}
\rightarrow
\text{Comprovació}
}
$$

El pas més important és no oblidar les **condicions d'existència dels logaritmes**.

## Resum

Una equació logarítmica avançada pot requerir:

- determinar acuradament el domini;
- combinar logaritmes mitjançant les seves propietats;
- convertir equacions logarítmiques en equacions algebraiques;
- utilitzar substitucions;
- aplicar el canvi de base;
- comprovar les solucions en l'equació original.

La comprovació final és fonamental perquè no totes les solucions de l'equació transformada han de ser necessàriament solucions de l'equació original.
