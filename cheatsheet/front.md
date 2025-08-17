# $\quad\quad\quad\quad\Large{\text{{\LARGE{C}}HEAT {\LARGE{S}}HEET:} \text{{\LARGE{ C}}OMPUTATIONAL {\LARGE{M}}ODELS }\texttt{(20604)}}\quad$ https://github.com/adielbm/20604



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
- (**GNFA**) $(Q,\Sigma,\delta,q_{0},q_{\text{a}}),\delta:Q\setminus \{q_{\text{a}}\}\times Q\setminus \{q_{0}\}\to\text{Rex}_ \Sigma$
- (DFAs $D_1,D_{2}$ ) $\exists$ DFA $D$ s.t. $|Q|= |Q_{1}|\cdot|Q_{2}|$, $L(D)=L(D_{1})\Delta L(D_{2})$.
- (DFA $D$) If $L(D)\neq\emptyset$ then $\exists$ $s\in L(D)$ s.t. $|s|< |Q|$. 
- $\forall$ NFA $\exists$ an equivalent NFA with 1 accept state.
- (**DFA $\rightsquigarrow$ GNFA $\rightsquigarrow$ Regex**) ![[dfa-to-gnfa.svg|250]] 
![[GNFA to Regular Expression.svg|200]]

- If $A=L(N_{\textsf{NFA}}),B=(L(M_{\textsf{DFA}}))^\complement$ then $A\cdot B\in\text{REG}$. 
![[nfa-to-dfa.svg|170]]
**Regular Expressions**: Examples
- $\{ a^nwb^n :w\in \Sigma^* \}\equiv a(a\cup b)^*b$
- $\small\{ w : \#_w(\texttt{0})\geq 2 \lor \#_w(\texttt{1})\leq 1\}\equiv(\Sigma^* 0 \Sigma^* 0\Sigma^*) \cup (0^*(\varepsilon \cup 1)0^*)$
- $\{ w   : |w| \bmod n = m \}\equiv(a \cup b)^m ((a \cup b)^n)^*$
- $\{ w  : \#_b(w) \bmod n = m \}\equiv(a^* b a^*)^m \cdot \left( (a^* b a^*)^n \right)^*$
- $\{ w : |w|\text{ is odd} \}\equiv (a\cup b)^*((a\cup b)(a\cup b)^*)^*$
- $\{ w: \#_{a}({w})\text{ is odd}\}\equiv b^* a (ab^* a\cup b)^*$
- $\{ w: \#_{ab}({w})=\#_{ba}({w}) \}\equiv \varepsilon\cup a \cup b \cup a\Sigma^*a \cup b\Sigma^*b$
- $\{ a^m b^n \mid m+n \text{ is odd} \}\equiv  a(aa)^*(bb)^*  \cup (aa)^* b(bb)^*$
- $\{ aw: aba\not\subseteq w \}\equiv a(a\cup bb\cup bbb)^*(b\cup \varepsilon)$
- $\{ w: bb\not\subseteq w \}\equiv (a\cup ba)^*(\varepsilon \cup b)$
# ${ \textbf{Pumping lemma for regular languages} }$: $\displaystyle A \in \text{REG}\implies \exists p:\forall s\in A$, $|s|\geq p$, $s=xyz$, (**i**) $\forall i\geq 0, xy^iz\in A$, (**ii**) $|y|>0$ and (**iii**) $|xy|\leq p$.

- (the following are **non-reuglar but CFL**)
- $\{w=w^\mathcal{R}\};$ $s=0^p10^p=xyz.$ but $xy^2z=0^{p+|y|}10^p\notin L$.  
- $\{ a^nb^n \};$ $s=a^pb^p=xyz$, $xy^2z=a^{p+|y|}b^p\notin L$.
- $\{ w : \#_a(w)>\#_b(w) \};$ $s=a^pb^{p+1}$, $|s|=2p+1\geq p$, $xy^2z=a^{p+|y|}b^{p+1}\notin L$. 
- $\{ w: \#_{a}({w})=\#_{b}({w}) \};$ $s=a^pb^p=xyz$ but $xy^2z=a^{p+|y|}b^p\notin L$.
- $\{ w : \#_w(a) \neq \#_w(b) \};$ (_pf._ by 'complement-closure', $\overline{L}=\{ w : \#_w(a) = \#_w(b) \}$)
- $\{ a^ib^jc^k: i < j\lor i>k \};$ $s=a^pb^{p+1}c^{2p}=xyz$, but $xy^2z=a^{p+|y|}b^{p+1}c^{2p}$, $p+|y|\geq p+1$, $p+|y|\leq 2p$.
- (the following are both **non-CFL and non-reuglar**) 
- $\{w=a^{2^k}\};\quad$ $k=\lfloor\log_2 |w|\rfloor,s=a^{2^k}=xyz.$ $2^k=|xyz|<|xy^2z|\leq |xyz|+|xy|\leq 2^k+p<2^{k+1}$.
- $\{ a^p:p \text{ is prime} \};\quad$ $s=a^t=xyz$ for prime $t\geq p.$ $r:=|y|>0$
- $\{ www:w\in \Sigma^* \};$ $s=a^pba^pba^p=xyz=a^{|x|+|y|+m}ba^pba^pb$, $m\geq 0$, but $xy^2z=a^{|x|+2|y|+m}ba^pba^pb\notin L$.
- $\{ a^{2n}b^{3n}a^{n} \};$ $s=a^{2p}b^{3p}a^{p}=xyz=a^{|x|+|y|+m+p}b^{3p}a^{p}$, $m\geq 0$, but $xy^2z=a^{2p+|y|}b^{3p}a^{p}\notin L$.

# (**PDA**) $M=(Q,{ \Sigma },{ \Gamma },\delta,q_0\in Q,{ F }\subseteq Q)$.  $\delta:Q\times \Sigma_\varepsilon\times \Gamma_\varepsilon\longrightarrow \mathcal{P}(Q\times \Gamma_\varepsilon).\quad$  $L\in \textbf{{CFL}}\Leftrightarrow \exists G_{\textsf{CFG }}  : L=L(G)\Leftrightarrow \exists  P_{\textsf{PDA }}  : L=L(P)$ 
- (**CFG $\rightsquigarrow$ CNF**) (**1.**) Add a new start variable $S_0$ and a rule $S_0\to S$. (**2.**) Remove $\varepsilon$-rules of the form $A\to \varepsilon$ (except for $S_0\to \varepsilon$). and remove $A$'s occurrences on the RH of a rule (e.g.: $R\to uAvAw$ becomes $R\to uAvAw \mid uAvw \mid uvAw \mid uvw$. where $u,v,w\in (V\cup \Sigma)^*$). (**3.**) Remove unit rules $A\to B$ then whenever $B\to u$ appears, add $A\to u$, unless this was a unit rule previously removed. ($u\in (V\cup \Sigma)^*$). (**4.**) Replace each rule $A\to u_1u_2\cdots u_k$ where $k\geq 3$ and $u_i\in (V\cup \Sigma)$, with the rules $A\to u_1A_1$, $A_1\to u_2A_2$, ..., $A_{k-2}\to u_{k-1}u_k$, where $A_i$ are new variables. Replace terminals $u_i$ with $U_i\to u_i$.
- If $G \in \textsf{CNF}$, and $w\in L(G)$, then $|w|\leq 2^{|h|}-1$, where $h$ is the height of the parse tree for $w$.
- $\forall L\in \textsf{CFL}, \exists G \in \textsf{CNF} : L=L(G)$.
- (**derivation**) $S\Rightarrow u_1\Rightarrow u_2\Rightarrow \dots \Rightarrow u_n = w$, where each $u_i$ is in $(V\cup \Sigma)^*$. (in this case, $G$ **generates** $w$ (or $S$ **derives** $w$), $S\overset{*}\Rightarrow w$)
- $M$ **accepts** $w\in \Sigma^*$ if there is a seq. $r_0,r_1,\dots,r_m\in Q$ and $s_0,,s_1,\dots,s_m\in \Gamma^*$ s.t.: (1.) $r_0=q_0$ and $s_0=\varepsilon$; (2.) For $i=0,1,\dots,m-1$, we have $(r_i,b)\in\delta(r_{i},w_{i+1},a)$, where $s_i=at$ and $s_{i+1}=bt$ for some $a,b\in \Gamma_\varepsilon$ and $t\in \Gamma^*$; (3.) $r_m\in F$.
- (**PDA transition**) "$a,b\to c$": **reads** $a$ from the input (or read nothing if $a=\varepsilon$). **pops** $b$ from the stack (or pops nothing if $b=\varepsilon$). **pushes** $c$ onto the stack (or pushes nothing if $c=\varepsilon$)
- $R\in \text{REG}\land C\in \text{CFL}\implies R\cap C\in \text{CFL}$. (_pf._ construct PDA $P'=P_{C}\times D_{R}$.)

# (**CFG**) $G=({ V },{ \Sigma },R,S)$, $A\to w$, ($A\in V,w\in (V\cup \Sigma)^*$);  (**CNF**) $A\to BC$, $A\to a$, $S\to \varepsilon$, ($A,B,C\in V$, $a\in \Sigma$, $B,C\neq S$).

the following are **CFL but non-reuglar**:
- $\{ w : w=w^\mathcal{R} \}; S\to aSa \mid bSb \mid a \mid b \mid \varepsilon$
- $\{ w : w\neq w^\mathcal{R} \}; S\to aSa \mid bSb \mid aXb \mid bXa$;$X\to aX | bX | \varepsilon$
- $\{ww^\mathcal{R}\}=\{ w:w=w^\mathcal{R} \land |w|\text{ is even} \}; S\to aSa \mid bSb \mid \varepsilon$
- $\{ w a^{n} w^{\mathcal{R}}  \};$ $S\to aSa\mid bSb\mid M;M\to aM\mid\varepsilon$
- $\{ w\#x : w^\mathcal{R}\subseteq x \}; S\to AX$; $A\to 0A0\mid 1A1\mid \#X$;$X\to 0X\mid 1X\mid \varepsilon$
- $\{ w : \#_w(a)> \#_w(b) \}; S\to JaJ; J\to J J \mid aJb \mid bJa \mid a \mid \varepsilon$
- $\{ w : \#_w(a)\geq \#_w(b) \}; S\to SS \mid aSb \mid bSa \mid a \mid \varepsilon$
- $\{ w : \#_w(a)= \#_w(b) \}$; $S\to SS\mid aSb  \mid bSa  \mid \varepsilon$ 
- $\{ w : \#_w(a)= 2 \cdot \#_w(b) \}$; $S\to SS|S_{1}bS_{1}|bSaa|aaSb|\varepsilon;S_{1}\to aS|SS_{1}$ 
- $\small{\{ w : \#_w(a)\neq \#_w(b) \}=\{ \#_w(a)> \#_w(b) \}\cup\{  \#_w(a)< \#_w(b) \}}$
- $\overline{\{ a^nb^n \}}$; $S \to XbXaX \mid A \mid B$; $A \to aAb \mid Ab \mid b$; $B \to aBb \mid aB \mid a$; $X \to aX \mid bX \mid \varepsilon$.
- $\{a^nb^m\mid n\neq m \}; S\to aSb | A | B; A\to aA | a; B\to bB | b$
- $\{ x \mid x \neq ww \};S\to A\mid B\mid AB\mid BA;A\to CAC\mid \texttt{0}$;$B\to CBC\mid \texttt{1}$;$C\to {0}\mid {1}$
- $\{ a^nb^m \mid m \leq n \leq 3m \};S\to aSb \mid aaSb \mid aaaSb \mid \varepsilon;$ 
- $\{ a^nb^n \}; S\to aSb \mid \varepsilon$
- $\{ a^nb^m \mid n>m \}; S\to aSb \mid aS \mid a$
- $\{ a^nb^m \mid n\geq m \geq 0 \};$ $S\to aSb \mid aS \mid a \mid \varepsilon$
- $\{ a^ib^j c^k \mid i+j=k\};$ $S\to aSc \mid X; X\to bXc \mid \varepsilon$  
- $\{ {a}^i{b}^j{c}^k\mid i\leq j\lor j\leq k \};$ $S\to S_{1}C\mid AS_{2}$;$A\to A{a}\mid \varepsilon$; $\,S_{1}\to {a}S_{1}{b}\mid S_{1}{b}\mid \varepsilon$;$S_{2}\to {b}S_{2}{c}\mid S_{2}{c}\mid \varepsilon$;$C\to C{c}\mid \varepsilon$
- $\{ {a}^i{b}^j{c}^k\mid i=j\lor j=k \};$ $S\to  A X_1 | X_2 C; X_1 \to bX_1 c | \varepsilon; X_2 \to aX_2 b | \varepsilon; A \to aA | \varepsilon; C \to cC | \varepsilon$
- $\{ xy : |x|=|y|,x\neq y \};$ $S\to AB\mid BA$;$\,A\to a\mid aAa\mid aAb\mid bAa\mid bAb$;$B\to b\mid aBa\mid aBb\mid bBa\mid bBb;$
the following are both **CFL and regular**:
- $\{ w:\#_w(a) \geq 3 \};$ $S\to XaXaXaX; X\to aX \mid bX \mid \varepsilon$
- $\{ w:|w|\text{ is odd} \}; S\to aaS\mid abS\mid bbS\mid baS\mid a\mid b$ 
- $\{ w:|w|\text{ is even} \}; S\to aaS\mid abS\mid bbS\mid baS\mid \varepsilon$
- $\emptyset; S\to S$

# ${ \textbf{Pumping lemma for context-free languages} }$: $L \in \text{CFL}\implies\exists p:\forall s\in L,|s|\geq p,\,s=uvxyz,$ (**i**) $\forall i\geq 0,uv^ixy^iz\in L$, (**ii**) $|vxy|\leq p$, and (**iii**) $|vy|>0$.

- $\{w=a^nb^nc^n \};$ $s=a^pb^pb^p=uvxyz.$ $vxy$ can't contain all of $a,b,c$ thus $uv^2xy^2z$ must pump one of them less than the others.
- $\{ww:w\in\{a,b\}^*\};\quad$ 
- (**more example of not CFL**) 
- $\{a^i b^j c^k \mid 0\leq i \leq j \leq k\},$ $\{a^n b^n c^n \mid n \in \mathbb{N}\},$ $\{ww \mid w \in \{a,b\}^*\},$ $\{\texttt{a}^{n^{2}}\mid n\geq 0 \},$ $\{a^p \mid p \text{ is prime}\}$, $L=\{ ww^{\mathcal{R}} w : w\in \{a,b\}^* \}$
- $\{w \mid \#_{w}(a)=\#_{w}(b)=\#_{w}(c)\}$: (_pf_: since $\textsf{Regular}\cap \textsf{CFL}\in \text{CFL}$, but $\{ a^*b^*c^* \}\cap L=\{a^nb^nc^n \}\not\in \text{CFL}$)
# $\small{L\in {\text{Turing-Decidable}} \iff \left(L\in {\text{Turing-Recognizable}} \text{ and } \overline{L}\in{\text{Turing-Recognizable}} \right)\iff\exists\,M_{\textsf{TM}}\text{ decides }L}$.

- (**TM**) $M=(Q,\underset{ \textsf{input} }{ \Sigma }\subseteq \Gamma,\underset{ \textsf{tape} }{ \Gamma },\delta,q_0,q_{\text{🅐}},q_{\text{🅁}})$, where $\sqcup\in \Gamma$, $\sqcup\notin \Sigma$, $q_{\text{🅁}}\neq q_{\text{🅐}}$, $\delta:Q\times \Gamma\longrightarrow Q\times \Gamma\times \{\text{L},\text{R}\}$
- (**Turing-Recognizable** $(\mathbf{TR})$) 🅐 if $w\in L$, 🅁/loops if $w\notin L$; $A$ is **co-recognizable** if $\overline{A}$ is recognizable.
- $L \in\text{TR}\iff L\leq_{\text{m}}A_{\textsf{TM}}$. 
- Every inf. recognizable lang. has an inf. dec. subset.
- (**Turing-Decidable** $(\mathbf{TD})$) 🅐 if $w\in L$, 🅁 if $w\notin L$.
- $L\in {\text{TD}} \iff L^{\mathcal{R}}\in {\text{TD}}$.
- (**decider**) TM that halts on all inputs. 
- (**Rice**) Let $P$ be a lang. of TM descriptions, s.t. (**i**) $P$ is nontrivial (not empty and not all TM desc.) and (**ii**) for each two TM $M_1$ and $M_2$, we have $L(M_1)=L(M_2)\implies(\langle M_1\rangle\in P\iff \langle M_2\rangle\in P)$. Then $P$ is undecidable. (_e.g._ $\mathit{INFINITE}_{\textsf{TM}}$, $\mathit{ALL}_{\textsf{TM}}$, $\mathit{E}_{\textsf{TM}}$, $\{ \langle M_{\textsf{TM}}\rangle: 1\in L(M) \}$)
- $\{ \text{all }\textsf{TM}\text{s} \}$ is count.; $\Sigma^*$ is count. (finite $\Sigma$); $\{ \text{all lang.} \}$ is uncount.; $\{ \text{all infinite bin. seq.} \}$ is uncount.
- $f:\Sigma^*\to\Sigma^*$ is **computable** if $\exists M_{\textsf{TM}}:\forall w\in \Sigma^*$, $M$ halts on $w$ and outputs $f(w)$ on its tape.
- If $A\leq_{\text{m}}B$ and $B\in \text{TD}$, then $A\in \text{TD}$.
- If $A\leq_{\text{m}}B$ and $A\notin \text{TD}$, then $B\not\in \text{TD}$.
- If $A\leq_{\text{m}}B$ and $B\in \text{TR}$, then $A\in \text{TR}$.
- If $A\leq_{\text{m}}B$ and $A\not\in \text{TR}$, then $B\not\in \text{TR}$.
- (transitivity) If $A\leq_{\text{m}}B$ and $B\leq_{\text{m}}C$, then $A\leq_{\text{m}}C$.  
- $A \leq_{\mathrm{m}} B \iff \overline{A} \leq_{\mathrm{m}} \overline{B}$ (esp. $A\leq_{\text{m}}\overline{A}\iff \overline{A}\leq_{\text{m}}A$)
- If $A\leq_{\text{m}}\overline{A}$ and $A\in\text{TR}$, then $A\in\text{TD}$ 