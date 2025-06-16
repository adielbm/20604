# Reg / DFA / NFA (1)

|                    | $\overline{\textsf{REG}}$ | $\textsf{REG}$ | $\textsf{CFL}$ | $\overset{ \textsf{Turing} }{ \tiny{\textsf{DECID.}} }$ | $\overset{ \textsf{Turing} }{ \tiny{\textsf{RECOG.}} }$ | $\text{P}$ | $\text{NP}$ | $\text{NPC}$ |
| ------------------ | ------------------------- | -------------- | -------------- | ------------------------------------------------------- | ------------------------------------------------------- | ---------- | ----------- | ------------ |
| $L_{1}\cup L_{2}$  | **no**                    | ✓              | ✓              | ✓                                                       | ✓                                                       | ✓          | ✓           | **no**       |
| $L_{1}\cap L_{2}$  | **no**                    | ✓              | **no**         | ✓                                                       | ✓                                                       | ✓          | ✓           | **no**       |
| $\overline{L}$     | ✓                         | ✓              | **no**         | ✓                                                       | **no**                                                  | ✓          | $?$         | $?$          |
| $L_{1}\cdot L_{2}$ | **no**                    | ✓              | ✓              | ✓                                                       | ✓                                                       | ✓          | ✓           | **no**       |
| $L^*$              | **no**                    | ✓              | ✓              | ✓                                                       | ✓                                                       | ✓          | ✓           | **no**       |
| $L^\mathcal{R}$    |                           | ✓              | ✓              | ✓                                                       | ✓                                                       | ✓          |             |              |
| $L\cap R$          |                           | ✓              | ✓              | ✓                                                       | ✓                                                       | ✓          |             |              |
| $L_1\setminus L_2$ |                           | ✓              | **no**         | ✓                                                       | **no**                                                  | ✓          | $?$         |              |

- (**DFA**) $M=(Q,\Sigma,\delta,q_0,F)$, $\delta:Q\times\Sigma\to Q$
- (**NFA**) $M=(Q,\Sigma,\delta,q_0,F)$, $\delta:Q\times \Sigma_\varepsilon \to \mathcal{P}(Q)$
- (**GNFA**) $(Q,\Sigma,\delta,q_{0},q_{\text{a}})$, $\delta:(Q\setminus \{q_{\text{a}}\})\times(Q\setminus \{q_{\text{start}}\}\longrightarrow\mathcal{R}$ (where $\mathcal{R}=\{ \text{all regex over } \Sigma\}$)
- GNFA accepts $w\in\Sigma^*$ if $w=w_{1}\cdots w_{k}$, where $w_{i}\in\Sigma^*$ and there exists a sequence of states $q_{0},q_{1},\dots,q_{k}$ s.t. $q_{0}=q_{\text{start}}$, $q_{k}=q_{\text{a}}$ and for each $i$, we have $w_i\in L(R_{i})$, where $R_{i}=\delta(q_{i-1},q_{i})$.
- (**DFA-to-GNFA**) $G=(Q',\Sigma,\delta',s,a),\quad$ $Q'=Q\cup\{s,a\},\quad$ $\delta'(s,\varepsilon)=q_{0},\quad$ For each $q\in F$, $\delta'(q,\varepsilon)=a,\quad$ ((TODO...))
- (**P.L.**) If $\displaystyle A$ is a regular lang., then $\exists p$ s.t. every string $s\in A$, $|s|\geq p$, can be written as $s=xyz$, satisfying: (**i**) $\forall i\geq 0, xy^iz\in A$, (**ii**) $|y|>0$ and (**iii**) $|xy|\leq p$.
- Every NFA can be converted to an equivalent one that has a single accept state.
- (**reg. grammar**) $G=(V,\Sigma,R,S)$. Rules: $A\to aB$, $A\to a$ or $S\to \varepsilon$. ($A,B,S\in V$; $a\in \Sigma$).
- (**NFA $\rightsquigarrow$ DFA**) ![[nfa-to-dfa.svg]]
	- $N=(Q,\Sigma,\delta,q_{0},F)$
	- $D=(Q'=\mathcal{P}(Q),\Sigma,\delta',q'_{0}=E(\{q_{0}\}),F')$
	- $F'=\{ q\in Q' \mid \exists p\in F:p\in q \}$
	- $E(\{q\}):=\{ q \}\cup\{ \text{states reachable from }q\text{ via }\varepsilon \text{-arrows} \}$
	- $\displaystyle\forall R\,\subseteq Q, \forall a\in\Sigma, \delta'(R, a) = E\left( \bigcup_{r \in R} \delta(r, a) \right)$



# CFL / CFG / PDA (2) 

