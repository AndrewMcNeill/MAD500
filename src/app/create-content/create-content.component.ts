import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEmitter = new EventEmitter<Content>();
  content: Content;
  errorDisplay = false;

  constructor() {
    this.content = {
      author: '', body: '', id: 0, imgUrl: '', title: '', type: 'None'
    };
  }

  ngOnInit(): void {
  }

  create(): void {
    const addContentPromise = new Promise((success, fail) => {
      this.content.id = Number(this.content.id);
      if (this.content.author !== '' && this.content.body !== '' &&
        this.content.imgUrl !== '' && this.content.title !== '') {
        success();
      } else {
        fail();
      }
    });
    addContentPromise.
      then(() => {
        this.newContentEmitter.emit(this.content);
        this.errorDisplay = false;
        this.clearFields();
    }).
      catch(() => {
        this.errorDisplay = true;
    });
  }
  clearFields(): void {
    this.content = {
      author: '', body: '', id: 0, imgUrl: '', title: '', type: 'None'
    };
  }
}
