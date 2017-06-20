var products = [
  {
    name: 'Funny Lamp',
    clicks: 17,
    impressions: 50
  },
  {
    name: 'Funny Hat',
    clicks: 0,
    impressions: 25
  },
  {
    name: 'Watering Can',
    clicks: 12,
    impressions: 90
  },
  {
    name: 'Talking Fish',
    clicks: 25,
    impressions: 30
  }
];

var productNames = products.map(function(product) {
  return product.name;
});
var productClicks = products.map(function(product) {
  return product.clicks;
});
var productImpressions = products.map(function(product) {
  return product.impressions;
});
console.log(productNames);
console.log(productClicks);

// Line Chart representing buyers

var buyerData = {
  labels: productNames,
  datasets: [
    {
      label: 'Clicks',
      fillColor: 'rgba(0,0,0,0.4)',
      strokeColor: '#333',
      pointColor:'#ab3434',
      pointStrokeColor: '#ab3434',
      data: productClicks
    },
    {
      label: 'Impresions',
      data: productImpressions,
    }
  ]
};

var buyerCanvas = document.getElementById('buyers').getContext('2d');
new Chart(buyerCanvas, {
  data: buyerData,
  options: {
    scales: {
      xAxes: [{
        stacked: true
      }]
    }
  },
  type: 'bar'
});

// Pie Chart representing countries

var pieData = {
  datasets: [
    {
      label: 'Pie Chart - Countries',
      backgroundColor: [
        'red',
        'green',
        'blue',
        'yellow'
      ],
      data: [
        30,
        50,
        10,
        10
      ]
    }
  ],
  labels: [
    'red',
    'green',
    'blue',
    'yellow'
  ]
};

var pieOptions = {
  segmentShowStroke: false,
  animateScale: true
};

var countries = document.getElementById('countries').getContext('2d');
new Chart(countries, {
  data: pieData,
  options: pieOptions,
  type: 'pie'
});

// BAR Chart

var barData = {
  labels: ['col1', 'col2', 'col3', 'col4'],
  datasets: [{
    label: 'Bar Chart',
    borderWidth: 1,
    data: [
      42,
      52,
      73,
      -91
    ]
  }]
};

var income = document.getElementById('income').getContext('2d');
new Chart(income, {
  type: 'bar',
  data: barData
});
