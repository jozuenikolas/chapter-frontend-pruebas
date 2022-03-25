import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListadoComponent } from './listado/listado.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BusquedaComponent,
    ListadoComponent
  ],
  exports: [
    BusquedaComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
