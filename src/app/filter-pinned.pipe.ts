import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from './model/entry';

@Pipe({
  name: 'filterPinned',
  standalone: true
})
export class FilterPinnedPipe implements PipeTransform {

  transform(entries: Entry[], ...args: unknown[]): Entry[] {
    return entries.filter(e => e.pinned);
  }

}
