import fs from 'fs';
import {JSDOM} from 'jsdom';
import {mathjax} from 'mathjax-full/js/mathjax.js';
import {TeX} from 'mathjax-full/js/input/tex.js';
import {SVG} from 'mathjax-full/js/output/svg.js';
import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';
import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';

// Import additional TeX extensions
import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';

// Initialize MathJax
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX({
  packages: AllPackages,
});

const svg = new SVG({fontCache: 'none'});

// Read HTML file
const inputFile = 'index-tmp.html';
const outputFile = 'index.html';
const html = fs.readFileSync(inputFile, 'utf8');

// Use jsdom to parse the HTML document
const dom = new JSDOM(html);
const document = dom.window.document;

function renderMath(texString, displayMode = false) {
  try {
    // Create a MathJax document for rendering
    const mjDocument = mathjax.document('', {InputJax: tex, OutputJax: svg});
    // Convert TeX string to SVG node
    const node = mjDocument.convert(texString, {display: displayMode});
    // Serialize SVG node back to string
    return adaptor.outerHTML(node);
  } catch (error) {
    console.error(`Error rendering math: ${texString}`, error);
    // Return original LaTeX as fallback
    return displayMode ? `\\[${texString}\\]` : `\\(${texString}\\)`;
  }
}

// Helper: extract the raw LaTeX inside math spans
function extractTex(node) {
  // Common cases:
  // inline math: \( ... \) inside span.math.inline
  // display math: \[ ... \] inside span.math.display or div.math.display
  const text = node.textContent.trim();
  // Remove \( \) or \[ \] delimiters if present
  if (text.startsWith('\\(') && text.endsWith('\\)')) {
    return text.slice(2, -2).trim();
  }
  if (text.startsWith('\\[') && text.endsWith('\\]')) {
    return text.slice(2, -2).trim();
  }
  return text;
}

// Process inline math: <span class="math inline">...</span>
const inlineMathNodes = document.querySelectorAll('span.math.inline');
console.log(`Processing ${inlineMathNodes.length} inline math nodes...`);
inlineMathNodes.forEach((node, index) => {
  const texString = extractTex(node);
  const svgString = renderMath(texString, false);
  // Replace the entire span with the SVG node parsed by jsdom
  const fragment = JSDOM.fragment(svgString);
  node.replaceWith(fragment);
});

// Process display math: <span class="math display"> or <div class="math display">
const displayMathNodes = document.querySelectorAll('span.math.display, div.math.display');
console.log(`Processing ${displayMathNodes.length} display math nodes...`);
displayMathNodes.forEach((node, index) => {
  const texString = extractTex(node);
  const svgString = renderMath(texString, true);
  const fragment = JSDOM.fragment(svgString);
  node.replaceWith(fragment);
});

// Write the processed HTML out
// Add loading="lazy" to all images for performance
const images = document.querySelectorAll('img');
images.forEach(img => {
  if (!img.hasAttribute('loading')) {
    img.setAttribute('loading', 'lazy');
  }
});

fs.writeFileSync(outputFile, dom.serialize(), 'utf8');
