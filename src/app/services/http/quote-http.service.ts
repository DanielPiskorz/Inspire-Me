import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/models/http/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteHttpService {

  _url = 'https://favqs.com/api/qotd';

  constructor(private http: HttpClient) { }

  getQuote(): Observable<Quote> {
    return this.http.get<Quote>(this._url);
  }
}
