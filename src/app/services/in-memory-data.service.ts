import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {Content} from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  // @ts-ignore
  createDb(reqInfo?: RequestInfo): object {
    const content: Content[] = [{
      author: 'Name McNameyface',
      body: 'Only in 1 size, footlong.',
      id: 0,
      imgUrl: 'https://i.postimg.cc/McYT9rQq/loafers.jpg',
      type: 'Dad joke',
      title: 'Loafers!'}, {
      author: 'Andrew McNeill',
      body: 'This time in red!',
      id: 1,
      imgUrl: 'https://i.postimg.cc/rdTsCLzf/dress1.jpg',
      tags: ['look', 'some', 'tags!'],
      type: 'Clothing',
      title: 'Fancy clothes'}, {
      author: 'Dustin Hicks',
      body: '',
      id: 2,
      imgUrl: 'https://i.postimg.cc/LY6swBtf/dress2.jpg',
      tags: ['look', 'some', 'tags!'],
      type: 'Clothing',
      title: 'Fancy clothes in black!'}, {
      author: 'Cindy Kehoe',
      body: 'Blah, blah, blah, blah, blah. Blah, blah, blah, blah, blah, blah, blah.',
      id: 3,
      type: 'None',
      tags: ['look', 'some', 'tags!'],
      title: 'A distinct lack of imagery'}, {
      author: 'Mr. Skeletal',
      body: 'Blah, blah, blah, blah, blah. Blah, blah, blah, blah, blah, blah, blah.',
      id: 4,
      imgUrl: 'https://i.postimg.cc/mzXrszjn/dress3.jpg',
      tags: ['look', 'some', 'tags!'],
      type: 'Clothing',
      title: 'Now in beige!'}];
    return {content};
  }

  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.id)) + 1 : 2000;
  }

  constructor() { }
}
