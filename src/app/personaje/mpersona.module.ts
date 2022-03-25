import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajeRoutingModule } from './personaje-routing.module';
import { BorrarComponent } from './component/borrar/borrar.component';
import { AgregarComponent } from './component/agregar/agregar.component';
import { BuscarComponent } from './component/buscar/buscar.component';
import { EditarComponent } from './component/editar/editar.component';

@NgModule({
  declarations: [    
    BorrarComponent, 
    AgregarComponent, 
    BuscarComponent, 
    EditarComponent
  ],
  imports: [
    CommonModule,
    PersonajeRoutingModule
  ],
  exports:[

  ]

  
})
export class MpersonaModule { }
