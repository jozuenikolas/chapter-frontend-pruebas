import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadosDetallesComponent } from './empleados-detalles/empleados-detalles.component';
import { EmpresaDetallesComponent } from './empresa-detalles/empresa-detalles.component';
import { EmployeeDataService } from './employee-data.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EmpleadosDetallesComponent,
    EmpresaDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