- (**CFG**) $G=(\underset{ \textsf{n.t.} }{ V },\underset{ \textsf{ter.} }{ \Sigma },R,S)$. Rules: $A\to w$. (where $A\in V$ and $w\in (V\cup \Sigma)^*$).
- A derivation of $w$ is a **leftmost derivation** if at every step the leftmost remaining variable is the one replaced.
- $w$ is derived **ambiguously** in $G$ if it has at least two different l.m. derivations.
- $G$ is **ambiguous** if it generates at least one string ambiguously.
- A CFG is ambiguous iff it generates some string with two different parse trees.
- (**P.L.**) If $L$ is a CFL, then $\exists p$ s.t. any string $s\in L$ with $|s|\geq p$ can be written as $s=uvxyz$, satisfying: (**i**) $\forall i\geq 0,uv^ixy^iz\in L$, (**ii**) $|vxy|\leq p$, and (**iii**) $|vy|>0$.
- (**CNF**) $A\to BC$, $A\to a$, or $S\to \varepsilon$, (where $A,B,C\in V$, $a\in \Sigma$, and $B,C\neq S$).
- If $G \in \textsf{CNF}$, and $w\in L(G)$, then $|w|\leq 2^{|h|}-1$, where $h$ is the height of the parse tree for $w$.
- $L\in \textbf{{CFL}}\Leftrightarrow \exists \underset{ \textsf{CFG } }{ G } : L=L(G)\Leftrightarrow \exists \underset{ \textsf{PDA } }{ M } : L=L(M)$
- A CFL is **inherently ambiguous** if all CFGs that generate it are ambiguous.
- $\forall L\in \textsf{CFL}, \exists G \in \textsf{CNF} : L=L(G)$.
- $\textsf{REG}\subseteq \textsf{CFL}$.
- $\{w\in \{a,b\}^* \mid w=w^\mathcal{R}\},$ $\{ww^\mathcal{R}\mid w\in \{a,b\}^*\},$ $\{a^n b^n \mid n\in \mathbb{N}\},\{w\in \{\texttt{a},\texttt{b}\}^* \mid \#_{\texttt{a}}(w)=\#_{\texttt{b}}(w)\}\in \textsf{CFL}$ but $\not\in \textsf{REG}$. 
- $\{a^i b^j c^k \mid 0\leq i \leq j \leq k\},$ $\{a^n b^n c^n \mid n \in \mathbb{N}\},$ $\{ww \mid w \in \{a,b\}^*\},$ $\{\texttt{a}^{j^{2}}\mid j\geq 0 \},$ $\{w\in \{\texttt{a},\texttt{b},\texttt{c}\}^* \mid \#_{\texttt{a}}(w)=\#_{\texttt{b}}(w)=\#_{\texttt{c}}(w)\}$ $\notin \textsf{CFL}$
- (**derivation**) $S\Rightarrow u_1\Rightarrow u_2\Rightarrow \dots \Rightarrow u_n = w$, where each $u_i$ is in $(V\cup \Sigma)^*$. (in this case, $G$ **generates** $w$ (or $S$ **derives** $w$), $S\overset{*}\Rightarrow w$)
- (**PDA**) $M=(Q,\underset{ \textsf{input} }{ \Sigma },\underset{ \textsf{stack} }{ \Gamma },\delta,q_0\in Q,\underset{ \textsf{accepts} }{ F }\subseteq Q)$. (where $Q$, $\Sigma$, $\Gamma$, $F$ finite). $\delta:Q\times \Sigma_\varepsilon\times \Gamma_\varepsilon\longrightarrow \mathcal{P}(Q\times \Gamma_\varepsilon)$.
- $M$ **accepts** $w\in \Sigma^*$ if there is a seq. $r_0,r_1,\dots,r_m\in Q$ and $s_0,,s_1,\dots,s_m\in \Gamma^*$ s.t.:
	- $r_0=q_0$ and $s_0=\varepsilon$
	- For $i=0,1,\dots,m-1$, we have $(r_i,b)\in\delta(r_{i},w_{i+1},a)$, where $s_i=at$ and $s_{i+1}=bt$ for some $a,b\in \Gamma_\varepsilon$ and $t\in \Gamma^*$.
	- $r_m\in F$
- A PDA can be represented by a state diagram, where each transition is labeled by the notation "$a,b\to c$" to denote that the PDA: **Reads** $a$ from the input (or read nothing if $a=\varepsilon$). **Pops** $b$ from the stack (or pops nothing if $b=\varepsilon$). **Pushes** $c$ onto the stack (or pushes nothing if $c=\varepsilon$)
- (**CSG**) $\displaystyle {\textstyle G=(V,\Sigma,R,S)}$. Rules: $S\to \varepsilon$ or $\alpha A\beta \to \alpha \gamma \beta$ where: $\displaystyle \alpha ,\beta \in (V\cup \Sigma \setminus \{S\})^*$; $\gamma \in (V\cup  \Sigma  \setminus \{S\})^+$; $\displaystyle A\in V$.





