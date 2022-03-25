import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  @Input() hero: Hero = this.generateEmptyHero();

  @Output() onSubmitSucces = new EventEmitter<boolean>();
  @Output() onCancel = new EventEmitter();

  heroForm!: FormGroup;
  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _heroService: HeroService
  ) {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hero) {
      if (this.hero._id) {
        this.heroForm.patchValue(this.hero);
      }
    }
  }

  initializeForm() {
    this.heroForm = this._formBuilder.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    if (!this.hero._id) {
      this.createHero();
    } else {
      this.updateHero();
    }
  }

  createHero() {
    const heroFormValue = this.heroForm.value;
    const dateOfCreation: string = new Date().toString();
    const hero: Hero = {
      ...heroFormValue,
      category: 'main',
      createdAt: dateOfCreation,
      updatedAt: dateOfCreation,
    };

    this._heroService.createHero(hero).subscribe((data) => {
      const { message } = data;
      if (message === 'Nuevo personaje agregado!') {
        this.clearHeroForm();
        this.onSubmitSucces.emit(true);
      }
    });
  }

  updateHero() {
    const { title, body, image } = this.heroForm.value;
    const dateOfUpdate: Date = new Date();

    const heroToUpdate: Hero = {
      ...this.hero,
      title,
      body,
      image,
      updatedAt: dateOfUpdate,
    };

    this._heroService.updateHero(heroToUpdate).subscribe((data) => {
      const { message } = data;
      if (message === 'Personaje actualizado') {
        this.clearHeroForm();
        this.onSubmitSucces.emit(true);
      }
    });
  }

  generateEmptyHero(): Hero {
    return {
      _id: '',
      body: '',
      category: '',
      createdAt: new Date(),
      idAuthor: '',
      image: '',
      title: '',
      updatedAt: new Date(),
    };
  }

  get isButtonDisabled(): boolean {
    return this.heroForm.invalid;
  }

  clearHeroForm() {
    this.hero = this.generateEmptyHero();
    this.heroForm.reset();
  }

  cancel() {
    this.clearHeroForm();
    this.onCancel.emit();
  }
}
