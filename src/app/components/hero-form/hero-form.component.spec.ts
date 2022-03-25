import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { HeroService } from '../../services/hero.service';

import { HeroFormComponent } from './hero-form.component';

describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;
  let mockHeroService: HeroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroFormComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [HeroService],
    }).compileComponents();

    mockHeroService = TestBed.inject(HeroService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submitForm call updateHero if theres a hero to edit', () => {
    component.hero = {
      title: 'Spiderman De Andrew Garfield Editado',
      body: 'Hombre araña',
      image:
        'https://i.pinimg.com/originals/d5/e5/74/d5e574aec285e57b79a3ee87de866cf7.jpg',
      category: 'main',
      createdAt: new Date(),
      updatedAt: new Date(),
      idAuthor: '15',
      _id: '123',
    };

    const spy = spyOn(component, 'updateHero');

    component.submitForm();
    expect(spy).toHaveBeenCalled();
  });

  it('should submitForm call createHero if theres no a hero to edit', () => {
    component.hero = component.generateEmptyHero();

    const spy = spyOn(component, 'createHero');
    component.submitForm();

    expect(spy).toHaveBeenCalled();
  });

  it('should clearHeroForm reset form', () => {
    const spy = spyOn(component.heroForm, 'reset');
    component.clearHeroForm();
    expect(spy).toHaveBeenCalled();
  });

  it('should cancel call clearHeroForm', () => {
    const spy = spyOn(component, 'clearHeroForm');
    component.cancel();
    expect(spy).toHaveBeenCalled();
  });

  it('should createHero call service to createHero', () => {
    component.hero = component.generateEmptyHero();

    const spy = spyOn(mockHeroService, 'createHero').and.returnValue(
      of({
        message: 'Nuevo personaje agregado!',
      })
    );

    component.createHero();
    expect(spy).toHaveBeenCalled();
  });

  it('should createHero call service to updateHero', () => {
    const spy = spyOn(mockHeroService, 'updateHero').and.returnValue(
      of({
        message: 'Personaje actualizado',
      })
    );

    component.updateHero();
    expect(spy).toHaveBeenCalled();
  });
});
