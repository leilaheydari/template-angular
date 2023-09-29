import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class GlobalLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
