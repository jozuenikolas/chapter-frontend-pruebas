import { Component } from '@angular/core';

import { PersonajeService } from '../../services/personaje.service';
import { environment } from '../../../../environments/environment';
import { IPersonaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent  {

  private autor : string= environment.autor;
  tituloPersonaje: string ='';
  personajesList : IPersonaje[]=[];
  constructor(
    private _personajeService: PersonajeService) { }


    buscarPersonajeXTitulo(){

      this._personajeService.consultarAllPersonajesXTitulo(this.autor, this.tituloPersonaje )
      .subscribe(persojaes => {
        this.personajesList = persojaes
        console.log(persojaes)
      })
    }

}
