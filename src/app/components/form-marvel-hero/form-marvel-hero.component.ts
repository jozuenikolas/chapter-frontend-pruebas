import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {MarvelHero} from "../../types/marvel-hero";
import {MarvelHeroService} from "../../services/marvel-hero.service";

@Component({
  selector: 'app-form-marvel-hero',
  templateUrl: './form-marvel-hero.component.html',
  styleUrls: ['./form-marvel-hero.component.scss']
})
export class FormMarvelHeroComponent implements OnInit {

  titleForm: string = "Nuevo personaje"

  marvelHeroFormGroup: FormGroup

  isEdit: boolean = false

  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    private marvelHeroService: MarvelHeroService
  ) {
  }


  ngOnInit(): void {
    this.buildForm()
    this.aRoute.data.subscribe(({marvelHero}) => {
      if (marvelHero) {
        if (marvelHero.length == 1) {
          this.isEdit = true
          this.marvelHeroFormGroup.patchValue(marvelHero[0])
        } else {
          this.router.navigate(['/marvel-heroes'])
        }
      }
    })

  }

  buildForm() {
    this.marvelHeroFormGroup = new FormGroup({
      _id: new FormControl({value: '', disabled: true}),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      idAuthor: new FormControl({value: environment.idAuthor, disabled: true}),
      createdAt: new FormControl({
        value: new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString(),
        disabled: true
      }),
      updateAt: new FormControl({
        value: new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString(),
        disabled: true
      }),
    })
  }

  onSubmit() {
    let submitMarvelHero: MarvelHero = this.marvelHeroFormGroup.getRawValue()
    delete submitMarvelHero["_id"];

    if (this.isEdit) {
      this.marvelHeroService.updateMarvelHero(this._id?.value, submitMarvelHero)
        .subscribe({
          next: (response) => {
            console.log("response", response)
            this.router.navigate(['/marvel-heroes'])
          },
          error: (err) => {
            console.log("err", err)
          }
        })
    } else {
      this.marvelHeroService.addMarvelHero(submitMarvelHero)
        .subscribe({
          next: (response) => {
            console.log("response", response)
            this.router.navigate(['/marvel-heroes'])
          },
          error: (err) => {
            console.log("err", err)
          }
        })
    }
  }

  get _id() {
    return this.marvelHeroFormGroup.get('_id')
  }

  get title() {
    return this.marvelHeroFormGroup.get('title')
  }

  get body() {
    return this.marvelHeroFormGroup.get('body')
  }

  get image() {
    return this.marvelHeroFormGroup.get('image')
  }

  get category() {
    return this.marvelHeroFormGroup.get('category')
  }

}
