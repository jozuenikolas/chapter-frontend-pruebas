import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MarvelHeroesComponent} from "./components/marvel-heroes/marvel-heroes.component";
import {FormMarvelHeroComponent} from "./components/form-marvel-hero/form-marvel-hero.component";
import {MarvelHeroResolver} from "./resolvers/marvel-hero.resolver";

const routes: Routes = [
  {
    path: 'marvel-heroes',
    component: MarvelHeroesComponent
  },
  {
    path: 'create-marvel-hero',
    component: FormMarvelHeroComponent
  },
  {
    path: 'edit-marvel-hero/:title',
    component: FormMarvelHeroComponent,
    resolve: {
      marvelHero: MarvelHeroResolver
    }
  },
  {
    path: '**',
    redirectTo: '/marvel-heroes',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
