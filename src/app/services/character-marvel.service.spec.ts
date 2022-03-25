import { TestBed } from '@angular/core/testing';

import { CharacterMarvelService } from './character-marvel.service';

describe('CharacterMarvelService', () => {
  let service: CharacterMarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterMarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
