import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterMarvel } from '../interfaces/character-marvel';

@Injectable({
  providedIn: 'root'
})
export class CharacterMarvelService {

  private readonly ID_AUTOR = 32;

  constructor(private http: HttpClient) { }

  getCharactersList(): Observable<CharacterMarvel[]> | undefined {
    return this.http.get<CharacterMarvel[]>(`https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=${this.ID_AUTOR}`);
  }

  getCharacterByTitle(titleCharacter: any) {
    return this.http.get<CharacterMarvel[]>(`https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=${this.ID_AUTOR}&title=${titleCharacter}`);
  }

  saveCharater(character: any): Observable<any> | undefined {
    return this.http.post<any>(`https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=${this.ID_AUTOR}`, character);
  }

  updateCharater(idCharacter: any, character: any): Observable<any> | undefined {
    return this.http.put<any>(`//https://bp-marvel-api.herokuapp.com/${idCharacter}?idAuthor=${this.ID_AUTOR}`, character);
  }

  deleteCharacter(idCharacter: any): Observable<any> | undefined {
    return this.http.delete<any>(`https://bp-marvel-api.herokuapp.com/marvel-characters/${idCharacter}?idAuthor=${this.ID_AUTOR}`);
  }
}
