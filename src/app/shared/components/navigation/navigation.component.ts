import { Component } from '@angular/core';
import { navigation } from 'src/app/core/jsons/navigation';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getTitle } from 'src/app/store/shared/shared.selector';
import { setNavigationMobilePanel, setShowNavigation } from 'src/app/store/shared/shared.actions';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: true,
    imports: [SharedModule, RouterLink],
    animations: [
      trigger('openCloseTriger', [
        state('open', style({
          height: '*',
        })),
        state('closed', style({
          height: '0',
        })),
        transition('open => closed', [
          animate('0.5s')
        ]),
        transition('closed => open', [
          animate('0.25s')
        ]),
      ]),
      trigger('collapse', [
        state('open', style({
          transform: 'rotate(0deg)',
        })),
        state('closed', style({
          transform: 'rotate(180deg)',
        })),
        transition('open => closed', [
          animate('0.25s')
        ]),
        transition('closed => open', [
          animate('0.25s')
        ]),
      ]),
    ],
})
export class NavigationComponent {
  showNavigation: string = 'item';
  title: string = '';
  id: string = '';
  list: any;
  show: boolean = false;
  temp: number = -1;
  user: any;
  userType: any;
  credit: number = 0;
  subscription1$!: Subscription;
  subscription2$!: Subscription;
  subscription3$!: Subscription;

  constructor(
    private store: Store<AppState>,
  ) {
    this.subscription1$ = this.store.select(getTitle).subscribe((res: any) => {

      let ID = res['id'];
      var items = navigation.filter(item => item.id === ID);
      this.id = items[0].id;
      this.title = items[0].name;
      this.showNavigation = items[0].type;

      setTimeout(() => {
        this.list = items[0].childern;
      }, 200)

    });

    // this.subscription2$ = this.store.select(getAuthUser).subscribe((res: any) => {
    //   if (res) {
    //     this.userType = GetUserType.find(e => e.value === res.user_type);
    //     this.user = `${res.first_name} ${res.last_name}`;
    //   }
    // });
    // this.subscription3$ = this.store.select(getAuthCurrentShop).subscribe((res: any) => {
    //   if (res) {
    //     this.credit = res.credit;
    //   }
    // })
  }

  ngOnInit(): void { }

  idSubmenu: number = 0
  chageSubMenu(n: number) {
    this.idSubmenu = n;
    if (this.temp == n) {
      this.show = !this.show;
      this.temp = n;
    }
    else {
      this.show = true;
      this.temp = n;
    }
  }

  closeNavigation() {
    this.store.dispatch(setShowNavigation({ status: false }))
    this.store.dispatch(setNavigationMobilePanel({ status: 0 }))
  }

  ngOnDestroy() {
    if (this.subscription1$ != null) {
      this.subscription1$.unsubscribe();
    }

    if (this.subscription2$ != null) {
      this.subscription2$.unsubscribe();
    }

    if (this.subscription3$ != null) {
      this.subscription3$.unsubscribe();
    }
  }
}

export const GetUserType =
  [
    { 'title': 'مدیر سیستم', 'value': 10 },
    { 'title': 'مدیر فروشگاه', 'value': 20 },
    { 'title': 'کارمند', 'value': 30 },
    { 'title': 'وب سرویس', 'value': 40 },
    { 'title': 'مدیر وب سرویس', 'value': 50 },
    { 'title': 'سیستم', 'value': 60 },
  ];
