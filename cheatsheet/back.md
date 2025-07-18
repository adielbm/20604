# (3) TM, (4) Decidability

- (**TM**) $M=(Q,\underset{ \textsf{input} }{ \Sigma }\subseteq \Gamma,\underset{ \textsf{tape} }{ \Gamma },\delta,q_0,q_{\text{accept}},q_{\text{reject}})$, where $\sqcup\in \Gamma$ (**blank**), $\sqcup\notin \Sigma$, $q_{\text{reject}}\neq q_{\text{accept}}$, and $\delta:Q\times \Gamma\longrightarrow Q\times \Gamma\times \{\text{L},\text{R}\}$
- (**recognizable**) accepts if $w\in L$, rejects/loops if $w\notin L$. 
	- $L \text{ is recognizable}\iff L\leq_{\text{m}}A_{\textsf{TM}}$. 
	- Some languages are unrecognizable.
	- $A$ is **co-recognizable** if $\overline{A}$ is recognizable.
	- Every inf. rec. lang. has an inf. dec. subset.
- (**decidable**) accepts if $w\in L$, rejects if $w\notin L$.
- $L\in\overset{ \textsf{Turing} }{ \tiny{\textsf{DEC.}} }\Leftrightarrow \left(L\in\overset{ \textsf{Turing} }{ \tiny{\textsf{REC.}} }\land L\in\overset{ \textsf{Turing} }{ \tiny{\textsf{co-REC.}} }\right)\Leftrightarrow \exists\,\underset{ \textsf{TM} }{ M }\text{ decides }L$.
- $L\in\overset{ \textsf{Turing} }{ \tiny{\textsf{DECIDABLE}} }\iff L\leq_{\text{m}}\texttt{0}^*\texttt{1}^*$.
- (**decider**) TM that halts on all inputs. 
- (**Rice**) Let $P$ be a lang. of TM descriptions, s.t. (**i**) $P$ is nontrivial (not empty and not all TM desc.) and (**ii**) for each two TM $M_1$ and $M_2$, we have $L(M_1)=L(M_2)\implies(\langle M_1\rangle\in P\iff \langle M_2\rangle\in P)$. Then $P$ is undecidable. 
- $\{ \text{all }\textsf{TM}\text{s} \}$ is countable; $\Sigma^*$ is countable (for every finite $\Sigma$); $\{ \text{all languages} \}$ is uncountable; $\{ \text{all infinite binary sequences} \}$ is uncountable.
- $\small\textsf{DFA}\equiv\textsf{NFA}\equiv\textsf{GNFA}\equiv\textsf{REG}\,\subset \,\textsf{NPDA}\equiv\textsf{CFG}\,\subset \,\textsf{DTM}\equiv\textsf{NTM}$
# $\textsf{FINITE}\subset\textsf{REG}\subset \textsf{CFL} \subset \textsf{CSL} \subset \overset{ \textsf{Turing} }{ \tiny{\textsf{DECIDABLE}}} \subset \overset{ \textsf{Turing} }{ \tiny{\textsf{RECOGNIZABLE}} }$ 
- (**unrecognizable**) $\overline{A_{TM}}$, $\overline{EQ_{\textsf{TM}}}$, $EQ_{\textsf{CFG}}$, $\overline{HALT_{\textsf{TM}}}$, $\text{REGULAR}_{\textsf{TM}}=\{ M \text{ is a TM and }L(M) \text{ is regular}\}$, $E_{\textsf{TM}}$, $EQ_{\textsf{TM}}=\{ M_1,M_2 \text{ are TMs and }L(M_1)=L(M_2)\}$
- (**recognizable but undec.**) $A_{TM}$, $HALT_{\textsf{TM}}=\{ \langle M,w\rangle\mid M \text{ is a TM halts on } w\}$, $D=\{ p \mid p \text{ is an int. poly. with an int. root} \}$, $\overline{EQ_{\textsf{CFG}}}$, $\overline{E_{\textsf{TM}}}$
- (**decidable**) $A_{\textsf{DFA}}$, $A_{\textsf{NFA}}$, $A_{\textsf{REX}}$, $E_{\textsf{DFA}}$, $EQ_{\textsf{DFA}}$, $A_{\textsf{CFG}}$, $E_{\textsf{CFG}}$, $A_{\textsf{LBA}}$, $ALL_{\textsf{DFA}}=\{\langle M\rangle \mid M \text{ is a }\textsf{DFA}{ },L(A)=\Sigma^*\}$, $A\varepsilon_{\textsf{CFG}}=\{\langle G\rangle \mid G \text{ is a \textsf{CFG} that generates }\varepsilon\}$, $\mathrm{INFINITE}_{\textsf{DFA}}$, $\mathrm{INFINITE}_{\textsf{PDA}}$
- (**CFL but not REG**) $\{w\in \{a,b\}^* \mid w=w^\mathcal{R}\},$ $\{ww^\mathcal{R}\mid w\in \{a,b\}^*\},$ $\{a^n b^n \mid n\in \mathbb{N}\},\{w\in \{\texttt{a},\texttt{b}\}^* \mid \#_{\texttt{a}}(w)=\#_{\texttt{b}}(w)\}$
- (**not CFL**) $\{a^i b^j c^k \mid 0\leq i \leq j \leq k\},$ $\{a^n b^n c^n \mid n \in \mathbb{N}\},$ $\{ww \mid w \in \{a,b\}^*\},$ $\{\texttt{a}^{j^{2}}\mid j\geq 0 \},$ $\{w\in \{\texttt{a},\texttt{b},\texttt{c}\}^* \mid \#_{\texttt{a}}(w)=\#_{\texttt{b}}(w)=\#_{\texttt{c}}(w)\}$

# (5) Mapping Reduction $\leq_{\text{m}}$  

![[g144.svg|80]]
- $f:\Sigma^*\to\Sigma^*$ is **computable** if there exists a TM $M$ s.t. for every $w\in \Sigma^*$, $M$ halts on $w$ and outputs $f(w)$ on its tape.
- $A$ is **m. reducible** $B$ (denoted by $A\leq_{\text{m}}B$), if there is a comp. func. $f:\Sigma^*\to\Sigma^*$ s.t. for every $w$, we have $w\in A\iff f(w)\in B$. (Such $f$ is called the **m. reduction** from $A$ to $B$.)
- If $A\leq_{\text{m}}B$ and $B$ is decidable, then $A$ is dec.
- If $A\leq_{\text{m}}B$ and $A$ is undecidable, then $B$ is undec.
- If $A\leq_{\text{m}}B$ and $B$ is recognizable, then $A$ is rec.
- If $A\leq_{\text{m}}B$ and $A$ is unrecognizable, then $B$ is unrec.
- (transitivity) If $A\leq_{\text{m}}B$ and $B\leq_{\text{m}}C$, then $A\leq_{\text{m}}C$.  
- If $A$ is recognizable and $A\leq_{\text{m}}\overline{A}$, then $A$ is decidable.
- $A \leq_{\mathrm{m}} B \iff \overline{A} \leq_{\mathrm{m}} \overline{B}$
# (7) Complexity, Polytime Reduction $\leq_{\mathrm{P}}$

- ((**Running time**) decider $M$ is a **$f(n)$-time TM**.) $f:\mathbb{N} \to \mathbb{N}$, where $f(n)$ is the max. num. of steps that DTM (or NTM) $M$ takes on any $n$-length input (and any branch of any $n$-length input. resp.).
- $\mathsf{TIME}(t(n))=\set{L \mid L \text{ is dec. by }O(t(n))\text{ DTM}}$.
- $\mathsf{NTIME}(t(n))=\set{L \mid L \text{ is dec. by }O(t(n))\text{ NTM}}$.
- $\textbf{P}=\bigcup_{k \in \mathbb{N}}\mathsf{TIME}(n^k)$
- (**verifier** for $L$) TM $V$ s.t. $L=\{w\mid \exists c : V(\langle w,c\rangle)=\textsf{accept} \}$.
	- (**certificate** for $w\in L$) str. $c$ s.t. $V(\langle w,c\rangle)=\textsf{accept}$.
- $\textbf{NP}=\bigcup_{k \in \mathbb{N}}\mathsf{NTIME}(n^k)$
- $\textbf{NP}=\set{L \mid L \text{ is decidable by a PT verifier}}$.
- $\mathrm{P}\subseteq\mathrm{NP}$.
- $f:\Sigma^*\to\Sigma^*$ is **PT computable** if there exists a PT TM $M$ s.t. for every $w\in\Sigma^*$, $M$ halts with $f(w)$ on its tape.
- $A$ is **PT (mapping) reducible** to $B$, denoted $A\leq_{\mathrm{P}} B$, if there exists a PT computable func. $f:\Sigma^*\to\Sigma^*$ s.t. for every $w\in\Sigma^*$, $w\in A \iff f(w)\in B$. (in such case $f$ is called the **PT reduction** of $A$ to $B$).
	- If $A\leq_{\mathrm{P}} B$ and $B\in\mathrm{P}$, then $A\in\mathrm{P}$.
	- If $A\leq_{\mathrm{P}} B$ and $B\leq_{\mathrm{P}} A$, then $A$ and $B$ are **PT equivalent**, denoted $A\equiv_P B.\quad$ $\equiv_P$ is an equivalence relation on $\mathrm{NP}.\quad$ $\mathrm{P}\setminus \{ \emptyset, \Sigma^* \}$ is an equivalence class of $\equiv_P$.
- $\textbf{NP-complete}=\{B\mid B\in\mathrm{NP} , \forall A\in\mathrm{NP},A\leq_{\mathrm{P}} B\}.$
- $\text{CLIQUE}$, $\text{SUBSET-SUM}$, $\text{SAT}$, $\text{3SAT}$, $\text{VERTEX-COVER}$, $\text{HAMPATH}$, $\text{UHAMATH}$, $3COLOR\in\text{NP-complete}$.
- $\emptyset,\Sigma^*\notin\text{NP-complete}$. 
- If $B\in\text{NP-complete}$ and $B\in\mathrm{P}$, then $\mathrm{P}=\mathrm{NP}$.
- If $B\in\text{NP-complete}$ and $C \in \mathrm{NP}$ s.t. $B\leq_{\mathrm{P}} C$, then $C\in\text{NP-complete}$.
- If $\mathrm{P}=\mathrm{NP}$, then $\forall A\in \mathrm{P}\setminus\{\emptyset,\Sigma^*\},\,A\in \text{NP-complete}$.

# Examples:  $A\leq_{\mathrm{P}} B$ and $f:A\to B$ s.t. $w\in A \iff f(w)\in B$ and $f$ is polytime computable


- $\text{SAT} \leq_{\mathrm{P}} \text{DOUBLE-SAT}$
	- $f(\phi) = \phi \land (x \lor \neg x)$
- $\text{SUBSET-SUM} \leq_{\mathrm{P}} \text{SET-PARTITION}$
	- $f(\langle x_1, \dots, x_m, t \rangle) = \langle x_1, \dots, x_m, S-2t\rangle$, where $S$ sum of $x_1, \dots, x_m$, and $t$ is the target subset-sum.
- $3COLOR \leq_{\mathrm{P}} 3COLOR_{almost}$
	- $f(\langle G \rangle) = \langle G' \rangle$, where $G'=G\cup K_4$
- $\text{VERTEX-COVER} \leq_{\mathrm{P}} \text{WVC}$
	- $f(\langle G,k\rangle)= (G,w,k)$, $\forall v\in V,w(v)=1$.
- $\underset{ \text{length } \geq k }{ \text{SimplePATH} }\leq_{\mathrm{P}}\text{UHAMATH}$
- $\underset{ \text{undir. }G \text{ has }k\text{-clique} }{ \text{CLIQUE} } \leq_{\mathrm{P}} \underset{ \text{undir. }G\text{ has }\vert{V}\vert/2\text{-clique} }{ \text{HALF-CLIQUE} }$
	- $f(\langle G=(V,E),k\rangle)= \langle G'=(V',E')\rangle$, if $k=\frac{\mid V\mid}{2}$, $E=E'$, $V'=V$. if $k> \frac{\mid V\mid}{2}$, $V'=V\cup \{ j=2k-{\vert V \vert} \text{ new nodes} \}$. if $k< \frac{\vert V \vert}{2}$, $V'=V\cup \{ j=\vert V\vert-2k \text{ new nodes} \}$ and $E'=E\cup \{ \text{edges for new nodes} \}$
- $\text{CLIQUE} \leq_{\mathrm{P}} \text{INDEPENDENT-SET}$     
- $\text{SET-COVER}\leq_{\mathrm{P}} \text{VERTEX-COVER}$ 
- $\text{3SAT} \leq_{\mathrm{P}} \text{SET-SPLITTING}$          
- $\text{INDEPENDENT-SET}\leq_{\mathrm{P}} \text{VERTEX-COVER}$ 
- $\text{VERTEX-COVER}\leq_{\text{p}}\text{CLIQUE}$           

# Counterexamples

- $A\leq_{\text{m}} B$ and $B\in\mathsf{REG}$, but, $A\notin\mathsf{REG}$: $\quad A=\{0^n1^n \mid n \ge 0\}$, $B=\{1\}$, $f:A\to B$, $f(w)=\begin{cases} 1 & \text{if } w \in A \\ 0 & \text{if } w \notin A \end{cases}$.
- $L\in \textsf{CFL}$ but $\overline{L}\notin {\textsf{CFL}}$: $\quad L=\{x\mid \forall w\in \Sigma^*, x\neq ww \}$, $\overline{L}=\{ww \mid w\in \Sigma^* \}$.
- $L_1,L_2\in \textsf{CFL}$ but $L_1\cap L_2\notin \textsf{CFL}$: $\quad L_1 = \{ a^nb^nc^m  \}$, $L_2 = \{ a^mb^nc^n  \}$, $L_1\cap L_2 = \{ a^nb^nc^n  \}$.
- $L_1\in \textsf{CFL}$, $L_2$ is infinite, but $L_1\setminus L_2\notin \textsf{REG}:\quad$ $L_1=\Sigma^*$, $L_2=\{a^n b^n \mid n \ge 0\}$, $L_1\setminus L_2=\{a^m b^n \mid m\neq n\}$.
- $L_1,L_2\in \textsf{REG}$, $L_1\not\subset L_2$, $L_2\not\subset L_1$, but, $(L_1\cup L_2)^*=L_{1}^*\cup L_{2}^*:\quad$ $L_1=\{ \texttt{a},\texttt{b},\texttt{ab} \}$, $L_2=\{ \texttt{a},\texttt{b},\texttt{ba} \}$.
- $L_1\in \textsf{REG}$, $L_2\not\in \textsf{REG}$, but, $L_1\cap L_2\in \textsf{REG}$, and $L_1\cup L_2\in \textsf{REG}:\quad$ $L_1=L(\texttt{a}^*\texttt{b}^*)$, $L_2=\{ \texttt{a}^n\texttt{b}^n\mid n\geq 0 \}$.
- $L_1,L_2,L_3,\dots\in \textsf{REG}$, but, $\bigcup_{i=1}^{\infty} L_i\not\in \textsf{REG}:\quad$ $L_i=\{ \texttt{a}^i\texttt{b}^i\}$, $\bigcup_{i=1}^{\infty} L_i=\{ \texttt{a}^n\texttt{b}^n\mid n\geq 0 \}$.
- $L_1\cdot L_2\in \textsf{REG}$, but $L_1\not\in \textsf{REG}:\quad$ $L_1=\{ \texttt{a}^n\texttt{b}^n\mid n\geq 0 \}$, $L_2=\Sigma^*$.
- $L_2\in\textsf{CFL}$, and $L_1\subseteq L_2$, but $L_1\not\in \textsf{CFL}:\quad$ $\Sigma=\{a,b,c\}$, $L_1=\{a^n b^n c^n \mid n\geq 0 \}$, $L_2=\Sigma^*$.
- $L_1,L_2\in\textsf{DECIDABLE}$, and $L_1\subseteq L \subseteq L_2$, but $L\in \textsf{UNDECIDABLE}:\quad$ $L_1=\emptyset$, $L_2=\Sigma^*$, $L$ is some undecidable language over $\Sigma$.
- $L_1\in \textsf{REG}$, $L_2\not\in \textsf{CFL}$, but $L_1\cap L_2\in \textsf{CFL}:\quad$ $L_1=\{ \varepsilon \}$, $L_2=\{ a^n b^n c^n \mid n\geq 0 \}$.