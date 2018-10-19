import { Component, OnInit, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/models/Quote';
import { QuoteHttpService } from 'src/app/services/quote-http.service';
import { PixabayHttpService } from 'src/app/services/pixabay-http.service';
import { PixabayData, Image } from 'src/app/models/PixabayData';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private quoteHttpService: QuoteHttpService, private pixabayHttpService: PixabayHttpService) { }

  quote: Observable<Quote>;
  images: Image[] = [];

  ngOnInit() {
  }

  downloadQuote() {
    this.quote = this.quoteHttpService.getQuote();
  }

  downloadImages() {
  this.pixabayHttpService.getImages().subscribe(data => {
      this.images = data.hits;
    });
  }

}
