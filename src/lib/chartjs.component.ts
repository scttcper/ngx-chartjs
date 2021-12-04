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
  styles: [':host { display: block }'],
})
export class ChartjsComponent implements AfterViewInit, OnChanges {
  @ViewChild('ref') ref!: ElementRef<HTMLCanvasElement>;
  @Input() type!: ChartType;
  @Input() data!: ChartData;
  @Input() options!: ChartOptions;
  @Input() height = 150;
  @Input() width = 300;
  @Input() plugins?: any[];
  /** Force destroy and redraw on chart update */
  @Input() redraw?: boolean;
  @Input() updateMode?: UpdateMode;
  chartInstance!: Chart;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges() {
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
    this.zone.runOutsideAngular(async () => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { Chart } = await import('chart.js');
      this.chartInstance = new Chart(node, {
        type: this.type,
        data: this.data,
        options: this.options,
        plugins: this.plugins,
      });
    });
  }
}
