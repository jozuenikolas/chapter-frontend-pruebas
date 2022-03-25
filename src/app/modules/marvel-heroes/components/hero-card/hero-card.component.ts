import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelHero } from '@app/data/models/marvelHero';
import { HeroesService } from '@app/services/marvel.service';

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
  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {}
  onEdit() {
    console.log('edit', this.hero);
  }
  onDelete() {
    console.log('delete', this.hero);
    this.heroesService.deleteMarvelHero(this.hero).subscribe(
      (data) => {
        alert('borrado exitosamente');
        this.router.navigate(['/']);
      },
      (error) => {
        alert('Error al eliminar registro');
      }
    );
  }
}
