import { Component } from '@angular/core';

@Component({
  selector: 'app-doughnut-example',
  template: `<ngx-chartjs [data]="data"></ngx-chartjs>`,
})
export class DoughnutExampleComponent {
  data = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
}
