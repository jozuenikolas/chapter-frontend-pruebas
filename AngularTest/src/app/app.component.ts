import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MarvelService } from './Marvel.Service';
import { Model } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularTest';
  public MarvelData: Model[] = []
  newmodel: Model = {
    title: "",
    body: "",
    image: "",
    category: "",
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),

  }

  constructor(private _marvelService: MarvelService) { }
  ngOnInit(): void {
    this._marvelService.getMarvel().subscribe(data => this.MarvelData = data)
  }

  Marvelget() {
    this._marvelService.getMarvel().subscribe(data => this.MarvelData = data)
  }

  create(f: NgForm) {
    this.newmodel = f.form.getRawValue()
    console.log(f.form.getRawValue())
    console.log(f.value.Nombre)

    let newCharacter: Model = {
      title: f.value.Nombre,
      body: f.value.Descripcion,
      image: f.form.value.Imagen,
      category: "main",
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    }
    this._marvelService.saveCharacter(newCharacter).subscribe()
    f.reset()
  }


  Actualizar(f: Model) {


    let newCharacter: Model = {
      id: f.id,
      title: f.title,
      body: f.category,
      image: f.image,
      category: "main",
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    }

    this._marvelService.Actualizar(newCharacter).subscribe()

  }

  Borrar(f: Model) {
    let newCharacter: Model = {
      id: f.id,
      title: f.title,
      body: f.category,
      image: f.image,
      category: "main",
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    }
    this._marvelService.Borrar(newCharacter).subscribe()
  }



  SearchForm(f: NgForm) {

  }
}
