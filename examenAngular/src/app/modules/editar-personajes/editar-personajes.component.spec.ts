import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonajesComponent } from './editar-personajes.component';

describe('EditarPersonajesComponent', () => {
  let component: EditarPersonajesComponent;
  let fixture: ComponentFixture<EditarPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
