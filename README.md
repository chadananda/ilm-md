# ILM-md
Custom markdown parser for ILM -- with simple client script for creating ILM documents in a text-editor.

## Cool Features

* Yaml front-matter metadata
* Add attributes to headers and blocks
* Understands transliterated glyph characters
* Client URL for creating/viewing formatted content
* Auto paragraph numbering
* Parse to simple HTML or JSON object


### Starting an ILM document

  1. rename your MD file to use a .html extension
  2. paste in this script at the top: <br>
     `<script src="https://chadananda.github.io/ilm-md/dist/ilm-md-inline-debug.js"></script>`
  3. open file in browser to view formatting  
  4. see example here: https://chadananda.github.io/ilm-md

## Formatting Options

### Front-matter

Documents often need meta-data such as title, author, copyright, etc. These can be added at the top of any document with a YAML-style header like this:

```
---
title: Moby Dick
author: Herman Melville 
description:  The story Captain Ahab’s obsessive quest for revenge on Moby Dick, the white whale that on a previous whaling voyage bit off his leg at the knee.
date_published: October 18, 1851 
characters: Captain Ahab, Ishmael, Queequeg, Moby Dick, Captain Boomer, Starbuck, Stubb, Elijah 
---
```

### Headers and Sections

Text can be split up into sections by use of the H2 header (indicated in Markdown by starting a line with ##).  

### Block Classes {.likethis}

Classes and attributes can be added to any text block Pandoc-style by appending a line with the list of classes, id and attributes. In the case of headers and sub-headers, these should be added on the same line. (Since Markdown does not support multi-line headers).

```
## This is a header {.subtitle}

This is a paragraph block without any additional classes.

This a paragraph with dropcaps and blockquote indent.
{.dropcap .blockquote}
```

#### Header Attributes include:

* For document: .title .author .subtitle .copyright
* For section numbering:  
   * "+", "-" to toggle prefix
   * Literal value like "preface"
   * Specific number to set numering like "44"
* For table of contents
   * toc="" to override table of contents display 
   * .toc1, .toc2, .toc3 to specify toc level
* For formatting: .center .right

#### Block Attributes include

* Formatting: .dropcap .blockquote .center .right 
* List styles: .list .verse 
* Unnumbered types: .ed .sig .sit .noid

### Footnotes

* Footnotes are standard MD ([^#]) but are rendered as <aside> blocks immediately following the paragraph

### Page Markers

* The tag [pg #] or [pg#] will be rendered <span data-pg="#"></span>

### Underscored transliterations 

* K_h, D_h, T_h, C_h and Z_h will be rendered as <u>Kh</u>

 





