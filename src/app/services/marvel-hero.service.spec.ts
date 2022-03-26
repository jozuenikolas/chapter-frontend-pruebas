import { TestBed } from '@angular/core/testing';

import { MarvelHeroService } from './marvel-hero.service';

describe('MarvelHeroService', () => {
  let service: MarvelHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
