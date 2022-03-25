import { TestBed } from '@angular/core/testing';

import { SpersonajeService } from './spersonaje.service';

describe('SpersonajeService', () => {
  let service: SpersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
