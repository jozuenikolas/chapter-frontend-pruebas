import { ComponentFixture, TestBed } from '@angular/core/testing';

import { crear-PersonajesComponent } from './crear-personajes.component';

describe('crear-PersonajesComponent', () => {
  let component: crear-PersonajesComponent;
  let fixture: ComponentFixture<-crear-PersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ crear-PersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(crear-PersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
