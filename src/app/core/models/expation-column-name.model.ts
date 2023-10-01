export class ExpantionColumnName {
  enName: string;
  faName: string;
  nested: string;
  type: string;
  typeInput: string;
  data?: any[];
  styleBackground?: string;
  styleColor?: string;
  styleFont?: string;
  search?: boolean;
  conditioningColumn?: boolean;
  conditionin?: conditioningEntity[];

  constructor(
    expationColumnName?: any) {
    expationColumnName = expationColumnName || {};
    this.enName = expationColumnName.enName;
    this.faName = expationColumnName.faName;
    this.nested = expationColumnName.nth || '';
    this.type = expationColumnName.type;
    this.typeInput = expationColumnName.typeInput;
    this.data = expationColumnName.data || null;
    this.styleBackground = expationColumnName.styleBackground || '';
    this.styleColor = expationColumnName.styleColor || '';
    this.styleFont = expationColumnName.styleFont || '';
    this.search = expationColumnName.search || false;
    this.conditioningColumn = expationColumnName.conditioningColumn || false;
    this.conditionin = expationColumnName.conditionin || [];
  }
}

export class conditioningEntity {
  condition: any;
  styleBackground?: string;
  styleColor?: string;
  styleBoderColor?: string;
  constructor(
    data?: any) {
    data = data || {};
    this.condition = data.condition || '';
    this.styleBackground = data.styleBackground || '';
    this.styleColor = data.styleColor || '';
    this.styleBoderColor = data.styleBoderColor || '';
  }
}

