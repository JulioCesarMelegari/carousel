import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImdbFilmModel } from './imdb-film.model';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  baseUrl: string = 'http://localhost:3000/items';

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<ImdbFilmModel[]>{
    return this.httpClient.get<ImdbFilmModel[]>(this.baseUrl);
  }
}
