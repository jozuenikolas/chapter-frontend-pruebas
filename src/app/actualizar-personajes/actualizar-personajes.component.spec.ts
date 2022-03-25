import { ComponentFixture, TestBed } from '@angular/core/testing';

import { actualizarPersonajesComponent } from './actualizar-personajes.component';

describe('actualizarPersonajesComponent', () => {
  let component: actualizarPersonajesComponent;
  let fixture: ComponentFixture<actualizarPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ actualizarPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(actualiarPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
