import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'inicio',
        component:InicioComponent
      },
      {
        path:'**',
        redirectTo:'inicio'
      }
    ]
    
  }
]
@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forChild(routes)
    
  ],
  exports:[
    RouterModule
  ]

})
export class IngresoRoutingModule { }
