import { Component } from '@angular/core';

@Component({
  selector: 'app-legend-options-example',
  template: `
  <h3>Legend Options Example</h3>
  <textarea
    cols="40"
    rows="15"
    [(ngModel)]="legendValue">
  </textarea>
  <div>
    <button (click)="applyLegendSettings()">Apply legend settings</button>
  </div>
  <ngx-chartjs [data]="data" type="polarArea" [legend]="legend" [redraw]="true">
  </ngx-chartjs>
  `,
})
export class LegendOptionsExampleComponent {
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
  legend = {};
  legendValue = JSON.stringify(
    {
      display: true,
      position: 'top',
      fullWidth: true,
      reverse: false,
      labels: {
        fontColor: 'rgb(255, 99, 132)',
      },
    },
    null,
    2,
  );

  applyLegendSettings() {
    try {
      const opts = JSON.parse(this.legendValue);
      this.legend = opts;
    } catch (e) {
      alert(e.message);
      throw Error(e);
    }
  }
}
