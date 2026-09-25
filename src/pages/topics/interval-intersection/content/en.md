# Interval intersection

**Interval intersection** allows us to find the numbers that belong to two or more intervals simultaneously.

It is a fundamental tool for working with inequalities, domains, systems of inequalities, and solution sets.

## 1. What is an interval?

An interval represents a set of real numbers between specified endpoints.

For example:

$$
[2,5]
$$

represents all real numbers $x$ satisfying:

$$
2\leq x\leq5
$$

Endpoints can be included or excluded.

### Closed interval

$$
[a,b]
$$

means:

$$
a\leq x\leq b
$$

Both endpoints are included.

### Open interval

$$
(a,b)
$$

means:

$$
a<x<b
$$

Both endpoints are excluded.

### Half-open interval

$$
[a,b)
$$

means:

$$
a\leq x<b
$$

The endpoint $a$ is included and $b$ is excluded.

Similarly:

$$
(a,b]
$$

means:

$$
a<x\leq b
$$

## 2. What does intersection mean?

The intersection of two sets contains the elements that belong to **both sets at the same time**.

It is represented by:

$$
A\cap B
$$

For example:

$$
A=[1,6]
$$

and:

$$
B=[4,9]
$$

The numbers that belong to both intervals are:

$$
[4,6]
$$

Therefore:

$$
\boxed{[1,6]\cap[4,9]=[4,6]}
$$

## 3. Interpretation on the real number line

The intersection can be visualized as the region where two intervals overlap.

For:

$$
A=[1,6]
$$

and:

$$
B=[4,9]
$$

the common region is:

$$
[4,6]
$$

The intersection begins at the greater left endpoint and ends at the smaller right endpoint.

In general:

$$
\boxed{\text{left endpoint}=\max(a,c)}
$$

$$
\boxed{\text{right endpoint}=\min(b,d)}
$$

for:

$$
[a,b]\cap[c,d]
$$

provided that the intervals overlap.

## 4. Intersection of closed intervals

Consider:

$$
A=[2,8]
$$

and:

$$
B=[5,10]
$$

The greater left endpoint is:

$$
\max(2,5)=5
$$

The smaller right endpoint is:

$$
\min(8,10)=8
$$

Therefore:

$$
\boxed{A\cap B=[5,8]}
$$

## 5. Intersection of open intervals

Consider:

$$
A=(2,8)
$$

and:

$$
B=(5,10)
$$

The endpoints of the intersection are $5$ and $8$.

Since both intervals exclude those endpoints:

$$
\boxed{A\cap B=(5,8)}
$$

## 6. Intersection with different endpoint types

Consider:

$$
A=[2,8)
$$

and:

$$
B=(5,10]
$$

The result is:

$$
(5,8)
$$

because:

- $5$ is excluded by $B$.
- $8$ is excluded by $A$.

Therefore:

$$
\boxed{[2,8)\cap(5,10]=(5,8)}
$$

## 7. How to determine whether an endpoint is included

For an endpoint to belong to the intersection, it must belong to **every interval** being intersected.

For example:

$$
[2,7]\cap(5,10]
$$

The endpoint $5$ does not belong to the second interval:

$$
5\notin(5,10]
$$

Therefore, it does not belong to the intersection.

The endpoint $7$ belongs to both:

$$
7\in[2,7]
$$

and:

$$
7\in(5,10]
$$

Therefore:

$$
\boxed{[2,7]\cap(5,10]=(5,7]}
$$

Fundamental rule:

> An endpoint is included in an intersection only if all relevant intervals include it.

## 8. Non-overlapping intervals

Consider:

$$
A=[1,3]
$$

and:

$$
B=[5,8]
$$

There is no real number belonging to both intervals.

Therefore:

$$
\boxed{A\cap B=\varnothing}
$$

The symbol $\varnothing$ represents the empty set.

## 9. Intervals that only touch

Consider:

$$
A=[1,4]
$$

and:

$$
B=(4,8]
$$

The first interval contains $4$:

$$
4\in[1,4]
$$

but the second does not:

$$
4\notin(4,8]
$$

Therefore:

$$
\boxed{[1,4]\cap(4,8]=\varnothing}
$$

However:

$$
[1,4]\cap[4,8]=\{4\}
$$

