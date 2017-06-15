'use strict';
var multiply;

console.log('Does sum exist yet?');
console.log(sum);
console.log('Does multiply exist yet?');
console.log(multiply);
console.log('Does c exist yet?');
console.log(c);
//console.log('Does d exist yet?');
//console.log(d);

function sum(a, b) {
  return a + b + c;
}

var multiply;

console.log('Does multiply exist now?');
console.log(multiply);

// IIFE = Immediately Invoked Function Expression
(function () {
  console.log('Executing my IIFE');

  console.log('Does c exist in IIFE?');
  console.log(c);

  var c = 3.0e8;
  var d = 'dog';

  multiply = function(a, b) { return a * b; };

  console.log('Does c exist in IIFE now?');
  console.log(c);
})();

console.log('Does multiply exist after IIFE?');
console.log(multiply);

var c;

console.log('Does c exist yet?');
console.log(c);

// PUGBOMB!!!!!
var pugbombButton = document.body.appendChild(document.createElement('button'));
pugbombButton.addEventListener('click', pugbombButtonHandler('HELLO'));
pugbombButton.addEventListener('click', pugbombButtonHandler('Second message'));
pugbombButton.addEventListener('click', pugbombButtonHandler());

function pugbombButtonHandler(message) {
  return function() {
    console.log(message || 'PUGBOMB!!!!');
  };
}
