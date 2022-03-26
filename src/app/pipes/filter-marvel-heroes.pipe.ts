import {Pipe, PipeTransform} from '@angular/core';
import {MarvelHero} from "../types/marvel-hero";

@Pipe({
  name: 'filterMarvelHeroes'
})
export class FilterMarvelHeroesPipe implements PipeTransform {

  transform(array: MarvelHero [], filter?: string): any {
    let returnArray:MarvelHero[]

    returnArray = array
    filter = filter?.toUpperCase()
    if (!array || !filter) return array


    if(!array) {
      return array
    } else{
      returnArray = returnArray.filter(({title}) =>
        title.toUpperCase().includes(typeof filter === "string" ? filter :'')
      )

    }




    return  returnArray
  }

}
