import { Pipe, PipeTransform } from '@angular/core';
import * as marked from "marked";

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value === 'string' || value instanceof String) {
      return marked(value as string);
    }else{
      return value;
    }

  }

}
