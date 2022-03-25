import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaHeroesComponent } from './lista-heroes/lista-heroes.component';
import { RegistrarHeroeComponent } from './registrar-heroe/registrar-heroe.component';

const routes: Routes = [
  {path:'heroes',component:ListaHeroesComponent},
  {path:'',redirectTo:'heroes',pathMatch:'full'},
  {path:'registrar-heroe',component:RegistrarHeroeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
