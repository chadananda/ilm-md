# ilm-md
Custom markdown parser for ILM

## Features

* Parses Yaml front-matter metadata
* Allows adding attributes to blocks
* Understands transliterated glyph characters
* Provides a remote URL for testing markdown


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

### Block classes

Classes and attributes can be added to any text block Pandoc-style by appending a line with the list of classes, id and attributes. In the case of headers and sub-headers, these should be added on the same line. (Since Markdown does not support multi-line headers).

```
## This is a header {.subtitle}

This is a paragraph block without any additional classes.

This a paragraph with dropcaps and blockquote indent.
{.dropcap .blockquote}
```

 





