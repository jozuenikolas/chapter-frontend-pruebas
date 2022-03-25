import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroService } from '../../services/hero.service';

import { HeroCardComponent } from './hero-card.component';

describe('HeroCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;
  let mockHeroService: HeroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroCardComponent],
      imports: [HttpClientModule],
      providers: [HeroService],
    }).compileComponents();

    mockHeroService = TestBed.inject(HeroService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    component.hero = {
      title: 'Spiderman De Andrew Garfield Editado',
      body: 'Hombre araña',
      image:
        'https://i.pinimg.com/originals/d5/e5/74/d5e574aec285e57b79a3ee87de866cf7.jpg',
      category: 'main',
      createdAt: new Date(),
      updatedAt: new Date(),
      idAuthor: '15',
      _id: '123456',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onClickDelete call service to delete hero', () => {
    const spy = spyOn(mockHeroService, 'deleteHero').and.returnValue(
      of({ message: 'Personaje eliminado' })
    );
    component.onClickDelete();
    expect(spy).toHaveBeenCalled();
  });

  it('should onClickEdit emit the current hero to edit', () => {
    spyOn(component.onEmitHeroToEdit, 'emit');
    component.onClickEdit();
    expect(component.onEmitHeroToEdit.emit).toHaveBeenCalled();
  });
});
