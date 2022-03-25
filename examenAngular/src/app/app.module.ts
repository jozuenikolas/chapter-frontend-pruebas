import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarPersonajesComponent } from './agregar-personajes/agregar-personajes.component';
import { BuscarPersonajesComponent } from './buscar-personajes/buscar-personajes.component';
import { EditarPersonajesComponent } from './editar-personajes/editar-personajes.component';
import { EliminarPersonajesComponent } from './eliminar-personajes/eliminar-personajes.component';
import { MostrarPersonajesComponent } from './mostrar-personajes/mostrar-personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarPersonajesComponent,
    BuscarPersonajesComponent,
    EditarPersonajesComponent,
    EliminarPersonajesComponent,
    MostrarPersonajesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }