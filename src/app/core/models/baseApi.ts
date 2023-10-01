export class BaseApi {
  returns: any = {
    status: 200,
    message: ' عملیات با موفقیت انجام شد'
  };
  new_count: number = 0;
  page: number = 1;
  count: number = 8;
  total_count: number = 10;
  entries: any = {};
}






