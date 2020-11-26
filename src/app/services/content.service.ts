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
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>('api/content');
  }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>('api/content', content, this.httpOptions);

  }
  /*
  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    return of(CONTENT_LIST);
  }
   */
}
