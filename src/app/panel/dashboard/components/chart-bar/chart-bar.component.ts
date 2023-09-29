import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { Chart, registerables, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss'],
  standalone: true,
  imports: [SharedModule, CardHeaderComponent]
})
export class ChartBarComponent implements OnInit {

  description: string = "گزارش‌های فروش شامل داده‌های مربوط به حجم فروش، فرصت‌های جاری، حساب‌های جدید، درآمد و هزینه‌های جذب مشتری است.";
  title: string = "گزارش سالانه";
  chart: any = [];
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.chartBar();
  }

  chartBar() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['گزارش فروش', 'درآمد', 'سود کل'],

        datasets: [{
          label: '',
          data: [60, 35, 45],
          backgroundColor: [
            '#006fe6',
            '#d60068',
            '#ebb000',
          ],
          borderColor: [
            '#006fe6',
            '#d60068',
            '#ebb000',
          ],
          borderWidth: 1,
          barThickness: 30,
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
            drawOnChartArea: true,
            drawBorder: false,
            borderColor: '#f0f2f5',
            color: "#f0f2f5"
          },
          ticks: {
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
