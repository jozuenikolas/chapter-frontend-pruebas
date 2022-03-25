import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPersonajesComponent } from './buscar-personajes.component';

describe('BuscarPersonajesComponent', () => {
  let component: BuscarPersonajesComponent;
  let fixture: ComponentFixture<BuscarPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
