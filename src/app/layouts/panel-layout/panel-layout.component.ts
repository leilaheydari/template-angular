import { Component, HostListener } from '@angular/core';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { NavigationIconComponent } from 'src/app/shared/components/navigation-icon/navigation-icon.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Observable, Subscription, filter } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getLoading, getNavigationMobilePanel, getNavigationPanel, getShowNavigation } from 'src/app/store/shared/shared.selector';
import { setLoadingSpinner, setShowNavigation } from 'src/app/store/shared/shared.actions';
import { NavigationStart, RouterOutlet, Router, RouterEvent, Event, } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalLoaderComponent } from 'src/app/shared/components/global-loader/global-loader.component';


@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss'],
  animations: [
    trigger('openCloseNav1', [
      state('open', style({
        width: '70px',
        opacity: 1,
      })),
      state('closed', style({
        width: '0',
        opacity: 1,
        visibility: "hidden",
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openCloseNav2', [
      state('open', style({
        width: '250px',
        opacity: 1,
      })),
      state('closed', style({
        width: '0',
        opacity: 1,
        visibility: "hidden",
      })),
      transition('open => closed', [
        animate('0.75s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),

    trigger('openCloseMobileNav1', [
      state('open', style({
        right: '0px',
        visibility: 'visible',
      })),
      state('closed', style({
        right: '-70px',
        visibility: 'hidden',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ]),
    ]),

    trigger('openCloseMobileNav2', [
      state('open', style({
        right: '70px',
        visibility: 'visible',
      })),
      state('closed', style({
        right: '-180px',
        visibility: 'hidden',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ]),
    ]),

  ],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NavigationIconComponent, NavigationComponent, RouterOutlet, SharedModule,GlobalLoaderComponent]
})
export class PanelLayoutComponent {
  openedNav1: boolean = true;
  openedNav2: boolean = true;
  openedNavMobile1: boolean = false;
  openedNavMobile2: boolean = false;
  isShow: boolean = false;
  mobile: boolean = true;
  topPosToStartShowing = 100;
  open: boolean = false;
  globalLoader!: Observable<boolean>;
  subscription1$!: Subscription;
  subscription2$!: Subscription;
  subscription3$!: Subscription;
  subscription4$!: Subscription;
  subscription5$!: Subscription;

  constructor(
    private responsive: BreakpointObserver,
    private store: Store<AppState>,
    public router: Router
  ) {
    this.breakpoints();
    this.subscription1$ = this.store.select(getShowNavigation).subscribe((res: any) => {
      this.open = res
    });
  }

  ngOnInit(): void {
    this.globalLoader = this.store.select(getLoading);
    this.subscription2$ = this.store.select(getNavigationPanel).subscribe(res => {
      if (res === 0) {
        this.openedNav1 = false;
        this.openedNav2 = false;
      }
      if (res === 2) {
        this.openedNav1 = true;
        this.openedNav2 = true;
      }
      if (res === 1 || res === -1) {
        this.openedNav1 = true;
        this.openedNav2 = false;
      }
    });

    this.subscription3$ = this.store.select(getNavigationMobilePanel).subscribe(res => {
      if (res === 1) {
        this.openedNavMobile1 = true;
      }
      if (res === 0) {
        this.openedNavMobile1 = false;
        this.store.dispatch(setShowNavigation({ status: false }))
      }
    });

    // loading
    this.subscription4$ = this.router.events.pipe(
      filter((e: Event | RouterEvent): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      if (e instanceof NavigationStart) {
        this.store.dispatch(setLoadingSpinner({ status: true }))
      }
      else {
        this.store.dispatch(setLoadingSpinner({ status: false }))
      }
    });



  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  breakpoints() {
    this.subscription5$ = this.responsive.observe('(max-width: 767.98px)').subscribe((res: BreakpointState) => {
      this.mobile = res.matches;
    });
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
  }
}
