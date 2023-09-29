import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardHeaderComponent } from '../card-header/card-header.component';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss'],
  standalone: true,
  imports: [SharedModule,CardHeaderComponent]
})
export class ProvinceComponent implements OnInit {

  description : string = "استان های بیشترین ترافیک در زمینه حمل و نقل و لاجستیک داشته اند.";
  title: string = "ترافیک استان ها";
  constructor() { }

  ngOnInit() {
  }

}
