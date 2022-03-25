import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPersonajesComponent } from './paginas/listado-personajes/listado-personajes.component';
import { BusquedaPersonajeComponent } from './paginas/busqueda-personaje/busqueda-personaje.component';
import { NuevoPersonajeComponent } from './paginas/nuevo-personaje/nuevo-personaje.component';
import { DetallePersonajeComponent } from './paginas/detalle-personaje/detalle-personaje.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPersonajesComponent,
    BusquedaPersonajeComponent,
    NuevoPersonajeComponent,
    DetallePersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
