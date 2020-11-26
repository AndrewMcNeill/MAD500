import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {CONTENT_LIST} from '../helper-files/contentDb';
import {Observable} from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>('api/content');
  }
  /*
  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    return of(CONTENT_LIST);
  }
   */
}
