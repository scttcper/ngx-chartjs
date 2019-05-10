import { Component } from '@angular/core';

// tslint:disable-next-line: variable-name
let _seed = Math.random() * 100;

function rand(min, max) {
  const seed = _seed;
  min = min === undefined ? 0 : min;
  max = max === undefined ? 1 : max;
  _seed = (seed * 9301 + 49297) % 233280;
  return min + _seed / 233280 * (max - min);
}
function randomScalingFactor() {
  return Math.round(rand(-100, 100));
}

@Component({
  selector: 'app-mixed-data-example',
  template: `
  <h3>Mixed data Example</h3>
  <ngx-chartjs [data]="data" type="bar" [options]="options" [plugins]="plugins">
  </ngx-chartjs>
  `,
})
export class MixedDataExampleComponent {
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        fill: false,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: 'rgb(75, 192, 192)',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
      },
    ],
  };
  options = {
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Combo Bar Line Chart',
    },
    tooltips: {
      mode: 'index',
      intersect: true,
    },
  };
  plugins = [
    {
      afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 420, 0);
        gradient.addColorStop('0', 'magenta');
        gradient.addColorStop('0.5', 'blue');
        gradient.addColorStop('1.0', 'red');
        ctx.fillStyle = gradient;
        ctx.fillText('This text drawn by a plugin', 200, 100);
      },
    },
  ];
}
