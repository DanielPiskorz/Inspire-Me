import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PixabayData } from 'src/app/models/http/PixabayData';


@Injectable({
  providedIn: 'root'
})
export class PixabayHttpService {

  _url = 'https://pixabay.com/api/';
  _key = '5943798-876ea09dff1de2324ea1ec7bd';
  _query = 'mountains';
  _constParams = 'image_type=photo&pretty=true';

  constructor(private http: HttpClient) { }

  getImages(): Observable<PixabayData> {
    return this.http.get<PixabayData>(this._url + '?key=' + this._key + '&q=' + this._query + '&' + this._constParams);
  }

}
