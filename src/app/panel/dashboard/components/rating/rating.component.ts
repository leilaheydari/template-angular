import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardHeaderComponent } from '../card-header/card-header.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [ MatProgressBarModule , CardHeaderComponent,SharedModule],
})
export class RatingComponent implements OnInit {
  description : string = "نظر مشتری در مورد محصول در قالب رتبه بندی امتیاز 5 ستاره.";
  title: string = "امتیازات";
  constructor() { }

  ngOnInit() {
  }

}
