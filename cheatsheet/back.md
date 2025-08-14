# $\small\text{FINITE}\subset\text{REGULAR}\subset \text{CFL} \subset \text{CSL} \subset {\text{DECIDABLE}} \subset  {\text{RECOGNIZABLE}}$ 

- (**unrecognizable**) $\overline{\mathit{A}_{\textsf{TM}}}$, $\overline{\mathit{EQ}_{\textsf{TM}}}$, $\mathit{EQ}_{\textsf{CFG}}$, $\overline{\mathit{HALT}_{\textsf{TM}}}$, $\mathit{REG}_{\textsf{TM}}=\{ \langle M\rangle :L(M) \text{ is regular}\}$, $E_{\textsf{TM}}$, $\mathit{EQ}_{\textsf{TM}}$, $\mathit{ALL}_{\textsf{CFG}}$, $\mathit{EQ}_{\text{CFG}}$
- (**recognizable but undecidable**) $\mathit{A}_{\textsf{TM}}$, $\mathit{HALT}_{\textsf{TM}}$, $\overline{\mathit{EQ}_{\textsf{CFG}}}$, $\overline{E_{\textsf{TM}}}$, $\{\langle M,k \rangle \mid \exists x \ (M(x) \text{ halts in } \geq k \text{ steps})\}$
- (**decidable**) $A_{\textsf{DFA}}$, $A_{\textsf{NFA}}$, $A_{\textsf{REX}}$, $E_{\textsf{DFA}}$, $\mathit{EQ}_{\textsf{DFA}}$, $A_{\textsf{CFG}}$, $E_{\textsf{CFG}}$, $A_{\textsf{LBA}}$, $\mathit{ALL}_{\textsf{DFA}}=\{\langle D\rangle \mid L(D)=\Sigma^*\}$, $A\varepsilon_{\textsf{CFG}}=\{\langle G\rangle \mid \varepsilon \in L(G)\}$
- $\large\textbf{Examples of Deciders:}$ 
- $\mathrm{INFINITE}_{\textsf{DFA}}$: "On $n$-state DFA $\langle A \rangle$: const. DFA $B$ s.t. $L(B)=\Sigma^{\geq n}$; const. DFA $C$ s.t. $L(C)=L(A)\cap L(B)$; if $L(C)\neq\emptyset$ (via ${E}_{\textsf{DFA}}$) 🅐; O/W, 🅁" 
- $\{ \langle D\rangle \mid \not\exists w\in L(D):\#_{1}(w)\text{ is odd}  \}$: "On $\langle D\rangle$: const. DFA $A$ s.t. $L(A)=\{ w\mid \#_{1}(w)\text{ is odd} \}$; const. DFA $B$ s.t. $L(B)=L(D)\cap L(A)$; if $L(B)=\emptyset$ (via ${E}_{\textsf{DFA}}$) 🅐; O/W, 🅁"
- $\{ \langle R,S \rangle \mid R,S \text{ are regex},L(R)\subseteq L(S) \}$: "On $\langle R,S \rangle$: const. DFA $D$ s.t. $L(D)=L(R)\cap \overline{L(S)}$; if $L(D)=\emptyset$ (via ${E}_{\textsf{DFA}}$), 🅐; O/W, 🅁"
- $\{ \langle D_{\textsf{DFA}},R_{\textsf{REX}} \rangle \mid L(D)=L(R) \}$: "On $\langle D,R\rangle$: convert $R$ to DFA $D_R$; if $L(D)=L(D_R)$ (via ${EQ}_{\textsf{DFA}}$), 🅐; O/W, 🅁"
- $\{ \langle D_{\textsf{DFA}}\rangle \mid L(D)=(L(D))^\mathcal{R} \}$: "On $\langle D\rangle$: const. DFA $D^\mathcal{R}$ s.t. $L(D^\mathcal{R})=(L(D))^\mathcal{R}$; if $L(D)=L(D^\mathcal{R})$ (via ${EQ}_{\textsf{DFA}}$), 🅐; O/W, 🅁"
-  $\{\langle M,k \rangle \mid \exists x \ (M(x) \text{ runs for} \geq k \text{ steps})\}$: "On $\langle M,k\rangle$: (foreach $w\in\Sigma^{\leq k+1}$: if $M(w)$ not halt within $k$ steps, 🅐); O/W, 🅁"
- $\{\langle M,k \rangle \mid \exists x \ (M(x) \text{ halts in} \leq k \text{ steps})\}$: "On $\langle M,k\rangle$: (foreach $w\in\Sigma^{\leq k+1}$: run $M(w)$ for $\leq k$ steps, if halts, 🅐); O/W, 🅁" 
- $\{\langle M_{\textsf{DFA}}\rangle \mid L(M) = \Sigma^*\}$: "On $\langle M\rangle$: const. DFA $M^{\complement}=(L(M))^{\complement}$; if $L(M^{\complement}) = \emptyset$ (via $E_{\textsf{DFA}}$), 🅐; O/W 🅁."
- $\{\langle R_{\textsf{REX}}\rangle \mid \exists s,t \in\Sigma^*:w=s 111t \in L(R)\}:$ "On $\langle R\rangle$: const. DFA $D$ s.t. $L(D)=\Sigma^*111\Sigma^*;$ const. DFA $C$ s.t. $L(C)=L(R)\cap L(D)$; if $L(C)\neq\emptyset$ (via ${E}_{\textsf{DFA}}$), 🅐; O/W 🅁." 
# Mapping Reduction: $A\leq_{\text{m}}B$ if $\exists f :\Sigma^*\to\Sigma^*:\forall w\in \Sigma^*,\,w\in A\iff f(w)\in B$ and $f$ is computable.

- $\mathit{A}_{\textsf{TM}}\leq_{\text{m}} \{ \langle M_{\textsf{TM}} \rangle \mid  L(M) = (L(M))^{\mathcal{R}} \};$ $f(\langle M,w\rangle)=\langle M'\rangle$, where $M'=$"On x, if $x\notin\{ 01,10 \}$, 🅁; if $x=01$, return $M(x)$; if $x=10$, 🅐;" 
- ${\mathit{A}_{\textsf{TM}}} \leq_{\mathrm{m}} L=\{ \langle \underset{ \textsf{TM} }{ M },\underset{ \textsf{DFA} }{ D }\rangle \mid L(M)=L(D) \};$ $f(\langle M,w\rangle)=\langle M',D\rangle$, where $M'=$"On $x$: if $x=w$ return $M(x)$; O/W, 🅁;" $D$ is DFA s.t. $L(D)=\{w\}.$ 
- $A\leq_{\text{m}} \mathit{HALT}_{\textsf{TM}};$ $f(w)=\langle M,\varepsilon\rangle$, where $M=$"On $x$: if $w\in A$, halt; if $w\notin A$, loop;"  
- $\mathit{A}_{\textsf{TM}}\leq_{\text{m}} CFL_{\textsf{TM}}=\{ \langle M \rangle \mid L(M) \text{ is CFL} \};$ $f(\langle M,w\rangle)=\langle N \rangle$, where $N=$"On $x$: if $x=a^n b^nc^n$, 🅐; O/W, return $M(w)$;" 
- $A\leq_{\text{m}} B=\{ 0w:w\in A \}\cup \{ 1w:w\notin A \};$ $f(w)=0w$.
- $E_{\textsf{TM}} \leq_{\text{m}} \mathit{USELESS}_{\textsf{TM}};\,$ $f(\langle M \rangle) = \langle M, q_{\text{🅐}} \rangle$
- $\mathit{A}_{\textsf{TM}} \leq_{\text{m}}\mathit{EQ}_{\textsf{TM}};\quad$ $f(\langle M, w \rangle) = \langle M_1, M_2 \rangle$, where $M_1=$"🅐 all"; $M_2=$"On $x$: return $M(w)$;" 
- $\mathit{A}_{\textsf{TM}} \leq_{\text{m}} \overline{EQ_{\textsf{TM}}};\quad$ $f(\langle M, w \rangle) = \langle M_1, M_2 \rangle$, where $M_1=$"🅁 all"; $M_2=$"On $x$: return $M(w)$;"
- $\mathit{ALL}_{\text{CFG}} \leq_{\text{m}}\mathit{EQ}_{\text{CFG}};$ $f(\langle G \rangle) = \langle G, H \rangle$, s.t. $L(H)=\Sigma^*.$
- $\mathit{A}_{\textsf{TM}} \leq_{\text{m}}\{ \langle M_{\textsf{TM}} \rangle :  |L(M)|=1 \};$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $x=x_0$, return $M(w)$; O/W, 🅁;" (where $x_0\in \Sigma^*$ is fixed). 
- $\overline{\mathit{A}_{\textsf{TM}}} \leq_{\text{m}} E_{\textsf{TM}};\quad$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $x\neq w$, 🅁; O/W, return $M(w)$;" 
- $\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : |L(M)| \leq 3\};\quad$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: 🅐 if $M(w)$ halts" 
- ${\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : |L(M)| \geq 3\};\quad$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: 🅐 if $M(w)$ halts" 
- $\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : M\text{ 🅐 all even num.}\};\quad$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: 🅁 if $M(w)$ halts within $|x|$. O/W, 🅐" 
- $\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : L(M)\text{ is finite}\};\quad$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: 🅐 if $M(w)$ halts"
- $\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : L(M)\text{ is infinite}\};\quad$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: 🅁 if $M(w)$ halts within $|x|$ steps. O/W, 🅐" 
- ${\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{1},M_{2}\rangle : \varepsilon \in L(M_{1})\cup L(M_{2})\};\quad$ $f(\langle M, w \rangle) = \langle M',M' \rangle$, where $M'=$"On $x$: 🅐 if $M(w)$ halts"
- ${\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \overline{E_{\textsf{TM}}};\quad$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $x\neq w$ 🅁; else, 🅐 if $M(w)$ halts"
- $\mathit{HALT}_{\textsf{TM}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle \mid  \exists\,x\ :M(x)\text{ halts in }>|\langle M\rangle|\text{ steps})\};$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $M(w)$ halts, make $|\langle M \rangle|+1$ steps and then halt; O/W, loop"
# $\small{\textbf{P}=\bigcup_{k \in \mathbb{N}}\mathsf{TIME}(n^k)\subseteq\,\textbf{NP}=\bigcup_{k \in \mathbb{N}}\mathsf{NTIME}(n^k)=\set{L \mid L \text{ is decidable by a PT verifier}}\supseteq\textbf{NP-complete}=\{B\mid B\in\mathrm{NP} , \forall A\in\mathrm{NP},A\leq_{\mathrm{P}} B\}.}$

