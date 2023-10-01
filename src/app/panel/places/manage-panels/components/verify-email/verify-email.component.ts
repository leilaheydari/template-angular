import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BidiModule } from '@angular/cdk/bidi';

@Component({
    selector: 'app-verify-email',
    templateUrl: './verify-email.component.html',
    styleUrls: ['./verify-email.component.scss'],
    standalone: true,
    imports: [BidiModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule]
})
export class VerifyEmailComponent implements OnInit {
  MobileForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.MobileForm = this.fb.group({
      mobile: [null, [Validators.required]],
    })
  }
  onSubmit() { }
}
