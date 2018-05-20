import { Component } from '@angular/core';

@Component({
  selector: 'app-legend-handlers-example',
  template: `
  <h3>Legend Handlers Example</h3>
  <p>Hover over label and click</p>
  <ngx-chartjs [data]="data" [legend]="legend"></ngx-chartjs>
  `,
})
export class LegendHandlersExampleComponent {
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
  legend = {
    onClick: (e, item) =>
      alert(`Item with text ${item.text} and index ${item.index} clicked`),
    onHover: (e, item) =>
      alert(`Item with text ${item.text} and index ${item.index} hovered`),
  };
}
