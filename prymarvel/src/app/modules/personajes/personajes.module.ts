import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { AgreggarPersonajeComponent } from './components/agreggar-personaje/agreggar-personaje.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgreggarPersonajeComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    FormsModule
  ]
})
export class PersonajesModule { }
