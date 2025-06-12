#!/bin/bash
gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=cheatsheet.pdf front.pdf back.pdf

# exiftool is used to add metadata to the PDF (overwrite file if it exists)
exiftool -Title="מודלים חישוביים דף נוסחאות" -Author="https://github.com/adielbm" cheatsheet.pdf -overwrite_original
