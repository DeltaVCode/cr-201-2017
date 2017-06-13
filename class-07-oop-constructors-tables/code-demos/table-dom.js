'use strict';

var stores = [
  {
    name: 'Roasters',
    avgCustomersByHour: [10, 19, 8],
  },
  {
    name: 'Brewhemia',
    avgCustomersByHour: [12, 15, 25],
  },
];
console.log(stores);

var storeLocationsContainer = document.getElementById('store-locations');
console.log(storeLocationsContainer);

for (var i = 0; i < stores.length; i++) {
  var store = stores[i];

  console.log(store);
  addStoreRow(storeLocationsContainer, store);
}

function addStoreRow(container, store) {
  var storeRow = document.createElement('tr');

  var storeNameCell = document.createElement('td');
  storeNameCell.textContent = store.name;
  storeNameCell.setAttribute('colspan', 2);
  storeRow.appendChild(storeNameCell);

  addCellForEachHour(storeRow, store.avgCustomersByHour);

  container.appendChild(storeRow);
}

function addCellForEachHour(row, customersByHour) {
  for (var j = 0; j < customersByHour.length; j++) {
    var hourCell = document.createElement('td');
    hourCell.textContent = customersByHour[j];
    row.appendChild(hourCell);
  }
}
