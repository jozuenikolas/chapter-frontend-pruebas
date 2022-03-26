import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MarvelHero} from "../types/marvel-hero";

@Injectable({
  providedIn: 'root'
})
export class MarvelHeroService {

  private rootUrl = environment.apiUrl;
  private idAuthor = environment.idAuthor

  constructor(
    private http: HttpClient
  ) {
  }

  public getAllMarvelHeroes(): Observable<MarvelHero[]> {
    return this.http.get<MarvelHero[]>(`${this.rootUrl}/marvel-characters`, {
      params: {
        idAuthor: this.idAuthor
      }
    })
  }

  public getMarvelHeroByTitle(title: string): Observable<MarvelHero> {
    return this.http.get<MarvelHero>(`${this.rootUrl}/marvel-characters`, {
      params: {
        idAuthor: this.idAuthor,
        title: title
      }
    })
  }

  public updateMarvelHero(id: string, marvelHero: MarvelHero): Observable<string> {
    return this.http.put<string>(`${this.rootUrl}/marvel-characters/${id}`,
      marvelHero, {
        params: {
          idAuthor: this.idAuthor
        },
      })
  }

  public deleteMarvelHero(id: string): Observable<string> {
    return this.http.delete<string>(`${this.rootUrl}/marvel-characters/${id}`, {
      params: {
        idAuthor: this.idAuthor
      },
    })
  }

  public addMarvelHero(marvelHero: MarvelHero): Observable<string> {
    return this.http.post<string>(`${this.rootUrl}/marvel-characters/`,
      marvelHero, {
        params: {
          idAuthor: this.idAuthor
        },
      })
  }

}
