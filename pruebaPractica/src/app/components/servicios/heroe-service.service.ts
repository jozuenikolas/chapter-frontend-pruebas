import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const urlService='https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=30';

@Injectable({
  providedIn: 'root'
})
export class HeroeServiceService {

  constructor(private http: HttpClient) { }

  obtenerListaHeroes(){
    console.log(urlService);
    return this.http.get(urlService);
  }

  obtenerBusquedaHeroe(campoBusqueda: string){
    const urlLista=urlService+'&title='+campoBusqueda;
    console.log(urlLista);
    return this.http.get(urlLista);
  }

}



export interface Heroe{
  _id: string;
  title: string;
  body: string;
  image: string;
  category: string;
  idAuthor: string;
  createdAt: string;
  updatedAt: string;
};