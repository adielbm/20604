# TM (3), Decidability (4)

- (**TM**) $M=(Q,\underset{ \textsf{input} }{ \Sigma }\subseteq \Gamma,\underset{ \textsf{tape} }{ \Gamma },\delta,q_0,q_{\text{accept}},q_{\text{reject}})$, where $\sqcup\in \Gamma$ (**blank**), $\sqcup\notin \Sigma$, $q_{\text{reject}}\neq q_{\text{accept}}$, and $\delta:Q\times \Gamma\longrightarrow Q\times \Gamma\times \{\text{L},\text{R}\}$
- (**unrec.**) $\overline{A_{TM}}$, $\overline{EQ_{\textsf{TM}}}$, $EQ_{\textsf{CFG}}$, $\overline{HALT_{\textsf{TM}}}$, $\text{REGULAR}_{\textsf{TM}}=\{ M \text{ is a TM and }L(M) \text{ is regular}\}$, $E_{\textsf{TM}}$, $EQ_{\textsf{TM}}=\{ M_1,M_2 \text{ are TMs and }L(M_1)=L(M_2)\}$
- (**rec.**) accepts if $w\in L$, rejects/loops if $w\notin L$. 
	- There exists some lang. that are unrecognizable.
	- $A$ is **co-recognizable** if $\overline{A}$ is recognizable.
	- Every inf. rec. lang. has an inf. dec. subset.
	- (**rec. but not undec**)$A_{TM}$, $HALT_{\textsf{TM}}=\{ \langle M,w\rangle\mid M \text{ is a TM halts on } w\}$, $D=\{ p \mid p \text{ is an int. poly. with an int. root} \}$, $\overline{EQ_{\textsf{CFG}}}$, $\overline{E_{\textsf{TM}}}$
- (**dec.**) accepts if $w\in L$, rejects if $w\notin L$.
	- $A_{\textsf{DFA}}$, $A_{\textsf{NFA}}$, $A_{\textsf{REX}}$, $E_{\textsf{DFA}}$, $EQ_{\textsf{DFA}}$, $A_{\textsf{CFG}}$, $E_{\textsf{CFG}}$, every CFL, every finite lang., $A_{\textsf{LBA}}$, $ALL_{\textsf{DFA}}$, $A\varepsilon_{\textsf{CFG}}$,  
- $L\text{ is dec.}\iff L\text{ is rec. }\land L\text{ is co-rec.}\iff \exists\,\text{TM decides }L$. 
- (**decider**) TM that halts on all inputs. 
- (**Rice**) Let $P$ be a lang. of TMs descriptions, s.t. (**i**) $P$ is nontrivial (not empty and not all TM desc.) and (**ii**) for each two TM $M_1$ and $M_2$, we have $L(M_1)=L(M_2)\implies(\langle M_1\rangle\in P\iff \langle M_2\rangle\in P)$. Then $P$ is undecidable. 

# Reducibility (5)

![[g144.svg|80]]
- $f:\Sigma^*\to\Sigma^*$ is **computable** if there exists a TM $M$ s.t. for every $w\in \Sigma^*$, $M$ halts on $w$ and outputs $f(w)$ on its tape.
- $A$ is **m. reducible** $B$ (denoted by $A\leq_{\text{m}}B$), if there is a comp. func. $f:\Sigma^*\to\Sigma^*$ s.t. for every $w$, we have $w\in A\iff f(w)\in B$. (Such $f$ is called the **m. reduction** from $A$ to $B$.)
- If $A\leq_{\text{m}}B$ and $B$ is decidable, then $A$ is dec.
- If $A\leq_{\text{m}}B$ and $A$ is undecidable, then $B$ is undec.
- If $A\leq_{\text{m}}B$ and $B$ is recognizable, then $A$ is rec.
- If $A\leq_{\text{m}}B$ and $A$ is unrecognizable, then $B$ is unrec.
- If $A\leq_{\text{m}}B$ and $B\leq_{\text{m}}C$, then $A\leq_{\text{m}}C$. 
- If $A$ is recognizable and $A\leq_{\text{m}}\overline{A}$, then $A$ is decidable.
# Complexity (7)

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
- $A$ is **PT (mapping) reducible** to $B$, denoted $A\leq_P B$, if there exists a PT computable func. $f:\Sigma^*\to\Sigma^*$ s.t. for every $w\in\Sigma^*$, $w\in A \iff f(w)\in B$. (in such case $f$ is called the **PT reduction** of $A$ to $B$).
	- If $A\leq_P B$ and $B\in\mathrm{P}$, then $A\in\mathrm{P}$.
	- If $A\leq_P B$ and $B\leq_P A$, then $A$ and $B$ are **PT equivalent**, denoted $A\equiv_P B.\quad$ $\equiv_P$ is an equivalence relation on $\mathrm{NP}.\quad$ $\mathrm{P}\setminus \{ \emptyset, \Sigma^* \}$ is an equivalence class of $\equiv_P$.
