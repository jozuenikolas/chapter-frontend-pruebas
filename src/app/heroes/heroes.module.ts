import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroListComponent,
    EditHeroComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
