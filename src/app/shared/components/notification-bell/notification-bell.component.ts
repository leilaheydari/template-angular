import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-notification-bell',
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.css'],
  standalone: true,
  imports: [SharedModule]
})
export class NotificationBellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
