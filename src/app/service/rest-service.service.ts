import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Personaje } from '../model/personasje';
import { serviceUrl } from '../util/util';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  autorId = 31;

  constructor(private http: HttpClient) { }

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${serviceUrl}?idAuthor=${this.autorId}`).pipe(catchError(this.handleError));
  }

  updatePersonaje(personaje: Personaje): Observable<Personaje> {
    return personaje._id ?
      this.http.put<Personaje>(`${serviceUrl}/${personaje._id}?idAuthor=${this.autorId}`, personaje).pipe(catchError(this.handleError)) :
      this.http.post<Personaje>(`${serviceUrl}/?idAuthor=${this.autorId}`, personaje).pipe(catchError(this.handleError))
  }

  deletePersonaje(id?: string): Observable<Personaje> {
    return this.http.delete<Personaje>(`${serviceUrl}/${id}?idAuthor=${this.autorId}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error: ', error.error);
    } else {
      console.error(`Code: ${error.status}, Body: `, error.error);
    }
    return throwError(() => new Error('Se ha producido un error. Intentar más tarde'));
  }

}
