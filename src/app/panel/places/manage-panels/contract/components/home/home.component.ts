import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
    imports: [
        MatTabsModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
    ],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  onChangeTab(tabName: string) {
    this.router.navigate(['/places/manage-panels/contract/' + tabName]);
  }

}
