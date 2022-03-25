import { Component, OnInit } from '@angular/core';
import {HeroesService} from "../services/heroes.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  constructor(private heroesService: HeroesService) { }

  get resultados() {
    return this.heroesService.resultados;
  }

}
