import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeroDetail } from "../models/hero-detail";
import { HeroServiceService } from "../services/hero-service.service";

@Component({
  selector: "app-hero-list",
  templateUrl: "./hero-list.component.html",
  styleUrls: ["./hero-list.component.scss"],
})
export class HeroListComponent implements OnInit {
  heroes: HeroDetail[] = [];
  heroResponse :HeroDetail[] =[];
  filterText: string = '';

  constructor(
    private heroService: HeroServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.getAllHeroes();
  }
  editHero(hero: HeroDetail) {
    this.heroService.hero = hero;
    this.router.navigate(["hero-edit"]);
  }
  deleteHero(hero: HeroDetail) {
    this.heroService.deleteHero(hero).subscribe((res) => {
      this.getAllHeroes();
    });
  }
  getAllHeroes(){
    this.heroService
    .getAllHeroesByAuthor()
    .subscribe((res) => {
      this.heroes = res;
      this.heroResponse = Object.assign([],res);
    });
  }
  addNewHero(){
    this.heroService.hero = null;
    this.router.navigateByUrl('hero-edit');
  }
  filterHero(){
    this.heroes = this.heroResponse.filter(hero=>{
           hero.title.includes(this.filterText) ;
    });
  }
}
