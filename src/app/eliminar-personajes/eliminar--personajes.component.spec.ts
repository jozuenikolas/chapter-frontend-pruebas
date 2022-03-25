import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPersonajesComponent } from './eliminar--personajes.component';

describe('ListadoPersonajesComponent', () => {
  let component: EliminarPersonajesComponent;
  let fixture: ComponentFixture<EliminarPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPersonajesComponent ]
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
