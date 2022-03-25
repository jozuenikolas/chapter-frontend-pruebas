import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators'
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  allCharacters: Character[] = [];
  characters: Character[] = [];
  search = new FormControl('');
  myID: String = "28";

  constructor(private _http: HttpClient, private router: Router) { }

  listCharacters() {
    this._http.get<Character[]>('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=' + this.myID).subscribe(
      data => {
        this.allCharacters = data;

        // Mostrar todo al inicio
        this.characters = data;
      }
    );
  }

  ngOnInit(): void {
    this.listCharacters();

    this.search.valueChanges
      .pipe(debounceTime(750))
      .subscribe(filter => {
        this.characters = this.allCharacters.filter(c => c.title.toLowerCase().includes(filter.toLowerCase()));
        console.log(filter);
      });
  }

  add() {
    this.router.navigate(['/agregar']);
  }

  edit(idAuthor: any) {
    this.router.navigate(['/editar'], { queryParams: { id: idAuthor } });
  }

  delete(character: Character) {
    const headers = { 'content-type': 'application/json' }
    var url = "https://bp-marvel-api.herokuapp.com/marvel-characters/" + character._id + "?idAuthor=" + this.myID;
    this._http.delete(url).subscribe(response => {
      console.log(response);
      this.listCharacters();
      //this.characters = this.allCharacters.filter(c => c._id !== character._id);
      alert("Personaje eliminado");
    });
  }
}
