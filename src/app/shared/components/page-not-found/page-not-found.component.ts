import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
    standalone: true,
    imports: [SharedModule]
})
export class PageNotFoundComponent {
  constructor(
    public router: Router,
    private titleService : Title
  ) {
    this.titleService.setTitle('Osima' + '  ' + '|' + '  ' + 'خطا')
  }

  ngOnInit(): void {
  }

  backDashboard(){
    this.router.navigate(['/'])
  }
}
