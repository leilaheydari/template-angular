import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrafficComponent } from '../traffic/traffic.component';
import { RatingComponent } from '../rating/rating.component';
import { ProvinceComponent } from '../province/province.component';
import { OrderComponent } from '../order/order.component';
import { ChartPieComponent } from '../chart-pie/chart-pie.component';
import { ChartMultiLineComponent } from '../chart-multi-line/chart-multi-line.component';
import { ChartBarComponent } from '../chart-bar/chart-bar.component';
import { CardOrderComponent } from '../card-order/card-order.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [SharedModule, TrafficComponent,RatingComponent,ProvinceComponent,OrderComponent , ChartPieComponent,ChartMultiLineComponent,ChartBarComponent,CardOrderComponent]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
