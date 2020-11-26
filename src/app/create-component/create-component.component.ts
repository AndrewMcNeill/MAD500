import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  @Output() contentAdded = new EventEmitter<Content>();
  content: any;

  constructor(private contentService: ContentService) {
    this.content = {
      author: '', body: '', title: '', type: 'None'
    };
  }

  ngOnInit(): void {
  }

  clickSubmit(): void {
    let newContentFromServer: Content;
    this.contentService.addContent(Object.assign({}, this.content)).
      subscribe(serverContent => {
        newContentFromServer = serverContent;
        newContentFromServer.id = +newContentFromServer.id;
        this.contentAdded.emit(newContentFromServer);
    });
  }

}
