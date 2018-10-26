import { Component, OnInit, DoCheck } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { animate, style, trigger, transition } from '@angular/animations';

import { Content } from '../models/Content';
import { SimpleContent } from '../impl/SimpleContent';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:  [
    trigger('contentFadeIn', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000, style({opacity: 100}))
      ])
    ])
  ]
})
export class MainComponent {

  constructor(private contentService: ContentService) {
    contentService.getNextContentObs().subscribe(data => {
      this.showContent(new SimpleContent(data));
    });
   }

  contents: Content[] = [];

  nextContent() {
    this.contentService.getNext();
  }

  private showContent(newContent: Content) {
    this.contents[this.contents.length] = newContent;
  }

}
