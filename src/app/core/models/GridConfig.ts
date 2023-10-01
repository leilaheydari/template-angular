export class GridConfig {
  pageSize: number;
  currentPage: number;
  constructor(
    data?: any) {
    data = data || {};
    this.pageSize = data.pageSize || 8;
    this.currentPage = data.currentPage || 0;
  }
}
