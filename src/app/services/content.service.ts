import { Injectable } from '@angular/core';
import { QuoteHttpService } from '../services/http/quote-http.service';
import { PixabayHttpService } from '../services/http/pixabay-http.service';
import { Content } from 'src/app/models/Content';
import { SimpleContent } from 'src/app/impl/SimpleContent';
import { Image } from 'src/app/models/http/PixabayData';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ContentService {

  MAX_IMAGES = environment.MAX_IMAGES;

  constructor(private quoteHttpService: QuoteHttpService, private pixabayHttpService: PixabayHttpService) { }

  private contentToReturn: Content = new SimpleContent();
  private nextContentObs = new BehaviorSubject<Content>(this.contentToReturn);
  private images: Image[] = [];
  private quoteIsSet: boolean;
  private backgroundIsSet: boolean;

  public getNext() {
    this.setNextContent();
   }

  public getNextContentObs() {
    return this.nextContentObs.asObservable();
  }

  protected sendNext() {
    this.nextContentObs.next(this.contentToReturn);
  }

  private setNextContent() {
    this.downloadNextQuote();
    this.setNextBackground();
  }

  private setNextBackground() {
    this.backgroundIsSet = false;
    if (this.images.length !== this.MAX_IMAGES) {
      this.downloadImages();

    } else {
      this.contentToReturn.backgroundImageURL = this.images[this.randomIndex()].largeImageURL;
      this.backgroundIsSet = true;
      this.checkIfReadyToSend();
    }

  }

  private downloadNextQuote() {
    this.quoteIsSet = false;
    this.quoteHttpService.getQuote().subscribe(data => {
      this.contentToReturn.quoteText = data.quote.body;
      this.contentToReturn.quoteAuthor = data.quote.author;
      this.quoteIsSet = true;
      this.checkIfReadyToSend();
    });
  }

  private downloadImages() {
  this.pixabayHttpService.getImages().subscribe(data => {
      this.images = data.hits;
      this.setNextBackground();
    });
  }

  private randomIndex(): number {
    return Math.floor(Math.random() * this.MAX_IMAGES);
  }

  private checkIfReadyToSend() {
    if (this.backgroundIsSet && this.quoteIsSet) {
      this.sendNext();
    }
  }


}
