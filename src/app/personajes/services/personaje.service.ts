import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersonaje } from '../interfaces/personaje.interface';
import { IRespuesta } from '../interfaces/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private apiURL : string = environment.urlPersonaje;

  constructor(
    private _http: HttpClient
  ) { }

    consultarAllPersonajesXAutor(autor:string):Observable<IPersonaje[]>{
      const url = `${this.apiURL}/marvel-characters?idAuthor=${autor}`;
      return this._http.get<IPersonaje[]>(url);
    }

    consultarAllPersonajesXTitulo(autor:string, titulo: string):Observable<IPersonaje[]>{
      const url = `${this.apiURL}/marvel-characters?idAuthor=${autor}&title=${titulo}`;
      return this._http.get<IPersonaje[]>(url);
    }

    crearPersonajeAutor(autor:string, personaje: IPersonaje):Observable<IRespuesta>{       
      
      const url = `${this.apiURL}/marvel-characters?idAuthor=${autor}`;
      return this._http.post<IRespuesta>(url,   personaje);
    }

    modificarPersonaje(personaje: IPersonaje):Observable<IPersonaje[]>{
      const url = `${this.apiURL}/:id?idAuthor=${personaje._id}`;
      return this._http.put<IPersonaje[]>(url, personaje);
    }
    eliminarPersonajeAutor(id: string):Observable<any[]>{
      const url = `${this.apiURL}/:id?idAuthor=${id}`;
      return this._http.delete<any>(url);
    }
}
