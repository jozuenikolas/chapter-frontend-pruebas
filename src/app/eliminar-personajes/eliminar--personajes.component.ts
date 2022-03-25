import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar-personajes',
  templateUrl: './eliminar-personajes.component.html',
  styleUrls: ['./eliminar-personajes.component.css']
})
export class EliminarPersonajesComponent {

  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.data;
    console.log(this.data);
  }


  }
