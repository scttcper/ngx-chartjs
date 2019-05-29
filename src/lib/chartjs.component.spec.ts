import { Component, NgModule, ViewChild } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { Chart } from 'chart.js';

import { ChartjsComponent } from './chartjs.component';
import { ChartjsModule } from './chartjs.module';

@Component({
  selector: 'test-component',
  template: `
  <ngx-chartjs #c [type]="type" [data]="data" width="300" [height]="height" [redraw]="redraw"></ngx-chartjs>
  `,
})
export class TestComponent {
  @ViewChild('c', { static: true }) chartjs: ChartjsComponent;
  redraw = false;
  height = 300;
  type = 'bar';
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
}

@NgModule({
  imports: [ChartjsModule],
  declarations: [TestComponent],
})
export class NameModule {}

describe('ChartjsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NameModule],
    }).compileComponents();
  }));
  it('should call render', async(() => {
    const spy = spyOn(Chart.prototype, 'render');
    const fixture = TestBed.createComponent(TestComponent);
    const tc: TestComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(tc).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  }));
  it('should call renderChart', async(() => {
    const fixture = TestBed.createComponent(TestComponent);
    const tc: TestComponent = fixture.componentInstance;
    fixture.detectChanges();
    const spy = spyOn(tc.chartjs, 'renderChart');
    tc.redraw = true;
    const data = { ...tc.data };
    data.datasets[0].data = data.datasets[0].data.map(n => n + 1);
    tc.data = data;
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));
});
