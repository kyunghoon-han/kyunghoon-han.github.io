---
layout : post
title : "Adjoint methods for finding a set of periodic orbits of a choatic DEs"
subtitle : "A theoretical consideration"
categories : mathematics
tags : analysis chaos
comments : false
usemathjax: true
use_math: true
---

Say we are interested in solving an equation of the form

$$
\dot{\mathbf{x}} = \hat{\mathbf{N}}(\mathbf{x}(t);\mathbf{p})
$$

with an initial condition $$\mathbf{x}(0) = \mathbf{x}_0$$ where $$\hat{\mathbf{N}}$$ is some operator, $$\mathbf{p}$$ is an $$\ell$$-tuple of parameters for some $$\ell\in\mathbb{N}$$ and $$t$$ is the implicit scalar parameter of the system.

We'll use $$\mathcal{X}$$ to denote the domain, i.e. where $$\mathbf{x}$$ lies, and $$\mathcal{P}$$ to represent the set of all $$\mathbf{p}$$ candidates.

If one's required to find a specific parameter $$\mathbf{p}$$ that gives a set of *well-behaving* solutions given that the system above yields a chaotic behaviour, safestest be s/he can bet on is to find a $$\mathbf{p}$$ that yields a set of *periodic-solutions* in $$\mathcal{X}$$.

This short article will describe what is called an **adjoint method** that allows one to reformulate the above-mentioned initial value problem (IVP) to somewhat better-behaving, but equivalent (in a sense) problem we'll call as an **adjoint equation** or an **adjoint problem**.

# Introduction to the adjoint systems
Given a pair $$(\mathbf{x},\mathbf{p})$$ satisfying $$\dot{\mathbf{x}}=\hat{\mathbf{N}}(\mathbf{x};\mathbf{p})$$, its **observable** or a **cost function** can be defined as the following. 
> **Definition 1 (Cost function)**
>  A positive convex function 
>
>  $$C(t):=C(\mathbf{x}(t);\mathbf{p}): \mathcal{X}\times\mathcal{P}\rightarrow \mathbb{R}^+$$
>
>  satisfying the triangle inequality over the elements in $$\mathcal{X}$$ is a **cost function**.
This definition is not very useful by itself.
However, if the cost is defined properly for the problem, one can examine how the cost function varies as the parameters change in a meaningful manner.

If one wishes to use what is called the *tangent method*, one can examine the sensitivity of the cost function, i.e. derivative of the average cost function with respect to the parameters. 
This topic in itself is very interesting, but as this note is on adjoint method, any remark on this matter will not be discussed in detail here.

> **Definition 2 (Lagrangian)**
> Given some vector $$\mathbf{\lambda}(t) \in \mathcal{X}$$, called the **adjoint variables**, one can define the **Lagrangian** of the system as
>
> $$\mathcal{L} = \frac{1}{T}\int_0^T C(t) + \mathbf{\lambda}^\intercal \cdot \left[ \dot{\mathbf{x}} - \hat{\mathbf{N}}(t) \right]dt$$

The integral from the definition can be re-written as:

$$\begin{eqnarray} 
\frac{d\mathcal{L}}{d\mathbf{p}} &=& \frac{1}{T}\int_0^T \left[\mathop{\underset{\mmlToken{mo}{⎵}}{\left( \frac{\partial C(t)}{\partial \mathbf{x}} -\dot{\mathbf{\lambda}}^\intercal(t) - \mathbf{\lambda}^\intercal(t)\cdot\frac{\partial \hat{\mathbf{N}(t)}}{\partial \mathbf{x}}  \right)}}\limits_{\text{@}}\cdot \frac{\partial \mathbf{x}}{\partial \mathbf{p}}\right. \nonumber \\
& &\left.- \mathbf{\lambda}^\intercal(t)\cdot \frac{\partial \hat{\mathbf{N}}(t)}{\partial \mathbf{p}} + \frac{\partial C}{\partial \mathbf{p}} \right]dt \nonumber\\
& & +\frac{1}{T}\mathop{\underset{\mmlToken{mo}{⎵}}{\left[\mathbf{\lambda}^\intercal\cdot\frac{\partial\mathbf{x}(t)}{\partial \mathbf{p}}\right]_0^T }}\limits_{\text{@@}}\nonumber
\end{eqnarray}$$

