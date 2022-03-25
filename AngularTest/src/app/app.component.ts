import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MarvelService } from './Marvel.Service';
import { Model } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularTest';
  public MarvelData:Model[]=[]
  newmodel:Model={
    title: "",
 body:  "",
 image:  "",
 category:  "",
 createdAt: new Date().toString(),
 updatedAt: new Date().toString(),
     
  }

  constructor(private _marvelService:MarvelService){}
ngOnInit(): void {
  this._marvelService.getMarvel().subscribe(data=>this.MarvelData=data)
}

  Marvelget(){
    this._marvelService.getMarvel().subscribe(data=>this.MarvelData=data)
  }

  create(f:NgForm){
    this.newmodel=f.value
    console.log(f.value)
    this._marvelService.saveCharacter(this.newmodel).subscribe()
    f.reset()
  }


  Actualizar(ff:Model){
    this._marvelService.Actualizar(this.newmodel).subscribe()

  }

  Borrar(ff:Model){
    this._marvelService.Borrar(this.newmodel).subscribe()
  }

  

  SearchForm(f:NgForm){

  }
}
