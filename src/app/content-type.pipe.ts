import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'contentType'
})
export class ContentTypePipe implements PipeTransform {

  transform(contentList: Content[], type: string): Content[] {
    return contentList.filter(content => content.type === type);
  }

}
