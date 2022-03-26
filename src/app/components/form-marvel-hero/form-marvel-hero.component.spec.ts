import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMarvelHeroComponent } from './form-marvel-hero.component';

describe('FormMarvelHeroComponent', () => {
  let component: FormMarvelHeroComponent;
  let fixture: ComponentFixture<FormMarvelHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMarvelHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMarvelHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
