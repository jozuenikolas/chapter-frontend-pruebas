import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeroFilterPipe } from './pipes/hero-filter.pipe';
import { HeroService } from './services/hero.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [HeroService],
      declarations: [AppComponent, HeroFilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit call getHeroes', () => {
    const spy = spyOn(component, 'getHeroes');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should onSaveFormSuccess get Heroes if success', () => {
    const spy = spyOn(component, 'getHeroes');
    component.onSaveFormSuccess(true);
    expect(spy).toHaveBeenCalled();
  });

  it('should onSaveFormSuccess not get Heroes if not success', () => {
    const spy = spyOn(component, 'getHeroes');
    component.onSaveFormSuccess(false);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should onDeleteSuccess get Heroes if success', () => {
    const spy = spyOn(component, 'getHeroes');
    component.onDeleteSuccess(true);
    expect(spy).toHaveBeenCalled();
  });

  it('should onDeleteSuccess not get Heroes if not success', () => {
    const spy = spyOn(component, 'getHeroes');
    component.onDeleteSuccess(false);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should setCurrentHero show form to edit', () => {
    component.setCurrentHero({
      title: 'Spiderman De Andrew Garfield Editado',
      body: 'Hombre araña',
      image:
        'https://i.pinimg.com/originals/d5/e5/74/d5e574aec285e57b79a3ee87de866cf7.jpg',
      category: 'main',
      createdAt: new Date(),
      updatedAt: new Date(),
      idAuthor: '15',
      _id: '123456',
    });
    expect(component.isShowingHeroForm).toBeTrue();
  });

  it('should hideHeroForm hider hero form', () => {
    component.hideHeroForm();
    expect(component.isShowingHeroForm).toBeFalse();
  });

  it('should showHeroForm show hero form', () => {
    component.showHeroForm();
    expect(component.isShowingHeroForm).toBeTrue();
  });
});
