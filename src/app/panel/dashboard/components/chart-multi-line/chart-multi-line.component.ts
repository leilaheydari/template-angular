import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { Chart } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { registerables } from 'chart.js';

@Component({
  selector: 'app-chart-multi-line',
  templateUrl: './chart-multi-line.component.html',
  styleUrls: ['./chart-multi-line.component.scss'],
  standalone: true,
  imports: [SharedModule, CardHeaderComponent]
})
export class ChartMultiLineComponent implements OnInit {
  description: string = "حفظ مشتری مجموعه فعالیت هایی است که یک کسب و کار برای افزایش تعداد مشتریان مکرر و افزایش سودآوری هر یک از مشتریان فعلی استفاده می کند.";
  title: string = "حفظ مشتری";
  chart: any = [];

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.chratMultiLine();
  }

  chratMultiLine() {
    const colorPink = {
      purple: {
        default: "rgba(241, 0, 117,1)",
        half: "rgba(241, 0, 117,0.5)",
        quarter: "rgba(241, 0, 117,0.25)",
        zero: "rgba(255,255,255,0)"
      },
      indigo: {
        default: "rgba(241, 0, 117,1)",
        quarter: "rgba(241, 0, 117,0.5)"
      }
    };

    const colorBlue = {
      purple: {
        default: "rgba(40, 92, 247,1)",
        half: "rgba(40, 92, 247,0.5)",
        quarter: "rgba(40, 92, 247,0.25)",
        zero: "rgba(255,255,255,0)"
      },
      indigo: {
        default: "rgba(40, 92, 247,1)",
        quarter: "rgba(40, 92, 247,0.5)"
      }
    };

    var canvas = <HTMLCanvasElement>document.getElementById("canvas-multi-line");
    var ctx = canvas.getContext("2d");


    var gradient = ctx?.createLinearGradient(0, 25, 0, 300);
    gradient?.addColorStop(0, colorPink.purple.half);
    gradient?.addColorStop(0.35, colorPink.purple.quarter);
    gradient?.addColorStop(1, colorPink.purple.zero);


    var gradient2 = ctx?.createLinearGradient(0, 25, 0, 300);
    gradient2?.addColorStop(0, colorBlue.purple.half);
    gradient2?.addColorStop(0.35, colorBlue.purple.quarter);
    gradient2?.addColorStop(1, colorBlue.purple.zero);


    this.chart = new Chart('canvas-multi-line', {
      type: 'line',
      data: {
        labels: ['10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100', '105', '110'],
        datasets: [
          {
            label: "مشتری های سابق",
            data: [60, 63, 50, 48, 45, 40, 45, 40, 30, 45, 48, 49, 38, 34, 30, 45, 48, 50, 40, 55, 50, 45],
            backgroundColor: gradient,
            borderColor: 'rgba(241, 0, 117, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0,
            pointBackgroundColor: 'transparent',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: 'rgba(241, 0, 117, 1)',
            pointBorderWidth: 0,
          },
          {
            label: "مشترهای جدید",
            data: [55, 75, 80, 76, 80, 76, 79, 77, 65, 75, 72, 78, 80, 76, 80, 85, 87, 80, 76, 75, 70, 65],
            backgroundColor: gradient2,
            borderColor: 'rgba(0, 104, 255, 1)',
            fill: true,
            borderWidth: 2,
            tension: 0,
            pointBackgroundColor: 'transparent',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: 'rgba(0, 104, 255, 0.8)',
            pointBorderWidth: 0,
          }
        ],
      },
      options: this.chartOptions()
    });
  }

  chartOptions(): ChartOptions {
    return {
      // responsive: false,
      maintainAspectRatio: false,
      plugins: {

        legend: {
          display: false,
          // position : 'chartArea',
          align: 'center',
          labels: {
            boxWidth: 8,
            boxHeight: 8,
            padding: 15,
            boxPadding: 0,
            color: '#031b4e',

            font: {
              size: 14,
              family: 'YekanBakh',
              weight: '400',
            }
          },
        },
        tooltip: {
          enabled: false,
          titleFont: {
            size: 12,
            family: 'YekanBakh',
            weight: '400',
          },
        }
      },
      scales: {
        yAxes: {
          beginAtZero: true,
          min: 0,
          max: 125,
          grid: {
            drawOnChartArea: true,
            drawBorder: true,
            borderColor: '#dbdfea',
            color: "#dbdfea"
          },
          ticks: {
            stepSize: 25,
            font: {
              size: 12,
              family: 'Vazirmatn',
            }
          },
        },
        xAxes: {
          grid: {
            drawOnChartArea: true,
            drawBorder: true,
            display: true,
            borderColor: '#dbdfea',
            color: "#dbdfea"
          },
          ticks: {
            maxTicksLimit: 20,

            // callback: function(val : any) {
            //   return  this.getLabelForValue(val) ;
            // },
            stepSize: 10,
            font: {
              size: 12,
              family: 'Vazirmatn',
              weight: '500'
            },
          },

        }

      },
    }
  }

}
