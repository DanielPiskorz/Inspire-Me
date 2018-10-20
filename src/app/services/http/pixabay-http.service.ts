import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PixabayData } from 'src/app/models/http/PixabayData';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PixabayHttpService {

  API_URL = environment.PIXABAY_API_URL;
  KEY = environment.PIXABAY_KEY;
  QUERY = environment.PIXABAY_QUERY;
  PARAMS = environment.PIXABAY_PARAMS;
  IMAGES_PER_PAGE = environment.MAX_IMAGES;

  constructor(private http: HttpClient) { }

  getImages(): Observable<PixabayData> {
    return this.http.get<PixabayData>(this.API_URL + '?key=' + this.KEY
    + '&q=' + this.QUERY + '&per_page=' + this.IMAGES_PER_PAGE + '&' + this.PARAMS);
  }

}
