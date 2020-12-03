import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  @Output() contentAdded = new EventEmitter<Content>();
  content: any;

  constructor(private contentService: ContentService, public dialog: MatDialog) {
    this.content = {
      author: '', body: '', title: '', type: ''
    };
  }

  ngOnInit(): void {
  }

  openAddContentDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {width: '260px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.content = result;
        this.clickSubmit();
      }
    });
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

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
})
export class CreateDialogComponent {
  content: any;
  constructor(public dialogRef: MatDialogRef<CreateDialogComponent>) {
    this.content = {
      author: '', body: '', title: '', type: ''
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
