import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ChartData,
  ChartLegendOptions,
  ChartOptions,
  ChartType,
} from 'chart.js';
import keyBy from 'lodash-es/keyby';

declare var require: any;

@Component({
  selector: 'ngx-chartjs',
  template: `
  <!-- wrapping div required for height, width to work -->
  <div>
    <canvas
      #ref
      [attr.height]="height"
      [attr.width]="width"
      (click)="handleOnClick($event)"
    ></canvas>
  </div>
  `,
})
export class ChartjsComponent implements AfterViewInit, OnChanges {
  chartInstance: any;
  @ViewChild('ref') ref: ElementRef<HTMLCanvasElement>;
  @Output() chartClick = new EventEmitter<ChartClickEvent>();
  @Input() type: ChartType | string = 'doughnut';
  @Input() data: ChartData | any;
  @Input() height = 150;
  @Input() width = 300;
  @Input()
  legend: ChartLegendOptions | any = {
    display: true,
    position: 'bottom',
  };
  @Input() options: ChartOptions | any = {};
  @Input() plugins: any[];
  @Input() redraw = false;
  /** chart type */
  @Input() datasetKeyProvider: (x: any) => string = d => d.label;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.renderChart();
  }
  ngOnChanges(changes: any) {
    if (changes.firstChange) {
      return;
    }
    if (this.chartInstance && this.redraw) {
      this.chartInstance.destroy();
      this.renderChart();
      return;
    }
    this.updateChart();
  }

  updateChart() {
    const data = this.transformData();

    if (!this.chartInstance) {
      return;
    }

    if (this.options) {
      // in order to allow for universal rendering, we import Codemirror runtime with `require` to prevent node errors
      const Chart = require('chart.js');
      this.chartInstance.options = (Chart as any).helpers.configMerge(
        this.chartInstance.options,
        this.options,
      );
    }

    // Pipe datasets to chart instance datasets enabling
    // seamless transitions
    const currentDatasets: any[] =
      (this.chartInstance.config.data &&
        this.chartInstance.config.data.datasets) ||
      [];
    const nextDatasets = data.datasets || [];

    const currentDatasetsIndexed = keyBy(
      currentDatasets,
      this.datasetKeyProvider,
    );

    // We can safely replace the dataset array, as long as we retain the _meta property
    // on each dataset.
    this.chartInstance.config.data.datasets = nextDatasets.map(next => {
      const current = currentDatasetsIndexed[this.datasetKeyProvider(next)];

      if (current && current.type === next.type) {
        // The data array must be edited in place. As chart.js adds listeners to it.
        current.data.splice(next.data.length);
        next.data.forEach((point, pid) => {
          current.data[pid] = next.data[pid];
        });
        // Merge properties. Notice a weakness here. If a property is removed
        // from next, it will be retained by current and never disappears.
        // Workaround is to set value to null or undefined in next.
        return {
          ...current,
          ...next.otherProps,
        };
      }
      return next;
    });

    const { datasets, ...rest } = data;

    this.chartInstance.config.data = {
      ...this.chartInstance.config.data,
      ...rest,
    };

    this.chartInstance.update();
  }

  renderChart() {
    const node = this.ref.nativeElement;
    const data = this.transformData();

    if (typeof this.legend !== 'undefined') {
      const legendOptions = { ...this.legend, ...this.options.legend };
      this.options.legend = legendOptions;
    }

    // in order to allow for universal rendering, we import Codemirror runtime with `require` to prevent node errors
    const Chart = require('chart.js');

    this.zone.runOutsideAngular(() => {
      this.chartInstance = new Chart(node, {
        type: this.type,
        data,
        options: this.options,
        plugins: this.plugins,
      });
    });
  }

  transformData() {
    if (!this.data) {
      return;
    }
    if (typeof this.data === 'function') {
      const node = this.ref;
      return this.data(node);
    }
    return this.data;
  }

  handleOnClick($event: Event) {
    this.chartClick.emit({
      elements: this.chartInstance.getElementsAtEvent($event),
      element: this.chartInstance.getElementAtEvent($event),
      dataset: this.chartInstance.getDatasetAtEvent($event),
      $event,
    });
  }
}

export interface ChartClickEvent {
  elements: any[];
  element: any;
  dataset: any[];
  $event: Event;
}
