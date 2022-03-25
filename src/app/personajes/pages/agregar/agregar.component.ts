
import { Component, OnInit } from '@angular/core';
import { IPersonaje } from '../../interfaces/personaje.interface';
import { environment } from '../../../../environments/environment';
import { PersonajeService } from '../../services/personaje.service';
import { IRespuesta } from '../../interfaces/respuesta.interface';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  nuevoPersonaje : IPersonaje = {
    title : '',
      body: '',
      image : '',
      category:'',
      idAuthor:'',
      createdAt: new Date(),
      updatedAt: new Date()
  };
  private autor : string = environment.autor;
  constructor(private _personajeService: PersonajeService) { }
  respuesta! : IRespuesta;
  ngOnInit(): void {
  }

 
  guardarNuevoPersonaje(){

    const personaje : IPersonaje ={
      title : this.nuevoPersonaje.title,
      body: this.nuevoPersonaje.body,
      image : this.nuevoPersonaje.image,
      category:"TEST",
      idAuthor:"autor",
      createdAt: new Date(),
      updatedAt: new Date()
    }
     this._personajeService.crearPersonajeAutor(this.autor,personaje)
     .subscribe(respuesta => {
       this.respuesta = respuesta;
     });
    
  }
}
