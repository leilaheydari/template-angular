import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-notification-bell',
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class NotificationBellComponent implements OnInit {
  list : any[]=[];
  loading: boolean = true;
  message : boolean = false;
  constructor(
  ) {
    this.getWorks();
  }

  ngOnInit() {}

  getWorks(){
    this.loading = true;
    this.message = false;

   const test = [
    {
      task_type_display:'آخرین رویدادها',
      status_display:'مهم',
      created_at:'1402-4-7',
    }
   ]

   setTimeout(() => {
    this.list = test;
    this.loading = false
  }, 1000);
  }

}
