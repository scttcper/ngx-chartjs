import { Component } from '@angular/core';

@Component({
  selector: 'app-polar-example',
  template: `
  <h2>Polar Example</h2>
  <ngx-chartjs [data]="data" [options]="options" type="polarArea"></ngx-chartjs>
  `,
})
export class PolarExampleComponent {
  data = {
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
  options = {
    responsive: true,
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Polar Area Chart',
    },
    scale: {
      ticks: {
        beginAtZero: true,
      },
      reverse: false,
    },
    animation: {
      animateRotate: false,
      animateScale: true,
    },
  };
}
