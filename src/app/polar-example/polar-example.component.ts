import { Component } from '@angular/core';
import type { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-polar-example',
  template: `
    <h3>Polar Example</h3>
    <ngx-chartjs type="polarArea" [data]="data" [options]="options"></ngx-chartjs>
  `,
})
export class PolarExampleComponent {
  data: ChartData = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
      },
    ],
  };
  options: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Polar Area Chart',
      },
      legend: {
        position: 'top',
      },
    },
    animation: {
      // animateRotate: false,
      // animateScale: true,
    },
  };
}
