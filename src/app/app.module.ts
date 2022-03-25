import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarPersonajesComponent } from './mostrar-personajes/mostrar-personajes.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';
import { EditarPersonajeComponent } from './editar-personaje/editar-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarPersonajesComponent,
    BusquedaComponent,
    AgregarPersonajeComponent,
    EditarPersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
