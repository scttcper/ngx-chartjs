import { Component, OnInit, ViewChild } from '@angular/core';
import type { ChartData, ChartOptions } from 'chart.js';

import { ChartjsComponent } from '../../lib/chartjs.component';

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

@Component({
  selector: 'app-dynamic-doughnut-example',
  template: `
    <h3>Dynamicly refreshed Doughnut Example</h3>
    <ngx-chartjs #ref type="doughnut" [data]="data" [options]="options"></ngx-chartjs>
  `,
})
export class DynamicDoughnutExampleComponent implements OnInit {
  @ViewChild('ref', { static: true }) ref!: ChartjsComponent;
  data = this.getState();
  options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart',
      },
    },
  };

  ngOnInit() {
    setInterval(() => {
      this.ref.chartInstance.data.datasets[0].data = this.getState().datasets[0].data;
      this.ref.chartInstance.update();
    }, 1500);
  }

  getState(): ChartData {
    return {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  }
}
