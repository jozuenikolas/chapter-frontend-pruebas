import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersonaje } from '../personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  _url = 'https://bp-marvel-api.herokuapp.com/marvel-characters'
  _urlInsert = 'https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=47'
  _urlDelete = 'http://bp-marvel-api.herokuapp.com'

  constructor(
    private http:HttpClient

  ) { 
    console.log("Servicio personajes cookie");
  }

  getPersonajes(): Observable<IPersonaje[]> {
		return this.http.get<IPersonaje[]>(this._url,
      {

        headers : new HttpHeaders({
          'Type-content':'aplication/json',
        }),
      
        params : new HttpParams ().set('idAuthor','47')
      
      }

      );
	  }


    anadirPersonaje(
  
    title : string,
    body : string,
    image : string,
    category : string,

    createdAt : Date,
    updatedAt : Date
    ): Observable<IPersonaje[]> {
      return this.http.post<IPersonaje[]>(this._urlInsert, 
      {
        title,
        body,
        image,
        category,
        createdAt,
        updatedAt
      },
      {

        headers : new HttpHeaders({
          'Type-content':'aplication/json',
        }),
      
        params : new HttpParams ().set('idAuthor','47') 
      
      }
      );
    }


    eliminarPersonaje(target: string): Observable<IPersonaje[]> {
      return this.http.delete<IPersonaje[]>(
        this._urlDelete, 
        {

          headers : new HttpHeaders({
            'Type-content':'aplication/json',
          }),
        
          params : new HttpParams ().set('idAuthor','47').append('_id',target)
        
        }
         
      );
    }


  
}
