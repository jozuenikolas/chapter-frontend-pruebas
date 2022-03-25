import { Component, OnInit } from '@angular/core';
import { agregarPersonajes } from 'src/app/model/agregarPersonajes';


@Component({
  selector: 'app-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
  styleUrls: ['./agregar-personajes.component.scss']
})
export class AgregarPersonajesComponent implements OnInit {
  form: any;

  constructor() { }

  ngOnInit(): void {
  }
  get _id() {
    return this.form?.get('_id');
  }
  
  get title() {
    return this.form?.get('title');
  }
  
  get body() {
    return this.form?.get('body');
  }
  get image() {
    return this.form?.get('_id');
  }
  
  get category() {
    return this.form?.get('title');
  }
  
  get idAuthor() {
    return this.form?.get('body');
  }
  
  get createdAt() {
    return this.form?.get('title');
  }
  
  get updatedAt() {
    return this.form?.get('body');
  }

  private static getEmptyUser(): agregarPersonajes {
    return {
      _id: '',
      title: '',
      body: '',
      image: '',
      category: '',
      idAuthor: '',
      createdAt: '',
      updatedAt: '',
    }
  }


}
