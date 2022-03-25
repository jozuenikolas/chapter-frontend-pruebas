import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild ('buscarTexto') buscarTexto!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  crearHeroe(){
  }
  cancelarHeroe(){
  }

  guardarHeroe(){}

  buscarHeroe(termino:string){
    console.log('Buscar con: '+termino);

  }

}
