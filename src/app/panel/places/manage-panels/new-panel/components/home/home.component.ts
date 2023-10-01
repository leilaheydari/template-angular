import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Valid } from 'src/app/core/validation/valid';
import { DateChangeToShamsi } from 'src/app/core/utilities/date';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MapComponent } from 'src/app/shared/components/map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [SharedModule, MapComponent]
})
export class HomeComponent implements OnInit {
  stepperOrientation: Observable<StepperOrientation>;
  showCompany: boolean = false;
  loading: boolean = false;
  imageData: string = '';
  imageData2: string = '';
  listProvince: any[] = [
    {
      code: 1, title: 'تهران'
    },
    {
      code: 1, title: 'همدان'
    }
  ];
  listCity: any[] = [];
  listCategory: any[] = [
    {
      code: 1, title: 'دیجیتال'
    },
    {
      code: 1, title: 'لوازم ورزشی'
    }
  ];
  intervalMask = Valid.Mask.intervalMask;
  codeProvince: number = 1;
  marker: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 1300px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit() {
    this.getData();
  }

  typeShopFormGroup = this._formBuilder.group({
    personType: [null, Validators.required],
  });
  companyFormGroup = this._formBuilder.group({
    is_economic_shop: [true],
    company_name: ['', [Validators.required]],
    economic_code: ['', [Validators.required]],
    company_national_code: ['', [Validators.required]],
    register_code: ['', [Validators.required]],
  });
  PersonalFormGroup = this._formBuilder.group({
    birth_date: ['', [Validators.required]],
    birthday_certificate_no: ['', [Validators.required]],
    birthday_location: ['', [Validators.required, Validators.pattern(Valid.Regex.persianCharacters)]],
    certificate_serial_number: ['', [Validators.required, Validators.minLength(8)]],
    father_name: ['', [Validators.required, Validators.pattern(Valid.Regex.persianCharacters)]],
    first_name: ['', [Validators.required, Validators.pattern(Valid.Regex.persianCharacters)]],
    last_name: ['', [Validators.required, Validators.pattern(Valid.Regex.persianCharacters)]],
    mobile: ['', [Validators.required, Validators.pattern(Valid.Regex.mobile)]],
    national_code: ['', [Validators.required, Validators.pattern(Valid.Regex.national_code), Validators.minLength(8)]],
    phone: ['', [Validators.required, Validators.pattern(Valid.Regex.phone)]],
  });
  ShopFormGroup = this._formBuilder.group({
    shop_name: ['', [Validators.required]],
    postal_code: [null, [Validators.required, Validators.pattern(Valid.Regex.postal_code)]],
    province: [null, [Validators.required]],
    city: [null, [Validators.required]],
    website: ['', [Validators.pattern(Valid.Regex.url)]],
    available_hours: ['', [Validators.required]],
    shop_phone: ['', [Validators.required, Validators.pattern(Valid.Regex.phone)]],
    shop_moto: ['', [Validators.required]],
    address: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    instagram_id: [''],
    category_code: ['', [Validators.required]],
    latitude: [''],
    longitude: [''],
    unit: ['', [Validators.required]],
    floor: ['', [Validators.required]],
    plaque: ['', [Validators.required]],
    is_counter: [false, [Validators.required]],
  });
  documentFormGroup = this._formBuilder.group({
    id_cart_file: ['', [Validators.required]],
    logo_file: ['', [Validators.required]],
  });


  get c() { return this.companyFormGroup.controls; }
  get f() { return this.PersonalFormGroup.controls; }
  get SI() { return this.ShopFormGroup.controls; }

  onSubmitDocument() {

  }


  onRemove(type: string) {
    if (type === 'cart') {
      this.documentFormGroup.patchValue({ id_cart_file: '' });
      this.imageData = '';
    }
    else if (type === 'logo') {
      this.documentFormGroup.patchValue({ logo_file: '' });
      this.imageData2 = '';
    }
  }

  onFileChange(event: Event, type: string) {
    if (type === 'cart') {
      let file : any = (event.target as HTMLInputElement).files?.[0];
      let allowedFileTypes = ["image/png", "image/jpg", "image/jpeg"]
      this.documentFormGroup.patchValue({ id_cart_file: file });
      if (file && allowedFileTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }
    else if (type === 'logo') {
      let file : any = (event.target as HTMLInputElement).files?.[0];
      let allowedFileTypes = ["image/png", "image/jpg", "image/jpeg"]
      this.documentFormGroup.patchValue({ logo_file: file });
      if (file && allowedFileTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData2 = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  openMap() {
    const dialogRef = this.dialog.open(MapComponent, {
      panelClass: 'map-centered-dialog',
      minWidth: 'calc(100% - 60px)',
      height: 'calc(100% - 60px)',
      data: {
        dataKey: this.codeProvince
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result['lat'] === undefined || result['lng'] === undefined) {
        this.marker = true;
        this.ShopFormGroup.value.latitude = '';
        this.ShopFormGroup.value.longitude = '';
      }
      else {
        this.marker = false;
        this.ShopFormGroup.controls['latitude'].setValue(result['lat']);
        this.ShopFormGroup.controls['longitude'].setValue(result['lng']);
      }
    });
  }

  provinceId() {
    this.ShopFormGroup.controls['city'].setValue(null);
    this.codeProvince = this.ShopFormGroup.controls['province'].value || 1;
    if(this.codeProvince == 1){

        this.listCity = [
          {
            code: 1, title: 'تهران'
          },
          {
            code: 1, title: 'اسلام شهر'
          }
        ]
      
    }
    if(this.codeProvince == 2){

      this.listCity = [
        {
          code: 1, title: 'همدان'
        },
        {
          code: 1, title: 'ملایر'
        }
      ]
    
  }
  }

  getData() {
    // this.coreService.GetProviences().subscribe(res => {
    //   this.listProvince = res.entries.list;
    // });
    // this.coreService.getCategory().subscribe(res => {
    //   this.listCategory = res.entries;
    // })
  }

  changeFn(e: any) {
    if (e.value == 2) {
      this.showCompany = true
    }
    else {
      this.showCompany = false
    }
  }







}
