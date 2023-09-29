import { Component } from '@angular/core';
import { navigation } from 'src/app/core/jsons/navigation';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: true,
    imports: [NgFor, NgIf, RouterLinkActive, RouterLink]
})
export class NavigationComponent {
  navigation_data = navigation;
  constructor() { }

  ngOnInit() {
  }
}
