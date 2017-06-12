'use strict';

console.log('dom.js loaded');

// Replace link text with link href
var listItems = document.getElementsByTagName('li');
for(var i = 0; i < listItems.length; i++) {
  var li = listItems[i];
  var a = li.firstElementChild; // Link to GitHub/DV
  if (!a) {
    continue;
  }
  console.log(a);

  a.innerText += ' (' + a.getAttribute('href') + ')';
}

var ul = document.getElementById('nav-ul');
console.log(ul);
