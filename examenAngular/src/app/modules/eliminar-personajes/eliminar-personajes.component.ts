import { Component, OnInit } from '@angular/core';
import { eliminar } from 'src/app/model/eliminarPersonajes';

@Component({
  selector: 'app-eliminar-personajes',
  templateUrl: './eliminar-personajes.component.html',
  styleUrls: ['./eliminar-personajes.component.scss']
})
export class EliminarPersonajesComponent implements OnInit {
  message: string = '¿Está seguro que desea eliminar el personaje?';
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

  private static getEmptyUser(): eliminar{
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
