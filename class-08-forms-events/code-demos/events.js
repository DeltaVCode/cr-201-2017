'use strict';

// Don't do this
// <body onload="doOnLoad()">
function doOnLoad() {
  console.log('Loaded!');
}

// Don't usually do this
window.onresize = function() {
  console.log('Resized!');
};

// Do this instead
window.addEventListener('load', doOnLoadViaEventListener);

function doOnLoadViaEventListener() {
  console.log('Load via event listener');
}

window.addEventListener('load', function() {
  console.log('Another listener for window load');
});

/* Form Submit Example */
var form = document.querySelector('form');
form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  console.log(event);

  // Do interesting stuff

  event.preventDefault();
}

document.addEventListener('click', function(event){
  console.log('click at ' + event.clientX + ',' + event.clientY);
});

var demoFieldset = document.getElementById('demo-fieldset');
demoFieldset.addEventListener('click', function() {
  console.log('click on form');
});

function formSubmitClick(event) {
  console.log('submit click');
  console.log(event);
}

var demoFieldsetSubmit = document.querySelector('#demo-fieldset input[type="submit"]');
demoFieldsetSubmit.addEventListener('click', formSubmitClick);

function textInputNotEmpty(event){
  console.log(event);
  if (event.target.value === '') {
    console.log ('You need to fill out all text fields');
  }
}

var textInputs = document.querySelectorAll('input[type="text"]');
console.log(textInputs);
for(var i = 0; i < textInputs.length; i++){
  textInputs[i].addEventListener('blur', textInputNotEmpty);
}
