import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Interpersonaje } from '../otros/Interfpersonaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpersonajeService {
  private _url: string ="https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=45";
  
  private _urlA: string="https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=45";

  private _urlB: string ="http://bp-marvel-api.herokuapp.com/:id?idAuthor=45";
  constructor(
    private http: HttpClient
  ) { }

  getusers(): Observable <Interpersonaje[]>{
    return  this.http.get <Interpersonaje[]> (this._url);
  }

  agregar(
    
    _id:number,
    title:string,
    body:string,
    imagen:ImageBitmap,
    category:string,
    id_autor:number,
    createdAt:Date,
    updatedAt:Date

  ): Observable<Interpersonaje[]> {
    return this.http.post<Interpersonaje[]>(this._urlA, {
       _id,
    title,
    body,
    imagen,
    category,
    id_autor,
    createdAt,
    updatedAt
    });
  }

  borrar(target: string): Observable<Interpersonaje[]> {
    return this.http.delete<Interpersonaje[]>(
      this._urlB + '/' + target + '.json'
    );
  }
}