- ((**Running time**) decider $M$ is a **$f(n)$-time TM**.) $f:\mathbb{N} \to \mathbb{N}$, where $f(n)$ is the max. num. of steps that DTM (or NTM) $M$ takes on any $n$-length input (and any branch of any $n$-length input. resp.).
- $\mathsf{TIME}(t(n))=\set{L \mid L \text{ is dec. by }O(t(n))\text{ DTM}}$.
- $\mathsf{NTIME}(t(n))=\set{L \mid L \text{ is dec. by }O(t(n))\text{ NTM}}$.
- (**verifier** for $L$) TM $V$ s.t. $L=\{w\mid \exists c : V(\langle w,c\rangle)=\textsf{🅐} \};$ (**certificate** for $w\in L$) str. $c$ s.t. $V(\langle w,c\rangle)=\textsf{🅐}$.
- $f:\Sigma^*\to\Sigma^*$ is **PT computable** if there exists a PT TM $M$ s.t. for every $w\in\Sigma^*$, $M$ halts with $f(w)$ on its tape.
- If $A\leq_{\mathrm{P}} B$ and $B\in\mathrm{P}$, then $A\in\mathrm{P}$.
- If $A\leq_{\mathrm{P}} B$ and $B\leq_{\mathrm{P}} A$, then $A$ and $B$ are **PT equivalent**, denoted $A\equiv_P B.\quad$ $\equiv_P$ is an equiv. relation on $\mathrm{NP}.\quad$ $\mathrm{P}\setminus \{ \emptyset, \Sigma^* \}$ is an equiv. class of $\equiv_P$.
- $\mathit{ALL}_{\textsf{DFA}}$, $\mathit{CONNECTED}$, $\underset{ 3\text{-clique} }{ \mathit{TRIANGLE} }$, $L(G_{\textsf{CFG}})$, $\mathit{RELPRIME}$, $\overset{\mathit{directed}}{ \underset{s\to t}{\mathit{PATH}} }\in\mathrm{P}$
- $\mathit{CLIQUE}$, $\mathit{SUBSET\text{-}SUM}$, $\mathit{SAT}$, $\mathit{3SAT}$, $\overset{\mathit{VERTEX}}{\small\mathit{COVER}}$, $\mathit{HAMPATH}$, $\mathit{UHAMATH}$, $\mathit{3COLOR}\in\text{NP-complete}.\quad$ $\emptyset,\Sigma^*\notin\text{NP-complete}$. 
- If $B\in\text{NP-complete}$ and $B\in\mathrm{P}$, then $\mathrm{P}=\mathrm{NP}$.
- If $B\in\text{NPC}$ and $C \in \mathrm{NP}$ s.t. $B\leq_{\mathrm{P}} C$, then $C\in\text{NPC}$.
- If $\mathrm{P}=\mathrm{NP}$, then $\forall A\in \mathrm{P}\setminus\{\emptyset,\Sigma^*\},\,A\in \text{NP-complete}$. 

