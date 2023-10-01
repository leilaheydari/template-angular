import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      breadcrumb: {
        label: 'خانه',
        id: 'dashboard',
      },
    },
    canActivate: [authGuard]
  },

  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then(m => m.PlacesModule),
    data: {
      breadcrumb: {
        label: 'مکان ها',
        id: 'places',
      },
    },
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
