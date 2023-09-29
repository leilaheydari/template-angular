import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        SharedRoutingModule,
        BreadcrumbModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        BreadcrumbModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
    ]
})
export class SharedModule { }
