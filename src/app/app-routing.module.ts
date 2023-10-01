import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: {
      breadcrumb: {
        label: 'احراز هویت',
      },
    },
  },
  {
    path: '', component: PanelLayoutComponent, loadChildren: () =>
      import('./panel/panel.module').then(m => m.PanelModule),
    data: {
      breadcrumb: {
        label: 'خانه',
        id: 'dashboard',
      },
    },
    canActivate: [authGuard]
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
