import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  standalone: true,
  imports: [SharedModule]
})
export class ShoppingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