In this case, the intersection contains only the number $4$.

## 10. One interval contained in another

If one interval is completely contained within another, their intersection is the smaller interval, taking its endpoints into account.

For example:

$$
A=[1,10]
$$

and:

$$
B=[3,7]
$$

Since:

$$
B\subseteq A
$$

we have:

$$
\boxed{A\cap B=[3,7]}
$$

## 11. Intersection of infinite intervals

Intervals can also extend toward infinity.

For example:

$$
A=[2,\infty)
$$

and:

$$
B=(-\infty,7]
$$

The common numbers satisfy:

$$
2\leq x\leq7
$$

Therefore:

$$
\boxed{A\cap B=[2,7]}
$$

## 12. Intersection with $+\infty$

Consider:

$$
A=(3,\infty)
$$

and:

$$
B=[5,\infty)
$$

The second interval is contained in the first:

$$
B\subset A
$$

Therefore:

$$
\boxed{A\cap B=[5,\infty)}
$$

Infinity is never included with a square bracket.

We always write:

$$
(a,\infty)
$$

or:

$$
[a,\infty)
$$

## 13. Intersection with $-\infty$

For example:

$$
A=(-\infty,5]
$$

and:

$$
B=(-\infty,2)
$$

The more restrictive interval is:

$$
(-\infty,2)
$$

Therefore:

$$
\boxed{A\cap B=(-\infty,2)}
$$

## 14. Intersection of three intervals

Intersection can be applied to more than two intervals.

For example:

$$
A=[1,9]
$$

$$
B=[3,8]
$$

$$
C=[5,12]
$$

First:

$$
A\cap B=[3,8]
$$

Then:

$$
[3,8]\cap[5,12]=[5,8]
$$

Therefore:

$$
\boxed{A\cap B\cap C=[5,8]}
$$

## 15. General rule for several intervals

For several intervals, the left endpoint of the intersection is determined by the greatest of all left endpoints, and the right endpoint by the smallest of all right endpoints.

For:

$$
I_1,I_2,\ldots,I_n
$$

with endpoints:

$$
[a_1,b_1],\ [a_2,b_2],\ldots,[a_n,b_n]
$$

the candidate endpoints are:

$$
\max(a_1,a_2,\ldots,a_n)
$$

and:

$$
\min(b_1,b_2,\ldots,b_n)
$$

If:

$$
\max(a_1,\ldots,a_n)>\min(b_1,\ldots,b_n)
$$

the intersection is empty.

If the two values are equal, the intersection may consist of that single point, but only if every interval contains that point.

## 16. Intersection and inequalities

Intersection appears constantly when solving systems of inequalities.

For example:

$$
x\geq2
$$

and:

$$
x<7
$$

The solutions of the first inequality are:

$$
[2,\infty)
$$

The solutions of the second are:

$$
(-\infty,7)
$$

Therefore:

$$
[2,\infty)\cap(-\infty,7)=[2,7)
$$

The solution of the system is:

$$
\boxed{x\in[2,7)}
$$

## 17. Systems of inequalities

Consider:

$$
\begin{cases}
x>1\\
x\leq5
\end{cases}
$$

Each inequality defines an interval:

$$
(1,\infty)
$$

and:

$$
(-\infty,5]
$$

Their intersection is:

$$
\boxed{(1,5]}
$$

Therefore:

$$
\boxed{1<x\leq5}
$$

## 18. Intersection of solution sets

When a problem contains several simultaneous conditions, we use intersection.

For example:

$$
x\geq-2
$$

$$
x<4
$$

$$
x\neq1
$$

The first two conditions produce:

$$
[-2,4)
$$

The third condition removes $1$:

$$
[-2,1)\cup(1,4)
$$

Therefore:

$$
\boxed{x\in[-2,1)\cup(1,4)}
$$

## 19. Difference between intersection and union

It is important to distinguish:

$$
\cap
$$

from:

$$
\cup
$$

The **intersection** represents common elements:

$$
A\cap B
$$

The **union** represents elements belonging to $A$, $B$, or both:

$$
A\cup B
$$

For example:

$$
A=[1,5]
$$

$$
B=[4,8]
$$

Then:

$$
A\cap B=[4,5]
$$

while:

