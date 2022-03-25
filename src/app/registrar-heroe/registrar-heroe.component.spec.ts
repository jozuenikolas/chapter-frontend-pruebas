import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHeroeComponent } from './registrar-heroe.component';

describe('RegistrarHeroeComponent', () => {
  let component: RegistrarHeroeComponent;
  let fixture: ComponentFixture<RegistrarHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarHeroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
