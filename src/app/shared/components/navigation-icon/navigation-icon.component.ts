import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { navigation } from 'src/app/core/jsons/navigation';
import { AppState } from 'src/app/store/app.state';
import { setShowNavigation } from 'src/app/store/shared/shared.actions';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-navigation-icon',
  templateUrl: './navigation-icon.component.html',
  styleUrls: ['./navigation-icon.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class NavigationIconComponent implements OnInit {
  Navigation = navigation;
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  openNavigation() {
    this.store.dispatch(setShowNavigation({ status: true }))
  }

}
