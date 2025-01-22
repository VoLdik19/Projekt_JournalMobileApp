import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from './model/entry';

@Pipe({
  name: 'dateSort',
  standalone: true
})
export class DateSortPipe implements PipeTransform {

  transform(entries: Entry[], ...args: unknown[]): Entry[] {
    return entries.sort((a, b) => a.DateTime.getTime() - b.DateTime.getTime());
  }

}
