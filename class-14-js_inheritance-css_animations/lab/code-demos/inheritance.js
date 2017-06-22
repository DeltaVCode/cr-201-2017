// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

function LandAnimal() {}

LandAnimal.prototype.move = function() { console.log('I am a land animal, and I am moving.'); };

function Quadriped() {
  this.legs = 4;
}

Quadriped.prototype = new LandAnimal();
Quadriped.prototype.amputate = function() { this.legs--; };
Quadriped.prototype.move = function() { console.log('Walking on ' + this.legs + ' legs!'); };
Quadriped.prototype.constructor = Quadriped;

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype = new Quadriped();
Dog.prototype.move = function () { console.log('Run, ' + this.name + ', run!'); };
Dog.prototype.constructor = Dog;

var brent = new Dog('bront', 'Good Dog');

console.log(brent);
brent.move();

var tld = new Dog('John', 'Three Legged Dog');
tld.move();
tld.amputate();
tld.move();

var cat = new Quadriped();
cat.move();
cat.amputate();
cat.move();
cat.move = function() { console.log('We just changed how this cat moves!'); };
cat.move();

function Snake() { }
Snake.prototype = new LandAnimal();
Snake.prototype.constructor = Snake;
Snake.prototype.move = function() { console.log('Ssssssssssssssssssslither'); };

var snake = new Snake();
snake.move();
