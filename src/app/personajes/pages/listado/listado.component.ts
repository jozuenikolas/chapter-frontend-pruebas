import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';
import { IPersonaje } from '../../interfaces/personaje.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personaje : IPersonaje = {
    title : '',
      body: '',
      image : '',
      category:'',
      idAuthor:'',
      createdAt: new Date(),
      updatedAt: new Date()
  };

  constructor(private  _personajeServise : PersonajeService,
              private  activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // this.activateRoute.params
    // .pipe(
    //   switchMap( pesonaje => this._personajeServise.eliminarPersonajeAutor(id))
    // ).subscribe( person => {
    //   this.personaje = person
    // })
  }
  elimainarPersonaje( ){

  }

}
