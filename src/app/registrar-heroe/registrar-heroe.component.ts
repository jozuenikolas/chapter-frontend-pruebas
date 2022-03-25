import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-registrar-heroe',
  templateUrl: './registrar-heroe.component.html',
  styleUrls: ['./registrar-heroe.component.css']
})
export class RegistrarHeroeComponent implements OnInit {

  heroe : Heroe = new Heroe();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log();
  }
}
