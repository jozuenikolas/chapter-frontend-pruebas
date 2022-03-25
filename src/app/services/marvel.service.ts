import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarvelHero } from '@app/data/models/marvelHero';
import { handleError } from '@app/shared/functions/serviceValidation';
import { environment } from '@env/environment';

import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private URL = environment.api;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  public getAllHeroesList(idAuthor: number = 1): Observable<MarvelHero[]> {
    return this.httpClient
      .get<MarvelHero[]>(this.URL, {
        params: { idAuthor: idAuthor },
      })
      .pipe(catchError(handleError));
  }

  // public getHeroeByEmail(email: string): Observable<Heroe> {
  //   return this.httpClient.get<Heroe>(this.URL + '/' + email);
  // }
}
