import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/models/Quote';
import { QuoteHttpService } from 'src/app/services/quote-http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private quoteHttpService: QuoteHttpService) { }

  quote: Observable<Quote>;

  ngOnInit() {
  }

  downloadQuote() {
    this.quote = this.quoteHttpService.getQuote();
  }

}
