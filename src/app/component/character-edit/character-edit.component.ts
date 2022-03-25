import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterMarvelService } from 'src/app/services/character-marvel.service';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.css']
})
export class CharacterEditComponent implements OnInit {

  public frmMarvel: FormGroup;
  @Output() hideComponentEdit = new EventEmitter();
  @Output() onReloadListCharacter = new EventEmitter();

  constructor(private readonly fb: FormBuilder, private characterMarvelService: CharacterMarvelService) { }

  ngOnInit(): void {
    this.frmMarvel = this.fb.group({
      name: [null,
        [
          Validators.maxLength(20),
          Validators.required
        ]
      ],
      description: [null, [Validators.maxLength(100), Validators.required]],
      image: [null, [Validators.maxLength(100), Validators.required]]
    });
  }

  onClickSaveSubmit() {
    const body = {
      title: this.frmMarvel.value.name,
      body: this.frmMarvel.value.description,
      image: this.frmMarvel.value.image,
      category: 'main',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.characterMarvelService.saveCharater(body).subscribe(
      (response: any) => {
        this.onClickCancel();
        window.alert('Personaje guardado');
        this.onReloadListCharacter.emit();
      }
    );
  }

  onClickCancel() {
    this.hideComponentEdit.emit();
  }

}
