import {Component, ElementRef, ViewChild} from '@angular/core';
import {HeroesService} from "../services/heroes.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HeroesResponse, HeroesSave} from "../interfaces/heroes.interfaces";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {

  mostrarFormulario: boolean = false;
  formularioHeroe!: FormGroup;

  @ViewChild('buscador') buscador!: ElementRef<HTMLInputElement>;

  constructor(private heroesService: HeroesService,
              private fb: FormBuilder) {
    this.crearFormularioHeroes();
  }

  buscar() {
    if(this.buscador.nativeElement.value.trim() === '') {
      this.heroesService.buscarHeroes();
    }
    this.heroesService.buscarHeroeByComic(this.buscador.nativeElement.value);
  }

  cambiarEstado(estado: boolean) {
    this.mostrarFormulario = estado;
  }

  crearFormularioHeroes() {
    this.formularioHeroe = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }

  guardarHeroe() {
    let heroe: HeroesSave = {
      title: this.formularioHeroe.value.nombre,
      body: this.formularioHeroe.value.descripcion,
      image: this.formularioHeroe.value.image,
      category: 'main',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.heroesService.crearHeroe(heroe)
      .subscribe((data: any) => {
        console.log(data);
      });

  }

}
