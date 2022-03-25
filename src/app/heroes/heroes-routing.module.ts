import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [{
  path: 'hero-list',
  component: HeroListComponent
},{
  path: 'hero-edit',
  component: EditHeroComponent
},
{
  path: '',
  redirectTo:'hero-list'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