If the adjoints are chosen so that @ and @@ of the above equation to be zero.
Asserting the condition @@=0 gives 

$$\begin{eqnarray}
0 &=& \mathbf{\lambda}^\intercal(T)\cdot \frac{\partial \mathbf{x}(T)}{\partial \mathbf{p}} - \mathbf{\lambda}^\intercal(0)\cdot \frac{\partial \mathbf{x}(0)}{\partial \mathbf{p}} & & \nonumber \\
&=& \mathbf{\lambda}(T)\cdot \frac{\partial \mathbf{x}(T)}{\partial \mathbf{p}}& \text{by the initial condition}& \nonumber\\
\implies & & \mathbf{\lambda}(T) = 0 & & \nonumber
\end{eqnarray}$$

and @=0 gives 

$$\begin{eqnarray}
\dot{\mathbf{\lambda}}(t) &=& -\frac{\hat{\mathbf{N}}(t)}{\partial \mathbf{x}}^\intercal \cdot \mathbf{\lambda}(t) + \frac{\partial C(t)}{\partial \mathbf{x}} \nonumber \\
&:=& \hat{\tilde{\mathbf{N}}}(\mathbf{\lambda}(t))
\end{eqnarray}
$$

Thus, one obtains a linear IVP with homogeneous terminal conditions above. 
The detailed discussion of both the tangent method and the adjoint method can be found from a great work by Davide Lasagna[^1].

# Finding periodic orbits
The method to be introduced here is introduced by the work done by Sajjad Azimi et al.[^2]

Their idea is to first pick a random closed path satisfying the **temporally periodic condition**

$$
\int_t^{t+T} \hat{\tilde{\mathbf{N}}}(\mathbf{x}\left(t^\prime\right);\mathbf{p})dt^\prime - \mathbf{x} = 0
$$

then construct a set of closed paths that, at some limit, satisfies the given equation.

Out of laziness, I reused the variable $$\mathbf{x}$$ in place for $$\mathbf{\lambda}$$. 

Note that if one adopts Poincaré-Lindstedt method to enforce quasi-periodicity on the system by a map 

$$
t \mapsto \omega t \operatorname{mod} T
$$

for some fundamental frequency $$\omega$$, then, the period can be normalised to 1.

This act, essentially changes the IVP to a boundary-value problem (BVP). 

To proceed, we need to define what it means to be a **loop** satisfying the given system and a general **loop** in the given domain.
First, define the loops that satisfy the given system as below. These loops are the targets of the updating process to be introduced.

> **Definition 3 (Loop space)**
>
>$$ \mathcal{P} = \left\{\left.\begin{bmatrix}\mathbf{u}(\mathbf{x},s) \\T\end{bmatrix} \right| \begin{matrix} \mathbf{u}:\Omega \times [0,1)_{\text{periodic}} \rightarrow \mathbb{R}^n, \, T \in \mathbb{R}^+ \\ \mathbf{u} \text{ satisfies BC at } \partial \Omega\text{, periodic in} s \end{matrix}\right\}$$
>

Note that the loop space is defined after applying the Poincar\'{e}-Lindstedt 
The general loop in the given domain is defined as:

> **Definition 4 (Generalised loop space)**
>
>$$ \mathcal{P}_g = \left\{\left.\begin{bmatrix}\mathbf{q}_1(\mathbf{x},s) \\ q_2\end{bmatrix}\right|\begin{matrix} \mathbf{q}_1 :\Omega \times [0,1)_{\text{periodic}}\rightarrow \mathbb{R}^n, q_2\in\mathbb{R} \\ \mathbf{q}_1 \text{ is periodic in } s\end{matrix}\right\}$$
>

Using the definitions above, the *update rule* can be defined as a problem of finding a sequence of loops $$\left\{\mathbb{l}_i\right\}_{i\in I}\subset \mathcal{P}_g$$ for some index set $$I$$ such that

$$
\lim_{i\rightarrow \max{I}} \mathbb{l}_i = \mathbb{l}\in \mathcal{P}.
$$

The space $$\mathcal{P}_g$$ is a Banach space with the inner product defined as 

$$
\left<\begin{bmatrix}\mathbf{q} \\ T\end{bmatrix}, \begin{bmatrix}\mathbf{q}^\prime \\ T^\prime \end{bmatrix}\right> = \int_0^1 \int_\Omega \mathbf{q}\mathbf{q}^\prime d\mathbf{x}dt + TT^\prime
$$

