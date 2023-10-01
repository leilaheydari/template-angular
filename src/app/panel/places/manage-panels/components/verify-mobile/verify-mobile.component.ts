import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BidiModule } from '@angular/cdk/bidi';

@Component({
    selector: 'app-verify-mobile',
    templateUrl: './verify-mobile.component.html',
    styleUrls: ['./verify-mobile.component.scss'],
    standalone: true,
    imports: [BidiModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule]
})
export class VerifyMobileComponent implements OnInit {
  MobileForm! : FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.MobileForm = this.fb.group({
      mobile: [null, [Validators.required]],
    })
  }
  onSubmit(){}

}
