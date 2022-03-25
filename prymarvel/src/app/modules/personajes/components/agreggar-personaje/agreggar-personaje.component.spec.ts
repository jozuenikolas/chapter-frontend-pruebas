import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreggarPersonajeComponent } from './agreggar-personaje.component';

describe('AgreggarPersonajeComponent', () => {
  let component: AgreggarPersonajeComponent;
  let fixture: ComponentFixture<AgreggarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreggarPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreggarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
