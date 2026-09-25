# Solutions of trigonometric equations

**Trigonometric equations** are equations in which the unknown appears inside a trigonometric function, such as sine, cosine, or tangent.

Unlike an algebraic equation, a trigonometric equation usually has **infinitely many solutions**, because trigonometric functions are periodic.

## 1. Periodicity

Trigonometric functions repeat periodically:

$$
\sin(x+2\pi)=\sin(x)
$$

$$
\cos(x+2\pi)=\cos(x)
$$

$$
\tan(x+\pi)=\tan(x)
$$

Therefore, if we find one solution, we can obtain other solutions by adding the corresponding period.

The general form of the solutions depends on the function being used.

### Sine

If

$$
\sin(x)=a
$$

and $\alpha$ is an angle such that

$$
\sin(\alpha)=a,
$$

the general solutions are

$$
x=\alpha+2k\pi
$$

or

$$
x=\pi-\alpha+2k\pi,
\qquad k\in\mathbb{Z}.
$$

### Cosine

If

$$
\cos(x)=a,
$$

the solutions can be written as

$$
x=\pm\alpha+2k\pi,
\qquad k\in\mathbb{Z},
$$

where $\cos(\alpha)=a$.

### Tangent

If

$$
\tan(x)=a,
$$

the solutions are

$$
x=\alpha+k\pi,
\qquad k\in\mathbb{Z},
$$

where $\tan(\alpha)=a$.

---

## 2. Solving a sine equation

Consider

$$
\sin(x)=\frac{1}{2}.
$$

We know that

$$
\sin\left(\frac{\pi}{6}\right)=\frac{1}{2}.
$$

Sine also takes this value in the second quadrant:

$$
\pi-\frac{\pi}{6}=\frac{5\pi}{6}.
$$

Therefore, the general solutions are

$$
x=\frac{\pi}{6}+2k\pi
$$

or

$$
x=\frac{5\pi}{6}+2k\pi,
\qquad k\in\mathbb{Z}.
$$

If we only look for solutions in the interval $[0,2\pi)$, we obtain

$$
x=\frac{\pi}{6},
\qquad
x=\frac{5\pi}{6}.
$$

---

## 3. Solving a cosine equation

Consider

$$
\cos(x)=-\frac{\sqrt{3}}{2}.
$$

The reference angle is

$$
\frac{\pi}{6},
$$

because

$$
\cos\left(\frac{\pi}{6}\right)=\frac{\sqrt{3}}{2}.
$$

Since cosine is negative in the second and third quadrants:

$$
x=\pi-\frac{\pi}{6}=\frac{5\pi}{6}
$$

and

$$
x=\pi+\frac{\pi}{6}=\frac{7\pi}{6}.
$$

Therefore,

$$
x=\frac{5\pi}{6}+2k\pi
$$

or

$$
x=\frac{7\pi}{6}+2k\pi,
\qquad k\in\mathbb{Z}.
$$

In $[0,2\pi)$:

$$
\boxed{x=\frac{5\pi}{6},\frac{7\pi}{6}}
$$

---

## 4. Solving a tangent equation

Consider

$$
\tan(x)=1.
$$

We know that

$$
\tan\left(\frac{\pi}{4}\right)=1.
$$

Tangent has period $\pi$, so all solutions are

$$
\boxed{x=\frac{\pi}{4}+k\pi},
\qquad k\in\mathbb{Z}.
$$

In the interval $[0,2\pi)$:

$$
x=\frac{\pi}{4}
$$

and

$$
x=\frac{5\pi}{4}.
$$

---

## 5. Equations with a linear expression

Sometimes the unknown does not appear directly as $x$, but inside another expression.

For example:

$$
\sin(2x)=\frac{\sqrt{3}}{2}.
$$

First solve the equation for $2x$.

We know that

$$
2x=\frac{\pi}{3}+2k\pi
$$

or

$$
2x=\frac{2\pi}{3}+2k\pi.
$$

Dividing by $2$:

$$
x=\frac{\pi}{6}+k\pi
$$

or

$$
x=\frac{\pi}{3}+k\pi.
$$

Therefore,

$$
\boxed{
x=\frac{\pi}{6}+k\pi
\quad\text{or}\quad
x=\frac{\pi}{3}+k\pi
}
$$

---

## 6. Equations with restrictions

Many exercises specify an interval for the unknown.

For example:

$$
2\cos(x)=1,
\qquad
0\leq x<2\pi.
$$

Divide by $2$:

$$
\cos(x)=\frac{1}{2}.
$$

In the interval $[0,2\pi)$, cosine equals $\frac12$ at:

