
# $\small{L\in {\text{\textbf{T}uring-\textbf{D}ecidable}} \iff (L\in {\text{\textbf{T}uring-\textbf{R}ecognizable}} \textbf{ and  } \overline{L}\in{\text{\textbf{T}uring-\textbf{R}ecognizable}} )\iff\exists\,M_{\textsf{TM}}\text{ decides }L}$.

- (**TM**) $M=(Q,\underset{ \textsf{input} }{ \Sigma }\subseteq \Gamma,\underset{ \textsf{tape} }{ \Gamma },\delta,q_0,q_{\text{🅐}},q_{\text{🅁}})$, where $\sqcup\in \Gamma$, $\sqcup\notin \Sigma$, $q_{\text{🅁}}\neq q_{\text{🅐}}$, $\delta:Q\times \Gamma\longrightarrow Q\times \Gamma\times \{\text{L},\text{R}\}$
- (**Turing-Recognizable** $(\mathbf{TR})$) 🅐 if $w\in L$, 🅁/loops if $w\notin L$; $A$ is **co-recognizable** if $\overline{A}$ is recognizable.
- (**Turing-Decidable** $(\mathbf{TD})$) 🅐 if $w\in L$, 🅁 if $w\notin L$.
- $L \in\text{TR}\iff L\leq_{\text{m}}A_{\textsf{TM}}$. 
- $(A\in\text{TR}\land |A|=\infty)\Rightarrow \exists B\in \text{TD}:(B\subseteq L \land |B|=\infty)$ 
- $L\in {\text{TD}} \iff L^{\mathcal{R}}\in {\text{TD}}$.
- (**decider**) TM that halts on all inputs. 
- (**Rice**) If $P=\{ \langle M \rangle:L(M) \text{ has property }\mathcal{P}\}$ s.t. (**1**) $\forall M_1,M_2:L(M_1)=L(M_2)\Rightarrow(\langle M_1\rangle\in P\Leftrightarrow \langle M_2\rangle\in P)$. (**2**) $P$ is nontrivial. Then $P \notin \mathrm{TD}$. (_e.g._ $\mathit{INFINITE}_{\textsf{TM}}$, $\mathit{ALL}_{\textsf{TM}}$, $\mathit{E}_{\textsf{TM}}$, $\{ \langle M_{\textsf{TM}}\rangle: 1\in L(M) \}$)
- $\{ \text{all }\textsf{TM}\text{s} \}$ is count.; $\Sigma^*$ is count. (finite $\Sigma$); $\{ \text{all lang.} \}$ is uncount.; $\{ \text{all infinite bin. seq.} \}$ is uncount.
- If $A\leq_{\text{m}}B$ and $B\in \text{TD}$, then $A\in \text{TD}$.
- If $A\leq_{\text{m}}B$ and $A\notin \text{TD}$, then $B\not\in \text{TD}$.
- If $A\leq_{\text{m}}B$ and $B\in \text{TR}$, then $A\in \text{TR}$.
- If $A\leq_{\text{m}}B$ and $A\not\in \text{TR}$, then $B\not\in \text{TR}$.
- (transitivity) If $A\leq_{\text{m}}B$ and $B\leq_{\text{m}}C$, then $A\leq_{\text{m}}C$.  
- $A \leq_{\mathrm{m}} B \iff \overline{A} \leq_{\mathrm{m}} \overline{B}$ (esp. $A\leq_{\text{m}}\overline{A}\iff \overline{A}\leq_{\text{m}}A$)
- If $A\leq_{\text{m}}\overline{A}$ and $A\in\text{TR}$, then $A\in\text{TD}$ 
---
- $\small\text{REGULAR}\subset \text{CFL}  \subset \text{\textbf{T}uring-\textbf{D}ecidable} \subset \text{\textbf{T}uring-\textbf{R}ecognizable}$ 
- (**not TR**) $\overline{\mathit{A}_{\textsf{TM}}}$, $\overline{\mathit{EQ}_{\textsf{TM}}}$, $\mathit{EQ}_{\textsf{CFG}}$, $\overline{\mathit{HALT}_{\textsf{TM}}}$, $\mathit{REG}_{\textsf{TM}}$, $E_{\textsf{TM}}$, $\mathit{EQ}_{\textsf{TM}}$, $\mathit{ALL}_{\textsf{CFG}}$, $\mathit{EQ}_{\text{CFG}}$
- (**TR, but not TD**) $\mathit{A}_{\textsf{TM}}$, $\mathit{HALT}_{\textsf{TM}}$, $\overline{\mathit{EQ}_{\textsf{CFG}}}$, $\overline{E_{\textsf{TM}}}$, $\{\langle M,k \rangle \mid \exists x \ (M(x) \text{ halts in } \geq k \text{ steps})\}$
- (**TD**) $A_{\textsf{DFA}}$, $A_{\textsf{NFA}}$, $A_{\textsf{REX}}$, $E_{\textsf{DFA}}$, $\mathit{EQ}_{\textsf{DFA}}$, $A_{\textsf{CFG}}$, $E_{\textsf{CFG}}$, $A_{\textsf{LBA}}$
___
**Deciders**: Examples
- $\mathit{INFINITE}_{\textsf{DFA}}$: "On $\langle D \rangle$: $n:=|Q_{D}|$; const. $D_{1}$ s.t. $L(D_{1})=\Sigma^{\geq n}$; const. $D_{2}$ s.t. $L(D_{2})=L(D)\cap L(D_{1})$; if $\langle D_{2}\rangle \not\in{E}_{\textsf{DFA}}$, 🅐; O/W, 🅁"
- $\mathit{ALL}_{\textsf{DFA}}$: "On $\langle D\rangle$: const. $D^\complement$ s.t. $L(D^\complement)=L(D)^\complement$ (swap accept and non-accept); if $D^\complement \in E_{\textsf{DFA}}$, 🅐; O/W 🅁" 
- $\{ \langle D\rangle \mid \not\exists w\in L(D):\#_{1}(w)\text{ is odd}  \}$: "On $\langle D\rangle$: const. $D_{1}$ s.t. $L(D_{1})=\{ w\mid \#_{1}(w)\text{ is odd} \}$; const. $D_{2}$ s.t. $L(D_{2})=L(D)\cap L(D_{1})$; if $\langle D_{2}\rangle \in {E}_{\textsf{DFA}}$ 🅐; O/W 🅁"
- $\{ \langle r,s \rangle \mid r,s \in \text{Reg}(\Sigma),L(r)\subseteq L(s) \}$: "On $\langle r,s \rangle$: const. $D$ s.t. $L(D)=L(r)\cap \overline{L(s)}$; if $\langle D\rangle \in {E}_{\textsf{DFA}}$, 🅐; O/W, 🅁"
- $\{ \langle D,r \rangle \mid L(D)=L(r) \}$: "On $\langle D,r\rangle$: convert $r$ to DFA $D_r$; if $\langle D,D_r\rangle \in {EQ}_{\textsf{DFA}}$, 🅐; O/W, 🅁"
- $\{ \langle D_{\textsf{DFA}}\rangle \mid L(D)=(L(D))^\mathcal{R} \}$: "On $\langle D\rangle$: const. $D^\mathcal{R}$ s.t. $L(D^\mathcal{R})=(L(D))^\mathcal{R}$; if $\langle D,D^\mathcal{R}\rangle \in {EQ}_{\textsf{DFA}}$), 🅐; O/W, 🅁"
- $\{\langle r\rangle \mid \exists x,y \in\Sigma^*:w=x 111y \in L(r)\}:$ "On $\langle r\rangle$: const. $D$ s.t. $L(D)\equiv\Sigma^*111\Sigma^*;$ const. $D_{1}$ s.t. $L(D_{1})=L(r)\cap L(D)$; if $L(D_{1})\not\in{E}_{\textsf{DFA}}$, 🅐; O/W 🅁"
- $\{\langle G,k\rangle : |L(G)|=k \in \mathbb{N}\cup \{ \infty \}\}$: “On $\langle G,k\rangle$: run ; if $\langle G \rangle \in\mathit{INFINITE}_{\textsf{CFG}}$: (if $k=\infty$, 🅐; O/W, 🅁). if $\langle G \rangle \not\in\mathit{INFINITE}_{\textsf{CFG}}$: (if $k=\infty$, 🅁; O/W, $m$ counts each $w\in\Sigma^{\le p}$ s.t. $w\in L(G)$, where $p$ is the pump. len.; if $m=k$, 🅐, O/W, 🅁)
- $A\varepsilon_{\textsf{CFG}}$: "On $\langle G\rangle$: If $\langle G,\varepsilon\rangle \in A_{\textsf{CFG}}$, 🅐; O/W, 🅁"
- $\mathit{INFINITE}_{\textsf{PDA}}$: "On $\langle P \rangle$: conv. $P$ to $G$; $p:=$ p.l. of $G$; set $G'\equiv L(G')=L(G)\cap \Sigma^{>p}$; If $\langle G' \rangle\notin E_{\textsf{CFG}}$, 🅐; O/W 🅁"
- $\{ \langle G\rangle :1^*\cap L(G)\neq \emptyset  \}$; "On $\langle G\rangle$: const. $G'$ s.t. $L(G')=1^* \cap L(G)$. (since $\mathrm{REGULAR}\cap \mathrm{CFL}\subseteq \mathrm{CFL}$); If $\langle G'\rangle \not\in E_{\textsf{CFG}}$, 🅐; O/W, 🅁"
-  $\{\langle M,k \rangle \mid \exists x \ (M(x) \text{ runs for} \geq k \text{ steps})\}$: "On $\langle M,k\rangle$: $(\forall w\in\Sigma^{\leq k+1}:$ if $M(w)$ not halt within $k$ steps, 🅐$)$; 🅁"
- $\{\langle M,k \rangle \mid \exists x \ (M(x) \text{ halts in} \leq k \text{ steps})\}$: "On $\langle M,k\rangle$: $(\forall w\in\Sigma^{\leq k+1}$: run $M(w)$ for $\leq k$ steps, if halts, 🅐$)$; 🅁" 
___
**Recognizers**: Examples
- $\overline{\mathit{EQ}_{\textsf{CFG}}}$: "On $\langle G_1,G_2\rangle$: (for each $w\in \Sigma^*$ (lexico.): If $\langle  G_1,w \rangle \in A_{\textsf{CFG}}$ and $\langle G_2,w\rangle \notin A_{\textsf{CFG}}$ (vice versa), 🅐);"
- $\overline{\mathit{E}_{\textsf{TM}}}$: "On $\langle M \rangle$: $\Sigma^*=\{ s_{1},s_{2},\dots \}$; $\forall i \in \mathbb{N}$: $\forall j\leq i$: Run $M(s_j)$ for $i$ steps, if accepts, 🅐;"
# Mapping Reduction (from $A$ to $B$): $A\leq_{\text{m}}B$ if $\exists f :\Sigma^*\to\Sigma^*:\forall w\in \Sigma^*,\,w\in A\iff f(w)\in B$ and $f$ is computable.

- $\mathit{A}_{\textsf{TM}}\leq_{\text{m}} \{ \langle M_{\textsf{TM}} \rangle \mid  L(M) = (L(M))^{\mathcal{R}} \};$ $f(\langle M,w\rangle)=\langle M'\rangle$, where $M'=$"On x, if $x\notin\{ 01,10 \}$, 🅁; if $x=01$, return $M(x)$; if $x=10$, 🅐;" 
- $\mathit{A}_{\textsf{TM}}\leq_{\text{m}} \{ \langle M_{\textsf{TM}} \rangle \mid  \varepsilon \in L(M) \};$ $f(\langle M,w\rangle) = \langle M' \rangle$ where $M'=$"On $x$, if $x\neq \varepsilon$, 🅐; O/W return $M(w)$"
- ${\mathit{A}_{\textsf{TM}}} \leq_{\mathrm{m}} L=\{ \langle \underset{ \textsf{TM} }{ M },\underset{ \textsf{DFA} }{ D }\rangle \mid L(M)=L(D) \};$ $f(\langle M,w\rangle)=\langle M',D\rangle$, where $M'=$"On $x$: if $x=w$ return $M(x)$; O/W, 🅁;" $D$ is DFA s.t. $L(D)=\{w\}.$ 
- $A\leq_{\text{m}} \mathit{HALT}_{\textsf{TM}};$ $f(w)=\langle M,\varepsilon\rangle$, where $M=$"On $x$: if $w\in A$, halt; if $w\notin A$, loop;"  
- $\mathit{A}_{\textsf{TM}}\leq_{\text{m}} \{ \langle M \rangle \mid L(M) \text{ is CFL} \};$ $f(\langle M,w\rangle)=\langle N \rangle$, where $N=$"On $x$: if $x=a^n b^nc^n$, 🅐; O/W, return $M(w)$;" 
- $A\leq_{\text{m}} B=\{ 0w:w\in A \}\cup \{ 1w:w\notin A \};$ $f(w)=0w$.
- $\mathit{A}_{\textsf{TM}}\leq_{\text{m}} \mathit{HALT}_{\textsf{TM}};$ $f(\langle M,w\rangle)=\langle M',w\rangle$, where $M'=$"On $x$: if $M(x)$ accepts, 🅐. If rejects, loop"
- $\mathit{HALT}_{\textsf{TM}}\leq_{\text{m}} \mathit{A}_{\textsf{TM}};$ $f(\langle M,w\rangle)=\langle M',\langle M,w\rangle\rangle$, where $M'=$"On $\langle X,x\rangle$: if $X(x)$ halts, 🅐;" 
- $E_{\textsf{TM}} \leq_{\text{m}} \mathit{USELESS}_{\textsf{TM}};\,$ $f(\langle M \rangle) = \langle M, q_{\text{🅐}} \rangle$
- $E_{\textsf{TM}} \leq_{\text{m}} \mathit{EQ}_{\textsf{TM}};\,$ $f(\langle M \rangle) = \langle M,M'\rangle$, $M'=$"On $x$: 🅁"
- $\mathit{A}_{\textsf{TM}} \leq_{\text{m}}\mathit{REGULAR}_{\textsf{TM}};$ $f(\langle M,w\rangle)=\langle M'\rangle$, $M'=$"On $x\in \{ 0,1 \}^*$: if $x=0^n1^n$, 🅐; O/W, return $M(w)$;" 
- $\mathit{A}_{\textsf{TM}} \leq_{\text{m}}\mathit{EQ}_{\textsf{TM}};\quad$ $f(\langle M, w \rangle) = \langle M_1, M_2 \rangle$, where $M_1=$"🅐 all"; $M_2=$"On $x$: return $M(w)$;" 
- $\mathit{A}_{\textsf{TM}} \leq_{\text{m}} \overline{EQ_{\textsf{TM}}};\quad$ $f(\langle M, w \rangle) = \langle M_1, M_2 \rangle$, where $M_1=$"🅁 all"; $M_2=$"On $x$: return $M(w)$;"
- $\mathit{A}_{\textsf{TM}} \leq_{\text{m}} \{ \langle M\rangle : M\text{ halts on }\langle M\rangle \};$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $M(w)$ accepts, 🅐; if rejects, loop;" 
- $\mathit{ALL}_{\textsf{CFG}} \leq_{\text{m}}\mathit{EQ}_{\textsf{CFG}};$ $f(\langle G \rangle) = \langle G, H \rangle$, s.t. $L(H)=\Sigma^*.$
- $\mathit{A}_{\textsf{TM}} \leq_{\text{m}}\{ \langle M_{\textsf{TM}} \rangle :  |L(M)|=1 \};$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $x=x_0$, return $M(w)$; O/W, 🅁;" (where $x_0\in \Sigma^*$ is fixed). 
- $\overline{\mathit{A}_{\textsf{TM}}} \leq_{\text{m}} E_{\textsf{TM}};$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $x\neq w$, 🅁; O/W, return $M(w)$;" 
- $\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : |L(M)| \leq 3\};$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: 🅐 if $M(w)$ halts" 
- ${\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : |L(M)| \geq 3\};$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: 🅐 if $M(w)$ halts" 
- $\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M\rangle : M\text{ 🅐 even num.}\};f(\langle M, w \rangle) = \langle M' \rangle$, $M'=$"On $x$: 🅁 if $M(w)$ halts within $|x|$. O/W, 🅐" 
- $\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : L(M)\text{ is finite}\};$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: 🅐 if $M(w)$ halts"
- $\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : L(M)\text{ is infinite}\};$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: 🅁 if $M(w)$ halts within $|x|$ steps. O/W, 🅐" 
- ${\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{1},M_{2}\rangle : \varepsilon \in L(M_{1})\cup L(M_{2})\};$ $f(\langle M, w \rangle) = \langle M',M' \rangle$, $M'=$"On $x$: 🅐 if $M(w)$ halts"
- ${\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \overline{E_{\textsf{TM}}};$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $x\neq w$ 🅁; else, 🅐 if $M(w)$ halts"
- $\mathit{HALT}_{\textsf{TM}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle \mid  \exists\,x\ :M(x)\text{ halts in }>|\langle M\rangle|\text{ steps})\};$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $M(w)$ halts, make $|\langle M \rangle|+1$ steps and then halt; O/W, loop"

