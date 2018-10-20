import { Component, OnInit, DoCheck } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

import { Content } from '../models/Content';
import { SimpleContent } from '../impl/SimpleContent';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private contentService: ContentService) {
    contentService.getNextContentObs().subscribe(data => {
      this.content = data;
    });
   }

  content: Content = new SimpleContent;

  nextContent() {
    this.contentService.getNext();
  }

}
