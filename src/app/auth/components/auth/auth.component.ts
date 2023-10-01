import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      () => {
        var rt = this.getChild(this.activatedRoute);
        rt.data.subscribe((data: any) => {
          const title = data.title;
          this.titleService.setTitle('OSIMA' + '  ' + '|' + '  ' + title)
        })
      }
    );
  }

  ngOnInit(): void { }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

}
