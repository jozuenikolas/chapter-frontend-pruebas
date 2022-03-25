import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { NewHeroFormComponent } from './components/new-hero-form/new-hero-form.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { ProfileRoutingModule } from './marvel-heroes-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroCardComponent, NewHeroFormComponent, HeroPageComponent],
  imports: [CommonModule, ProfileRoutingModule, FormsModule],
})
export class MarvelHeroesModule {}
