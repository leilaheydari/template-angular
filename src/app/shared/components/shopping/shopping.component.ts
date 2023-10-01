import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ShoppingComponent implements OnInit {
  list: any[] = [];
  activeShop: string = '98674d13-ffba-492c-bb6b-3fc514bddf07';
  constructor(
  ) {
  }


  ngOnInit() {
    const test = [
      {
        title:'نارون',
        id:'98674d13-ffba-492c-bb6b-3fc514bddf07',
      },
      {
        title:'گلچهره',
        id:'98674d13-ffba-492c-bb6b-3fc514bddf09',
      },
      {
        title:'بوگاتی',
        id:'98674d13-ffba-492c-bb6b-3fc514bddf06',
      },
     ]

     setTimeout(() => {
      this.list = test;
    }, 1000);
  }

  chageShopping(id: any) {
    console.log(id);

  }

}