$$
x=\frac{\pi}{3}
$$

and

$$
x=\frac{5\pi}{3}.
$$

Therefore:

$$
\boxed{
x\in
\left\{
\frac{\pi}{3},
\frac{5\pi}{3}
\right\}
}
$$

The restriction is important because the equation has infinitely many solutions, but the interval selects only some of them.

---

## 7. Equations that require factoring

Not all trigonometric equations can be reduced directly to a single function.

For example:

$$
\sin^2(x)-\sin(x)=0.
$$

Factor:

$$
\sin(x)(\sin(x)-1)=0.
$$

Using the zero-product property:

$$
\sin(x)=0
$$

or

$$
\sin(x)=1.
$$

For the first equation:

$$
x=k\pi.
$$

For the second:

$$
x=\frac{\pi}{2}+2k\pi.
$$

Therefore:

$$
\boxed{
x=k\pi
\quad\text{or}\quad
x=\frac{\pi}{2}+2k\pi,
\qquad k\in\mathbb{Z}
}
$$

---

## 8. Using trigonometric identities

Trigonometric identities allow us to transform a complicated equation into a simpler one.

One of the fundamental identities is:

$$
\sin^2(x)+\cos^2(x)=1.
$$

Other useful identities include:

$$
1+\tan^2(x)=\sec^2(x)
$$

and

$$
1+\cot^2(x)=\csc^2(x).
$$

For example:

$$
2\sin^2(x)-1=0.
$$

Isolate:

$$
2\sin^2(x)=1
$$

$$
\sin^2(x)=\frac12.
$$

Take the square root:

$$
\sin(x)=\pm\frac{\sqrt2}{2}.
$$

In $[0,2\pi)$, we obtain four solutions:

$$
x=
\frac{\pi}{4},
\frac{3\pi}{4},
\frac{5\pi}{4},
\frac{7\pi}{4}.
$$

---

## 9. General method

To solve a trigonometric equation, it is useful to follow these steps:

1. **Simplify the equation** as much as possible.
2. **Isolate a trigonometric function** whenever possible.
3. **Find the reference angle** using known values or the inverse function.
4. **Determine the quadrants** where the function has the required sign.
5. **Write the general solution** using periodicity.
6. **Apply the given interval**, if there is one.
7. **Check the solutions** in the original equation.

---

## 10. Common mistakes

### Forgetting periodicity

From

$$
\sin(x)=0
$$

we do not obtain only $x=0$.

The general solution is:

$$
x=k\pi,
\qquad k\in\mathbb{Z}.
$$

### Confusing the period

Sine and cosine have period $2\pi$:

$$
T_{\sin}=T_{\cos}=2\pi.
$$

Tangent has period $\pi$:

$$
T_{\tan}=\pi.
$$

### Not considering all quadrants

For example, if

$$
\cos(x)=-\frac12,
$$

it is not enough to find the reference angle. We must also identify the quadrants where cosine is negative.

### Dividing by an expression that may be zero

In an equation such as

$$
\sin(x)\cos(x)=0,
$$

we should not divide directly by $\sin(x)$ or $\cos(x)$, because we could eliminate solutions.

It is preferable to use:

$$
ab=0
\quad\Longrightarrow\quad
a=0\ \text{or}\ b=0.
$$

---

## 11. Solutions in degrees

The same rules can be expressed in degrees.

The periods are:

$$
T_{\sin}=T_{\cos}=360^\circ
$$

and

$$
T_{\tan}=180^\circ.
$$

For example:

$$
\sin(x)=\frac12
$$

has the general solutions:

$$
x=30^\circ+360^\circ k
$$

or

$$
x=150^\circ+360^\circ k,
\qquad k\in\mathbb{Z}.
$$

It is important not to mix degrees and radians within the same exercise.

---

## Summary

The solutions of trigonometric equations depend mainly on the **periodicity** of the functions and the **quadrants** in which they take particular values.

The fundamental forms are:

$$
\sin(x)=a
\quad\Longrightarrow\quad
x=\alpha+2k\pi
\ \text{or}\
x=\pi-\alpha+2k\pi
$$

$$
\cos(x)=a
\quad\Longrightarrow\quad
x=\pm\alpha+2k\pi
$$

$$
\tan(x)=a
\quad\Longrightarrow\quad
x=\alpha+k\pi
$$

where $k\in\mathbb{Z}$ and $\alpha$ is an angle that produces the corresponding value.

When an interval is given, such as $[0,2\pi)$, first obtain the general solution and then select only the solutions that belong to that interval.
