import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '' ,component: HomeComponent},
  { path: 'payment' ,component: PaymentComponent,
  data: {
    breadcrumb: {
      label: 'پرداخت',
      id : 'places'
    },
  },},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPanelRoutingModule { }

