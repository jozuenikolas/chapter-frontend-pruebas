import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreggarPersonajeComponent } from './components/agreggar-personaje/agreggar-personaje.component';

const routes: Routes = [{
  path:'',
  component: AgreggarPersonajeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
