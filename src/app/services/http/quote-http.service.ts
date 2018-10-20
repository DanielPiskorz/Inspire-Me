import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/models/http/Quote';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteHttpService {

  FAVQS_API_URL = environment.FAVQS_API_URL;

  constructor(private http: HttpClient) { }

  getQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.FAVQS_API_URL);
  }
}
