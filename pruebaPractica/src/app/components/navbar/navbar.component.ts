import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { HeroeServiceService, Heroe} from '../servicios/heroe-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild ('buscarTexto') buscarTexto!:ElementRef; 
  public listaHeroes: Array<any>=[];

  constructor(private heroeService: HeroeServiceService) { }

  ngOnInit(): void {
  }

  crearHeroe(){
  }
  cancelarHeroe(){
  }

  guardarHeroe(){}

  buscarHeroe(termino:string){
    console.log('Buscar con: '+termino);
    this.heroeService.obtenerBusquedaHeroe(termino).subscribe((res: any)=> {
      this.listaHeroes=res;
      console.log(this.listaHeroes);
    });

  }

}
