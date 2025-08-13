|                    | $\overline{\text{REG}}$ | $\text{REG}$ | $\text{CFL}$ | $\tiny{\text{DEC.}}$ | $\tiny{\text{REC.}}$ | $\text{P}$ | $\text{NP}$ | $\text{NPC}$ |
| ------------------ | ----------------------- | ------------ | ------------ | -------------------- | -------------------- | ---------- | ----------- | ------------ |
| $L_{1}\cup L_{2}$  | **no**                  | ✓            | ✓            | ✓                    | ✓                    | ✓          | ✓           | **no**       |
| $L_{1}\cap L_{2}$  | **no**                  | ✓            | **no**       | ✓                    | ✓                    | ✓          | ✓           | **no**       |
| $\overline{L}$     | ✓                       | ✓            | **no**       | ✓                    | **no**               | ✓          | $?$         | $?$          |
| $L_{1}\cdot L_{2}$ | **no**                  | ✓            | ✓            | ✓                    | ✓                    | ✓          | ✓           | **no**       |
| $L^*$              | **no**                  | ✓            | ✓            | ✓                    | ✓                    | ✓          | ✓           | **no**       |
| $L^\mathcal{R}$    | ✓                       | ✓            | ✓            | ✓                    | ✓                    | ✓          |             |              |
| $L_1\setminus L_2$ | **no**                  | ✓            | **no**       | ✓                    | **no**               | ✓          | $?$         |              |
| $L\cap R$          | **no**                  | ✓            | ✓            | ✓                    | ✓                    | ✓          |             |              |

- (**DFA**) $M=(Q,\Sigma,\delta,q_0,F)$, $\delta:Q\times\Sigma\to Q.$ 
- (**NFA**) $M=(Q,\Sigma,\delta,q_0,F)$, $\delta:Q\times \Sigma_\varepsilon \to \mathcal{P}(Q).$ 
- (**GNFA**) $(Q,\Sigma,\delta,q_{0},q_{\text{a}})$, $\delta:(Q\setminus \{q_{\text{a}}\})\times(Q\setminus \{q_{\text{start}}\}\to\mathcal{R}$ (where $\mathcal{R}=\{ \text{Regex over } \Sigma\}$)
- (**DFA $\rightsquigarrow$ GNFA $\rightsquigarrow$ Regex**) ![[dfa-to-gnfa.svg|200]] 
![[GNFA to Regular Expression.svg|200]]
- GNFA accepts $w\in\Sigma^*$ if $w=w_{1}\cdots w_{k}$, where $w_{i}\in\Sigma^*$ and there exists a sequence of states $q_{0},q_{1},\dots,q_{k}$ s.t. $q_{0}=q_{\text{start}}$, $q_{k}=q_{\text{a}}$ and for each $i$, we have $w_i\in L(R_{i})$, where $R_{i}=\delta(q_{i-1},q_{i})$.
- $n$-state DFA $A$, $m$-state DFA $B$ $\implies$ $\exists$ $nm$-state DFA $C$ s.t. $L(C)=L(A)\Delta L(B)$.
- $p$-state DFA $C$, if $L(C)\neq\emptyset$ then $\exists$ $s\in L(C)$ s.t. $|s|< p$. 
- Every NFA has an equiv. NFA with a single accept state.
- $A=L(N_{\textsf{NFA}}),B=(L(M_{\textsf{DFA}}))^\complement$ then $A\cdot B\in\text{REG}$. 
- (**NFA $\rightsquigarrow$ DFA**)
	- $N=(Q,\Sigma,\delta,q_{0},F)$
	- $D=(Q'=\mathcal{P}(Q),\Sigma,\delta',q'_{0}=E(\{q_{0}\}),F')$
	- $F'=\{ q\in Q' \mid \exists p\in F:p\in q \}$
	- $E(\{q\}):=\{ q \}\cup\{ \text{states reachable from }q\text{ via }\varepsilon \text{-arrows} \}$
	- $\displaystyle\forall R\,\subseteq Q, \forall a\in\Sigma, \delta'(R, a) = E\left( \bigcup_{r \in R} \delta(r, a) \right)$
