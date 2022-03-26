import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MarvelHero} from "../../types/marvel-hero";
import {MarvelHeroService} from "../../services/marvel-hero.service";
import {from, Observable, tap} from "rxjs";

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.scss']
})
export class MarvelHeroesComponent implements OnInit {


  cards$: Observable<MarvelHero[]>
  disabledHeader: boolean = true

  searchText: string = ""

  constructor(
    private router: Router,
    private marvelHeroService: MarvelHeroService
  ) {
  }

  ngOnInit(): void {
    this.cards$ = this.getCards()
  }

  updateCards($event?: boolean) {
    this.cards$ = this.getCards()
  }

  getCards() {
    return from(this.marvelHeroService.getAllMarvelHeroes())
  }


}
