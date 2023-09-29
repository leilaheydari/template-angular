import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart, registerables, ChartOptions } from 'chart.js';
import { listChart } from '../traffic/traffic.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ChartLineComponent implements OnInit {
  @Input() data: any;
  ID: string = '';
  dataChart: any = [];
  backgroundColor: string = '';
  borderColor: string = '';

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.ID = this.data;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.chratLine(this.ID)
    }, 1000);
  }

  chratLine(id: string) {
    listChart.filter(item => {
      if (item.id === id) {
        this.dataChart = item['data'];
        this.backgroundColor = item['backgroundColor'];
        this.borderColor = item['borderColor'];
      }
    })
    const data = {
      labels: ['10', '20', '30', '40', '50', '60', '70'],
      datasets: [
        {
          label: "مشتری های سابق",
          data: this.dataChart,
          backgroundColor: this.backgroundColor,
          borderColor: this.borderColor,
          borderWidth: 1.8,
          fill: true,
          pointBackgroundColor: 'transparent',
          pointHoverBackgroundColor: 'transparent',
          pointHoverBorderWidth: 0,
          pointBorderWidth: 0,
        },
      ],
    }
    var chart = new Chart(
      <HTMLCanvasElement>document.getElementById(id), {
      type: 'line',
      data,
      options: this.chartOptions()
    }
    )
  }

  chartOptions(): ChartOptions {
    return {
      responsive: true,
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
            size: 14,
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
            display: false,
            drawOnChartArea: false,
            drawBorder: false,
            borderColor: '#dbdfea',
            color: "#dbdfea"
          },
          ticks: {
            display: false,
            stepSize: 25,
            font: {
              size: 13,
              family: 'Vazirmatn',
            }
          },
        },
        xAxes: {
          grid: {
            display: false,
            drawOnChartArea: false,
            drawBorder: false,
            borderColor: '#dbdfea',
            color: "#dbdfea"
          },
          ticks: {
            display: false,
            stepSize: 10,
            font: {
              size: 13,
              family: 'Vazirmatn',
              weight: '500'
            },
          },
        }
      },
    }
  }

}
