import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Personaje } from '../../models/personaje.model';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-agreggar-personaje',
  templateUrl: './agreggar-personaje.component.html',
  styleUrls: ['./agreggar-personaje.component.scss']
})
export class AgreggarPersonajeComponent implements OnInit {

  nombre: string = '';
  descripcion = '';
  url = '';
  idAuthor='39'
  listaDePersonajes: Personaje[];
  title: string=''
  personajeBuscado: Personaje;

  constructor(
    private personajesService: PersonajesService
  ) { }

  ngOnInit(): void {
    this.listaPersonajes()
  }

  

  buscarPersonaje(title: string){
    this.personajesService.buscaPeronas(this.idAuthor,title)
    .subscribe(respuesta => {   
      
      if(respuesta.length<1){
        alert('No existe el personaje');
      }else{      
      this.personajeBuscado= respuesta[0];
      }
    })
  }


  listaPersonajes(){

    this.personajesService.listaPeronas(this.idAuthor)
    .subscribe(respuesta => {
     
      this.listaDePersonajes= respuesta
    })

  }

  guardarPersonaje() {

    if(this.nombre && this.descripcion && this.url){

    let entrada = {
      
        'title': this.nombre,
        "body": this.descripcion,
        "image": this.url,
        "category": "main",
        "createdAt": new Date(),
        "updatedAt": new Date()
      
    }

    this.personajesService.guardarPersonaje(this.idAuthor, entrada)
      .subscribe(respuesta => {

        alert(respuesta.message);
        this.listaPersonajes();
        this.limpiarFormulario();

      })
    }else{
      alert('Formulario no valido');
    }


  }

  editarPersonaje(persona: Personaje){
    let entrada = {
      
      'title': persona.title,
      "body": persona.body,
      "image": persona.image,
      "category": "main",
      "createdAt": persona.createdAt,
      "updatedAt": new Date()
    
  }

    this.personajesService.editarPersonaje(this.idAuthor,entrada,persona)
    .subscribe(respuesta => {

      alert(respuesta.message);
      this.listaPersonajes();

    })

  }

  eliminarPersonaje(persona: Personaje){
    this.personajesService.eliminarPersonaje(this.idAuthor,persona)
    .subscribe(respuesta => {

      alert(respuesta.message);
      this.listaPersonajes();

    })

  }

  limpiarFormulario(){
    this.nombre='';
    this.descripcion=''
    this.url='';
  }

}
