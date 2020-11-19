import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {CONTENT_LIST} from '../helper-files/contentDb';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): Content[] {
    return CONTENT_LIST;
  }
  getContentObs(): Observable<Content[]> {
    return of(CONTENT_LIST);
  }
}
