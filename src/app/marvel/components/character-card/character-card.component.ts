import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICONS } from 'src/app/enums/global.type';
import { MarvelCharacter } from '../../models/marvel-character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character!: MarvelCharacter;
  @Output() handleEmitOption: EventEmitter<any> = new EventEmitter();
  icons = ICONS;
  constructor() {}

  ngOnInit(): void {}

  handleCharacter(event: string) {
    this.handleEmitOption.emit(event);
  }
}
