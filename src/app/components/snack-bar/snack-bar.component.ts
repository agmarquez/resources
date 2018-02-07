import { Component, OnInit } from '@angular/core';
import { MessagesComponent } from './components/messages/messages.component';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {


  snackBarRef: MatSnackBarRef<MessagesComponent>;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  open(messages: any, styleClass: string) {
      this.snackBarRef = this.snackBar.openFromComponent(MessagesComponent, {
        data: messages,
        panelClass : styleClass,
        verticalPosition: 'top',
        duration: 2000
      });
  }

}
