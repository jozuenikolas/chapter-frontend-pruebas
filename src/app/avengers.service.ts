import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import {IAvenger} from "./avenger";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {throwError as observableThrowError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AvengersService {

  urlConsultaId:string='https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=';


  constructor(private http: HttpClient) { }
  getAvengersId(idAvenger:string): Observable<IAvenger[]> {
    return this.http
      .get<IAvenger[]>(this.urlConsultaId+idAvenger)
      ;
  }

  getAvengersIdTitulo(idAvenger:string,tituloAvenger:string): Observable<IAvenger[]> {
    return this.http
      .get<IAvenger[]>(this.urlConsultaId+idAvenger+'&title='+tituloAvenger)
      ;
  }

  addAvenger(

  title: string,
  body: string,
  image: string,
  category: string,
  createdAt: string,
  updatedAt: string
  ): Observable<IAvenger[]> {
    return this.http.post<IAvenger[]>(this.urlConsultaId+'54', {
      title,
      body,
      image,
      category,
      createdAt,
      updatedAt
    })
      .pipe(catchError(this.errorHandler))
      ;
  }

  errorHandler(error:HttpErrorResponse){

    return observableThrowError(error.message)
  }

}