Now, if one defines the **residual** of the system redefined on the normalised period as

$$
\mathbf{r} = \hat{\tilde{\mathbf{N}}}(\mathbf{u}) - \frac{1}{T}\frac{\partial \mathbf{u}}{\partial t},
$$

one can immediately define an appropriate cost function to be minimised as:

$$
J\left(\mathbb{l}\in\mathcal{P}_g\right) = \int_0^1\int_\Omega \mathbf{r}(\mathbb{l})\cdot \mathbf{r}(\mathbb{l}) d\mathbf{x}dt,
$$

as $$\mathbf{r}\cdot\mathbf{r} \rightarrow 0$$ is desired as the loop deforms itself to satisfy the system of interest.

## Deformation of the loops
The equation $$\lim_{i\rightarrow \max{I}} \mathbb{l}_i = \mathbb{l}\in \mathcal{P}$$ can be reformulated in continuous index set $$I$$. 

This index set can be considered as a new implicit parameter, denoted here as $$\tau$$,  where 
$$
\mathbb{l}(\mathbf{x}, t) = \mathbb{l}(\mathbf{x}(\tau), t(\tau))
$$
and the direction of change of $$\mathbb{l}$$ with respect to $$\tau$$ can be quantified as $$\hat{\mathbf{G}}(\mathbb{l}) = \frac{\partial \mathbb{l}}{\partial \tau}$$. 

As the loop changes at moment $$\tau$$ in the space $$I$$, the cost function now changes as

$$\begin{eqnarray}
\frac{\partial J}{\partial \tau} &=& 2 \int_0^1 \int_\Omega \left(\nabla_{\mathbb{l}}\mathbf{r} \cdot \hat{\mathbb{G}}(\mathbb{l})\right) \cdot \mathbf{r} d\mathbf{x}dt \\
&=& 2 \left<\mathbb{D}(\mathbb{l};\hat{\mathbf{G}}) = \begin{bmatrix}\nabla_{\mathbb{l}}\mathbf{r} \cdot \hat{\mathbb{G}}(\mathbb{l}) \\ 0 \end{bmatrix} , \mathbf{R}=\begin{bmatrix} \mathbf{r} \\ 0 \end{bmatrix} \right> \\
&=& 2 \left< \hat{\mathbf{G}}, \mathbb{D}^\dagger(\mathbb{l};\hat{\mathbf{G}})\right>
\end{eqnarray}
$$

where $$\mathbb{D}(\mathbb{l};\hat{\mathbf{G}})$$ is the Gâteaux derivative of the residual in the direction given by the operator $$\hat{\mathbf{G}}$$:

$$
\mathbb{D}(\mathbf{R};\hat{\mathbf{G}}) = \lim_{\epsilon \rightarrow 0}\frac{\mathbf{R}(\mathbb{l}+\epsilon \hat{\mathbf{G}}(\mathbb{l}))-\mathbf{R}(\mathbb{l})}{\epsilon}
$$

where $$\mathbb{D}^\dagger$$ is the adjoint operator of the above derivative operator.

The goal is to achieve $$J=0$$ in the $$\tau$$-space. This can be realised if $$\frac{\partial J}{\partial \tau} < 0$$ for all $$\tau$$. 

By *choosing* $$\hat{\mathbf{G}}=-\mathbb{D}^\dagger(\mathbb{l};\mathbf{R})$$, the rate of change of the cost in $$\tau$$ is ensured to be monotonically decreasing as

$$
\frac{\partial J}{\partial \tau} = -2 \left\|\mathbb{D}^\dagger(\mathbb{l};\mathbf{R}) \right\|^2.
$$

If a random loop in the space $$\mathcal{P}_g$$ is deformed along the direction given by $$\mathbb{D}^\dagger (\mathbb{l}, \mathbf{R})$$ until $$J=0$$ is reached, the loop now satisfies the given equation and attains the periodicity; thus, the loop eventually becomes an element in $$\mathcal{P}$$. 


[^1]:Davide Lasagna, SIAM J. APPLIED DYNAMICAL SYSTEMS, Vol. 17, No. 1, pp. 547-580
[^2]:Sajjad Azimi et al., Phys. Rev. E 105, 014217
