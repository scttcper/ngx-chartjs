import { Component } from '@angular/core';
import type { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-example',
  template: `
    <h3>Line Example</h3>
    <ngx-chartjs type="line" [data]="data"></ngx-chartjs>
  `,
})
export class LineExampleComponent {
  data: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  options: ChartOptions = {
    responsive: true,
  };
}
