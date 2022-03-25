import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Model } from "./Model";
import { Observable } from 'rxjs';

@Injectable()
export class MarvelService{
    NewName=""
    private url:string = "https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1";

    constructor(private http:HttpClient){}

    getMarvel(){
        return this.http.get<Model[]>("https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1")

    }

    // BuscarMarvel(Name:string){
    //     this.NewName=Name
    //     return this.http.get<Model[]>("https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1")
    // }

    saveCharacter(character:any):Observable<Model>{
        return this.http.post<Model>(this.url,character);
     }
   
     updateCharacter(character:any){
        return this.http.put(`https://bp-marvel-api.herokuapp.com/marvel-characters/${character._id}?idAuthor=${character.idAuthor}`,character)
     }
   
     deleteCharacter(character:any){
       return this.http.delete(`https://bp-marvel-api.herokuapp.com/marvel-characters/${character._id}?idAuthor=${character.idAuthor}`);
     }


}