import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart, registerables, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit, AfterViewInit  {
  @Input() item : any
  chart: any = [];
  ID: string = '';
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.ID = this.item['id'];
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.chartBar(this.ID)
    }, 100);
  }

  chartBar(ID:string) {
    this.chart = new Chart(ID, {
      type: 'bar',
      data: {
        labels: ['', '', '','', '', ''],

        datasets: [{
          label: '',
          data: this.item['data'],
          fill: true,
          borderRadius: 5,
          backgroundColor: [
            this.item['color'],
          ],
          borderColor: [
            this.item['border'],
          ],
          borderWidth: 1,
          barThickness: 6,
          base: 20,
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
      // responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          titleFont: {
            size: 14,
            family: 'Vazirmatn',
            weight: '400',
          },
        }
      },
      scales: {
        yAxes: {
          min: 20,
          grid: {
            drawOnChartArea: false,
            drawBorder: false,
            display: false,
            borderColor: '#f0f2f5',
            color: "#f0f2f5"
          },
          ticks: {
             display: false,
            stepSize: 10,
            font: {
              family: 'Vazirmatn',
              size: 13,
            }
          },
        },
        xAxes: {
          grid: {
            drawOnChartArea: false,
            drawBorder: false,
            display: false,
          },
          ticks: {
            font: {
              family: 'YekanBakh',
              size: 13,
              weight: '500'
            },
          },
        }
      },
    }
  }

}
