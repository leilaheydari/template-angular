import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { ChartLineComponent } from '../chart-line/chart-line.component';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss'],
  standalone: true,
  imports: [SharedModule, CardHeaderComponent, ChartLineComponent]
})
export class TrafficComponent implements OnInit {

  description: string = "ترافیک وب سایت به کاربران وب اطلاق می شود که از یک وب سایت بازدید می کنند. ترافیک وب با بازدید سنجیده می شود";
  title: string = "منابع ترافیکی";
  data = listChart
  constructor() { }

  ngOnInit() { }

}


export let listChart: any[] = [
  { "title": "بازدیدکنندگان منحصر به فرد", "count": "3,475", "id": "canvas-line1", "backgroundColor": '#ebf0ff', "borderColor": '#3b6bf8', 'data': [26, 70, 25, 60, 40, 20, 70] },
  { "title": "نرخ پرش", "count": "3,475", "id": "canvas-line2", "backgroundColor": '#feebf4', "borderColor": '#f10075', 'data': [27, 30, 70, 50, 60, 50, 30] },
  { "title": "صفحه/بازدید", "count": "3,475", "id": "canvas-line3", "backgroundColor": '#e8fbfb', "borderColor": '#85e6e6', 'data': [28, 50, 25, 60, 70, 20, 70] },
  { "title": "بازدید از صفحه", "count": "3,475", "id": "canvas-line4", "backgroundColor": '#fffbed', "borderColor": '#ffc107', 'data': [50, 30, 75, 60, 40, 30, 70] },
  { "title": "بازدیدکنندگان منحصر به فرد", "count": "3,475", "id": "canvas-line5", "backgroundColor": '#f3effa', "borderColor": '#774fbf', 'data': [30, 40, 45, 60, 40, 20, 70] },
  { "title": "بازدید", "count": "3,475", "id": "canvas-line6", "backgroundColor": '#fdeff0', "borderColor": '#dc3545', 'data': [31, 70, 25, 60, 40, 20, 70] }
];
