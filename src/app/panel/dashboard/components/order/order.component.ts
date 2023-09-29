import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardHeaderComponent } from '../card-header/card-header.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  standalone: true,
  imports: [SharedModule, CardHeaderComponent]
})
export class OrderComponent implements OnInit {

  description: string = "Order Activity پلتفرم های تجارت الکترونیک برای ردیابی سفارش های ارسال شده در فروشگاه های خود است";
  title: string = "سفارشات فعال";
  constructor() { }

  ngOnInit() {
  }

}
