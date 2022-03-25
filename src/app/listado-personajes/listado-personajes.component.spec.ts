import { ComponentFixture, TestBed } from '@angular/core/testing';

import { listadoPersonajesComponent } from './listado-personajes.component';

describe('listadoPersonajesComponent', () => {
  let component: listadoPersonajesComponent;
  let fixture: ComponentFixture<listadoPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ listadoPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
