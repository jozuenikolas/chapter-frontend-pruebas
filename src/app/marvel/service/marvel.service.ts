import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarvelCharacter } from '../models/marvel-character';

@Injectable()
export class MarvelService {
  static URL = environment.URL;
  static ID_AUTHOR = 'idAuthor';
  static AUTHOR = '33';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<MarvelCharacter[]> {
    return this.http.get<MarvelCharacter[]>(
      `${MarvelService.URL}?${MarvelService.ID_AUTHOR}=${MarvelService.AUTHOR}`
    );
  }

  saveCharacter(character: MarvelCharacter): Observable<MarvelCharacter> {
    return this.http.post<MarvelCharacter>(
      `${MarvelService.URL}?${MarvelService.ID_AUTHOR}=${MarvelService.AUTHOR}`,
      character
    );
  }

  deleteCharacter(id: any): Observable<any> {
    return this.http.delete<any>(
      `${MarvelService.URL}/${id}?${MarvelService.ID_AUTHOR}=${MarvelService.AUTHOR}`
    );
  }

  editCharacter(character: MarvelCharacter): Observable<MarvelCharacter> {
    return this.http.put<any>(
      `${MarvelService.URL}/${character._id}?${MarvelService.ID_AUTHOR}=${MarvelService.AUTHOR}`,
      character
    );
  }

  searchCharacter(term: string): Observable<MarvelCharacter[]> {
    return this.http.get<MarvelCharacter[]>(
      `${MarvelService.URL}?${MarvelService.ID_AUTHOR}=${MarvelService.AUTHOR}&title=${term}`
    );
  }
}
