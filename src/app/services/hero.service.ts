import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { SaveHeroResponse } from '../interfaces/save-response';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  AUTHOR_ID_CBALCAZA = 15;
  API_URL = `https://bp-marvel-api.herokuapp.com`;

  constructor(private readonly _httpClient: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this._httpClient.get<Hero[]>(
      `${this.API_URL}/marvel-characters?idAuthor=${this.AUTHOR_ID_CBALCAZA}`
    );
  }

  createHero(hero: Hero): Observable<SaveHeroResponse> {
    return this._httpClient.post<SaveHeroResponse>(
      `${this.API_URL}/marvel-characters?idAuthor=${this.AUTHOR_ID_CBALCAZA}`,
      hero
    );
  }

  updateHero(hero: Hero): Observable<SaveHeroResponse> {
    return this._httpClient.put<SaveHeroResponse>(
      `${this.API_URL}/marvel-characters/${hero._id}?idAuthor=${this.AUTHOR_ID_CBALCAZA}`,
      hero
    );
  }

  deleteHero(id: string): Observable<SaveHeroResponse> {
    return this._httpClient.delete<SaveHeroResponse>(
      `${this.API_URL}/marvel-characters/${id}?idAuthor=${this.AUTHOR_ID_CBALCAZA}`
    );
  }
}
