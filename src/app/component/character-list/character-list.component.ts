import { Component, OnInit } from '@angular/core';
import { CharacterMarvel } from 'src/app/interfaces/character-marvel';
import { CharacterMarvelService } from 'src/app/services/character-marvel.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  listCharater: CharacterMarvel[] = [];
  public showEdit = false;

  constructor(private characterMarvelService: CharacterMarvelService) { }

  ngOnInit(): void {
    this.getListCharacter();
  }

  getListCharacter() {
    this.characterMarvelService.getCharactersList().subscribe(
      (response: CharacterMarvel[]) => {
        this.listCharater = response;
      }
    );
  }

  onClickSearch() {

  }

  onClickEdit() { }

  onClickDelete(idCharater: string) {
    this.characterMarvelService.deleteCharacter(idCharater).subscribe(
      (response: any) => {
        this.getListCharacter();
        window.alert('Personaje eliminado');
      }
    );
  }

  onClickCancel() {
    this.showEdit = false;
  }

  onClickNew() {
    this.showEdit = true;
  }

  onClickReaload() {
    this.getListCharacter();
  }

}
