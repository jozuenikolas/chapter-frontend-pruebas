import { TestBed } from '@angular/core/testing';

import { MarvelHeroResolver } from './marvel-hero.resolver';

describe('MarvelHeroResolver', () => {
  let resolver: MarvelHeroResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MarvelHeroResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
