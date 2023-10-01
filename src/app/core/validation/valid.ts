export class Valid {
  public static readonly Regex: any = {
    digits: /^([0-9][0-9]*)$/,
    naturalNumbers: /^([1-9][0-9]*)$/,
    mobile: /^09[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/,
    phone: /^0[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/,
    national_code: /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/,
    postal_code: /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/,
    password: /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,20}$/,
    persianCharacters: /^[\u0600-\u06FF\s]+$/,
    url: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    owner_full_name: /^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F ]+$/,
    bank_account_number: /^(?:IR)(?=.{24}$)[0-9]*$/,
    ip: /^((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.]){3}(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/ ,
  }

  public static readonly Mask: any = {
    barcodeMask: [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    certificateSerialNumberMask: [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/],
    codeMask: [/\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/],
    codeResetPasswordMask: [/\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/],
    intervalMask: [/[0-2]/, /\d/, ' ', /[0-2]/, /\d/]
  }
}
