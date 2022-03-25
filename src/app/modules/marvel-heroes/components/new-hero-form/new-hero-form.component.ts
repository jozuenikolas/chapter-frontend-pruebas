import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelHero } from '@app/data/models/marvelHero';
import { HeroesService } from '@app/services/marvel.service';

@Component({
  selector: 'app-new-hero-form',
  templateUrl: './new-hero-form.component.html',
  styleUrls: ['./new-hero-form.component.css'],
})
export class NewHeroFormComponent implements OnInit {
  heroName: string = '';
  heroTitle: string = '';
  heroBody: string = '';
  heroImage: string = '';

  private subscription: any;

  hero: MarvelHero = {
    title: 'hulk',
    body: 'super fuerte',
    image: 'https://i.pravatar.cc/300',
    category: 'main',
    createdAt: '2022-03-03T01:37:01.828Z',
    updatedAt: '2022-03-03T01:37:01.828Z',
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.getParamsRoute();
  }
  private getParamsRoute() {
    this.heroName = this.route.snapshot.params.heroName;
  }

  onSubmit() {
    this.hero.title = this.heroTitle;
    this.hero.body = this.heroBody;
    this.hero.image = this.heroImage;
    console.log(this.hero);
    if (this.heroName == 'new') {
      this.heroesService.postNewMarvelHero(this.hero).subscribe(
        (data) => {
          alert('creado exitosamente');
          this.router.navigate(['/']);
        },
        (error) => {
          alert('Error al crear registro');
        }
      );
    } else {
      this.heroesService.updateMarvelHero(this.hero).subscribe(
        (data) => {
          alert('actualizado exitosamente');
          this.router.navigate(['/']);
        },
        (error) => {
          alert('Error al actualizar registro');
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
