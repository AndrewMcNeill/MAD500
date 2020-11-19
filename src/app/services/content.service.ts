import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {CONTENT_LIST} from '../helper-files/contentDb';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  getContent(): Content[] {
    return CONTENT_LIST;
  }
  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    return of(CONTENT_LIST);
  }
}
