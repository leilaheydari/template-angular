import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Chart, registerables, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CardHeaderComponent } from '../card-header/card-header.component';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss'],
  standalone: true,
  imports: [SharedModule, CardHeaderComponent]
})
export class ChartPieComponent implements OnInit {
  description: string = "وضعیت سفارش می تواند به شما کمک کند تصمیم بگیرید برای یک سفارش خاص چه اقداماتی باید انجام دهید، مانند بسته بندی یا ارسال سفارش.";
  title: string = "وضعیت سفارشات";
  chart: any = [];

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.chratBar();
  }

  chratBar() {
    this.chart = new Chart('canvas-doughnut', {
      plugins: [
        ChartDataLabels
      ],
      type: 'doughnut',
      data: {
        datasets: [{

          data: [26, 39, 20, 15],
          backgroundColor: [
            '#6f42c1',
            '#007bff',
            '#00cccc',
            '#f10075'
          ],
        }]
      },
      options: this.chartOptions()
    });
  }


  chartOptions(): ChartOptions {
    return {
      font: {
        family: 'Vazirmatn',
      },
      //  responsive: true,
      maintainAspectRatio: false,
      elements: {
        arc: {
          borderWidth: 1,
          borderColor: '#fff',
          borderRadius: 0,
          offset: 0,
        },
      },
      plugins: {
        datalabels: {
          formatter: (value) => {
            return value + '%';
          },
          display: true,
          color: '#ffffff',
          anchor: 'center',
          align: 'center',
          textAlign: 'center',
          offset: 0,

          font: {
            size: 13,
            family: 'Vazirmatn',
          }
        },
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        }
      },
    }
  }

}
