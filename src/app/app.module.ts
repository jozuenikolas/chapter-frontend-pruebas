import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';;
import { BuscarComponent } from './personajes/pages/buscar/buscar.component';
import { AgregarComponent } from './personajes/pages/agregar/agregar.component';
import { ListadoComponent } from './personajes/pages/listado/listado.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent, 
    AgregarComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
