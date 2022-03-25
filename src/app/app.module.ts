import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroFilterPipe } from './pipes/hero-filter.pipe';

@NgModule({
  declarations: [AppComponent, HeroCardComponent, HeroFormComponent, HeroFilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
