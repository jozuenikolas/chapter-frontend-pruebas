import { Component, OnInit } from '@angular/core';
import { HeroeServiceService, Heroe} from '../servicios/heroe-service.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public listaHeroes: Array<any>=[];


  constructor(private heroeService: HeroeServiceService) { 
    this.heroeService.obtenerListaHeroes().subscribe((res: any)=> {
      this.listaHeroes=res;
      console.log(this.listaHeroes);
    });
  }

  ngOnInit(): void {
  }

  obtenerHeroes(){
    this.heroeService.obtenerListaHeroes().subscribe((res: any)=> {
      console.log(res);
    });
  }

  buscarHeroe(){

  }

}
