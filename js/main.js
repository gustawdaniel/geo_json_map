$(function() {

  // Prepare demo data
  var data = [{
    "hc-key": "pl-ld",
    "value": 468419.44
  }, {
    "hc-key": "pl-mz",
    "value": 698560.5
  }, {
    "hc-key": "pl-sk",
    "value": 350442.72
  }, {
    "hc-key": "pl-pd",
    "value": 197554.42
  }, {
    "hc-key": "pl-lu",
    "value": 237033.92
  }, {
    "hc-key": "pl-pk",
    "value": 388674.23
  }, {
    "hc-key": "pl-op",
    "value": 363109.36
  }, {
    "hc-key": "pl-ma",
    "value": 773743.26
  }, {
    "hc-key": "pl-wn",
    "value": 193382.4
  }, {
    "hc-key": "pl-pm",
    "value": 472082.94
  }, {
    "hc-key": "pl-ds",
    "value": 556905.32
  }, {
    "hc-key": "pl-zp",
    "value": 255157.5
  }, {
    "hc-key": "pl-lb",
    "value": 290086.3
  }, {
    "hc-key": "pl-wp",
    "value": 396885.88
  }, {
    "hc-key": "pl-kp",
    "value": 379683.08
  }, {
    "hc-key": "pl-sl",
    "value": 1436783.04
  }];

  // Initiate the chart
  $('#container').highcharts('Map', {

    title: {
      text: 'Highmaps basic demo'
    },

    subtitle: {
      text: 'Source map: <a href="https://code.highcharts.com/mapdata/countries/pl/pl-all.js">Poland</a>'
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },

    colorAxis: {
      min: 0
    },

    series: [{
      data: data,
      mapData: Highcharts.maps['countries/pl/pl-all'],
      joinBy: 'hc-key',
      name: 'Random data',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }]
  });
});
