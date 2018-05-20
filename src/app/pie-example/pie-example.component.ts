import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-example',
  template: `
  <h2>Pie Example</h2>
  <ngx-chartjs [data]="data" type="pie"></ngx-chartjs>
  `,
})
export class PieExampleComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