# Polytime Reduction:  $A\leq_{\text{P}}B$ if $\exists f :\Sigma^*\to\Sigma^*:\forall w\in \Sigma^*,\,w\in A\iff f(w)\in B$ and $f$ is polytime computable. 

- $\mathit{SAT} \leq_{\mathrm{P}} \mathit{DOUBLE\text{-}SAT};\quad$ $f(\phi) = \phi \land (x \lor \neg x)$
- $\mathit{3SAT} \leq_{\mathrm{P}} \mathit{4SAT};\quad$ $f(\phi) = \phi'$, where $\phi'$ is obtained from the CNF $\phi$ by adding a new var. $x$ to each clause, and adding a new clause $(\neg x \lor \neg x \lor \neg x \lor \neg  x)$. 
- $\mathit{SUBSET\text{-}SUM} \leq_{\mathrm{P}} \mathit{SET\text{-}PARTITION};\quad$ $f(\langle x_1, \dots, x_m, t \rangle) = \langle x_1, \dots, x_m, S-2t\rangle$, where $S$ sum of $x_1, \dots, x_m$, and $t$ is the target subset-sum.
- $\mathit{3COLOR} \leq_{\mathrm{P}} \overset{ \textsf{almost} }{ \mathit{3COLOR} };$ $f(\langle G \rangle) = \langle G' \rangle,\,G'=G\cup K_4$
- $\overset{\mathit{VERTEX}}{\small\mathit{COVER}}_{k} \leq_{\mathrm{P}} \mathit{WVC};f(\langle G,k\rangle)= (G,w,k),\forall v\in V(G), w(v)=1$
- (dir.) $\mathit{HAM\text{-}PATH}\leq_{\text{P}}\mathit{2HAM\text{-}PATH};\quad$ $f(\langle G,s,t\rangle)=\langle G',s',t'\rangle$, where $V'=V\cup \{s',t',a,b,c,d\},$ ${E' =E\cup {\{(s',a),\,(a,b),\,(b,s)\} \cup \{(s',b),\,(b,a),\,(a,s)\}}}$   $\cup\, {\{(t,c),\,(c,d),\,(d,t')\} \cup \{(t,d),\,(d,c),\,(c,t')\}}.$
- (undir.) ${ \mathit{CLIQUE}_{k} } \leq_{\mathrm{P}} \underset{ \vert{V}\vert/2\text{-clique} }{ \mathit{HALF\text{-}CLIQUE} };\quad$ $f(\langle G=(V,E),k\rangle)= \langle G'=(V',E')\rangle$, if $k=\frac{\mid V\mid}{2}$, $E=E'$, $V'=V$. if $k> \frac{\mid V\mid}{2}$, $V'=V\cup \{ j=2k-{\vert V \vert} \text{ new nodes} \}$. if $k< \frac{\vert V \vert}{2}$, $V'=V\cup \{ j=\vert V\vert-2k \text{ new nodes} \}$ and $E'=E\cup \{ \text{edges for new nodes} \}$
- (dir.) $\underset{s \leadsto t}{\mathit{HAM\text{-}PATH}}\leq_{\text{P}}\mathit{HAM\text{-}CYCLE};$ $f(\langle G,s,t\rangle)=\langle G',s,t\rangle$ where $V'=V\cup \{ x \}$, $E'=E\cup \{ (t,x),(x,s) \}$
- $\mathit{HAM\text{-}CYCLE}\leq_{\text{P}} \mathit{UHAMCYCLE};$ $f(\langle G\rangle)=\langle G'\rangle$. For each $u,v\in V$: $u$ is replaced by $u_{\textsf{in}},u_{\textsf{mid}},u_{\textsf{out}}$; $(v,u)$ replaced by $\{v_{\textsf{out}},u_{\textsf{in}}\},\{u_{\textsf{in}},u_{\textsf{mid}}\}$; and $(u,v)$ by $\{u_{\textsf{out}},v_{\textsf{in}}\},\{ u_{\textsf{mid}},u_{\textsf{out}} \}$. 
- $\mathit{UHAMPATH} \leq_{\text{P}} \mathit{PATH}_{\geq k};$ $f(\langle G, a, b \rangle) = \langle G, a, b, k=|V(G)|-1 \rangle$
- $\overset{\mathit{VERTEX}}{\small\mathit{COVER}}_{k}\leq_{\text{p}}\mathit{CLIQUE}_{k};\quad$ $f(\langle G, k \rangle) = \langle G^{\complement}=(V, E^{\complement}), |V| - k \rangle$
- $\mathit{CLIQUE}_{k} \leq_{\mathrm{P}}\{ \langle G, t\rangle : G \text{ has }2t\text{-clique} \};$ $f(\langle G, k \rangle) = \langle G', t = \lceil k/2 \rceil \rangle$, $G'=G$ if $k$ is even; $G'=G\cup \{v\}$ ($v$ connected to all $G$ nodes) if $k$ is odd.
- $\mathit{CLIQUE}_{k} \leq_{\mathrm{P}}\overset{\textsf{almost}}{\mathit{CLIQUE}_{k}};$ $f(\langle G, k \rangle) = \langle G', k+2 \rangle$, where $G'=G\cup \{ v_{n+1},v_{n+2} \}$ and $v_{n+1},v_{n+2}$ are con. to all $G$ nodes.
- $\overset{\mathit{VERTEX}}{\small\mathit{COVER}}_{k} \leq_{\mathrm{P}}\mathit{DOMINATING\text{-}SET}_{k} ;\quad$ $f(\langle G, k \rangle) = \langle G', k \rangle$, where $V'=\{ \text{non-isolated node in }V \}\cup \{ v_{e}:e\in E \}$, $E'=E\cup \{ (v_{e},u),(v_{e},w): e=(u,w)\in E \}$.
- $\mathit{CLIQUE} \leq_{\mathrm{P}} \mathit{INDEP\text{-}SET};$ $\mathit{SET\text{-}COVER}\leq_{\mathrm{P}} \overset{\mathit{VERTEX}}{\small\mathit{COVER}};$ $\mathit{3SAT} \leq_{\mathrm{P}} \mathit{SET\text{-}SPLITTING};$ $\mathit{INDEP\text{-}SET}\leq_{\mathrm{P}} \overset{\mathit{VERTEX}}{\small\mathit{COVER}}$ 

# Counterexamples

- $A\leq_{\text{m}} B$ and $B\in\text{REG}$, but, $A\notin \text{REG}$: $\quad A=\{0^n1^n \mid n \ge 0\}$, $B=\{1\}$, $f:A\to B$, $f(w)=\begin{cases} 1 & \text{if } w \in A \\ 0 & \text{if } w \notin A \end{cases}$.
- $L\in \text{CFL}$ but $\overline{L}\notin {\text{CFL}}$: $\quad L=\{x\mid \forall w\in \Sigma^*, x\neq ww \}$, $\overline{L}=\{ww \mid w\in \Sigma^* \}$.
- $L_1,L_2\in \text{CFL}$ but $L_1\cap L_2\notin \text{CFL}$: $\quad L_1 = \{ a^nb^nc^m  \}$, $L_2 = \{ a^mb^nc^n  \}$, $L_1\cap L_2 = \{ a^nb^nc^n  \}$.
- $L_1\in \text{CFL}$, $L_2$ is infinite, but $L_1\setminus L_2\notin \text{REG}:\quad$ $L_1=\Sigma^*$, $L_2=\{a^n b^n \mid n \ge 0\}$, $L_1\setminus L_2=\{a^m b^n \mid m\neq n\}$.
- $L_1,L_2\in \text{REG}$, $L_1\not\subset L_2$, $L_2\not\subset L_1$, but, $(L_1\cup L_2)^*=L_{1}^*\cup L_{2}^*:\quad$ $L_1=\{ \texttt{a},\texttt{b},\texttt{ab} \}$, $L_2=\{ \texttt{a},\texttt{b},\texttt{ba} \}$.
- $L_1\in \text{REG}$, $L_2\not\in \text{REG}$, but, $L_1\cap L_2\in \text{REG}$, and $L_1\cup L_2\in \text{REG}:\quad$ $L_1=L(\texttt{a}^*\texttt{b}^*)$, $L_2=\{ \texttt{a}^n\texttt{b}^n\mid n\geq 0 \}$.
- $L_1,L_2,L_3,\dots\in \text{REG}$, but, $\bigcup_{i=1}^{\infty} L_i\not\in \text{REG}:\quad$ $L_i=\{ \texttt{a}^i\texttt{b}^i\}$, $\bigcup_{i=1}^{\infty} L_i=\{ \texttt{a}^n\texttt{b}^n\mid n\geq 0 \}$.
- $L_1\cdot L_2\in \text{REG}$, but $L_1\not\in \text{REG}:\quad$ $L_1=\{ \texttt{a}^n\texttt{b}^n\mid n\geq 0 \}$, $L_2=\Sigma^*$.
- $L_2\in\text{CFL}$, and $L_1\subseteq L_2$, but $L_1\not\in \text{CFL}:\quad$ $\Sigma=\{a,b,c\}$, $L_1=\{a^n b^n c^n \mid n\geq 0 \}$, $L_2=\Sigma^*$.
- $L_1,L_2\in\text{DECIDABLE}$, and $L_1\subseteq L \subseteq L_2$, but $L\in \text{UNDECIDABLE}:\quad$ $L_1=\emptyset$, $L_2=\Sigma^*$, $L$ is some undecidable language over $\Sigma$.
- $L_1\in \text{REG}$, $L_2\not\in \text{CFL}$, but $L_1\cap L_2\in \text{CFL}:\quad$ $L_1=\{ \varepsilon \}$, $L_2=\{ a^n b^n c^n \mid n\geq 0 \}$.
- $L^*\in \text{REG}$, but $L\not\in \text{REG}:\quad$ $L=\{ a^p \mid p \text{ is prime} \}$, $L^*=\Sigma^*\setminus \{ a \}$.
- $A \not\leq_m \overline{A}:\quad$ $A=\mathit{A}_{\textsf{TM}}\in \text{RECOGNIZABLE}$, $\overline{A}=\overline{\mathit{A}_{\textsf{TM}}}\not\in \text{RECOG.}$
- $A\notin\text{DEC.},A\leq_\text{m}\overline{A}:\quad$ 