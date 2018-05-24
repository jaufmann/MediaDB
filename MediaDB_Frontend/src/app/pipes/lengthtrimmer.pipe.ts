import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthtrimmer'
})
export class LengthtrimmerPipe implements PipeTransform {

  transform(value: string): string {
    return  value.length >= 280 ? value.substring(0, 280) + '...' : value;
  }

}
