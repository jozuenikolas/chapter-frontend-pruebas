import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { ServicePersonajeService } from '../service-personaje.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor( private personajeService: ServicePersonajeService) { }

  ngOnInit(): void {

    console.log("se iniciara");
    this.personajeService.getPersonaje().subscribe((personajes:Personaje [])=>{
        this.personajes = personajes;
        console.log(this.personajes);
        
    });
    
  }

  isNuevoUpdate :Boolean = false;

  personajeBuscar :string="";
   

  personajes :Personaje[]=[];
  
  personajeNuevo :Personaje={
    _id:  '',
   title: '',
   body: '',
   image: '',
   category: '',
   idAuthor: '',
   createdAt: '',
   updatedAt: ''

}

  eliminarPersonaje(personaje: Personaje){
    let id:(string | undefined) = personaje._id;
    this.personajeService.deletePersonaje(id).subscribe(statusObj => {  
      if(statusObj.message){
        let personajeToRemove = this.personajes.filter(c=> c._id === id)[0];
        let index = this.personajes.indexOf(personajeToRemove);
        this.personajes.splice(index,1); 
        alert("El Personaje "+personaje.title+" ha sido eliminado");
      }
    })


  }

  buscarPersonaje(title: string){
    console.log("...buscando");
    this.personajeService.selectPersonaje(this.personajeBuscar).subscribe((personajes:Personaje [])=>{
      this.personajes = personajes;
      console.log(this.personajes);
      
  });
    
  }

  nuevoModifica(){
    this.isNuevoUpdate= true;
  }

  cancela(){
    this.isNuevoUpdate= false;
  }

}

