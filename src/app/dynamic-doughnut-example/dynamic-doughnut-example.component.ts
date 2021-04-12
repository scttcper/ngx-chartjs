import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

@Component({
  selector: 'app-dynamic-doughnut-example',
  template: `
    <h3>Dynamicly refreshed Doughnut Example</h3>
    <ngx-chartjs type="doughnut" [data]="data" updateMode="none"></ngx-chartjs>
  `,
})
export class DynamicDoughnutExampleComponent implements OnInit {
  data = this.getState();

  ngOnInit() {
    setInterval(() => {
      this.data = this.getState();
    }, 4500);
  }

  getState(): ChartData {
    return {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  }
}
