import { Component } from '@angular/core';

@Component({
  selector: 'app-line-example',
  template: `
    <h2>Line Example</h2>
    <ngx-chartjs [data]="data" type="line"></ngx-chartjs>
  `,
})
export class LineExampleComponent {
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        lineTension: 0.1,
      },
    ],
  };
}
