import { Component } from '@angular/core';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel';

  public personajes: any[] | undefined;
  constructor(private _personajesService: PersonajesService) {}

  ngOnInit() {
    this._personajesService.getPersonajes().subscribe((data) => {
      console.log(data);
      console.log(Object.values(data));
      this.personajes = Object.values(data);
    });
  }


  addPersonaje(

    title : string,
    body : string,
    image : string,
    category : string,
    createdAt : Date,
    updatedAt : Date
  ) {
 

    this._personajesService.anadirPersonaje(title, body, image, category,  createdAt, updatedAt).subscribe(() => {
      this.ngOnInit();
    });
  }


  deletePersonaje(target: number) {
    console.log(target);
    this._personajesService.getPersonajes().subscribe((data) => {
      console.log(data);
      console.log(Object.keys(data)[target]);
      this._personajesService
        .eliminarPersonaje(Object.keys(data)[target])
        .subscribe(() => {
          this.ngOnInit();
        });
    });
  }


  convertToDate(dato:string) {

    let firstDate = new Date(dato)
    return firstDate;
  }

  
}
