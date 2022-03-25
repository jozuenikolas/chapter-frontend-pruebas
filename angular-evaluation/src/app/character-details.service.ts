import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterDetails } from './model/character-details';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsService {

  private dataUrl = "https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1";

  constructor(
    private http:HttpClient
  ) { }

  getCharacters():Observable<CharacterDetails []> {
    return this.http.get<CharacterDetails []>(this.dataUrl);
  }

  saveCharctrs(charctr: any):Observable<CharacterDetails> {
    return this.http.post<CharacterDetails>(this.dataUrl, charctr)
  }


  updateCharactrs(charctr: any) {
    return this.http.put("https://bp-marvel-api.herokuapp.com/$(charctr.id)?idAuthor=2", charctr);
  }
}
