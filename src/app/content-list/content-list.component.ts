import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {CONTENT_LIST} from '../helper-files/contentDb';
import {ContentService} from '../services/content.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  list: Content[];

  constructor(private contentService: ContentService, private messageService: MessageService) {
    this.list = [];
  }
  // https://postimg.cc/gallery/xqXGvFp

  ngOnInit(): void {
    this.contentService.getContentObs().subscribe(content => {
      this.list = content;
    });
  }

  search(): void {
    // @ts-ignore
    const title = document.getElementById('titleInput').value;
    const results = this.list.filter(content => content.title === title);
    if (results.length > 0) {
      console.log('Content with title "' + title + '" exists.');
      this.messageService.add('Content with title "' + title + '" found.');
    } else {
      this.messageService.add('No content with title "' + title + '" could be found.');
    }
    const cards = document.getElementsByTagName('app-content-card');
    for(let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('searched');
    }
    const searchedCards = document.querySelectorAll('app-content-card[title="' + title + '"]');
    for(let i = 0; i < searchedCards.length; i++) {
      searchedCards[i].classList.add('searched');
    }
  }
}