# $\small{\textbf{P}=\bigcup_{k \in \mathbb{N}}\mathsf{TIME}(n^k)\subseteq\,\textbf{NP}=\bigcup_{k \in \mathbb{N}}\mathsf{NTIME}(n^k)=\set{L \mid L \text{ is decidable by a PT verifier}}\supseteq\textbf{NP-complete}=\{B\mid B\in\mathrm{NP} , \forall A\in\mathrm{NP},A\leq_{\mathrm{P}} B\}.}$
- If $A\leq_{\mathrm{P}} B$ and $B\in\mathrm{P}$, then $A\in\mathrm{P}$.
- $A\equiv_P B$ if $A\leq_{\mathrm{P}} B$ and $B\leq_{\mathrm{P}} A$.  $\equiv_P$ is an equiv. relation on $\mathrm{NP}.\quad$ $\mathrm{P}\setminus \{ \emptyset, \Sigma^* \}$ is an equiv. class of $\equiv_P$.
- $\mathit{ALL}_{\textsf{DFA}},{\tiny\mathit{CONNECTED}},\underset{ 3\text{-clique} }{ \mathit{TRIANGLE} },L(G_{\textsf{CFG}}),\overset{\mathit{directed}}{ \underset{s\to t}{\mathit{PATH}} }\in\mathrm{P}$
- $\mathit{CNF}_{2} \in \mathrm{P}$: ($\mathbf{algo.}$ $\forall x \in \phi$: (**1**) If $x$ occurs 1-2 times in same clause $\rightarrow$ remove cl.; (**2**) If $x$ is twice in 2 cl. $\rightarrow$ remove both cl.; (**3**) Similar to (2) for $\overline{x}$; (**4**) Replace any $(x \vee y)$, $(\neg x \vee z)$ with $(y \vee z)$; ($y,z$ may be $\varepsilon$); (**5**) If $(x) \wedge (\neg x)$ found, 🅁. (**6**) If $\phi=\varepsilon$, 🅐;)
- $\mathit{CLIQUE}$, $\mathit{SUBSET\text{-}SUM}$, $\mathit{SAT}$, $\mathit{3SAT}$, $\overset{\mathit{VERTEX}}{\small\mathit{COVER}}$, $\mathit{HAMPATH}$, $\mathit{UHAMATH}$, $\mathit{3COLOR}\in\text{NP-complete}.\quad$ $\emptyset,\Sigma^*\notin\text{NP-complete}$. 
- If $B\in\text{NP-complete}$ and $B\in\mathrm{P}$, then $\mathrm{P}=\mathrm{NP}$.
- If $B\in\text{NPC}$ and $C \in \mathrm{NP}$ s.t. $B\leq_{\mathrm{P}} C$, then $C\in\text{NPC}$.
- If $\mathrm{P}=\mathrm{NP}$, then $\forall A\in \mathrm{P}\setminus\{\emptyset,\Sigma^*\},\,A\in \text{NP-complete}$. 

