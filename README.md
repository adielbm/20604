index.md is made using obsidian.

```bash
pandoc index.md -o index-tmp.html --template=template.html --mathjax --resource-path=.:images
node preRenderMath.js
```


 
