import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { JalaliMomentDateAdapter } from "./jalali-moment-date-adapter";
import { JALALI_MOMENT_FORMATS, MOMENT_FORMATS } from "./jalali_moment_formats";
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from "@angular/material-moment-adapter";

const MaterialComponents =
  [MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule,
    MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, FormsModule, ReactiveFormsModule,
    MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule,
    MatCardModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule,
    MatNativeDateModule, MatTooltipModule, MatSnackBarModule, MatDialogModule,
    MatTableModule, MatPaginatorModule, MatSortModule, ScrollingModule, MatProgressBarModule
  ];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  providers: [
    {
      provide: DateAdapter,
      useClass: JalaliMomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    {
      provide: MAT_DATE_LOCALE, useValue: "fa"
    },
    {
      provide: MAT_DATE_FORMATS,
      useFactory: (locale: any) => {
        if (locale === "fa") {
          return JALALI_MOMENT_FORMATS;
        } else {
          return MOMENT_FORMATS;
        }
      },
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})

export class MaterialModule { }
