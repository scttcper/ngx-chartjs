import { Component, OnInit } from '@angular/core';
import { random } from '@ctrl/tinycolor';
import * as pattern from 'patternomaly';

@Component({
  selector: 'app-crazy-data-line-example',
  template: `
  <h3>You can even make crazy graphs like this!</h3>
  <ngx-chartjs type="bar" [data]="data" [legend]="legend"></ngx-chartjs>
  `,
})
export class CrazyDataLineExampleComponent implements OnInit {
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: pattern.generate(
          random({ count: 7 }).map(n => n.toHexString()),
        ),
        borderColor: '#000',
        borderWidth: 1,
        hoverBackgroundColor: '#000',
        hoverBorderColor: '#000',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  legend = {
    display: false,
  };

  ngOnInit() {
    setInterval(() => {
      const oldDataSet = this.data.datasets[0];
      const newData: number[] = [];

      for (const _ of this.data.labels) {
        newData.push(Math.floor(Math.random() * 100));
      }

      const newDataSet = {
        ...oldDataSet,
      };

      newDataSet.data = newData;
      newDataSet.backgroundColor = pattern.generate(
        random({ count: 7 }).map(n => n.toHexString()),
      );
      newDataSet.borderColor = '#000';
      newDataSet.hoverBackgroundColor = '#000';
      newDataSet.hoverBorderColor = '#000';

      this.data = {
        ...this.data,
        datasets: [newDataSet],
      };
    }, 6200);
  }
}
