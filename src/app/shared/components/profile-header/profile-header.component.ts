import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css'],
  standalone: true,
  imports: [SharedModule]
})
export class ProfileHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
