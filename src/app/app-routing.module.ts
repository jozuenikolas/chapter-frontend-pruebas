import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { EditarPersonajeComponent } from './editar-personaje/editar-personaje.component';
import { MostrarPersonajesComponent } from './mostrar-personajes/mostrar-personajes.component';

const routes: Routes = [
  { path: '', redirectTo: '/busqueda', pathMatch: 'full' },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'agregar', component: AgregarPersonajeComponent },
  { path: 'editar', component: EditarPersonajeComponent },
  { path: 'mostrar', component: MostrarPersonajesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
