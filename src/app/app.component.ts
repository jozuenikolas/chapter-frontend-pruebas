import { Component, OnInit } from '@angular/core';
import { Hero } from './interfaces/hero.interface';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cbalcaza';
  currentSelectedHero: Hero = this.generateEmptyHero();
  searchHeroText: string = '';
  isShowingHeroForm: boolean = false;

  heroes: Hero[] = [];

  constructor(private readonly _heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this._heroService.getHeroes().subscribe((data) => {
      this.heroes = data;
    });
  }

  onSaveFormSuccess(success: boolean) {
    if (success) {
      this.getHeroes();
    }
  }

  setCurrentHero(hero: Hero) {
    this.isShowingHeroForm = true;
    this.currentSelectedHero = hero;
  }

  onDeleteSuccess(success: boolean) {
    if (success) {
      this.getHeroes();
    }
  }

  generateEmptyHero(): Hero {
    return {
      _id: '',
      body: '',
      category: '',
      createdAt: new Date(),
      idAuthor: '',
      image: '',
      title: '',
      updatedAt: new Date(),
    };
  }

  showHeroForm() {
    this.isShowingHeroForm = true;
  }

  hideHeroForm() {
    this.currentSelectedHero = this.generateEmptyHero();
    this.isShowingHeroForm = false;
  }
}
