import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'manage-panels',
    loadChildren: () => import('./manage-panels/manage-panels.module').then(m => m.ManagePanelsModule),
    data: {
      breadcrumb: {
        label: 'مدیریت پنل ها',
        id : 'places'
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
