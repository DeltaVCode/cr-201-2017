// Line Chart representing buyers

var buyerData = {
  labels: ['Jan', 'Feb', 'Feb2', 'Feb3'],
  datasets: [
    {
      fillColor: 'rgba(0,0,0,0.4)',
      strokeColor: '#333',
      pointColor:'#ab3434',
      pointStrokeColor: '#ab3434',
      data: [50, 100, 75, 150]
    }
  ]
};

var buyers = document.getElementById('buyers').getContext('2d');
new Chart(buyers, {
  data: buyerData,
  type: 'line'
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
