import { ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Subscription } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { getClickOutside, getNavigationMobilePanel, getNavigationPanel, getTitle } from 'src/app/store/shared/shared.selector';
import { setNavigationMobilePanel, setNavigationPanel } from 'src/app/store/shared/shared.actions';
import { NavigationLeftComponent } from '../navigation-left/navigation-left.component';
import { NotificationEmailComponent } from '../notification-email/notification-email.component';
import { NotificationBellComponent } from '../notification-bell/notification-bell.component';
import { ShoppingComponent } from '../shopping/shopping.component';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { ClickOutsideDirective } from 'src/app/core/directive/appClickOutside';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [SharedModule,NavigationLeftComponent,NotificationEmailComponent,NotificationBellComponent,ShoppingComponent,ProfileHeaderComponent,ClickOutsideDirective],
    animations: [
      trigger('openCloseNavLeft', [
        state('open', style({
          width: '300px',
        })),
        state('closed', style({
          width: '0px',
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
export class HeaderComponent implements OnInit {
    // @ViewChild('btnNav', { read: ElementRef, static: true }) btnNav?: ElementRef;
    @ViewChild('btnMenu', { read: ElementRef, static: true }) btnMenu?: ElementRef;
    @ViewChild('btnProfile', { read: ElementRef, static: true }) btnProfile?: ElementRef;
    @ViewChild('btnBell', { read: ElementRef, static: true }) btnBell?: ElementRef;
    @ViewChild('btnEmail', { read: ElementRef, static: true }) btnEmail?: ElementRef;
    @ViewChild('btnShopping', { read: ElementRef, static: true }) btnShopping?: ElementRef;
    @ViewChild('btnMenuMobile', { read: ElementRef, static: true }) btnMenuMobile?: ElementRef;
    @ViewChild('btnProfileMobile', { read: ElementRef, static: true }) btnProfileMobile?: ElementRef;
    @ViewChild('btnBellMobile', { read: ElementRef, static: true }) btnBellMobile?: ElementRef;
    @ViewChild('btnEmailMobile', { read: ElementRef, static: true }) btnEmailMobile?: ElementRef;
    @ViewChild('btnShoppingMobile', { read: ElementRef, static: true }) btnShoppingMobile?: ElementRef;
    @ViewChild('btnCollapsableMobile', { read: ElementRef, static: true }) btnCollapsableMobile?: ElementRef;


    title: string = '';
    opened: number = 2;
    openedMobile: number = 0;
    isSticky: boolean = false;
    menuleft: boolean = false;
    profile: boolean = false;
    bell: boolean = false;
    email: boolean = false;
    shopping: boolean = false;
    Fullscreen: boolean = false;
    breakpoint: boolean = false;
    collapsableMenu: boolean = false;
    side: string = '';
    elem: any;
    desktop: boolean = true;
    credit: number = 0;
    counter: number = 0;
    counterMessage: number = 0;
    activeShop: string = '';
    open: boolean = false;
    subscription1$!: Subscription;
    subscription2$!: Subscription;
    subscription3$!: Subscription;
    subscription4$!: Subscription;
    subscription5$!: Subscription;
    subscription6$!: Subscription;
    subscription7$!: Subscription;
    subscription8$!: Subscription;
    subscription9$!: Subscription;

    constructor(
      // private coreService: CoreService,
      private responsive: BreakpointObserver,
      private store: Store<AppState>,
      private renderer: Renderer2,
      private activatedRoute: ActivatedRoute,
      private   router: Router,
      @Inject(DOCUMENT) private document: any,
      private ref: ChangeDetectorRef
    ) {
      this.subscription1$ = this.responsive.observe('(max-width: 767.98px)').subscribe((res: BreakpointState) => {
        this.breakpoint = res.matches;
      });

      // this.subscription2$ = this.store.select(getAuthCurrentShop).subscribe(res => {
      //   if (res != null) {
      //     this.activeShop = res['title']
      //   }
      // });
     
      
    }

    ngOnInit(): void {

      // this.subscription3$ = this.store.select(getNavigationMobilePanel).subscribe(res => {
      //   this.openedMobile = res;
      // });

      // this.subscription4$ = this.store.select(getShowNavigation).subscribe((res: any) => {
      //   this.open = res
      // });

      this.subscription5$ = this.store.select(getClickOutside).subscribe((res) => {
        this.side = res;
      });

      this.renderer.listen('window', 'click', (e: Event) => {
        this.checkSide(e.target)
      });

      this.elem = document.documentElement;



      this.subscription6$ = this.store.select(getTitle).subscribe((res: any) => {
        const state: RouterState = this.router.routerState;
        const snapshot: RouterStateSnapshot = state.snapshot;
        if (snapshot['url'] === '/') {
          this.title = 'داشبورد'
        }
        else {
          this.title = res['title'];
        }
      });

      // تعداد کارها
      // this.subscription7$ = this.store.select(getCountJob).subscribe((res: any) => {
      //   if (res > 0) {
      //     this.counter = res;
      //   }
      //   else {
      //     this.counter = res;
      //   }
      // });

      // تعداد پیغام ها
      // this.subscription8$ = this.coreService.GetNewNotifications(1, 10).subscribe(res => {
      //   if (res.returns.status === 200) {
      //     this.counterMessage = res.entries.new_count;
      //   }
      // })
    }

    ngAfterContentChecked() {
      this.ref.detectChanges();
    }


    openNavigation() {
      if (this.breakpoint === true) {
        this.store.select(getNavigationMobilePanel).subscribe(res => {
          this.openedMobile = res;
        });
        switch (this.openedMobile) {
          case 0: {
            this.store.dispatch(setNavigationMobilePanel({ status: 1 }))
            break;
          }
          case 1: {
            this.store.dispatch(setNavigationMobilePanel({ status: 0 }))
            break;
          }
        }
      }
      if (this.breakpoint === false) {
        this.subscription9$ = this.store.select(getNavigationPanel).subscribe(res => {
          this.opened = res;
        });
        switch (this.opened) {
          case 2: {
            this.store.dispatch(setNavigationPanel({ status: 1 }))
            break;
          }
          case 1: {
            this.store.dispatch(setNavigationPanel({ status: 0 }))
            break;
          }
          case 0: {
            this.store.dispatch(setNavigationPanel({ status: -1 }))
            break;
          }
          case -1: {
            this.store.dispatch(setNavigationPanel({ status: 2 }))
            break;
          }
        }
      }
    }

    @HostListener('window:scroll', ['$event']) onWindowScroll(e: any) {
      this.isSticky = false
      let Offset = e.target['scrollingElement'].scrollTop
      if (Offset <= 12) {
        this.isSticky = false
      }
      else if (Offset > 12) {
        this.isSticky = true
      }
    }

    checkSide(element: any) {
      if (element === this.btnMenu?.nativeElement ||
        element === this.btnMenuMobile?.nativeElement) {
        if (this.side === 'outside') {
          this.menuleft = true;
        }
        else if (this.side === 'inside') {
          this.menuleft = true;
        }
      }
      else {
        if (this.side === 'outside') {
          this.menuleft = false;
        }
      };
      if ((element === this.btnProfile?.nativeElement ||
        element === this.btnProfileMobile?.nativeElement) && !this.profile) {
        if (this.side === 'outside') {
          this.profile = true;
        }
        else if (this.side === 'inside') {
          this.profile = true;
        }
      }
      else {
        if (this.side === 'outside' || this.profile) {
          this.profile = false;
        }
      }
      if ((element === this.btnBell?.nativeElement ||
        element === this.btnBellMobile?.nativeElement) && !this.bell) {
        if (this.side === 'outside') {
          this.bell = true;
        }
        else if (this.side === 'inside') {
          this.bell = true;
        }
      }
      else {
        if (this.side === 'outside' || this.bell) {
          this.bell = false;
        }
      };
      if ((element === this.btnEmail?.nativeElement ||
        element === this.btnEmailMobile?.nativeElement) && !this.email) {
        if (this.side === 'outside') {
          this.email = true;
        }
        else if (this.side === 'inside') {
          this.email = true;
        }
      }
      else {
        if (this.side === 'outside' || this.email) {
          this.email = false;
        }
      };
      if ((element === this.btnShopping?.nativeElement ||
        element === this.btnShoppingMobile?.nativeElement) && !this.shopping) {
        if (this.side === 'outside') {
          this.shopping = true;
        }
        else if (this.side === 'inside') {
          this.shopping = true;
        }
      }
      else {
        if (this.side === 'outside' || this.shopping) {
          this.shopping = false;
        }
      };


      // if (element === this.btnNav?.nativeElement && this.openedMobile === 0) {
      //   this.store.dispatch(setNavigationMobilePanel({ status: 1 }));
      // }
      // else if (element === this.btnNav?.nativeElement && this.openedMobile === 1) {
      //   this.store.dispatch(setNavigationMobilePanel({ status: 0 }));
      // }
      // else if (this.side === 'outside' && !this.open) {
      //   this.store.dispatch(setNavigationMobilePanel({ status: 0 }))
      // };

      // console.log(element);
      // console.log(this.openedMobile);
      // console.log(this.side);
    }

    openFullscreen() {
      this.Fullscreen = true;
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    }

    closeFullscreen() {
      this.Fullscreen = false;
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }

    collapsable() {
      this.collapsableMenu = !this.collapsableMenu;
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

      if (this.subscription4$ != null) {
        this.subscription4$.unsubscribe();
      }

      if (this.subscription5$ != null) {
        this.subscription5$.unsubscribe();
      }

      if (this.subscription6$ != null) {
        this.subscription6$.unsubscribe();
      }

      if (this.subscription7$ != null) {
        this.subscription7$.unsubscribe();
      }

      if (this.subscription8$ != null) {
        this.subscription8$.unsubscribe();
      }

      if (this.subscription9$ != null) {
        this.subscription9$.unsubscribe();
      }
    }
}
