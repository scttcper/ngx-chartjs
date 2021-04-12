import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  ViewChild,
} from '@angular/core';
import type { Chart, ChartData, ChartOptions, ChartType, UpdateMode } from 'chart.js';

declare let require: any;

@Component({
  selector: 'ngx-chartjs',
  template: `<canvas #ref [attr.height]="height" [attr.width]="width"></canvas>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartjsComponent implements AfterViewInit, OnChanges {
  @ViewChild('ref', { static: true }) ref!: ElementRef<HTMLCanvasElement>;
  @Input() type!: ChartType;
  @Input() data!: ChartData;
  @Input() options!: ChartOptions;
  @Input() height = 150;
  @Input() width = 300;
  @Input() plugins?: any[];
  @Input() redraw?: boolean;
  @Input() updateMode?: UpdateMode;
  chartInstance?: Chart;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges(changes: any) {
    if (this.chartInstance && this.redraw) {
      this.chartInstance.destroy();
      this.renderChart();
      return;
    }

    this.updateChart();
  }

  updateChart() {
    if (!this.chartInstance) {
      return;
    }

    this.chartInstance.data = this.data;
    this.chartInstance.options = this.options;
    this.chartInstance.update(this.updateMode);
  }

  renderChart() {
    const node = this.ref.nativeElement;

    // In order to allow for universal rendering, we import chartjs runtime with `require` to prevent node errors
    // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/no-shadow
    const { Chart } = require('chart.js');
    this.zone.runOutsideAngular(() => {
      this.chartInstance = new Chart(node, {
        type: this.type,
        data: this.data,
        options: this.options,
        plugins: this.plugins,
      });
    });
  }
}
