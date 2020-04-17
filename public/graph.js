// Plotly.d3.csv(
//   'https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv',
//   function(err, rows) {
//     function unpack(rows, key) {
//       return rows.map(function(row) {
//         return row[key];
//       });
//     }

//     var trace1 = {
//       type: 'scatter',
//       mode: 'lines',
//       x: unpack(rows, 'Date'),
//       y: unpack(rows, 'AAPL.High'),
//       line: { color: '#17BECF' }
//     };

//     var trace2 = {
//       type: 'scatter',
//       mode: 'lines',
//       x: unpack(rows, 'Date'),
//       y: unpack(rows, 'AAPL.Low'),
//       line: { color: '#7F7F7F' }
//     };

//     var selectorOptions = {
//       buttons: [
//         {
//           step: 'month',
//           stepmode: 'backward',
//           count: 1,
//           label: '1m'
//         },
//         {
//           step: 'month',
//           stepmode: 'backward',
//           count: 6,
//           label: '6m'
//         },
//         {
//           step: 'year',
//           stepmode: 'todate',
//           count: 1,
//           label: 'YTD'
//         },
//         {
//           step: 'year',
//           stepmode: 'backward',
//           count: 1,
//           label: '1y'
//         },
//         {
//           step: 'all'
//         }
//       ]
//     };

//     //DATE PICKER
//     $(function() {
//       $('#daterange').daterangepicker(
//         //#daterange is the element property - for DOM access
//         {
//           timePicker: true,
//           startDate: moment().startOf('hour'),
//           endDate: moment()
//             .startOf('hour')
//             .add(32, 'hour'),
//           locale: {
//             //the label of date that shows in the DOM
//             format: 'Y/M/DD hh:mm'
//           },
//           timePicker24Hour: true
//         },
//         function(start, end, label) {
//           console.log(
//             'A new date selection was made: ' +
//               start.format('YYYY-MM-DD hh:mm') +
//               ' to ' +
//               end.format('YYYY-MM-DD hh:mm')
//           );
//         }
//       );
//     });

//     //event listener to all elements whos properties are related to #daterange - console log selected dates

//     let [date1, date2] = [];

//     $('#daterange').on('apply.daterangepicker', function(ev, picker) {
//       console.log(picker.startDate.format('YYYY-MM-DD hh:mm'));
//       console.log(picker.endDate.format('YYYY-MM-DD hh:mm'));

//       date1 = picker.startDate.format('YYYY-MM-DD hh:mm');
//       date2 = picker.endDate.format('YYYY-MM-DD hh:mm');

//       layout.xaxis.range[0] = date1;
//       layout.xaxis.range[1] = date2;

//       console.log(layout);

//       let update = {
//         'xaxis.range': [date1, date2] // updates the xaxis range
//       };
//       Plotly.relayout('myDiv', update);
//     });

//     var data = [trace1, trace2];

//     var layout = {
//       title: 'Custom Range',
//       xaxis: {
//         range: [],
//         rangeselector: selectorOptions,
//         type: 'date',
//         tickformatstops: [
//           {
//             dtickrange: [null, 1000],
//             value: '%SS %LMS'
//           },
//           {
//             dtickrange: [1000, 60000],
//             value: '%MM %SS'
//           },
//           {
//             dtickrange: [60000, 3600000],
//             value: '%HH %MM'
//           },
//           {
//             dtickrange: [3600000, 86400000],
//             value: '%B %d, %H:%M'
//           },
//           {
//             dtickrange: [86400000, 604800000],
//             value: '%B %d'
//           },
//           {
//             dtickrange: [604800000, 'M1'],
//             value: '%B %d %Y'
//           },
//           {
//             dtickrange: ['M1', 'M12'],
//             value: '%B %Y'
//           },
//           {
//             dtickrange: ['M12', null],
//             value: '%Y'
//           }
//         ]
//       },
//       yaxis: {
//         autorange: true,
//         range: [86.8700008333, 138.870004167],
//         type: 'linear'
//       }
//     };

//     var config = { responsive: true };

//     Plotly.newPlot('myDiv', data, layout, { scrollZoom: true }, config);
//     console.log(layout);
//   }
// );
