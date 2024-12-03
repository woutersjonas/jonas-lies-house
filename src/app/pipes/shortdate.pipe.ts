import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortdate',
  standalone: true
})
export class ShortdatePipe implements PipeTransform {

  transform(value: Date | string | null): string {
    if (!value) return '';
    if (typeof value === 'string') {
      value = new Date(value);
    } else {
      value = value;
    }

    const day = this.padZero(value.getDate());
    const month = this.padZero(value.getMonth() + 1); // getMonth() is zero-based
    const year = value.getFullYear();

    return `${day}-${month}-${year}`;
  }

  private padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
