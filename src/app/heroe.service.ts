import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as myGlobals from './global'; //<==== this one
import { Heroe } from './heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  
  //URL que obtiene la lista completa de heroes
  private ApiUrl = myGlobals.urlApi

  constructor(private httpCliente : HttpClient) { }

  obtenerListaHeroes():Observable<Heroe[]>{
    return this.httpCliente.get<Heroe[]>(`${this.ApiUrl}?idAuthor=1`);
  }
}
