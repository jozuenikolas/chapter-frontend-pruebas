import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/model/personasje';
import { RestServiceService } from 'src/app/service/rest-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-personajes',
  templateUrl: './list-personajes.component.html',
  styleUrls: ['./list-personajes.component.css']
})
export class ListPersonajesComponent implements OnInit {

  personajes: Personaje[] = [];
  searchPersonajes: Personaje[] = [];
  search: string = "";
  showAddEdit: boolean = false;
  personaje: Personaje = new Personaje();
  indexEdit: number = 0;

  constructor(private service: RestServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getPersonajes().subscribe({
      next: (data: Personaje[]) => {
        if (data) {
          this.personajes = data;
          this.searchPersonajes = data;
        };
      },
      error: (err) => {
        console.warn(err)
        Swal.fire({
          text: 'No se pudo obtener la lista de Personajes. Intente más tarde.',
          icon: 'error'
        })
      }
    });
  }

  onAdd(): void {
    this.showAddEdit = true;
    this.personaje = new Personaje();
  }

  onEdit(index: number): void {
    this.personaje = this.personajes[index];
    this.showAddEdit = true;
    this.indexEdit = index;
  }


  onDelete(index: number): void {
    if (this.personajes[index]._id) {
      this.service.deletePersonaje(this.personajes[index]._id).subscribe()
      this.personajes.splice(index, 1);
      this.searchPersonajes.splice(index, 1);
    }
  }

  onChangeSearch(): void {
    this.searchPersonajes = this.personajes.filter(e => e.title.toLowerCase().includes(this.search.toLowerCase()))
  }

  onSubmit(): void {
    this.getData();
    this.showAddEdit = false;
  }

  onCancel(): void {
    this.showAddEdit = false;
  }

}
