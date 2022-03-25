import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosDetallesComponent } from './empleados-detalles/empleados-detalles.component';
import { EmpresaDetallesComponent } from './empresa-detalles/empresa-detalles.component';
import { InicioComponent } from './inicio/inicio.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'empleados-detalles',
    component: EmpleadosDetallesComponent,
  },
  {
    path: 'empresa-detalles',
    component: EmpresaDetallesComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
