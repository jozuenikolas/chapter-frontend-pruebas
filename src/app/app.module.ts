import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MarvelHeroesComponent} from './components/marvel-heroes/marvel-heroes.component';
import {FormMarvelHeroComponent} from './components/form-marvel-hero/form-marvel-hero.component';
import {CardMarvelHeroComponent} from './components/card-marvel-hero/card-marvel-hero.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FilterMarvelHeroesPipe } from './pipes/filter-marvel-heroes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarvelHeroesComponent,
    FormMarvelHeroComponent,
    CardMarvelHeroComponent,
    FilterMarvelHeroesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
