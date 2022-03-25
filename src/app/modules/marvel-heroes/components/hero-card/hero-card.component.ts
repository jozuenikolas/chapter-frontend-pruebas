import { Component, Input, OnInit } from '@angular/core';
import { MarvelHero } from '@app/data/models/marvelHero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input('hero') hero: MarvelHero = {
    title: 'hulk',
    body: 'super fuerte',
    image: 'https://i.pravatar.cc/300',
  };
  constructor() {}

  ngOnInit(): void {}
}
