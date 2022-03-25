import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './Error/errorpage/errorpage.component';

const routes: Routes = [
  {
    path:'ingreso',
    loadChildren:()=>import('./ingreso/ingreso.module') .then(m=>m.IngresoModule)

  },
  {
    path:'personaje',
    loadChildren:()=>import('./personaje/mpersona.module') .then(m=>m.MpersonaModule)   
  },
  {
  path: '404', 
  component:ErrorpageComponent
  },
  {
  path: '**', 
  //component:ErrorpageComponent
  redirectTo:'404'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
