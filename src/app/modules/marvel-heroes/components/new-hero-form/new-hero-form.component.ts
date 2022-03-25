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
    console.log(this.hero);
    this.heroesService.postNewMarvelHero(this.hero).subscribe(
      (data) => {
        console.log('creado exitosamente', data);
        this.onCancel();
      },
      (error) => {
        alert('Error al crear registro');
      }
    );
    //   this.routesActivitiesService.postNewActivity(this.model).subscribe(
    //     (data) => {
    //       this.snackBar.openFromComponent(SnackBarCustomCreateMessage, {
    //         duration: 4000,
    //       });
    //       this.onReturn();
    //     },
    //     (error) => {
    //       this.showErrorMessage('Error al crear registro');
    //     }
    //   );
  }

  onCancel() {
    this.router.navigate(['/']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
