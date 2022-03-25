import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Personaje } from 'src/app/model/personasje';
import { RestServiceService } from 'src/app/service/rest-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-personajes',
  templateUrl: './add-edit-personajes.component.html',
  styleUrls: ['./add-edit-personajes.component.css']
})
export class AddEditPersonajesComponent implements OnInit {

  @Input() personaje: Personaje;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  formPj: FormGroup = new FormGroup({});

  constructor(private service: RestServiceService) {
    this.personaje = new Personaje();
  }

  ngOnInit(): void {
    this.formPj = new FormGroup({
      _id: new FormControl(this.personaje._id),
      title: new FormControl(this.personaje.title, [Validators.required]),
      body: new FormControl(this.personaje.body, [Validators.required]),
      image: new FormControl(this.personaje.image, [Validators.required]),
      category: new FormControl(this.personaje.category),
      createdAt: new FormControl(this.personaje.createdAt),
      updatedAt: new FormControl(this.personaje.updatedAt),
    });
  }

  onSubmit() {
    this.service.updatePersonaje(this.formPj.value).subscribe({
      next: () => {
        Swal.fire({
          title: 'Exito!',
          text: 'Se guardo la información ingresada.',
          icon: 'success'
        })
        this.save.emit()
        this.personaje = new Personaje();
      },
      error: (err) => {
        console.warn(err)
        Swal.fire({
          text: 'No se pudo guardar la información ingresada. Intente más tarde.',
          icon: 'error'
        })
      }
    });
  }

  onCancel() {
    this.cancel.emit();
  }

}
