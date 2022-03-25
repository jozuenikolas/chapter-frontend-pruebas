import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../config/endpoint.enun';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(
    private _httP: HttpClient
  ) { }

  public getListMarvel() {
    return this._httP.get(`${environment.apiUrl}${Endpoints.GET_LIST_MARVEL}${environment.idAuthor}`)
  }

  public getMarvel(name: string) {
    return this._httP.get(`${environment.apiUrl}${Endpoints.GET_LIST_MARVEL}${environment.idAuthor}`+'&title='+`${name}`)
  }
}
