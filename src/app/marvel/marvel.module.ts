import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListPage } from './page/character-list/character-list.page';
import { Routes, RouterModule } from '@angular/router';
import { MarvelService } from './service/marvel.service';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { ButtonModule } from '../components/button/button.component';
import { CharacterCreateComponent } from './components/character-create/character-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'index', component: CharacterListPage },
  { path: '**', redirectTo: 'index' },
];

@NgModule({
  declarations: [
    CharacterListPage,
    CharacterCardComponent,
    CharacterCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [MarvelService],
})
export class MarvelModule {}
