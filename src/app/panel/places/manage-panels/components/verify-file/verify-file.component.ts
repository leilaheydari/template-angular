import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BidiModule } from '@angular/cdk/bidi';

@Component({
    selector: 'app-verify-file',
    templateUrl: './verify-file.component.html',
    styleUrls: ['./verify-file.component.scss'],
    standalone: true,
    imports: [BidiModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgIf, MatButtonModule, MatDialogModule]
})
export class VerifyFileComponent implements OnInit {
  FileForm!: FormGroup;
  imageData: string = '';
  imageData2: string = '';
  imageData3: string = '';
  imageData4: string = '';
  imageData5: string = '';
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.FileForm = this.fb.group({

      // id: [null, [Validators.required]],

    })
  }



  onSubmit() {

    console.log(this.FileForm.value);

   }

   onFileChange(event: Event, type: string) {
    let allowedFileTypes = ["image/png", "image/jpg", "image/jpeg", "application/pdf"]
    let allowedFileZise = 1000000;
    if (type === 'cart') {
      let file = (event.target as HTMLInputElement).files?.[0];
      this.FileForm.patchValue({ id_cart_file: file });
      if (file && allowedFileTypes.includes(file.type) && allowedFileZise >= (file.size)) {
        const reader = new FileReader();
        reader.onload = () => {
          if(file?.type === 'application/pdf'){
           this.imageData =  './../../../../../../assets/images/dowload-pdf.png'
          }
          else{
            this.imageData = reader.result as string;
          }
        };
        reader.readAsDataURL(file);
      }
    }
    else if (type === 'logo') {
      let file = (event.target as HTMLInputElement).files?.[0];
      this.FileForm.patchValue({ logo_file: file });
      if (file && allowedFileTypes.includes(file.type) && allowedFileZise >= (file.size)) {
        const reader = new FileReader();
        reader.onload = () => {
          if(file?.type === 'application/pdf'){
           this.imageData2 =  './../../../../../../assets/images/dowload-pdf.png'
          }
          else{
            this.imageData2 = reader.result as string;
          }
        };
        reader.readAsDataURL(file);
      }
    }

    else if (type === 'signature') {
      let file = (event.target as HTMLInputElement).files?.[0];
      this.FileForm.patchValue({ logo_file: file });
      if (file && allowedFileTypes.includes(file.type) && allowedFileZise >= (file.size)) {
        const reader = new FileReader();
        reader.onload = () => {
          if(file?.type === 'application/pdf'){
           this.imageData3 =  './../../../../../../assets/images/dowload-pdf.png'
          }
          else{
            this.imageData3 = reader.result as string;
          }
        };
        reader.readAsDataURL(file);
      }
    }

    else if (type === 'contract') {
      let file = (event.target as HTMLInputElement).files?.[0];
      this.FileForm.patchValue({ logo_file: file });
      if (file && allowedFileTypes.includes(file.type) && allowedFileZise >= (file.size)) {
        const reader = new FileReader();
        reader.onload = () => {
          if(file?.type === 'application/pdf'){
           this.imageData4 =  './../../../../../../assets/images/dowload-pdf.png'
          }
          else{
            this.imageData4 = reader.result as string;
          }
        };
        reader.readAsDataURL(file);
      }
    }
    else if (type === 'birthCertificate') {
      let file = (event.target as HTMLInputElement).files?.[0];
      this.FileForm.patchValue({ logo_file: file });
      if (file && allowedFileTypes.includes(file.type) && allowedFileZise >= (file.size)) {
        const reader = new FileReader();
        reader.onload = () => {
          if(file?.type === 'application/pdf'){
           this.imageData5 =  './../../../../../../assets/images/dowload-pdf.png'
          }
          else{
            this.imageData5 = reader.result as string;
          }
        };
        reader.readAsDataURL(file);
      }
    }

  }

  onRemove(type : string){
    if (type === 'cart') {
      this.FileForm.patchValue({ id_cart_file: '' });
      this.imageData = '';
    }
    else if (type === 'logo'){
      this.FileForm.patchValue({ logo_file: '' });
      this.imageData2 = '';
    }
    else if (type === 'signature'){
      this.FileForm.patchValue({ logo_file: '' });
      this.imageData3 = '';
    }
    else if (type === 'contract'){
      this.FileForm.patchValue({ logo_file: '' });
      this.imageData4 = '';
    }
    else if (type === 'birthCertificate'){
      this.FileForm.patchValue({ logo_file: '' });
      this.imageData5 = '';
    }
  }

}
