import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css']
})
export class ListaHeroesComponent implements OnInit {

  heroes : Heroe[];

  constructor(private heroeServicio:HeroeService) { }

  ngOnInit(): void {
    this.obtenerHeroes();
  }

  private obtenerHeroes(){
    this.heroeServicio.obtenerListaHeroes().subscribe(dato => {this.heroes = dato; console.log(dato)})
  }

}
