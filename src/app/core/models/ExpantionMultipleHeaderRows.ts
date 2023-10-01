export class ExpantionMultipleHeaderRows{
  enName: string;
  faName: string;
  colspan : number;
  constructor(
    expationColumnName? : any)  {
    expationColumnName = expationColumnName || {};
    this.enName = expationColumnName.enName;
    this.faName = expationColumnName.faName;
    this.colspan = expationColumnName.colspan || '';
  }
}
