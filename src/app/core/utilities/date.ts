import * as moment from 'jalali-moment';

export function DateChangeToShamsi(value : any) {
  if (value) {
    const momentDate = moment(value, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
    const formattedDate = momentDate.replace(/\//g, '-');
    return formattedDate;
  } else {
    return '';
  }
}
