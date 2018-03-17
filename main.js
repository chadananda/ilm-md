"use strict";

// var md = require('markdown-it')
var jsyaml = require('yaml-front-matter')
var css = require('./main.css')

var markdownItComments = require('markdown-it-inline-comments')
var markdownItAttrs = require('markdown-it-attrs')
// var markdownItReplacements = require('markdown-it-replacements')
//var markdownItUnderline = require('markdown-it-underline')
var markdownItFootnote = require('markdown-it-footnote')
var markdownItTableOfContents = require('markdown-it-toc-ilm') // my custom version
var markdownItAnchor = require('markdown-it-anchor')
var markdownItParnum = require('markdown-it-parnum')

var md = require('markdown-it')({
    html: true,
    linkify: true, // may want to control this
    typographer: true,
    quotes: '“”‘’',
  })
  //.use(markdownItComments)
  .use(markdownItAnchor)

  //.use(markdownItReplacements)
  //.use(markdownItUnderline)

  .use(markdownItFootnote)
  .use(markdownItParnum)
  .use(markdownItTableOfContents, {
    "includeLevel": [2,3,4,5],
    "containerClass": 'toc',
    "format": function(title) {
      // remove attributes from display
      return title.replace(/\{.*?\}[\s]*$/,'')
    }
  })
  .use(markdownItAttrs)



module.exports = function(markdownText) {
  var ilm = {
    raw_md: markdownText,
    attrs: {},
    raw_content: '',
    ilm_obj:  {},
    html_body: '',
    html_head: '',
    html: ''
  }
  // parse here please
  ilm.attrs = jsyaml.parse(markdownText.trim())
  ilm.raw_content = ilm.attrs.__content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  delete(ilm.attrs.__content)
  var html = md.render(ilm.raw_content)

  // glyph underscores
    .replace(/_([kcgsdzt]h)[_]?/ig, '<u>$1</u>')
    .replace(/<em>([kcgsdzt]h)<\/em>/ig, '<u>$1</u>')
  // glyph accents
    .replace(/\^[i]/g, 'í').replace(/\^[I]/g, 'Í')
    .replace(/\^[u]/g, 'ú').replace(/\^[U]/g, 'Ú')
    .replace(/\^[a]/g, 'á').replace(/\^[A]/g, 'Ú')
 // glyph dot-unders
    .replace(/\.[h]/g, 'ḥ').replace(/(\s)\.[H]/g, '$1Ḥ')
    .replace(/\.[s]/g, 'ṣ').replace(/(\s)\.[S]/g, '$1Ṣ')
    .replace(/\.[d]/g, 'ḍ').replace(/(\s)\.[D]/g, '$1Ḍ')
    .replace(/\.[t]/g, 'ṭ').replace(/(\s)\.[T]/g, '$1Ṭ')
  // glyph style ayn and hamza
    .replace(/\\6/g, '‘').replace(/\\9/g, '’')
   // fix un-fixed straight quotes (be careful, we are manipulating raw HTML)
    .replace(/([^\\])\'([\S])/g, '$1‘$2') .replace(/([^\\])\'/g, '$1’')
   // replace page marker
    .replace(/\[pg\s?(.*?)\]/ig, '<span data-pg="$1"></span>')
    
/**/
  ilm.html_body = html
  ilm.html = html
  return ilm
}

