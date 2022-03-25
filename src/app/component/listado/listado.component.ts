import { Component, OnInit } from '@angular/core';
import { SpersonajeService } from 'src/app/services/spersonaje.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  
  personajes:any[]|undefined;

  constructor( private _personajeservices:SpersonajeService){}

  ngOnInit(): void {
    this._personajeservices.getusers().subscribe((data:any[])=> this.personajes=Object.values(data))
  }



}
