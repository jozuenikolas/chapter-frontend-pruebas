import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {first, from, map, Observable, of} from 'rxjs';
import {MarvelHero} from "../types/marvel-hero";
import {MarvelHeroService} from "../services/marvel-hero.service";

@Injectable({
  providedIn: 'root'
})
export class MarvelHeroResolver implements Resolve<MarvelHero> {

  constructor(
    private marvelHeroService: MarvelHeroService
  ) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MarvelHero> {
    const {title} = route.params
    return from(this.marvelHeroService.getMarvelHeroByTitle(title))
  }
}
