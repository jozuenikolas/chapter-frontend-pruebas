import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Personaje } from '../models/personaje.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(
    private http: HttpClient
  ) { }

  listaPeronas(idAuthor: string): Observable<Personaje[]> {

    return this.http.get<Personaje[]>('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=' + idAuthor);

  }

  buscaPeronas(idAuthor: string,title: string): Observable<Personaje[]> {

    return this.http.get<Personaje[]>('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=' + idAuthor+'&title='+title);

  }


  guardarPersonaje(idAuthor: string, entrada: any) {
    return this.http.post<any>('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=' + idAuthor, entrada)
      .pipe(
        map(respuesta => {
          return respuesta
        })
      )
  }

  editarPersonaje(idAuthor: string, entrada: any,persona:Personaje){
    
    return this.http.put<any>('https://bp-marvel-api.herokuapp.com/marvel-characters/'+persona._id+'?idAuthor=' + idAuthor, entrada)
      .pipe(
        map(respuesta => {
          return respuesta
        })
      )
  }

  eliminarPersonaje(idAuthor: string,entrada: any){
    
    return this.http.delete<any>('https://bp-marvel-api.herokuapp.com/marvel-characters/'+entrada._id+'?idAuthor=' + idAuthor)
    
  }
}
