import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class CardHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  constructor() { }

  ngOnInit() {
  }

}
