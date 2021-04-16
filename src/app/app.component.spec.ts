import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ChartjsModule } from '../lib/public_api';
import { AppComponent } from './app.component';
import { BarExampleComponent } from './bar-example/bar-example.component';
import { DoughnutExampleComponent } from './doughnut-example/doughnut-example.component';
import { DynamicDoughnutExampleComponent } from './dynamic-doughnut-example/dynamic-doughnut-example.component';
import { LineExampleComponent } from './line-example/line-example.component';
import { PieExampleComponent } from './pie-example/pie-example.component';
import { PolarExampleComponent } from './polar-example/polar-example.component';
import { RadarExampleComponent } from './radar-example/radar-example.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DoughnutExampleComponent,
        DynamicDoughnutExampleComponent,
        PieExampleComponent,
        BarExampleComponent,
        RadarExampleComponent,
        PolarExampleComponent,
        LineExampleComponent,
      ],
      imports: [FormsModule, ChartjsModule],
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
