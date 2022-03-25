import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonajesComponent } from './component/list-personajes/list-personajes.component';
import { AddEditPersonajesComponent } from './component/add-edit-personajes/add-edit-personajes.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RestServiceService } from './service/rest-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonajesComponent,
    AddEditPersonajesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
