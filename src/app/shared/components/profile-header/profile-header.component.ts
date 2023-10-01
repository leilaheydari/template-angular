import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/auth/store/auth.actions';


@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ProfileHeaderComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
  }

  onLogOut(){
    this.store.dispatch(logout());
  }
}
