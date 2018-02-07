import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA} from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages = new Array();

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
    private translate: TranslateService) { }

  ngOnInit() {
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        this.messages.push({'key': key, 'param': this.data[key]});
      }
    }
  }

}
