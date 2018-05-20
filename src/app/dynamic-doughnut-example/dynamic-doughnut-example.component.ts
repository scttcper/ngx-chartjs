import { Component, OnInit } from '@angular/core';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'app-dynamic-doughnut-example',
  template: `
  <h3>Dynamicly refreshed Doughnut Example</h3>
  <ngx-chartjs [data]="data"></ngx-chartjs>
  `,
})
export class DynamicDoughnutExampleComponent implements OnInit {
  data = this.getState();

  ngOnInit() {
    setInterval(() => {
      this.data = this.getState();
    }, 4200);
  }

  getState() {
    return {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          data: [
            getRandomInt(50, 200),
            getRandomInt(100, 150),
            getRandomInt(150, 250),
          ],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  }
}
