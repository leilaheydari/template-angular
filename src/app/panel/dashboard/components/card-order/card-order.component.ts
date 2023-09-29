import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class CardOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
