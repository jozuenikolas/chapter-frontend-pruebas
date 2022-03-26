import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {MarvelHero} from "../../types/marvel-hero";
import {MarvelHeroService} from "../../services/marvel-hero.service";

@Component({
  selector: 'app-card-marvel-hero',
  templateUrl: './card-marvel-hero.component.html',
  styleUrls: ['./card-marvel-hero.component.scss']
})
export class CardMarvelHeroComponent implements OnInit {

  @Input() cardContent: MarvelHero
  @Output() emitUpdateCards: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    private router: Router,
    private marvelHeroService: MarvelHeroService
  ) {
  }

  ngOnInit(): void {
  }

  onEditClick(title: string | undefined) {
    if (title) {
      this.router.navigate([`/edit-marvel-hero/${title}`])
        .then(() => {

        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  onDeleteClick(id: string | undefined) {
    if (id) {
      this.marvelHeroService.deleteMarvelHero(id)
        .subscribe({
          next: (response) => {
            console.log("response", response)
            this.emitUpdateCards.emit(true)
          },
          error: (err) => {
            console.log("err", err)
          }
        })
    }

  }

}
