import { Component, OnInit } from '@angular/core';
import {ContentList} from '../helper-files/content-list';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();
    this.contentList.add({
      author: 'Name McNameyface',
      body: 'Hello, my name is Name McNameyface. This is some text. How exciting.',
      id: 0,
      imgUrl: 'https://www.example.com/exampleimage.png',
      tags: ['look', 'some', 'tags!'],
      title: 'McNameyface\'s Content!'});
    this.contentList.add({
      author: 'Name McNameyface',
      body: 'Hello, my name is Name McNameyface. This is some text. How exciting.',
      id: 0,
      imgUrl: 'https://www.example.com/exampleimage.png',
      tags: ['look', 'some', 'tags!'],
      title: 'Some more stuff'});
    this.contentList.add({
      author: 'Name McNameyface',
      body: 'Hello, my name is Name McNameyface. This is some text. How exciting.',
      id: 0,
      imgUrl: 'https://www.example.com/exampleimage.png',
      tags: ['look', 'some', 'tags!'],
      title: 'Gotta pad content for the assignment!'});
  }

  ngOnInit(): void {
  }

}
