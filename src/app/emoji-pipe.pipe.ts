import { Pipe, PipeTransform } from '@angular/core';
interface EmojiConvert {
  [key: string]: string | boolean | number;
}



@Pipe({
  name: 'emojiPipe'
})

export class EmojiPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let emojis: EmojiConvert = {
      ";)": "😉"
    };
    if(typeof(value) == "object") {

    }
    return value;
  }

}
