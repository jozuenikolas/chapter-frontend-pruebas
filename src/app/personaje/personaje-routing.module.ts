import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './component/agregar/agregar.component';
import { BuscarComponent } from './component/buscar/buscar.component';

const routes: Routes = [
  {
    path:'',
    children:[
     
      {
        path:'agregar',
        component: AgregarComponent
      },
      {
        path:'buscar',
        component: BuscarComponent
      },
     
      
      {
        path:'**',
        redirectTo:'lista'
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
export class PersonajeRoutingModule { }
