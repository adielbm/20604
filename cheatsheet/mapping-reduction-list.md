


1. ${\color{blue}{\mathit{A}_{\textsf{TM}}\leq_{\text{m}} \{ \langle M_{\textsf{TM}} \rangle \mid  L(M) = (L(M))^{\mathcal{R}} \};}}$ $f(\langle M,w\rangle)=\langle M'\rangle$, where $M'=$"On x, if $x\notin\{ 01,10 \}$, ***reject***; if $x=01$, return $M(x)$; if $x=10$, ***accept***;" 
2. ${\color{blue}{{\mathit{A}_{\textsf{TM}}} \leq_{\mathrm{m}} L=\{ \langle \underset{ \textsf{TM} }{ M },\underset{ \textsf{DFA} }{ D }\rangle \mid L(M)=L(D) \};}}$ $f(\langle M,w\rangle)=\langle M',D\rangle$, where $M'=$"On $x$: if $x=w$ return $M(x)$; otherwise, ***reject***;" $D$ is DFA s.t. $L(D)=\{w\}.$ 
3. ${\color{blue}{A\leq_{\text{m}} \mathit{HALT}_{\textsf{TM}};}}$ $f(w)=\langle M,\varepsilon\rangle$, where $M=$"On $x$: if $w\in A$, halt; if $w\notin A$, loop;"  
4. ${\color{blue}{\mathit{A}_{\textsf{TM}}\leq_{\text{m}} CFL_{\textsf{TM}}=\{ \langle M \rangle \mid L(M) \text{ is CFL} \};}}$ $f(\langle M,w\rangle)=\langle N \rangle$, where $N=$"On $x$: if $x=a^n b^nc^n$, ***accept***; otherwise, return $M(w)$;" 
5. ${\color{blue}{A\leq_{\text{m}} B=\{ 0w:w\in A \}\cup \{ 1w:w\notin A \};}}$ $f(w)=0w$.
6. ${\color{blue}{\mathit{A}_{\textsf{TM}}\leq_{\text{m}} \mathit{HALT}_{\textsf{TM}};}}$ $f(\langle M,w\rangle)=\langle M',w\rangle$, where $M'=$"On $x$: if $M(x)$ accepts, ***accept***. If rejects, loop"
7. ${\color{blue}{\mathit{HALT}_{\textsf{TM}}\leq_{\text{m}} \mathit{A}_{\textsf{TM}};}}$ $f(\langle M,w\rangle)=\langle M',\langle M,w\rangle\rangle$, where $M'=$"On $\langle X,x\rangle$: if $X(x)$ halts, ***accept***;" 
8. ${\color{blue}{E_{\textsf{TM}} \leq_{\text{m}} \mathit{USELESS}_{\textsf{TM}};\,}}$ $f(\langle M \rangle) = \langle M, q_{\text{a}} \rangle$
9. ${\color{blue}{E_{\textsf{TM}} \leq_{\text{m}} \mathit{EQ}_{\textsf{TM}};\,}}$ $f(\langle M \rangle) = \langle M,M'\rangle$, $M'=$"On $x$: ***reject***"
10. ${\color{blue}{\mathit{A}_{\textsf{TM}} \leq_{\text{m}}\mathit{REGULAR}_{\textsf{TM}};}}$ $f(\langle M,w\rangle)=\langle M'\rangle$, $M'=$"On $x\in \{ 0,1 \}^*$: if $x=0^n1^n$, ***accept***; otherwise, return $M(w)$;" 
11. ${\color{blue}{\mathit{A}_{\textsf{TM}} \leq_{\text{m}}\mathit{EQ}_{\textsf{TM}};}}$ $f(\langle M, w \rangle) = \langle M_1, M_2 \rangle$, where $M_1=$"***accept*** all"; $M_2=$"On $x$: return $M(w)$;" 
12. ${\color{blue}{\mathit{A}_{\textsf{TM}} \leq_{\text{m}} \overline{EQ_{\textsf{TM}}};}}$ $f(\langle M, w \rangle) = \langle M_1, M_2 \rangle$, where $M_1=$"***reject*** all"; $M_2=$"On $x$: return $M(w)$;"
13. ${\color{blue}{\mathit{ALL}_{\textsf{CFG}} \leq_{\text{m}}\mathit{EQ}_{\textsf{CFG}};}}$ $f(\langle G \rangle) = \langle G, H \rangle$, s.t. $L(H)=\Sigma^*.$
14. ${\color{blue}{\mathit{A}_{\textsf{TM}} \leq_{\text{m}}\{ \langle M_{\textsf{TM}} \rangle :  |L(M)|=1 \};}}$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $x=x_0$, return $M(w)$; otherwise, ***reject***;" (where $x_0\in \Sigma^*$ is fixed). 
15. ${\color{blue}{\overline{\mathit{A}_{\textsf{TM}}} \leq_{\text{m}} E_{\textsf{TM}};}}$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $x\neq w$, ***reject***; otherwise, return $M(w)$;" 
16. ${\color{blue}{\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : |L(M)| \leq 3\};}}$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $M(w)$ halts, ***accept***" 
17. ${\color{blue}{{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : |L(M)| \geq 3\};}}$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $M(w)$ halts, ***accept***" 
18. ${\color{blue}{\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : M\text{ accepts all even num.}\};}}$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: ***reject*** if $M(w)$ halts within $|x|$. otherwise, ***accept***" 
19. ${\color{blue}{\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : L(M)\text{ is finite}\};}}$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: ***accept*** if $M(w)$ halts"
20. ${\color{blue}{\overline{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle : L(M)\text{ is infinite}\};}}$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: ***reject*** if $M(w)$ halts within $|x|$ steps. otherwise, ***accept***" 
21. ${\color{blue}{{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \{\,\langle M_{1},M_{2}\rangle : \varepsilon \in L(M_{1})\cup L(M_{2})\};}}$ $f(\langle M, w \rangle) = \langle M',M' \rangle$, $M'=$"On $x$: ***accept*** if $M(w)$ halts"
22. ${\color{blue}{{\mathit{HALT}_{\textsf{TM}}} \leq_{\text{m}} \overline{E_{\textsf{TM}}};}}$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $x\neq w$ ***reject***; else, ***accept*** if $M(w)$ halts"
23. ${\color{blue}{\mathit{HALT}_{\textsf{TM}} \leq_{\text{m}} \{\,\langle M_{\textsf{TM}}\rangle \mid  \exists\,x\ :M(x)\text{ halts in }>|\langle M\rangle|\text{ steps})\};}}$ $f(\langle M, w \rangle) = \langle M' \rangle$, where $M'=$"On $x$: if $M(w)$ halts, make $|\langle M \rangle|+1$ steps and then halt; otherwise, loop"


