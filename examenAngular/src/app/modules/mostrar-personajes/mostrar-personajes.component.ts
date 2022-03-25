import { Component, OnInit } from '@angular/core';
import { get } from 'http';
import { mostrar } from 'src/app/model/mostrarPersonajes';

@Component({
  selector: 'app-mostrar-personajes',
  templateUrl: './mostrar-personajes.component.html',
  styleUrls: ['./mostrar-personajes.component.scss']
})
export class MostrarPersonajesComponent implements OnInit {
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

  private static getEmptyUser(): mostrar{
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




