import {Content} from './content-interface';
import {throwError} from 'rxjs';

export class ContentList {
  private readonly mContents: Content[];

  constructor() {
    this.mContents = [];
  }

  get contents(): Content[] {
    return this.mContents;
  }

  add(newContent: Content): void {
    this.mContents.push(newContent);
  }
  countContents(): number {
    return this.mContents.length;
  }
  getContentHTML(index: number): string {
    if (index < 0 || index >= this.countContents()) {
      return '500 error, invalid index.</br>I hope you didn\'t want an actual error, because I couldn\'t figure that out.';
    }
    const content = this.mContents[index];
    const output =
      '<div class="content">' +
        '<h1>Title: ' + content.title + '</h1>' +
        '<p>Author: ' + content.author + '</p>' +
        '<p>ID: ' + content.id + '</p>' +
        '<p>Body: ' + content.body + '</p>' +
        '<p>Image URL: ' + (content.imgUrl ?? 'nil') + '</p>' +
        '<p>Type: ' + (content.type ?? 'nil') + '</p>' +
        '<p>Tags: </p>' +
        '<ul>' +
          (content.tags?.reduce((a, b) => a + '<li>' + b + '</li>', '') ?? 'nil') +
        '</ul>';
    return output;
  }
}
