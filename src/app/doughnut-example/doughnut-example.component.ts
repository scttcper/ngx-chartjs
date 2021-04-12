import { Component } from '@angular/core';
import type { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-doughnut-example',
  template: `
    <h3>Doughnut Example</h3>
    <ngx-chartjs type="doughnut" [data]="data" [options]="options"></ngx-chartjs>
  `,
})
export class DoughnutExampleComponent {
  data: ChartData = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  options: ChartOptions = {
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      title: {
        display: true,
        text: 'DoughnutExampleComponent',
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };
}
