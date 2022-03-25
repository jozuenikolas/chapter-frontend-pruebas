import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusquedaComponent } from '../busqueda/busqueda.component';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent implements OnInit {
  character: Character = {
    _id: "",
    title: "",
    body: "",
    image: "",
    category: "",
    idAuthor: "",
    createdAt: new Date(),
    updatedAt: new Date()
  };
  myID: String = "28";

  constructor(private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    const headers = { 'content-type': 'application/json' }
    var url = "https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=" + this.myID;
    this._http.put(url, this.character).subscribe(response => {
      console.log(response);
      alert("Personaje agregado");
    });
  }

  cancel() {
    this.router.navigate(['/busqueda']);
  }
}