- **Regular Expressions Examples**: 
- $\{ a^nwb^n :w\in \Sigma^* \}\equiv a(a\cup b)^*b$
- $\{ w : \#_w(\texttt{0})\geq 2 \lor \#_w(\texttt{1})\leq 1\}\equiv$ $(\Sigma^* 0 \Sigma^* 0\Sigma^*) \cup (0^*(\varepsilon \cup 1)0^*)$
- $\{ w   : |w| \bmod n = m \}\equiv(a \cup b)^m ((a \cup b)^n)^*$
- $\{ w  : \#_b(w) \bmod n = m \}\equiv(a^* b a^*)^m \cdot \left( (a^* b a^*)^n \right)^*$
- $\{ w : |w|\text{ is odd} \}\equiv (a\cup b)^*((a\cup b)(a\cup b)^*)^*$
- $\{ w: \#_{a}({w})\text{ is odd}\}\equiv b^* a (ab^* a\cup b)^*$
- $\{ w: \#_{ab}({w})=\#_{ba}({w}) \}\equiv \varepsilon\cup a \cup b \cup a\Sigma^*a \cup b\Sigma^*b$
# PL: $\displaystyle A \in \text{REG}\implies \exists p:\forall s\in A$, $|s|\geq p$, $s=xyz$, (**i**) $\forall i\geq 0, xy^iz\in A$, (**ii**) $|y|>0$ and (**iii**) $|xy|\leq p$.

- $\{w=a^{2^k}\};\quad$ $k=\lfloor\log_2 |w|\rfloor,s=a^{2^k}=xyz.$ $2^k=|xyz|<|xy^2z|\leq |xyz|+|xy|\leq 2^k+p<2^{k+1}$.
- $\{w=w^\mathcal{R}\};\quad$ $s=0^p10^p=xyz.$ then $xy^2z=0^{p+|y|}10^p\notin L$.  
- $\{ a^nb^n \};\quad$ $s=a^pb^p=xyz$, where $|y|>0$ and $|xy|\leq p$. Then $xy^2z=a^{p+|y|}b^p\notin L$.
- $\{ a^p:p \text{ is prime} \};\quad$ $s=a^t=xyz$ for prime $t\geq p.$ $r:=|y|>0$
- $\{ www:w\in \Sigma^* \};$ $s=a^pba^pba^p=xyz=a^{|x|+|y|+m}ba^pba^pb$, $m\geq 0$, but $xy^2z=a^{|x|+2|y|+m}ba^pba^pb\notin L$.
- $\{ a^{2n}b^{3n}a^{n} \};$ $s=a^{2p}b^{3p}a^{p}=xyz=a^{|x|+|y|+m+p}b^{3p}a^{p}$, $m\geq 0$, but $xy^2z=a^{2p+|y|}b^{3p}a^{p}\notin L$.
- $\{ w : \#_a(w)>\#_b(w) \};$ $s=a^pb^{p+1}$, $|s|=2p+1\geq p$, $xy^2z=a^{p+|y|}b^{p+1}\notin L$. 
- $\{ w: \#_{a}({w})=\#_{b}({w}) \};$ $s=a^pb^p=xyz$ but $xy^2z=a^{p+|y|}b^p\notin L$.
- $\{ w : \#_w(a) \neq \#_w(b) \};$ (prf via 'complement-closure', $\overline{L}=\{ w : \#_w(a) = \#_w(b) \}$)
# $L\in \textbf{{CFL}}\Leftrightarrow \exists G_{\textsf{CFG }}  : L=L(G)\Leftrightarrow \exists  M_{\textsf{PDA }}  : L=L(M)$ 
- A derivation of $w$ is a **leftmost derivation** if at every step the leftmost remaining variable is the one replaced; $w$ is derived **ambiguously** in $G$ if it has at least two different l.m. derivations. $G$ is **ambiguous** if it generates at least one string ambiguously. A CFG is ambiguous iff it generates some string with two different parse trees. A CFL is **inherently ambiguous** if all CFGs that generate it are ambiguous.
- (**CFG $\rightsquigarrow$ CNF**) (**1.**) Add a new start variable $S_0$ and a rule $S_0\to S$. (**2.**) Remove $\varepsilon$-rules of the form $A\to \varepsilon$ (except for $S_0\to \varepsilon$). and remove $A$'s occurrences on the RH of a rule (e.g.: $R\to uAvAw$ becomes $R\to uAvAw \mid uAvw \mid uvAw \mid uvw$. where $u,v,w\in (V\cup \Sigma)^*$). (**3.**) Remove unit rules $A\to B$ then whenever $B\to u$ appears, add $A\to u$, unless this was a unit rule previously removed. ($u\in (V\cup \Sigma)^*$). (**4.**) Replace each rule $A\to u_1u_2\cdots u_k$ where $k\geq 3$ and $u_i\in (V\cup \Sigma)$, with the rules $A\to u_1A_1$, $A_1\to u_2A_2$, ..., $A_{k-2}\to u_{k-1}u_k$, where $A_i$ are new variables. Replace terminals $u_i$ with $U_i\to u_i$.
- If $G \in \textsf{CNF}$, and $w\in L(G)$, then $|w|\leq 2^{|h|}-1$, where $h$ is the height of the parse tree for $w$.
- $\forall L\in \textsf{CFL}, \exists G \in \textsf{CNF} : L=L(G)$.
- (**derivation**) $S\Rightarrow u_1\Rightarrow u_2\Rightarrow \dots \Rightarrow u_n = w$, where each $u_i$ is in $(V\cup \Sigma)^*$. (in this case, $G$ **generates** $w$ (or $S$ **derives** $w$), $S\overset{*}\Rightarrow w$)
- (**PDA**) $M=(Q,\underset{ \textsf{input} }{ \Sigma },\underset{ \textsf{stack} }{ \Gamma },\delta,q_0\in Q,\underset{ \textsf{accepts} }{ F }\subseteq Q)$. (where $Q$, $\Sigma$, $\Gamma$, $F$ finite). $\delta:Q\times \Sigma_\varepsilon\times \Gamma_\varepsilon\longrightarrow \mathcal{P}(Q\times \Gamma_\varepsilon)$.
- $M$ **accepts** $w\in \Sigma^*$ if there is a seq. $r_0,r_1,\dots,r_m\in Q$ and $s_0,,s_1,\dots,s_m\in \Gamma^*$ s.t.: (1.) $r_0=q_0$ and $s_0=\varepsilon$; (2.) For $i=0,1,\dots,m-1$, we have $(r_i,b)\in\delta(r_{i},w_{i+1},a)$, where $s_i=at$ and $s_{i+1}=bt$ for some $a,b\in \Gamma_\varepsilon$ and $t\in \Gamma^*$; (3.) $r_m\in F$.
- A PDA can be represented by a state diagram, where each transition is labeled by the notation "$a,b\to c$" to denote that the PDA: **Reads** $a$ from the input (or read nothing if $a=\varepsilon$). **Pops** $b$ from the stack (or pops nothing if $b=\varepsilon$). **Pushes** $c$ onto the stack (or pushes nothing if $c=\varepsilon$)

# (**CFG**) $G=({ V },{ \Sigma },R,S)$, $A\to w$, ($A\in V,w\in (V\cup \Sigma)^*$);  (**CNF**) $A\to BC$, $A\to a$, $S\to \varepsilon$, ($A,B,C\in V$, $a\in \Sigma$, $B,C\neq S$).

- $\{ w : w=w^\mathcal{R} \}; S\to aSa \mid bSb \mid a \mid b \mid \varepsilon$
- $\{ w : w\neq w^\mathcal{R} \}; S\to aSa \mid bSb \mid aXb \mid bXa$;$X\to aX \mid bX \mid \epsilon$
- $\{ww^\mathcal{R}\mid w\in \{a,b\}^*\}$ 
- $\{ w\#x : w^\mathcal{R}\subseteq x \}; S\to AX; A\to 0A0\mid 1A1\mid \#X; X\to 0X\mid 1X\mid \varepsilon$
- $\{ w : \#_w(a)> \#_w(b) \}; S\to TaT; T\to TT \mid aTb \mid bTa \mid a \mid \varepsilon$
- $\{ w : \#_w(a)\geq \#_w(b) \}; S\to SS \mid aSb \mid bSa \mid a \mid \varepsilon$
- $\{ w : \#_w(a)= \#_w(b) \}$; $S\to SS\mid aSb  \mid bSa  \mid \varepsilon$ 
- $\overline{\{ a^nb^n \}}$; $S \to XbXaX \mid A \mid B$; $A \to aAb \mid Ab \mid b$; $B \to aBb \mid aB \mid a$; $X \to aX \mid bX \mid \varepsilon$.
- $\{a^nb^m\mid n\neq m \}; S\to aSb \mid A \mid B; A\to aA \mid a; B\to bB \mid b$
- $\{ \texttt{a}^i\texttt{b}^j\texttt{c}^k\mid i\leq j\text{ or }j\leq k \};$ $S\to S_{1}C\mid AS_{2}$;$\,S_{1}\to \texttt{a}S_{1}\texttt{b}\mid S_{1}\texttt{b}\mid \varepsilon$;$S_{2}\to \texttt{b}S_{2}\texttt{c}\mid S_{2}\texttt{c}\mid \varepsilon$;$A\to A\texttt{a}\mid \varepsilon;C\to C\texttt{c}\mid \varepsilon$
- $\{ x \mid x \neq ww \};S\to A\mid B\mid AB\mid BA;A\to CAC\mid \texttt{0}$;$B\to CBC\mid \texttt{1}$;$C\to \texttt{0}\mid \texttt{1}$
- $\{ a^nb^m \mid m \leq n \leq 3m \};S\to aSb \mid aaSb \mid aaaSb \mid \varepsilon;$ 
- $\{ a^nb^n \}; S\to aSb \mid \varepsilon$
- $\{ a^nb^m \mid n>m \}; S\to aSb \mid aS \mid a$


# PL: $L \in \text{CFL}\implies\exists p:\forall s\in L,|s|\geq p,\,s=uvxyz,$ (**i**) $\forall i\geq 0,uv^ixy^iz\in L$, (**ii**) $|vxy|\leq p$, and (**iii**) $|vy|>0$.

- $\{w=a^nb^nc^n \};\quad$ $s=a^pb^pb^p=uvxyz.$ $vxy$ can't contain all of $a,b,c$ thus $uv^2xy^2z$ must pump one of them less than the others.
- $\{ww:w\in\{a,b\}^*\};\quad$ 
- (**more example of not CFL**) $\{a^i b^j c^k \mid 0\leq i \leq j \leq k\},$ $\{a^n b^n c^n \mid n \in \mathbb{N}\},$ $\{ww \mid w \in \{a,b\}^*\},$ $\{\texttt{a}^{n^{2}}\mid n\geq 0 \},$ $\{w\in \{\texttt{a},\texttt{b},\texttt{c}\}^* \mid \#_{\texttt{a}}(w)=\#_{\texttt{b}}(w)=\#_{\texttt{c}}(w)\}$, $\{a^p \mid p \text{ is prime}\}$, $L=\{ ww^{\mathcal{R}} w : w\in \{a,b\}^* \}$
# $\small{L\in {\text{DECIDABLE}} \iff \left(L\in {\text{REC.}} \text{ and } L\in{\text{co-REC.}} \right)\iff\exists\,M_{\textsf{TM}}\text{ decides }L}$.

- (**TM**) $M=(Q,\underset{ \textsf{input} }{ \Sigma }\subseteq \Gamma,\underset{ \textsf{tape} }{ \Gamma },\delta,q_0,q_{\text{🅐}},q_{\text{🅁}})$, where $\sqcup\in \Gamma$, $\sqcup\notin \Sigma$, $q_{\text{🅁}}\neq q_{\text{🅐}}$, $\delta:Q\times \Gamma\longrightarrow Q\times \Gamma\times \{\text{L},\text{R}\}$
- (**recognizable**) 🅐 if $w\in L$, 🅁/loops if $w\notin L$; $A$ is **co-recognizable** if $\overline{A}$ is recognizable.
- $L \in\text{RECOGNIZABLE}\iff L\leq_{\text{m}}A_{\textsf{TM}}$. 
- Every inf. recognizable lang. has an inf. dec. subset.
- (**decidable**) 🅐 if $w\in L$, 🅁 if $w\notin L$.
- $L\in {\text{DECIDABLE}} \iff L\leq_{\text{m}}\texttt{0}^*\texttt{1}^*$.
- $L\in {\text{DECIDABLE}} \iff L^{\mathcal{R}}\in {\text{DECIDABLE}}$.
- (**decider**) TM that halts on all inputs. 
- (**Rice**) Let $P$ be a lang. of TM descriptions, s.t. (**i**) $P$ is nontrivial (not empty and not all TM desc.) and (**ii**) for each two TM $M_1$ and $M_2$, we have $L(M_1)=L(M_2)\implies(\langle M_1\rangle\in P\iff \langle M_2\rangle\in P)$. Then $P$ is undecidable. 
- $\{ \text{all }\textsf{TM}\text{s} \}$ is count.; $\Sigma^*$ is count. (finite $\Sigma$); $\{ \text{all lang.} \}$ is uncount.; $\{ \text{all infinite bin. seq.} \}$ is uncount.
- $\small\textsf{DFA}\equiv\textsf{NFA}\equiv\textsf{GNFA}\equiv\textsf{REG}\,\subset \,\textsf{NPDA}\equiv\textsf{CFG}\,\subset \,\textsf{DTM}\equiv\textsf{NTM}$
- $f:\Sigma^*\to\Sigma^*$ is **computable** if $\exists M_{\textsf{TM}}:\forall w\in \Sigma^*$, $M$ halts on $w$ and outputs $f(w)$ on its tape.
- If $A\leq_{\text{m}}B$ and $B$ is decidable, then $A$ is dec.
- If $A\leq_{\text{m}}B$ and $A$ is undecidable, then $B$ is undec.
- If $A\leq_{\text{m}}B$ and $B$ is recognizable, then $A$ is rec.
- If $A\leq_{\text{m}}B$ and $A$ is unrecognizable, then $B$ is unrec.
- (transitivity) If $A\leq_{\text{m}}B$ and $B\leq_{\text{m}}C$, then $A\leq_{\text{m}}C$.  
- $A \leq_{\mathrm{m}} B \iff \overline{A} \leq_{\mathrm{m}} \overline{B}$ (esp. $A\leq_{\text{m}}\overline{A}\iff \overline{A}\leq_{\text{m}}A$)
- If $A\leq_{\text{m}}\overline{A}$ and $A\in\text{RECOGNIZABLE}$, then $A\in\text{DEC.}$  