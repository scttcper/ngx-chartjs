import { Component } from '@angular/core';

function colorize(opaque, context) {
  const value = context.dataset.data[context.dataIndex];
  const x = value.x / 100;
  const y = value.y / 100;
  const r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
  const g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
  const b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
  const a = opaque ? 1 : 0.5 * value.v / 1000;

  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

@Component({
  selector: 'app-bubble-example',
  template: `
  <h3>Bubble Example</h3>
  <ngx-chartjs [data]="data" type="bubble" [legend]="legend" [options]="options"></ngx-chartjs>
  `,
})
export class BubbleExampleComponent {
  legend = { display: false };
  data = {
    datasets: [
      {
        data: [
          {
            x: -0.7298096707819184,
            y: 14.870541838134443,
            v: 54.95970507544581,
          },
          {
            x: -52.115483539094654,
            y: 76.71789266117969,
            v: 23.799725651577504,
          },
          {
            x: -6.857638888888886,
            y: 19.930984224965727,
            v: 323.6582647462277,
          },
          {
            x: -10.78960905349794,
            y: -51.323516803840874,
            v: 371.20198902606313,
          },
          {
            x: 40.25527263374485,
            y: -32.878943758573385,
            v: 583.0975651577503,
          },
          {
            x: 0.44367283950614933,
            y: -70.56862997256515,
            v: 376.0116598079561,
          },
          {
            x: -26.057741769547334,
            y: -60.22590877914952,
            v: 166.61093964334705,
          },
          {
            x: 64.91769547325103,
            y: -147.6841135116598,
            v: 371.56207133058984,
          },
          {
            x: -122.4633487654321,
            y: 21.223422496570635,
            v: 407.53172153635114,
          },
          { x: 15.965792181069958, y: 50.66336591220852, v: 691.1865569272977 },
          { x: 84.37178497942386, y: 44.80238340192042, v: 639.193244170096 },
          {
            x: -63.078703703703695,
            y: -142.19285836762688,
            v: 668.2184499314129,
          },
          { x: -72.2190072016461, y: 93.8443072702332, v: 194.92884087791495 },
          {
            x: -88.88245884773663,
            y: -142.91945301783264,
            v: 635.9910836762689,
          },
          { x: -8.90239197530866, y: 1.6825274348422568, v: 408.0718449931413 },
          {
            x: 21.88786008230454,
            y: -118.18308470507544,
            v: 927.8377914951989,
          },
        ],
      },
      {
        data: [
          {
            x: -142.34503600823047,
            y: -148.34962277091907,
            v: 611.9555898491084,
          },
          {
            x: -147.4344135802469,
            y: 15.349579903978054,
            v: 877.0919067215364,
          },
          {
            x: -139.2136059670782,
            y: -22.918810013717433,
            v: 139.9134087791495,
          },
          { x: -13.51594650205763, y: 91.01187414266118, v: 817.0867626886146 },
          { x: 83.8252314814815, y: -38.69170096021948, v: 325.2786351165981 },
          { x: 6.976594650205783, y: -57.86286865569272, v: 81.1556927297668 },
          {
            x: -139.8951903292181,
            y: -112.3349622770919,
            v: 501.3846021947874,
          },
          {
            x: -2.6234567901234698,
            y: -97.94131515775034,
            v: 2.632030178326475,
          },
          { x: 22.95846193415636, y: 89.48473936899865, v: 1.5646433470507546 },
          { x: 41.01723251028807, y: 54.109867969821664, v: 914.8491083676269 },
          {
            x: -94.28047839506172,
            y: -99.89926268861454,
            v: 159.15209190672152,
          },
          {
            x: -28.768004115226333,
            y: -18.375985939643357,
            v: 151.14026063100135,
          },
          { x: 91.7213220164609, y: -97.15363511659808, v: 307.48028120713303 },
          {
            x: -128.64583333333334,
            y: 17.934456447187927,
            v: 44.838820301783265,
          },
          {
            x: -85.70280349794238,
            y: -68.94504458161866,
            v: 779.8825445816186,
          },
          {
            x: 74.71707818930042,
            y: -3.6254715363511423,
            v: 929.2781207133058,
          },
        ],
      },
    ],
  };
  options = {
    aspectRatio: 1,
    legend: false,
    tooltips: false,
    elements: {
      point: {
        backgroundColor: colorize.bind(null, false),

        borderColor: colorize.bind(null, true),

        borderWidth(context) {
          return Math.min(Math.max(1, context.datasetIndex + 1), 8);
        },

        hoverBackgroundColor: 'transparent',

        hoverBorderWidth(context) {
          const value = context.dataset.data[context.dataIndex];
          return Math.round(8 * value.v / 1000);
        },

        radius(context) {
          const value = context.dataset.data[context.dataIndex];
          const size = context.chart.width;
          const base = Math.abs(value.v) / 1000;
          return size / 24 * base;
        },
      },
    },
  };
}
