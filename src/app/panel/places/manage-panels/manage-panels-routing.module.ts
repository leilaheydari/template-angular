import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '' ,component: HomeComponent},
  {
    path: 'new-panel',
    loadChildren: () => import('./new-panel/new-panel.module').then(m => m.NewPanelModule),
    data: {
      breadcrumb: {
        label: 'ثبت پنل جدید',
        id : 'places'
      },
    },
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(m => m.ContractModule),
    data: {
      breadcrumb: {
        label: 'ارسال قرارداد',
        id : 'places'
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePanelsRoutingModule { }


