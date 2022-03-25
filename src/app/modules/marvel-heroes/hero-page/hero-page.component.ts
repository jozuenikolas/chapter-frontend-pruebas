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
  constructor(private heroesService: HeroesService) {
    this.getPageData();
  }

  ngOnInit(): void {}
  getPageData() {
    this.heroesService.getAllHeroesList(1).subscribe((listScore) => {
      this.marvelHeroes = listScore;
    });
  }
}
