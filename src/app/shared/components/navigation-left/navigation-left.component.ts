import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-navigation-left',
  templateUrl: './navigation-left.component.html',
  styleUrls: ['./navigation-left.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class NavigationLeftComponent implements OnInit {

  tabNumber : string = 'tab1';

  constructor() {}

  ngOnInit() {}

  changeTab(tab : string){
     this.tabNumber = tab;
  }

}
