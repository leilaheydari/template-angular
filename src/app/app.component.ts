import { Component } from '@angular/core';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { setTitle } from './store/shared/shared.actions';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'osima';

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
  ) {
    this.getTitlePage();
  }

  getTitlePage() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
        var rt = this.getChild(this.activatedRoute)
        rt.data.subscribe((data: any) => {
          if (data['breadcrumb'] != null) {
            const title = data['breadcrumb']['label'];
            const id = data['breadcrumb']['id'];
            this.store.dispatch(setTitle({ status: { 'title': title, 'id': id } }))
            this.titleService.setTitle('Osima' + '  ' + '|' + '  ' + title)
          }
        })
      })
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
