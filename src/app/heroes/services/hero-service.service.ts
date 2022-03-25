import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HeroDetail } from "../models/hero-detail";
@Injectable({
  providedIn: "root",
})
export class HeroServiceService {
  addHero(hero: any) {
    hero.idAuthor = this.idAuthor;
    hero.category= "main";
    delete hero.id;
    return this.http.post<HeroDetail>('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=' + this.idAuthor, hero);
   
  }
  hero: HeroDetail;
  idAuthor: string = "1";

  saveHero(hero: HeroDetail) {
    return this.http.post(
      "https://bp-marvel-api.herokuapp.com/marvel-characters/" +
        hero._id +
        "?idAuthor=" +
        this.idAuthor,
      hero
    );
  }

  constructor(private http: HttpClient) {}
  getAllHeroesByAuthor(): Observable<HeroDetail[]> {
    return this.http.get<HeroDetail[]>(
      "https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=" +
        this.idAuthor
    );
  }
  deleteHero(hero: HeroDetail) {
    return this.http.delete<any>(
      "https://bp-marvel-api.herokuapp.com/marvel-characters/" +
        hero._id +
        "?idAuthor=" +
        this.idAuthor
    );
  }
}
