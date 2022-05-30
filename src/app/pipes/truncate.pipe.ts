import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, length: number): string {
    let truncatedText = text.substring(0, length) + '...';
    return truncatedText;
  }
}
