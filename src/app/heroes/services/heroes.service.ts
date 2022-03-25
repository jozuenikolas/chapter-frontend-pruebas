import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {HeroesResponse, HeroesSave} from "../interfaces/heroes.interfaces";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private id: number = 20;
  private servicioUrl: string = 'https://bp-marvel-api.herokuapp.com/marvel-characters';
  public resultados: HeroesResponse[] = [];

  constructor(private  http: HttpClient) {
    this.buscarHeroes();
  }

  private getQuery(params: HttpParams) {
    return this.http.get<HeroesResponse[]>(this.servicioUrl, {params});
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  buscarHeroes() {
    const params = new HttpParams()
      .set('idAuthor', this.id);

    this.getQuery(params)
      .subscribe(resp => {
        console.log(resp);
        this.resultados = resp;
      });
  }

  buscarHeroeByComic(comic: string) {
    const params = new HttpParams()
      .set('idAuthor', this.id)
      .set('title', comic);

    this.getQuery(params)
      .subscribe(resp => {
        console.log(resp);
        this.resultados = resp;
      });
  }

  crearHeroe(heroe: HeroesSave) {
    return this.http.post(this.servicioUrl+ `?idAuthor${this.id}`,heroe,this.httpOptions)
      .pipe(
        catchError(this.handleError('addSmartphone', heroe))
      );
  }
}
