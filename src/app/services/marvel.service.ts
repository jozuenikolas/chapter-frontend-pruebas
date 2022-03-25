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
  private API = environment.api;
  private idAuthor = '?idAuthor=' + environment.idAuthor;
  private URL = environment.api + '?idAuthor=' + environment.idAuthor;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  public getAllHeroesList(): Observable<MarvelHero[]> {
    return this.httpClient
      .get<MarvelHero[]>(this.URL)
      .pipe(catchError(handleError));
  }

  public postNewMarvelHero(hero: MarvelHero): Observable<MarvelHero> {
    const body = JSON.stringify(hero);
    console.log(body);
    return this.httpClient.post<MarvelHero>(this.URL, body, this.httpOptions);
  }

  public updateMarvelHero(hero: MarvelHero): Observable<MarvelHero> {
    const body = JSON.stringify(MarvelHero);
    return this.httpClient.put<MarvelHero>(
      this.URL + '/' + hero._id + this.idAuthor,
      body,
      this.httpOptions
    );
  }

  public deleteMarvelHero(hero: MarvelHero) {
    return this.httpClient.delete(this.API + '/' + hero._id, {
      params: { idAuthor: environment.idAuthor },
    });
  }
  // public getHeroeByEmail(email: string): Observable<Heroe> {
  //   return this.httpClient.get<Heroe>(this.URL + '/' + email);
  // }
}
