import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class PaymentComponent implements OnInit {
  code = new FormControl('', [Validators.required]);
  loading: boolean = false;
  _discountPrice : number = 0;
  _price : string = '299,000';
  DiscountCode : any | null;
  sendDiscount : number = 0;

  constructor(
  ) { }

  ngOnInit() {}

  listDiscountCode  = [
    {code: 'MYPOSTOFFICE1400', discountPrice: 150 , price : '149,000'},
    {code: 'KAMVA1400', discountPrice: 239 , price : '60,000'},
    {code: 'kamva1400', discountPrice: 239 , price : '60,000'},
  ];

  CheckDiscount() {
    this.DiscountCode = localStorage.getItem('Codediscount');
    this.DiscountCode = this.code.value;
    switch(this.DiscountCode) {
      case this.listDiscountCode[0].code: {
        this.sendDiscount = 2;
        this._discountPrice = this.listDiscountCode[0].discountPrice;
        this._price = this.listDiscountCode[0].price;
        localStorage.removeItem("Codediscount");
         break;
      }
      case this.listDiscountCode[1].code: {
        this.sendDiscount = 2;
        this._discountPrice = this.listDiscountCode[1].discountPrice;
        this._price = this.listDiscountCode[1].price;
        localStorage.removeItem("Codediscount");
         break;
      }
      case this.listDiscountCode[2].code: {
        this.sendDiscount = 2;
        this._discountPrice = this.listDiscountCode[2].discountPrice;
        this._price = this.listDiscountCode[2].price;
        localStorage.removeItem("Codediscount");
        break;
     }
      default: {
        this.sendDiscount = 1;
        this._discountPrice = 0;
        this._price = '299,000';
        localStorage.removeItem("Codediscount");
         break;
      }
   }
  }

  onSubmit(){
    // this.coreService.Payment({code: this.DiscountCode}).subscribe(res => {
    //   if (res.returns.status === 200) {
    //     const inputElement = document.getElementById('RefID') as HTMLInputElement;
    //     inputElement.value = res.entries.ref_id;
    //     // document.getElementById('rediect1').click();
    //   }

    // });

  }
}
