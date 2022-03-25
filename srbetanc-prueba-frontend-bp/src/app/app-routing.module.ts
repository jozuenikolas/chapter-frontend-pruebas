import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPersonajesComponent } from './paginas/listado-personajes/listado-personajes.component';

const routes: Routes = [
  { path:'listadoPersonajes', component: ListadoPersonajesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'listadoPersonajes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
