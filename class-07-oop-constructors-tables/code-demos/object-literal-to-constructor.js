function randomCount() {
  return Math.random() * this.max;
};

var myOtherStore = {
  max: 12,
  getRandomCustomerCount: randomCount,
};
myOtherStore.getRandomCustomerCount();

var myStore = {
  min: 10,
  max: 30,
  cookiesPerHour: 3.14,

  getRandomCustomerCount: randomCount,

};

// myStore.generateCustomerCountByHour();
//   ^--- `this` inside generateCustomerCountByHour

/*
Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

Store the results for each location in a separate array... perhaps as a property of the object representing that location
*/

function CookieStore(name, minCustomerCount, maxCustomerCount, cookiesPerHour, hourToOpen, hourToClose) {
  this.name = name;
  this.min = minCustomerCount || 10;
  this.max = maxCustomerCount || 100;
  this.cookiesPerHour = cookiesPerHour || 10;
  this.hourToOpen = hourToOpen || this.defaultHourToOpen;
  this.hourToClose = hourToClose || 21;

  this.generateCustomerCountByHour();
}

CookieStore.prototype.defaultHourToOpen = 6;

CookieStore.prototype.getRandomCustomerCount = randomCount;

CookieStore.prototype.generateCustomerCountByHour = function() {
  this.simulatedCookiesPerHour = [
    // 6:00
    this.getRandomCustomerCount() * this.cookiesPerHour,
    // 7:00
    this.getRandomCustomerCount() * this.cookiesPerHour,
    // But don't hard-code this repetitive calcultion;
    // use a loop instead...
    this.getRandomCustomerCount() * this.cookiesPerHour,
  ];
};

var anotherStore = new CookieStore('Keith\'s Cookies', 100, 110, 95.2);
anotherStore.generateCustomerCountByHour();

var myAwesomeStores = [
  new CookieStore('Uno', 12, 50, 17),
  new CookieStore('Dos', 15, 20, 75),
  new CookieStore('Tres'),
];
console.log(anotherStore);
console.log(myAwesomeStores);
