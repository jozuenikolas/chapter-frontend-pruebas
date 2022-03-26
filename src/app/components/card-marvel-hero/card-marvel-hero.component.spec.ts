import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarvelHeroComponent } from './card-marvel-hero.component';

describe('CardMarvelHeroComponent', () => {
  let component: CardMarvelHeroComponent;
  let fixture: ComponentFixture<CardMarvelHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMarvelHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMarvelHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
