import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarvelModel } from 'src/app/models/marvel.model';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss'],
})
export class MarvelComponent implements OnInit {
  showForm = false;
  id!: string | undefined;
  marvelForm!: FormGroup;
  herosMarvel: MarvelModel[] = [];
  title = 'Nuevo Personaje';

  constructor(
    private readonly _marvelService: MarvelService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.formSave();
  }
  getAll(): void {
    this._marvelService.getAll().subscribe((herosMarvel: MarvelModel[]) => {
      this.herosMarvel = herosMarvel;
    });
  }

  show() {
    this.showForm = true;
  }

  save(): void {
    if (this.marvelForm.valid) {
      const marvelFromValue = this.marvelForm.value;
      const marvelForm: MarvelModel = {
        body: marvelFromValue.body,
        image: marvelFromValue.image,
        title: marvelFromValue.title,
        category: 'main',
      };
      if (!this.id) {
        this.create(marvelForm);
      } else {
        this.edit(marvelForm);
      }
    }
  }
  searchKey(data: string) {
    this._marvelService.search(data).subscribe((herosMarvel) => {
      this.herosMarvel = herosMarvel;
    });
  }
  formEdit(marveModel: MarvelModel) {
    this.title = 'Editar Personaje';
    this.marvelForm.controls['title'].setValue(marveModel.title);
    this.marvelForm.controls['body'].setValue(marveModel.body);
    this.marvelForm.controls['image'].setValue(marveModel.image);
    this.show();
    this.id = marveModel._id;
    window.scrollTo(0, 0);
  }

  create(marvelForm: MarvelModel) {
    this._marvelService.create(marvelForm).subscribe((data) => {
      this.getAll();
      this.marvelForm.reset();
      this.showForm = false;
      alert(data.message);
    });
  }
  edit(marvelForm: MarvelModel) {
    this._marvelService.edit(marvelForm, this.id).subscribe((data) => {
      this.getAll();
      this.marvelForm.reset();
      this.showForm = false;
      alert(data.message);
    });
  }

  cancel() {
    this.showForm = false;
    this.id = undefined;
    this.marvelForm.reset();
  }

  private formSave(): void {
    this.marvelForm = this.fb.group({
      title: [null, [Validators.required]],
      body: [null, [Validators.required]],
      image: [null, [Validators.required]],
    });
  }

  delete(id: string | undefined): void {
    this._marvelService.delete(id).subscribe((data) => {
      this.getAll();
      alert(data.message);
    });
  }
}
