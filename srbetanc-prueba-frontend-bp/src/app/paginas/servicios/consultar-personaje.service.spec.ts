import { TestBed } from '@angular/core/testing';

import { ConsultarPersonajeService } from './consultar-personaje.service';

describe('ConsultarPersonajeService', () => {
  let service: ConsultarPersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarPersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
