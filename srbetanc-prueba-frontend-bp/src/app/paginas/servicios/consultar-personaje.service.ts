import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Autores } from 'src/app/entidades/autores';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultarPersonajeService {

  constructor(private http: HttpClient) {

   }


  consultaCreditoDesembolso(): Observable<Autores> {
    return this.http.post<Autores>("https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=41",'41')
      .pipe(
        map(respuesta => {
          return respuesta;
        }),
      );
  }

}



