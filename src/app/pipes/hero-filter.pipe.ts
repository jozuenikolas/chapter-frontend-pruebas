import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  transform(heroes: Hero[], title: string): Hero[] {
    return heroes.filter((hero) =>
      hero.title.toLowerCase().includes(title.toLowerCase())
    );
  }
}
