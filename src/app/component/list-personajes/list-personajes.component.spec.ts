import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Personaje } from 'src/app/model/personasje';
import { RestServiceService } from 'src/app/service/rest-service.service';

import { ListPersonajesComponent } from './list-personajes.component';

describe('ListPersonajesComponent', () => {
  let component: ListPersonajesComponent;
  let fixture: ComponentFixture<ListPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPersonajesComponent],
      imports: [
        HttpClientModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Servicio de Lista de personajes', () => {
    const service: RestServiceService = TestBed.get(RestServiceService);
    service.getPersonajes().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  })

  it('Editar un Personaje', () => {
    const service: RestServiceService = TestBed.get(RestServiceService);
    const personaje: Personaje = {
      _id: "623bb12b12979d2c2b04aaad",
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

  it('Eliminar un Personaje', () => {
    const service: RestServiceService = TestBed.get(RestServiceService);
    service.deletePersonaje("testid").subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  })
});
