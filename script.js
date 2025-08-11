document.addEventListener("DOMContentLoaded", function () {

    // change the id of all h2 heads to be as {parent-h1-id}-{original-h2-id}.
    const h2headings = document.querySelectorAll("h2[id]");
    h2headings.forEach(h => {
        // Find the closest previous sibling h1[id]
        let prev = h.previousElementSibling;
        let parentH1 = null;
        while (prev) {
            if (prev.tagName === "H1" && prev.id) {
                parentH1 = prev;
                break;
            }
            prev = prev.previousElementSibling;
        }
        if (parentH1) {
            h.id = `${parentH1.id}-${h.id}`;
        }
    });

    // Make h1 and h2 headings with id link to themselves
    document.querySelectorAll("h1[id], h2[id]").forEach(h => {
        const a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent;
        a.style.textDecoration = "none";
        a.style.color = "inherit";
        h.textContent = "";
        h.appendChild(a);
    });

    const headings = document.querySelectorAll("h1[id]");
    if (headings.length === 0) return;


    const tocContainer = document.querySelector("#toc")
    const list = document.createElement("ul");

    headings.forEach(h => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        list.appendChild(li);
    });
    tocContainer.appendChild(list);


    // // go through all stuff like "<p>ראו [[#מועד 2024b-94]] שאלה 4.</p>" and make them links.
    // // Replace spaces in the id with "-"
    // document.querySelectorAll('p').forEach(p => {
    //     p.innerHTML = p.innerHTML.replace(/\[\[#(.*?)\]\]/g, (_, id) => {
    //         const idWithDash = id.replace(/\s+/g, '-');
    //         const encodedId = encodeURIComponent(idWithDash);
    //         return `<a href="#${encodedId}">${idWithDash}</a>`;
    //     });
    // });

    document.querySelectorAll('li').forEach(li => {
        const firstEl = li.firstElementChild;

        if (
            firstEl &&
            firstEl.tagName.toLowerCase() === 'strong' &&
            firstEl.textContent.trim() === 'תשובה:'
        ) {
            // Wrap the rest of the content (excluding <strong>) in a span
            const span = document.createElement('span');
            span.classList.add('blur-content');

            // Move all nodes after <strong> into the span
            let node = firstEl.nextSibling;
            while (node) {
                const next = node.nextSibling;
                span.appendChild(node);
                node = next;
            }

            li.appendChild(span);

            // Apply styles
            // span.style.filter = 'blur(5px)';
            // li.style.cursor = 'pointer';


            li.className = 'answer';

            // Remove blur on click
            // li.addEventListener('click', () => {
            //     span.style.filter = 'none';
            //     li.style.cursor = 'auto'; // or 'default'
            // });
        }
    });

    document.querySelectorAll('li').forEach(li => {
        const firstNode = li.firstChild;
        if (firstNode) {
            if (
                (firstNode.nodeType === Node.ELEMENT_NODE &&
                    firstNode.classList.contains('math') &&
                    firstNode.classList.contains('inline'))
                || // or element name is 'mjx-container',
                (firstNode.nodeType === Node.ELEMENT_NODE &&
                    firstNode.tagName.toLowerCase() === 'mjx-container')
                || // it's text node and its first letter is from english alphabet
                (firstNode.nodeType === Node.TEXT_NODE &&
                    firstNode.textContent.trim().length > 0 &&
                    /^[a-zA-Z]/.test(firstNode.textContent.trim()[0]))
            ) {
                li.style.direction = 'ltr';
                li.style.textAlign = 'left';
            }
        }
    });


    document.querySelectorAll('.answer').forEach((answerEl, index) => {
        // Find the closest preceding <h2> and <h1> in document order
        let examTitle = null;
        let questionTitle = null;

        // Look backwards through the DOM to find the nearest h1 and h2
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_ELEMENT,
            {
                acceptNode(node) {
                    return ['H1', 'H2'].includes(node.tagName) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                }
            }
        );

        let lastH1 = null, lastH2 = null;
        let currentNode;

        while ((currentNode = walker.nextNode())) {
            if (currentNode.compareDocumentPosition(answerEl) & Node.DOCUMENT_POSITION_PRECEDING) {
                break;
            }
            if (currentNode.tagName === 'H1') lastH1 = currentNode;
            if (currentNode.tagName === 'H2') lastH2 = currentNode;
        }

        examTitle = lastH1 ? lastH1.textContent.trim() : 'Unknown Exam';
        questionTitle = lastH2 ? lastH2.textContent.trim() : 'Unknown Question';

        // Create the GitHub issue/discussion URL
        const repo = 'adielBm/20604';
        const title = encodeURIComponent(`${examTitle} - ${questionTitle}`);
        //   const url = `https://github.com/${repo}/discussions/new?category=General&title=${title}`;
        // Or for issues:
        const url = `https://github.com/${repo}/issues/new?title=${title}`;

        // Create the button
        const button = document.createElement('button');
        button.textContent = 'Report';
        button.onclick = () => {
            window.open(url, '_blank');
        };

        answerEl.appendChild(button);
    });





})