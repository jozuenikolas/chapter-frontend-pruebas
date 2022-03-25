import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/entidades/autor';
import { ConsultarPersonajeService } from '../servicios/consultar-personaje.service';

@Component({
  selector: 'app-busqueda-personaje',
  templateUrl: './busqueda-personaje.component.html',
  styleUrls: ['./busqueda-personaje.component.css'],
  providers: [
    ConsultarPersonajeService,
  ]
})
export class BusquedaPersonajeComponent implements OnInit {
  numOrdenes:string='';
  autores:Autor[]=[];
  constructor(private consultarPersonajeService: ConsultarPersonajeService,) { }

  ngOnInit(): void {
  }

  buscarPersonaje(id:string){
 //this.consultarPersonajeService.consultaCreditoDesembolso().subscribe(data => this.autores = data);
  }
}
