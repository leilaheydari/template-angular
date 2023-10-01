import { getButtonLoading } from './../../../store/shared/shared.selector';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Valid } from 'src/app/core/validation/valid';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { setButtonLoading } from 'src/app/store/shared/shared.actions';
import { loginStart } from '../../store/auth.actions';
import { AuthLogin } from '../../shared/models/authLogin';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class LoginComponent implements OnInit {
  hide = true;
  LoginForm!: FormGroup;
  loading: boolean = false;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.store.select(getButtonLoading).subscribe(res => {
      this.loading = res;
    });
  }

  createForm() {
    this.LoginForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(Valid.Regex.mobile)]],
      password: ['', [Validators.required]],
    })
  }

  get f() { return this.LoginForm.controls; }

  onSubmit() {
    let model = new AuthLogin();
    model.username = this.LoginForm.value.mobile;
    model.password = this.LoginForm.value.password;
    if (this.LoginForm.valid) {
      this.store.dispatch(loginStart({ status: model }));
      this.store.dispatch(setButtonLoading({ status: true }));
    }
    else {
      return
    }
  }

}
