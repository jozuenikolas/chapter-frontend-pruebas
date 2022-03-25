import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../service/marvel.service';
import { MarvelCharacter } from '../../models/marvel-character';
import { labelsCharacterIndex } from '../../enums/marvel.enum';
import { ICONS } from 'src/app/enums/global.type';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
})
export class CharacterListPage implements OnInit {
  showInterface = false;
  characters: MarvelCharacter[] = [];
  labels = labelsCharacterIndex;
  editCharacter?: MarvelCharacter;
  showCreate = false;
  icons = ICONS;

  constructor(private _marvelService: MarvelService) {}

  ngOnInit(): void {
    this._marvelService.getCharacters().subscribe(
      (res) => {
        this.showInterface = true;
        this.characters = res;
      },
      (err) => {
        console.log(`error get character`);
      }
    );
  }

  handleSave(event: any) {
    if ((event.type = 'save')) {
      this._marvelService.saveCharacter(event.data).subscribe((res) => {
        this.characters.push(res);
      });
    }
    if ((event.type = 'edit')) {
      this._marvelService.editCharacter(event.data).subscribe((res) => {
        const index = this.characters.findIndex(
          (m) => m._id === event.data._id
        );
        this.characters[index] = res;
      });
    }
  }

  handleOption(event: any, character: MarvelCharacter) {
    if (event === 'DELETE') {
      this._marvelService.deleteCharacter(character._id).subscribe((res) => {
        this.characters = [
          ...this.characters.filter((m) => m._id !== character._id),
        ];
      });
    } else {
      this.showCreate = true;
      this.editCharacter = character;
    }
  }

  add() {
    this.showCreate = true;
  }

  handleSearch(value: string) {
    if (value.length >= 3) {
      this.showCreate = false;
      this._marvelService.searchCharacter(value).subscribe((res) => {
        this.characters = [...res];
      });
    }
  }
}
