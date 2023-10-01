import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { VerifyFileComponent } from '../verify-file/verify-file.component';
import { VerifyMapComponent } from '../verify-map/verify-map.component';
import { VerifyMobileComponent } from '../verify-mobile/verify-mobile.component';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [RouterLink, NgIf]
})
export class HomeComponent implements OnInit {
  show : boolean = false
  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {}

  showIcon(){
    this.show = !this.show
  }

  verifyMap() {
    const dialogRef = this.dialog.open(VerifyMapComponent, {
      width : '500px',
      data: {
        moduleName: ''
      }
    });
  }

  verifyMobile() {
    const dialogRef = this.dialog.open(VerifyMobileComponent, {
      minWidth : '300px',
      data: {
        moduleName: ''
      }
    });
  }

  verifyFile() {
    const dialogRef = this.dialog.open(VerifyFileComponent, {
      width : '1400px',
      data: {
        moduleName: ''
      }
    });
  }

  verifyEmail() {
    const dialogRef = this.dialog.open(VerifyEmailComponent, {
      minWidth : '300px',
      data: {
        moduleName: ''
      }
    });
  }


}
