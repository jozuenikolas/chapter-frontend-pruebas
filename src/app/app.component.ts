//import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})
export class listadopersonajeComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {

    this.activateRoute.queryParams.subscribe(params => {
      if(params && params.pSuperheroeDetalle) {
        this.superHeroe = JSON.parse(params.pSuperheroeDetalle);
      }
    });
   }

  ngOnInit(): void {
  }


  import { Component } from '@angular/core';
  //import { Router } from '@angular/router';
  //import { AuthService } from './auth.service';
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {

}

