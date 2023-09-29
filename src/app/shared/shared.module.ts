import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../core/directive/appClickOutside';

@NgModule({
    imports: [
        CommonModule,
        SharedRoutingModule,
        BreadcrumbModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule,
        ClickOutsideDirective
    ],
    exports: [
        BreadcrumbModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
        RouterModule,
        ClickOutsideDirective
    ]
})
export class SharedModule { }
