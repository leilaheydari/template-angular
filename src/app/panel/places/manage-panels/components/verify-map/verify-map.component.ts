import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BidiModule } from '@angular/cdk/bidi';

@Component({
    selector: 'app-verify-map',
    templateUrl: './verify-map.component.html',
    styleUrls: ['./verify-map.component.scss'],
    standalone: true,
    imports: [BidiModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf, MatDialogModule]
})
export class VerifyMapComponent implements OnInit {
  MapForm!: FormGroup;
  marker : boolean = true;
  codeProvince : number = 1;
  latitude: any = null;
  longitude: any = null;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.MapForm = this.fb.group({
      floor: [null, [Validators.required]],
      // id: [null, [Validators.required]],
      latitude: [null],
      longitude: [null],
      // map: [null, [Validators.required]],
      plaque: [null, [Validators.required]],
      unit: [null, [Validators.required]],
    })
  }

  openMap() {
    // const dialogRef = this.dialog.open(MapComponent, {
    //   panelClass: 'map-centered-dialog',
    //   minWidth: 'calc(100% - 60px)',
    //   height: 'calc(100% - 60px)',
    //   data: {
    //     dataKey: this.codeProvince
    //   }
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result['lat'] === undefined || result['lng'] === undefined) {
    //     this.marker = true;
    //     this.MapForm.value.latitude = '';
    //     this.MapForm.value.longitude = '';
    //   }
    //   else {
    //     this.marker = false;
    //     this.MapForm.value.latitude = +result['lat'];
    //     this.MapForm.value.longitude = +result['lng'];
    //   }
    // });
  }

  onSubmit() {

    console.log(this.MapForm.value);

   }



}
