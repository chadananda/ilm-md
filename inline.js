  var ilm_md = require('./main.js') 
 
window.onload = function () { 
  var markdown_data = document.body.innerHTML.trim() 
  console.time('Processing Markdown')  
  var ilm = ilm_md(markdown_data)
  console.timeEnd('Processing Markdown')  
  document.body.innerHTML = ilm.html  
  document.body.style.display = 'block'     
}