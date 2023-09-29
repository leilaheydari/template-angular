import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
    data: {
      breadcrumb: {
        label: 'تنظیمات',
        id: 'settings',
      },
    },
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportModule),
    data: {
      breadcrumb: {
        label: 'پشتیبانی',
        id: 'support',
      },
    },
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
    data: {
      breadcrumb: {
        label: 'سفارشات',
        id: 'order',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