- $\textbf{NP-complete}=\{B\mid B\in\mathrm{NP} , \forall A\in\mathrm{NP},A\leq_P B\}$.
- $\text{CLIQUE}$, $\text{SUBSET-SUM}$, $\text{SAT}$, $\text{3SAT}$, $\text{VERTEX-COVER}$, $\text{HAMPATH}$, $\text{UHAMATH}$, $3COLOR\in\text{NP-complete}$.
- $\emptyset,\Sigma^*\notin\mathrm{NP}$-complete. 
- If $B\in\mathrm{NP}$-complete and $B\in\mathrm{P}$, then $\mathrm{P}=\mathrm{NP}$.
- If $B\in\mathrm{NP}$-complete and $C \in \mathrm{NP}$ s.t. $B\leq_P C$, then $C\in\mathrm{NP}$-comp.
- If $\mathrm{P}=\mathrm{NP}$, then $\forall A\in \mathrm{P}\setminus\{\emptyset,\Sigma^*\},\,A\in \text{NP-complete}$.



| $A\leq_p B$                                                                                                                                                                    | $f:A\to B$ s.t. $w\in A \iff f(w)\in B$ and $f$ is poly-time comp.                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $\text{SAT} \leq_p \text{DOUBLE-SAT}$                                                                                                                                          | $f(\phi) = \phi \land (x \lor \neg x)$                                                                                                                                                                                                                                                                                              |
| $\text{SUBSET-SUM} \leq_p \text{SET-PARTITION}$                                                                                                                                | $f(\langle x_1, \dots, x_m, t \rangle) = \langle x_1, \dots, x_m, S-2t\rangle$, where $S$ sum of $x_1, \dots, x_m$, and $t$ is the target subset-sum.                                                                                                                                                                               |
| $3COLOR \leq_p 3COLOR_{almost}$                                                                                                                                                | $f(\langle G \rangle) = \langle G' \rangle$, where $G'=G\cup K_4$                                                                                                                                                                                                                                                                   |
| $\text{VERTEX-COVER} \leq_p \text{WVC}$                                                                                                                                        | $f(\langle G,k\rangle)= (G,w,k)$, $\forall v\in V,w(v)=1$.                                                                                                                                                                                                                                                                          |
| $\underset{ \text{length } \geq k }{ \text{SimplePATH} }\leq_{p}\text{UHAMATH}$                                                                                                |                                                                                                                                                                                                                                                                                                                                     |
| $\underset{ \text{undir. }G \text{ has }k\text{-clique} }{ \text{CLIQUE} } \leq_p \underset{ \text{undir. }G\text{ has }\vert{V}\vert/2\text{-clique} }{ \text{HALF-CLIQUE} }$ | $f(\langle G=(V,E),k\rangle)= \langle G'=(V',E')\rangle$, if $k=\frac{\mid V\mid}{2}$, $E=E'$, $V'=V$. if $k> \frac{\mid V\mid}{2}$, $V'=V\cup \{ j=2k-{\vert V \vert} \text{ new nodes} \}$. if $k< \frac{\vert V \vert}{2}$, $V'=V\cup \{ j=\vert V\vert-2k \text{ new nodes} \}$ and $E'=E\cup \{ \text{edges for new nodes} \}$ |
| $\text{CLIQUE} \leq_p \text{INDEPENDENT-SET}$                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                     |
| $\text{SET-COVER}\leq_p \text{VERTEX-COVER}$                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                     |
| $\text{3SAT} \leq_p \text{SET-SPLITTING}$                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                     |
| $\text{INDEPENDENT-SET}\leq_p \text{VERTEX-COVER}$                                                                                                                             |                                                                                                                                                                                                                                                                                                                                     |
| $\text{VERTEX-COVER}\leq_{\text{p}}\text{CLIQUE}$                                                                                                                              |                                                                                                                                                                                                                                                                                                                                     |









- $\small\displaystyle\text{SUBSET-SUM}=\{\langle S,k\rangle \mid S \text{ is a m. set of int.}\land{ }\exists\,  T\subseteq S : \sum_{x\in T}x=k\}$.

- 
- 
- 
- $A_{\text{TM}}\leq_\text{m} HALT_{\text{TM}}$


https://github.com/dideler/cheat-sheets/blob/master/4P61-Computation/cheatsheet.pdf