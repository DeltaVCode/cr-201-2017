'use strict';
console.log('app.js loaded');

var form = document.getElementById('store-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  var storeInput = event.target.querySelector('input[name="storeName"]');

  stores.push(new Store(storeInput.value));
  console.log(stores);

  addStoresToLocalStorage();
  renderStores();

  storeInput.value = '';
});

var list = document.getElementById('store-list');
function renderStores() {
  list.innerHTML = '';

  stores.forEach(function (store) {
    var li = document.createElement('li');
    var button = document.createElement('button');
    button.textContent = store.name;

    button.addEventListener('click', function () {
      store.clicks++;
      console.log(store);
      addStoresToLocalStorage();
    });

    li.appendChild(button);
    list.appendChild(li);
  });
};

function Store(name, clicks) {
  this.name = name;
  this.clicks = clicks || 0;
}

var stores = getStoresFromLocalStorage() || createDefaultStores();
console.log(stores);
renderStores();

function createDefaultStores() {
  return [
    new Store('One'),
    new Store('Two')
  ];
}

function getStoresFromLocalStorage() {
  var storesString = window.localStorage.stores;
  if (!storesString) {
    return null;
  }

  var storesFromJson = JSON.parse(storesString);
  return storesFromJson.map(function(storeObj) {
    console.log(storeObj);
    return new Store(storeObj.name, storeObj.clicks);
  });
}

function addStoresToLocalStorage() {
  window.localStorage.stores = JSON.stringify(stores);
  console.log(window.localStorage.stores);
}
