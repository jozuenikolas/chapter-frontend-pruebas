import { Component } from '@angular/core';
import {AvengersService} from "./avengers.service";
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba1';
  mensajeError="";
  dateString:string;
  public avengers: any[] | undefined;
  constructor(private _avengerService: AvengersService) {
    this.dateString = formatDate(Date.now(),"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",'en-US');

  }

  ngOnInit() {  this._avengerService.getAvengersId('54').subscribe((data) => {
      console.log(data);
      console.log(Object.values(data));
      console.log("Validar fecha:"+this.dateString)
      this.avengers = Object.values(data);
    });
}

  getAvengerTitle(idAutor: string, title: string) {
    this._avengerService.getAvengersIdTitulo(idAutor,title ).subscribe((data) => {
      this.avengers = Object.values(data);
    });




  }

  addNewAvenger(title: string,
                body: string,
                image: string,
               ) {
    this._avengerService.addAvenger(title,
      body,
      image,
      'main',
      this.dateString,
      this.dateString).subscribe(() => {
      this.ngOnInit();
    },
    (error => this.mensajeError="ERROR: "+error)
    );
  }


}
