import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosDetallesComponent } from './empleados-detalles.component';

describe('EmpleadosDetallesComponent', () => {
  let component: EmpleadosDetallesComponent;
  let fixture: ComponentFixture<EmpleadosDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
