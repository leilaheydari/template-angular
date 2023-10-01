import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        LoginComponent,
    ],
    declarations: [
      LoginComponent
    ]
})
export class AuthModule { }
