import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarvelModel } from '../models/marvel.model';
import { environment } from '../../environments/environment.prod';
const url: string = environment.url;

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  idAuthor = 16;
  constructor(private readonly _http: HttpClient) {}

  getAll(): Observable<MarvelModel[]> {
    return this._http.get<MarvelModel[]>(`${url}?idAuthor=${this.idAuthor}`);
  }

  create(marvel: MarvelModel): Observable<any> {
    return this._http.post<any>(`${url}?idAuthor=${this.idAuthor}`, marvel);
  }

  edit(marvel: MarvelModel, id: string | undefined): Observable<any> {
    return this._http.put<any>(
      `${url}/${id}?idAuthor=${this.idAuthor}`,
      marvel
    );
  }

  delete(id: string | undefined): Observable<any> {
    return this._http.delete<any>(`${url}/${id}?idAuthor=${this.idAuthor}`);
  }

  search(title: string): Observable<MarvelModel[]> {
    return this._http.get<MarvelModel[]>(
      `${url}?idAuthor=${this.idAuthor}&title=${title}`
    );
  }
}