# Polytime Reduction (from $A$ to $B$):  $A\leq_{\text{P}}B$ if $\exists f :\Sigma^*\to\Sigma^*:\forall w\in \Sigma^*,\,w\in A\iff f(w)\in B$ and $f$ is polytime computable. 

- $\mathit{SAT} \leq_{\mathrm{P}} \mathit{DOUBLE\text{-}SAT};\quad$ $f(\phi) = \phi \land (x \lor \neg x)$
- $\mathit{3SAT} \leq_{\mathrm{P}} \mathit{4SAT};\quad$ $f(\phi) = \phi'$, where $\phi'$ is obtained from the 3cnf $\phi$ by adding a new var. $x$ to each clause, and adding a new clause $(\neg x \lor \neg x \lor \neg x \lor \neg  x)$. 
- $\mathit{3SAT} \leq_{\mathrm{P}}\mathit{CNF}_{3};$ $f(\langle\phi\rangle)=\phi'$. If $\#_{\phi}(x)=k>3$, replace $x$ with $x_1,\dots x_{k}$, and add $(\overline{x_{1}}\lor x_{2})\land\cdots\land(\overline{x_{k}}\lor x_{1})$.
- $\mathit{3SAT} \leq_{\mathrm{P}} \mathit{CLIQUE};$ $f(\phi) = \langle G,k\rangle$. where $\phi$ is 3cnf with $k$ clauses. Nodes represent literals. Edges connect all pairs except those 'from the same clause' or 'contradictory literals'.
- $\mathit{SUBSET\text{-}SUM} \leq_{\mathrm{P}} \mathit{SET\text{-}PARTITION};\quad$ $f(\langle x_1, \dots, x_m, t \rangle) = \langle x_1, \dots, x_m, S-2t\rangle$, where $S$ sum of $x_1, \dots, x_m$, and $t$ is the target subset-sum.
- $\mathit{3SAT} \leq_{\mathrm{P}} \overset{ \textsf{almost} }{ \mathit{3SAT} };f( \phi) = \phi'=\phi \land(x\lor x\lor x)\land(\overline{x}\lor\overline{x}\lor\overline{x})$
- $\mathit{3COLOR} \leq_{\mathrm{P}} \overset{ \textsf{almost} }{ \mathit{3COLOR} };$ $f(\langle G \rangle) = \langle G' \rangle,\,G'=G\cup K_4$
- $\overset{\mathit{VERTEX}}{\small\mathit{COVER}}_{k} \leq_{\mathrm{P}} \mathit{WVC};f(\langle G,k\rangle)= (G,w,k),\forall v\in V, w(v)=1$
- (dir.) $\mathit{HAM\text{-}PATH}\leq_{\text{P}}\mathit{2HAM\text{-}PATH};\quad$ $f(\langle G,s,t\rangle)=\langle G',s',t'\rangle$, $V'=V\cup \{s',t',a,b,c,d\},$ ${E' =E\cup {\{(s',a),\,(a,b),\,(b,s)\} \cup \{(s',b),\,(b,a),\,(a,s)\}}}$   $\cup\, {\{(t,c),\,(c,d),\,(d,t')\} \cup \{(t,d),\,(d,c),\,(c,t')\}}.$
- (undir.) ${ \mathit{CLIQUE}_{k} } \leq_{\mathrm{P}} \underset{ \vert{V}\vert/2\text{-clique} }{ \mathit{HALF\text{-}CLIQUE} };\quad$ $f(\langle G=(V,E),k\rangle)= \langle G'=(V',E')\rangle$, if $k=\frac{\mid V\mid}{2}$, $E=E'$, $V'=V$. if $k> \frac{\mid V\mid}{2}$, $V'=V\cup \{ j=2k-{\vert V \vert} \text{ new nodes} \}$. if $k< \frac{\vert V \vert}{2}$, $V'=V\cup \{ j=\vert V\vert-2k \text{ new nodes} \}$ and $E'=E\cup \{ \text{edges for new nodes} \}$
- $\underset{s \leadsto t}{\mathit{HAM\text{-}PATH}}\leq_{\text{P}}\mathit{HAM\text{-}CYCLE};$ $f(\langle G,s,t\rangle)=\langle G',s,t\rangle$, $V'=V\cup \{ x \}$, $E'=E\cup \{ (t,x),(x,s) \}$
- $\mathit{HAM\text{-}CYCLE}\leq_{\text{P}} \mathit{UHAMCYCLE};$ $f(\langle G\rangle)=\langle G'\rangle$. For each $u,v\in V$: $u$ is replaced by $u_{\textsf{in}},u_{\textsf{mid}},u_{\textsf{out}}$; $(v,u)$ replaced by $\{v_{\textsf{out}},u_{\textsf{in}}\},\{u_{\textsf{in}},u_{\textsf{mid}}\}$; and $(u,v)$ by $\{u_{\textsf{out}},v_{\textsf{in}}\},\{ u_{\textsf{mid}},u_{\textsf{out}} \}$. 
- $\small{\mathit{UHAMPATH} \leq_{\text{P}} \mathit{PATH}_{\geq k};f(\langle G, a, b \rangle) = \langle G, a, b, k=|V|-1 \rangle}$
- $\overset{\mathit{VERTEX}}{\small\mathit{COVER}}\leq_{\text{p}}\mathit{CLIQUE};f(\langle G, k \rangle) = \langle G^{\complement}=(V, E^{\complement}), |V| - k \rangle$
- $\mathit{CLIQUE}_{k} \leq_{\mathrm{P}}\{ \langle G, t\rangle : G \text{ has }2t\text{-clique} \};$ $f(\langle G, k \rangle) = \langle G', t = \lceil k/2 \rceil \rangle$, $G'=G$ if $k$ is even; $G'=G\cup \{v\}$ ($v$ connected to all $G$ nodes) if $k$ is odd.
- $\mathit{CLIQUE}_{k} \leq_{\mathrm{P}}\overset{\textsf{almost}}{\mathit{CLIQUE}_{k}};$ $f(\langle G, k \rangle) = \langle G', k+2 \rangle$, $G'=G\cup \{ v_{n+1},v_{n+2} \}$; $v_{n+1},v_{n+2}$ are con. to all $V$
- $\overset{\mathit{VERTEX}}{\small\mathit{COVER}}_{k} \leq_{\mathrm{P}}\mathit{DOMINATING\text{-}SET}_{k} ;\quad$ $f(\langle G, k \rangle) = \langle G', k \rangle$, where $V'=\{ \text{non-isolated nodes in }V \}\cup \{ v_{e}:e\in E \}$, $E'=E\cup \{ (v_{e},u),(v_{e},w): e=(u,w)\in E \}$.
- $\mathit{CLIQUE} \leq_{\mathrm{P}} \mathit{INDEP\text{-}SET};$ $f(\langle G,k\rangle)=\langle G^{\complement},k\rangle$
- $\overset{\mathit{VERTEX}}{\small\mathit{COVER}}\leq_{\mathrm{P}} \underset{ \langle \mathcal{U}, \mathcal{S}, k \rangle }{ \overset{\mathit{SET}}{\small\mathit{COVER}} } = \{   \exists \mathcal{C} \subseteq \mathcal{S},\, |\mathcal{C}| \le k,\, \bigcup_{A \in \mathcal{C}} A = \mathcal{U} \};$ $f(\langle G,k\rangle)=\langle \mathcal{U}=E,\mathcal{S}=\{ S_1,\ldots,S_n \},k\rangle$, where $n=|V|$, $S_u=\{\text{edges incident to } u\in V\}$. 
- $\mathit{INDEP\text{-}SET}\leq_{\mathrm{P}} \overset{\mathit{VERTEX}}{\small\mathit{COVER}};$ $f(\langle G,k\rangle)=\langle G,|V|-k\rangle$
- $\overset{\mathit{VERTEX}}{\small\mathit{COVER}}\leq_{\mathrm{P}} \mathit{INDEP\text{-}SET};$ $f(\langle G,k\rangle)=\langle G,|V|-k\rangle$
- $\mathit{HAM\text{-}CYCLE}\leq_{\mathrm{P}} \{\langle G,w,k\rangle: \exists\text{ hamcycle of weight}\leq k \};$ $f(\langle G\rangle)=\langle G',w,0\rangle$, where $G'=(V,E')$, $E'=\{ (u,v)\in E:u\neq v\}$, $w(u,v)=1$ if $(u,v)\in E$, $w(u,v)=0$ if $(u,v)\notin E$.
- ${\small{\mathit{3COLOR}\leq_{\mathrm{P}} \mathit{SCHEDULE}}};f(\langle G\rangle)=\langle F=V,S=E,h=3\rangle$

