import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  list: Content[];

  constructor() { }
  // https://postimg.cc/gallery/xqXGvFp

  ngOnInit(): void {
    this.list = [];
    this.list.push({
      author: 'Name McNameyface',
      body: 'Only in 1 size, footlong.',
      id: 0,
      imgUrl: 'https://i.postimg.cc/McYT9rQq/loafers.jpg',
      type: 'Dad joke',
      title: 'Loafers!'});
    this.list.push({
      author: 'Andrew McNeill',
      body: 'This time in red!',
      id: 1,
      imgUrl: 'https://i.postimg.cc/rdTsCLzf/dress1.jpg',
      tags: ['look', 'some', 'tags!'],
      type: 'Clothing',
      title: 'Fancy clothes'});
    this.list.push({
      author: 'Dustin Hicks',
      body: '',
      id: 2,
      imgUrl: 'https://i.postimg.cc/LY6swBtf/dress2.jpg',
      tags: ['look', 'some', 'tags!'],
      type: 'Clothing',
      title: 'Fancy clothes in black!'});
    this.list.push({
      author: 'Cindy Kehoe',
      body: 'Blah, blah, blah, blah, blah. Blah, blah, blah, blah, blah, blah, blah.',
      id: 3,
      tags: ['look', 'some', 'tags!'],
      title: 'A distinct lack of imagery'});
    this.list.push({
      author: 'Mr. Skeletal',
      body: 'Blah, blah, blah, blah, blah. Blah, blah, blah, blah, blah, blah, blah.',
      id: 4,
      imgUrl: 'https://i.postimg.cc/mzXrszjn/dress3.jpg',
      tags: ['look', 'some', 'tags!'],
      type: 'Clothing',
      title: 'Now in beige!'});
  }
}
