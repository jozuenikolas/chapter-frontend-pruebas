import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPersonajeComponent } from './busqueda-personaje.component';

describe('BusquedaPersonajeComponent', () => {
  let component: BusquedaPersonajeComponent;
  let fixture: ComponentFixture<BusquedaPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
