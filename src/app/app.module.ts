import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MarvelService } from './services/marvel.service';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
