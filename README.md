
### מאגר מבחנים

`index.md` is made using obsidian.

```bash
pandoc index.md -o index-tmp.html --template=template.html --mathjax --resource-path=.:images
node preRenderMath.js
```

### דף נוסחאות

[https://github.com/adielbm/20604/blob/main/cheatsheet/cheatsheet.pdf](https://github.com/adielbm/20604/blob/main/cheatsheet/cheatsheet.pdf)