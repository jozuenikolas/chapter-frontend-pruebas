import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ICONS } from '../../../enums/global.type';
import { MarvelCharacter } from '../../models/marvel-character';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.scss'],
})
export class CharacterCreateComponent implements OnInit, OnChanges {
  @Input() dataCharacter?: MarvelCharacter;
  @Output() handleCharacter: EventEmitter<any> = new EventEmitter();
  character?: MarvelCharacter;
  characterForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    url: ['', [Validators.required]],
  });

  icons = ICONS;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataCharacter) {
      this.characterForm.controls.name.setValue(this.dataCharacter.title);
      this.characterForm.controls.description.setValue(this.dataCharacter.body);
      this.characterForm.controls.url.setValue(this.dataCharacter.image);
    }
  }

  fieldIsValid(field: string) {
    return (
      this.characterForm.controls[field].errors &&
      this.characterForm.controls[field].touched
    );
  }

  save(event: string) {
    if (event === 'OK') {
      if (this.dataCharacter) {
        this.dataCharacter.image = this.characterForm.value.url;
        this.dataCharacter.title = this.characterForm.value.name;
        this.dataCharacter.body = this.characterForm.value.description;
        this.dataCharacter.updatedAt = new Date();
        this.handleCharacter.emit({ data: this.dataCharacter, type: 'edit' });
      } else {
        this.character = {
          category: 'MARVEL',
          createdAt: new Date(),
          idAuthor: '33',
          image: this.characterForm.value.url,
          title: this.characterForm.value.name,
          body: this.characterForm.value.description,
          updatedAt: new Date(),
        };
        this.handleCharacter.emit({ data: this.character, type: 'save' });
      }
    }
  }
}
