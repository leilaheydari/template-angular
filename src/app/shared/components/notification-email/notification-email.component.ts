import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-notification-email',
  templateUrl: './notification-email.component.html',
  styleUrls: ['./notification-email.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class NotificationEmailComponent implements OnInit {
  list : any[]=[];
  message : boolean = false;
  loading: boolean = true;
  constructor(
  ) { }

  ngOnInit() {
    this.loading = true;
    this.message = false;

    const test = [
      {
        title:'پیغام مهم در مورد آخرین تغییرات پنل',
        sensitivity:1,
        created_at:'1402-4-7',
      }
     ]

     setTimeout(() => {
      this.list = test;
      this.loading = false
    }, 1000);
  }

}
