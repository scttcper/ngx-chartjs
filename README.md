<div align="center">
  <h1>ngx-chartjs</h1>
  <br>
  <a href="https://www.npmjs.com/package/@ctrl/ngx-chartjs">
    <img src="https://img.shields.io/npm/v/@ctrl/ngx-chartjs.svg" alt="npm">
  </a>
  <a href="https://circleci.com/gh/scttcper/ngx-chartjs">
    <img src="https://circleci.com/gh/scttcper/ngx-chartjs.svg?style=svg" alt="travis">
  </a>
  <a href="https://codecov.io/github/scttcper/ngx-chartjs">
    <img src="https://img.shields.io/codecov/c/github/scttcper/ngx-chartjs.svg" alt="codecov">
  </a>
  <br>
  <br>
</div>

> Functional [Chart.js](https://www.chartjs.org/) wrapper for Angular

Based on [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2)

Demo: https://ngx-chartjs.vercel.app

## Install

requires peer dependency js package **chart.js**

```sh
npm install @ctrl/ngx-chartjs chart.js
```

## Dependencies

Latest version available for each version of Angular

| @ctrl/ngx-chartjs | Angular |
| ----------------- | ------- |
| 1.1.2             | 6.x 7.x |
| 2.0.0             | 8.x     |
| 3.0.1             | 9.x     |
| 4.0.2             | 10.x    |
| 6.0.1             | 11.x    |
| current           | >=12.x  |

## Use

Import and Add to module

```ts
import { ChartjsModule } from '@ctrl/ngx-chartjs';
```

register chartjs at root of app or module. Must run before this component mounts

```ts
// What you register will depend on what chart you are using and features used.
import { BarController, BarElement, Chart, Title, Tooltip, Legend } from 'chart.js';
Chart.register(BarController, BarElement, Title, Tooltip, Legend);
```

setup data and other settings

```ts
import type { ChartData, ChartOptions } from 'chart.js';
const data: ChartData = {
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
const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart',
    },
  },
};
```

Add ngx-chartjs directive to element

```html
<ngx-chartjs type="bar" [data]="data" [options]="options"></ngx-chartjs>
```

## [Inputs]

| name       | type        | default      | description                                                                                      |
| ---------- | ----------- | ------------ | ------------------------------------------------------------------------------------------------ |
| type       | `string`    | `'doughnut'` | chart.js type 'bar', 'line', etc.                                                                |
| data       | `ChartData` | `{}`         | chart.js data object, [see docs](https://www.chartjs.org/docs/latest/getting-started/usage.html) |
| options    | `any`       | `{}`         | chart.js options                                                                                 |
| redraw     | `boolean`   | `false`      | force redraw on any input change, like to change legend                                          |
| updateMode | `string`    | `undefined`  | parameter passed to chart.update()                                                               |
| width      | `number`    | `300`        | canvas width                                                                                     |
| height     | `number`    | `150`        | canvas height                                                                                    |

## License

MIT

---

> GitHub [@scttcper](https://github.com/scttcper) &nbsp;&middot;&nbsp;
> Twitter [@scttcper](https://twitter.com/scttcper)
