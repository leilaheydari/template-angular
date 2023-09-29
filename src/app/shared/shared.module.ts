import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';


@NgModule({
    imports: [
        CommonModule,
        SharedRoutingModule,
        BreadcrumbModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        BreadcrumbModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MaterialModule
    ]
})
export class SharedModule { }
