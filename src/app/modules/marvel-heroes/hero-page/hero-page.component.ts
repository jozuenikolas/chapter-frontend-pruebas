import { Component, OnInit } from '@angular/core';
import { MarvelHero } from '@app/data/models/marvelHero';
import { HeroesService } from '@app/services/marvel.service';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
})
export class HeroPageComponent implements OnInit {
  marvelHeroes: MarvelHero[] = [];
  marvelFilteredHeroes: MarvelHero[] = [];
  searchText: string = '';
  constructor(private heroesService: HeroesService) {
    this.getPageData();
  }

  ngOnInit(): void {}
  getPageData() {
    this.heroesService.getAllHeroesList(1).subscribe((listScore) => {
      this.marvelHeroes = listScore;
      this.marvelFilteredHeroes = listScore;
    });
  }
  search() {
    this.marvelFilteredHeroes = this.marvelHeroes;
    this.marvelFilteredHeroes = this.marvelHeroes.filter((hero) => {
      return JSON.stringify(hero)
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
    });
  }
}
