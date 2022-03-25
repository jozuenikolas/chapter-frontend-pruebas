import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelHero } from '@app/data/models/marvelHero';

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
  };
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getParamsRoute();
  }
  private getParamsRoute() {
    this.heroName = this.route.snapshot.params.heroName;
  }

  onSubmit() {
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
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
