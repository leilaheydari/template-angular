export class AuthSingup {
  first_name: string;
  last_name: string;
  password: string;
  presenter_code: string;
  hash: string;
  constructor(data?: any) {
    data = data || {};
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.password = data.password;
    this.presenter_code = data.presenter_code;
    this.hash = data.hash;
  }
}