$$
A\cup B=[1,8]
$$

## 20. Quick method

To intersect two intervals:

1. Find the greater left endpoint.
2. Find the smaller right endpoint.
3. Check whether the intervals overlap.
4. Determine whether each endpoint is included.
5. Write the resulting interval.

### Example

$$
A=(-2,7]
$$

$$
B=[3,10)
$$

Left endpoint:

$$
\max(-2,3)=3
$$

Right endpoint:

$$
\min(7,10)=7
$$

The number $3$ is included in $B$ but not in $A$.

The number $7$ is included in both.

Therefore:

$$
\boxed{A\cap B=(3,7]}
$$

## 21. Procedure for systems of inequalities

When we have several inequalities:

1. Solve each inequality separately.
2. Convert each solution set into an interval.
3. Intersect all intervals.
4. Check the endpoints.
5. Write the final solution.

### Complete example

Solve:

$$
\begin{cases}
2x-4\geq0\\
3x+6<18
\end{cases}
$$

First inequality:

$$
2x\geq4
$$

$$
x\geq2
$$

Therefore:

$$
x\in[2,\infty)
$$

Second inequality:

$$
3x<12
$$

$$
x<4
$$

Therefore:

$$
x\in(-\infty,4)
$$

Intersect:

$$
[2,\infty)\cap(-\infty,4)
$$

and obtain:

$$
\boxed{x\in[2,4)}
$$

## 22. Intersection with equal endpoints

Equal endpoints require special attention.

For example:

$$
[1,5)\cap[5,9]
$$

The first interval does not contain $5$:

$$
5\notin[1,5)
$$

Therefore:

$$
\boxed{[1,5)\cap[5,9]=\varnothing}
$$

However:

$$
[1,5]\cap[5,9]=\{5\}
$$

## 23. Properties of intersection

### Commutative

$$
A\cap B=B\cap A
$$

The order does not matter.

### Associative

$$
(A\cap B)\cap C=A\cap(B\cap C)
$$

The intervals can be grouped in different ways.

### Idempotent

$$
A\cap A=A
$$

Intersecting a set with itself does not change it.

### Empty set

$$
A\cap\varnothing=\varnothing
$$

The empty set has no elements in common with any set.

## 24. Intersection and subsets

If:

$$
A\subseteq B
$$

then:

$$
A\cap B=A
$$

For example:

$$
[3,5]\subseteq[1,10]
$$

therefore:

$$
[3,5]\cap[1,10]=[3,5]
$$

## 25. Common mistakes

### Confusing intersection with union

For simultaneous conditions, use:

$$
\cap
$$

not:

$$
\cup
$$

### Choosing the wrong left endpoint

For an intersection, choose the **greatest** left endpoint.

### Choosing the wrong right endpoint

Choose the **smallest** right endpoint.

### Ignoring parentheses and brackets

Endpoints can be included in one interval and excluded in another.

### Including an endpoint that one interval excludes

In an intersection, an endpoint is included only if every relevant interval contains it.

### Including infinity

Never write:

$$
[a,\infty]
$$

Write:

$$
[a,\infty)
$$

## 26. Summary

| Situation               | Result                             |
| ----------------------- | ---------------------------------- |
| Intersection            | Common elements                    |
| Symbol                  | $\cap$                             |
| Left endpoint           | Greatest left endpoint             |
| Right endpoint          | Smallest right endpoint            |
| No overlap              | $\varnothing$                      |
| Simultaneous conditions | Intersection                       |
| Alternative conditions  | Union                              |
| Included endpoint       | Must be included in every interval |
| Infinity                | Always uses parentheses            |

For two intervals:

$$
[a,b]\cap[c,d]
$$

the common interval is obtained by taking:

$$
\max(a,c)
$$

as the left endpoint and:

$$
\min(b,d)
$$

as the right endpoint, provided that the intervals overlap.

## 27. Fundamental idea

Intersection represents what **all conditions have in common**.

If:

$$
x\in A
$$

and:

$$
x\in B
$$

then:

$$
x\in A\cap B
$$

Therefore, when solving several inequalities that must hold simultaneously, we find the intersection of their solution sets:

$$
\boxed{\text{joint solution}=\text{intersection of the solutions}}
$$
