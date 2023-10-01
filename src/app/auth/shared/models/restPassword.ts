export class RestPassword {
  code: string;
  password: string;
  password1: string;
  constructor(data?: any) {
    data = data || {};
    this.code = data.code;
    this.password = data.password;
    this.password1 = data.password1;
  }
}
