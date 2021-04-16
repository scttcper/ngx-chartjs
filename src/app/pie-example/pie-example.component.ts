import { Component } from '@angular/core';
import type { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-example',
  template: `
    <h3>Pie Example</h3>
    <ngx-chartjs type="pie" [data]="data" [options]="options"></ngx-chartjs>
  `,
})
export class PieExampleComponent {
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
    responsive: true,
  };
}
