import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Personaje } from 'src/app/model/personasje';
import { RestServiceService } from 'src/app/service/rest-service.service';

import { AddEditPersonajesComponent } from './add-edit-personajes.component';

describe('AddEditPersonajesComponent', () => {
  let component: AddEditPersonajesComponent;
  let fixture: ComponentFixture<AddEditPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditPersonajesComponent],
      imports: [
        HttpClientModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Crear un Personaje', () => {
    const service: RestServiceService = TestBed.get(RestServiceService);
    const personaje: Personaje = {
      title: "Iron Man",
      body: "Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.",
      image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg",
      category: "main",
      idAuthor: "31",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    service.updatePersonaje(personaje).subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  })
});
