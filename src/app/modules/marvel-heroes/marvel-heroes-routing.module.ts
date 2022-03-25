import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHeroFormComponent } from './components/new-hero-form/new-hero-form.component';
import { HeroPageComponent } from './hero-page/hero-page.component';

const routes: Routes = [
  {
    path: '',
    component: HeroPageComponent,
  },
  {
    path: ':heroName',
    component: NewHeroFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
