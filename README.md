<div align="center">
  <h1>ngx-chartjs</h1>
  <br>
  <a href="https://www.npmjs.com/package/@ctrl/ngx-chartjs">
    <img src="https://img.shields.io/npm/v/@ctrl/ngx-chartjs.svg" alt="npm">
  </a>
  <a href="https://travis-ci.com/TypeCtrl/ngx-chartjs">
    <img src="https://travis-ci.com/TypeCtrl/ngx-chartjs.svg?branch=master" alt="travis">
  </a>
  <a href="https://codecov.io/github/typectrl/ngx-chartjs">
    <img src="https://img.shields.io/codecov/c/github/typectrl/ngx-chartjs.svg" alt="codecov">
  </a>
  <br>
  <br>
</div>


> Functional [Chart.js](https://www.chartjs.org/) wrapper for Angular 

Based on [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2)  

Demo: https://typectrl.github.io/ngx-chartjs/

## Install
requires the js package __chart.js__
```sh
npm install @ctrl/ngx-chartjs chart.js
```

## Use
Import and Add to module
```ts
import { ChartjsModule } from '@ctrl/ngx-chartjs';
```
setup data and other settings
```ts
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      borderWidth: 1,
    },
  ],
};
```
Add ngx-chartjs directive to element
```html
<ngx-chartjs [data]="data" type="bar"></ngx-chartjs>
```
## [Inputs]

| name    | type        | default                               | description                                                                                      |
| ------- | ----------- | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| type    | `string`    | `'doughnut'`                          | chart.js type 'bar', 'line', etc.                                                                |
| data    | `ChartData` | `{}`                                  | chart.js data object, [see docs](https://www.chartjs.org/docs/latest/getting-started/usage.html) |
| plugins | `any[]`     | `[]`                                  | chart.js plugin array, [see docs](https://www.chartjs.org/docs/latest/developers/plugins.html)   |
| redraw  | `boolean`   | `false`                               | force redraw on any input change, like to change legend                                          |
| options | `any`       | `{}`                                  | chart.js options                                                                                 |
| legend  | `any`       | `{display: true, position: 'bottom'}` | chart.js legend [see docs](https://www.chartjs.org/docs/latest/configuration/legend.html)        |
| width   | `number`    | `300`                                 | canvas width                                                                                     |
| height  | `number`    | `150`                                 | canvas height                                                                                    |

### Tips
__data__: do not modify data as change detection will not fire, only replace with new object  
__legend__: can also be overwritten via options  

## (Ouput)

Chart.js events are available via options or legend object, otherwise a canvas click event is exposed for use

| name       | type              | description                                                                                                                                              |
| ---------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chartClick | `ChartClickEvent` | returns the click $event along with element, elements and dataset [see docs](https://www.chartjs.org/docs/latest/developers/api.html#getelementatevente) |

## License
MIT

---

> GitHub [@scttcper](https://github.com/scttcper) &nbsp;&middot;&nbsp;
> Twitter [@scttcper](https://twitter.com/scttcper)
