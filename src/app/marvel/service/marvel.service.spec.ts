import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { MarvelService } from './marvel.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MarvelCharacter } from '../models/marvel-character';
import { environment } from '../../../environments/environment';

const data: MarvelCharacter[] = [
  {
    _id: '623bb12b12979d2c2b04aaaf',
    title: 'Iron Man',
    body: 'Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.',
    image:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg',
    category: 'main',
    idAuthor: '33',
    createdAt: new Date('2022-03-03T01:37:01.828Z'),
    updatedAt: new Date('2022-03-03T01:37:01.828Z'),
  },
  {
    _id: '623bb12b12979d2c2b04aaf5',
    title: 'Captain América',
    body: 'America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.',
    image:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg',
    category: 'main',
    idAuthor: '33',
    createdAt: new Date('2022-03-03T01:37:01.828Z'),
    updatedAt: new Date('2022-03-25T18:45:20.607Z'),
  },
  {
    _id: '623bb12b12979d2c2b04ab3b',
    title: 'Captain Marvel',
    body: 'Near death, Carol Danvers was transformed into a powerful warrior for the Kree. Now, returning to Earth years later, she must remember her past in order to to prevent a full invasion by shapeshifting aliens, the Skrulls.',
    image:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04.jpg',
    category: 'secondary',
    idAuthor: '33',
    createdAt: new Date('2022-03-03T01:37:01.828Z'),
    updatedAt: new Date('2022-03-03T01:37:01.828Z'),
  },
  {
    _id: '623bb12b12979d2c2b04ab81',
    title: 'Thor',
    body: 'Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.',
    image:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg',
    category: 'main',
    idAuthor: '33',
    createdAt: new Date('2022-03-03T01:37:01.828Z'),
    updatedAt: new Date('2022-03-03T01:37:01.828Z'),
  },
  {
    _id: '623bb12b12979d2c2b04abc7',
    title: 'Black Widow',
    body: 'Trusted by some and feared by most, the Black Widow strives to make up for the bad she had done in the past by helping the world, even if that means getting her hands dirty in the process.',
    image:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_03.jpg',
    category: 'main',
    idAuthor: '33',
    createdAt: new Date('2022-03-03T01:37:01.828Z'),
    updatedAt: new Date('2022-03-03T01:37:01.828Z'),
  },
  {
    _id: '623bb12b12979d2c2b04ac0d',
    title: 'Hawkeye',
    body: 'An expert marksman and fighter, Clint Barton puts his talents to good use by working for S.H.I.E.L.D. as a special agent. The archer known as Hawkeye also boasts a strong moral compass that at times leads him astray from his direct orders.',
    image:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/018hcb_ons_crd_02.jpg',
    category: 'main',
    idAuthor: '33',
    createdAt: new Date('2022-03-03T01:37:01.828Z'),
    updatedAt: new Date('2022-03-03T01:37:01.828Z'),
  },
  {
    _id: '623bb12b12979d2c2b04ac53',
    title: 'Hulk',
    body: 'Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.',
    image:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg',
    category: 'main',
    idAuthor: '33',
    createdAt: new Date('2022-03-03T01:37:01.828Z'),
    updatedAt: new Date('2022-03-03T01:37:01.828Z'),
  },
  {
    _id: '623bb12b12979d2c2b04ac99',
    title: 'Spiderman',
    body: 'With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.',
    image:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg',
    category: 'main',
    idAuthor: '33',
    createdAt: new Date('2022-03-03T01:37:01.828Z'),
    updatedAt: new Date('2022-03-03T01:37:01.828Z'),
  },
];

fdescribe('MarvelService', () => {
  let service: MarvelService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarvelService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(MarvelService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test method get should be return a get method', () => {
    service.getCharacters().subscribe((res: MarvelCharacter[]) => {
      expect(res).toEqual(data);
    });
    const req = httpMock.expectOne(
      'https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=33'
    );
    expect(req.request.method).toBe('GET');
    req.flush(data);
  });
});
