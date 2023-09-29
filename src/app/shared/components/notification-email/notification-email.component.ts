import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-notification-email',
  templateUrl: './notification-email.component.html',
  styleUrls: ['./notification-email.component.css'],
  standalone: true,
  imports: [SharedModule]
})
export class NotificationEmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
