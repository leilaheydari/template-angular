export class Contract {
  barcode: string;
  file_type: string;
  status: string;
  constructor(data?: any) {
    data = data || {};
    this.barcode = data.barcode || "";
    this.file_type = data.file_type || "";
    this.status = data.status || "";
  }
}
